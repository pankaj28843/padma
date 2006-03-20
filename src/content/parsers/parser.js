// $Id: parser.js,v 1.4 2006/03/20 20:09:04 vnagarjuna Exp $ -->

//Copyright 2005 Nagarjuna Venna <vnagarjuna@yahoo.com>

/* ****** BEGIN LICENSE BLOCK ***** 
 *  This file is part of Padma.
 *
 *  Padma is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.

 *  Padma is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with Padma; if not, write to the Free Software
 *  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 *
 * ***** END LICENSE BLOCK ***** */

//Basic parser adequate for processing text encoded in Unicode, ISCII etc.
//This is the prototype for more specialized parsers
//Also includes the state machine

//Parser states
Parser.state_START  = 0;    //Syllable hunt starts from this state
Parser.state_CONSNT = 1;    //Found a consonant to start the syllable
Parser.state_PREFIX = 2;    //Found a prefix symbol
Parser.state_HALFORM = 3;   //Saw a half form

function Parser(input, encoding) {
    this.index = 0;
    this.length = input.length;
    this.text = input;
    this.state = Parser.state_START;
    this.cache = { key: null, value: null };
    this.encoding = encoding;
}

Parser.prototype.more = function ()
{
    return this.index < this.length;
}

Parser.prototype.next = function ()
{
    var response = new Syllable();

    var remaining = this.length - this.index;
    for(; remaining > 0; remaining = this.length - this.index) {
        var key = null, value = null;

        if (this.cache.key == null) {
            var maxLookupLen = remaining > this.encoding.maxLookupLen ? this.encoding.maxLookupLen : remaining;
            
            for(var i = maxLookupLen; i > 0; i--) {
                key = this.text.substring(this.index, this.index + i);
                //alert("looking up " + key);
                value = this.encoding.lookup(key);
                if (value != null) {
                    //alert("found match " + value);
                    break;
                }
            }
        }
        else {
            value = this.cache.value;
            key = this.cache.key;
            this.cache.key = this.cache.value = null;
        }

        this.handleInput(value, key, response);
        if (this.state == Parser.state_START)
            return response.getSyllable();
    }

    if (this.state == Parser.state_CONSNT)
        this.handleConsonantTermination(response);
    return response.getSyllable();
}

//Change symbol type based on state
//No need to change symbol type by default
Parser.prototype.updateSymbolType = function (type)
{
    return type;
}

//no op
Parser.prototype.handleConsonantTermination = function (current)
{
}

Parser.prototype.isCurrentSyllableComplete = function (type)
{
    return type == Padma.type_accu_mod || type == Padma.type_gunintam || type == Padma.type_hallu_mod;
}

//State Machine
//The parser has just determined that value is a match for key
//value is built into current 
Parser.prototype.handleInput = function (value, key, current)
{
    var old_type = Padma.type_unknown, symbol = value;
    if (symbol != null)
        old_type = Padma.getType(symbol.charAt(0));
    else symbol = key;

    var prefix = false, suffix = false;
    if (arguments.length >= 4)
        prefix = arguments[3];
    if (arguments.length >= 5)
        suffix = arguments[4];

    //alert("state = " + this.state + ", type = " + old_type + ", prefix = " + prefix + ", suffix = " + suffix);
        
    var type = this.updateSymbolType(old_type);
    if (type != old_type) {
        symbol = Padma.dependentForm(symbol);
        //alert("new type = " + type);
    }
    
    switch (this.state) {
        case Parser.state_START:
        case Parser.state_PREFIX: {
            this.index += key.length;
            current.update(symbol, type, prefix, suffix);
            if (prefix == true)
                this.state = Parser.state_PREFIX;
            else {
                if (type == Padma.type_accu || type == Padma.type_digit || type == Padma.type_unknown) {
                    //Current syllable is complete
                    this.state = Parser.state_START;
                    //alert("1: syllable complete");
                }
                else if (type == Padma.type_hallu) {
                    //Wait for more
                    //alert("3: consonant start");
                    this.state = Parser.state_CONSNT;
                }
                else if (type == Padma.type_half_form) {
                    //alert("6: Half form");
                    this.state = Parser.state_HALFORM;
                }
                else {
                    //gunintalu, vattulu and vowel/consonant modifiers should not appear in isolation, accept it silently
                    //alert("2: bad input");
                    this.state = Parser.state_START;
                }
            }
            return;
        }
        
        case Parser.state_CONSNT: 
        case Parser.state_HALFORM: {
            var nextTypes = Padma.type_accu | Padma.type_digit | Padma.type_unknown;
            if (this.state == Parser.state_CONSNT)
                nextTypes |= Padma.type_hallu | Padma.type_half_form;

            if (((type & nextTypes) || prefix) && !suffix) {
                //next syllable has started, process it again next time around.
                this.cache.key = key;
                this.cache.value = value;
                this.state = Parser.state_START;
                //alert("4: cache for next syllable");
                this.handleConsonantTermination(current);
                return;
            }

            if (this.state == Parser.state_HALFORM && type == Padma.type_hallu)
                this.state = Parser.state_CONSNT;
            this.index += key.length;
            if (this.isCurrentSyllableComplete(type)) {
                //Syllable is complete
                this.state = Parser.state_START;
                //alert("5: syllable complete");
            }
            current.update(symbol, type, prefix, suffix);
            return;
        }
    }
    //should never reach here
    //Figure out an assertion
    return;
}
