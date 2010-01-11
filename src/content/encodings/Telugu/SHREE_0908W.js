//$Id: SHREE_0908W.js,v 1.1 2010/01/11 13:57:59 harshita Exp $

//Copyright 2009-2010 HarshitaVani <harshita@atc.tcs.com>

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

//SHREE-0908W Telugu

//Slightly different lookup tables from Shree_Tel_0900
//Differs -- 003C,0053,005D,006C,00FC,00FD,00FE,201C,201D,2021,00FF,00AD,00E6
//todo -- 00AC,00CA,
function SHREE_0908W()
{
}

SHREE_0908W.initialize = function()
{
    for (var name in Shree_Tel_0900.redundantList){
         if(name == Shree_Tel_0900.misc_UNKNOWN_4){//as it is JUU here
         continue; 
         }
        SHREE_0908W.redundantList[name] = Shree_Tel_0900.redundantList[name];
    }
    
    for (name in Shree_Tel_0900.toPadma)
        SHREE_0908W.toPadma[name] = Shree_Tel_0900.toPadma[name];
    
   
    for (name in Shree_Tel_0900.overloadList)
        SHREE_0908W.overloadList[name] = Shree_Tel_0900.overloadList[name];
    
    for (name in Shree_Tel_0900.prefixList)
        SHREE_0908W.prefixList[name] = Shree_Tel_0900.prefixList[name];

    //overwrite 
    SHREE_0908W.toPadma[SHREE_0908W.vattu_RRA_2] = Padma.vattu_RRA;
    SHREE_0908W.toPadma[SHREE_0908W.vattu_NGA]   = Padma.vattu_NGA;
    SHREE_0908W.toPadma[SHREE_0908W.combo_KHI]   = Padma.consnt_KHA + Padma.vowelsn_I;
    SHREE_0908W.toPadma[SHREE_0908W.combo_JUU]   = Padma.consnt_JA + Padma.vowelsn_UU;
    SHREE_0908W.toPadma[SHREE_0908W.vattu_SSMA]  = Padma.vattu_SSA + Padma.vattu_MA;
    SHREE_0908W.toPadma[SHREE_0908W.candrabindu] = Padma.candrabindu;
    SHREE_0908W.toPadma[SHREE_0908W.combo_YU]    = Padma.consnt_YA + Padma.vowelsn_U;
    SHREE_0908W.toPadma[SHREE_0908W.combo_YUU]   = Padma.consnt_YA + Padma.vowelsn_UU;
    SHREE_0908W.toPadma[SHREE_0908W.combo_YI_2]  = Padma.consnt_YA + Padma.vowelsn_I;
    SHREE_0908W.toPadma[SHREE_0908W.combo_YII_2] = Padma.consnt_YA + Padma.vowelsn_II;
    SHREE_0908W.toPadma[SHREE_0908W.combo_YO_2]  = Padma.consnt_YA + Padma.vowelsn_O;
    SHREE_0908W.toPadma[SHREE_0908W.combo_MO_2]  = Padma.consnt_MA + Padma.vowelsn_O;
    SHREE_0908W.toPadma[SHREE_0908W.combo_MU]    = Padma.consnt_MA + Padma.vowelsn_U;
    SHREE_0908W.toPadma[SHREE_0908W.combo_MUU]   = Padma.consnt_MA + Padma.vowelsn_UU;
    SHREE_0908W.toPadma[SHREE_0908W.combo_JHPOLLU] = Padma.consnt_JHA + Padma.syllbreak;
    SHREE_0908W.toPadma[SHREE_0908W.combo_GHU]   = Padma.consnt_GHA + Padma.vowelsn_U;

    SHREE_0908W.redundantList[SHREE_0908W.misc_UNKNOWN_7] = true;
    SHREE_0908W.redundantList[SHREE_0908W.misc_UNKNOWN_8] = true;
    SHREE_0908W.redundantList[SHREE_0908W.misc_UNKNOWN_9] = true;
    SHREE_0908W.redundantList[SHREE_0908W.misc_UNKNOWN_10]= true;
    SHREE_0908W.redundantList[SHREE_0908W.misc_UNKNOWN_11]= true;
    SHREE_0908W.redundantList[SHREE_0908W.misc_UNKNOWN_12]= true;
    SHREE_0908W.redundantList[SHREE_0908W.misc_TICK_4]    = true;
    SHREE_0908W.redundantList[SHREE_0908W.misc_TICK_5]    = true;
    SHREE_0908W.redundantList[SHREE_0908W.misc_TICK_6]    = true;

    SHREE_0908W.overloadList["\u00C6"] = true;
    SHREE_0908W.overloadList["\u00C4\u00F1"] = true;
    SHREE_0908W.overloadList["\u00C6\u0160"] = true;
    SHREE_0908W.overloadList["\u00C6\u0160\u006E"] = true;

    SHREE_0908W.prefixList[Shree_Tel_0900.vowelsn_AILEN_1]    = true;
    SHREE_0908W.prefixList[Shree_Tel_0900.vattu_RA_1] = true;
}

SHREE_0908W.redundantList = new Object();
SHREE_0908W.toPadma = new Object();
SHREE_0908W.overloadList = new Object();
SHREE_0908W.prefixList = new Object();

SHREE_0908W.vattu_RRA_2    = "\u003C";
SHREE_0908W.misc_UNKNOWN_7 = "\u0053";
SHREE_0908W.misc_UNKNOWN_8 = "\u006C";
SHREE_0908W.misc_UNKNOWN_9 = "\u2021";
SHREE_0908W.misc_UNKNOWN_10= "\u00AD";
SHREE_0908W.misc_UNKNOWN_11= "\u00E6";
SHREE_0908W.misc_UNKNOWN_12= "\u00A0";
SHREE_0908W.misc_TICK_4    = "\u005D";
SHREE_0908W.misc_TICK_5    = "\u00B6";
SHREE_0908W.misc_TICK_6    = "\u00FD";
SHREE_0908W.combo_KHI      = "\u00FC";
SHREE_0908W.combo_JUU      = "\u00FE";
SHREE_0908W.vattu_SSMA     = "\u00FF";
SHREE_0908W.candrabindu    = "\u201C";
SHREE_0908W.vattu_NGA      = "\u201D";
SHREE_0908W.combo_YU       = "\u00C4\u00AC";
SHREE_0908W.combo_YUU      = "\u00C4\u00CA";
SHREE_0908W.combo_YI_2     = "\u00C6\u00AC";
SHREE_0908W.combo_YII_2    = "\u00C6\u00CA";
SHREE_0908W.combo_YO_2     = "\u00C4\u00F1\u00AC";
SHREE_0908W.combo_MO_2     = "\u00D0\u00F0\u00AC";
SHREE_0908W.combo_MU       = "\u00D0\u00AC";
SHREE_0908W.combo_MUU      = "\u00D0\u00CA";
SHREE_0908W.combo_JHPOLLU  = "\u00C6\u0160\u006E\u0024";
SHREE_0908W.combo_GHU      = "\u0153\u00AC";


//The interface every dynamic font encoding should implement
SHREE_0908W.maxLookupLen = Shree_Tel_0900.maxLookupLen;
SHREE_0908W.fontFace     = "SHREE-0908W";
SHREE_0908W.displayName  = "SHREE-0908W";
SHREE_0908W.script       = Padma.script_TELUGU;

SHREE_0908W.lookup = function (str) 
{
    return SHREE_0908W.toPadma[str];
}

SHREE_0908W.isPrefixSymbol = function (str)
{
    return SHREE_0908W.prefixList[str];
}

SHREE_0908W.isOverloaded = function (str)
{
    return SHREE_0908W.overloadList[str];
}

SHREE_0908W.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return Shree_Tel_0900.handleTwoPartVowelSigns(sign1, sign2);
}

SHREE_0908W.isRedundant = function (str)
{
    return SHREE_0908W.redundantList[str];
}
