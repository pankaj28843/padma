// $Id: ITRANSParser.js,v 1.2 2005/09/25 14:52:27 vnagarjuna Exp $ -->

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

//Parser for ITRANS Text - returns syllables

function ITRANSParser(input) {
    this.index = 0;
    this.length = input.length;
    this.text = input;
}

function ITRANSParser_updateSymbolType(type)
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

//Not specified anywhere, seems like the right thing to do
function ITRANSParser_handleConsonantTermination(current)
{
    current.body += Padma.pollu;
}

//This doesn't seem to work in extension mode, add any mods to relationships.js too
ITRANSParser.prototype = new Parser("", ITRANS);
ITRANSParser.prototype.updateSymbolType = ITRANSParser_updateSymbolType;
ITRANSParser.prototype.handleConsonantTermination = ITRANSParser_handleConsonantTermination;

