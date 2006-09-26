// $Id: Mithi.js,v 1.3 2006/09/26 19:16:37 vnagarjuna Exp $ -->

//Copyright 2005 Nagarjuna Venna <vnagarjuna@yahoo.com>
// The mapping for Mithi font herein has been added by Indictrans(www.indictrans.org)
// Copyright 2006  Poonam Kainthura (poonamkainthura@gmail.com)
//                                  ( indictrans@gmail.com )

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

function Mithi()
{
}

//The interface every dynamic font encoding should implement
Mithi.maxLookupLen = 3;
Mithi.fontFace     = "MARmith0"
Mithi.displayName  = "Mithi";
Mithi.script       = Padma.script_DEVANAGARI;
Mithi.hasSuffixes  = true;

Mithi.lookup = function (str) 
{
    return Mithi.toPadma[str];
}

Mithi.isPrefixSymbol = function (str)
{
    return Mithi.prefixList[str] != null;
}

Mithi.isSuffixSymbol = function (str)
{
    return Mithi.suffixList[str] != null;
}

Mithi.isOverloaded = function (str)
{
    return Mithi.overloadList[str] != null;
}

Mithi.handleTwoPartVowelSigns = function (sign1, sign2)
{
   if ((sign1 == Padma.vowelsn_EE && sign2 == Padma.vowelsn_AA) ||
       (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_EE))
        return Padma.vowelsn_OO;
    if ((sign1 == Padma.vowelsn_AI && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_AI))
        return Padma.vowelsn_AU;
    return sign1 + sign2;    
}

Mithi.isRedundant = function (str, prev)
{
    return Mithi.redundantList[str] != null;
}

//Implementation details start here

//Specials

Mithi.anusvara          = "\u00E2";
Mithi.candrabindu       = "\u00EE"; 

//Vowels

Mithi.vowel_A         = "\u0041";
Mithi.vowel_AA        = "\u0041\u0074";
Mithi.vowel_I         = "\u0042";
Mithi.vowel_II        = "\u0042\u00E3";
Mithi.vowel_U         = "\u0043";
Mithi.vowel_UU        = "\u0044";
Mithi.vowel_R         = "\u0178";
Mithi.vowel_EE        = "\u0045";
Mithi.vowel_AI        = "\u0045\u00E7";
Mithi.vowel_O         = "\u0041\u0074\u00E7";
Mithi.vowel_AU        = "\u0041\u0074\u00E8";

//Consonants

Mithi.consnt_KA       = "\u0047";
Mithi.consnt_KHA      = "\u0048\u0074";
Mithi.consnt_KHHA     = "\u00DC\u0074";
Mithi.consnt_GA       = "\u0049\u0074";
Mithi.consnt_GHA      = "\u004A\u0074";
Mithi.consnt_NGA      = "\u201A";

Mithi.consnt_CA       = "\u004B\u0074";
Mithi.consnt_CHA      = "\u004C";
Mithi.consnt_JA       = "\u004D\u0074";
Mithi.consnt_JHA      = "\u004E\u0074";
Mithi.consnt_NYA      = "\u0192\u00E6";

Mithi.consnt_TTA      = "\u004F";
Mithi.consnt_TTHA     = "\u0050";
Mithi.consnt_DDA      = "\u0051";
Mithi.consnt_DDHA     = "\u0052";
Mithi.consnt_NNA      = "\u0053\u0074";

Mithi.consnt_TA       = "\u0054\u0074";
Mithi.consnt_THA      = "\u0055\u0074";
Mithi.consnt_DA       = "\u0056";
Mithi.consnt_DHA      = "\u0057\u0074";
Mithi.consnt_NA       = "\u0058\u0074";

Mithi.consnt_PA       = "\u0059\u0074";
Mithi.consnt_PHA      = "\u0061";
Mithi.consnt_BA       = "\u0062\u0074";
Mithi.consnt_BHA      = "\u0063\u0074";
Mithi.consnt_MA       = "\u0064\u0074";

Mithi.consnt_YA       = "\u0065\u0074";
Mithi.consnt_RA       = "\u0066";
Mithi.consnt_LA_1     = "\u00D4";
Mithi.consnt_LA_2     = "\u0067\u0074";
Mithi.consnt_VA       = "\u0069\u0074";
Mithi.consnt_SHA      = "\u006A\u0074";
Mithi.consnt_SSA      = "\u006B\u0074";
Mithi.consnt_SA       = "\u006C\u0074";
Mithi.consnt_HA       = "\u006D";
Mithi.consnt_LLA      = "\u0068";

//Gunintamulu
Mithi.vowelsn_AA      = "\u0074";
Mithi.vowelsn_I_1     = "\u0075";
Mithi.vowelsn_I_2     = "\u0161";
Mithi.vowelsn_II      = "\u0076";
Mithi.vowelsn_U_1     = "\u00A9";
Mithi.vowelsn_U_2     = "\u00E4";
Mithi.vowelsn_UU_1    = "\u00E5";
Mithi.vowelsn_UU_2    = "\u00AA";
Mithi.vowelsn_R       = "\u00E6";
Mithi.vowelsn_EE      = "\u00E7";
Mithi.vowelsn_AI      = "\u00E8";
Mithi.vowelsn_CDR_E   = "\u00E9";
Mithi.vowelsn_CDR_O   = "\u0074\u00E9";// To Do
Mithi.vowelsn_OO      = "\u0074\u00E7";
Mithi.vowelsn_AU      = "\u0074\u00E8";

//Matra + anusvara
Mithi.vowelsn_IM      = "\u0077";
Mithi.vowelsn_IIM     = "\u0079";
Mithi.vowelsn_EEM     = "\u007C";

//Half Forms
Mithi.halffm_KA       = "\u0046";
Mithi.halffm_KHA      = "\u0048";
Mithi.halffm_KHR      = "\u00B2";
Mithi.halffm_KHHA     = "\u00DC";
Mithi.halffm_GA       = "\u0049";
Mithi.halffm_GR       = "\u00C0";
Mithi.halffm_GHA      = "\u004A";
Mithi.halffm_GHR      = "\u00B3";
Mithi.halffm_CA       = "\u004B";
Mithi.halffm_CR       = "\u00B4";
Mithi.halffm_JA       = "\u004D";
Mithi.halffm_JR       = "\u00B5";
Mithi.halffm_JHA      = "\u004E";
Mithi.halffm_JHR      = "\u00B6";
Mithi.halffm_NYA      = "\u0192";
Mithi.halffm_NNA      = "\u0053";
Mithi.halffm_TA       = "\u0054";
Mithi.halffm_TT       = "\u00CA";
Mithi.halffm_TR       = "\u006F";
Mithi.halffm_THA      = "\u0055";
Mithi.halffm_THR      = "\u00B7";
Mithi.halffm_DHA      = "\u0057";
Mithi.halffm_DHR      = "\u00B8";
Mithi.halffm_NA       = "\u0058";
Mithi.halffm_NN       = "\u00CF";
Mithi.halffm_NR       = "\u00B9";
Mithi.halffm_PA       = "\u0059";
Mithi.halffm_PR       = "\u0071";
Mithi.halffm_PHA      = "\u005A";
Mithi.halffm_FR       = "\u00C2";
Mithi.halffm_BA       = "\u0062";
Mithi.halffm_BR       = "\u0160";
Mithi.halffm_BHA      = "\u0063";
Mithi.halffm_BHR      = "\u0152";
Mithi.halffm_MA       = "\u0064";
Mithi.halffm_MR       = "\u0153";
Mithi.halffm_YA       = "\u0065";
Mithi.halffm_YR       = "\u00BA";
Mithi.halffm_RA       = "\u00E3";
Mithi.halffm_LA       = "\u0067";
Mithi.halffm_VA       = "\u0069";
Mithi.halffm_VR       = "\u00BB";
Mithi.halffm_SHA      = "\u006A";
Mithi.halffm_SHR      = "\u00C3";
Mithi.halffm_SSA      = "\u006B";
Mithi.halffm_SA       = "\u006C";
Mithi.halffm_HA       = "\u00AE";
Mithi.halffm_HR       = "\u00BC";
Mithi.halffm_LLA      = "\u00D5";
Mithi.halffm_KSH      = "\u00C7";
Mithi.halffm_JNY      = "\u00D2";
Mithi.halffm_SHV      = "\u00D0";




//Conjuncts

Mithi.conjct_KT       = "\u00C6";
Mithi.conjct_KR       = "\u006E";
Mithi.conjct_TTTT     = "\u00C8";
Mithi.conjct_TT       = "\u00CA\u0074";
Mithi.conjct_TT_TTH   = "\u00BD";
Mithi.conjct_TTHTTH   = "\u00BE";
Mithi.conjct_DDDD     = "\u00C9";
Mithi.conjct_D_D      = "\u00CB";
Mithi.conjct_D_DH     = "\u00CC";
Mithi.conjct_DDHDDH   = "\u00BF";
Mithi.conjct_DR       = "\u0070";
Mithi.conjct_DV       = "\u00CE";
Mithi.conjct_DY       = "\u00CD";
Mithi.conjct_NN       = "\u00CF\u0074";
Mithi.conjct_NR       = "\u00B9\u0074";
Mithi.conjct_LL       = "\u00D3";
Mithi.conjct_SHR      = "\u00C3\u0074";
Mithi.conjct_TR       = "\u006F\u0074";
Mithi.conjct_GR       = "\u00C0\u0074";
Mithi.conjct_HY       = "\u00D1";
Mithi.conjct_HM       = "\u00AF";
Mithi.conjct_SHV      = "\u00D0\u0074";
Mithi.conjct_FR       = "\u00C2\u0074";
Mithi.conjct_PR       = "\u0071\u0074";
Mithi.conjct_BR       = "\u0160\u0074";
Mithi.conjct_JNY      = "\u00D2\u0074";
Mithi.conjct_KSH      = "\u00C7\u0074";
Mithi.conjct_GHR      = "\u00B3\u0074";
Mithi.conjct_CR       = "\u00B4\u0074";
Mithi.conjct_JR       = "\u00B5\u0074";
Mithi.conjct_JHR      = "\u00B6\u0074";
Mithi.conjct_THR      = "\u00B7\u0074";
Mithi.conjct_DHR      = "\u00B8\u0074";
Mithi.conjct_YR       = "\u00BA\u0074";
Mithi.conjct_VR       = "\u00BB\u0074";
Mithi.conjct_HR       = "\u00BC\u0074";
Mithi.conjct_MR       = "\u0153\u0074";
Mithi.conjct_BHR      = "\u0152\u0074";
Mithi.conjct_RY       = "\u00D8";


//rakar

Mithi.vattu_RA      = "\u00E0";


//Combos

//Mithi.combo_DR       = "\u00C5 //To Do
Mithi.combo_RU        = "\u0072";
Mithi.combo_RUU       = "\u0073";
Mithi.combo_HR        = "\u00C4";

//Half forms of RA

Mithi.halffm_RI       = "\u0078";
Mithi.halffm_RII      = "\u007A";
Mithi.halffm_RIIM     = "\u0079";
Mithi.halffm_REE      = "\u00EB";
Mithi.halffm_RA_ANU   = "\u00AB";
Mithi.halffm_REEM     = "\u00A7";
Mithi.halffm_RAI      = "\u00ED";
Mithi.halffm_RAIM     = "\u00A8";


Mithi.misc_OM         = "\u2030";


//Devanagari Digits

Mithi.digit_ZERO     = "\u0030";
Mithi.digit_ONE      = "\u0031";
Mithi.digit_TWO      = "\u0032";
Mithi.digit_THREE    = "\u0033";
Mithi.digit_FOUR     = "\u0034";
Mithi.digit_FIVE     = "\u0035";
Mithi.digit_SIX      = "\u0036";
Mithi.digit_SEVEN    = "\u0037";
Mithi.digit_EIGHT    = "\u0038";
Mithi.digit_NINE     = "\u0039";

//Matches ASCII
Mithi.EXCLAM         = "\u0021";
Mithi.QTDOUBLE       = "\u0022";
Mithi.POUND          = "\u0023";
Mithi.DOLLAR         = "\u0024";
Mithi.PERCENT        = "\u0025";
Mithi.AMPERSAND      = "\u0026";
Mithi.QTSINGLE       = "\u0027";
Mithi.PAREN_LEFT     = "\u0028";
Mithi.PAREN_RIGHT    = "\u0029";
Mithi.ASTERISK       = "\u002A";
Mithi.PLUS           = "\u002B";
Mithi.COMMA          = "\u002C";
Mithi.PERIOD         = "\u002E";
Mithi.SLASH          = "\u002F";
Mithi.COLON          = "\u003A";
Mithi.SEMICOLON      = "\u003B";
Mithi.LESSTHAN       = "\u003C";
Mithi.EQUALS         = "\u003D";
Mithi.GREATERTHAN    = "\u003C";
Mithi.QUESTION       = "\u003F";
Mithi.ATSIGN         = "\u0040";
Mithi.SQBRKT_LEFT    = "\u005B";
Mithi.BACKSLASH      = "\u005C";
Mithi.SQBRKT_RIGHT   = "\u005D";
Mithi.CARET          = "\u005E";
Mithi.UNDERSCORE     = "\u005F";
Mithi.BACKQUOTE      = "\u0060";
Mithi.BRACE_LEFT     = "\u007B";
Mithi.PIPE           = "\u007C";
Mithi.BRACE_RIGHT    = "\u007D";
Mithi.TILDE          = "\u007E";


Mithi.misc_UNKNOWN_1   = "\u00F6";
Mithi.misc_UNKNOWN_2   = "\u00FA";
Mithi.misc_UNKNOWN_3   = "\u00F9";
Mithi.misc_UNKNOWN_4   = "\u00F2";
Mithi.misc_UNKNOWN_5   = "\u00F4";
Mithi.misc_UNKNOWN_6   = "\u00EA";
Mithi.misc_UNKNOWN_7   = "\u00FE";
Mithi.misc_UNKNOWN_8   = "\u00FD";
Mithi.misc_UNKNOWN_9   = "\u00D7";
Mithi.misc_UNKNOWN_10  = "\u00F5";
Mithi.misc_UNKNOWN_11  = "\u00F7";
Mithi.misc_UNKNOWN_12  = "\u00F0";
Mithi.misc_UNKNOWN_13  = "\u00F8";
Mithi.misc_UNKNOWN_14  = "\u00D8";
Mithi.misc_UNKNOWN_15  = "\u00FB";
Mithi.misc_UNKNOWN_16  = "\u00E1";
Mithi.misc_UNKNOWN_17  = "\u00FC";

Mithi.toPadma = new Array();

Mithi.toPadma[Mithi.anusvara]      = Padma.anusvara;
Mithi.toPadma[Mithi.candrabindu]   = Padma.candrabindu;

Mithi.toPadma[Mithi.vowel_A]       = Padma.vowel_A;
Mithi.toPadma[Mithi.vowel_AA]      = Padma.vowel_AA;
Mithi.toPadma[Mithi.vowel_I]       = Padma.vowel_I;
Mithi.toPadma[Mithi.vowel_II]      = Padma.vowel_II;
Mithi.toPadma[Mithi.vowel_U]       = Padma.vowel_U;
Mithi.toPadma[Mithi.vowel_UU]      = Padma.vowel_UU;
Mithi.toPadma[Mithi.vowel_R]       = Padma.vowel_R;
Mithi.toPadma[Mithi.vowel_EE]      = Padma.vowel_EE;
Mithi.toPadma[Mithi.vowel_AI]      = Padma.vowel_AI;
Mithi.toPadma[Mithi.vowel_O]       = Padma.vowel_O;
Mithi.toPadma[Mithi.vowel_AU]      = Padma.vowel_AU;


//consonants

Mithi.toPadma[Mithi.consnt_KA]     = Padma.consnt_KA;
Mithi.toPadma[Mithi.consnt_KHA]    = Padma.consnt_KHA;
Mithi.toPadma[Mithi.consnt_KHHA]   = Padma.consnt_KHHA;
Mithi.toPadma[Mithi.consnt_GA]     = Padma.consnt_GA;
Mithi.toPadma[Mithi.consnt_GHA]    = Padma.consnt_GHA;
Mithi.toPadma[Mithi.consnt_NGA]    = Padma.consnt_NGA;

Mithi.toPadma[Mithi.consnt_CA]     = Padma.consnt_CA;
Mithi.toPadma[Mithi.consnt_CHA]    = Padma.consnt_CHA;
Mithi.toPadma[Mithi.consnt_JA]     = Padma.consnt_JA;
Mithi.toPadma[Mithi.consnt_JHA]    = Padma.consnt_JHA;
Mithi.toPadma[Mithi.consnt_NYA]    = Padma.consnt_NYA;

Mithi.toPadma[Mithi.consnt_TTA]    = Padma.consnt_TTA;
Mithi.toPadma[Mithi.consnt_TTHA]   = Padma.consnt_TTHA;
Mithi.toPadma[Mithi.consnt_DDA]    = Padma.consnt_DDA;
Mithi.toPadma[Mithi.consnt_DDHA]   = Padma.consnt_DDHA;
Mithi.toPadma[Mithi.consnt_NNA]    = Padma.consnt_NNA;

Mithi.toPadma[Mithi.consnt_TA]     = Padma.consnt_TA;
Mithi.toPadma[Mithi.consnt_THA]    = Padma.consnt_THA;
Mithi.toPadma[Mithi.consnt_DA]     = Padma.consnt_DA;
Mithi.toPadma[Mithi.consnt_DHA]    = Padma.consnt_DHA;
Mithi.toPadma[Mithi.consnt_NA]     = Padma.consnt_NA;

Mithi.toPadma[Mithi.consnt_PA]     = Padma.consnt_PA;
Mithi.toPadma[Mithi.consnt_PHA]    = Padma.consnt_PHA;
Mithi.toPadma[Mithi.consnt_BA]     = Padma.consnt_BA;
Mithi.toPadma[Mithi.consnt_BHA]    = Padma.consnt_BHA;
Mithi.toPadma[Mithi.consnt_MA]     = Padma.consnt_MA;

Mithi.toPadma[Mithi.consnt_YA]     = Padma.consnt_YA;
Mithi.toPadma[Mithi.consnt_RA]     = Padma.consnt_RA;
Mithi.toPadma[Mithi.consnt_LA_1]   = Padma.consnt_LA;
Mithi.toPadma[Mithi.consnt_LA_2]   = Padma.consnt_LA;
Mithi.toPadma[Mithi.consnt_VA]     = Padma.consnt_VA;
Mithi.toPadma[Mithi.consnt_SHA]    = Padma.consnt_SHA;
Mithi.toPadma[Mithi.consnt_SSA]    = Padma.consnt_SSA;
Mithi.toPadma[Mithi.consnt_SA]     = Padma.consnt_SA;
Mithi.toPadma[Mithi.consnt_HA]     = Padma.consnt_HA;
Mithi.toPadma[Mithi.consnt_LLA]    = Padma.consnt_LLA;


//Gunintamulu

Mithi.toPadma[Mithi.vowelsn_AA]    = Padma.vowelsn_AA;
Mithi.toPadma[Mithi.vowelsn_I_1]   = Padma.vowelsn_I;
Mithi.toPadma[Mithi.vowelsn_I_2]   = Padma.vowelsn_I;
Mithi.toPadma[Mithi.vowelsn_II]    = Padma.vowelsn_II;
Mithi.toPadma[Mithi.vowelsn_U_1]   = Padma.vowelsn_U;
Mithi.toPadma[Mithi.vowelsn_U_2]   = Padma.vowelsn_U;
Mithi.toPadma[Mithi.vowelsn_UU_1]  = Padma.vowelsn_UU;
Mithi.toPadma[Mithi.vowelsn_UU_2]  = Padma.vowelsn_UU;
Mithi.toPadma[Mithi.vowelsn_R]     = Padma.vowelsn_R;
Mithi.toPadma[Mithi.vowelsn_EE]    = Padma.vowelsn_EE;
Mithi.toPadma[Mithi.vowelsn_AI]    = Padma.vowelsn_AI;
Mithi.toPadma[Mithi.vowelsn_CDR_E] = Padma.vowelsn_CDR_E;
Mithi.toPadma[Mithi.vowelsn_CDR_O] = Padma.vowelsn_CDR_O;
Mithi.toPadma[Mithi.vowelsn_OO]    = Padma.vowelsn_OO;
Mithi.toPadma[Mithi.vowelsn_AU]    = Padma.vowelsn_AU;

//Matra + anusvara

Mithi.toPadma[Mithi.vowelsn_IM]    = Padma.vowelsn_I + Padma.anusvara;
Mithi.toPadma[Mithi.vowelsn_IIM]   = Padma.vowelsn_II + Padma.anusvara;
Mithi.toPadma[Mithi.vowelsn_EEM]   = Padma.vowelsn_EE + Padma.anusvara;

//Halffm

Mithi.toPadma[Mithi.halffm_KA]     = Padma.halffm_KA;
Mithi.toPadma[Mithi.halffm_KHA]    = Padma.halffm_KHA;
Mithi.toPadma[Mithi.halffm_KHR]    = Padma.halffm_KHA +  Padma.halffm_RA;
Mithi.toPadma[Mithi.halffm_KHHA]   = Padma.halffm_KHHA;
Mithi.toPadma[Mithi.halffm_GA]     = Padma.halffm_GA;
Mithi.toPadma[Mithi.halffm_GR]     = Padma.halffm_GA  +  Padma.halffm_RA;
Mithi.toPadma[Mithi.halffm_GHA]    = Padma.halffm_GHA;
Mithi.toPadma[Mithi.halffm_GHR]    = Padma.halffm_GHA +  Padma.halffm_RA;
Mithi.toPadma[Mithi.halffm_CA]     = Padma.halffm_CA;
Mithi.toPadma[Mithi.halffm_JA]     = Padma.halffm_JA;
Mithi.toPadma[Mithi.halffm_JR]     = Padma.halffm_JA  +  Padma.halffm_RA;
Mithi.toPadma[Mithi.halffm_JHA]    = Padma.halffm_JHA;
Mithi.toPadma[Mithi.halffm_JHR]    = Padma.halffm_JHA +  Padma.halffm_RA;
Mithi.toPadma[Mithi.halffm_NYA]    = Padma.halffm_NYA;
Mithi.toPadma[Mithi.halffm_NNA]    = Padma.halffm_NNA;
Mithi.toPadma[Mithi.halffm_TA]     = Padma.halffm_TA;
Mithi.toPadma[Mithi.halffm_TT]     = Padma.halffm_TA  + Padma.halffm_TA;
Mithi.toPadma[Mithi.halffm_TR]     = Padma.halffm_TR;
Mithi.toPadma[Mithi.halffm_THA]    = Padma.halffm_THA;
Mithi.toPadma[Mithi.halffm_THR]    = Padma.halffm_THA +  Padma.halffm_RA;
Mithi.toPadma[Mithi.halffm_DHA]    = Padma.halffm_DHA;
Mithi.toPadma[Mithi.halffm_DHR]    = Padma.halffm_DHA +  Padma.halffm_RA;
Mithi.toPadma[Mithi.halffm_NA]     = Padma.halffm_NA;
Mithi.toPadma[Mithi.halffm_NN]     = Padma.halffm_NA  +  Padma.halffm_NA;
Mithi.toPadma[Mithi.halffm_NR]     = Padma.halffm_NA  +  Padma.halffm_RA;
Mithi.toPadma[Mithi.halffm_PA]     = Padma.halffm_PA;
Mithi.toPadma[Mithi.halffm_PR]     = Padma.halffm_PA  +  Padma.halffm_RA;
Mithi.toPadma[Mithi.halffm_PHA]    = Padma.halffm_PHA;
Mithi.toPadma[Mithi.halffm_FR]     = Padma.halffm_FA  +  Padma.halffm_RA;
Mithi.toPadma[Mithi.halffm_BA]     = Padma.halffm_BA;
Mithi.toPadma[Mithi.halffm_BR]     = Padma.halffm_BA  +  Padma.halffm_RA;
Mithi.toPadma[Mithi.halffm_BHA]    = Padma.halffm_BHA;
Mithi.toPadma[Mithi.halffm_BHR]    = Padma.halffm_BHA +  Padma.halffm_RA;
Mithi.toPadma[Mithi.halffm_MA]     = Padma.halffm_MA;
Mithi.toPadma[Mithi.halffm_MR]     = Padma.halffm_MA  +  Padma.halffm_RA;
Mithi.toPadma[Mithi.halffm_YA]     = Padma.halffm_YA;
Mithi.toPadma[Mithi.halffm_YR]     = Padma.halffm_YA  +  Padma.halffm_RA;
Mithi.toPadma[Mithi.halffm_RA]     = Padma.halffm_RA;
Mithi.toPadma[Mithi.halffm_LA]     = Padma.halffm_LA;
Mithi.toPadma[Mithi.halffm_VA]     = Padma.halffm_VA;
Mithi.toPadma[Mithi.halffm_VR]     = Padma.halffm_VA  +  Padma.halffm_RA;
Mithi.toPadma[Mithi.halffm_SHA]    = Padma.halffm_SHA;
Mithi.toPadma[Mithi.halffm_SHR]    = Padma.halffm_SHA +  Padma.halffm_RA;
Mithi.toPadma[Mithi.halffm_SSA]    = Padma.halffm_SSA;
Mithi.toPadma[Mithi.halffm_SA]     = Padma.halffm_SA;
Mithi.toPadma[Mithi.halffm_HA]     = Padma.halffm_HA;
Mithi.toPadma[Mithi.halffm_HR]     = Padma.halffm_HA  +  Padma.halffm_RA;
Mithi.toPadma[Mithi.halffm_LLA]    = Padma.halffm_LLA;
Mithi.toPadma[Mithi.halffm_KSH]    = Padma.halffm_KA  + Padma.halffm_SSA;
//Mithi.toPadma[Mithi.halffm_JNY]    = Padma.halffm_JA  + Padma.halfm_NYA;
Mithi.toPadma[Mithi.halffm_SHV]    = Padma.halffm_SHA +  Padma.halffm_VA;


//Conjuncts

Mithi.toPadma[Mithi.conjct_KT]     = Padma.consnt_KA + Padma.vattu_TA;
Mithi.toPadma[Mithi.conjct_KR]     = Padma.consnt_KA + Padma.vattu_RA;
Mithi.toPadma[Mithi.conjct_TTTT]   = Padma.consnt_TTA + Padma.vattu_TTA;
Mithi.toPadma[Mithi.conjct_TT]     = Padma.consnt_TA + Padma.vattu_TA;
Mithi.toPadma[Mithi.conjct_TT_TTH] = Padma.consnt_TTA + Padma.vattu_TTHA;
Mithi.toPadma[Mithi.conjct_TTHTTH] = Padma.consnt_TTHA + Padma.vattu_TTHA;
Mithi.toPadma[Mithi.conjct_DDDD]   = Padma.consnt_DDA + Padma.vattu_DDA;
Mithi.toPadma[Mithi.conjct_D_D]    = Padma.consnt_DA + Padma.vattu_DA;
Mithi.toPadma[Mithi.conjct_D_DH]   = Padma.consnt_DA + Padma.vattu_DHA;
Mithi.toPadma[Mithi.conjct_DDHDDH] = Padma.consnt_DDHA + Padma.vattu_DDHA;
Mithi.toPadma[Mithi.conjct_DR]     = Padma.consnt_DA + Padma.vattu_RA;
Mithi.toPadma[Mithi.conjct_DV]     = Padma.consnt_DA + Padma.vattu_VA;
Mithi.toPadma[Mithi.conjct_DY]     = Padma.consnt_DA + Padma.vattu_YA;
Mithi.toPadma[Mithi.conjct_NN]     = Padma.consnt_NA + Padma.vattu_NA;
Mithi.toPadma[Mithi.conjct_NR]     = Padma.consnt_NA + Padma.vattu_RA;
Mithi.toPadma[Mithi.conjct_LL]     = Padma.consnt_LA + Padma.vattu_LA;
Mithi.toPadma[Mithi.conjct_SHR]    = Padma.consnt_SHA + Padma.vattu_RA;
Mithi.toPadma[Mithi.conjct_TR]     = Padma.consnt_TA + Padma.vattu_RA;
Mithi.toPadma[Mithi.conjct_GR]     = Padma.consnt_GA + Padma.vattu_RA;
Mithi.toPadma[Mithi.conjct_HY]     = Padma.consnt_HA + Padma.vattu_YA;
Mithi.toPadma[Mithi.conjct_HM]     = Padma.consnt_HA + Padma.vattu_MA;
Mithi.toPadma[Mithi.conjct_SHV]    = Padma.consnt_SHA + Padma.vattu_VA;
//Mithi.toPadma[Mithi.conjct_HL]     = Padma.consnt_HA + Padma.vattu_LA;
Mithi.toPadma[Mithi.conjct_FR]     = Padma.consnt_FA + Padma.vattu_RA;
Mithi.toPadma[Mithi.conjct_PR]     = Padma.consnt_PA + Padma.vattu_RA ;
Mithi.toPadma[Mithi.conjct_BR]     = Padma.consnt_BA + Padma.vattu_RA;
Mithi.toPadma[Mithi.conjct_JNY]    = Padma.consnt_JA + Padma.vattu_NYA ;
Mithi.toPadma[Mithi.conjct_KSH]    = Padma.consnt_KA + Padma.vattu_SSA;
Mithi.toPadma[Mithi.conjct_GHR]    = Padma.consnt_GHA + Padma.vattu_RA;
Mithi.toPadma[Mithi.conjct_CR]     = Padma.consnt_CA + Padma.vattu_RA;
Mithi.toPadma[Mithi.conjct_JR]     = Padma.consnt_JA + Padma.vattu_RA;
Mithi.toPadma[Mithi.conjct_JHR]    = Padma.consnt_JHA + Padma.vattu_RA;
Mithi.toPadma[Mithi.conjct_THR]    = Padma.consnt_THA + Padma.vattu_RA;
Mithi.toPadma[Mithi.conjct_DHR]    = Padma.consnt_DHA + Padma.vattu_RA;
Mithi.toPadma[Mithi.conjct_YR]     = Padma.consnt_YA + Padma.vattu_RA;
Mithi.toPadma[Mithi.conjct_VR]     = Padma.consnt_VA + Padma.vattu_RA;
Mithi.toPadma[Mithi.conjct_HR]     = Padma.consnt_HA + Padma.vattu_RA;
Mithi.toPadma[Mithi.conjct_MR]     = Padma.consnt_MA + Padma.vattu_RA;
Mithi.toPadma[Mithi.conjct_BHR]    = Padma.consnt_BHA + Padma.vattu_RA;
Mithi.toPadma[Mithi.conjct_RY]     = Padma.consnt_RA + Padma.vattu_YA;





Mithi.toPadma[Mithi.vattu_RA]      = Padma.vattu_RA;

//Combo

Mithi.toPadma[Mithi.combo_RU]      = Padma.consnt_RA + Padma.vowelsn_U;
Mithi.toPadma[Mithi.combo_RUU]     = Padma.consnt_RA + Padma.vowelsn_UU;
Mithi.toPadma[Mithi.combo_HR]      = Padma.consnt_HA + Padma.vowelsn_R;

//half form of RA

Mithi.toPadma[Mithi.halffm_RI]     = Padma.halffm_RA + Padma.vowelsn_I;
Mithi.toPadma[Mithi.halffm_RII]    = Padma.halffm_RA + Padma.vowelsn_II;
Mithi.toPadma[Mithi.halffm_RIIM]   = Padma.halffm_RA + Padma.vowelsn_II + Padma.anusvara;
Mithi.toPadma[Mithi.halffm_REE]    = Padma.halffm_RA + Padma.vowelsn_EE 
Mithi.toPadma[Mithi.halffm_RA_ANU] = Padma.halffm_RA + Padma.anusvara;
Mithi.toPadma[Mithi.halffm_REEM]   = Padma.halffm_RA + Padma.vowelsn_EE + Padma.anusvara;
Mithi.toPadma[Mithi.halffm_RAI]    = Padma.halffm_RA + Padma.vowelsn_AI;
Mithi.toPadma[Mithi.halffm_RAIM]   = Padma.halffm_RA + Padma.vowelsn_AI + Padma.anusvara;


Mithi.toPadma[Mithi.misc_OM]       = Padma.om;

//Digits

Mithi.toPadma[Mithi.digit_ZERO]    = Padma.digit_ZERO;
Mithi.toPadma[Mithi.digit_ONE]     = Padma.digit_ONE;
Mithi.toPadma[Mithi.digit_TWO]     = Padma.digit_TWO;
Mithi.toPadma[Mithi.digit_THREE]   = Padma.digit_THREE;
Mithi.toPadma[Mithi.digit_FOUR]    = Padma.digit_FOUR;
Mithi.toPadma[Mithi.digit_FIVE]    = Padma.digit_FIVE;
Mithi.toPadma[Mithi.digit_SIX]     = Padma.digit_SIX;
Mithi.toPadma[Mithi.digit_SEVEN]   = Padma.digit_SEVEN;
Mithi.toPadma[Mithi.digit_EIGHT]   = Padma.digit_EIGHT;
Mithi.toPadma[Mithi.digit_NINE]    = Padma.digit_NINE;


Mithi.prefixList = new Array();

Mithi.prefixList[Mithi.vowelsn_I_1]    = true;
Mithi.prefixList[Mithi.vowelsn_I_2]    = true;
Mithi.prefixList[Mithi.vowelsn_IM]     = true;



Mithi.suffixList = new Array();

Mithi.suffixList[Mithi.halffm_RA]      = true;
Mithi.suffixList[Mithi.vowelsn_II]     = true;
Mithi.suffixList[Mithi.halffm_RII]     = true;
Mithi.suffixList[Mithi.halffm_RIIM]    = true;
Mithi.suffixList[Mithi.halffm_REE]     = true;
Mithi.suffixList[Mithi.halffm_REEM]    = true;
Mithi.suffixList[Mithi.halffm_RAI]     = true;
Mithi.suffixList[Mithi.halffm_RAIM]    = true;
Mithi.suffixList[Mithi.halffm_RA_ANU]  = true;


Mithi.redundantList = new Array();

Mithi.redundantList[Mithi.misc_UNKNOWN_1]  = true;
Mithi.redundantList[Mithi.misc_UNKNOWN_2]  = true;
Mithi.redundantList[Mithi.misc_UNKNOWN_3]  = true;
Mithi.redundantList[Mithi.misc_UNKNOWN_4]  = true;
Mithi.redundantList[Mithi.misc_UNKNOWN_5]  = true;
Mithi.redundantList[Mithi.misc_UNKNOWN_6]  = true;
Mithi.redundantList[Mithi.misc_UNKNOWN_7]  = true;
Mithi.redundantList[Mithi.misc_UNKNOWN_8]  = true;
Mithi.redundantList[Mithi.misc_UNKNOWN_9]  = true;
Mithi.redundantList[Mithi.misc_UNKNOWN_10] = true;
Mithi.redundantList[Mithi.misc_UNKNOWN_11] = true;
Mithi.redundantList[Mithi.misc_UNKNOWN_12] = true;
Mithi.redundantList[Mithi.misc_UNKNOWN_13] = true;
Mithi.redundantList[Mithi.misc_UNKNOWN_14] = true;
Mithi.redundantList[Mithi.misc_UNKNOWN_15] = true;
Mithi.redundantList[Mithi.misc_UNKNOWN_16] = true;
Mithi.redundantList[Mithi.misc_UNKNOWN_17] = true;

Mithi.overloadList = new Array();

Mithi.overloadList[Mithi.vowel_A]      = true;
Mithi.overloadList[Mithi.vowel_AA]     = true;
Mithi.overloadList[Mithi.vowel_EE]     = true;
Mithi.overloadList[Mithi.vowel_I]      = true;
Mithi.overloadList[Mithi.halffm_KHA]   = true;
Mithi.overloadList[Mithi.halffm_GA]    = true;
Mithi.overloadList[Mithi.halffm_GHA]   = true
Mithi.overloadList[Mithi.halffm_CA]    = true
Mithi.overloadList[Mithi.halffm_JA]    = true;
Mithi.overloadList[Mithi.halffm_JHA]   = true;
Mithi.overloadList[Mithi.halffm_NNA]   = true;
Mithi.overloadList[Mithi.halffm_TA]    = true;
Mithi.overloadList[Mithi.halffm_THA]   = true;
Mithi.overloadList[Mithi.halffm_DHA]   = true;
Mithi.overloadList[Mithi.halffm_NA]    = true
Mithi.overloadList[Mithi.halffm_PA]    = true;
Mithi.overloadList[Mithi.halffm_BA]    = true;
Mithi.overloadList[Mithi.halffm_BHA]   = true;
Mithi.overloadList[Mithi.halffm_MA]    = true;
Mithi.overloadList[Mithi.halffm_YA]    = true;
Mithi.overloadList[Mithi.halffm_VA]    = true;
Mithi.overloadList[Mithi.halffm_SHA]   = true;
Mithi.overloadList[Mithi.halffm_SSA]   = true;
Mithi.overloadList[Mithi.halffm_SA]    = true;
Mithi.overloadList[Mithi.halffm_NN]    = true;
Mithi.overloadList[Mithi.halffm_KSH]   = true;
Mithi.overloadList[Mithi.halffm_JNY]   = true;
Mithi.overloadList[Mithi.halffm_PR]    = true;
Mithi.overloadList[Mithi.halffm_TR]    = true;
Mithi.overloadList[Mithi.halffm_BR]    = true;
Mithi.overloadList[Mithi.halffm_GR]    = true;
Mithi.overloadList[Mithi.halffm_SHR]   = true;
Mithi.overloadList[Mithi.halffm_KHR]   = true;
Mithi.overloadList[Mithi.halffm_GHR]   = true; 
Mithi.overloadList[Mithi.halffm_CR]    = true; 
Mithi.overloadList[Mithi.halffm_JR]    = true; 
Mithi.overloadList[Mithi.halffm_JHR]   = true; 
Mithi.overloadList[Mithi.halffm_THR]   = true; 
Mithi.overloadList[Mithi.halffm_DHR]   = true; 
Mithi.overloadList[Mithi.halffm_NR]    = true; 
Mithi.overloadList[Mithi.halffm_YR]    = true; 
Mithi.overloadList[Mithi.halffm_VR]    = true; 
Mithi.overloadList[Mithi.halffm_HR]    = true; 
Mithi.overloadList[Mithi.halffm_TT]    = true; 
Mithi.overloadList[Mithi.halffm_MR]    = true; 
Mithi.overloadList[Mithi.halffm_BHR]   = true; 
Mithi.overloadList[Mithi.halffm_SHV]   = true; 
Mithi.overloadList[Mithi.halffm_KHHA]  = true; 

