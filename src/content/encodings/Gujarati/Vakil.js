//$Id: Vakil.js,v 1.2 2006/03/20 20:11:52 vnagarjuna Exp $

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
function Vakil()
{
}

Vakil.maxLookupLen = Shusha.maxLookupLen;
Vakil.fontFace     = "Vakil_01";
Vakil.displayName  = "Vakil";
Vakil.script       = Padma.script_GUJARATI;
Vakil.hasSuffixes  = Shusha.hasSuffixes;

Vakil.lookup = function (str) 
{
    return Shusha.lookup(str);
}

Vakil.isPrefixSymbol = function (str)
{
    return Shusha.isPrefixSymbol(str);
}

Vakil.isSuffixSymbol = function (str)
{
    return Shusha.isSuffixSymbol(str);
}

Vakil.isOverloaded = function (str)
{
    return Shusha.isOverloaded(str);
}

Vakil.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return Shusha.handleTwoPartVowelSigns(sign1, sign2);
}

Vakil.isRedundant = function (str)
{
    return Shusha.isRedundant(str);
}

