// $Id: Panchami.js,v 1.2 2006/10/15 17:49:26 vnagarjuna Exp $ -->

//Copyright 2006 AnvarLal Hasbulla <padma@anvarlal.in>
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

//Panchami Malayalam

function Panchami()
{
}

//The interface every dynamic font encoding should implement
Panchami.maxLookupLen = 2;
Panchami.fontFace     = "Panchami";
Panchami.displayName  = "Panchami";
Panchami.script       = Padma.script_MALAYALAM;

Panchami.lookup = function (str) 
{
    return Panchami.toPadma[str];
}

Panchami.isPrefixSymbol = function (str)
{
    return Panchami.prefixList[str] != null;
}

Panchami.isOverloaded = function (str)
{
    return Panchami.overloadList[str] != null;
}

Panchami.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if ((sign1 == Padma.vowelsn_E && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_E))
        return Padma.vowelsn_O;
    if ((sign1 == Padma.vowelsn_EE && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_EE))
        return Padma.vowelsn_OO;
    return sign1 + sign2;
}

Panchami.isRedundant = function (str)
{
    return Panchami.redundantList[str] != null;
}

//Implementation details start here

//Specials
Panchami.visarga        = "\u00AF";
Panchami.anusvara       = "\u00AC";
Panchami.virama         = "\u00AE"; //Chandrakkala

//Vowels
Panchami.vowel_A        = "\u00C5"; 
Panchami.vowel_AA       = "\u00BF"; 
Panchami.vowel_I        = "\u201A"; 
Panchami.vowel_II       = "\u201A\u00AA";
Panchami.vowel_U        = "\u0192";
Panchami.vowel_UU       = "\u0192\u00AA";
Panchami.vowel_R        = "\u201E";
Panchami.vowel_RR       = "\u201E\u00AA";
Panchami.vowel_E        = "\u2026";
Panchami.vowel_EE       = "\u2020";               
Panchami.vowel_AI       = "\u00A5\u2026";
Panchami.vowel_O        = "\u2021";
Panchami.vowel_OO       = "\u2021\u00A1";
Panchami.vowel_AU       = "\u2021\u00AA";

//Consonants
Panchami.consnt_KA      = "\u02C6";
Panchami.consnt_KHA     = "\u2030";
Panchami.consnt_GA      = "\u0160";
Panchami.consnt_GHA     = "\u2039";
Panchami.consnt_NGA     = "\u0152";

Panchami.consnt_CA      = "\u00DE";
Panchami.consnt_CHA     = "\u00D3"; 
Panchami.consnt_JA      = "\u00D1"; 
Panchami.consnt_JHA     = "\u00CB"; 
Panchami.consnt_NYA     = "\u00C7";

Panchami.consnt_TTA     = "\u00D0";
Panchami.consnt_TTHA    = "\u007E";
Panchami.consnt_DDA     = "\u00B0";
Panchami.consnt_DDHA    = "\u0153";
Panchami.consnt_NNA     = "\u00C3";

Panchami.consnt_TA      = "\u00BB";
Panchami.consnt_THA     = "\u02DC";
Panchami.consnt_DA      = "\u2122";
Panchami.consnt_DHA     = "\u0161";
Panchami.consnt_NA      = "\u203A";

Panchami.consnt_PA      = "\u00B2";
Panchami.consnt_PHA     = "\u00BA";
Panchami.consnt_BA      = "\u00DD";
Panchami.consnt_BHA     = "\u0178";
Panchami.consnt_MA      = "\u00C4";

Panchami.consnt_YA      = "\u00F0";
Panchami.consnt_RA      = "\u00F1";
Panchami.consnt_LA      = "\u00F2";
Panchami.consnt_VA      = "\u00F3";
Panchami.consnt_SHA     = "\u00F4";
Panchami.consnt_SSA     = "\u00F5";
Panchami.consnt_SA      = "\u00F6";

Panchami.consnt_HA      = "\u00F7";
Panchami.consnt_LLA     = "\u00F8";
Panchami.consnt_ZHA     = "\u00F9";
Panchami.consnt_RRA     = "\u00FA";

//Gunintamulu
Panchami.vowelsn_AA     = "\u00A1";
Panchami.vowelsn_I      = "\u00A2";
Panchami.vowelsn_II     = "\u00A3";
Panchami.vowelsn_U      = "\u00A9";
Panchami.vowelsn_UU     = "\u00A8";
Panchami.vowelsn_R      = "\u00A6";
Panchami.vowelsn_RR     = "\u00A6\u00AA";
Panchami.vowelsn_E      = "\u00A5";
Panchami.vowelsn_EE     = "\u00A4";
Panchami.vowelsn_AI     = "\u00A5\u00A5";
//vowelsigns o and O have two separate glyphs, one on left and one on right.
Panchami.vowelsn_AU     = "\u00AA";

//Chillu (5)
Panchami.chillu_ENN     = "\u00FF";
Panchami.chillu_IN      = "\u00FC";
Panchami.chillu_IR      = "\u00FB";
Panchami.chillu_IL      = "\u00FD";
Panchami.chillu_ILL     = "\u00FE";

//vattulu (consonant signs)
Panchami.vattu_GA       = "\u00EA";
Panchami.vattu_TTA      = "\u00E9";
Panchami.vattu_DDA      = "\u00EC";
Panchami.vattu_NNA      = "\u00E5";
Panchami.vattu_TA       = "\u00ED";
Panchami.vattu_DA       = "\u00EF";
Panchami.vattu_DHA      = "\u00E8";
Panchami.vattu_NA       = "\u00EE";
Panchami.vattu_PA       = "\u00E7";
Panchami.vattu_MA       = "\u00E4";
Panchami.vattu_YA       = "\u00AB";
Panchami.vattu_RA       = "\u00B1";
Panchami.vattu_LA       = "\u00EB";
Panchami.vattu_VA       = "\u00A7";
Panchami.vattu_SA       = "\u00E6";

//kooTTaksharangngaL
Panchami.conj_KK        = "\u00B4";
Panchami.conj_KSH       = "\u00BC";
Panchami.conj_NGK       = "\u00C6";  
Panchami.conj_NGNG      = "\u00B9";

Panchami.conj_CC        = "\u00C1";
Panchami.conj_CCH       = "\u00D4";
Panchami.conj_JJ        = "\u00D2";
Panchami.conj_NYC       = "\u00D5";
Panchami.conj_NYNY      = "\u00C8";

Panchami.conj_TTTT      = "\u00B8";
Panchami.conj_NNTT      = "\u00D9";
Panchami.conj_NNDD      = "\u00DF";

Panchami.conj_T_T       = "\u00B7";
Panchami.conj_T_TH      = "\u00CE";
Panchami.conj_TBH       = "\u00CF";
Panchami.conj_TS        = "\u00CC";
Panchami.conj_DD        = "\u00C0";
Panchami.conj_D_DH      = "\u00DA";
Panchami.conj_NT        = "\u00C2";
Panchami.conj_ND        = "\u00B3";
Panchami.conj_NDH       = "\u00DC";
Panchami.conj_N_N       = "\u00C9";
Panchami.conj_NM        = "\u00B5";
Panchami.conj_NRR_1     = "\u00CA"; 
Panchami.conj_NRR_2     = "\u00FC\u00FA"; 

Panchami.conj_PP        = "\u00B6";
Panchami.conj_BB        = "\u00E2";
Panchami.conj_MP        = "\u00D8";
Panchami.conj_MM        = "\u00BD";

Panchami.conj_YY        = "\u00E0";
Panchami.conj_L_L       = "\u00F2\u00EB";
Panchami.conj_VV        = "\u00E1";

Panchami.conj_SHC       = "\u00D6";
Panchami.conj_SHSH      = "\u00DB";
Panchami.conj_SRR       = "\u00CD";

Panchami.conj_HN        = "\u00DB";
Panchami.conj_LLLL      = "\u00BE";

Panchami.conj_RRRR      = "\u00D7"; //ta as in steel

//Digits
Panchami.digit_ZERO     = "\u0030";
Panchami.digit_ONE      = "\u0031";
Panchami.digit_TWO      = "\u0032";
Panchami.digit_THREE    = "\u0033";
Panchami.digit_FOUR     = "\u0034";
Panchami.digit_FIVE     = "\u0035";
Panchami.digit_SIX      = "\u0036";
Panchami.digit_SEVEN    = "\u0037";
Panchami.digit_EIGHT    = "\u0038";
Panchami.digit_NINE     = "\u0039";

//Matches ASCII from 00-0x7D
//Does not match ASCII
Panchami.extra_QTSINGLE_1 = "\u2018";
Panchami.extra_QTSINGLE_2 = "\u2019";
Panchami.extra_QTDOUBLE_1 = "\u201C";
Panchami.extra_QTDOUBLE_2 = "\u201D";
Panchami.extra_HYPHEN     = "\u00AD";

//Dont need
Panchami.misc_UNKNOWN_1  = "\u002D";

Panchami.toPadma = new Object();

Panchami.toPadma[Panchami.anusvara] = Padma.anusvara;
Panchami.toPadma[Panchami.visarga]  = Padma.visarga;
Panchami.toPadma[Panchami.virama]   = Padma.chandrakkala;

Panchami.toPadma[Panchami.vowel_A]  = Padma.vowel_A;
Panchami.toPadma[Panchami.vowel_AA] = Padma.vowel_AA;
Panchami.toPadma[Panchami.vowel_I]  = Padma.vowel_I;
Panchami.toPadma[Panchami.vowel_II] = Padma.vowel_II;
Panchami.toPadma[Panchami.vowel_U]  = Padma.vowel_U;
Panchami.toPadma[Panchami.vowel_UU] = Padma.vowel_UU;
Panchami.toPadma[Panchami.vowel_R]  = Padma.vowel_R;
Panchami.toPadma[Panchami.vowel_RR] = Padma.vowel_RR;
Panchami.toPadma[Panchami.vowel_E]  = Padma.vowel_E;
Panchami.toPadma[Panchami.vowel_EE] = Padma.vowel_EE;
Panchami.toPadma[Panchami.vowel_AI] = Padma.vowel_AI;
Panchami.toPadma[Panchami.vowel_O]  = Padma.vowel_O;
Panchami.toPadma[Panchami.vowel_OO] = Padma.vowel_OO;
Panchami.toPadma[Panchami.vowel_AU] = Padma.vowel_AU;

Panchami.toPadma[Panchami.consnt_KA]  = Padma.consnt_KA;
Panchami.toPadma[Panchami.consnt_KHA] = Padma.consnt_KHA;
Panchami.toPadma[Panchami.consnt_GA]  = Padma.consnt_GA;
Panchami.toPadma[Panchami.consnt_GHA] = Padma.consnt_GHA;
Panchami.toPadma[Panchami.consnt_NGA] = Padma.consnt_NGA;

Panchami.toPadma[Panchami.consnt_CA]  = Padma.consnt_CA;
Panchami.toPadma[Panchami.consnt_CHA] = Padma.consnt_CHA;
Panchami.toPadma[Panchami.consnt_JA]  = Padma.consnt_JA;
Panchami.toPadma[Panchami.consnt_JHA] = Padma.consnt_JHA;
Panchami.toPadma[Panchami.consnt_NYA] = Padma.consnt_NYA;

Panchami.toPadma[Panchami.consnt_TTA]  = Padma.consnt_TTA;
Panchami.toPadma[Panchami.consnt_TTHA] = Padma.consnt_TTHA;
Panchami.toPadma[Panchami.consnt_DDA]  = Padma.consnt_DDA;
Panchami.toPadma[Panchami.consnt_DDHA] = Padma.consnt_DDHA;
Panchami.toPadma[Panchami.consnt_NNA]  = Padma.consnt_NNA;

Panchami.toPadma[Panchami.consnt_TA]  = Padma.consnt_TA;
Panchami.toPadma[Panchami.consnt_THA] = Padma.consnt_THA;
Panchami.toPadma[Panchami.consnt_DA]  = Padma.consnt_DA;
Panchami.toPadma[Panchami.consnt_DHA] = Padma.consnt_DHA;
Panchami.toPadma[Panchami.consnt_NA]  = Padma.consnt_NA;

Panchami.toPadma[Panchami.consnt_PA]  = Padma.consnt_PA;
Panchami.toPadma[Panchami.consnt_PHA] = Padma.consnt_PHA;
Panchami.toPadma[Panchami.consnt_BA]  = Padma.consnt_BA;
Panchami.toPadma[Panchami.consnt_BHA] = Padma.consnt_BHA;
Panchami.toPadma[Panchami.consnt_MA]  = Padma.consnt_MA;

Panchami.toPadma[Panchami.consnt_YA]  = Padma.consnt_YA;
Panchami.toPadma[Panchami.consnt_RA]  = Padma.consnt_RA;
Panchami.toPadma[Panchami.consnt_LA]  = Padma.consnt_LA;
Panchami.toPadma[Panchami.consnt_VA]  = Padma.consnt_VA;
Panchami.toPadma[Panchami.consnt_SHA] = Padma.consnt_SHA;
Panchami.toPadma[Panchami.consnt_SSA] = Padma.consnt_SSA;
Panchami.toPadma[Panchami.consnt_SA]  = Padma.consnt_SA;

Panchami.toPadma[Panchami.consnt_HA] = Padma.consnt_HA;
Panchami.toPadma[Panchami.consnt_LLA] = Padma.consnt_LLA;
Panchami.toPadma[Panchami.consnt_ZHA] = Padma.consnt_ZHA;
Panchami.toPadma[Panchami.consnt_RRA] = Padma.consnt_RRA;

//Gunintamulu
Panchami.toPadma[Panchami.vowelsn_AA] = Padma.vowelsn_AA;
Panchami.toPadma[Panchami.vowelsn_I]  = Padma.vowelsn_I;
Panchami.toPadma[Panchami.vowelsn_II] = Padma.vowelsn_II;
Panchami.toPadma[Panchami.vowelsn_U]  = Padma.vowelsn_U;
Panchami.toPadma[Panchami.vowelsn_UU] = Padma.vowelsn_UU;
Panchami.toPadma[Panchami.vowelsn_R]  = Padma.vowelsn_R;
Panchami.toPadma[Panchami.vowelsn_E]  = Padma.vowelsn_E;
Panchami.toPadma[Panchami.vowelsn_EE] = Padma.vowelsn_EE;
Panchami.toPadma[Panchami.vowelsn_AI] = Padma.vowelsn_AI;
Panchami.toPadma[Panchami.vowelsn_AU] = Padma.vowelsn_AU;

//Chillu
Panchami.toPadma[Panchami.chillu_ENN] = Padma.consnt_NNA + Padma.chillu;
Panchami.toPadma[Panchami.chillu_IN]  = Padma.consnt_NA + Padma.chillu;
Panchami.toPadma[Panchami.chillu_IR]  = Padma.consnt_RA + Padma.chillu;
Panchami.toPadma[Panchami.chillu_IL]  = Padma.consnt_LA + Padma.chillu;
Panchami.toPadma[Panchami.chillu_ILL] = Padma.consnt_LLA + Padma.chillu;

//vattulu
Panchami.toPadma[Panchami.vattu_GA]  = Padma.vattu_GA;
Panchami.toPadma[Panchami.vattu_TTA] = Padma.vattu_TTA;
Panchami.toPadma[Panchami.vattu_DDA] = Padma.vattu_DDA;
Panchami.toPadma[Panchami.vattu_NNA] = Padma.vattu_NNA;
Panchami.toPadma[Panchami.vattu_TA]  = Padma.vattu_TA;
Panchami.toPadma[Panchami.vattu_DA]  = Padma.vattu_DA;
Panchami.toPadma[Panchami.vattu_DHA] = Padma.vattu_DHA;
Panchami.toPadma[Panchami.vattu_NA]  = Padma.vattu_NA;
Panchami.toPadma[Panchami.vattu_PA]  = Padma.vattu_PA;
Panchami.toPadma[Panchami.vattu_MA]  = Padma.vattu_MA;
Panchami.toPadma[Panchami.vattu_YA]  = Padma.vattu_YA;
Panchami.toPadma[Panchami.vattu_RA]  = Padma.vattu_RA;
Panchami.toPadma[Panchami.vattu_LA]  = Padma.vattu_LA;
Panchami.toPadma[Panchami.vattu_VA]  = Padma.vattu_VA;
Panchami.toPadma[Panchami.vattu_SA]  = Padma.vattu_SA;

//kooTTaksharangngaL
Panchami.toPadma[Panchami.conj_KK]   = Padma.consnt_KA +  Padma.vattu_KA;
Panchami.toPadma[Panchami.conj_KSH]  = Padma.consnt_KA +  Padma.vattu_SSA;
Panchami.toPadma[Panchami.conj_NGK]  = Padma.consnt_NGA +  Padma.vattu_KA;
Panchami.toPadma[Panchami.conj_NGNG] = Padma.consnt_NGA +  Padma.vattu_NGA;

Panchami.toPadma[Panchami.conj_CC]   = Padma.consnt_CA +  Padma.vattu_CA;
Panchami.toPadma[Panchami.conj_CCH]  = Padma.consnt_CA +  Padma.vattu_CHA;
Panchami.toPadma[Panchami.conj_JJ]   = Padma.consnt_JA +  Padma.vattu_JA;
Panchami.toPadma[Panchami.conj_NYC]  = Padma.consnt_NYA +  Padma.vattu_CA;
Panchami.toPadma[Panchami.conj_NYNY] = Padma.consnt_NYA +  Padma.vattu_NYA;

Panchami.toPadma[Panchami.conj_TTTT] = Padma.consnt_TTA +  Padma.vattu_TTA;
Panchami.toPadma[Panchami.conj_NNTT] = Padma.consnt_NNA +  Padma.vattu_TTA;
Panchami.toPadma[Panchami.conj_NNDD] = Padma.consnt_NNA +  Padma.vattu_DDA;

Panchami.toPadma[Panchami.conj_T_T]  = Padma.consnt_TA +  Padma.vattu_TA;
Panchami.toPadma[Panchami.conj_T_TH] = Padma.consnt_TA +  Padma.vattu_THA;
Panchami.toPadma[Panchami.conj_TBH]  = Padma.consnt_TA +  Padma.vattu_BHA;
Panchami.toPadma[Panchami.conj_TS]   = Padma.consnt_TA +  Padma.vattu_SA;
Panchami.toPadma[Panchami.conj_DD]   = Padma.consnt_DA +  Padma.vattu_DA;
Panchami.toPadma[Panchami.conj_D_DH] = Padma.consnt_DA +  Padma.vattu_DHA;
Panchami.toPadma[Panchami.conj_NT]   = Padma.consnt_NA +  Padma.vattu_TA;
Panchami.toPadma[Panchami.conj_ND]   = Padma.consnt_NA +  Padma.vattu_DA;
Panchami.toPadma[Panchami.conj_NDH]  = Padma.consnt_NA +  Padma.vattu_DHA;
Panchami.toPadma[Panchami.conj_N_N]  = Padma.consnt_NA +  Padma.vattu_NA;
Panchami.toPadma[Panchami.conj_NM]   = Padma.consnt_NA +  Padma.vattu_MA;
Panchami.toPadma[Panchami.conj_NRR_1] = Padma.consnt_NA +  Padma.vattu_RRA;
Panchami.toPadma[Panchami.conj_NRR_2] = Padma.consnt_NA +  Padma.vattu_RRA;

Panchami.toPadma[Panchami.conj_PP]  = Padma.consnt_PA +  Padma.vattu_PA;
Panchami.toPadma[Panchami.conj_BB]  = Padma.consnt_BA +  Padma.vattu_BA;
Panchami.toPadma[Panchami.conj_MP]  = Padma.consnt_MA +  Padma.vattu_PA;
Panchami.toPadma[Panchami.conj_MM]  = Padma.consnt_MA +  Padma.vattu_MA;

Panchami.toPadma[Panchami.conj_YY]  = Padma.consnt_YA +  Padma.vattu_YA;
Panchami.toPadma[Panchami.conj_L_L] = Padma.consnt_LA +  Padma.vattu_LA;
Panchami.toPadma[Panchami.conj_VV]  = Padma.consnt_VA +  Padma.vattu_VA;

Panchami.toPadma[Panchami.conj_SHC]  = Padma.consnt_SHA +  Padma.vattu_CA;
Panchami.toPadma[Panchami.conj_SHSH] = Padma.consnt_SHA +  Padma.vattu_SHA;
Panchami.toPadma[Panchami.conj_SRR]  = Padma.consnt_SA +  Padma.vattu_RRA;

Panchami.toPadma[Panchami.conj_HN]   = Padma.consnt_HA +  Padma.vattu_NA;
Panchami.toPadma[Panchami.conj_LLLL] = Padma.consnt_LLA +  Padma.vattu_LLA;

Panchami.toPadma[Panchami.conj_RRRR] = Padma.consnt_RRA +  Padma.vattu_RRA;

//Miscellaneous(where it doesn't match ASCII representation)
Panchami.toPadma[Panchami.extra_QTSINGLE_1] = "'";
Panchami.toPadma[Panchami.extra_QTSINGLE_2] = "'";
Panchami.toPadma[Panchami.extra_QTDOUBLE_1] = '"';
Panchami.toPadma[Panchami.extra_QTDOUBLE_2] = '"';
Panchami.toPadma[Panchami.extra_HYPHEN]   = '-';

Panchami.redundantList = new Object();
Panchami.redundantList[Panchami.misc_UNKNOWN_1] = true;

Panchami.prefixList = new Object();
Panchami.prefixList[Panchami.vattu_RA]   = true;
Panchami.prefixList[Panchami.vowelsn_E]  = true;
Panchami.prefixList[Panchami.vowelsn_EE] = true;
Panchami.prefixList[Panchami.vowelsn_AI] = true;

Panchami.overloadList = new Object();
Panchami.overloadList[Panchami.vowel_I]        = true;
Panchami.overloadList[Panchami.vowel_U]        = true;
Panchami.overloadList[Panchami.vowel_R]        = true;
Panchami.overloadList[Panchami.vowel_O]        = true;
Panchami.overloadList[Panchami.consnt_LA]      = true;
Panchami.overloadList[Panchami.chillu_IN]      = true;
Panchami.overloadList[Panchami.vowelsn_R]      = true;
Panchami.overloadList[Panchami.vowelsn_E]      = true;
