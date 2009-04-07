//$Id: ShreeKan0850.js,v 1.2 2009/04/07 07:35:18 harshita Exp $

//Copyright 2008-2009 HarshitaVani <harshita@atc.tcs.com>

/* ****** BEGIN LICENSE BLOCK ***** 
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

//Shree-Kan-0850 Kannada
function Shree_Kan_0850()
{
}

//The interface every dynamic font encoding should implement
Shree_Kan_0850.maxLookupLen = 4;
Shree_Kan_0850.fontFace     = "Shree-Kan-0850";
Shree_Kan_0850.displayName  = "Shree-Kan-0850";
Shree_Kan_0850.script       = Padma.script_KANNADA;
Shree_Kan_0850.hasSuffixes  = true;

Shree_Kan_0850.lookup = function (str)
{
    return Shree_Kan_0850.toPadma[str];
}

Shree_Kan_0850.isPrefixSymbol = function (str)
{
    return false; //Shree_Kan_0850_prefixList[str] != null;
}

Shree_Kan_0850.isOverloaded = function (str)
{
    return Shree_Kan_0850.overloadList[str] != null;
}

Shree_Kan_0850. handleTwoPartVowelSigns = function(sign1, sign2)
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
Shree_Kan_0850. isRedundant = function(str)
{
    return Shree_Kan_0850.redundantList[str] != null;
}

Shree_Kan_0850. isSuffixSymbol = function(str)
{
    return Shree_Kan_0850.suffixList[str] != null;
}

//Implementation details start here

//const Specials
Shree_Kan_0850.visarga        = "\u0040";
Shree_Kan_0850.anusvara       = "\u00ED";
Shree_Kan_0850.virama         = "\u2026";

//Vowels
Shree_Kan_0850.vowel_A        = "\u0041";
Shree_Kan_0850.vowel_AA       = "\u0042";
Shree_Kan_0850.vowel_I        = "\u0043";
Shree_Kan_0850.vowel_II       = "\u0044";
Shree_Kan_0850.vowel_U        = "\u0045";
Shree_Kan_0850.vowel_UU       = "\u0046";
Shree_Kan_0850.vowel_R_1      = "\u004D\u00E1";
Shree_Kan_0850.vowel_R_2      = "\u004D\u00E2";
Shree_Kan_0850.vowel_R_3      = "\u004D\u00E5";
Shree_Kan_0850.vowel_RR_1     = "\u004D\u00E3";
Shree_Kan_0850.vowel_RR_2     = "\u004D\u00E4";
Shree_Kan_0850.vowel_E        = "\u0047";
Shree_Kan_0850.vowel_EE       = "\u0048";
Shree_Kan_0850.vowel_AI       = "\u0049";
Shree_Kan_0850.vowel_O        = "\u004A";
Shree_Kan_0850.vowel_OO       = "\u004B";
Shree_Kan_0850.vowel_AU       = "\u004C";


//Consonants
Shree_Kan_0850.consnt_KA      = "\u0050";
Shree_Kan_0850.consnt_KHA_1   = "\u0053";
Shree_Kan_0850.consnt_KHA_2   = "\u0054";
Shree_Kan_0850.consnt_GA      = "\u0057";
Shree_Kan_0850.consnt_GHA_1   = "\u005A";
Shree_Kan_0850.consnt_GHA_2   = "\u005B";
Shree_Kan_0850.consnt_NGA     = "\u005F";

Shree_Kan_0850.consnt_CA      = "\u0061";
Shree_Kan_0850.consnt_CHA     = "\u0064";
Shree_Kan_0850.consnt_JA_1    = "\u0067";
Shree_Kan_0850.consnt_JA_2    = "\u0068";
Shree_Kan_0850.consnt_JHA_1   = "\u00C3\u006B\u00E1";
Shree_Kan_0850.consnt_JHA_2   = "\u00C3\u006B\u00E2";
Shree_Kan_0850.consnt_JHA_3   = "\u00C3\u006B\u00E5";
Shree_Kan_0850.consnt_NYA     = "\u006D";

Shree_Kan_0850.consnt_TTA_1   = "\u006F";
Shree_Kan_0850.consnt_TTA_2   = "\u0070";
Shree_Kan_0850.consnt_TTHA    = "\u0073";
Shree_Kan_0850.consnt_DDA     = "\u0076";
Shree_Kan_0850.consnt_DDHA    = "\u0079";
Shree_Kan_0850.consnt_NNA_1   = "\u007C";
Shree_Kan_0850.consnt_NNA_2   = "\u004F";

Shree_Kan_0850.consnt_TA      = "\u00F1";
Shree_Kan_0850.consnt_THA     = "\u00A5";
Shree_Kan_0850.consnt_DA      = "\u00A8";
Shree_Kan_0850.consnt_DHA     = "\u00AB";
Shree_Kan_0850.consnt_NA      = "\u00AE";

Shree_Kan_0850.consnt_PA      = "\u00B1";
Shree_Kan_0850.consnt_PHA     = "\u00B4";
Shree_Kan_0850.consnt_BA_1    = "\u00B8";
Shree_Kan_0850.consnt_BA_2    = "\u0178";
Shree_Kan_0850.consnt_BHA     = "\u00BB";
Shree_Kan_0850.consnt_MA_1    = "\u00CA\u00E1";
Shree_Kan_0850.consnt_MA_2    = "\u00CA\u00E5";

Shree_Kan_0850.consnt_YA_1    = "\u00BF\u00E1";
//Shree_Kan_0850.consnt_YA_2    = "\u00BF\u00E2";
Shree_Kan_0850.consnt_YA_3    = "\u00BF\u00E5";
Shree_Kan_0850.consnt_YA_4    = "\u0030\u00E5\u00E1";
Shree_Kan_0850.consnt_RA      = "\u00C3";
Shree_Kan_0850.consnt_LA_1    = "\u00C6";
Shree_Kan_0850.consnt_LA_2    = "\u00C7";
Shree_Kan_0850.consnt_VA      = "\u00CA";
Shree_Kan_0850.consnt_SHA     = "\u00CD";
Shree_Kan_0850.consnt_SSA     = "\u00D0";
Shree_Kan_0850.consnt_SA      = "\u00D3";
Shree_Kan_0850.consnt_HA      = "\u00D6";
Shree_Kan_0850.consnt_LLA     = "\u00D9";

Shree_Kan_0850.consnt_RRA_1   = "\u201C";
Shree_Kan_0850.consnt_RRA_2   = "\u201D";
Shree_Kan_0850.consnt_FA_1    = "\u2018";
Shree_Kan_0850.consnt_FA_2    = "\u2019";
Shree_Kan_0850.conjct_KSHA    = "\u00FB";
Shree_Kan_0850.conjct_JNYA_1  = "\u00FD";
Shree_Kan_0850.conjct_JNYA_2  = "\u00FE";

//Gunintamulu
Shree_Kan_0850.vowelsn_AA     = "\u00DD";
Shree_Kan_0850.vowelsn_I      = "\u00DF";
Shree_Kan_0850.vowelsn_U_1    = "\u00E1";
Shree_Kan_0850.vowelsn_U_2    = "\u00E2";
Shree_Kan_0850.vowelsn_U_3    = "\u00E5";
Shree_Kan_0850.vowelsn_UU_1   = "\u00E3";
Shree_Kan_0850.vowelsn_UU_2   = "\u00E4";
Shree_Kan_0850.vowelsn_UU_3   = "\u00DE";
Shree_Kan_0850.vowelsn_R_1    = "\u00EA";
Shree_Kan_0850.vowelsn_R_2    = "\u0192";
Shree_Kan_0850.vowelsn_AU_2   = "\u00EE";
Shree_Kan_0850.vowelsn_RR     = "\u00EB";
Shree_Kan_0850.vowelsn_E      = "\u00E6";
Shree_Kan_0850.vowelsn_O_1    = "\u00E6\u00E3";
Shree_Kan_0850.vowelsn_O_2    = "\u00E6\u00E4";
Shree_Kan_0850.vowelsn_O_3    = "\u00E6\u00DE";
Shree_Kan_0850.vowelsn_AU_1   = "\u00E8";

Shree_Kan_0850.vowelsn_IILEN    = "\u00E0";
Shree_Kan_0850.vowelsn_AILEN_1  = "\u00E7";
Shree_Kan_0850.vowelsn_AILEN_2  = "\u201E";

//Special Combinations
Shree_Kan_0850.combo_KI       = "\u0051";
Shree_Kan_0850.combo_KHI      = "\u0055";
Shree_Kan_0850.combo_GI       = "\u0058";
Shree_Kan_0850.combo_GHI      = "\u005C";
Shree_Kan_0850.combo_GHE      = "\u004E";

Shree_Kan_0850.combo_CI       = "\u0062";
Shree_Kan_0850.combo_CHI      = "\u0065";
Shree_Kan_0850.combo_JI       = "\u0069";

Shree_Kan_0850.combo_TTI      = "\u0071";
Shree_Kan_0850.combo_TTHI     = "\u0074";
Shree_Kan_0850.combo_DDI      = "\u0077";
Shree_Kan_0850.combo_DDHI     = "\u007B";
Shree_Kan_0850.combo_NNI      = "\u007E";

Shree_Kan_0850.combo_TI       = "\u00A3";
Shree_Kan_0850.combo_THI      = "\u00A6";
Shree_Kan_0850.combo_DI       = "\u00A9";
Shree_Kan_0850.combo_DHI      = "\u2014";
Shree_Kan_0850.combo_NI       = "\u00AF";

Shree_Kan_0850.combo_PI       = "\u00B2";
Shree_Kan_0850.combo_PHI      = "\u00B5";
Shree_Kan_0850.combo_BI       = "\u00B9";
Shree_Kan_0850.combo_BHI      = "\u00BC";
Shree_Kan_0850.combo_MAA      = "\u00CA\u00DE";
Shree_Kan_0850.combo_MI_1     = "\u00CB\u00E1";
Shree_Kan_0850.combo_MI_2     = "\u00CB\u00E2";
Shree_Kan_0850.combo_MI_3     = "\u00CB\u00E5";
Shree_Kan_0850.combo_ME       = "\u00CA\u00E6\u00E1";
Shree_Kan_0850.combo_MO       = "\u00CA\u00E6\u00E3";

Shree_Kan_0850.combo_YAA_1    = "\u00BF\u00DE";
Shree_Kan_0850.combo_YAA_2    = "\u0030\u00E5\u00DE";
Shree_Kan_0850.combo_YI       = "\u00C0\u00E1";
Shree_Kan_0850.combo_YE_1     = "\u00BF\u00E6\u00E1";
Shree_Kan_0850.combo_YE_2     = "\u00C1\u00E1";
Shree_Kan_0850.combo_YE_3     = "\u0030\u00E5\u00E6\u00E1";
Shree_Kan_0850.combo_YO_1     = "\u00BF\u00E6\u00E3";
Shree_Kan_0850.combo_YO_2     = "\u0030\u00E5\u00E6\u00E3";
Shree_Kan_0850.combo_YO_3     = "\u00C1\u00E3";
Shree_Kan_0850.combo_RI       = "\u00C4";
Shree_Kan_0850.combo_LI       = "\u00C8";
Shree_Kan_0850.combo_VI       = "\u00CB";
Shree_Kan_0850.combo_SHI      = "\u00CE";
Shree_Kan_0850.combo_SSI      = "\u00D1";
Shree_Kan_0850.combo_SI       = "\u00D4";
Shree_Kan_0850.combo_HI       = "\u00D7";
Shree_Kan_0850.combo_LLI      = "\u00DA";

Shree_Kan_0850.combo_SHRI     = "\u005D";
Shree_Kan_0850.combo_KSHI     = "\u00FC";
Shree_Kan_0850.combo_JNYI     = "\u00FF";
Shree_Kan_0850.combo_JHI      = "\u00C4\u006B\u00E1";
Shree_Kan_0850.combo_JHE      = "\u00C3\u00E6\u006B\u00E1";
Shree_Kan_0850.combo_JHAA     = "\u00C3\u006B\u00DE";

//Vattulu
Shree_Kan_0850.vattu_KA       = "\u0052";
Shree_Kan_0850.vattu_KRA      = "\u00F0";
Shree_Kan_0850.vattu_KRU      = "\u00A2";
Shree_Kan_0850.vattu_KHA      = "\u0056";
Shree_Kan_0850.vattu_GA       = "\u0059";
Shree_Kan_0850.vattu_GHA      = "\u005E";
Shree_Kan_0850.vattu_NGA      = "\u0060";

Shree_Kan_0850.vattu_CA       = "\u0063";
Shree_Kan_0850.vattu_CHA      = "\u0066";
Shree_Kan_0850.vattu_JA       = "\u006A";
Shree_Kan_0850.vattu_JHA      = "\u006C";
Shree_Kan_0850.vattu_NYA      = "\u006E";

Shree_Kan_0850.vattu_TTA      = "\u0072";
Shree_Kan_0850.vattu_TTHA     = "\u0075";
Shree_Kan_0850.vattu_DDA      = "\u0078";
Shree_Kan_0850.vattu_DDHA     = "\u007A";
Shree_Kan_0850.vattu_NNA      = "\u00A1";

Shree_Kan_0850.vattu_TA       = "\u00A4";
Shree_Kan_0850.vattu_TU       = "\u00F5";
Shree_Kan_0850.vattu_TAI      = "\u00F4";
Shree_Kan_0850.vattu_THA      = "\u00A7";
Shree_Kan_0850.vattu_DA       = "\u00AA";
Shree_Kan_0850.vattu_DHA      = "\u0153";
Shree_Kan_0850.vattu_NA       = "\u00B0";

Shree_Kan_0850.vattu_PA       = "\u00B3";
Shree_Kan_0850.vattu_PHA      = "\u2013";
Shree_Kan_0850.vattu_BA       = "\u00BA";
Shree_Kan_0850.vattu_BHA      = "\u00BD";
Shree_Kan_0850.vattu_MA       = "\u00BE";

Shree_Kan_0850.vattu_YA_1     = "\u00C2";
Shree_Kan_0850.vattu_YA_2     = "\u00E9";
Shree_Kan_0850.vattu_RA_1     = "\u00C5";
Shree_Kan_0850.vattu_RA_2     = "\u2020";
Shree_Kan_0850.vattu_RA_3     = "\u2039";
Shree_Kan_0850.vattu_RA_4     = "\u203A";
Shree_Kan_0850.vattu_RA_R     = "\u00F9";
Shree_Kan_0850.vattu_RAA      = "\u2022";
Shree_Kan_0850.vattu_LA       = "\u00C9";
Shree_Kan_0850.vattu_VA       = "\u00CC";
Shree_Kan_0850.vattu_SHA      = "\u00CF";
Shree_Kan_0850.vattu_SSA      = "\u00D2";
Shree_Kan_0850.vattu_SA       = "\u00D5";
Shree_Kan_0850.vattu_HA       = "\u00D8";
Shree_Kan_0850.vattu_LLA      = "\u00DB";
Shree_Kan_0850.vattu_JAI      = "\u00F2";
Shree_Kan_0850.vattu_TTRA     = "\u00F3";
Shree_Kan_0850.vattu_TYA      = "\u00F6";
Shree_Kan_0850.vattu_TRA      = "\u00F7";
Shree_Kan_0850.vattu_PRA      = "\u00F8";
Shree_Kan_0850.vattu_SRA      = "\u00FA";

//half forms of RA
Shree_Kan_0850.halffm_RA      = "\u00EC";

//Digits
Shree_Kan_0850.digit_ZERO     = "\u0030";
Shree_Kan_0850.digit_ONE      = "\u0031";
Shree_Kan_0850.digit_TWO      = "\u0032";
Shree_Kan_0850.digit_THREE    = "\u0033";
Shree_Kan_0850.digit_FOUR     = "\u0034";
Shree_Kan_0850.digit_FIVE     = "\u0035";
Shree_Kan_0850.digit_SIX      = "\u0036";
Shree_Kan_0850.digit_SEVEN    = "\u0037";
Shree_Kan_0850.digit_EIGHT    = "\u0038";
Shree_Kan_0850.digit_NINE     = "\u0039";

//Matches ASCII
Shree_Kan_0850.EXCLAM         = "\u0021";
Shree_Kan_0850.PERCENT        = "\u0025";
Shree_Kan_0850.PARENLEFT      = "\u0028";
Shree_Kan_0850.PARENRIGT      = "\u0029";
Shree_Kan_0850.ASTERISK       = "\u002A";
Shree_Kan_0850.PLUS           = "\u002B";
Shree_Kan_0850.COMMA          = "\u002C";
Shree_Kan_0850.PERIOD         = "\u002E";
Shree_Kan_0850.SLASH          = "\u002F";
Shree_Kan_0850.COLON          = "\u003A";
Shree_Kan_0850.SEMICOLON      = "\u003B";
Shree_Kan_0850.EQUALS         = "\u003D";
Shree_Kan_0850.QUESTION       = "\u003F";

//Does not Match ASCII
Shree_Kan_0850.LQTSINGLE      = "\u0022";
Shree_Kan_0850.RQTSINGLE      = "\u0027";
Shree_Kan_0850.misc_DANDA     = "\u003E";

Shree_Kan_0850.HYPHEN         = "\u0026";
Shree_Kan_0850.extra_HYPHEN   = "\u00AD";
Shree_Kan_0850.MULTIPLY       = "\u008D";
Shree_Kan_0850.DIVIDE         = "\u0160";
Shree_Kan_0850.OM             = "\u0023";

//Kommu
Shree_Kan_0850.misc_TICK_1    = "\u00DC";

Shree_Kan_0850.misc_UNKNOWN_1 = "\u0152";
Shree_Kan_0850.misc_UNKNOWN_2 = "\u0161";
Shree_Kan_0850.misc_UNKNOWN_3 = "\u00B7";
Shree_Kan_0850.misc_UNKNOWN_4 = "\u0024";


Shree_Kan_0850.toPadma = new Object ();

Shree_Kan_0850.toPadma[Shree_Kan_0850.visarga]  = Padma.visarga;
Shree_Kan_0850.toPadma[Shree_Kan_0850.anusvara] = Padma.anusvara;
Shree_Kan_0850.toPadma[Shree_Kan_0850.virama]   = Padma.syllbreak;

Shree_Kan_0850.toPadma[Shree_Kan_0850.vowel_A]    = Padma.vowel_A;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowel_AA]   = Padma.vowel_AA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowel_I]    = Padma.vowel_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowel_II]   = Padma.vowel_II;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowel_U]    = Padma.vowel_U;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowel_UU]   = Padma.vowel_UU;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowel_R_1]  = Padma.vowel_R;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowel_R_2]  = Padma.vowel_R;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowel_R_3]  = Padma.vowel_R;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowel_RR_1] = Padma.vowel_RR;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowel_RR_2] = Padma.vowel_RR;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowel_E]    = Padma.vowel_E;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowel_EE]   = Padma.vowel_EE;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowel_AI]   = Padma.vowel_AI;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowel_O]    = Padma.vowel_O;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowel_OO]   = Padma.vowel_OO;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowel_AU]   = Padma.vowel_AU;

Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_KA]    = Padma.consnt_KA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_KHA_1] = Padma.consnt_KHA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_KHA_2] = Padma.consnt_KHA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_GA]    = Padma.consnt_GA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_GHA_1] = Padma.consnt_GHA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_GHA_2] = Padma.consnt_GHA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_NGA]   = Padma.consnt_NGA;

Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_CA]    = Padma.consnt_CA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_CHA]   = Padma.consnt_CHA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_JA_1]  = Padma.consnt_JA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_JA_2]  = Padma.consnt_JA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_JHA_1] = Padma.consnt_JHA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_JHA_2] = Padma.consnt_JHA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_JHA_3] = Padma.consnt_JHA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_NYA]   = Padma.consnt_NYA;

Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_TTA_1] = Padma.consnt_TTA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_TTA_2] = Padma.consnt_TTA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_TTHA]  = Padma.consnt_TTHA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_DDA]   = Padma.consnt_DDA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_DDHA]  = Padma.consnt_DDHA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_NNA_1] = Padma.consnt_NNA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_NNA_2] = Padma.consnt_NNA;

Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_TA]  = Padma.consnt_TA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_THA] = Padma.consnt_THA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_DA]  = Padma.consnt_DA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_DHA] = Padma.consnt_DHA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_NA]  = Padma.consnt_NA;

Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_PA]   = Padma.consnt_PA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_PHA]  = Padma.consnt_PHA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_BA_1] = Padma.consnt_BA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_BA_2] = Padma.consnt_BA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_BHA]  = Padma.consnt_BHA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_MA_1] = Padma.consnt_MA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_MA_2] = Padma.consnt_MA;

Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_YA_1] = Padma.consnt_YA;
//Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_YA_2] = Padma.consnt_YA;//recent comment after removing preprocessmsg function
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_YA_3] = Padma.consnt_YA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_YA_4] = Padma.consnt_YA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_RA]   = Padma.consnt_RA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_LA_1] = Padma.consnt_LA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_LA_2] = Padma.consnt_LA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_VA]   = Padma.consnt_VA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_SHA]  = Padma.consnt_SHA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_SSA]  = Padma.consnt_SSA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_SA]   = Padma.consnt_SA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_HA]   = Padma.consnt_HA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_LLA]  = Padma.consnt_LLA;

Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_RRA_1]  = Padma.consnt_RRA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_RRA_2]  = Padma.consnt_RRA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_FA_1]   = Padma.consnt_FA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.consnt_FA_2]   = Padma.consnt_FA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.conjct_KSHA]   = Padma.consnt_KA + Padma.vattu_SSA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.conjct_JNYA_1] = Padma.consnt_JA + Padma.vattu_NYA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.conjct_JNYA_2] = Padma.consnt_JA + Padma.vattu_NYA;

//Gunintamulu
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowelsn_AA]    = Padma.vowelsn_AA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowelsn_I]     = Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowelsn_U_1]   = Padma.vowelsn_U;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowelsn_U_2]   = Padma.vowelsn_U;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowelsn_U_3]   = Padma.vowelsn_U;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowelsn_UU_1]  = Padma.vowelsn_UU;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowelsn_UU_2]  = Padma.vowelsn_UU;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowelsn_UU_3]  = Padma.vowelsn_UU;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowelsn_R_1]   = Padma.vowelsn_R;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowelsn_R_2]   = Padma.vowelsn_R;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowelsn_AU_2]  = Padma.vowelsn_AU;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowelsn_RR]    = Padma.vowelsn_RR;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowelsn_E]     = Padma.vowelsn_E;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowelsn_O_1]   = Padma.vowelsn_O;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowelsn_O_2]   = Padma.vowelsn_O;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowelsn_O_3]   = Padma.vowelsn_O;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowelsn_AU_1]  = Padma.vowelsn_AU;

Shree_Kan_0850.toPadma[Shree_Kan_0850.vowelsn_IILEN]   = Padma.vowelsn_IILEN;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowelsn_AILEN_1] = Padma.vowelsn_AILEN;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vowelsn_AILEN_2] = Padma.vowelsn_AILEN;

//Special Combinations
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_KI]   = Padma.consnt_KA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_KHI]  = Padma.consnt_KHA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_GI]   = Padma.consnt_GA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_GHI]  = Padma.consnt_GHA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_GHE]  = Padma.consnt_GHA  + Padma.vowelsn_E;

Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_CI]   = Padma.consnt_CA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_CHI]  = Padma.consnt_CHA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_JI]   = Padma.consnt_JA + Padma.vowelsn_I;

Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_TTI]  = Padma.consnt_TTA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_TTHI] = Padma.consnt_TTHA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_DDI]  = Padma.consnt_DDA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_DDHI] = Padma.consnt_DDHA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_NNI]  = Padma.consnt_NNA + Padma.vowelsn_I;

Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_TI]   = Padma.consnt_TA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_THI]  = Padma.consnt_THA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_DI]   = Padma.consnt_DA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_DHI]  = Padma.consnt_DHA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_NI]   = Padma.consnt_NA + Padma.vowelsn_I;

Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_PI]   = Padma.consnt_PA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_PHI]  = Padma.consnt_PHA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_BI]   = Padma.consnt_BA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_BHI]  = Padma.consnt_BHA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_MAA]  = Padma.consnt_MA + Padma.vowelsn_AA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_MI_1] = Padma.consnt_MA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_MI_2] = Padma.consnt_MA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_MI_3] = Padma.consnt_MA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_ME]   = Padma.consnt_MA + Padma.vowelsn_E;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_MO]   = Padma.consnt_MA + Padma.vowelsn_O;

Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_YAA_1]= Padma.consnt_YA + Padma.vowelsn_AA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_YAA_2]= Padma.consnt_YA + Padma.vowelsn_AA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_YI]   = Padma.consnt_YA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_YE_1] = Padma.consnt_YA + Padma.vowelsn_E;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_YE_2] = Padma.consnt_YA + Padma.vowelsn_E;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_YE_3] = Padma.consnt_YA + Padma.vowelsn_E;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_YO_1] = Padma.consnt_YA + Padma.vowelsn_O;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_YO_2] = Padma.consnt_YA + Padma.vowelsn_O;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_YO_3] = Padma.consnt_YA + Padma.vowelsn_O;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_RI]   = Padma.consnt_RA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_LI]   = Padma.consnt_LA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_VI]   = Padma.consnt_VA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_SHI]  = Padma.consnt_SHA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_SSI]  = Padma.consnt_SSA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_SI]   = Padma.consnt_SA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_HI]   = Padma.consnt_HA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_LLI]  = Padma.consnt_LLA + Padma.vowelsn_I;

Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_SHRI] = Padma.consnt_SHA + Padma.vattu_RA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_KSHI] = Padma.consnt_KA  + Padma.vattu_SSA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_JNYI] = Padma.consnt_JA + Padma.vattu_NYA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_JHI]  = Padma.consnt_JHA + Padma.vowelsn_I;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_JHE]  = Padma.consnt_JHA + Padma.vowelsn_E;
Shree_Kan_0850.toPadma[Shree_Kan_0850.combo_JHAA] = Padma.consnt_JHA + Padma.vowelsn_AA;
//Vattulu
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_KA]   = Padma.vattu_KA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_KRA]  = Padma.vattu_KA + Padma.vowelsn_R;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_KRU]  = Padma.vattu_KA + Padma.vowelsn_R;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_KHA]  = Padma.vattu_KHA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_GA]   = Padma.vattu_GA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_GHA]  = Padma.vattu_GHA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_NGA]  = Padma.vattu_NGA;

Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_CA]   = Padma.vattu_CA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_CHA]  = Padma.vattu_CHA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_JA]   = Padma.vattu_JA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_JHA]  = Padma.vattu_JHA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_NYA]  = Padma.vattu_NYA;

Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_TTA]  = Padma.vattu_TTA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_TTHA] = Padma.vattu_TTHA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_DDA]  = Padma.vattu_DDA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_DDHA] = Padma.vattu_DDHA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_NNA]  = Padma.vattu_NNA;

Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_TA]   = Padma.vattu_TA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_TU]   = Padma.vattu_TA + Padma.vowelsn_U;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_TAI]  = Padma.vattu_TA + Padma.vowelsn_AI;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_THA]  = Padma.vattu_THA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_DA]   = Padma.vattu_DA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_DHA]  = Padma.vattu_DHA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_NA]   = Padma.vattu_NA;

Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_PA]   = Padma.vattu_PA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_PHA]  = Padma.vattu_PHA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_BA]   = Padma.vattu_BA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_BHA]  = Padma.vattu_BHA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_MA]   = Padma.vattu_MA;

Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_YA_1] = Padma.vattu_YA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_YA_2] = Padma.vattu_YA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_RA_1] = Padma.vattu_RA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_RA_2] = Padma.vattu_RA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_RA_3] = Padma.vattu_RA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_RA_4] = Padma.vattu_RA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_RA_R] = Padma.vattu_RA + Padma.vowelsn_R;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_LA]   = Padma.vattu_LA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_VA]   = Padma.vattu_VA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_SHA]  = Padma.vattu_SHA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_SSA]  = Padma.vattu_SSA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_SA]   = Padma.vattu_SA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_HA]   = Padma.vattu_HA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_LLA]  = Padma.vattu_LLA;

//conjucts
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_JAI]  = Padma.vattu_JA + Padma.vowelsn_AI;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_TTRA] = Padma.vattu_TTA + Padma.vattu_RA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_TYA]  = Padma.vattu_TA + Padma.vattu_YA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_TRA]  = Padma.vattu_TA + Padma.vattu_RA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_PRA]  = Padma.vattu_PA + Padma.vattu_RA;
Shree_Kan_0850.toPadma[Shree_Kan_0850.vattu_SRA]  = Padma.vattu_SA + Padma.vattu_RA;

//Half forms
Shree_Kan_0850.toPadma[Shree_Kan_0850.halffm_RA]  = Padma.halffm_RA;

//Digits
Shree_Kan_0850.toPadma[Shree_Kan_0850.digit_ZERO] = Padma.digit_ZERO;
Shree_Kan_0850.toPadma[Shree_Kan_0850.digit_ONE]  = Padma.digit_ONE;
Shree_Kan_0850.toPadma[Shree_Kan_0850.digit_TWO]  = Padma.digit_TWO;
Shree_Kan_0850.toPadma[Shree_Kan_0850.digit_THREE]= Padma.digit_THREE;
Shree_Kan_0850.toPadma[Shree_Kan_0850.digit_FOUR] = Padma.digit_FOUR;
Shree_Kan_0850.toPadma[Shree_Kan_0850.digit_FIVE] = Padma.digit_FIVE;
Shree_Kan_0850.toPadma[Shree_Kan_0850.digit_SIX]  = Padma.digit_SIX;
Shree_Kan_0850.toPadma[Shree_Kan_0850.digit_SEVEN]= Padma.digit_SEVEN;
Shree_Kan_0850.toPadma[Shree_Kan_0850.digit_EIGHT]= Padma.digit_EIGHT;
Shree_Kan_0850.toPadma[Shree_Kan_0850.digit_NINE] = Padma.digit_NINE;

Shree_Kan_0850.toPadma[Shree_Kan_0850.LQTSINGLE]  = "\u2018";
Shree_Kan_0850.toPadma[Shree_Kan_0850.RQTSINGLE]  = "\u2019";
Shree_Kan_0850.toPadma[Shree_Kan_0850.misc_DANDA] = Padma.danda;

Shree_Kan_0850.toPadma[Shree_Kan_0850.HYPHEN]        = "\u002D";
Shree_Kan_0850.toPadma[Shree_Kan_0850.extra_HYPHEN]  = "\u002D";
Shree_Kan_0850.toPadma[Shree_Kan_0850.MULTIPLY]      = "X";
Shree_Kan_0850.toPadma[Shree_Kan_0850.DIVIDE]        = "/";
Shree_Kan_0850.toPadma[Shree_Kan_0850.OM]            = "\u0950";

Shree_Kan_0850.redundantList = new Object();
Shree_Kan_0850.redundantList[Shree_Kan_0850.misc_TICK_1]    = true;
Shree_Kan_0850.redundantList[Shree_Kan_0850.misc_UNKNOWN_1] = true;
Shree_Kan_0850.redundantList[Shree_Kan_0850.misc_UNKNOWN_2] = true;
Shree_Kan_0850.redundantList[Shree_Kan_0850.misc_UNKNOWN_3] = true;
Shree_Kan_0850.redundantList[Shree_Kan_0850.misc_UNKNOWN_4] = true;

Shree_Kan_0850.overloadList =new Object ();
Shree_Kan_0850.overloadList[Shree_Kan_0850.consnt_RA] = true;
Shree_Kan_0850.overloadList[Shree_Kan_0850.consnt_VA] = true;
Shree_Kan_0850.overloadList[Shree_Kan_0850.vowelsn_E] = true;
Shree_Kan_0850.overloadList[Shree_Kan_0850.combo_RI]  = true;
Shree_Kan_0850.overloadList[Shree_Kan_0850.combo_VI]  = true;
Shree_Kan_0850.overloadList[Shree_Kan_0850.digit_ZERO]= true;

Shree_Kan_0850.overloadList["\u004D"]            = true;
Shree_Kan_0850.overloadList["\u00BF"]            = true;
Shree_Kan_0850.overloadList["\u00BF\u00E6"]      = true;
Shree_Kan_0850.overloadList["\u00C0"]            = true;
Shree_Kan_0850.overloadList["\u00C1"]            = true;
Shree_Kan_0850.overloadList["\u00C3\u006B"]      = true;
Shree_Kan_0850.overloadList["\u00C4\u006B"]      = true;
Shree_Kan_0850.overloadList["\u00CA\u00E6"]      = true;
Shree_Kan_0850.overloadList["\u00C3\u00E6"]      = true;
Shree_Kan_0850.overloadList["\u00C3\u00E6\u006B"]  = true;
Shree_Kan_0850.overloadList["\u0030\u00E5"]      = true;
Shree_Kan_0850.overloadList["\u0030\u00E5\u00E6"]= true;

Shree_Kan_0850.suffixList = new Object ();
Shree_Kan_0850.suffixList[Shree_Kan_0850.halffm_RA]  = true;

//Shree-Kan-0850W
function Shree_Kan_0850W()
{
}

Shree_Kan_0850W.maxLookupLen = Shree_Kan_0850.maxLookupLen;
Shree_Kan_0850W.fontFace     = "Shree-Kan-0850W";
Shree_Kan_0850W.displayName  = "Shree-Kan-0850W";
Shree_Kan_0850W.script       = Shree_Kan_0850.script;
Shree_Kan_0850W.hasSuffixes  = Shree_Kan_0850.hasSuffixes;

Shree_Kan_0850W.lookup = function (str)
{
    return Shree_Kan_0850.lookup(str);
}

Shree_Kan_0850W.isPrefixSymbol = function (str)
{
    return Shree_Kan_0850.isPrefixSymbol(str);
}

Shree_Kan_0850W.isSuffixSymbol = function (str)
{
    return Shree_Kan_0850.isSuffixSymbol(str);
}

Shree_Kan_0850W.isOverloaded = function (str)
{
    return Shree_Kan_0850.isOverloaded(str);
}

Shree_Kan_0850W.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return Shree_Kan_0850.handleTwoPartVowelSigns(sign1, sign2);
}

Shree_Kan_0850W.isRedundant = function (str)
{
    return Shree_Kan_0850.isRedundant(str);
}
