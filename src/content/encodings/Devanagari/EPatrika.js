// $Id: EPatrika.js,v 1.1 2005/12/05 18:09:07 vnagarjuna Exp $ -->

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

function EPatrika()
{
}

//The interface every dynamic font encoding should implement
EPatrika.maxLookupLen = BEJA.maxLookupLen;
EPatrika.fontFace     = "ePatrika";
EPatrika.displayName  = "E-Patrika";
EPatrika.script       = Padma.script_DEVANAGARI;
EPatrika.hasSuffixes  = true;

EPatrika.lookup = function (str) 
{
    return BEJA.toPadma_BE[str];
}

EPatrika.isPrefixSymbol = function (str)
{
    return BEJA.isPrefixSymbol(str);
}

EPatrika.isSuffixSymbol = function (str)
{
    return BEJA.isSuffixSymbol(str);
}

EPatrika.isOverloaded = function (str)
{
    return BEJA.isOverloaded(str);
}

EPatrika.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return BEJA.handleTwoPartVowelSigns(sign1, sign2);
}

EPatrika.isRedundant = function (str)
{
    return BEJA.isRedundant(str);
}
