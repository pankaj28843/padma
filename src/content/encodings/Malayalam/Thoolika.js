// $Id: Thoolika.js,v 1.5 2006/02/20 21:16:29 vnagarjuna Exp $ -->

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

//Thoolika Malayalam

function Thoolika()
{
}

//The interface every dynamic font encoding should implement
Thoolika.maxLookupLen = 2;
Thoolika.fontFace     = "Thoolika";
Thoolika.displayName  = Thoolika.fontFace;
Thoolika.script       = Padma.script_MALAYALAM;

Thoolika.lookup = function (str) 
{
    return Thoolika.toPadma[str];
}

Thoolika.isPrefixSymbol = function (str)
{
    return Thoolika.prefixList[str] != null;
}

Thoolika.isOverloaded = function (str)
{
    return Thoolika.overloadList[str] != null;
}

Thoolika.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if ((sign1 == Padma.vowelsn_E && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_E))
        return Padma.vowelsn_O;
    if ((sign1 == Padma.vowelsn_EE && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_EE))
        return Padma.vowelsn_OO;
    return sign1 + sign2;
}

Thoolika.isRedundant = function (str)
{
    return Thoolika.redundantList[str] != null;
}

//Implementation details start here

//Specials
Thoolika.visarga        = "\u00AF";  //Y
Thoolika.anusvara       = "\u00AB";  //Y
Thoolika.virama         = "\u00AE"; //Chandrakkala  //Y

//Vowels
Thoolika.vowel_A        = "\u0041";  //Y
Thoolika.vowel_AA       = "\u0042";  //Y
Thoolika.vowel_I        = "\u0043";  //Y
Thoolika.vowel_II       = "\u0043\u00AA";  //Y
Thoolika.vowel_U        = "\u0044"; //Y
Thoolika.vowel_UU       = "\u0044\u00AA";  //Y
Thoolika.vowel_R        = "\u0045";  //Y
Thoolika.vowel_RR       = "\u0045\u00AA";  //Y
Thoolika.vowel_E        = "\u0046";  //Y
Thoolika.vowel_EE       = "\u0047";  //Y
Thoolika.vowel_AI       = "\u00A8\u0046";  //Y
Thoolika.vowel_O        = "\u0048";  //Y
Thoolika.vowel_OO       = "\u0048\u00A1";  //Y
Thoolika.vowel_AU       = "\u0048\u00AA";  //Y

//Consonants
Thoolika.consnt_KA      = "\u004A";  //Y
Thoolika.consnt_KHA     = "\u004B";  //Y
Thoolika.consnt_GA      = "\u004C";  //Y
Thoolika.consnt_GHA     = "\u004D";  //Y
Thoolika.consnt_NGA     = "\u004E";  //Y

Thoolika.consnt_CA      = "\u004F";  //Y
Thoolika.consnt_CHA     = "\u0050";  //Y
Thoolika.consnt_JA      = "\u0051";  //Y
Thoolika.consnt_JHA     = "\u0052";  //Y
Thoolika.consnt_NYA     = "\u0053";  //Y

Thoolika.consnt_TTA     = "\u0054";  //Y
Thoolika.consnt_TTHA    = "\u0055";  //Y
Thoolika.consnt_DDA     = "\u0056";  //Y
Thoolika.consnt_DDHA    = "\u0057";  //Y
Thoolika.consnt_NNA     = "\u0058";  //Y

Thoolika.consnt_TA      = "\u0059";  //Y
Thoolika.consnt_THA     = "\u005A";  //Y
Thoolika.consnt_DA      = "\u0061";  //Y
Thoolika.consnt_DHA     = "\u0062";  //Y
Thoolika.consnt_NA      = "\u0063";  //Y

Thoolika.consnt_PA      = "\u0064";  //Y
Thoolika.consnt_PHA     = "\u0065";  //Y
Thoolika.consnt_BA      = "\u0066";  //Y
Thoolika.consnt_BHA     = "\u0067";  //Y
Thoolika.consnt_MA      = "\u0068";  //Y

Thoolika.consnt_YA      = "\u0069";  //Y
Thoolika.consnt_RA      = "\u006A";  //Y
Thoolika.consnt_LA      = "\u006B";  //Y
Thoolika.consnt_VA      = "\u006C";  //Y
Thoolika.consnt_SHA     = "\u006D";  //Y
Thoolika.consnt_SSA     = "\u006E";  //Y
Thoolika.consnt_SA      = "\u006F";  //Y

Thoolika.consnt_HA      = "\u0070";  //Y
Thoolika.consnt_LLA     = "\u0071";  //Y
Thoolika.consnt_ZHA     = "\u0072";  //Y
Thoolika.consnt_RRA     = "\u0073";  //Y

//Gunintamulu
Thoolika.vowelsn_AA     = "\u00A1";  //Y
Thoolika.vowelsn_I      = "\u00A2";  //Y
Thoolika.vowelsn_II     = "\u00A3";  //Y
Thoolika.vowelsn_U      = "\u00A4";  //Y
Thoolika.vowelsn_UU     = "\u00A5";  //Y
Thoolika.vowelsn_R      = "\u00A6";  //Y
Thoolika.vowelsn_RR     = "\u00A6\u00AA";  //Y
Thoolika.vowelsn_E      = "\u00A8";  //Y
Thoolika.vowelsn_EE     = "\u00A9";  //Y
Thoolika.vowelsn_AI     = "\u00A8\u00A8";  //Y
//vowelsigns o and O have two separate glyphs, one on left and one on right.
Thoolika.vowelsn_AU     = "\u00AA";  //Y

//Chillu (5)
Thoolika.chillu_ENN     = "\u0078";  //Y
Thoolika.chillu_IN      = "\u0075";  //Y
Thoolika.chillu_IR_1    = "\u0074";  //Y
Thoolika.chillu_IR_2    = "\u2014";  //Y
Thoolika.chillu_IL      = "\u0076";  //Y
Thoolika.chillu_ILL     = "\u0077";  //Y

//vattulu (consonant signs)
Thoolika.vattu_GA       = "\u00EA";  //Y
Thoolika.vattu_TTA      = "\u00E9";  //Y
Thoolika.vattu_DDA      = "\u00EC";  //Y
Thoolika.vattu_NNA      = "\u00E5";  //Y
Thoolika.vattu_TA       = "\u00ED";  //Y
Thoolika.vattu_DA       = "\u00EF";  //Y
Thoolika.vattu_DHA      = "\u00E8";  //Y
Thoolika.vattu_NA       = "\u00EE";  //Y
Thoolika.vattu_PA       = "\u00E7";  //Y
Thoolika.vattu_MA       = "\u00E4";  //Y
Thoolika.vattu_YA       = "\u00AC";  //Y
Thoolika.vattu_RA       = "\u00B1";  //Y
Thoolika.vattu_VA       = "\u00A7";  //Y
Thoolika.vattu_SHA      = "\u00E3";  //Y
Thoolika.vattu_SA       = "\u00E6";  //Y
Thoolika.vattu_LLA      = "\u00EB";  //Y

//kooTTaksharangngaL
Thoolika.conj_KK        = "\u00B4";  //Y
Thoolika.conj_KT        = "\u00C7";  //Y
Thoolika.conj_KSH       = "\u00C8";  //Y
Thoolika.conj_GN        = "\u00DE";  //Y
Thoolika.conj_GM        = "\u00C4";  //Y
Thoolika.conj_NGK       = "\u00C6";  //Y
Thoolika.conj_NGNG      = "\u00B9";  //Y

Thoolika.conj_CC        = "\u00B5";  //Y
Thoolika.conj_CCH       = "\u00D4";  //Y
Thoolika.conj_JJ        = "\u00D2";  //Y
Thoolika.conj_JNY       = "\u00D1";  //Y
Thoolika.conj_NYC       = "\u00D5";  //Y
Thoolika.conj_NYJ       = "\u00D3";  //Y
Thoolika.conj_NYNY      = "\u00BA";  //Y

Thoolika.conj_TTTT      = "\u00B6";  //Y
Thoolika.conj_NNTT      = "\u00D9";  //Y
Thoolika.conj_NNDD      = "\u00DF";  //Y
Thoolika.conj_NNNN      = "\u00BB";  //Y
Thoolika.conj_NNM       = "\u00C3";  //Y

Thoolika.conj_T_T       = "\u00B7";  //Y
Thoolika.conj_T_TH      = "\u00CF";  //Y
Thoolika.conj_TN        = "\u00D0";  //Y
Thoolika.conj_TBH       = "\u00CE";  //Y
Thoolika.conj_TM        = "\u00C5";  //Y
Thoolika.conj_TS        = "\u00CB";  //Y
Thoolika.conj_DD        = "\u00C0";  //Y
Thoolika.conj_D_DH      = "\u00DA";  //Y
Thoolika.conj_NT        = "\u00C9";  //Y
Thoolika.conj_NTH       = "\u00DD";  //Y
Thoolika.conj_ND        = "\u007A";  //Y
Thoolika.conj_NDH       = "\u00DC";  //Y
Thoolika.conj_N_N       = "\u00BC";  //Y
Thoolika.conj_NM        = "\u00C1";  //Y
Thoolika.conj_NRR       = "\u00CA";  //Y
//Thoolika.conj_NAU       = "\u0063"; //npollu for me, nau for paul

Thoolika.conj_PP        = "\u00B8";  //Y
Thoolika.conj_BB        = "\u00E2";  //Y
Thoolika.conj_MP        = "\u00D8";  //Y
Thoolika.conj_MM        = "\u00BD";  //Y

Thoolika.conj_YY        = "\u00E0";  //Y
Thoolika.conj_L_L       = "\u00BF";  //Y
Thoolika.conj_VV        = "\u00E1";  //Y

Thoolika.conj_SHC       = "\u00D6";  //Y
Thoolika.conj_STH       = "\u00CC";  //Y
Thoolika.conj_SRR       = "\u00CD";  //Y

Thoolika.conj_HN        = "\u00DB";  //Y
Thoolika.conj_HM        = "\u00C2";  //Y
Thoolika.conj_LLLL      = "\u00BE";  //Y
Thoolika.conj_RRRR      = "\u00D7"; //ta as in steel

//Consonat(s) + vowel combinations
Thoolika.combo_RU       = "\u0079";  //Y

//Digits
Thoolika.digit_ZERO     = "\u0030";  //Y
Thoolika.digit_ONE      = "\u0031";  //Y
Thoolika.digit_TWO      = "\u0032";  //Y
Thoolika.digit_THREE    = "\u0033";  //Y
Thoolika.digit_FOUR     = "\u0034";  //Y
Thoolika.digit_FIVE     = "\u0035";  //Y
Thoolika.digit_SIX      = "\u0036";  //Y
Thoolika.digit_SEVEN    = "\u0037";  //Y
Thoolika.digit_EIGHT    = "\u0038";  //Y
Thoolika.digit_NINE     = "\u0039";  //Y

//Matches ASCII
Thoolika.EXCLAM         = "\u0021";  //Y
Thoolika.QTDOUBLE       = "\u0022";  //Y
Thoolika.POUND          = "\u0023";  //Y
Thoolika.DOLLAR         = "\u0024";  //Y
Thoolika.PERCENT        = "\u0025";  //Y
Thoolika.AMPERSAND      = "\u0026";  //Y
Thoolika.QTSINGLE       = "\u0027";  //Y
Thoolika.PARENLEFT      = "\u0028";  //Y
Thoolika.PARENRIGT      = "\u0029";  //Y
Thoolika.ASTERISK       = "\u002A";  //Y
Thoolika.PLUS           = "\u002B";  //Y
Thoolika.COMMA          = "\u002C";  //Y
Thoolika.PERIOD         = "\u002E";  //Y
Thoolika.SLASH          = "\u002F";  //Y
Thoolika.COLON          = "\u003A";  //Y
Thoolika.SEMICOLON      = "\u003B";  //Y
Thoolika.LESSTHAN       = "\u003C";  //Y
Thoolika.EQUALS         = "\u003D";  //Y
Thoolika.GREATERTHAN    = "\u003E";  //Y
Thoolika.QUESTION       = "\u003F";  //Y
Thoolika.ATSIGN         = "\u0040";
Thoolika.SQBKTLEFT      = "\u005B";  //Y
Thoolika.BACKSLASH      = "\u005C";  //Y
Thoolika.SQBKTRIGHT     = "\u005D";  //Y
Thoolika.CARET          = "\u005E";  //Y
Thoolika.PARENLEFT      = "\u007B";  //Y
Thoolika.PIPE           = "\u007C";  //Y
Thoolika.PARENRIGHT     = "\u007D";  //Y

//Does not match ASCII
Thoolika.extra_QTSINGLE_1 = "\u0060";  //Y
Thoolika.extra_QTSINGLE_2 = "\u2018";  //Y
Thoolika.extra_QTSINGLE_3 = "\u2019";  //Y
Thoolika.extra_DBLQT_1    = "\u201C";  //Y
Thoolika.extra_DBLQT_2    = "\u201D";  //Y
Thoolika.extra_PERIOD     = "\u2022";  //Y
Thoolika.extra_ASTERISK   = "\u00B2";  //Y
Thoolika.extra_HYPHEN_1   = "\u005F";  //Y
Thoolika.extra_HYPHEN_2   = "\u007E";  //Y
Thoolika.extra_HYPHEN_3   = "\u2013";  //Y

//Dont need
Thoolika.misc_UNKNOWN_1  = "\u002D";

Thoolika.toPadma = new Object();

Thoolika.toPadma[Thoolika.anusvara] = Padma.anusvara;
Thoolika.toPadma[Thoolika.visarga]  = Padma.visarga;
Thoolika.toPadma[Thoolika.virama]   = Padma.chandrakkala;

Thoolika.toPadma[Thoolika.vowel_A]  = Padma.vowel_A;
Thoolika.toPadma[Thoolika.vowel_AA] = Padma.vowel_AA;
Thoolika.toPadma[Thoolika.vowel_I]  = Padma.vowel_I;
Thoolika.toPadma[Thoolika.vowel_II] = Padma.vowel_II;
Thoolika.toPadma[Thoolika.vowel_U]  = Padma.vowel_U;
Thoolika.toPadma[Thoolika.vowel_UU] = Padma.vowel_UU;
Thoolika.toPadma[Thoolika.vowel_R]  = Padma.vowel_R;
Thoolika.toPadma[Thoolika.vowel_RR] = Padma.vowel_RR;
Thoolika.toPadma[Thoolika.vowel_E]  = Padma.vowel_E;
Thoolika.toPadma[Thoolika.vowel_EE] = Padma.vowel_EE;
Thoolika.toPadma[Thoolika.vowel_AI] = Padma.vowel_AI;
Thoolika.toPadma[Thoolika.vowel_O]  = Padma.vowel_O;
Thoolika.toPadma[Thoolika.vowel_OO] = Padma.vowel_OO;
Thoolika.toPadma[Thoolika.vowel_AU] = Padma.vowel_AU;

Thoolika.toPadma[Thoolika.consnt_KA]  = Padma.consnt_KA;
Thoolika.toPadma[Thoolika.consnt_KHA] = Padma.consnt_KHA;
Thoolika.toPadma[Thoolika.consnt_GA]  = Padma.consnt_GA;
Thoolika.toPadma[Thoolika.consnt_GHA] = Padma.consnt_GHA;
Thoolika.toPadma[Thoolika.consnt_NGA] = Padma.consnt_NGA;

Thoolika.toPadma[Thoolika.consnt_CA]  = Padma.consnt_CA;
Thoolika.toPadma[Thoolika.consnt_CHA] = Padma.consnt_CHA;
Thoolika.toPadma[Thoolika.consnt_JA]  = Padma.consnt_JA;
Thoolika.toPadma[Thoolika.consnt_JHA] = Padma.consnt_JHA;
Thoolika.toPadma[Thoolika.consnt_NYA] = Padma.consnt_NYA;

Thoolika.toPadma[Thoolika.consnt_TTA]  = Padma.consnt_TTA;
Thoolika.toPadma[Thoolika.consnt_TTHA] = Padma.consnt_TTHA;
Thoolika.toPadma[Thoolika.consnt_DDA]  = Padma.consnt_DDA;
Thoolika.toPadma[Thoolika.consnt_DDHA] = Padma.consnt_DDHA;
Thoolika.toPadma[Thoolika.consnt_NNA]  = Padma.consnt_NNA;

Thoolika.toPadma[Thoolika.consnt_TA]  = Padma.consnt_TA;
Thoolika.toPadma[Thoolika.consnt_THA] = Padma.consnt_THA;
Thoolika.toPadma[Thoolika.consnt_DA]  = Padma.consnt_DA;
Thoolika.toPadma[Thoolika.consnt_DHA] = Padma.consnt_DHA;
Thoolika.toPadma[Thoolika.consnt_NA]  = Padma.consnt_NA;

Thoolika.toPadma[Thoolika.consnt_PA]  = Padma.consnt_PA;
Thoolika.toPadma[Thoolika.consnt_PHA] = Padma.consnt_PHA;
Thoolika.toPadma[Thoolika.consnt_BA]  = Padma.consnt_BA;
Thoolika.toPadma[Thoolika.consnt_BHA] = Padma.consnt_BHA;
Thoolika.toPadma[Thoolika.consnt_MA]  = Padma.consnt_MA;

Thoolika.toPadma[Thoolika.consnt_YA]  = Padma.consnt_YA;
Thoolika.toPadma[Thoolika.consnt_RA]  = Padma.consnt_RA;
Thoolika.toPadma[Thoolika.consnt_LA]  = Padma.consnt_LA;
Thoolika.toPadma[Thoolika.consnt_VA]  = Padma.consnt_VA;
Thoolika.toPadma[Thoolika.consnt_SHA] = Padma.consnt_SHA;
Thoolika.toPadma[Thoolika.consnt_SSA] = Padma.consnt_SSA;
Thoolika.toPadma[Thoolika.consnt_SA]  = Padma.consnt_SA;

Thoolika.toPadma[Thoolika.consnt_HA] = Padma.consnt_HA;
Thoolika.toPadma[Thoolika.consnt_LLA] = Padma.consnt_LLA;
Thoolika.toPadma[Thoolika.consnt_ZHA] = Padma.consnt_ZHA;
Thoolika.toPadma[Thoolika.consnt_RRA] = Padma.consnt_RRA;

//Gunintamulu
Thoolika.toPadma[Thoolika.vowelsn_AA] = Padma.vowelsn_AA;
Thoolika.toPadma[Thoolika.vowelsn_I]  = Padma.vowelsn_I;
Thoolika.toPadma[Thoolika.vowelsn_II] = Padma.vowelsn_II;
Thoolika.toPadma[Thoolika.vowelsn_U]  = Padma.vowelsn_U;
Thoolika.toPadma[Thoolika.vowelsn_UU] = Padma.vowelsn_UU;
Thoolika.toPadma[Thoolika.vowelsn_R]  = Padma.vowelsn_R;
Thoolika.toPadma[Thoolika.vowelsn_E]  = Padma.vowelsn_E;
Thoolika.toPadma[Thoolika.vowelsn_EE] = Padma.vowelsn_EE;
Thoolika.toPadma[Thoolika.vowelsn_AI] = Padma.vowelsn_AI;
Thoolika.toPadma[Thoolika.vowelsn_AU] = Padma.vowelsn_AU;

//Chillu
Thoolika.toPadma[Thoolika.chillu_ENN] = Padma.consnt_NNA + Padma.chillu;
Thoolika.toPadma[Thoolika.chillu_IN]  = Padma.consnt_NA + Padma.chillu;
Thoolika.toPadma[Thoolika.chillu_IR_1] = Padma.consnt_RA + Padma.chillu;
Thoolika.toPadma[Thoolika.chillu_IR_2] = Padma.consnt_RA + Padma.chillu;
Thoolika.toPadma[Thoolika.chillu_IL]  = Padma.consnt_LA + Padma.chillu;
Thoolika.toPadma[Thoolika.chillu_ILL] = Padma.consnt_LLA + Padma.chillu;

//vattulu
Thoolika.toPadma[Thoolika.vattu_GA]  = Padma.vattu_GA;
Thoolika.toPadma[Thoolika.vattu_TTA] = Padma.vattu_TTA;
Thoolika.toPadma[Thoolika.vattu_DDA] = Padma.vattu_DDA;
Thoolika.toPadma[Thoolika.vattu_NNA] = Padma.vattu_NNA;
Thoolika.toPadma[Thoolika.vattu_TA]  = Padma.vattu_TA;
Thoolika.toPadma[Thoolika.vattu_DA]  = Padma.vattu_DA;
Thoolika.toPadma[Thoolika.vattu_DHA] = Padma.vattu_DHA;
Thoolika.toPadma[Thoolika.vattu_NA]  = Padma.vattu_NA;
Thoolika.toPadma[Thoolika.vattu_PA]  = Padma.vattu_PA;
Thoolika.toPadma[Thoolika.vattu_MA]  = Padma.vattu_MA;
Thoolika.toPadma[Thoolika.vattu_YA]  = Padma.vattu_YA;
Thoolika.toPadma[Thoolika.vattu_RA]  = Padma.vattu_RA;
Thoolika.toPadma[Thoolika.vattu_VA]  = Padma.vattu_VA;
Thoolika.toPadma[Thoolika.vattu_SHA] = Padma.vattu_SHA;
Thoolika.toPadma[Thoolika.vattu_SA]  = Padma.vattu_SA;
Thoolika.toPadma[Thoolika.vattu_LLA] = Padma.vattu_LLA;

//kooTTaksharangngaL
Thoolika.toPadma[Thoolika.conj_KK]   = Padma.consnt_KA +  Padma.vattu_KA;
Thoolika.toPadma[Thoolika.conj_KT]   = Padma.consnt_KA +  Padma.vattu_TA;
Thoolika.toPadma[Thoolika.conj_KSH]  = Padma.consnt_KA +  Padma.vattu_SSA;
Thoolika.toPadma[Thoolika.conj_GN]   = Padma.consnt_GA +  Padma.vattu_NA;
Thoolika.toPadma[Thoolika.conj_GM]   = Padma.consnt_GA +  Padma.vattu_MA;
Thoolika.toPadma[Thoolika.conj_NGK]  = Padma.consnt_NGA +  Padma.vattu_KA;
Thoolika.toPadma[Thoolika.conj_NGNG] = Padma.consnt_NGA +  Padma.vattu_NGA;

Thoolika.toPadma[Thoolika.conj_CC]   = Padma.consnt_CA +  Padma.vattu_CA;
Thoolika.toPadma[Thoolika.conj_CCH]  = Padma.consnt_CA +  Padma.vattu_CHA;
Thoolika.toPadma[Thoolika.conj_JJ]   = Padma.consnt_JA +  Padma.vattu_JA;
Thoolika.toPadma[Thoolika.conj_JNY]  = Padma.consnt_JA +  Padma.vattu_NYA;
Thoolika.toPadma[Thoolika.conj_NYC]  = Padma.consnt_NYA +  Padma.vattu_CA;
Thoolika.toPadma[Thoolika.conj_NYJ]  = Padma.consnt_NYA +  Padma.vattu_JA;
Thoolika.toPadma[Thoolika.conj_NYNY] = Padma.consnt_NYA +  Padma.vattu_NYA;

Thoolika.toPadma[Thoolika.conj_TTTT] = Padma.consnt_TTA +  Padma.vattu_TTA;
Thoolika.toPadma[Thoolika.conj_NNTT] = Padma.consnt_NNA +  Padma.vattu_TTA;
Thoolika.toPadma[Thoolika.conj_NNDD] = Padma.consnt_NNA +  Padma.vattu_DDA;
Thoolika.toPadma[Thoolika.conj_NNNN] = Padma.consnt_NNA +  Padma.vattu_NNA;
Thoolika.toPadma[Thoolika.conj_NNM]  = Padma.consnt_NNA +  Padma.vattu_MA;

Thoolika.toPadma[Thoolika.conj_T_T]  = Padma.consnt_TA +  Padma.vattu_TA;
Thoolika.toPadma[Thoolika.conj_T_TH] = Padma.consnt_TA +  Padma.vattu_THA;
Thoolika.toPadma[Thoolika.conj_TN]   = Padma.consnt_TA +  Padma.vattu_NA;
Thoolika.toPadma[Thoolika.conj_TBH]  = Padma.consnt_TA +  Padma.vattu_BHA;
Thoolika.toPadma[Thoolika.conj_TM]   = Padma.consnt_TA +  Padma.vattu_MA;
Thoolika.toPadma[Thoolika.conj_TS]   = Padma.consnt_TA +  Padma.vattu_SA;
Thoolika.toPadma[Thoolika.conj_DD]   = Padma.consnt_DA +  Padma.vattu_DA;
Thoolika.toPadma[Thoolika.conj_D_DH] = Padma.consnt_DA +  Padma.vattu_DHA;
Thoolika.toPadma[Thoolika.conj_NT]   = Padma.consnt_NA +  Padma.vattu_TA;
Thoolika.toPadma[Thoolika.conj_NTH]  = Padma.consnt_NA +  Padma.vattu_THA;
Thoolika.toPadma[Thoolika.conj_ND]   = Padma.consnt_NA +  Padma.vattu_DA;
Thoolika.toPadma[Thoolika.conj_NDH]  = Padma.consnt_NA +  Padma.vattu_DHA;
Thoolika.toPadma[Thoolika.conj_N_N]  = Padma.consnt_NA +  Padma.vattu_NA;
Thoolika.toPadma[Thoolika.conj_NM]   = Padma.consnt_NA +  Padma.vattu_MA;
Thoolika.toPadma[Thoolika.conj_NRR]  = Padma.consnt_NA +  Padma.vattu_RRA;
//Thoolika.toPadma[Thoolika.conj_NAU]  = Padma.consnt_NA +  Padma.chandrakkala;

Thoolika.toPadma[Thoolika.conj_PP]  = Padma.consnt_PA +  Padma.vattu_PA;
Thoolika.toPadma[Thoolika.conj_BB]  = Padma.consnt_BA +  Padma.vattu_BA;
Thoolika.toPadma[Thoolika.conj_MP]  = Padma.consnt_MA +  Padma.vattu_PA;
Thoolika.toPadma[Thoolika.conj_MM]  = Padma.consnt_MA +  Padma.vattu_MA;

Thoolika.toPadma[Thoolika.conj_YY]  = Padma.consnt_YA +  Padma.vattu_YA;
Thoolika.toPadma[Thoolika.conj_L_L] = Padma.consnt_LA +  Padma.vattu_LA;
Thoolika.toPadma[Thoolika.conj_VV]  = Padma.consnt_VA +  Padma.vattu_VA;

Thoolika.toPadma[Thoolika.conj_SHC]  = Padma.consnt_SHA +  Padma.vattu_CA;
Thoolika.toPadma[Thoolika.conj_STH]  = Padma.consnt_SA +  Padma.vattu_THA;
Thoolika.toPadma[Thoolika.conj_SRR]  = Padma.consnt_SA +  Padma.vattu_RRA;

Thoolika.toPadma[Thoolika.conj_HN]   = Padma.consnt_HA +  Padma.vattu_NA;
Thoolika.toPadma[Thoolika.conj_HM]   = Padma.consnt_HA +  Padma.vattu_MA;
Thoolika.toPadma[Thoolika.conj_LLLL] = Padma.consnt_LLA +  Padma.vattu_LLA;
Thoolika.toPadma[Thoolika.conj_RRRR] = Padma.consnt_RRA +  Padma.vattu_RRA;

//Consonant(s) + Vowel Sign
Thoolika.toPadma[Thoolika.combo_RU]    = Padma.consnt_RA + Padma.vowelsn_U;

//Miscellaneous(where it doesn't match ASCII representation)
Thoolika.toPadma[Thoolika.extra_QTSINGLE_1] = Thoolika.QTSINGLE;
Thoolika.toPadma[Thoolika.extra_QTSINGLE_2] = Thoolika.QTSINGLE;
Thoolika.toPadma[Thoolika.extra_QTSINGLE_3] = Thoolika.QTSINGLE;
Thoolika.toPadma[Thoolika.extra_DBLQT_1]    = '"';
Thoolika.toPadma[Thoolika.extra_DBLQT_2]    = '"';
Thoolika.toPadma[Thoolika.extra_PERIOD]     = '.';
Thoolika.toPadma[Thoolika.extra_ASTERISK]   = '*';
Thoolika.toPadma[Thoolika.extra_HYPHEN_1]   = '-';
Thoolika.toPadma[Thoolika.extra_HYPHEN_2]   = '-';
Thoolika.toPadma[Thoolika.extra_HYPHEN_3]   = '-';

Thoolika.redundantList = new Object();
Thoolika.redundantList[Thoolika.misc_UNKNOWN_1] = true;

Thoolika.prefixList = new Object();
Thoolika.prefixList[Thoolika.vattu_RA]   = true;
Thoolika.prefixList[Thoolika.vowelsn_E]  = true;
Thoolika.prefixList[Thoolika.vowelsn_EE] = true;
Thoolika.prefixList[Thoolika.vowelsn_AI] = true;

Thoolika.overloadList = new Object();
Thoolika.overloadList[Thoolika.vowel_I]        = true;
Thoolika.overloadList[Thoolika.vowel_U]        = true;
Thoolika.overloadList[Thoolika.vowel_R]        = true;
Thoolika.overloadList[Thoolika.vowel_O]        = true;
Thoolika.overloadList[Thoolika.vowelsn_R]      = true;
Thoolika.overloadList[Thoolika.vowelsn_E]      = true;
