// $Id: TAM.js,v 1.1 2006/03/03 15:39:05 vnagarjuna Exp $ -->

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

//The TAM standard (http://www.tamilvu.org/Tamilnet99/encstd.htm)
function TAM()
{
}

//The interface every dynamic font encoding should implement
TAM.maxLookupLen = 3;
TAM.fontFace     = "TAM";
TAM.displayName  = "TAM";
TAM.script       = Padma.script_TAMIL;

TAM.lookup = function (str) 
{
    return TAM.toPadma[str];
}

TAM.isPrefixSymbol = function (str)
{
    return TAM.prefixList[str] != null;
}

TAM.isOverloaded = function (str)
{
    return TAM.overloadList[str] != null;
}

TAM.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if (sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_AA)
        return Padma.vowelsn_O;
    if (sign2 == Padma.vowelsn_EE && sign1 == Padma.vowelsn_AA)
        return Padma.vowelsn_OO;
    return sign1 + sign2;    
}

TAM.preprocessMessage = function (input)
{
    return input;
}

//Implementation details start here

//Specials
TAM.visarga        = "\u00E7";  //aytham
TAM.virama         = "\u00A2";

//Vowels
TAM.vowel_A        = "\u00DC";
TAM.vowel_AA       = "\u00DD";
TAM.vowel_I        = "\u00DE";
TAM.vowel_II       = "\u00DF";
TAM.vowel_U        = "\u00E0";
TAM.vowel_UU       = "\u00E1";
TAM.vowel_E        = "\u00E2";
TAM.vowel_EE       = "\u00E3";
TAM.vowel_AI       = "\u00E4";
TAM.vowel_O        = "\u00E5";
TAM.vowel_OO       = "\u00E6";
TAM.vowel_AU       = "\u00E5\u00F7";

//Consonants
TAM.consnt_KA      = "\u00E8";
TAM.consnt_NGA     = "\u00E9";

TAM.consnt_CA      = "\u00EA";
TAM.consnt_JA      = "\u00FC";
TAM.consnt_NYA     = "\u00EB";

TAM.consnt_TTA     = "\u00EC";
TAM.consnt_NNA     = "\u00ED";

TAM.consnt_TA      = "\u00EE";
TAM.consnt_NA      = "\u00EF";
TAM.consnt_NNNA    = "\u00F9";

TAM.consnt_PA      = "\u00F0";
TAM.consnt_MA      = "\u00F1";

TAM.consnt_YA      = "\u00F2";
TAM.consnt_RA      = "\u00F3";
TAM.consnt_LA      = "\u00F4";
TAM.consnt_VA      = "\u00F5";
TAM.consnt_SSA     = "\u00FB";
TAM.consnt_SA      = "\u00FA";
TAM.consnt_HA      = "\u00FD";
TAM.consnt_LLA     = "\u00F7";
TAM.consnt_ZHA     = "\u00F6";
TAM.consnt_RRA     = "\u00F8";
TAM.conjct_KSH     = "\u00FE";
TAM.conjct_SRII    = "\u00FF";

//Gunintamulu
TAM.vowelsn_AA     = "\u00A3";
TAM.vowelsn_I      = "\u00A4";
TAM.vowelsn_II     = "\u00A6";
TAM.vowelsn_U      = "\u00A7";	
TAM.vowelsn_UU     = "\u00A8";
TAM.vowelsn_E      = "\u00AA";
TAM.vowelsn_EE     = "\u00AB";
TAM.vowelsn_AI     = "\u00AC";

//TAM uses the same symbol for generating vowelsn_AU and consnt_LLA. This is a work around
TAM.combo_KAU      = "\u00AA\u00E8\u00F7";
TAM.combo_NGAU     = "\u00AA\u00E9\u00F7";
TAM.combo_CAU      = "\u00AA\u00EA\u00F7";
TAM.combo_JAU      = "\u00AA\u00FC\u00F7";
TAM.combo_NYAU     = "\u00AA\u00EB\u00F7";
TAM.combo_TTAU     = "\u00AA\u00EC\u00F7";
TAM.combo_NNAU     = "\u00AA\u00ED\u00F7";
TAM.combo_TAU      = "\u00AA\u00EE\u00F7";
TAM.combo_NAU      = "\u00AA\u00EF\u00F7";
TAM.combo_NNNAU    = "\u00AA\u00F9\u00F7";
TAM.combo_PAU      = "\u00AA\u00F0\u00F7";
TAM.combo_MAU      = "\u00AA\u00F1\u00F7";
TAM.combo_YAU      = "\u00AA\u00F2\u00F7";
TAM.combo_RAU      = "\u00AA\u00F3\u00F7";
TAM.combo_LAU      = "\u00AA\u00F4\u00F7";
TAM.combo_VAU      = "\u00AA\u00F5\u00F7";
TAM.combo_SSAU     = "\u00AA\u00FB\u00F7";
TAM.combo_SAU      = "\u00AA\u00FA\u00F7";
TAM.combo_HAU      = "\u00AA\u00FD\u00F7";
TAM.combo_LLAU     = "\u00AA\u00F7\u00F7";
TAM.combo_ZHAU     = "\u00AA\u00F6\u00F7";
TAM.combo_RRAU     = "\u00AA\u00F8\u00F7";
TAM.combo_KSHAU    = "\u00AA\u00FE\u00F7";

//Special Combinations
TAM.combo_KI      = "\u0041";
TAM.combo_KII     = "\u0057";
TAM.combo_KU      = "\u00B0";
TAM.combo_KUU     = "\u00C3";
TAM.combo_KPULLI  = "\u201A";
TAM.combo_NGI     = "\u0042";
TAM.combo_NGII    = "\u0058";
TAM.combo_NGU     = "\u00B1";
TAM.combo_NGUU    = "\u00C4";
TAM.combo_NGPULLI = "\u0192";

TAM.combo_CI      = "\u0043";
TAM.combo_CII     = "\u0059";
TAM.combo_CU      = "\u00B2";
TAM.combo_CUU     = "\u00C5";
TAM.combo_CPULLI  = "\u201E";
TAM.combo_JI      = "\u0054";
TAM.combo_JII     = "\u0070";
TAM.combo_JPULLI  = "\u0078";
TAM.combo_NYI     = "\u0044";
TAM.combo_NYII    = "\u005A";
TAM.combo_NYU     = "\u00B3";
TAM.combo_NYUU    = "\u00C6";
TAM.combo_NYPULLI = "\u2026";

TAM.combo_TTI     = "\u00AE";
TAM.combo_TTII    = "\u00AF";
TAM.combo_TTU     = "\u00B4";
TAM.combo_TTUU    = "\u00C7";
TAM.combo_TTPULLI = "\u2020";
TAM.combo_NNI     = "\u0045";
TAM.combo_NNII    = "\u0061";
TAM.combo_NNU     = "\u00B5";
TAM.combo_NNUU    = "\u00C8";
TAM.combo_NNPULLI = "\u2021";

TAM.combo_TI      = "\u0046";
TAM.combo_TII     = "\u0062";
TAM.combo_TU      = "\u00B6";
TAM.combo_TUU     = "\u00C9";
TAM.combo_TPULLI  = "\u02C6";
TAM.combo_NI      = "\u0047";
TAM.combo_NII     = "\u0063";
TAM.combo_NU      = "\u00B8";
TAM.combo_NUU     = "\u00CB";
TAM.combo_NPULLI  = "\u2030";
TAM.combo_NNNI    = "\u0051";
TAM.combo_NNNII   = "\u006D";
TAM.combo_NNNU    = "\u00C2";
TAM.combo_NNNUU   = "\u00DB";
TAM.combo_NNNPULLI= "\u00A1";

TAM.combo_PI      = "\u0048";
TAM.combo_PII     = "\u0064";
TAM.combo_PU      = "\u00B9";
TAM.combo_PUU     = "\u00CC";
TAM.combo_PPULLI  = "\u0160";
TAM.combo_MI      = "\u0049";
TAM.combo_MII     = "\u0065";
TAM.combo_MU      = "\u00BA";
TAM.combo_MUU     = "\u00CD";
TAM.combo_MPULLI  = "\u2039";

TAM.combo_YI      = "\u004A";
TAM.combo_YII     = "\u0066";
TAM.combo_YU      = "\u00BB";
TAM.combo_YUU     = "\u00CE";
TAM.combo_YPULLI  = "\u0152";
TAM.combo_RI      = "\u004B";
TAM.combo_RII     = "\u0067";
TAM.combo_RU      = "\u00BC";
TAM.combo_RUU     = "\u00CF";
TAM.combo_RPULLI  = "\u02DC";
TAM.combo_LI      = "\u004C";
TAM.combo_LII     = "\u0068";
TAM.combo_LU      = "\u00BD";
TAM.combo_LUU     = "\u00D6";
TAM.combo_LPULLI  = "\u2122";
TAM.combo_VI      = "\u004D";
TAM.combo_VII     = "\u0069";
TAM.combo_VU      = "\u00BE";
TAM.combo_VUU     = "\u00D7";
TAM.combo_VPULLI  = "\u0161";

TAM.combo_SSI     = "\u0053";
TAM.combo_SSII    = "\u006F";
TAM.combo_SSPULLI = "\u0077";
TAM.combo_SI      = "\u0052";
TAM.combo_SII     = "\u006E";
TAM.combo_SPULLI  = "\u0076";
TAM.combo_HI      = "\u0055";
TAM.combo_HII     = "\u0071";
TAM.combo_HPULLI  = "\u0079";

TAM.combo_LLI     = "\u004F";
TAM.combo_LLII    = "\u006B";
TAM.combo_LLU     = "\u00C0";
TAM.combo_LLUU    = "\u00D9";
TAM.combo_LLPULLI = "\u0153";
TAM.combo_ZHI     = "\u004E";
TAM.combo_ZHII    = "\u006A";
TAM.combo_ZHU     = "\u00BF";
TAM.combo_ZHUU    = "\u00D8";
TAM.combo_ZHPULLI = "\u203A";
TAM.combo_RRI     = "\u0050";
TAM.combo_RRII    = "\u006C";
TAM.combo_RRU     = "\u00C1";
TAM.combo_RRUU    = "\u00DA";
TAM.combo_RRPULLI = "\u0178";
TAM.combo_KSHI    = "\u0056";
TAM.combo_KSHII   = "\u0072";
TAM.combo_KSHPULLI= "\u007A";

//Misc
TAM.sign_DAY       = "\u0073";
TAM.sign_MONTH     = "\u0074";
TAM.sign_YEAR      = "\u0075";
TAM.sign_RUPEE     = "\u2013";
TAM.sign_DITTO     = "\u2014";
TAM.sign_NUMBER    = "\u00AD";
TAM.sign_DEBIT     = "\u00D0";
TAM.sign_CREDIT    = "\u00D1";

//Matches ASCII
TAM.EXCLAM         = "\u0021";
TAM.QTDOUBLE       = "\u0022";
TAM.HASH           = "\u0023";
TAM.DOLLAR         = "\u0024";
TAM.PERCENT        = "\u0025";
TAM.QTSINGLE       = "\u0027";
TAM.PARENLEFT      = "\u0028";
TAM.PARENRIGT      = "\u0029";
TAM.ASTERISK       = "\u002A";
TAM.PLUS           = "\u002B";
TAM.COMMA          = "\u002C";
TAM.PERIOD         = "\u002E";
TAM.SLASH          = "\u002F";
TAM.COLON          = "\u003A";
TAM.SEMICOLON      = "\u003B";
TAM.LESSTHAN       = "\u003C";
TAM.EQUALS         = "\u003D";
TAM.GREATERTHAN    = "\u003E";
TAM.QUESTION       = "\u003F";
TAM.ATSIGN         = "\u0040";

TAM.digit_ZERO     = "\u0030";
TAM.digit_ONE      = "\u0031";
TAM.digit_TWO      = "\u0032";
TAM.digit_THREE    = "\u0033";
TAM.digit_FOUR     = "\u0034";
TAM.digit_FIVE     = "\u0035";
TAM.digit_SIX      = "\u0036";
TAM.digit_SEVEN    = "\u0037";
TAM.digit_EIGHT    = "\u0038";
TAM.digit_NINE     = "\u0039";

//Does not match ASCII
TAM.HYPHEN         = "\u0026";
TAM.LQTSINGLE_1    = "\u2018";
TAM.LQTSINGLE_2    = "\u00D4";
TAM.RQTSINGLE_1    = "\u2019";
TAM.RQTSINGLE_2    = "\u00D5";
TAM.LQTDOUBLE_1    = "\u201C";
TAM.LQTDOUBLE_2    = "\u00D2";
TAM.RQTDOUBLE_1    = "\u201D";
TAM.RQTDOUBLE_2    = "\u00D3";

TAM.toPadma = new Object();

TAM.toPadma[TAM.visarga]  = Padma.visarga;
TAM.toPadma[TAM.virama]   = Padma.virama;
TAM.toPadma[TAM.vowel_A]  = Padma.vowel_A;
TAM.toPadma[TAM.vowel_AA] = Padma.vowel_AA;
TAM.toPadma[TAM.vowel_I]  = Padma.vowel_I;
TAM.toPadma[TAM.vowel_II] = Padma.vowel_II;
TAM.toPadma[TAM.vowel_U]  = Padma.vowel_U;
TAM.toPadma[TAM.vowel_UU] = Padma.vowel_UU;
TAM.toPadma[TAM.vowel_E]  = Padma.vowel_E;
TAM.toPadma[TAM.vowel_EE] = Padma.vowel_EE;
TAM.toPadma[TAM.vowel_AI] = Padma.vowel_AI;
TAM.toPadma[TAM.vowel_O]  = Padma.vowel_O;
TAM.toPadma[TAM.vowel_OO] = Padma.vowel_OO;
TAM.toPadma[TAM.vowel_AU] = Padma.vowel_AU;

TAM.toPadma[TAM.consnt_KA]  = Padma.consnt_KA;
TAM.toPadma[TAM.consnt_NGA] = Padma.consnt_NGA;
TAM.toPadma[TAM.consnt_CA]  = Padma.consnt_CA;
TAM.toPadma[TAM.consnt_JA]  = Padma.consnt_JA;
TAM.toPadma[TAM.consnt_NYA] = Padma.consnt_NYA;
TAM.toPadma[TAM.consnt_TTA] = Padma.consnt_TTA;
TAM.toPadma[TAM.consnt_NNA] = Padma.consnt_NNA;
TAM.toPadma[TAM.consnt_TA]  = Padma.consnt_TA;
TAM.toPadma[TAM.consnt_NA]  = Padma.consnt_NA;
TAM.toPadma[TAM.consnt_NNNA] = Padma.consnt_NNNA;
TAM.toPadma[TAM.consnt_PA]  = Padma.consnt_PA;
TAM.toPadma[TAM.consnt_MA]  = Padma.consnt_MA;
TAM.toPadma[TAM.consnt_YA]  = Padma.consnt_YA;
TAM.toPadma[TAM.consnt_RA]  = Padma.consnt_RA;
TAM.toPadma[TAM.consnt_LA]  = Padma.consnt_LA;
TAM.toPadma[TAM.consnt_VA]  = Padma.consnt_VA;
TAM.toPadma[TAM.consnt_SSA] = Padma.consnt_SSA;
TAM.toPadma[TAM.consnt_SA]  = Padma.consnt_SA;
TAM.toPadma[TAM.consnt_HA]  = Padma.consnt_HA;
TAM.toPadma[TAM.consnt_LLA] = Padma.consnt_LLA;
TAM.toPadma[TAM.consnt_ZHA] = Padma.consnt_ZHA;
TAM.toPadma[TAM.consnt_RRA] = Padma.consnt_RRA;
TAM.toPadma[TAM.conjct_KSH] = Padma.consnt_KA + Padma.vattu_SSA;
TAM.toPadma[TAM.conjct_SRII]= Padma.consnt_SA + Padma.vattu_RA + Padma.vowelsn_II;

//Gunintamulu
TAM.toPadma[TAM.vowelsn_AA]  = Padma.vowelsn_AA;
TAM.toPadma[TAM.vowelsn_I]   = Padma.vowelsn_I;
TAM.toPadma[TAM.vowelsn_II]  = Padma.vowelsn_II;
TAM.toPadma[TAM.vowelsn_U]   = Padma.vowelsn_U;
TAM.toPadma[TAM.vowelsn_UU]  = Padma.vowelsn_UU;
TAM.toPadma[TAM.vowelsn_E]   = Padma.vowelsn_E;
TAM.toPadma[TAM.vowelsn_EE]  = Padma.vowelsn_EE;
TAM.toPadma[TAM.vowelsn_AI]  = Padma.vowelsn_AI;

TAM.combo_KAU      = Padma.consnt_KA + Padma.vowelsn_AU;
TAM.combo_NGAU     = Padma.consnt_NGA + Padma.vowelsn_AU;
TAM.combo_CAU      = Padma.consnt_CA + Padma.vowelsn_AU;
TAM.combo_JAU      = Padma.consnt_JA + Padma.vowelsn_AU;
TAM.combo_NYAU     = Padma.consnt_NYA + Padma.vowelsn_AU;
TAM.combo_TTAU     = Padma.consnt_TTA + Padma.vowelsn_AU;
TAM.combo_NNAU     = Padma.consnt_NNA + Padma.vowelsn_AU;
TAM.combo_TAU      = Padma.consnt_TA + Padma.vowelsn_AU;
TAM.combo_NAU      = Padma.consnt_NA + Padma.vowelsn_AU;
TAM.combo_NNNAU    = Padma.consnt_NNNA + Padma.vowelsn_AU;
TAM.combo_PAU      = Padma.consnt_PA + Padma.vowelsn_AU;
TAM.combo_MAU      = Padma.consnt_MA + Padma.vowelsn_AU;
TAM.combo_YAU      = Padma.consnt_YA + Padma.vowelsn_AU;
TAM.combo_RAU      = Padma.consnt_RA + Padma.vowelsn_AU;
TAM.combo_LAU      = Padma.consnt_LA + Padma.vowelsn_AU;
TAM.combo_VAU      = Padma.consnt_VA + Padma.vowelsn_AU;
TAM.combo_SSAU     = Padma.consnt_SSA + Padma.vowelsn_AU;
TAM.combo_SAU      = Padma.consnt_SA + Padma.vowelsn_AU;
TAM.combo_HAU      = Padma.consnt_HA + Padma.vowelsn_AU;
TAM.combo_LLAU     = Padma.consnt_LLA + Padma.vowelsn_AU;
TAM.combo_ZHAU     = Padma.consnt_ZHA + Padma.vowelsn_AU;
TAM.combo_RRAU     = Padma.consnt_RRA + Padma.vowelsn_AU;
TAM.combo_KSHAU    = Padma.consnt_KA + Padma.vattu_SSA + Padma.vowelsn_AU;

//Special Combinations
TAM.toPadma[TAM.combo_KI]      = Padma.consnt_KA + Padma.vowelsn_I;
TAM.toPadma[TAM.combo_KII]     = Padma.consnt_KA + Padma.vowelsn_II;
TAM.toPadma[TAM.combo_KU]      = Padma.consnt_KA + Padma.vowelsn_U;
TAM.toPadma[TAM.combo_KUU]     = Padma.consnt_KA + Padma.vowelsn_UU;
TAM.toPadma[TAM.combo_KPULLI]  = Padma.consnt_KA + Padma.pulli;
TAM.toPadma[TAM.combo_NGI]     = Padma.consnt_NGA + Padma.vowelsn_I;
TAM.toPadma[TAM.combo_NGII]    = Padma.consnt_NGA + Padma.vowelsn_II;
TAM.toPadma[TAM.combo_NGU]     = Padma.consnt_NGA + Padma.vowelsn_U;
TAM.toPadma[TAM.combo_NGUU]    = Padma.consnt_NGA + Padma.vowelsn_UU;
TAM.toPadma[TAM.combo_NGPULLI] = Padma.consnt_NGA + Padma.pulli;
TAM.toPadma[TAM.combo_CI]      = Padma.consnt_CA + Padma.vowelsn_I;
TAM.toPadma[TAM.combo_CII]     = Padma.consnt_CA + Padma.vowelsn_II;
TAM.toPadma[TAM.combo_CU]      = Padma.consnt_CA + Padma.vowelsn_U;
TAM.toPadma[TAM.combo_CUU]     = Padma.consnt_CA + Padma.vowelsn_UU;
TAM.toPadma[TAM.combo_CPULLI]  = Padma.consnt_CA + Padma.pulli;
TAM.toPadma[TAM.combo_JI]      = Padma.consnt_JA + Padma.vowelsn_I;
TAM.toPadma[TAM.combo_JII]     = Padma.consnt_JA + Padma.vowelsn_II;
TAM.toPadma[TAM.combo_JPULLI]  = Padma.consnt_JA + Padma.pulli;
TAM.toPadma[TAM.combo_NYI]     = Padma.consnt_NYA + Padma.vowelsn_I;
TAM.toPadma[TAM.combo_NYII]    = Padma.consnt_NYA + Padma.vowelsn_II;
TAM.toPadma[TAM.combo_NYU]     = Padma.consnt_NYA + Padma.vowelsn_U;
TAM.toPadma[TAM.combo_NYUU]    = Padma.consnt_NYA + Padma.vowelsn_UU;
TAM.toPadma[TAM.combo_NYPULLI] = Padma.consnt_NYA + Padma.pulli;
TAM.toPadma[TAM.combo_TTI]     = Padma.consnt_TTA + Padma.vowelsn_I;
TAM.toPadma[TAM.combo_TTII]    = Padma.consnt_TTA + Padma.vowelsn_II;
TAM.toPadma[TAM.combo_TTU]     = Padma.consnt_TTA + Padma.vowelsn_U;
TAM.toPadma[TAM.combo_TTUU]    = Padma.consnt_TTA + Padma.vowelsn_UU;
TAM.toPadma[TAM.combo_TTPULLI] = Padma.consnt_TTA + Padma.pulli;
TAM.toPadma[TAM.combo_NNI]     = Padma.consnt_NNA + Padma.vowelsn_I;
TAM.toPadma[TAM.combo_NNII]    = Padma.consnt_NNA + Padma.vowelsn_II;
TAM.toPadma[TAM.combo_NNU]     = Padma.consnt_NNA + Padma.vowelsn_U;
TAM.toPadma[TAM.combo_NNUU]    = Padma.consnt_NNA + Padma.vowelsn_UU;
TAM.toPadma[TAM.combo_NNPULLI] = Padma.consnt_NNA + Padma.pulli;
TAM.toPadma[TAM.combo_TI]      = Padma.consnt_TA + Padma.vowelsn_I;
TAM.toPadma[TAM.combo_TII]     = Padma.consnt_TA + Padma.vowelsn_II;
TAM.toPadma[TAM.combo_TU]      = Padma.consnt_TA + Padma.vowelsn_U;
TAM.toPadma[TAM.combo_TUU]     = Padma.consnt_TA + Padma.vowelsn_UU;
TAM.toPadma[TAM.combo_TPULLI]  = Padma.consnt_TA + Padma.pulli;
TAM.toPadma[TAM.combo_NI]      = Padma.consnt_NA + Padma.vowelsn_I;
TAM.toPadma[TAM.combo_NII]     = Padma.consnt_NA + Padma.vowelsn_II;
TAM.toPadma[TAM.combo_NU]      = Padma.consnt_NA + Padma.vowelsn_U;
TAM.toPadma[TAM.combo_NUU]     = Padma.consnt_NA + Padma.vowelsn_UU;
TAM.toPadma[TAM.combo_NPULLI]  = Padma.consnt_NA + Padma.pulli;
TAM.toPadma[TAM.combo_NNNI]    = Padma.consnt_NNNA + Padma.vowelsn_I;
TAM.toPadma[TAM.combo_NNNII]   = Padma.consnt_NNNA + Padma.vowelsn_II;
TAM.toPadma[TAM.combo_NNNU]    = Padma.consnt_NNNA + Padma.vowelsn_U;
TAM.toPadma[TAM.combo_NNNUU]   = Padma.consnt_NNNA + Padma.vowelsn_UU;
TAM.toPadma[TAM.combo_NNNPULLI] = Padma.consnt_NNNA + Padma.pulli;
TAM.toPadma[TAM.combo_PI]      = Padma.consnt_PA + Padma.vowelsn_I;
TAM.toPadma[TAM.combo_PII]     = Padma.consnt_PA + Padma.vowelsn_II;
TAM.toPadma[TAM.combo_PU]      = Padma.consnt_PA + Padma.vowelsn_U;
TAM.toPadma[TAM.combo_PUU]     = Padma.consnt_PA + Padma.vowelsn_UU;
TAM.toPadma[TAM.combo_PPULLI]  = Padma.consnt_PA + Padma.pulli;
TAM.toPadma[TAM.combo_MI]      = Padma.consnt_MA + Padma.vowelsn_I;
TAM.toPadma[TAM.combo_MII]     = Padma.consnt_MA + Padma.vowelsn_II;
TAM.toPadma[TAM.combo_MU]      = Padma.consnt_MA + Padma.vowelsn_U;
TAM.toPadma[TAM.combo_MUU]     = Padma.consnt_MA + Padma.vowelsn_UU;
TAM.toPadma[TAM.combo_MPULLI]  = Padma.consnt_MA + Padma.pulli;
TAM.toPadma[TAM.combo_YI]      = Padma.consnt_YA + Padma.vowelsn_I;
TAM.toPadma[TAM.combo_YII]     = Padma.consnt_YA + Padma.vowelsn_II;
TAM.toPadma[TAM.combo_YU]      = Padma.consnt_YA + Padma.vowelsn_U;
TAM.toPadma[TAM.combo_YUU]     = Padma.consnt_YA + Padma.vowelsn_UU;
TAM.toPadma[TAM.combo_YPULLI]  = Padma.consnt_YA + Padma.pulli;
TAM.toPadma[TAM.combo_RI]      = Padma.consnt_RA + Padma.vowelsn_I;
TAM.toPadma[TAM.combo_RII]     = Padma.consnt_RA + Padma.vowelsn_II;
TAM.toPadma[TAM.combo_RU]      = Padma.consnt_RA + Padma.vowelsn_U;
TAM.toPadma[TAM.combo_RUU]     = Padma.consnt_RA + Padma.vowelsn_UU;
TAM.toPadma[TAM.combo_RPULLI]  = Padma.consnt_RA + Padma.pulli;
TAM.toPadma[TAM.combo_LU]      = Padma.consnt_LA + Padma.vowelsn_U;
TAM.toPadma[TAM.combo_LUU]     = Padma.consnt_LA + Padma.vowelsn_UU;
TAM.toPadma[TAM.combo_LI]      = Padma.consnt_LA + Padma.vowelsn_I;
TAM.toPadma[TAM.combo_LII]     = Padma.consnt_LA + Padma.vowelsn_II;
TAM.toPadma[TAM.combo_LPULLI]  = Padma.consnt_LA + Padma.pulli;
TAM.toPadma[TAM.combo_VI]      = Padma.consnt_VA + Padma.vowelsn_I;
TAM.toPadma[TAM.combo_VII]     = Padma.consnt_VA + Padma.vowelsn_II;
TAM.toPadma[TAM.combo_VU]      = Padma.consnt_VA + Padma.vowelsn_U;
TAM.toPadma[TAM.combo_VUU]     = Padma.consnt_VA + Padma.vowelsn_UU;
TAM.toPadma[TAM.combo_VPULLI]  = Padma.consnt_VA + Padma.pulli;
TAM.toPadma[TAM.combo_SSI]     = Padma.consnt_SSA + Padma.vowelsn_I;
TAM.toPadma[TAM.combo_SSII]    = Padma.consnt_SSA + Padma.vowelsn_II;
TAM.toPadma[TAM.combo_SSPULLI] = Padma.consnt_SSA + Padma.pulli;
TAM.toPadma[TAM.combo_SI]      = Padma.consnt_SA + Padma.vowelsn_I;
TAM.toPadma[TAM.combo_SII]     = Padma.consnt_SA + Padma.vowelsn_II;
TAM.toPadma[TAM.combo_SPULLI]  = Padma.consnt_SA + Padma.pulli;
TAM.toPadma[TAM.combo_HI]      = Padma.consnt_HA + Padma.vowelsn_I;
TAM.toPadma[TAM.combo_HII]     = Padma.consnt_HA + Padma.vowelsn_II;
TAM.toPadma[TAM.combo_HPULLI]  = Padma.consnt_HA + Padma.pulli;
TAM.toPadma[TAM.combo_LLI]     = Padma.consnt_LLA + Padma.vowelsn_I;
TAM.toPadma[TAM.combo_LLII]    = Padma.consnt_LLA + Padma.vowelsn_II;
TAM.toPadma[TAM.combo_LLU]     = Padma.consnt_LLA + Padma.vowelsn_U;
TAM.toPadma[TAM.combo_LLUU]    = Padma.consnt_LLA + Padma.vowelsn_UU;
TAM.toPadma[TAM.combo_LLPULLI] = Padma.consnt_LLA + Padma.pulli;
TAM.toPadma[TAM.combo_ZHI]     = Padma.consnt_ZHA + Padma.vowelsn_I;
TAM.toPadma[TAM.combo_ZHII]    = Padma.consnt_ZHA + Padma.vowelsn_II;
TAM.toPadma[TAM.combo_ZHU]     = Padma.consnt_ZHA + Padma.vowelsn_U;
TAM.toPadma[TAM.combo_ZHUU]    = Padma.consnt_ZHA + Padma.vowelsn_UU;
TAM.toPadma[TAM.combo_ZHPULLI] = Padma.consnt_ZHA + Padma.pulli;
TAM.toPadma[TAM.combo_RRI]     = Padma.consnt_RRA + Padma.vowelsn_I;
TAM.toPadma[TAM.combo_RRII]    = Padma.consnt_RRA + Padma.vowelsn_II;
TAM.toPadma[TAM.combo_RRU]     = Padma.consnt_RRA + Padma.vowelsn_U;
TAM.toPadma[TAM.combo_RRUU]    = Padma.consnt_RRA + Padma.vowelsn_UU;
TAM.toPadma[TAM.combo_RRPULLI] = Padma.consnt_RRA + Padma.pulli;
TAM.toPadma[TAM.combo_KSHI]    = Padma.consnt_KA + Padma.vattu_SSA + Padma.vowelsn_I;
TAM.toPadma[TAM.combo_KSHII]   = Padma.consnt_KA + Padma.vattu_SSA + Padma.vowelsn_II;
TAM.toPadma[TAM.combo_KSHPULLI]= Padma.consnt_KA + Padma.vattu_SSA + Padma.pulli;

TAM.toPadma[TAM.HYPHEN]      = "-";
TAM.toPadma[TAM.LQTSINGLE_1] = "\u2018";
TAM.toPadma[TAM.LQTSINGLE_2] = "\u2018";
TAM.toPadma[TAM.RQTSINGLE_1] = "\u2019";
TAM.toPadma[TAM.RQTSINGLE_2] = "\u2019";
TAM.toPadma[TAM.LQTDOUBLE_1] = "\u201C";
TAM.toPadma[TAM.LQTDOUBLE_2] = "\u201C";
TAM.toPadma[TAM.RQTDOUBLE_1] = "\u201D";
TAM.toPadma[TAM.RQTDOUBLE_2] = "\u201D";

TAM.toPadma[TAM.sign_DAY]    = Padma.sign_DAY;
TAM.toPadma[TAM.sign_MONTH]  = Padma.sign_MONTH;
TAM.toPadma[TAM.sign_YEAR]   = Padma.sign_YEAR;
TAM.toPadma[TAM.sign_RUPEE]  = Padma.sign_RUPEE;
TAM.toPadma[TAM.sign_DITTO]  = Padma.sign_ASABOVE;
TAM.toPadma[TAM.sign_NUMBER] = Padma.sign_NUMBER;
TAM.toPadma[TAM.sign_DEBIT]  = Padma.sign_DEBIT;
TAM.toPadma[TAM.sign_CREDIT] = Padma.sign_CREDIT;

TAM.prefixList = new Object();
TAM.prefixList[TAM.vowelsn_E]   = true;
TAM.prefixList[TAM.vowelsn_EE]  = true;
TAM.prefixList[TAM.vowelsn_AI]  = true;

TAM.overloadList = new Object();
TAM.overloadList[TAM.vowel_O]   = true;
TAM.overloadList[TAM.vowelsn_E] = true;
TAM.overloadList["\u00AA\u00E8"]    = true;
TAM.overloadList["\u00AA\u00E9"]    = true;
TAM.overloadList["\u00AA\u00EA"]    = true;
TAM.overloadList["\u00AA\u00FC"]    = true;
TAM.overloadList["\u00AA\u00EB"]    = true;
TAM.overloadList["\u00AA\u00EC"]    = true;
TAM.overloadList["\u00AA\u00ED"]    = true;
TAM.overloadList["\u00AA\u00EE"]    = true;
TAM.overloadList["\u00AA\u00EF"]    = true;
TAM.overloadList["\u00AA\u00F9"]    = true;
TAM.overloadList["\u00AA\u00F0"]    = true;
TAM.overloadList["\u00AA\u00F1"]    = true;
TAM.overloadList["\u00AA\u00F2"]    = true;
TAM.overloadList["\u00AA\u00F3"]    = true;
TAM.overloadList["\u00AA\u00F4"]    = true;
TAM.overloadList["\u00AA\u00F5"]    = true;
TAM.overloadList["\u00AA\u00FB"]    = true;
TAM.overloadList["\u00AA\u00FA"]    = true;
TAM.overloadList["\u00AA\u00FD"]    = true;
TAM.overloadList["\u00AA\u00F7"]    = true;
TAM.overloadList["\u00AA\u00F6"]    = true;
TAM.overloadList["\u00AA\u00F8"]    = true;
TAM.overloadList["\u00AA\u00FE"]    = true;
