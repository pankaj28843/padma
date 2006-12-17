// $Id: Matweb.js,v 1.4 2006/12/17 19:45:02 vnagarjuna Exp $ -->

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

//Matweb Malayalam

function Matweb()
{
}

//The interface every dynamic font encoding should implement
Matweb.maxLookupLen = 2;
Matweb.fontFace     = "Matweb";
Matweb.displayName  = "Matweb";
Matweb.script       = Padma.script_MALAYALAM;

Matweb.lookup = function (str) 
{
    return Matweb.toPadma[str];
}

Matweb.isPrefixSymbol = function (str)
{
    return Matweb.prefixList[str] != null;
}

Matweb.isOverloaded = function (str)
{
    return Matweb.overloadList[str] != null;
}

Matweb.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if ((sign1 == Padma.vowelsn_E && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_E))
        return Padma.vowelsn_O;
    if ((sign1 == Padma.vowelsn_EE && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_EE))
        return Padma.vowelsn_OO;
    return sign1 + sign2;
}

Matweb.isRedundant = function (str)
{
    return Matweb.redundantList[str] != null;
}

//Implementation details start here

//Specials
Matweb.visarga        = "\u00FC";
Matweb.anusvara       = "\u00F9";
Matweb.virama         = "\u00FA"; //Chandrakkala

//Vowels
Matweb.vowel_A        = "\u0041";
Matweb.vowel_AA       = "\u0042";
Matweb.vowel_I        = "\u0043";
Matweb.vowel_II       = "\u0043\u00F8";
Matweb.vowel_U        = "\u0044";
Matweb.vowel_UU       = "\u0044\u00F8";
Matweb.vowel_R        = "\u0063";
Matweb.vowel_RR       = "\u0063\u00F8";
Matweb.vowel_E        = "\u0046";
Matweb.vowel_EE       = "\u0047";               
Matweb.vowel_AI       = "\u00F6\u0046";
Matweb.vowel_O        = "\u0048";
Matweb.vowel_OO       = "\u0048\u00EA";
Matweb.vowel_AU       = "\u0048\u00F8";

//Consonants
Matweb.consnt_KA      = "\u004A";
Matweb.consnt_KHA     = "\u004B";
Matweb.consnt_GA      = "\u004C";
Matweb.consnt_GHA     = "\u004D";
Matweb.consnt_NGA     = "\u004E";

Matweb.consnt_CA      = "\u004F";
Matweb.consnt_CHA     = "\u0050";
Matweb.consnt_JA      = "\u0051";
Matweb.consnt_JHA     = "\u0052";
Matweb.consnt_NYA     = "\u0053";

Matweb.consnt_TTA     = "\u0054";
Matweb.consnt_TTHA    = "\u0055";
Matweb.consnt_DDA     = "\u0056";
Matweb.consnt_DDHA    = "\u0057";
Matweb.consnt_NNA     = "\u0058";

Matweb.consnt_TA      = "\u0059";
Matweb.consnt_THA     = "\u005A";
Matweb.consnt_DA      = "\u0061";
Matweb.consnt_DHA     = "\u0062";
Matweb.consnt_NA      = "\u0045";

Matweb.consnt_PA      = "\u0064";
Matweb.consnt_PHA     = "\u0065";
Matweb.consnt_BA      = "\u0066";
Matweb.consnt_BHA     = "\u0067";
Matweb.consnt_MA      = "\u0068";

Matweb.consnt_YA      = "\u0069";
Matweb.consnt_RA      = "\u006A";
Matweb.consnt_LA      = "\u006B";
Matweb.consnt_VA      = "\u006C";
Matweb.consnt_SHA     = "\u006D";
Matweb.consnt_SSA     = "\u006E";
Matweb.consnt_SA      = "\u006F";

Matweb.consnt_HA      = "\u0070";
Matweb.consnt_LLA     = "\u0071";
Matweb.consnt_ZHA     = "\u0072";
Matweb.consnt_RRA     = "\u0073";

//Gunintamulu
Matweb.vowelsn_AA     = "\u00EA";
Matweb.vowelsn_I      = "\u00EF";
Matweb.vowelsn_II     = "\u00F0";
Matweb.vowelsn_U      = "\u00F1";
Matweb.vowelsn_UU     = "\u00F2";
Matweb.vowelsn_R      = "\u00F3";
Matweb.vowelsn_RR     = "\u00F3\u00F8";
Matweb.vowelsn_E      = "\u00F6";
Matweb.vowelsn_EE     = "\u00F7";
Matweb.vowelsn_AI     = "\u00F6\u00F6";
//vowelsigns o and O have two separate glyphs, one on left and one on right.
Matweb.vowelsn_AU     = "\u00F8";

//Chillu (5)
Matweb.chillu_ENN     = "\u0078";
Matweb.chillu_IN      = "\u0075";
Matweb.chillu_IR      = "\u0074";
Matweb.chillu_IL      = "\u0076";
Matweb.chillu_ILL     = "\u0077";

//vattulu (consonant signs)
Matweb.vattu_YA       = "\u00E1";
Matweb.vattu_RA       = "\u00E2";
Matweb.vattu_VA       = "\u00F4";
//half forms
Matweb.vattu_KA       = "\u00E3";
Matweb.vattu_MA       = "\u00E4";
Matweb.vattu_NNA      = "\u00E5";
Matweb.vattu_SA       = "\u00E6";
Matweb.vattu_PA       = "\u00E7";
Matweb.vattu_DHA      = "\u00E8";
Matweb.vattu_TTA      = "\u00E9";
Matweb.vattu_PHA      = "\u00EC";
Matweb.vattu_LA       = "\u00EB";
Matweb.vattu_TA       = "\u00ED";
Matweb.vattu_NA       = "\u00EE";
Matweb.vattu_TTHA     = "\u00F5";
Matweb.vattu_R        = "\u00FD";
Matweb.below_double   = "\u00FE"; //the character used to double CA,VA,BA

//kooTTaksharangngaL

Matweb.conj_KK        = "\u00BC";
Matweb.conj_KTT       = "\u00C5";
Matweb.conj_KT        = "\u00B9";
Matweb.conj_KSS       = "\u0026";
Matweb.conj_GG        = "\u0024";
Matweb.conj_GN        = "\u00AC";
Matweb.conj_GM        = "\u00DE";
Matweb.conj_NGK       = "\u00CB";  
Matweb.conj_NGNG      = "\u0178";
Matweb.conj_GBH       = "\u00DF"; //addition
Matweb.conj_GD        = "\u2026"; //addition

Matweb.conj_CC        = "\u004F\u00FE";

Matweb.conj_CCH       = "\u2022";
Matweb.conj_JJ        = "\u201E";
Matweb.conj_JNY       = "\u00C9";
Matweb.conj_NYC       = "\u00D6";
Matweb.conj_NYNY      = "\u0192";
Matweb.conj_NYJ       = "\u00D2";//addition

Matweb.conj_TTTT      = "\u02C6";
Matweb.conj_NNTT      = "\u00FB";
Matweb.conj_NNDD      = "\u007E";
Matweb.conj_NNNN      = "\u00AF";

Matweb.conj_NNM       = "\u00B4";
Matweb.conj_DDDDH     = "\u00A9"; 
Matweb.conj_DDJ       = "\u203A"; //addition


Matweb.conj_T_T       = "\u0152";
Matweb.conj_T_TH      = "\u003C";
Matweb.conj_TBH       = "\u00A7";
Matweb.conj_TM        = "\u0023";
Matweb.conj_TS        = "\u00A8";
Matweb.conj_TN        = "\u00BA"; //addition

Matweb.conj_DD        = "\u2030";
Matweb.conj_D_DH      = "\u0160";
Matweb.conj_NT        = "\u008D";
Matweb.conj_NTH       = "\u2122";
Matweb.conj_ND        = "\u003E";
Matweb.conj_NDH       = "\u2021";
Matweb.conj_N_N       = "\u00AA";
Matweb.conj_NM        = "\u00D3";
Matweb.conj_NRR_2     = "\u0075\u0073"; 
Matweb.conj_NAU       = "\u00D5"; //npollu for me, nau for paul

Matweb.conj_BD        = "\u007D";
Matweb.conj_BB        = "\u0066\u00FE";
Matweb.conj_MP        = "\u0153";
Matweb.conj_MM        = "\u02DC";
Matweb.conj_MLL       = "\u2013";

Matweb.conj_YY_1      = "\u00E0";
Matweb.conj_YY_2      = "\u0069\u00FE";
Matweb.conj_YKK       = "\u00C0";
Matweb.conj_VV        = "\u006C\u00FE";
Matweb.conj_ZHV       = "\u00B0"; //addition

Matweb.conj_SHC       = "\u00CA";
Matweb.conj_SHSH      = "\u008F";
Matweb.conj_STH       = "\u007A";
Matweb.conj_SRRRR     = "\u201A";

Matweb.conj_HN        = "\u00BB";
Matweb.conj_HM        = "\u009D";
Matweb.conj_LLLL      = "\u00C8";

Matweb.conj_RRRR     = "\u0161"; //ta as in steel

//Consonat(s) + koottaksharas complex combinations
Matweb.conj_LKK       = "\u0022";
Matweb.conj_GDDH      = "\u0040";
Matweb.conj_YK_K      = "\u00C0";
Matweb.conj_YM        = "\u00C1";
Matweb.conj_YT        = "\u00C2";
Matweb.conj_NYCH      = "\u00CD"; 
Matweb.conj_ZHC       = "\u00D7";
Matweb.conj_ZHK       = "\u00D9";
Matweb.conj_ZHN_N     = "\u00DA";
Matweb.conj_ZHT_T     = "\u00DB"; 
Matweb.conj_YT_T      = "\u2019";

//Consonants + ra and r
Matweb.conj_SR      = "\u0049";
Matweb.conj_SSTTRA   = "\u005E";
Matweb.conj_SRA     = "\u0079";
Matweb.conj_BRA     = "\u007B";
Matweb.conj_JR      = "\u007C";
Matweb.conj_GHRA    = "\u0090"; 
Matweb.conj_MPRA    = "\u00A1";
Matweb.conj_SMR     = "\u00A2";
Matweb.conj_STRA    = "\u00A3";
Matweb.conj_SKR     = "\u00A4";
Matweb.conj_TR      = "\u00A5";
Matweb.conj_TRA     = "\u00A6";
Matweb.conj_DHRA    = "\u00AB"; 
Matweb.conj_DHR     = "\u00AE";
Matweb.conj_SHRA    = "\u00B1";
Matweb.conj_SHR     = "\u00B3";
Matweb.conj_NR      = "\u00B5";
Matweb.conj_NNDHRA  = "\u00B6";
Matweb.conj_NDHRA   = "\u00B8"; 
Matweb.conj_DDRA    = "\u00BD";
Matweb.conj_MRA     = "\u00BE";
Matweb.conj_SSPRA   = "\u00C3";
Matweb.conj_KTRA    = "\u00C4";
Matweb.conj_KRA     = "\u00C6";
Matweb.conj_KR      = "\u00C7"; 
Matweb.conj_DR      = "\u00CC";
Matweb.conj_DRA     = "\u00CE";
Matweb.conj_BHRA    = "\u00CF";
Matweb.conj_BHR     = "\u00D0";
Matweb.conj_TTRA    = "\u00D1";
Matweb.conj_NTRA    = "\u00D4"; 
Matweb.conj_VRA     = "\u00D8";
Matweb.conj_GRA     = "\u00DC";
Matweb.conj_GR      = "\u00DD";
Matweb.conj_NDRA    = "\u00FF";
Matweb.conj_JRA     = "\u2014"; 
Matweb.conj_PHRA    = "\u2018";
Matweb.conj_HR      = "\u201C";
Matweb.conj_HRA     = "\u201D";
Matweb.conj_SSKR    = "\u2020"; 
Matweb.conj_PRA     = "\u2039";




//Digits
Matweb.digit_ZERO     = "\u0030";
Matweb.digit_ONE      = "\u0031";
Matweb.digit_TWO      = "\u0032";
Matweb.digit_THREE    = "\u0033";
Matweb.digit_FOUR     = "\u0034";
Matweb.digit_FIVE     = "\u0035";
Matweb.digit_SIX      = "\u0036";
Matweb.digit_SEVEN    = "\u0037";
Matweb.digit_EIGHT    = "\u0038";
Matweb.digit_NINE     = "\u0039";

//Matches ASCII
Matweb.EXCLAM         = "\u0021";
Matweb.PERCENT        = "\u0025";
Matweb.QTSINGLE       = "\u0027";
Matweb.PARENLEFT      = "\u0028";
Matweb.PARENRIGT      = "\u0029";
Matweb.ASTERISK       = "\u002A";
Matweb.PLUS           = "\u002B";
Matweb.COMMA          = "\u002C";
Matweb.PERIOD         = "\u002E";
Matweb.SLASH          = "\u002F";
Matweb.COLON          = "\u003A";
Matweb.SEMICOLON      = "\u003B";
Matweb.EQUALS         = "\u003D";
Matweb.QUESTION       = "\u003F";
Matweb.LOWLINE        = "\u005F"; //matches the unicode lowline character

//Does not match ASCII
Matweb.extra_QTSINGLE = "\u0060";
Matweb.extra_ASTERISK = "\u00B2";

//Dont need
Matweb.misc_UNKNOWN_1  = "\u002D";

Matweb.toPadma = new Object();

Matweb.toPadma[Matweb.anusvara] = Padma.anusvara;
Matweb.toPadma[Matweb.visarga]  = Padma.visarga;
Matweb.toPadma[Matweb.virama]   = Padma.chandrakkala;

Matweb.toPadma[Matweb.vowel_A]  = Padma.vowel_A;
Matweb.toPadma[Matweb.vowel_AA] = Padma.vowel_AA;
Matweb.toPadma[Matweb.vowel_I]  = Padma.vowel_I;
Matweb.toPadma[Matweb.vowel_II] = Padma.vowel_II;
Matweb.toPadma[Matweb.vowel_U]  = Padma.vowel_U;
Matweb.toPadma[Matweb.vowel_UU] = Padma.vowel_UU;
Matweb.toPadma[Matweb.vowel_R]  = Padma.vowel_R;
Matweb.toPadma[Matweb.vowel_RR] = Padma.vowel_RR;
Matweb.toPadma[Matweb.vowel_E]  = Padma.vowel_E;
Matweb.toPadma[Matweb.vowel_EE] = Padma.vowel_EE;
Matweb.toPadma[Matweb.vowel_AI] = Padma.vowel_AI;
Matweb.toPadma[Matweb.vowel_O]  = Padma.vowel_O;
Matweb.toPadma[Matweb.vowel_OO] = Padma.vowel_OO;
Matweb.toPadma[Matweb.vowel_AU] = Padma.vowel_AU;

Matweb.toPadma[Matweb.consnt_KA]  = Padma.consnt_KA;
Matweb.toPadma[Matweb.consnt_KHA] = Padma.consnt_KHA;
Matweb.toPadma[Matweb.consnt_GA]  = Padma.consnt_GA;
Matweb.toPadma[Matweb.consnt_GHA] = Padma.consnt_GHA;
Matweb.toPadma[Matweb.consnt_NGA] = Padma.consnt_NGA;

Matweb.toPadma[Matweb.consnt_CA]  = Padma.consnt_CA;
Matweb.toPadma[Matweb.consnt_CHA] = Padma.consnt_CHA;
Matweb.toPadma[Matweb.consnt_JA]  = Padma.consnt_JA;
Matweb.toPadma[Matweb.consnt_JHA] = Padma.consnt_JHA;
Matweb.toPadma[Matweb.consnt_NYA] = Padma.consnt_NYA;

Matweb.toPadma[Matweb.consnt_TTA]  = Padma.consnt_TTA;
Matweb.toPadma[Matweb.consnt_TTHA] = Padma.consnt_TTHA;
Matweb.toPadma[Matweb.consnt_DDA]  = Padma.consnt_DDA;
Matweb.toPadma[Matweb.consnt_DDHA] = Padma.consnt_DDHA;
Matweb.toPadma[Matweb.consnt_NNA]  = Padma.consnt_NNA;

Matweb.toPadma[Matweb.consnt_TA]  = Padma.consnt_TA;
Matweb.toPadma[Matweb.consnt_THA] = Padma.consnt_THA;
Matweb.toPadma[Matweb.consnt_DA]  = Padma.consnt_DA;
Matweb.toPadma[Matweb.consnt_DHA] = Padma.consnt_DHA;
Matweb.toPadma[Matweb.consnt_NA]  = Padma.consnt_NA;

Matweb.toPadma[Matweb.consnt_PA]  = Padma.consnt_PA;
Matweb.toPadma[Matweb.consnt_PHA] = Padma.consnt_PHA;
Matweb.toPadma[Matweb.consnt_BA]  = Padma.consnt_BA;
Matweb.toPadma[Matweb.consnt_BHA] = Padma.consnt_BHA;
Matweb.toPadma[Matweb.consnt_MA]  = Padma.consnt_MA;

Matweb.toPadma[Matweb.consnt_YA]  = Padma.consnt_YA;
Matweb.toPadma[Matweb.consnt_RA]  = Padma.consnt_RA;
Matweb.toPadma[Matweb.consnt_LA]  = Padma.consnt_LA;
Matweb.toPadma[Matweb.consnt_VA]  = Padma.consnt_VA;
Matweb.toPadma[Matweb.consnt_SHA] = Padma.consnt_SHA;
Matweb.toPadma[Matweb.consnt_SSA] = Padma.consnt_SSA;
Matweb.toPadma[Matweb.consnt_SA]  = Padma.consnt_SA;

Matweb.toPadma[Matweb.consnt_HA] = Padma.consnt_HA;
Matweb.toPadma[Matweb.consnt_LLA] = Padma.consnt_LLA;
Matweb.toPadma[Matweb.consnt_ZHA] = Padma.consnt_ZHA;
Matweb.toPadma[Matweb.consnt_RRA] = Padma.consnt_RRA;

//Gunintamulu
Matweb.toPadma[Matweb.vowelsn_AA] = Padma.vowelsn_AA;
Matweb.toPadma[Matweb.vowelsn_I]  = Padma.vowelsn_I;
Matweb.toPadma[Matweb.vowelsn_II] = Padma.vowelsn_II;
Matweb.toPadma[Matweb.vowelsn_U]  = Padma.vowelsn_U;
Matweb.toPadma[Matweb.vowelsn_UU] = Padma.vowelsn_UU;
Matweb.toPadma[Matweb.vowelsn_R]  = Padma.vowelsn_R;
Matweb.toPadma[Matweb.vowelsn_E]  = Padma.vowelsn_E;
Matweb.toPadma[Matweb.vowelsn_EE] = Padma.vowelsn_EE;
Matweb.toPadma[Matweb.vowelsn_AI] = Padma.vowelsn_AI;
Matweb.toPadma[Matweb.vowelsn_AU] = Padma.vowelsn_AU;

//Chillu
Matweb.toPadma[Matweb.chillu_ENN] = Padma.consnt_NNA + Padma.chillu;
Matweb.toPadma[Matweb.chillu_IN]  = Padma.consnt_NA + Padma.chillu;
Matweb.toPadma[Matweb.chillu_IR]  = Padma.consnt_RA + Padma.chillu;
Matweb.toPadma[Matweb.chillu_IL]  = Padma.consnt_LA + Padma.chillu;
Matweb.toPadma[Matweb.chillu_ILL] = Padma.consnt_LLA + Padma.chillu;

//half forms
Matweb.toPadma[Matweb.vattu_YA]  = Padma.vattu_YA;
Matweb.toPadma[Matweb.vattu_RA]  = Padma.vattu_RA;
Matweb.toPadma[Matweb.vattu_VA]  = Padma.vattu_VA;
Matweb.toPadma[Matweb.vattu_KA]  = Padma.vattu_KA;
Matweb.toPadma[Matweb.vattu_MA]  = Padma.vattu_MA;
Matweb.toPadma[Matweb.vattu_NNA] = Padma.vattu_NNA;
Matweb.toPadma[Matweb.vattu_SA]  = Padma.vattu_SA;
Matweb.toPadma[Matweb.vattu_PA]  = Padma.vattu_PA;
Matweb.toPadma[Matweb.vattu_PHA]  = Padma.vattu_PHA;
Matweb.toPadma[Matweb.vattu_DHA] = Padma.vattu_DHA;
Matweb.toPadma[Matweb.vattu_TTA] = Padma.vattu_TTA;
Matweb.toPadma[Matweb.vattu_LA]  = Padma.vattu_LA;
Matweb.toPadma[Matweb.vattu_TA]  = Padma.vattu_TA;
Matweb.toPadma[Matweb.vattu_NA]  = Padma.vattu_NA;
Matweb.toPadma[Matweb.vattu_TTHA] = Padma.vattu_TTHA;
Matweb.toPadma[Matweb.vattu_R]   = Padma.vowelsn_R;


//kooTTaksharangngaL


Matweb.toPadma[Matweb.conj_KK]   = Padma.consnt_KA +  Padma.vattu_KA;
Matweb.toPadma[Matweb.conj_KTT]  = Padma.consnt_KA +  Padma.vattu_TTA;
Matweb.toPadma[Matweb.conj_KT]   = Padma.consnt_KA +  Padma.vattu_TA;
Matweb.toPadma[Matweb.conj_KSS]  = Padma.consnt_KA +  Padma.vattu_SSA;
Matweb.toPadma[Matweb.conj_GG]   = Padma.consnt_GA +  Padma.vattu_GA;
Matweb.toPadma[Matweb.conj_GN]   = Padma.consnt_GA +  Padma.vattu_NA;
Matweb.toPadma[Matweb.conj_GM]   = Padma.consnt_GA +  Padma.vattu_MA;
Matweb.toPadma[Matweb.conj_NGK]  = Padma.consnt_NGA +  Padma.vattu_KA;
Matweb.toPadma[Matweb.conj_NGNG] = Padma.consnt_NGA +  Padma.vattu_NGA;

Matweb.toPadma[Matweb.conj_CC]   = Padma.consnt_CA +  Padma.vattu_CA;
Matweb.toPadma[Matweb.conj_CCH]  = Padma.consnt_CA +  Padma.vattu_CHA;
Matweb.toPadma[Matweb.conj_JJ]   = Padma.consnt_JA +  Padma.vattu_JA;
Matweb.toPadma[Matweb.conj_JNY]  = Padma.consnt_JA +  Padma.vattu_NYA;
Matweb.toPadma[Matweb.conj_NYC]  = Padma.consnt_NYA +  Padma.vattu_CA;
Matweb.toPadma[Matweb.conj_NYNY] = Padma.consnt_NYA +  Padma.vattu_NYA;
Matweb.toPadma[Matweb.conj_NYJ]  = Padma.consnt_NYA +  Padma.vattu_JA;

Matweb.toPadma[Matweb.conj_TTTT] = Padma.consnt_TTA +  Padma.vattu_TTA;
Matweb.toPadma[Matweb.conj_NNTT] = Padma.consnt_NNA +  Padma.vattu_TTA;
Matweb.toPadma[Matweb.conj_NNDD] = Padma.consnt_NNA +  Padma.vattu_DDA;
Matweb.toPadma[Matweb.conj_NNNN] = Padma.consnt_NNA +  Padma.vattu_NNA;
Matweb.toPadma[Matweb.conj_NNM]  = Padma.consnt_NNA +  Padma.vattu_MA;
Matweb.toPadma[Matweb.conj_DDDDH] = Padma.consnt_DDA +  Padma.vattu_DDHA;

Matweb.toPadma[Matweb.conj_T_T]  = Padma.consnt_TA +  Padma.vattu_TA;
Matweb.toPadma[Matweb.conj_T_TH] = Padma.consnt_TA +  Padma.vattu_THA;
Matweb.toPadma[Matweb.conj_TBH]  = Padma.consnt_TA +  Padma.vattu_BHA;
Matweb.toPadma[Matweb.conj_TM]   = Padma.consnt_TA +  Padma.vattu_MA;
Matweb.toPadma[Matweb.conj_TS]   = Padma.consnt_TA +  Padma.vattu_SA;
Matweb.toPadma[Matweb.conj_DD]   = Padma.consnt_DA +  Padma.vattu_DA;
Matweb.toPadma[Matweb.conj_D_DH] = Padma.consnt_DA +  Padma.vattu_DHA;
Matweb.toPadma[Matweb.conj_NT]   = Padma.consnt_NA +  Padma.vattu_TA;
Matweb.toPadma[Matweb.conj_NTH]  = Padma.consnt_NA +  Padma.vattu_THA;
Matweb.toPadma[Matweb.conj_ND]   = Padma.consnt_NA +  Padma.vattu_DA;
Matweb.toPadma[Matweb.conj_NDH]  = Padma.consnt_NA +  Padma.vattu_DHA;
Matweb.toPadma[Matweb.conj_N_N]  = Padma.consnt_NA +  Padma.vattu_NA;
Matweb.toPadma[Matweb.conj_NM]   = Padma.consnt_NA +  Padma.vattu_MA;
Matweb.toPadma[Matweb.conj_NRR_2]  = Padma.consnt_NA +  Padma.vattu_RRA;
Matweb.toPadma[Matweb.conj_NAU]  = Padma.consnt_NA +  Padma.chandrakkala;


Matweb.toPadma[Matweb.conj_BD]  = Padma.consnt_BA +  Padma.vattu_DA;
Matweb.toPadma[Matweb.conj_BB]  = Padma.consnt_BA +  Padma.vattu_BA;
Matweb.toPadma[Matweb.conj_MP]  = Padma.consnt_MA +  Padma.vattu_PA;
Matweb.toPadma[Matweb.conj_MM]  = Padma.consnt_MA +  Padma.vattu_MA;
Matweb.toPadma[Matweb.conj_MLL] = Padma.consnt_MA +  Padma.vattu_LLA;
Matweb.toPadma[Matweb.conj_YY_2]= Padma.consnt_YA +  Padma.vattu_YA;
Matweb.toPadma[Matweb.conj_YY_1]= Padma.consnt_YA +  Padma.vattu_YA;
Matweb.toPadma[Matweb.conj_YKK] = Padma.consnt_YA +  Padma.vattu_KA +  Padma.vattu_KA;
Matweb.toPadma[Matweb.conj_VV]  = Padma.consnt_VA +  Padma.vattu_VA;

Matweb.toPadma[Matweb.conj_SHC]  = Padma.consnt_SHA +  Padma.vattu_CA;
Matweb.toPadma[Matweb.conj_SHSH] = Padma.consnt_SHA +  Padma.vattu_SHA;
Matweb.toPadma[Matweb.conj_STH]  = Padma.consnt_SA +  Padma.vattu_THA;
Matweb.toPadma[Matweb.conj_SRRRR]  = Padma.consnt_SA +  Padma.vattu_RRA + Padma.vattu_RRA;

Matweb.toPadma[Matweb.conj_HN]   = Padma.consnt_HA +  Padma.vattu_NA;
Matweb.toPadma[Matweb.conj_HM]   = Padma.consnt_HA +  Padma.vattu_MA;
Matweb.toPadma[Matweb.conj_LLLL] = Padma.consnt_LLA +  Padma.vattu_LLA;

Matweb.toPadma[Matweb.conj_RRRR] = Padma.consnt_RRA +  Padma.vattu_RRA;

Matweb.toPadma[Matweb.conj_ZHV] = Padma.consnt_ZHA +  Padma.vattu_VA;
Matweb.toPadma[Matweb.conj_TN] = Padma.consnt_TA +  Padma.vattu_NA;
Matweb.toPadma[Matweb.conj_DDJ] = Padma.consnt_DDA +  Padma.vattu_JA;
Matweb.toPadma[Matweb.conj_GBH] = Padma.consnt_GA +  Padma.vattu_BHA;
Matweb.toPadma[Matweb.conj_GD]  = Padma.consnt_GA +  Padma.vattu_DA;


//Consonant(s) + Vowel Sign
Matweb.toPadma[Matweb.conj_LKK]   = Padma.consnt_LA + Padma.vattu_KA + Padma.vattu_KA;
Matweb.toPadma[Matweb.conj_GDDH]  = Padma.consnt_GA +  Padma.vattu_DA + Padma.vattu_DHA;
Matweb.toPadma[Matweb.conj_YK_K]  = Padma.consnt_YA +  Padma.vattu_KA + Padma.vattu_KA;
Matweb.toPadma[Matweb.conj_YM]    = Padma.consnt_YA + Padma.vattu_MA;
Matweb.toPadma[Matweb.conj_YT]    = Padma.consnt_YA + Padma.vattu_TA;
Matweb.toPadma[Matweb.conj_NYCH]  = Padma.consnt_NYA +  Padma.vattu_CHA ;
Matweb.toPadma[Matweb.conj_ZHC]   = Padma.consnt_ZHA + Padma.vattu_CA;
Matweb.toPadma[Matweb.conj_ZHK]   = Padma.consnt_ZHA + Padma.vattu_KA;
Matweb.toPadma[Matweb.conj_ZHN_N] = Padma.consnt_ZHA + Padma.vattu_NA + Padma.vattu_NA;
Matweb.toPadma[Matweb.conj_ZHT_T] = Padma.consnt_ZHA +  Padma.vattu_TA + Padma.vattu_TA;
Matweb.toPadma[Matweb.conj_YT_T]  = Padma.consnt_YA + Padma.vattu_TA + Padma.vattu_TA;

//Consonants conjugates with R
Matweb.toPadma[Matweb.conj_SR]   = Padma.consnt_SA +  Padma.vowelsn_R;
Matweb.toPadma[Matweb.conj_JR]   = Padma.consnt_JA +  Padma.vowelsn_R;
Matweb.toPadma[Matweb.conj_SMR]   = Padma.consnt_SA + Padma.vattu_MA + Padma.vowelsn_R;
Matweb.toPadma[Matweb.conj_SKR]   = Padma.consnt_SA + Padma.vattu_KA + Padma.vowelsn_R;
Matweb.toPadma[Matweb.conj_TR]   = Padma.consnt_TA +  Padma.vowelsn_R;
Matweb.toPadma[Matweb.conj_DHR]   = Padma.consnt_DHA +  Padma.vowelsn_R;
Matweb.toPadma[Matweb.conj_SHR]   = Padma.consnt_SHA +  Padma.vowelsn_R;
Matweb.toPadma[Matweb.conj_NR]   = Padma.consnt_NA +  Padma.vowelsn_R;
Matweb.toPadma[Matweb.conj_KR]   = Padma.consnt_KA +  Padma.vowelsn_R;
Matweb.toPadma[Matweb.conj_SSKR]   = Padma.consnt_SSA + Padma.vattu_KA + Padma.vowelsn_R;
Matweb.toPadma[Matweb.conj_BHR]   = Padma.consnt_BHA +  Padma.vowelsn_R;
Matweb.toPadma[Matweb.conj_DR]   = Padma.consnt_DA +  Padma.vowelsn_R;
Matweb.toPadma[Matweb.conj_GR]   = Padma.consnt_GA +  Padma.vowelsn_R;
Matweb.toPadma[Matweb.conj_HR]   = Padma.consnt_HA +  Padma.vowelsn_R;

//Consonants conjugates with RA

Matweb.toPadma[Matweb.conj_SSTTRA]   = Padma.consnt_SSA + Padma.vattu_TTA + Padma.vattu_RA;
Matweb.toPadma[Matweb.conj_STRA]   = Padma.consnt_SA + Padma.vattu_TA + Padma.vattu_RA;
Matweb.toPadma[Matweb.conj_NNDHRA]   = Padma.consnt_NNA + Padma.vattu_DHA + Padma.vattu_RA;
Matweb.toPadma[Matweb.conj_NDHRA]   = Padma.consnt_NA + Padma.vattu_DHA + Padma.vattu_RA;
Matweb.toPadma[Matweb.conj_SSPRA]   = Padma.consnt_SSA + Padma.vattu_PA + Padma.vattu_RA;
Matweb.toPadma[Matweb.conj_KTRA]   = Padma.consnt_KA + Padma.vattu_TA + Padma.vattu_RA;
Matweb.toPadma[Matweb.conj_NDRA]   = Padma.consnt_NA + Padma.vattu_DA + Padma.vattu_RA;
Matweb.toPadma[Matweb.conj_NTRA]   = Padma.consnt_NA + Padma.vattu_TA + Padma.vattu_RA;
Matweb.toPadma[Matweb.conj_MPRA]   = Padma.consnt_MA + Padma.vattu_PA + Padma.vattu_RA;
Matweb.toPadma[Matweb.conj_BRA]   = Padma.consnt_BA +  Padma.vattu_RA;
Matweb.toPadma[Matweb.conj_SRA]   = Padma.consnt_SA  + Padma.vattu_RA;
Matweb.toPadma[Matweb.conj_GHRA]   = Padma.consnt_GHA +  Padma.vattu_RA;
Matweb.toPadma[Matweb.conj_TRA]   = Padma.consnt_TA +  Padma.vattu_RA;
Matweb.toPadma[Matweb.conj_SHRA]   = Padma.consnt_SHA  + Padma.vattu_RA;
Matweb.toPadma[Matweb.conj_DHRA]   = Padma.consnt_DHA +  Padma.vattu_RA;
Matweb.toPadma[Matweb.conj_MRA]   = Padma.consnt_MA +  Padma.vattu_RA;
Matweb.toPadma[Matweb.conj_KRA]   = Padma.consnt_KA  + Padma.vattu_RA;
Matweb.toPadma[Matweb.conj_BHRA]   = Padma.consnt_BHA +  Padma.vattu_RA;
Matweb.toPadma[Matweb.conj_DRA]   = Padma.consnt_DA +  Padma.vattu_RA;
Matweb.toPadma[Matweb.conj_TTRA]   = Padma.consnt_TTA  + Padma.vattu_RA;
Matweb.toPadma[Matweb.conj_DDRA]   = Padma.consnt_DDA +  Padma.vattu_RA;
Matweb.toPadma[Matweb.conj_VRA]   = Padma.consnt_VA +  Padma.vattu_RA;
Matweb.toPadma[Matweb.conj_JRA]   = Padma.consnt_JA  + Padma.vattu_RA;
Matweb.toPadma[Matweb.conj_GRA]   = Padma.consnt_GA +  Padma.vattu_RA;
Matweb.toPadma[Matweb.conj_PRA]   = Padma.consnt_PA +  Padma.vattu_RA;
Matweb.toPadma[Matweb.conj_HRA]   = Padma.consnt_HA  + Padma.vattu_RA;
Matweb.toPadma[Matweb.conj_PHRA]   = Padma.consnt_PHA +  Padma.vattu_RA;

//Miscellaneous(where it doesn't match ASCII representation)
Matweb.toPadma[Matweb.extra_QTSINGLE] = Matweb.QTSINGLE;
Matweb.toPadma[Matweb.extra_ASTERISK] = '*';
Matweb.toPadma[Matweb.below_double]   = '';//strip this character if used alone erroneousely

Matweb.redundantList = new Object();
Matweb.redundantList[Matweb.misc_UNKNOWN_1] = true;

Matweb.prefixList = new Object();
Matweb.prefixList[Matweb.vattu_RA]   = true;
Matweb.prefixList[Matweb.vowelsn_E]  = true;
Matweb.prefixList[Matweb.vowelsn_EE] = true;
Matweb.prefixList[Matweb.vowelsn_AI] = true;

Matweb.overloadList = new Object();
Matweb.overloadList[Matweb.vowel_I]        = true;
Matweb.overloadList[Matweb.vowel_U]        = true;
Matweb.overloadList[Matweb.vowel_R]        = true;
Matweb.overloadList[Matweb.vowel_O]        = true;
Matweb.overloadList[Matweb.consnt_CA]        = true;
Matweb.overloadList[Matweb.consnt_VA]        = true;
Matweb.overloadList[Matweb.consnt_BA]        = true;
Matweb.overloadList[Matweb.consnt_YA]        = true;
Matweb.overloadList[Matweb.vowelsn_R]      = true;
Matweb.overloadList[Matweb.vowelsn_E]      = true;
Matweb.overloadList[Matweb.chillu_IN]      = true;

