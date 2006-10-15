// $Id: RTSParser.js,v 1.7 2006/10/15 17:29:12 vnagarjuna Exp $ -->

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

//Parser for RTS Text - returns syllables

function RTSParser(input) {
    this.index = 0;
    this.length = input.length;
    this.text = input;
}

function RTSParser_updateSymbolType(type)
{
    if (this.state != Parser.state_CONSNT)
        return type;
    switch (type) {
        case Padma.type_accu:
            return Padma.type_gunintam;

        case Padma.type_hallu:
            return Padma.type_vattu;

        default:
            return type;
    }
}

function RTSParser_getNextMatch(length, index)
{
    var result = { key: null, value: null }, key, value;
    var remaining = length - index, maxLookupLen = remaining > RTS.maxLookupLen ? RTS.maxLookupLen : remaining;
        
    for(var i = maxLookupLen; i > 0; i--) {
        key = this.text.substring(index, index + i);
        value = RTS.lookup(key);
        if (value == null)
            continue;
        //found a match
        if (value == Padma.syllbreak || RTS.isPossibleAnusvara(key)) {
            //if there is more text then if syllable break, see if it should be converted to pollu
            //or if is a possible anusvara see if it is one of the consonants that makes the n/m an anusvara
            if (length - index - i > 0) {
                var next = this.getNextMatch(length, index + i);
                if (value == Padma.syllbreak) {
                    if (next.value == null || Padma.getType(next.value) != Padma.type_hallu)
                        value = Padma.pollu;
                }
                else if (next.value != null && RTS.isAnusvara(value, next.value)) {
                    result.key = key;
                    result.value = Padma.anusvara;
                    return result;
                }
            }
            else if (value == Padma.syllbreak)
                value = Padma.pollu;
        }
        break;
    }
    result.key = key;
    result.value = value;
    return result;
}

function RTSParser_next()
{
    var response = new Syllable(), done = false;

    var remaining = this.length - this.index;
    for(; remaining > 0; remaining = this.length - this.index) {
        if (this.cache.key == null) {
            var result = this.getNextMatch(this.length, this.index);
            this.handleInput(result.value, result.key, response);
        }
        else {
            var key = this.cache.key, value = this.cache.value;
            this.cache.key = this.cache.value = null;
            this.handleInput(value, key, response);
        }

        if (this.state == Parser.state_START)
            return response.getSyllable();
    }

    if (response.getLength() != 0) {
        this.handleConsonantTermination(response);
        return response.getSyllable();
    }
    return null;
}

function RTSParser_handleConsonantTermination(current)
{
    if (current.body == Padma.consnt_MA) {
        //alert("3: returning Anusvara");
        current.body = Padma.anusvara;
    }
    //alert("4: returning " + current + Padma.pollu);
    else current.body += Padma.pollu;
}

//This doesn't seem to work in extension mode, add any mods to relationships.js too
RTSParser.prototype = new Parser("");
RTSParser.prototype.next = RTSParser_next;
RTSParser.prototype.updateSymbolType = RTSParser_updateSymbolType;
RTSParser.prototype.handleConsonantTermination = RTSParser_handleConsonantTermination;
RTSParser.prototype.getNextMatch = RTSParser_getNextMatch;

