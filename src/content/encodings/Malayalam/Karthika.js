// $Id: Karthika.js,v 1.9 2007/05/15 15:16:58 vnagarjuna Exp $ -->

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

//Karthika Malayalam

function Karthika()
{
}

//The interface every dynamic font encoding should implement
Karthika.maxLookupLen = 2;
Karthika.fontFace     = "ML-TTKarthika";
Karthika.displayName  = "Karthika";
Karthika.script       = Padma.script_MALAYALAM;

Karthika.lookup = function (str) 
{
    return Karthika.toPadma[str];
}

Karthika.isPrefixSymbol = function (str)
{
    return Karthika.prefixList[str] != null;
}

Karthika.isOverloaded = function (str)
{
    return Karthika.overloadList[str] != null;
}

Karthika.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if ((sign1 == Padma.vowelsn_E && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_E))
        return Padma.vowelsn_O;
    if ((sign1 == Padma.vowelsn_EE && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_EE))
        return Padma.vowelsn_OO;
    return sign1 + sign2;
}

Karthika.isRedundant = function (str)
{
    return Karthika.redundantList[str] != null;
}

//Implementation details start here

//Specials
Karthika.visarga        = "\u0078";
Karthika.anusvara       = "\u0077";
Karthika.virama         = "\u0076"; //Chandrakkala

//Vowels
Karthika.vowel_A        = "\u0041";
Karthika.vowel_AA       = "\u0042";
Karthika.vowel_I        = "\u0043";
Karthika.vowel_II       = "\u0043\u0075";
Karthika.vowel_U        = "\u0044";
Karthika.vowel_UU       = "\u0044\u0075";
Karthika.vowel_R        = "\u0045";
Karthika.vowel_RR       = "\u0045\u0075";
Karthika.vowel_E        = "\u0046";
Karthika.vowel_EE       = "\u0047";               
Karthika.vowel_AI       = "\u0073\u0046";
Karthika.vowel_O        = "\u0048";
Karthika.vowel_OO       = "\u0048\u006D";
Karthika.vowel_AU       = "\u0048\u0075";

//Consonants
Karthika.consnt_KA      = "\u0049";
Karthika.consnt_KHA     = "\u004A";
Karthika.consnt_GA      = "\u004B";
Karthika.consnt_GHA     = "\u004C";
Karthika.consnt_NGA     = "\u004D";

Karthika.consnt_CA      = "\u004E";
Karthika.consnt_CHA     = "\u004F";
Karthika.consnt_JA      = "\u0050";
Karthika.consnt_JHA     = "\u0051";
Karthika.consnt_NYA     = "\u0052";

Karthika.consnt_TTA     = "\u0053";
Karthika.consnt_TTHA    = "\u0054";
Karthika.consnt_DDA     = "\u0055";
Karthika.consnt_DDHA    = "\u0056";
Karthika.consnt_NNA     = "\u0057";

Karthika.consnt_TA      = "\u0058";
Karthika.consnt_THA     = "\u0059";
Karthika.consnt_DA      = "\u005A";
Karthika.consnt_DHA     = "\u005B";
Karthika.consnt_NA      = "\u005C";

Karthika.consnt_PA      = "\u005D";
Karthika.consnt_PHA     = "\u005E";
Karthika.consnt_BA      = "\u005F";
Karthika.consnt_BHA     = "\u0060";
Karthika.consnt_MA      = "\u0061";

Karthika.consnt_YA      = "\u0062";
Karthika.consnt_RA      = "\u0063";
Karthika.consnt_LA      = "\u0065";
Karthika.consnt_VA      = "\u0068";
Karthika.consnt_SHA     = "\u0069";
Karthika.consnt_SSA     = "\u006A";
Karthika.consnt_SA      = "\u006B";

Karthika.consnt_HA      = "\u006C";
Karthika.consnt_LLA     = "\u0066";
Karthika.consnt_ZHA     = "\u0067";
Karthika.consnt_RRA     = "\u0064";

//Gunintamulu
Karthika.vowelsn_AA     = "\u006D";
Karthika.vowelsn_I      = "\u006E";
Karthika.vowelsn_II     = "\u006F";
Karthika.vowelsn_U      = "\u0070";
Karthika.vowelsn_UU     = "\u0071";
Karthika.vowelsn_R      = "\u0072";
Karthika.vowelsn_RR     = "\u0072\u0075";
Karthika.vowelsn_E      = "\u0073";
Karthika.vowelsn_EE     = "\u0074";
Karthika.vowelsn_AI     = "\u0073\u0073";
//vowelsigns o and O have two separate glyphs, one on left and one on right.
Karthika.vowelsn_AU     = "\u0075";

//Chillu (5)
Karthika.chillu_ENN     = "\u00AC";
Karthika.chillu_IN      = "\u00B3";
Karthika.chillu_IR      = "\u00C0";
Karthika.chillu_IL      = "\u00C2";
Karthika.chillu_ILL     = "\u00C4";

//vattulu (consonant signs)
Karthika.vattu_YA       = "\u0079";
Karthika.vattu_RA       = "\u007B";
Karthika.vattu_VA       = "\u007A";

//kooTTaksharangngaL
Karthika.conj_KK        = "\u00A1";
Karthika.conj_KTT       = "\u00CE";
Karthika.conj_KT        = "\u00E0";
Karthika.conj_KLL       = "\u00A2";
Karthika.conj_KSH       = "\u00A3";
Karthika.conj_GG        = "\u00A4";
Karthika.conj_GN        = "\u00E1";
Karthika.conj_GM        = "\u00DC";
Karthika.conj_GLL       = "\u00A5";
Karthika.conj_NGK       = "\u00A6";  
Karthika.conj_NGNG      = "\u00A7";

Karthika.conj_CC        = "\u00A8";
Karthika.conj_CCH       = "\u00D1";
Karthika.conj_JJ        = "\u00D6";
Karthika.conj_JNY       = "\u00DA";
Karthika.conj_NYC       = "\u00A9";
Karthika.conj_NYNY      = "\u00AA";

Karthika.conj_TTTT      = "\u00AB";
Karthika.conj_DDDD      = "\u00CD";
Karthika.conj_NNTT      = "\u00AD";
Karthika.conj_NNDD      = "\u00DE";
Karthika.conj_NNNN      = "\u00AE";
Karthika.conj_NNM       = "\u00D7";

Karthika.conj_T_T       = "\u00AF";
Karthika.conj_T_TH      = "\u00B0";
Karthika.conj_TBH       = "\u00DB";
Karthika.conj_TM        = "\u00DF";
Karthika.conj_TS        = "\u00D5";
Karthika.conj_DD        = "\u00B1";
Karthika.conj_D_DH      = "\u00B2";
Karthika.conj_NT        = "\u00B4";
Karthika.conj_NTH       = "\u00D9";
Karthika.conj_ND        = "\u00B5";
Karthika.conj_NDH       = "\u00D4";
Karthika.conj_N_N       = "\u00B6";
Karthika.conj_NM        = "\u00B7";
Karthika.conj_NRR_1     = "\u00E2"; 
Karthika.conj_NRR_2     = "\u00B3\u0064"; 
Karthika.conj_NAU       = "\u00EE"; //npollu for me, nau for paul

Karthika.conj_PP        = "\u00B8";
Karthika.conj_PLL       = "\u00B9";
Karthika.conj_BDH       = "\u00CF";
Karthika.conj_BD        = "\u00D0";
Karthika.conj_BB        = "\u00BA";
Karthika.conj_BLL       = "\u00BB";
Karthika.conj_MP        = "\u00BC";
Karthika.conj_MM        = "\u00BD";
Karthika.conj_MLL       = "\u00BE";

Karthika.conj_YY        = "\u00BF";
Karthika.conj_YKK       = "\u00ED";
Karthika.conj_L_L       = "\u00C3";
Karthika.conj_LP        = "\u00E5";
Karthika.conj_VV        = "\u00C6";

Karthika.conj_SHC       = "\u00DD";
Karthika.conj_SHLL      = "\u00C7";
Karthika.conj_SHSH      = "\u00C8";
Karthika.conj_SSTT      = "\u00E3";
Karthika.conj_SLL       = "\u00C9";
Karthika.conj_S_S       = "\u00CA";
Karthika.conj_STH       = "\u00D8";
Karthika.conj_SRR_RR     = "\u00CC";

Karthika.conj_HN        = "\u00D3";
Karthika.conj_HM        = "\u00D2";
Karthika.conj_HLL       = "\u00CB";
Karthika.conj_LLLL      = "\u00C5";

Karthika.conj_RRRR_1    = "\u00C1"; //ta as in steel
Karthika.conj_RRRR_2    = "\u00E4"; //ta as in steel

//Consonat(s) + vowel combinations
Karthika.combo_KU       = "\u00E6";
Karthika.combo_KKU      = "\u00E7";
Karthika.combo_NGKU     = "\u00E8";
Karthika.combo_NN_U     = "\u00E9";
Karthika.combo_NU       = "\u00EB";
Karthika.combo_N_N_U    = "\u00EC"; //nnu
Karthika.combo_RU       = "\u00EA";

//Digits
Karthika.digit_ZERO     = "\u0030";
Karthika.digit_ONE      = "\u0031";
Karthika.digit_TWO      = "\u0032";
Karthika.digit_THREE    = "\u0033";
Karthika.digit_FOUR     = "\u0034";
Karthika.digit_FIVE     = "\u0035";
Karthika.digit_SIX      = "\u0036";
Karthika.digit_SEVEN    = "\u0037";
Karthika.digit_EIGHT    = "\u0038";
Karthika.digit_NINE     = "\u0039";

//Matches ASCII
Karthika.EXCLAM         = "\u0021";
Karthika.PERCENT        = "\u0025";
Karthika.AMPERSAND      = "\u0026";
Karthika.QTSINGLE       = "\u0027";
Karthika.PARENLEFT      = "\u0028";
Karthika.PARENRIGT      = "\u0029";
Karthika.ASTERISK       = "\u002A";
Karthika.PLUS           = "\u002B";
Karthika.COMMA          = "\u002C";
Karthika.PERIOD         = "\u002E";
Karthika.SLASH          = "\u002F";
Karthika.COLON          = "\u003A";
Karthika.SEMICOLON      = "\u003B";
Karthika.LESSTHAN       = "\u003C";
Karthika.EQUALS         = "\u003D";
Karthika.GREATERTHAN    = "\u003E";
Karthika.QUESTION       = "\u003F";
Karthika.ATSIGN         = "\u0040";

//Does not match ASCII
Karthika.extra_QTSINGLE = "\u0022";
Karthika.extra_DBLQT    = "\u0022\u0022";
Karthika.extra_ASTERISK = "\u0024";
Karthika.extra_HYPHEN   = "\u00FE";

//Dont need
Karthika.misc_UNKNOWN_1  = "\u002D";

Karthika.toPadma = new Object();

Karthika.toPadma[Karthika.anusvara] = Padma.anusvara;
Karthika.toPadma[Karthika.visarga]  = Padma.visarga;
Karthika.toPadma[Karthika.virama]   = Padma.chandrakkala;

Karthika.toPadma[Karthika.vowel_A]  = Padma.vowel_A;
Karthika.toPadma[Karthika.vowel_AA] = Padma.vowel_AA;
Karthika.toPadma[Karthika.vowel_I]  = Padma.vowel_I;
Karthika.toPadma[Karthika.vowel_II] = Padma.vowel_II;
Karthika.toPadma[Karthika.vowel_U]  = Padma.vowel_U;
Karthika.toPadma[Karthika.vowel_UU] = Padma.vowel_UU;
Karthika.toPadma[Karthika.vowel_R]  = Padma.vowel_R;
Karthika.toPadma[Karthika.vowel_RR] = Padma.vowel_RR;
Karthika.toPadma[Karthika.vowel_E]  = Padma.vowel_E;
Karthika.toPadma[Karthika.vowel_EE] = Padma.vowel_EE;
Karthika.toPadma[Karthika.vowel_AI] = Padma.vowel_AI;
Karthika.toPadma[Karthika.vowel_O]  = Padma.vowel_O;
Karthika.toPadma[Karthika.vowel_OO] = Padma.vowel_OO;
Karthika.toPadma[Karthika.vowel_AU] = Padma.vowel_AU;

Karthika.toPadma[Karthika.consnt_KA]  = Padma.consnt_KA;
Karthika.toPadma[Karthika.consnt_KHA] = Padma.consnt_KHA;
Karthika.toPadma[Karthika.consnt_GA]  = Padma.consnt_GA;
Karthika.toPadma[Karthika.consnt_GHA] = Padma.consnt_GHA;
Karthika.toPadma[Karthika.consnt_NGA] = Padma.consnt_NGA;

Karthika.toPadma[Karthika.consnt_CA]  = Padma.consnt_CA;
Karthika.toPadma[Karthika.consnt_CHA] = Padma.consnt_CHA;
Karthika.toPadma[Karthika.consnt_JA]  = Padma.consnt_JA;
Karthika.toPadma[Karthika.consnt_JHA] = Padma.consnt_JHA;
Karthika.toPadma[Karthika.consnt_NYA] = Padma.consnt_NYA;

Karthika.toPadma[Karthika.consnt_TTA]  = Padma.consnt_TTA;
Karthika.toPadma[Karthika.consnt_TTHA] = Padma.consnt_TTHA;
Karthika.toPadma[Karthika.consnt_DDA]  = Padma.consnt_DDA;
Karthika.toPadma[Karthika.consnt_DDHA] = Padma.consnt_DDHA;
Karthika.toPadma[Karthika.consnt_NNA]  = Padma.consnt_NNA;

Karthika.toPadma[Karthika.consnt_TA]  = Padma.consnt_TA;
Karthika.toPadma[Karthika.consnt_THA] = Padma.consnt_THA;
Karthika.toPadma[Karthika.consnt_DA]  = Padma.consnt_DA;
Karthika.toPadma[Karthika.consnt_DHA] = Padma.consnt_DHA;
Karthika.toPadma[Karthika.consnt_NA]  = Padma.consnt_NA;

Karthika.toPadma[Karthika.consnt_PA]  = Padma.consnt_PA;
Karthika.toPadma[Karthika.consnt_PHA] = Padma.consnt_PHA;
Karthika.toPadma[Karthika.consnt_BA]  = Padma.consnt_BA;
Karthika.toPadma[Karthika.consnt_BHA] = Padma.consnt_BHA;
Karthika.toPadma[Karthika.consnt_MA]  = Padma.consnt_MA;

Karthika.toPadma[Karthika.consnt_YA]  = Padma.consnt_YA;
Karthika.toPadma[Karthika.consnt_RA]  = Padma.consnt_RA;
Karthika.toPadma[Karthika.consnt_LA]  = Padma.consnt_LA;
Karthika.toPadma[Karthika.consnt_VA]  = Padma.consnt_VA;
Karthika.toPadma[Karthika.consnt_SHA] = Padma.consnt_SHA;
Karthika.toPadma[Karthika.consnt_SSA] = Padma.consnt_SSA;
Karthika.toPadma[Karthika.consnt_SA]  = Padma.consnt_SA;

Karthika.toPadma[Karthika.consnt_HA] = Padma.consnt_HA;
Karthika.toPadma[Karthika.consnt_LLA] = Padma.consnt_LLA;
Karthika.toPadma[Karthika.consnt_ZHA] = Padma.consnt_ZHA;
Karthika.toPadma[Karthika.consnt_RRA] = Padma.consnt_RRA;

//Gunintamulu
Karthika.toPadma[Karthika.vowelsn_AA] = Padma.vowelsn_AA;
Karthika.toPadma[Karthika.vowelsn_I]  = Padma.vowelsn_I;
Karthika.toPadma[Karthika.vowelsn_II] = Padma.vowelsn_II;
Karthika.toPadma[Karthika.vowelsn_U]  = Padma.vowelsn_U;
Karthika.toPadma[Karthika.vowelsn_UU] = Padma.vowelsn_UU;
Karthika.toPadma[Karthika.vowelsn_R]  = Padma.vowelsn_R;
Karthika.toPadma[Karthika.vowelsn_E]  = Padma.vowelsn_E;
Karthika.toPadma[Karthika.vowelsn_EE] = Padma.vowelsn_EE;
Karthika.toPadma[Karthika.vowelsn_AI] = Padma.vowelsn_AI;
Karthika.toPadma[Karthika.vowelsn_AU] = Padma.vowelsn_AU;

//Chillu
Karthika.toPadma[Karthika.chillu_ENN] = Padma.consnt_NNA + Padma.chillu;
Karthika.toPadma[Karthika.chillu_IN]  = Padma.consnt_NA + Padma.chillu;
Karthika.toPadma[Karthika.chillu_IR]  = Padma.consnt_RA + Padma.chillu;
Karthika.toPadma[Karthika.chillu_IL]  = Padma.consnt_LA + Padma.chillu;
Karthika.toPadma[Karthika.chillu_ILL] = Padma.consnt_LLA + Padma.chillu;

//vattulu
Karthika.toPadma[Karthika.vattu_YA]  = Padma.vattu_YA;
Karthika.toPadma[Karthika.vattu_RA]  = Padma.vattu_RA;
Karthika.toPadma[Karthika.vattu_VA]  = Padma.vattu_VA;

//kooTTaksharangngaL
Karthika.toPadma[Karthika.conj_KK]   = Padma.consnt_KA +  Padma.vattu_KA;
Karthika.toPadma[Karthika.conj_KTT]  = Padma.consnt_KA +  Padma.vattu_TTA;
Karthika.toPadma[Karthika.conj_KT]   = Padma.consnt_KA +  Padma.vattu_TA;
Karthika.toPadma[Karthika.conj_KLL]  = Padma.consnt_KA +  Padma.vattu_LLA;
Karthika.toPadma[Karthika.conj_KSH]  = Padma.consnt_KA +  Padma.vattu_SSA;
Karthika.toPadma[Karthika.conj_GG]   = Padma.consnt_GA +  Padma.vattu_GA;
Karthika.toPadma[Karthika.conj_GN]   = Padma.consnt_GA +  Padma.vattu_NA;
Karthika.toPadma[Karthika.conj_GM]   = Padma.consnt_GA +  Padma.vattu_MA;
Karthika.toPadma[Karthika.conj_GLL]  = Padma.consnt_GA +  Padma.vattu_LLA;
Karthika.toPadma[Karthika.conj_NGK]  = Padma.consnt_NGA +  Padma.vattu_KA;
Karthika.toPadma[Karthika.conj_NGNG] = Padma.consnt_NGA +  Padma.vattu_NGA;

Karthika.toPadma[Karthika.conj_CC]   = Padma.consnt_CA +  Padma.vattu_CA;
Karthika.toPadma[Karthika.conj_CCH]  = Padma.consnt_CA +  Padma.vattu_CHA;
Karthika.toPadma[Karthika.conj_JJ]   = Padma.consnt_JA +  Padma.vattu_JA;
Karthika.toPadma[Karthika.conj_JNY]  = Padma.consnt_JA +  Padma.vattu_NYA;
Karthika.toPadma[Karthika.conj_NYC]  = Padma.consnt_NYA +  Padma.vattu_CA;
Karthika.toPadma[Karthika.conj_NYNY] = Padma.consnt_NYA +  Padma.vattu_NYA;

Karthika.toPadma[Karthika.conj_TTTT] = Padma.consnt_TTA +  Padma.vattu_TTA;
Karthika.toPadma[Karthika.conj_DDDD] = Padma.consnt_DDA +  Padma.vattu_DDA;
Karthika.toPadma[Karthika.conj_NNTT] = Padma.consnt_NNA +  Padma.vattu_TTA;
Karthika.toPadma[Karthika.conj_NNDD] = Padma.consnt_NNA +  Padma.vattu_DDA;
Karthika.toPadma[Karthika.conj_NNNN] = Padma.consnt_NNA +  Padma.vattu_NNA;
Karthika.toPadma[Karthika.conj_NNM]  = Padma.consnt_NNA +  Padma.vattu_MA;

Karthika.toPadma[Karthika.conj_T_T]  = Padma.consnt_TA +  Padma.vattu_TA;
Karthika.toPadma[Karthika.conj_T_TH] = Padma.consnt_TA +  Padma.vattu_THA;
Karthika.toPadma[Karthika.conj_TBH]  = Padma.consnt_TA +  Padma.vattu_BHA;
Karthika.toPadma[Karthika.conj_TM]   = Padma.consnt_TA +  Padma.vattu_MA;
Karthika.toPadma[Karthika.conj_TS]   = Padma.consnt_TA +  Padma.vattu_SA;
Karthika.toPadma[Karthika.conj_DD]   = Padma.consnt_DA +  Padma.vattu_DA;
Karthika.toPadma[Karthika.conj_D_DH] = Padma.consnt_DA +  Padma.vattu_DHA;
Karthika.toPadma[Karthika.conj_NT]   = Padma.consnt_NA +  Padma.vattu_TA;
Karthika.toPadma[Karthika.conj_NTH]  = Padma.consnt_NA +  Padma.vattu_THA;
Karthika.toPadma[Karthika.conj_ND]   = Padma.consnt_NA +  Padma.vattu_DA;
Karthika.toPadma[Karthika.conj_NDH]  = Padma.consnt_NA +  Padma.vattu_DHA;
Karthika.toPadma[Karthika.conj_N_N]  = Padma.consnt_NA +  Padma.vattu_NA;
Karthika.toPadma[Karthika.conj_NM]   = Padma.consnt_NA +  Padma.vattu_MA;
Karthika.toPadma[Karthika.conj_NRR_1]  = Padma.consnt_NA +  Padma.vattu_RRA;
Karthika.toPadma[Karthika.conj_NRR_2]  = Padma.consnt_NA +  Padma.vattu_RRA;
Karthika.toPadma[Karthika.conj_NAU]  = Padma.consnt_NA +  Padma.chandrakkala;

Karthika.toPadma[Karthika.conj_PP]  = Padma.consnt_PA +  Padma.vattu_PA;
Karthika.toPadma[Karthika.conj_PLL] = Padma.consnt_PA +  Padma.vattu_LLA;
Karthika.toPadma[Karthika.conj_BDH] = Padma.consnt_BA +  Padma.vattu_DHA;
Karthika.toPadma[Karthika.conj_BD]  = Padma.consnt_BA +  Padma.vattu_DA;
Karthika.toPadma[Karthika.conj_BB]  = Padma.consnt_BA +  Padma.vattu_BA;
Karthika.toPadma[Karthika.conj_BLL] = Padma.consnt_BA +  Padma.vattu_LLA;
Karthika.toPadma[Karthika.conj_MP]  = Padma.consnt_MA +  Padma.vattu_PA;
Karthika.toPadma[Karthika.conj_MM]  = Padma.consnt_MA +  Padma.vattu_MA;
Karthika.toPadma[Karthika.conj_MLL] = Padma.consnt_MA +  Padma.vattu_LLA;

Karthika.toPadma[Karthika.conj_YY]  = Padma.consnt_YA +  Padma.vattu_YA;
Karthika.toPadma[Karthika.conj_YKK] = Padma.consnt_YA +  Padma.vattu_KA +  Padma.vattu_KA;
Karthika.toPadma[Karthika.conj_L_L] = Padma.consnt_LA +  Padma.vattu_LA;
Karthika.toPadma[Karthika.conj_LP]  = Padma.consnt_LA +  Padma.vattu_PA;
Karthika.toPadma[Karthika.conj_VV]  = Padma.consnt_VA +  Padma.vattu_VA;

Karthika.toPadma[Karthika.conj_SHC]  = Padma.consnt_SHA +  Padma.vattu_CA;
Karthika.toPadma[Karthika.conj_SHLL] = Padma.consnt_SHA +  Padma.vattu_LLA;
Karthika.toPadma[Karthika.conj_SHSH] = Padma.consnt_SHA +  Padma.vattu_SHA;
Karthika.toPadma[Karthika.conj_SSTT] = Padma.consnt_SSA +  Padma.vattu_TTA
Karthika.toPadma[Karthika.conj_SLL]  = Padma.consnt_SA +  Padma.vattu_LLA;
Karthika.toPadma[Karthika.conj_S_S]  = Padma.consnt_SA +  Padma.vattu_SA;
Karthika.toPadma[Karthika.conj_STH]  = Padma.consnt_SA +  Padma.vattu_THA;
Karthika.toPadma[Karthika.conj_SRR_RR]  = Padma.consnt_SA +  Padma.vattu_RRA +  Padma.vattu_RRA;

Karthika.toPadma[Karthika.conj_HN]   = Padma.consnt_HA +  Padma.vattu_NA;
Karthika.toPadma[Karthika.conj_HM]   = Padma.consnt_HA +  Padma.vattu_MA;
Karthika.toPadma[Karthika.conj_HLL]  = Padma.consnt_HA +  Padma.vattu_LLA;
Karthika.toPadma[Karthika.conj_LLLL] = Padma.consnt_LLA +  Padma.vattu_LLA;

Karthika.toPadma[Karthika.conj_RRRR_1] = Padma.consnt_RRA +  Padma.vattu_RRA;
Karthika.toPadma[Karthika.conj_RRRR_2] = Padma.consnt_RRA +  Padma.vattu_RRA;

//Consonant(s) + Vowel Sign
Karthika.toPadma[Karthika.combo_KU]    = Padma.consnt_KA + Padma.vowelsn_U;
Karthika.toPadma[Karthika.combo_KKU]   = Padma.consnt_KA +  Padma.vattu_KA + Padma.vowelsn_U;
Karthika.toPadma[Karthika.combo_NGKU]  = Padma.consnt_NGA +  Padma.vattu_KA + Padma.vowelsn_U;
Karthika.toPadma[Karthika.combo_NN_U]  = Padma.consnt_NNA + Padma.vowelsn_U;
Karthika.toPadma[Karthika.combo_NU]    = Padma.consnt_NA + Padma.vowelsn_U;
Karthika.toPadma[Karthika.combo_N_N_U] = Padma.consnt_NA +  Padma.vattu_NA + Padma.vowelsn_U;
Karthika.toPadma[Karthika.combo_RU]    = Padma.consnt_RA + Padma.vowelsn_U;

//Miscellaneous(where it doesn't match ASCII representation)
Karthika.toPadma[Karthika.extra_QTSINGLE] = Karthika.QTSINGLE;
Karthika.toPadma[Karthika.extra_DBLQT]    = '"';
Karthika.toPadma[Karthika.extra_ASTERISK] = '*';
Karthika.toPadma[Karthika.extra_HYPHEN]   = '-';

Karthika.redundantList = new Object();
Karthika.redundantList[Karthika.misc_UNKNOWN_1] = true;

Karthika.prefixList = new Object();
Karthika.prefixList[Karthika.vattu_RA]   = true;
Karthika.prefixList[Karthika.vowelsn_E]  = true;
Karthika.prefixList[Karthika.vowelsn_EE] = true;
Karthika.prefixList[Karthika.vowelsn_AI] = true;

Karthika.overloadList = new Object();
Karthika.overloadList[Karthika.vowel_I]        = true;
Karthika.overloadList[Karthika.vowel_U]        = true;
Karthika.overloadList[Karthika.vowel_R]        = true;
Karthika.overloadList[Karthika.vowel_O]        = true;
Karthika.overloadList[Karthika.vowelsn_R]      = true;
Karthika.overloadList[Karthika.vowelsn_E]      = true;
Karthika.overloadList[Karthika.chillu_IN]      = true;
Karthika.overloadList[Karthika.extra_QTSINGLE] = true;
