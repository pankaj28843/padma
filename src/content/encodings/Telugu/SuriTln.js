// $Id: SuriTln.js,v 1.7 2006/03/24 16:43:36 vnagarjuna Exp $ -->

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

function SuriTln()
{
}

//The interface every dynamic font encoding should implement
SuriTln.maxLookupLen = 4;
SuriTln.fontFace     = "SuriTln";
SuriTln.displayName  = SuriTln.fontFace;
SuriTln.script       = Padma.script_TELUGU;

SuriTln.lookup = function (str) 
{
    return SuriTln.toPadma[str];
}

SuriTln.isPrefixSymbol = function (str)
{
    return SuriTln.prefixList[str] != null;
}

SuriTln.isOverloaded = function (str)
{
    return SuriTln.overloadList[str] != null;
}

SuriTln.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if (sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_U)
        return Padma.vowelsn_O;
    if (sign1 == Padma.vowelsn_I && sign2 == Padma.vowelsn_IILEN)
        return Padma.vowelsn_II;
    if (sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_AILEN)
        return Padma.vowelsn_AI;
    if (sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_AA)
        return Padma.vowelsn_OO;
    return sign1 + sign2;    
}

SuriTln.isRedundant = function (str)
{
    return SuriTln.redundantList[str] != null;
}

//Implementation details start here

//0x 7C, A6

//Specials
SuriTln.candrabindu    = "\u004A";
SuriTln.visarga        = "\u004C";
SuriTln.virama_1       = "\u00FE";
SuriTln.virama_2       = "\u00FF";
SuriTln.anusvara       = "\u004B";
SuriTln.avagraha       = "\u004D";

//Vowels
SuriTln.vowel_A        = "\u00C3";
SuriTln.vowel_AA       = "\u00C4";
SuriTln.vowel_I        = "\u00C5";
SuriTln.vowel_II       = "\u00C6";
SuriTln.vowel_U        = "\u00C7";
SuriTln.vowel_UU       = "\u00C8";
SuriTln.vowel_R        = "\u0065\u00DD\u00E2";
SuriTln.vowel_RR       = "\u0065\u00DD\u00E4";
SuriTln.vowel_L        = "\u00C9";
SuriTln.vowel_LL       = "\u00C9\u00D0";
SuriTln.vowel_E        = "\u00CA";
SuriTln.vowel_EE       = "\u00CB\u00CA";
SuriTln.vowel_AI       = "\u00CC";
SuriTln.vowel_O        = "\u00CD";
SuriTln.vowel_OO       = "\u00CB\u00CD";
SuriTln.vowel_AU       = "\u00CD\u00FC";

//Consonants
SuriTln.consnt_KA      = "\u004E";
SuriTln.consnt_KHA_1   = "\u004F";
SuriTln.consnt_KHA_2   = "\u0050";
SuriTln.consnt_GA      = "\u0052";
SuriTln.consnt_GHA_1   = "\u2022\u00DD";
SuriTln.consnt_GHA_2   = "\u2022\u00E1";
SuriTln.consnt_GHA_3   = "\u2022\u00E2";
SuriTln.consnt_NGA     = "\u00CD\u0053";

SuriTln.consnt_CA      = "\u0054";
SuriTln.consnt_CHA     = "\u0027";
SuriTln.consnt_JA      = "\u00CD\u00DE";
SuriTln.consnt_JHA_1   = "\u0068\u0058\u00E1";
SuriTln.consnt_JHA_2   = "\u0068\u0058\u00E2";
SuriTln.consnt_NYA     = "\u00C5\u0053";

SuriTln.consnt_TTA_1   = "\u0059";
SuriTln.consnt_TTA_2   = "\u005A";
SuriTln.consnt_TTHA    = "\u005B";
SuriTln.consnt_DDA     = "\u005C";
SuriTln.consnt_DDHA    = "\u2019";
SuriTln.consnt_NNA     = "\u005D";

SuriTln.consnt_TA      = "\u005E";
SuriTln.consnt_THA     = "\u00AF";
SuriTln.consnt_DA      = "\u0060";
SuriTln.consnt_DHA     = "\u201C";
SuriTln.consnt_NA      = "\u0061";

SuriTln.consnt_PA_1    = "\u0063";
SuriTln.consnt_PA_2    = "\u0064";
SuriTln.consnt_PHA_1   = "\u2022";
SuriTln.consnt_PHA_2   = "\u2014";
SuriTln.consnt_BA_1    = "\u0065";
SuriTln.consnt_BA_2    = "\u0066";
SuriTln.consnt_BHA     = "\u007E";
SuriTln.consnt_MA_1    = "\u006F\u00E1";
SuriTln.consnt_MA_2    = "\u006F\u00E2";

SuriTln.consnt_YA_1    = "\u0068\u0178\u00E1";
SuriTln.consnt_YA_2    = "\u0068\u0178\u00E2";
SuriTln.consnt_RA      = "\u0068";
SuriTln.consnt_LA_1    = "\u006A";
SuriTln.consnt_LA_2    = "\u006B";
SuriTln.consnt_VA      = "\u006F";
SuriTln.consnt_SHA     = "\u0071";
SuriTln.consnt_SSA_1   = "\u0073";
SuriTln.consnt_SSA_2   = "\u0074";
SuriTln.consnt_SA_1    = "\u0075";
SuriTln.consnt_SA_2    = "\u0076";
SuriTln.consnt_HA      = "\u0077";
SuriTln.consnt_LLA     = "\u006D";
SuriTln.consnt_RRA     = "\u0069";

SuriTln.consnt_TCH     = "\u0056\u0054";
SuriTln.consnt_TJ      = "\u0056\u00CD\u00DE";

//Gunintamulu
SuriTln.vowelsn_AA_1   = "\u00D0";
SuriTln.vowelsn_AA_2   = "\u00D1";
SuriTln.vowelsn_AA_3   = "\u00D2";
SuriTln.vowelsn_I_1    = "\u00D3";
SuriTln.vowelsn_I_2    = "\u00D4";
SuriTln.vowelsn_I_3    = "\u00D5";
SuriTln.vowelsn_I_4    = "\u00D6";
SuriTln.vowelsn_II_1   = "\u00D7";
SuriTln.vowelsn_II_2   = "\u00D8";
SuriTln.vowelsn_II_3   = "\u00D9";
SuriTln.vowelsn_II_4   = "\u00DA";
SuriTln.vowelsn_U_1    = "\u00DC";
SuriTln.vowelsn_U_2    = "\u00DD";
SuriTln.vowelsn_U_3    = "\u00DE";
SuriTln.vowelsn_U_4    = "\u00DF";
SuriTln.vowelsn_U_5    = "\u00E0";
SuriTln.vowelsn_U_6    = "\u00E1";
SuriTln.vowelsn_U_7    = "\u00E2";
SuriTln.vowelsn_UU_1   = "\u00E3";
SuriTln.vowelsn_UU_2   = "\u00E4";
SuriTln.vowelsn_UU_3   = "\u00E5";
SuriTln.vowelsn_UU_4   = "\u00E6";
SuriTln.vowelsn_UU_5   = "\u00E7";
SuriTln.vowelsn_R      = "\u00E8";
SuriTln.vowelsn_RR     = "\u00E9";
SuriTln.vowelsn_L      = "\u00EA";
SuriTln.vowelsn_E_1    = "\u00EB";
SuriTln.vowelsn_E_2    = "\u00EC";
SuriTln.vowelsn_E_3    = "\u00ED";
SuriTln.vowelsn_EE_1   = "\u00CE";
SuriTln.vowelsn_EE_2   = "\u00EE";
SuriTln.vowelsn_EE_3   = "\u00EF";
SuriTln.vowelsn_O_1    = "\u00F5";
SuriTln.vowelsn_O_2    = "\u00F6";
SuriTln.vowelsn_O_3    = "\u00F7";
SuriTln.vowelsn_OO_1   = "\u00F8";
SuriTln.vowelsn_OO_2   = "\u00F9";
SuriTln.vowelsn_OO_3   = "\u00FA";
SuriTln.vowelsn_AU_1   = "\u00FB";
SuriTln.vowelsn_AU_2   = "\u00FC";
SuriTln.vowelsn_AU_3   = "\u00FD";

SuriTln.vowelsn_IILEN  = "\u00DB";
SuriTln.vowelsn_AILEN_1 = "\u00F0";
SuriTln.vowelsn_AILEN_2 = "\u00F1";
SuriTln.vowelsn_AILEN_3 = "\u00F2";
SuriTln.vowelsn_AILEN_4 = "\u00F3";
SuriTln.vowelsn_AILEN_5 = "\u00F4";

//Special Combinations
SuriTln.combo_KSHA     = "\u0079";
SuriTln.combo_KHI      = "\u0051";

SuriTln.combo_CI       = "\u0055";
SuriTln.combo_CHI      = "\u002A";
SuriTln.combo_JI       = "\u00CD\u00D6";
SuriTln.combo_JII      = "\u00CD\u00DA";

SuriTln.combo_TI       = "\u005F";
SuriTln.combo_NI       = "\u0062";

SuriTln.combo_BI       = "\u0067";
SuriTln.combo_BHI      = "\u00B7";
SuriTln.combo_MAA      = "\u006F\u00E4";
SuriTln.combo_MI       = "\u0070\u00E2";
SuriTln.combo_MII      = "\u0070\u00DB\u00E2";
SuriTln.combo_MU       = "\u006F\u00DD\u00E2";
SuriTln.combo_MUU      = "\u006F\u00DD\u00E4";
SuriTln.combo_MAILEN_1 = "\u006F\u00F0\u00E2";
SuriTln.combo_MAILEN_2 = "\u006F\u00F3\u00E2";
SuriTln.combo_MPOLLU   = "\u006F\u00FE\u00E2";

SuriTln.combo_YAA      = "\u0068\u0178\u00E4";
SuriTln.combo_YI       = "\u0068\u00DD\u00E2";
SuriTln.combo_YII      = "\u0068\u00DD\u00E4";
SuriTln.combo_YU       = "\u0068\u0178\u00DD\u00E2";
SuriTln.combo_YUU      = "\u0068\u0178\u00DD\u00E4";
SuriTln.combo_YE       = "\u0068\u007A\u00E2";
SuriTln.combo_YEE      = "\u0068\u00EF\u00E1\u00E2";
SuriTln.combo_YAI      = "\u0068\u007A\u00F2\u00E2";
SuriTln.combo_YO       = "\u0068\u007A\u00DD\u00E2";
SuriTln.combo_YOO      = "\u0068\u007A\u00E4";
SuriTln.combo_YPOLLU   = "\u0068\u00E1\u00FE\u00E2";
SuriTln.combo_LI       = "\u006C";
SuriTln.combo_VI       = "\u0070";
SuriTln.combo_SHI      = "\u0072";
SuriTln.combo_LLI      = "\u006E";
SuriTln.combo_HAA      = "\u0078";

//Vattulu
SuriTln.vattu_KA       = "\u0192";
SuriTln.vattu_KSHA     = "\u007D";
SuriTln.vattu_KHA      = "\u201E";
SuriTln.vattu_GA_1     = "\u2026";
SuriTln.vattu_GA_2     = "\u00BB";
SuriTln.vattu_GHA      = "\u2020";
SuriTln.vattu_NGA      = "\u2021";

SuriTln.vattu_CA       = "\u02C6";
SuriTln.vattu_CHA      = "\u02C6\u2030";
SuriTln.vattu_JA_1     = "\u0160";
SuriTln.vattu_JA_2     = "\u00BC";
SuriTln.vattu_JHA      = "\u2039";
SuriTln.vattu_NYA      = "\u0152";

SuriTln.vattu_TTA_1    = "\u02DC";
SuriTln.vattu_TTA_2    = "\u00BD";
SuriTln.vattu_TTHA     = "\u2122";
SuriTln.vattu_DDA      = "\u0161";
SuriTln.vattu_DDHA     = "\u203A";
SuriTln.vattu_NNA_1    = "\u0153";
SuriTln.vattu_NNA_2    = "\u00BE";

SuriTln.vattu_TA_1     = "\u00A1";
SuriTln.vattu_TA_2     = "\u00BF";
SuriTln.vattu_THA_1    = "\u00A2";
SuriTln.vattu_THA_2    = "\u00C0";
SuriTln.vattu_DA       = "\u00A3";
SuriTln.vattu_DHA      = "\u00A4";
SuriTln.vattu_NA       = "\u00A5";

SuriTln.vattu_PA       = "\u00A7";
SuriTln.vattu_PHA      = "\u00A7\u2030";
SuriTln.vattu_BA       = "\u00A8";
SuriTln.vattu_BHA      = "\u00A8\u2030";
SuriTln.vattu_MA       = "\u00A9";

SuriTln.vattu_YA       = "\u00AA";
SuriTln.vattu_RA_1     = "\u00AB";
SuriTln.vattu_RA_2     = "\u00AC";
SuriTln.vattu_RA_3     = "\u00AE";
SuriTln.vattu_RA_4     = "\u00B0";
SuriTln.vattu_RA_5     = "\u00C1";
SuriTln.vattu_LA_1     = "\u00B2";
SuriTln.vattu_LA_2     = "\u00C2";
SuriTln.vattu_VA       = "\u00B5";
SuriTln.vattu_SHA      = "\u00B6";
SuriTln.vattu_SSA      = "\u00B8";
SuriTln.vattu_SA       = "\u00B9";
SuriTln.vattu_HA       = "\u00BA";
SuriTln.vattu_LLA      = "\u00B3";
SuriTln.vattu_RRA      = "\u00B1";

SuriTln.vattu_TCH      = "\u0056\u02C6";

SuriTln.LQTSINGLE      = "\u0025";
SuriTln.RQTSINGLE      = "\u0026";
SuriTln.LQTDOUBLE      = "\u0022";
SuriTln.RQTDOUBLE      = "\u0023";
SuriTln.misc_DANDA     = "\u003C";
SuriTln.misc_DDANDA    = "\u003E";
SuriTln.ASTERISK       = "\u0057";

//Matches ASCII
SuriTln.EXCLAM         = "\u0021";
SuriTln.PARENLEFT      = "\u0028";
SuriTln.PARENRIGT      = "\u0029";
SuriTln.PLUS           = "\u002B";
SuriTln.COMMA          = "\u002C";
SuriTln.HYPHEN         = "\u002D";
SuriTln.PERIOD         = "\u002E";
SuriTln.SLASH          = "\u002F";
SuriTln.ZERO           = "\u0030";
SuriTln.ONE            = "\u0031";
SuriTln.TWO            = "\u0032";
SuriTln.THREE          = "\u0033";
SuriTln.FOUR           = "\u0034";
SuriTln.FIVE           = "\u0035";
SuriTln.SIX            = "\u0036";
SuriTln.SEVEN          = "\u0037";
SuriTln.EIGHT          = "\u0038";
SuriTln.NINE           = "\u0039";
SuriTln.COLON          = "\u003A";
SuriTln.SEMICOLON      = "\u003B";
SuriTln.EQUALS         = "\u003D";
SuriTln.QUESTION       = "\u003F";

//Telugu Digits
SuriTln.digit_ZERO     = "\u0040";
SuriTln.digit_ONE      = "\u0041";
SuriTln.digit_TWO      = "\u0042";
SuriTln.digit_THREE    = "\u0043";
SuriTln.digit_FOUR     = "\u0044";
SuriTln.digit_FIVE     = "\u0045";
SuriTln.digit_SIX      = "\u0046";
SuriTln.digit_SEVEN    = "\u0047";
SuriTln.digit_EIGHT    = "\u0048";
SuriTln.digit_NINE     = "\u0049";

//Kommu
SuriTln.misc_TICK_1    = "\u2018";
SuriTln.misc_TICK_2    = "\u00CF";
SuriTln.misc_UNKNOWN_1 = "\u201A";

SuriTln.toPadma = new Object();

SuriTln.toPadma[SuriTln.candrabindu] = Padma.candrabindu;
SuriTln.toPadma[SuriTln.visarga]  = Padma.visarga;
SuriTln.toPadma[SuriTln.virama_1] = Padma.syllbreak;
SuriTln.toPadma[SuriTln.virama_2] = Padma.syllbreak;
SuriTln.toPadma[SuriTln.anusvara] = Padma.anusvara;
SuriTln.toPadma[SuriTln.avagraha] = Padma.avagraha;

SuriTln.toPadma[SuriTln.vowel_A]  = Padma.vowel_A;
SuriTln.toPadma[SuriTln.vowel_AA] = Padma.vowel_AA;
SuriTln.toPadma[SuriTln.vowel_I]  = Padma.vowel_I;
SuriTln.toPadma[SuriTln.vowel_II] = Padma.vowel_II;
SuriTln.toPadma[SuriTln.vowel_U]  = Padma.vowel_U;
SuriTln.toPadma[SuriTln.vowel_UU] = Padma.vowel_UU;
SuriTln.toPadma[SuriTln.vowel_R]  = Padma.vowel_R;
SuriTln.toPadma[SuriTln.vowel_RR] = Padma.vowel_RR;
SuriTln.toPadma[SuriTln.vowel_L]  = Padma.vowel_L;
SuriTln.toPadma[SuriTln.vowel_LL] = Padma.vowel_LL;
SuriTln.toPadma[SuriTln.vowel_E]  = Padma.vowel_E;
SuriTln.toPadma[SuriTln.vowel_EE] = Padma.vowel_EE;
SuriTln.toPadma[SuriTln.vowel_AI] = Padma.vowel_AI;
SuriTln.toPadma[SuriTln.vowel_O]  = Padma.vowel_O;
SuriTln.toPadma[SuriTln.vowel_OO] = Padma.vowel_OO;
SuriTln.toPadma[SuriTln.vowel_AU] = Padma.vowel_AU;

SuriTln.toPadma[SuriTln.consnt_KA]    = Padma.consnt_KA;
SuriTln.toPadma[SuriTln.consnt_KHA_1] = Padma.consnt_KHA;
SuriTln.toPadma[SuriTln.consnt_KHA_2] = Padma.consnt_KHA;
SuriTln.toPadma[SuriTln.consnt_GA]    = Padma.consnt_GA;
SuriTln.toPadma[SuriTln.consnt_GHA_1] = Padma.consnt_GHA;
SuriTln.toPadma[SuriTln.consnt_GHA_2] = Padma.consnt_GHA;
SuriTln.toPadma[SuriTln.consnt_GHA_3] = Padma.consnt_GHA;
SuriTln.toPadma[SuriTln.consnt_NGA]   = Padma.consnt_NGA;

SuriTln.toPadma[SuriTln.consnt_CA]  = Padma.consnt_CA;
SuriTln.toPadma[SuriTln.consnt_CHA] = Padma.consnt_CHA;
SuriTln.toPadma[SuriTln.consnt_JA]  = Padma.consnt_JA;
SuriTln.toPadma[SuriTln.consnt_JHA_1] = Padma.consnt_JHA;
SuriTln.toPadma[SuriTln.consnt_JHA_2] = Padma.consnt_JHA;
SuriTln.toPadma[SuriTln.consnt_NYA] = Padma.consnt_NYA;

SuriTln.toPadma[SuriTln.consnt_TTA_1]  = Padma.consnt_TTA;
SuriTln.toPadma[SuriTln.consnt_TTA_2]  = Padma.consnt_TTA;
SuriTln.toPadma[SuriTln.consnt_TTHA] = Padma.consnt_TTHA;
SuriTln.toPadma[SuriTln.consnt_DDA]  = Padma.consnt_DDA;
SuriTln.toPadma[SuriTln.consnt_DDHA] = Padma.consnt_DDHA;
SuriTln.toPadma[SuriTln.consnt_NNA]  = Padma.consnt_NNA;

SuriTln.toPadma[SuriTln.consnt_TA]  = Padma.consnt_TA;
SuriTln.toPadma[SuriTln.consnt_THA] = Padma.consnt_THA;
SuriTln.toPadma[SuriTln.consnt_DA]  = Padma.consnt_DA;
SuriTln.toPadma[SuriTln.consnt_DHA] = Padma.consnt_DHA;
SuriTln.toPadma[SuriTln.consnt_NA]  = Padma.consnt_NA;

SuriTln.toPadma[SuriTln.consnt_PA_1]  = Padma.consnt_PA;
SuriTln.toPadma[SuriTln.consnt_PA_2]  = Padma.consnt_PA;
SuriTln.toPadma[SuriTln.consnt_PHA_1] = Padma.consnt_PHA;
SuriTln.toPadma[SuriTln.consnt_PHA_2] = Padma.consnt_PHA;
SuriTln.toPadma[SuriTln.consnt_BA_1]  = Padma.consnt_BA;
SuriTln.toPadma[SuriTln.consnt_BA_2]  = Padma.consnt_BA;
SuriTln.toPadma[SuriTln.consnt_BHA] = Padma.consnt_BHA;
SuriTln.toPadma[SuriTln.consnt_MA_1]  = Padma.consnt_MA;
SuriTln.toPadma[SuriTln.consnt_MA_2]  = Padma.consnt_MA;

SuriTln.toPadma[SuriTln.consnt_YA_1]  = Padma.consnt_YA;
SuriTln.toPadma[SuriTln.consnt_YA_2]  = Padma.consnt_YA;
SuriTln.toPadma[SuriTln.consnt_RA]  = Padma.consnt_RA;
SuriTln.toPadma[SuriTln.consnt_LA_1]  = Padma.consnt_LA;
SuriTln.toPadma[SuriTln.consnt_LA_2]  = Padma.consnt_LA;
SuriTln.toPadma[SuriTln.consnt_VA]  = Padma.consnt_VA;
SuriTln.toPadma[SuriTln.consnt_SHA]  = Padma.consnt_SHA;
SuriTln.toPadma[SuriTln.consnt_SSA_1] = Padma.consnt_SSA;
SuriTln.toPadma[SuriTln.consnt_SSA_2] = Padma.consnt_SSA;
SuriTln.toPadma[SuriTln.consnt_SA_1] = Padma.consnt_SA;
SuriTln.toPadma[SuriTln.consnt_SA_2] = Padma.consnt_SA;
SuriTln.toPadma[SuriTln.consnt_HA]  = Padma.consnt_HA;
SuriTln.toPadma[SuriTln.consnt_LLA] = Padma.consnt_LLA;
SuriTln.toPadma[SuriTln.consnt_RRA] = Padma.consnt_RRA;

SuriTln.toPadma[SuriTln.consnt_TCH] = Padma.consnt_TCH;
SuriTln.toPadma[SuriTln.consnt_TJ]  = Padma.consnt_TJ;

//Gunintamulu
SuriTln.toPadma[SuriTln.vowelsn_AA_1]  = Padma.vowelsn_AA;
SuriTln.toPadma[SuriTln.vowelsn_AA_2]  = Padma.vowelsn_AA;
SuriTln.toPadma[SuriTln.vowelsn_AA_3]  = Padma.vowelsn_AA;
SuriTln.toPadma[SuriTln.vowelsn_I_1]   = Padma.vowelsn_I;
SuriTln.toPadma[SuriTln.vowelsn_I_2]   = Padma.vowelsn_I;
SuriTln.toPadma[SuriTln.vowelsn_I_3]   = Padma.vowelsn_I;
SuriTln.toPadma[SuriTln.vowelsn_I_4]   = Padma.vowelsn_I;
SuriTln.toPadma[SuriTln.vowelsn_II_1]  = Padma.vowelsn_II;
SuriTln.toPadma[SuriTln.vowelsn_II_2]  = Padma.vowelsn_II;
SuriTln.toPadma[SuriTln.vowelsn_II_3]  = Padma.vowelsn_II;
SuriTln.toPadma[SuriTln.vowelsn_II_4]  = Padma.vowelsn_II;
SuriTln.toPadma[SuriTln.vowelsn_U_1]   = Padma.vowelsn_U;
SuriTln.toPadma[SuriTln.vowelsn_U_2]   = Padma.vowelsn_U;
SuriTln.toPadma[SuriTln.vowelsn_U_3]   = Padma.vowelsn_U;
SuriTln.toPadma[SuriTln.vowelsn_U_4]   = Padma.vowelsn_U;
SuriTln.toPadma[SuriTln.vowelsn_U_5]   = Padma.vowelsn_U;
SuriTln.toPadma[SuriTln.vowelsn_U_6]   = Padma.vowelsn_U;
SuriTln.toPadma[SuriTln.vowelsn_U_7]   = Padma.vowelsn_U;
SuriTln.toPadma[SuriTln.vowelsn_UU_1]  = Padma.vowelsn_UU;
SuriTln.toPadma[SuriTln.vowelsn_UU_2]  = Padma.vowelsn_UU;
SuriTln.toPadma[SuriTln.vowelsn_UU_3]  = Padma.vowelsn_UU;
SuriTln.toPadma[SuriTln.vowelsn_UU_4]  = Padma.vowelsn_UU;
SuriTln.toPadma[SuriTln.vowelsn_UU_5]  = Padma.vowelsn_UU;
SuriTln.toPadma[SuriTln.vowelsn_R]     = Padma.vowelsn_R;
SuriTln.toPadma[SuriTln.vowelsn_RR]    = Padma.vowelsn_RR;
SuriTln.toPadma[SuriTln.vowelsn_L]     = Padma.vowelsn_L;
SuriTln.toPadma[SuriTln.vowelsn_E_1]   = Padma.vowelsn_E;
SuriTln.toPadma[SuriTln.vowelsn_E_2]   = Padma.vowelsn_E;
SuriTln.toPadma[SuriTln.vowelsn_E_3]   = Padma.vowelsn_E;
SuriTln.toPadma[SuriTln.vowelsn_EE_1]  = Padma.vowelsn_EE;
SuriTln.toPadma[SuriTln.vowelsn_EE_2]  = Padma.vowelsn_EE;
SuriTln.toPadma[SuriTln.vowelsn_EE_3]  = Padma.vowelsn_EE;
SuriTln.toPadma[SuriTln.vowelsn_O_1]   = Padma.vowelsn_O;
SuriTln.toPadma[SuriTln.vowelsn_O_2]   = Padma.vowelsn_O;
SuriTln.toPadma[SuriTln.vowelsn_O_3]   = Padma.vowelsn_O;
SuriTln.toPadma[SuriTln.vowelsn_OO_1]  = Padma.vowelsn_OO;
SuriTln.toPadma[SuriTln.vowelsn_OO_2]  = Padma.vowelsn_OO;
SuriTln.toPadma[SuriTln.vowelsn_OO_3]  = Padma.vowelsn_OO;
SuriTln.toPadma[SuriTln.vowelsn_AU_1]  = Padma.vowelsn_AU;
SuriTln.toPadma[SuriTln.vowelsn_AU_2]  = Padma.vowelsn_AU;
SuriTln.toPadma[SuriTln.vowelsn_AU_3]  = Padma.vowelsn_AU;
SuriTln.toPadma[SuriTln.vowelsn_IILEN] = Padma.vowelsn_IILEN;
SuriTln.toPadma[SuriTln.vowelsn_AILEN_1] = Padma.vowelsn_AILEN;
SuriTln.toPadma[SuriTln.vowelsn_AILEN_2] = Padma.vowelsn_AILEN;
SuriTln.toPadma[SuriTln.vowelsn_AILEN_3] = Padma.vowelsn_AILEN;
SuriTln.toPadma[SuriTln.vowelsn_AILEN_4] = Padma.vowelsn_AILEN;
SuriTln.toPadma[SuriTln.vowelsn_AILEN_5] = Padma.vowelsn_AILEN;

//Special Combinations
SuriTln.toPadma[SuriTln.combo_KSHA]    = Padma.consnt_KA + Padma.vattu_SSA;
SuriTln.toPadma[SuriTln.combo_KHI]     = Padma.consnt_KHA + Padma.vowelsn_I;

SuriTln.toPadma[SuriTln.combo_CI]      = Padma.consnt_CA + Padma.vowelsn_I;
SuriTln.toPadma[SuriTln.combo_CHI]     = Padma.consnt_CHA + Padma.vowelsn_I;
SuriTln.toPadma[SuriTln.combo_JI]      = Padma.consnt_JA + Padma.vowelsn_I;
SuriTln.toPadma[SuriTln.combo_JII]     = Padma.consnt_JA + Padma.vowelsn_II;

SuriTln.toPadma[SuriTln.combo_TI]      = Padma.consnt_TA + Padma.vowelsn_I;
SuriTln.toPadma[SuriTln.combo_NI]      = Padma.consnt_NA + Padma.vowelsn_I;

SuriTln.toPadma[SuriTln.combo_BI]      = Padma.consnt_BA + Padma.vowelsn_I;
SuriTln.toPadma[SuriTln.combo_BHI]     = Padma.consnt_BHA + Padma.vowelsn_I;
SuriTln.toPadma[SuriTln.combo_MAA]     = Padma.consnt_MA + Padma.vowelsn_AA;
SuriTln.toPadma[SuriTln.combo_MI]      = Padma.consnt_MA + Padma.vowelsn_I;
SuriTln.toPadma[SuriTln.combo_MII]     = Padma.consnt_MA + Padma.vowelsn_II;
SuriTln.toPadma[SuriTln.combo_MU]      = Padma.consnt_MA + Padma.vowelsn_U;
SuriTln.toPadma[SuriTln.combo_MUU]     = Padma.consnt_MA + Padma.vowelsn_UU;
SuriTln.toPadma[SuriTln.combo_MAILEN_1] = Padma.consnt_MA + Padma.vowelsn_AILEN;
SuriTln.toPadma[SuriTln.combo_MAILEN_2] = Padma.consnt_MA + Padma.vowelsn_AILEN;
SuriTln.toPadma[SuriTln.combo_MPOLLU]  = Padma.consnt_MA + Padma.syllbreak;

SuriTln.toPadma[SuriTln.combo_YAA]     = Padma.consnt_YA + Padma.vowelsn_AA;
SuriTln.toPadma[SuriTln.combo_YI]      = Padma.consnt_YA + Padma.vowelsn_I;
SuriTln.toPadma[SuriTln.combo_YII]     = Padma.consnt_YA + Padma.vowelsn_II;
SuriTln.toPadma[SuriTln.combo_YU]      = Padma.consnt_YA + Padma.vowelsn_U;
SuriTln.toPadma[SuriTln.combo_YUU]     = Padma.consnt_YA + Padma.vowelsn_UU;
SuriTln.toPadma[SuriTln.combo_YE]      = Padma.consnt_YA + Padma.vowelsn_E;
SuriTln.toPadma[SuriTln.combo_YEE]     = Padma.consnt_YA + Padma.vowelsn_EE;
SuriTln.toPadma[SuriTln.combo_YAI]     = Padma.consnt_YA + Padma.vowelsn_AI;
SuriTln.toPadma[SuriTln.combo_YO]      = Padma.consnt_YA + Padma.vowelsn_O;
SuriTln.toPadma[SuriTln.combo_YOO]     = Padma.consnt_YA + Padma.vowelsn_OO;
SuriTln.toPadma[SuriTln.combo_YPOLLU]  = Padma.consnt_YA + Padma.syllbreak;
SuriTln.toPadma[SuriTln.combo_LI]      = Padma.consnt_LA + Padma.vowelsn_I;
SuriTln.toPadma[SuriTln.combo_VI]      = Padma.consnt_VA + Padma.vowelsn_I;
SuriTln.toPadma[SuriTln.combo_SHI]     = Padma.consnt_SHA + Padma.vowelsn_I;
SuriTln.toPadma[SuriTln.combo_LLI]     = Padma.consnt_LLA + Padma.vowelsn_I;
SuriTln.toPadma[SuriTln.combo_HAA]     = Padma.consnt_HA + Padma.vowelsn_AA;

//Vattulu
SuriTln.toPadma[SuriTln.vattu_KA]      = Padma.vattu_KA;
SuriTln.toPadma[SuriTln.vattu_KSHA]    = Padma.vattu_KA + Padma.vattu_SSA;
SuriTln.toPadma[SuriTln.vattu_KHA]     = Padma.vattu_KHA;
SuriTln.toPadma[SuriTln.vattu_GA_1]    = Padma.vattu_GA;
SuriTln.toPadma[SuriTln.vattu_GA_2]    = Padma.vattu_GA;
SuriTln.toPadma[SuriTln.vattu_GHA]     = Padma.vattu_GHA;
SuriTln.toPadma[SuriTln.vattu_NGA]     = Padma.vattu_NGA;
SuriTln.toPadma[SuriTln.vattu_CA]      = Padma.vattu_CA;
SuriTln.toPadma[SuriTln.vattu_CHA]     = Padma.vattu_CHA;
SuriTln.toPadma[SuriTln.vattu_JA_1]    = Padma.vattu_JA;
SuriTln.toPadma[SuriTln.vattu_JA_2]    = Padma.vattu_JA;
SuriTln.toPadma[SuriTln.vattu_JHA]     = Padma.vattu_JHA;
SuriTln.toPadma[SuriTln.vattu_NYA]     = Padma.vattu_NYA;
SuriTln.toPadma[SuriTln.vattu_TTA_1]   = Padma.vattu_TTA;
SuriTln.toPadma[SuriTln.vattu_TTA_2]   = Padma.vattu_TTA;
SuriTln.toPadma[SuriTln.vattu_TTHA]    = Padma.vattu_TTHA;
SuriTln.toPadma[SuriTln.vattu_DDA]     = Padma.vattu_DDA;
SuriTln.toPadma[SuriTln.vattu_DDHA]    = Padma.vattu_DDHA;
SuriTln.toPadma[SuriTln.vattu_NNA_1]   = Padma.vattu_NNA;
SuriTln.toPadma[SuriTln.vattu_NNA_2]   = Padma.vattu_NNA;
SuriTln.toPadma[SuriTln.vattu_TA_1]    = Padma.vattu_TA;
SuriTln.toPadma[SuriTln.vattu_TA_2]    = Padma.vattu_TA;
SuriTln.toPadma[SuriTln.vattu_THA_1]   = Padma.vattu_THA;
SuriTln.toPadma[SuriTln.vattu_THA_2]   = Padma.vattu_THA;
SuriTln.toPadma[SuriTln.vattu_DA]      = Padma.vattu_DA;
SuriTln.toPadma[SuriTln.vattu_DHA]     = Padma.vattu_DHA;
SuriTln.toPadma[SuriTln.vattu_NA]      = Padma.vattu_NA;
SuriTln.toPadma[SuriTln.vattu_PA]      = Padma.vattu_PA;
SuriTln.toPadma[SuriTln.vattu_PHA]     = Padma.vattu_PHA;
SuriTln.toPadma[SuriTln.vattu_BA]      = Padma.vattu_BA;
SuriTln.toPadma[SuriTln.vattu_BHA]     = Padma.vattu_BHA;
SuriTln.toPadma[SuriTln.vattu_MA]      = Padma.vattu_MA;
SuriTln.toPadma[SuriTln.vattu_YA]      = Padma.vattu_YA;
SuriTln.toPadma[SuriTln.vattu_RA_1]    = Padma.vattu_RA;
SuriTln.toPadma[SuriTln.vattu_RA_2]    = Padma.vattu_RA;
SuriTln.toPadma[SuriTln.vattu_RA_3]    = Padma.vattu_RA;
SuriTln.toPadma[SuriTln.vattu_RA_4]    = Padma.vattu_RA;
SuriTln.toPadma[SuriTln.vattu_RA_5]    = Padma.vattu_RA;
SuriTln.toPadma[SuriTln.vattu_LA_1]    = Padma.vattu_LA;
SuriTln.toPadma[SuriTln.vattu_LA_2]    = Padma.vattu_LA;
SuriTln.toPadma[SuriTln.vattu_VA]      = Padma.vattu_VA;
SuriTln.toPadma[SuriTln.vattu_SHA]     = Padma.vattu_SHA;
SuriTln.toPadma[SuriTln.vattu_SSA]     = Padma.vattu_SSA;
SuriTln.toPadma[SuriTln.vattu_SA]      = Padma.vattu_SA;
SuriTln.toPadma[SuriTln.vattu_HA]      = Padma.vattu_HA;
SuriTln.toPadma[SuriTln.vattu_LLA]     = Padma.vattu_LLA;
SuriTln.toPadma[SuriTln.vattu_RRA]     = Padma.vattu_RRA;
SuriTln.toPadma[SuriTln.vattu_TCH]     = Padma.vattu_TCH;

SuriTln.toPadma[SuriTln.LQTSINGLE]   = "\u2018";
SuriTln.toPadma[SuriTln.RQTSINGLE]   = "\u2019";
SuriTln.toPadma[SuriTln.LQTDOUBLE]   = "\u201C";
SuriTln.toPadma[SuriTln.RQTDOUBLE]   = "\u201D";
SuriTln.toPadma[SuriTln.misc_DANDA]  = Padma.danda;
SuriTln.toPadma[SuriTln.misc_DDANDA] = Padma.ddanda;
SuriTln.toPadma[SuriTln.ASTERISK]    = "\u2731";

//Telugu Digits
SuriTln.toPadma[SuriTln.digit_ZERO]    = Padma.digit_ZERO;
SuriTln.toPadma[SuriTln.digit_ONE]     = Padma.digit_ONE;
SuriTln.toPadma[SuriTln.digit_TWO]     = Padma.digit_TWO;
SuriTln.toPadma[SuriTln.digit_THREE]   = Padma.digit_THREE;
SuriTln.toPadma[SuriTln.digit_FOUR]    = Padma.digit_FOUR;
SuriTln.toPadma[SuriTln.digit_FIVE]    = Padma.digit_FIVE;
SuriTln.toPadma[SuriTln.digit_SIX]     = Padma.digit_SIX;
SuriTln.toPadma[SuriTln.digit_SEVEN]   = Padma.digit_SEVEN;
SuriTln.toPadma[SuriTln.digit_EIGHT]   = Padma.digit_EIGHT;
SuriTln.toPadma[SuriTln.digit_NINE]    = Padma.digit_NINE;

SuriTln.redundantList = new Object();
SuriTln.redundantList[SuriTln.misc_TICK_1]    = true;
SuriTln.redundantList[SuriTln.misc_TICK_2]    = true;
SuriTln.redundantList[SuriTln.misc_UNKNOWN_1] = true;

SuriTln.prefixList = new Object();
SuriTln.prefixList[SuriTln.virama_2]        = true;
SuriTln.prefixList[SuriTln.vowelsn_I_2]     = true;
SuriTln.prefixList[SuriTln.vowelsn_I_3]     = true;
SuriTln.prefixList[SuriTln.vowelsn_II_2]    = true;
SuriTln.prefixList[SuriTln.vowelsn_II_3]    = true;
SuriTln.prefixList[SuriTln.vowelsn_L]       = true;
SuriTln.prefixList[SuriTln.vowelsn_E_1]     = true;
SuriTln.prefixList[SuriTln.vowelsn_E_3]     = true;
SuriTln.prefixList[SuriTln.vowelsn_EE_1]    = true;
SuriTln.prefixList[SuriTln.vowelsn_EE_3]    = true;
SuriTln.prefixList[SuriTln.vattu_KSHA]      = true;
SuriTln.prefixList[SuriTln.vattu_KHA]       = true;
SuriTln.prefixList[SuriTln.vattu_GA_1]      = true;
SuriTln.prefixList[SuriTln.vattu_GA_2]      = true;
SuriTln.prefixList[SuriTln.vattu_GHA]       = true;
SuriTln.prefixList[SuriTln.vattu_NGA]       = true;
SuriTln.prefixList[SuriTln.vattu_JA_1]      = true;
SuriTln.prefixList[SuriTln.vattu_JHA]       = true;
SuriTln.prefixList[SuriTln.vattu_NYA]       = true;
SuriTln.prefixList[SuriTln.vattu_TTA_1]     = true;
SuriTln.prefixList[SuriTln.vattu_TTHA]      = true;
SuriTln.prefixList[SuriTln.vattu_DDA]       = true;
SuriTln.prefixList[SuriTln.vattu_DDHA]      = true;
SuriTln.prefixList[SuriTln.vattu_NNA_1]     = true;
SuriTln.prefixList[SuriTln.vattu_TA_1]      = true;
SuriTln.prefixList[SuriTln.vattu_THA_1]     = true;
SuriTln.prefixList[SuriTln.vattu_DA]        = true;
SuriTln.prefixList[SuriTln.vattu_DHA]       = true;
SuriTln.prefixList[SuriTln.vattu_RA_1]      = true;
SuriTln.prefixList[SuriTln.vattu_RA_3]      = true;
SuriTln.prefixList[SuriTln.vattu_RA_5]      = true;
SuriTln.prefixList[SuriTln.vattu_LA_1]      = true;
SuriTln.prefixList[SuriTln.vattu_SSA]       = true;
SuriTln.prefixList[SuriTln.vattu_RRA]       = true;

SuriTln.overloadList = new Object();
SuriTln.overloadList[SuriTln.vowel_I]       = true;
SuriTln.overloadList[SuriTln.vowel_L]       = true;
SuriTln.overloadList[SuriTln.vowel_O]       = true;
SuriTln.overloadList[SuriTln.consnt_PHA_1]  = true;
SuriTln.overloadList[SuriTln.consnt_BA_1]   = true;
SuriTln.overloadList[SuriTln.consnt_RA]     = true;
SuriTln.overloadList[SuriTln.consnt_VA]     = true;
SuriTln.overloadList[SuriTln.vattu_CA]      = true;
SuriTln.overloadList[SuriTln.vattu_PA]      = true;
SuriTln.overloadList[SuriTln.vattu_BA]      = true;
SuriTln.overloadList[SuriTln.combo_VI]      = true;
SuriTln.overloadList["\u0056"]              = true;
SuriTln.overloadList["\u0056\u00CD"]        = true;
SuriTln.overloadList["\u0065\u00DD"]        = true;
SuriTln.overloadList["\u0068\u0058"]        = true;
SuriTln.overloadList["\u0068\u007A"]        = true;
SuriTln.overloadList["\u0068\u007A\u00DD"]  = true;
SuriTln.overloadList["\u0068\u007A\u00F2"]  = true;
SuriTln.overloadList["\u0068\u0178"]        = true;
SuriTln.overloadList["\u0068\u0178\u00DD"]  = true;
SuriTln.overloadList["\u0068\u00DD"]        = true;
SuriTln.overloadList["\u0068\u00E1"]        = true;
SuriTln.overloadList["\u0068\u00E1\u00FE"]  = true;
SuriTln.overloadList["\u0068\u00EF"]        = true;
SuriTln.overloadList["\u0068\u00EF\u00E1"]  = true;
SuriTln.overloadList["\u006F\u00DD"]        = true;
SuriTln.overloadList["\u006F\u00F0"]        = true;
SuriTln.overloadList["\u006F\u00F3"]        = true;
SuriTln.overloadList["\u006F\u00FE"]        = true;
SuriTln.overloadList["\u0070\u00DB"]        = true;
SuriTln.overloadList["\u00CB"]              = true;
