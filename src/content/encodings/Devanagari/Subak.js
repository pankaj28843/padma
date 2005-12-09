// $Id: Subak.js,v 1.6 2005/12/09 15:04:44 vnagarjuna Exp $ -->

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

function Subak()
{
}

//The interface every dynamic font encoding should implement
Subak.maxLookupLen = 3;
Subak.fontFace     = "Subak-1";
Subak.displayName  = "Subak";
Subak.script       = Padma.script_DEVANAGARI;
Subak.hasSuffixes  = true;

Subak.lookup = function (str) 
{
    return Subak.toPadma[str];
}

Subak.isPrefixSymbol = function (str)
{
    return Subak.prefixList[str] != null;
}

Subak.isSuffixSymbol = function (str)
{
    return Subak.suffixList[str] != null;
}

Subak.isOverloaded = function (str)
{
    return Subak.overloadList[str] != null;
}

Subak.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if ((sign1 == Padma.vowelsn_EE && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_EE))
        return Padma.vowelsn_OO;
    if ((sign1 == Padma.vowelsn_AI && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_AI))
        return Padma.vowelsn_AU;
    return sign1 + sign2;    
}

Subak.isRedundant = function (str)
{
    return Subak.redundantList[str] != null;
}

//Implementation details start here

//TODO: 0x23, 0x26,  0x89 (2030), 0x8B (2039), 0x8D, 0x98 (02DC), 
//0x99 (2122), 0x9A (0161), 0x9F (0178), 0xad, 0xb5, 0xb7,
//0xf2, 0xf5, 
//??: 0x7F, 0x80, 0x8E, 0x90, 0x9D, 0x9E, 0xa4

//Specials
Subak.avagraha       = "\u0040";
Subak.anusvara_1     = "\u00A7";
Subak.anusvara_2     = "\u00A8";
Subak.candrabindu_1  = "\u00B0"; //what is this?
Subak.candrabindu_2  = "\u00B1"; 
Subak.virama_1       = "\u003C";
Subak.virama_2       = "\u0152";
Subak.virama_3       = "\u00AB";
Subak.virama_4       = "\u00B2";
Subak.virama_5       = "\u00B3";

//Vowels
Subak.vowel_A        = "\u0041";
Subak.vowel_AA       = "\u0041\u006D";
Subak.vowel_I        = "\u0042";
Subak.vowel_II       = "\u0042\u00A9";
Subak.vowel_U        = "\u0043";
Subak.vowel_UU       = "\u0044";
Subak.vowel_R        = "\u0046";
Subak.vowel_RR       = "\u0047";
Subak.vowel_EE       = "\u0045";
Subak.vowel_AI       = "\u0045\u006F";
Subak.vowel_O        = "\u0041\u006D\u006F";
Subak.vowel_OO       = "\u0041\u006D\u00A1";
Subak.vowel_AU       = "\u0041\u006D\u00A1";

//Consonants
Subak.consnt_KA      = "\u0048";
Subak.consnt_KHA     = "\u0049";
Subak.consnt_GA      = "\u004A";
Subak.consnt_GHA     = "\u004B";
Subak.consnt_NGA     = "\u004C";

Subak.consnt_CA      = "\u004D";
Subak.consnt_CHA     = "\u004E";
Subak.consnt_JA      = "\u004F";
Subak.consnt_JHA     = "\u0050";
////Subak.consnt_NYA     = "\u2013";

Subak.consnt_TTA     = "\u0051";
Subak.consnt_TTHA    = "\u0052";
Subak.consnt_DDA     = "\u0053";
Subak.consnt_DDHA    = "\u0054";
Subak.consnt_NNA     = "\u0055";

Subak.consnt_TA      = "\u0056";
Subak.consnt_THA     = "\u0057";
Subak.consnt_DA      = "\u0058";
Subak.consnt_DHA     = "\u0059";
Subak.consnt_NA      = "\u005A";

Subak.consnt_PA      = "\u006E";
Subak.consnt_PHA_1   = "\u005C";
Subak.consnt_PHA_2   = "\u2019";
Subak.consnt_BA      = "\u007E";
Subak.consnt_BHA     = "\u005E";
Subak.consnt_MA_1    = "\u005F";
Subak.consnt_MA_2    = "\u2018";

Subak.consnt_YA      = "\u0060";
Subak.consnt_RA      = "\u0061";
Subak.consnt_LA_1    = "\u0062";
Subak.consnt_LA_2    = "\u0063";
Subak.consnt_VA      = "\u0064";
Subak.consnt_SHA     = "\u0065";
Subak.consnt_SSA     = "\u0066";
Subak.consnt_SA      = "\u0067";
Subak.consnt_HA      = "\u0068";
Subak.consnt_LLA     = "\u0069";
Subak.conjct_KSH     = "\u006A";
Subak.conjct_JNY     = "\u006B";

//Gunintamulu
Subak.vowelsn_AA     = "\u006D";
Subak.vowelsn_I_1    = "\u005B";
Subak.vowelsn_I_2    = "\u0070";
Subak.vowelsn_I_3    = "\u007B";
Subak.vowelsn_II_1   = "\u0072";
Subak.vowelsn_II_2   = "\u0073";
Subak.vowelsn_U_1    = "\u0077";
Subak.vowelsn_U_2    = "\u0078";
Subak.vowelsn_U_3    = "\u00FE";
Subak.vowelsn_UU_1   = "\u0079";
Subak.vowelsn_UU_2   = "\u007A";
Subak.vowelsn_UU_3   = "\u00FF";
Subak.vowelsn_R      = "\u00A5";
Subak.vowelsn_RR     = "\u00A6";
Subak.vowelsn_EE     = "\u006F";
Subak.vowelsn_AI     = "\u00A1";

//Matra + anusvara
Subak.vowelsn_IM     = "\u0071";
Subak.vowelsn_IIM    = "\u0074";
Subak.vowelsn_EEM    = "\u007C";
Subak.vowelsn_AIM    = "\u00A2";

//Half Forms
Subak.halffm_KA      = "\u0160";
Subak.halffm_KHA     = "\u00BB";
Subak.halffm_GA      = "\u00BD";
Subak.halffm_GHA     = "\u00BF";
Subak.halffm_CA      = "\u00C0";
Subak.halffm_JA      = "\u00C1";
Subak.halffm_JHA     = "\u00C2";
Subak.halffm_NYA     = "\u00C4";
Subak.halffm_NNA     = "\u00CA";
Subak.halffm_TA      = "\u00CB";
Subak.halffm_TT      = "\u00CE";
Subak.halffm_TR      = "\u00CD";
Subak.halffm_THA     = "\u00CF";
Subak.halffm_DHA     = "\u00DC";
Subak.halffm_NA      = "\u00DD";
Subak.halffm_PA      = "\u00DF";
Subak.halffm_PHA     = "\u00E2";
Subak.halffm_BA      = "\u00E3";
Subak.halffm_BHA     = "\u00E4";
Subak.halffm_MA      = "\u00E5";
Subak.halffm_YA      = "\u00E6";
Subak.halffm_RA      = "\u00A9";
Subak.halffm_LA      = "\u00EB";
Subak.halffm_VA      = "\u00EC";
Subak.halffm_SHA_1   = "\u00ED";
Subak.halffm_SHA_2   = "\u00FB";
Subak.halffm_SSA     = "\u00EE";
Subak.halffm_SA      = "\u00F1";
Subak.halffm_HA      = "\u00F4";
Subak.halffm_LLA     = "\u00F9";
Subak.halffm_RRA     = "\u00E8";
Subak.halffm_KSH     = "\u00FA";

//Conjuncts
Subak.conjct_KK      = "\u00B8";
Subak.conjct_KV      = "\u00B9";
Subak.conjct_KT      = "\u00BA";
Subak.conjct_GN      = "\u00BE";
Subak.conjct_NGG     = "\u201C";
Subak.conjct_NGGH    = "\u201D";
Subak.conjct_NGKSH   = "\u00AC";
Subak.conjct_NGM     = "\u00B6";
Subak.conjct_CC      = "\u0192";
Subak.conjct_JJ      = "\u201A";
Subak.conjct_TTTT    = "\u00C5";
Subak.conjct_TT_TTH  = "\u00C6";
Subak.conjct_TTHTTH  = "\u00C7";
Subak.conjct_DDDD    = "\u00C8";
Subak.conjct_DD_DDH  = "\u2013";
Subak.conjct_DDHDDH  = "\u00C9";
Subak.conjct_TT      = "\u00CE\u006D";
Subak.conjct_TR      = "\u00CC";
Subak.conjct_DG      = "\u00D2";
Subak.conjct_DGH     = "\u00D3";
Subak.conjct_DD      = "\u00D4";
Subak.conjct_D_DH    = "\u00D5";
Subak.conjct_DN      = "\u00D6";
Subak.conjct_DB      = "\u00D7";
Subak.conjct_DBH     = "\u00D8";
Subak.conjct_DM      = "\u00D9";
Subak.conjct_DY      = "\u00DA";
Subak.conjct_DR      = "\u00D0";
Subak.conjct_DV      = "\u00DB";
Subak.conjct_NN      = "\u00DE";
Subak.conjct_PR      = "\u00E0";
Subak.conjct_PT      = "\u00E1";
Subak.conjct_LL      = "\u201E";
Subak.conjct_SHC     = "\u00FC";
Subak.conjct_SHN     = "\u00FD";
Subak.conjct_SHR     = "\u006C";
Subak.conjct_SHV     = "\u0153";
Subak.conjct_SSTT    = "\u00EF";
Subak.conjct_SSTTH   = "\u00F0";
Subak.conjct_STR     = "\u00F3";
Subak.conjct_HNN     = "\u2020";
Subak.conjct_HN      = "\u2022";
Subak.conjct_HM      = "\u00F7";
Subak.conjct_HY      = "\u00F8";
Subak.conjct_HL      = "\u2021";
Subak.conjct_HV      = "\u02C6";

//Combos
Subak.combo_DR       = "\u00D1";
Subak.combo_RU       = "\u00E9";
Subak.combo_RUU      = "\u00EA";
Subak.combo_HR       = "\u00F6";

//Half forms of RA
Subak.halffm_RII     = "\u0075";
Subak.halffm_RIIM    = "\u0076";
Subak.halffm_REE     = "\u007D";
Subak.halffm_REEM    = "\u005D";
Subak.halffm_RAI     = "\u00A3";
Subak.halffm_RAIM    = "\u00A4";
Subak.halffm_RA_ANU  = "\u00AA";

Subak.vattu_YA       = "\u00E7";
Subak.vattu_RA_1     = "\u2014";
Subak.vattu_RA_2     = "\u00AB";
Subak.vattu_RA_3     = "\u00B4";
Subak.vattu_RA_U     = "\u00AE";
Subak.vattu_RA_UU    = "\u00AF";

//syllable breaks
Subak.syllbr_KHA     = "\u00BC";
Subak.syllbr_JHA     = "\u00C3";

Subak.misc_OM        = "\u203A";

//Devanagari Digits
Subak.digit_ZERO     = "\u0030";
Subak.digit_ONE      = "\u0031";
Subak.digit_TWO      = "\u0032";
Subak.digit_THREE    = "\u0033";
Subak.digit_FOUR     = "\u0034";
Subak.digit_FIVE     = "\u0035";
Subak.digit_SIX      = "\u0036";
Subak.digit_SEVEN    = "\u0037";
Subak.digit_EIGHT    = "\u0038";
Subak.digit_NINE     = "\u0039";

//Matches ASCII
Subak.EXCLAM         = "\u0021";
Subak.PERCENT        = "\u0025";
Subak.QTSINGLE       = "\u0027";
Subak.PAREN_LEFT     = "\u0028";
Subak.PAREN_RIGHT    = "\u0029";
Subak.ASTERISK       = "\u002A";
Subak.PLUS           = "\u002B";
Subak.COMMA          = "\u002C";
Subak.HYPHEN         = "\u002D";
Subak.PERIOD         = "\u002E";
Subak.SLASH          = "\u002F";
Subak.COLON          = "\u003A";
Subak.SEMICOLON      = "\u003B";
Subak.EQUALS         = "\u003D";
Subak.QUESTION       = "\u003F";

//Does not match ASCII
Subak.extra_QTSINGLE = "\u0022";
Subak.MULTIPLY       = "\u0081";
Subak.DIVIDE         = "\u008F";
Subak.extra_COLON    = "\u2026";

Subak.misc_UNKNOWN_1 = "\u0024";
Subak.misc_UNKNOWN_2 = "\u003E";

Subak.toPadma = new Object();

Subak.toPadma[Subak.avagraha]      = Padma.avagraha;
Subak.toPadma[Subak.anusvara_1]    = Padma.anusvara;
Subak.toPadma[Subak.anusvara_2]    = Padma.anusvara;
Subak.toPadma[Subak.candrabindu_1] = Padma.candrabindu;
Subak.toPadma[Subak.candrabindu_2] = Padma.candrabindu;
Subak.toPadma[Subak.virama_1]      = Padma.syllbreak;
Subak.toPadma[Subak.virama_2]      = Padma.syllbreak;
Subak.toPadma[Subak.virama_3]      = Padma.syllbreak;
Subak.toPadma[Subak.virama_4]      = Padma.syllbreak;
Subak.toPadma[Subak.virama_5]      = Padma.syllbreak;
//Subak.toPadma[Subak.visarga]       = Subak.visarga;

Subak.toPadma[Subak.vowel_A]  = Padma.vowel_A;
Subak.toPadma[Subak.vowel_AA] = Padma.vowel_AA;
Subak.toPadma[Subak.vowel_I]  = Padma.vowel_I;
Subak.toPadma[Subak.vowel_II] = Padma.vowel_II;
Subak.toPadma[Subak.vowel_U]  = Padma.vowel_U;
Subak.toPadma[Subak.vowel_UU] = Padma.vowel_UU;
Subak.toPadma[Subak.vowel_R]  = Padma.vowel_R;
Subak.toPadma[Subak.vowel_RR] = Padma.vowel_RR;
Subak.toPadma[Subak.vowel_EE] = Padma.vowel_EE;
Subak.toPadma[Subak.vowel_AI] = Padma.vowel_AI;
Subak.toPadma[Subak.vowel_O]  = Padma.vowel_O;
Subak.toPadma[Subak.vowel_OO] = Padma.vowel_OO;
Subak.toPadma[Subak.vowel_AU] = Padma.vowel_AU;

Subak.toPadma[Subak.consnt_KA]  = Padma.consnt_KA;
Subak.toPadma[Subak.consnt_KHA] = Padma.consnt_KHA;
Subak.toPadma[Subak.consnt_GA]  = Padma.consnt_GA;
Subak.toPadma[Subak.consnt_GHA] = Padma.consnt_GHA;
Subak.toPadma[Subak.consnt_NGA] = Padma.consnt_NGA;

Subak.toPadma[Subak.consnt_CA]  = Padma.consnt_CA;
Subak.toPadma[Subak.consnt_CHA] = Padma.consnt_CHA;
Subak.toPadma[Subak.consnt_JA]  = Padma.consnt_JA;
Subak.toPadma[Subak.consnt_JHA] = Padma.consnt_JHA;
//Subak.toPadma[Subak.consnt_NYA] = Padma.consnt_NYA;

Subak.toPadma[Subak.consnt_TTA] = Padma.consnt_TTA;
Subak.toPadma[Subak.consnt_TTHA] = Padma.consnt_TTHA;
Subak.toPadma[Subak.consnt_DDA] = Padma.consnt_DDA;
Subak.toPadma[Subak.consnt_DDHA] = Padma.consnt_DDHA;
Subak.toPadma[Subak.consnt_NNA] = Padma.consnt_NNA;

Subak.toPadma[Subak.consnt_TA]  = Padma.consnt_TA;
Subak.toPadma[Subak.consnt_THA] = Padma.consnt_THA;
Subak.toPadma[Subak.consnt_DA]  = Padma.consnt_DA;
Subak.toPadma[Subak.consnt_DHA] = Padma.consnt_DHA;
Subak.toPadma[Subak.consnt_NA]  = Padma.consnt_NA;

Subak.toPadma[Subak.consnt_PA]   = Padma.consnt_PA;
Subak.toPadma[Subak.consnt_PHA_1]= Padma.consnt_PHA;
Subak.toPadma[Subak.consnt_PHA_2]= Padma.consnt_PHA;
Subak.toPadma[Subak.consnt_BA]   = Padma.consnt_BA;
Subak.toPadma[Subak.consnt_BHA]  = Padma.consnt_BHA;
Subak.toPadma[Subak.consnt_MA_1] = Padma.consnt_MA;
Subak.toPadma[Subak.consnt_MA_2] = Padma.consnt_MA;

Subak.toPadma[Subak.consnt_YA]   = Padma.consnt_YA;
Subak.toPadma[Subak.consnt_RA]   = Padma.consnt_RA;
Subak.toPadma[Subak.consnt_LA_1] = Padma.consnt_LA;
Subak.toPadma[Subak.consnt_LA_2] = Padma.consnt_LA;
Subak.toPadma[Subak.consnt_VA]   = Padma.consnt_VA;
Subak.toPadma[Subak.consnt_SHA]  = Padma.consnt_SHA;
Subak.toPadma[Subak.consnt_SSA]  = Padma.consnt_SSA;
Subak.toPadma[Subak.consnt_SA]   = Padma.consnt_SA;
Subak.toPadma[Subak.consnt_HA] = Padma.consnt_HA;
Subak.toPadma[Subak.consnt_LLA]  = Padma.consnt_LLA;
Subak.toPadma[Subak.conjct_KSH]  = Padma.consnt_KA + Padma.vattu_SSA;
Subak.toPadma[Subak.conjct_JNY]  = Padma.consnt_JA + Padma.vattu_NYA;

//Gunintamulu
Subak.toPadma[Subak.vowelsn_AA]   = Padma.vowelsn_AA;
Subak.toPadma[Subak.vowelsn_I_1]  = Padma.vowelsn_I;
Subak.toPadma[Subak.vowelsn_I_2]  = Padma.vowelsn_I;
Subak.toPadma[Subak.vowelsn_I_3]  = Padma.vowelsn_I;
Subak.toPadma[Subak.vowelsn_II_1] = Padma.vowelsn_II;
Subak.toPadma[Subak.vowelsn_II_2] = Padma.vowelsn_II;
Subak.toPadma[Subak.vowelsn_U_1]  = Padma.vowelsn_U;
Subak.toPadma[Subak.vowelsn_U_2]  = Padma.vowelsn_U;
Subak.toPadma[Subak.vowelsn_U_3]  = Padma.vowelsn_U;
Subak.toPadma[Subak.vowelsn_UU_1] = Padma.vowelsn_UU;
Subak.toPadma[Subak.vowelsn_UU_2] = Padma.vowelsn_UU;
Subak.toPadma[Subak.vowelsn_UU_3] = Padma.vowelsn_UU;
Subak.toPadma[Subak.vowelsn_R]   = Padma.vowelsn_R;
Subak.toPadma[Subak.vowelsn_RR]  = Padma.vowelsn_RR;
Subak.toPadma[Subak.vowelsn_EE]   = Padma.vowelsn_EE;
Subak.toPadma[Subak.vowelsn_AI]  = Padma.vowelsn_AI;

//Matra + anusvara
Subak.toPadma[Subak.vowelsn_IM]   = Padma.vowelsn_I + Padma.anusvara;
Subak.toPadma[Subak.vowelsn_IIM]  = Padma.vowelsn_II + Padma.anusvara;
Subak.toPadma[Subak.vowelsn_EEM]  = Padma.vowelsn_EE + Padma.anusvara;
Subak.toPadma[Subak.vowelsn_AIM]  = Padma.vowelsn_AI + Padma.anusvara;

//Halffm
Subak.toPadma[Subak.halffm_KA]     = Padma.halffm_KA;
Subak.toPadma[Subak.halffm_KHA]    = Padma.halffm_KHA;
Subak.toPadma[Subak.halffm_GA]     = Padma.halffm_GA;
Subak.toPadma[Subak.halffm_GHA]    = Padma.halffm_GHA;
Subak.toPadma[Subak.halffm_CA]     = Padma.halffm_CA;
Subak.toPadma[Subak.halffm_JA]     = Padma.halffm_JA;
Subak.toPadma[Subak.halffm_JHA]    = Padma.halffm_JHA;
Subak.toPadma[Subak.halffm_NYA]    = Padma.halffm_NYA;
Subak.toPadma[Subak.halffm_NNA]    = Padma.halffm_NNA;
Subak.toPadma[Subak.halffm_TA]     = Padma.halffm_TA;
Subak.toPadma[Subak.halffm_TT]     = Padma.halffm_TA + Padma.halffm_TA;
Subak.toPadma[Subak.halffm_TR]     = Padma.halffm_TA + Padma.halffm_RA;
Subak.toPadma[Subak.halffm_THA]    = Padma.halffm_THA;
Subak.toPadma[Subak.halffm_DHA]    = Padma.halffm_DHA;
Subak.toPadma[Subak.halffm_NA]     = Padma.halffm_NA;
Subak.toPadma[Subak.halffm_PA]     = Padma.halffm_PA;
Subak.toPadma[Subak.halffm_PHA]    = Padma.halffm_PHA;
Subak.toPadma[Subak.halffm_BA]     = Padma.halffm_BA;
Subak.toPadma[Subak.halffm_BHA]    = Padma.halffm_BHA;
Subak.toPadma[Subak.halffm_MA]     = Padma.halffm_MA;
Subak.toPadma[Subak.halffm_YA]     = Padma.halffm_YA;
Subak.toPadma[Subak.halffm_RA]     = Padma.halffm_RA;
Subak.toPadma[Subak.halffm_LA]     = Padma.halffm_LA;
Subak.toPadma[Subak.halffm_VA]     = Padma.halffm_VA;
Subak.toPadma[Subak.halffm_SHA_1]  = Padma.halffm_SHA;
Subak.toPadma[Subak.halffm_SHA_2]  = Padma.halffm_SHA;
Subak.toPadma[Subak.halffm_SSA]    = Padma.halffm_SSA;
Subak.toPadma[Subak.halffm_SA]     = Padma.halffm_SA;
Subak.toPadma[Subak.halffm_HA]     = Padma.halffm_HA;
Subak.toPadma[Subak.halffm_LLA]    = Padma.halffm_LLA;
Subak.toPadma[Subak.halffm_RRA]    = Padma.halffm_RRA;
Subak.toPadma[Subak.halffm_KSH]    = Padma.halffm_KA + Padma.halffm_SSA;

//Conjuncts
Subak.toPadma[Subak.conjct_KK]     = Padma.consnt_KA + Padma.vattu_KA;
Subak.toPadma[Subak.conjct_KV]     = Padma.consnt_KA + Padma.vattu_VA;
Subak.toPadma[Subak.conjct_KT]     = Padma.consnt_KA + Padma.vattu_TA;
Subak.toPadma[Subak.conjct_GN]     = Padma.consnt_GA + Padma.vattu_NA;
Subak.toPadma[Subak.conjct_NGG]    = Padma.consnt_NGA + Padma.vattu_GA;
Subak.toPadma[Subak.conjct_NGGH]   = Padma.consnt_NGA + Padma.vattu_GHA;
Subak.toPadma[Subak.conjct_NGKSH]  = Padma.consnt_NGA + Padma.vattu_KA + Padma.vattu_SSA;
Subak.toPadma[Subak.conjct_NGM]    = Padma.consnt_NGA + Padma.vattu_MA;
Subak.toPadma[Subak.conjct_CC]     = Padma.consnt_CA + Padma.vattu_CA;
Subak.toPadma[Subak.conjct_JJ]     = Padma.consnt_JA + Padma.vattu_JA;
Subak.toPadma[Subak.conjct_TTTT]   = Padma.consnt_TTA + Padma.vattu_TTA;
Subak.toPadma[Subak.conjct_TT_TTH] = Padma.consnt_TTA + Padma.vattu_TTHA;
Subak.toPadma[Subak.conjct_TTHTTH] = Padma.consnt_TTHA + Padma.vattu_TTHA;
Subak.toPadma[Subak.conjct_DDDD]   = Padma.consnt_DDA + Padma.vattu_DDA;
Subak.toPadma[Subak.conjct_DD_DDH] = Padma.consnt_DDA + Padma.vattu_DDHA;
Subak.toPadma[Subak.conjct_DDHDDH] = Padma.consnt_DDHA + Padma.vattu_DDHA;
Subak.toPadma[Subak.conjct_TT]     = Padma.consnt_TA + Padma.vattu_TA;
Subak.toPadma[Subak.conjct_TR]     = Padma.consnt_TA + Padma.vattu_RA;
Subak.toPadma[Subak.conjct_DG]     = Padma.consnt_DA + Padma.vattu_GA;
Subak.toPadma[Subak.conjct_DGH]    = Padma.consnt_DA + Padma.vattu_GHA;
Subak.toPadma[Subak.conjct_DD]     = Padma.consnt_DA + Padma.vattu_DA;
Subak.toPadma[Subak.conjct_D_DH]   = Padma.consnt_DA + Padma.vattu_DHA;
Subak.toPadma[Subak.conjct_DN]     = Padma.consnt_DA + Padma.vattu_NA;
Subak.toPadma[Subak.conjct_DB]     = Padma.consnt_DA + Padma.vattu_BA;
Subak.toPadma[Subak.conjct_DBH]    = Padma.consnt_DA + Padma.vattu_BHA;
Subak.toPadma[Subak.conjct_DM]     = Padma.consnt_DA + Padma.vattu_MA;
Subak.toPadma[Subak.conjct_DY]     = Padma.consnt_DA + Padma.vattu_YA;
Subak.toPadma[Subak.conjct_DR]     = Padma.consnt_DA + Padma.vattu_RA;
Subak.toPadma[Subak.conjct_DV]     = Padma.consnt_DA + Padma.vattu_VA;
Subak.toPadma[Subak.conjct_NN]     = Padma.consnt_NA + Padma.vattu_NA;
Subak.toPadma[Subak.conjct_PR]     = Padma.consnt_PA + Padma.vattu_RA;
Subak.toPadma[Subak.conjct_PT]     = Padma.consnt_PA + Padma.vattu_TA;
Subak.toPadma[Subak.conjct_LL]     = Padma.consnt_LA + Padma.vattu_LA;
Subak.toPadma[Subak.conjct_SHC]    = Padma.consnt_SHA + Padma.vattu_CA;
Subak.toPadma[Subak.conjct_SHN]    = Padma.consnt_SHA + Padma.vattu_NA;
Subak.toPadma[Subak.conjct_SHR]    = Padma.consnt_SHA + Padma.vattu_RA;
Subak.toPadma[Subak.conjct_SHV]    = Padma.consnt_SHA + Padma.vattu_VA;
Subak.toPadma[Subak.conjct_SSTT]   = Padma.consnt_SSA + Padma.vattu_TTA;
Subak.toPadma[Subak.conjct_SSTTH]  = Padma.consnt_SSA + Padma.vattu_TTHA;
Subak.toPadma[Subak.conjct_STR]    = Padma.consnt_SA + Padma.vattu_TA + Padma.vattu_RA;
Subak.toPadma[Subak.conjct_HNN]    = Padma.consnt_HA + Padma.vattu_NNA;
Subak.toPadma[Subak.conjct_HN]     = Padma.consnt_HA + Padma.vattu_NA;
Subak.toPadma[Subak.conjct_HM]     = Padma.consnt_HA + Padma.vattu_MA;
Subak.toPadma[Subak.conjct_HY]     = Padma.consnt_HA + Padma.vattu_YA;
Subak.toPadma[Subak.conjct_HL]     = Padma.consnt_HA + Padma.vattu_LA;
Subak.toPadma[Subak.conjct_HV]     = Padma.consnt_HA + Padma.vattu_VA;

Subak.toPadma[Subak.combo_DR]      = Padma.consnt_DA + Padma.vowelsn_R;
Subak.toPadma[Subak.combo_RU]      = Padma.consnt_RA + Padma.vowelsn_U;
Subak.toPadma[Subak.combo_RUU]     = Padma.consnt_RA + Padma.vowelsn_UU;
Subak.toPadma[Subak.combo_HR]      = Padma.consnt_HA + Padma.vowelsn_R;

Subak.toPadma[Subak.halffm_RII]     = Padma.halffm_RA + Padma.vowelsn_II;
Subak.toPadma[Subak.halffm_RIIM]    = Padma.halffm_RA + Padma.vowelsn_II + Padma.anusvara;
Subak.toPadma[Subak.halffm_REE]     = Padma.halffm_RA + Padma.vowelsn_EE;
Subak.toPadma[Subak.halffm_REEM]    = Padma.halffm_RA + Padma.vowelsn_EE + Padma.anusvara;
Subak.toPadma[Subak.halffm_RAI]     = Padma.halffm_RA + Padma.vowelsn_AI;
Subak.toPadma[Subak.halffm_RAIM]    = Padma.halffm_RA + Padma.vowelsn_AI + Padma.anusvara;
Subak.toPadma[Subak.halffm_RA_ANU]  = Padma.halffm_RA + Padma.anusvara;

Subak.toPadma[Subak.vattu_YA]      = Padma.vattu_YA;
Subak.toPadma[Subak.vattu_RA_1]    = Padma.vattu_RA;
Subak.toPadma[Subak.vattu_RA_2]    = Padma.vattu_RA;
Subak.toPadma[Subak.vattu_RA_3]    = Padma.vattu_RA;
Subak.toPadma[Subak.vattu_RA_U]    = Padma.vattu_RA + Padma.vowelsn_U;
Subak.toPadma[Subak.vattu_RA_UU]   = Padma.vattu_RA + Padma.vowelsn_UU;

Subak.toPadma[Subak.syllbr_KHA]    = Padma.consnt_KHA + Padma.syllbreak;
Subak.toPadma[Subak.syllbr_JHA]    = Padma.consnt_JHA + Padma.syllbreak;

Subak.toPadma[Subak.misc_OM]       = Padma.om;

//Digits
Subak.toPadma[Subak.digit_ZERO]    = Padma.digit_ZERO;
Subak.toPadma[Subak.digit_ONE]     = Padma.digit_ONE;
Subak.toPadma[Subak.digit_TWO]     = Padma.digit_TWO;
Subak.toPadma[Subak.digit_THREE]   = Padma.digit_THREE;
Subak.toPadma[Subak.digit_FOUR]    = Padma.digit_FOUR;
Subak.toPadma[Subak.digit_FIVE]    = Padma.digit_FIVE;
Subak.toPadma[Subak.digit_SIX]     = Padma.digit_SIX;
Subak.toPadma[Subak.digit_SEVEN]   = Padma.digit_SEVEN;
Subak.toPadma[Subak.digit_EIGHT]   = Padma.digit_EIGHT;
Subak.toPadma[Subak.digit_NINE]    = Padma.digit_NINE;

//Does not match ASCII
Subak.toPadma[Subak.extra_QTSINGLE] = "'";
Subak.toPadma[Subak.MULTIPLY]       = "\u00D7"; //Unicode for multiplication symbol
Subak.toPadma[Subak.DIVIDE]         = "\u00F7"; //Unicode for division symbol
Subak.toPadma[Subak.extra_COLON]    = ":";

Subak.prefixList = new Object();
Subak.prefixList[Subak.vowelsn_I_1]  = true;
Subak.prefixList[Subak.vowelsn_I_2]  = true;
Subak.prefixList[Subak.vowelsn_I_3]  = true;
Subak.prefixList[Subak.vowelsn_IM]   = true;

Subak.suffixList = new Object();
Subak.suffixList[Subak.halffm_RA]     = true;
Subak.suffixList[Subak.halffm_RII]    = true;
Subak.suffixList[Subak.halffm_RIIM]   = true;
Subak.suffixList[Subak.halffm_REE]    = true;
Subak.suffixList[Subak.halffm_REEM]   = true;
Subak.suffixList[Subak.halffm_RAI]    = true;
Subak.suffixList[Subak.halffm_RAIM]   = true;
Subak.suffixList[Subak.halffm_RA_ANU] = true;

Subak.redundantList = new Object();
Subak.redundantList[Subak.misc_UNKNOWN_1] = true;
Subak.redundantList[Subak.misc_UNKNOWN_2] = true;

Subak.overloadList = new Object();
Subak.overloadList[Subak.vowel_A]    = true;
Subak.overloadList[Subak.vowel_AA]   = true;
Subak.overloadList[Subak.vowel_EE]   = true;
Subak.overloadList[Subak.vowel_I]    = true;
Subak.overloadList[Subak.vowelsn_AA] = true;
Subak.overloadList[Subak.halffm_TT]  = true;
