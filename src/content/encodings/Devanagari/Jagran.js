// $Id: Jagran.js,v 1.1 2005/12/05 18:09:07 vnagarjuna Exp $ -->

//Copyright 2005 Nagarjuna Venna <vnagarjuna@yahoo.com>

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

function Jagran()
{
}

//The interface every dynamic font encoding should implement
Jagran.maxLookupLen = BEJA.maxLookupLen;
Jagran.fontFace     = "Jagran";
Jagran.displayName  = Jagran.fontFace;
Jagran.script       = Padma.script_DEVANAGARI;
Jagran.hasSuffixes  = true;

Jagran.lookup = function (str) 
{
    return BEJA.toPadma_JA[str];
}

Jagran.isPrefixSymbol = function (str)
{
    return BEJA.isPrefixSymbol(str);
}

Jagran.isSuffixSymbol = function (str)
{
    return BEJA.isSuffixSymbol(str);
}

Jagran.isOverloaded = function (str)
{
    return BEJA.overloadList_JA[str] != null;
}

Jagran.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return BEJA.handleTwoPartVowelSigns(sign1, sign2);
}

Jagran.isRedundant = function (str)
{
    return BEJA.isRedundant(str);
}
