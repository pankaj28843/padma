// $Id: relationships.js,v 1.2 2005/09/25 14:52:25 vnagarjuna Exp $ -->

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

function initializeRelationships()
{
    //RTSParser inherits from Parser
    RTSParser.prototype = new Parser("");
    RTSParser.prototype.next = RTSParser_next;
    RTSParser.prototype.updateSymbolType = RTSParser_updateSymbolType;
    RTSParser.prototype.handleConsonantTermination = RTSParser_handleConsonantTermination;
    RTSParser.prototype.getNextMatch = RTSParser_getNextMatch;

    ITRANSParser.prototype = new Parser("", ITRANS);
    ITRANSParser.prototype.updateSymbolType = ITRANSParser_updateSymbolType;
    ITRANSParser.prototype.handleConsonantTermination = ITRANSParser_handleConsonantTermination;

    DynamicFontParser.prototype = new Parser("");
    DynamicFontParser.prototype.next = DynamicFontParser_next;
    DynamicFontParser.prototype.handleConsonantTermination = DynamicFontParser_handleConsonantTermination;
    DynamicFontParser.prototype.isCurrentSyllableComplete = DynamicFontParser_isCurrentSyllableComplete;

    RTSTransformer.prototype = new Transformer(Transformer.method_RTS, Transformer.method_Unicode);
    RTSTransformer.prototype.convert = RTSTransformer_convert;
    RTSTransformer.prototype.setRTSMode = RTSTransformer_setRTSMode;
    RTSTransformer.prototype.parse = RTSTransformer_parse;
}
