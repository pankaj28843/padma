// $Id: Kalakaumudi.js,v 1.1 2006/12/19 15:34:02 vnagarjuna Exp $ -->

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

//Kalakaumudi Malayalam

function Kalakaumudi()
{
}

//The interface every dynamic font encoding should implement
Kalakaumudi.maxLookupLen = 2;
Kalakaumudi.fontFace     = "Kalakaumudi";
Kalakaumudi.displayName  = "Kalakaumudi";
Kalakaumudi.script       = Padma.script_MALAYALAM;

Kalakaumudi.lookup = function (str) 
{
    return Kalakaumudi.toPadma[str];
}

Kalakaumudi.isPrefixSymbol = function (str)
{
    return Kalakaumudi.prefixList[str] != null;
}

Kalakaumudi.isOverloaded = function (str)
{
    return Kalakaumudi.overloadList[str] != null;
}

Kalakaumudi.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if ((sign1 == Padma.vowelsn_E && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_E))
        return Padma.vowelsn_O;
    if ((sign1 == Padma.vowelsn_EE && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_EE))
        return Padma.vowelsn_OO;
    return sign1 + sign2;
}

Kalakaumudi.isRedundant = function (str)
{
    return Kalakaumudi.redundantList[str] != null;
}

//Implementation details start here

//Specials
Kalakaumudi.visarga        = "\u00AF";
Kalakaumudi.anusvara       = "\u00ED";
Kalakaumudi.virama         = "\u00AE"; //Chandrakkala

//Vowels
Kalakaumudi.vowel_A        = "\u0041";
Kalakaumudi.vowel_AA       = "\u0042";
Kalakaumudi.vowel_I        = "\u0043";
Kalakaumudi.vowel_II       = "\u0043\u00EC";
Kalakaumudi.vowel_U        = "\u0044";
Kalakaumudi.vowel_UU       = "\u0044\u00EC";
Kalakaumudi.vowel_R        = "\u0045";
Kalakaumudi.vowel_RR       = "\u0045\u00EC";
Kalakaumudi.vowel_E        = "\u0046";
Kalakaumudi.vowel_EE       = "\u0047";               
Kalakaumudi.vowel_AI       = "\u00EA\u0046";
Kalakaumudi.vowel_O        = "\u0048";
Kalakaumudi.vowel_OO       = "\u0048\u00E3";
Kalakaumudi.vowel_AU       = "\u0048\u00EC";

//Consonants
Kalakaumudi.consnt_KA      = "\u00B4";
Kalakaumudi.consnt_KHA     = "\u00B5";
Kalakaumudi.consnt_GA      = "\u00B6";
Kalakaumudi.consnt_GHA     = "\u00B7";
Kalakaumudi.consnt_GHA2    = "\u2219";

Kalakaumudi.consnt_NGA     = "\u00B8";

Kalakaumudi.consnt_CA      = "\u00B9";
Kalakaumudi.consnt_CHA     = "\u00BA";
Kalakaumudi.consnt_JA      = "\u00BB";
Kalakaumudi.consnt_JHA     = "\u00BC";
Kalakaumudi.consnt_NYA     = "\u00BD";

Kalakaumudi.consnt_TTA     = "\u00BE";
Kalakaumudi.consnt_TTHA    = "\u00BF";
Kalakaumudi.consnt_DDA     = "\u00C0";
Kalakaumudi.consnt_DDHA    = "\u00C1";
Kalakaumudi.consnt_NNA     = "\u00C2";

Kalakaumudi.consnt_TA      = "\u00C3";
Kalakaumudi.consnt_THA     = "\u00C4";
Kalakaumudi.consnt_DA      = "\u0061";
Kalakaumudi.consnt_DHA     = "\u0062";
Kalakaumudi.consnt_NA      = "\u0063";

Kalakaumudi.consnt_PA      = "\u00CE";
Kalakaumudi.consnt_PHA     = "\u00CF";
Kalakaumudi.consnt_BA      = "\u00D0";
Kalakaumudi.consnt_BHA     = "\u00D1";
Kalakaumudi.consnt_MA      = "\u00D2";

Kalakaumudi.consnt_YA      = "\u00D3";
Kalakaumudi.consnt_RA      = "\u00D4";
Kalakaumudi.consnt_LA      = "\u00D5";
Kalakaumudi.consnt_VA      = "\u00D6";
Kalakaumudi.consnt_SHA     = "\u00D7";
Kalakaumudi.consnt_SSA     = "\u00D8";
Kalakaumudi.consnt_SA      = "\u00D9";

Kalakaumudi.consnt_HA      = "\u00DA";
Kalakaumudi.consnt_LLA     = "\u00DB";
Kalakaumudi.consnt_ZHA     = "\u00DC";
Kalakaumudi.consnt_RRA     = "\u00DD";

//Gunintamulu
Kalakaumudi.vowelsn_AA     = "\u00E3";
Kalakaumudi.vowelsn_I      = "\u00E4";
Kalakaumudi.vowelsn_II     = "\u00E5";
Kalakaumudi.vowelsn_U      = "\u00E6";
Kalakaumudi.vowelsn_UU     = "\u00E7";
Kalakaumudi.vowelsn_R      = "\u00E8";
Kalakaumudi.vowelsn_RR     = "\u00E3\u00EC";
Kalakaumudi.vowelsn_E      = "\u00EA";
Kalakaumudi.vowelsn_EE     = "\u00EB";
Kalakaumudi.vowelsn_AI     = "\u00EA\u00EA";
//vowelsigns o and O have two separate glyphs, one on left and one on right.
Kalakaumudi.vowelsn_AU     = "\u00EC";

//Chillu (5)
Kalakaumudi.chillu_ENN     = "\u00E2";
Kalakaumudi.chillu_IN      = "\u00DF";
Kalakaumudi.chillu_IR      = "\u00DE";
Kalakaumudi.chillu_IL      = "\u00E0";
Kalakaumudi.chillu_ILL     = "\u00E1";

//vattulu (consonant signs)
Kalakaumudi.vattu_YA       = "\u00EE";
Kalakaumudi.vattu_RA       = "\u00B1";
Kalakaumudi.vattu_VA       = "\u00E9";
//half forms
Kalakaumudi.vattu_SHA      = "\u00A1";
Kalakaumudi.vattu_MA       = "\u00A2";
Kalakaumudi.vattu_NNA      = "\u00A3";
Kalakaumudi.vattu_SA       = "\u00A4";
Kalakaumudi.vattu_PA       = "\u00A5";
Kalakaumudi.vattu_DHA      = "\u00A6";
Kalakaumudi.vattu_TTA      = "\u00A7";
Kalakaumudi.vattu_GA       = "\u00A8";
Kalakaumudi.vattu_LA       = "\u00A9";
Kalakaumudi.vattu_DDA      = "\u00AA";
Kalakaumudi.vattu_TA       = "\u00AB";
Kalakaumudi.vattu_NA       = "\u00AC";
Kalakaumudi.vattu_DA       = "\u00AD";


//kooTTaksharangngaL doubles 

Kalakaumudi.conj_KK        = "\u004A";
Kalakaumudi.conj_CC        = "\u004B";
Kalakaumudi.conj_TTTT      = "\u004C";
Kalakaumudi.conj_T_T       = "\u004D";
Kalakaumudi.conj_PP        = "\u004E";
Kalakaumudi.conj_NGNG      = "\u004F";
Kalakaumudi.conj_NYNY      = "\u0050";
Kalakaumudi.conj_NNNN      = "\u0051";
Kalakaumudi.conj_N_N       = "\u0052";
Kalakaumudi.conj_MM        = "\u0053";
Kalakaumudi.conj_LLLL      = "\u0054";
Kalakaumudi.conj_L_L       = "\u0055";
Kalakaumudi.conj_DD        = "\u0056";
Kalakaumudi.conj_RRRR      = "\u006D"; //ta as in steel
Kalakaumudi.conj_YY        = "\u0076";
Kalakaumudi.conj_VV        = "\u0077";
Kalakaumudi.conj_BB        = "\u0078";
Kalakaumudi.conj_JJ        = "\u0069";
Kalakaumudi.conj_JJ1       = "\u0068";

//kooTTaksharangngaL others

Kalakaumudi.conj_NM        = "\u0057";
Kalakaumudi.conj_HM        = "\u0058";
Kalakaumudi.conj_NNM       = "\u0059";
Kalakaumudi.conj_GM        = "\u005A";
Kalakaumudi.conj_TM        = "\u005B";

Kalakaumudi.conj_NGK       = "\u005C";  
Kalakaumudi.conj_KT        = "\u005D";
Kalakaumudi.conj_KSS       = "\u00C8";
Kalakaumudi.conj_TBH       = "\u0064";
Kalakaumudi.conj_T_TH      = "\u0065";
Kalakaumudi.conj_TN        = "\u0066"; 
Kalakaumudi.conj_JNY       = "\u0067";
Kalakaumudi.conj_CCH       = "\u006A";
Kalakaumudi.conj_NYC       = "\u006B";
Kalakaumudi.conj_SHC       = "\u006C";
Kalakaumudi.conj_MP        = "\u006E";
Kalakaumudi.conj_NNTT      = "\u006F";
Kalakaumudi.conj_D_DH      = "\u0070";
Kalakaumudi.conj_HN        = "\u0071";
Kalakaumudi.conj_NDH       = "\u0072";
Kalakaumudi.conj_NTH       = "\u0073";

Kalakaumudi.conj_GN        = "\u0074";
Kalakaumudi.conj_NNDD      = "\u0075";
Kalakaumudi.conj_ND        = "\u007A";
Kalakaumudi.conj_NT        = "\u00C9";
Kalakaumudi.conj_NRR_1     = "\u00CA"; 
Kalakaumudi.conj_NRR_2     = "\u00DF\u00DD"; 
Kalakaumudi.conj_TS        = "\u00CB";
Kalakaumudi.conj_STH       = "\u00CC";
Kalakaumudi.conj_SRRRR     = "\u00CD";

Kalakaumudi.conj_RU       = "\u0079"; //addition


//Digits
Kalakaumudi.digit_ZERO     = "\u0030";
Kalakaumudi.digit_ONE      = "\u0031";
Kalakaumudi.digit_TWO      = "\u0032";
Kalakaumudi.digit_THREE    = "\u0033";
Kalakaumudi.digit_FOUR     = "\u0034";
Kalakaumudi.digit_FIVE     = "\u0035";
Kalakaumudi.digit_SIX      = "\u0036";
Kalakaumudi.digit_SEVEN    = "\u0037";
Kalakaumudi.digit_EIGHT    = "\u0038";
Kalakaumudi.digit_NINE     = "\u0039";

//Matches ASCII
Kalakaumudi.EXCLAM         = "\u0021";
Kalakaumudi.NUMBER         = "\u0023";
Kalakaumudi.PERCENT        = "\u0025";
Kalakaumudi.AMBERSAND      = "\u0026";
Kalakaumudi.PARENLEFT      = "\u0028";
Kalakaumudi.PARENRIGT      = "\u0029";
Kalakaumudi.ASTERISK       = "\u002A";
Kalakaumudi.PLUS           = "\u002B";
Kalakaumudi.COMMA          = "\u002C";
Kalakaumudi.PERIOD         = "\u002E";
Kalakaumudi.SLASH          = "\u002F";
Kalakaumudi.COLON          = "\u003A";
Kalakaumudi.SEMICOLON      = "\u003B";
Kalakaumudi.LESSTHAN       = "\u003C";
Kalakaumudi.EQUALS         = "\u003D";
Kalakaumudi.GREATERTHAN    = "\u003E";
Kalakaumudi.QUESTION       = "\u003F";
Kalakaumudi.ATRATE         = "\u0040";
Kalakaumudi.LEFTCURLY      = "\u007B";
Kalakaumudi.VERTLINE       = "\u007C";
Kalakaumudi.RIGHTCURLY     = "\u007D";

Kalakaumudi.BULLET         = "\u2022";
Kalakaumudi.RTDOUBLE       = "\u201D";
Kalakaumudi.LTDOUBLE       = "\u201C";
Kalakaumudi.RTSINGLE       = "\u2019";
Kalakaumudi.LTSINGLE       = "\u2018";
Kalakaumudi.ENDASH         = "\u2013";

//Does not match ASCII
Kalakaumudi.extra_RTSINGLE = "\u0027";
Kalakaumudi.extra_LTSINGLE = "\u0022";
Kalakaumudi.extra_ASTERISK = "\u00B2";
Kalakaumudi.extra_HYPHEN   = "\u007E";
Kalakaumudi.extra_BULLET   = "\u0024";
Kalakaumudi.extra_LTPAR    = "\u00C5";
Kalakaumudi.extra_SLASH    = "\u00C6";
Kalakaumudi.extra_RTPAR    = "\u00C7";
Kalakaumudi.extra_ENDASH   = "\u005F";

//Dont need
Kalakaumudi.misc_UNKNOWN_1  = "\u002D";

Kalakaumudi.toPadma = new Object();

Kalakaumudi.toPadma[Kalakaumudi.anusvara] = Padma.anusvara;
Kalakaumudi.toPadma[Kalakaumudi.visarga]  = Padma.visarga;
Kalakaumudi.toPadma[Kalakaumudi.virama]   = Padma.chandrakkala;

Kalakaumudi.toPadma[Kalakaumudi.vowel_A]  = Padma.vowel_A;
Kalakaumudi.toPadma[Kalakaumudi.vowel_AA] = Padma.vowel_AA;
Kalakaumudi.toPadma[Kalakaumudi.vowel_I]  = Padma.vowel_I;
Kalakaumudi.toPadma[Kalakaumudi.vowel_II] = Padma.vowel_II;
Kalakaumudi.toPadma[Kalakaumudi.vowel_U]  = Padma.vowel_U;
Kalakaumudi.toPadma[Kalakaumudi.vowel_UU] = Padma.vowel_UU;
Kalakaumudi.toPadma[Kalakaumudi.vowel_R]  = Padma.vowel_R;
Kalakaumudi.toPadma[Kalakaumudi.vowel_RR] = Padma.vowel_RR;
Kalakaumudi.toPadma[Kalakaumudi.vowel_E]  = Padma.vowel_E;
Kalakaumudi.toPadma[Kalakaumudi.vowel_EE] = Padma.vowel_EE;
Kalakaumudi.toPadma[Kalakaumudi.vowel_AI] = Padma.vowel_AI;
Kalakaumudi.toPadma[Kalakaumudi.vowel_O]  = Padma.vowel_O;
Kalakaumudi.toPadma[Kalakaumudi.vowel_OO] = Padma.vowel_OO;
Kalakaumudi.toPadma[Kalakaumudi.vowel_AU] = Padma.vowel_AU;

Kalakaumudi.toPadma[Kalakaumudi.consnt_KA]  = Padma.consnt_KA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_KHA] = Padma.consnt_KHA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_GA]  = Padma.consnt_GA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_GHA] = Padma.consnt_GHA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_GHA2] = Padma.consnt_GHA;

Kalakaumudi.toPadma[Kalakaumudi.consnt_NGA] = Padma.consnt_NGA;

Kalakaumudi.toPadma[Kalakaumudi.consnt_CA]  = Padma.consnt_CA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_CHA] = Padma.consnt_CHA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_JA]  = Padma.consnt_JA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_JHA] = Padma.consnt_JHA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_NYA] = Padma.consnt_NYA;

Kalakaumudi.toPadma[Kalakaumudi.consnt_TTA]  = Padma.consnt_TTA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_TTHA] = Padma.consnt_TTHA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_DDA]  = Padma.consnt_DDA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_DDHA] = Padma.consnt_DDHA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_NNA]  = Padma.consnt_NNA;

Kalakaumudi.toPadma[Kalakaumudi.consnt_TA]  = Padma.consnt_TA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_THA] = Padma.consnt_THA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_DA]  = Padma.consnt_DA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_DHA] = Padma.consnt_DHA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_NA]  = Padma.consnt_NA;

Kalakaumudi.toPadma[Kalakaumudi.consnt_PA]  = Padma.consnt_PA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_PHA] = Padma.consnt_PHA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_BA]  = Padma.consnt_BA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_BHA] = Padma.consnt_BHA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_MA]  = Padma.consnt_MA;

Kalakaumudi.toPadma[Kalakaumudi.consnt_YA]  = Padma.consnt_YA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_RA]  = Padma.consnt_RA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_LA]  = Padma.consnt_LA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_VA]  = Padma.consnt_VA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_SHA] = Padma.consnt_SHA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_SSA] = Padma.consnt_SSA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_SA]  = Padma.consnt_SA;

Kalakaumudi.toPadma[Kalakaumudi.consnt_HA] = Padma.consnt_HA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_LLA] = Padma.consnt_LLA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_ZHA] = Padma.consnt_ZHA;
Kalakaumudi.toPadma[Kalakaumudi.consnt_RRA] = Padma.consnt_RRA;

//Gunintamulu
Kalakaumudi.toPadma[Kalakaumudi.vowelsn_AA] = Padma.vowelsn_AA;
Kalakaumudi.toPadma[Kalakaumudi.vowelsn_I]  = Padma.vowelsn_I;
Kalakaumudi.toPadma[Kalakaumudi.vowelsn_II] = Padma.vowelsn_II;
Kalakaumudi.toPadma[Kalakaumudi.vowelsn_U]  = Padma.vowelsn_U;
Kalakaumudi.toPadma[Kalakaumudi.vowelsn_UU] = Padma.vowelsn_UU;
Kalakaumudi.toPadma[Kalakaumudi.vowelsn_R]  = Padma.vowelsn_R;
Kalakaumudi.toPadma[Kalakaumudi.vowelsn_E]  = Padma.vowelsn_E;
Kalakaumudi.toPadma[Kalakaumudi.vowelsn_EE] = Padma.vowelsn_EE;
Kalakaumudi.toPadma[Kalakaumudi.vowelsn_AI] = Padma.vowelsn_AI;
Kalakaumudi.toPadma[Kalakaumudi.vowelsn_AU] = Padma.vowelsn_AU;

//Chillu
Kalakaumudi.toPadma[Kalakaumudi.chillu_ENN] = Padma.consnt_NNA + Padma.chillu;
Kalakaumudi.toPadma[Kalakaumudi.chillu_IN]  = Padma.consnt_NA + Padma.chillu;
Kalakaumudi.toPadma[Kalakaumudi.chillu_IR]  = Padma.consnt_RA + Padma.chillu;
Kalakaumudi.toPadma[Kalakaumudi.chillu_IL]  = Padma.consnt_LA + Padma.chillu;
Kalakaumudi.toPadma[Kalakaumudi.chillu_ILL] = Padma.consnt_LLA + Padma.chillu;

//half forms
Kalakaumudi.toPadma[Kalakaumudi.vattu_YA]  = Padma.vattu_YA;
Kalakaumudi.toPadma[Kalakaumudi.vattu_RA]  = Padma.vattu_RA;
Kalakaumudi.toPadma[Kalakaumudi.vattu_VA]  = Padma.vattu_VA;
Kalakaumudi.toPadma[Kalakaumudi.vattu_SHA] = Padma.vattu_SHA;
Kalakaumudi.toPadma[Kalakaumudi.vattu_MA]  = Padma.vattu_MA;
Kalakaumudi.toPadma[Kalakaumudi.vattu_NNA] = Padma.vattu_NNA;
Kalakaumudi.toPadma[Kalakaumudi.vattu_SA]  = Padma.vattu_SA;
Kalakaumudi.toPadma[Kalakaumudi.vattu_PA]  = Padma.vattu_PA;
Kalakaumudi.toPadma[Kalakaumudi.vattu_DHA] = Padma.vattu_DHA;
Kalakaumudi.toPadma[Kalakaumudi.vattu_TTA] = Padma.vattu_TTA;
Kalakaumudi.toPadma[Kalakaumudi.vattu_GA]  = Padma.vattu_GA;
Kalakaumudi.toPadma[Kalakaumudi.vattu_LA]  = Padma.vattu_LA;
Kalakaumudi.toPadma[Kalakaumudi.vattu_DDA] = Padma.vattu_DDA;
Kalakaumudi.toPadma[Kalakaumudi.vattu_TA]  = Padma.vattu_TA;
Kalakaumudi.toPadma[Kalakaumudi.vattu_NA]  = Padma.vattu_NA;
Kalakaumudi.toPadma[Kalakaumudi.vattu_DA]  = Padma.vattu_DA;


//kooTTaksharangngaL


Kalakaumudi.toPadma[Kalakaumudi.conj_KK]   = Padma.consnt_KA +  Padma.vattu_KA;
Kalakaumudi.toPadma[Kalakaumudi.conj_KT]   = Padma.consnt_KA +  Padma.vattu_TA;
Kalakaumudi.toPadma[Kalakaumudi.conj_KSS]  = Padma.consnt_KA +  Padma.vattu_SSA;
Kalakaumudi.toPadma[Kalakaumudi.conj_GN]   = Padma.consnt_GA +  Padma.vattu_NA;
Kalakaumudi.toPadma[Kalakaumudi.conj_GM]   = Padma.consnt_GA +  Padma.vattu_MA;
Kalakaumudi.toPadma[Kalakaumudi.conj_NGK]  = Padma.consnt_NGA +  Padma.vattu_KA;
Kalakaumudi.toPadma[Kalakaumudi.conj_NGNG] = Padma.consnt_NGA +  Padma.vattu_NGA;

Kalakaumudi.toPadma[Kalakaumudi.conj_CC]   = Padma.consnt_CA +  Padma.vattu_CA;
Kalakaumudi.toPadma[Kalakaumudi.conj_CCH]  = Padma.consnt_CA +  Padma.vattu_CHA;
Kalakaumudi.toPadma[Kalakaumudi.conj_JJ]   = Padma.consnt_JA +  Padma.vattu_JA;
Kalakaumudi.toPadma[Kalakaumudi.conj_JJ1]   = Padma.consnt_JA +  Padma.vattu_JA;

Kalakaumudi.toPadma[Kalakaumudi.conj_JNY]  = Padma.consnt_JA +  Padma.vattu_NYA;
Kalakaumudi.toPadma[Kalakaumudi.conj_NYC]  = Padma.consnt_NYA +  Padma.vattu_CA;
Kalakaumudi.toPadma[Kalakaumudi.conj_NYNY] = Padma.consnt_NYA +  Padma.vattu_NYA;

Kalakaumudi.toPadma[Kalakaumudi.conj_TTTT] = Padma.consnt_TTA +  Padma.vattu_TTA;
Kalakaumudi.toPadma[Kalakaumudi.conj_NNTT] = Padma.consnt_NNA +  Padma.vattu_TTA;
Kalakaumudi.toPadma[Kalakaumudi.conj_NNDD] = Padma.consnt_NNA +  Padma.vattu_DDA;
Kalakaumudi.toPadma[Kalakaumudi.conj_NNNN] = Padma.consnt_NNA +  Padma.vattu_NNA;
Kalakaumudi.toPadma[Kalakaumudi.conj_NNM]  = Padma.consnt_NNA +  Padma.vattu_MA;

Kalakaumudi.toPadma[Kalakaumudi.conj_T_T]  = Padma.consnt_TA +  Padma.vattu_TA;
Kalakaumudi.toPadma[Kalakaumudi.conj_T_TH] = Padma.consnt_TA +  Padma.vattu_THA;
Kalakaumudi.toPadma[Kalakaumudi.conj_TBH]  = Padma.consnt_TA +  Padma.vattu_BHA;
Kalakaumudi.toPadma[Kalakaumudi.conj_TM]   = Padma.consnt_TA +  Padma.vattu_MA;
Kalakaumudi.toPadma[Kalakaumudi.conj_TS]   = Padma.consnt_TA +  Padma.vattu_SA;
Kalakaumudi.toPadma[Kalakaumudi.conj_DD]   = Padma.consnt_DA +  Padma.vattu_DA;
Kalakaumudi.toPadma[Kalakaumudi.conj_D_DH] = Padma.consnt_DA +  Padma.vattu_DHA;
Kalakaumudi.toPadma[Kalakaumudi.conj_NT]   = Padma.consnt_NA +  Padma.vattu_TA;
Kalakaumudi.toPadma[Kalakaumudi.conj_NTH]  = Padma.consnt_NA +  Padma.vattu_THA;
Kalakaumudi.toPadma[Kalakaumudi.conj_ND]   = Padma.consnt_NA +  Padma.vattu_DA;
Kalakaumudi.toPadma[Kalakaumudi.conj_NDH]  = Padma.consnt_NA +  Padma.vattu_DHA;
Kalakaumudi.toPadma[Kalakaumudi.conj_N_N]  = Padma.consnt_NA +  Padma.vattu_NA;
Kalakaumudi.toPadma[Kalakaumudi.conj_NM]   = Padma.consnt_NA +  Padma.vattu_MA;
Kalakaumudi.toPadma[Kalakaumudi.conj_NRR_1]  = Padma.consnt_NA +  Padma.vattu_RRA;
Kalakaumudi.toPadma[Kalakaumudi.conj_NRR_2]  = Padma.consnt_NA +  Padma.vattu_RRA;


Kalakaumudi.toPadma[Kalakaumudi.conj_BB]  = Padma.consnt_BA +  Padma.vattu_BA;
Kalakaumudi.toPadma[Kalakaumudi.conj_MP]  = Padma.consnt_MA +  Padma.vattu_PA;
Kalakaumudi.toPadma[Kalakaumudi.conj_MM]  = Padma.consnt_MA +  Padma.vattu_MA;
Kalakaumudi.toPadma[Kalakaumudi.conj_YY]= Padma.consnt_YA +  Padma.vattu_YA;
Kalakaumudi.toPadma[Kalakaumudi.conj_VV]  = Padma.consnt_VA +  Padma.vattu_VA;
Kalakaumudi.toPadma[Kalakaumudi.conj_L_L]  = Padma.consnt_LA +  Padma.vattu_LA;
Kalakaumudi.toPadma[Kalakaumudi.conj_PP]  = Padma.consnt_PA +  Padma.vattu_PA;

Kalakaumudi.toPadma[Kalakaumudi.conj_STH]  = Padma.consnt_SA +  Padma.vattu_THA;
Kalakaumudi.toPadma[Kalakaumudi.conj_SRRRR]  = Padma.consnt_SA +  Padma.vattu_RRA + Padma.vattu_RRA;

Kalakaumudi.toPadma[Kalakaumudi.conj_HN]   = Padma.consnt_HA +  Padma.vattu_NA;
Kalakaumudi.toPadma[Kalakaumudi.conj_HM]   = Padma.consnt_HA +  Padma.vattu_MA;
Kalakaumudi.toPadma[Kalakaumudi.conj_LLLL] = Padma.consnt_LLA +  Padma.vattu_LLA;

Kalakaumudi.toPadma[Kalakaumudi.conj_RRRR] = Padma.consnt_RRA +  Padma.vattu_RRA;
Kalakaumudi.toPadma[Kalakaumudi.conj_RU]  = Padma.consnt_RA +  Padma.vowelsn_U;

Kalakaumudi.toPadma[Kalakaumudi.conj_TN] = Padma.consnt_TA +  Padma.vattu_NA;


//Miscellaneous(where it doesn't match ASCII representation)
Kalakaumudi.toPadma[Kalakaumudi.extra_RTSINGLE] = Kalakaumudi.RTSINGLE;
Kalakaumudi.toPadma[Kalakaumudi.extra_LTSINGLE] = Kalakaumudi.LTSINGLE;
Kalakaumudi.toPadma[Kalakaumudi.extra_ASTERISK] = '*';
Kalakaumudi.toPadma[Kalakaumudi.extra_HYPHEN] = Kalakaumudi.ENDASH;
Kalakaumudi.toPadma[Kalakaumudi.extra_ENDASH] = Kalakaumudi.ENDASH;
Kalakaumudi.toPadma[Kalakaumudi.extra_BULLET] = Kalakaumudi.BULLET;
Kalakaumudi.toPadma[Kalakaumudi.extra_LTPAR] = Kalakaumudi.PARENLEFT;
Kalakaumudi.toPadma[Kalakaumudi.extra_RTPAR] = Kalakaumudi.PARENRIGT;
Kalakaumudi.toPadma[Kalakaumudi.extra_SLASH]   = Kalakaumudi.SLASH;


Kalakaumudi.redundantList = new Object();
Kalakaumudi.redundantList[Kalakaumudi.misc_UNKNOWN_1] = true;

Kalakaumudi.prefixList = new Object();
Kalakaumudi.prefixList[Kalakaumudi.vattu_RA]   = true;
Kalakaumudi.prefixList[Kalakaumudi.vowelsn_E]  = true;
Kalakaumudi.prefixList[Kalakaumudi.vowelsn_EE] = true;
Kalakaumudi.prefixList[Kalakaumudi.vowelsn_AI] = true;

Kalakaumudi.overloadList = new Object();
Kalakaumudi.overloadList[Kalakaumudi.vowel_I]        = true;
Kalakaumudi.overloadList[Kalakaumudi.vowel_U]        = true;
Kalakaumudi.overloadList[Kalakaumudi.vowel_R]        = true;
Kalakaumudi.overloadList[Kalakaumudi.vowel_O]        = true;
Kalakaumudi.overloadList[Kalakaumudi.vowelsn_R]      = true;
Kalakaumudi.overloadList[Kalakaumudi.vowelsn_E]      = true;
Kalakaumudi.overloadList[Kalakaumudi.chillu_IN]      = true;

