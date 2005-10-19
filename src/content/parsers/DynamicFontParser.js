// $Id: DynamicFontParser.js,v 1.3 2005/10/19 23:12:29 vnagarjuna Exp $ -->

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

//Parser for text encoded using dynamic fonts
//1. Preprocess message - for most fonts this is just removing all unnecessary symbols
//2. Put prefix symbols in the right place 
//3. Break up combo symbols if necessary
//Get this right first, make it fast later

function DynamicFontParser(input, encoding) {
    function removeRedundantSymbols(input, encoding)
    {
        var output = "";
        //1.
        for(var i = 0; i < input.length; ++i) {
            var cur = input.charAt(i);
            if (!encoding.isRedundant(cur))
                output += cur;
        }
        return output;
    }

    this.index = 0;
    //An encoding should implement either isRedundant or preprocessMessage
    if (encoding.preprocessMessage != undefined)
        this.text = encoding.preprocessMessage(input);
    else this.text = removeRedundantSymbols(input, encoding);
    this.length = this.text.length;
    this.encoding = encoding;
    if (this.encoding.hasSuffixes == undefined || this.encoding.hasSuffixes == false)
        this.hasSuffixes = false;
    else this.hasSuffixes = true;
}

function DynamicFontParser_next()
{
    var response = new Syllable();

    for(var remaining = this.length - this.index; remaining > 0; remaining = this.length - this.index) {
        //alert('index = ' + this.index + ', remaining = ' + remaining);
        var key = null, value = null;

        if (this.cache.key == null) {
            var maxLookupLen = remaining > this.encoding.maxLookupLen ? this.encoding.maxLookupLen : remaining;
            for(var i = 1; i <= maxLookupLen; i++) {
                var lookup_key = this.text.substring(this.index, this.index + i);
                //alert("looking up key " + lookup_key + ", len = " + i);
                var lookup_value = this.encoding.lookup(lookup_key);
                if (lookup_value == null) {
                    //alert("No match");
                    if (key == null)
                        key = lookup_key;
                }
                else {
                    key = lookup_key;
                    value = lookup_value;
                    //alert("match for key " + key + " , match = " + value);
                }
                if (!this.encoding.isOverloaded(lookup_key))
                    break;
                //alert("key " + lookup_key + " is overloaded");
            }
        }
        else {
            key = this.cache.key;
            value = this.cache.value;
            this.cache.key = this.cache.value = null;
        }

        var suffix = false;
        if (this.hasSuffixes)
            suffix = this.encoding.isSuffixSymbol(key);
        this.handleInput(value, key, response, this.encoding.isPrefixSymbol(key), suffix);
        //alert("new state = " + this.state);
        if (this.state == Parser.state_START)
            return response.getSyllable();
    }

    //always return what we have even if it does not make sense
    if (response.getLength() != 0) {
        this.handleConsonantTermination(response);
        return response.getSyllable();
    }
    return null;
}

function DynamicFontParser_handleConsonantTermination(current)
{
    //3.
    current.foldGunintam();
    current.foldConsonantModifiers();

    if (current.gunintam.length == 2)
        current.gunintam = this.encoding.handleTwoPartVowelSigns(current.gunintam.charAt(0), current.gunintam.charAt(1));
}

//For dynamic fonts, we can recognize that the current syllable is complete only when the next one starts.
function DynamicFontParser_isCurrentSyllableComplete(type)
{
    return false;
}

//This doesn't seem to work in extension mode, add any mods to relationships.js too
DynamicFontParser.prototype = new Parser("");
DynamicFontParser.prototype.next = DynamicFontParser_next;
DynamicFontParser.prototype.handleConsonantTermination = DynamicFontParser_handleConsonantTermination;
DynamicFontParser.prototype.isCurrentSyllableComplete = DynamicFontParser_isCurrentSyllableComplete;

