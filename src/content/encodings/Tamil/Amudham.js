// $Id: Amudham.js,v 1.1 2008/06/16 17:19:07 vnagarjuna Exp $ -->

//Copyright 2007-2008 Vishnu Fafat <vnf29071989@gmail.com>
//Copyright 2007-2008 Harshita Vani <harshita@atc.tcs.com>
//Copyright 2008 Nagarjuna Venna <vnagarjuna@yahoo.com>

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

function Amudham()
{
}

//The interface every dynamic font encoding should implement
Amudham.maxLookupLen = 3;
Amudham.fontFace     = "Amudham";
Amudham.displayName  = "Amudham";
Amudham.script       = Padma.script_TAMIL;

Amudham.lookup = function (str) 
{
    return Amudham.toPadma[str];
}

Amudham.isPrefixSymbol = function (str)
{
    return Amudham.prefixList[str] != null;
}

Amudham.isOverloaded = function (str)
{
    return Amudham.overloadList[str] != null;
}

Amudham.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if (sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_AA)
        return Padma.vowelsn_O;
    if (sign2 == Padma.vowelsn_EE && sign1 == Padma.vowelsn_AA)
        return Padma.vowelsn_OO;
    return sign1 + sign2;    
}

Amudham.isRedundant = function (str)
{
    return Amudham.redundantList[str] != null;
}

//Implementation details start here

//Specials
Amudham.visarga        = "\u0060";  //aytham
Amudham.virama_1       = "\u003A";
Amudham.virama_2       = "\u003B";
Amudham.virama_3       = "\u0040";


//Vowels
Amudham.vowel_A        = "\u006D";
Amudham.vowel_AA       = "\u004D";
Amudham.vowel_I        = "\u002C";
Amudham.vowel_II       = "\u003C";
Amudham.vowel_U        = "\u0063";
Amudham.vowel_UU       = "\u0043";
Amudham.vowel_E        = "\u0076";
Amudham.vowel_EE       = "\u0056";
Amudham.vowel_AI       = "\u0049";
Amudham.vowel_O        = "\u0078";
Amudham.vowel_OO       = "\u0058";
Amudham.vowel_AU       = "\u0078\u0073";

//Consonants
Amudham.consnt_KA      = "\u0066";
Amudham.consnt_NGA     = "\u0027";

Amudham.consnt_CA      = "\u0072";
Amudham.consnt_JA      = "\u0024";
Amudham.consnt_NYA     = "\u0022";

Amudham.consnt_TTA     = "\u006C";
Amudham.consnt_NNA     = "\u007A";

Amudham.consnt_TA      = "\u006A";
Amudham.consnt_NA      = "\u0065";
Amudham.consnt_NNNA    = "\u0064";

Amudham.consnt_PA      = "\u0067";
Amudham.consnt_MA      = "\u006B";

Amudham.consnt_YA      = "\u0061";
Amudham.consnt_RA      = "\u0075";
Amudham.consnt_LA      = "\u0079";
Amudham.consnt_VA      = "\u0074";
Amudham.consnt_SSA     = "\u0023";
Amudham.consnt_SA      = "\u0021";
Amudham.consnt_HA      = "\u0051";
Amudham.consnt_LLA     = "\u0073";
Amudham.consnt_ZHA     = "\u0048";
Amudham.consnt_RRA     = "\u0077";
Amudham.conjct_KSH     = "\u0026";
Amudham.conjct_SRII    = "\u007C";

//Gunintamulu
Amudham.vowelsn_AA     = "\u0068";
Amudham.vowelsn_I      = "\u0070";
Amudham.vowelsn_II     = "\u0050";
Amudham.vowelsn_U_1    = "\u0025";	
Amudham.vowelsn_U_2    = "\u005B";	
Amudham.vowelsn_UU_1   = "\u005E";
Amudham.vowelsn_UU_2   = "\u007B";
Amudham.vowelsn_UU_3   = "\u007D";
Amudham.vowelsn_E      = "\u0062";
Amudham.vowelsn_EE     = "\u006E";
Amudham.vowelsn_AI     = "\u0069";
Amudham.vowelsn_AI_1   = "\u005D";
Amudham.combo_NNAA     = "\u005A";
Amudham.combo_NNNAA    = "\u0042";
Amudham.combo_RRAA     = "\u0041";

//Amudham uses the same symbol for generating vowelsn_AU and consnt_LLA. This is a work around
Amudham.combo_KAU      = "\u0062\u0066\u0073";
Amudham.combo_NGAU     = "\u0062\u0027\u0073";
Amudham.combo_CAU      = "\u0062\u0072\u0073";
Amudham.combo_JAU      = "\u0062\u0024\u0073";
Amudham.combo_NYAU     = "\u0062\u0022\u0073";
Amudham.combo_TTAU     = "\u0062\u006C\u0073";
Amudham.combo_NNAU     = "\u0062\u007A\u0073";
Amudham.combo_TAU      = "\u0062\u006A\u0073";
Amudham.combo_NAU      = "\u0062\u0065\u0073";
Amudham.combo_NNNAU    = "\u0062\u0064\u0073";
Amudham.combo_PAU      = "\u0062\u0067\u0073";
Amudham.combo_MAU      = "\u0062\u006B\u0073";
Amudham.combo_YAU      = "\u0062\u0061\u0073";
Amudham.combo_RAU      = "\u0062\u0075\u0073";
Amudham.combo_LAU      = "\u0062\u0079\u0073";
Amudham.combo_VAU      = "\u0062\u0074\u0073";
Amudham.combo_SSAU     = "\u0062\u0023\u0073";
Amudham.combo_SAU      = "\u0062\u0021\u0073";
Amudham.combo_HAU      = "\u0062\u0051\u0073";
Amudham.combo_LLAU     = "\u0062\u0073\u0073";
Amudham.combo_ZHAU     = "\u0062\u0048\u0073";
Amudham.combo_RRAU     = "\u0062\u0077\u0073";
Amudham.combo_KSHAU    = "\u0062\u0026\u0073";

//Special Combinations
Amudham.combo_KU      = "\u0046";
Amudham.combo_KUU     = "\u0054";
Amudham.combo_CU      = "\u0052";
Amudham.combo_CUU     = "\u004E";
Amudham.combo_TTI     = "\u006F";
Amudham.combo_TTII    = "\u004F";
Amudham.combo_TTU     = "\u004C";
Amudham.combo_TTUU    = "\u003F";
Amudham.combo_NNU     = "\u0071";
Amudham.combo_NNUU_1  = "\u0071\u007D";
Amudham.combo_NNUU_2  = "\u0071\u0068";
Amudham.combo_TU      = "\u004A";
Amudham.combo_TUU_1   = "\u004A\u007D";
Amudham.combo_TUU_2   = "\u004A\u0068";
Amudham.combo_NU      = "\u0045";
Amudham.combo_NUU_1   = "\u0045\u007D";
Amudham.combo_NUU_2   = "\u0045\u0068";
Amudham.combo_NNNU    = "\u0044";
Amudham.combo_NNNUU_1 = "\u0044\u007D";
Amudham.combo_NNNUU_2 = "\u0044\u0068";
Amudham.combo_MU      = "\u004B";
Amudham.combo_MUU     = "\u005C";
Amudham.combo_RI_2    = "\u0068\u0070";
Amudham.combo_RII_2   = "\u0068\u0050";
Amudham.combo_RU      = "\u0055";
Amudham.combo_RUU     = "\u002B";
Amudham.combo_RPULLI_1= "\u0068\u003a";
Amudham.combo_RPULLI_2= "\u0068\u003b";
Amudham.combo_RPULLI_3= "\u0068\u0040";
Amudham.combo_LU      = "\u0059";
Amudham.combo_LUU_1   = "\u0059\u007D";
Amudham.combo_LUU_2   = "\u0059\u0068";
Amudham.combo_LLU     = "\u0053";
Amudham.combo_LLUU    = "\u007E";
Amudham.combo_ZHU     = "\u0047";
Amudham.combo_ZHUU    = "\u003D";

Amudham.combo_RRU     = "\u0057";
Amudham.combo_RRUU_1  = "\u0057\u007d";
Amudham.combo_RRUU_2  = "\u0057\u0068";

//not matching ascii
Amudham.EXCLAM        = "\u002A";
Amudham.COMMA         = "\u002F";
Amudham.QUESTION      = "\u003E";
Amudham.SLASH         = "\u005F";
Amudham.DOLLAR        = "\u008D";
Amudham.AMPERSAND     = "\u008E";
Amudham.GREATERTHAN   = "\u0152";
Amudham.PERCENT       = "\u0160";
Amudham.SEMICOLON     = "\u0192";
Amudham.EQUALS        = "\u02C6";
Amudham.COLON         = "\u201E";
Amudham.RQTSINGLE     = "\u2020";
Amudham.PLUS          = "\u2021";
Amudham.LQTSINGLE     = "\u2026";
Amudham.ASTERISK      = "\u2030";

Amudham.toPadma = new Object();

Amudham.toPadma[Amudham.visarga]  = Padma.visarga;
Amudham.toPadma[Amudham.virama_1] = Padma.virama;
Amudham.toPadma[Amudham.virama_2] = Padma.virama;
Amudham.toPadma[Amudham.virama_3] = Padma.virama;
Amudham.toPadma[Amudham.vowel_A]  = Padma.vowel_A;
Amudham.toPadma[Amudham.vowel_AA] = Padma.vowel_AA;
Amudham.toPadma[Amudham.vowel_I]  = Padma.vowel_I;
Amudham.toPadma[Amudham.vowel_II] = Padma.vowel_II;
Amudham.toPadma[Amudham.vowel_U]  = Padma.vowel_U;
Amudham.toPadma[Amudham.vowel_UU] = Padma.vowel_UU;
Amudham.toPadma[Amudham.vowel_E]  = Padma.vowel_E;
Amudham.toPadma[Amudham.vowel_EE] = Padma.vowel_EE;
Amudham.toPadma[Amudham.vowel_AI] = Padma.vowel_AI;
Amudham.toPadma[Amudham.vowel_O]  = Padma.vowel_O;
Amudham.toPadma[Amudham.vowel_OO] = Padma.vowel_OO;
Amudham.toPadma[Amudham.vowel_AU] = Padma.vowel_AU;

Amudham.toPadma[Amudham.consnt_KA]  = Padma.consnt_KA;
Amudham.toPadma[Amudham.consnt_NGA] = Padma.consnt_NGA;
Amudham.toPadma[Amudham.consnt_CA]  = Padma.consnt_CA;
Amudham.toPadma[Amudham.consnt_JA]  = Padma.consnt_JA;
Amudham.toPadma[Amudham.consnt_NYA] = Padma.consnt_NYA;
Amudham.toPadma[Amudham.consnt_TTA] = Padma.consnt_TTA;
Amudham.toPadma[Amudham.consnt_NNA] = Padma.consnt_NNA;
Amudham.toPadma[Amudham.consnt_TA]  = Padma.consnt_TA;
Amudham.toPadma[Amudham.consnt_NA]  = Padma.consnt_NA;
Amudham.toPadma[Amudham.consnt_NNNA]= Padma.consnt_NNNA;
Amudham.toPadma[Amudham.consnt_PA]  = Padma.consnt_PA;
Amudham.toPadma[Amudham.consnt_MA]  = Padma.consnt_MA;
Amudham.toPadma[Amudham.consnt_YA]  = Padma.consnt_YA;
Amudham.toPadma[Amudham.consnt_RA]  = Padma.consnt_RA;
Amudham.toPadma[Amudham.consnt_LA]  = Padma.consnt_LA;
Amudham.toPadma[Amudham.consnt_VA]  = Padma.consnt_VA;
Amudham.toPadma[Amudham.consnt_SSA] = Padma.consnt_SSA;
Amudham.toPadma[Amudham.consnt_SA]  = Padma.consnt_SA;
Amudham.toPadma[Amudham.consnt_HA]  = Padma.consnt_HA;
Amudham.toPadma[Amudham.consnt_LLA] = Padma.consnt_LLA;
Amudham.toPadma[Amudham.consnt_ZHA] = Padma.consnt_ZHA;
Amudham.toPadma[Amudham.consnt_RRA] = Padma.consnt_RRA;
Amudham.toPadma[Amudham.conjct_KSH] = Padma.consnt_KA + Padma.vattu_SSA;
Amudham.toPadma[Amudham.conjct_SRII]= Padma.consnt_SA + Padma.vattu_RA + Padma.vowelsn_II;

//Gunintamulu
Amudham.toPadma[Amudham.vowelsn_AA]   = Padma.vowelsn_AA;
Amudham.toPadma[Amudham.vowelsn_I]    = Padma.vowelsn_I;
Amudham.toPadma[Amudham.vowelsn_II]   = Padma.vowelsn_II;
Amudham.toPadma[Amudham.vowelsn_U_1]  = Padma.vowelsn_U;
Amudham.toPadma[Amudham.vowelsn_U_2]  = Padma.vowelsn_U;
Amudham.toPadma[Amudham.vowelsn_UU_1] = Padma.vowelsn_UU;
Amudham.toPadma[Amudham.vowelsn_UU_2] = Padma.vowelsn_UU;
Amudham.toPadma[Amudham.vowelsn_UU_3] = Padma.vowelsn_UU;
Amudham.toPadma[Amudham.vowelsn_E]    = Padma.vowelsn_E;
Amudham.toPadma[Amudham.vowelsn_EE]   = Padma.vowelsn_EE;
Amudham.toPadma[Amudham.vowelsn_AI]   = Padma.vowelsn_AI;
Amudham.toPadma[Amudham.vowelsn_AI_1] = Padma.vowelsn_AI;
Amudham.toPadma[Amudham.combo_NNAA]  = Padma.consnt_NNA + Padma.vowelsn_AA;
Amudham.toPadma[Amudham.combo_NNNAA] = Padma.consnt_NNNA + Padma.vowelsn_AA;
Amudham.toPadma[Amudham.combo_RRAA]  = Padma.consnt_RRA + Padma.vowelsn_AA;

Amudham.toPadma[Amudham.combo_KAU]     = Padma.consnt_KA + Padma.vowelsn_AU;
Amudham.toPadma[Amudham.combo_NGAU]    = Padma.consnt_NGA + Padma.vowelsn_AU;
Amudham.toPadma[Amudham.combo_CAU]     = Padma.consnt_CA + Padma.vowelsn_AU;
Amudham.toPadma[Amudham.combo_JAU]     = Padma.consnt_JA + Padma.vowelsn_AU;
Amudham.toPadma[Amudham.combo_NYAU]    = Padma.consnt_NYA + Padma.vowelsn_AU;
Amudham.toPadma[Amudham.combo_TTAU]    = Padma.consnt_TTA + Padma.vowelsn_AU;
Amudham.toPadma[Amudham.combo_NNAU]    = Padma.consnt_NNA + Padma.vowelsn_AU;
Amudham.toPadma[Amudham.combo_TAU]     = Padma.consnt_TA + Padma.vowelsn_AU;
Amudham.toPadma[Amudham.combo_NAU]     = Padma.consnt_NA + Padma.vowelsn_AU;
Amudham.toPadma[Amudham.combo_NNNAU]   = Padma.consnt_NNNA + Padma.vowelsn_AU;
Amudham.toPadma[Amudham.combo_PAU]     = Padma.consnt_PA + Padma.vowelsn_AU;
Amudham.toPadma[Amudham.combo_MAU]     = Padma.consnt_MA + Padma.vowelsn_AU;
Amudham.toPadma[Amudham.combo_YAU]     = Padma.consnt_YA + Padma.vowelsn_AU;
Amudham.toPadma[Amudham.combo_RAU]     = Padma.consnt_RA + Padma.vowelsn_AU;
Amudham.toPadma[Amudham.combo_LAU]     = Padma.consnt_LA + Padma.vowelsn_AU;
Amudham.toPadma[Amudham.combo_VAU]     = Padma.consnt_VA + Padma.vowelsn_AU;
Amudham.toPadma[Amudham.combo_SSAU]    = Padma.consnt_SSA + Padma.vowelsn_AU;
Amudham.toPadma[Amudham.combo_SAU]     = Padma.consnt_SA + Padma.vowelsn_AU;
Amudham.toPadma[Amudham.combo_HAU]     = Padma.consnt_HA + Padma.vowelsn_AU;
Amudham.toPadma[Amudham.combo_LLAU]    = Padma.consnt_LLA + Padma.vowelsn_AU;
Amudham.toPadma[Amudham.combo_ZHAU]    = Padma.consnt_ZHA + Padma.vowelsn_AU;
Amudham.toPadma[Amudham.combo_RRAU]    = Padma.consnt_RRA + Padma.vowelsn_AU;
Amudham.toPadma[Amudham.combo_KSHAU]   = Padma.consnt_KA + Padma.vattu_SSA + Padma.vowelsn_AU;

//Special Combinations
Amudham.toPadma[Amudham.combo_KU]      = Padma.consnt_KA + Padma.vowelsn_U;
Amudham.toPadma[Amudham.combo_KUU]     = Padma.consnt_KA + Padma.vowelsn_UU;
Amudham.toPadma[Amudham.combo_CU]      = Padma.consnt_CA + Padma.vowelsn_U;
Amudham.toPadma[Amudham.combo_CUU]     = Padma.consnt_CA + Padma.vowelsn_UU;
Amudham.toPadma[Amudham.combo_TTI]     = Padma.consnt_TTA + Padma.vowelsn_I;
Amudham.toPadma[Amudham.combo_TTII]    = Padma.consnt_TTA + Padma.vowelsn_II;
Amudham.toPadma[Amudham.combo_TTU]     = Padma.consnt_TTA + Padma.vowelsn_U;
Amudham.toPadma[Amudham.combo_TTUU]    = Padma.consnt_TTA + Padma.vowelsn_UU;
Amudham.toPadma[Amudham.combo_NNU]     = Padma.consnt_NNA + Padma.vowelsn_U;
Amudham.toPadma[Amudham.combo_NNUU_1]  = Padma.consnt_NNA + Padma.vowelsn_UU;
Amudham.toPadma[Amudham.combo_NNUU_2]  = Padma.consnt_NNA + Padma.vowelsn_UU;
Amudham.toPadma[Amudham.combo_TU]      = Padma.consnt_TA + Padma.vowelsn_U;
Amudham.toPadma[Amudham.combo_TUU_1]   = Padma.consnt_TA + Padma.vowelsn_UU;
Amudham.toPadma[Amudham.combo_TUU_2]   = Padma.consnt_TA + Padma.vowelsn_UU;
Amudham.toPadma[Amudham.combo_NU]      = Padma.consnt_NA + Padma.vowelsn_U;
Amudham.toPadma[Amudham.combo_NUU_1]   = Padma.consnt_NA + Padma.vowelsn_UU;
Amudham.toPadma[Amudham.combo_NUU_2]   = Padma.consnt_NA + Padma.vowelsn_UU;
Amudham.toPadma[Amudham.combo_NNNU]    = Padma.consnt_NNNA + Padma.vowelsn_U;
Amudham.toPadma[Amudham.combo_NNNUU_1] = Padma.consnt_NNNA + Padma.vowelsn_UU;
Amudham.toPadma[Amudham.combo_NNNUU_2] = Padma.consnt_NNNA + Padma.vowelsn_UU;
Amudham.toPadma[Amudham.combo_MU]      = Padma.consnt_MA + Padma.vowelsn_U;
Amudham.toPadma[Amudham.combo_MUU]     = Padma.consnt_MA + Padma.vowelsn_UU;
Amudham.toPadma[Amudham.combo_RI_2]    = Padma.consnt_RA + Padma.vowelsn_I;
Amudham.toPadma[Amudham.combo_RII_2]   = Padma.consnt_RA + Padma.vowelsn_II;
Amudham.toPadma[Amudham.combo_RU]      = Padma.consnt_RA + Padma.vowelsn_U;
Amudham.toPadma[Amudham.combo_RUU]     = Padma.consnt_RA + Padma.vowelsn_UU;
Amudham.toPadma[Amudham.combo_RPULLI_1]= Padma.consnt_RA + Padma.pulli;
Amudham.toPadma[Amudham.combo_RPULLI_2]= Padma.consnt_RA + Padma.pulli;
Amudham.toPadma[Amudham.combo_RPULLI_3]= Padma.consnt_RA + Padma.pulli;
Amudham.toPadma[Amudham.combo_LU]      = Padma.consnt_LA + Padma.vowelsn_U;
Amudham.toPadma[Amudham.combo_LUU_1]   = Padma.consnt_LA + Padma.vowelsn_UU;
Amudham.toPadma[Amudham.combo_LUU_2]   = Padma.consnt_LA + Padma.vowelsn_UU;
Amudham.toPadma[Amudham.combo_LLU]     = Padma.consnt_LLA + Padma.vowelsn_U;
Amudham.toPadma[Amudham.combo_LLUU]    = Padma.consnt_LLA + Padma.vowelsn_UU;
Amudham.toPadma[Amudham.combo_ZHU]     = Padma.consnt_ZHA + Padma.vowelsn_U;
Amudham.toPadma[Amudham.combo_ZHUU]    = Padma.consnt_ZHA + Padma.vowelsn_UU;
Amudham.toPadma[Amudham.combo_RRU]     = Padma.consnt_RRA + Padma.vowelsn_U;
Amudham.toPadma[Amudham.combo_RRUU_1]  = Padma.consnt_RRA + Padma.vowelsn_UU;
Amudham.toPadma[Amudham.combo_RRUU_2]  = Padma.consnt_RRA + Padma.vowelsn_UU;

Amudham.toPadma[Amudham.EXCLAM]     = "!";
Amudham.toPadma[Amudham.COMMA]      = ",";
Amudham.toPadma[Amudham.QUESTION]   = "?";
Amudham.toPadma[Amudham.SLASH]      = "/";
Amudham.toPadma[Amudham.DOLLAR]     = "$";
Amudham.toPadma[Amudham.AMPERSAND]  = "&";
Amudham.toPadma[Amudham.GREATERTHAN]= ">";
Amudham.toPadma[Amudham.PERCENT]    = "%";
Amudham.toPadma[Amudham.SEMICOLON]  = ";";
Amudham.toPadma[Amudham.EQUALS]     = "=";
Amudham.toPadma[Amudham.COLON]      = ":";
Amudham.toPadma[Amudham.RQTSINGLE]  = "\u2019";
Amudham.toPadma[Amudham.PLUS]       = "+";
Amudham.toPadma[Amudham.LQTSINGLE]  = "\u2018";
Amudham.toPadma[Amudham.ASTERISK]   = "*";

Amudham.redundantList = new Object();

Amudham.prefixList = new Object();
Amudham.prefixList[Amudham.vowelsn_E]   = true;
Amudham.prefixList[Amudham.vowelsn_EE]  = true;
Amudham.prefixList[Amudham.vowelsn_AI]  = true;
Amudham.prefixList[Amudham.vowelsn_AI_1]= true;

Amudham.overloadList = new Object();
Amudham.overloadList[Amudham.vowel_O]   = true;
Amudham.overloadList[Amudham.vowelsn_E] = true;
Amudham.overloadList[Amudham.vowelsn_AA]= true;
Amudham.overloadList["\u0062\u0066"]    = true;
Amudham.overloadList["\u0062\u0027"]    = true;
Amudham.overloadList["\u0062\u0072"]    = true;
Amudham.overloadList["\u0062\u0024"]    = true;
Amudham.overloadList["\u0062\u0022"]    = true;
Amudham.overloadList["\u0062\u006C"]    = true;
Amudham.overloadList["\u0062\u007A"]    = true;
Amudham.overloadList["\u0062\u006A"]    = true;
Amudham.overloadList["\u0062\u0065"]    = true;
Amudham.overloadList["\u0062\u0064"]    = true;
Amudham.overloadList["\u0062\u0067"]    = true;
Amudham.overloadList["\u0062\u006B"]    = true;
Amudham.overloadList["\u0062\u0061"]    = true;
Amudham.overloadList["\u0062\u0075"]    = true;
Amudham.overloadList["\u0062\u0079"]    = true;
Amudham.overloadList["\u0062\u0074"]    = true;
Amudham.overloadList["\u0062\u0023"]    = true;
Amudham.overloadList["\u0062\u0021"]    = true;
Amudham.overloadList["\u0062\u0051"]    = true;
Amudham.overloadList["\u0062\u0073"]    = true;
Amudham.overloadList["\u0062\u0048"]    = true;
Amudham.overloadList["\u0062\u0077"]    = true;
Amudham.overloadList["\u0062\u0026"]    = true;

Amudham.overloadList[Amudham.combo_NNU]  = true;
Amudham.overloadList[Amudham.combo_TU]   = true;
Amudham.overloadList[Amudham.combo_NU]   = true;
Amudham.overloadList[Amudham.combo_NNNU] = true;
Amudham.overloadList[Amudham.combo_LU]   = true;
Amudham.overloadList[Amudham.combo_RRU]  = true;
