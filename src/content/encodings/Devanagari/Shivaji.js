//$Id: Shivaji.js,v 1.3 2006/03/24 17:27:57 vnagarjuna Exp $

/* Copyright 2006 Nagarjuna Venna <vnagarjuna@yahoo.com> */

/* ***** BEGIN LICENSE BLOCK ***** 
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


//Shivaji
function Shivaji01()
{
}

Shivaji01.maxLookupLen = Shusha.maxLookupLen;
Shivaji01.fontFace     = "Shivaji01";
Shivaji01.displayName  = "Shivaji01";
Shivaji01.script       = Shusha.script;
Shivaji01.hasSuffixes  = Shusha.hasSuffixes;

Shivaji01.lookup = function (str) 
{
    return Shivaji.toPadma[str];
}

Shivaji01.isPrefixSymbol = function (str)
{
    return Shusha.isPrefixSymbol(str);
}

Shivaji01.isSuffixSymbol = function (str)
{
    return Shusha.isSuffixSymbol(str);
}

Shivaji01.isOverloaded = function (str)
{
    return Shusha.isOverloaded(str);
}

Shivaji01.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return Shusha.handleTwoPartVowelSigns(sign1, sign2);
}

Shivaji01.isRedundant = function (str)
{
    return Shusha.isRedundant(str);
}

function Shivaji02()
{
}

Shivaji02.maxLookupLen = Shivaji01.maxLookupLen;
Shivaji02.fontFace     = "Shivaji02";
Shivaji02.displayName  = "Shivaji02";
Shivaji02.script       = Shivaji01.script;
Shivaji02.hasSuffixes  = Shivaji01.hasSuffixes;

Shivaji02.lookup = function (str) 
{
    return Shivaji01.lookup(str);
}

Shivaji02.isPrefixSymbol = function (str)
{
    return Shivaji01.isPrefixSymbol(str);
}

Shivaji02.isSuffixSymbol = function (str)
{
    return Shivaji01.isSuffixSymbol(str);
}

Shivaji02.isOverloaded = function (str)
{
    return Shivaji01.isOverloaded(str);
}

Shivaji02.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return Shivaji01.handleTwoPartVowelSigns(sign1, sign2);
}

Shivaji02.isRedundant = function (str)
{
    return Shivaji01.isRedundant(str);
}

function Shivaji05()
{
}

Shivaji05.maxLookupLen = Shivaji01.maxLookupLen;
Shivaji05.fontFace     = "Shivaji05";
Shivaji05.displayName  = "Shivaji05";
Shivaji05.script       = Shivaji01.script;
Shivaji05.hasSuffixes  = Shivaji01.hasSuffixes;

Shivaji05.lookup = function (str) 
{
    return Shivaji01.lookup(str);
}

Shivaji05.isPrefixSymbol = function (str)
{
    return Shivaji01.isPrefixSymbol(str);
}

Shivaji05.isSuffixSymbol = function (str)
{
    return Shivaji01.isSuffixSymbol(str);
}

Shivaji05.isOverloaded = function (str)
{
    return Shivaji01.isOverloaded(str);
}

Shivaji05.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return Shivaji01.handleTwoPartVowelSigns(sign1, sign2);
}

Shivaji05.isRedundant = function (str)
{
    return Shivaji01.isRedundant(str);
}

//Generate the slightly different lookup tables from Shusha
function Shivaji()
{
}

Shivaji.initialize = function()
{
    for (var name in Shusha.toPadma)
        Shivaji.toPadma[name] = Shusha.toPadma[name];
}

//Devanagari digits
Shivaji.digit_ZERO     = "\u0030";
Shivaji.digit_ONE      = "\u0031";
Shivaji.digit_TWO      = "\u0032";
Shivaji.digit_THREE    = "\u0033";
Shivaji.digit_FOUR     = "\u0034";
Shivaji.digit_FIVE     = "\u0035";
Shivaji.digit_SIX      = "\u0036";
Shivaji.digit_SEVEN    = "\u0037";
Shivaji.digit_EIGHT    = "\u0038";
Shivaji.digit_NINE     = "\u0039";

Shivaji.halffm_PA      = "\u00E1";

Shivaji.toPadma = new Object();

Shivaji.toPadma[Shivaji.digit_ZERO]    = Padma.digit_ZERO;
Shivaji.toPadma[Shivaji.digit_ONE]     = Padma.digit_ONE;
Shivaji.toPadma[Shivaji.digit_TWO]     = Padma.digit_TWO;
Shivaji.toPadma[Shivaji.digit_THREE]   = Padma.digit_THREE;
Shivaji.toPadma[Shivaji.digit_FOUR]    = Padma.digit_FOUR;
Shivaji.toPadma[Shivaji.digit_FIVE]    = Padma.digit_FIVE;
Shivaji.toPadma[Shivaji.digit_SIX]     = Padma.digit_SIX;
Shivaji.toPadma[Shivaji.digit_SEVEN]   = Padma.digit_SEVEN;
Shivaji.toPadma[Shivaji.digit_EIGHT]   = Padma.digit_EIGHT;
Shivaji.toPadma[Shivaji.digit_NINE]    = Padma.digit_NINE;

Shivaji.toPadma[Shivaji.halffm_PA]     = Padma.halffm_PA;
