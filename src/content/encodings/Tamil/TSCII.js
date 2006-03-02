// $Id: TSCII.js,v 1.2 2006/03/02 23:14:39 vnagarjuna Exp $ -->

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

//TSCII
function TSCII() 
{
}

//There is no font with the name 'TSCI', but the scheme is just that - an encoding
TSCII.maxLookupLen = 1;
TSCII.fontFace     = "TSCII";
TSCII.displayName  = "TSCII";
TSCII.script       = Padma.script_TAMIL;

TSCII.lookup = function (str) 
{
    return TSCII.toPadma[str];
}

TSCII.isPrefixSymbol = function (str)
{
    return TSCII.prefixList[str] != null;
}

TSCII.isOverloaded = function (str)
{
    return false;
}

TSCII.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if (sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_AA)
        return Padma.vowelsn_O;
    if (sign2 == Padma.vowelsn_EE && sign1 == Padma.vowelsn_AA)
        return Padma.vowelsn_OO;
    if (sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_AULEN)
        return Padma.vowelsn_AU;
    return sign1 + sign2;    
}

TSCII.preprocessMessage = function (input)
{
    return input;
}

//Vowel modifiers
TSCII.visarga        = "\u00B7";  //aytham

//Vowels
TSCII.vowel_A        = "\u00AB";
TSCII.vowel_AA       = "\u00AC";
TSCII.vowel_I_1      = "\u00AD";
TSCII.vowel_I_2      = "\u00FE";
TSCII.vowel_II       = "\u00AE";
TSCII.vowel_U        = "\u00AF";
TSCII.vowel_UU       = "\u00B0";
TSCII.vowel_E        = "\u00B1";
TSCII.vowel_EE       = "\u00B2";
TSCII.vowel_AI       = "\u00B3";
TSCII.vowel_O        = "\u00B4";
TSCII.vowel_OO       = "\u00B5";
TSCII.vowel_AU       = "\u00B6";

//Consonants
TSCII.consnt_KA      = "\u00B8";
TSCII.consnt_NGA     = "\u00B9";

TSCII.consnt_CA      = "\u00BA";
TSCII.consnt_JA      = "\u0192";
TSCII.consnt_NYA     = "\u00BB";

TSCII.consnt_TTA     = "\u00BC";
TSCII.consnt_NNA     = "\u00BD";

TSCII.consnt_TA      = "\u00BE";
TSCII.consnt_NA      = "\u00BF";
TSCII.consnt_NNNA    = "\u00C9";

TSCII.consnt_PA      = "\u00C0";
TSCII.consnt_MA      = "\u00C1";

TSCII.consnt_YA      = "\u00C2";
TSCII.consnt_RA      = "\u00C3";
TSCII.consnt_LA      = "\u00C4";
TSCII.consnt_VA      = "\u00C5";
TSCII.consnt_ZHA     = "\u00C6";
TSCII.consnt_LLA     = "\u00C7";
TSCII.consnt_RRA     = "\u00C8";

TSCII.consnt_SSA     = "\u201E";
TSCII.consnt_SA      = "\u2026";
TSCII.consnt_HA      = "\u2020";

TSCII.conjct_KSH     = "\u2021";
TSCII.conjct_SRII    = "\u201A";

//Gunintamulu
TSCII.vowelsn_AA     = "\u00A1";
TSCII.vowelsn_I      = "\u00A2";
TSCII.vowelsn_II     = "\u00A3";
TSCII.vowelsn_U      = "\u00A4";
TSCII.vowelsn_UU     = "\u00A5";
TSCII.vowelsn_E      = "\u00A6";
TSCII.vowelsn_EE     = "\u00A7";
TSCII.vowelsn_AI     = "\u00A8";
TSCII.vowelsn_AULEN  = "\u00AA";

//Special Combinations
TSCII.combo_KPULLI   = "\u00EC";
TSCII.combo_NGPULLI  = "\u00ED";
TSCII.combo_CPULLI   = "\u00EE";
TSCII.combo_JPULLI   = "\u02C6";
TSCII.combo_NYPULLI  = "\u00EF";
TSCII.combo_TTPULLI  = "\u00F0";
TSCII.combo_NNPULLI  = "\u00F1";
TSCII.combo_TPULLI   = "\u00F2";
TSCII.combo_NPULLI   = "\u00F3";
TSCII.combo_NNNPULLI = "\u00FD";
TSCII.combo_PPULLI   = "\u00F4";
TSCII.combo_MPULLI   = "\u00F5";
TSCII.combo_YPULLI   = "\u00F6";
TSCII.combo_RPULLI   = "\u00F7";
TSCII.combo_LPULLI   = "\u00F8";
TSCII.combo_VPULLI   = "\u00F9";
TSCII.combo_ZHPULLI  = "\u00FA";
TSCII.combo_LLPULLI  = "\u00FB";
TSCII.combo_SSPULLI  = "\u2030";
TSCII.combo_SPULLI   = "\u0160";
TSCII.combo_HPULLI   = "\u2039";
TSCII.combo_RRPULLI  = "\u00FC";
TSCII.combo_KSHPULLI = "\u0152";

TSCII.combo_TTI     = "\u00CA";
TSCII.combo_TTII    = "\u00CB";

TSCII.combo_KU      = "\u00CC";
TSCII.combo_KUU     = "\u00DC";
TSCII.combo_NGU     = "\u2122";
TSCII.combo_NGUU    = "\u203A";
TSCII.combo_CU      = "\u00CD";
TSCII.combo_CUU     = "\u00DD";
TSCII.combo_NYU     = "\u0161";
TSCII.combo_NYUU    = "\u0153";
TSCII.combo_TTU     = "\u00CE";
TSCII.combo_TTUU    = "\u00DE";
TSCII.combo_NNU     = "\u00CF";
TSCII.combo_NNUU    = "\u00DF";
TSCII.combo_TU      = "\u00D0";
TSCII.combo_TUU     = "\u00E0";
TSCII.combo_NU      = "\u00D1";
TSCII.combo_NUU     = "\u00E1";
TSCII.combo_NNNU    = "\u00DB";
TSCII.combo_NNNUU   = "\u00EB";
TSCII.combo_PU      = "\u00D2";
TSCII.combo_PUU     = "\u00E2";
TSCII.combo_MU      = "\u00D3";
TSCII.combo_MUU     = "\u00E3";
TSCII.combo_YU      = "\u00D4";
TSCII.combo_YUU     = "\u00E4";
TSCII.combo_RU      = "\u00D5";
TSCII.combo_RUU     = "\u00E5";
TSCII.combo_LU      = "\u00D6";
TSCII.combo_LUU     = "\u00E6";
TSCII.combo_VU      = "\u00D7";
TSCII.combo_VUU     = "\u00E7";
TSCII.combo_ZHU     = "\u00D8";
TSCII.combo_ZHUU    = "\u00E8";
TSCII.combo_LLU     = "\u00D9";
TSCII.combo_LLUU    = "\u00E9";
TSCII.combo_RRU     = "\u00DA";
TSCII.combo_RRUU    = "\u00EA";

//Digits
TSCII.digit_ZERO     = "\u20AC";
TSCII.digit_ONE      = "\u0081";
TSCII.digit_TWO      = "\u008D";
TSCII.digit_THREE    = "\u017D";
TSCII.digit_FOUR     = "\u008F";
TSCII.digit_FIVE     = "\u0090";
TSCII.digit_SIX      = "\u2022";
TSCII.digit_SEVEN    = "\u2013";
TSCII.digit_EIGHT    = "\u2014";
TSCII.digit_NINE     = "\u02DC";
TSCII.digit_TEN      = "\u009D";
TSCII.digit_HUNDRED  = "\u017E";
TSCII.digit_THOUSAND = "\u0178";

TSCII.LQTSINGLE      = "\u2018";
TSCII.RQTSINGLE      = "\u2019";
TSCII.LQTDOUBLE      = "\u201C";
TSCII.RQTDOUBLE      = "\u201D";
TSCII.COPYRIGGHT     = "\u00A9";

TSCII.toPadma = new Object();

TSCII.toPadma[TSCII.visarga]   = Padma.visarga;
TSCII.toPadma[TSCII.vowel_A]   = Padma.vowel_A;
TSCII.toPadma[TSCII.vowel_AA]  = Padma.vowel_AA;
TSCII.toPadma[TSCII.vowel_I_1] = Padma.vowel_I;
TSCII.toPadma[TSCII.vowel_I_2] = Padma.vowel_I;
TSCII.toPadma[TSCII.vowel_II]  = Padma.vowel_II;
TSCII.toPadma[TSCII.vowel_U]   = Padma.vowel_U;
TSCII.toPadma[TSCII.vowel_UU]  = Padma.vowel_UU;
TSCII.toPadma[TSCII.vowel_E]   = Padma.vowel_E;
TSCII.toPadma[TSCII.vowel_EE]  = Padma.vowel_EE;
TSCII.toPadma[TSCII.vowel_AI]  = Padma.vowel_AI;
TSCII.toPadma[TSCII.vowel_O]   = Padma.vowel_O;
TSCII.toPadma[TSCII.vowel_OO]  = Padma.vowel_OO;
TSCII.toPadma[TSCII.vowel_AU]  = Padma.vowel_AU;

TSCII.toPadma[TSCII.consnt_KA]  = Padma.consnt_KA;
TSCII.toPadma[TSCII.consnt_NGA] = Padma.consnt_NGA;
TSCII.toPadma[TSCII.consnt_CA]  = Padma.consnt_CA;
TSCII.toPadma[TSCII.consnt_JA]  = Padma.consnt_JA;
TSCII.toPadma[TSCII.consnt_NYA] = Padma.consnt_NYA;
TSCII.toPadma[TSCII.consnt_TTA] = Padma.consnt_TTA;
TSCII.toPadma[TSCII.consnt_NNA] = Padma.consnt_NNA;
TSCII.toPadma[TSCII.consnt_TA]  = Padma.consnt_TA;
TSCII.toPadma[TSCII.consnt_NA]  = Padma.consnt_NA;
TSCII.toPadma[TSCII.consnt_NNNA] = Padma.consnt_NNNA;
TSCII.toPadma[TSCII.consnt_PA]  = Padma.consnt_PA;
TSCII.toPadma[TSCII.consnt_MA]  = Padma.consnt_MA;
TSCII.toPadma[TSCII.consnt_YA]  = Padma.consnt_YA;
TSCII.toPadma[TSCII.consnt_RA]  = Padma.consnt_RA;
TSCII.toPadma[TSCII.consnt_LA]  = Padma.consnt_LA;
TSCII.toPadma[TSCII.consnt_VA]  = Padma.consnt_VA;
TSCII.toPadma[TSCII.consnt_SSA] = Padma.consnt_SSA;
TSCII.toPadma[TSCII.consnt_SA]  = Padma.consnt_SA;
TSCII.toPadma[TSCII.consnt_HA]  = Padma.consnt_HA;
TSCII.toPadma[TSCII.consnt_LLA] = Padma.consnt_LLA;
TSCII.toPadma[TSCII.consnt_ZHA] = Padma.consnt_ZHA;
TSCII.toPadma[TSCII.consnt_RRA] = Padma.consnt_RRA;
TSCII.toPadma[TSCII.conjct_KSH] = Padma.consnt_KA + Padma.vattu_SSA;
TSCII.toPadma[TSCII.conjct_SRII]= Padma.consnt_SA + Padma.vattu_RA + Padma.vowelsn_II;

//Gunintamulu
TSCII.toPadma[TSCII.vowelsn_AA]  = Padma.vowelsn_AA;
TSCII.toPadma[TSCII.vowelsn_I]   = Padma.vowelsn_I;
TSCII.toPadma[TSCII.vowelsn_II]  = Padma.vowelsn_II;
TSCII.toPadma[TSCII.vowelsn_U]   = Padma.vowelsn_U;
TSCII.toPadma[TSCII.vowelsn_UU]  = Padma.vowelsn_UU;
TSCII.toPadma[TSCII.vowelsn_E]   = Padma.vowelsn_E;
TSCII.toPadma[TSCII.vowelsn_EE]  = Padma.vowelsn_EE;
TSCII.toPadma[TSCII.vowelsn_AI]  = Padma.vowelsn_AI;
TSCII.toPadma[TSCII.vowelsn_AULEN] = Padma.vowelsn_AULEN;

//Special Combinations
TSCII.toPadma[TSCII.combo_KU]      = Padma.consnt_KA + Padma.vowelsn_U;
TSCII.toPadma[TSCII.combo_KUU]     = Padma.consnt_KA + Padma.vowelsn_UU;
TSCII.toPadma[TSCII.combo_KPULLI]  = Padma.consnt_KA + Padma.pulli;
TSCII.toPadma[TSCII.combo_NGU]     = Padma.consnt_NGA + Padma.vowelsn_U;
TSCII.toPadma[TSCII.combo_NGUU]    = Padma.consnt_NGA + Padma.vowelsn_UU;
TSCII.toPadma[TSCII.combo_NGPULLI] = Padma.consnt_NGA + Padma.pulli;
TSCII.toPadma[TSCII.combo_CU]      = Padma.consnt_CA + Padma.vowelsn_U;
TSCII.toPadma[TSCII.combo_CUU]     = Padma.consnt_CA + Padma.vowelsn_UU;
TSCII.toPadma[TSCII.combo_CPULLI]  = Padma.consnt_CA + Padma.pulli;
TSCII.toPadma[TSCII.combo_JPULLI]  = Padma.consnt_JA + Padma.pulli;
TSCII.toPadma[TSCII.combo_NYU]     = Padma.consnt_NYA + Padma.vowelsn_U;
TSCII.toPadma[TSCII.combo_NYUU]    = Padma.consnt_NYA + Padma.vowelsn_UU;
TSCII.toPadma[TSCII.combo_NYPULLI] = Padma.consnt_NYA + Padma.pulli;
TSCII.toPadma[TSCII.combo_TTI]     = Padma.consnt_TTA + Padma.vowelsn_I;
TSCII.toPadma[TSCII.combo_TTII]    = Padma.consnt_TTA + Padma.vowelsn_II;
TSCII.toPadma[TSCII.combo_TTU]     = Padma.consnt_TTA + Padma.vowelsn_U;
TSCII.toPadma[TSCII.combo_TTUU]    = Padma.consnt_TTA + Padma.vowelsn_UU;
TSCII.toPadma[TSCII.combo_TTPULLI] = Padma.consnt_TTA + Padma.pulli;
TSCII.toPadma[TSCII.combo_NNU]     = Padma.consnt_NNA + Padma.vowelsn_U;
TSCII.toPadma[TSCII.combo_NNUU]    = Padma.consnt_NNA + Padma.vowelsn_UU;
TSCII.toPadma[TSCII.combo_NNPULLI] = Padma.consnt_NNA + Padma.pulli;
TSCII.toPadma[TSCII.combo_TU]      = Padma.consnt_TA + Padma.vowelsn_U;
TSCII.toPadma[TSCII.combo_TUU]     = Padma.consnt_TA + Padma.vowelsn_UU;
TSCII.toPadma[TSCII.combo_TPULLI]  = Padma.consnt_TA + Padma.pulli;
TSCII.toPadma[TSCII.combo_NU]      = Padma.consnt_NA + Padma.vowelsn_U;
TSCII.toPadma[TSCII.combo_NUU]     = Padma.consnt_NA + Padma.vowelsn_UU;
TSCII.toPadma[TSCII.combo_NPULLI]  = Padma.consnt_NA + Padma.pulli;
TSCII.toPadma[TSCII.combo_NNNU]    = Padma.consnt_NNNA + Padma.vowelsn_U;
TSCII.toPadma[TSCII.combo_NNNUU]   = Padma.consnt_NNNA + Padma.vowelsn_UU;
TSCII.toPadma[TSCII.combo_NNNPULLI] = Padma.consnt_NNNA + Padma.pulli;
TSCII.toPadma[TSCII.combo_PU]      = Padma.consnt_PA + Padma.vowelsn_U;
TSCII.toPadma[TSCII.combo_PUU]     = Padma.consnt_PA + Padma.vowelsn_UU;
TSCII.toPadma[TSCII.combo_PPULLI]  = Padma.consnt_PA + Padma.pulli;
TSCII.toPadma[TSCII.combo_MU]      = Padma.consnt_MA + Padma.vowelsn_U;
TSCII.toPadma[TSCII.combo_MUU]     = Padma.consnt_MA + Padma.vowelsn_UU;
TSCII.toPadma[TSCII.combo_MPULLI]  = Padma.consnt_MA + Padma.pulli;
TSCII.toPadma[TSCII.combo_YU]      = Padma.consnt_YA + Padma.vowelsn_U;
TSCII.toPadma[TSCII.combo_YUU]     = Padma.consnt_YA + Padma.vowelsn_UU;
TSCII.toPadma[TSCII.combo_YPULLI]  = Padma.consnt_YA + Padma.pulli;
TSCII.toPadma[TSCII.combo_RU]      = Padma.consnt_RA + Padma.vowelsn_U;
TSCII.toPadma[TSCII.combo_RUU]     = Padma.consnt_RA + Padma.vowelsn_UU;
TSCII.toPadma[TSCII.combo_RPULLI]  = Padma.consnt_RA + Padma.pulli;
TSCII.toPadma[TSCII.combo_LU]      = Padma.consnt_LA + Padma.vowelsn_U;
TSCII.toPadma[TSCII.combo_LUU]     = Padma.consnt_LA + Padma.vowelsn_UU;
TSCII.toPadma[TSCII.combo_LPULLI]  = Padma.consnt_LA + Padma.pulli;
TSCII.toPadma[TSCII.combo_VU]      = Padma.consnt_VA + Padma.vowelsn_U;
TSCII.toPadma[TSCII.combo_VUU]     = Padma.consnt_VA + Padma.vowelsn_UU;
TSCII.toPadma[TSCII.combo_VPULLI]  = Padma.consnt_VA + Padma.pulli;
TSCII.toPadma[TSCII.combo_SSPULLI] = Padma.consnt_SSA + Padma.pulli;
TSCII.toPadma[TSCII.combo_SPULLI]  = Padma.consnt_SA + Padma.pulli;
TSCII.toPadma[TSCII.combo_HPULLI]  = Padma.consnt_HA + Padma.pulli;
TSCII.toPadma[TSCII.combo_LLU]     = Padma.consnt_LLA + Padma.vowelsn_U;
TSCII.toPadma[TSCII.combo_LLUU]    = Padma.consnt_LLA + Padma.vowelsn_UU;
TSCII.toPadma[TSCII.combo_LLPULLI] = Padma.consnt_LLA + Padma.pulli;
TSCII.toPadma[TSCII.combo_ZHU]     = Padma.consnt_ZHA + Padma.vowelsn_U;
TSCII.toPadma[TSCII.combo_ZHUU]    = Padma.consnt_ZHA + Padma.vowelsn_UU;
TSCII.toPadma[TSCII.combo_ZHPULLI] = Padma.consnt_ZHA + Padma.pulli;
TSCII.toPadma[TSCII.combo_RRU]     = Padma.consnt_RRA + Padma.vowelsn_U;
TSCII.toPadma[TSCII.combo_RRUU]    = Padma.consnt_RRA + Padma.vowelsn_UU;
TSCII.toPadma[TSCII.combo_RRPULLI] = Padma.consnt_RRA + Padma.pulli;
TSCII.toPadma[TSCII.combo_KSHPULLI]= Padma.consnt_KA + Padma.vattu_SSA + Padma.pulli;

TSCII.toPadma[TSCII.LQTSINGLE]   = "\u2018";
TSCII.toPadma[TSCII.RQTSINGLE]   = "\u2019";
TSCII.toPadma[TSCII.LQTDOUBLE]   = "\u201C";
TSCII.toPadma[TSCII.RQTDOUBLE]   = "\u201D";

TSCII.toPadma[TSCII.digit_ZERO]    = Padma.digit_ZERO;
TSCII.toPadma[TSCII.digit_ONE]     = Padma.digit_ONE;
TSCII.toPadma[TSCII.digit_TWO]     = Padma.digit_TWO;
TSCII.toPadma[TSCII.digit_THREE]   = Padma.digit_THREE;
TSCII.toPadma[TSCII.digit_FOUR]    = Padma.digit_FOUR;
TSCII.toPadma[TSCII.digit_FIVE]    = Padma.digit_FIVE;
TSCII.toPadma[TSCII.digit_SIX]     = Padma.digit_SIX;
TSCII.toPadma[TSCII.digit_SEVEN]   = Padma.digit_SEVEN;
TSCII.toPadma[TSCII.digit_EIGHT]   = Padma.digit_EIGHT;
TSCII.toPadma[TSCII.digit_NINE]    = Padma.digit_NINE;
TSCII.toPadma[TSCII.digit_TEN]     = Padma.digit_TEN;
TSCII.toPadma[TSCII.digit_HUNDRED] = Padma.digit_HUNDRED;
TSCII.toPadma[TSCII.digit_THOUSAND] = Padma.digit_THOUSAND;

TSCII.prefixList = new Object();
TSCII.prefixList[TSCII.vowelsn_E]   = true;
TSCII.prefixList[TSCII.vowelsn_EE]  = true;
TSCII.prefixList[TSCII.vowelsn_AI]  = true;
