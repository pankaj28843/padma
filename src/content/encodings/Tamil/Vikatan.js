// $Id: Vikatan.js,v 1.2 2005/09/25 14:52:27 vnagarjuna Exp $ -->

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
Vikatan.maxLookupLen = 1;
Vikatan.fontFace     = "Vikatan_TAM";
Vikatan.displayName  = "Vikatan";
Vikatan.language     = Padma.lang_TAMIL;

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
    return false;
}

Vikatan.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return sign1 + sign2;    
}

Vikatan.isRedundant = function (str)
{
    return false;
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
//Vikatan.vowel_AU       = "\u00BB";

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
//Vikatan.consnt_SHA     = "\u00AC";
Vikatan.consnt_SSA     = "\u00FB";
Vikatan.consnt_SA      = "\u00FA";
Vikatan.consnt_HA      = "\u00FD";
Vikatan.consnt_LLA     = "\u00F7";
Vikatan.consnt_ZHA     = "\u00F6";
Vikatan.consnt_RRA     = "\u00F8";
Vikatan.consnt_KSH     = "\u00FE";

//Gunintamulu
Vikatan.vowelsn_AA     = "\u00A3";
Vikatan.vowelsn_I      = "\u00A4";
Vikatan.vowelsn_E      = "\u00AA";
Vikatan.vowelsn_EE     = "\u00AB";
Vikatan.vowelsn_AI     = "\u00AC";

//Special Combinations
Vikatan.combo_KI      = "\u0041";
Vikatan.combo_KII     = "\u0057";
Vikatan.combo_NGI     = "\u0042";
Vikatan.combo_NGII    = "\u0058";

Vikatan.combo_CI      = "\u0043";
Vikatan.combo_CII     = "\u0059";
Vikatan.combo_JI      = "\u0054";
Vikatan.combo_JII     = "\u0070";
Vikatan.combo_NYI     = "\u0044";
Vikatan.combo_NYII    = "\u005A";

Vikatan.combo_TTI     = "\u00AE";
Vikatan.combo_TTII    = "\u00AF";
Vikatan.combo_NNI     = "\u0045";
Vikatan.combo_NNII    = "\u0061";

Vikatan.combo_TI      = "\u0046";
Vikatan.combo_TII     = "\u0062";
Vikatan.combo_NI      = "\u0047";
Vikatan.combo_NII     = "\u0063";
Vikatan.combo_NNNI    = "\u0051";
Vikatan.combo_NNNII   = "\u006D";

Vikatan.combo_PI      = "\u0048";
Vikatan.combo_PII     = "\u0064";
Vikatan.combo_MI      = "\u0049";
Vikatan.combo_MII     = "\u0065";

Vikatan.combo_YI      = "\u004A";
Vikatan.combo_YII     = "\u0066";
Vikatan.combo_RI      = "\u004B";
Vikatan.combo_RII     = "\u0067";
Vikatan.combo_LI      = "\u004C";
Vikatan.combo_LII     = "\u0068";
Vikatan.combo_VI      = "\u004D";
Vikatan.combo_VII     = "\u0069";

Vikatan.combo_SSI     = "\u0053";
Vikatan.combo_SSII    = "\u006F";
Vikatan.combo_SI      = "\u0052";
Vikatan.combo_SII     = "\u006E";
Vikatan.combo_HI      = "\u0055";
Vikatan.combo_HII     = "\u0071";

Vikatan.combo_LLI     = "\u004F";
Vikatan.combo_LLII    = "\u006B";
Vikatan.combo_ZHI     = "\u004E";
Vikatan.combo_ZHII    = "\u006A";
Vikatan.combo_RRI     = "\u0050";
Vikatan.combo_RRII    = "\u006C";
Vikatan.combo_KSHI    = "\u0056";
Vikatan.combo_KSHII   = "\u0072";

Vikatan.combo_KPULLI   = "\u201A";
Vikatan.combo_NGPULLI  = "\u0192";
Vikatan.combo_CPULLI   = "\u201E";
Vikatan.combo_JPULLI   = "\u0078";
Vikatan.combo_NYPULLI  = "\u2026";
Vikatan.combo_TPULLI   = "\u2020";
Vikatan.combo_NNPULLI  = "\u2021";
Vikatan.combo_THPULLI  = "\u02C6";
Vikatan.combo_NPULLI   = "\u2030";
Vikatan.combo_NNNPULLI = "\u00A1";
Vikatan.combo_PPULLI   = "\u0160";
Vikatan.combo_MPULLI   = "\u2039";
Vikatan.combo_YPULLI   = "\u0152";
Vikatan.combo_RPULLI   = "\u02DC";
Vikatan.combo_LPULLI   = "\u2122";
Vikatan.combo_VPULLI   = "\u0161";
Vikatan.combo_SSPULLI  = "\u0077";
Vikatan.combo_SPULLI   = "\u0076";
Vikatan.combo_HPULLI   = "\u0079";
Vikatan.combo_LLPULLI  = "\u0153";
Vikatan.combo_ZHPULLI  = "\u203A";
Vikatan.combo_RRPULLI  = "\u0178";
Vikatan.combo_KSHPULLI = "\u007A";

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
Vikatan.extra_HYPHEN   = "\u0026";

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
//Vikatan.toPadma[Vikatan.vowel_AU] = Padma.vowel_AU;

Vikatan.toPadma[Vikatan.consnt_KA]  = Padma.consnt_KA;
Vikatan.toPadma[Vikatan.consnt_NGA] = Padma.consnt_NGA;
Vikatan.toPadma[Vikatan.consnt_CA]  = Padma.consnt_CA;
Vikatan.toPadma[Vikatan.consnt_JA]  = Padma.consnt_JA;
Vikatan.toPadma[Vikatan.consnt_NYA] = Padma.consnt_NYA;
Vikatan.toPadma[Vikatan.consnt_TTA] = Padma.consnt_TTA;
Vikatan.toPadma[Vikatan.consnt_NNA] = Padma.consnt_NNA;
Vikatan.toPadma[Vikatan.consnt_TA]  = Padma.consnt_TA;
Vikatan.toPadma[Vikatan.consnt_NA]  = Padma.consnt_NA;
Vikatan.toPadma[Vikatan.consnt_NNNA] = Padma.consnt_NA;
Vikatan.toPadma[Vikatan.consnt_PA]  = Padma.consnt_PA;
Vikatan.toPadma[Vikatan.consnt_MA]  = Padma.consnt_MA;
Vikatan.toPadma[Vikatan.consnt_YA]  = Padma.consnt_YA;
Vikatan.toPadma[Vikatan.consnt_RA]  = Padma.consnt_RA;
Vikatan.toPadma[Vikatan.consnt_LA]  = Padma.consnt_LA;
Vikatan.toPadma[Vikatan.consnt_VA]  = Padma.consnt_VA;
//Vikatan.toPadma[Vikatan.consnt_SHA] = Padma.consnt_SHA;
Vikatan.toPadma[Vikatan.consnt_SSA] = Padma.consnt_SSA;
Vikatan.toPadma[Vikatan.consnt_SA]  = Padma.consnt_SA;
Vikatan.toPadma[Vikatan.consnt_HA]  = Padma.consnt_HA;
Vikatan.toPadma[Vikatan.consnt_LLA] = Padma.consnt_LLA;
Vikatan.toPadma[Vikatan.consnt_ZHA] = Padma.consnt_ZHA;
Vikatan.toPadma[Vikatan.consnt_RRA] = Padma.consnt_RRA;
Vikatan.toPadma[Vikatan.consnt_KSH] = Padma.consnt_KSH;

//Gunintamulu
Vikatan.toPadma[Vikatan.vowelsn_AA]  = Padma.vowelsn_AA;
Vikatan.toPadma[Vikatan.vowelsn_I]   = Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.vowelsn_E]   = Padma.vowelsn_E;
Vikatan.toPadma[Vikatan.vowelsn_EE]  = Padma.vowelsn_EE;
Vikatan.toPadma[Vikatan.vowelsn_AI]  = Padma.vowelsn_AU;

//Special Combinations
Vikatan.toPadma[Vikatan.combo_KI]    = Padma.consnt_KA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_KII]   = Padma.consnt_KA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_NGI]   = Padma.consnt_NGA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_NGII]  = Padma.consnt_NGA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_CI]    = Padma.consnt_CA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_CII]   = Padma.consnt_CA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_JI]    = Padma.consnt_JA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_JII]   = Padma.consnt_JA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_NYI]   = Padma.consnt_NYA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_NYII]  = Padma.consnt_NYA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_TTI]   = Padma.consnt_TTA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_TTII]  = Padma.consnt_TTA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_NNI]   = Padma.consnt_NNA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_NNII]  = Padma.consnt_NNA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_TI]    = Padma.consnt_TA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_TII]   = Padma.consnt_TA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_NI]    = Padma.consnt_NA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_NII]   = Padma.consnt_NA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_NNNI]  = Padma.consnt_NNNA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_NNNII] = Padma.consnt_NNNA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_PI]    = Padma.consnt_PA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_PII]   = Padma.consnt_PA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_MI]    = Padma.consnt_MA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_MII]   = Padma.consnt_MA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_YI]    = Padma.consnt_YA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_YII]   = Padma.consnt_YA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_RI]    = Padma.consnt_RA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_RII]   = Padma.consnt_RA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_LI]    = Padma.consnt_LA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_LII]   = Padma.consnt_LA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_VI]    = Padma.consnt_VA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_VII]   = Padma.consnt_VA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_SSI]   = Padma.consnt_SSA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_SSII]  = Padma.consnt_SSA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_SI]    = Padma.consnt_SA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_SII]   = Padma.consnt_SA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_HI]    = Padma.consnt_HA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_HII]   = Padma.consnt_HA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_LLI]   = Padma.consnt_LLA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_LLII]  = Padma.consnt_LLA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_ZHI]   = Padma.consnt_ZHA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_ZHII]  = Padma.consnt_ZHA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_RRI]   = Padma.consnt_RRA + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_RRII]  = Padma.consnt_RRA + Padma.vowelsn_II;
Vikatan.toPadma[Vikatan.combo_KSHI]  = Padma.consnt_KSH + Padma.vowelsn_I;
Vikatan.toPadma[Vikatan.combo_KSHII] = Padma.consnt_KSH + Padma.vowelsn_II;

Vikatan.toPadma[Vikatan.combo_KPULLI]   = Padma.consnt_KA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_NGPULLI]  = Padma.consnt_NGA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_CPULLI]   = Padma.consnt_CA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_JPULLI]   = Padma.consnt_JA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_NYPULLI]  = Padma.consnt_NYA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_TPULLI]   = Padma.consnt_TTA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_NNPULLI]  = Padma.consnt_NNA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_THPULLI]  = Padma.consnt_THA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_NPULLI]   = Padma.consnt_NA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_NNNPULLI] = Padma.consnt_NNNA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_PPULLI]   = Padma.consnt_PA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_MPULLI]   = Padma.consnt_MA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_YPULLI]   = Padma.consnt_YA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_RPULLI]   = Padma.consnt_RA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_LPULLI]   = Padma.consnt_LA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_VPULLI]   = Padma.consnt_VA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_SSPULLI]  = Padma.consnt_SSA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_SPULLI]   = Padma.consnt_SA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_HPULLI]   = Padma.consnt_HA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_LLPULLI]  = Padma.consnt_LLA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_ZHPULLI]  = Padma.consnt_ZHA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_RRPULLI]  = Padma.consnt_RRA + Padma.pulli;
Vikatan.toPadma[Vikatan.combo_KSHPULLI] = Padma.consnt_KSH + Padma.pulli;

//Miscellaneous(where it doesn't match ASCII representation)
Vikatan.toPadma[Vikatan.extra_HYPHEN]   = Vikatan.HYPHEN;

Vikatan.redundantList = new Array();

Vikatan.prefixList = new Array();
Vikatan.prefixList[Vikatan.vowelsn_E]   = true;
Vikatan.prefixList[Vikatan.vowelsn_EE]  = true;
Vikatan.prefixList[Vikatan.vowelsn_AI]  = true;

Vikatan.overloadList = new Array();

