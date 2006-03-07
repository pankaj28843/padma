// $Id: TAB.js,v 1.2 2006/03/07 18:30:29 vnagarjuna Exp $ -->

//Copyright 2006 Nagarjuna Venna <vnagarjuna@yahoo.com>

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

//TAB
function TAB() 
{
}

//There is no font with the name 'TAB', but the scheme is just that - an encoding
TAB.maxLookupLen = 3;
TAB.fontFace     = "TAB";
TAB.displayName  = "TAB";
TAB.script       = Padma.script_TAMIL;

TAB.lookup = function (str) 
{
    return TAB.toPadma[str];
}

TAB.isPrefixSymbol = function (str)
{
    return TAB.prefixList[str] != null;
}

TAB.isOverloaded = function (str)
{
    return TAB.overloadList[str] != null;
}

TAB.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if (sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_AA)
        return Padma.vowelsn_O;
    if (sign2 == Padma.vowelsn_EE && sign1 == Padma.vowelsn_AA)
        return Padma.vowelsn_OO;
    return sign1 + sign2;    
}

TAB.preprocessMessage = function (input)
{
    return input;
}

//Vowel modifiers
TAB.visarga        = "\u00E7";  //aytham
TAB.virama         = "\u00A2";

//Vowels
TAB.vowel_A        = "\u00DC";
TAB.vowel_AA       = "\u00DD";
TAB.vowel_I        = "\u00DE";
TAB.vowel_II       = "\u00DF";
TAB.vowel_U        = "\u00E0";
TAB.vowel_UU       = "\u00E1";
TAB.vowel_E        = "\u00E2";
TAB.vowel_EE       = "\u00E3";
TAB.vowel_AI       = "\u00E4";
TAB.vowel_O        = "\u00E5";
TAB.vowel_OO       = "\u00E6";
TAB.vowel_AU       = "\u00E5\u00F7";

//Consonants
TAB.consnt_KA      = "\u00E8";
TAB.consnt_NGA     = "\u00E9";

TAB.consnt_CA      = "\u00EA";
TAB.consnt_JA      = "\u00FC";
TAB.consnt_NYA     = "\u00EB";

TAB.consnt_TTA     = "\u00EC";
TAB.consnt_NNA     = "\u00ED";

TAB.consnt_TA      = "\u00EE";
TAB.consnt_NA      = "\u00EF";
TAB.consnt_NNNA    = "\u00F9";

TAB.consnt_PA      = "\u00F0";
TAB.consnt_MA      = "\u00F1";

TAB.consnt_YA      = "\u00F2";
TAB.consnt_RA      = "\u00F3";
TAB.consnt_LA      = "\u00F4";
TAB.consnt_VA      = "\u00F5";
TAB.consnt_ZHA     = "\u00F6";
TAB.consnt_LLA     = "\u00F7";
TAB.consnt_RRA     = "\u00F8";

TAB.consnt_SSA     = "\u00FB";
TAB.consnt_SA      = "\u00FA";
TAB.consnt_HA      = "\u00FD";

TAB.conjct_KSH     = "\u00FE";
TAB.conjct_SRII    = "\u00FF";

//Gunintamulu
TAB.vowelsn_AA     = "\u00A3";
TAB.vowelsn_I      = "\u00A4";
TAB.vowelsn_II     = "\u00A6";
TAB.vowelsn_U      = "\u00A7";
TAB.vowelsn_UU     = "\u00A8";
TAB.vowelsn_E      = "\u00AA";
TAB.vowelsn_EE     = "\u00AB";
TAB.vowelsn_AI     = "\u00AC";

TAB.combo_TTI     = "\u00AE";
TAB.combo_TTII    = "\u00AF";

TAB.combo_KU      = "\u00B0";
TAB.combo_KUU     = "\u00C3";
TAB.combo_NGU     = "\u00B1";
TAB.combo_NGUU    = "\u00C4";
TAB.combo_CU      = "\u00B2";
TAB.combo_CUU     = "\u00C5";
TAB.combo_NYU     = "\u00B3";
TAB.combo_NYUU    = "\u00C6";
TAB.combo_TTU     = "\u00B4";
TAB.combo_TTUU    = "\u00C7";
TAB.combo_NNU     = "\u00B5";
TAB.combo_NNUU    = "\u00C8";
TAB.combo_TU      = "\u00B6";
TAB.combo_TUU     = "\u00C9";
TAB.combo_NU      = "\u00B8";
TAB.combo_NUU     = "\u00CB";
TAB.combo_NNNU    = "\u00C2";
TAB.combo_NNNUU   = "\u00DB";
TAB.combo_PU      = "\u00B9";
TAB.combo_PUU     = "\u00CC";
TAB.combo_MU      = "\u00BA";
TAB.combo_MUU     = "\u00CD";
TAB.combo_YU      = "\u00BB";
TAB.combo_YUU     = "\u00CE";
TAB.combo_RU      = "\u00BC";
TAB.combo_RUU     = "\u00CF";
TAB.combo_LU      = "\u00BD";
TAB.combo_LUU     = "\u00D6";
TAB.combo_VU      = "\u00BE";
TAB.combo_VUU     = "\u00D7";
TAB.combo_ZHU     = "\u00BF";
TAB.combo_ZHUU    = "\u00D8";
TAB.combo_LLU     = "\u00C0";
TAB.combo_LLUU    = "\u00D9";
TAB.combo_RRU     = "\u00C1";
TAB.combo_RRUU    = "\u00DA";

TAB.LQTSINGLE      = "\u2018";
TAB.RQTSINGLE      = "\u2019";
TAB.LQTDOUBLE      = "\u201C";
TAB.RQTDOUBLE      = "\u201D";

//TAB uses the same symbol for generating vowelsn_AU and consnt_LLA. This is a work around
TAB.combo_KAU      = "\u00AA\u00E8\u00F7";
TAB.combo_NGAU     = "\u00AA\u00E9\u00F7";
TAB.combo_CAU      = "\u00AA\u00EA\u00F7";
TAB.combo_JAU      = "\u00AA\u00FC\u00F7";
TAB.combo_NYAU     = "\u00AA\u00EB\u00F7";
TAB.combo_TTAU     = "\u00AA\u00EC\u00F7";
TAB.combo_NNAU     = "\u00AA\u00ED\u00F7";
TAB.combo_TAU      = "\u00AA\u00EE\u00F7";
TAB.combo_NAU      = "\u00AA\u00EF\u00F7";
TAB.combo_NNNAU    = "\u00AA\u00F9\u00F7";
TAB.combo_PAU      = "\u00AA\u00F0\u00F7";
TAB.combo_MAU      = "\u00AA\u00F1\u00F7";
TAB.combo_YAU      = "\u00AA\u00F2\u00F7";
TAB.combo_RAU      = "\u00AA\u00F3\u00F7";
TAB.combo_LAU      = "\u00AA\u00F4\u00F7";
TAB.combo_VAU      = "\u00AA\u00F5\u00F7";
TAB.combo_SSAU     = "\u00AA\u00FB\u00F7";
TAB.combo_SAU      = "\u00AA\u00FA\u00F7";
TAB.combo_HAU      = "\u00AA\u00FD\u00F7";
TAB.combo_LLAU     = "\u00AA\u00F7\u00F7";
TAB.combo_ZHAU     = "\u00AA\u00F6\u00F7";
TAB.combo_RRAU     = "\u00AA\u00F8\u00F7";
TAB.combo_KSHAU    = "\u00AA\u00FE\u00F7";

TAB.toPadma = new Object();

TAB.toPadma[TAB.visarga]  = Padma.visarga;
TAB.toPadma[TAB.virama]   = Padma.virama;

TAB.toPadma[TAB.vowel_A]  = Padma.vowel_A;
TAB.toPadma[TAB.vowel_AA] = Padma.vowel_AA;
TAB.toPadma[TAB.vowel_I]  = Padma.vowel_I;
TAB.toPadma[TAB.vowel_II] = Padma.vowel_II;
TAB.toPadma[TAB.vowel_U]  = Padma.vowel_U;
TAB.toPadma[TAB.vowel_UU] = Padma.vowel_UU;
TAB.toPadma[TAB.vowel_E]  = Padma.vowel_E;
TAB.toPadma[TAB.vowel_EE] = Padma.vowel_EE;
TAB.toPadma[TAB.vowel_AI] = Padma.vowel_AI;
TAB.toPadma[TAB.vowel_O]  = Padma.vowel_O;
TAB.toPadma[TAB.vowel_OO] = Padma.vowel_OO;
TAB.toPadma[TAB.vowel_AU] = Padma.vowel_AU;

TAB.toPadma[TAB.consnt_KA]  = Padma.consnt_KA;
TAB.toPadma[TAB.consnt_NGA] = Padma.consnt_NGA;
TAB.toPadma[TAB.consnt_CA]  = Padma.consnt_CA;
TAB.toPadma[TAB.consnt_JA]  = Padma.consnt_JA;
TAB.toPadma[TAB.consnt_NYA] = Padma.consnt_NYA;
TAB.toPadma[TAB.consnt_TTA] = Padma.consnt_TTA;
TAB.toPadma[TAB.consnt_NNA] = Padma.consnt_NNA;
TAB.toPadma[TAB.consnt_TA]  = Padma.consnt_TA;
TAB.toPadma[TAB.consnt_NA]  = Padma.consnt_NA;
TAB.toPadma[TAB.consnt_NNNA] = Padma.consnt_NNNA;
TAB.toPadma[TAB.consnt_PA]  = Padma.consnt_PA;
TAB.toPadma[TAB.consnt_MA]  = Padma.consnt_MA;
TAB.toPadma[TAB.consnt_YA]  = Padma.consnt_YA;
TAB.toPadma[TAB.consnt_RA]  = Padma.consnt_RA;
TAB.toPadma[TAB.consnt_LA]  = Padma.consnt_LA;
TAB.toPadma[TAB.consnt_VA]  = Padma.consnt_VA;
TAB.toPadma[TAB.consnt_SSA] = Padma.consnt_SSA;
TAB.toPadma[TAB.consnt_SA]  = Padma.consnt_SA;
TAB.toPadma[TAB.consnt_HA]  = Padma.consnt_HA;
TAB.toPadma[TAB.consnt_LLA] = Padma.consnt_LLA;
TAB.toPadma[TAB.consnt_ZHA] = Padma.consnt_ZHA;
TAB.toPadma[TAB.consnt_RRA] = Padma.consnt_RRA;
TAB.toPadma[TAB.conjct_KSH] = Padma.consnt_KA + Padma.vattu_SSA;
TAB.toPadma[TAB.conjct_SRII]= Padma.consnt_SA + Padma.vattu_RA + Padma.vowelsn_II;

//Gunintamulu
TAB.toPadma[TAB.vowelsn_AA]  = Padma.vowelsn_AA;
TAB.toPadma[TAB.vowelsn_I]   = Padma.vowelsn_I;
TAB.toPadma[TAB.vowelsn_II]  = Padma.vowelsn_II;
TAB.toPadma[TAB.vowelsn_U]   = Padma.vowelsn_U;
TAB.toPadma[TAB.vowelsn_UU]  = Padma.vowelsn_UU;
TAB.toPadma[TAB.vowelsn_E]   = Padma.vowelsn_E;
TAB.toPadma[TAB.vowelsn_EE]  = Padma.vowelsn_EE;
TAB.toPadma[TAB.vowelsn_AI]  = Padma.vowelsn_AI;

TAB.toPadma[TAB.combo_KAU]      = Padma.consnt_KA + Padma.vowelsn_AU;
TAB.toPadma[TAB.combo_NGAU]     = Padma.consnt_NGA + Padma.vowelsn_AU;
TAB.toPadma[TAB.combo_CAU]      = Padma.consnt_CA + Padma.vowelsn_AU;
TAB.toPadma[TAB.combo_JAU]      = Padma.consnt_JA + Padma.vowelsn_AU;
TAB.toPadma[TAB.combo_NYAU]     = Padma.consnt_NYA + Padma.vowelsn_AU;
TAB.toPadma[TAB.combo_TTAU]     = Padma.consnt_TTA + Padma.vowelsn_AU;
TAB.toPadma[TAB.combo_NNAU]     = Padma.consnt_NNA + Padma.vowelsn_AU;
TAB.toPadma[TAB.combo_TAU]      = Padma.consnt_TA + Padma.vowelsn_AU;
TAB.toPadma[TAB.combo_NAU]      = Padma.consnt_NA + Padma.vowelsn_AU;
TAB.toPadma[TAB.combo_NNNAU]    = Padma.consnt_NNNA + Padma.vowelsn_AU;
TAB.toPadma[TAB.combo_PAU]      = Padma.consnt_PA + Padma.vowelsn_AU;
TAB.toPadma[TAB.combo_MAU]      = Padma.consnt_MA + Padma.vowelsn_AU;
TAB.toPadma[TAB.combo_YAU]      = Padma.consnt_YA + Padma.vowelsn_AU;
TAB.toPadma[TAB.combo_RAU]      = Padma.consnt_RA + Padma.vowelsn_AU;
TAB.toPadma[TAB.combo_LAU]      = Padma.consnt_LA + Padma.vowelsn_AU;
TAB.toPadma[TAB.combo_VAU]      = Padma.consnt_VA + Padma.vowelsn_AU;
TAB.toPadma[TAB.combo_SSAU]     = Padma.consnt_SSA + Padma.vowelsn_AU;
TAB.toPadma[TAB.combo_SAU]      = Padma.consnt_SA + Padma.vowelsn_AU;
TAB.toPadma[TAB.combo_HAU]      = Padma.consnt_HA + Padma.vowelsn_AU;
TAB.toPadma[TAB.combo_LLAU]     = Padma.consnt_LLA + Padma.vowelsn_AU;
TAB.toPadma[TAB.combo_ZHAU]     = Padma.consnt_ZHA + Padma.vowelsn_AU;
TAB.toPadma[TAB.combo_RRAU]     = Padma.consnt_RRA + Padma.vowelsn_AU;
TAB.toPadma[TAB.combo_KSHAU]    = Padma.consnt_KA + Padma.vattu_SSA + Padma.vowelsn_AU;

TAB.toPadma[TAB.combo_TTI]     = Padma.consnt_TTA + Padma.vowelsn_I;
TAB.toPadma[TAB.combo_TTII]    = Padma.consnt_TTA + Padma.vowelsn_II;

TAB.toPadma[TAB.combo_KU]      = Padma.consnt_KA + Padma.vowelsn_U;
TAB.toPadma[TAB.combo_NGU]     = Padma.consnt_NGA + Padma.vowelsn_U;
TAB.toPadma[TAB.combo_CU]      = Padma.consnt_CA + Padma.vowelsn_U;
TAB.toPadma[TAB.combo_NYU]     = Padma.consnt_NYA + Padma.vowelsn_U;
TAB.toPadma[TAB.combo_TTU]     = Padma.consnt_TTA + Padma.vowelsn_U;
TAB.toPadma[TAB.combo_NNU]     = Padma.consnt_NNA + Padma.vowelsn_U;
TAB.toPadma[TAB.combo_TU]      = Padma.consnt_TA + Padma.vowelsn_U;
TAB.toPadma[TAB.combo_NU]      = Padma.consnt_NA + Padma.vowelsn_U;
TAB.toPadma[TAB.combo_NNNU]    = Padma.consnt_NNNA + Padma.vowelsn_U;
TAB.toPadma[TAB.combo_PU]      = Padma.consnt_PA + Padma.vowelsn_U;
TAB.toPadma[TAB.combo_MU]      = Padma.consnt_MA + Padma.vowelsn_U;
TAB.toPadma[TAB.combo_YU]      = Padma.consnt_YA + Padma.vowelsn_U;
TAB.toPadma[TAB.combo_RU]      = Padma.consnt_RA + Padma.vowelsn_U;
TAB.toPadma[TAB.combo_LU]      = Padma.consnt_LA + Padma.vowelsn_U;
TAB.toPadma[TAB.combo_VU]      = Padma.consnt_VA + Padma.vowelsn_U;
TAB.toPadma[TAB.combo_LLU]     = Padma.consnt_LLA + Padma.vowelsn_U;
TAB.toPadma[TAB.combo_ZHU]     = Padma.consnt_ZHA + Padma.vowelsn_U;
TAB.toPadma[TAB.combo_RRU]     = Padma.consnt_RRA + Padma.vowelsn_U;
TAB.toPadma[TAB.combo_KUU]      = Padma.consnt_KA + Padma.vowelsn_UU;
TAB.toPadma[TAB.combo_NGUU]     = Padma.consnt_NGA + Padma.vowelsn_UU;
TAB.toPadma[TAB.combo_CUU]      = Padma.consnt_CA + Padma.vowelsn_UU;
TAB.toPadma[TAB.combo_NYUU]     = Padma.consnt_NYA + Padma.vowelsn_UU;
TAB.toPadma[TAB.combo_TTUU]     = Padma.consnt_TTA + Padma.vowelsn_UU;
TAB.toPadma[TAB.combo_NNUU]     = Padma.consnt_NNA + Padma.vowelsn_UU;
TAB.toPadma[TAB.combo_TUU]      = Padma.consnt_TA + Padma.vowelsn_UU;
TAB.toPadma[TAB.combo_NUU]      = Padma.consnt_NA + Padma.vowelsn_UU;
TAB.toPadma[TAB.combo_NNNUU]    = Padma.consnt_NNNA + Padma.vowelsn_UU;
TAB.toPadma[TAB.combo_PUU]      = Padma.consnt_PA + Padma.vowelsn_UU;
TAB.toPadma[TAB.combo_MUU]      = Padma.consnt_MA + Padma.vowelsn_UU;
TAB.toPadma[TAB.combo_YUU]      = Padma.consnt_YA + Padma.vowelsn_UU;
TAB.toPadma[TAB.combo_RUU]      = Padma.consnt_RA + Padma.vowelsn_UU;
TAB.toPadma[TAB.combo_LUU]      = Padma.consnt_LA + Padma.vowelsn_UU;
TAB.toPadma[TAB.combo_VUU]      = Padma.consnt_VA + Padma.vowelsn_UU;
TAB.toPadma[TAB.combo_LLUU]     = Padma.consnt_LLA + Padma.vowelsn_UU;
TAB.toPadma[TAB.combo_ZHUU]     = Padma.consnt_ZHA + Padma.vowelsn_UU;
TAB.toPadma[TAB.combo_RRUU]     = Padma.consnt_RRA + Padma.vowelsn_UU;

TAB.prefixList = new Object();
TAB.prefixList[TAB.vowelsn_E]   = true;
TAB.prefixList[TAB.vowelsn_EE]  = true;
TAB.prefixList[TAB.vowelsn_AI]  = true;

TAB.overloadList = new Object();
TAB.overloadList[TAB.vowel_O]   = true;
TAB.overloadList[TAB.vowelsn_E] = true;
TAB.overloadList["\u00AA\u00E8"]    = true;
TAB.overloadList["\u00AA\u00E9"]    = true;
TAB.overloadList["\u00AA\u00EA"]    = true;
TAB.overloadList["\u00AA\u00FC"]    = true;
TAB.overloadList["\u00AA\u00EB"]    = true;
TAB.overloadList["\u00AA\u00EC"]    = true;
TAB.overloadList["\u00AA\u00ED"]    = true;
TAB.overloadList["\u00AA\u00EE"]    = true;
TAB.overloadList["\u00AA\u00EF"]    = true;
TAB.overloadList["\u00AA\u00F9"]    = true;
TAB.overloadList["\u00AA\u00F0"]    = true;
TAB.overloadList["\u00AA\u00F1"]    = true;
TAB.overloadList["\u00AA\u00F2"]    = true;
TAB.overloadList["\u00AA\u00F3"]    = true;
TAB.overloadList["\u00AA\u00F4"]    = true;
TAB.overloadList["\u00AA\u00F5"]    = true;
TAB.overloadList["\u00AA\u00FB"]    = true;
TAB.overloadList["\u00AA\u00FA"]    = true;
TAB.overloadList["\u00AA\u00FD"]    = true;
TAB.overloadList["\u00AA\u00F7"]    = true;
TAB.overloadList["\u00AA\u00F6"]    = true;
TAB.overloadList["\u00AA\u00F8"]    = true;
TAB.overloadList["\u00AA\u00FE"]    = true;
