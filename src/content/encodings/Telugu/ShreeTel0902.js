// $Id: ShreeTel0902.js,v 1.3 2005/10/25 15:58:20 vnagarjuna Exp $ -->

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

//SHREE-TEL-0902 Telugu

function Shree_Tel_0902()
{
}

//The interface every dynamic font encoding should implement
Shree_Tel_0902.maxLookupLen = Shree_Tel_0900.maxLookupLen;
Shree_Tel_0902.fontFace     = "Shree-Tel-0902";
Shree_Tel_0902.displayName  = "Shree Tel 0902";
Shree_Tel_0902.script       = Padma.script_TELUGU;

Shree_Tel_0902.lookup = function (str) 
{
    return Shree_Tel_0900.lookup(str);
}

Shree_Tel_0902.isPrefixSymbol = function (str)
{
    return Shree_Tel_0900.isPrefixSymbol(str);
}

Shree_Tel_0902.isOverloaded = function (str)
{
    return Shree_Tel_0900.isOverloaded(str);
}

Shree_Tel_0902.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return Shree_Tel_0900.handleTwoPartVowelSigns(sign1, sign2);
}

Shree_Tel_0902.isRedundant = function (str)
{
    return Shree_Tel_0900.isRedundant(str);
}
