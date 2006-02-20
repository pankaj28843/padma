// $Id: Revathi.js,v 1.6 2006/02/20 21:16:29 vnagarjuna Exp $ -->

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

//Revathi Malayalam

function Revathi()
{
}

//The interface every dynamic font encoding should implement
Revathi.maxLookupLen = 2;
Revathi.fontFace     = "MLW-TTRevathi";
Revathi.displayName  = "Revathi";
Revathi.script       = Padma.script_MALAYALAM;

Revathi.lookup = function (str) 
{
    return Revathi.toPadma[str];
}

Revathi.isPrefixSymbol = function (str)
{
    return Revathi.prefixList[str] != null;
}

Revathi.isOverloaded = function (str)
{
    return Revathi.overloadList[str] != null;
}

Revathi.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if ((sign1 == Padma.vowelsn_E && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_E))
        return Padma.vowelsn_O;
    if ((sign1 == Padma.vowelsn_EE && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_EE))
        return Padma.vowelsn_OO;
    return sign1 + sign2;
}

Revathi.isRedundant = function (str)
{
    return Revathi.redundantList[str] != null;
}

//Implementation details start here

//Specials
Revathi.visarga        = "\u0078";
Revathi.anusvara       = "\u0077";
Revathi.virama         = "\u0076"; //Chandrakkala

//Vowels
Revathi.vowel_A        = "\u0041";
Revathi.vowel_AA       = "\u0042";
Revathi.vowel_I        = "\u0043";
Revathi.vowel_II       = "\u0043\u0075";
Revathi.vowel_U        = "\u0044";
Revathi.vowel_UU       = "\u0044\u0075";
Revathi.vowel_R        = "\u0045";
Revathi.vowel_RR       = "\u0045\u0075";
Revathi.vowel_E        = "\u0046";
Revathi.vowel_EE       = "\u0047";               
Revathi.vowel_AI       = "\u0073\u0046";
Revathi.vowel_O        = "\u0048";
Revathi.vowel_OO       = "\u0048\u006D";
Revathi.vowel_AU       = "\u0048\u0075";

//Consonants
Revathi.consnt_KA      = "\u0049";
Revathi.consnt_KHA     = "\u004A";
Revathi.consnt_GA      = "\u004B";
Revathi.consnt_GHA     = "\u004C";
Revathi.consnt_NGA     = "\u004D";

Revathi.consnt_CA      = "\u004E";
Revathi.consnt_CHA     = "\u004F";
Revathi.consnt_JA      = "\u0050";
Revathi.consnt_JHA     = "\u0051";
Revathi.consnt_NYA     = "\u0052";

Revathi.consnt_TTA     = "\u0053";
Revathi.consnt_TTHA    = "\u0054";
Revathi.consnt_DDA     = "\u0055";
Revathi.consnt_DDHA    = "\u0056";
Revathi.consnt_NNA     = "\u0057";

Revathi.consnt_TA      = "\u0058";
Revathi.consnt_THA     = "\u0059";
Revathi.consnt_DA      = "\u005A";
Revathi.consnt_DHA     = "\u005B";
Revathi.consnt_NA      = "\u005C";

Revathi.consnt_PA      = "\u005D";
Revathi.consnt_PHA     = "\u005E";
Revathi.consnt_BA      = "\u005F";
Revathi.consnt_BHA     = "\u0060";
Revathi.consnt_MA      = "\u0061";

Revathi.consnt_YA      = "\u0062";
Revathi.consnt_RA      = "\u0063";
Revathi.consnt_LA      = "\u0065";
Revathi.consnt_VA      = "\u0068";
Revathi.consnt_SHA     = "\u0069";
Revathi.consnt_SSA     = "\u006A";
Revathi.consnt_SA      = "\u006B";

Revathi.consnt_HA      = "\u006C";
Revathi.consnt_LLA     = "\u0066";
Revathi.consnt_ZHA     = "\u0067";
Revathi.consnt_RRA     = "\u0064";

//Gunintamulu
Revathi.vowelsn_AA     = "\u006D";
Revathi.vowelsn_I      = "\u006E";
Revathi.vowelsn_II     = "\u006F";
Revathi.vowelsn_U      = "\u0070";
Revathi.vowelsn_UU     = "\u0071";
Revathi.vowelsn_R      = "\u0072";
Revathi.vowelsn_RR     = "\u0072\u0075";
Revathi.vowelsn_E      = "\u0073";
Revathi.vowelsn_EE     = "\u0074";
Revathi.vowelsn_AI     = "\u0073\u0073";
//vowelsigns o and O have two separate glyphs, one on left and one on right.
Revathi.vowelsn_AU     = "\u0075";

//Chillu (5)
Revathi.chillu_ENN     = "\u00AC";
Revathi.chillu_IN      = "\u00B3";
Revathi.chillu_IR      = "\u00C0";
Revathi.chillu_IL      = "\u00F0";
Revathi.chillu_ILL     = "\u00C4";

//vattulu (consonant signs)
Revathi.vattu_YA       = "\u0079";
Revathi.vattu_RA       = "\u007B";
Revathi.vattu_VA       = "\u007A";

//kooTTaksharangngaL
Revathi.conj_KK        = "\u00A1";
Revathi.conj_KTT       = "\u00CE";
Revathi.conj_KT        = "\u00E0";
Revathi.conj_KLL       = "\u00A2";
Revathi.conj_KSH       = "\u00A3";
Revathi.conj_GG        = "\u00A4";
Revathi.conj_GN        = "\u00E1";
Revathi.conj_GM        = "\u00DC";
Revathi.conj_GLL       = "\u00A5";
Revathi.conj_NGK       = "\u00A6";  
Revathi.conj_NGNG      = "\u00A7";

Revathi.conj_CC        = "\u00A8";
Revathi.conj_CCH       = "\u00D1";
Revathi.conj_JJ        = "\u00D6";
Revathi.conj_JNY       = "\u00DA";
Revathi.conj_NYC       = "\u00F4";
Revathi.conj_NYNY      = "\u00AA";

Revathi.conj_TTTT      = "\u00AB";
Revathi.conj_DDDD      = "\u00CD";
Revathi.conj_NNTT      = "\u00EF";
Revathi.conj_NNDD      = "\u00DE";
Revathi.conj_NNNN      = "\u00AE";
Revathi.conj_NNM       = "\u00D7";

Revathi.conj_T_T       = "\u00AF";
Revathi.conj_T_TH      = "\u00B0";
Revathi.conj_TBH       = "\u00DB";
Revathi.conj_TM        = "\u00DF";
Revathi.conj_TS        = "\u00D5";
Revathi.conj_DD        = "\u00B1";
Revathi.conj_D_DH      = "\u00B2";
Revathi.conj_NT        = "\u00B4";
Revathi.conj_NTH       = "\u00D9";
Revathi.conj_ND        = "\u00B5";
Revathi.conj_NDH       = "\u00D4";
Revathi.conj_N_N       = "\u00F3";
Revathi.conj_NM        = "\u00F2";
Revathi.conj_NRR_1     = "\u00E2"; 
Revathi.conj_NRR_2     = "\u00B3\u0064"; 
Revathi.conj_NAU       = "\u00E5"; //npollu for me, nau for paul

Revathi.conj_PP        = "\u00B8";
Revathi.conj_PLL       = "\u00B9";
Revathi.conj_BDH       = "\u00CF";
Revathi.conj_BD        = "\u00D0";
Revathi.conj_BB        = "\u00BA";
Revathi.conj_BLL       = "\u00BB";
Revathi.conj_MP        = "\u00BC";
Revathi.conj_MM        = "\u00BD";
Revathi.conj_MLL       = "\u00BE";

Revathi.conj_YY        = "\u00BF";
Revathi.conj_L_L       = "\u00F1";
Revathi.conj_VV        = "\u00C6";

Revathi.conj_SHC       = "\u00DD";
Revathi.conj_SHLL      = "\u00C7";
Revathi.conj_SHSH      = "\u00C8";
Revathi.conj_SSTT      = "\u00E3";
Revathi.conj_SLL       = "\u00C9";
Revathi.conj_S_S       = "\u00CA";
Revathi.conj_STH       = "\u00D8";
Revathi.conj_SRR       = "\u00CC";

Revathi.conj_HN        = "\u00D3";
Revathi.conj_HM        = "\u00D2";
Revathi.conj_HLL       = "\u00CB";
Revathi.conj_LLLL      = "\u00C5";

Revathi.conj_RRRR_1    = "\u00C1"; //ta as in steel
Revathi.conj_RRRR_2    = "\u00E4"; //ta as in steel

//Digits
Revathi.digit_ZERO     = "\u0030";
Revathi.digit_ONE      = "\u0031";
Revathi.digit_TWO      = "\u0032";
Revathi.digit_THREE    = "\u0033";
Revathi.digit_FOUR     = "\u0034";
Revathi.digit_FIVE     = "\u0035";
Revathi.digit_SIX      = "\u0036";
Revathi.digit_SEVEN    = "\u0037";
Revathi.digit_EIGHT    = "\u0038";
Revathi.digit_NINE     = "\u0039";

//Matches ASCII
Revathi.EXCLAM         = "\u0021";
Revathi.PERCENT        = "\u0025";
Revathi.AMPERSAND      = "\u0026";
Revathi.QTSINGLE       = "\u0027";
Revathi.PARENLEFT      = "\u0028";
Revathi.PARENRIGT      = "\u0029";
Revathi.ASTERISK       = "\u002A";
Revathi.PLUS           = "\u002B";
Revathi.COMMA          = "\u002C";
Revathi.PERIOD         = "\u002E";
Revathi.SLASH          = "\u002F";
Revathi.COLON          = "\u003A";
Revathi.SEMICOLON      = "\u003B";
Revathi.LESSTHAN       = "\u003C";
Revathi.EQUALS         = "\u003D";
Revathi.GREATERTHAN    = "\u003E";
Revathi.QUESTION       = "\u003F";
Revathi.ATSIGN         = "\u0040";

//Does not match ASCII
Revathi.extra_QTSINGLE = "\u0022";
Revathi.extra_DBLQT    = "\u0022\u0022";
Revathi.extra_PERIOD_1 = "\u0024";
Revathi.extra_PERIOD_2 = "\u00B7";
Revathi.extra_HYPHEN_1 = "\u00AD";
Revathi.extra_HYPHEN_2 = "\u00FE";

//Dont need
Revathi.misc_UNKNOWN_1  = "\u002D";

Revathi.toPadma = new Object();

Revathi.toPadma[Revathi.anusvara] = Padma.anusvara;
Revathi.toPadma[Revathi.visarga]  = Padma.visarga;
Revathi.toPadma[Revathi.virama]   = Padma.chandrakkala;

Revathi.toPadma[Revathi.vowel_A]  = Padma.vowel_A;
Revathi.toPadma[Revathi.vowel_AA] = Padma.vowel_AA;
Revathi.toPadma[Revathi.vowel_I]  = Padma.vowel_I;
Revathi.toPadma[Revathi.vowel_II] = Padma.vowel_II;
Revathi.toPadma[Revathi.vowel_U]  = Padma.vowel_U;
Revathi.toPadma[Revathi.vowel_UU] = Padma.vowel_UU;
Revathi.toPadma[Revathi.vowel_R]  = Padma.vowel_R;
Revathi.toPadma[Revathi.vowel_RR] = Padma.vowel_RR;
Revathi.toPadma[Revathi.vowel_E]  = Padma.vowel_E;
Revathi.toPadma[Revathi.vowel_EE] = Padma.vowel_EE;
Revathi.toPadma[Revathi.vowel_AI] = Padma.vowel_AI;
Revathi.toPadma[Revathi.vowel_O]  = Padma.vowel_O;
Revathi.toPadma[Revathi.vowel_OO] = Padma.vowel_OO;
Revathi.toPadma[Revathi.vowel_AU] = Padma.vowel_AU;

Revathi.toPadma[Revathi.consnt_KA]  = Padma.consnt_KA;
Revathi.toPadma[Revathi.consnt_KHA] = Padma.consnt_KHA;
Revathi.toPadma[Revathi.consnt_GA]  = Padma.consnt_GA;
Revathi.toPadma[Revathi.consnt_GHA] = Padma.consnt_GHA;
Revathi.toPadma[Revathi.consnt_NGA] = Padma.consnt_NGA;

Revathi.toPadma[Revathi.consnt_CA]  = Padma.consnt_CA;
Revathi.toPadma[Revathi.consnt_CHA] = Padma.consnt_CHA;
Revathi.toPadma[Revathi.consnt_JA]  = Padma.consnt_JA;
Revathi.toPadma[Revathi.consnt_JHA] = Padma.consnt_JHA;
Revathi.toPadma[Revathi.consnt_NYA] = Padma.consnt_NYA;

Revathi.toPadma[Revathi.consnt_TTA]  = Padma.consnt_TTA;
Revathi.toPadma[Revathi.consnt_TTHA] = Padma.consnt_TTHA;
Revathi.toPadma[Revathi.consnt_DDA]  = Padma.consnt_DDA;
Revathi.toPadma[Revathi.consnt_DDHA] = Padma.consnt_DDHA;
Revathi.toPadma[Revathi.consnt_NNA]  = Padma.consnt_NNA;

Revathi.toPadma[Revathi.consnt_TA]  = Padma.consnt_TA;
Revathi.toPadma[Revathi.consnt_THA] = Padma.consnt_THA;
Revathi.toPadma[Revathi.consnt_DA]  = Padma.consnt_DA;
Revathi.toPadma[Revathi.consnt_DHA] = Padma.consnt_DHA;
Revathi.toPadma[Revathi.consnt_NA]  = Padma.consnt_NA;

Revathi.toPadma[Revathi.consnt_PA]  = Padma.consnt_PA;
Revathi.toPadma[Revathi.consnt_PHA] = Padma.consnt_PHA;
Revathi.toPadma[Revathi.consnt_BA]  = Padma.consnt_BA;
Revathi.toPadma[Revathi.consnt_BHA] = Padma.consnt_BHA;
Revathi.toPadma[Revathi.consnt_MA]  = Padma.consnt_MA;

Revathi.toPadma[Revathi.consnt_YA]  = Padma.consnt_YA;
Revathi.toPadma[Revathi.consnt_RA]  = Padma.consnt_RA;
Revathi.toPadma[Revathi.consnt_LA]  = Padma.consnt_LA;
Revathi.toPadma[Revathi.consnt_VA]  = Padma.consnt_VA;
Revathi.toPadma[Revathi.consnt_SHA] = Padma.consnt_SHA;
Revathi.toPadma[Revathi.consnt_SSA] = Padma.consnt_SSA;
Revathi.toPadma[Revathi.consnt_SA]  = Padma.consnt_SA;

Revathi.toPadma[Revathi.consnt_HA] = Padma.consnt_HA;
Revathi.toPadma[Revathi.consnt_LLA] = Padma.consnt_LLA;
Revathi.toPadma[Revathi.consnt_ZHA] = Padma.consnt_ZHA;
Revathi.toPadma[Revathi.consnt_RRA] = Padma.consnt_RRA;

//Gunintamulu
Revathi.toPadma[Revathi.vowelsn_AA] = Padma.vowelsn_AA;
Revathi.toPadma[Revathi.vowelsn_I]  = Padma.vowelsn_I;
Revathi.toPadma[Revathi.vowelsn_II] = Padma.vowelsn_II;
Revathi.toPadma[Revathi.vowelsn_U]  = Padma.vowelsn_U;
Revathi.toPadma[Revathi.vowelsn_UU] = Padma.vowelsn_UU;
Revathi.toPadma[Revathi.vowelsn_R]  = Padma.vowelsn_R;
Revathi.toPadma[Revathi.vowelsn_E]  = Padma.vowelsn_E;
Revathi.toPadma[Revathi.vowelsn_EE] = Padma.vowelsn_EE;
Revathi.toPadma[Revathi.vowelsn_AI] = Padma.vowelsn_AI;
Revathi.toPadma[Revathi.vowelsn_AU] = Padma.vowelsn_AU;

//Chillu
Revathi.toPadma[Revathi.chillu_ENN] = Padma.consnt_NNA + Padma.chillu;
Revathi.toPadma[Revathi.chillu_IN]  = Padma.consnt_NA + Padma.chillu;
Revathi.toPadma[Revathi.chillu_IR]  = Padma.consnt_RA + Padma.chillu;
Revathi.toPadma[Revathi.chillu_IL]  = Padma.consnt_LA + Padma.chillu;
Revathi.toPadma[Revathi.chillu_ILL] = Padma.consnt_LLA + Padma.chillu;

//vattulu
Revathi.toPadma[Revathi.vattu_YA]  = Padma.vattu_YA;
Revathi.toPadma[Revathi.vattu_RA]  = Padma.vattu_RA;
Revathi.toPadma[Revathi.vattu_VA]  = Padma.vattu_VA;

//kooTTaksharangngaL
Revathi.toPadma[Revathi.conj_KK]   = Padma.consnt_KA +  Padma.vattu_KA;
Revathi.toPadma[Revathi.conj_KTT]  = Padma.consnt_KA +  Padma.vattu_TTA;
Revathi.toPadma[Revathi.conj_KT]   = Padma.consnt_KA +  Padma.vattu_TA;
Revathi.toPadma[Revathi.conj_KLL]  = Padma.consnt_KA +  Padma.vattu_LLA;
Revathi.toPadma[Revathi.conj_KSH]  = Padma.consnt_KA +  Padma.vattu_SSA;
Revathi.toPadma[Revathi.conj_GG]   = Padma.consnt_GA +  Padma.vattu_GA;
Revathi.toPadma[Revathi.conj_GN]   = Padma.consnt_GA +  Padma.vattu_NA;
Revathi.toPadma[Revathi.conj_GM]   = Padma.consnt_GA +  Padma.vattu_MA;
Revathi.toPadma[Revathi.conj_GLL]  = Padma.consnt_GA +  Padma.vattu_LLA;
Revathi.toPadma[Revathi.conj_NGK]  = Padma.consnt_NGA +  Padma.vattu_KA;
Revathi.toPadma[Revathi.conj_NGNG] = Padma.consnt_NGA +  Padma.vattu_NGA;

Revathi.toPadma[Revathi.conj_CC]   = Padma.consnt_CA +  Padma.vattu_CA;
Revathi.toPadma[Revathi.conj_CCH]  = Padma.consnt_CA +  Padma.vattu_CHA;
Revathi.toPadma[Revathi.conj_JJ]   = Padma.consnt_JA +  Padma.vattu_JA;
Revathi.toPadma[Revathi.conj_JNY]  = Padma.consnt_JA +  Padma.vattu_NYA;
Revathi.toPadma[Revathi.conj_NYC]  = Padma.consnt_NYA +  Padma.vattu_CA;
Revathi.toPadma[Revathi.conj_NYNY] = Padma.consnt_NYA +  Padma.vattu_NYA;

Revathi.toPadma[Revathi.conj_TTTT] = Padma.consnt_TTA +  Padma.vattu_TTA;
Revathi.toPadma[Revathi.conj_DDDD] = Padma.consnt_DDA +  Padma.vattu_DDA;
Revathi.toPadma[Revathi.conj_NNTT] = Padma.consnt_NNA +  Padma.vattu_TTA;
Revathi.toPadma[Revathi.conj_NNDD] = Padma.consnt_NNA +  Padma.vattu_DDA;
Revathi.toPadma[Revathi.conj_NNNN] = Padma.consnt_NNA +  Padma.vattu_NNA;
Revathi.toPadma[Revathi.conj_NNM]  = Padma.consnt_NNA +  Padma.vattu_MA;

Revathi.toPadma[Revathi.conj_T_T]  = Padma.consnt_TA +  Padma.vattu_TA;
Revathi.toPadma[Revathi.conj_T_TH] = Padma.consnt_TA +  Padma.vattu_THA;
Revathi.toPadma[Revathi.conj_TBH]  = Padma.consnt_TA +  Padma.vattu_BHA;
Revathi.toPadma[Revathi.conj_TM]   = Padma.consnt_TA +  Padma.vattu_MA;
Revathi.toPadma[Revathi.conj_TS]   = Padma.consnt_TA +  Padma.vattu_SA;
Revathi.toPadma[Revathi.conj_DD]   = Padma.consnt_DA +  Padma.vattu_DA;
Revathi.toPadma[Revathi.conj_D_DH] = Padma.consnt_DA +  Padma.vattu_DHA;
Revathi.toPadma[Revathi.conj_NT]   = Padma.consnt_NA +  Padma.vattu_TA;
Revathi.toPadma[Revathi.conj_NTH]  = Padma.consnt_NA +  Padma.vattu_THA;
Revathi.toPadma[Revathi.conj_ND]   = Padma.consnt_NA +  Padma.vattu_DA;
Revathi.toPadma[Revathi.conj_NDH]  = Padma.consnt_NA +  Padma.vattu_DHA;
Revathi.toPadma[Revathi.conj_N_N]  = Padma.consnt_NA +  Padma.vattu_NA;
Revathi.toPadma[Revathi.conj_NM]   = Padma.consnt_NA +  Padma.vattu_MA;
Revathi.toPadma[Revathi.conj_NRR_1] = Padma.consnt_NA +  Padma.vattu_RRA;
Revathi.toPadma[Revathi.conj_NRR_2] = Padma.consnt_NA +  Padma.vattu_RRA;
Revathi.toPadma[Revathi.conj_NAU]  = Padma.consnt_NA +  Padma.chandrakkala;

Revathi.toPadma[Revathi.conj_PP]  = Padma.consnt_PA +  Padma.vattu_PA;
Revathi.toPadma[Revathi.conj_PLL] = Padma.consnt_PA +  Padma.vattu_LLA;
Revathi.toPadma[Revathi.conj_BDH] = Padma.consnt_BA +  Padma.vattu_DHA;
Revathi.toPadma[Revathi.conj_BD]  = Padma.consnt_BA +  Padma.vattu_DA;
Revathi.toPadma[Revathi.conj_BB]  = Padma.consnt_BA +  Padma.vattu_BA;
Revathi.toPadma[Revathi.conj_BLL] = Padma.consnt_BA +  Padma.vattu_LLA;
Revathi.toPadma[Revathi.conj_MP]  = Padma.consnt_MA +  Padma.vattu_PA;
Revathi.toPadma[Revathi.conj_MM]  = Padma.consnt_MA +  Padma.vattu_MA;
Revathi.toPadma[Revathi.conj_MLL] = Padma.consnt_MA +  Padma.vattu_LLA;

Revathi.toPadma[Revathi.conj_YY]  = Padma.consnt_YA +  Padma.vattu_YA;
Revathi.toPadma[Revathi.conj_L_L] = Padma.consnt_LA +  Padma.vattu_LA;
Revathi.toPadma[Revathi.conj_VV]  = Padma.consnt_VA +  Padma.vattu_VA;

Revathi.toPadma[Revathi.conj_SHC]  = Padma.consnt_SHA +  Padma.vattu_CA;
Revathi.toPadma[Revathi.conj_SHLL] = Padma.consnt_SHA +  Padma.vattu_LLA;
Revathi.toPadma[Revathi.conj_SHSH] = Padma.consnt_SHA +  Padma.vattu_SHA;
Revathi.toPadma[Revathi.conj_SSTT] = Padma.consnt_SSA +  Padma.vattu_TTA
Revathi.toPadma[Revathi.conj_SLL]  = Padma.consnt_SA +  Padma.vattu_LLA;
Revathi.toPadma[Revathi.conj_S_S]  = Padma.consnt_SA +  Padma.vattu_SA;
Revathi.toPadma[Revathi.conj_STH]  = Padma.consnt_SA +  Padma.vattu_THA;
Revathi.toPadma[Revathi.conj_SRR]  = Padma.consnt_SA +  Padma.vattu_RRA;

Revathi.toPadma[Revathi.conj_HN]   = Padma.consnt_HA +  Padma.vattu_NA;
Revathi.toPadma[Revathi.conj_HM]   = Padma.consnt_HA +  Padma.vattu_MA;
Revathi.toPadma[Revathi.conj_HLL]  = Padma.consnt_HA +  Padma.vattu_LLA;
Revathi.toPadma[Revathi.conj_LLLL] = Padma.consnt_LLA +  Padma.vattu_LLA;

Revathi.toPadma[Revathi.conj_RRRR_1] = Padma.consnt_RRA +  Padma.vattu_RRA;
Revathi.toPadma[Revathi.conj_RRRR_2] = Padma.consnt_RRA +  Padma.vattu_RRA;

//Miscellaneous(where it doesn't match ASCII representation)
Revathi.toPadma[Revathi.extra_QTSINGLE] = "'";
Revathi.toPadma[Revathi.extra_DBLQT]    = '"';
Revathi.toPadma[Revathi.extra_PERIOD_1] = '.';
Revathi.toPadma[Revathi.extra_PERIOD_2] = '.';
Revathi.toPadma[Revathi.extra_HYPHEN_1] = '-';
Revathi.toPadma[Revathi.extra_HYPHEN_2] = '-';

Revathi.redundantList = new Object();
Revathi.redundantList[Revathi.misc_UNKNOWN_1] = true;

Revathi.prefixList = new Object();
Revathi.prefixList[Revathi.vattu_RA]   = true;
Revathi.prefixList[Revathi.vowelsn_E]  = true;
Revathi.prefixList[Revathi.vowelsn_EE] = true;
Revathi.prefixList[Revathi.vowelsn_AI] = true;

Revathi.overloadList = new Object();
Revathi.overloadList[Revathi.vowel_I]        = true;
Revathi.overloadList[Revathi.vowel_U]        = true;
Revathi.overloadList[Revathi.vowel_R]        = true;
Revathi.overloadList[Revathi.vowel_O]        = true;
Revathi.overloadList[Revathi.vowelsn_R]      = true;
Revathi.overloadList[Revathi.vowelsn_E]      = true;
Revathi.overloadList[Revathi.chillu_IN]      = true;
Revathi.overloadList[Revathi.extra_QTSINGLE] = true;
