// $Id: Nandi.js,v 1.2 2006/02/20 21:16:29 vnagarjuna Exp $ -->

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

//NANDI Kannada

function Nandi()
{
}

//The interface every dynamic font encoding should implement
Nandi.maxLookupLen = 3;
Nandi.fontFace     = "KNW-TTNandi";
Nandi.displayName  = "Nandi";
Nandi.script       = Padma.script_KANNADA;
Nandi.hasSuffixes  = true;

Nandi.lookup = function (str) 
{
    return Nandi.toPadma[str];
}

Nandi.isPrefixSymbol = function (str)
{
    return false; //Nandi.prefixList[str] != null;
}

Nandi.isOverloaded = function (str)
{
    return Nandi.overloadList[str] != null;
}

Nandi.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if ((sign2 == Padma.vowelsn_I && sign1 == Padma.vowelsn_IILEN) || 
        (sign1 == Padma.vowelsn_I && sign2 == Padma.vowelsn_IILEN))
        return Padma.vowelsn_II;
    if ((sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_IILEN) || 
        (sign1 == Padma.vowelsn_E && sign2 == Padma.vowelsn_IILEN))
        return Padma.vowelsn_EE;
    if ((sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_AILEN) || 
        (sign1 == Padma.vowelsn_E && sign2 == Padma.vowelsn_AILEN))
        return Padma.vowelsn_AI;
    if ((sign2 == Padma.vowelsn_O && sign1 == Padma.vowelsn_IILEN) || 
        (sign1 == Padma.vowelsn_O && sign2 == Padma.vowelsn_IILEN))
        return Padma.vowelsn_OO;
    return sign1 + sign2;
}

Nandi.isRedundant = function (str)
{
    return Nandi.redundantList[str] != null;
}

Nandi.isSuffixSymbol = function (str)
{
    return Nandi.suffixList[str] != null;
}

//Implementation details start here

//0x26, AD,  DC, EC

//Specials
Nandi.visarga        = "\u004E";
Nandi.anusvara       = "\u004D";
Nandi.virama         = "\u00E9";

//Vowels
Nandi.vowel_A        = "\u0040";
Nandi.vowel_AA       = "\u0041";
Nandi.vowel_I        = "\u0042";
Nandi.vowel_II       = "\u0043";
Nandi.vowel_U        = "\u0044";
Nandi.vowel_UU       = "\u0045";
Nandi.vowel_R_1      = "\u0046\u00DF";
Nandi.vowel_R_2      = "\u0046\u00E1";
Nandi.vowel_R_3      = "\u0046\u00E2";
Nandi.vowel_RR_1     = "\u0046\u00E0";
Nandi.vowel_RR_2     = "\u0046\u00E3";
Nandi.vowel_E        = "\u0047";
Nandi.vowel_EE       = "\u0048";
Nandi.vowel_AI       = "\u0049";
Nandi.vowel_O        = "\u004A";
Nandi.vowel_OO       = "\u004B";
Nandi.vowel_AU       = "\u004C";

//Consonants
Nandi.consnt_KA      = "\u004F";
Nandi.consnt_KHA_1   = "\u0052";
Nandi.consnt_KHA_2   = "\u0053";
Nandi.consnt_GA      = "\u0056";
Nandi.consnt_GHA     = "\u0059";
Nandi.consnt_NGA     = "\u005C";

Nandi.consnt_CA      = "\u005E";
Nandi.consnt_CHA     = "\u0061";
Nandi.consnt_JA_1    = "\u0064";
Nandi.consnt_JA_2    = "\u0065";
Nandi.consnt_JHA_1   = "\u00C1\u0068\u00DF";
Nandi.consnt_JHA_2   = "\u00C1\u0068\u00E1";
Nandi.consnt_JHA_3   = "\u00C1\u0068\u00E2";
Nandi.consnt_NYA     = "\u006A";

Nandi.consnt_TTA_1   = "\u006C";
Nandi.consnt_TTA_2   = "\u006D";
Nandi.consnt_TTHA    = "\u0070";
Nandi.consnt_DDA     = "\u0073";
Nandi.consnt_DDHA    = "\u0076";
Nandi.consnt_NNA_1   = "\u0079";
Nandi.consnt_NNA_2   = "\u007A";

Nandi.consnt_TA      = "\u007D";
Nandi.consnt_THA     = "\u00A2";
Nandi.consnt_DA      = "\u00A5";
Nandi.consnt_DHA     = "\u00A8";
Nandi.consnt_NA      = "\u00AB";

Nandi.consnt_PA      = "\u00AE";
Nandi.consnt_PHA     = "\u00B1";
Nandi.consnt_BA_1    = "\u2026";
Nandi.consnt_BA_2    = "\u2020";
Nandi.consnt_BHA     = "\u00BA";
Nandi.consnt_MA_1    = "\u00C8\u00DF"; //Y
Nandi.consnt_MA_2    = "\u00C8\u00E1"; //Y
Nandi.consnt_MA_3    = "\u00C8\u00E2"; //Y

Nandi.consnt_YA_1    = "\u00BE\u00DF"; //Y
Nandi.consnt_YA_2    = "\u00BE\u00E1"; //Y
Nandi.consnt_YA_3    = "\u00BE\u00E2"; //Y
Nandi.consnt_RA      = "\u00C1";
Nandi.consnt_LA_1    = "\u00C4";
Nandi.consnt_LA_2    = "\u00C5";    
Nandi.consnt_VA      = "\u00C8";
Nandi.consnt_SHA     = "\u00CB";
Nandi.consnt_SSA     = "\u00CE";
Nandi.consnt_SA      = "\u00D1";
Nandi.consnt_HA      = "\u00D4";
Nandi.consnt_LLA     = "\u00D7";

//Gunintamulu
Nandi.vowelsn_AA     = "\u00DB";
Nandi.vowelsn_I      = "\u00DD";
Nandi.vowelsn_U_1    = "\u00DF";
Nandi.vowelsn_U_2    = "\u00E1";
Nandi.vowelsn_U_3    = "\u00E2";
Nandi.vowelsn_UU_1   = "\u00E0";
Nandi.vowelsn_UU_2   = "\u00E3";
Nandi.vowelsn_R      = "\u00E4";
Nandi.vowelsn_RR     = "\u00E5";
Nandi.vowelsn_E      = "\u00E6";
Nandi.vowelsn_O_1    = "\u00E6\u00E0";
Nandi.vowelsn_O_2    = "\u00E6\u00E3";
Nandi.vowelsn_AU     = "\u00E8";

Nandi.vowelsn_IILEN    = "\u00DE";
Nandi.vowelsn_AILEN    = "\u00E7";

//Special Combinations
Nandi.combo_KI       = "\u0050";
Nandi.combo_KHI      = "\u0054";
Nandi.combo_GI       = "\u0057";
Nandi.combo_GHI      = "\u005A";

Nandi.combo_CI       = "\u005F";
Nandi.combo_CHI      = "\u0062";
Nandi.combo_JI       = "\u0066";

Nandi.combo_TTI      = "\u006E";
Nandi.combo_TTHI     = "\u0071";
Nandi.combo_DDI      = "\u0074";
Nandi.combo_DDHI     = "\u0077";
Nandi.combo_NNI      = "\u007B";

Nandi.combo_TI       = "\u007E";
Nandi.combo_THI      = "\u00A3";
Nandi.combo_DI       = "\u00A6";
Nandi.combo_DHI      = "\u0192";
Nandi.combo_NI       = "\u00AC";

Nandi.combo_PI       = "\u00AF";
Nandi.combo_PHI      = "\u00B2";
Nandi.combo_BI       = "\u00B8";
Nandi.combo_BHI      = "\u00BB";
Nandi.combo_MI_1     = "\u00C9\u00DF";
Nandi.combo_MI_2     = "\u00C9\u00E1";
Nandi.combo_MI_3     = "\u00C9\u00E2";
Nandi.combo_ME       = "\u00C8\u00E6\u00DF";
Nandi.combo_MO       = "\u00C8\u00E6\u00E0";

Nandi.combo_YI       = "\u00BF\u00DF";
Nandi.combo_YE       = "\u00BE\u00E6\u00DF";
Nandi.combo_YO       = "\u00BE\u00E6\u00E0";
Nandi.combo_RI       = "\u00C2";
Nandi.combo_LI       = "\u00C6";
Nandi.combo_VI       = "\u00C9";
Nandi.combo_SHI      = "\u00CC";
Nandi.combo_SSI      = "\u00CF";
Nandi.combo_SI       = "\u00D2";
Nandi.combo_HI       = "\u00D5";
Nandi.combo_LLI      = "\u00D8";
Nandi.combo_SHRII    = "\u002A";

//Vattulu
Nandi.vattu_KA       = "\u0051";
Nandi.vattu_KR       = "\u00ED";
Nandi.vattu_KHA      = "\u0055";
Nandi.vattu_GA       = "\u0058";
Nandi.vattu_GHA      = "\u005B";
Nandi.vattu_NGA      = "\u005D";

Nandi.vattu_CA       = "\u0060";
Nandi.vattu_CHA      = "\u0063";
Nandi.vattu_JA       = "\u0067";
Nandi.vattu_JHA_1    = "\u0024";
Nandi.vattu_JHA_2    = "\u0069";
Nandi.vattu_NYA      = "\u006B";

Nandi.vattu_TTA      = "\u006F";
Nandi.vattu_TTHA     = "\u0072";
Nandi.vattu_DDA      = "\u0075";
Nandi.vattu_DDHA     = "\u0078";
Nandi.vattu_NNA      = "\u007C";

Nandi.vattu_TA       = "\u00A1";
Nandi.vattu_TU       = "\u00EA";
Nandi.vattu_TAI      = "\u00EB";
Nandi.vattu_THA      = "\u00A4";
Nandi.vattu_DA       = "\u00A7";
Nandi.vattu_DHA      = "\u00AA";
Nandi.vattu_NA       = "\u201E";

Nandi.vattu_PA       = "\u00B0";
Nandi.vattu_PHA      = "\u00B5";
Nandi.vattu_BA       = "\u00B9";
Nandi.vattu_BHA      = "\u00BC";
Nandi.vattu_MA       = "\u00BD";

Nandi.vattu_YA       = "\u00C0";
Nandi.vattu_RA_1     = "\u00C3";
Nandi.vattu_RA_2     = "\u00EF";
Nandi.vattu_RA_3     = "\u00F0";
Nandi.vattu_RA_4     = "\u00F1";
Nandi.vattu_RA_R     = "\u00EE";
Nandi.vattu_LA       = "\u00C7";
Nandi.vattu_VA       = "\u2021";
Nandi.vattu_SHA      = "\u00CD";
Nandi.vattu_SSA      = "\u00D0";
Nandi.vattu_SA       = "\u00D3";
Nandi.vattu_HA       = "\u00D6";
Nandi.vattu_LLA      = "\u00D9";

//half forms of RA
Nandi.halffm_RA      = "\u0025";

//Digits
Nandi.digit_ZERO     = "\u0030";
Nandi.digit_ONE      = "\u0031";
Nandi.digit_TWO      = "\u0032";
Nandi.digit_THREE    = "\u0033";
Nandi.digit_FOUR     = "\u0034";
Nandi.digit_FIVE     = "\u0035";
Nandi.digit_SIX      = "\u0036";
Nandi.digit_SEVEN    = "\u0037";
Nandi.digit_EIGHT    = "\u0038";
Nandi.digit_NINE     = "\u0039";

//Matches ASCII
Nandi.EXCLAM         = "\u0021";
Nandi.PARENLEFT      = "\u0028";
Nandi.PARENRIGT      = "\u0029";
Nandi.COMMA          = "\u002C";
Nandi.PERIOD         = "\u002E";
Nandi.SLASH          = "\u002F";
Nandi.COLON          = "\u003A";
Nandi.SEMICOLON      = "\u003B";
Nandi.QUESTION       = "\u003F";

Nandi.LQTSINGLE      = "\u0022";
Nandi.RQTSINGLE      = "\u0027";
Nandi.misc_DANDA     = "\u002B";

//Kommu
Nandi.misc_TICK_1    = "\u00DA";

Nandi.misc_UNKNOWN_1 = "\u003C";
Nandi.misc_UNKNOWN_2 = "\u003D";
Nandi.misc_UNKNOWN_3 = "\u003E";
Nandi.misc_UNKNOWN_4 = "\u00B3";
Nandi.misc_UNKNOWN_5 = "\u00B4";

Nandi.toPadma = new Object();

Nandi.toPadma[Nandi.visarga]  = Padma.visarga;
Nandi.toPadma[Nandi.anusvara] = Padma.anusvara;
Nandi.toPadma[Nandi.virama]   = Padma.syllbreak;

Nandi.toPadma[Nandi.vowel_A]    = Padma.vowel_A;
Nandi.toPadma[Nandi.vowel_AA]   = Padma.vowel_AA;
Nandi.toPadma[Nandi.vowel_I]    = Padma.vowel_I;
Nandi.toPadma[Nandi.vowel_II]   = Padma.vowel_II;
Nandi.toPadma[Nandi.vowel_U]    = Padma.vowel_U;
Nandi.toPadma[Nandi.vowel_UU]   = Padma.vowel_UU;
Nandi.toPadma[Nandi.vowel_R_1]  = Padma.vowel_R;
Nandi.toPadma[Nandi.vowel_R_2]  = Padma.vowel_R;
Nandi.toPadma[Nandi.vowel_R_3]  = Padma.vowel_R;
Nandi.toPadma[Nandi.vowel_RR_1] = Padma.vowel_RR;
Nandi.toPadma[Nandi.vowel_RR_2] = Padma.vowel_RR;
Nandi.toPadma[Nandi.vowel_E]    = Padma.vowel_E;
Nandi.toPadma[Nandi.vowel_EE]   = Padma.vowel_EE;
Nandi.toPadma[Nandi.vowel_AI]   = Padma.vowel_AI;
Nandi.toPadma[Nandi.vowel_O]    = Padma.vowel_O;
Nandi.toPadma[Nandi.vowel_OO]   = Padma.vowel_OO;
Nandi.toPadma[Nandi.vowel_AU]   = Padma.vowel_AU;

Nandi.toPadma[Nandi.consnt_KA]    = Padma.consnt_KA;
Nandi.toPadma[Nandi.consnt_KHA_1] = Padma.consnt_KHA;
Nandi.toPadma[Nandi.consnt_KHA_2] = Padma.consnt_KHA;
Nandi.toPadma[Nandi.consnt_GA]    = Padma.consnt_GA;
Nandi.toPadma[Nandi.consnt_GHA]   = Padma.consnt_GHA;
Nandi.toPadma[Nandi.consnt_NGA]   = Padma.consnt_NGA;

Nandi.toPadma[Nandi.consnt_CA]    = Padma.consnt_CA;
Nandi.toPadma[Nandi.consnt_CHA]   = Padma.consnt_CHA;
Nandi.toPadma[Nandi.consnt_JA_1]  = Padma.consnt_JA;
Nandi.toPadma[Nandi.consnt_JA_2]  = Padma.consnt_JA;
Nandi.toPadma[Nandi.consnt_JHA_1] = Padma.consnt_JHA;
Nandi.toPadma[Nandi.consnt_JHA_2] = Padma.consnt_JHA;
Nandi.toPadma[Nandi.consnt_JHA_3] = Padma.consnt_JHA;
Nandi.toPadma[Nandi.consnt_NYA]   = Padma.consnt_NYA;

Nandi.toPadma[Nandi.consnt_TTA_1] = Padma.consnt_TTA;
Nandi.toPadma[Nandi.consnt_TTA_2] = Padma.consnt_TTA;
Nandi.toPadma[Nandi.consnt_TTHA]  = Padma.consnt_TTHA;
Nandi.toPadma[Nandi.consnt_DDA]   = Padma.consnt_DDA;
Nandi.toPadma[Nandi.consnt_DDHA]  = Padma.consnt_DDHA;
Nandi.toPadma[Nandi.consnt_NNA_1] = Padma.consnt_NNA;
Nandi.toPadma[Nandi.consnt_NNA_2] = Padma.consnt_NNA;

Nandi.toPadma[Nandi.consnt_TA]  = Padma.consnt_TA;
Nandi.toPadma[Nandi.consnt_THA] = Padma.consnt_THA;
Nandi.toPadma[Nandi.consnt_DA]  = Padma.consnt_DA;
Nandi.toPadma[Nandi.consnt_DHA] = Padma.consnt_DHA;
Nandi.toPadma[Nandi.consnt_NA]  = Padma.consnt_NA;

Nandi.toPadma[Nandi.consnt_PA]   = Padma.consnt_PA;
Nandi.toPadma[Nandi.consnt_PHA]  = Padma.consnt_PHA;
Nandi.toPadma[Nandi.consnt_BA_1] = Padma.consnt_BA;
Nandi.toPadma[Nandi.consnt_BA_2] = Padma.consnt_BA;
Nandi.toPadma[Nandi.consnt_BHA]  = Padma.consnt_BHA;
Nandi.toPadma[Nandi.consnt_MA_1] = Padma.consnt_MA;
Nandi.toPadma[Nandi.consnt_MA_2] = Padma.consnt_MA;
Nandi.toPadma[Nandi.consnt_MA_3] = Padma.consnt_MA;

Nandi.toPadma[Nandi.consnt_YA_1] = Padma.consnt_YA;
Nandi.toPadma[Nandi.consnt_YA_2] = Padma.consnt_YA;
Nandi.toPadma[Nandi.consnt_YA_3] = Padma.consnt_YA;
Nandi.toPadma[Nandi.consnt_RA]   = Padma.consnt_RA;
Nandi.toPadma[Nandi.consnt_LA_1] = Padma.consnt_LA;
Nandi.toPadma[Nandi.consnt_LA_2] = Padma.consnt_LA;
Nandi.toPadma[Nandi.consnt_VA]   = Padma.consnt_VA;
Nandi.toPadma[Nandi.consnt_SHA]  = Padma.consnt_SHA;
Nandi.toPadma[Nandi.consnt_SSA]  = Padma.consnt_SSA;
Nandi.toPadma[Nandi.consnt_SA]   = Padma.consnt_SA;
Nandi.toPadma[Nandi.consnt_HA]   = Padma.consnt_HA;
Nandi.toPadma[Nandi.consnt_LLA]  = Padma.consnt_LLA;

//Gunintamulu
Nandi.toPadma[Nandi.vowelsn_AA]    = Padma.vowelsn_AA;
Nandi.toPadma[Nandi.vowelsn_I]     = Padma.vowelsn_I;
Nandi.toPadma[Nandi.vowelsn_U_1]   = Padma.vowelsn_U;
Nandi.toPadma[Nandi.vowelsn_U_2]   = Padma.vowelsn_U;
Nandi.toPadma[Nandi.vowelsn_U_3]   = Padma.vowelsn_U;
Nandi.toPadma[Nandi.vowelsn_UU_1]  = Padma.vowelsn_UU;
Nandi.toPadma[Nandi.vowelsn_UU_2]  = Padma.vowelsn_UU;
Nandi.toPadma[Nandi.vowelsn_R]     = Padma.vowelsn_R;
Nandi.toPadma[Nandi.vowelsn_RR]    = Padma.vowelsn_RR;
Nandi.toPadma[Nandi.vowelsn_E]     = Padma.vowelsn_E;
Nandi.toPadma[Nandi.vowelsn_O_1]   = Padma.vowelsn_O;
Nandi.toPadma[Nandi.vowelsn_O_2]   = Padma.vowelsn_O;
Nandi.toPadma[Nandi.vowelsn_AU]    = Padma.vowelsn_AU;
Nandi.toPadma[Nandi.vowelsn_IILEN] = Padma.vowelsn_IILEN;
Nandi.toPadma[Nandi.vowelsn_AILEN] = Padma.vowelsn_AILEN;

//Special Combinations
Nandi.toPadma[Nandi.combo_KI]      = Padma.consnt_KA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_KHI]     = Padma.consnt_KHA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_GI]      = Padma.consnt_GA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_GHI]     = Padma.consnt_GHA + Padma.vowelsn_I;

Nandi.toPadma[Nandi.combo_CI]      = Padma.consnt_CA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_CHI]     = Padma.consnt_CHA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_JI]      = Padma.consnt_JA + Padma.vowelsn_I;

Nandi.toPadma[Nandi.combo_TTI]     = Padma.consnt_TTA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_TTHI]    = Padma.consnt_TTHA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_DDI]     = Padma.consnt_DDA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_DDHI]    = Padma.consnt_DDHA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_NNI]     = Padma.consnt_NNA + Padma.vowelsn_I;

Nandi.toPadma[Nandi.combo_TI]      = Padma.consnt_TA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_THI]     = Padma.consnt_THA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_DI]      = Padma.consnt_DA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_DHI]     = Padma.consnt_DHA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_NI]      = Padma.consnt_NA + Padma.vowelsn_I;

Nandi.toPadma[Nandi.combo_PI]      = Padma.consnt_PA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_PHI]     = Padma.consnt_PHA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_BI]      = Padma.consnt_BA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_BHI]     = Padma.consnt_BHA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_MI_1]    = Padma.consnt_MA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_MI_2]    = Padma.consnt_MA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_MI_3]    = Padma.consnt_MA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_ME]      = Padma.consnt_MA + Padma.vowelsn_E;
Nandi.toPadma[Nandi.combo_MO]      = Padma.consnt_MA + Padma.vowelsn_O;

Nandi.toPadma[Nandi.combo_YI]      = Padma.consnt_YA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_YE]      = Padma.consnt_YA + Padma.vowelsn_E;
Nandi.toPadma[Nandi.combo_YO]      = Padma.consnt_YA + Padma.vowelsn_O;
Nandi.toPadma[Nandi.combo_RI]      = Padma.consnt_RA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_LI]      = Padma.consnt_LA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_VI]      = Padma.consnt_VA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_SHI]     = Padma.consnt_SHA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_SSI]     = Padma.consnt_SSA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_SI]      = Padma.consnt_SA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_HI]      = Padma.consnt_HA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_LLI]     = Padma.consnt_LLA + Padma.vowelsn_I;
Nandi.toPadma[Nandi.combo_SHRII]   = Padma.consnt_SHA + Padma.vattu_RA + Padma.vowelsn_II;

//Vattulu
Nandi.toPadma[Nandi.vattu_KA]      = Padma.vattu_KA;
Nandi.toPadma[Nandi.vattu_KR]      = Padma.vattu_KA + Padma.vowelsn_R;
Nandi.toPadma[Nandi.vattu_KHA]     = Padma.vattu_KHA;
Nandi.toPadma[Nandi.vattu_GA]      = Padma.vattu_GA;
Nandi.toPadma[Nandi.vattu_GHA]     = Padma.vattu_GHA;
Nandi.toPadma[Nandi.vattu_NGA]     = Padma.vattu_NGA;

Nandi.toPadma[Nandi.vattu_CA]      = Padma.vattu_CA;
Nandi.toPadma[Nandi.vattu_CHA]     = Padma.vattu_CHA;
Nandi.toPadma[Nandi.vattu_JA]      = Padma.vattu_JA;
Nandi.toPadma[Nandi.vattu_JHA_1]   = Padma.vattu_JHA;
Nandi.toPadma[Nandi.vattu_JHA_2]   = Padma.vattu_JHA;
Nandi.toPadma[Nandi.vattu_NYA]     = Padma.vattu_NYA;

Nandi.toPadma[Nandi.vattu_TTA]     = Padma.vattu_TTA;
Nandi.toPadma[Nandi.vattu_TTHA]    = Padma.vattu_TTHA;
Nandi.toPadma[Nandi.vattu_DDA]     = Padma.vattu_DDA;
Nandi.toPadma[Nandi.vattu_DDHA]    = Padma.vattu_DDHA;
Nandi.toPadma[Nandi.vattu_NNA]     = Padma.vattu_NNA;

Nandi.toPadma[Nandi.vattu_TA]      = Padma.vattu_TA;
Nandi.toPadma[Nandi.vattu_TU]      = Padma.vattu_TA + Padma.vowelsn_U;
Nandi.toPadma[Nandi.vattu_TAI]     = Padma.vattu_TA + Padma.vowelsn_AI;
Nandi.toPadma[Nandi.vattu_THA]     = Padma.vattu_THA;
Nandi.toPadma[Nandi.vattu_DA]      = Padma.vattu_DA;
Nandi.toPadma[Nandi.vattu_DHA]     = Padma.vattu_DHA;
Nandi.toPadma[Nandi.vattu_NA]      = Padma.vattu_NA;

Nandi.toPadma[Nandi.vattu_PA]      = Padma.vattu_PA;
Nandi.toPadma[Nandi.vattu_PHA]     = Padma.vattu_PHA;
Nandi.toPadma[Nandi.vattu_BA]      = Padma.vattu_BA;
Nandi.toPadma[Nandi.vattu_BHA]     = Padma.vattu_BHA;
Nandi.toPadma[Nandi.vattu_MA]      = Padma.vattu_MA;

Nandi.toPadma[Nandi.vattu_YA]      = Padma.vattu_YA;
Nandi.toPadma[Nandi.vattu_RA_1]    = Padma.vattu_RA;
Nandi.toPadma[Nandi.vattu_RA_2]    = Padma.vattu_RA;
Nandi.toPadma[Nandi.vattu_RA_3]    = Padma.vattu_RA;
Nandi.toPadma[Nandi.vattu_RA_4]    = Padma.vattu_RA;
Nandi.toPadma[Nandi.vattu_RA_R]    = Padma.vattu_RA + Padma.vowelsn_R;
Nandi.toPadma[Nandi.vattu_LA]      = Padma.vattu_LA;
Nandi.toPadma[Nandi.vattu_VA]      = Padma.vattu_VA;
Nandi.toPadma[Nandi.vattu_SHA]     = Padma.vattu_SHA;
Nandi.toPadma[Nandi.vattu_SSA]     = Padma.vattu_SSA;
Nandi.toPadma[Nandi.vattu_SA]      = Padma.vattu_SA;
Nandi.toPadma[Nandi.vattu_HA]      = Padma.vattu_HA;
Nandi.toPadma[Nandi.vattu_LLA]     = Padma.vattu_LLA;

//Half forms
Nandi.toPadma[Nandi.halffm_RA]     = Padma.halffm_RA;

//Digits
Nandi.toPadma[Nandi.digit_ZERO]    = Padma.digit_ZERO;
Nandi.toPadma[Nandi.digit_ONE]     = Padma.digit_ONE;
Nandi.toPadma[Nandi.digit_TWO]     = Padma.digit_TWO;
Nandi.toPadma[Nandi.digit_THREE]   = Padma.digit_THREE;
Nandi.toPadma[Nandi.digit_FOUR]    = Padma.digit_FOUR;
Nandi.toPadma[Nandi.digit_FIVE]    = Padma.digit_FIVE;
Nandi.toPadma[Nandi.digit_SIX]     = Padma.digit_SIX;
Nandi.toPadma[Nandi.digit_SEVEN]   = Padma.digit_SEVEN;
Nandi.toPadma[Nandi.digit_EIGHT]   = Padma.digit_EIGHT;
Nandi.toPadma[Nandi.digit_NINE]    = Padma.digit_NINE;

Nandi.toPadma[Nandi.LQTSINGLE]  = "\u2018";
Nandi.toPadma[Nandi.RQTSINGLE]  = "\u2019";
Nandi.toPadma[Nandi.misc_DANDA] = Padma.danda;

Nandi.redundantList = new Object();
Nandi.redundantList[Nandi.misc_TICK_1]    = true;
Nandi.redundantList[Nandi.misc_UNKNOWN_1] = true;
Nandi.redundantList[Nandi.misc_UNKNOWN_2] = true;
Nandi.redundantList[Nandi.misc_UNKNOWN_3] = true;
Nandi.redundantList[Nandi.misc_UNKNOWN_4] = true;
Nandi.redundantList[Nandi.misc_UNKNOWN_5] = true;

Nandi.overloadList = new Object();
Nandi.overloadList[Nandi.consnt_RA] = true;
Nandi.overloadList[Nandi.consnt_VA] = true;
Nandi.overloadList[Nandi.vowelsn_E] = true;
Nandi.overloadList[Nandi.combo_VI]  = true;
Nandi.overloadList["\u0046"]        = true;
Nandi.overloadList["\u00BE"]        = true;
Nandi.overloadList["\u00BE\u00E6"]  = true;
Nandi.overloadList["\u00BF"]        = true;
Nandi.overloadList["\u00C1\u0068"]  = true;
Nandi.overloadList["\u00C8\u00E6"]  = true;

Nandi.suffixList = new Object();
Nandi.suffixList[Nandi.halffm_RA]     = true;
