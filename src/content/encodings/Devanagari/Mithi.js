// $Id: Mithi.js,v 1.1 2005/11/05 16:34:32 vnagarjuna Exp $ -->

//Copyright 2005 Nagarjuna Venna <vnagarjuna@yahoo.com>

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
Mithi.fontFace     = "Marmith0";
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
//Mithi.avagraha       = "\u0040";
//Mithi.anusvara_1     = "\u00A7";
//Mithi.anusvara_2     = "\u00A8";
//Mithi.candrabindu_1  = "\u00B0"; //what is this?
//Mithi.candrabindu_2  = "\u00B1"; 
//Mithi.virama_1       = "\u003C";
//Mithi.virama_2       = "\u0152";
//Mithi.virama_3       = "\u00AB";
//Mithi.virama_4       = "\u00B2";
//Mithi.virama_5       = "\u00B3";

//Vowels
Mithi.vowel_A        = "\u0041";
//Mithi.vowel_AA       = "\u0041\u006D";
Mithi.vowel_I        = "\u0042";
//Mithi.vowel_II       = "\u0042\u00A9";
Mithi.vowel_U        = "\u0043";
Mithi.vowel_UU       = "\u0044";
//Mithi.vowel_R        = "\u0046";
//Mithi.vowel_RR       = "\u0047";
Mithi.vowel_EE       = "\u0045";
//Mithi.vowel_AI       = "\u0045\u006F";
//Mithi.vowel_O        = "\u0041\u006D\u006F";
//Mithi.vowel_OO       = "\u0041\u006D\u00A1";
//Mithi.vowel_AU       = "\u0041\u006D\u00A1";

//Consonants
Mithi.consnt_KA      = "\u0047";
//Mithi.consnt_KHA     = "\u0049";
//Mithi.consnt_GA      = "\u004A";
//Mithi.consnt_GHA     = "\u004B";
Mithi.consnt_NGA     = "\u201A";

//Mithi.consnt_CA      = "\u004D";
Mithi.consnt_CHA     = "\u004C";
//Mithi.consnt_JA      = "\u004F";
//Mithi.consnt_JHA     = "\u0050";
//////Mithi.consnt_NYA     = "\u2013";

Mithi.consnt_TTA     = "\u004F";
Mithi.consnt_TTHA    = "\u0050";
Mithi.consnt_DDA     = "\u0051";
Mithi.consnt_DDHA    = "\u0052";
//Mithi.consnt_NNA     = "\u0055";

//Mithi.consnt_TA      = "\u0056";
//Mithi.consnt_THA     = "\u0057";
Mithi.consnt_DA      = "\u0056";
//Mithi.consnt_DHA     = "\u0059";
//Mithi.consnt_NA      = "\u005A";

//Mithi.consnt_PA      = "\u006E";
Mithi.consnt_PHA_1   = "\u0061";
//Mithi.consnt_PHA_2   = "\u2019";
//Mithi.consnt_BA      = "\u007E";
//Mithi.consnt_BHA     = "\u005E";
Mithi.consnt_MA_1    = "\u0064\u0074";
//Mithi.consnt_MA_2    = "\u2018";

//Mithi.consnt_YA      = "\u0060";
Mithi.consnt_RA      = "\u0066";
//Mithi.consnt_LA_1    = "\u0062";
//Mithi.consnt_LA_2    = "\u0063";
//Mithi.consnt_VA      = "\u0064";
//Mithi.consnt_SHA     = "\u0065";
//Mithi.consnt_SSA     = "\u0066";
//Mithi.consnt_SA      = "\u0067";
Mithi.consnt_HA      = "\u006D";
Mithi.consnt_LLA     = "\u0068";
//Mithi.conjct_KSH     = "\u006A";
//Mithi.conjct_JNY     = "\u006B";

//Gunintamulu
Mithi.vowelsn_AA     = "\u0074";
Mithi.vowelsn_I_1    = "\u0075";
//Mithi.vowelsn_I_2    = "\u0070";
//Mithi.vowelsn_I_3    = "\u007B";
Mithi.vowelsn_II_1   = "\u0076";
//Mithi.vowelsn_II_2   = "\u0073";
//Mithi.vowelsn_U_1    = "\u0077";
//Mithi.vowelsn_U_2    = "\u0078";
//Mithi.vowelsn_U_3    = "\u00FE";
//Mithi.vowelsn_UU_1   = "\u0079";
//Mithi.vowelsn_UU_2   = "\u007A";
//Mithi.vowelsn_UU_3   = "\u00FF";
//Mithi.vowelsn_R      = "\u00A5";
//Mithi.vowelsn_RR     = "\u00A6";
//Mithi.vowelsn_EE     = "\u006F";
//Mithi.vowelsn_AI     = "\u00A1";

//Matra + anusvara
Mithi.vowelsn_IM     = "\u0077";
Mithi.vowelsn_IIM    = "\u0079";
//Mithi.vowelsn_EEM    = "\u007C";
//Mithi.vowelsn_AIM    = "\u00A2";

//Half Forms
Mithi.halffm_KA      = "\u0046";
Mithi.halffm_KHA     = "\u0048";
Mithi.halffm_GA      = "\u0049";
Mithi.halffm_GHA     = "\u004A";
Mithi.halffm_CA      = "\u004B";
Mithi.halffm_JA      = "\u004D";
Mithi.halffm_JHA     = "\u004E";
Mithi.halffm_NYA     = "\u0192";
Mithi.halffm_NNA     = "\u0053";
Mithi.halffm_TA      = "\u0054";
//Mithi.halffm_TT      = "\u00CE";
Mithi.halffm_TR      = "\u006F";
Mithi.halffm_THA     = "\u0055";
Mithi.halffm_DHA     = "\u0057";
Mithi.halffm_NA      = "\u0058";
Mithi.halffm_PA      = "\u0059";
Mithi.halffm_PHA     = "\u005A";
Mithi.halffm_BA      = "\u0062";
Mithi.halffm_BHA     = "\u0063";
Mithi.halffm_MA      = "\u0064";
Mithi.halffm_YA      = "\u0065";
//Mithi.halffm_RA      = "\u00A9";
Mithi.halffm_LA      = "\u0067";
Mithi.halffm_VA      = "\u0069";
Mithi.halffm_SHA_1   = "\u006A";
//Mithi.halffm_SHA_2   = "\u00FB";
Mithi.halffm_SSA     = "\u006B";
Mithi.halffm_SA      = "\u006C";
//Mithi.halffm_HA      = "\u00F4";
//Mithi.halffm_LLA     = "\u00F9";
//Mithi.halffm_RRA     = "\u00E8";
//Mithi.halffm_KSH     = "\u00FA";

//Conjuncts
//Mithi.conjct_KK      = "\u00B8";
Mithi.conjct_KR      = "\u006E";
//Mithi.conjct_KV      = "\u00B9";
//Mithi.conjct_KT      = "\u00BA";
//Mithi.conjct_GN      = "\u00BE";
//Mithi.conjct_NGG     = "\u201C";
//Mithi.conjct_NGGH    = "\u201D";
//Mithi.conjct_NGKSH   = "\u00AC";
//Mithi.conjct_NGM     = "\u00B6";
//Mithi.conjct_CC      = "\u0192";
//Mithi.conjct_JJ      = "\u201A";
//Mithi.conjct_TTTT    = "\u00C5";
//Mithi.conjct_TT_TTH  = "\u00C6";
//Mithi.conjct_TTHTTH  = "\u00C7";
//Mithi.conjct_DDDD    = "\u00C8";
//Mithi.conjct_DD_DDH  = "\u2013";
//Mithi.conjct_DDHDDH  = "\u00C9";
//Mithi.conjct_TT      = "\u00CE\u006D";
//Mithi.conjct_TR      = "\u00CC";
//Mithi.conjct_DG      = "\u00D2";
//Mithi.conjct_DGH     = "\u00D3";
//Mithi.conjct_DD      = "\u00D4";
//Mithi.conjct_D_DH    = "\u00D5";
//Mithi.conjct_DN      = "\u00D6";
//Mithi.conjct_DB      = "\u00D7";
//Mithi.conjct_DBH     = "\u00D8";
//Mithi.conjct_DM      = "\u00D9";
//Mithi.conjct_DY      = "\u00DA";
Mithi.conjct_DR      = "\u0070";
//Mithi.conjct_DV      = "\u00DB";
//Mithi.conjct_NN      = "\u00DE";
//Mithi.conjct_PR      = "\u00E0";
//Mithi.conjct_PT      = "\u00E1";
//Mithi.conjct_LL      = "\u201E";
//Mithi.conjct_SHC     = "\u00FC";
//Mithi.conjct_SHN     = "\u00FD";
//Mithi.conjct_SHR     = "\u006C";
//Mithi.conjct_SHV     = "\u0153";
//Mithi.conjct_SSTT    = "\u00EF";
//Mithi.conjct_SSTTH   = "\u00F0";
//Mithi.conjct_STR     = "\u00F3";
//Mithi.conjct_HNN     = "\u2020";
//Mithi.conjct_HN      = "\u2022";
//Mithi.conjct_HM      = "\u00F7";
//Mithi.conjct_HY      = "\u00F8";
//Mithi.conjct_HL      = "\u2021";
//Mithi.conjct_HV      = "\u02C6";

//Combos
//Mithi.combo_DR       = "\u00D1";
Mithi.combo_RU       = "\u0072";
Mithi.combo_RUU      = "\u0073";
//Mithi.combo_HR       = "\u00F6";

//Half forms of RA
Mithi.halffm_RI      = "\u0078";
Mithi.halffm_RII     = "\u007B";
//Mithi.halffm_RIIM    = "\u0076";
//Mithi.halffm_REE     = "\u007D";
//Mithi.halffm_REEM    = "\u005D";
//Mithi.halffm_RAI     = "\u00A3";
//Mithi.halffm_RAIM    = "\u00A4";
//Mithi.halffm_RA_ANU  = "\u00AA";

//Mithi.vattu_YA       = "\u00E7";
//Mithi.vattu_RA_1     = "\u2014";
//Mithi.vattu_RA_2     = "\u00AB";
//Mithi.vattu_RA_3     = "\u00B4";
//Mithi.vattu_RA_U     = "\u00AE";
//Mithi.vattu_RA_UU    = "\u00AF";

Mithi.halffm_PR      = "\u0071";  //TODO

//syllable breaks
//Mithi.syllbr_KHA     = "\u00BC";
//Mithi.syllbr_JHA     = "\u00C3";

Mithi.misc_OM        = "\u2030";

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

//Does not match ASCII
//Mithi.extra_QTSINGLE = "\u0022";
//Mithi.MULTIPLY       = "\u0081";
//Mithi.DIVIDE         = "\u008F";
//Mithi.extra_COLON    = "\u2026";

//Mithi.misc_UNKNOWN_1 = "\u0024";
//Mithi.misc_UNKNOWN_2 = "\u003E";

Mithi.toPadma = new Array();

Mithi.toPadma[Mithi.avagraha]      = Padma.avagraha;
Mithi.toPadma[Mithi.anusvara_1]    = Padma.anusvara;
Mithi.toPadma[Mithi.anusvara_2]    = Padma.anusvara;
Mithi.toPadma[Mithi.candrabindu_1] = Padma.candrabindu;
Mithi.toPadma[Mithi.candrabindu_2] = Padma.candrabindu;
Mithi.toPadma[Mithi.virama_1]      = Padma.syllbreak;
Mithi.toPadma[Mithi.virama_2]      = Padma.syllbreak;
Mithi.toPadma[Mithi.virama_3]      = Padma.syllbreak;
Mithi.toPadma[Mithi.virama_4]      = Padma.syllbreak;
Mithi.toPadma[Mithi.virama_5]      = Padma.syllbreak;
//Mithi.toPadma[Mithi.visarga]       = Mithi.visarga;

Mithi.toPadma[Mithi.vowel_A]  = Padma.vowel_A;
Mithi.toPadma[Mithi.vowel_AA] = Padma.vowel_AA;
Mithi.toPadma[Mithi.vowel_I]  = Padma.vowel_I;
Mithi.toPadma[Mithi.vowel_II] = Padma.vowel_II;
Mithi.toPadma[Mithi.vowel_U]  = Padma.vowel_U;
Mithi.toPadma[Mithi.vowel_UU] = Padma.vowel_UU;
Mithi.toPadma[Mithi.vowel_R]  = Padma.vowel_R;
Mithi.toPadma[Mithi.vowel_RR] = Padma.vowel_RR;
Mithi.toPadma[Mithi.vowel_EE] = Padma.vowel_EE;
Mithi.toPadma[Mithi.vowel_AI] = Padma.vowel_AI;
Mithi.toPadma[Mithi.vowel_O]  = Padma.vowel_O;
Mithi.toPadma[Mithi.vowel_OO] = Padma.vowel_OO;
Mithi.toPadma[Mithi.vowel_AU] = Padma.vowel_AU;

Mithi.toPadma[Mithi.consnt_KA]  = Padma.consnt_KA;
Mithi.toPadma[Mithi.consnt_KHA] = Padma.consnt_KHA;
Mithi.toPadma[Mithi.consnt_GA]  = Padma.consnt_GA;
Mithi.toPadma[Mithi.consnt_GHA] = Padma.consnt_GHA;
Mithi.toPadma[Mithi.consnt_NGA] = Padma.consnt_NGA;

Mithi.toPadma[Mithi.consnt_CA]  = Padma.consnt_CA;
Mithi.toPadma[Mithi.consnt_CHA] = Padma.consnt_CHA;
Mithi.toPadma[Mithi.consnt_JA]  = Padma.consnt_JA;
Mithi.toPadma[Mithi.consnt_JHA] = Padma.consnt_JHA;
//Mithi.toPadma[Mithi.consnt_NYA] = Padma.consnt_NYA;

Mithi.toPadma[Mithi.consnt_TTA] = Padma.consnt_TTA;
Mithi.toPadma[Mithi.consnt_TTHA] = Padma.consnt_TTHA;
Mithi.toPadma[Mithi.consnt_DDA] = Padma.consnt_DDA;
Mithi.toPadma[Mithi.consnt_DDHA] = Padma.consnt_DDHA;
Mithi.toPadma[Mithi.consnt_NNA] = Padma.consnt_NNA;

Mithi.toPadma[Mithi.consnt_TA]  = Padma.consnt_TA;
Mithi.toPadma[Mithi.consnt_THA] = Padma.consnt_THA;
Mithi.toPadma[Mithi.consnt_DA]  = Padma.consnt_DA;
Mithi.toPadma[Mithi.consnt_DHA] = Padma.consnt_DHA;
Mithi.toPadma[Mithi.consnt_NA]  = Padma.consnt_NA;

Mithi.toPadma[Mithi.consnt_PA]   = Padma.consnt_PA;
Mithi.toPadma[Mithi.consnt_PHA_1]= Padma.consnt_PHA;
Mithi.toPadma[Mithi.consnt_PHA_2]= Padma.consnt_PHA;
Mithi.toPadma[Mithi.consnt_BA]   = Padma.consnt_BA;
Mithi.toPadma[Mithi.consnt_BHA]  = Padma.consnt_BHA;
Mithi.toPadma[Mithi.consnt_MA_1] = Padma.consnt_MA;
Mithi.toPadma[Mithi.consnt_MA_2] = Padma.consnt_MA;

Mithi.toPadma[Mithi.consnt_YA]   = Padma.consnt_YA;
Mithi.toPadma[Mithi.consnt_RA]   = Padma.consnt_RA;
Mithi.toPadma[Mithi.consnt_LA_1] = Padma.consnt_LA;
Mithi.toPadma[Mithi.consnt_LA_2] = Padma.consnt_LA;
Mithi.toPadma[Mithi.consnt_VA]   = Padma.consnt_VA;
Mithi.toPadma[Mithi.consnt_SHA]  = Padma.consnt_SHA;
Mithi.toPadma[Mithi.consnt_SSA]  = Padma.consnt_SSA;
Mithi.toPadma[Mithi.consnt_SA]   = Padma.consnt_SA;
Mithi.toPadma[Mithi.consnt_HA] = Padma.consnt_HA;
Mithi.toPadma[Mithi.consnt_LLA]  = Padma.consnt_LLA;
Mithi.toPadma[Mithi.conjct_KSH]  = Padma.conjct_KSH;
Mithi.toPadma[Mithi.conjct_JNY]  = Padma.conjct_JNY;

//Gunintamulu
Mithi.toPadma[Mithi.vowelsn_AA]   = Padma.vowelsn_AA;
Mithi.toPadma[Mithi.vowelsn_I_1]  = Padma.vowelsn_I;
Mithi.toPadma[Mithi.vowelsn_I_2]  = Padma.vowelsn_I;
Mithi.toPadma[Mithi.vowelsn_I_3]  = Padma.vowelsn_I;
Mithi.toPadma[Mithi.vowelsn_II_1] = Padma.vowelsn_II;
Mithi.toPadma[Mithi.vowelsn_II_2] = Padma.vowelsn_II;
Mithi.toPadma[Mithi.vowelsn_U_1]  = Padma.vowelsn_U;
Mithi.toPadma[Mithi.vowelsn_U_2]  = Padma.vowelsn_U;
Mithi.toPadma[Mithi.vowelsn_U_3]  = Padma.vowelsn_U;
Mithi.toPadma[Mithi.vowelsn_UU_1] = Padma.vowelsn_UU;
Mithi.toPadma[Mithi.vowelsn_UU_2] = Padma.vowelsn_UU;
Mithi.toPadma[Mithi.vowelsn_UU_3] = Padma.vowelsn_UU;
Mithi.toPadma[Mithi.vowelsn_R]   = Padma.vowelsn_R;
Mithi.toPadma[Mithi.vowelsn_RR]  = Padma.vowelsn_RR;
Mithi.toPadma[Mithi.vowelsn_EE]   = Padma.vowelsn_EE;
Mithi.toPadma[Mithi.vowelsn_AI]  = Padma.vowelsn_AI;

//Matra + anusvara
Mithi.toPadma[Mithi.vowelsn_IM]   = Padma.vowelsn_I + Padma.anusvara;
Mithi.toPadma[Mithi.vowelsn_IIM]  = Padma.vowelsn_II + Padma.anusvara;
Mithi.toPadma[Mithi.vowelsn_EEM]  = Padma.vowelsn_EE + Padma.anusvara;
Mithi.toPadma[Mithi.vowelsn_AIM]  = Padma.vowelsn_AI + Padma.anusvara;

//Halffm
Mithi.toPadma[Mithi.halffm_KA]     = Padma.halffm_KA;
Mithi.toPadma[Mithi.halffm_KHA]    = Padma.halffm_KHA;
Mithi.toPadma[Mithi.halffm_GA]     = Padma.halffm_GA;
Mithi.toPadma[Mithi.halffm_GHA]    = Padma.halffm_GHA;
Mithi.toPadma[Mithi.halffm_CA]     = Padma.halffm_CA;
Mithi.toPadma[Mithi.halffm_JA]     = Padma.halffm_JA;
Mithi.toPadma[Mithi.halffm_JHA]    = Padma.halffm_JHA;
Mithi.toPadma[Mithi.halffm_NYA]    = Padma.halffm_NYA;
Mithi.toPadma[Mithi.halffm_NNA]    = Padma.halffm_NNA;
Mithi.toPadma[Mithi.halffm_TA]     = Padma.halffm_TA;
Mithi.toPadma[Mithi.halffm_TT]     = Padma.halffm_TA + Padma.halffm_TA;
Mithi.toPadma[Mithi.halffm_TR]     = Padma.halffm_TA + Padma.halffm_RA;
Mithi.toPadma[Mithi.halffm_THA]    = Padma.halffm_THA;
Mithi.toPadma[Mithi.halffm_DHA]    = Padma.halffm_DHA;
Mithi.toPadma[Mithi.halffm_NA]     = Padma.halffm_NA;
Mithi.toPadma[Mithi.halffm_PA]     = Padma.halffm_PA;
Mithi.toPadma[Mithi.halffm_PHA]    = Padma.halffm_PHA;
Mithi.toPadma[Mithi.halffm_BA]     = Padma.halffm_BA;
Mithi.toPadma[Mithi.halffm_BHA]    = Padma.halffm_BHA;
Mithi.toPadma[Mithi.halffm_MA]     = Padma.halffm_MA;
Mithi.toPadma[Mithi.halffm_YA]     = Padma.halffm_YA;
Mithi.toPadma[Mithi.halffm_RA]     = Padma.halffm_RA;
Mithi.toPadma[Mithi.halffm_LA]     = Padma.halffm_LA;
Mithi.toPadma[Mithi.halffm_VA]     = Padma.halffm_VA;
Mithi.toPadma[Mithi.halffm_SHA_1]  = Padma.halffm_SHA;
Mithi.toPadma[Mithi.halffm_SHA_2]  = Padma.halffm_SHA;
Mithi.toPadma[Mithi.halffm_SSA]    = Padma.halffm_SSA;
Mithi.toPadma[Mithi.halffm_SA]     = Padma.halffm_SA;
Mithi.toPadma[Mithi.halffm_HA]     = Padma.halffm_HA;
Mithi.toPadma[Mithi.halffm_LLA]    = Padma.halffm_LLA;
Mithi.toPadma[Mithi.halffm_RRA]    = Padma.halffm_RRA;
Mithi.toPadma[Mithi.halffm_KSH]    = Padma.halffm_KA + Padma.halffm_SSA;

//Conjuncts
Mithi.toPadma[Mithi.conjct_KK]     = Padma.consnt_KA + Padma.vattu_KA;
Mithi.toPadma[Mithi.conjct_KR]     = Padma.consnt_KA + Padma.vattu_RA;
Mithi.toPadma[Mithi.conjct_KV]     = Padma.consnt_KA + Padma.vattu_VA;
Mithi.toPadma[Mithi.conjct_KT]     = Padma.consnt_KA + Padma.vattu_TA;
Mithi.toPadma[Mithi.conjct_GN]     = Padma.consnt_GA + Padma.vattu_NA;
Mithi.toPadma[Mithi.conjct_NGG]    = Padma.consnt_NGA + Padma.vattu_GA;
Mithi.toPadma[Mithi.conjct_NGGH]   = Padma.consnt_NGA + Padma.vattu_GHA;
Mithi.toPadma[Mithi.conjct_NGKSH]  = Padma.consnt_NGA + Padma.vattu_KA + Padma.vattu_SSA;
Mithi.toPadma[Mithi.conjct_NGM]    = Padma.consnt_NGA + Padma.vattu_MA;
Mithi.toPadma[Mithi.conjct_CC]     = Padma.consnt_CA + Padma.vattu_CA;
Mithi.toPadma[Mithi.conjct_JJ]     = Padma.consnt_JA + Padma.vattu_JA;
Mithi.toPadma[Mithi.conjct_TTTT]   = Padma.consnt_TTA + Padma.vattu_TTA;
Mithi.toPadma[Mithi.conjct_TT_TTH] = Padma.consnt_TTA + Padma.vattu_TTHA;
Mithi.toPadma[Mithi.conjct_TTHTTH] = Padma.consnt_TTHA + Padma.vattu_TTHA;
Mithi.toPadma[Mithi.conjct_DDDD]   = Padma.consnt_DDA + Padma.vattu_DDA;
Mithi.toPadma[Mithi.conjct_DD_DDH] = Padma.consnt_DDA + Padma.vattu_DDHA;
Mithi.toPadma[Mithi.conjct_DDHDDH] = Padma.consnt_DDHA + Padma.vattu_DDHA;
Mithi.toPadma[Mithi.conjct_TT]     = Padma.consnt_TA + Padma.vattu_TA;
Mithi.toPadma[Mithi.conjct_TR]     = Padma.consnt_TA + Padma.vattu_RA;
Mithi.toPadma[Mithi.conjct_DG]     = Padma.consnt_DA + Padma.vattu_GA;
Mithi.toPadma[Mithi.conjct_DGH]    = Padma.consnt_DA + Padma.vattu_GHA;
Mithi.toPadma[Mithi.conjct_DD]     = Padma.consnt_DA + Padma.vattu_DA;
Mithi.toPadma[Mithi.conjct_D_DH]   = Padma.consnt_DA + Padma.vattu_DHA;
Mithi.toPadma[Mithi.conjct_DN]     = Padma.consnt_DA + Padma.vattu_NA;
Mithi.toPadma[Mithi.conjct_DB]     = Padma.consnt_DA + Padma.vattu_BA;
Mithi.toPadma[Mithi.conjct_DBH]    = Padma.consnt_DA + Padma.vattu_BHA;
Mithi.toPadma[Mithi.conjct_DM]     = Padma.consnt_DA + Padma.vattu_MA;
Mithi.toPadma[Mithi.conjct_DY]     = Padma.consnt_DA + Padma.vattu_YA;
Mithi.toPadma[Mithi.conjct_DR]     = Padma.consnt_DA + Padma.vattu_RA;
Mithi.toPadma[Mithi.conjct_DV]     = Padma.consnt_DA + Padma.vattu_VA;
Mithi.toPadma[Mithi.conjct_NN]     = Padma.consnt_NA + Padma.vattu_NA;
Mithi.toPadma[Mithi.conjct_PR]     = Padma.consnt_PA + Padma.vattu_RA;
Mithi.toPadma[Mithi.conjct_PT]     = Padma.consnt_PA + Padma.vattu_TA;
Mithi.toPadma[Mithi.conjct_LL]     = Padma.consnt_LA + Padma.vattu_LA;
Mithi.toPadma[Mithi.conjct_SHC]    = Padma.consnt_SHA + Padma.vattu_CA;
Mithi.toPadma[Mithi.conjct_SHN]    = Padma.consnt_SHA + Padma.vattu_NA;
Mithi.toPadma[Mithi.conjct_SHR]    = Padma.consnt_SHA + Padma.vattu_RA;
Mithi.toPadma[Mithi.conjct_SHV]    = Padma.consnt_SHA + Padma.vattu_VA;
Mithi.toPadma[Mithi.conjct_SSTT]   = Padma.consnt_SSA + Padma.vattu_TTA;
Mithi.toPadma[Mithi.conjct_SSTTH]  = Padma.consnt_SSA + Padma.vattu_TTHA;
Mithi.toPadma[Mithi.conjct_STR]    = Padma.consnt_SA + Padma.vattu_TA + Padma.vattu_RA;
Mithi.toPadma[Mithi.conjct_HNN]    = Padma.consnt_HA + Padma.vattu_NNA;
Mithi.toPadma[Mithi.conjct_HN]     = Padma.consnt_HA + Padma.vattu_NA;
Mithi.toPadma[Mithi.conjct_HM]     = Padma.consnt_HA + Padma.vattu_MA;
Mithi.toPadma[Mithi.conjct_HY]     = Padma.consnt_HA + Padma.vattu_YA;
Mithi.toPadma[Mithi.conjct_HL]     = Padma.consnt_HA + Padma.vattu_LA;
Mithi.toPadma[Mithi.conjct_HV]     = Padma.consnt_HA + Padma.vattu_VA;

Mithi.toPadma[Mithi.combo_DR]      = Padma.consnt_DA + Padma.vowelsn_R;
Mithi.toPadma[Mithi.combo_RU]      = Padma.consnt_RA + Padma.vowelsn_U;
Mithi.toPadma[Mithi.combo_RUU]     = Padma.consnt_RA + Padma.vowelsn_UU;
Mithi.toPadma[Mithi.combo_HR]      = Padma.consnt_HA + Padma.vowelsn_R;

Mithi.toPadma[Mithi.halffm_RI]      = Padma.halffm_RA + Padma.vowelsn_I;
Mithi.toPadma[Mithi.halffm_RII]     = Padma.halffm_RA + Padma.vowelsn_II;
Mithi.toPadma[Mithi.halffm_RIIM]    = Padma.halffm_RA + Padma.vowelsn_II + Padma.anusvara;
Mithi.toPadma[Mithi.halffm_REE]     = Padma.halffm_RA + Padma.vowelsn_EE;
Mithi.toPadma[Mithi.halffm_REEM]    = Padma.halffm_RA + Padma.vowelsn_EE + Padma.anusvara;
Mithi.toPadma[Mithi.halffm_RAI]     = Padma.halffm_RA + Padma.vowelsn_AI;
Mithi.toPadma[Mithi.halffm_RAIM]    = Padma.halffm_RA + Padma.vowelsn_AI + Padma.anusvara;
Mithi.toPadma[Mithi.halffm_RA_ANU]  = Padma.halffm_RA + Padma.anusvara;

Mithi.toPadma[Mithi.vattu_YA]      = Padma.vattu_YA;
Mithi.toPadma[Mithi.vattu_RA_1]    = Padma.vattu_RA;
Mithi.toPadma[Mithi.vattu_RA_2]    = Padma.vattu_RA;
Mithi.toPadma[Mithi.vattu_RA_3]    = Padma.vattu_RA;
Mithi.toPadma[Mithi.vattu_RA_U]    = Padma.vattu_RA + Padma.vowelsn_U;
Mithi.toPadma[Mithi.vattu_RA_UU]   = Padma.vattu_RA + Padma.vowelsn_UU;

Mithi.toPadma[Mithi.syllbr_KHA]    = Padma.consnt_KHA + Padma.syllbreak;
Mithi.toPadma[Mithi.syllbr_JHA]    = Padma.consnt_JHA + Padma.syllbreak;

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

//Does not match ASCII
Mithi.toPadma[Mithi.extra_QTSINGLE] = "'";
Mithi.toPadma[Mithi.MULTIPLY]       = "\u00D7"; //Unicode for multiplication symbol
Mithi.toPadma[Mithi.DIVIDE]         = "\u00F7"; //Unicode for division symbol
Mithi.toPadma[Mithi.extra_COLON]    = ":";

Mithi.prefixList = new Array();
Mithi.prefixList[Mithi.vowelsn_I_1]  = true;
Mithi.prefixList[Mithi.vowelsn_I_2]  = true;
Mithi.prefixList[Mithi.vowelsn_I_3]  = true;
Mithi.prefixList[Mithi.vowelsn_IM]   = true;

Mithi.suffixList = new Array();
Mithi.suffixList[Mithi.halffm_RA]     = true;
Mithi.suffixList[Mithi.halffm_RII]    = true;
Mithi.suffixList[Mithi.halffm_RIIM]   = true;
Mithi.suffixList[Mithi.halffm_REE]    = true;
Mithi.suffixList[Mithi.halffm_REEM]   = true;
Mithi.suffixList[Mithi.halffm_RAI]    = true;
Mithi.suffixList[Mithi.halffm_RAIM]   = true;
Mithi.suffixList[Mithi.halffm_RA_ANU] = true;

Mithi.redundantList = new Array();
Mithi.redundantList[Mithi.misc_UNKNOWN_1] = true;
Mithi.redundantList[Mithi.misc_UNKNOWN_2] = true;

Mithi.overloadList = new Array();
Mithi.overloadList[Mithi.vowel_A]    = true;
Mithi.overloadList[Mithi.vowel_AA]   = true;
Mithi.overloadList[Mithi.vowel_EE]   = true;
Mithi.overloadList[Mithi.vowel_I]    = true;
Mithi.overloadList[Mithi.vowelsn_AA] = true;
Mithi.overloadList[Mithi.halffm_TT]  = true;
Mithi.overloadList[Mithi.halffm_MA]  = true;
