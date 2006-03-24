//$Id: Vakil.js,v 1.3 2006/03/24 17:28:18 vnagarjuna Exp $

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


//Vakil
function Vakil01()
{
}

Vakil01.maxLookupLen = Shusha.maxLookupLen;
Vakil01.fontFace     = "Vakil_01";
Vakil01.displayName  = "Vakil";
Vakil01.script       = Padma.script_GUJARATI;
Vakil01.hasSuffixes  = Shusha.hasSuffixes;

Vakil01.lookup = function (str) 
{
    return Vakil.toPadma[str];
}

Vakil01.isPrefixSymbol = function (str)
{
    return Shusha.isPrefixSymbol(str);
}

Vakil01.isSuffixSymbol = function (str)
{
    return Shusha.isSuffixSymbol(str);
}

Vakil01.isOverloaded = function (str)
{
    return Shusha.isOverloaded(str);
}

Vakil01.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return Shusha.handleTwoPartVowelSigns(sign1, sign2);
}

Vakil01.isRedundant = function (str)
{
    return Shusha.isRedundant(str);
}

function Vakil02()
{
}

Vakil02.maxLookupLen = Vakil.maxLookupLen;
Vakil02.fontFace     = "Vakil_02";
Vakil02.displayName  = "Vakil";
Vakil02.script       = Padma.script_GUJARATI;
Vakil02.hasSuffixes  = Vakil.hasSuffixes;

Vakil02.lookup = function (str) 
{
    return Vakil01.lookup(str);
}

Vakil02.isPrefixSymbol = function (str)
{
    return Vakil01.isPrefixSymbol(str);
}

Vakil02.isSuffixSymbol = function (str)
{
    return Vakil01.isSuffixSymbol(str);
}

Vakil02.isOverloaded = function (str)
{
    return Vakil01.isOverloaded(str);
}

Vakil02.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return Vakil01.handleTwoPartVowelSigns(sign1, sign2);
}

Vakil02.isRedundant = function (str)
{
    return Vakil01.isRedundant(str);
}

function Vakil05()
{
}

Vakil05.maxLookupLen = Vakil.maxLookupLen;
Vakil05.fontFace     = "Vakil_05";
Vakil05.displayName  = "Vakil";
Vakil05.script       = Padma.script_GUJARATI;
Vakil05.hasSuffixes  = Vakil.hasSuffixes;

Vakil05.lookup = function (str) 
{
    return Vakil01.lookup(str);
}

Vakil05.isPrefixSymbol = function (str)
{
    return Vakil01.isPrefixSymbol(str);
}

Vakil05.isSuffixSymbol = function (str)
{
    return Vakil01.isSuffixSymbol(str);
}

Vakil05.isOverloaded = function (str)
{
    return Vakil01.isOverloaded(str);
}

Vakil05.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return Vakil01.handleTwoPartVowelSigns(sign1, sign2);
}

Vakil05.isRedundant = function (str)
{
    return Vakil01.isRedundant(str);
}

//Generate the slightly different lookup tables from Shusha
function Vakil()
{
}

Vakil.initialize = function()
{
    for (var name in Shusha.toPadma)
        Vakil.toPadma[name] = Shusha.toPadma[name];

    //overwrite vakil mods
    Vakil.toPadma[Vakil.PERIOD] = '.';
    Vakil.toPadma[Vakil.consnt_JA] = Padma.consnt_JA;
    Vakil.toPadma[Vakil.combo_JII] = Padma.consnt_JA + Padma.vowelsn_II;
}

//Gujarati digits
Vakil.digit_ZERO     = "\u0030";
Vakil.digit_ONE      = "\u0031";
Vakil.digit_TWO      = "\u0032";
Vakil.digit_THREE    = "\u0033";
Vakil.digit_FOUR     = "\u0034";
Vakil.digit_FIVE     = "\u0035";
Vakil.digit_SIX      = "\u0036";
Vakil.digit_SEVEN    = "\u0037";
Vakil.digit_EIGHT    = "\u0038";
Vakil.digit_NINE     = "\u0039";

Vakil.PERIOD         = "\u002E";
Vakil.consnt_JA      = "\u006A";
Vakil.combo_JII      = "\u0178";

Vakil.toPadma = new Object();

Vakil.toPadma[Vakil.digit_ZERO]    = Padma.digit_ZERO;
Vakil.toPadma[Vakil.digit_ONE]     = Padma.digit_ONE;
Vakil.toPadma[Vakil.digit_TWO]     = Padma.digit_TWO;
Vakil.toPadma[Vakil.digit_THREE]   = Padma.digit_THREE;
Vakil.toPadma[Vakil.digit_FOUR]    = Padma.digit_FOUR;
Vakil.toPadma[Vakil.digit_FIVE]    = Padma.digit_FIVE;
Vakil.toPadma[Vakil.digit_SIX]     = Padma.digit_SIX;
Vakil.toPadma[Vakil.digit_SEVEN]   = Padma.digit_SEVEN;
Vakil.toPadma[Vakil.digit_EIGHT]   = Padma.digit_EIGHT;
Vakil.toPadma[Vakil.digit_NINE]    = Padma.digit_NINE;
