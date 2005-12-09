// $Id: BEJA.js,v 1.2 2005/12/09 15:04:44 vnagarjuna Exp $ -->

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

//The font files used by Dainik Bhaskar (Bhaskar), Dainik Jagran (Jagran),
//Amar Ujala (AU) and Rajasthan Patrika (ePatrika), Punjab Kesari (Chanakya)
// are identical except for minor differences.

function BEJA()
{
}

//Generate the slightly different lookup tables
BEJA.initialize = function()
{
    for (var name in BEJA.toPadma)
        BEJA.toPadma_BE[name] = BEJA.toPadma_JA[name] = BEJA.toPadma[name];
    for (name in BEJA.overloadList)
        BEJA.overloadList_JA[name] = BEJA.overloadList[name];
}

BEJA.maxLookupLen = 3;

BEJA.isPrefixSymbol = function (str)
{
    return BEJA.prefixList[str] != null;
}

BEJA.isSuffixSymbol = function (str)
{
    return BEJA.suffixList[str] != null;
}

BEJA.isOverloaded = function (str)
{
    return BEJA.overloadList[str] != null;
}

BEJA.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if ((sign1 == Padma.vowelsn_EE && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_EE))
    return Padma.vowelsn_OO;  //Y
    if ((sign1 == Padma.vowelsn_CDR_E && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_CDR_E))
    return Padma.vowelsn_CDR_O;  //Y
    if ((sign1 == Padma.vowelsn_AI && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_AI))
        return Padma.vowelsn_AU;
    return sign1 + sign2;    
}

BEJA.isRedundant = function (str)
{
    return BEJA.redundantList[str] != null;
}

//TODO: 52, B2, DE, EE, 97 (2014), 9B (203A), 9C (153), 9D
//_JA: 7C
//Common stuff
//Specials
BEJA.avagraha       = "\u00F9";
BEJA.anusvara_1     = "\u00A2";
BEJA.anusvara_2     = "\u00B4";
BEJA.candrabindu    = "\u00A1";
BEJA.virama         = "\u00F7";
//BEJA.visarga        = "\u00D1";

//Vowels
BEJA.vowel_A        = "\u00A5";
BEJA.vowel_AA       = "\u00A5\u00E6";
BEJA.vowel_I        = "\u00A7";
BEJA.vowel_II       = "\u00A7\u00FC";
BEJA.vowel_U        = "\u00A9";
BEJA.vowel_UU       = "\u00AA";
BEJA.vowel_R        = "\u00AB";
BEJA.vowel_RR       = "\u00AC";
BEJA.vowel_CDR_E    = "\u00B0\u00F2";
BEJA.vowel_EE       = "\u00B0";
BEJA.vowel_AI       = "\u00B0\u00F0";
BEJA.vowel_CDR_O    = "\u00A5\u00E6\u00F2";
BEJA.vowel_OO_1     = "\u00A5\u00E6\u00F0";
BEJA.vowel_OO_2     = "\u00A5\u00F4";
BEJA.vowel_AU_1     = "\u00A5\u00E6\u00F1";
BEJA.vowel_AU_2     = "\u00A5\u00F5";

//Consonants
BEJA.consnt_KA      = "\u00B7";
BEJA.consnt_KHA_1   = "\u0081\u00E6";
BEJA.consnt_KHA_2   = "\u00B9";
BEJA.consnt_GA_1    = "\u201A\u00E6";
BEJA.consnt_GA_2    = "\u00BB";
BEJA.consnt_GHA     = "\u0192\u00E6";
BEJA.consnt_NGA     = "\u00BE";

BEJA.consnt_CA_1    = "\u2018\u00E6";
BEJA.consnt_CA_2    = "\u00BF";
BEJA.consnt_CHA     = "\u00C0";
BEJA.consnt_JA      = "\u00C1";
BEJA.consnt_ZA_1    = "\u2022\u00E6";
BEJA.consnt_ZA_2    = "\u00CA\u00E6";
BEJA.consnt_JHA     = "\u00DB\u00E6";

BEJA.consnt_TTA     = "\u00C5";
BEJA.consnt_TTHA    = "\u00C6";
BEJA.consnt_DDA     = "\u00C7";
BEJA.consnt_DDDHA   = "\u00C7\u00B8";
BEJA.consnt_DDHA    = "\u00C9";
BEJA.consnt_RHA     = "\u00C9\u00B8";
BEJA.consnt_NNA     = "\u2021\u00E6";

BEJA.consnt_TA_1    = "\u02C6\u00E6";
BEJA.consnt_TA_2    = "\u00CC";
BEJA.consnt_TA_3    = "\u00E6";
BEJA.consnt_THA_1   = "\u2030\u00E6";
BEJA.consnt_THA_2   = "\u00CD";
BEJA.consnt_DA_1    = "\u00BC";
BEJA.consnt_DA_2    = "\u00CE";
BEJA.consnt_DHA_1   = "\u0160\u00E6";
BEJA.consnt_DHA_2   = "\u00CF";
BEJA.consnt_NA      = "\u00D9";

BEJA.consnt_PA_1    = "\u00C2";
BEJA.consnt_PA_2    = "\u0152\u00E6";
BEJA.consnt_PHA     = "\u00C8";
BEJA.consnt_BA      = "\u00D5";
BEJA.consnt_BHA_1   = "\u008F\u00E6";
BEJA.consnt_BHA_2   = "\u00D6";
BEJA.consnt_MA_1    = "\u0090\u00E6";
BEJA.consnt_MA_2    = "\u00D7";

BEJA.consnt_YA_1    = "\u00C4\u00E6";
BEJA.consnt_YA_2    = "\u00D8";
BEJA.consnt_RA      = "\u00DA";
BEJA.consnt_LA_1    = "\u00B6";
BEJA.consnt_LA_2    = "\u00CB\u00E6";
BEJA.consnt_LA_3    = "\u00DC";
BEJA.consnt_VA      = "\u00DF";
BEJA.consnt_SHA_1   = "\u00E0\u00E6";
BEJA.consnt_SHA_2   = "\u006F";
BEJA.consnt_SSA_1   = "\u0063\u00E6";
BEJA.consnt_SSA_2   = "\u00E1";
BEJA.consnt_SA      = "\u00E2";
BEJA.consnt_HA      = "\u00E3";
BEJA.consnt_LLA     = "\u00DD";

//Gunintamulu
BEJA.vowelsn_AA     = "\u00E6";
BEJA.vowelsn_I      = "\u00E7";
BEJA.vowelsn_II     = "\u00E8";
BEJA.vowelsn_U_1    = "\u00E4";
BEJA.vowelsn_U_2    = "\u00E9";
BEJA.vowelsn_UU_1   = "\u00E5";
BEJA.vowelsn_UU_2   = "\u00EA";
BEJA.vowelsn_R      = "\u00EB";
BEJA.vowelsn_CDR_E  = "\u00F2";
BEJA.vowelsn_EE_1   = "\u00F0";
BEJA.vowelsn_EE_2   = "\u00D4";
BEJA.vowelsn_AI     = "\u00F1";
BEJA.vowelsn_OO     = "\u00F4";
BEJA.vowelsn_AU     = "\u00F5";

//Vowel + anusvara
BEJA.vowel_IIM      = "\u00A7\u005A";
//Matra + modifier
BEJA.vowelsn_IM     = "\u00A8";
BEJA.vowelsn_U_BINDU = "\u0161";

//Half Forms
BEJA.halffm_KA      = "\u20AC";
BEJA.halffm_KSH     = "\u00FF";
BEJA.halffm_KHA     = "\u0081";
BEJA.halffm_GA      = "\u201A";
BEJA.halffm_GHA     = "\u0192";
BEJA.halffm_CA      = "\u2018";
BEJA.halffm_CC      = "\u201C";
BEJA.halffm_JA_1    = "\u2026";
BEJA.halffm_JA_2    = "\u2019";
BEJA.halffm_JJ      = "\u201D";
BEJA.halffm_JNY     = "\u2122";
BEJA.halffm_ZA_1    = "\u2022";
BEJA.halffm_ZA_2    = "\u00CA";
BEJA.halffm_JHA     = "\u00DB";
BEJA.halffm_NYA     = "\u2020";
BEJA.halffm_NNA     = "\u2021";
BEJA.halffm_TA      = "\u02C6";
BEJA.halffm_TT      = "\u017E";
BEJA.halffm_TR      = "\u02DC";
BEJA.halffm_THA     = "\u2030";
BEJA.halffm_DHA     = "\u0160";
BEJA.halffm_NA      = "\u2039";
BEJA.halffm_NN      = "\u00F3";
BEJA.halffm_PA      = "\u0152";
BEJA.halffm_PHA     = "\u008D";
BEJA.halffm_BA      = "\u017D";
BEJA.halffm_BHA     = "\u008F";
BEJA.halffm_MA      = "\u0090";
BEJA.halffm_YA      = "\u00C4";
BEJA.halffm_RA      = "\u00FC";
BEJA.halffm_LA      = "\u00CB";
BEJA.halffm_VA      = "\u00C3";
BEJA.halffm_SHA_1   = "\u00B3";
BEJA.halffm_SHA_2   = "\u00E0";
BEJA.halffm_SHR     = "\u0178";
BEJA.halffm_SSA     = "\u0063";
BEJA.halffm_SA      = "\u0053";
BEJA.halffm_HA      = "\u00B1";
BEJA.halffm_LLA     = "\u00FB";
BEJA.halffm_RRA     = "\u003A";

//Conjuncts
BEJA.conjct_KK      = "\u0050";
BEJA.conjct_KC      = "\u0042";
BEJA.conjct_KV      = "\u0060";
BEJA.conjct_KT      = "\u0051";
BEJA.conjct_KSH     = "\u00FF\u00E6";
BEJA.conjct_KSHEE   = "\u00FF\u00F4";
BEJA.conjct_KHN     = "\u00AF";
BEJA.conjct_KHR     = "\u00BA";
BEJA.conjct_NGK     = "\u0056";
BEJA.conjct_NGKH    = "\u0057";
BEJA.conjct_NGKT    = "\u2013";
BEJA.conjct_NGG     = "\u0058";
BEJA.conjct_NGGH    = "\u0059";
BEJA.conjct_CC      = "\u201C\u00E6";
BEJA.conjct_CHV     = "\u004A";
BEJA.conjct_JNY     = "\u2122\u00E6";
BEJA.conjct_JHR     = "\u005C";
BEJA.conjct_NYC     = "\u0040";
BEJA.conjct_NYJ     = "\u0054";
BEJA.conjct_JJ      = "\u201D\u00E6";
BEJA.conjct_TTTT    = "\u005E";
BEJA.conjct_TT_TTH  = "\u005F";
BEJA.conjct_TTHTTH  = "\u006E";
BEJA.conjct_DDTT    = "\u00BD";
BEJA.conjct_DDDD    = "\u0061";
BEJA.conjct_DD_DDH  = "\u0062";
BEJA.conjct_DDHDDH  = "\u0049";
BEJA.conjct_TT      = "\u017E\u00E6";
BEJA.conjct_TR_1    = "\u0047";
BEJA.conjct_TR_2    = "\u02DC\u00E6";
BEJA.conjct_TN      = "\u0025";
BEJA.conjct_DG      = "\u0065";
BEJA.conjct_DGH     = "\u0066";
BEJA.conjct_DD      = "\u0067";
BEJA.conjct_D_DH    = "\u0068";
BEJA.conjct_DB      = "\u0069";
BEJA.conjct_DBR     = "\u00B5";
BEJA.conjct_DBH     = "\u006A";
BEJA.conjct_DM      = "\u006B";
BEJA.conjct_DY      = "\u006C";
BEJA.conjct_DV      = "\u006D";
BEJA.conjct_NN      = "\u00F3\u00E6";
BEJA.conjct_PT      = "\u0023";
BEJA.conjct_LL      = "\u201E";
BEJA.conjct_SHC     = "\u0070";
BEJA.conjct_SHR     = "\u0178\u00E6";
BEJA.conjct_SHREE   = "\u0178\u00F4";
BEJA.conjct_SHV     = "\u0045";
BEJA.conjct_SSTT    = "\u0043";
BEJA.conjct_SSTTV   = "\u00A6";
BEJA.conjct_SSTTH   = "\u0044";
BEJA.conjct_STR     = "\u0064";
BEJA.conjct_SN      = "\u0046";
BEJA.conjct_HNN     = "\u00F6";
BEJA.conjct_HN      = "\u0071";
BEJA.conjct_HM      = "\u0072";
BEJA.conjct_HY      = "\u0073";
BEJA.conjct_HR      = "\u004F";
BEJA.conjct_HL      = "\u0074";
BEJA.conjct_HV      = "\u0075";

//Combos
BEJA.combo_RU       = "\u004C";
BEJA.combo_RUU      = "\u004D";
BEJA.conjct_SHAU    = "\u00E0\u00F5";
BEJA.combo_HR       = "\u004E";

//Half forms of RA
BEJA.halffm_RI      = "\u00ED";
BEJA.halffm_RIM     = "\u00EC";
BEJA.halffm_RA_ANU  = "\u005A";

BEJA.vattu_YA       = "\u004B";
BEJA.vattu_RA_1     = "\u0041";
BEJA.vattu_RA_2     = "\u00FD";
BEJA.vattu_RA_3     = "\u00FE";
BEJA.vattu_LA       = "\u00A3";

BEJA.misc_DANDA     = "\u00D0";
BEJA.misc_DDANDA    = "\u0048";
BEJA.misc_OM        = "\u00FA";
BEJA.misc_ABBREV    = "\u00F8";
BEJA.nukta_1        = "\u0024";
BEJA.nukta_2        = "\u00B8";

//Digits
BEJA.digit_ZERO     = "\u0030";
BEJA.digit_ZERO_ext = "\u00AE";
BEJA.digit_ONE      = "\u0031";
BEJA.digit_TWO      = "\u0032";
BEJA.digit_THREE    = "\u0033";
BEJA.digit_FOUR     = "\u0034";
BEJA.digit_FIVE     = "\u0035";
BEJA.digit_SIX      = "\u0036";
BEJA.digit_SEVEN    = "\u0037";
BEJA.digit_EIGHT    = "\u0038";
BEJA.digit_NINE     = "\u0039";

//Matches ASCII
BEJA.EXCLAM         = "\u0021";
BEJA.PAREN_LEFT     = "\u0028";
BEJA.PAREN_RIGHT    = "\u0029";
BEJA.ASTERISK       = "\u002A";
BEJA.PLUS           = "\u002B";
BEJA.COMMA          = "\u002C";
BEJA.PERIOD         = "\u002E";
BEJA.SLASH          = "\u002F";
BEJA.SEMICOLON      = "\u003B";
BEJA.LESSTHAN       = "\u003C";
BEJA.EQUALS         = "\u003D";
BEJA.GREATERTHAN    = "\u003E";
BEJA.QUESTION       = "\u003F";
BEJA.LEFTSQBKT      = "\u005B";
BEJA.RIGHTSQBKT     = "\u005D";

//Does not match ASCII
BEJA.extra_QTSINGLE_1 = "\u00D2";
BEJA.extra_QTSINGLE_2 = "\u00D3";
BEJA.MULTIPLY       = "\u0026";
BEJA.PERCENT        = "\u0027";
BEJA.extra_COLON    = "\u00D1";

BEJA.misc_UNKNOWN_1 = "\u0055";
BEJA.misc_UNKNOWN_2 = "\u00A4";
BEJA.misc_UNKNOWN_3 = "\u00EF";

//Specific to Bhaskar and ePatrika fonts
BEJA.DIVIDE_BE      = "\u0022";
BEJA.digit_ONE_BE   = "\u0076";
BEJA.digit_TWO_BE   = "\u0077";
BEJA.digit_THREE_BE = "\u0078";
BEJA.digit_FOUR_BE  = "\u0079";
BEJA.digit_FIVE_BE  = "\u007A";
BEJA.digit_SIX_BE   = "\u007B";
BEJA.digit_SEVEN_BE = "\u007C";
BEJA.digit_EIGHT_BE = "\u007D";
BEJA.digit_NINE_BE  = "\u007E";

//Specific to Jagran and AU fonts
BEJA.SWASTIKA_JA    = "\u0022"; //TODO
BEJA.consnt_KHA_JA  = "\u0077\u00E6";
BEJA.consnt_BA_JA   = "\u0079\u00E6";
BEJA.consnt_BHA_JA  = "\u007A\u00E6";
BEJA.consnt_MA_JA   = "\u007B\u00E6";
BEJA.conjct_TT_JA   = "\u007D\u00E6";
BEJA.halffm_KA_JA   = "\u0076";
BEJA.halffm_KHA_JA  = "\u0077";
BEJA.halffm_PHA_JA  = "\u0078";
BEJA.halffm_BA_JA   = "\u0079";
BEJA.halffm_BHA_JA  = "\u007A";
BEJA.halffm_MA_JA   = "\u007B";
BEJA.halffm_TT_JA   = "\u007D";
BEJA.vowelsn_EE_JA  = "\u007E";

BEJA.toPadma = new Object();

BEJA.toPadma[BEJA.avagraha]    = Padma.avagraha;
BEJA.toPadma[BEJA.anusvara_1]  = Padma.anusvara;
BEJA.toPadma[BEJA.anusvara_2]  = Padma.anusvara;
BEJA.toPadma[BEJA.candrabindu] = Padma.candrabindu;
BEJA.toPadma[BEJA.virama]      = Padma.syllbreak;
//BEJA.toPadma[BEJA.visarga]     = Padma.visarga;

BEJA.toPadma[BEJA.vowel_A]    = Padma.vowel_A;
BEJA.toPadma[BEJA.vowel_AA]   = Padma.vowel_AA;
BEJA.toPadma[BEJA.vowel_I]    = Padma.vowel_I;
BEJA.toPadma[BEJA.vowel_II]   = Padma.vowel_II;
BEJA.toPadma[BEJA.vowel_U]    = Padma.vowel_U;
BEJA.toPadma[BEJA.vowel_UU]   = Padma.vowel_UU;
BEJA.toPadma[BEJA.vowel_R]    = Padma.vowel_R;
BEJA.toPadma[BEJA.vowel_RR]   = Padma.vowel_RR;
BEJA.toPadma[BEJA.vowel_CDR_E] = Padma.vowel_CDR_E;
BEJA.toPadma[BEJA.vowel_EE]   = Padma.vowel_EE;
BEJA.toPadma[BEJA.vowel_AI]   = Padma.vowel_AI;
BEJA.toPadma[BEJA.vowel_CDR_O] = Padma.vowel_CDR_O;
BEJA.toPadma[BEJA.vowel_OO_1] = Padma.vowel_OO;
BEJA.toPadma[BEJA.vowel_OO_2] = Padma.vowel_OO;
BEJA.toPadma[BEJA.vowel_AU_1] = Padma.vowel_AU;
BEJA.toPadma[BEJA.vowel_AU_2] = Padma.vowel_AU;

BEJA.toPadma[BEJA.consnt_KA]    = Padma.consnt_KA;
BEJA.toPadma[BEJA.consnt_KHA_1] = Padma.consnt_KHA;
BEJA.toPadma[BEJA.consnt_KHA_2] = Padma.consnt_KHA;
BEJA.toPadma[BEJA.consnt_GA_1]  = Padma.consnt_GA;
BEJA.toPadma[BEJA.consnt_GA_2]  = Padma.consnt_GA;
BEJA.toPadma[BEJA.consnt_GHA]   = Padma.consnt_GHA;
BEJA.toPadma[BEJA.consnt_NGA]   = Padma.consnt_NGA;

BEJA.toPadma[BEJA.consnt_CA_1]  = Padma.consnt_CA;
BEJA.toPadma[BEJA.consnt_CA_2]  = Padma.consnt_CA;
BEJA.toPadma[BEJA.consnt_CHA]   = Padma.consnt_CHA;
BEJA.toPadma[BEJA.consnt_JA]    = Padma.consnt_JA;
BEJA.toPadma[BEJA.consnt_ZA_1]  = Padma.consnt_ZA;
BEJA.toPadma[BEJA.consnt_ZA_2]  = Padma.consnt_ZA;
BEJA.toPadma[BEJA.consnt_JHA]   = Padma.consnt_JHA;

BEJA.toPadma[BEJA.consnt_TTA]   = Padma.consnt_TTA;
BEJA.toPadma[BEJA.consnt_TTHA]  = Padma.consnt_TTHA;
BEJA.toPadma[BEJA.consnt_DDA]   = Padma.consnt_DDA;
BEJA.toPadma[BEJA.consnt_DDDHA] = Padma.consnt_DDDHA;
BEJA.toPadma[BEJA.consnt_DDHA]  = Padma.consnt_DDHA;
BEJA.toPadma[BEJA.consnt_RHA]   = Padma.consnt_RHA;
BEJA.toPadma[BEJA.consnt_NNA]   = Padma.consnt_NNA;

BEJA.toPadma[BEJA.consnt_TA_1]  = Padma.consnt_TA;
BEJA.toPadma[BEJA.consnt_TA_2]  = Padma.consnt_TA;
BEJA.toPadma[BEJA.consnt_TA_3]  = Padma.consnt_TA;
BEJA.toPadma[BEJA.consnt_THA_1] = Padma.consnt_THA;
BEJA.toPadma[BEJA.consnt_THA_2] = Padma.consnt_THA;
BEJA.toPadma[BEJA.consnt_DA_1]  = Padma.consnt_DA;
BEJA.toPadma[BEJA.consnt_DA_2]  = Padma.consnt_DA;
BEJA.toPadma[BEJA.consnt_DHA_1] = Padma.consnt_DHA;
BEJA.toPadma[BEJA.consnt_DHA_2] = Padma.consnt_DHA;
BEJA.toPadma[BEJA.consnt_NA]    = Padma.consnt_NA;

BEJA.toPadma[BEJA.consnt_PA_1]  = Padma.consnt_PA;
BEJA.toPadma[BEJA.consnt_PA_2]  = Padma.consnt_PA;
BEJA.toPadma[BEJA.consnt_PHA]   = Padma.consnt_PHA;
BEJA.toPadma[BEJA.consnt_BA]    = Padma.consnt_BA;
BEJA.toPadma[BEJA.consnt_BHA_1] = Padma.consnt_BHA;
BEJA.toPadma[BEJA.consnt_BHA_2] = Padma.consnt_BHA;
BEJA.toPadma[BEJA.consnt_MA_1]  = Padma.consnt_MA;
BEJA.toPadma[BEJA.consnt_MA_2]  = Padma.consnt_MA;

BEJA.toPadma[BEJA.consnt_YA_1]  = Padma.consnt_YA;
BEJA.toPadma[BEJA.consnt_YA_2]  = Padma.consnt_YA;
BEJA.toPadma[BEJA.consnt_RA]    = Padma.consnt_RA;
BEJA.toPadma[BEJA.consnt_LA_1]  = Padma.consnt_LA;
BEJA.toPadma[BEJA.consnt_LA_2]  = Padma.consnt_LA;
BEJA.toPadma[BEJA.consnt_LA_3]  = Padma.consnt_LA;
BEJA.toPadma[BEJA.consnt_VA]    = Padma.consnt_VA;
BEJA.toPadma[BEJA.consnt_SHA_1] = Padma.consnt_SHA;
BEJA.toPadma[BEJA.consnt_SHA_2] = Padma.consnt_SHA;
BEJA.toPadma[BEJA.consnt_SSA_1] = Padma.consnt_SSA;
BEJA.toPadma[BEJA.consnt_SSA_2] = Padma.consnt_SSA;
BEJA.toPadma[BEJA.consnt_SA]    = Padma.consnt_SA;
BEJA.toPadma[BEJA.consnt_HA]    = Padma.consnt_HA;
BEJA.toPadma[BEJA.consnt_LLA]   = Padma.consnt_LLA;

//Gunintamulu
BEJA.toPadma[BEJA.vowelsn_AA]   = Padma.vowelsn_AA;
BEJA.toPadma[BEJA.vowelsn_I]    = Padma.vowelsn_I;
BEJA.toPadma[BEJA.vowelsn_II]   = Padma.vowelsn_II;
BEJA.toPadma[BEJA.vowelsn_U_1]  = Padma.vowelsn_U;
BEJA.toPadma[BEJA.vowelsn_U_2]  = Padma.vowelsn_U;
BEJA.toPadma[BEJA.vowelsn_UU_1] = Padma.vowelsn_UU;
BEJA.toPadma[BEJA.vowelsn_UU_2] = Padma.vowelsn_UU;
BEJA.toPadma[BEJA.vowelsn_R]    = Padma.vowelsn_R;
BEJA.toPadma[BEJA.vowelsn_CDR_E]= Padma.vowelsn_CDR_E;
BEJA.toPadma[BEJA.vowelsn_EE_1] = Padma.vowelsn_EE;
BEJA.toPadma[BEJA.vowelsn_EE_2] = Padma.vowelsn_EE;
BEJA.toPadma[BEJA.vowelsn_AI]   = Padma.vowelsn_AI;
BEJA.toPadma[BEJA.vowelsn_OO]   = Padma.vowelsn_OO;
BEJA.toPadma[BEJA.vowelsn_AU]   = Padma.vowelsn_AU;

//Vowel + anusvara
BEJA.toPadma[BEJA.vowel_IIM]    = Padma.vowel_II + Padma.anusvara;
//matra + modifier
BEJA.toPadma[BEJA.vowelsn_IM]   = Padma.vowelsn_I + Padma.anusvara;
BEJA.toPadma[BEJA.vowelsn_U_BINDU] = Padma.vowelsn_U + Padma.candrabindu;

//Halffm
BEJA.toPadma[BEJA.halffm_KA]   = Padma.halffm_KA;
BEJA.toPadma[BEJA.halffm_KSH]  = Padma.halffm_KA + Padma.halffm_SSA;
BEJA.toPadma[BEJA.halffm_KHA]  = Padma.halffm_KHA;
BEJA.toPadma[BEJA.halffm_GA]   = Padma.halffm_GA;
BEJA.toPadma[BEJA.halffm_GHA]  = Padma.halffm_GHA;
BEJA.toPadma[BEJA.halffm_CA]   = Padma.halffm_CA;
BEJA.toPadma[BEJA.halffm_CC]   = Padma.halffm_CA + Padma.halffm_CA;
BEJA.toPadma[BEJA.halffm_JA_1] = Padma.halffm_JA;
BEJA.toPadma[BEJA.halffm_JA_2] = Padma.halffm_JA;
BEJA.toPadma[BEJA.halffm_JJ]   = Padma.halffm_JA + Padma.halffm_JA;
BEJA.toPadma[BEJA.halffm_JNY]  = Padma.halffm_JA + Padma.halffm_NYA;
BEJA.toPadma[BEJA.halffm_ZA_1] = Padma.halffm_ZA;
BEJA.toPadma[BEJA.halffm_ZA_2] = Padma.halffm_ZA;
BEJA.toPadma[BEJA.halffm_JHA]  = Padma.halffm_JHA;
BEJA.toPadma[BEJA.halffm_NYA]  = Padma.halffm_NYA;
BEJA.toPadma[BEJA.halffm_NNA]  = Padma.halffm_NNA;
BEJA.toPadma[BEJA.halffm_TA]   = Padma.halffm_TA;
BEJA.toPadma[BEJA.halffm_TT]   = Padma.halffm_TA + Padma.halffm_TA;
BEJA.toPadma[BEJA.halffm_TR]   = Padma.halffm_TA + Padma.halffm_RA;
BEJA.toPadma[BEJA.halffm_THA]  = Padma.halffm_THA;
BEJA.toPadma[BEJA.halffm_DHA]  = Padma.halffm_DHA;
BEJA.toPadma[BEJA.halffm_NA]   = Padma.halffm_NA;
BEJA.toPadma[BEJA.halffm_NN]   = Padma.halffm_NA + Padma.halffm_NA;
BEJA.toPadma[BEJA.halffm_PA]   = Padma.halffm_PA;
BEJA.toPadma[BEJA.halffm_PHA]  = Padma.halffm_PHA;
BEJA.toPadma[BEJA.halffm_BA]   = Padma.halffm_BA;
BEJA.toPadma[BEJA.halffm_BHA]  = Padma.halffm_BHA;
BEJA.toPadma[BEJA.halffm_MA]   = Padma.halffm_MA;
BEJA.toPadma[BEJA.halffm_YA]   = Padma.halffm_YA;
BEJA.toPadma[BEJA.halffm_RA]   = Padma.halffm_RA;
BEJA.toPadma[BEJA.halffm_LA]   = Padma.halffm_LA;
BEJA.toPadma[BEJA.halffm_VA]   = Padma.halffm_VA;
BEJA.toPadma[BEJA.halffm_SHA_1]= Padma.halffm_SHA;
BEJA.toPadma[BEJA.halffm_SHA_2]= Padma.halffm_SHA;
BEJA.toPadma[BEJA.halffm_SHR]  = Padma.halffm_SHA + Padma.halffm_RA;
BEJA.toPadma[BEJA.halffm_SSA]  = Padma.halffm_SSA;
BEJA.toPadma[BEJA.halffm_SA]   = Padma.halffm_SA;
BEJA.toPadma[BEJA.halffm_HA]   = Padma.halffm_HA;
BEJA.toPadma[BEJA.halffm_LLA]  = Padma.halffm_LLA;
BEJA.toPadma[BEJA.halffm_RRA]  = Padma.halffm_RRA;

//Conjuncts
BEJA.toPadma[BEJA.conjct_KK]     = Padma.consnt_KA + Padma.vattu_KA;
BEJA.toPadma[BEJA.conjct_KC]     = Padma.consnt_KA + Padma.vattu_CA;
BEJA.toPadma[BEJA.conjct_KV]     = Padma.consnt_KA + Padma.vattu_VA;
BEJA.toPadma[BEJA.conjct_KT]     = Padma.consnt_KA + Padma.vattu_TA;
BEJA.toPadma[BEJA.conjct_KSH]    = Padma.consnt_KA + Padma.vattu_SSA;
BEJA.toPadma[BEJA.conjct_KSHEE]  = Padma.consnt_KA + Padma.vattu_SSA + Padma.vowelsn_EE;
BEJA.toPadma[BEJA.conjct_KHN]    = Padma.consnt_KHA + Padma.vattu_NA;
BEJA.toPadma[BEJA.conjct_KHR]    = Padma.consnt_KHA + Padma.vattu_RA;
BEJA.toPadma[BEJA.conjct_NGK]    = Padma.consnt_NGA + Padma.vattu_KA;
BEJA.toPadma[BEJA.conjct_NGKH]   = Padma.consnt_NGA + Padma.vattu_KHA;
BEJA.toPadma[BEJA.conjct_NGKT]   = Padma.consnt_NGA + Padma.vattu_KA + Padma.vattu_TA;
BEJA.toPadma[BEJA.conjct_NGG]    = Padma.consnt_NGA + Padma.vattu_GA;
BEJA.toPadma[BEJA.conjct_NGGH]   = Padma.consnt_NGA + Padma.vattu_GHA;
BEJA.toPadma[BEJA.conjct_CC]     = Padma.consnt_CA + Padma.vattu_CA;
BEJA.toPadma[BEJA.conjct_CHV]    = Padma.consnt_CHA + Padma.vattu_VA;
BEJA.toPadma[BEJA.conjct_JNY]    = Padma.consnt_JA + Padma.vattu_NYA;
BEJA.toPadma[BEJA.conjct_JHR]    = Padma.consnt_JHA + Padma.vattu_RA;
BEJA.toPadma[BEJA.conjct_NYC]    = Padma.consnt_NYA + Padma.vattu_CA;
BEJA.toPadma[BEJA.conjct_NYJ]    = Padma.consnt_NYA + Padma.vattu_JA;
BEJA.toPadma[BEJA.conjct_JJ]     = Padma.consnt_JA + Padma.vattu_JA;
BEJA.toPadma[BEJA.conjct_TTTT]   = Padma.consnt_TTA + Padma.vattu_TTA;
BEJA.toPadma[BEJA.conjct_TT_TTH] = Padma.consnt_TTA + Padma.vattu_TTHA;
BEJA.toPadma[BEJA.conjct_TTHTTH] = Padma.consnt_TTHA + Padma.vattu_TTHA;
BEJA.toPadma[BEJA.conjct_DDTT]   = Padma.consnt_DDA + Padma.vattu_TTA;
BEJA.toPadma[BEJA.conjct_DDDD]   = Padma.consnt_DDA + Padma.vattu_DDA;
BEJA.toPadma[BEJA.conjct_DD_DDH] = Padma.consnt_DDA + Padma.vattu_DDHA;
BEJA.toPadma[BEJA.conjct_DDHDDH] = Padma.consnt_DDHA + Padma.vattu_DDHA;
BEJA.toPadma[BEJA.conjct_TT]     = Padma.consnt_TA + Padma.vattu_TA;
BEJA.toPadma[BEJA.conjct_TR_1]   = Padma.consnt_TA + Padma.vattu_RA;
BEJA.toPadma[BEJA.conjct_TR_2]   = Padma.consnt_TA + Padma.vattu_RA;
BEJA.toPadma[BEJA.conjct_TN]     = Padma.consnt_TA + Padma.vattu_NA;
BEJA.toPadma[BEJA.conjct_DG]     = Padma.consnt_DA + Padma.vattu_GA;
BEJA.toPadma[BEJA.conjct_DGH]    = Padma.consnt_DA + Padma.vattu_GHA;
BEJA.toPadma[BEJA.conjct_DD]     = Padma.consnt_DA + Padma.vattu_DA;
BEJA.toPadma[BEJA.conjct_D_DH]   = Padma.consnt_DA + Padma.vattu_DHA;
BEJA.toPadma[BEJA.conjct_DB]     = Padma.consnt_DA + Padma.vattu_BA;
BEJA.toPadma[BEJA.conjct_DBR]    = Padma.consnt_DA + Padma.vattu_BA + Padma.vattu_RA;
BEJA.toPadma[BEJA.conjct_DBH]    = Padma.consnt_DA + Padma.vattu_BHA;
BEJA.toPadma[BEJA.conjct_DM]     = Padma.consnt_DA + Padma.vattu_MA;
BEJA.toPadma[BEJA.conjct_DY]     = Padma.consnt_DA + Padma.vattu_YA;
BEJA.toPadma[BEJA.conjct_DV]     = Padma.consnt_DA + Padma.vattu_VA;
BEJA.toPadma[BEJA.conjct_NN]     = Padma.consnt_NA + Padma.vattu_NA;
BEJA.toPadma[BEJA.conjct_PT]     = Padma.consnt_PA + Padma.vattu_TA;
BEJA.toPadma[BEJA.conjct_LL]     = Padma.consnt_LA + Padma.vattu_LA;
BEJA.toPadma[BEJA.conjct_SHC]    = Padma.consnt_SHA + Padma.vattu_CA;
BEJA.toPadma[BEJA.conjct_SHR]    = Padma.consnt_SHA + Padma.vattu_RA;
BEJA.toPadma[BEJA.conjct_SHREE]  = Padma.consnt_SHA + Padma.vattu_RA + Padma.vowelsn_EE;
BEJA.toPadma[BEJA.conjct_SHV]    = Padma.consnt_SHA + Padma.vattu_VA;
BEJA.toPadma[BEJA.conjct_SSTT]   = Padma.consnt_SSA + Padma.vattu_TTA;
BEJA.toPadma[BEJA.conjct_SSTTV]  = Padma.consnt_SSA + Padma.vattu_TTA + Padma.vattu_VA;
BEJA.toPadma[BEJA.conjct_SSTTH]  = Padma.consnt_SSA + Padma.vattu_TTHA;
BEJA.toPadma[BEJA.conjct_STR]    = Padma.consnt_SA + Padma.vattu_TA + Padma.vattu_RA;
BEJA.toPadma[BEJA.conjct_HNN]    = Padma.consnt_HA + Padma.vattu_NNA;
BEJA.toPadma[BEJA.conjct_HN]     = Padma.consnt_HA + Padma.vattu_NA;
BEJA.toPadma[BEJA.conjct_HM]     = Padma.consnt_HA + Padma.vattu_MA;
BEJA.toPadma[BEJA.conjct_HY]     = Padma.consnt_HA + Padma.vattu_YA;
BEJA.toPadma[BEJA.conjct_HR]     = Padma.consnt_HA + Padma.vattu_RA;
BEJA.toPadma[BEJA.conjct_HL]     = Padma.consnt_HA + Padma.vattu_LA;
BEJA.toPadma[BEJA.conjct_HV]     = Padma.consnt_HA + Padma.vattu_VA;

//Combos
BEJA.toPadma[BEJA.combo_RU]      = Padma.consnt_RA + Padma.vowelsn_U;
BEJA.toPadma[BEJA.combo_RUU]     = Padma.consnt_RA + Padma.vowelsn_UU;
BEJA.toPadma[BEJA.conjct_SHAU]   = Padma.consnt_SHA + Padma.vowelsn_AU;
BEJA.toPadma[BEJA.combo_HR]      = Padma.consnt_HA + Padma.vowelsn_R;

BEJA.toPadma[BEJA.halffm_RI]     = Padma.halffm_RA + Padma.vowelsn_I;
BEJA.toPadma[BEJA.halffm_RIM]    = Padma.halffm_RA + Padma.vowelsn_I + Padma.anusvara;
BEJA.toPadma[BEJA.halffm_RA_ANU] = Padma.halffm_RA + Padma.anusvara;

BEJA.toPadma[BEJA.vattu_YA]      = Padma.vattu_YA;
BEJA.toPadma[BEJA.vattu_RA_1]    = Padma.vattu_RA;
BEJA.toPadma[BEJA.vattu_RA_2]    = Padma.vattu_RA;
BEJA.toPadma[BEJA.vattu_RA_3]    = Padma.vattu_RA;
BEJA.toPadma[BEJA.vattu_LA]      = Padma.vattu_LA;

BEJA.toPadma[BEJA.digit_ZERO_ext] = '0';

BEJA.toPadma[BEJA.misc_DANDA]    = Padma.danda;
BEJA.toPadma[BEJA.misc_DDANDA]   = Padma.ddanda;
BEJA.toPadma[BEJA.misc_OM]       = Padma.om;
BEJA.toPadma[BEJA.misc_ABBREV]   = Padma.abbrev;
BEJA.toPadma[BEJA.nukta_1]       = Padma.nukta;
BEJA.toPadma[BEJA.nukta_2]       = Padma.nukta;

//Does not match ASCII
BEJA.toPadma[BEJA.extra_QTSINGLE_1] = "\u2018"; //Left single quotation mark
BEJA.toPadma[BEJA.extra_QTSINGLE_2] = "\u2019"; //Right single quotation mark
BEJA.toPadma[BEJA.MULTIPLY]         = "\u00D7"; //Unicode for multiplication symbol
BEJA.toPadma[BEJA.PERCENT]          = "%";
BEJA.toPadma[BEJA.extra_COLON]      = ":";

//BE specfic
BEJA.toPadma_BE = new Object();
BEJA.toPadma_BE[BEJA.DIVIDE_BE]     = "\u00F7"; //Unicode for division symbol
BEJA.toPadma_BE[BEJA.digit_ONE_BE]  = '1';
BEJA.toPadma_BE[BEJA.digit_TWO_BE]  = '2';
BEJA.toPadma_BE[BEJA.digit_THREE_BE]= '3';
BEJA.toPadma_BE[BEJA.digit_FOUR_BE] = '4';
BEJA.toPadma_BE[BEJA.digit_FIVE_BE] = '5';
BEJA.toPadma_BE[BEJA.digit_SIX_BE]  = '6';
BEJA.toPadma_BE[BEJA.digit_SEVEN_BE]= '7';
BEJA.toPadma_BE[BEJA.digit_EIGHT_BE]= '8';
BEJA.toPadma_BE[BEJA.digit_NINE_BE] = '9';

//JA specific
BEJA.toPadma_JA = new Object();
BEJA.toPadma_JA[BEJA.consnt_KHA_JA] = Padma.consnt_KHA;
BEJA.toPadma_JA[BEJA.consnt_BA_JA]  = Padma.consnt_BA;
BEJA.toPadma_JA[BEJA.consnt_BHA_JA] = Padma.consnt_BHA;
BEJA.toPadma_JA[BEJA.consnt_MA_JA]  = Padma.consnt_MA;
BEJA.toPadma_JA[BEJA.conjct_TT_JA]  = Padma.consnt_TA + Padma.vattu_TA;
BEJA.toPadma_JA[BEJA.halffm_KA_JA]  = Padma.halffm_KA;
BEJA.toPadma_JA[BEJA.halffm_KHA_JA] = Padma.halffm_KHA;
BEJA.toPadma_JA[BEJA.halffm_PHA_JA] = Padma.halffm_PHA;
BEJA.toPadma_JA[BEJA.halffm_BA_JA]  = Padma.halffm_BA;
BEJA.toPadma_JA[BEJA.halffm_BHA_JA] = Padma.halffm_BHA;
BEJA.toPadma_JA[BEJA.halffm_MA_JA]  = Padma.halffm_MA;
BEJA.toPadma_JA[BEJA.halffm_TT_JA]  = Padma.halffm_TA + Padma.halffm_TA;
BEJA.toPadma_JA[BEJA.vowelsn_EE_JA] = Padma.vowelsn_EE;

BEJA.prefixList = new Object();
BEJA.prefixList[BEJA.vowelsn_I]  = true;
BEJA.prefixList[BEJA.vowelsn_IM] = true;
BEJA.prefixList[BEJA.nukta_1]    = true;
BEJA.prefixList[BEJA.halffm_RI]  = true;
BEJA.prefixList[BEJA.halffm_RIM] = true;

BEJA.suffixList = new Object();
BEJA.suffixList[BEJA.halffm_RA]     = true;
BEJA.suffixList[BEJA.halffm_RA_ANU] = true;

BEJA.redundantList = new Object();
BEJA.redundantList[BEJA.misc_UNKNOWN_1] = true;
BEJA.redundantList[BEJA.misc_UNKNOWN_2] = true;
BEJA.redundantList[BEJA.misc_UNKNOWN_3] = true;

BEJA.overloadList = new Object();
BEJA.overloadList[BEJA.vowel_A]     = true;
BEJA.overloadList[BEJA.vowel_AA]    = true;
BEJA.overloadList[BEJA.vowel_EE]    = true;
BEJA.overloadList[BEJA.vowel_I]     = true;
BEJA.overloadList[BEJA.consnt_DDA]  = true;
BEJA.overloadList[BEJA.consnt_DDHA] = true;
BEJA.overloadList[BEJA.vowelsn_AA]  = true;
BEJA.overloadList[BEJA.halffm_KSH]  = true;
BEJA.overloadList[BEJA.halffm_KHA]  = true;
BEJA.overloadList[BEJA.halffm_GA]   = true;
BEJA.overloadList[BEJA.halffm_GHA]  = true;
BEJA.overloadList[BEJA.halffm_CA]   = true;
BEJA.overloadList[BEJA.halffm_CC]   = true;
BEJA.overloadList[BEJA.halffm_JJ]   = true;
BEJA.overloadList[BEJA.halffm_JNY]  = true;
BEJA.overloadList[BEJA.halffm_ZA_1] = true;
BEJA.overloadList[BEJA.halffm_ZA_2] = true;
BEJA.overloadList[BEJA.halffm_JHA]  = true;
BEJA.overloadList[BEJA.halffm_NNA]  = true;
BEJA.overloadList[BEJA.halffm_TA]   = true;
BEJA.overloadList[BEJA.halffm_TT]   = true;
BEJA.overloadList[BEJA.halffm_TR]   = true;
BEJA.overloadList[BEJA.halffm_THA]  = true;
BEJA.overloadList[BEJA.halffm_DHA]  = true;
BEJA.overloadList[BEJA.halffm_NN]   = true;
BEJA.overloadList[BEJA.halffm_BHA]  = true;
BEJA.overloadList[BEJA.halffm_PA]   = true;
BEJA.overloadList[BEJA.halffm_MA]   = true;
BEJA.overloadList[BEJA.halffm_YA]   = true;
BEJA.overloadList[BEJA.halffm_LA]   = true;
BEJA.overloadList[BEJA.halffm_SHA_2]= true;
BEJA.overloadList[BEJA.halffm_SHR]  = true;
BEJA.overloadList[BEJA.halffm_SSA]  = true;

BEJA.overloadList_JA = new Object();
BEJA.overloadList_JA[BEJA.halffm_KHA_JA]  = true;
BEJA.overloadList_JA[BEJA.halffm_BA_JA]   = true;
BEJA.overloadList_JA[BEJA.halffm_BHA_JA]  = true;
BEJA.overloadList_JA[BEJA.halffm_MA_JA]   = true;
BEJA.overloadList_JA[BEJA.halffm_TT_JA]   = true;
