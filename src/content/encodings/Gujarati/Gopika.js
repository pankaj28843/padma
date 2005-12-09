// $Id: Gopika.js,v 1.2 2005/12/09 15:05:44 vnagarjuna Exp $ -->

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

function Gopika()
{
}

//The interface every dynamic font encoding should implement
Gopika.maxLookupLen = 3;
Gopika.fontFace     = "Gopika";
Gopika.displayName  = "Gopika";
Gopika.script       = Padma.script_GUJARATI;
Gopika.hasSuffixes  = true;

Gopika.lookup = function (str) 
{
    return Gopika.toPadma[str];
}

Gopika.isPrefixSymbol = function (str)
{
    return Gopika.prefixList[str] != null;
}

Gopika.isSuffixSymbol = function (str)
{
    return Gopika.suffixList[str] != null;
}

Gopika.isOverloaded = function (str)
{
    return Gopika.overloadList[str] != null;
}

Gopika.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if ((sign1 == Padma.vowelsn_EE && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_EE))
        return Padma.vowelsn_OO;
    return sign1 + sign2;    
}

//no preprocessing necessary
Gopika.preprocessMessage = function (input)
{
    return input;
}

//Implementation details start here
//48, B1, B9, C0, C4, DD

//Specials
Gopika.anusvara       = "\u006B";
Gopika.candrabindu_1  = "\u0050";
Gopika.candrabindu_2  = "\u0070";

//Vowels
Gopika.vowel_A        = "\u0079";
Gopika.vowel_AA       = "\u0079\u0074";
Gopika.vowel_I        = "\u0052";
Gopika.vowel_II       = "\u0045";
Gopika.vowel_U        = "\u0057";
Gopika.vowel_UU       = "\u0051";
Gopika.vowel_RR       = "\u007D";
Gopika.vowel_EE       = "\u0079\u0075";
Gopika.vowel_AI       = "\u0079\u0069";
Gopika.vowel_OO       = "\u0079\u0074\u0075";
Gopika.vowel_AU       = "\u0079\u0074\u0069";

//Consonants
Gopika.consnt_KA_1    = "\u0066";
Gopika.consnt_KA_2    = "\u00BE";
Gopika.consnt_KHA     = "\u0046";
Gopika.consnt_GA      = "\u0064";
Gopika.consnt_GHA_1   = "\u0044";
Gopika.consnt_GHA_2   = "\u00BC";
Gopika.consnt_NGA     = "\u00CA";

Gopika.consnt_CA      = "\u0061";
Gopika.consnt_CHA     = "\u0041";
Gopika.consnt_JA      = "\u0073";
Gopika.consnt_JHA_1   = "\u00CD";
Gopika.consnt_JHA_2   = "\u00E3";
Gopika.consnt_NYA     = "\u00C5\u0074";

Gopika.consnt_TTA     = "\u0078";
Gopika.consnt_TTHA    = "\u0058";
Gopika.consnt_DDA_1   = "\u007A";
Gopika.consnt_DDA_2   = "\u00FD";
Gopika.consnt_DDHA    = "\u005A";
Gopika.consnt_NNA     = "\u004B";

Gopika.consnt_TA      = "\u003B";
Gopika.consnt_THA     = "\u003A"; 
Gopika.consnt_DA_1    = "\u2019";
Gopika.consnt_DA_2    = "\u00E6";
Gopika.consnt_DHA     = "\u0022";
Gopika.consnt_NA      = "\u006C";

Gopika.consnt_PA      = "\u0076";
Gopika.consnt_PHA     = "\u0056";
Gopika.consnt_BA      = "\u0063";
Gopika.consnt_BHA     = "\u0043";
Gopika.consnt_MA      = "\u0062";

Gopika.consnt_YA_1    = "\u0067";
Gopika.consnt_YA_2    = "\u00E2";
Gopika.consnt_RA      = "\u0068";
Gopika.consnt_LA      = "\u006A";
Gopika.consnt_VA      = "\u004A";
Gopika.consnt_SHA     = "\u004E";
Gopika.consnt_SSA     = "\u00BB\u0074";
Gopika.consnt_SA      = "\u006D";
Gopika.consnt_HA      = "\u006E";
Gopika.consnt_LLA     = "\u00A4";

//Gunintamulu
Gopika.vowelsn_AA     = "\u0074";
Gopika.vowelsn_I_1    = "\u0072";
Gopika.vowelsn_I_2    = "\u00C2";
Gopika.vowelsn_II     = "\u0065";
Gopika.vowelsn_U_1    = "\u0077";
Gopika.vowelsn_U_2    = "\u00B8";
Gopika.vowelsn_UU_1   = "\u0054";
Gopika.vowelsn_UU_2   = "\u0071";
Gopika.vowelsn_UU_3   = "\u00B2";
Gopika.vowelsn_R      = "\u005D";
Gopika.vowelsn_EE     = "\u0075";
Gopika.vowelsn_AI     = "\u0069";
Gopika.vowelsn_OO     = "\u0074\u0075";
Gopika.vowelsn_AU     = "\u0074\u0069";

//Vowel + anusvara
Gopika.vowel_IM       = "\u0024";
Gopika.vowel_IIM      = "\u0023";
Gopika.vowel_UM       = "\u00F4";
Gopika.vowel_UUM      = "\u00B3";

//Matra + modifier
Gopika.vowelsn_IM     = "\u00AE";
Gopika.vowelsn_IIM    = "\u00B4";
Gopika.vowelsn_EEM    = "\u0055";
Gopika.vowelsn_AIM    = "\u0049";

//Half Forms
Gopika.halffm_KSH     = "\u00FB";
Gopika.halffm_KHA     = "\u00CF";
Gopika.halffm_GA      = "\u00F8";
Gopika.halffm_GHA     = "\u00CE";
Gopika.halffm_CA      = "\u00E5";
Gopika.halffm_JA      = "\u00DF";
Gopika.halffm_JNY     = "\u00BF";
Gopika.halffm_NYA     = "\u00C5";
Gopika.halffm_NNA     = "\u00BD";
Gopika.halffm_TA      = "\u00F0";
Gopika.halffm_TT      = "\u2022";
Gopika.halffm_TR      = "\u00BA";
Gopika.halffm_THA     = "\u00DA";
Gopika.halffm_DHA     = "\u00E6";
Gopika.halffm_NA      = "\u004C";
Gopika.halffm_NN      = "\u00D2";
Gopika.halffm_PA      = "\u00C3";
Gopika.halffm_BA      = "\u00E7";
Gopika.halffm_BHA     = "\u00C7";
Gopika.halffm_MA      = "\u0042";
Gopika.halffm_YA      = "\u0047";
Gopika.halffm_RA      = "\u006F";
Gopika.halffm_LA      = "\u00D5";
Gopika.halffm_VA      = "\u00D4";
Gopika.halffm_SHA     = "\u007E";
Gopika.halffm_SSA     = "\u00BB";
Gopika.halffm_SA      = "\u004D";
Gopika.halffm_HY      = "\u00CC";
Gopika.halffm_LLA     = "\u00E9";

//Conjuncts
Gopika.conjct_KK      = "\u00AC";
Gopika.conjct_KR      = "\u00A2";
Gopika.conjct_KSH     = "\u00FB\u0074";
Gopika.conjct_KHT     = "\u00C9";
Gopika.conjct_NGK     = "\u00D1";
Gopika.conjct_NGKH    = "\u00D6";
Gopika.conjct_NGG     = "\u00DC";
Gopika.conjct_NGGH    = "\u00E1";
Gopika.conjct_NGM     = "\u00E0";
Gopika.conjct_JNY     = "\u00BF\u0074";
Gopika.conjct_JJ      = "\u00E4";
Gopika.conjct_JR      = "\u0040";
Gopika.conjct_TTTT    = "\u00E8";
Gopika.conjct_TT_TTH  = "\u00D9";
Gopika.conjct_TTHTTH  = "\u00EA";
Gopika.conjct_DDDD    = "\u00A8";
Gopika.conjct_DD_DDH  = "\u00DB";
Gopika.conjct_DDHDDH  = "\u00EB";
Gopika.conjct_TT      = "\u2022\u0074";
Gopika.conjct_TR      = "\u00BA\u0074";
Gopika.conjct_TN      = "\u00ED";
Gopika.conjct_DGH     = "\u00EC";
Gopika.conjct_DD      = "\u00C6";
Gopika.conjct_D_DH    = "\u00D8";
Gopika.conjct_DB      = "\u00EF";
Gopika.conjct_DM      = "\u00C8";
Gopika.conjct_DR      = "\u00F7";
Gopika.conjct_DV      = "\u00EE";
Gopika.conjct_PT      = "\u00F3";
Gopika.conjct_PN      = "\u00A1";
Gopika.conjct_PR      = "\u00AB";
Gopika.conjct_PHR     = "\u00A3";
Gopika.conjct_SHC     = "\u00F9";
Gopika.conjct_SHN     = "\u00A7";
Gopika.conjct_SHR     = "\u00A9";
Gopika.conjct_SHV     = "\u00B5";
Gopika.conjct_SSTT    = "\u00D0";
Gopika.conjct_HN      = "\u00F6";
Gopika.conjct_HM      = "\u00F1";
Gopika.conjct_HY      = "\u00CC\u0074";
Gopika.conjct_HL      = "\u00F5";
Gopika.conjct_HV      = "\u00FA";

//Combos (aaaaaarghhhhhhhhhhhhhhhhhh!!!!)
Gopika.combo_KSHU     = "\u00FB\u00FE";
Gopika.combo_KSHUU    = "\u00FB\u00CB";
Gopika.combo_KSHR     = "\u00FB\u005C";
Gopika.combo_KHU      = "\u00CF\u00FE";
Gopika.combo_KHUU     = "\u00CF\u00CB";
Gopika.combo_KHR      = "\u00CF\u005C";
Gopika.combo_GU       = "\u00F8\u00FE";
Gopika.combo_GUU      = "\u00F8\u00CB";
Gopika.combo_GR       = "\u00F8\u005C";
Gopika.combo_GHU      = "\u00CE\u00FE";
Gopika.combo_GHUU     = "\u00CE\u00CB";
Gopika.combo_GHR      = "\u00CE\u005C";
Gopika.combo_CU       = "\u00E5\u00FE";
Gopika.combo_CUU      = "\u00E5\u00CB";
Gopika.combo_CR       = "\u00E5\u005C";
Gopika.combo_JAA      = "\u00F2";
Gopika.combo_JII      = "\u0053";
Gopika.combo_NNU      = "\u00BD\u00FE";
Gopika.combo_NNUU     = "\u00BD\u00CB";
Gopika.combo_NNR      = "\u00BD\u005C";
Gopika.combo_TU       = "\u00F0\u00FE";
Gopika.combo_TUU      = "\u00F0\u00CB";
Gopika.combo_TR       = "\u00F0\u005C";
Gopika.combo_THU      = "\u00DA\u00FE";
Gopika.combo_THUU     = "\u00DA\u00CB";
Gopika.combo_THR      = "\u00DA\u005C";
Gopika.combo_DR       = "\u005E";
Gopika.combo_DHU      = "\u00E6\u00FE";
Gopika.combo_DHUU     = "\u00E6\u00CB";
Gopika.combo_DHR      = "\u00E6\u005C";
Gopika.combo_NU       = "\u004C\u00FE";
Gopika.combo_NUU      = "\u004C\u00CB";
Gopika.combo_NR       = "\u004C\u005C";
Gopika.combo_PU       = "\u00C3\u00FE";
Gopika.combo_PUU      = "\u00C3\u00CB";
Gopika.combo_PR       = "\u00C3\u005C";
Gopika.combo_BU       = "\u00E7\u00FE";
Gopika.combo_BUU      = "\u00E7\u00CB";
Gopika.combo_BR       = "\u00E7\u005C";
Gopika.combo_BHU      = "\u00C7\u00FE";
Gopika.combo_BHUU     = "\u00C7\u00CB";
Gopika.combo_BHR      = "\u00C7\u005C";
Gopika.combo_MU       = "\u0042\u00FE";
Gopika.combo_MUU      = "\u0042\u00CB";
Gopika.combo_MR       = "\u0042\u005C";
Gopika.combo_YU       = "\u0047\u00FE";
Gopika.combo_YUU      = "\u0047\u00CB";
Gopika.combo_YR       = "\u0047\u005C";
Gopika.combo_RUU_1    = "\u0059";
Gopika.combo_RUU_2    = "\u00C1";
Gopika.combo_LU       = "\u00D5\u00FE";
Gopika.combo_LUU      = "\u00D5\u00CB";
Gopika.combo_LR       = "\u00D5\u005C";
Gopika.combo_VU       = "\u00D4\u00FE";
Gopika.combo_VUU      = "\u00D4\u00CB";
Gopika.combo_VR       = "\u00D4\u005C";
Gopika.combo_LLU      = "\u00E9\u00FE";
Gopika.combo_LLUU     = "\u00E9\u00CB";
Gopika.combo_LLR      = "\u00E9\u005C";
Gopika.combo_SHU      = "\u007E\u00FE";
Gopika.combo_SHUU     = "\u007E\u00CB";
Gopika.combo_SHR      = "\u007E\u005C";
Gopika.combo_SSU      = "\u00BB\u00FE";
Gopika.combo_SSUU     = "\u00BB\u00CB";
Gopika.combo_SSR      = "\u00BB\u005C";
Gopika.combo_SU       = "\u004D\u00FE";
Gopika.combo_SUU      = "\u004D\u00CB";
Gopika.combo_SR       = "\u004D\u005C";
Gopika.combo_HR       = "\u00D3";
Gopika.combo_HYU      = "\u00CC\u00CB";
Gopika.combo_HYUU     = "\u00CC\u00FE";
Gopika.combo_HYR      = "\u00CC\u005C";

//Half forms of RA
Gopika.halffm_RA_ANU  = "\u004F";

Gopika.vattu_RA_1     = "\u005B";
Gopika.vattu_RA_2     = "\u007B";

Gopika.misc_DANDA     = "\u003E";
Gopika.misc_DDANDA    = "\u003E\u003E";
Gopika.misc_OM        = "\u0060";
Gopika.nukta          = "\u007C";

//Gujarati Digits
Gopika.digit_ZERO     = "\u0030";
Gopika.digit_ONE      = "\u0031";
Gopika.digit_TWO      = "\u0032";
Gopika.digit_THREE    = "\u0033";
Gopika.digit_FOUR     = "\u0034";
Gopika.digit_FIVE     = "\u0035";
Gopika.digit_SIX      = "\u0036";
Gopika.digit_SEVEN    = "\u0037";
Gopika.digit_EIGHT    = "\u0038";
Gopika.digit_NINE     = "\u0039";

//Matches ASCII
Gopika.EXCLAM         = "\u0021";
Gopika.PERCENT        = "\u0025";
Gopika.PAREN_LEFT     = "\u0028";
Gopika.PAREN_RIGHT    = "\u0029";
Gopika.ASTERISK       = "\u002A";
Gopika.PLUS           = "\u002B";
Gopika.COMMA          = "\u002C";
Gopika.PERIOD         = "\u002E";
Gopika.SLASH          = "\u002F";
Gopika.EQUALS         = "\u003D";
Gopika.QUESTION       = "\u003F";

//Does not match ASCII
Gopika.extra_COLON      = "\u0026";
Gopika.extra_SEMICOLON  = "\u003C";
Gopika.extra_HYPHEN     = "\u005F";
Gopika.extra_QTSINGLE_1 = "\u2018";
Gopika.extra_QTSINGLE_2 = "\u00A5";
Gopika.extra_QTSINGLE_3 = "\u00FC";
Gopika.extra_QTDOUBLE_1 = "\u00AA";

Gopika.toPadma = new Object();

Gopika.toPadma[Gopika.anusvara]      = Padma.anusvara;
Gopika.toPadma[Gopika.candrabindu_1] = Padma.candrabindu;
Gopika.toPadma[Gopika.candrabindu_2] = Padma.candrabindu;

Gopika.toPadma[Gopika.vowel_A]    = Padma.vowel_A;
Gopika.toPadma[Gopika.vowel_AA]   = Padma.vowel_AA;
Gopika.toPadma[Gopika.vowel_I]    = Padma.vowel_I;
Gopika.toPadma[Gopika.vowel_II]   = Padma.vowel_II;
Gopika.toPadma[Gopika.vowel_U]    = Padma.vowel_U;
Gopika.toPadma[Gopika.vowel_UU]   = Padma.vowel_UU;
Gopika.toPadma[Gopika.vowel_RR]   = Padma.vowel_RR;
Gopika.toPadma[Gopika.vowel_EE]   = Padma.vowel_EE;
Gopika.toPadma[Gopika.vowel_AI]   = Padma.vowel_AI;
Gopika.toPadma[Gopika.vowel_OO]   = Padma.vowel_OO;
Gopika.toPadma[Gopika.vowel_AU]   = Padma.vowel_AU;

Gopika.toPadma[Gopika.consnt_KA_1]  = Padma.consnt_KA;
Gopika.toPadma[Gopika.consnt_KA_2]  = Padma.consnt_KA;
Gopika.toPadma[Gopika.consnt_KHA]   = Padma.consnt_KHA;
Gopika.toPadma[Gopika.consnt_GA]    = Padma.consnt_GA;
Gopika.toPadma[Gopika.consnt_GHA_1] = Padma.consnt_GHA;
Gopika.toPadma[Gopika.consnt_GHA_2] = Padma.consnt_GHA;
Gopika.toPadma[Gopika.consnt_NGA]   = Padma.consnt_NGA;

Gopika.toPadma[Gopika.consnt_CA]    = Padma.consnt_CA;
Gopika.toPadma[Gopika.consnt_CHA]   = Padma.consnt_CHA;
Gopika.toPadma[Gopika.consnt_JA]    = Padma.consnt_JA;
Gopika.toPadma[Gopika.consnt_JHA_1] = Padma.consnt_JHA;
Gopika.toPadma[Gopika.consnt_JHA_2] = Padma.consnt_JHA;
Gopika.toPadma[Gopika.consnt_NYA]   = Padma.consnt_NYA;

Gopika.toPadma[Gopika.consnt_TTA]   = Padma.consnt_TTA;
Gopika.toPadma[Gopika.consnt_TTHA]  = Padma.consnt_TTHA;
Gopika.toPadma[Gopika.consnt_DDA_1] = Padma.consnt_DDA;
Gopika.toPadma[Gopika.consnt_DDA_2] = Padma.consnt_DDA;
Gopika.toPadma[Gopika.consnt_DDHA]  = Padma.consnt_DDHA;
Gopika.toPadma[Gopika.consnt_NNA]   = Padma.consnt_NNA;

Gopika.toPadma[Gopika.consnt_TA]    = Padma.consnt_TA;
Gopika.toPadma[Gopika.consnt_THA]   = Padma.consnt_THA;
Gopika.toPadma[Gopika.consnt_DA_1]  = Padma.consnt_DA;
Gopika.toPadma[Gopika.consnt_DA_2]  = Padma.consnt_DA;
Gopika.toPadma[Gopika.consnt_DHA]   = Padma.consnt_DHA;
Gopika.toPadma[Gopika.consnt_NA]    = Padma.consnt_NA;

Gopika.toPadma[Gopika.consnt_PA]    = Padma.consnt_PA;
Gopika.toPadma[Gopika.consnt_PHA]   = Padma.consnt_PHA;
Gopika.toPadma[Gopika.consnt_BA]    = Padma.consnt_BA;
Gopika.toPadma[Gopika.consnt_BHA]   = Padma.consnt_BHA;
Gopika.toPadma[Gopika.consnt_MA]    = Padma.consnt_MA;

Gopika.toPadma[Gopika.consnt_YA_1]  = Padma.consnt_YA;
Gopika.toPadma[Gopika.consnt_YA_2]  = Padma.consnt_YA;
Gopika.toPadma[Gopika.consnt_RA]    = Padma.consnt_RA;
Gopika.toPadma[Gopika.consnt_LA]    = Padma.consnt_LA;
Gopika.toPadma[Gopika.consnt_VA]    = Padma.consnt_VA;
Gopika.toPadma[Gopika.consnt_SHA]   = Padma.consnt_SHA;
Gopika.toPadma[Gopika.consnt_SSA]   = Padma.consnt_SSA;
Gopika.toPadma[Gopika.consnt_SA]    = Padma.consnt_SA;
Gopika.toPadma[Gopika.consnt_HA]    = Padma.consnt_HA;
Gopika.toPadma[Gopika.consnt_LLA]   = Padma.consnt_LLA;

//Gunintamulu
Gopika.toPadma[Gopika.vowelsn_AA]   = Padma.vowelsn_AA;
Gopika.toPadma[Gopika.vowelsn_I_1]  = Padma.vowelsn_I;
Gopika.toPadma[Gopika.vowelsn_I_2]  = Padma.vowelsn_I;
Gopika.toPadma[Gopika.vowelsn_II]   = Padma.vowelsn_II;
Gopika.toPadma[Gopika.vowelsn_U_1]  = Padma.vowelsn_U;
Gopika.toPadma[Gopika.vowelsn_U_2]  = Padma.vowelsn_U;
Gopika.toPadma[Gopika.vowelsn_UU_1] = Padma.vowelsn_UU;
Gopika.toPadma[Gopika.vowelsn_UU_2] = Padma.vowelsn_UU;
Gopika.toPadma[Gopika.vowelsn_UU_3] = Padma.vowelsn_UU;
Gopika.toPadma[Gopika.vowelsn_R]    = Padma.vowelsn_R;
Gopika.toPadma[Gopika.vowelsn_EE]   = Padma.vowelsn_EE;
Gopika.toPadma[Gopika.vowelsn_AI]   = Padma.vowelsn_AI;
Gopika.toPadma[Gopika.vowelsn_OO]   = Padma.vowelsn_OO;
Gopika.toPadma[Gopika.vowelsn_AU]   = Padma.vowelsn_AU;

//Vowel + anusvara
Gopika.toPadma[Gopika.vowel_IM]     = Padma.vowel_I + Padma.anusvara;
Gopika.toPadma[Gopika.vowel_IIM]    = Padma.vowel_II + Padma.anusvara;
Gopika.toPadma[Gopika.vowel_UM]     = Padma.vowel_U + Padma.anusvara;
Gopika.toPadma[Gopika.vowel_UUM]    = Padma.vowel_UU + Padma.anusvara;

//matra + modifier
Gopika.toPadma[Gopika.vowelsn_IM]   = Padma.vowelsn_I + Padma.anusvara;
Gopika.toPadma[Gopika.vowelsn_IIM]  = Padma.vowelsn_II + Padma.anusvara;
Gopika.toPadma[Gopika.vowelsn_EEM]  = Padma.vowelsn_EE + Padma.anusvara;
Gopika.toPadma[Gopika.vowelsn_AIM]  = Padma.vowelsn_AI + Padma.anusvara;

//Halffm
Gopika.toPadma[Gopika.halffm_KSH]  = Padma.halffm_KA + Padma.halffm_SSA;
Gopika.toPadma[Gopika.halffm_KHA]  = Padma.halffm_KHA;
Gopika.toPadma[Gopika.halffm_GA]   = Padma.halffm_GA;
Gopika.toPadma[Gopika.halffm_GHA]  = Padma.halffm_GHA;
Gopika.toPadma[Gopika.halffm_CA]   = Padma.halffm_CA;
Gopika.toPadma[Gopika.halffm_JA]   = Padma.halffm_JA;
Gopika.toPadma[Gopika.halffm_JNY]  = Padma.halffm_JA + Padma.halffm_NYA;
Gopika.toPadma[Gopika.halffm_NYA]  = Padma.halffm_NYA;
Gopika.toPadma[Gopika.halffm_NNA]  = Padma.halffm_NNA;
Gopika.toPadma[Gopika.halffm_TA]   = Padma.halffm_TA;
Gopika.toPadma[Gopika.halffm_TT]   = Padma.halffm_TA + Padma.halffm_TA;
Gopika.toPadma[Gopika.halffm_TR]   = Padma.halffm_TA + Padma.halffm_RA;
Gopika.toPadma[Gopika.halffm_THA]  = Padma.halffm_THA;
Gopika.toPadma[Gopika.halffm_DHA]  = Padma.halffm_DHA;
Gopika.toPadma[Gopika.halffm_NA]   = Padma.halffm_NA;
Gopika.toPadma[Gopika.halffm_NN]   = Padma.halffm_NA + Padma.halffm_NA;
Gopika.toPadma[Gopika.halffm_PA]   = Padma.halffm_PA;
Gopika.toPadma[Gopika.halffm_BA]   = Padma.halffm_BA;
Gopika.toPadma[Gopika.halffm_BHA]  = Padma.halffm_BHA;
Gopika.toPadma[Gopika.halffm_MA]   = Padma.halffm_MA;
Gopika.toPadma[Gopika.halffm_YA]   = Padma.halffm_YA;
Gopika.toPadma[Gopika.halffm_RA]   = Padma.halffm_RA;
Gopika.toPadma[Gopika.halffm_LA]   = Padma.halffm_LA;
Gopika.toPadma[Gopika.halffm_VA]   = Padma.halffm_VA;
Gopika.toPadma[Gopika.halffm_SHA]  = Padma.halffm_SHA;
Gopika.toPadma[Gopika.halffm_SSA]  = Padma.halffm_SSA;
Gopika.toPadma[Gopika.halffm_SA]   = Padma.halffm_SA;
Gopika.toPadma[Gopika.halffm_LLA]  = Padma.halffm_LLA;

//Conjuncts
Gopika.toPadma[Gopika.conjct_KK]     = Padma.consnt_KA + Padma.vattu_KA;
Gopika.toPadma[Gopika.conjct_KR]     = Padma.consnt_KA + Padma.vattu_RA;
Gopika.toPadma[Gopika.conjct_KSH]    = Padma.consnt_KA + Padma.vattu_SSA;
Gopika.toPadma[Gopika.conjct_KHT]    = Padma.consnt_KHA + Padma.vattu_TA;
Gopika.toPadma[Gopika.conjct_NGK]    = Padma.consnt_NGA + Padma.vattu_KA;
Gopika.toPadma[Gopika.conjct_NGKH]   = Padma.consnt_NGA + Padma.vattu_KHA;
Gopika.toPadma[Gopika.conjct_NGG]    = Padma.consnt_NGA + Padma.vattu_GA;
Gopika.toPadma[Gopika.conjct_NGGH]   = Padma.consnt_NGA + Padma.vattu_GHA;
Gopika.toPadma[Gopika.conjct_NGM]    = Padma.consnt_NGA + Padma.vattu_MA;
Gopika.toPadma[Gopika.conjct_JNY]    = Padma.consnt_JA + Padma.vattu_NYA;
Gopika.toPadma[Gopika.conjct_JJ]     = Padma.consnt_JA + Padma.vattu_JA;
Gopika.toPadma[Gopika.conjct_JR]     = Padma.consnt_JA + Padma.vattu_RA;
Gopika.toPadma[Gopika.conjct_TTTT]   = Padma.consnt_TTA + Padma.vattu_TTA;
Gopika.toPadma[Gopika.conjct_TT_TTH] = Padma.consnt_TTA + Padma.vattu_TTHA;
Gopika.toPadma[Gopika.conjct_TTHTTH] = Padma.consnt_TTHA + Padma.vattu_TTHA;
Gopika.toPadma[Gopika.conjct_DDDD]   = Padma.consnt_DDA + Padma.vattu_DDA;
Gopika.toPadma[Gopika.conjct_DD_DDH] = Padma.consnt_DDA + Padma.vattu_DDHA;
Gopika.toPadma[Gopika.conjct_DDHDDH] = Padma.consnt_DDHA + Padma.vattu_DDHA;
Gopika.toPadma[Gopika.conjct_TT]     = Padma.consnt_TA + Padma.vattu_TA;
Gopika.toPadma[Gopika.conjct_TR]     = Padma.consnt_TA + Padma.vattu_RA;
Gopika.toPadma[Gopika.conjct_TN]     = Padma.consnt_TA + Padma.vattu_NA;
Gopika.toPadma[Gopika.conjct_DGH]    = Padma.consnt_DA + Padma.vattu_GHA;
Gopika.toPadma[Gopika.conjct_DD]     = Padma.consnt_DA + Padma.vattu_DA;
Gopika.toPadma[Gopika.conjct_D_DH]   = Padma.consnt_DA + Padma.vattu_DHA;
Gopika.toPadma[Gopika.conjct_DB]     = Padma.consnt_DA + Padma.vattu_BA;
Gopika.toPadma[Gopika.conjct_DM]     = Padma.consnt_DA + Padma.vattu_MA;
Gopika.toPadma[Gopika.conjct_DR]     = Padma.consnt_DA + Padma.vattu_RA;
Gopika.toPadma[Gopika.conjct_DV]     = Padma.consnt_DA + Padma.vattu_VA;
Gopika.toPadma[Gopika.conjct_PT]     = Padma.consnt_PA + Padma.vattu_TA;
Gopika.toPadma[Gopika.conjct_PN]     = Padma.consnt_PA + Padma.vattu_NA;
Gopika.toPadma[Gopika.conjct_PR]     = Padma.consnt_PA + Padma.vattu_RA;
Gopika.toPadma[Gopika.conjct_PHR]    = Padma.consnt_PHA + Padma.vattu_RA;
Gopika.toPadma[Gopika.conjct_SHC]    = Padma.consnt_SHA + Padma.vattu_CA;
Gopika.toPadma[Gopika.conjct_SHN]    = Padma.consnt_SHA + Padma.vattu_NA;
Gopika.toPadma[Gopika.conjct_SHR]    = Padma.consnt_SHA + Padma.vattu_RA;
Gopika.toPadma[Gopika.conjct_SHV]    = Padma.consnt_SHA + Padma.vattu_VA;
Gopika.toPadma[Gopika.conjct_SSTT]   = Padma.consnt_SSA + Padma.vattu_TTA;
Gopika.toPadma[Gopika.conjct_HN]     = Padma.consnt_HA + Padma.vattu_NA;
Gopika.toPadma[Gopika.conjct_HM]     = Padma.consnt_HA + Padma.vattu_MA;
Gopika.toPadma[Gopika.conjct_HY]     = Padma.consnt_HA + Padma.vattu_YA;
Gopika.toPadma[Gopika.conjct_HL]     = Padma.consnt_HA + Padma.vattu_LA;
Gopika.toPadma[Gopika.conjct_HV]     = Padma.consnt_HA + Padma.vattu_VA;

//Combos
Gopika.toPadma[Gopika.combo_KSHU]    = Padma.consnt_KA + Padma.vattu_SSA + Padma.vowelsn_U;
Gopika.toPadma[Gopika.combo_KSHUU]   = Padma.consnt_KA + Padma.vattu_SSA + Padma.vowelsn_UU;
Gopika.toPadma[Gopika.combo_KSHR]    = Padma.consnt_KA + Padma.vattu_SSA + Padma.vowelsn_R;
Gopika.toPadma[Gopika.combo_KHU]     = Padma.consnt_KHA + Padma.vowelsn_U;
Gopika.toPadma[Gopika.combo_KHUU]    = Padma.consnt_KHA + Padma.vowelsn_UU;
Gopika.toPadma[Gopika.combo_KHR]     = Padma.consnt_KHA + Padma.vowelsn_R;
Gopika.toPadma[Gopika.combo_GU]      = Padma.consnt_GA + Padma.vowelsn_U;
Gopika.toPadma[Gopika.combo_GUU]     = Padma.consnt_GA + Padma.vowelsn_UU;
Gopika.toPadma[Gopika.combo_GR]      = Padma.consnt_GA + Padma.vowelsn_R;
Gopika.toPadma[Gopika.combo_GHU]     = Padma.consnt_GHA + Padma.vowelsn_U;
Gopika.toPadma[Gopika.combo_GHUU]    = Padma.consnt_GHA + Padma.vowelsn_UU;
Gopika.toPadma[Gopika.combo_GHR]     = Padma.consnt_GHA + Padma.vowelsn_R;
Gopika.toPadma[Gopika.combo_CU]      = Padma.consnt_CA + Padma.vowelsn_U;
Gopika.toPadma[Gopika.combo_CUU]     = Padma.consnt_CA + Padma.vowelsn_UU;
Gopika.toPadma[Gopika.combo_CR]      = Padma.consnt_CA + Padma.vowelsn_R;
Gopika.toPadma[Gopika.combo_JAA]     = Padma.consnt_JA + Padma.vowelsn_AA;
Gopika.toPadma[Gopika.combo_JII]     = Padma.consnt_JA + Padma.vowelsn_II;
Gopika.toPadma[Gopika.combo_NNU]     = Padma.consnt_NNA + Padma.vowelsn_U;
Gopika.toPadma[Gopika.combo_NNUU]    = Padma.consnt_NNA + Padma.vowelsn_UU;
Gopika.toPadma[Gopika.combo_NNR]     = Padma.consnt_NNA + Padma.vowelsn_R;
Gopika.toPadma[Gopika.combo_TU]      = Padma.consnt_TA + Padma.vowelsn_U;
Gopika.toPadma[Gopika.combo_TUU]     = Padma.consnt_TA + Padma.vowelsn_UU;
Gopika.toPadma[Gopika.combo_TR]      = Padma.consnt_TA + Padma.vowelsn_R;
Gopika.toPadma[Gopika.combo_THU]     = Padma.consnt_THA + Padma.vowelsn_U;
Gopika.toPadma[Gopika.combo_THUU]    = Padma.consnt_THA + Padma.vowelsn_UU;
Gopika.toPadma[Gopika.combo_THR]     = Padma.consnt_THA + Padma.vowelsn_R;
Gopika.toPadma[Gopika.combo_DHR]     = Padma.consnt_DA + Padma.vowelsn_R;
Gopika.toPadma[Gopika.combo_DHU]     = Padma.consnt_DHA + Padma.vowelsn_U;
Gopika.toPadma[Gopika.combo_DHUU]    = Padma.consnt_DHA + Padma.vowelsn_UU;
Gopika.toPadma[Gopika.combo_DHR]     = Padma.consnt_DHA + Padma.vowelsn_R;
Gopika.toPadma[Gopika.combo_NU]      = Padma.consnt_NA + Padma.vowelsn_U;
Gopika.toPadma[Gopika.combo_NUU]     = Padma.consnt_NA + Padma.vowelsn_UU;
Gopika.toPadma[Gopika.combo_NR]      = Padma.consnt_NA + Padma.vowelsn_R;
Gopika.toPadma[Gopika.combo_PU]      = Padma.consnt_PA + Padma.vowelsn_U;
Gopika.toPadma[Gopika.combo_PUU]     = Padma.consnt_PA + Padma.vowelsn_UU;
Gopika.toPadma[Gopika.combo_PR]      = Padma.consnt_PA + Padma.vowelsn_R;
Gopika.toPadma[Gopika.combo_BU]      = Padma.consnt_BA + Padma.vowelsn_U;
Gopika.toPadma[Gopika.combo_BUU]     = Padma.consnt_BA + Padma.vowelsn_UU;
Gopika.toPadma[Gopika.combo_BR]      = Padma.consnt_BA + Padma.vowelsn_R;
Gopika.toPadma[Gopika.combo_BHU]     = Padma.consnt_BHA + Padma.vowelsn_U;
Gopika.toPadma[Gopika.combo_BHUU]    = Padma.consnt_BHA + Padma.vowelsn_UU;
Gopika.toPadma[Gopika.combo_BHR]     = Padma.consnt_BHA + Padma.vowelsn_R;
Gopika.toPadma[Gopika.combo_MU]      = Padma.consnt_MA + Padma.vowelsn_U;
Gopika.toPadma[Gopika.combo_MUU]     = Padma.consnt_MA + Padma.vowelsn_UU;
Gopika.toPadma[Gopika.combo_MR]      = Padma.consnt_MA + Padma.vowelsn_R;
Gopika.toPadma[Gopika.combo_YU]      = Padma.consnt_YA + Padma.vowelsn_U;
Gopika.toPadma[Gopika.combo_YUU]     = Padma.consnt_YA + Padma.vowelsn_UU;
Gopika.toPadma[Gopika.combo_YR]      = Padma.consnt_YA + Padma.vowelsn_R;
Gopika.toPadma[Gopika.combo_RUU_1]   = Padma.consnt_RA + Padma.vowelsn_UU;
Gopika.toPadma[Gopika.combo_RUU_2]   = Padma.consnt_RA + Padma.vowelsn_UU;
Gopika.toPadma[Gopika.combo_LU]      = Padma.consnt_LA + Padma.vowelsn_U;
Gopika.toPadma[Gopika.combo_LUU]     = Padma.consnt_LA + Padma.vowelsn_UU;
Gopika.toPadma[Gopika.combo_LR]      = Padma.consnt_LA + Padma.vowelsn_R;
Gopika.toPadma[Gopika.combo_VU]      = Padma.consnt_VA + Padma.vowelsn_U;
Gopika.toPadma[Gopika.combo_VUU]     = Padma.consnt_VA + Padma.vowelsn_UU;
Gopika.toPadma[Gopika.combo_VR]      = Padma.consnt_VA + Padma.vowelsn_R;
Gopika.toPadma[Gopika.combo_LLU]     = Padma.consnt_LLA + Padma.vowelsn_U;
Gopika.toPadma[Gopika.combo_LLUU]    = Padma.consnt_LLA + Padma.vowelsn_UU;
Gopika.toPadma[Gopika.combo_LLR]     = Padma.consnt_LLA + Padma.vowelsn_R;
Gopika.toPadma[Gopika.combo_SHU]     = Padma.consnt_SHA + Padma.vowelsn_U;
Gopika.toPadma[Gopika.combo_SHUU]    = Padma.consnt_SHA + Padma.vowelsn_UU;
Gopika.toPadma[Gopika.combo_SHR]     = Padma.consnt_SHA + Padma.vowelsn_R;
Gopika.toPadma[Gopika.combo_SSU]     = Padma.consnt_SSA + Padma.vowelsn_U;
Gopika.toPadma[Gopika.combo_SSUU]    = Padma.consnt_SSA + Padma.vowelsn_UU;
Gopika.toPadma[Gopika.combo_SSR]     = Padma.consnt_SSA + Padma.vowelsn_R;
Gopika.toPadma[Gopika.combo_SU]      = Padma.consnt_SA + Padma.vowelsn_U;
Gopika.toPadma[Gopika.combo_SUU]     = Padma.consnt_LA + Padma.vowelsn_UU;
Gopika.toPadma[Gopika.combo_SR]      = Padma.consnt_SA + Padma.vowelsn_R;
Gopika.toPadma[Gopika.combo_HR]      = Padma.consnt_HA + Padma.vowelsn_R;
Gopika.toPadma[Gopika.combo_HYU]     = Padma.consnt_HA + Padma.vattu_YA + Padma.vowelsn_U;
Gopika.toPadma[Gopika.combo_HYUU]    = Padma.consnt_HA + Padma.vattu_YA + Padma.vowelsn_UU;
Gopika.toPadma[Gopika.combo_HYR]     = Padma.consnt_HA + Padma.vattu_YA + Padma.vowelsn_R;

Gopika.toPadma[Gopika.halffm_RA_ANU] = Padma.halffm_RA + Padma.anusvara;

Gopika.toPadma[Gopika.vattu_RA_1]    = Padma.vattu_RA;
Gopika.toPadma[Gopika.vattu_RA_2]    = Padma.vattu_RA;

Gopika.toPadma[Gopika.misc_DANDA]    = Padma.danda;
Gopika.toPadma[Gopika.misc_DDANDA]   = Padma.ddanda;
Gopika.toPadma[Gopika.misc_OM]       = Padma.om;
Gopika.toPadma[Gopika.nukta]         = Padma.nukta;

//Digits
Gopika.toPadma[Gopika.digit_ZERO]    = Padma.digit_ZERO;
Gopika.toPadma[Gopika.digit_ONE]     = Padma.digit_ONE;
Gopika.toPadma[Gopika.digit_TWO]     = Padma.digit_TWO;
Gopika.toPadma[Gopika.digit_THREE]   = Padma.digit_THREE;
Gopika.toPadma[Gopika.digit_FOUR]    = Padma.digit_FOUR;
Gopika.toPadma[Gopika.digit_FIVE]    = Padma.digit_FIVE;
Gopika.toPadma[Gopika.digit_SIX]     = Padma.digit_SIX;
Gopika.toPadma[Gopika.digit_SEVEN]   = Padma.digit_SEVEN;
Gopika.toPadma[Gopika.digit_EIGHT]   = Padma.digit_EIGHT;
Gopika.toPadma[Gopika.digit_NINE]    = Padma.digit_NINE;

//Does not match ASCII
Gopika.toPadma[Gopika.extra_COLON]      = ":";
Gopika.toPadma[Gopika.extra_SEMICOLON]  = ";";
Gopika.toPadma[Gopika.extra_HYPHEN]     = "-";
Gopika.toPadma[Gopika.extra_QTSINGLE_1] = "'";
Gopika.toPadma[Gopika.extra_QTSINGLE_2] = "'";
Gopika.toPadma[Gopika.extra_QTSINGLE_3] = "'";
Gopika.toPadma[Gopika.extra_QTDOUBLE_1] = '"';

Gopika.prefixList = new Object();
Gopika.prefixList[Gopika.vowelsn_I_1] = true;
Gopika.prefixList[Gopika.vowelsn_I_2] = true;
Gopika.prefixList[Gopika.vowelsn_IM]  = true;
Gopika.prefixList[Gopika.nukta]       = true;

Gopika.suffixList = new Object();
Gopika.suffixList[Gopika.halffm_RA]     = true;
Gopika.suffixList[Gopika.halffm_RA_ANU] = true;

Gopika.overloadList = new Object();
Gopika.overloadList[Gopika.vowel_A]     = true;
Gopika.overloadList[Gopika.vowel_AA]    = true;
Gopika.overloadList[Gopika.vowelsn_AA]  = true;
Gopika.overloadList[Gopika.halffm_KSH]  = true;
Gopika.overloadList[Gopika.halffm_KHA]  = true;
Gopika.overloadList[Gopika.halffm_GA]   = true;
Gopika.overloadList[Gopika.halffm_GHA]  = true;
Gopika.overloadList[Gopika.halffm_CA]   = true;
Gopika.overloadList[Gopika.halffm_JNY]  = true;
Gopika.overloadList[Gopika.halffm_NYA]  = true;
Gopika.overloadList[Gopika.halffm_NNA]  = true;
Gopika.overloadList[Gopika.halffm_TA]   = true;
Gopika.overloadList[Gopika.halffm_TT]   = true;
Gopika.overloadList[Gopika.halffm_TR]   = true;
Gopika.overloadList[Gopika.halffm_THA]  = true;
Gopika.overloadList[Gopika.halffm_DHA]  = true;
Gopika.overloadList[Gopika.halffm_NA]   = true;
Gopika.overloadList[Gopika.halffm_PA]   = true;
Gopika.overloadList[Gopika.halffm_BA]   = true;
Gopika.overloadList[Gopika.halffm_BHA]  = true;
Gopika.overloadList[Gopika.halffm_MA]   = true;
Gopika.overloadList[Gopika.halffm_YA]   = true;
Gopika.overloadList[Gopika.halffm_LA]   = true;
Gopika.overloadList[Gopika.halffm_VA]   = true;
Gopika.overloadList[Gopika.halffm_LLA]  = true;
Gopika.overloadList[Gopika.halffm_SHA]  = true;
Gopika.overloadList[Gopika.halffm_SSA]  = true
Gopika.overloadList[Gopika.halffm_SA]   = true;
Gopika.overloadList[Gopika.halffm_HY]   = true;
Gopika.overloadList[Gopika.misc_DANDA]  = true;
