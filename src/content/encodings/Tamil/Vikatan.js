// $Id: Vikatan.js,v 1.9 2005/11/11 15:17:12 vnagarjuna Exp $ -->

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

function Vikatan()
{
}

//The interface every dynamic font encoding should implement
Vikatan.maxLookupLen = 2;
Vikatan.fontFace     = "Vikatan_TAM";
Vikatan.displayName  = "Vikatan";
Vikatan.script       = Padma.script_TAMIL;

Vikatan.lookup = function (str) 
{
    return Vikatan.toPadma[str];
}

Vikatan.isPrefixSymbol = function (str)
{
    return Vikatan.prefixList[str] != null;
}

Vikatan.isOverloaded = function (str)
{
    return Vikatan.overloadList[str] != null;
}

Vikatan.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if (sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_AA)
        return Padma.vowelsn_O;
    if (sign2 == Padma.vowelsn_EE && sign1 == Padma.vowelsn_AA)
        return Padma.vowelsn_OO;
    return sign1 + sign2;    
}

Vikatan.preprocessMessage = function (input)
{
    return input;
}

//Implementation details start here

//Specials
Vikatan.visarga        = "\u00E7";  //aytham

//Vowels
Vikatan.vowel_A        = "\u00DC";
Vikatan.vowel_AA       = "\u00DD";
Vikatan.vowel_I        = "\u00DE";
Vikatan.vowel_II       = "\u00DF";
Vikatan.vowel_U        = "\u00E0";
Vikatan.vowel_UU       = "\u00E1";
Vikatan.vowel_E        = "\u00E2";
Vikatan.vowel_EE       = "\u00E3";
Vikatan.vowel_AI       = "\u00E4";
Vikatan.vowel_O        = "\u00E5";
Vikatan.vowel_OO       = "\u00E6";
Vikatan.vowel_AU       = "\u00E5\u00F7";

//Consonants
Vikatan.consnt_KA      = "\u00E8";
Vikatan.consnt_NGA     = "\u00E9";

Vikatan.consnt_CA      = "\u00EA";
Vikatan.consnt_JA      = "\u00FC";
Vikatan.consnt_NYA     = "\u00EB";

Vikatan.consnt_TTA     = "\u00EC";
Vikatan.consnt_NNA     = "\u00ED";

Vikatan.consnt_TA      = "\u00EE";
Vikatan.consnt_NA      = "\u00EF";
Vikatan.consnt_NNNA    = "\u00F9";

Vikatan.consnt_PA      = "\u00F0";
Vikatan.consnt_MA      = "\u00F1";

Vikatan.consnt_YA      = "\u00F2";
Vikatan.consnt_RA      = "\u00F3";
Vikatan.consnt_LA      = "\u00F4";
Vikatan.consnt_VA      = "\u00F5";
Vikatan.consnt_SSA     = "\u00FB";
Vikatan.consnt_SA      = "\u00FA";
Vikatan.consnt_HA      = "\u00FD";
Vikatan.consnt_LLA     = "\u00F7";
Vikatan.consnt_ZHA     = "\u00F6";
Vikatan.consnt_RRA     = "\u00F8";
Vikatan.conjct_KSH     = "\u00FE";
Vikatan.conjct_SRII    = "\u00FF";

//Gunintamulu
Vikatan.vowelsn_AA     = "\u00A3";
Vikatan.vowelsn_I      = "\u00A4";
Vikatan.vowelsn_U      = "\u00A7";	
Vikatan.vowelsn_UU     = "\u00A8";
Vikatan.vowelsn_E      = "\u00AA";
Vikatan.vowelsn_EE     = "\u00AB";
Vikatan.vowelsn_AI     = "\u00AC";

//Vikatan uses the same symbol for generating vowelsn_AU and consnt_LLA. This is a work around
Vikatan.combo_KAU      = "\u00AA\u00E8\u00F7";
Vikatan.combo_NGAU     = "\u00AA\u00E9\u00F7";
Vikatan.combo_CAU      = "\u00AA\u00EA\u00F7";
Vikatan.combo_JAU      = "\u00AA\u00FC\u00F7";
Vikatan.combo_NYAU     = "\u00AA\u00EB\u00F7";
Vikatan.combo_TTAU     = "\u00AA\u00EC\u00F7";
Vikatan.combo_NNAU     = "\u00AA\u00ED\u00F7";
Vikatan.combo_TAU      = "\u00AA\u00EE\u00F7";
Vikatan.combo_NAU      = "\u00AA\u00EF\u00F7";
Vikatan.combo_NNNAU    = "\u00AA\u00F9\u00F7";
Vikatan.combo_PAU      = "\u00AA\u00F0\u00F7";
Vikatan.combo_MAU      = "\u00AA\u00F1\u00F7";
Vikatan.combo_YAU      = "\u00AA\u00F2\u00F7";
Vikatan.combo_RAU      = "\u00AA\u00F3\u00F7";
Vikatan.combo_LAU      = "\u00AA\u00F4\u00F7";
Vikatan.combo_VAU      = "\u00AA\u00F5\u00F7";
Vikatan.combo_SSAU     = "\u00AA\u00FB\u00F7";
Vikatan.combo_SAU      = "\u00AA\u00FA\u00F7";
Vikatan.combo_HAU      = "\u00AA\u00FD\u00F7";
Vikatan.combo_LLAU     = "\u00AA\u00F7\u00F7";
Vikatan.combo_ZHAU     = "\u00AA\u00F6\u00F7";
Vikatan.combo_RRAU     = "\u00AA\u00F8\u00F7";
Vikatan.combo_KSHAU    = "\u00AA\u00FE\u00F7";

//Special Combinations
Vikatan.combo_KI      = "\u0041";
Vikatan.combo_KII     = "\u0057";
Vikatan.combo_KU      = "\u00B0";
Vikatan.combo_KUU     = "\u00C3";
Vikatan.combo_KPULLI  = "\u201A";
Vikatan.combo_NGI     = "\u0042";
Vikatan.combo_NGII    = "\u0058";
Vikatan.combo_NGU     = "\u00B1";
Vikatan.combo_NGUU    = "\u00C4";
Vikatan.combo_NGPULLI = "\u0192";

Vikatan.combo_CI      = "\u0043";
Vikatan.combo_CII     = "\u0059";
Vikatan.combo_CU      = "\u00B2";
Vikatan.combo_CUU     = "\u00C5";
Vikatan.combo_CPULLI  = "\u201E";
Vikatan.combo_JI      = "\u0054";
Vikatan.combo_JII     = "\u0070";
Vikatan.combo_JPULLI  = "\u0078";
Vikatan.combo_NYI     = "\u0044";
Vikatan.combo_NYII    = "\u005A";
Vikatan.combo_NYU     = "\u00B3";
Vikatan.combo_NYUU    = "\u00C6";
Vikatan.combo_NYPULLI = "\u2026";

Vikatan.combo_TTI     = "\u00AE";
Vikatan.combo_TTII    = "\u00AF";
Vikatan.combo_TTU     = "\u00B4";
Vikatan.combo_TTUU    = "\u00C7";
Vikatan.combo_TTPULLI = "\u2020";
Vikatan.combo_NNI     = "\u0045";
Vikatan.combo_NNII    = "\u0061";
Vikatan.combo_NNU     = "\u00B5";
Vikatan.combo_NNUU    = "\u00C8";
Vikatan.combo_NNPULLI = "\u2021";

Vikatan.combo_TI      = "\u0046";
Vikatan.combo_TII     = "\u0062";
Vikatan.combo_TU      = "\u00B6";
Vikatan.combo_TUU     = "\u00C9";
Vikatan.combo_TPULLI  = "\u02C6";
Vikatan.combo_NI      = "\u0047";
Vikatan.combo_NII     = "\u0063";
Vikatan.combo_NU      = "\u00B8";
Vikatan.combo_NUU     = "\u00CB";
Vikatan.combo_NPULLI  = "\u2030";
Vikatan.combo_NNNI    = "\u0051";
Vikatan.combo_NNNII   = "\u006D";
Vikatan.combo_NNNU    = "\u00C2";
Vikatan.combo_NNNUU   = "\u00DB";
Vikatan.combo_NNNPULLI= "\u00A1";

Vikatan.combo_PI      = "\u0048";
Vikatan.combo_PII     = "\u0064";
Vikatan.combo_PU      = "\u00B9";
Vikatan.combo_PUU     = "\u00CC";
Vikatan.combo_PPULLI  = "\u0160";
Vikatan.combo_MI      = "\u0049";
Vikatan.combo_MII     = "\u0065";
Vikatan.combo_MU      = "\u00BA";
Vikatan.combo_MUU     = "\u00CD";
Vikatan.combo_MPULLI  = "\u2039";

Vikatan.combo_YI      = "\u004A";
Vikatan.combo_YII     = "\u0066";
Vikatan.combo_YU      = "\u00BB";
Vikatan.combo_YUU     = "\u00CE";
Vikatan.combo_YPULLI  = "\u0152";
Vikatan.combo_RI      = "\u004B";
Vikatan.combo_RII     = "\u0067";
Vikatan.combo_RU      = "\u00BC";
Vikatan.combo_RUU     = "\u00CF";
Vikatan.combo_RPULLI  = "\u02DC";
Vikatan.combo_LI      = "\u004C";
Vikatan.combo_LII     = "\u0068";
Vikatan.combo_LU      = "\u00BD";
Vikatan.combo_LUU     = "\u00D6";
Vikatan.combo_LPULLI  = "\u2122";
Vikatan.combo_VI      = "\u004D";
Vikatan.combo_VII     = "\u0069";
Vikatan.combo_VU      = "\u00BE";
Vikatan.combo_VUU     = "\u00D7";
Vikatan.combo_VPULLI  = "\u0161";

Vikatan.combo_SSI     = "\u0053";
Vikatan.combo_SSII    = "\u006F";
Vikatan.combo_SSPULLI = "\u0077";
Vikatan.combo_SI      = "\u0052";
Vikatan.combo_SII     = "\u006E";
Vikatan.combo_SPULLI  = "\u0076";
Vikatan.combo_HI      = "\u0055";
Vikatan.combo_HII     = "\u0071";
Vikatan.combo_HPULLI  = "\u0079";

Vikatan.combo_LLI     = "\u004F";
Vikatan.combo_LLII    = "\u006B";
Vikatan.combo_LLU     = "\u00C0";
Vikatan.combo_LLUU    = "\u00D9";
Vikatan.combo_LLPULLI = "\u0153";
Vikatan.combo_ZHI     = "\u004E";
Vikatan.combo_ZHII    = "\u006A";
Vikatan.combo_ZHU     = "\u00BF";
Vikatan.combo_ZHUU    = "\u00D8";
Vikatan.combo_ZHPULLI = "\u203A";
Vikatan.combo_RRI     = "\u0050";
Vikatan.combo_RRII    = "\u006C";
Vikatan.combo_RRU     = "\u00C1";
Vikatan.combo_RRUU    = "\u00DA";
Vikatan.combo_RRPULLI = "\u0178";
Vikatan.combo_KSHI    = "\u0056";
Vikatan.combo_KSHII   = "\u0072";
Vikatan.combo_KSHPULLI= "\u007A";

//Matches ASCII
Vikatan.EXCLAM         = "\u0021";
Vikatan.QTDOUBLE       = "\u0022";
Vikatan.HASH           = "\u0023";
Vikatan.DOLLAR         = "\u0024";
Vikatan.PERCENT        = "\u0025";
Vikatan.QTSINGLE       = "\u0027";
Vikatan.PARENLEFT      = "\u0028";
Vikatan.PARENRIGT      = "\u0029";
Vikatan.ASTERISK       = "\u002A";
Vikatan.PLUS           = "\u002B";
Vikatan.COMMA          = "\u002C";
Vikatan.PERIOD         = "\u002E";
Vikatan.SLASH          = "\u002F";
Vikatan.COLON          = "\u003A";
Vikatan.SEMICOLON      = "\u003B";
Vikatan.LESSTHAN       = "\u003C";
Vikatan.EQUALS         = "\u003D";
Vikatan.GREATERTHAN    = "\u003E";
Vikatan.QUESTION       = "\u003F";
Vikatan.ATSIGN         = "\u0040";

Vikatan.digit_ZERO     = "\u0030";
Vikatan.digit_ONE      = "\u0031";
Vikatan.digit_TWO      = "\u0032";
Vikatan.digit_THREE    = "\u0033";
Vikatan.digit_FOUR     = "\u0034";
Vikatan.digit_FIVE     = "\u0035";
Vikatan.digit_SIX      = "\u0036";
Vikatan.digit_SEVEN    = "\u0037";
Vikatan.digit_EIGHT    = "\u0038";
Vikatan.digit_NINE     = "\u0039";

//Does not match ASCII
Vikatan.HYPHEN         = "\u0026";

Vikatan.toPadma = new Array();

Vikatan.toPadma[Vikatan.visarga]  = Padma.visarga;
Vikatan.toPadma[Vikatan.vowel_A]  = Padma.vowel_A;
Vikatan.toPadma[Vikatan.vowel_AA] = Padma.vowel_AA;
Vikatan.toPadma[Vikatan.vowel_I]  = Padma.vowel_I;
Vikatan.toPadma[Vikatan.vowel_II] = Padma.vowel_II;
Vikatan.toPadma[Vikatan.vowel_U]  = Padma.vowel_U;
Vikatan.toPadma[Vikatan.vowel_UU] = Padma.vowel_UU;
Vikatan.toPadma[Vikatan.vowel_E]  = Padma.vowel_E;
Vikatan.toPadma[Vikatan.vowel_EE] = Padma.vowel_EE;
Vikatan.toPadma[Vikatan.vowel_AI] = Padma.vowel_AI;
Vikatan.toPadma[Vikatan.vowel_O]  = Padma.vowel_O;
Vikatan.toPadma[Vikatan.vowel_OO] = Padma.vowel_OO;
Vikatan.toPadma[Vikatan.vowel_AU] = Padma.vowel_AU;

Vikatan.toPadma[Vikatan.consnt_KA]  = Padma.consnt_KA;
Vikatan.toPadma[Vikatan.consnt_NGA] = Padma.consnt_NGA;
Vikatan.toPadma[Vikatan.consnt_CA]  = Padma.consnt_CA;
Vikatan.toPadma[Vikatan.consnt_JA]  = Padma.consnt_JA;
Vikatan.toPadma[Vikatan.consnt_NYA] = Padma.consnt_NYA;
Vikatan.toPadma[Vikatan.consnt_TTA] = Padma.consnt_TTA;
Vikatan.toPadma[Vikatan.consnt_NNA] = Padma.consnt_NNA;
Vikatan.toPadma[Vikatan.consnt_TA]  = Padma.consnt_TA;
Vikatan.toPadma[Vikatan.consnt_NA]  = Padma.consnt_NA;
Vikatan.toPadma[Vikatan.consnt_NNNA] = Padma.consnt_NNNA;
Vikatan.toPadma[Vikatan.consnt_PA]  = Padma.consnt_PA;
Vikatan.toPadma[Vikatan.consnt_MA]  = Padma.consnt_MA;
Vikatan.toPadma[Vikatan.consnt_YA]  = Padma.consnt_YA;
Vikatan.toPadma[Vikatan.consnt_RA]  = Padma.consnt_RA;
Vikatan.toPadma[Vikatan.consnt_LA]  = Padma.consnt_LA;
Vikatan.toPadma[Vikatan.consnt_VA]  = Padma.consnt_VA;
Vikatan.toPadma[Vikatan.consnt_SSA] = Padma.consnt_SSA;
Vikatan.toPadma[Vikatan.consnt_SA]  = Padma.consnt_SA;
Vikatan.toPadma[Vikatan.consnt_HA]  = Padma.consnt_HA;
Vikatan.toPadma[Vikatan.consnt_LLA] = Padma.consnt_LLA;
Vikatan.toPadma[Vikatan.consnt_ZHA] = Padma.consnt_ZHA;
Vikatan.toPadma[Vikatan.consnt_RRA] = Padma.consnt_RRA;
Vikatan.toPadma[Vikatan.conjct_KSH] = Padma.consnt_KA + Padma.vattu_SSA;
Vikatan.toPadma[Vikatan.conjct_SRII]= Padma.consnt_SA + Padma.vattu_RA + Padma.vowelsn_II;

//Gunintamulu
Vikatan.toPadma[Vikatan.vowelsn_AA]  = Padma.vowelsn_AA;
Vikatan.toPadma[Vikatan.vowelsn_I]   = Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.vowelsn_U]   = Padma.vowelsn_U;
Vikatan.toPadma[Vikatan.vowelsn_UU]  = Padma.vowelsn_UU;
Vikatan.toPadma[Vikatan.vowelsn_E]   = Padma.vowelsn_E;
Vikatan.toPadma[Vikatan.vowelsn_EE]  = Padma.vowelsn_EE;
Vikatan.toPadma[Vikatan.vowelsn_AI]  = Padma.vowelsn_AI;

Vikatan.combo_KAU      = Padma.consnt_KA + Padma.vowelsn_AU;
Vikatan.combo_NGAU     = Padma.consnt_NGA + Padma.vowelsn_AU;
Vikatan.combo_CAU      = Padma.consnt_CA + Padma.vowelsn_AU;
Vikatan.combo_JAU      = Padma.consnt_JA + Padma.vowelsn_AU;
Vikatan.combo_NYAU     = Padma.consnt_NYA + Padma.vowelsn_AU;
Vikatan.combo_TTAU     = Padma.consnt_TTA + Padma.vowelsn_AU;
Vikatan.combo_NNAU     = Padma.consnt_NNA + Padma.vowelsn_AU;
Vikatan.combo_TAU      = Padma.consnt_TA + Padma.vowelsn_AU;
Vikatan.combo_NAU      = Padma.consnt_NA + Padma.vowelsn_AU;
Vikatan.combo_NNNAU    = Padma.consnt_NNNA + Padma.vowelsn_AU;
Vikatan.combo_PAU      = Padma.consnt_PA + Padma.vowelsn_AU;
Vikatan.combo_MAU      = Padma.consnt_MA + Padma.vowelsn_AU;
Vikatan.combo_YAU      = Padma.consnt_YA + Padma.vowelsn_AU;
Vikatan.combo_RAU      = Padma.consnt_RA + Padma.vowelsn_AU;
Vikatan.combo_LAU      = Padma.consnt_LA + Padma.vowelsn_AU;
Vikatan.combo_VAU      = Padma.consnt_VA + Padma.vowelsn_AU;
Vikatan.combo_SSAU     = Padma.consnt_SSA + Padma.vowelsn_AU;
Vikatan.combo_SAU      = Padma.consnt_SA + Padma.vowelsn_AU;
Vikatan.combo_HAU      = Padma.consnt_HA + Padma.vowelsn_AU;
Vikatan.combo_LLAU     = Padma.consnt_LLA + Padma.vowelsn_AU;
Vikatan.combo_ZHAU     = Padma.consnt_ZHA + Padma.vowelsn_AU;
Vikatan.combo_RRAU     = Padma.consnt_RRA + Padma.vowelsn_AU;
Vikatan.combo_KSHAU    = Padma.consnt_KA + Padma.vattu_SSA + Padma.vowelsn_AU;

//Special Combinations
Vikatan.toPadma[Vikatan.combo_KI]      = Padma.consnt_KA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_KII]     = Padma.consnt_KA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_KU]      = Padma.consnt_KA + Padma.vowelsn_U;
Vikatan.toPadma[Vikatan.combo_KUU]     = Padma.consnt_KA + Padma.vowelsn_UU;
Vikatan.toPadma[Vikatan.combo_KPULLI]  = Padma.consnt_KA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_NGI]     = Padma.consnt_NGA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_NGII]    = Padma.consnt_NGA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_NGU]     = Padma.consnt_NGA + Padma.vowelsn_U;
Vikatan.toPadma[Vikatan.combo_NGUU]    = Padma.consnt_NGA + Padma.vowelsn_UU;
Vikatan.toPadma[Vikatan.combo_NGPULLI] = Padma.consnt_NGA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_CI]      = Padma.consnt_CA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_CII]     = Padma.consnt_CA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_CU]      = Padma.consnt_CA + Padma.vowelsn_U;
Vikatan.toPadma[Vikatan.combo_CUU]     = Padma.consnt_CA + Padma.vowelsn_UU;
Vikatan.toPadma[Vikatan.combo_CPULLI]  = Padma.consnt_CA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_JI]      = Padma.consnt_JA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_JII]     = Padma.consnt_JA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_JPULLI]  = Padma.consnt_JA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_NYI]     = Padma.consnt_NYA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_NYII]    = Padma.consnt_NYA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_NYU]     = Padma.consnt_NYA + Padma.vowelsn_U;
Vikatan.toPadma[Vikatan.combo_NYUU]    = Padma.consnt_NYA + Padma.vowelsn_UU;
Vikatan.toPadma[Vikatan.combo_NYPULLI] = Padma.consnt_NYA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_TTI]     = Padma.consnt_TTA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_TTII]    = Padma.consnt_TTA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_TTU]     = Padma.consnt_TTA + Padma.vowelsn_U;
Vikatan.toPadma[Vikatan.combo_TTUU]    = Padma.consnt_TTA + Padma.vowelsn_UU;
Vikatan.toPadma[Vikatan.combo_TTPULLI] = Padma.consnt_TTA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_NNI]     = Padma.consnt_NNA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_NNII]    = Padma.consnt_NNA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_NNU]     = Padma.consnt_NNA + Padma.vowelsn_U;
Vikatan.toPadma[Vikatan.combo_NNUU]    = Padma.consnt_NNA + Padma.vowelsn_UU;
Vikatan.toPadma[Vikatan.combo_NNPULLI] = Padma.consnt_NNA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_TI]      = Padma.consnt_TA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_TII]     = Padma.consnt_TA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_TU]      = Padma.consnt_TA + Padma.vowelsn_U;
Vikatan.toPadma[Vikatan.combo_TUU]     = Padma.consnt_TA + Padma.vowelsn_UU;
Vikatan.toPadma[Vikatan.combo_TPULLI]  = Padma.consnt_TA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_NI]      = Padma.consnt_NA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_NII]     = Padma.consnt_NA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_NU]      = Padma.consnt_NA + Padma.vowelsn_U;
Vikatan.toPadma[Vikatan.combo_NUU]     = Padma.consnt_NA + Padma.vowelsn_UU;
Vikatan.toPadma[Vikatan.combo_NPULLI]  = Padma.consnt_NA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_NNNI]    = Padma.consnt_NNNA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_NNNII]   = Padma.consnt_NNNA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_NNNU]    = Padma.consnt_NNNA + Padma.vowelsn_U;
Vikatan.toPadma[Vikatan.combo_NNNUU]   = Padma.consnt_NNNA + Padma.vowelsn_UU;
Vikatan.toPadma[Vikatan.combo_NNNPULLI] = Padma.consnt_NNNA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_PI]      = Padma.consnt_PA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_PII]     = Padma.consnt_PA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_PU]      = Padma.consnt_PA + Padma.vowelsn_U;
Vikatan.toPadma[Vikatan.combo_PUU]     = Padma.consnt_PA + Padma.vowelsn_UU;
Vikatan.toPadma[Vikatan.combo_PPULLI]  = Padma.consnt_PA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_MI]      = Padma.consnt_MA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_MII]     = Padma.consnt_MA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_MU]      = Padma.consnt_MA + Padma.vowelsn_U;
Vikatan.toPadma[Vikatan.combo_MUU]     = Padma.consnt_MA + Padma.vowelsn_UU;
Vikatan.toPadma[Vikatan.combo_MPULLI]  = Padma.consnt_MA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_YI]      = Padma.consnt_YA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_YII]     = Padma.consnt_YA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_YU]      = Padma.consnt_YA + Padma.vowelsn_U;
Vikatan.toPadma[Vikatan.combo_YUU]     = Padma.consnt_YA + Padma.vowelsn_UU;
Vikatan.toPadma[Vikatan.combo_YPULLI]  = Padma.consnt_YA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_RI]      = Padma.consnt_RA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_RII]     = Padma.consnt_RA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_RU]      = Padma.consnt_RA + Padma.vowelsn_U;
Vikatan.toPadma[Vikatan.combo_RUU]     = Padma.consnt_RA + Padma.vowelsn_UU;
Vikatan.toPadma[Vikatan.combo_RPULLI]  = Padma.consnt_RA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_LU]      = Padma.consnt_LA + Padma.vowelsn_U;
Vikatan.toPadma[Vikatan.combo_LUU]     = Padma.consnt_LA + Padma.vowelsn_UU;
Vikatan.toPadma[Vikatan.combo_LI]      = Padma.consnt_LA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_LII]     = Padma.consnt_LA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_LPULLI]  = Padma.consnt_LA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_VI]      = Padma.consnt_VA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_VII]     = Padma.consnt_VA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_VU]      = Padma.consnt_VA + Padma.vowelsn_U;
Vikatan.toPadma[Vikatan.combo_VUU]     = Padma.consnt_VA + Padma.vowelsn_UU;
Vikatan.toPadma[Vikatan.combo_VPULLI]  = Padma.consnt_VA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_SSI]     = Padma.consnt_SSA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_SSII]    = Padma.consnt_SSA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_SSPULLI] = Padma.consnt_SSA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_SI]      = Padma.consnt_SA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_SII]     = Padma.consnt_SA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_SPULLI]  = Padma.consnt_SA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_HI]      = Padma.consnt_HA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_HII]     = Padma.consnt_HA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_HPULLI]  = Padma.consnt_HA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_LLI]     = Padma.consnt_LLA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_LLII]    = Padma.consnt_LLA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_LLU]     = Padma.consnt_LLA + Padma.vowelsn_U;
Vikatan.toPadma[Vikatan.combo_LLUU]    = Padma.consnt_LLA + Padma.vowelsn_UU;
Vikatan.toPadma[Vikatan.combo_LLPULLI] = Padma.consnt_LLA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_ZHI]     = Padma.consnt_ZHA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_ZHII]    = Padma.consnt_ZHA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_ZHU]     = Padma.consnt_ZHA + Padma.vowelsn_U;
Vikatan.toPadma[Vikatan.combo_ZHUU]    = Padma.consnt_ZHA + Padma.vowelsn_UU;
Vikatan.toPadma[Vikatan.combo_ZHPULLI] = Padma.consnt_ZHA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_RRI]     = Padma.consnt_RRA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_RRII]    = Padma.consnt_RRA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_RRU]     = Padma.consnt_RRA + Padma.vowelsn_U;
Vikatan.toPadma[Vikatan.combo_RRUU]    = Padma.consnt_RRA + Padma.vowelsn_UU;
Vikatan.toPadma[Vikatan.combo_RRPULLI] = Padma.consnt_RRA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_KSHI]    = Padma.consnt_KA + Padma.vattu_SSA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_KSHII]   = Padma.consnt_KA + Padma.vattu_SSA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_KSHPULLI]= Padma.consnt_KA + Padma.vattu_SSA + Padma.pulli;

Vikatan.toPadma[Vikatan.HYPHEN]   = "-";

Vikatan.prefixList = new Array();
Vikatan.prefixList[Vikatan.vowelsn_E]   = true;
Vikatan.prefixList[Vikatan.vowelsn_EE]  = true;
Vikatan.prefixList[Vikatan.vowelsn_AI]  = true;

Vikatan.overloadList = new Array();
Vikatan.overloadList[Vikatan.vowel_O]   = true;
Vikatan.overloadList[Vikatan.vowelsn_E] = true;
Vikatan.overloadList["\u00AA\u00E8"]    = true;
Vikatan.overloadList["\u00AA\u00E9"]    = true;
Vikatan.overloadList["\u00AA\u00EA"]    = true;
Vikatan.overloadList["\u00AA\u00FC"]    = true;
Vikatan.overloadList["\u00AA\u00EB"]    = true;
Vikatan.overloadList["\u00AA\u00EC"]    = true;
Vikatan.overloadList["\u00AA\u00ED"]    = true;
Vikatan.overloadList["\u00AA\u00EE"]    = true;
Vikatan.overloadList["\u00AA\u00EF"]    = true;
Vikatan.overloadList["\u00AA\u00F9"]    = true;
Vikatan.overloadList["\u00AA\u00F0"]    = true;
Vikatan.overloadList["\u00AA\u00F1"]    = true;
Vikatan.overloadList["\u00AA\u00F2"]    = true;
Vikatan.overloadList["\u00AA\u00F3"]    = true;
Vikatan.overloadList["\u00AA\u00F4"]    = true;
Vikatan.overloadList["\u00AA\u00F5"]    = true;
Vikatan.overloadList["\u00AA\u00FB"]    = true;
Vikatan.overloadList["\u00AA\u00FA"]    = true;
Vikatan.overloadList["\u00AA\u00FD"]    = true;
Vikatan.overloadList["\u00AA\u00F7"]    = true;
Vikatan.overloadList["\u00AA\u00F6"]    = true;
Vikatan.overloadList["\u00AA\u00F8"]    = true;
Vikatan.overloadList["\u00AA\u00FE"]    = true;
