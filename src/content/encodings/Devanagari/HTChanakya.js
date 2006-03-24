// $Id: HTChanakya.js,v 1.3 2006/03/24 21:20:28 vnagarjuna Exp $ -->

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

//The font files used by Dainik Bhaskar (Bhaskar), Dainik Jagran (Jagran),
//Amar Ujala (AU) and Rajasthan Patrika (ePatrika), Punjab Kesari (Chanakya)
// are identical except for minor differences.

function HTChanakya()
{
}

//The interface every dynamic font encoding should implement
HTChanakya.maxLookupLen = 3;
HTChanakya.fontFace     = "HTChanakya";
HTChanakya.displayName  = "HTChanakya";
HTChanakya.script       = Padma.script_DEVANAGARI;
HTChanakya.hasSuffixes  = true;

HTChanakya.lookup = function (str) 
{
    return HTChanakya.toPadma[str];
}

HTChanakya.isPrefixSymbol = function (str)
{
    return HTChanakya.prefixList[str] != null;
}

HTChanakya.isSuffixSymbol = function (str)
{
    return HTChanakya.suffixList[str] != null;
}

HTChanakya.isOverloaded = function (str)
{
    return HTChanakya.overloadList[str] != null;
}

HTChanakya.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if ((sign1 == Padma.vowelsn_EE && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_EE))
    return Padma.vowelsn_OO; 
    if ((sign1 == Padma.vowelsn_CDR_E && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_CDR_E))
    return Padma.vowelsn_CDR_O; 
    if ((sign1 == Padma.vowelsn_AI && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_AI))
        return Padma.vowelsn_AU;
    return sign1 + sign2;    
}

HTChanakya.isRedundant = function (str)
{
    return HTChanakya.redundantList[str] != null;
}

//TODO: 4B, 93 (201C), 9b (203a), 9c (0153), a4, ad, b7, ee (look at 64), ef,

//Common stuff
//Specials
HTChanakya.avagraha       = "\u00F9";
HTChanakya.anusvara_1     = "\u00A2";
HTChanakya.anusvara_2     = "\u00B4";
HTChanakya.candrabindu    = "\u00A1";
HTChanakya.virama         = "\u00F7";
//HTChanakya.visarga        = "\u00D1";

//Vowels
HTChanakya.vowel_A        = "\u00A5";
HTChanakya.vowel_AA       = "\u00A5\u00E6";
HTChanakya.vowel_I        = "\u00A7";
HTChanakya.vowel_II       = "\u00A7\u00FC";
HTChanakya.vowel_U        = "\u00A9";
HTChanakya.vowel_UU       = "\u00AA";
HTChanakya.vowel_R        = "\u00AB";
//HTChanakya.vowel_RR       = "\u00AC";
HTChanakya.vowel_CDR_E    = "\u00B0\u00F2";
HTChanakya.vowel_EE       = "\u00B0";
HTChanakya.vowel_AI       = "\u00B0\u00F0";
HTChanakya.vowel_CDR_O    = "\u00A5\u00E6\u00F2";
HTChanakya.vowel_OO_1     = "\u00A5\u00E6\u00F0";
HTChanakya.vowel_OO_2     = "\u00A5\u00F4";
HTChanakya.vowel_AU_1     = "\u00A5\u00E6\u00F1";
HTChanakya.vowel_AU_2     = "\u00A5\u00F5";

//Consonants
HTChanakya.consnt_KA      = "\u0058";
HTChanakya.consnt_KHA_1   = "\u0047\u00E6";
HTChanakya.consnt_KHA_2   = "\u00B9"; 
HTChanakya.consnt_GA_1    = "\u0052\u00E6";
HTChanakya.consnt_GA_2    = "\u00BB";
HTChanakya.consnt_GHA     = "\u00B2\u00E6";
HTChanakya.consnt_NGA     = "\u00BE";

HTChanakya.consnt_CA_1    = "\u00AF\u00E6";
HTChanakya.consnt_CA_2    = "\u00BF";
HTChanakya.consnt_CHA     = "\u00C0";
HTChanakya.consnt_JA      = "\u00C1";
HTChanakya.consnt_ZA_1    = "\u2022\u00E6";
HTChanakya.consnt_ZA_2    = "\u00C8\u00E6";
HTChanakya.consnt_ZA_3    = "\u00CA\u00E6";
HTChanakya.consnt_JHA     = "\u00DB\u00E6";
HTChanakya.consnt_NYA     = "\u0049\u00E6";

HTChanakya.consnt_TTA     = "\u00C5";
HTChanakya.consnt_TTHA    = "\u00C6";
HTChanakya.consnt_DDA     = "\u00C7";
HTChanakya.consnt_DDDHA   = "\u00C7\u00B8";
HTChanakya.consnt_DDHA    = "\u00C9";
HTChanakya.consnt_RHA     = "\u00C9\u00B8";
HTChanakya.consnt_NNA     = "\u004A\u00E6";

HTChanakya.consnt_TA_1    = "\u0050\u00E6";
HTChanakya.consnt_TA_2    = "\u00CC";
HTChanakya.consnt_THA_1   = "\u0066\u00E6";
HTChanakya.consnt_THA_2   = "\u00CD";
HTChanakya.consnt_DA_1    = "\u00BC";
HTChanakya.consnt_DA_2    = "\u00CE";
HTChanakya.consnt_DHA_1   = "\u0056\u00E6";
HTChanakya.consnt_DHA_2   = "\u00CF";
HTChanakya.consnt_NA      = "\u00D9";

HTChanakya.consnt_PA_1    = "\u00C2";
HTChanakya.consnt_PA_2    = "\u0152\u00E6";
HTChanakya.consnt_PHA_1   = "\u0059";
HTChanakya.consnt_PHA_2   = "\u00A3\u00E6";
HTChanakya.consnt_BA      = "\u00D5";
HTChanakya.consnt_BHA_1   = "\u00AC\u00E6";
HTChanakya.consnt_BHA_2   = "\u00D6";
HTChanakya.consnt_MA_1    = "\u00B3\u00E6";
HTChanakya.consnt_MA_2    = "\u00D7";

HTChanakya.consnt_YA_1    = "\u00C4\u00E6";
HTChanakya.consnt_YA_2    = "\u00D8";
HTChanakya.consnt_RA      = "\u00DA";
HTChanakya.consnt_LA_1    = "\u00B6";
HTChanakya.consnt_LA_2    = "\u00CB\u00E6";
HTChanakya.consnt_LA_3    = "\u00DC";
HTChanakya.consnt_VA      = "\u00DF";
HTChanakya.consnt_SHA_1   = "\u00DE\u00E6";
HTChanakya.consnt_SHA_2   = "\u00E0\u00E6";
HTChanakya.consnt_SHA_3   = "\u006F";
HTChanakya.consnt_SSA_1   = "\u0063\u00E6";
HTChanakya.consnt_SSA_2   = "\u00E1";
HTChanakya.consnt_SA      = "\u00E2";
HTChanakya.consnt_HA      = "\u00E3";
HTChanakya.consnt_LLA     = "\u201D";

//Gunintamulu
HTChanakya.vowelsn_AA     = "\u00E6";
HTChanakya.vowelsn_I      = "\u00E7";
HTChanakya.vowelsn_II     = "\u00E8";
HTChanakya.vowelsn_U_1    = "\u00E4";
HTChanakya.vowelsn_U_2    = "\u00E9";
HTChanakya.vowelsn_UU_1   = "\u00E5";
HTChanakya.vowelsn_UU_2   = "\u00EA";
HTChanakya.vowelsn_R      = "\u00EB";
HTChanakya.vowelsn_CDR_E  = "\u00F2";
HTChanakya.vowelsn_EE_1   = "\u00F0";
HTChanakya.vowelsn_EE_2   = "\u00D4";
HTChanakya.vowelsn_AI     = "\u00F1";
HTChanakya.vowelsn_OO     = "\u00F4";
HTChanakya.vowelsn_AU     = "\u00F5";

//Matra + modifier
HTChanakya.vowelsn_IM     = "\u00A8";
HTChanakya.vowelsn_U_BINDU = "\u0161";

//Half Forms
HTChanakya.halffm_KA_1    = "\u0042";
HTChanakya.halffm_KA_2    = "\u20AC";
HTChanakya.halffm_KSH     = "\u00FF";
HTChanakya.halffm_KHA     = "\u0047";
HTChanakya.halffm_GA      = "\u0052";
HTChanakya.halffm_GHA     = "\u00B2";
HTChanakya.halffm_CA      = "\u00AF";
HTChanakya.halffm_CC      = "\u00F8";
HTChanakya.halffm_JA_1    = "\u003A";
HTChanakya.halffm_JA_2    = "\u2019";
HTChanakya.halffm_JJ      = "\u00DD";
HTChanakya.halffm_JNY     = "\u00BD";
HTChanakya.halffm_ZA_1    = "\u2022";
HTChanakya.halffm_ZA_2    = "\u00C8"; 
HTChanakya.halffm_ZA_3    = "\u00CA";
HTChanakya.halffm_JHA     = "\u00DB";
HTChanakya.halffm_NYA     = "\u0049";
HTChanakya.halffm_NNA     = "\u004A";
HTChanakya.halffm_TA      = "\u0050";
HTChanakya.halffm_TT      = "\u00F6";
HTChanakya.halffm_TR      = "\u00B5";
HTChanakya.halffm_THA     = "\u0066";
HTChanakya.halffm_DHA     = "\u0056";
HTChanakya.halffm_NA      = "\u0069";
HTChanakya.halffm_NN      = "\u00F3";
HTChanakya.halffm_PA      = "\u0060";
HTChanakya.halffm_PHA     = "\u00A3";
HTChanakya.halffm_BA      = "\u00A6";
HTChanakya.halffm_BHA     = "\u00AC";
HTChanakya.halffm_MA      = "\u00B3";
HTChanakya.halffm_YA      = "\u00C4";
HTChanakya.halffm_RA      = "\u00FC";
HTChanakya.halffm_LA      = "\u00CB";
HTChanakya.halffm_VA      = "\u00C3";
HTChanakya.halffm_SHA_1   = "\u00DE";
HTChanakya.halffm_SHA_2   = "\u00E0";
HTChanakya.halffm_SSA     = "\u0063";
HTChanakya.halffm_SA      = "\u0053";
HTChanakya.halffm_HA      = "\u00B1";
HTChanakya.halffm_LLA     = "\u2013";
HTChanakya.halffm_RRA     = "\u2026";

//Conjuncts
HTChanakya.conjct_KK      = "\u02C6";
HTChanakya.conjct_KT      = "\u0051";
HTChanakya.conjct_KSH     = "\u00FF\u00E6";
HTChanakya.conjct_KSHEE   = "\u00FF\u00F4";
HTChanakya.conjct_KHN     = "\u2018";
HTChanakya.conjct_KHR     = "\u00BA";
HTChanakya.conjct_NGKT    = "\u00FB";
HTChanakya.conjct_CC      = "\u00F8\u00E6";
HTChanakya.conjct_CHV     = "\u2021";
HTChanakya.conjct_JNY     = "\u00BD\u00E6";
HTChanakya.conjct_JHR     = "\u005C";
HTChanakya.conjct_NYC     = "\u0040";
HTChanakya.conjct_NYJ     = "\u0054";
HTChanakya.conjct_JJ      = "\u00DD\u00E6";
HTChanakya.conjct_TTTT    = "\u005E";
HTChanakya.conjct_TT_TTH  = "\u005F";
HTChanakya.conjct_TTHTTH  = "\u006E";
HTChanakya.conjct_DDDD    = "\u0061";
HTChanakya.conjct_DD_DDH  = "\u0062";
HTChanakya.conjct_DDHDDH  = "\u2020";
HTChanakya.conjct_TT      = "\u00F6\u00E6";
HTChanakya.conjct_TR      = "\u00B5\u00E6";
HTChanakya.conjct_TN      = "\u0025";
HTChanakya.conjct_DG      = "\u0065";
HTChanakya.conjct_DGH     = "\u2030";
HTChanakya.conjct_DD      = "\u0067";
HTChanakya.conjct_D_DH    = "\u0068";
HTChanakya.conjct_DB      = "\u2039";
HTChanakya.conjct_DBH     = "\u006A";
HTChanakya.conjct_DM      = "\u006B";
HTChanakya.conjct_DY      = "\u006C";
HTChanakya.conjct_DV      = "\u006D";
HTChanakya.conjct_NN      = "\u00F3\u00E6";
HTChanakya.conjct_PT      = "\u0023";
HTChanakya.conjct_LL      = "\u201E";
HTChanakya.conjct_SHC     = "\u0070";
HTChanakya.conjct_SHV     = "\u0045";
HTChanakya.conjct_SSTT    = "\u0043";
HTChanakya.conjct_SSTTH   = "\u0044";
HTChanakya.conjct_STR     = "\u0064";
HTChanakya.conjct_SN      = "\u0046";
HTChanakya.conjct_HN      = "\u0071";
HTChanakya.conjct_HM      = "\u0072";
HTChanakya.conjct_HY      = "\u0073";
HTChanakya.conjct_HR      = "\u004F";
HTChanakya.conjct_HL      = "\u0074";
HTChanakya.conjct_HV      = "\u0075";

//Combos
HTChanakya.combo_RU       = "\u004C";
HTChanakya.combo_RUU      = "\u004D";
HTChanakya.combo_HR       = "\u004E";

//Half forms of RA
HTChanakya.halffm_RI      = "\u00ED";
HTChanakya.halffm_RIM     = "\u00EC";
HTChanakya.halffm_RA_ANU  = "\u005A";

HTChanakya.vattu_RA_1     = "\u0041";
HTChanakya.vattu_RA_2     = "\u00FD";
HTChanakya.vattu_RA_3     = "\u00FE";

HTChanakya.misc_DANDA     = "\u00D0";
HTChanakya.misc_DDANDA    = "\u0048";
HTChanakya.misc_OM        = "\u00FA";
//HTChanakya.misc_ABBREV    = "\u00F8";
HTChanakya.nukta_1        = "\u0024";
HTChanakya.nukta_2        = "\u00B8";

//Digits (TODO..write table)
HTChanakya.digit_ZERO     = "\u0030";
HTChanakya.digit_ONE      = "\u0031";
HTChanakya.digit_TWO      = "\u0032";
HTChanakya.digit_THREE    = "\u0033";
HTChanakya.digit_FOUR     = "\u0034";
HTChanakya.digit_FIVE     = "\u0035";
HTChanakya.digit_SIX      = "\u0036";
HTChanakya.digit_SEVEN    = "\u0037";
HTChanakya.digit_EIGHT    = "\u0038";
HTChanakya.digit_NINE     = "\u0039";

//Arabic numerals (TODO)
HTChanakya.digit_ZERO_AR  = "\u00AE";
HTChanakya.digit_ONE_AR   = "\u0076"; 
HTChanakya.digit_TWO_AR   = "\u0077";
HTChanakya.digit_THREE_AR = "\u0078";
HTChanakya.digit_FOUR_AR  = "\u0079";
HTChanakya.digit_FIVE_AR  = "\u007A";
HTChanakya.digit_SIX_AR   = "\u007B";
HTChanakya.digit_SEVEN_AR = "\u007C";
HTChanakya.digit_EIGHT_AR = "\u007D";
HTChanakya.digit_NINE_AR  = "\u007E";


//Matches ASCII
HTChanakya.EXCLAM         = "\u0021";
HTChanakya.QTDOUBLE       = "\u0022";
HTChanakya.PAREN_LEFT     = "\u0028";
HTChanakya.PAREN_RIGHT    = "\u0029";
HTChanakya.ASTERISK       = "\u002A";
HTChanakya.PLUS           = "\u002B";
HTChanakya.COMMA          = "\u002C";
HTChanakya.PERIOD         = "\u002E";
HTChanakya.SLASH          = "\u002F";
HTChanakya.SEMICOLON      = "\u003B";
HTChanakya.LESSTHAN       = "\u003C";
HTChanakya.EQUALS         = "\u003D";
HTChanakya.GREATERTHAN    = "\u003E";
HTChanakya.QUESTION       = "\u003F";
HTChanakya.LEFTSQBKT      = "\u005B";
HTChanakya.RIGHTSQBKT     = "\u005D";

//Does not match ASCII
HTChanakya.extra_QTSINGLE_1 = "\u00D2";
HTChanakya.extra_QTSINGLE_2 = "\u00D3";
HTChanakya.MULTIPLY       = "\u0026";
HTChanakya.PERCENT        = "\u0027";
HTChanakya.extra_COLON    = "\u00D1";

HTChanakya.misc_UNKNOWN_1 = "\u0055";
HTChanakya.misc_UNKNOWN_2 = "\u0057";
HTChanakya.misc_UNKNOWN_3 = "\u00A4";
HTChanakya.misc_UNKNOWN_4 = "\u00EF";

HTChanakya.toPadma = new Object();

HTChanakya.toPadma[HTChanakya.avagraha]    = Padma.avagraha;
HTChanakya.toPadma[HTChanakya.anusvara_1]  = Padma.anusvara;
HTChanakya.toPadma[HTChanakya.anusvara_2]  = Padma.anusvara;
HTChanakya.toPadma[HTChanakya.candrabindu] = Padma.candrabindu;
HTChanakya.toPadma[HTChanakya.virama]      = Padma.syllbreak;
//HTChanakya.toPadma[HTChanakya.visarga]     = Padma.visarga;

HTChanakya.toPadma[HTChanakya.vowel_A]    = Padma.vowel_A;
HTChanakya.toPadma[HTChanakya.vowel_AA]   = Padma.vowel_AA;
HTChanakya.toPadma[HTChanakya.vowel_I]    = Padma.vowel_I;
HTChanakya.toPadma[HTChanakya.vowel_II]   = Padma.vowel_II;
HTChanakya.toPadma[HTChanakya.vowel_U]    = Padma.vowel_U;
HTChanakya.toPadma[HTChanakya.vowel_UU]   = Padma.vowel_UU;
HTChanakya.toPadma[HTChanakya.vowel_R]    = Padma.vowel_R;
//HTChanakya.toPadma[HTChanakya.vowel_RR]   = Padma.vowel_RR;
HTChanakya.toPadma[HTChanakya.vowel_CDR_E] = Padma.vowel_CDR_E;
HTChanakya.toPadma[HTChanakya.vowel_EE]   = Padma.vowel_EE;
HTChanakya.toPadma[HTChanakya.vowel_AI]   = Padma.vowel_AI;
HTChanakya.toPadma[HTChanakya.vowel_CDR_O] = Padma.vowel_CDR_O;
HTChanakya.toPadma[HTChanakya.vowel_OO_1] = Padma.vowel_OO;
HTChanakya.toPadma[HTChanakya.vowel_OO_2] = Padma.vowel_OO;
HTChanakya.toPadma[HTChanakya.vowel_AU_1] = Padma.vowel_AU;
HTChanakya.toPadma[HTChanakya.vowel_AU_2] = Padma.vowel_AU;

HTChanakya.toPadma[HTChanakya.consnt_KA]    = Padma.consnt_KA;
HTChanakya.toPadma[HTChanakya.consnt_KHA_1] = Padma.consnt_KHA;
HTChanakya.toPadma[HTChanakya.consnt_KHA_2] = Padma.consnt_KHA;
HTChanakya.toPadma[HTChanakya.consnt_GA_1]  = Padma.consnt_GA;
HTChanakya.toPadma[HTChanakya.consnt_GA_2]  = Padma.consnt_GA;
HTChanakya.toPadma[HTChanakya.consnt_GHA]   = Padma.consnt_GHA;
HTChanakya.toPadma[HTChanakya.consnt_NGA]   = Padma.consnt_NGA;

HTChanakya.toPadma[HTChanakya.consnt_CA_1]  = Padma.consnt_CA;
HTChanakya.toPadma[HTChanakya.consnt_CA_2]  = Padma.consnt_CA;
HTChanakya.toPadma[HTChanakya.consnt_CHA]   = Padma.consnt_CHA;
HTChanakya.toPadma[HTChanakya.consnt_JA]    = Padma.consnt_JA;
HTChanakya.toPadma[HTChanakya.consnt_ZA_1]  = Padma.consnt_ZA;
HTChanakya.toPadma[HTChanakya.consnt_ZA_2]  = Padma.consnt_ZA;
HTChanakya.toPadma[HTChanakya.consnt_ZA_3]  = Padma.consnt_ZA;
HTChanakya.toPadma[HTChanakya.consnt_JHA]   = Padma.consnt_JHA;
HTChanakya.toPadma[HTChanakya.consnt_NYA]   = Padma.consnt_NYA;

HTChanakya.toPadma[HTChanakya.consnt_TTA]   = Padma.consnt_TTA;
HTChanakya.toPadma[HTChanakya.consnt_TTHA]  = Padma.consnt_TTHA;
HTChanakya.toPadma[HTChanakya.consnt_DDA]   = Padma.consnt_DDA;
HTChanakya.toPadma[HTChanakya.consnt_DDDHA] = Padma.consnt_DDDHA;
HTChanakya.toPadma[HTChanakya.consnt_DDHA]  = Padma.consnt_DDHA;
HTChanakya.toPadma[HTChanakya.consnt_RHA]   = Padma.consnt_RHA;
HTChanakya.toPadma[HTChanakya.consnt_NNA]   = Padma.consnt_NNA;

HTChanakya.toPadma[HTChanakya.consnt_TA_1]  = Padma.consnt_TA;
HTChanakya.toPadma[HTChanakya.consnt_TA_2]  = Padma.consnt_TA;
HTChanakya.toPadma[HTChanakya.consnt_THA_1] = Padma.consnt_THA;
HTChanakya.toPadma[HTChanakya.consnt_THA_2] = Padma.consnt_THA;
HTChanakya.toPadma[HTChanakya.consnt_DA_1]  = Padma.consnt_DA;
HTChanakya.toPadma[HTChanakya.consnt_DA_2]  = Padma.consnt_DA;
HTChanakya.toPadma[HTChanakya.consnt_DHA_1] = Padma.consnt_DHA;
HTChanakya.toPadma[HTChanakya.consnt_DHA_2] = Padma.consnt_DHA;
HTChanakya.toPadma[HTChanakya.consnt_NA]    = Padma.consnt_NA;

HTChanakya.toPadma[HTChanakya.consnt_PA_1]  = Padma.consnt_PA;
HTChanakya.toPadma[HTChanakya.consnt_PA_2]  = Padma.consnt_PA;
HTChanakya.toPadma[HTChanakya.consnt_PHA_1] = Padma.consnt_PHA;
HTChanakya.toPadma[HTChanakya.consnt_PHA_2] = Padma.consnt_PHA;
HTChanakya.toPadma[HTChanakya.consnt_BA]    = Padma.consnt_BA;
HTChanakya.toPadma[HTChanakya.consnt_BHA_1] = Padma.consnt_BHA;
HTChanakya.toPadma[HTChanakya.consnt_BHA_2] = Padma.consnt_BHA;
HTChanakya.toPadma[HTChanakya.consnt_MA_1]  = Padma.consnt_MA;
HTChanakya.toPadma[HTChanakya.consnt_MA_2]  = Padma.consnt_MA;

HTChanakya.toPadma[HTChanakya.consnt_YA_1]  = Padma.consnt_YA;
HTChanakya.toPadma[HTChanakya.consnt_YA_2]  = Padma.consnt_YA;
HTChanakya.toPadma[HTChanakya.consnt_RA]    = Padma.consnt_RA;
HTChanakya.toPadma[HTChanakya.consnt_LA_1]  = Padma.consnt_LA;
HTChanakya.toPadma[HTChanakya.consnt_LA_2]  = Padma.consnt_LA;
HTChanakya.toPadma[HTChanakya.consnt_LA_3]  = Padma.consnt_LA;
HTChanakya.toPadma[HTChanakya.consnt_VA]    = Padma.consnt_VA;
HTChanakya.toPadma[HTChanakya.consnt_SHA_1] = Padma.consnt_SHA;
HTChanakya.toPadma[HTChanakya.consnt_SHA_2] = Padma.consnt_SHA;
HTChanakya.toPadma[HTChanakya.consnt_SHA_3] = Padma.consnt_SHA;
HTChanakya.toPadma[HTChanakya.consnt_SSA_1] = Padma.consnt_SSA;
HTChanakya.toPadma[HTChanakya.consnt_SSA_2] = Padma.consnt_SSA;
HTChanakya.toPadma[HTChanakya.consnt_SA]    = Padma.consnt_SA;
HTChanakya.toPadma[HTChanakya.consnt_HA]    = Padma.consnt_HA;
HTChanakya.toPadma[HTChanakya.consnt_LLA]   = Padma.consnt_LLA;

//Gunintamulu
HTChanakya.toPadma[HTChanakya.vowelsn_AA]   = Padma.vowelsn_AA;
HTChanakya.toPadma[HTChanakya.vowelsn_I]    = Padma.vowelsn_I;
HTChanakya.toPadma[HTChanakya.vowelsn_II]   = Padma.vowelsn_II;
HTChanakya.toPadma[HTChanakya.vowelsn_U_1]  = Padma.vowelsn_U;
HTChanakya.toPadma[HTChanakya.vowelsn_U_2]  = Padma.vowelsn_U;
HTChanakya.toPadma[HTChanakya.vowelsn_UU_1] = Padma.vowelsn_UU;
HTChanakya.toPadma[HTChanakya.vowelsn_UU_2] = Padma.vowelsn_UU;
HTChanakya.toPadma[HTChanakya.vowelsn_R]    = Padma.vowelsn_R;
HTChanakya.toPadma[HTChanakya.vowelsn_CDR_E]= Padma.vowelsn_CDR_E;
HTChanakya.toPadma[HTChanakya.vowelsn_EE_1] = Padma.vowelsn_EE;
HTChanakya.toPadma[HTChanakya.vowelsn_EE_2] = Padma.vowelsn_EE;
HTChanakya.toPadma[HTChanakya.vowelsn_AI]   = Padma.vowelsn_AI;
HTChanakya.toPadma[HTChanakya.vowelsn_OO]   = Padma.vowelsn_OO;
HTChanakya.toPadma[HTChanakya.vowelsn_AU]   = Padma.vowelsn_AU;

//matra + modifier
HTChanakya.toPadma[HTChanakya.vowelsn_IM]   = Padma.vowelsn_I + Padma.anusvara;
HTChanakya.toPadma[HTChanakya.vowelsn_U_BINDU] = Padma.vowelsn_U + Padma.candrabindu;

//Halffm
HTChanakya.toPadma[HTChanakya.halffm_KA_1] = Padma.halffm_KA;
HTChanakya.toPadma[HTChanakya.halffm_KA_2] = Padma.halffm_KA;
HTChanakya.toPadma[HTChanakya.halffm_KSH]  = Padma.halffm_KA + Padma.halffm_SSA;
HTChanakya.toPadma[HTChanakya.halffm_KHA]  = Padma.halffm_KHA;
HTChanakya.toPadma[HTChanakya.halffm_GA]   = Padma.halffm_GA;
HTChanakya.toPadma[HTChanakya.halffm_GHA]  = Padma.halffm_GHA;
HTChanakya.toPadma[HTChanakya.halffm_CA]   = Padma.halffm_CA;
HTChanakya.toPadma[HTChanakya.halffm_CC]   = Padma.halffm_CA + Padma.halffm_CA;
HTChanakya.toPadma[HTChanakya.halffm_JA_1] = Padma.halffm_JA;
HTChanakya.toPadma[HTChanakya.halffm_JA_2] = Padma.halffm_JA;
HTChanakya.toPadma[HTChanakya.halffm_JJ]   = Padma.halffm_JA + Padma.halffm_JA;
HTChanakya.toPadma[HTChanakya.halffm_JNY]  = Padma.halffm_JA + Padma.halffm_NYA;
HTChanakya.toPadma[HTChanakya.halffm_ZA_1] = Padma.halffm_ZA;
HTChanakya.toPadma[HTChanakya.halffm_ZA_2] = Padma.halffm_ZA;
HTChanakya.toPadma[HTChanakya.halffm_ZA_3] = Padma.halffm_ZA;
HTChanakya.toPadma[HTChanakya.halffm_JHA]  = Padma.halffm_JHA;
HTChanakya.toPadma[HTChanakya.halffm_NYA]  = Padma.halffm_NYA;
HTChanakya.toPadma[HTChanakya.halffm_NNA]  = Padma.halffm_NNA;
HTChanakya.toPadma[HTChanakya.halffm_TA]   = Padma.halffm_TA;
HTChanakya.toPadma[HTChanakya.halffm_TT]   = Padma.halffm_TA + Padma.halffm_TA;
HTChanakya.toPadma[HTChanakya.halffm_TR]   = Padma.halffm_TA + Padma.halffm_RA;
HTChanakya.toPadma[HTChanakya.halffm_THA]  = Padma.halffm_THA;
HTChanakya.toPadma[HTChanakya.halffm_DHA]  = Padma.halffm_DHA;
HTChanakya.toPadma[HTChanakya.halffm_NA]   = Padma.halffm_NA;
HTChanakya.toPadma[HTChanakya.halffm_NN]   = Padma.halffm_NA + Padma.halffm_NA;
HTChanakya.toPadma[HTChanakya.halffm_PA]   = Padma.halffm_PA;
HTChanakya.toPadma[HTChanakya.halffm_PHA]  = Padma.halffm_PHA;
HTChanakya.toPadma[HTChanakya.halffm_BA]   = Padma.halffm_BA;
HTChanakya.toPadma[HTChanakya.halffm_BHA]  = Padma.halffm_BHA;
HTChanakya.toPadma[HTChanakya.halffm_MA]   = Padma.halffm_MA;
HTChanakya.toPadma[HTChanakya.halffm_YA]   = Padma.halffm_YA;
HTChanakya.toPadma[HTChanakya.halffm_RA]   = Padma.halffm_RA;
HTChanakya.toPadma[HTChanakya.halffm_LA]   = Padma.halffm_LA;
HTChanakya.toPadma[HTChanakya.halffm_VA]   = Padma.halffm_VA;
HTChanakya.toPadma[HTChanakya.halffm_SHA_1]= Padma.halffm_SHA;
HTChanakya.toPadma[HTChanakya.halffm_SHA_2]= Padma.halffm_SHA;
HTChanakya.toPadma[HTChanakya.halffm_SSA]  = Padma.halffm_SSA;
HTChanakya.toPadma[HTChanakya.halffm_SA]   = Padma.halffm_SA;
HTChanakya.toPadma[HTChanakya.halffm_HA]   = Padma.halffm_HA;
HTChanakya.toPadma[HTChanakya.halffm_LLA]  = Padma.halffm_LLA;
HTChanakya.toPadma[HTChanakya.halffm_RRA]  = Padma.halffm_RRA;

//Conjuncts
HTChanakya.toPadma[HTChanakya.conjct_KK]     = Padma.consnt_KA + Padma.vattu_KA;
HTChanakya.toPadma[HTChanakya.conjct_KT]     = Padma.consnt_KA + Padma.vattu_TA;
HTChanakya.toPadma[HTChanakya.conjct_KSH]    = Padma.consnt_KA + Padma.vattu_SSA;
HTChanakya.toPadma[HTChanakya.conjct_KSHEE]  = Padma.consnt_KA + Padma.vattu_SSA + Padma.vowelsn_EE;
HTChanakya.toPadma[HTChanakya.conjct_KHN]    = Padma.consnt_KHA + Padma.vattu_NA;
HTChanakya.toPadma[HTChanakya.conjct_KHR]    = Padma.consnt_KHA + Padma.vattu_RA;
HTChanakya.toPadma[HTChanakya.conjct_NGKT]   = Padma.consnt_NGA + Padma.vattu_KA + Padma.vattu_TA;
HTChanakya.toPadma[HTChanakya.conjct_CC]     = Padma.consnt_CA + Padma.vattu_CA;
HTChanakya.toPadma[HTChanakya.conjct_CHV]    = Padma.consnt_CHA + Padma.vattu_VA;
HTChanakya.toPadma[HTChanakya.conjct_JNY]    = Padma.consnt_JA + Padma.vattu_NYA;
HTChanakya.toPadma[HTChanakya.conjct_JHR]    = Padma.consnt_JHA + Padma.vattu_RA;
HTChanakya.toPadma[HTChanakya.conjct_NYC]    = Padma.consnt_NYA + Padma.vattu_CA;
HTChanakya.toPadma[HTChanakya.conjct_NYJ]    = Padma.consnt_NYA + Padma.vattu_JA;
HTChanakya.toPadma[HTChanakya.conjct_JJ]     = Padma.consnt_JA + Padma.vattu_JA;
HTChanakya.toPadma[HTChanakya.conjct_TTTT]   = Padma.consnt_TTA + Padma.vattu_TTA;
HTChanakya.toPadma[HTChanakya.conjct_TT_TTH] = Padma.consnt_TTA + Padma.vattu_TTHA;
HTChanakya.toPadma[HTChanakya.conjct_TTHTTH] = Padma.consnt_TTHA + Padma.vattu_TTHA;
HTChanakya.toPadma[HTChanakya.conjct_DDDD]   = Padma.consnt_DDA + Padma.vattu_DDA;
HTChanakya.toPadma[HTChanakya.conjct_DD_DDH] = Padma.consnt_DDA + Padma.vattu_DDHA;
HTChanakya.toPadma[HTChanakya.conjct_DDHDDH] = Padma.consnt_DDHA + Padma.vattu_DDHA;
HTChanakya.toPadma[HTChanakya.conjct_TT]     = Padma.consnt_TA + Padma.vattu_TA;
HTChanakya.toPadma[HTChanakya.conjct_TR]     = Padma.consnt_TA + Padma.vattu_RA;
HTChanakya.toPadma[HTChanakya.conjct_TN]     = Padma.consnt_TA + Padma.vattu_NA;
HTChanakya.toPadma[HTChanakya.conjct_DG]     = Padma.consnt_DA + Padma.vattu_GA;
HTChanakya.toPadma[HTChanakya.conjct_DGH]    = Padma.consnt_DA + Padma.vattu_GHA;
HTChanakya.toPadma[HTChanakya.conjct_DD]     = Padma.consnt_DA + Padma.vattu_DA;
HTChanakya.toPadma[HTChanakya.conjct_D_DH]   = Padma.consnt_DA + Padma.vattu_DHA;
HTChanakya.toPadma[HTChanakya.conjct_DB]     = Padma.consnt_DA + Padma.vattu_BA;
HTChanakya.toPadma[HTChanakya.conjct_DBH]    = Padma.consnt_DA + Padma.vattu_BHA;
HTChanakya.toPadma[HTChanakya.conjct_DM]     = Padma.consnt_DA + Padma.vattu_MA;
HTChanakya.toPadma[HTChanakya.conjct_DY]     = Padma.consnt_DA + Padma.vattu_YA;
HTChanakya.toPadma[HTChanakya.conjct_DV]     = Padma.consnt_DA + Padma.vattu_VA;
HTChanakya.toPadma[HTChanakya.conjct_NN]     = Padma.consnt_NA + Padma.vattu_NA;
HTChanakya.toPadma[HTChanakya.conjct_PT]     = Padma.consnt_PA + Padma.vattu_TA;
HTChanakya.toPadma[HTChanakya.conjct_LL]     = Padma.consnt_LA + Padma.vattu_LA;
HTChanakya.toPadma[HTChanakya.conjct_SHC]    = Padma.consnt_SHA + Padma.vattu_CA;
HTChanakya.toPadma[HTChanakya.conjct_SHV]    = Padma.consnt_SHA + Padma.vattu_VA;
HTChanakya.toPadma[HTChanakya.conjct_SSTT]   = Padma.consnt_SSA + Padma.vattu_TTA;
HTChanakya.toPadma[HTChanakya.conjct_SSTTH]  = Padma.consnt_SSA + Padma.vattu_TTHA;
HTChanakya.toPadma[HTChanakya.conjct_STR]    = Padma.consnt_SA + Padma.vattu_TA + Padma.vattu_RA;
HTChanakya.toPadma[HTChanakya.conjct_SN]     = Padma.consnt_SA + Padma.vattu_NA;
HTChanakya.toPadma[HTChanakya.conjct_HN]     = Padma.consnt_HA + Padma.vattu_NA;
HTChanakya.toPadma[HTChanakya.conjct_HM]     = Padma.consnt_HA + Padma.vattu_MA;
HTChanakya.toPadma[HTChanakya.conjct_HY]     = Padma.consnt_HA + Padma.vattu_YA;
HTChanakya.toPadma[HTChanakya.conjct_HR]     = Padma.consnt_HA + Padma.vattu_RA;
HTChanakya.toPadma[HTChanakya.conjct_HL]     = Padma.consnt_HA + Padma.vattu_LA;
HTChanakya.toPadma[HTChanakya.conjct_HV]     = Padma.consnt_HA + Padma.vattu_VA;

//Combos
HTChanakya.toPadma[HTChanakya.combo_RU]      = Padma.consnt_RA + Padma.vowelsn_U;
HTChanakya.toPadma[HTChanakya.combo_RUU]     = Padma.consnt_RA + Padma.vowelsn_UU;
HTChanakya.toPadma[HTChanakya.combo_HR]      = Padma.consnt_HA + Padma.vowelsn_R;

HTChanakya.toPadma[HTChanakya.halffm_RI]     = Padma.halffm_RA + Padma.vowelsn_I;
HTChanakya.toPadma[HTChanakya.halffm_RIM]    = Padma.halffm_RA + Padma.vowelsn_I + Padma.anusvara;
HTChanakya.toPadma[HTChanakya.halffm_RA_ANU] = Padma.halffm_RA + Padma.anusvara;

HTChanakya.toPadma[HTChanakya.vattu_RA_1]    = Padma.vattu_RA;
HTChanakya.toPadma[HTChanakya.vattu_RA_2]    = Padma.vattu_RA;
HTChanakya.toPadma[HTChanakya.vattu_RA_3]    = Padma.vattu_RA;

HTChanakya.toPadma[HTChanakya.misc_DANDA]    = Padma.danda;
HTChanakya.toPadma[HTChanakya.misc_DDANDA]   = Padma.ddanda;
HTChanakya.toPadma[HTChanakya.misc_OM]       = Padma.om;
//HTChanakya.toPadma[HTChanakya.misc_ABBREV]   = Padma.abbrev;
HTChanakya.toPadma[HTChanakya.nukta_1]       = Padma.nukta;
HTChanakya.toPadma[HTChanakya.nukta_2]       = Padma.nukta;

//Does not match ASCII
HTChanakya.toPadma[HTChanakya.extra_QTSINGLE_1] = "\u2018"; //Left single quotation mark
HTChanakya.toPadma[HTChanakya.extra_QTSINGLE_2] = "\u2019"; //Right single quotation mark
HTChanakya.toPadma[HTChanakya.MULTIPLY]         = "\u00D7"; //Unicode for multiplication symbol
HTChanakya.toPadma[HTChanakya.PERCENT]          = "%";
HTChanakya.toPadma[HTChanakya.extra_COLON]      = ":";

HTChanakya.toPadma[HTChanakya.digit_ZERO_AR]    = '0';
HTChanakya.toPadma[HTChanakya.digit_ONE_AR]     = '1';
HTChanakya.toPadma[HTChanakya.digit_TWO_AR]     = '2';
HTChanakya.toPadma[HTChanakya.digit_THREE_AR]   = '3';
HTChanakya.toPadma[HTChanakya.digit_FOUR_AR]    = '4';
HTChanakya.toPadma[HTChanakya.digit_FIVE_AR]    = '5';
HTChanakya.toPadma[HTChanakya.digit_SIX_AR]     = '6';
HTChanakya.toPadma[HTChanakya.digit_SEVEN_AR]   = '7';
HTChanakya.toPadma[HTChanakya.digit_EIGHT_AR]   = '8';
HTChanakya.toPadma[HTChanakya.digit_NINE_AR]    = '9';

HTChanakya.toPadma[HTChanakya.digit_ZERO]       = Padma.digit_ZERO;
HTChanakya.toPadma[HTChanakya.digit_ONE]        = Padma.digit_ONE;
HTChanakya.toPadma[HTChanakya.digit_TWO]        = Padma.digit_TWO;
HTChanakya.toPadma[HTChanakya.digit_THREE]      = Padma.digit_THREE;
HTChanakya.toPadma[HTChanakya.digit_FOUR]       = Padma.digit_FOUR;
HTChanakya.toPadma[HTChanakya.digit_FIVE]       = Padma.digit_FIVE;
HTChanakya.toPadma[HTChanakya.digit_SIX]        = Padma.digit_SIX;
HTChanakya.toPadma[HTChanakya.digit_SEVEN]      = Padma.digit_SEVEN;
HTChanakya.toPadma[HTChanakya.digit_EIGHT]      = Padma.digit_EIGHT;
HTChanakya.toPadma[HTChanakya.digit_NINE]       = Padma.digit_NINE;

HTChanakya.prefixList = new Object();
HTChanakya.prefixList[HTChanakya.vowelsn_I]  = true;
HTChanakya.prefixList[HTChanakya.vowelsn_IM] = true;
HTChanakya.prefixList[HTChanakya.nukta_1]    = true;
HTChanakya.prefixList[HTChanakya.halffm_RI]  = true;
HTChanakya.prefixList[HTChanakya.halffm_RIM] = true;

HTChanakya.suffixList = new Object();
HTChanakya.suffixList[HTChanakya.halffm_RA]     = true;
HTChanakya.suffixList[HTChanakya.halffm_RA_ANU] = true;

HTChanakya.redundantList = new Object();
HTChanakya.redundantList[HTChanakya.misc_UNKNOWN_1] = true;
HTChanakya.redundantList[HTChanakya.misc_UNKNOWN_2] = true;
HTChanakya.redundantList[HTChanakya.misc_UNKNOWN_3] = true;
HTChanakya.redundantList[HTChanakya.misc_UNKNOWN_4] = true;

HTChanakya.overloadList = new Object();
HTChanakya.overloadList[HTChanakya.vowel_A]     = true;
HTChanakya.overloadList[HTChanakya.vowel_AA]    = true;
HTChanakya.overloadList[HTChanakya.vowel_EE]    = true;
HTChanakya.overloadList[HTChanakya.vowel_I]     = true;
HTChanakya.overloadList[HTChanakya.consnt_DDA]  = true;
HTChanakya.overloadList[HTChanakya.consnt_DDHA] = true;
HTChanakya.overloadList[HTChanakya.vowelsn_AA]  = true;
HTChanakya.overloadList[HTChanakya.halffm_KSH]  = true;
HTChanakya.overloadList[HTChanakya.halffm_KHA]  = true;
HTChanakya.overloadList[HTChanakya.halffm_GA]   = true;
HTChanakya.overloadList[HTChanakya.halffm_GHA]  = true;
HTChanakya.overloadList[HTChanakya.halffm_CA]   = true;
HTChanakya.overloadList[HTChanakya.halffm_CC]   = true;
HTChanakya.overloadList[HTChanakya.halffm_JJ]   = true;
HTChanakya.overloadList[HTChanakya.halffm_JNY]  = true;
HTChanakya.overloadList[HTChanakya.halffm_ZA_1] = true;
HTChanakya.overloadList[HTChanakya.halffm_ZA_2] = true;
HTChanakya.overloadList[HTChanakya.halffm_ZA_3] = true;
HTChanakya.overloadList[HTChanakya.halffm_JHA]  = true;
HTChanakya.overloadList[HTChanakya.halffm_NYA]  = true;
HTChanakya.overloadList[HTChanakya.halffm_NNA]  = true;
HTChanakya.overloadList[HTChanakya.halffm_TA]   = true;
HTChanakya.overloadList[HTChanakya.halffm_TT]   = true;
HTChanakya.overloadList[HTChanakya.halffm_TR]   = true;
HTChanakya.overloadList[HTChanakya.halffm_THA]  = true;
HTChanakya.overloadList[HTChanakya.halffm_DHA]  = true;
HTChanakya.overloadList[HTChanakya.halffm_NN]   = true;
HTChanakya.overloadList[HTChanakya.halffm_PHA]  = true;
HTChanakya.overloadList[HTChanakya.halffm_BHA]  = true;
HTChanakya.overloadList[HTChanakya.halffm_PA]   = true;
HTChanakya.overloadList[HTChanakya.halffm_MA]   = true;
HTChanakya.overloadList[HTChanakya.halffm_YA]   = true;
HTChanakya.overloadList[HTChanakya.halffm_LA]   = true;
HTChanakya.overloadList[HTChanakya.halffm_SHA_1]= true;
HTChanakya.overloadList[HTChanakya.halffm_SHA_2]= true;
HTChanakya.overloadList[HTChanakya.halffm_SSA]  = true;
