// $Id: Bhaskar.js,v 1.2 2005/11/23 19:56:20 vnagarjuna Exp $ -->

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

function Bhaskar()
{
}

//The interface every dynamic font encoding should implement
Bhaskar.maxLookupLen = 3;
Bhaskar.fontFace     = "Bhaskar";
Bhaskar.displayName  = "Bhaskar";
Bhaskar.script       = Padma.script_DEVANAGARI;
Bhaskar.hasSuffixes  = true;

Bhaskar.lookup = function (str) 
{
    return Bhaskar.toPadma[str];
}

Bhaskar.isPrefixSymbol = function (str)
{
    return Bhaskar.prefixList[str] != null;
}

Bhaskar.isSuffixSymbol = function (str)
{
    return Bhaskar.suffixList[str] != null;
}

Bhaskar.isOverloaded = function (str)
{
    return Bhaskar.overloadList[str] != null;
}

Bhaskar.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if ((sign1 == Padma.vowelsn_EE && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_EE))
    return Padma.vowelsn_OO;  //Y
    if ((sign1 == Padma.vowelsn_AI && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_AI))
        return Padma.vowelsn_AU;
    return sign1 + sign2;    
}

Bhaskar.isRedundant = function (str)
{
    return Bhaskar.redundantList[str] != null;
}

//Implementation details start here
//Specials
Bhaskar.avagraha       = "\u00F9";
Bhaskar.anusvara_1     = "\u00A2";
Bhaskar.anusvara_2     = "\u00B4";
Bhaskar.candrabindu    = "\u00F2";
Bhaskar.virama         = "\u00F7";
//Bhaskar.visarga        = "\u00D1";

//Vowels
Bhaskar.vowel_A        = "\u00A5";
Bhaskar.vowel_AA       = "\u00A5\u00E6";
Bhaskar.vowel_I        = "\u00A7";
Bhaskar.vowel_II       = "\u00A7\u00FC";
Bhaskar.vowel_U        = "\u00A9";
Bhaskar.vowel_UU       = "\u00AA";
Bhaskar.vowel_R        = "\u00AB";
Bhaskar.vowel_RR       = "\u00AC";
Bhaskar.vowel_EE       = "\u00B0";
Bhaskar.vowel_AI       = "\u00B0\u00F0";
Bhaskar.vowel_OO_1     = "\u00A5\u00E6\u00F0";
Bhaskar.vowel_OO_2     = "\u00A5\u00F4";
Bhaskar.vowel_AU_1     = "\u00A5\u00E6\u00F1";
Bhaskar.vowel_AU_2     = "\u00A5\u00F5";

//Consonants
Bhaskar.consnt_KA      = "\u00B7";
Bhaskar.consnt_KHA_1   = "\u0081\u00E6";
Bhaskar.consnt_KHA_2   = "\u00B9";
Bhaskar.consnt_GA      = "\u00BB";
Bhaskar.consnt_GHA     = "\u0192\u00E6";
Bhaskar.consnt_NGA     = "\u00BE";

Bhaskar.consnt_CA      = "\u00BF";
Bhaskar.consnt_CHA     = "\u00C0";
Bhaskar.consnt_JA      = "\u00C1";
Bhaskar.consnt_ZA_1    = "\u2022\u00E6";
Bhaskar.consnt_ZA_2    = "\u00CA\u00E6";
Bhaskar.consnt_JHA     = "\u00DB\u00E6";

Bhaskar.consnt_TTA     = "\u00C5";
Bhaskar.consnt_TTHA    = "\u00C6";
Bhaskar.consnt_DDA     = "\u00C7";
Bhaskar.consnt_DDDHA   = "\u00C7\u00B8";
Bhaskar.consnt_DDHA    = "\u00C9";
Bhaskar.consnt_RHA     = "\u00C9\u00B8";
Bhaskar.consnt_NNA     = "\u2021\u00E6";

Bhaskar.consnt_TA_1    = "\u02C6\u00E6";
Bhaskar.consnt_TA_2    = "\u00CC";
Bhaskar.consnt_TA_3    = "\u00E6";
Bhaskar.consnt_THA_1   = "\u2030\u00E6";
Bhaskar.consnt_THA_2   = "\u00CD";
Bhaskar.consnt_DA_1    = "\u00BC";
Bhaskar.consnt_DA_2    = "\u00CE";
Bhaskar.consnt_DHA     = "\u00CF";
Bhaskar.consnt_NA      = "\u00D9";

Bhaskar.consnt_PA      = "\u00C2";
Bhaskar.consnt_PHA     = "\u00C8";
Bhaskar.consnt_BA      = "\u00D5";
Bhaskar.consnt_BHA_1   = "\u008F\u00E6";
Bhaskar.consnt_BHA_2   = "\u00D6";
Bhaskar.consnt_MA_1    = "\u0090\u00E6";
Bhaskar.consnt_MA_2    = "\u00D7";

Bhaskar.consnt_YA_1    = "\u00C4\u00E6";
Bhaskar.consnt_YA_2    = "\u00D8";
Bhaskar.consnt_RA      = "\u00DA";
Bhaskar.consnt_LA_1    = "\u00B6";
Bhaskar.consnt_LA_2    = "\u00DC";
Bhaskar.consnt_VA      = "\u00DF";
Bhaskar.consnt_SHA_1   = "\u00E0\u00E6";
Bhaskar.consnt_SHA_2   = "\u006F";
Bhaskar.consnt_SSA     = "\u00E1";
Bhaskar.consnt_SA      = "\u00E2";
Bhaskar.consnt_HA      = "\u00E3";
Bhaskar.consnt_LLA     = "\u00DD";

//Gunintamulu
Bhaskar.vowelsn_AA     = "\u00E6";
Bhaskar.vowelsn_I      = "\u00E7";
Bhaskar.vowelsn_II     = "\u00E8";
Bhaskar.vowelsn_U_1    = "\u00E4";
Bhaskar.vowelsn_U_2    = "\u00E9";
Bhaskar.vowelsn_UU_1   = "\u00E5";
Bhaskar.vowelsn_UU_2   = "\u00EA";
Bhaskar.vowelsn_R      = "\u00EB";
Bhaskar.vowelsn_EE_1   = "\u00F0";
Bhaskar.vowelsn_EE_2   = "\u00D4";
Bhaskar.vowelsn_AI     = "\u00F1";
Bhaskar.vowelsn_OO     = "\u00F4";
Bhaskar.vowelsn_AU     = "\u00F5";

//Vowel + anusvara
Bhaskar.vowel_IIM      = "\u00A7\u005A";
//Matra + modifier
Bhaskar.vowelsn_IM     = "\u00A8";
Bhaskar.vowelsn_U_BINDU = "\u0161";

//Half Forms
Bhaskar.halffm_KA      = "\u20AC";
Bhaskar.halffm_KSH     = "\u00FF";
Bhaskar.halffm_KHA     = "\u0081";
Bhaskar.halffm_GA      = "\u201A";
Bhaskar.halffm_GHA     = "\u0192";
Bhaskar.halffm_CA      = "\u2018";
Bhaskar.halffm_CC      = "\u201C";
Bhaskar.halffm_JA_1    = "\u2026";
Bhaskar.halffm_JA_2    = "\u2019";
Bhaskar.halffm_JJ      = "\u201D";
Bhaskar.halffm_JNY     = "\u2122";
Bhaskar.halffm_ZA_1    = "\u2022";
Bhaskar.halffm_ZA_2    = "\u00CA";
Bhaskar.halffm_JHA     = "\u00DB";
Bhaskar.halffm_NYA     = "\u2020";
Bhaskar.halffm_NNA     = "\u2021";
Bhaskar.halffm_TA      = "\u02C6";
Bhaskar.halffm_TT      = "\u017E";
Bhaskar.halffm_TR      = "\u02DC";
Bhaskar.halffm_THA     = "\u2030";
Bhaskar.halffm_DHA     = "\u0160";
Bhaskar.halffm_NA      = "\u2039";
Bhaskar.halffm_NN      = "\u00F3";
Bhaskar.halffm_PA      = "\u0152";
Bhaskar.halffm_PHA     = "\u008D";
Bhaskar.halffm_BA      = "\u017D";
Bhaskar.halffm_BHA     = "\u008F";
Bhaskar.halffm_MA      = "\u0090";
Bhaskar.halffm_YA      = "\u00C4";
Bhaskar.halffm_RA      = "\u00FC";
Bhaskar.halffm_LA      = "\u00CB";
Bhaskar.halffm_VA      = "\u00C3";
Bhaskar.halffm_SHA_1   = "\u00B3";
Bhaskar.halffm_SHA_2   = "\u00E0";
Bhaskar.halffm_SHR     = "\u0178";
Bhaskar.halffm_SSA     = "\u0063";
Bhaskar.halffm_SA      = "\u0053";
Bhaskar.halffm_HA      = "\u00B1";
Bhaskar.halffm_LLA     = "\u00FB";
Bhaskar.halffm_RRA     = "\u003A";

//Conjuncts
Bhaskar.conjct_KK      = "\u0050";
Bhaskar.conjct_KC      = "\u0042";
Bhaskar.conjct_KV      = "\u0060";
Bhaskar.conjct_KT      = "\u0051";
Bhaskar.conjct_KSH     = "\u00FF\u00E6";
Bhaskar.conjct_KSHEE   = "\u00FF\u00F4";
Bhaskar.conjct_KHN     = "\u00AF";
Bhaskar.conjct_NGK     = "\u0056";
Bhaskar.conjct_NGKH    = "\u0057";
Bhaskar.conjct_NGKT    = "\u2013";
Bhaskar.conjct_NGG     = "\u0058";
Bhaskar.conjct_NGGH    = "\u0059";
Bhaskar.conjct_CC      = "\u201C\u00E6";
Bhaskar.conjct_CHV     = "\u004A";
Bhaskar.conjct_JNY     = "\u2122\u00E6";
Bhaskar.conjct_JHR     = "\u005C";
Bhaskar.conjct_NYC     = "\u0040";
Bhaskar.conjct_NYJ     = "\u0054";
Bhaskar.conjct_JJ      = "\u201D\u00E6";
Bhaskar.conjct_TTTT    = "\u005E";
Bhaskar.conjct_TT_TTH  = "\u005F";
Bhaskar.conjct_TTHTTH  = "\u006E";
Bhaskar.conjct_DDTT    = "\u00BD";
Bhaskar.conjct_DDDD    = "\u0061";
Bhaskar.conjct_DD_DDH  = "\u0062";
Bhaskar.conjct_DDHDDH  = "\u0049";
Bhaskar.conjct_TT      = "\u017E\u00E6";
Bhaskar.conjct_TR      = "\u02DC\u00E6";
Bhaskar.conjct_TN      = "\u0025";
Bhaskar.conjct_DG      = "\u0065";
Bhaskar.conjct_DGH     = "\u0066";
Bhaskar.conjct_DD      = "\u0067";
Bhaskar.conjct_D_DH    = "\u0068";
Bhaskar.conjct_DB      = "\u0069";
Bhaskar.conjct_DBR     = "\u00B5";
Bhaskar.conjct_DBH     = "\u006A";
Bhaskar.conjct_DM      = "\u006B";
Bhaskar.conjct_DY      = "\u006C";
Bhaskar.conjct_DV      = "\u006D";
Bhaskar.conjct_NN      = "\u00F3\u00E6";
Bhaskar.conjct_PT      = "\u0023";
Bhaskar.conjct_LL      = "\u201E";
Bhaskar.conjct_SHC     = "\u0070";
Bhaskar.conjct_SHR     = "\u0178\u00E6";
Bhaskar.conjct_SHREE   = "\u0178\u00F4";
Bhaskar.conjct_SHV     = "\u0045";
Bhaskar.conjct_SSTT    = "\u0043";
Bhaskar.conjct_SSTTV   = "\u00A6";
Bhaskar.conjct_SSTTH   = "\u0044";
Bhaskar.conjct_STR     = "\u0064";
Bhaskar.conjct_SN      = "\u0046";
Bhaskar.conjct_HNN     = "\u00F6";
Bhaskar.conjct_HN      = "\u0071";
Bhaskar.conjct_HM      = "\u0072";
Bhaskar.conjct_HY      = "\u0073";
Bhaskar.conjct_HL      = "\u0074";
Bhaskar.conjct_HV      = "\u0075";

//Combos
Bhaskar.combo_RU       = "\u004C";
Bhaskar.combo_RUU      = "\u004D";
Bhaskar.conjct_SHAU    = "\u00E0\u00F5";
Bhaskar.combo_HR       = "\u004E";

//Half forms of RA
Bhaskar.halffm_RI      = "\u00ED";
Bhaskar.halffm_RIM     = "\u00EC";
Bhaskar.halffm_RA_ANU  = "\u005A";

Bhaskar.vattu_YA       = "\u004B";
Bhaskar.vattu_RA_1     = "\u0041";
Bhaskar.vattu_RA_2     = "\u00FD";
Bhaskar.vattu_RA_3     = "\u00FE";
Bhaskar.vattu_LA       = "\u00A3";

//syllable breaks
Bhaskar.syllbr_KHA_1   = "\u00AF";
Bhaskar.syllbr_KHA_2   = "\u00BA";
Bhaskar.syllbr_JHA     = "\u005B";

Bhaskar.misc_DANDA     = "\u00D0";
Bhaskar.misc_DDANDA    = "\u0048";
Bhaskar.misc_OM        = "\u00FA";
Bhaskar.misc_ABBREV    = "\u00F8";
Bhaskar.nukta_1        = "\u0024";
Bhaskar.nukta_2        = "\u00B8";

//Digits
Bhaskar.digit_ZERO_1   = "\u0030";
Bhaskar.digit_ZERO_2   = "\u00AE";
Bhaskar.digit_ONE_1    = "\u0031";
Bhaskar.digit_ONE_2    = "\u0076";
Bhaskar.digit_TWO_1    = "\u0032";
Bhaskar.digit_TWO_2    = "\u0077";
Bhaskar.digit_THREE_1  = "\u0033";
Bhaskar.digit_THREE_2  = "\u0078";
Bhaskar.digit_FOUR_1   = "\u0034";
Bhaskar.digit_FOUR_2   = "\u0079";
Bhaskar.digit_FIVE_1   = "\u0035";
Bhaskar.digit_FIVE_2   = "\u007A";
Bhaskar.digit_SIX_1    = "\u0036";
Bhaskar.digit_SIX_2    = "\u007B";
Bhaskar.digit_SEVEN_1  = "\u0037";
Bhaskar.digit_SEVEN_2  = "\u007C";
Bhaskar.digit_EIGHT_1  = "\u0038";
Bhaskar.digit_EIGHT_2  = "\u007D";
Bhaskar.digit_NINE_1   = "\u0039";
Bhaskar.digit_NINE_2   = "\u007E";

//Matches ASCII
Bhaskar.EXCLAM         = "\u0021";
Bhaskar.PAREN_LEFT     = "\u0028";
Bhaskar.PAREN_RIGHT    = "\u0029";
Bhaskar.ASTERISK       = "\u002A";
Bhaskar.PLUS           = "\u002B";
Bhaskar.COMMA          = "\u002C";
Bhaskar.PERIOD         = "\u002E";
Bhaskar.SLASH          = "\u002F";
Bhaskar.SEMICOLON      = "\u003B";
Bhaskar.LESSTHAN       = "\u003C";
Bhaskar.EQUALS         = "\u003D";
Bhaskar.GREATERTHAN    = "\u003E";
Bhaskar.QUESTION       = "\u003F";
Bhaskar.LEFTSQBKT      = "\u005B";
Bhaskar.RIGHTSQBKT     = "\u005D";

//Does not match ASCII
Bhaskar.extra_QTSINGLE_1 = "\u00D2";
Bhaskar.extra_QTSINGLE_2 = "\u00D3";
Bhaskar.MULTIPLY       = "\u0026";
Bhaskar.DIVIDE         = "\u0022";
Bhaskar.PERCENT        = "\u0027";
Bhaskar.extra_COLON    = "\u00D1";

Bhaskar.misc_UNKNOWN_1 = "\u0055";
Bhaskar.misc_UNKNOWN_2 = "\u00A4";
Bhaskar.misc_UNKNOWN_3 = "\u00EF";

Bhaskar.toPadma = new Array();

Bhaskar.toPadma[Bhaskar.avagraha]    = Padma.avagraha;
Bhaskar.toPadma[Bhaskar.anusvara_1]  = Padma.anusvara;
Bhaskar.toPadma[Bhaskar.anusvara_2]  = Padma.anusvara;
Bhaskar.toPadma[Bhaskar.candrabindu] = Padma.candrabindu;
Bhaskar.toPadma[Bhaskar.virama]      = Padma.syllbreak;
//Bhaskar.toPadma[Bhaskar.visarga]     = Padma.visarga;

Bhaskar.toPadma[Bhaskar.vowel_A]    = Padma.vowel_A;
Bhaskar.toPadma[Bhaskar.vowel_AA]   = Padma.vowel_AA;
Bhaskar.toPadma[Bhaskar.vowel_I]    = Padma.vowel_I;
Bhaskar.toPadma[Bhaskar.vowel_II]   = Padma.vowel_II;
Bhaskar.toPadma[Bhaskar.vowel_U]    = Padma.vowel_U;
Bhaskar.toPadma[Bhaskar.vowel_UU]   = Padma.vowel_UU;
Bhaskar.toPadma[Bhaskar.vowel_R]    = Padma.vowel_R;
Bhaskar.toPadma[Bhaskar.vowel_RR]   = Padma.vowel_RR;
Bhaskar.toPadma[Bhaskar.vowel_EE]   = Padma.vowel_EE;
Bhaskar.toPadma[Bhaskar.vowel_AI]   = Padma.vowel_AI;
Bhaskar.toPadma[Bhaskar.vowel_OO_1] = Padma.vowel_OO;
Bhaskar.toPadma[Bhaskar.vowel_OO_2] = Padma.vowel_OO;
Bhaskar.toPadma[Bhaskar.vowel_AU_1] = Padma.vowel_AU;
Bhaskar.toPadma[Bhaskar.vowel_AU_2] = Padma.vowel_AU;

Bhaskar.toPadma[Bhaskar.consnt_KA]    = Padma.consnt_KA;
Bhaskar.toPadma[Bhaskar.consnt_KHA_1] = Padma.consnt_KHA;
Bhaskar.toPadma[Bhaskar.consnt_KHA_2] = Padma.consnt_KHA;
Bhaskar.toPadma[Bhaskar.consnt_GA]    = Padma.consnt_GA;
Bhaskar.toPadma[Bhaskar.consnt_GHA]   = Padma.consnt_GHA;
Bhaskar.toPadma[Bhaskar.consnt_NGA]   = Padma.consnt_NGA;

Bhaskar.toPadma[Bhaskar.consnt_CA]  = Padma.consnt_CA;
Bhaskar.toPadma[Bhaskar.consnt_CHA] = Padma.consnt_CHA;
Bhaskar.toPadma[Bhaskar.consnt_JA]  = Padma.consnt_JA;
Bhaskar.toPadma[Bhaskar.consnt_ZA_1]= Padma.consnt_ZA;
Bhaskar.toPadma[Bhaskar.consnt_ZA_2]= Padma.consnt_ZA;
Bhaskar.toPadma[Bhaskar.consnt_JHA] = Padma.consnt_JHA;

Bhaskar.toPadma[Bhaskar.consnt_TTA]   = Padma.consnt_TTA;
Bhaskar.toPadma[Bhaskar.consnt_TTHA]  = Padma.consnt_TTHA;
Bhaskar.toPadma[Bhaskar.consnt_DDA]   = Padma.consnt_DDA;
Bhaskar.toPadma[Bhaskar.consnt_DDDHA] = Padma.consnt_DDDHA;
Bhaskar.toPadma[Bhaskar.consnt_DDHA]  = Padma.consnt_DDHA;
Bhaskar.toPadma[Bhaskar.consnt_RHA]   = Padma.consnt_RHA;
Bhaskar.toPadma[Bhaskar.consnt_NNA]   = Padma.consnt_NNA;

Bhaskar.toPadma[Bhaskar.consnt_TA_1]  = Padma.consnt_TA;
Bhaskar.toPadma[Bhaskar.consnt_TA_2]  = Padma.consnt_TA;
Bhaskar.toPadma[Bhaskar.consnt_TA_3]  = Padma.consnt_TA;
Bhaskar.toPadma[Bhaskar.consnt_THA_1] = Padma.consnt_THA;
Bhaskar.toPadma[Bhaskar.consnt_THA_2] = Padma.consnt_THA;
Bhaskar.toPadma[Bhaskar.consnt_DA_1]  = Padma.consnt_DA;
Bhaskar.toPadma[Bhaskar.consnt_DA_2]  = Padma.consnt_DA;
Bhaskar.toPadma[Bhaskar.consnt_DHA]   = Padma.consnt_DHA;
Bhaskar.toPadma[Bhaskar.consnt_NA]    = Padma.consnt_NA;

Bhaskar.toPadma[Bhaskar.consnt_PA]    = Padma.consnt_PA;
Bhaskar.toPadma[Bhaskar.consnt_PHA]   = Padma.consnt_PHA;
Bhaskar.toPadma[Bhaskar.consnt_BA]    = Padma.consnt_BA;
Bhaskar.toPadma[Bhaskar.consnt_BHA_1] = Padma.consnt_BHA;
Bhaskar.toPadma[Bhaskar.consnt_BHA_2] = Padma.consnt_BHA;
Bhaskar.toPadma[Bhaskar.consnt_MA_1]  = Padma.consnt_MA;
Bhaskar.toPadma[Bhaskar.consnt_MA_2]  = Padma.consnt_MA;

Bhaskar.toPadma[Bhaskar.consnt_YA_1]  = Padma.consnt_YA;
Bhaskar.toPadma[Bhaskar.consnt_YA_2]  = Padma.consnt_YA;
Bhaskar.toPadma[Bhaskar.consnt_RA]    = Padma.consnt_RA;
Bhaskar.toPadma[Bhaskar.consnt_LA_1]  = Padma.consnt_LA;
Bhaskar.toPadma[Bhaskar.consnt_LA_2]  = Padma.consnt_LA;
Bhaskar.toPadma[Bhaskar.consnt_VA]    = Padma.consnt_VA;
Bhaskar.toPadma[Bhaskar.consnt_SHA_1] = Padma.consnt_SHA;
Bhaskar.toPadma[Bhaskar.consnt_SHA_2] = Padma.consnt_SHA;
Bhaskar.toPadma[Bhaskar.consnt_SSA]   = Padma.consnt_SSA;
Bhaskar.toPadma[Bhaskar.consnt_SA]    = Padma.consnt_SA;
Bhaskar.toPadma[Bhaskar.consnt_HA]    = Padma.consnt_HA;
Bhaskar.toPadma[Bhaskar.consnt_LLA]   = Padma.consnt_LLA;

//Gunintamulu
Bhaskar.toPadma[Bhaskar.vowelsn_AA]   = Padma.vowelsn_AA;
Bhaskar.toPadma[Bhaskar.vowelsn_I]    = Padma.vowelsn_I;
Bhaskar.toPadma[Bhaskar.vowelsn_II]   = Padma.vowelsn_II;
Bhaskar.toPadma[Bhaskar.vowelsn_U_1]  = Padma.vowelsn_U;
Bhaskar.toPadma[Bhaskar.vowelsn_U_2]  = Padma.vowelsn_U;
Bhaskar.toPadma[Bhaskar.vowelsn_UU_1] = Padma.vowelsn_UU;
Bhaskar.toPadma[Bhaskar.vowelsn_UU_2] = Padma.vowelsn_UU;
Bhaskar.toPadma[Bhaskar.vowelsn_R]    = Padma.vowelsn_R;
Bhaskar.toPadma[Bhaskar.vowelsn_EE_1] = Padma.vowelsn_EE;
Bhaskar.toPadma[Bhaskar.vowelsn_EE_2] = Padma.vowelsn_EE;
Bhaskar.toPadma[Bhaskar.vowelsn_AI]   = Padma.vowelsn_AI;
Bhaskar.toPadma[Bhaskar.vowelsn_OO]   = Padma.vowelsn_OO;
Bhaskar.toPadma[Bhaskar.vowelsn_AU]   = Padma.vowelsn_AU;

//Vowel + anusvara
Bhaskar.toPadma[Bhaskar.vowel_IIM]    = Padma.vowel_II + Padma.anusvara;
//matra + modifier
Bhaskar.toPadma[Bhaskar.vowelsn_IM]   = Padma.vowelsn_I + Padma.anusvara;
Bhaskar.toPadma[Bhaskar.vowelsn_U_BINDU] = Padma.vowelsn_U + Padma.candrabindu;

//Halffm
Bhaskar.toPadma[Bhaskar.halffm_KA]   = Padma.halffm_KA;
Bhaskar.toPadma[Bhaskar.halffm_KSH]  = Padma.halffm_KA + Padma.halffm_SSA;
Bhaskar.toPadma[Bhaskar.halffm_KHA]  = Padma.halffm_KHA;
Bhaskar.toPadma[Bhaskar.halffm_GA]   = Padma.halffm_GA;
Bhaskar.toPadma[Bhaskar.halffm_GHA]  = Padma.halffm_GHA;
Bhaskar.toPadma[Bhaskar.halffm_CA]   = Padma.halffm_CA;
Bhaskar.toPadma[Bhaskar.halffm_CC]   = Padma.halffm_CA + Padma.halffm_CA;
Bhaskar.toPadma[Bhaskar.halffm_JA_1] = Padma.halffm_JA;
Bhaskar.toPadma[Bhaskar.halffm_JA_2] = Padma.halffm_JA;
Bhaskar.toPadma[Bhaskar.halffm_JJ]   = Padma.halffm_JA + Padma.halffm_JA;
Bhaskar.toPadma[Bhaskar.halffm_JNY]  = Padma.halffm_JA + Padma.halffm_NYA;
Bhaskar.toPadma[Bhaskar.halffm_ZA_1] = Padma.halffm_ZA;
Bhaskar.toPadma[Bhaskar.halffm_ZA_2] = Padma.halffm_ZA;
Bhaskar.toPadma[Bhaskar.halffm_JHA]  = Padma.halffm_JHA;
Bhaskar.toPadma[Bhaskar.halffm_NYA]  = Padma.halffm_NYA;
Bhaskar.toPadma[Bhaskar.halffm_NNA]  = Padma.halffm_NNA;
Bhaskar.toPadma[Bhaskar.halffm_TA]   = Padma.halffm_TA;
Bhaskar.toPadma[Bhaskar.halffm_TT]   = Padma.halffm_TA + Padma.halffm_TA;
Bhaskar.toPadma[Bhaskar.halffm_TR]   = Padma.halffm_TA + Padma.halffm_RA;
Bhaskar.toPadma[Bhaskar.halffm_THA]  = Padma.halffm_THA;
Bhaskar.toPadma[Bhaskar.halffm_DHA]  = Padma.halffm_DHA;
Bhaskar.toPadma[Bhaskar.halffm_NA]   = Padma.halffm_NA;
Bhaskar.toPadma[Bhaskar.halffm_NN]   = Padma.halffm_NA + Padma.halffm_NA;
Bhaskar.toPadma[Bhaskar.halffm_PA]   = Padma.halffm_PA;
Bhaskar.toPadma[Bhaskar.halffm_PHA]  = Padma.halffm_PHA;
Bhaskar.toPadma[Bhaskar.halffm_BA]   = Padma.halffm_BA;
Bhaskar.toPadma[Bhaskar.halffm_BHA]  = Padma.halffm_BHA;
Bhaskar.toPadma[Bhaskar.halffm_MA]   = Padma.halffm_MA;
Bhaskar.toPadma[Bhaskar.halffm_YA]   = Padma.halffm_YA;
Bhaskar.toPadma[Bhaskar.halffm_RA]   = Padma.halffm_RA;
Bhaskar.toPadma[Bhaskar.halffm_LA]   = Padma.halffm_LA;
Bhaskar.toPadma[Bhaskar.halffm_VA]   = Padma.halffm_VA;
Bhaskar.toPadma[Bhaskar.halffm_SHA_1]= Padma.halffm_SHA;
Bhaskar.toPadma[Bhaskar.halffm_SHA_2]= Padma.halffm_SHA;
Bhaskar.toPadma[Bhaskar.halffm_SHR]  = Padma.halffm_SHA + Padma.halffm_RA;
Bhaskar.toPadma[Bhaskar.halffm_SSA]  = Padma.halffm_SSA;
Bhaskar.toPadma[Bhaskar.halffm_SA]   = Padma.halffm_SA;
Bhaskar.toPadma[Bhaskar.halffm_HA]   = Padma.halffm_HA;
Bhaskar.toPadma[Bhaskar.halffm_LLA]  = Padma.halffm_LLA;
Bhaskar.toPadma[Bhaskar.halffm_RRA]  = Padma.halffm_RRA;

//Conjuncts
Bhaskar.toPadma[Bhaskar.conjct_KK]     = Padma.consnt_KA + Padma.vattu_KA;
Bhaskar.toPadma[Bhaskar.conjct_KC]     = Padma.consnt_KA + Padma.vattu_CA;
Bhaskar.toPadma[Bhaskar.conjct_KV]     = Padma.consnt_KA + Padma.vattu_VA;
Bhaskar.toPadma[Bhaskar.conjct_KT]     = Padma.consnt_KA + Padma.vattu_TA;
Bhaskar.toPadma[Bhaskar.conjct_KSH]    = Padma.consnt_KA + Padma.vattu_SSA;
Bhaskar.toPadma[Bhaskar.conjct_KSHEE]  = Padma.consnt_KA + Padma.vattu_SSA + Padma.vowelsn_EE;
Bhaskar.toPadma[Bhaskar.conjct_KHN]    = Padma.consnt_KHA + Padma.vattu_NA;
Bhaskar.toPadma[Bhaskar.conjct_NGK]    = Padma.consnt_NGA + Padma.vattu_KA;
Bhaskar.toPadma[Bhaskar.conjct_NGKH]   = Padma.consnt_NGA + Padma.vattu_KHA;
Bhaskar.toPadma[Bhaskar.conjct_NGKT]   = Padma.consnt_NGA + Padma.vattu_KA + Padma.vattu_TA;
Bhaskar.toPadma[Bhaskar.conjct_NGG]    = Padma.consnt_NGA + Padma.vattu_GA;
Bhaskar.toPadma[Bhaskar.conjct_NGGH]   = Padma.consnt_NGA + Padma.vattu_GHA;
Bhaskar.toPadma[Bhaskar.conjct_CC]     = Padma.consnt_CA + Padma.vattu_CA;
Bhaskar.toPadma[Bhaskar.conjct_CHV]    = Padma.consnt_CHA + Padma.vattu_VA;
Bhaskar.toPadma[Bhaskar.conjct_JNY]    = Padma.consnt_JA + Padma.vattu_NYA;
Bhaskar.toPadma[Bhaskar.conjct_JHR]    = Padma.consnt_JHA + Padma.vattu_RA;
Bhaskar.toPadma[Bhaskar.conjct_NYC]    = Padma.consnt_NYA + Padma.vattu_CA;
Bhaskar.toPadma[Bhaskar.conjct_NYJ]    = Padma.consnt_NYA + Padma.vattu_JA;
Bhaskar.toPadma[Bhaskar.conjct_JJ]     = Padma.consnt_JA + Padma.vattu_JA;
Bhaskar.toPadma[Bhaskar.conjct_TTTT]   = Padma.consnt_TTA + Padma.vattu_TTA;
Bhaskar.toPadma[Bhaskar.conjct_TT_TTH] = Padma.consnt_TTA + Padma.vattu_TTHA;
Bhaskar.toPadma[Bhaskar.conjct_TTHTTH] = Padma.consnt_TTHA + Padma.vattu_TTHA;
Bhaskar.toPadma[Bhaskar.conjct_DDTT]   = Padma.consnt_DDA + Padma.vattu_TTA;
Bhaskar.toPadma[Bhaskar.conjct_DDDD]   = Padma.consnt_DDA + Padma.vattu_DDA;
Bhaskar.toPadma[Bhaskar.conjct_DD_DDH] = Padma.consnt_DDA + Padma.vattu_DDHA;
Bhaskar.toPadma[Bhaskar.conjct_DDHDDH] = Padma.consnt_DDHA + Padma.vattu_DDHA;
Bhaskar.toPadma[Bhaskar.conjct_TT]     = Padma.consnt_TA + Padma.vattu_TA;
Bhaskar.toPadma[Bhaskar.conjct_TR]     = Padma.consnt_TA + Padma.vattu_RA;
Bhaskar.toPadma[Bhaskar.conjct_TN]     = Padma.consnt_TA + Padma.vattu_NA;
Bhaskar.toPadma[Bhaskar.conjct_DG]     = Padma.consnt_DA + Padma.vattu_GA;
Bhaskar.toPadma[Bhaskar.conjct_DGH]    = Padma.consnt_DA + Padma.vattu_GHA;
Bhaskar.toPadma[Bhaskar.conjct_DD]     = Padma.consnt_DA + Padma.vattu_DA;
Bhaskar.toPadma[Bhaskar.conjct_D_DH]   = Padma.consnt_DA + Padma.vattu_DHA;
Bhaskar.toPadma[Bhaskar.conjct_DB]     = Padma.consnt_DA + Padma.vattu_BA;
Bhaskar.toPadma[Bhaskar.conjct_DBR]    = Padma.consnt_DA + Padma.vattu_BA + Padma.vattu_RA;
Bhaskar.toPadma[Bhaskar.conjct_DBH]    = Padma.consnt_DA + Padma.vattu_BHA;
Bhaskar.toPadma[Bhaskar.conjct_DM]     = Padma.consnt_DA + Padma.vattu_MA;
Bhaskar.toPadma[Bhaskar.conjct_DY]     = Padma.consnt_DA + Padma.vattu_YA;
Bhaskar.toPadma[Bhaskar.conjct_DV]     = Padma.consnt_DA + Padma.vattu_VA;
Bhaskar.toPadma[Bhaskar.conjct_NN]     = Padma.consnt_NA + Padma.vattu_NA;
Bhaskar.toPadma[Bhaskar.conjct_PT]     = Padma.consnt_PA + Padma.vattu_TA;
Bhaskar.toPadma[Bhaskar.conjct_LL]     = Padma.consnt_LA + Padma.vattu_LA;
Bhaskar.toPadma[Bhaskar.conjct_SHC]    = Padma.consnt_SHA + Padma.vattu_CA;
Bhaskar.toPadma[Bhaskar.conjct_SHR]    = Padma.consnt_SHA + Padma.vattu_RA;
Bhaskar.toPadma[Bhaskar.conjct_SHREE]  = Padma.consnt_SHA + Padma.vattu_RA + Padma.vowelsn_EE;
Bhaskar.toPadma[Bhaskar.conjct_SHV]    = Padma.consnt_SHA + Padma.vattu_VA;
Bhaskar.toPadma[Bhaskar.conjct_SSTT]   = Padma.consnt_SSA + Padma.vattu_TTA;
Bhaskar.toPadma[Bhaskar.conjct_SSTTV]  = Padma.consnt_SSA + Padma.vattu_TTA + Padma.vattu_VA;
Bhaskar.toPadma[Bhaskar.conjct_SSTTH]  = Padma.consnt_SSA + Padma.vattu_TTHA;
Bhaskar.toPadma[Bhaskar.conjct_STR]    = Padma.consnt_SA + Padma.vattu_TA + Padma.vattu_RA;
Bhaskar.toPadma[Bhaskar.conjct_HNN]    = Padma.consnt_HA + Padma.vattu_NNA;
Bhaskar.toPadma[Bhaskar.conjct_HN]     = Padma.consnt_HA + Padma.vattu_NA;
Bhaskar.toPadma[Bhaskar.conjct_HM]     = Padma.consnt_HA + Padma.vattu_MA;
Bhaskar.toPadma[Bhaskar.conjct_HY]     = Padma.consnt_HA + Padma.vattu_YA;
Bhaskar.toPadma[Bhaskar.conjct_HL]     = Padma.consnt_HA + Padma.vattu_LA;
Bhaskar.toPadma[Bhaskar.conjct_HV]     = Padma.consnt_HA + Padma.vattu_VA;

//Combos
Bhaskar.toPadma[Bhaskar.combo_RU]      = Padma.consnt_RA + Padma.vowelsn_U;
Bhaskar.toPadma[Bhaskar.combo_RUU]     = Padma.consnt_RA + Padma.vowelsn_UU;
Bhaskar.toPadma[Bhaskar.conjct_SHAU]   = Padma.consnt_SHA + Padma.vowelsn_AU;
Bhaskar.toPadma[Bhaskar.combo_HR]      = Padma.consnt_HA + Padma.vowelsn_R;

Bhaskar.toPadma[Bhaskar.halffm_RI]     = Padma.halffm_RA + Padma.vowelsn_I;
Bhaskar.toPadma[Bhaskar.halffm_RIM]    = Padma.halffm_RA + Padma.vowelsn_I + Padma.anusvara;
Bhaskar.toPadma[Bhaskar.halffm_RA_ANU] = Padma.halffm_RA + Padma.anusvara;

Bhaskar.toPadma[Bhaskar.vattu_YA]      = Padma.vattu_YA;
Bhaskar.toPadma[Bhaskar.vattu_RA_1]    = Padma.vattu_RA;
Bhaskar.toPadma[Bhaskar.vattu_RA_2]    = Padma.vattu_RA;
Bhaskar.toPadma[Bhaskar.vattu_RA_3]    = Padma.vattu_RA;
Bhaskar.toPadma[Bhaskar.vattu_LA]      = Padma.vattu_LA;

Bhaskar.toPadma[Bhaskar.syllbr_KHA_1]  = Padma.consnt_KHA + Padma.syllbreak;
Bhaskar.toPadma[Bhaskar.syllbr_KHA_2]  = Padma.consnt_KHA + Padma.syllbreak;
Bhaskar.toPadma[Bhaskar.syllbr_JHA]    = Padma.consnt_JHA + Padma.syllbreak;

Bhaskar.toPadma[Bhaskar.misc_DANDA]    = Padma.danda;
Bhaskar.toPadma[Bhaskar.misc_DDANDA]   = Padma.ddanda;
Bhaskar.toPadma[Bhaskar.misc_OM]       = Padma.om;
Bhaskar.toPadma[Bhaskar.misc_ABBREV]   = Padma.abbrev;
Bhaskar.toPadma[Bhaskar.nukta_1]       = Padma.nukta;
Bhaskar.toPadma[Bhaskar.nukta_2]       = Padma.nukta;

//Digits
Bhaskar.toPadma[Bhaskar.digit_ZERO_2]  = '0';
Bhaskar.toPadma[Bhaskar.digit_ONE_2]   = '1';
Bhaskar.toPadma[Bhaskar.digit_TWO_2]   = '2';
Bhaskar.toPadma[Bhaskar.digit_THREE_2] = '3';
Bhaskar.toPadma[Bhaskar.digit_FOUR_2]  = '4';
Bhaskar.toPadma[Bhaskar.digit_FIVE_2]  = '5';
Bhaskar.toPadma[Bhaskar.digit_SIX_2]   = '6';
Bhaskar.toPadma[Bhaskar.digit_SEVEN_2] = '7';
Bhaskar.toPadma[Bhaskar.digit_EIGHT_2] = '8';
Bhaskar.toPadma[Bhaskar.digit_NINE_2]  = '9';

//Does not match ASCII
Bhaskar.toPadma[Bhaskar.extra_QTSINGLE_1] = "'";
Bhaskar.toPadma[Bhaskar.extra_QTSINGLE_2] = "'";
Bhaskar.toPadma[Bhaskar.MULTIPLY]       = "\u00D7"; //Unicode for multiplication symbol
Bhaskar.toPadma[Bhaskar.DIVIDE]         = "\u00F7"; //Unicode for division symbol
Bhaskar.toPadma[Bhaskar.PERCENT]        = "%"; //Unicode for division symbol
Bhaskar.toPadma[Bhaskar.extra_COLON]    = ":";

Bhaskar.prefixList = new Array();
Bhaskar.prefixList[Bhaskar.vowelsn_I]  = true;
Bhaskar.prefixList[Bhaskar.vowelsn_IM] = true;
Bhaskar.prefixList[Bhaskar.nukta_1]    = true;
Bhaskar.prefixList[Bhaskar.halffm_RI]  = true;
Bhaskar.prefixList[Bhaskar.halffm_RIM] = true;

Bhaskar.suffixList = new Array();
Bhaskar.suffixList[Bhaskar.halffm_RA]     = true;
Bhaskar.suffixList[Bhaskar.halffm_RA_ANU] = true;

Bhaskar.redundantList = new Array();
Bhaskar.redundantList[Bhaskar.misc_UNKNOWN_1] = true;
Bhaskar.redundantList[Bhaskar.misc_UNKNOWN_2] = true;
Bhaskar.redundantList[Bhaskar.misc_UNKNOWN_3] = true;

Bhaskar.overloadList = new Array();
Bhaskar.overloadList[Bhaskar.vowel_A]     = true;
Bhaskar.overloadList[Bhaskar.vowel_AA]    = true;
Bhaskar.overloadList[Bhaskar.vowel_EE]    = true;
Bhaskar.overloadList[Bhaskar.vowel_I]     = true;
Bhaskar.overloadList[Bhaskar.consnt_DDA]  = true;
Bhaskar.overloadList[Bhaskar.consnt_DDHA] = true;
Bhaskar.overloadList[Bhaskar.vowelsn_AA]  = true;
Bhaskar.overloadList[Bhaskar.halffm_KSH]  = true;
Bhaskar.overloadList[Bhaskar.halffm_KHA]  = true;
Bhaskar.overloadList[Bhaskar.halffm_GHA]  = true;
Bhaskar.overloadList[Bhaskar.halffm_CC]   = true;
Bhaskar.overloadList[Bhaskar.halffm_JJ]   = true;
Bhaskar.overloadList[Bhaskar.halffm_JNY]  = true;
Bhaskar.overloadList[Bhaskar.halffm_ZA_1] = true;
Bhaskar.overloadList[Bhaskar.halffm_ZA_2] = true;
Bhaskar.overloadList[Bhaskar.halffm_JHA]  = true;
Bhaskar.overloadList[Bhaskar.halffm_NNA]  = true;
Bhaskar.overloadList[Bhaskar.halffm_TA]   = true;
Bhaskar.overloadList[Bhaskar.halffm_TT]   = true;
Bhaskar.overloadList[Bhaskar.halffm_TR]   = true;
Bhaskar.overloadList[Bhaskar.halffm_THA]  = true;
Bhaskar.overloadList[Bhaskar.halffm_NN]   = true;
Bhaskar.overloadList[Bhaskar.halffm_BHA]  = true;
Bhaskar.overloadList[Bhaskar.halffm_MA]   = true;
Bhaskar.overloadList[Bhaskar.halffm_YA]   = true;
Bhaskar.overloadList[Bhaskar.halffm_SHA_2]= true;
Bhaskar.overloadList[Bhaskar.halffm_SHR]  = true;
