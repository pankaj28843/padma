// $Id: Kumudam.js,v 1.2 2005/10/25 15:58:19 vnagarjuna Exp $ -->

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

//Kumudam Tamil

function Kumudam()
{
}

//The interface every dynamic font encoding should implement
Kumudam.maxLookupLen = Vikatan.maxLookupLen;
Kumudam.fontFace     = "Kumudam";
Kumudam.displayName  = "Kumudam";
Kumudam.script       = Padma.script_TAMIL;

Kumudam.lookup = function (str) 
{
    return Vikatan.lookup(str);
}

Kumudam.isPrefixSymbol = function (str)
{
    return Vikatan.isPrefixSymbol(str);
}

Kumudam.isOverloaded = function (str)
{
    return Vikatan.isOverloaded(str);
}

Kumudam.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return Vikatan.handleTwoPartVowelSigns(sign1, sign2);
}

Kumudam.isRedundant = function (str)
{
    return Vikatan.isRedundant(str);
}

Kumudam.preprocessMessage = function (input)
{
    return Vikatan.preprocessMessage(input);
}
