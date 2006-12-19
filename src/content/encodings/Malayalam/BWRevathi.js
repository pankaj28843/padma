// $Id: BWRevathi.js,v 1.1 2006/12/19 15:34:02 vnagarjuna Exp $ -->

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

//BWRevathi Malayalam

function BWRevathi()
{
}

//The interface every dynamic font encoding should implement
BWRevathi.maxLookupLen = 2;
BWRevathi.fontFace     = "MLBW-TTRevathi";
BWRevathi.displayName  = "MLBW-TTRevathi";
BWRevathi.script       = Padma.script_MALAYALAM;

BWRevathi.lookup = function (str) 
{
    return BWRevathi.toPadma[str];
}

BWRevathi.isPrefixSymbol = function (str)
{
    return BWRevathi.prefixList[str] != null;
}

BWRevathi.isOverloaded = function (str)
{
    return BWRevathi.overloadList[str] != null;
}

BWRevathi.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if ((sign1 == Padma.vowelsn_E && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_E))
        return Padma.vowelsn_O;
    if ((sign1 == Padma.vowelsn_EE && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_EE))
        return Padma.vowelsn_OO;
    return sign1 + sign2;
}

BWRevathi.isRedundant = function (str)
{
    return BWRevathi.redundantList[str] != null;
}

//Implementation details start here

//Specials
BWRevathi.visarga        = "\u00BA";
BWRevathi.anusvara       = "\u00B9";
BWRevathi.virama         = "\u00B8"; //Chandrakkala

//Vowels
BWRevathi.vowel_A        = "\u00BF"; 
BWRevathi.vowel_AA       = "\u201A"; 
BWRevathi.vowel_I        = "\u0192"; 
BWRevathi.vowel_II       = "\u0192\u00B7";
BWRevathi.vowel_U        = "\u201E";
BWRevathi.vowel_UU       = "\u201E\u00B7";
BWRevathi.vowel_R        = "\u2026";
BWRevathi.vowel_RR       = "\u2026\u00B7";
BWRevathi.vowel_E        = "\u2020";
BWRevathi.vowel_EE       = "\u2021";               
BWRevathi.vowel_AI       = "\u00B5\u2020";
BWRevathi.vowel_O        = "\u02C6";
BWRevathi.vowel_OO       = "\u02C6\u00AF";
BWRevathi.vowel_AU       = "\u02C6\u00B7";

//Consonants
BWRevathi.consnt_KA      = "\u2030";
BWRevathi.consnt_KHA     = "\u0160";
BWRevathi.consnt_GA      = "\u2039";
BWRevathi.consnt_GHA     = "\u0152";
BWRevathi.consnt_NGA     = "\u00C2";

BWRevathi.consnt_CA      = "\u00FC";
BWRevathi.consnt_CHA     = "\u00D5"; 
BWRevathi.consnt_JA      = "\u00D7"; 
BWRevathi.consnt_JHA     = "\u2018"; 
BWRevathi.consnt_NYA     = "\u2019";

BWRevathi.consnt_TTA     = "\u201C";
BWRevathi.consnt_TTHA    = "\u201D";
BWRevathi.consnt_DDA     = "\u2022";
BWRevathi.consnt_DDHA    = "\u2013";
BWRevathi.consnt_NNA     = "\u2014";

BWRevathi.consnt_TA      = "\u02DC";
BWRevathi.consnt_THA     = "\u2122";
BWRevathi.consnt_DA      = "\u0161";
BWRevathi.consnt_DHA     = "\u203A";
BWRevathi.consnt_NA      = "\u0153";

BWRevathi.consnt_PA      = "\u00E3";
BWRevathi.consnt_PHA     = "\u00FD";
BWRevathi.consnt_BA      = "\u00A1";
BWRevathi.consnt_BHA     = "\u00A2";
BWRevathi.consnt_MA      = "\u00A3";

BWRevathi.consnt_YA      = "\u00A4";
BWRevathi.consnt_RA      = "\u00A5";
BWRevathi.consnt_LA      = "\u00A7";
BWRevathi.consnt_VA      = "\u00AA";
BWRevathi.consnt_SHA     = "\u00AB";
BWRevathi.consnt_SSA     = "\u00AC";
BWRevathi.consnt_SA      = "\u0178";

BWRevathi.consnt_HA      = "\u00AE";
BWRevathi.consnt_LLA     = "\u00A8";
BWRevathi.consnt_ZHA     = "\u00A9";
BWRevathi.consnt_RRA     = "\u00A6";

//Gunintamulu
BWRevathi.vowelsn_AA     = "\u00AF";
BWRevathi.vowelsn_I      = "\u00B0";
BWRevathi.vowelsn_II     = "\u00B1";
BWRevathi.vowelsn_U      = "\u00B2";
BWRevathi.vowelsn_UU     = "\u00B3";
BWRevathi.vowelsn_R      = "\u00B4";
BWRevathi.vowelsn_RR     = "\u00B4\u00B7";
BWRevathi.vowelsn_E      = "\u00B5";
BWRevathi.vowelsn_EE     = "\u00B6";
BWRevathi.vowelsn_AI     = "\u00B5\u00B5";
//vowelsigns o and O have two separate glyphs, one on left and one on right.
BWRevathi.vowelsn_AU     = "\u00B7";
BWRevathi.vowelsn_AU2    = "\u2219";

//Chillu (5)
BWRevathi.chillu_ENN     = "\u00C9";
BWRevathi.chillu_IN      = "\u00CF";
BWRevathi.chillu_IR      = "\u00DC";
BWRevathi.chillu_IL      = "\u00DE";
BWRevathi.chillu_ILL     = "\u00E0";

//vattulu (consonant signs)
BWRevathi.vattu_YA       = "\u00BB";
BWRevathi.vattu_RA       = "\u00BD";
BWRevathi.vattu_LA       = "\u00FF";
BWRevathi.vattu_VA       = "\u00BC";

//kooTTaksharangngaL
BWRevathi.conj_KK        = "\u00BE";
BWRevathi.conj_KSS       = "\u00C0";

BWRevathi.conj_NGK       = "\u00C3";  
BWRevathi.conj_NGNG      = "\u00C4";

BWRevathi.conj_CC        = "\u00C5";
BWRevathi.conj_CCH       = "\u00ED";
BWRevathi.conj_JJ        = "\u00EE";
BWRevathi.conj_NYC       = "\u00C6";
BWRevathi.conj_NYNY      = "\u00C7";

BWRevathi.conj_TTTT      = "\u00C8";
BWRevathi.conj_NNTT      = "\u00CA";
BWRevathi.conj_NNDD      = "\u00F6";

BWRevathi.conj_T_T       = "\u00CC";
BWRevathi.conj_TBH       = "\u00F3";
BWRevathi.conj_DD        = "\u00CD";
BWRevathi.conj_D_DH      = "\u00CE";
BWRevathi.conj_NT        = "\u00D0";
BWRevathi.conj_ND        = "\u00D1";
//BWRevathi.conj_NDH       = "\u00DC";
BWRevathi.conj_N_N       = "\u00D2";
BWRevathi.conj_NM        = "\u00D3";
BWRevathi.conj_NRR_1     = "\u00FA"; 
BWRevathi.conj_NRR_2     = "\u00CF\u00A6"; 

BWRevathi.conj_PP        = "\u00D4";
BWRevathi.conj_BB        = "\u00D6";
BWRevathi.conj_MP        = "\u00D8";
BWRevathi.conj_MM        = "\u00D9";

BWRevathi.conj_YY        = "\u00DB";
BWRevathi.conj_L_L       = "\u00DF";
BWRevathi.conj_VV        = "\u00E2";

BWRevathi.conj_SHC       = "\u00F5";
BWRevathi.conj_SHSH      = "\u00E4";
BWRevathi.conj_SRRRR     = "\u00E8";

BWRevathi.conj_LLLL      = "\u00E1";

BWRevathi.conj_RRRR      = "\u00DD"; //ta as in steel
//Not found in panchami
BWRevathi.conj_GG        = "\u00C1";
BWRevathi.conj_NN_NN     = "\u00CB";
BWRevathi.conj_ML        = "\u00DA";
BWRevathi.conj_SL        = "\u00E5";
BWRevathi.conj_S_S       = "\u00E6";
BWRevathi.conj_HL        = "\u00E7";
BWRevathi.conj_DD_DD     = "\u00E9";
BWRevathi.conj_KTT       = "\u00EA";
BWRevathi.conj_BDH       = "\u00EB";
BWRevathi.conj_BD        = "\u00EC";
BWRevathi.conj_NNM       = "\u00EF";
BWRevathi.conj_STH       = "\u00F0";
BWRevathi.conj_NTH       = "\u00F1";
BWRevathi.conj_JJH       = "\u00F2";
BWRevathi.conj_GM        = "\u00F4";
BWRevathi.conj_TM        = "\u00F7";
BWRevathi.conj_KT        = "\u00F8";
BWRevathi.conj_GN        = "\u00F9";
BWRevathi.conj_SSTT      = "\u00FB";

//Digits
BWRevathi.digit_ZERO     = "\u0030";
BWRevathi.digit_ONE      = "\u0031";
BWRevathi.digit_TWO      = "\u0032";
BWRevathi.digit_THREE    = "\u0033";
BWRevathi.digit_FOUR     = "\u0034";
BWRevathi.digit_FIVE     = "\u0035";
BWRevathi.digit_SIX      = "\u0036";
BWRevathi.digit_SEVEN    = "\u0037";
BWRevathi.digit_EIGHT    = "\u0038";
BWRevathi.digit_NINE     = "\u0039";

//Matches ASCII from 00-0x7D
//Does not match ASCII
//BWRevathi.extra_QTSINGLE_1 = "\u2018";
//BWRevathi.extra_QTSINGLE_2 = "\u2019";
//BWRevathi.extra_QTDOUBLE_1 = "\u201C";
//BWRevathi.extra_QTDOUBLE_2 = "\u201D";
BWRevathi.extra_HYPHEN     = "\u00FE";

//Dont need
//BWRevathi.misc_UNKNOWN_1  = "\u002D";

BWRevathi.toPadma = new Object();

BWRevathi.toPadma[BWRevathi.anusvara] = Padma.anusvara;
BWRevathi.toPadma[BWRevathi.visarga]  = Padma.visarga;
BWRevathi.toPadma[BWRevathi.virama]   = Padma.chandrakkala;

BWRevathi.toPadma[BWRevathi.vowel_A]  = Padma.vowel_A;
BWRevathi.toPadma[BWRevathi.vowel_AA] = Padma.vowel_AA;
BWRevathi.toPadma[BWRevathi.vowel_I]  = Padma.vowel_I;
BWRevathi.toPadma[BWRevathi.vowel_II] = Padma.vowel_II;
BWRevathi.toPadma[BWRevathi.vowel_U]  = Padma.vowel_U;
BWRevathi.toPadma[BWRevathi.vowel_UU] = Padma.vowel_UU;
BWRevathi.toPadma[BWRevathi.vowel_R]  = Padma.vowel_R;
BWRevathi.toPadma[BWRevathi.vowel_RR] = Padma.vowel_RR;
BWRevathi.toPadma[BWRevathi.vowel_E]  = Padma.vowel_E;
BWRevathi.toPadma[BWRevathi.vowel_EE] = Padma.vowel_EE;
BWRevathi.toPadma[BWRevathi.vowel_AI] = Padma.vowel_AI;
BWRevathi.toPadma[BWRevathi.vowel_O]  = Padma.vowel_O;
BWRevathi.toPadma[BWRevathi.vowel_OO] = Padma.vowel_OO;
BWRevathi.toPadma[BWRevathi.vowel_AU] = Padma.vowel_AU;

BWRevathi.toPadma[BWRevathi.consnt_KA]  = Padma.consnt_KA;
BWRevathi.toPadma[BWRevathi.consnt_KHA] = Padma.consnt_KHA;
BWRevathi.toPadma[BWRevathi.consnt_GA]  = Padma.consnt_GA;
BWRevathi.toPadma[BWRevathi.consnt_GHA] = Padma.consnt_GHA;
BWRevathi.toPadma[BWRevathi.consnt_NGA] = Padma.consnt_NGA;

BWRevathi.toPadma[BWRevathi.consnt_CA]  = Padma.consnt_CA;
BWRevathi.toPadma[BWRevathi.consnt_CHA] = Padma.consnt_CHA;
BWRevathi.toPadma[BWRevathi.consnt_JA]  = Padma.consnt_JA;
BWRevathi.toPadma[BWRevathi.consnt_JHA] = Padma.consnt_JHA;
BWRevathi.toPadma[BWRevathi.consnt_NYA] = Padma.consnt_NYA;

BWRevathi.toPadma[BWRevathi.consnt_TTA]  = Padma.consnt_TTA;
BWRevathi.toPadma[BWRevathi.consnt_TTHA] = Padma.consnt_TTHA;
BWRevathi.toPadma[BWRevathi.consnt_DDA]  = Padma.consnt_DDA;
BWRevathi.toPadma[BWRevathi.consnt_DDHA] = Padma.consnt_DDHA;
BWRevathi.toPadma[BWRevathi.consnt_NNA]  = Padma.consnt_NNA;

BWRevathi.toPadma[BWRevathi.consnt_TA]  = Padma.consnt_TA;
BWRevathi.toPadma[BWRevathi.consnt_THA] = Padma.consnt_THA;
BWRevathi.toPadma[BWRevathi.consnt_DA]  = Padma.consnt_DA;
BWRevathi.toPadma[BWRevathi.consnt_DHA] = Padma.consnt_DHA;
BWRevathi.toPadma[BWRevathi.consnt_NA]  = Padma.consnt_NA;

BWRevathi.toPadma[BWRevathi.consnt_PA]  = Padma.consnt_PA;
BWRevathi.toPadma[BWRevathi.consnt_PHA] = Padma.consnt_PHA;
BWRevathi.toPadma[BWRevathi.consnt_BA]  = Padma.consnt_BA;
BWRevathi.toPadma[BWRevathi.consnt_BHA] = Padma.consnt_BHA;
BWRevathi.toPadma[BWRevathi.consnt_MA]  = Padma.consnt_MA;

BWRevathi.toPadma[BWRevathi.consnt_YA]  = Padma.consnt_YA;
BWRevathi.toPadma[BWRevathi.consnt_RA]  = Padma.consnt_RA;
BWRevathi.toPadma[BWRevathi.consnt_LA]  = Padma.consnt_LA;
BWRevathi.toPadma[BWRevathi.consnt_VA]  = Padma.consnt_VA;
BWRevathi.toPadma[BWRevathi.consnt_SHA] = Padma.consnt_SHA;
BWRevathi.toPadma[BWRevathi.consnt_SSA] = Padma.consnt_SSA;
BWRevathi.toPadma[BWRevathi.consnt_SA]  = Padma.consnt_SA;

BWRevathi.toPadma[BWRevathi.consnt_HA] = Padma.consnt_HA;
BWRevathi.toPadma[BWRevathi.consnt_LLA] = Padma.consnt_LLA;
BWRevathi.toPadma[BWRevathi.consnt_ZHA] = Padma.consnt_ZHA;
BWRevathi.toPadma[BWRevathi.consnt_RRA] = Padma.consnt_RRA;

//Gunintamulu
BWRevathi.toPadma[BWRevathi.vowelsn_AA] = Padma.vowelsn_AA;
BWRevathi.toPadma[BWRevathi.vowelsn_I]  = Padma.vowelsn_I;
BWRevathi.toPadma[BWRevathi.vowelsn_II] = Padma.vowelsn_II;
BWRevathi.toPadma[BWRevathi.vowelsn_U]  = Padma.vowelsn_U;
BWRevathi.toPadma[BWRevathi.vowelsn_UU] = Padma.vowelsn_UU;
BWRevathi.toPadma[BWRevathi.vowelsn_R]  = Padma.vowelsn_R;
BWRevathi.toPadma[BWRevathi.vowelsn_E]  = Padma.vowelsn_E;
BWRevathi.toPadma[BWRevathi.vowelsn_EE] = Padma.vowelsn_EE;
BWRevathi.toPadma[BWRevathi.vowelsn_AI] = Padma.vowelsn_AI;
BWRevathi.toPadma[BWRevathi.vowelsn_AU] = Padma.vowelsn_AU;
BWRevathi.toPadma[BWRevathi.vowelsn_AU2]= Padma.vowelsn_AU;

//Chillu
BWRevathi.toPadma[BWRevathi.chillu_ENN] = Padma.consnt_NNA + Padma.chillu;
BWRevathi.toPadma[BWRevathi.chillu_IN]  = Padma.consnt_NA + Padma.chillu;
BWRevathi.toPadma[BWRevathi.chillu_IR]  = Padma.consnt_RA + Padma.chillu;
BWRevathi.toPadma[BWRevathi.chillu_IL]  = Padma.consnt_LA + Padma.chillu;
BWRevathi.toPadma[BWRevathi.chillu_ILL] = Padma.consnt_LLA + Padma.chillu;

//vattulu

BWRevathi.toPadma[BWRevathi.vattu_YA]  = Padma.vattu_YA;
BWRevathi.toPadma[BWRevathi.vattu_RA]  = Padma.vattu_RA;
BWRevathi.toPadma[BWRevathi.vattu_LA]  = Padma.vattu_LA;
BWRevathi.toPadma[BWRevathi.vattu_VA]  = Padma.vattu_VA;

//kooTTaksharangngaL
BWRevathi.toPadma[BWRevathi.conj_KK]   = Padma.consnt_KA +  Padma.vattu_KA;
BWRevathi.toPadma[BWRevathi.conj_NGK]  = Padma.consnt_NGA +  Padma.vattu_KA;
BWRevathi.toPadma[BWRevathi.conj_NGNG] = Padma.consnt_NGA +  Padma.vattu_NGA;

BWRevathi.toPadma[BWRevathi.conj_CC]   = Padma.consnt_CA +  Padma.vattu_CA;
BWRevathi.toPadma[BWRevathi.conj_CCH]  = Padma.consnt_CA +  Padma.vattu_CHA;
BWRevathi.toPadma[BWRevathi.conj_JJ]   = Padma.consnt_JA +  Padma.vattu_JA;
BWRevathi.toPadma[BWRevathi.conj_NYC]  = Padma.consnt_NYA +  Padma.vattu_CA;
BWRevathi.toPadma[BWRevathi.conj_NYNY] = Padma.consnt_NYA +  Padma.vattu_NYA;

BWRevathi.toPadma[BWRevathi.conj_TTTT] = Padma.consnt_TTA +  Padma.vattu_TTA;
BWRevathi.toPadma[BWRevathi.conj_NNTT] = Padma.consnt_NNA +  Padma.vattu_TTA;
BWRevathi.toPadma[BWRevathi.conj_NNDD] = Padma.consnt_NNA +  Padma.vattu_DDA;

BWRevathi.toPadma[BWRevathi.conj_T_T]  = Padma.consnt_TA +  Padma.vattu_TA;
BWRevathi.toPadma[BWRevathi.conj_TBH]  = Padma.consnt_TA +  Padma.vattu_BHA;
BWRevathi.toPadma[BWRevathi.conj_DD]   = Padma.consnt_DA +  Padma.vattu_DA;
BWRevathi.toPadma[BWRevathi.conj_D_DH] = Padma.consnt_DA +  Padma.vattu_DHA;
BWRevathi.toPadma[BWRevathi.conj_NT]   = Padma.consnt_NA +  Padma.vattu_TA;
BWRevathi.toPadma[BWRevathi.conj_ND]   = Padma.consnt_NA +  Padma.vattu_DA;
BWRevathi.toPadma[BWRevathi.conj_N_N]  = Padma.consnt_NA +  Padma.vattu_NA;
BWRevathi.toPadma[BWRevathi.conj_NM]   = Padma.consnt_NA +  Padma.vattu_MA;
BWRevathi.toPadma[BWRevathi.conj_NRR_1] = Padma.consnt_NA +  Padma.vattu_RRA;
BWRevathi.toPadma[BWRevathi.conj_NRR_2] = Padma.consnt_NA +  Padma.vattu_RRA;

BWRevathi.toPadma[BWRevathi.conj_PP]  = Padma.consnt_PA +  Padma.vattu_PA;
BWRevathi.toPadma[BWRevathi.conj_BB]  = Padma.consnt_BA +  Padma.vattu_BA;
BWRevathi.toPadma[BWRevathi.conj_MP]  = Padma.consnt_MA +  Padma.vattu_PA;
BWRevathi.toPadma[BWRevathi.conj_MM]  = Padma.consnt_MA +  Padma.vattu_MA;

BWRevathi.toPadma[BWRevathi.conj_YY]  = Padma.consnt_YA +  Padma.vattu_YA;
BWRevathi.toPadma[BWRevathi.conj_L_L] = Padma.consnt_LA +  Padma.vattu_LA;
BWRevathi.toPadma[BWRevathi.conj_VV]  = Padma.consnt_VA +  Padma.vattu_VA;

BWRevathi.toPadma[BWRevathi.conj_SHC]  = Padma.consnt_SHA +  Padma.vattu_CA;
BWRevathi.toPadma[BWRevathi.conj_SHSH] = Padma.consnt_SHA +  Padma.vattu_SHA;
BWRevathi.toPadma[BWRevathi.conj_SRRRR]  = Padma.consnt_SA +  Padma.vattu_RRA + Padma.vattu_RRA;

BWRevathi.toPadma[BWRevathi.conj_LLLL] = Padma.consnt_LLA +  Padma.vattu_LLA;

BWRevathi.toPadma[BWRevathi.conj_RRRR] = Padma.consnt_RRA +  Padma.vattu_RRA;
//
BWRevathi.toPadma[BWRevathi.conj_GG]  = Padma.consnt_GA +  Padma.vattu_GA;
BWRevathi.toPadma[BWRevathi.conj_NN_NN] = Padma.consnt_NNA +  Padma.vattu_NNA;
BWRevathi.toPadma[BWRevathi.conj_ML]  = Padma.consnt_MA +  Padma.vattu_LA;
BWRevathi.toPadma[BWRevathi.conj_SL]   = Padma.consnt_SA +  Padma.vattu_LA;
BWRevathi.toPadma[BWRevathi.conj_S_S]   = Padma.consnt_SA +  Padma.vattu_SA;
BWRevathi.toPadma[BWRevathi.conj_HL] = Padma.consnt_HA +  Padma.vattu_LA;
BWRevathi.toPadma[BWRevathi.conj_DD_DD]   = Padma.consnt_DDA +  Padma.vattu_DDA;
BWRevathi.toPadma[BWRevathi.conj_KTT]   = Padma.consnt_KA +  Padma.vattu_TTA;
BWRevathi.toPadma[BWRevathi.conj_BDH]  = Padma.consnt_BA +  Padma.vattu_DHA;
BWRevathi.toPadma[BWRevathi.conj_BD]   = Padma.consnt_BA +  Padma.vattu_DA;
BWRevathi.toPadma[BWRevathi.conj_NNM] = Padma.consnt_NNA +  Padma.vattu_MA;
BWRevathi.toPadma[BWRevathi.conj_STH] = Padma.consnt_SA +  Padma.vattu_THA;
BWRevathi.toPadma[BWRevathi.conj_NTH]   = Padma.consnt_NA +  Padma.vattu_THA;
BWRevathi.toPadma[BWRevathi.conj_JJH]  = Padma.consnt_JA +  Padma.vattu_JHA;
BWRevathi.toPadma[BWRevathi.conj_GM]   = Padma.consnt_GA +  Padma.vattu_MA;
BWRevathi.toPadma[BWRevathi.conj_TM] = Padma.consnt_TA +  Padma.vattu_MA;
BWRevathi.toPadma[BWRevathi.conj_KT] = Padma.consnt_KA +  Padma.vattu_TA;
BWRevathi.toPadma[BWRevathi.conj_GN] = Padma.consnt_GA +  Padma.vattu_NA;
BWRevathi.toPadma[BWRevathi.conj_SSTT] = Padma.consnt_SSA +  Padma.vattu_TTA;

//Miscellaneous(where it doesn't match ASCII representation)
BWRevathi.toPadma[BWRevathi.extra_HYPHEN]   = '-';

BWRevathi.redundantList = new Object();

BWRevathi.prefixList = new Object();
BWRevathi.prefixList[BWRevathi.vattu_RA]   = true;
BWRevathi.prefixList[BWRevathi.vowelsn_E]  = true;
BWRevathi.prefixList[BWRevathi.vowelsn_EE] = true;
BWRevathi.prefixList[BWRevathi.vowelsn_AI] = true;

BWRevathi.overloadList = new Object();
BWRevathi.overloadList[BWRevathi.vowel_I]        = true;
BWRevathi.overloadList[BWRevathi.vowel_U]        = true;
BWRevathi.overloadList[BWRevathi.vowel_R]        = true;
BWRevathi.overloadList[BWRevathi.vowel_O]        = true;
BWRevathi.overloadList[BWRevathi.chillu_IN]      = true;
BWRevathi.overloadList[BWRevathi.vowelsn_R]      = true;
BWRevathi.overloadList[BWRevathi.vowelsn_E]      = true;
