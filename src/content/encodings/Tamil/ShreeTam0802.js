// $Id: ShreeTam0802.js,v 1.7 2006/03/02 23:14:39 vnagarjuna Exp $ -->

//Copyright 2005-2006 Nagarjuna Venna <vnagarjuna@yahoo.com>
//Contributed by Saravana Kumar <saravanannkl@gmail.com>

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

function Shree_Tam_0802()
{
}

//The interface every dynamic font encoding should implement
Shree_Tam_0802.maxLookupLen = 3;
Shree_Tam_0802.fontFace     = "Shree-Tam-0802";
Shree_Tam_0802.displayName  = "Shree Tam 0802";
Shree_Tam_0802.script       = Padma.script_TAMIL;

Shree_Tam_0802.lookup = function (str) 
{
    return Shree_Tam_0802.toPadma[str];
}

Shree_Tam_0802.isPrefixSymbol = function (str)
{
    return Shree_Tam_0802.prefixList[str] != null;
}

Shree_Tam_0802.isOverloaded = function (str)
{
    return Shree_Tam_0802.overloadList[str] != null;
}

Shree_Tam_0802.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if (sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_AA)
        return Padma.vowelsn_O;
    if (sign2 == Padma.vowelsn_EE && sign1 == Padma.vowelsn_AA)
        return Padma.vowelsn_OO;
    return sign1 + sign2;    
}

Shree_Tam_0802.isRedundant = function (str)
{
    return Shree_Tam_0802.redundantList[str] != null;
}

//Implementation details start here

//Specials
Shree_Tam_0802.visarga        = "\u004C";  //aytham

//Vowels
Shree_Tam_0802.vowel_A        = "\u0041";
Shree_Tam_0802.vowel_AA       = "\u0042";
Shree_Tam_0802.vowel_I        = "\u0043";
Shree_Tam_0802.vowel_II       = "\u0044";
Shree_Tam_0802.vowel_U        = "\u0045";
Shree_Tam_0802.vowel_UU       = "\u0046";
Shree_Tam_0802.vowel_E        = "\u0047";
Shree_Tam_0802.vowel_EE       = "\u0048";
Shree_Tam_0802.vowel_AI       = "\u0049";
Shree_Tam_0802.vowel_O        = "\u004A";
Shree_Tam_0802.vowel_OO       = "\u004B";
Shree_Tam_0802.vowel_AU       = "\u004B\u00CD";

//Consonants
Shree_Tam_0802.consnt_KA      = "\u0050";
Shree_Tam_0802.consnt_NGA     = "\u0056";

Shree_Tam_0802.consnt_CA      = "\u005C";
Shree_Tam_0802.consnt_JA      = "\u00E1";
Shree_Tam_0802.consnt_NYA     = "\u0062";

Shree_Tam_0802.consnt_TTA     = "\u0068";
Shree_Tam_0802.consnt_NNA     = "\u006E";

Shree_Tam_0802.consnt_TA      = "\u0075";
Shree_Tam_0802.consnt_NA      = "\u007C";
Shree_Tam_0802.consnt_NNNA    = "\u00DA";

Shree_Tam_0802.consnt_PA      = "\u00A3";
Shree_Tam_0802.consnt_MA      = "\u00A9";

Shree_Tam_0802.consnt_YA      = "\u00AF";
Shree_Tam_0802.consnt_RA      = "\u00B5";
Shree_Tam_0802.consnt_LA      = "\u00BB";
Shree_Tam_0802.consnt_VA      = "\u00C1";
Shree_Tam_0802.consnt_SSA     = "\u00E5";
Shree_Tam_0802.consnt_SA      = "\u00E9";
Shree_Tam_0802.consnt_HA      = "\u00ED";
Shree_Tam_0802.consnt_LLA     = "\u00CD";
Shree_Tam_0802.consnt_ZHA     = "\u00C7";
Shree_Tam_0802.consnt_RRA     = "\u00D3";
Shree_Tam_0802.conjct_KSH     = "\u00F1";
Shree_Tam_0802.conjct_SRII    = "\u00FF";

//Gunintamulu
Shree_Tam_0802.vowelsn_AA     = "\u00F5";
Shree_Tam_0802.vowelsn_I      = "\u0091";
Shree_Tam_0802.vowelsn_U_1    = "\u00FA";	
Shree_Tam_0802.vowelsn_U_2    = "\u00FB";	
Shree_Tam_0802.vowelsn_UU_1   = "\u00FC";
Shree_Tam_0802.vowelsn_UU_2   = "\u00FD";
Shree_Tam_0802.vowelsn_E_1    = "\u00F6";
Shree_Tam_0802.vowelsn_E_2    = "\u00F9";
Shree_Tam_0802.vowelsn_EE     = "\u00F7";
Shree_Tam_0802.vowelsn_AI     = "\u00F8";

// Old format. No lomger used.
Shree_Tam_0802.combo_NNAA     = "\u0074";
Shree_Tam_0802.combo_NNNAA    = "\u00E0";
Shree_Tam_0802.combo_RRAA     = "\u00D9";

//Shree_Tam_0802 uses the same symbol for generating vowelsn_AU and consnt_LLA. This is a work around
Shree_Tam_0802.combo_KAU      = "\u00F6\u0050\u00CD";
Shree_Tam_0802.combo_NGAU     = "\u00F6\u0056\u00CD";
Shree_Tam_0802.combo_CAU      = "\u00F6\u005C\u00CD";
Shree_Tam_0802.combo_JAU      = "\u00F6\u00E1\u00CD";
Shree_Tam_0802.combo_NYAU     = "\u00F6\u0062\u00CD";
Shree_Tam_0802.combo_TTAU     = "\u00F6\u0068\u00CD";
Shree_Tam_0802.combo_NNAU     = "\u00F6\u006E\u00CD";
Shree_Tam_0802.combo_TAU      = "\u00F6\u0075\u00CD";
Shree_Tam_0802.combo_NAU      = "\u00F6\u007C\u00CD";
Shree_Tam_0802.combo_NNNAU    = "\u00F6\u00DA\u00CD";
Shree_Tam_0802.combo_PAU      = "\u00F6\u00A3\u00CD";
Shree_Tam_0802.combo_MAU      = "\u00F6\u00A9\u00CD";
Shree_Tam_0802.combo_YAU      = "\u00F6\u00AF\u00CD";
Shree_Tam_0802.combo_RAU      = "\u00F6\u00B5\u00CD";
Shree_Tam_0802.combo_LAU      = "\u00F6\u00BB\u00CD";
Shree_Tam_0802.combo_VAU      = "\u00F6\u00C1\u00CD";
Shree_Tam_0802.combo_SSAU     = "\u00F6\u00E5\u00CD";
Shree_Tam_0802.combo_SAU      = "\u00F6\u00E9\u00CD";
Shree_Tam_0802.combo_HAU      = "\u00F6\u00ED\u00CD";
Shree_Tam_0802.combo_LLAU     = "\u00F6\u00CD\u00CD";
Shree_Tam_0802.combo_ZHAU     = "\u00F6\u00C7\u00CD";
Shree_Tam_0802.combo_RRAU     = "\u00F6\u00D3\u00CD";
Shree_Tam_0802.combo_KSHAU    = "\u00F6\u00F1\u00CD";

//Special Combinations
Shree_Tam_0802.combo_KI      = "\u0051";
Shree_Tam_0802.combo_KII     = "\u0052";
Shree_Tam_0802.combo_KU      = "\u0053";
Shree_Tam_0802.combo_KUU     = "\u0054";
Shree_Tam_0802.combo_KPULLI  = "\u0055";
Shree_Tam_0802.combo_NGI     = "\u0057";
Shree_Tam_0802.combo_NGII    = "\u0058";
Shree_Tam_0802.combo_NGU     = "\u0059";
Shree_Tam_0802.combo_NGUU    = "\u005A";
Shree_Tam_0802.combo_NGPULLI = "\u005B";

Shree_Tam_0802.combo_CI      = "\u005D";
Shree_Tam_0802.combo_CII     = "\u005E";
Shree_Tam_0802.combo_CU      = "\u005F";
Shree_Tam_0802.combo_CUU     = "\u0060";
Shree_Tam_0802.combo_CPULLI  = "\u0061";
Shree_Tam_0802.combo_JI      = "\u00E2";
Shree_Tam_0802.combo_JII     = "\u00E3";
Shree_Tam_0802.combo_JPULLI  = "\u00E4";
Shree_Tam_0802.combo_NYI     = "\u0063";
Shree_Tam_0802.combo_NYII    = "\u0064";
Shree_Tam_0802.combo_NYU     = "\u0065";
Shree_Tam_0802.combo_NYUU_1  = "\u0066";
Shree_Tam_0802.combo_NYUU_2  = "\u0065\u00F5";
Shree_Tam_0802.combo_NYPULLI = "\u0067";

Shree_Tam_0802.combo_TTI     = "\u0069";
Shree_Tam_0802.combo_TTII    = "\u006A";
Shree_Tam_0802.combo_TTU     = "\u006B";
Shree_Tam_0802.combo_TTUU    = "\u006C";
Shree_Tam_0802.combo_TTPULLI = "\u006D";
Shree_Tam_0802.combo_NNI     = "\u006F";
Shree_Tam_0802.combo_NNII    = "\u0070";
Shree_Tam_0802.combo_NNU     = "\u0071";
Shree_Tam_0802.combo_NNUU_1  = "\u0072";
Shree_Tam_0802.combo_NNUU_2  = "\u0071\u00F5";
Shree_Tam_0802.combo_NNPULLI = "\u0073";

Shree_Tam_0802.combo_TI      = "\u0076";
Shree_Tam_0802.combo_TII     = "\u0077";
Shree_Tam_0802.combo_TU      = "\u0078";
Shree_Tam_0802.combo_TUU_1   = "\u0079";
Shree_Tam_0802.combo_TUU_2   = "\u0078\u00F5";
Shree_Tam_0802.combo_TPULLI  = "\u007A";
Shree_Tam_0802.combo_NI      = "\u007B";
Shree_Tam_0802.combo_NII     = "\u007D";
Shree_Tam_0802.combo_NU      = "\u007E";
Shree_Tam_0802.combo_NUU_1   = "\u00A1";
Shree_Tam_0802.combo_NUU_2   = "\u007E\u00F5";
Shree_Tam_0802.combo_NPULLI  = "\u00A2";
Shree_Tam_0802.combo_NNNI    = "\u00DB";
Shree_Tam_0802.combo_NNNII   = "\u00DC";
Shree_Tam_0802.combo_NNNU    = "\u00DD";
Shree_Tam_0802.combo_NNNUU_1 = "\u00DE";
Shree_Tam_0802.combo_NNNUU_2 = "\u00DD\u00F5";
Shree_Tam_0802.combo_NNNPULLI= "\u00DF";

Shree_Tam_0802.combo_PI      = "\u00A4";
Shree_Tam_0802.combo_PII     = "\u00A5";
Shree_Tam_0802.combo_PU      = "\u00A6";
Shree_Tam_0802.combo_PUU     = "\u00A7";
Shree_Tam_0802.combo_PPULLI  = "\u00A8";
Shree_Tam_0802.combo_MI      = "\u00AA";
Shree_Tam_0802.combo_MII     = "\u00AB";
Shree_Tam_0802.combo_MU      = "\u2022";
Shree_Tam_0802.combo_MUU     = "\u2030";
Shree_Tam_0802.combo_MPULLI  = "\u00AE";

Shree_Tam_0802.combo_YI      = "\u00B0";
Shree_Tam_0802.combo_YII     = "\u00B1";
Shree_Tam_0802.combo_YU      = "\u00B2";
Shree_Tam_0802.combo_YUU     = "\u00B3";
Shree_Tam_0802.combo_YPULLI  = "\u00B4";
Shree_Tam_0802.combo_RI      = "\u203A";
Shree_Tam_0802.combo_RII     = "\u0178";
Shree_Tam_0802.combo_RU      = "\u00B8";
Shree_Tam_0802.combo_RUU     = "\u00B9";
Shree_Tam_0802.combo_RPULLI  = "\u00BA";
Shree_Tam_0802.combo_LI      = "\u00BC";
Shree_Tam_0802.combo_LII     = "\u00BD";
Shree_Tam_0802.combo_LU      = "\u00BE";
Shree_Tam_0802.combo_LUU_1   = "\u00BF";
Shree_Tam_0802.combo_LUU_2   = "\u00BE\u00F5";
Shree_Tam_0802.combo_LPULLI  = "\u00C0";
Shree_Tam_0802.combo_VI      = "\u00C2";
Shree_Tam_0802.combo_VII     = "\u00C3";
Shree_Tam_0802.combo_VU      = "\u00C4";
Shree_Tam_0802.combo_VUU     = "\u00C5";
Shree_Tam_0802.combo_VPULLI  = "\u00C6";

Shree_Tam_0802.combo_SSI     = "\u00E6";
Shree_Tam_0802.combo_SSII    = "\u00E7";
Shree_Tam_0802.combo_SSPULLI = "\u00E8";
Shree_Tam_0802.combo_SI      = "\u00EA";
Shree_Tam_0802.combo_SII     = "\u00EB";
Shree_Tam_0802.combo_SPULLI  = "\u00EC";
Shree_Tam_0802.combo_HI      = "\u00EE";
Shree_Tam_0802.combo_HII     = "\u00EF";
Shree_Tam_0802.combo_HPULLI  = "\u00F0";

Shree_Tam_0802.combo_LLI     = "\u00CE";
Shree_Tam_0802.combo_LLII    = "\u00CF";
Shree_Tam_0802.combo_LLU     = "\u00D0";
Shree_Tam_0802.combo_LLUU    = "\u00D1";
Shree_Tam_0802.combo_LLPULLI = "\u00D2";
Shree_Tam_0802.combo_ZHI     = "\u00C8";
Shree_Tam_0802.combo_ZHII    = "\u00C9";
Shree_Tam_0802.combo_ZHU     = "\u00CA";
Shree_Tam_0802.combo_ZHUU    = "\u00CB";
Shree_Tam_0802.combo_ZHPULLI = "\u00CC";
Shree_Tam_0802.combo_RRI     = "\u00D4";
Shree_Tam_0802.combo_RRII    = "\u00D5";
Shree_Tam_0802.combo_RRU     = "\u00D6";
Shree_Tam_0802.combo_RRUU_1  = "\u00D7";
Shree_Tam_0802.combo_RRUU_2  = "\u00D6\u00F5";
Shree_Tam_0802.combo_RRPULLI = "\u00D8";
Shree_Tam_0802.combo_KSHI    = "\u00F2";
Shree_Tam_0802.combo_KSHII   = "\u00F3";
Shree_Tam_0802.combo_KSHPULLI= "\u00F4";

//Matches ASCII
Shree_Tam_0802.EXCLAM         = "\u0021";
Shree_Tam_0802.QTSINGLE       = "\u0022";
Shree_Tam_0802.PERCENT        = "\u0025";
Shree_Tam_0802.PARENLEFT      = "\u0028";
Shree_Tam_0802.PARENRIGT      = "\u0029";
Shree_Tam_0802.ASTERISK       = "\u002A";
Shree_Tam_0802.PLUS           = "\u002B";
Shree_Tam_0802.COMMA          = "\u002C";
Shree_Tam_0802.PERIOD         = "\u002E";
Shree_Tam_0802.SLASH          = "\u002F";
Shree_Tam_0802.COLON          = "\u003A";
Shree_Tam_0802.SEMICOLON      = "\u003B";
Shree_Tam_0802.EQUALS         = "\u003D";
Shree_Tam_0802.QUESTION       = "\u003F";

Shree_Tam_0802.digit_ZERO     = "\u0030";
Shree_Tam_0802.digit_ONE      = "\u0031";
Shree_Tam_0802.digit_TWO      = "\u0032";
Shree_Tam_0802.digit_THREE    = "\u0033";
Shree_Tam_0802.digit_FOUR     = "\u0034";
Shree_Tam_0802.digit_FIVE     = "\u0035";
Shree_Tam_0802.digit_SIX      = "\u0036";
Shree_Tam_0802.digit_SEVEN    = "\u0037";
Shree_Tam_0802.digit_EIGHT    = "\u0038";
Shree_Tam_0802.digit_NINE     = "\u0039";

// Unknown. some have no unicode representation.
Shree_Tam_0802.misc_UNKNOWN_1  = "\u0040";
Shree_Tam_0802.misc_UNKNOWN_2  = "\u004D";
Shree_Tam_0802.misc_UNKNOWN_3  = "\u004E";
Shree_Tam_0802.misc_UNKNOWN_4  = "\u004F";
Shree_Tam_0802.misc_UNKNOWN_5  = "\u201A";
Shree_Tam_0802.misc_UNKNOWN_6  = "\u0192";
Shree_Tam_0802.misc_UNKNOWN_7  = "\u201E";
Shree_Tam_0802.misc_UNKNOWN_8  = "\u2026";
Shree_Tam_0802.misc_UNKNOWN_9  = "\u2020";
Shree_Tam_0802.misc_UNKNOWN_10 = "\u2021";
Shree_Tam_0802.misc_UNKNOWN_11 = "\u02C6";
Shree_Tam_0802.misc_UNKNOWN_12 = "\u02DC";
Shree_Tam_0802.misc_UNKNOWN_13 = "\u2122";
Shree_Tam_0802.misc_UNKNOWN_14 = "\u0161";
Shree_Tam_0802.misc_UNKNOWN_15 = "\u0153";
Shree_Tam_0802.misc_UNKNOWN_16 = "\u0182";
Shree_Tam_0802.misc_UNKNOWN_17 = "\u00FE";

//Does not match ASCII
Shree_Tam_0802.HYPHEN         = "\u0026";

Shree_Tam_0802.toPadma = new Object();

Shree_Tam_0802.toPadma[Shree_Tam_0802.visarga]  = Padma.visarga;
Shree_Tam_0802.toPadma[Shree_Tam_0802.vowel_A]  = Padma.vowel_A;
Shree_Tam_0802.toPadma[Shree_Tam_0802.vowel_AA] = Padma.vowel_AA;
Shree_Tam_0802.toPadma[Shree_Tam_0802.vowel_I]  = Padma.vowel_I;
Shree_Tam_0802.toPadma[Shree_Tam_0802.vowel_II] = Padma.vowel_II;
Shree_Tam_0802.toPadma[Shree_Tam_0802.vowel_U]  = Padma.vowel_U;
Shree_Tam_0802.toPadma[Shree_Tam_0802.vowel_UU] = Padma.vowel_UU;
Shree_Tam_0802.toPadma[Shree_Tam_0802.vowel_E]  = Padma.vowel_E;
Shree_Tam_0802.toPadma[Shree_Tam_0802.vowel_EE] = Padma.vowel_EE;
Shree_Tam_0802.toPadma[Shree_Tam_0802.vowel_AI] = Padma.vowel_AI;
Shree_Tam_0802.toPadma[Shree_Tam_0802.vowel_O]  = Padma.vowel_O;
Shree_Tam_0802.toPadma[Shree_Tam_0802.vowel_OO] = Padma.vowel_OO;
Shree_Tam_0802.toPadma[Shree_Tam_0802.vowel_AU] = Padma.vowel_AU;

Shree_Tam_0802.toPadma[Shree_Tam_0802.consnt_KA]  = Padma.consnt_KA;
Shree_Tam_0802.toPadma[Shree_Tam_0802.consnt_NGA] = Padma.consnt_NGA;
Shree_Tam_0802.toPadma[Shree_Tam_0802.consnt_CA]  = Padma.consnt_CA;
Shree_Tam_0802.toPadma[Shree_Tam_0802.consnt_JA]  = Padma.consnt_JA;
Shree_Tam_0802.toPadma[Shree_Tam_0802.consnt_NYA] = Padma.consnt_NYA;
Shree_Tam_0802.toPadma[Shree_Tam_0802.consnt_TTA] = Padma.consnt_TTA;
Shree_Tam_0802.toPadma[Shree_Tam_0802.consnt_NNA] = Padma.consnt_NNA;
Shree_Tam_0802.toPadma[Shree_Tam_0802.consnt_TA]  = Padma.consnt_TA;
Shree_Tam_0802.toPadma[Shree_Tam_0802.consnt_NA]  = Padma.consnt_NA;
Shree_Tam_0802.toPadma[Shree_Tam_0802.consnt_NNNA] = Padma.consnt_NNNA;
Shree_Tam_0802.toPadma[Shree_Tam_0802.consnt_PA]  = Padma.consnt_PA;
Shree_Tam_0802.toPadma[Shree_Tam_0802.consnt_MA]  = Padma.consnt_MA;
Shree_Tam_0802.toPadma[Shree_Tam_0802.consnt_YA]  = Padma.consnt_YA;
Shree_Tam_0802.toPadma[Shree_Tam_0802.consnt_RA]  = Padma.consnt_RA;
Shree_Tam_0802.toPadma[Shree_Tam_0802.consnt_LA]  = Padma.consnt_LA;
Shree_Tam_0802.toPadma[Shree_Tam_0802.consnt_VA]  = Padma.consnt_VA;
Shree_Tam_0802.toPadma[Shree_Tam_0802.consnt_SSA] = Padma.consnt_SSA;
Shree_Tam_0802.toPadma[Shree_Tam_0802.consnt_SA]  = Padma.consnt_SA;
Shree_Tam_0802.toPadma[Shree_Tam_0802.consnt_HA]  = Padma.consnt_HA;
Shree_Tam_0802.toPadma[Shree_Tam_0802.consnt_LLA] = Padma.consnt_LLA;
Shree_Tam_0802.toPadma[Shree_Tam_0802.consnt_ZHA] = Padma.consnt_ZHA;
Shree_Tam_0802.toPadma[Shree_Tam_0802.consnt_RRA] = Padma.consnt_RRA;
Shree_Tam_0802.toPadma[Shree_Tam_0802.conjct_KSH] = Padma.consnt_KA + Padma.vattu_SSA;
Shree_Tam_0802.toPadma[Shree_Tam_0802.conjct_SRII] = Padma.consnt_SA + Padma.vattu_RA + Padma.vowelsn_II;

//Gunintamulu
Shree_Tam_0802.toPadma[Shree_Tam_0802.vowelsn_AA]   = Padma.vowelsn_AA;
Shree_Tam_0802.toPadma[Shree_Tam_0802.vowelsn_I]    = Padma.vowelsn_I;
Shree_Tam_0802.toPadma[Shree_Tam_0802.vowelsn_U_1]  = Padma.vowelsn_U;
Shree_Tam_0802.toPadma[Shree_Tam_0802.vowelsn_U_2]  = Padma.vowelsn_U;
Shree_Tam_0802.toPadma[Shree_Tam_0802.vowelsn_UU_1] = Padma.vowelsn_UU;
Shree_Tam_0802.toPadma[Shree_Tam_0802.vowelsn_UU_2] = Padma.vowelsn_UU;
Shree_Tam_0802.toPadma[Shree_Tam_0802.vowelsn_E_1]  = Padma.vowelsn_E;
Shree_Tam_0802.toPadma[Shree_Tam_0802.vowelsn_E_2]  = Padma.vowelsn_E;
Shree_Tam_0802.toPadma[Shree_Tam_0802.vowelsn_EE]   = Padma.vowelsn_EE;
Shree_Tam_0802.toPadma[Shree_Tam_0802.vowelsn_AI]   = Padma.vowelsn_AI;

// Old format. No lomger used.
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NNAA]  = Padma.consnt_NNA + Padma.vowelsn_AA;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NNNAA] = Padma.consnt_NNNA + Padma.vowelsn_AA;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_RRAA]  = Padma.consnt_RRA + Padma.vowelsn_AA;

Shree_Tam_0802.combo_KAU      = Padma.consnt_KA + Padma.vowelsn_AU;
Shree_Tam_0802.combo_NGAU     = Padma.consnt_NGA + Padma.vowelsn_AU;
Shree_Tam_0802.combo_CAU      = Padma.consnt_CA + Padma.vowelsn_AU;
Shree_Tam_0802.combo_JAU      = Padma.consnt_JA + Padma.vowelsn_AU;
Shree_Tam_0802.combo_NYAU     = Padma.consnt_NYA + Padma.vowelsn_AU;
Shree_Tam_0802.combo_TTAU     = Padma.consnt_TTA + Padma.vowelsn_AU;
Shree_Tam_0802.combo_NNAU     = Padma.consnt_NNA + Padma.vowelsn_AU;
Shree_Tam_0802.combo_TAU      = Padma.consnt_TA + Padma.vowelsn_AU;
Shree_Tam_0802.combo_NAU      = Padma.consnt_NA + Padma.vowelsn_AU;
Shree_Tam_0802.combo_NNNAU    = Padma.consnt_NNNA + Padma.vowelsn_AU;
Shree_Tam_0802.combo_PAU      = Padma.consnt_PA + Padma.vowelsn_AU;
Shree_Tam_0802.combo_MAU      = Padma.consnt_MA + Padma.vowelsn_AU;
Shree_Tam_0802.combo_YAU      = Padma.consnt_YA + Padma.vowelsn_AU;
Shree_Tam_0802.combo_RAU      = Padma.consnt_RA + Padma.vowelsn_AU;
Shree_Tam_0802.combo_LAU      = Padma.consnt_LA + Padma.vowelsn_AU;
Shree_Tam_0802.combo_VAU      = Padma.consnt_VA + Padma.vowelsn_AU;
Shree_Tam_0802.combo_SSAU     = Padma.consnt_SSA + Padma.vowelsn_AU;
Shree_Tam_0802.combo_SAU      = Padma.consnt_SA + Padma.vowelsn_AU;
Shree_Tam_0802.combo_HAU      = Padma.consnt_HA + Padma.vowelsn_AU;
Shree_Tam_0802.combo_LLAU     = Padma.consnt_LLA + Padma.vowelsn_AU;
Shree_Tam_0802.combo_ZHAU     = Padma.consnt_ZHA + Padma.vowelsn_AU;
Shree_Tam_0802.combo_RRAU     = Padma.consnt_RRA + Padma.vowelsn_AU;
Shree_Tam_0802.combo_KSHAU    = Padma.consnt_KA + Padma.vattu_SSA + Padma.vowelsn_AU;

//Special Combinations
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_KI]      = Padma.consnt_KA + Padma.vowelsn_I;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_KII]     = Padma.consnt_KA + Padma.vowelsn_II;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_KU]      = Padma.consnt_KA + Padma.vowelsn_U;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_KUU]     = Padma.consnt_KA + Padma.vowelsn_UU;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_KPULLI]  = Padma.consnt_KA + Padma.pulli;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NGI]     = Padma.consnt_NGA + Padma.vowelsn_I;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NGII]    = Padma.consnt_NGA + Padma.vowelsn_II;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NGU]     = Padma.consnt_NGA + Padma.vowelsn_U;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NGUU]    = Padma.consnt_NGA + Padma.vowelsn_UU;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NGPULLI] = Padma.consnt_NGA + Padma.pulli;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_CI]      = Padma.consnt_CA + Padma.vowelsn_I;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_CII]     = Padma.consnt_CA + Padma.vowelsn_II;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_CU]      = Padma.consnt_CA + Padma.vowelsn_U;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_CUU]     = Padma.consnt_CA + Padma.vowelsn_UU;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_CPULLI]  = Padma.consnt_CA + Padma.pulli;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_JI]      = Padma.consnt_JA + Padma.vowelsn_I;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_JII]     = Padma.consnt_JA + Padma.vowelsn_II;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_JPULLI]  = Padma.consnt_JA + Padma.pulli;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NYI]     = Padma.consnt_NYA + Padma.vowelsn_I;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NYII]    = Padma.consnt_NYA + Padma.vowelsn_II;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NYU]     = Padma.consnt_NYA + Padma.vowelsn_U;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NYUU_1]  = Padma.consnt_NYA + Padma.vowelsn_UU;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NYUU_2]  = Padma.consnt_NYA + Padma.vowelsn_UU;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NYPULLI] = Padma.consnt_NYA + Padma.pulli;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_TTI]     = Padma.consnt_TTA + Padma.vowelsn_I;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_TTII]    = Padma.consnt_TTA + Padma.vowelsn_II;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_TTU]     = Padma.consnt_TTA + Padma.vowelsn_U;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_TTUU]    = Padma.consnt_TTA + Padma.vowelsn_UU;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_TTPULLI] = Padma.consnt_TTA + Padma.pulli;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NNI]     = Padma.consnt_NNA + Padma.vowelsn_I;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NNII]    = Padma.consnt_NNA + Padma.vowelsn_II;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NNU]     = Padma.consnt_NNA + Padma.vowelsn_U;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NNUU_1]  = Padma.consnt_NNA + Padma.vowelsn_UU;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NNUU_2]  = Padma.consnt_NNA + Padma.vowelsn_UU;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NNPULLI] = Padma.consnt_NNA + Padma.pulli;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_TI]      = Padma.consnt_TA + Padma.vowelsn_I;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_TII]     = Padma.consnt_TA + Padma.vowelsn_II;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_TU]      = Padma.consnt_TA + Padma.vowelsn_U;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_TUU_1]   = Padma.consnt_TA + Padma.vowelsn_UU;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_TUU_2]   = Padma.consnt_TA + Padma.vowelsn_UU;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_TPULLI]  = Padma.consnt_TA + Padma.pulli;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NI]      = Padma.consnt_NA + Padma.vowelsn_I;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NII]     = Padma.consnt_NA + Padma.vowelsn_II;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NU]      = Padma.consnt_NA + Padma.vowelsn_U;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NUU_1]   = Padma.consnt_NA + Padma.vowelsn_UU;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NUU_2]   = Padma.consnt_NA + Padma.vowelsn_UU;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NPULLI]  = Padma.consnt_NA + Padma.pulli;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NNNI]    = Padma.consnt_NNNA + Padma.vowelsn_I;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NNNII]   = Padma.consnt_NNNA + Padma.vowelsn_II;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NNNU]    = Padma.consnt_NNNA + Padma.vowelsn_U;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NNNUU_1] = Padma.consnt_NNNA + Padma.vowelsn_UU;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NNNUU_2] = Padma.consnt_NNNA + Padma.vowelsn_UU;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_NNNPULLI] = Padma.consnt_NNNA + Padma.pulli;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_PI]      = Padma.consnt_PA + Padma.vowelsn_I;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_PII]     = Padma.consnt_PA + Padma.vowelsn_II;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_PU]      = Padma.consnt_PA + Padma.vowelsn_U;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_PUU]     = Padma.consnt_PA + Padma.vowelsn_UU;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_PPULLI]  = Padma.consnt_PA + Padma.pulli;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_MI]      = Padma.consnt_MA + Padma.vowelsn_I;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_MII]     = Padma.consnt_MA + Padma.vowelsn_II;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_MU]      = Padma.consnt_MA + Padma.vowelsn_U;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_MUU]     = Padma.consnt_MA + Padma.vowelsn_UU;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_MPULLI]  = Padma.consnt_MA + Padma.pulli;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_YI]      = Padma.consnt_YA + Padma.vowelsn_I;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_YII]     = Padma.consnt_YA + Padma.vowelsn_II;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_YU]      = Padma.consnt_YA + Padma.vowelsn_U;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_YUU]     = Padma.consnt_YA + Padma.vowelsn_UU;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_YPULLI]  = Padma.consnt_YA + Padma.pulli;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_RI]      = Padma.consnt_RA + Padma.vowelsn_I;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_RII]     = Padma.consnt_RA + Padma.vowelsn_II;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_RU]      = Padma.consnt_RA + Padma.vowelsn_U;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_RUU]     = Padma.consnt_RA + Padma.vowelsn_UU;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_RPULLI]  = Padma.consnt_RA + Padma.pulli;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_LU]      = Padma.consnt_LA + Padma.vowelsn_U;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_LUU_1]   = Padma.consnt_LA + Padma.vowelsn_UU;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_LUU_2]   = Padma.consnt_LA + Padma.vowelsn_UU;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_LI]      = Padma.consnt_LA + Padma.vowelsn_I;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_LII]     = Padma.consnt_LA + Padma.vowelsn_II;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_LPULLI]  = Padma.consnt_LA + Padma.pulli;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_VI]      = Padma.consnt_VA + Padma.vowelsn_I;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_VII]     = Padma.consnt_VA + Padma.vowelsn_II;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_VU]      = Padma.consnt_VA + Padma.vowelsn_U;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_VUU]     = Padma.consnt_VA + Padma.vowelsn_UU;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_VPULLI]  = Padma.consnt_VA + Padma.pulli;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_SSI]     = Padma.consnt_SSA + Padma.vowelsn_I;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_SSII]    = Padma.consnt_SSA + Padma.vowelsn_II;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_SSPULLI] = Padma.consnt_SSA + Padma.pulli;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_SI]      = Padma.consnt_SA + Padma.vowelsn_I;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_SII]     = Padma.consnt_SA + Padma.vowelsn_II;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_SPULLI]  = Padma.consnt_SA + Padma.pulli;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_HI]      = Padma.consnt_HA + Padma.vowelsn_I;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_HII]     = Padma.consnt_HA + Padma.vowelsn_II;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_HPULLI]  = Padma.consnt_HA + Padma.pulli;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_LLI]     = Padma.consnt_LLA + Padma.vowelsn_I;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_LLII]    = Padma.consnt_LLA + Padma.vowelsn_II;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_LLU]     = Padma.consnt_LLA + Padma.vowelsn_U;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_LLUU]    = Padma.consnt_LLA + Padma.vowelsn_UU;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_LLPULLI] = Padma.consnt_LLA + Padma.pulli;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_ZHI]     = Padma.consnt_ZHA + Padma.vowelsn_I;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_ZHII]    = Padma.consnt_ZHA + Padma.vowelsn_II;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_ZHU]     = Padma.consnt_ZHA + Padma.vowelsn_U;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_ZHUU]    = Padma.consnt_ZHA + Padma.vowelsn_UU;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_ZHPULLI] = Padma.consnt_ZHA + Padma.pulli;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_RRI]     = Padma.consnt_RRA + Padma.vowelsn_I;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_RRII]    = Padma.consnt_RRA + Padma.vowelsn_II;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_RRU]     = Padma.consnt_RRA + Padma.vowelsn_U;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_RRUU_1]  = Padma.consnt_RRA + Padma.vowelsn_UU;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_RRUU_2]  = Padma.consnt_RRA + Padma.vowelsn_UU;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_RRPULLI] = Padma.consnt_RRA + Padma.pulli;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_KSHI]    = Padma.consnt_KA + Padma.vattu_SSA + Padma.vowelsn_I;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_KSHII]   = Padma.consnt_KA + Padma.vattu_SSA + Padma.vowelsn_II;
Shree_Tam_0802.toPadma[Shree_Tam_0802.combo_KSHPULLI]= Padma.consnt_KA + Padma.vattu_SSA + Padma.pulli;

Shree_Tam_0802.toPadma[Shree_Tam_0802.HYPHEN]   = "-";

Shree_Tam_0802.redundantList = new Object();
Shree_Tam_0802.redundantList[Shree_Tam_0802.misc_UNKNOWN_1]  = true;
Shree_Tam_0802.redundantList[Shree_Tam_0802.misc_UNKNOWN_2]  = true;
Shree_Tam_0802.redundantList[Shree_Tam_0802.misc_UNKNOWN_3]  = true;
Shree_Tam_0802.redundantList[Shree_Tam_0802.misc_UNKNOWN_4]  = true;
Shree_Tam_0802.redundantList[Shree_Tam_0802.misc_UNKNOWN_5]  = true;
Shree_Tam_0802.redundantList[Shree_Tam_0802.misc_UNKNOWN_6]  = true;
Shree_Tam_0802.redundantList[Shree_Tam_0802.misc_UNKNOWN_7]  = true;
Shree_Tam_0802.redundantList[Shree_Tam_0802.misc_UNKNOWN_8]  = true;
Shree_Tam_0802.redundantList[Shree_Tam_0802.misc_UNKNOWN_9]  = true;
Shree_Tam_0802.redundantList[Shree_Tam_0802.misc_UNKNOWN_10] = true;
Shree_Tam_0802.redundantList[Shree_Tam_0802.misc_UNKNOWN_11] = true;
Shree_Tam_0802.redundantList[Shree_Tam_0802.misc_UNKNOWN_12] = true;
Shree_Tam_0802.redundantList[Shree_Tam_0802.misc_UNKNOWN_13] = true;
Shree_Tam_0802.redundantList[Shree_Tam_0802.misc_UNKNOWN_14] = true;
Shree_Tam_0802.redundantList[Shree_Tam_0802.misc_UNKNOWN_15] = true;
Shree_Tam_0802.redundantList[Shree_Tam_0802.misc_UNKNOWN_16] = true;
Shree_Tam_0802.redundantList[Shree_Tam_0802.misc_UNKNOWN_17] = true;

Shree_Tam_0802.prefixList = new Object();
Shree_Tam_0802.prefixList[Shree_Tam_0802.vowelsn_E_1] = true;
Shree_Tam_0802.prefixList[Shree_Tam_0802.vowelsn_E_2] = true;
Shree_Tam_0802.prefixList[Shree_Tam_0802.vowelsn_EE]  = true;
Shree_Tam_0802.prefixList[Shree_Tam_0802.vowelsn_AI]  = true;

Shree_Tam_0802.overloadList = new Object();
Shree_Tam_0802.overloadList[Shree_Tam_0802.vowel_O]   = true;
Shree_Tam_0802.overloadList[Shree_Tam_0802.vowelsn_E_1] = true;
Shree_Tam_0802.overloadList[Shree_Tam_0802.vowelsn_E_2] = true;
Shree_Tam_0802.overloadList["\u00F6\u0050"]    = true;
Shree_Tam_0802.overloadList["\u00F6\u0056"]    = true;
Shree_Tam_0802.overloadList["\u00F6\u005C"]    = true;
Shree_Tam_0802.overloadList["\u00F6\u00E1"]    = true;
Shree_Tam_0802.overloadList["\u00F6\u0062"]    = true;
Shree_Tam_0802.overloadList["\u00F6\u0068"]    = true;
Shree_Tam_0802.overloadList["\u00F6\u006E"]    = true;
Shree_Tam_0802.overloadList["\u00F6\u0075"]    = true;
Shree_Tam_0802.overloadList["\u00F6\u007C"]    = true;
Shree_Tam_0802.overloadList["\u00F6\u00DA"]    = true;
Shree_Tam_0802.overloadList["\u00F6\u00A3"]    = true;
Shree_Tam_0802.overloadList["\u00F6\u00A9"]    = true;
Shree_Tam_0802.overloadList["\u00F6\u00AF"]    = true;
Shree_Tam_0802.overloadList["\u00F6\u00B5"]    = true;
Shree_Tam_0802.overloadList["\u00F6\u00BB"]    = true;
Shree_Tam_0802.overloadList["\u00F6\u00C1"]    = true;
Shree_Tam_0802.overloadList["\u00F6\u00E5"]    = true;
Shree_Tam_0802.overloadList["\u00F6\u00E9"]    = true;
Shree_Tam_0802.overloadList["\u00F6\u00ED"]    = true;
Shree_Tam_0802.overloadList["\u00F6\u00CD"]    = true;
Shree_Tam_0802.overloadList["\u00F6\u00C7"]    = true;
Shree_Tam_0802.overloadList["\u00F6\u00D3"]    = true;
Shree_Tam_0802.overloadList["\u00F6\u00F1"]    = true;

Shree_Tam_0802.overloadList[Shree_Tam_0802.combo_NYU]  = true;
Shree_Tam_0802.overloadList[Shree_Tam_0802.combo_NNU]  = true;
Shree_Tam_0802.overloadList[Shree_Tam_0802.combo_TU]   = true;
Shree_Tam_0802.overloadList[Shree_Tam_0802.combo_NU]   = true;
Shree_Tam_0802.overloadList[Shree_Tam_0802.combo_NNNU] = true;
Shree_Tam_0802.overloadList[Shree_Tam_0802.combo_LU]   = true;
Shree_Tam_0802.overloadList[Shree_Tam_0802.combo_RRU]  = true;
