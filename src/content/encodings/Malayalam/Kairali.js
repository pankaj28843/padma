// $Id: Kairali.js,v 1.6 2006/02/20 21:16:29 vnagarjuna Exp $ -->

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

//Kairali Malayalam

function Kairali()
{
}

//The interface every dynamic font encoding should implement
Kairali.maxLookupLen = 2;
Kairali.fontFace     = "PMLTKairali";
Kairali.displayName  = "Kairali";
Kairali.script       = Padma.script_MALAYALAM;

Kairali.lookup = function (str) 
{
    return Kairali.toPadma[str];
}

Kairali.isPrefixSymbol = function (str)
{
    return Kairali.prefixList[str] != null;
}

Kairali.isOverloaded = function (str)
{
    return Kairali.overloadList[str] != null;
}

Kairali.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if ((sign1 == Padma.vowelsn_E && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_E))
        return Padma.vowelsn_O;
    if ((sign1 == Padma.vowelsn_EE && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_EE))
        return Padma.vowelsn_OO;
    return sign1 + sign2;
}

Kairali.isRedundant = function (str)
{
    return Kairali.redundantList[str] != null;
}

//Implementation details start here

//Specials
Kairali.visarga        = "\u00AF";
Kairali.anusvara       = "\u00AC";
Kairali.virama         = "\u00AE"; //Chandrakkala

//Vowels
Kairali.vowel_A        = "\u20AC";
Kairali.vowel_AA       = "\u0081";
Kairali.vowel_I        = "\u201A";
Kairali.vowel_II       = "\u201A\u00AA";
Kairali.vowel_U        = "\u0192";
Kairali.vowel_UU       = "\u0192\u00AA";
Kairali.vowel_R        = "\u201E";
Kairali.vowel_RR       = "\u201E\u00AA";
Kairali.vowel_E        = "\u2026";
Kairali.vowel_EE       = "\u2020";               
Kairali.vowel_AI       = "\u00A5\u2026";
Kairali.vowel_O        = "\u2021";
Kairali.vowel_OO       = "\u2021\u00A1";
Kairali.vowel_AU       = "\u2021\u00AA";

//Consonants
Kairali.consnt_KA      = "\u02C6";
Kairali.consnt_KHA     = "\u2030";
Kairali.consnt_GA      = "\u0160";
Kairali.consnt_GHA     = "\u2039";
Kairali.consnt_NGA     = "\u0152";

Kairali.consnt_CA      = "\u008D";
Kairali.consnt_CHA     = "\u017D";
Kairali.consnt_JA      = "\u008F";
Kairali.consnt_JHA     = "\u00CB";
Kairali.consnt_NYA     = "\u00C7";

Kairali.consnt_TTA     = "\u00D0";
Kairali.consnt_TTHA    = "\u007E";
Kairali.consnt_DDA     = "\u00B0";
Kairali.consnt_DDHA    = "\u0153";
Kairali.consnt_NNA     = "\u00C3";

Kairali.consnt_TA      = "\u00BB";
Kairali.consnt_THA     = "\u02DC";
Kairali.consnt_DA      = "\u2122";
Kairali.consnt_DHA     = "\u0161";
Kairali.consnt_NA      = "\u203A";

Kairali.consnt_PA      = "\u00B2";
Kairali.consnt_PHA     = "\u009D";
Kairali.consnt_BA      = "\u017E";
Kairali.consnt_BHA     = "\u0178";
Kairali.consnt_MA      = "\u00C4";

Kairali.consnt_YA      = "\u00F0";
Kairali.consnt_RA      = "\u00F1";
Kairali.consnt_LA      = "\u00F2";
Kairali.consnt_VA      = "\u00F3";
Kairali.consnt_SHA     = "\u00F4";
Kairali.consnt_SSA     = "\u00F5";
Kairali.consnt_SA      = "\u00F6";

Kairali.consnt_HA      = "\u00F7";
Kairali.consnt_LLA     = "\u00F8";
Kairali.consnt_ZHA     = "\u00F9";
Kairali.consnt_RRA     = "\u00FA";

//Gunintamulu
Kairali.vowelsn_AA     = "\u00A1";
Kairali.vowelsn_I      = "\u00A2";
Kairali.vowelsn_II     = "\u00A3";
Kairali.vowelsn_U      = "\u00A9";
Kairali.vowelsn_UU     = "\u00A8";
Kairali.vowelsn_R      = "\u00A6";
Kairali.vowelsn_RR     = "\u00A6\u00AA";
Kairali.vowelsn_E      = "\u00A5";
Kairali.vowelsn_EE     = "\u00A4";
Kairali.vowelsn_AI     = "\u00A5\u00A5";
//vowelsigns o and O have two separate glyphs, one on left and one on right.
Kairali.vowelsn_AU     = "\u00AA";

//Chillu (5)
Kairali.chillu_ENN     = "\u00FF";
Kairali.chillu_IN      = "\u00FC";
Kairali.chillu_IR      = "\u00FB";
Kairali.chillu_IL      = "\u00FD";
Kairali.chillu_ILL     = "\u00FE";

//vattulu (consonant signs)
Kairali.vattu_GA       = "\u00EA";
Kairali.vattu_TTA      = "\u00E9";
Kairali.vattu_DDA      = "\u00EC";
Kairali.vattu_NNA      = "\u00E5";
Kairali.vattu_TA       = "\u00ED";
Kairali.vattu_DA       = "\u00EF";
Kairali.vattu_DHA      = "\u00E8";
Kairali.vattu_NA       = "\u00EE";
Kairali.vattu_PA       = "\u00E7";
Kairali.vattu_MA       = "\u00E4";
Kairali.vattu_YA       = "\u00AB";
Kairali.vattu_RA       = "\u00B1";
Kairali.vattu_LA       = "\u00EB";
Kairali.vattu_VA       = "\u00A7";
Kairali.vattu_SA       = "\u00E6";

//kooTTaksharangngaL
Kairali.conj_KK        = "\u00B4";
Kairali.conj_KT        = "\u00BF";
Kairali.conj_KSH       = "\u00BC";
Kairali.conj_GN        = "\u00DE";
Kairali.conj_NGK       = "\u00C6";  
Kairali.conj_NGNG      = "\u00B9";

Kairali.conj_CC        = "\u00C1";
Kairali.conj_CCH       = "\u00D4";
Kairali.conj_JJ        = "\u00D2";
Kairali.conj_JNY       = "\u00D1";
Kairali.conj_NYC       = "\u00D5";
Kairali.conj_NYJ       = "\u00D3";
Kairali.conj_NYNY      = "\u00C8";

Kairali.conj_TTTT      = "\u00B8";
Kairali.conj_NNTT      = "\u00D9";
Kairali.conj_NNDD      = "\u00DF";

Kairali.conj_T_T       = "\u00B7";
Kairali.conj_T_TH      = "\u00CE";
Kairali.conj_TBH       = "\u00CF";
Kairali.conj_TM        = "\u00C5";
Kairali.conj_TS        = "\u0090";
Kairali.conj_DD        = "\u00C0";
Kairali.conj_D_DH      = "\u00DA";
Kairali.conj_NT        = "\u00C2";
Kairali.conj_NTH       = "\u00DD";
Kairali.conj_ND        = "\u00B3";
Kairali.conj_NDH       = "\u00DC";
Kairali.conj_N_N       = "\u00C9";
Kairali.conj_NM        = "\u00B5";
Kairali.conj_NRR_1     = "\u00CA"; 
Kairali.conj_NRR_2     = "\u00FC\u00FA"; 

Kairali.conj_PP        = "\u00B6";
Kairali.conj_BB        = "\u00E2";
Kairali.conj_MP        = "\u00D8";
Kairali.conj_MM        = "\u00BD";

Kairali.conj_YY        = "\u00E0";
Kairali.conj_L_L       = "\u00F2\u00EB";
Kairali.conj_VV        = "\u00E1";

Kairali.conj_SHC       = "\u00D6";
Kairali.conj_SHSH      = "\u00DB";
Kairali.conj_STH       = "\u00CC";
Kairali.conj_SRR       = "\u00CD";

Kairali.conj_HN        = "\u00DB";
Kairali.conj_HM        = "\u00BA";
Kairali.conj_LLLL      = "\u00BE";

Kairali.conj_RRRR      = "\u00D7"; //ta as in steel

//Digits
Kairali.digit_ZERO     = "\u0030";
Kairali.digit_ONE      = "\u0031";
Kairali.digit_TWO      = "\u0032";
Kairali.digit_THREE    = "\u0033";
Kairali.digit_FOUR     = "\u0034";
Kairali.digit_FIVE     = "\u0035";
Kairali.digit_SIX      = "\u0036";
Kairali.digit_SEVEN    = "\u0037";
Kairali.digit_EIGHT    = "\u0038";
Kairali.digit_NINE     = "\u0039";

//Matches ASCII from 00-0x7D
//Does not match ASCII
Kairali.extra_QTSINGLE_1 = "\u2018";
Kairali.extra_QTSINGLE_2 = "\u2019";
Kairali.extra_QTDOUBLE_1 = "\u201C";
Kairali.extra_QTDOUBLE_2 = "\u201D";
Kairali.extra_HYPHEN     = "\u00AD";

//Dont need
Kairali.misc_UNKNOWN_1  = "\u002D";

Kairali.toPadma = new Object();

Kairali.toPadma[Kairali.anusvara] = Padma.anusvara;
Kairali.toPadma[Kairali.visarga]  = Padma.visarga;
Kairali.toPadma[Kairali.virama]   = Padma.chandrakkala;

Kairali.toPadma[Kairali.vowel_A]  = Padma.vowel_A;
Kairali.toPadma[Kairali.vowel_AA] = Padma.vowel_AA;
Kairali.toPadma[Kairali.vowel_I]  = Padma.vowel_I;
Kairali.toPadma[Kairali.vowel_II] = Padma.vowel_II;
Kairali.toPadma[Kairali.vowel_U]  = Padma.vowel_U;
Kairali.toPadma[Kairali.vowel_UU] = Padma.vowel_UU;
Kairali.toPadma[Kairali.vowel_R]  = Padma.vowel_R;
Kairali.toPadma[Kairali.vowel_RR] = Padma.vowel_RR;
Kairali.toPadma[Kairali.vowel_E]  = Padma.vowel_E;
Kairali.toPadma[Kairali.vowel_EE] = Padma.vowel_EE;
Kairali.toPadma[Kairali.vowel_AI] = Padma.vowel_AI;
Kairali.toPadma[Kairali.vowel_O]  = Padma.vowel_O;
Kairali.toPadma[Kairali.vowel_OO] = Padma.vowel_OO;
Kairali.toPadma[Kairali.vowel_AU] = Padma.vowel_AU;

Kairali.toPadma[Kairali.consnt_KA]  = Padma.consnt_KA;
Kairali.toPadma[Kairali.consnt_KHA] = Padma.consnt_KHA;
Kairali.toPadma[Kairali.consnt_GA]  = Padma.consnt_GA;
Kairali.toPadma[Kairali.consnt_GHA] = Padma.consnt_GHA;
Kairali.toPadma[Kairali.consnt_NGA] = Padma.consnt_NGA;

Kairali.toPadma[Kairali.consnt_CA]  = Padma.consnt_CA;
Kairali.toPadma[Kairali.consnt_CHA] = Padma.consnt_CHA;
Kairali.toPadma[Kairali.consnt_JA]  = Padma.consnt_JA;
Kairali.toPadma[Kairali.consnt_JHA] = Padma.consnt_JHA;
Kairali.toPadma[Kairali.consnt_NYA] = Padma.consnt_NYA;

Kairali.toPadma[Kairali.consnt_TTA]  = Padma.consnt_TTA;
Kairali.toPadma[Kairali.consnt_TTHA] = Padma.consnt_TTHA;
Kairali.toPadma[Kairali.consnt_DDA]  = Padma.consnt_DDA;
Kairali.toPadma[Kairali.consnt_DDHA] = Padma.consnt_DDHA;
Kairali.toPadma[Kairali.consnt_NNA]  = Padma.consnt_NNA;

Kairali.toPadma[Kairali.consnt_TA]  = Padma.consnt_TA;
Kairali.toPadma[Kairali.consnt_THA] = Padma.consnt_THA;
Kairali.toPadma[Kairali.consnt_DA]  = Padma.consnt_DA;
Kairali.toPadma[Kairali.consnt_DHA] = Padma.consnt_DHA;
Kairali.toPadma[Kairali.consnt_NA]  = Padma.consnt_NA;

Kairali.toPadma[Kairali.consnt_PA]  = Padma.consnt_PA;
Kairali.toPadma[Kairali.consnt_PHA] = Padma.consnt_PHA;
Kairali.toPadma[Kairali.consnt_BA]  = Padma.consnt_BA;
Kairali.toPadma[Kairali.consnt_BHA] = Padma.consnt_BHA;
Kairali.toPadma[Kairali.consnt_MA]  = Padma.consnt_MA;

Kairali.toPadma[Kairali.consnt_YA]  = Padma.consnt_YA;
Kairali.toPadma[Kairali.consnt_RA]  = Padma.consnt_RA;
Kairali.toPadma[Kairali.consnt_LA]  = Padma.consnt_LA;
Kairali.toPadma[Kairali.consnt_VA]  = Padma.consnt_VA;
Kairali.toPadma[Kairali.consnt_SHA] = Padma.consnt_SHA;
Kairali.toPadma[Kairali.consnt_SSA] = Padma.consnt_SSA;
Kairali.toPadma[Kairali.consnt_SA]  = Padma.consnt_SA;

Kairali.toPadma[Kairali.consnt_HA] = Padma.consnt_HA;
Kairali.toPadma[Kairali.consnt_LLA] = Padma.consnt_LLA;
Kairali.toPadma[Kairali.consnt_ZHA] = Padma.consnt_ZHA;
Kairali.toPadma[Kairali.consnt_RRA] = Padma.consnt_RRA;

//Gunintamulu
Kairali.toPadma[Kairali.vowelsn_AA] = Padma.vowelsn_AA;
Kairali.toPadma[Kairali.vowelsn_I]  = Padma.vowelsn_I;
Kairali.toPadma[Kairali.vowelsn_II] = Padma.vowelsn_II;
Kairali.toPadma[Kairali.vowelsn_U]  = Padma.vowelsn_U;
Kairali.toPadma[Kairali.vowelsn_UU] = Padma.vowelsn_UU;
Kairali.toPadma[Kairali.vowelsn_R]  = Padma.vowelsn_R;
Kairali.toPadma[Kairali.vowelsn_E]  = Padma.vowelsn_E;
Kairali.toPadma[Kairali.vowelsn_EE] = Padma.vowelsn_EE;
Kairali.toPadma[Kairali.vowelsn_AI] = Padma.vowelsn_AI;
Kairali.toPadma[Kairali.vowelsn_AU] = Padma.vowelsn_AU;

//Chillu
Kairali.toPadma[Kairali.chillu_ENN] = Padma.consnt_NNA + Padma.chillu;
Kairali.toPadma[Kairali.chillu_IN]  = Padma.consnt_NA + Padma.chillu;
Kairali.toPadma[Kairali.chillu_IR]  = Padma.consnt_RA + Padma.chillu;
Kairali.toPadma[Kairali.chillu_IL]  = Padma.consnt_LA + Padma.chillu;
Kairali.toPadma[Kairali.chillu_ILL] = Padma.consnt_LLA + Padma.chillu;

//vattulu
Kairali.toPadma[Kairali.vattu_GA]  = Padma.vattu_GA;
Kairali.toPadma[Kairali.vattu_TTA] = Padma.vattu_TTA;
Kairali.toPadma[Kairali.vattu_DDA] = Padma.vattu_DDA;
Kairali.toPadma[Kairali.vattu_NNA] = Padma.vattu_NNA;
Kairali.toPadma[Kairali.vattu_TA]  = Padma.vattu_TA;
Kairali.toPadma[Kairali.vattu_DA]  = Padma.vattu_DA;
Kairali.toPadma[Kairali.vattu_DHA] = Padma.vattu_DHA;
Kairali.toPadma[Kairali.vattu_NA]  = Padma.vattu_NA;
Kairali.toPadma[Kairali.vattu_PA]  = Padma.vattu_PA;
Kairali.toPadma[Kairali.vattu_MA]  = Padma.vattu_MA;
Kairali.toPadma[Kairali.vattu_YA]  = Padma.vattu_YA;
Kairali.toPadma[Kairali.vattu_RA]  = Padma.vattu_RA;
Kairali.toPadma[Kairali.vattu_LA]  = Padma.vattu_LA;
Kairali.toPadma[Kairali.vattu_VA]  = Padma.vattu_VA;
Kairali.toPadma[Kairali.vattu_SA]  = Padma.vattu_SA;

//kooTTaksharangngaL
Kairali.toPadma[Kairali.conj_KK]   = Padma.consnt_KA +  Padma.vattu_KA;
Kairali.toPadma[Kairali.conj_KT]   = Padma.consnt_KA +  Padma.vattu_TA;
Kairali.toPadma[Kairali.conj_KSH]  = Padma.consnt_KA +  Padma.vattu_SSA;
Kairali.toPadma[Kairali.conj_GN]   = Padma.consnt_GA +  Padma.vattu_NA;
Kairali.toPadma[Kairali.conj_NGK]  = Padma.consnt_NGA +  Padma.vattu_KA;
Kairali.toPadma[Kairali.conj_NGNG] = Padma.consnt_NGA +  Padma.vattu_NGA;

Kairali.toPadma[Kairali.conj_CC]   = Padma.consnt_CA +  Padma.vattu_CA;
Kairali.toPadma[Kairali.conj_CCH]  = Padma.consnt_CA +  Padma.vattu_CHA;
Kairali.toPadma[Kairali.conj_JJ]   = Padma.consnt_JA +  Padma.vattu_JA;
Kairali.toPadma[Kairali.conj_JNY]  = Padma.consnt_JA +  Padma.vattu_NYA;
Kairali.toPadma[Kairali.conj_NYC]  = Padma.consnt_NYA +  Padma.vattu_CA;
Kairali.toPadma[Kairali.conj_NYJ]  = Padma.consnt_NYA +  Padma.vattu_JA;
Kairali.toPadma[Kairali.conj_NYNY] = Padma.consnt_NYA +  Padma.vattu_NYA;

Kairali.toPadma[Kairali.conj_TTTT] = Padma.consnt_TTA +  Padma.vattu_TTA;
Kairali.toPadma[Kairali.conj_NNTT] = Padma.consnt_NNA +  Padma.vattu_TTA;
Kairali.toPadma[Kairali.conj_NNDD] = Padma.consnt_NNA +  Padma.vattu_DDA;

Kairali.toPadma[Kairali.conj_T_T]  = Padma.consnt_TA +  Padma.vattu_TA;
Kairali.toPadma[Kairali.conj_T_TH] = Padma.consnt_TA +  Padma.vattu_THA;
Kairali.toPadma[Kairali.conj_TBH]  = Padma.consnt_TA +  Padma.vattu_BHA;
Kairali.toPadma[Kairali.conj_TM]   = Padma.consnt_TA +  Padma.vattu_MA;
Kairali.toPadma[Kairali.conj_TS]   = Padma.consnt_TA +  Padma.vattu_SA;
Kairali.toPadma[Kairali.conj_DD]   = Padma.consnt_DA +  Padma.vattu_DA;
Kairali.toPadma[Kairali.conj_D_DH] = Padma.consnt_DA +  Padma.vattu_DHA;
Kairali.toPadma[Kairali.conj_NT]   = Padma.consnt_NA +  Padma.vattu_TA;
Kairali.toPadma[Kairali.conj_NTH]  = Padma.consnt_NA +  Padma.vattu_THA;
Kairali.toPadma[Kairali.conj_ND]   = Padma.consnt_NA +  Padma.vattu_DA;
Kairali.toPadma[Kairali.conj_NDH]  = Padma.consnt_NA +  Padma.vattu_DHA;
Kairali.toPadma[Kairali.conj_N_N]  = Padma.consnt_NA +  Padma.vattu_NA;
Kairali.toPadma[Kairali.conj_NM]   = Padma.consnt_NA +  Padma.vattu_MA;
Kairali.toPadma[Kairali.conj_NRR_1] = Padma.consnt_NA +  Padma.vattu_RRA;
Kairali.toPadma[Kairali.conj_NRR_2] = Padma.consnt_NA +  Padma.vattu_RRA;

Kairali.toPadma[Kairali.conj_PP]  = Padma.consnt_PA +  Padma.vattu_PA;
Kairali.toPadma[Kairali.conj_BB]  = Padma.consnt_BA +  Padma.vattu_BA;
Kairali.toPadma[Kairali.conj_MP]  = Padma.consnt_MA +  Padma.vattu_PA;
Kairali.toPadma[Kairali.conj_MM]  = Padma.consnt_MA +  Padma.vattu_MA;

Kairali.toPadma[Kairali.conj_YY]  = Padma.consnt_YA +  Padma.vattu_YA;
Kairali.toPadma[Kairali.conj_L_L] = Padma.consnt_LA +  Padma.vattu_LA;
Kairali.toPadma[Kairali.conj_VV]  = Padma.consnt_VA +  Padma.vattu_VA;

Kairali.toPadma[Kairali.conj_SHC]  = Padma.consnt_SHA +  Padma.vattu_CA;
Kairali.toPadma[Kairali.conj_SHSH] = Padma.consnt_SHA +  Padma.vattu_SHA;
Kairali.toPadma[Kairali.conj_STH]  = Padma.consnt_SA +  Padma.vattu_THA;
Kairali.toPadma[Kairali.conj_SRR]  = Padma.consnt_SA +  Padma.vattu_RRA;

Kairali.toPadma[Kairali.conj_HN]   = Padma.consnt_HA +  Padma.vattu_NA;
Kairali.toPadma[Kairali.conj_HM]   = Padma.consnt_HA +  Padma.vattu_MA;
Kairali.toPadma[Kairali.conj_LLLL] = Padma.consnt_LLA +  Padma.vattu_LLA;

Kairali.toPadma[Kairali.conj_RRRR] = Padma.consnt_RRA +  Padma.vattu_RRA;

//Miscellaneous(where it doesn't match ASCII representation)
Kairali.toPadma[Kairali.extra_QTSINGLE_1] = "'";
Kairali.toPadma[Kairali.extra_QTSINGLE_2] = "'";
Kairali.toPadma[Kairali.extra_QTDOUBLE_1] = '"';
Kairali.toPadma[Kairali.extra_QTDOUBLE_2] = '"';
Kairali.toPadma[Kairali.extra_HYPHEN]   = '-';

Kairali.redundantList = new Object();
Kairali.redundantList[Kairali.misc_UNKNOWN_1] = true;

Kairali.prefixList = new Object();
Kairali.prefixList[Kairali.vattu_RA]   = true;
Kairali.prefixList[Kairali.vowelsn_E]  = true;
Kairali.prefixList[Kairali.vowelsn_EE] = true;
Kairali.prefixList[Kairali.vowelsn_AI] = true;

Kairali.overloadList = new Object();
Kairali.overloadList[Kairali.vowel_I]        = true;
Kairali.overloadList[Kairali.vowel_U]        = true;
Kairali.overloadList[Kairali.vowel_R]        = true;
Kairali.overloadList[Kairali.vowel_O]        = true;
Kairali.overloadList[Kairali.consnt_LA]      = true;
Kairali.overloadList[Kairali.chillu_IN]      = true;
Kairali.overloadList[Kairali.vowelsn_R]      = true;
Kairali.overloadList[Kairali.vowelsn_E]      = true;
