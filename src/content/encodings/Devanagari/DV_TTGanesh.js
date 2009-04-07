//$Id: DV_TTGanesh.js,v 1.3 2009/04/07 06:21:39 harshita Exp $

//Copyright 2008-2009 Rajagiri Ravi <rajagiriwcmp@yahoo.com>
//Copyright 2008-2009 Harshita Vani <harshita@atc.tcs.com> 

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

//DV-TT fonts Devanagari

//DV-TTGanesh 
function DV_TTGanesh()
{
}

//The interface every dynamic font encoding should implement
DV_TTGanesh.maxLookupLen = 3;
DV_TTGanesh.fontFace     = "DV-TTGanesh";
DV_TTGanesh.displayName  = "DV_TTGanesh";
DV_TTGanesh.script       = Padma.script_DEVANAGARI;
DV_TTGanesh.hasSuffixes  = true;

DV_TTGanesh.lookup = function (str) 
{
    return DV_TTGanesh.toPadma[str];
}

DV_TTGanesh.isPrefixSymbol = function (str)
{
    return DV_TTGanesh.prefixList[str] != null;
}

DV_TTGanesh.isSuffixSymbol = function (str)
{
    return DV_TTGanesh.suffixList[str] != null;
}

DV_TTGanesh.isOverloaded = function (str)
{
    return DV_TTGanesh.overloadList[str] != null;
}

DV_TTGanesh.handleTwoPartVowelSigns = function (sign1, sign2)
{
   if ((sign1 == Padma.vowelsn_EE && sign2 == Padma.vowelsn_AA) ||
       (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_EE))
        return Padma.vowelsn_OO;
    if ((sign1 == Padma.vowelsn_AI && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_AI))
        return Padma.vowelsn_AU;
    return sign1 + sign2;    
}

DV_TTGanesh.isRedundant = function (str)
{
    return DV_TTGanesh.redundantList[str] != null;
}

//Implementation details start here

//Specials
DV_TTGanesh.anusvara          = "\u00C6";
DV_TTGanesh.candrabindu       = "\u00C4"; 

//Vowels
DV_TTGanesh.vowel_SHT_A     = "\u002B\u00E0";
DV_TTGanesh.vowel_A         = "\u002B";
DV_TTGanesh.vowel_AA        = "\u002B\u00C9";
DV_TTGanesh.vowel_I         = "\u003C";
DV_TTGanesh.vowel_II        = "\u003C\u00C7";
DV_TTGanesh.vowel_U         = "\u003D";
DV_TTGanesh.vowel_UU        = "\u003E";
DV_TTGanesh.vowel_R         = "\u0040";
DV_TTGanesh.vowel_RR        = "\u0041";
DV_TTGanesh.vowel_EE        = "\u0042";
DV_TTGanesh.vowel_AI        = "\u0042\u00E4";
DV_TTGanesh.vowel_OO        = "\u002B\u00C9\u00E4";
DV_TTGanesh.vowel_AU        = "\u002B\u00C9\u00E8";
DV_TTGanesh.vowel_CDR_E     = "\u0042\u00EC";
DV_TTGanesh.vowel_CDR_O     = "\u002B\u00C9\u00EC";
DV_TTGanesh.vowel_E	    = "\u0042\u00E0";
DV_TTGanesh.vowel_O	    = "\u002B\u00C9\u00E0";

//Consonants
DV_TTGanesh.consnt_KA       = "\u0045";
DV_TTGanesh.consnt_KHA      = "\u004A\u00C9";
DV_TTGanesh.consnt_KHA_2    = "\u004A\u002A";
DV_TTGanesh.consnt_GA       = "\u004D\u00C9";
DV_TTGanesh.consnt_GHA      = "\u0050\u00C9";
DV_TTGanesh.consnt_GHA_2    = "\u0050\u002A";
DV_TTGanesh.consnt_NGA      = "\u0052";

DV_TTGanesh.consnt_CA       = "\u0053\u00C9";
DV_TTGanesh.consnt_CHA      = "\u0055";
DV_TTGanesh.consnt_JA       = "\u0056\u00C9";
DV_TTGanesh.consnt_JHA      = "\u005A\u00C9";
DV_TTGanesh.consnt_NYA      = "\u005C\u00E6";

DV_TTGanesh.consnt_TTA      = "\u005D";
DV_TTGanesh.halffm_TTA      = "\u005D\u00C2";
DV_TTGanesh.consnt_TTHA     = "\u0060";
DV_TTGanesh.consnt_DDA      = "\u0062";
DV_TTGanesh.halffm_DDA      = "\u0062\u00C2";
DV_TTGanesh.consnt_DDHA     = "\u0066";
DV_TTGanesh.consnt_NNA      = "\u0068\u00C9";
DV_TTGanesh.consnt_NNA_2    = "\u0068\u002A";

DV_TTGanesh.consnt_TA       = "\u0069\u00C9";
DV_TTGanesh.consnt_TA_2     = "\u0069\u002A";
DV_TTGanesh.consnt_THA      = "\u006C\u00C9";
DV_TTGanesh.consnt_THA_2    = "\u006C\u002A";
DV_TTGanesh.consnt_DA       = "\u006E";
DV_TTGanesh.halffm_DA       = "\u006E\u00C2";
DV_TTGanesh.consnt_DHA      = "\u0076\u00C9";
DV_TTGanesh.consnt_DHA_2    = "\u0076\u002A";
DV_TTGanesh.consnt_NA       = "\u0078\u00C9";

DV_TTGanesh.consnt_PA       = "\u007B\u00C9";
DV_TTGanesh.consnt_PHA      = "\u00A1";
DV_TTGanesh.consnt_BA       = "\u00A4\u00C9";
DV_TTGanesh.consnt_BHA      = "\u00A6\u00C9";
DV_TTGanesh.consnt_BHA_2    = "\u00A6\u002A";
DV_TTGanesh.consnt_MA       = "\u00A8\u00C9";

DV_TTGanesh.consnt_YA       = "\u00AA\u00C9";
DV_TTGanesh.consnt_RA       = "\u00AE";
DV_TTGanesh.consnt_LA       = "\u00B1\u00C9";
DV_TTGanesh.consnt_VA       = "\u00B4\u00C9";
DV_TTGanesh.consnt_SHA_1    = "\u00B6\u00C9";
DV_TTGanesh.consnt_SHA_2    = "\u00A0\u00C9";
DV_TTGanesh.consnt_SHA_3    = "\u00B6\u002A";
DV_TTGanesh.consnt_SSA      = "\u00B9\u00C9";
DV_TTGanesh.consnt_SSA_2    = "\u00B9\u002A";
DV_TTGanesh.consnt_SA       = "\u00BA\u00C9";
DV_TTGanesh.consnt_HA       = "\u00BD";
DV_TTGanesh.consnt_LLA      = "\u00B3";
DV_TTGanesh.consnt_KSHA     = "\u0049\u00C9";
DV_TTGanesh.consnt_KSHA_2   = "\u0049\u002A";
DV_TTGanesh.consnt_THRA     = "\u006A\u00C9";
DV_TTGanesh.consnt_JHNA     = "\u0059\u00C9";

//Gunintamulu
DV_TTGanesh.vowelsn_AA      = "\u00C9";
DV_TTGanesh.vowelsn_I_1     = "\u00CA";
DV_TTGanesh.vowelsn_I_2     = "\u00CE";
DV_TTGanesh.vowelsn_II      = "\u00D2";
DV_TTGanesh.vowelsn_U_1     = "\u00D6";
DV_TTGanesh.vowelsn_U_2     = "\u00D9";
DV_TTGanesh.vowelsn_UU_1    = "\u00DA";
DV_TTGanesh.vowelsn_UU_2    = "\u00DD";
DV_TTGanesh.vowelsn_R       = "\u00DE";
DV_TTGanesh.vowelsn_RR      = "\u00DF";
DV_TTGanesh.vowelsn_E       = "\u00E0";
DV_TTGanesh.vowelsn_EE      = "\u00E4";
DV_TTGanesh.vowelsn_AI      = "\u00E8";
DV_TTGanesh.vowelsn_CDR_E   = "\u00EC";
DV_TTGanesh.vowelsn_CDR_O   = "\u00C9\u00EC";
DV_TTGanesh.vowelsn_O       = "\u00C9\u00E0";
DV_TTGanesh.vowelsn_OO      = "\u00C9\u00E4";
DV_TTGanesh.vowelsn_AU      = "\u00C9\u00E8";

//Matra + anusvara
DV_TTGanesh.vowelsn_IM_1      = "\u00CB";
DV_TTGanesh.vowelsn_IM_2      = "\u00CF";
DV_TTGanesh.vowelsn_IIM       = "\u00D3";
DV_TTGanesh.vowelsn_UM        = "\u00D7";
DV_TTGanesh.vowelsn_UUM       = "\u00DB";
DV_TTGanesh.vowelsn_EM        = "\u00E1";
DV_TTGanesh.vowelsn_EEM       = "\u00E5";
DV_TTGanesh.vowelsn_AIM       = "\u00E9";
DV_TTGanesh.vowelsn_CDR_EM    = "\u00ED";

//Additional consonants
DV_TTGanesh.consnt_QA       = "\u0046";
DV_TTGanesh.consnt_KHHA     = "\u004B\u00C9";
DV_TTGanesh.consnt_GHHA     = "\u004E\u00C9";
DV_TTGanesh.consnt_ZA       = "\u0057\u00C9";
DV_TTGanesh.consnt_DDDHA    = "\u0063";
DV_TTGanesh.consnt_RHA      = "\u0067";
DV_TTGanesh.consnt_FA       = "\u00A2";

//Half Forms
DV_TTGanesh.halffm_KA       = "\u0043";
DV_TTGanesh.halffm_QA       = "\u0044";
DV_TTGanesh.halffm_KHA      = "\u004A";
DV_TTGanesh.halffm_KHHA     = "\u004B";
DV_TTGanesh.halffm_GA       = "\u004D";
DV_TTGanesh.halffm_GHHA     = "\u004E";
DV_TTGanesh.halffm_GHA      = "\u0050";
DV_TTGanesh.halffm_CA       = "\u0053";
DV_TTGanesh.halffm_JA       = "\u0056";
DV_TTGanesh.halffm_ZA       = "\u0057";
DV_TTGanesh.halffm_JHA      = "\u005A";
DV_TTGanesh.halffm_NYA      = "\u005C";
DV_TTGanesh.halffm_NNA      = "\u0068";
DV_TTGanesh.halffm_TA       = "\u0069";
DV_TTGanesh.halffm_THA      = "\u006C";
DV_TTGanesh.halffm_DHA      = "\u0076";
DV_TTGanesh.halffm_NA       = "\u0078";
DV_TTGanesh.halffm_PA       = "\u007B";
DV_TTGanesh.halffm_PHA      = "\u007D";
DV_TTGanesh.halffm_FA       = "\u007E";
DV_TTGanesh.halffm_BA       = "\u00A4";
DV_TTGanesh.halffm_BHA      = "\u00A6";
DV_TTGanesh.halffm_MA       = "\u00A8";
DV_TTGanesh.halffm_YA       = "\u00AA";
DV_TTGanesh.halffm_RA       = "\u00C7";
DV_TTGanesh.halffm_LA       = "\u00B1";
DV_TTGanesh.halffm_VA       = "\u00B4";
DV_TTGanesh.halffm_SHA_1    = "\u00B6";
DV_TTGanesh.halffm_SHA_2    = "\u00A0";
DV_TTGanesh.halffm_SSA      = "\u00B9";
DV_TTGanesh.halffm_SA       = "\u00BA";
DV_TTGanesh.halffm_HA       = "\u00BC";
DV_TTGanesh.halffm_LLA      = "\u00B2";
DV_TTGanesh.halffm_KSHA     = "\u0049";
DV_TTGanesh.halffm_THRA     = "\u006A";
DV_TTGanesh.halffm_JHNA     = "\u0059";

//Conjuncts
DV_TTGanesh.conjct_KRA      = "\u0047";
DV_TTGanesh.conjct_KTA      = "\u0048";
DV_TTGanesh.conjct_KHRA     = "\u004C";
DV_TTGanesh.halffm_GRA      = "\u004F";
DV_TTGanesh.conjct_GRA      = "\u004F\u00C9";
DV_TTGanesh.conjct_GHRA     = "\u0051";
DV_TTGanesh.conjct_CRA      = "\u0054";
DV_TTGanesh.halffm_JRA      = "\u0058";
DV_TTGanesh.conjct_JRA      = "\u0058\u00C9";
DV_TTGanesh.conjct_JHRA     = "\u005B";
DV_TTGanesh.conjct_TTATTA   = "\u005E";
DV_TTGanesh.conjct_TTATTHA  = "\u005F";
DV_TTGanesh.conjct_TTHATTHA = "\u0061";
DV_TTGanesh.conjct_DDADDA   = "\u0064";
DV_TTGanesh.conjct_DDADDHA  = "\u0065";
DV_TTGanesh.conjct_TATA     = "\u006B\u00C9";
DV_TTGanesh.halffm_TATA     = "\u006B";
DV_TTGanesh.conjct_THAR     = "\u006D";
DV_TTGanesh.conjct_DRU      = "\u006F";
DV_TTGanesh.conjct_DRA      = "\u0070";
DV_TTGanesh.conjct_DADA     = "\u0071";
DV_TTGanesh.conjct_DADHA    = "\u0072";
DV_TTGanesh.conjct_DHMA     = "\u0073";
DV_TTGanesh.conjct_DHYA     = "\u0074";
DV_TTGanesh.conjct_DVA      = "\u0075";
DV_TTGanesh.conjct_DHRA     = "\u0077";
DV_TTGanesh.halffm_NRA      = "\u0079";
DV_TTGanesh.conjct_NRA      = "\u0079\u00C9";
DV_TTGanesh.halffm_NN       = "\u007A";
DV_TTGanesh.conjct_NN       = "\u007A\u00C9";
DV_TTGanesh.halffm_PR       = "\u007C";
DV_TTGanesh.conjct_PRA      = "\u007C\u00C9";
DV_TTGanesh.conjct_PHRA     = "\u00A3";
DV_TTGanesh.halffm_BRA      = "\u00A5";
DV_TTGanesh.conjct_BRA      = "\u00A5\u00C9";
DV_TTGanesh.halffm_BHRA     = "\u00A7";
DV_TTGanesh.conjct_BHRA     = "\u00A7\u00C9";
DV_TTGanesh.conjct_MRA      = "\u00A9\u00C9";
DV_TTGanesh.halffm_MRA      = "\u00A9";
DV_TTGanesh.conjct_YRA      = "\u00AB";
DV_TTGanesh.conjct_RU       = "\u00AF";
DV_TTGanesh.conjct_RUU      = "\u00B0";
DV_TTGanesh.conjct_VRA      = "\u00B5";
DV_TTGanesh.halffm_SHVA     = "\u00B7";
DV_TTGanesh.conjct_SHVA     = "\u00B7\u00C9";
DV_TTGanesh.halffm_SHRA     = "\u00B8";
DV_TTGanesh.conjct_SHRA     = "\u00B8\u00C9";
DV_TTGanesh.halffm_SRA      = "\u00BB";
DV_TTGanesh.conjct_SRA      = "\u00BB\u00C9";
DV_TTGanesh.conjct_HRU      = "\u00BE";
DV_TTGanesh.conjct_HRA      = "\u00BF";
DV_TTGanesh.conjct_HMA      = "\u00C0";
DV_TTGanesh.conjct_HYA      = "\u00C1";
DV_TTGanesh.conjct_UR       = "\u00D8";
DV_TTGanesh.conjct_UUR      = "\u00DC";

//rakar
DV_TTGanesh.vattu_RA      = "\u00C5";
DV_TTGanesh.vattu_YA      = "\u00AC";

//Half RA's
DV_TTGanesh.halffm_RI_1    = "\u00CC";
DV_TTGanesh.halffm_RI_2    = "\u00D0";
DV_TTGanesh.halffm_RIM_1   = "\u00CD";
DV_TTGanesh.halffm_RIM_2   = "\u00D1";
DV_TTGanesh.halffm_RII     = "\u00D4";
DV_TTGanesh.halffm_RIIM    = "\u00D5";
DV_TTGanesh.halffm_REE     = "\u00E6";
DV_TTGanesh.halffm_RA_ANU  = "\u00C8";
DV_TTGanesh.halffm_REEM    = "\u00E7";
DV_TTGanesh.halffm_RAI     = "\u00EA";
DV_TTGanesh.halffm_RAIM    = "\u00EB";
DV_TTGanesh.halffm_RE      = "\u00E2";
DV_TTGanesh.halffm_REM     = "\u00E3";
DV_TTGanesh.halffm_CDR_RE  = "\u00EE";
DV_TTGanesh.halffm_CDR_REM = "\u00EF";


DV_TTGanesh.om         = "\u0024";
DV_TTGanesh.avagraha   = "\u0025";
DV_TTGanesh.halffm_RRA = "\u00AD";
DV_TTGanesh.virama     = "\u00C2";
DV_TTGanesh.nukta      = "\u00C3";
DV_TTGanesh.danda      = "\u002A";

//Devanagari Digits
DV_TTGanesh.digit_ZERO     = "\u0030";
DV_TTGanesh.digit_ONE      = "\u0031";
DV_TTGanesh.digit_TWO      = "\u0032";
DV_TTGanesh.digit_THREE    = "\u0033";
DV_TTGanesh.digit_FOUR     = "\u0034";
DV_TTGanesh.digit_FIVE     = "\u0035";
DV_TTGanesh.digit_SIX      = "\u0036";
DV_TTGanesh.digit_SEVEN    = "\u0037";
DV_TTGanesh.digit_EIGHT    = "\u0038";
DV_TTGanesh.digit_NINE     = "\u0039";

//Matches ASCII
DV_TTGanesh.EXCLAM         = "\u0021";
DV_TTGanesh.QUOTE          = "\u0022";
DV_TTGanesh.APOSTROPHE     = "\u0027";
DV_TTGanesh.PARENLEFT      = "\u0028";
DV_TTGanesh.PARENRIGHT     = "\u0029";
DV_TTGanesh.COMMA	   = "\u002C";
DV_TTGanesh.HYPHEN         = "\u002D";
DV_TTGanesh.PERIOD         = "\u002E";
DV_TTGanesh.SLASH          = "\u002F";
DV_TTGanesh.COLON          = "\u003A";
DV_TTGanesh.SEMICOLON      = "\u003B";
DV_TTGanesh.QUESTION       = "\u003F";


DV_TTGanesh.misc_UNKNOWN_1  = "\u0023";
DV_TTGanesh.misc_UNKNOWN_2  = "\u0026";
DV_TTGanesh.space_1	    = "\u00F0";
DV_TTGanesh.space_2	    = "\u00F1";
DV_TTGanesh.space_3	    = "\u00F2";
DV_TTGanesh.space_4	    = "\u00F3";
DV_TTGanesh.space_5	    = "\u00F4";
DV_TTGanesh.space_6	    = "\u00F5";
DV_TTGanesh.space_7	    = "\u00F6";
DV_TTGanesh.space_8	    = "\u00F7";
DV_TTGanesh.space_9	    = "\u00F8";
DV_TTGanesh.space_10	    = "\u00F9";
DV_TTGanesh.space_11	    = "\u00FA";
DV_TTGanesh.space_12	    = "\u00FB";
DV_TTGanesh.space_13	    = "\u00FC";
DV_TTGanesh.space_14	    = "\u00FD";
DV_TTGanesh.space_15	    = "\u00FE";


DV_TTGanesh.toPadma = new Array();

DV_TTGanesh.toPadma[DV_TTGanesh.anusvara]      = Padma.anusvara;
DV_TTGanesh.toPadma[DV_TTGanesh.candrabindu]   = Padma.candrabindu;

DV_TTGanesh.toPadma[DV_TTGanesh.vowel_SHT_A]   = Padma.vowel_SHT_A;
DV_TTGanesh.toPadma[DV_TTGanesh.vowel_A]       = Padma.vowel_A;
DV_TTGanesh.toPadma[DV_TTGanesh.vowel_AA]      = Padma.vowel_AA;
DV_TTGanesh.toPadma[DV_TTGanesh.vowel_I]       = Padma.vowel_I;
DV_TTGanesh.toPadma[DV_TTGanesh.vowel_II]      = Padma.vowel_II;
DV_TTGanesh.toPadma[DV_TTGanesh.vowel_U]       = Padma.vowel_U;
DV_TTGanesh.toPadma[DV_TTGanesh.vowel_UU]      = Padma.vowel_UU;
DV_TTGanesh.toPadma[DV_TTGanesh.vowel_R]       = Padma.vowel_R;
DV_TTGanesh.toPadma[DV_TTGanesh.vowel_RR]      = Padma.vowel_RR;
DV_TTGanesh.toPadma[DV_TTGanesh.vowel_EE]      = Padma.vowel_EE;
DV_TTGanesh.toPadma[DV_TTGanesh.vowel_AI]      = Padma.vowel_AI;
DV_TTGanesh.toPadma[DV_TTGanesh.vowel_OO]      = Padma.vowel_OO;
DV_TTGanesh.toPadma[DV_TTGanesh.vowel_AU]      = Padma.vowel_AU;
DV_TTGanesh.toPadma[DV_TTGanesh.vowel_CDR_E]   = Padma.vowel_CDR_E;
DV_TTGanesh.toPadma[DV_TTGanesh.vowel_CDR_O]   = Padma.vowel_CDR_O;
DV_TTGanesh.toPadma[DV_TTGanesh.vowel_E]       = Padma.vowel_E;
DV_TTGanesh.toPadma[DV_TTGanesh.vowel_O]       = Padma.vowel_O;

//consonants
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_KA]     = Padma.consnt_KA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_KHA]    = Padma.consnt_KHA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_KHA_2]  = Padma.consnt_KHA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_GA]     = Padma.consnt_GA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_GHA]    = Padma.consnt_GHA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_GHA_2]  = Padma.consnt_GHA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_NGA]    = Padma.consnt_NGA;

DV_TTGanesh.toPadma[DV_TTGanesh.consnt_CA]     = Padma.consnt_CA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_CHA]    = Padma.consnt_CHA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_JA]     = Padma.consnt_JA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_JHA]    = Padma.consnt_JHA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_NYA]    = Padma.consnt_NYA;

DV_TTGanesh.toPadma[DV_TTGanesh.consnt_TTA]    = Padma.consnt_TTA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_TTA]    = Padma.halffm_TTA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_TTHA]   = Padma.consnt_TTHA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_DDA]    = Padma.consnt_DDA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_DDA]    = Padma.halffm_DDA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_DDHA]   = Padma.consnt_DDHA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_NNA]    = Padma.consnt_NNA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_NNA_2]    = Padma.consnt_NNA;

DV_TTGanesh.toPadma[DV_TTGanesh.consnt_TA]     = Padma.consnt_TA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_TA_2]   = Padma.consnt_TA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_THA]    = Padma.consnt_THA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_THA_2]  = Padma.consnt_THA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_DA]     = Padma.consnt_DA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_DA]     = Padma.halffm_DA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_DHA]    = Padma.consnt_DHA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_DHA_2]  = Padma.consnt_DHA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_NA]     = Padma.consnt_NA;

DV_TTGanesh.toPadma[DV_TTGanesh.consnt_PA]     = Padma.consnt_PA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_PHA]    = Padma.consnt_PHA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_BA]     = Padma.consnt_BA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_BHA]    = Padma.consnt_BHA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_BHA_2]  = Padma.consnt_BHA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_MA]     = Padma.consnt_MA;

DV_TTGanesh.toPadma[DV_TTGanesh.consnt_YA]     = Padma.consnt_YA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_RA]     = Padma.consnt_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_LA]     = Padma.consnt_LA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_VA]     = Padma.consnt_VA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_SHA_1]  = Padma.consnt_SHA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_SHA_2]  = Padma.consnt_SHA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_SHA_3]  = Padma.consnt_SHA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_SSA]    = Padma.consnt_SSA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_SSA_2]   = Padma.consnt_SSA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_SA]     = Padma.consnt_SA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_HA]     = Padma.consnt_HA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_LLA]    = Padma.consnt_LLA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_KSHA]   = Padma.consnt_KA + Padma.vattu_SSA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_KSHA_2] = Padma.consnt_KA + Padma.vattu_SSA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_THRA]   = Padma.consnt_TA + Padma.vattu_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_JHNA]   = Padma.consnt_JA + Padma.vattu_NYA;

//Gunintamulu
DV_TTGanesh.toPadma[DV_TTGanesh.vowelsn_AA]    = Padma.vowelsn_AA;
DV_TTGanesh.toPadma[DV_TTGanesh.vowelsn_I_1]   = Padma.vowelsn_I;
DV_TTGanesh.toPadma[DV_TTGanesh.vowelsn_I_2]   = Padma.vowelsn_I;
DV_TTGanesh.toPadma[DV_TTGanesh.vowelsn_II]    = Padma.vowelsn_II;
DV_TTGanesh.toPadma[DV_TTGanesh.vowelsn_U_1]   = Padma.vowelsn_U;
DV_TTGanesh.toPadma[DV_TTGanesh.vowelsn_U_2]   = Padma.vowelsn_U;
DV_TTGanesh.toPadma[DV_TTGanesh.vowelsn_UU_1]  = Padma.vowelsn_UU;
DV_TTGanesh.toPadma[DV_TTGanesh.vowelsn_UU_2]  = Padma.vowelsn_UU;
DV_TTGanesh.toPadma[DV_TTGanesh.vowelsn_R]     = Padma.vowelsn_R;
DV_TTGanesh.toPadma[DV_TTGanesh.vowelsn_RR]    = Padma.vowelsn_RR;
DV_TTGanesh.toPadma[DV_TTGanesh.vowelsn_E]     = Padma.vowelsn_E;
DV_TTGanesh.toPadma[DV_TTGanesh.vowelsn_EE]    = Padma.vowelsn_EE;
DV_TTGanesh.toPadma[DV_TTGanesh.vowelsn_AI]    = Padma.vowelsn_AI;
DV_TTGanesh.toPadma[DV_TTGanesh.vowelsn_CDR_E] = Padma.vowelsn_CDR_E;
DV_TTGanesh.toPadma[DV_TTGanesh.vowelsn_CDR_O] = Padma.vowelsn_CDR_O;
DV_TTGanesh.toPadma[DV_TTGanesh.vowelsn_O]     = Padma.vowelsn_O;
DV_TTGanesh.toPadma[DV_TTGanesh.vowelsn_OO]    = Padma.vowelsn_OO;
DV_TTGanesh.toPadma[DV_TTGanesh.vowelsn_AU]    = Padma.vowelsn_AU;

//Additional consonants
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_QA]    = Padma.consnt_QA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_KHHA]  = Padma.consnt_KHHA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_GHHA]  = Padma.consnt_GHHA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_ZA]    = Padma.consnt_ZA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_DDDHA] = Padma.consnt_DDDHA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_RHA]   = Padma.consnt_RHA;
DV_TTGanesh.toPadma[DV_TTGanesh.consnt_FA]    = Padma.consnt_FA;

//Matra + anusvara
DV_TTGanesh.toPadma[DV_TTGanesh.vowelsn_IM_1]  = Padma.vowelsn_I + Padma.anusvara;
DV_TTGanesh.toPadma[DV_TTGanesh.vowelsn_IM_2]  = Padma.vowelsn_I + Padma.anusvara;
DV_TTGanesh.toPadma[DV_TTGanesh.vowelsn_IIM]   = Padma.vowelsn_II + Padma.anusvara;
DV_TTGanesh.toPadma[DV_TTGanesh.vowelsn_UM]    = Padma.vowelsn_U + Padma.anusvara;
DV_TTGanesh.toPadma[DV_TTGanesh.vowelsn_UUM]   = Padma.vowelsn_UU + Padma.anusvara;
DV_TTGanesh.toPadma[DV_TTGanesh.vowelsn_EM]    = Padma.vowelsn_E + Padma.anusvara;
DV_TTGanesh.toPadma[DV_TTGanesh.vowelsn_EEM]   = Padma.vowelsn_EE + Padma.anusvara;
DV_TTGanesh.toPadma[DV_TTGanesh.vowelsn_AIM]   = Padma.vowelsn_AI + Padma.anusvara;
DV_TTGanesh.toPadma[DV_TTGanesh.vowelsn_CDR_EM]= Padma.vowelsn_CDR_E + Padma.anusvara;

//Halffm
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_KA]     = Padma.halffm_KA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_QA]     = Padma.halffm_QA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_KHA]    = Padma.halffm_KHA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_KHHA]   = Padma.halffm_KHHA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_GA]     = Padma.halffm_GA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_GHHA]   = Padma.halffm_GHHA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_GHA]    = Padma.halffm_GHA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_CA]     = Padma.halffm_CA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_JA]     = Padma.halffm_JA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_ZA]     = Padma.halffm_ZA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_JHA]    = Padma.halffm_JHA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_NYA]    = Padma.halffm_NYA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_NNA]    = Padma.halffm_NNA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_TA]     = Padma.halffm_TA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_THA]    = Padma.halffm_THA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_DHA]    = Padma.halffm_DHA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_NA]     = Padma.halffm_NA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_PA]     = Padma.halffm_PA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_PHA]    = Padma.halffm_PHA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_FA]     = Padma.halffm_FA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_BA]     = Padma.halffm_BA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_BHA]    = Padma.halffm_BHA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_MA]     = Padma.halffm_MA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_YA]     = Padma.halffm_YA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_RA]     = Padma.halffm_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_LA]     = Padma.halffm_LA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_VA]     = Padma.halffm_VA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_SHA_1]  = Padma.halffm_SHA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_SHA_2]  = Padma.halffm_SHA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_SSA]    = Padma.halffm_SSA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_SA]     = Padma.halffm_SA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_HA]     = Padma.halffm_HA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_LLA]    = Padma.halffm_LLA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_KSHA]   = Padma.halffm_KA  + Padma.halffm_SSA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_THRA]   = Padma.halffm_TA  + Padma.vattu_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_JHNA]   = Padma.halffm_JA  + Padma.vattu_NYA;

//Conjuncts
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_KRA]    = Padma.consnt_KA + Padma.vattu_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_KTA]    = Padma.consnt_KA + Padma.vattu_TA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_KHRA]   = Padma.vattu_KHA + Padma.vattu_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_GRA]    = Padma.halffm_GA + Padma.halffm_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_GRA]    = Padma.consnt_GA + Padma.vattu_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_GHRA]   = Padma.vattu_GHA + Padma.vattu_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_CRA]    = Padma.vattu_CA + Padma.vattu_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_JRA]    = Padma.halffm_JA + Padma.halffm_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_JRA]    = Padma.consnt_JA + Padma.vattu_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_JHRA]   = Padma.vattu_JHA + Padma.vattu_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_TTATTA] = Padma.consnt_TTA + Padma.vattu_TTA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_TTATTHA]= Padma.consnt_TTA + Padma.vattu_TTHA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_DDADDA] = Padma.consnt_DDA + Padma.vattu_DDA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_DDADDHA]= Padma.consnt_DDA + Padma.vattu_DDHA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_TATA]   = Padma.consnt_TA + Padma.vattu_TA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_TATA]   = Padma.halffm_TA + Padma.halffm_TA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_THAR]   = Padma.vattu_THA + Padma.vattu_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_DRU]    = Padma.consnt_DA + Padma.vowelsn_R;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_DRA]    = Padma.consnt_DA + Padma.vattu_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_DADA]   = Padma.consnt_DA + Padma.vattu_DA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_DADHA]  = Padma.consnt_DA + Padma.vattu_DHA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_DHMA]   = Padma.consnt_DA + Padma.vattu_MA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_DHYA]   = Padma.consnt_DA + Padma.vattu_YA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_DVA]    = Padma.consnt_DA + Padma.vattu_VA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_DHRA]   = Padma.vattu_DHA + Padma.vattu_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_NRA]    = Padma.consnt_NA + Padma.vattu_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_NRA]    = Padma.halffm_NA + Padma.halffm_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_NN]     = Padma.consnt_NA + Padma.vattu_NA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_NN]     = Padma.halffm_NA + Padma.halffm_NA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_PR]     = Padma.halffm_PA + Padma.halffm_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_PRA]    = Padma.consnt_PA + Padma.vattu_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_PHRA]   = Padma.vattu_PHA + Padma.vattu_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_BRA]    = Padma.vattu_BA + Padma.vattu_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_BRA]    = Padma.consnt_BA + Padma.vattu_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_BHRA]   = Padma.consnt_BHA + Padma.vattu_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_BHRA]   = Padma.halffm_BHA + Padma.halffm_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_MRA]    = Padma.consnt_MA + Padma.vattu_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_MRA]    = Padma.halffm_MA + Padma.halffm_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_YRA]    = Padma.vattu_YA + Padma.vattu_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_RU]     = Padma.consnt_RA + Padma.vowelsn_U;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_RUU]    = Padma.consnt_RA + Padma.vowelsn_UU;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_VRA]    = Padma.vattu_VA + Padma.vattu_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_SHVA]   = Padma.halffm_SHA + Padma.halffm_VA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_SHVA]   = Padma.consnt_SHA + Padma.vattu_VA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_SHRA]   = Padma.halffm_SHA + Padma.halffm_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_SHRA]   = Padma.consnt_SHA + Padma.vattu_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_SRA]    = Padma.consnt_SA + Padma.vattu_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_SRA]    = Padma.halffm_SA + Padma.halffm_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_HRU]    = Padma.consnt_HA + Padma.vowelsn_R;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_HRA]    = Padma.vattu_HA + Padma.vattu_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_HMA]    = Padma.consnt_HA + Padma.vattu_MA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_HYA]    = Padma.consnt_HA + Padma.vattu_YA;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_UR]     = Padma.vattu_RA + Padma.vowelsn_U;
DV_TTGanesh.toPadma[DV_TTGanesh.conjct_UUR]    = Padma.vattu_RA + Padma.vowelsn_UU;


DV_TTGanesh.toPadma[DV_TTGanesh.vattu_RA]      = Padma.vattu_RA;
DV_TTGanesh.toPadma[DV_TTGanesh.vattu_YA]      = Padma.vattu_YA;

//half form of RA
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_RI_1]   = Padma.halffm_RA + Padma.vowelsn_I;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_RI_2]   = Padma.halffm_RA + Padma.vowelsn_I;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_RIM_1]  = Padma.halffm_RA + Padma.vowelsn_I + Padma.anusvara;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_RIM_2]  = Padma.halffm_RA + Padma.vowelsn_I + Padma.anusvara;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_RII]    = Padma.halffm_RA + Padma.vowelsn_II;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_RIIM]   = Padma.halffm_RA + Padma.vowelsn_II + Padma.anusvara;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_REE]    = Padma.halffm_RA + Padma.vowelsn_EE; 
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_RA_ANU] = Padma.halffm_RA + Padma.anusvara;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_REEM]   = Padma.halffm_RA + Padma.vowelsn_EE + Padma.anusvara;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_RAI]    = Padma.halffm_RA + Padma.vowelsn_AI;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_RAIM]   = Padma.halffm_RA + Padma.vowelsn_AI + Padma.anusvara;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_RE]     = Padma.halffm_RA + Padma.vowelsn_E;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_REM]    = Padma.halffm_RA + Padma.vowelsn_E + Padma.anusvara;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_CDR_RE] = Padma.halffm_RA + Padma.vowelsn_CDR_E;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_CDR_REM]= Padma.halffm_RA + Padma.vowelsn_CDR_E + Padma.anusvara;


DV_TTGanesh.toPadma[DV_TTGanesh.om]        = Padma.om;
DV_TTGanesh.toPadma[DV_TTGanesh.avagraha]  = Padma.avagraha;
DV_TTGanesh.toPadma[DV_TTGanesh.halffm_RRA]= Padma.halffm_RRA;
DV_TTGanesh.toPadma[DV_TTGanesh.virama]    = Padma.syllbreak;
DV_TTGanesh.toPadma[DV_TTGanesh.nukta]     = Padma.nukta;
DV_TTGanesh.toPadma[DV_TTGanesh.danda]     = Padma.danda;

//Digits
DV_TTGanesh.toPadma[DV_TTGanesh.digit_ZERO]    = Padma.digit_ZERO;
DV_TTGanesh.toPadma[DV_TTGanesh.digit_ONE]     = Padma.digit_ONE;
DV_TTGanesh.toPadma[DV_TTGanesh.digit_TWO]     = Padma.digit_TWO;
DV_TTGanesh.toPadma[DV_TTGanesh.digit_THREE]   = Padma.digit_THREE;
DV_TTGanesh.toPadma[DV_TTGanesh.digit_FOUR]    = Padma.digit_FOUR;
DV_TTGanesh.toPadma[DV_TTGanesh.digit_FIVE]    = Padma.digit_FIVE;
DV_TTGanesh.toPadma[DV_TTGanesh.digit_SIX]     = Padma.digit_SIX;
DV_TTGanesh.toPadma[DV_TTGanesh.digit_SEVEN]   = Padma.digit_SEVEN;
DV_TTGanesh.toPadma[DV_TTGanesh.digit_EIGHT]   = Padma.digit_EIGHT;
DV_TTGanesh.toPadma[DV_TTGanesh.digit_NINE]    = Padma.digit_NINE;

DV_TTGanesh.prefixList = new Array();
DV_TTGanesh.prefixList[DV_TTGanesh.vowelsn_I_1]     = true;
DV_TTGanesh.prefixList[DV_TTGanesh.vowelsn_I_2]     = true;
DV_TTGanesh.prefixList[DV_TTGanesh.vowelsn_IM_1]    = true;
DV_TTGanesh.prefixList[DV_TTGanesh.vowelsn_IM_2]    = true;

DV_TTGanesh.suffixList = new Array();
DV_TTGanesh.suffixList[DV_TTGanesh.halffm_RA]      = true;
DV_TTGanesh.suffixList[DV_TTGanesh.vowelsn_AA]     = true;
DV_TTGanesh.suffixList[DV_TTGanesh.vowelsn_II]     = true;
DV_TTGanesh.suffixList[DV_TTGanesh.vowelsn_IIM]    = true;
DV_TTGanesh.suffixList[DV_TTGanesh.halffm_RII]     = true;
DV_TTGanesh.suffixList[DV_TTGanesh.halffm_RIIM]    = true;
DV_TTGanesh.suffixList[DV_TTGanesh.halffm_REE]     = true;
DV_TTGanesh.suffixList[DV_TTGanesh.halffm_REEM]    = true;
DV_TTGanesh.suffixList[DV_TTGanesh.halffm_RAI]     = true;
DV_TTGanesh.suffixList[DV_TTGanesh.halffm_RAIM]    = true;
DV_TTGanesh.suffixList[DV_TTGanesh.halffm_RA_ANU]  = true;
DV_TTGanesh.suffixList[DV_TTGanesh.halffm_RE]      = true;
DV_TTGanesh.suffixList[DV_TTGanesh.halffm_REM]     = true;
DV_TTGanesh.suffixList[DV_TTGanesh.halffm_CDR_RE]  = true;
DV_TTGanesh.suffixList[DV_TTGanesh.halffm_CDR_REM] = true;


DV_TTGanesh.redundantList = new Array();
DV_TTGanesh.redundantList[DV_TTGanesh.misc_UNKNOWN_1]  = true;
DV_TTGanesh.redundantList[DV_TTGanesh.misc_UNKNOWN_2]  = true;
DV_TTGanesh.redundantList[DV_TTGanesh.space_1] 	       = true;
DV_TTGanesh.redundantList[DV_TTGanesh.space_2] 	       = true;
DV_TTGanesh.redundantList[DV_TTGanesh.space_3] 	       = true;
DV_TTGanesh.redundantList[DV_TTGanesh.space_4] 	       = true;
DV_TTGanesh.redundantList[DV_TTGanesh.space_5] 	       = true;
DV_TTGanesh.redundantList[DV_TTGanesh.space_6] 	       = true;
DV_TTGanesh.redundantList[DV_TTGanesh.space_7] 	       = true;
DV_TTGanesh.redundantList[DV_TTGanesh.space_8] 	       = true;
DV_TTGanesh.redundantList[DV_TTGanesh.space_9] 	       = true;
DV_TTGanesh.redundantList[DV_TTGanesh.space_10]	       = true;
DV_TTGanesh.redundantList[DV_TTGanesh.space_11]	       = true;
DV_TTGanesh.redundantList[DV_TTGanesh.space_12]	       = true;
DV_TTGanesh.redundantList[DV_TTGanesh.space_13]	       = true;
DV_TTGanesh.redundantList[DV_TTGanesh.space_14]	       = true;
DV_TTGanesh.redundantList[DV_TTGanesh.space_15]	       = true;

DV_TTGanesh.overloadList = new Array();
DV_TTGanesh.overloadList[DV_TTGanesh.vowel_A]      = true;
DV_TTGanesh.overloadList[DV_TTGanesh.vowel_AA]     = true;
DV_TTGanesh.overloadList[DV_TTGanesh.vowel_EE]     = true;
DV_TTGanesh.overloadList[DV_TTGanesh.vowel_I]      = true;
DV_TTGanesh.overloadList[DV_TTGanesh.vowelsn_AA]   = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_KA]    = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_QA]    = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_KHA]   = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_KHHA]  = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_GA]    = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_GHA]   = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_CA]    = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_JA]    = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_ZA]    = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_JHA]   = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_NYA]   = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_NNA]   = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_TA]    = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_THA]   = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_DHA]   = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_NA]    = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_PA]    = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_PHA]   = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_FA]    = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_BA]    = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_BHA]   = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_MA]    = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_YA]    = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_LA]    = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_VA]    = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_SHA_1] = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_SHA_2] = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_SSA]   = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_SA]    = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_LLA]   = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_KSHA]  = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_THRA]  = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_JHNA]  = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_NN]    = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_THRA]  = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_JHNA]  = true;
DV_TTGanesh.overloadList[DV_TTGanesh.conjct_KHRA]  = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_GRA]   = true;
DV_TTGanesh.overloadList[DV_TTGanesh.conjct_GHRA]  = true;
DV_TTGanesh.overloadList[DV_TTGanesh.conjct_CRA]   = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_JRA]   = true;
DV_TTGanesh.overloadList[DV_TTGanesh.conjct_JHRA]  = true;
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_TATA]  = true; 
DV_TTGanesh.overloadList[DV_TTGanesh.conjct_THAR]  = true; 
DV_TTGanesh.overloadList[DV_TTGanesh.conjct_DHRA]  = true; 
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_NRA]   = true; 
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_PR]   = true; 
DV_TTGanesh.overloadList[DV_TTGanesh.conjct_PHRA]  = true; 
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_BRA]   = true; 
DV_TTGanesh.overloadList[DV_TTGanesh.conjct_BRA]   = true; 
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_BHRA]  = true; 
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_MRA]   = true; 
DV_TTGanesh.overloadList[DV_TTGanesh.conjct_YRA]   = true; 
DV_TTGanesh.overloadList[DV_TTGanesh.conjct_VRA]   = true; 
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_SHVA]  = true; 
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_SRA]   = true; 
DV_TTGanesh.overloadList[DV_TTGanesh.halffm_SHRA]   = true; 
DV_TTGanesh.overloadList[DV_TTGanesh.consnt_TTA]   = true; 
DV_TTGanesh.overloadList[DV_TTGanesh.consnt_DDA]   = true; 
DV_TTGanesh.overloadList[DV_TTGanesh.consnt_DA]   = true; 

//DV-TTYogesh 
function DV_TTYogesh()
{
}

DV_TTYogesh.maxLookupLen = DV_TTGanesh.maxLookupLen;
DV_TTYogesh.fontFace     = "DV-TTYogesh";
DV_TTYogesh.displayName  = "DV_TTYogesh";
DV_TTYogesh.script       = DV_TTGanesh.script;
DV_TTYogesh.hasSuffixes  = DV_TTGanesh.hasSuffixes;

DV_TTYogesh.lookup = function (str)
{
    return DV_TTGanesh.lookup(str);
}

DV_TTYogesh.isPrefixSymbol = function (str)
{
    return DV_TTGanesh.isPrefixSymbol(str);
}

DV_TTYogesh.isSuffixSymbol = function (str)
{
    return DV_TTGanesh.isSuffixSymbol(str);
}

DV_TTYogesh.isOverloaded = function (str)
{
    return DV_TTGanesh.isOverloaded(str);
}

DV_TTYogesh.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return DV_TTGanesh.handleTwoPartVowelSigns(sign1, sign2);
}

DV_TTYogesh.isRedundant = function (str)
{
    return DV_TTGanesh.isRedundant(str);
}

//DV-TTSurekh
function DV_TTSurekh()
{
}

DV_TTSurekh.maxLookupLen = DV_TTGanesh.maxLookupLen;
DV_TTSurekh.fontFace     = "DV-TTSurekh";
DV_TTSurekh.displayName  = "DV_TTSurekh";
DV_TTSurekh.script       = DV_TTGanesh.script;
DV_TTSurekh.hasSuffixes  = DV_TTGanesh.hasSuffixes;

DV_TTSurekh.lookup = function (str)
{
    return DV_TTGanesh.lookup(str);
}

DV_TTSurekh.isPrefixSymbol = function (str)
{
    return DV_TTGanesh.isPrefixSymbol(str);
}

DV_TTSurekh.isSuffixSymbol = function (str)
{
    return DV_TTGanesh.isSuffixSymbol(str);
}

DV_TTSurekh.isOverloaded = function (str)
{
    return DV_TTGanesh.isOverloaded(str);
}

DV_TTSurekh.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return DV_TTGanesh.handleTwoPartVowelSigns(sign1, sign2);
}

DV_TTSurekh.isRedundant = function (str)
{
    return DV_TTGanesh.isRedundant(str);
}

//DV-TTGaneshEN
function DV_TTGaneshEN()
{
}

DV_TTGaneshEN.maxLookupLen = DV_TTGanesh.maxLookupLen;
DV_TTGaneshEN.fontFace     = "DV-TTGaneshEN";
DV_TTGaneshEN.displayName  = "DV_TTGaneshEN";
DV_TTGaneshEN.script       = DV_TTGanesh.script;
DV_TTGaneshEN.hasSuffixes  = DV_TTGanesh.hasSuffixes;

DV_TTGaneshEN.lookup = function (str)
{
    return DV_TTGanesh.lookup(str);
}

DV_TTGaneshEN.isPrefixSymbol = function (str)
{
    return DV_TTGanesh.isPrefixSymbol(str);
}

DV_TTGaneshEN.isSuffixSymbol = function (str)
{
    return DV_TTGanesh.isSuffixSymbol(str);
}

DV_TTGaneshEN.isOverloaded = function (str)
{
    return DV_TTGanesh.isOverloaded(str);
}

DV_TTGaneshEN.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return DV_TTGanesh.handleTwoPartVowelSigns(sign1, sign2);
}

DV_TTGaneshEN.isRedundant = function (str)
{
    return DV_TTGanesh.isRedundant(str);
}


//DV-TTYogeshEN
function DV_TTYogeshEN()
{
}

DV_TTYogeshEN.maxLookupLen = DV_TTGanesh.maxLookupLen;
DV_TTYogeshEN.fontFace     = "DV-TTYogeshEN";
DV_TTYogeshEN.displayName  = "DV_TTYogeshEN";
DV_TTYogeshEN.script       = DV_TTGanesh.script;
DV_TTYogeshEN.hasSuffixes  = DV_TTGanesh.hasSuffixes;

DV_TTYogeshEN.lookup = function (str)
{
    return DV_TTGanesh.lookup(str);
}

DV_TTYogeshEN.isPrefixSymbol = function (str)
{
    return DV_TTGanesh.isPrefixSymbol(str);
}

DV_TTYogeshEN.isSuffixSymbol = function (str)
{
    return DV_TTGanesh.isSuffixSymbol(str);
}

DV_TTYogeshEN.isOverloaded = function (str)
{
    return DV_TTGanesh.isOverloaded(str);
}

DV_TTYogeshEN.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return DV_TTGanesh.handleTwoPartVowelSigns(sign1, sign2);
}

DV_TTYogeshEN.isRedundant = function (str)
{
    return DV_TTGanesh.isRedundant(str);
}


//DV-TTSurekhEN
function DV_TTSurekhEN()
{
}

DV_TTSurekhEN.maxLookupLen = DV_TTGanesh.maxLookupLen;
DV_TTSurekhEN.fontFace     = "DV-TTSurekhEN";
DV_TTSurekhEN.displayName  = "DV_TTSurekhEN";
DV_TTSurekhEN.script       = DV_TTGanesh.script;
DV_TTSurekhEN.hasSuffixes  = DV_TTGanesh.hasSuffixes;

DV_TTSurekhEN.lookup = function (str)
{
    return DV_TTGanesh.lookup(str);
}

DV_TTSurekhEN.isPrefixSymbol = function (str)
{
    return DV_TTGanesh.isPrefixSymbol(str);
}

DV_TTSurekhEN.isSuffixSymbol = function (str)
{
    return DV_TTGanesh.isSuffixSymbol(str);
}

DV_TTSurekhEN.isOverloaded = function (str)
{
    return DV_TTGanesh.isOverloaded(str);
}

DV_TTSurekhEN.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return DV_TTGanesh.handleTwoPartVowelSigns(sign1, sign2);
}

DV_TTSurekhEN.isRedundant = function (str)
{
    return DV_TTGanesh.isRedundant(str);
}
