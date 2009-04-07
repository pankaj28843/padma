//$Id: DVW_TTGanesh.js,v 1.1 2009/04/07 06:10:53 harshita Exp $

//Copyright 2008-2009 HarshitaVani <harshita@atc.tcs.com> 

/* ****** BEGIN LICENSE BLOCK ***** 
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

//DVW-TT fonts Devanagari

//DVW-TTGanesh 
function DVW_TTGanesh()
{
}

//The interface every dynamic font encoding should implement
DVW_TTGanesh.maxLookupLen = 3;
DVW_TTGanesh.fontFace     = "DVW-TTGanesh";
DVW_TTGanesh.displayName  = "DVW_TTGanesh";
DVW_TTGanesh.script       = Padma.script_DEVANAGARI;
DVW_TTGanesh.hasSuffixes  = true;

DVW_TTGanesh.lookup = function (str) 
{
    return DVW_TTGanesh.toPadma[str];
}

DVW_TTGanesh.isPrefixSymbol = function (str)
{
    return DVW_TTGanesh.prefixList[str] != null;
}

DVW_TTGanesh.isSuffixSymbol = function (str)
{
    return DVW_TTGanesh.suffixList[str] != null;
}

DVW_TTGanesh.isOverloaded = function (str)
{
    return DVW_TTGanesh.overloadList[str] != null;
}

DVW_TTGanesh.handleTwoPartVowelSigns = function (sign1, sign2)
{
   if ((sign1 == Padma.vowelsn_EE && sign2 == Padma.vowelsn_AA) ||
       (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_EE))
        return Padma.vowelsn_OO;
    if ((sign1 == Padma.vowelsn_AI && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_AI))
        return Padma.vowelsn_AU;
    return sign1 + sign2;    
}

DVW_TTGanesh.isRedundant = function (str)
{
    return DVW_TTGanesh.redundantList[str] != null;
}

//Implementation details start here

//Specials
DVW_TTGanesh.anusvara        = "\u00C6";
DVW_TTGanesh.candrabindu     = "\u00C4"; 

//Vowels
DVW_TTGanesh.vowel_SHT_A     = "\u002B\u00E0";
DVW_TTGanesh.vowel_A         = "\u002B";
DVW_TTGanesh.vowel_AA        = "\u002B\u00C9";
DVW_TTGanesh.vowel_I         = "\u003C";
DVW_TTGanesh.vowel_II        = "\u003C\u00C7";
DVW_TTGanesh.vowel_U         = "\u003D";
DVW_TTGanesh.vowel_UU        = "\u003E";
DVW_TTGanesh.vowel_R         = "\u0040";
DVW_TTGanesh.vowel_RR        = "\u0041";
DVW_TTGanesh.vowel_EE        = "\u0042";
DVW_TTGanesh.vowel_AI        = "\u0042\u00E4";
DVW_TTGanesh.vowel_OO        = "\u002B\u00C9\u00E4";
DVW_TTGanesh.vowel_AU        = "\u002B\u00C9\u00E8";
DVW_TTGanesh.vowel_CDR_E     = "\u0042\u00EC";
DVW_TTGanesh.vowel_CDR_O     = "\u002B\u00C9\u00EC";
DVW_TTGanesh.vowel_E	     = "\u0042\u00E0";
DVW_TTGanesh.vowel_O	     = "\u002B\u00C9\u00E0";

//Consonants
DVW_TTGanesh.consnt_KA       = "\u0045";
DVW_TTGanesh.consnt_KHA      = "\u004A\u00C9";
DVW_TTGanesh.consnt_KHA_2    = "\u004A\u002A";
DVW_TTGanesh.consnt_GA       = "\u004D\u00C9";
DVW_TTGanesh.consnt_GHA      = "\u0050\u00C9";
DVW_TTGanesh.consnt_GHA_2    = "\u0050\u002A";
DVW_TTGanesh.consnt_NGA      = "\u0052";

DVW_TTGanesh.consnt_CA       = "\u0053\u00C9";
DVW_TTGanesh.consnt_CHA      = "\u0055";
DVW_TTGanesh.consnt_JA       = "\u0056\u00C9";
DVW_TTGanesh.consnt_JHA      = "\u005A\u00C9";
DVW_TTGanesh.consnt_NYA      = "\u005C\u00E6";

DVW_TTGanesh.consnt_TTA      = "\u005D";
DVW_TTGanesh.halffm_TTA      = "\u005D\u00C2";
DVW_TTGanesh.consnt_TTHA     = "\u0060";
DVW_TTGanesh.consnt_DDA      = "\u0062";
DVW_TTGanesh.halffm_DDA      = "\u0062\u00C2";
DVW_TTGanesh.consnt_DDHA     = "\u0066";
DVW_TTGanesh.consnt_NNA      = "\u0068\u00C9";
DVW_TTGanesh.consnt_NNA_2    = "\u0068\u002A";

DVW_TTGanesh.consnt_TA       = "\u0069\u00C9";
DVW_TTGanesh.consnt_TA_2     = "\u0069\u002A";
DVW_TTGanesh.consnt_THA      = "\u006C\u00C9";
DVW_TTGanesh.consnt_THA_2    = "\u006C\u002A";
DVW_TTGanesh.consnt_DA       = "\u006E";
DVW_TTGanesh.halffm_DA       = "\u006E\u00C2";
DVW_TTGanesh.consnt_DHA      = "\u0076\u00C9";
DVW_TTGanesh.consnt_DHA_2    = "\u0076\u002A";
DVW_TTGanesh.consnt_NA       = "\u0078\u00C9";

DVW_TTGanesh.consnt_PA       = "\u007B\u00C9";
DVW_TTGanesh.consnt_PHA      = "\u00A1";
DVW_TTGanesh.consnt_BA       = "\u00A4\u00C9";
DVW_TTGanesh.consnt_BHA      = "\u00A6\u00C9";
DVW_TTGanesh.consnt_BHA_2    = "\u00A6\u002A";
DVW_TTGanesh.consnt_MA       = "\u00A8\u00C9";

DVW_TTGanesh.consnt_YA       = "\u00AA\u00C9";
DVW_TTGanesh.consnt_RA       = "\u00AE";
DVW_TTGanesh.consnt_LA_1     = "\u00B1\u00C9";
DVW_TTGanesh.consnt_LA_2     = "\u203A";
DVW_TTGanesh.consnt_VA       = "\u00B4\u00C9";
DVW_TTGanesh.consnt_SHA_1    = "\u201E\u00C9";
DVW_TTGanesh.consnt_SHA_2    = "\u201A\u00C9";
DVW_TTGanesh.consnt_SHA_3    = "\u201E\u002A";
DVW_TTGanesh.consnt_SSA      = "\u00B9\u00C9";
DVW_TTGanesh.consnt_SSA_2    = "\u00B9\u002A";
DVW_TTGanesh.consnt_SA       = "\u00BA\u00C9";
DVW_TTGanesh.consnt_HA       = "\u00BD";
DVW_TTGanesh.consnt_LLA      = "\u00B3";
DVW_TTGanesh.consnt_KSHA     = "\u0049\u00C9";
DVW_TTGanesh.consnt_KSHA_2   = "\u0049\u002A";
DVW_TTGanesh.consnt_THRA     = "\u006A\u00C9";
DVW_TTGanesh.consnt_JHNA     = "\u0059\u00C9";

//Gunintamulu
DVW_TTGanesh.vowelsn_AA      = "\u00C9";
DVW_TTGanesh.vowelsn_I_1     = "\u00CE";
DVW_TTGanesh.vowelsn_I_2     = "\u2021";
DVW_TTGanesh.vowelsn_II      = "\u00D2";
DVW_TTGanesh.vowelsn_U_1     = "\u00D6";
DVW_TTGanesh.vowelsn_U_2     = "\u00D9";
DVW_TTGanesh.vowelsn_UU_1    = "\u00DA";
DVW_TTGanesh.vowelsn_UU_2    = "\u00DD";
DVW_TTGanesh.vowelsn_R       = "\u00DE";
DVW_TTGanesh.vowelsn_RR      = "\u00DF";
DVW_TTGanesh.vowelsn_E       = "\u00E0";
DVW_TTGanesh.vowelsn_EE      = "\u00E4";
DVW_TTGanesh.vowelsn_AI      = "\u00E8";
DVW_TTGanesh.vowelsn_CDR_E   = "\u00EC";
DVW_TTGanesh.vowelsn_CDR_O   = "\u00C9\u00EC";
DVW_TTGanesh.vowelsn_O       = "\u00C9\u00E0";
DVW_TTGanesh.vowelsn_OO      = "\u00C9\u00E4";
DVW_TTGanesh.vowelsn_AU      = "\u00C9\u00E8";

//Matra + anusvara
DVW_TTGanesh.vowelsn_IM_1    = "\u00CB";
DVW_TTGanesh.vowelsn_IM_2    = "\u00CF";
DVW_TTGanesh.vowelsn_IIM     = "\u00D3";
DVW_TTGanesh.vowelsn_UM      = "\u00D7";
DVW_TTGanesh.vowelsn_UUM     = "\u00DB";
DVW_TTGanesh.vowelsn_EM      = "\u00E1";
DVW_TTGanesh.vowelsn_EEM     = "\u00E5";
DVW_TTGanesh.vowelsn_AIM     = "\u00E9";
DVW_TTGanesh.vowelsn_CDR_EM  = "\u00ED";

//Additional consonants
DVW_TTGanesh.consnt_QA       = "\u0046";
DVW_TTGanesh.consnt_KHHA     = "\u004B\u00C9";
DVW_TTGanesh.consnt_GHHA     = "\u004E\u00C9";
DVW_TTGanesh.consnt_ZA       = "\u0057\u00C9";
DVW_TTGanesh.consnt_DDDHA    = "\u0063";
DVW_TTGanesh.consnt_RHA      = "\u0067";
DVW_TTGanesh.consnt_FA       = "\u00A2";

//Half Forms
DVW_TTGanesh.halffm_KA       = "\u0043";
DVW_TTGanesh.halffm_QA       = "\u0044";
DVW_TTGanesh.halffm_KHA      = "\u004A";
DVW_TTGanesh.halffm_KHHA     = "\u004B";
DVW_TTGanesh.halffm_GA       = "\u004D";
DVW_TTGanesh.halffm_GHHA     = "\u004E";
DVW_TTGanesh.halffm_GHA      = "\u0050";
DVW_TTGanesh.halffm_CA       = "\u0053";
DVW_TTGanesh.halffm_JA       = "\u0056";
DVW_TTGanesh.halffm_ZA       = "\u0057";
DVW_TTGanesh.halffm_JHA      = "\u005A";
DVW_TTGanesh.halffm_NYA      = "\u005C";
DVW_TTGanesh.halffm_NNA      = "\u0068";
DVW_TTGanesh.halffm_TA       = "\u0069";
DVW_TTGanesh.halffm_THA      = "\u006C";
DVW_TTGanesh.halffm_DHA      = "\u0076";
DVW_TTGanesh.halffm_NA       = "\u0078";
DVW_TTGanesh.halffm_PA       = "\u007B";
DVW_TTGanesh.halffm_PHA      = "\u007D";
DVW_TTGanesh.halffm_FA       = "\u007E";
DVW_TTGanesh.halffm_BA       = "\u00A4";
DVW_TTGanesh.halffm_BHA      = "\u00A6";
DVW_TTGanesh.halffm_MA       = "\u00A8";
DVW_TTGanesh.halffm_YA       = "\u00AA";
DVW_TTGanesh.halffm_RA       = "\u00C7";
DVW_TTGanesh.halffm_LA       = "\u00B1";
DVW_TTGanesh.halffm_VA       = "\u00B4";
DVW_TTGanesh.halffm_SHA_1    = "\u201E";
DVW_TTGanesh.halffm_SHA_2    = "\u201A";
DVW_TTGanesh.halffm_SSA      = "\u00B9";
DVW_TTGanesh.halffm_SA       = "\u00BA";
DVW_TTGanesh.halffm_HA       = "\u00BC";
DVW_TTGanesh.halffm_LLA      = "\u00B2";
DVW_TTGanesh.halffm_KSHA     = "\u0049";
DVW_TTGanesh.halffm_THRA     = "\u006A";
DVW_TTGanesh.halffm_JHNA     = "\u0059";

//Conjuncts
DVW_TTGanesh.conjct_IIM      = "\u003C\u00C8";
DVW_TTGanesh.conjct_KRA      = "\u0047";
DVW_TTGanesh.conjct_KTA      = "\u0048";
DVW_TTGanesh.conjct_KHRA     = "\u004C";
DVW_TTGanesh.halffm_GRA      = "\u004F";
DVW_TTGanesh.conjct_GRA      = "\u004F\u00C9";
DVW_TTGanesh.conjct_GHRA     = "\u0051";
DVW_TTGanesh.conjct_CRA      = "\u0054";
DVW_TTGanesh.halffm_JRA      = "\u0058";
DVW_TTGanesh.conjct_JRA      = "\u0058\u00C9";
DVW_TTGanesh.conjct_JHRA     = "\u005B";
DVW_TTGanesh.conjct_TTATTA   = "\u005E";
DVW_TTGanesh.conjct_TTATTHA  = "\u005F";
DVW_TTGanesh.conjct_TTHATTHA = "\u0061";
DVW_TTGanesh.conjct_DDADDA   = "\u0064";
DVW_TTGanesh.conjct_DDADDHA  = "\u0065";
DVW_TTGanesh.conjct_TATA     = "\u006B\u00C9";
DVW_TTGanesh.halffm_TATA     = "\u006B";
DVW_TTGanesh.conjct_THAR     = "\u006D";
DVW_TTGanesh.conjct_DRU      = "\u006F";
DVW_TTGanesh.conjct_DRA      = "\u0070";
DVW_TTGanesh.conjct_DADA     = "\u0071";
DVW_TTGanesh.conjct_DADHA    = "\u0072";
DVW_TTGanesh.conjct_DHMA     = "\u0073";
DVW_TTGanesh.conjct_DHYA     = "\u0074";
DVW_TTGanesh.conjct_DVA      = "\u0075";
DVW_TTGanesh.conjct_DHRA     = "\u0077";
DVW_TTGanesh.halffm_NRA      = "\u0079";
DVW_TTGanesh.conjct_NRA      = "\u0079\u00C9";
DVW_TTGanesh.halffm_NN       = "\u007A";
DVW_TTGanesh.conjct_NN       = "\u007A\u00C9";
DVW_TTGanesh.halffm_PR       = "\u007C";
DVW_TTGanesh.conjct_PRA      = "\u007C\u00C9";
DVW_TTGanesh.conjct_PHRA     = "\u00A3";
DVW_TTGanesh.halffm_BRA      = "\u00A5";
DVW_TTGanesh.conjct_BRA      = "\u00A5\u00C9";
DVW_TTGanesh.halffm_BHRA     = "\u00A7";
DVW_TTGanesh.conjct_BHRA     = "\u00A7\u00C9";
DVW_TTGanesh.conjct_MRA      = "\u0192\u00C9";
DVW_TTGanesh.halffm_MRA      = "\u0192";
DVW_TTGanesh.conjct_YRA      = "\u00AB";
DVW_TTGanesh.conjct_RU       = "\u00AF";
DVW_TTGanesh.conjct_RUU      = "\u00B0";
DVW_TTGanesh.conjct_LLA      = "\u0153";
DVW_TTGanesh.conjct_VRA      = "\u00B5";
DVW_TTGanesh.halffm_SHVA     = "\u2026";
DVW_TTGanesh.conjct_SHVA     = "\u2026\u00C9";
DVW_TTGanesh.halffm_SHRA     = "\u00B8";
DVW_TTGanesh.conjct_SHRA     = "\u00B8\u00C9";
DVW_TTGanesh.halffm_SRA      = "\u00BB";
DVW_TTGanesh.conjct_SRA      = "\u00BB\u00C9";
DVW_TTGanesh.conjct_HRU      = "\u00BE";
DVW_TTGanesh.conjct_HRA      = "\u00BF";
DVW_TTGanesh.conjct_HMA      = "\u00C0";
DVW_TTGanesh.conjct_HYA      = "\u00C1";
DVW_TTGanesh.conjct_UR       = "\u00D8";
DVW_TTGanesh.conjct_UUR      = "\u00DC";

//rakar
DVW_TTGanesh.vattu_RA        = "\u00C5";
DVW_TTGanesh.vattu_YA        = "\u00AC";

//Half RA's
DVW_TTGanesh.halffm_RI_1     = "\u00CC";
DVW_TTGanesh.halffm_RI_2     = "\u00D0";
DVW_TTGanesh.halffm_RIM_1    = "\u00CD";
DVW_TTGanesh.halffm_RIM_2    = "\u00D1";
DVW_TTGanesh.halffm_RII      = "\u00D4";
DVW_TTGanesh.halffm_RIIM     = "\u00D5";
DVW_TTGanesh.halffm_REE      = "\u00E6";
DVW_TTGanesh.halffm_RA_ANU   = "\u00C8";
DVW_TTGanesh.halffm_REEM     = "\u00E7";
DVW_TTGanesh.halffm_RAI      = "\u00EA";
DVW_TTGanesh.halffm_RAIM     = "\u00EB";
DVW_TTGanesh.halffm_RE       = "\u00E2";
DVW_TTGanesh.halffm_REM      = "\u00E3";
DVW_TTGanesh.halffm_CDR_RE   = "\u00EE";
DVW_TTGanesh.halffm_CDR_REM  = "\u00EF";


DVW_TTGanesh.om              = "\u0024";
DVW_TTGanesh.avagraha        = "\u0025";
DVW_TTGanesh.halffm_RRA      = "\u2020";
DVW_TTGanesh.virama          = "\u00C2";
DVW_TTGanesh.nukta           = "\u00C3";
DVW_TTGanesh.danda           = "\u002A";

//Devanagari Digits
DVW_TTGanesh.digit_ZERO      = "\u0030";
DVW_TTGanesh.digit_ONE       = "\u0031";
DVW_TTGanesh.digit_TWO       = "\u0032";
DVW_TTGanesh.digit_THREE     = "\u0033";
DVW_TTGanesh.digit_FOUR      = "\u0034";
DVW_TTGanesh.digit_FIVE      = "\u0035";
DVW_TTGanesh.digit_SIX       = "\u0036";
DVW_TTGanesh.digit_SEVEN     = "\u0037";
DVW_TTGanesh.digit_EIGHT     = "\u0038";
DVW_TTGanesh.digit_NINE      = "\u0039";

//Matches ASCII
DVW_TTGanesh.EXCLAM          = "\u0021";
DVW_TTGanesh.QUOTE           = "\u0022";
DVW_TTGanesh.APOSTROPHE      = "\u0027";
DVW_TTGanesh.PARENLEFT       = "\u0028";
DVW_TTGanesh.PARENRIGHT      = "\u0029";
DVW_TTGanesh.COMMA	     = "\u002C";
DVW_TTGanesh.HYPHEN          = "\u002D";
DVW_TTGanesh.PERIOD          = "\u002E";
DVW_TTGanesh.SLASH           = "\u002F";
DVW_TTGanesh.COLON           = "\u003A";
DVW_TTGanesh.SEMICOLON       = "\u003B";
DVW_TTGanesh.QUESTION        = "\u003F";


DVW_TTGanesh.misc_UNKNOWN_1  = "\u0023";
DVW_TTGanesh.misc_UNKNOWN_2  = "\u0026";
DVW_TTGanesh.misc_UNKNOWN_3  = "\u00A0";
DVW_TTGanesh.space_1	     = "\u00F0";
DVW_TTGanesh.space_2	     = "\u00F1";
DVW_TTGanesh.space_3	     = "\u00F2";
DVW_TTGanesh.space_4	     = "\u00F3";
DVW_TTGanesh.space_5	     = "\u00F4";
DVW_TTGanesh.space_6	     = "\u00F5";
DVW_TTGanesh.space_7	     = "\u00F6";
DVW_TTGanesh.space_8	     = "\u00F7";
DVW_TTGanesh.space_9	     = "\u00F8";
DVW_TTGanesh.space_10	     = "\u00F9";
DVW_TTGanesh.space_11	     = "\u00FA";
DVW_TTGanesh.space_12	     = "\u00FB";
DVW_TTGanesh.space_13	     = "\u00FC";
DVW_TTGanesh.space_14	     = "\u00FD";
DVW_TTGanesh.space_15	     = "\u00FE";


DVW_TTGanesh.toPadma = new Array();

DVW_TTGanesh.toPadma[DVW_TTGanesh.anusvara]      = Padma.anusvara;
DVW_TTGanesh.toPadma[DVW_TTGanesh.candrabindu]   = Padma.candrabindu;

DVW_TTGanesh.toPadma[DVW_TTGanesh.vowel_SHT_A]   = Padma.vowel_SHT_A;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowel_A]       = Padma.vowel_A;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowel_AA]      = Padma.vowel_AA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowel_I]       = Padma.vowel_I;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowel_II]      = Padma.vowel_II;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowel_U]       = Padma.vowel_U;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowel_UU]      = Padma.vowel_UU;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowel_R]       = Padma.vowel_R;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowel_RR]      = Padma.vowel_RR;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowel_EE]      = Padma.vowel_EE;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowel_AI]      = Padma.vowel_AI;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowel_OO]      = Padma.vowel_OO;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowel_AU]      = Padma.vowel_AU;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowel_CDR_E]   = Padma.vowel_CDR_E;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowel_CDR_O]   = Padma.vowel_CDR_O;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowel_E]       = Padma.vowel_E;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowel_O]       = Padma.vowel_O;

//consonants
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_KA]     = Padma.consnt_KA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_KHA]    = Padma.consnt_KHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_KHA_2]  = Padma.consnt_KHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_GA]     = Padma.consnt_GA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_GHA]    = Padma.consnt_GHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_GHA_2]  = Padma.consnt_GHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_NGA]    = Padma.consnt_NGA;

DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_CA]     = Padma.consnt_CA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_CHA]    = Padma.consnt_CHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_JA]     = Padma.consnt_JA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_JHA]    = Padma.consnt_JHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_NYA]    = Padma.consnt_NYA;

DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_TTA]    = Padma.consnt_TTA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_TTA]    = Padma.halffm_TTA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_TTHA]   = Padma.consnt_TTHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_DDA]    = Padma.consnt_DDA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_DDA]    = Padma.halffm_DDA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_DDHA]   = Padma.consnt_DDHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_NNA]    = Padma.consnt_NNA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_NNA_2]  = Padma.consnt_NNA;

DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_TA]     = Padma.consnt_TA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_TA_2]   = Padma.consnt_TA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_THA]    = Padma.consnt_THA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_THA_2]  = Padma.consnt_THA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_DA]     = Padma.consnt_DA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_DA]     = Padma.halffm_DA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_DHA]    = Padma.consnt_DHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_DHA_2]  = Padma.consnt_DHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_NA]     = Padma.consnt_NA;

DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_PA]     = Padma.consnt_PA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_PHA]    = Padma.consnt_PHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_BA]     = Padma.consnt_BA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_BHA]    = Padma.consnt_BHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_BHA_2]  = Padma.consnt_BHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_MA]     = Padma.consnt_MA;

DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_YA]     = Padma.consnt_YA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_RA]     = Padma.consnt_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_LA_1]   = Padma.consnt_LA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_LA_2]   = Padma.consnt_LA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_VA]     = Padma.consnt_VA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_SHA_1]  = Padma.consnt_SHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_SHA_2]  = Padma.consnt_SHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_SHA_3]  = Padma.consnt_SHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_SSA]    = Padma.consnt_SSA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_SSA_2]  = Padma.consnt_SSA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_SA]     = Padma.consnt_SA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_HA]     = Padma.consnt_HA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_LLA]    = Padma.consnt_LLA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_KSHA]   = Padma.consnt_KA + Padma.vattu_SSA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_KSHA_2] = Padma.consnt_KA + Padma.vattu_SSA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_THRA]   = Padma.consnt_TA + Padma.vattu_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_JHNA]   = Padma.consnt_JA + Padma.vattu_NYA;

//Gunintamulu
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowelsn_AA]    = Padma.vowelsn_AA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowelsn_I_1]   = Padma.vowelsn_I;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowelsn_I_2]   = Padma.vowelsn_I;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowelsn_II]    = Padma.vowelsn_II;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowelsn_U_1]   = Padma.vowelsn_U;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowelsn_U_2]   = Padma.vowelsn_U;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowelsn_UU_1]  = Padma.vowelsn_UU;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowelsn_UU_2]  = Padma.vowelsn_UU;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowelsn_R]     = Padma.vowelsn_R;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowelsn_RR]    = Padma.vowelsn_RR;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowelsn_E]     = Padma.vowelsn_E;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowelsn_EE]    = Padma.vowelsn_EE;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowelsn_AI]    = Padma.vowelsn_AI;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowelsn_CDR_E] = Padma.vowelsn_CDR_E;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowelsn_CDR_O] = Padma.vowelsn_CDR_O;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowelsn_O]     = Padma.vowelsn_O;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowelsn_OO]    = Padma.vowelsn_OO;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowelsn_AU]    = Padma.vowelsn_AU;

//Additional consonants
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_QA]    = Padma.consnt_QA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_KHHA]  = Padma.consnt_KHHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_GHHA]  = Padma.consnt_GHHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_ZA]    = Padma.consnt_ZA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_DDDHA] = Padma.consnt_DDDHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_RHA]   = Padma.consnt_RHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.consnt_FA]    = Padma.consnt_FA;

//Matra + anusvara
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowelsn_IM_1]  = Padma.vowelsn_I + Padma.anusvara;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowelsn_IM_2]  = Padma.vowelsn_I + Padma.anusvara;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowelsn_IIM]   = Padma.vowelsn_II + Padma.anusvara;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowelsn_UM]    = Padma.vowelsn_U + Padma.anusvara;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowelsn_UUM]   = Padma.vowelsn_UU + Padma.anusvara;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowelsn_EM]    = Padma.vowelsn_E + Padma.anusvara;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowelsn_EEM]   = Padma.vowelsn_EE + Padma.anusvara;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowelsn_AIM]   = Padma.vowelsn_AI + Padma.anusvara;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vowelsn_CDR_EM]= Padma.vowelsn_CDR_E + Padma.anusvara;

//Halffm
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_KA]     = Padma.halffm_KA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_QA]     = Padma.halffm_QA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_KHA]    = Padma.halffm_KHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_KHHA]   = Padma.halffm_KHHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_GA]     = Padma.halffm_GA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_GHHA]   = Padma.halffm_GHHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_GHA]    = Padma.halffm_GHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_CA]     = Padma.halffm_CA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_JA]     = Padma.halffm_JA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_ZA]     = Padma.halffm_ZA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_JHA]    = Padma.halffm_JHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_NYA]    = Padma.halffm_NYA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_NNA]    = Padma.halffm_NNA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_TA]     = Padma.halffm_TA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_THA]    = Padma.halffm_THA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_DHA]    = Padma.halffm_DHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_NA]     = Padma.halffm_NA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_PA]     = Padma.halffm_PA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_PHA]    = Padma.halffm_PHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_FA]     = Padma.halffm_FA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_BA]     = Padma.halffm_BA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_BHA]    = Padma.halffm_BHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_MA]     = Padma.halffm_MA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_YA]     = Padma.halffm_YA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_RA]     = Padma.halffm_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_LA]     = Padma.halffm_LA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_VA]     = Padma.halffm_VA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_SHA_1]  = Padma.halffm_SHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_SHA_2]  = Padma.halffm_SHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_SSA]    = Padma.halffm_SSA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_SA]     = Padma.halffm_SA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_HA]     = Padma.halffm_HA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_LLA]    = Padma.halffm_LLA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_KSHA]   = Padma.halffm_KA  + Padma.halffm_SSA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_THRA]   = Padma.halffm_TA  + Padma.vattu_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_JHNA]   = Padma.halffm_JA  + Padma.vattu_NYA;

//Conjuncts
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_IIM]    = Padma.vowel_II + Padma.anusvara;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_KRA]    = Padma.consnt_KA + Padma.vattu_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_KTA]    = Padma.consnt_KA + Padma.vattu_TA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_KHRA]   = Padma.vattu_KHA + Padma.vattu_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_GRA]    = Padma.halffm_GA + Padma.halffm_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_GRA]    = Padma.consnt_GA + Padma.vattu_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_GHRA]   = Padma.vattu_GHA + Padma.vattu_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_CRA]    = Padma.vattu_CA + Padma.vattu_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_JRA]    = Padma.halffm_JA + Padma.halffm_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_JRA]    = Padma.consnt_JA + Padma.vattu_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_JHRA]   = Padma.vattu_JHA + Padma.vattu_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_TTATTA] = Padma.consnt_TTA + Padma.vattu_TTA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_TTATTHA]= Padma.consnt_TTA + Padma.vattu_TTHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_DDADDA] = Padma.consnt_DDA + Padma.vattu_DDA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_DDADDHA]= Padma.consnt_DDA + Padma.vattu_DDHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_TATA]   = Padma.consnt_TA + Padma.vattu_TA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_TATA]   = Padma.halffm_TA + Padma.halffm_TA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_THAR]   = Padma.vattu_THA + Padma.vattu_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_DRU]    = Padma.consnt_DA + Padma.vowelsn_R;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_DRA]    = Padma.consnt_DA + Padma.vattu_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_DADA]   = Padma.consnt_DA + Padma.vattu_DA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_DADHA]  = Padma.consnt_DA + Padma.vattu_DHA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_DHMA]   = Padma.consnt_DA + Padma.vattu_MA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_DHYA]   = Padma.consnt_DA + Padma.vattu_YA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_DVA]    = Padma.consnt_DA + Padma.vattu_VA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_DHRA]   = Padma.vattu_DHA + Padma.vattu_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_NRA]    = Padma.consnt_NA + Padma.vattu_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_NRA]    = Padma.halffm_NA + Padma.halffm_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_NN]     = Padma.consnt_NA + Padma.vattu_NA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_NN]     = Padma.halffm_NA + Padma.halffm_NA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_PR]     = Padma.halffm_PA + Padma.halffm_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_PRA]    = Padma.consnt_PA + Padma.vattu_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_PHRA]   = Padma.vattu_PHA + Padma.vattu_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_BRA]    = Padma.vattu_BA + Padma.vattu_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_BRA]    = Padma.consnt_BA + Padma.vattu_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_BHRA]   = Padma.consnt_BHA + Padma.vattu_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_BHRA]   = Padma.halffm_BHA + Padma.halffm_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_MRA]    = Padma.consnt_MA + Padma.vattu_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_MRA]    = Padma.halffm_MA + Padma.halffm_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_YRA]    = Padma.vattu_YA + Padma.vattu_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_RU]     = Padma.consnt_RA + Padma.vowelsn_U;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_RUU]    = Padma.consnt_RA + Padma.vowelsn_UU;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_LLA]    = Padma.vattu_LA + Padma.vattu_LA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_VRA]    = Padma.vattu_VA + Padma.vattu_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_SHVA]   = Padma.halffm_SHA + Padma.halffm_VA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_SHVA]   = Padma.consnt_SHA + Padma.vattu_VA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_SHRA]   = Padma.halffm_SHA + Padma.halffm_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_SHRA]   = Padma.consnt_SHA + Padma.vattu_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_SRA]    = Padma.consnt_SA + Padma.vattu_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_SRA]    = Padma.halffm_SA + Padma.halffm_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_HRU]    = Padma.consnt_HA + Padma.vowelsn_R;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_HRA]    = Padma.vattu_HA + Padma.vattu_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_HMA]    = Padma.consnt_HA + Padma.vattu_MA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_HYA]    = Padma.consnt_HA + Padma.vattu_YA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_UR]     = Padma.vattu_RA + Padma.vowelsn_U;
DVW_TTGanesh.toPadma[DVW_TTGanesh.conjct_UUR]    = Padma.vattu_RA + Padma.vowelsn_UU;


DVW_TTGanesh.toPadma[DVW_TTGanesh.vattu_RA]      = Padma.vattu_RA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.vattu_YA]      = Padma.vattu_YA;

//half form of RA
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_RI_1]   = Padma.halffm_RA + Padma.vowelsn_I;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_RI_2]   = Padma.halffm_RA + Padma.vowelsn_I;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_RIM_1]  = Padma.halffm_RA + Padma.vowelsn_I + Padma.anusvara;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_RIM_2]  = Padma.halffm_RA + Padma.vowelsn_I + Padma.anusvara;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_RII]    = Padma.halffm_RA + Padma.vowelsn_II;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_RIIM]   = Padma.halffm_RA + Padma.vowelsn_II + Padma.anusvara;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_REE]    = Padma.halffm_RA + Padma.vowelsn_EE; 
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_RA_ANU] = Padma.halffm_RA + Padma.anusvara;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_REEM]   = Padma.halffm_RA + Padma.vowelsn_EE + Padma.anusvara;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_RAI]    = Padma.halffm_RA + Padma.vowelsn_AI;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_RAIM]   = Padma.halffm_RA + Padma.vowelsn_AI + Padma.anusvara;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_RE]     = Padma.halffm_RA + Padma.vowelsn_E;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_REM]    = Padma.halffm_RA + Padma.vowelsn_E + Padma.anusvara;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_CDR_RE] = Padma.halffm_RA + Padma.vowelsn_CDR_E;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_CDR_REM]= Padma.halffm_RA + Padma.vowelsn_CDR_E + Padma.anusvara;


DVW_TTGanesh.toPadma[DVW_TTGanesh.om]        = Padma.om;
DVW_TTGanesh.toPadma[DVW_TTGanesh.avagraha]  = Padma.avagraha;
DVW_TTGanesh.toPadma[DVW_TTGanesh.halffm_RRA]= Padma.halffm_RRA;
DVW_TTGanesh.toPadma[DVW_TTGanesh.virama]    = Padma.syllbreak;
DVW_TTGanesh.toPadma[DVW_TTGanesh.nukta]     = Padma.nukta;
DVW_TTGanesh.toPadma[DVW_TTGanesh.danda]     = Padma.danda;

//Digits
DVW_TTGanesh.toPadma[DVW_TTGanesh.digit_ZERO]    = Padma.digit_ZERO;
DVW_TTGanesh.toPadma[DVW_TTGanesh.digit_ONE]     = Padma.digit_ONE;
DVW_TTGanesh.toPadma[DVW_TTGanesh.digit_TWO]     = Padma.digit_TWO;
DVW_TTGanesh.toPadma[DVW_TTGanesh.digit_THREE]   = Padma.digit_THREE;
DVW_TTGanesh.toPadma[DVW_TTGanesh.digit_FOUR]    = Padma.digit_FOUR;
DVW_TTGanesh.toPadma[DVW_TTGanesh.digit_FIVE]    = Padma.digit_FIVE;
DVW_TTGanesh.toPadma[DVW_TTGanesh.digit_SIX]     = Padma.digit_SIX;
DVW_TTGanesh.toPadma[DVW_TTGanesh.digit_SEVEN]   = Padma.digit_SEVEN;
DVW_TTGanesh.toPadma[DVW_TTGanesh.digit_EIGHT]   = Padma.digit_EIGHT;
DVW_TTGanesh.toPadma[DVW_TTGanesh.digit_NINE]    = Padma.digit_NINE;

DVW_TTGanesh.prefixList = new Array();
DVW_TTGanesh.prefixList[DVW_TTGanesh.vowelsn_I_1]     = true;
DVW_TTGanesh.prefixList[DVW_TTGanesh.vowelsn_I_2]     = true;
DVW_TTGanesh.prefixList[DVW_TTGanesh.vowelsn_IM_1]    = true;
DVW_TTGanesh.prefixList[DVW_TTGanesh.vowelsn_IM_2]    = true;

DVW_TTGanesh.suffixList = new Array();
DVW_TTGanesh.suffixList[DVW_TTGanesh.halffm_RA]      = true;
DVW_TTGanesh.suffixList[DVW_TTGanesh.vowelsn_AA]     = true;
DVW_TTGanesh.suffixList[DVW_TTGanesh.vowelsn_II]     = true;
DVW_TTGanesh.suffixList[DVW_TTGanesh.vowelsn_IIM]    = true;
DVW_TTGanesh.suffixList[DVW_TTGanesh.halffm_RII]     = true;
DVW_TTGanesh.suffixList[DVW_TTGanesh.halffm_RIIM]    = true;
DVW_TTGanesh.suffixList[DVW_TTGanesh.halffm_REE]     = true;
DVW_TTGanesh.suffixList[DVW_TTGanesh.halffm_REEM]    = true;
DVW_TTGanesh.suffixList[DVW_TTGanesh.halffm_RAI]     = true;
DVW_TTGanesh.suffixList[DVW_TTGanesh.halffm_RAIM]    = true;
DVW_TTGanesh.suffixList[DVW_TTGanesh.halffm_RA_ANU]  = true;
DVW_TTGanesh.suffixList[DVW_TTGanesh.halffm_RE]      = true;
DVW_TTGanesh.suffixList[DVW_TTGanesh.halffm_REM]     = true;
DVW_TTGanesh.suffixList[DVW_TTGanesh.halffm_CDR_RE]  = true;
DVW_TTGanesh.suffixList[DVW_TTGanesh.halffm_CDR_REM] = true;


DVW_TTGanesh.redundantList = new Array();
DVW_TTGanesh.redundantList[DVW_TTGanesh.misc_UNKNOWN_1]  = true;
DVW_TTGanesh.redundantList[DVW_TTGanesh.misc_UNKNOWN_2]  = true;
DVW_TTGanesh.redundantList[DVW_TTGanesh.misc_UNKNOWN_3]  = true;
DVW_TTGanesh.redundantList[DVW_TTGanesh.space_1] 	 = true;
DVW_TTGanesh.redundantList[DVW_TTGanesh.space_2] 	 = true;
DVW_TTGanesh.redundantList[DVW_TTGanesh.space_3] 	 = true;
DVW_TTGanesh.redundantList[DVW_TTGanesh.space_4] 	 = true;
DVW_TTGanesh.redundantList[DVW_TTGanesh.space_5] 	 = true;
DVW_TTGanesh.redundantList[DVW_TTGanesh.space_6] 	 = true;
DVW_TTGanesh.redundantList[DVW_TTGanesh.space_7] 	 = true;
DVW_TTGanesh.redundantList[DVW_TTGanesh.space_8] 	 = true;
DVW_TTGanesh.redundantList[DVW_TTGanesh.space_9] 	 = true;
DVW_TTGanesh.redundantList[DVW_TTGanesh.space_10]	 = true;
DVW_TTGanesh.redundantList[DVW_TTGanesh.space_11]	 = true;
DVW_TTGanesh.redundantList[DVW_TTGanesh.space_12]	 = true;
DVW_TTGanesh.redundantList[DVW_TTGanesh.space_13]	 = true;
DVW_TTGanesh.redundantList[DVW_TTGanesh.space_14]	 = true;
DVW_TTGanesh.redundantList[DVW_TTGanesh.space_15]	 = true;

DVW_TTGanesh.overloadList = new Array();
DVW_TTGanesh.overloadList[DVW_TTGanesh.vowel_A]      = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.vowel_AA]     = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.vowel_EE]     = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.vowel_I]      = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.vowelsn_AA]   = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_KA]    = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_QA]    = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_KHA]   = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_KHHA]  = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_GA]    = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_GHA]   = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_CA]    = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_JA]    = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_ZA]    = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_JHA]   = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_NYA]   = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_NNA]   = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_TA]    = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_THA]   = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_DHA]   = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_NA]    = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_PA]    = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_PHA]   = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_FA]    = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_BA]    = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_BHA]   = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_MA]    = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_YA]    = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_LA]    = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_VA]    = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_SHA_1] = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_SHA_2] = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_SSA]   = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_SA]    = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_LLA]   = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_KSHA]  = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_THRA]  = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_JHNA]  = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_NN]    = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_THRA]  = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_JHNA]  = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.conjct_KHRA]  = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_GRA]   = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.conjct_GHRA]  = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.conjct_CRA]   = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_JRA]   = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.conjct_JHRA]  = true;
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_TATA]  = true; 
DVW_TTGanesh.overloadList[DVW_TTGanesh.conjct_THAR]  = true; 
DVW_TTGanesh.overloadList[DVW_TTGanesh.conjct_DHRA]  = true; 
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_NRA]   = true; 
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_PR]    = true; 
DVW_TTGanesh.overloadList[DVW_TTGanesh.conjct_PHRA]  = true; 
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_BRA]   = true; 
DVW_TTGanesh.overloadList[DVW_TTGanesh.conjct_BRA]   = true; 
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_BHRA]  = true; 
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_MRA]   = true; 
DVW_TTGanesh.overloadList[DVW_TTGanesh.conjct_YRA]   = true; 
DVW_TTGanesh.overloadList[DVW_TTGanesh.conjct_VRA]   = true; 
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_SHVA]  = true; 
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_SRA]   = true; 
DVW_TTGanesh.overloadList[DVW_TTGanesh.halffm_SHRA]  = true; 
DVW_TTGanesh.overloadList[DVW_TTGanesh.consnt_TTA]   = true; 
DVW_TTGanesh.overloadList[DVW_TTGanesh.consnt_DDA]   = true; 
DVW_TTGanesh.overloadList[DVW_TTGanesh.consnt_DA]    = true; 

//DVW-TTYogesh 
function DVW_TTYogesh()
{
}

DVW_TTYogesh.maxLookupLen = DVW_TTGanesh.maxLookupLen;
DVW_TTYogesh.fontFace     = "DVW-TTYogesh";
DVW_TTYogesh.displayName  = "DVW_TTYogesh";
DVW_TTYogesh.script       = DVW_TTGanesh.script;
DVW_TTYogesh.hasSuffixes  = DVW_TTGanesh.hasSuffixes;

DVW_TTYogesh.lookup = function (str)
{
    return DVW_TTGanesh.lookup(str);
}

DVW_TTYogesh.isPrefixSymbol = function (str)
{
    return DVW_TTGanesh.isPrefixSymbol(str);
}

DVW_TTYogesh.isSuffixSymbol = function (str)
{
    return DVW_TTGanesh.isSuffixSymbol(str);
}

DVW_TTYogesh.isOverloaded = function (str)
{
    return DVW_TTGanesh.isOverloaded(str);
}

DVW_TTYogesh.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return DVW_TTGanesh.handleTwoPartVowelSigns(sign1, sign2);
}

DVW_TTYogesh.isRedundant = function (str)
{
    return DVW_TTGanesh.isRedundant(str);
}

//DVW-TTSurekh
function DVW_TTSurekh()
{
}

DVW_TTSurekh.maxLookupLen = DVW_TTGanesh.maxLookupLen;
DVW_TTSurekh.fontFace     = "DVW-TTSurekh";
DVW_TTSurekh.displayName  = "DVW_TTSurekh";
DVW_TTSurekh.script       = DVW_TTGanesh.script;
DVW_TTSurekh.hasSuffixes  = DVW_TTGanesh.hasSuffixes;

DVW_TTSurekh.lookup = function (str)
{
    return DVW_TTGanesh.lookup(str);
}

DVW_TTSurekh.isPrefixSymbol = function (str)
{
    return DVW_TTGanesh.isPrefixSymbol(str);
}

DVW_TTSurekh.isSuffixSymbol = function (str)
{
    return DVW_TTGanesh.isSuffixSymbol(str);
}

DVW_TTSurekh.isOverloaded = function (str)
{
    return DVW_TTGanesh.isOverloaded(str);
}

DVW_TTSurekh.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return DVW_TTGanesh.handleTwoPartVowelSigns(sign1, sign2);
}

DVW_TTSurekh.isRedundant = function (str)
{
    return DVW_TTGanesh.isRedundant(str);
}

//DVW-TTGaneshEN
function DVW_TTGaneshEN()
{
}

DVW_TTGaneshEN.maxLookupLen = DVW_TTGanesh.maxLookupLen;
DVW_TTGaneshEN.fontFace     = "DVW-TTGaneshEN";
DVW_TTGaneshEN.displayName  = "DVW_TTGaneshEN";
DVW_TTGaneshEN.script       = DVW_TTGanesh.script;
DVW_TTGaneshEN.hasSuffixes  = DVW_TTGanesh.hasSuffixes;

DVW_TTGaneshEN.lookup = function (str)
{
    return DVW_TTGanesh.lookup(str);
}

DVW_TTGaneshEN.isPrefixSymbol = function (str)
{
    return DVW_TTGanesh.isPrefixSymbol(str);
}

DVW_TTGaneshEN.isSuffixSymbol = function (str)
{
    return DVW_TTGanesh.isSuffixSymbol(str);
}

DVW_TTGaneshEN.isOverloaded = function (str)
{
    return DVW_TTGanesh.isOverloaded(str);
}

DVW_TTGaneshEN.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return DVW_TTGanesh.handleTwoPartVowelSigns(sign1, sign2);
}

DVW_TTGaneshEN.isRedundant = function (str)
{
    return DVW_TTGanesh.isRedundant(str);
}


//DVW-TTYogeshEN
function DVW_TTYogeshEN()
{
}

DVW_TTYogeshEN.maxLookupLen = DVW_TTGanesh.maxLookupLen;
DVW_TTYogeshEN.fontFace     = "DVW-TTYogeshEN";
DVW_TTYogeshEN.displayName  = "DVW_TTYogeshEN";
DVW_TTYogeshEN.script       = DVW_TTGanesh.script;
DVW_TTYogeshEN.hasSuffixes  = DVW_TTGanesh.hasSuffixes;

DVW_TTYogeshEN.lookup = function (str)
{
    return DVW_TTGanesh.lookup(str);
}

DVW_TTYogeshEN.isPrefixSymbol = function (str)
{
    return DVW_TTGanesh.isPrefixSymbol(str);
}

DVW_TTYogeshEN.isSuffixSymbol = function (str)
{
    return DVW_TTGanesh.isSuffixSymbol(str);
}

DVW_TTYogeshEN.isOverloaded = function (str)
{
    return DVW_TTGanesh.isOverloaded(str);
}

DVW_TTYogeshEN.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return DVW_TTGanesh.handleTwoPartVowelSigns(sign1, sign2);
}

DVW_TTYogeshEN.isRedundant = function (str)
{
    return DVW_TTGanesh.isRedundant(str);
}


//DVW-TTSurekhEN
function DVW_TTSurekhEN()
{
}

DVW_TTSurekhEN.maxLookupLen = DVW_TTGanesh.maxLookupLen;
DVW_TTSurekhEN.fontFace     = "DVW-TTSurekhEN";
DVW_TTSurekhEN.displayName  = "DVW_TTSurekhEN";
DVW_TTSurekhEN.script       = DVW_TTGanesh.script;
DVW_TTSurekhEN.hasSuffixes  = DVW_TTGanesh.hasSuffixes;

DVW_TTSurekhEN.lookup = function (str)
{
    return DVW_TTGanesh.lookup(str);
}

DVW_TTSurekhEN.isPrefixSymbol = function (str)
{
    return DVW_TTGanesh.isPrefixSymbol(str);
}

DVW_TTSurekhEN.isSuffixSymbol = function (str)
{
    return DVW_TTGanesh.isSuffixSymbol(str);
}

DVW_TTSurekhEN.isOverloaded = function (str)
{
    return DVW_TTGanesh.isOverloaded(str);
}

DVW_TTSurekhEN.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return DVW_TTGanesh.handleTwoPartVowelSigns(sign1, sign2);
}

DVW_TTSurekhEN.isRedundant = function (str)
{
    return DVW_TTGanesh.isRedundant(str);
}
