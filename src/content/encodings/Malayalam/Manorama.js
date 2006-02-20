// $Id: Manorama.js,v 1.6 2006/02/20 21:16:29 vnagarjuna Exp $ -->

//Copyright 2005-2006 Nagarjuna Venna <vnagarjuna@yahoo.com>

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

//Manorama Malayalam

function Manorama()
{
}

//The interface every dynamic font encoding should implement
Manorama.maxLookupLen = 2;
Manorama.fontFace     = "Manorama";
Manorama.displayName  = Manorama.fontFace;
Manorama.script       = Padma.script_MALAYALAM;

Manorama.lookup = function (str) 
{
    return Manorama.toPadma[str];
}

Manorama.isPrefixSymbol = function (str)
{
    return Manorama.prefixList[str] != null;
}

Manorama.isOverloaded = function (str)
{
    return Manorama.overloadList[str] != null;
}

Manorama.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if ((sign1 == Padma.vowelsn_E && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_E))
        return Padma.vowelsn_O;
    if ((sign1 == Padma.vowelsn_EE && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_EE))
        return Padma.vowelsn_OO;
    return sign1 + sign2;
}

Manorama.isRedundant = function (str)
{
    return Manorama.redundantList[str] != null;
}

//Implementation details start here

//Specials
Manorama.visarga        = "\u00A3";
Manorama.anusvara       = "\u00A2";
Manorama.virama_1       = "\u00A1"; //Chandrakkala
Manorama.virama_2       = "\u00ED"; //Chandrakkala

//Vowels
Manorama.vowel_A        = "\u00A5";
Manorama.vowel_AA       = "\u00A6";
Manorama.vowel_I        = "\u00A7";
Manorama.vowel_II       = "\u00A8";
Manorama.vowel_U        = "\u00A9";
Manorama.vowel_UU       = "\u00AA";
Manorama.vowel_R_1      = "\u0060";
Manorama.vowel_R_2      = "\u00AB";
Manorama.vowel_RR       = "\u00AC";
Manorama.vowel_E        = "\u00AE";
Manorama.vowel_EE       = "\u00AF";               
Manorama.vowel_AI_1     = "\u00B0";
Manorama.vowel_AI_2     = "\u00E6\u00AE";
Manorama.vowel_O        = "\u00B2";
Manorama.vowel_OO       = "\u00B3";
Manorama.vowel_AU       = "\u00B4";

//Consonants
Manorama.consnt_KA      = "\u00B5";
Manorama.consnt_KHA_1   = "\u007E";
Manorama.consnt_KHA_2   = "\u00B6";
Manorama.consnt_GA_1    = "\u00B1";
Manorama.consnt_GA_2    = "\u00B7";
Manorama.consnt_GHA     = "\u00B8";
Manorama.consnt_NGA     = "\u00B9";

Manorama.consnt_CA      = "\u00BA";
Manorama.consnt_CHA     = "\u00BB";
Manorama.consnt_JA      = "\u00BC";
Manorama.consnt_JHA     = "\u00BD";
Manorama.consnt_NYA     = "\u00BE";

Manorama.consnt_TTA     = "\u00BF";
Manorama.consnt_TTHA    = "\u00C0";
Manorama.consnt_DDA     = "\u00C1";
Manorama.consnt_DDHA    = "\u00C2";
Manorama.consnt_NNA     = "\u00C3";

Manorama.consnt_TA      = "\u00C4";
Manorama.consnt_THA_1   = "\u0040";
Manorama.consnt_THA_2   = "\u00C5";
Manorama.consnt_DA      = "\u00C6";
Manorama.consnt_DHA     = "\u00C7";
Manorama.consnt_NA      = "\u00C8";

Manorama.consnt_PA      = "\u00C9";
Manorama.consnt_PHA     = "\u00CB";
Manorama.consnt_BA      = "\u00CC";
Manorama.consnt_BHA     = "\u00CD";
Manorama.consnt_MA      = "\u00CE";

Manorama.consnt_YA      = "\u00CF";
Manorama.consnt_RA      = "\u00F8";
Manorama.consnt_LA      = "\u00DC";
Manorama.consnt_VA      = "\u00D5";
Manorama.consnt_SHA     = "\u00D6";
Manorama.consnt_SSA     = "\u00D7";
Manorama.consnt_SA      = "\u00D8";

Manorama.consnt_HA      = "\u00D9";
Manorama.consnt_LLA     = "\u007B";
Manorama.consnt_ZHA     = "\u00DD";
Manorama.consnt_RRA     = "\u00F9";

//Gunintamulu
Manorama.vowelsn_AA     = "\u00DE";
Manorama.vowelsn_I_1    = "\u00DF";
Manorama.vowelsn_I_2    = "\u00F2";
Manorama.vowelsn_II     = "\u00E0";
Manorama.vowelsn_U_1    = "\u00E1";
Manorama.vowelsn_U_2    = "\u00F3";
Manorama.vowelsn_U_3    = "\u00F6";
Manorama.vowelsn_UU_1   = "\u00E2";
Manorama.vowelsn_UU_2   = "\u00F4";
Manorama.vowelsn_UU_3   = "\u00F5";
Manorama.vowelsn_R_1    = "\u00E3";
Manorama.vowelsn_R_2    = "\u00E4";
Manorama.vowelsn_RR     = "\u00E3\u00EC";
Manorama.vowelsn_E      = "\u00E6";
Manorama.vowelsn_EE     = "\u00E7";
Manorama.vowelsn_AI_1   = "\u00E6\u00E6";
Manorama.vowelsn_AI_2   = "\u00E8";
//vowelsigns o and O have two separate glyphs, one on left and one on right.
Manorama.vowelsn_AU     = "\u00EC";

//Chillu (5)
Manorama.chillu_ENN     = "\u0059";
Manorama.chillu_IN      = "\u0058";
Manorama.chillu_IR_1    = "\u0056";
Manorama.chillu_IR_2    = "\u005E";
Manorama.chillu_IL      = "\u0057";
Manorama.chillu_ILL_1   = "\u005A";
Manorama.chillu_ILL_2   = "\u005C";

//vattulu (consonant signs)
Manorama.vattu_TA       = "\u00F1";
Manorama.vattu_YA       = "\u0063";
Manorama.vattu_RA       = "\u0064";
Manorama.vattu_LA_1     = "\u00EF";
Manorama.vattu_LA_2     = "\u00F0";
Manorama.vattu_VA       = "\u0062";

//kooTTaksharangngaL
Manorama.conj_KK        = "\u0041";
Manorama.conj_KLL       = "\u00D0";
Manorama.conj_KSH       = "\u0066";
Manorama.conj_GG        = "\u0050";
Manorama.conj_GN        = "\u006F";
Manorama.conj_GM        = "\u0075";
Manorama.conj_NGK       = "\u0043";  
Manorama.conj_NGNG      = "\u0042";

Manorama.conj_CC_1      = "\u201A";
Manorama.conj_CC_2      = "\u00BA\u00EE";
Manorama.conj_NYC       = "\u0046";
Manorama.conj_NYNY      = "\u0045";

Manorama.conj_TTTT      = "\u0047";
Manorama.conj_NNTT      = "\u0049";
Manorama.conj_NNDD      = "\u006D";
Manorama.conj_NNNN      = "\u0048";
Manorama.conj_NNM       = "\u0070";

Manorama.conj_T_T       = "\u004A";
Manorama.conj_T_TH      = "\u006A";
Manorama.conj_TBH       = "\u0071";
Manorama.conj_TM        = "\u0076";
Manorama.conj_TN        = "\u0079";
Manorama.conj_TS        = "\u0072";
Manorama.conj_DD        = "\u0067";
Manorama.conj_D_DH      = "\u0069";
Manorama.conj_NT        = "\u004C";
Manorama.conj_NTH       = "\u0073";
Manorama.conj_ND        = "\u0077";
Manorama.conj_NDH       = "\u0074";
Manorama.conj_N_N       = "\u004B";
Manorama.conj_NM        = "\u007A";
Manorama.conj_NRR       = "\u0061"; 
Manorama.conj_NAU       = "\u0065"; //npollu for me, nau for paul

Manorama.conj_PP        = "\u004D";
Manorama.conj_PLL       = "\u0192";
Manorama.conj_BB_1      = "\u201E";
Manorama.conj_BB_2      = "\u00CC\u00EE";
Manorama.conj_BLL       = "\u2020";
Manorama.conj_MP        = "\u004F";
Manorama.conj_MM        = "\u004E";
Manorama.conj_MLL       = "\u007C";

Manorama.conj_YY        = "\u2021";
Manorama.conj_L_L       = "\u02C6";
Manorama.conj_VV_1      = "\u0152";
Manorama.conj_VV_2      = "\u00D5\u00EE";

Manorama.conj_SHLL      = "\u2030";
Manorama.conj_SHSH      = "\u00DB";
Manorama.conj_SLL       = "\u0160";
Manorama.conj_S_S       = "\u0054";

Manorama.conj_HN        = "\u00AD";
Manorama.conj_HLL       = "\u2026";
Manorama.conj_LLLL      = "\u0055";

Manorama.conj_RRRR_1    = "\u0078"; //ta as in steel
Manorama.conj_RRRR_2    = "\u00DA"; //ta as in steel

//Consonat(s) + vowel combinations
Manorama.combo_KR       = "\u2039";

//Digits
Manorama.digit_ZERO     = "\u0030";
Manorama.digit_ONE      = "\u0031";
Manorama.digit_TWO      = "\u0032";
Manorama.digit_THREE    = "\u0033";
Manorama.digit_FOUR     = "\u0034";
Manorama.digit_FIVE     = "\u0035";
Manorama.digit_SIX      = "\u0036";
Manorama.digit_SEVEN    = "\u0037";
Manorama.digit_EIGHT    = "\u0038";
Manorama.digit_NINE     = "\u0039";

//Matches ASCII
Manorama.EXCLAM         = "\u0021";
Manorama.PERCENT        = "\u0025";
Manorama.QTSINGLE       = "\u0027";
Manorama.PARENLEFT      = "\u0028";
Manorama.PARENRIGT      = "\u0029";
Manorama.ASTERISK       = "\u002A";
Manorama.PLUS           = "\u002B";
Manorama.COMMA          = "\u002C";
Manorama.PERIOD         = "\u002E";
Manorama.SLASH          = "\u002F";
Manorama.COLON          = "\u003A";
Manorama.SEMICOLON      = "\u003B";
Manorama.LESSTHAN       = "\u003C";
Manorama.EQUALS         = "\u003D";
Manorama.GREATERTHAN    = "\u003E";
Manorama.QUESTION       = "\u003F";

//Does not match ASCII
Manorama.extra_DBLQT_1  = "\u0051";
Manorama.extra_DBLQT_2  = "\u0052";
Manorama.extra_PERCENT  = "\u0023";
Manorama.extra_ASTERISK = "\u0024";
Manorama.extra_PLUS     = "\u0026";
Manorama.extra_QTSINGLE = "\u0022";
Manorama.extra_PERIOD   = "\u0044";
Manorama.extra_HYPHEN_1 = "\u005F";
Manorama.extra_HYPHEN_2 = "\u2013";
Manorama.extra_HYPHEN_3 = "\u2014";
Manorama.extra_HYPHEN_4 = "\u00EA";
Manorama.extra_HYPHEN_5 = "\u00EB";

//Dont need
Manorama.misc_UNKNOWN_1  = "\u002D";
Manorama.misc_UNKNOWN_2  = "\u02DC";
Manorama.misc_UNKNOWN_3  = "\u2122";
Manorama.misc_UNKNOWN_4  = "\u0161";
Manorama.misc_UNKNOWN_5  = "\u203A";
Manorama.misc_UNKNOWN_6  = "\u0153";
Manorama.misc_UNKNOWN_7  = "\u0178";
Manorama.misc_UNKNOWN_8  = "\u00A4";
Manorama.misc_UNKNOWN_9  = "\u00FF";

Manorama.toPadma = new Object();

Manorama.toPadma[Manorama.anusvara] = Padma.anusvara;
Manorama.toPadma[Manorama.visarga]  = Padma.visarga;
Manorama.toPadma[Manorama.virama_1] = Padma.chandrakkala;
Manorama.toPadma[Manorama.virama_2] = Padma.chandrakkala;

Manorama.toPadma[Manorama.vowel_A]  = Padma.vowel_A;
Manorama.toPadma[Manorama.vowel_AA] = Padma.vowel_AA;
Manorama.toPadma[Manorama.vowel_I]  = Padma.vowel_I;
Manorama.toPadma[Manorama.vowel_II] = Padma.vowel_II;
Manorama.toPadma[Manorama.vowel_U]  = Padma.vowel_U;
Manorama.toPadma[Manorama.vowel_UU] = Padma.vowel_UU;
Manorama.toPadma[Manorama.vowel_R_1] = Padma.vowel_R;
Manorama.toPadma[Manorama.vowel_R_2] = Padma.vowel_R;
Manorama.toPadma[Manorama.vowel_RR] = Padma.vowel_RR;
Manorama.toPadma[Manorama.vowel_E]  = Padma.vowel_E;
Manorama.toPadma[Manorama.vowel_EE] = Padma.vowel_EE;
Manorama.toPadma[Manorama.vowel_AI_1] = Padma.vowel_AI;
Manorama.toPadma[Manorama.vowel_AI_2] = Padma.vowel_AI;
Manorama.toPadma[Manorama.vowel_O]  = Padma.vowel_O;
Manorama.toPadma[Manorama.vowel_OO] = Padma.vowel_OO;
Manorama.toPadma[Manorama.vowel_AU] = Padma.vowel_AU;

Manorama.toPadma[Manorama.consnt_KA]  = Padma.consnt_KA;
Manorama.toPadma[Manorama.consnt_KHA_1] = Padma.consnt_KHA;
Manorama.toPadma[Manorama.consnt_KHA_2] = Padma.consnt_KHA;
Manorama.toPadma[Manorama.consnt_GA_1]  = Padma.consnt_GA;
Manorama.toPadma[Manorama.consnt_GA_2]  = Padma.consnt_GA;
Manorama.toPadma[Manorama.consnt_GHA] = Padma.consnt_GHA;
Manorama.toPadma[Manorama.consnt_NGA] = Padma.consnt_NGA;

Manorama.toPadma[Manorama.consnt_CA]  = Padma.consnt_CA;
Manorama.toPadma[Manorama.consnt_CHA] = Padma.consnt_CHA;
Manorama.toPadma[Manorama.consnt_JA]  = Padma.consnt_JA;
Manorama.toPadma[Manorama.consnt_JHA] = Padma.consnt_JHA;
Manorama.toPadma[Manorama.consnt_NYA] = Padma.consnt_NYA;

Manorama.toPadma[Manorama.consnt_TTA]  = Padma.consnt_TTA;
Manorama.toPadma[Manorama.consnt_TTHA] = Padma.consnt_TTHA;
Manorama.toPadma[Manorama.consnt_DDA]  = Padma.consnt_DDA;
Manorama.toPadma[Manorama.consnt_DDHA] = Padma.consnt_DDHA;
Manorama.toPadma[Manorama.consnt_NNA]  = Padma.consnt_NNA;

Manorama.toPadma[Manorama.consnt_TA]  = Padma.consnt_TA;
Manorama.toPadma[Manorama.consnt_THA_1] = Padma.consnt_THA;
Manorama.toPadma[Manorama.consnt_THA_2] = Padma.consnt_THA;
Manorama.toPadma[Manorama.consnt_DA]  = Padma.consnt_DA;
Manorama.toPadma[Manorama.consnt_DHA] = Padma.consnt_DHA;
Manorama.toPadma[Manorama.consnt_NA]  = Padma.consnt_NA;

Manorama.toPadma[Manorama.consnt_PA]  = Padma.consnt_PA;
Manorama.toPadma[Manorama.consnt_PHA] = Padma.consnt_PHA;
Manorama.toPadma[Manorama.consnt_BA]  = Padma.consnt_BA;
Manorama.toPadma[Manorama.consnt_BHA] = Padma.consnt_BHA;
Manorama.toPadma[Manorama.consnt_MA]  = Padma.consnt_MA;

Manorama.toPadma[Manorama.consnt_YA]  = Padma.consnt_YA;
Manorama.toPadma[Manorama.consnt_RA]  = Padma.consnt_RA;
Manorama.toPadma[Manorama.consnt_LA]  = Padma.consnt_LA;
Manorama.toPadma[Manorama.consnt_VA]  = Padma.consnt_VA;
Manorama.toPadma[Manorama.consnt_SHA] = Padma.consnt_SHA;
Manorama.toPadma[Manorama.consnt_SSA] = Padma.consnt_SSA;
Manorama.toPadma[Manorama.consnt_SA]  = Padma.consnt_SA;

Manorama.toPadma[Manorama.consnt_HA] = Padma.consnt_HA;
Manorama.toPadma[Manorama.consnt_LLA] = Padma.consnt_LLA;
Manorama.toPadma[Manorama.consnt_ZHA] = Padma.consnt_ZHA;
Manorama.toPadma[Manorama.consnt_RRA] = Padma.consnt_RRA;

//Gunintamulu
Manorama.toPadma[Manorama.vowelsn_AA] = Padma.vowelsn_AA;
Manorama.toPadma[Manorama.vowelsn_I_1]  = Padma.vowelsn_I;
Manorama.toPadma[Manorama.vowelsn_I_2]  = Padma.vowelsn_I;
Manorama.toPadma[Manorama.vowelsn_II] = Padma.vowelsn_II;
Manorama.toPadma[Manorama.vowelsn_U_1]  = Padma.vowelsn_U;
Manorama.toPadma[Manorama.vowelsn_U_2]  = Padma.vowelsn_U;
Manorama.toPadma[Manorama.vowelsn_U_3]  = Padma.vowelsn_U;
Manorama.toPadma[Manorama.vowelsn_UU_1] = Padma.vowelsn_UU;
Manorama.toPadma[Manorama.vowelsn_UU_2] = Padma.vowelsn_UU;
Manorama.toPadma[Manorama.vowelsn_UU_3] = Padma.vowelsn_UU;
Manorama.toPadma[Manorama.vowelsn_R_1]  = Padma.vowelsn_R;
Manorama.toPadma[Manorama.vowelsn_R_2]  = Padma.vowelsn_R;
Manorama.toPadma[Manorama.vowelsn_E]  = Padma.vowelsn_E;
Manorama.toPadma[Manorama.vowelsn_EE] = Padma.vowelsn_EE;
Manorama.toPadma[Manorama.vowelsn_AI_1] = Padma.vowelsn_AI;
Manorama.toPadma[Manorama.vowelsn_AI_2] = Padma.vowelsn_AI;
Manorama.toPadma[Manorama.vowelsn_AU] = Padma.vowelsn_AU;

//Chillu
Manorama.toPadma[Manorama.chillu_ENN] = Padma.consnt_NNA + Padma.chillu;
Manorama.toPadma[Manorama.chillu_IN]  = Padma.consnt_NA + Padma.chillu;
Manorama.toPadma[Manorama.chillu_IR_1] = Padma.consnt_RA + Padma.chillu;
Manorama.toPadma[Manorama.chillu_IR_2] = Padma.consnt_RA + Padma.chillu;
Manorama.toPadma[Manorama.chillu_IL]  = Padma.consnt_LA + Padma.chillu;
Manorama.toPadma[Manorama.chillu_ILL_1] = Padma.consnt_LLA + Padma.chillu;
Manorama.toPadma[Manorama.chillu_ILL_2] = Padma.consnt_LLA + Padma.chillu;

//vattulu
Manorama.toPadma[Manorama.vattu_TA]  = Padma.vattu_TA;
Manorama.toPadma[Manorama.vattu_YA]  = Padma.vattu_YA;
Manorama.toPadma[Manorama.vattu_RA]  = Padma.vattu_RA;
Manorama.toPadma[Manorama.vattu_LA_1] = Padma.vattu_LA;
Manorama.toPadma[Manorama.vattu_LA_2] = Padma.vattu_LA;
Manorama.toPadma[Manorama.vattu_VA]  = Padma.vattu_VA;

//kooTTaksharangngaL
Manorama.toPadma[Manorama.conj_KK]   = Padma.consnt_KA +  Padma.vattu_KA;
Manorama.toPadma[Manorama.conj_KLL]  = Padma.consnt_KA +  Padma.vattu_LLA;
Manorama.toPadma[Manorama.conj_KSH]  = Padma.consnt_KA +  Padma.vattu_SSA;
Manorama.toPadma[Manorama.conj_GG]   = Padma.consnt_GA +  Padma.vattu_GA;
Manorama.toPadma[Manorama.conj_GN]   = Padma.consnt_GA +  Padma.vattu_NA;
Manorama.toPadma[Manorama.conj_GM]   = Padma.consnt_GA +  Padma.vattu_MA;
Manorama.toPadma[Manorama.conj_NGK]  = Padma.consnt_NGA +  Padma.vattu_KA;
Manorama.toPadma[Manorama.conj_NGNG] = Padma.consnt_NGA +  Padma.vattu_NGA;

Manorama.toPadma[Manorama.conj_CC_1] = Padma.consnt_CA +  Padma.vattu_CA;
Manorama.toPadma[Manorama.conj_CC_2] = Padma.consnt_CA +  Padma.vattu_CA;
Manorama.toPadma[Manorama.conj_NYC]  = Padma.consnt_NYA +  Padma.vattu_CA;
Manorama.toPadma[Manorama.conj_NYNY] = Padma.consnt_NYA +  Padma.vattu_NYA;

Manorama.toPadma[Manorama.conj_TTTT] = Padma.consnt_TTA +  Padma.vattu_TTA;
Manorama.toPadma[Manorama.conj_NNTT] = Padma.consnt_NNA +  Padma.vattu_TTA;
Manorama.toPadma[Manorama.conj_NNDD] = Padma.consnt_NNA +  Padma.vattu_DDA;
Manorama.toPadma[Manorama.conj_NNNN] = Padma.consnt_NNA +  Padma.vattu_NNA;
Manorama.toPadma[Manorama.conj_NNM]  = Padma.consnt_NNA +  Padma.vattu_MA;

Manorama.toPadma[Manorama.conj_T_T]  = Padma.consnt_TA +  Padma.vattu_TA;
Manorama.toPadma[Manorama.conj_T_TH] = Padma.consnt_TA +  Padma.vattu_THA;
Manorama.toPadma[Manorama.conj_TBH]  = Padma.consnt_TA +  Padma.vattu_BHA;
Manorama.toPadma[Manorama.conj_TM]   = Padma.consnt_TA +  Padma.vattu_MA;
Manorama.toPadma[Manorama.conj_TN]   = Padma.consnt_TA +  Padma.vattu_NA;
Manorama.toPadma[Manorama.conj_TS]   = Padma.consnt_TA +  Padma.vattu_SA;
Manorama.toPadma[Manorama.conj_DD]   = Padma.consnt_DA +  Padma.vattu_DA;
Manorama.toPadma[Manorama.conj_D_DH] = Padma.consnt_DA +  Padma.vattu_DHA;
Manorama.toPadma[Manorama.conj_NT]   = Padma.consnt_NA +  Padma.vattu_TA;
Manorama.toPadma[Manorama.conj_NTH]  = Padma.consnt_NA +  Padma.vattu_THA;
Manorama.toPadma[Manorama.conj_ND]   = Padma.consnt_NA +  Padma.vattu_DA;
Manorama.toPadma[Manorama.conj_NDH]  = Padma.consnt_NA +  Padma.vattu_DHA;
Manorama.toPadma[Manorama.conj_N_N]  = Padma.consnt_NA +  Padma.vattu_NA;
Manorama.toPadma[Manorama.conj_NM]   = Padma.consnt_NA +  Padma.vattu_MA;
Manorama.toPadma[Manorama.conj_NRR]  = Padma.consnt_NA +  Padma.vattu_RRA;
Manorama.toPadma[Manorama.conj_NAU]  = Padma.consnt_NA +  Padma.chandrakkala;

Manorama.toPadma[Manorama.conj_PP]  = Padma.consnt_PA +  Padma.vattu_PA;
Manorama.toPadma[Manorama.conj_PLL] = Padma.consnt_PA +  Padma.vattu_LLA;
Manorama.toPadma[Manorama.conj_BB_1] = Padma.consnt_BA +  Padma.vattu_BA;
Manorama.toPadma[Manorama.conj_BB_2] = Padma.consnt_BA +  Padma.vattu_BA;
Manorama.toPadma[Manorama.conj_BLL] = Padma.consnt_BA +  Padma.vattu_LLA;
Manorama.toPadma[Manorama.conj_MP]  = Padma.consnt_MA +  Padma.vattu_PA;
Manorama.toPadma[Manorama.conj_MM]  = Padma.consnt_MA +  Padma.vattu_MA;
Manorama.toPadma[Manorama.conj_MLL] = Padma.consnt_MA +  Padma.vattu_LLA;

Manorama.toPadma[Manorama.conj_YY]   = Padma.consnt_YA +  Padma.vattu_YA;
Manorama.toPadma[Manorama.conj_L_L]  = Padma.consnt_LA +  Padma.vattu_LA;
Manorama.toPadma[Manorama.conj_VV_1] = Padma.consnt_VA +  Padma.vattu_VA;
Manorama.toPadma[Manorama.conj_VV_2] = Padma.consnt_VA +  Padma.vattu_VA;

Manorama.toPadma[Manorama.conj_SHLL] = Padma.consnt_SHA +  Padma.vattu_LLA;
Manorama.toPadma[Manorama.conj_SHSH] = Padma.consnt_SHA +  Padma.vattu_SHA;
Manorama.toPadma[Manorama.conj_SLL]  = Padma.consnt_SA +  Padma.vattu_LLA;
Manorama.toPadma[Manorama.conj_S_S]  = Padma.consnt_SA +  Padma.vattu_SA;

Manorama.toPadma[Manorama.conj_HN]   = Padma.consnt_HA +  Padma.vattu_NA;
Manorama.toPadma[Manorama.conj_HLL]  = Padma.consnt_HA +  Padma.vattu_LLA;
Manorama.toPadma[Manorama.conj_LLLL] = Padma.consnt_LLA +  Padma.vattu_LLA;

Manorama.toPadma[Manorama.conj_RRRR_1] = Padma.consnt_RRA +  Padma.vattu_RRA;
Manorama.toPadma[Manorama.conj_RRRR_2] = Padma.consnt_RRA +  Padma.vattu_RRA;

//Consonant(s) + Vowel Sign
Manorama.toPadma[Manorama.combo_KR]    = Padma.consnt_KA + Padma.vowelsn_R;

//Miscellaneous(where it doesn't match ASCII representation)
Manorama.toPadma[Manorama.extra_DBLQT_1]  = '"';
Manorama.toPadma[Manorama.extra_DBLQT_2]  = '"';
Manorama.toPadma[Manorama.extra_PERCENT]  = '%';
Manorama.toPadma[Manorama.extra_ASTERISK] = '*';
Manorama.toPadma[Manorama.extra_PLUS]     = '+';
Manorama.toPadma[Manorama.extra_QTSINGLE] = "'";
Manorama.toPadma[Manorama.extra_PERIOD]   = '.';
Manorama.toPadma[Manorama.extra_HYPHEN_1] = '-';
Manorama.toPadma[Manorama.extra_HYPHEN_2] = '-';
Manorama.toPadma[Manorama.extra_HYPHEN_3] = '-';
Manorama.toPadma[Manorama.extra_HYPHEN_4] = '-';
Manorama.toPadma[Manorama.extra_HYPHEN_5] = '-';

Manorama.redundantList = new Object();
Manorama.redundantList[Manorama.misc_UNKNOWN_1] = true;
Manorama.redundantList[Manorama.misc_UNKNOWN_2] = true;
Manorama.redundantList[Manorama.misc_UNKNOWN_3] = true;
Manorama.redundantList[Manorama.misc_UNKNOWN_4] = true;
Manorama.redundantList[Manorama.misc_UNKNOWN_5] = true;
Manorama.redundantList[Manorama.misc_UNKNOWN_6] = true;
Manorama.redundantList[Manorama.misc_UNKNOWN_7] = true;
Manorama.redundantList[Manorama.misc_UNKNOWN_8] = true;
Manorama.redundantList[Manorama.misc_UNKNOWN_9] = true;

Manorama.prefixList = new Object();
Manorama.prefixList[Manorama.vattu_RA]   = true;
Manorama.prefixList[Manorama.vowelsn_E]  = true;
Manorama.prefixList[Manorama.vowelsn_EE] = true;
Manorama.prefixList[Manorama.vowelsn_AI_1] = true;
Manorama.prefixList[Manorama.vowelsn_AI_2] = true;

Manorama.overloadList = new Object();
Manorama.overloadList[Manorama.consnt_CA]      = true;
Manorama.overloadList[Manorama.consnt_BA]      = true;
Manorama.overloadList[Manorama.consnt_VA]      = true;
Manorama.overloadList[Manorama.vowelsn_R_1]    = true;
Manorama.overloadList[Manorama.vowelsn_E]      = true;
Manorama.overloadList[Manorama.extra_QTSINGLE] = true;
