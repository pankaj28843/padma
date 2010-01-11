// $Id: TamLfsKamban.js,v 1.1 2010/01/11 14:17:27 harshita Exp $

//Copyright 2009-2010  HarshitaVani <harshita@atc.tcs.com> 

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

//TAM_LFS_Kamban Tamil - an implementation of TAM encoding standard

function TAM_LFS_Kamban()
{
}

//The interface every dynamic font encoding should implement
TAM_LFS_Kamban.maxLookupLen = TAM.maxLookupLen;
TAM_LFS_Kamban.fontFace     = "TAM-LFS-Kamban";
TAM_LFS_Kamban.displayName  = "TAM-LFS-Kamban";
TAM_LFS_Kamban.script       = Padma.script_TAMIL;

TAM_LFS_Kamban.lookup = function (str) 
{
    return TAM.lookup(str);
}

TAM_LFS_Kamban.isPrefixSymbol = function (str)
{
    return TAM.isPrefixSymbol(str);
}

TAM_LFS_Kamban.isOverloaded = function (str)
{
    return TAM.isOverloaded(str);
}

TAM_LFS_Kamban.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return TAM.handleTwoPartVowelSigns(sign1, sign2);
}

TAM_LFS_Kamban.isRedundant = function (str)
{
    return TAM.isRedundant(str);
}

TAM_LFS_Kamban.preprocessMessage = function (input)
{
    return TAM.preprocessMessage(input);
}
