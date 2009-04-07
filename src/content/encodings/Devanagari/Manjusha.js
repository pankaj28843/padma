//$Id: Manjusha.js,v 1.2 2009/04/07 07:27:02 harshita Exp $

// Copyright 2008-2009 Rajagiri Ravi <rajagiriwcmp@yahoo.com>
// Copyright 2008-2009 Harshita Vani <harshita@atc.tcs.com>

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

//Manjusha Fonts -- ManjushaBold, ManjushaMedium
function Manjusha()
{
}

//The interface every dynamic font encoding should implement
Manjusha.maxLookupLen = 3;
Manjusha.fontFace     = "ManjushaBold";
Manjusha.displayName  = "Manjusha";
Manjusha.script       = Padma.script_DEVANAGARI;
Manjusha.hasSuffixes  = true;

Manjusha.lookup = function (str) 
{
    return Manjusha.toPadma[str];
}

Manjusha.isPrefixSymbol = function (str)

{
    return Manjusha.prefixList[str] != null;
}

Manjusha.isSuffixSymbol = function (str)
{
    return Manjusha.suffixList[str] != null;
}

Manjusha.isOverloaded = function (str)
{
    return Manjusha.overloadList[str] != null;
}

Manjusha.handleTwoPartVowelSigns = function (sign1, sign2)
{
   if ((sign1 == Padma.vowelsn_EE && sign2 == Padma.vowelsn_AA) ||
       (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_EE))
        return Padma.vowelsn_OO;
    if ((sign1 == Padma.vowelsn_AI && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_AI))
        return Padma.vowelsn_AU;
    return sign1 + sign2;    
}

Manjusha.isRedundant = function (str, prev)
{
    return Manjusha.redundantList[str] != null;
}

//Implementation details start here

//Specials
Manjusha.anusvara          = "\u002C";
Manjusha.candrabindu       = "\u00B2"; 
Manjusha.visarga           = "\u0041"; 

//Vowels
Manjusha.vowel_A         = "\u0061";
Manjusha.vowel_AA        = "\u0061\u0072";
Manjusha.vowel_I         = "\u0050";
Manjusha.vowel_II_1      = "\u0050\u00B4";
Manjusha.vowel_II_2      = "\u00D2";
Manjusha.vowel_U_1       = "\u007B";
Manjusha.vowel_U_2       = "\u00FC";
Manjusha.vowel_UU        = "\u004C";
Manjusha.vowel_R         = "\u00B1";
Manjusha.vowel_CDR_E     = "\u005A\u003C";
Manjusha.vowel_EE        = "\u005A";
Manjusha.vowel_AI        = "\u005A\u006B";
Manjusha.vowel_CDR_O_1   = "\u0061\u00A8";
Manjusha.vowel_CDR_O_2   = "\u0061\u0072\u00FD";
Manjusha.vowel_OO        = "\u0061\u006D";
Manjusha.vowel_AU        = "\u0061\u002E"; 

//Consonants
Manjusha.consnt_KA_1     = "\u0065";
Manjusha.consnt_KA_2     = "\u00ED";
Manjusha.consnt_KHA      = "\u0032";
Manjusha.consnt_GA       = "\u006A";
Manjusha.consnt_GHA      = "\u0037";
Manjusha.consnt_NGA      = "\u007E";

Manjusha.consnt_CA       = "\u0076";
Manjusha.consnt_CHA      = "\u0034";
Manjusha.consnt_JA_1     = "\u006F";
Manjusha.consnt_JA_2     = "\u004F\u0072";
Manjusha.consnt_JHA      = "\u0030";
Manjusha.consnt_NYA      = "\u00C6\u0072";

Manjusha.consnt_TTA      = "\u0031";
Manjusha.consnt_TTHA     = "\u0038";
Manjusha.consnt_DDA      = "\u0060";
Manjusha.consnt_DDHA     = "\u0039";
Manjusha.consnt_NNA      = "\u0067";

Manjusha.consnt_TA       = "\u0075";
Manjusha.consnt_THA      = "\u0036";
Manjusha.consnt_DA       = "\u0064";
Manjusha.consnt_DHA      = "\u0033";
Manjusha.consnt_NA       = "\u0066";

Manjusha.consnt_PA       = "\u006E";
Manjusha.consnt_PHA_1    = "\u003D";
Manjusha.consnt_PHA_2    = "\u00EE";
Manjusha.consnt_BA       = "\u0062";
Manjusha.consnt_BHA      = "\u0035";
Manjusha.consnt_MA       = "\u0068";

Manjusha.consnt_YA       = "\u0069";
Manjusha.consnt_RA       = "\u0079";
Manjusha.consnt_LA    	 = "\u00D5";
Manjusha.consnt_LLA      = "\u00D4";
Manjusha.consnt_VA       = "\u0074";
Manjusha.consnt_SHA      = "\u0071";
Manjusha.consnt_SSA      = "\u0077";
Manjusha.consnt_SA       = "\u0073";
Manjusha.consnt_HA       = "\u007A";
Manjusha.consnt_KSHA	 = "\u005F";
Manjusha.consnt_THRA	 = "\u0063";
Manjusha.consnt_JHNA	 = "\u00BF";

//Additional consonants
Manjusha.AddConsnt_QA	 = "\u0082\u0081";
Manjusha.AddConsnt_KHHA	 = "\u00F7\u0072";
Manjusha.AddConsnt_GHHA	 = "\u00EF\u0072";
Manjusha.AddConsnt_ZA	 = "\u00AF\u0072";
Manjusha.AddConsnt_DDDHA = "\u00D9";
Manjusha.AddConsnt_RHA	 = "\u00F6"; 
Manjusha.AddConsnt_FA	 = "\u00D7\u0081";

//Gunintamulu
Manjusha.vowelsn_AA      = "\u0072";
Manjusha.vowelsn_I       = "\u0070";
Manjusha.vowelsn_II      = "\u003B";
Manjusha.vowelsn_U_1     = "\u005B";
Manjusha.vowelsn_U_2     = "\u00CD";
Manjusha.vowelsn_UU      = "\u006C";
Manjusha.vowelsn_R       = "\u00D6";
Manjusha.vowelsn_RR      = "\u00D8";
Manjusha.vowelsn_CDR_E_1 = "\u003C";
Manjusha.vowelsn_CDR_E_2 = "\u00FD";
Manjusha.vowelsn_EE      = "\u006B";
Manjusha.vowelsn_AI      = "\u0078";
Manjusha.vowelsn_CDR_O_1 = "\u00A8";
Manjusha.vowelsn_CDR_O_2 = "\u0072\u00FD";
Manjusha.vowelsn_OO      = "\u006D";
Manjusha.vowelsn_AU      = "\u002E";

//Matra + anusvara
Manjusha.vowelsn_IM      = "\u00B9";
Manjusha.vowelsn_IIM     = "\u00C2";
Manjusha.vowelsn_EM      = "\u00F0";
Manjusha.vowelsn_OM      = "\u004D";
Manjusha.vowelsn_AAM     = "\u0052";
Manjusha.vowelsn_AIM     = "\u00A7";
Manjusha.vowelsn_UM      = "\u00D3";
Manjusha.vowelsn_UUM     = "\u00F1";

//Half Forms
Manjusha.halffm_KA       = "\u0045";
Manjusha.halffm_KHA      = "\u0040";
Manjusha.halffm_GA       = "\u004A";
Manjusha.halffm_GHA      = "\u0026";
Manjusha.halffm_CA       = "\u0056";
Manjusha.halffm_JA       = "\u004F";
Manjusha.halffm_JHA      = "\u0029";
Manjusha.halffm_NYA      = "\u00C6";
Manjusha.halffm_THR      = "\u0043";
Manjusha.halffm_NNA      = "\u0047";
Manjusha.halffm_TA       = "\u0055";
Manjusha.halffm_ATTA     = "\u00E3";
Manjusha.halffm_THA      = "\u005E";
Manjusha.halffm_DHA      = "\u0023";
Manjusha.halffm_NA       = "\u0046";
Manjusha.halffm_PA       = "\u004E";
Manjusha.halffm_PHA      = "\u002B";
Manjusha.halffm_BA       = "\u0042";
Manjusha.halffm_BHA      = "\u0025";
Manjusha.halffm_MA       = "\u0048";
Manjusha.halffm_YA       = "\u0049";
Manjusha.halffm_RA       = "\u00B4";
Manjusha.halffm_LA_1     = "\u007D";
Manjusha.halffm_LA_2     = "\u00CC";
Manjusha.halffm_VA       = "\u0054";
Manjusha.halffm_SHA      = "\u0051";
Manjusha.halffm_SSA      = "\u0057";
Manjusha.halffm_SA       = "\u0053";
Manjusha.halffm_KSHA	 = "\u00D0";
Manjusha.vattu_YA	 = "\u0024";

//Conjuncts
Manjusha.conjct_DDDHA  		= "\u0021";
Manjusha.conjct_RU    		= "\u002F";
Manjusha.conjct_RR_MISC_II	= "\u003A";
Manjusha.conjct_RUU   		= "\u003F";
Manjusha.conjct_DHYA 		= "\u0044";
Manjusha.conjct_AA_RA	 	= "\u004B";
Manjusha.conjct_RR_MISC_AI   	= "\u0058";
Manjusha.conjct_MISC_LA_1       = "\u005D";
Manjusha.conjct_MISC_LA_2       = "\u00CB";
Manjusha.conjct_NNNA     	= "\u017D";
Manjusha.conjct_TTTA   		= "\u2019";
Manjusha.conjct_DDDA       	= "\u201C";
Manjusha.conjct_SHCHA       	= "\u0094";
Manjusha.conjct_TTTHA       	= "\u2022";
Manjusha.conjct_DHMA       	= "\u0096";
Manjusha.conjct_BHD       	= "\u0097";
Manjusha.conjct_GHD       	= "\u0098";
Manjusha.conjct_MISC_0      	= "\u2122";
Manjusha.conjct_SHTTA       	= "\u0161";
Manjusha.conjct_KKKA       	= "\u203A";
Manjusha.conjct_DHRU       	= "\u0153";
Manjusha.conjct_MISC_1       	= "\u009D";
Manjusha.conjct_MISC_2      	= "\u009E";
Manjusha.conjct_NGGA       	= "\u0178";
Manjusha.conjct_RR_MISC_AA      = "\u00A0";
Manjusha.conjct_MISC_3       	= "\u00A9";
Manjusha.conjct_PHRA      	= "\u00AD";
Manjusha.conjct_BR      	= "\u0042\u004B";
Manjusha.conjct_GR      	= "\u004A\u004B";
Manjusha.conjct_SHTA      	= "\u00B3";
Manjusha.conjct_RR_MISC_E       = "\u00B5";
Manjusha.conjct_RR_MISC_AI_M    = "\u00B6";
Manjusha.conjct_TTTTHA_1        = "\u00B7";
Manjusha.conjct_TTTTHA_2        = "\u00E3\u0072";
Manjusha.conjct_RR_MISC_I       = "\u00B8";
Manjusha.conjct_RR_MISC_E_M     = "\u00C4";
Manjusha.conjct_MISC_4      	= "\u00CE";
Manjusha.conjct_SHRA       	= "\u00CF";
Manjusha.conjct_KRA       	= "\u00E4";
Manjusha.conjct_MISC_5       	= "\u00E5";
Manjusha.conjct_RR_MISC_AA_M    = "\u00E6";
Manjusha.conjct_RR_MISC_M       = "\u00E7";
Manjusha.conjct_PRA       	= "\u00E8";
Manjusha.conjct_SHNNA       	= "\u00E9";
Manjusha.conjct_MISC_7       	= "\u00EA";
Manjusha.conjct_DHRA		= "\u00EB";
Manjusha.conjct_DHVA		= "\u00EC";
Manjusha.conjct_RR_MISC_II_M	= "\u00F2";
Manjusha.conjct_HYA		= "\u00F3";
Manjusha.conjct_HRU		= "\u00F4";
Manjusha.conjct_SHVA       	= "\u00F8";
Manjusha.conjct_PTA		= "\u00F9";
Manjusha.conjct_HMA		= "\u00FA";

//GENERIC PUNCTUATION MARKS.
Manjusha.conjct_MISC_DANDA	= "\u00C8";	 
Manjusha.conjct_MISC_OM         = "\u008C";
Manjusha.conjct_MISC_AVAGRAHA	= "\u00D1";
Manjusha.conjct_MISC_VIRAMA	= "\u00FB";	 

//Devanagari Digits
Manjusha.digit_ZERO     	= "\u00BC";
Manjusha.digit_ONE      	= "\u00C1";
Manjusha.digit_TWO      	= "\u00AA";
Manjusha.digit_THREE    	= "\u00A3";
Manjusha.digit_FOUR     	= "\u00A2";
Manjusha.digit_FIVE     	= "\u00B0";
Manjusha.digit_SIX      	= "\u00A4";
Manjusha.digit_SEVEN    	= "\u00A6";
Manjusha.digit_EIGHT    	= "\u00A5";
Manjusha.digit_NINE     	= "\u00BB";

//ENGLISH DIGITS
Manjusha.ENG_0			= "\u00E2";
Manjusha.ENG_1			= "\u00DA";
Manjusha.ENG_2			= "\u00DB";
Manjusha.ENG_3			= "\u00DC";
Manjusha.ENG_4			= "\u00DD";
Manjusha.ENG_5			= "\u00DE";
Manjusha.ENG_6			= "\u00DF";
Manjusha.ENG_7			= "\u00E0";
Manjusha.ENG_8			= "\u00A1";
Manjusha.ENG_9			= "\u00E1";

//Matches ASCII
Manjusha.EXCLAM         	= "\u0022";
Manjusha.PERCENT        	= "\u00F5";
Manjusha.PLUS           	= "\u00BD";
Manjusha.MINUS			= "\u008D";
Manjusha.COMMA          	= "\u005C";
Manjusha.PERIOD         	= "\u007C";
Manjusha.SOLIDUS        	= "\u00C7";
Manjusha.EQUALS         	= "\u00BA";
Manjusha.DIVISION		= "\u00C3";
Manjusha.MULTIPLY		= "\u00C5";
Manjusha.QUESTIONMARK		= "\u0027";
Manjusha.LEFTPARANTHESIS	= "\u002A";
Manjusha.RIGHTPARANTHESIS	= "\u0028";
Manjusha.HYPHEN			= "\u002D";
Manjusha.COLON          	= "\u0041";
Manjusha.SEMICOLON      	= "\u00AE";
Manjusha.STAR			= "\u003E";
Manjusha.MISC_EQUAL		= "\u0059";
Manjusha.APOSTROPHE		= "\u00BE";
Manjusha.BLANK_1		= "\u00C0";
Manjusha.BLANK_2		= "\u00CA";
Manjusha.MISC			= "\u00C9";

Manjusha.toPadma = new Array();

Manjusha.toPadma[Manjusha.anusvara]      = Padma.anusvara;
Manjusha.toPadma[Manjusha.candrabindu]   = Padma.candrabindu;
Manjusha.toPadma[Manjusha.visarga]       = Padma.visarga;

Manjusha.toPadma[Manjusha.vowel_A]       = Padma.vowel_A;
Manjusha.toPadma[Manjusha.vowel_AA]      = Padma.vowel_AA;
Manjusha.toPadma[Manjusha.vowel_I]       = Padma.vowel_I;
Manjusha.toPadma[Manjusha.vowel_II_1]    = Padma.vowel_II;
Manjusha.toPadma[Manjusha.vowel_II_2]    = Padma.vowel_II;
Manjusha.toPadma[Manjusha.vowel_U_1]     = Padma.vowel_U;
Manjusha.toPadma[Manjusha.vowel_U_2]     = Padma.vowel_U;
Manjusha.toPadma[Manjusha.vowel_UU]      = Padma.vowel_UU;
Manjusha.toPadma[Manjusha.vowel_R]       = Padma.vowel_R;
Manjusha.toPadma[Manjusha.vowel_CDR_E]   = Padma.vowel_CDR_E;
Manjusha.toPadma[Manjusha.vowel_EE]      = Padma.vowel_EE;
Manjusha.toPadma[Manjusha.vowel_AI]      = Padma.vowel_AI;
Manjusha.toPadma[Manjusha.vowel_CDR_O_1] = Padma.vowel_CDR_O;
Manjusha.toPadma[Manjusha.vowel_CDR_O_2] = Padma.vowel_CDR_O;
Manjusha.toPadma[Manjusha.vowel_OO]      = Padma.vowel_OO;
Manjusha.toPadma[Manjusha.vowel_AU]      = Padma.vowel_AU;


//consonants

Manjusha.toPadma[Manjusha.consnt_KA_1]   = Padma.consnt_KA;
Manjusha.toPadma[Manjusha.consnt_KA_2]   = Padma.consnt_KA;
Manjusha.toPadma[Manjusha.consnt_KHA]    = Padma.consnt_KHA;
Manjusha.toPadma[Manjusha.consnt_GA]     = Padma.consnt_GA;
Manjusha.toPadma[Manjusha.consnt_GHA]    = Padma.consnt_GHA;
Manjusha.toPadma[Manjusha.consnt_NGA]    = Padma.consnt_NGA;

Manjusha.toPadma[Manjusha.consnt_CA]   	 = Padma.consnt_CA;
Manjusha.toPadma[Manjusha.consnt_CHA]    = Padma.consnt_CHA;
Manjusha.toPadma[Manjusha.consnt_JA_1]   = Padma.consnt_JA;
Manjusha.toPadma[Manjusha.consnt_JA_2]   = Padma.consnt_JA;
Manjusha.toPadma[Manjusha.consnt_JHA]    = Padma.consnt_JHA;
Manjusha.toPadma[Manjusha.consnt_NYA]    = Padma.consnt_NYA;

Manjusha.toPadma[Manjusha.consnt_TTA]    = Padma.consnt_TTA;
Manjusha.toPadma[Manjusha.consnt_TTHA]   = Padma.consnt_TTHA;
Manjusha.toPadma[Manjusha.consnt_DDA]    = Padma.consnt_DDA;
Manjusha.toPadma[Manjusha.consnt_DDHA]   = Padma.consnt_DDHA;
Manjusha.toPadma[Manjusha.consnt_NNA]    = Padma.consnt_NNA;

Manjusha.toPadma[Manjusha.consnt_TA]     = Padma.consnt_TA;
Manjusha.toPadma[Manjusha.consnt_THA]    = Padma.consnt_THA;
Manjusha.toPadma[Manjusha.consnt_DA]     = Padma.consnt_DA;
Manjusha.toPadma[Manjusha.consnt_DHA]    = Padma.consnt_DHA;
Manjusha.toPadma[Manjusha.consnt_NA]     = Padma.consnt_NA;

Manjusha.toPadma[Manjusha.consnt_PA]     = Padma.consnt_PA;
Manjusha.toPadma[Manjusha.consnt_PHA_1]  = Padma.consnt_PHA;
Manjusha.toPadma[Manjusha.consnt_PHA_2]  = Padma.consnt_PHA;
Manjusha.toPadma[Manjusha.consnt_BA]     = Padma.consnt_BA;
Manjusha.toPadma[Manjusha.consnt_BHA]    = Padma.consnt_BHA;
Manjusha.toPadma[Manjusha.consnt_MA]     = Padma.consnt_MA;

Manjusha.toPadma[Manjusha.consnt_YA]     = Padma.consnt_YA;
Manjusha.toPadma[Manjusha.consnt_RA]     = Padma.consnt_RA;
Manjusha.toPadma[Manjusha.consnt_LA]     = Padma.consnt_LA;
Manjusha.toPadma[Manjusha.consnt_LLA]    = Padma.consnt_LLA;
Manjusha.toPadma[Manjusha.consnt_VA]     = Padma.consnt_VA;
Manjusha.toPadma[Manjusha.consnt_SHA]    = Padma.consnt_SHA;
Manjusha.toPadma[Manjusha.consnt_SSA]    = Padma.consnt_SSA;
Manjusha.toPadma[Manjusha.consnt_SA]     = Padma.consnt_SA;
Manjusha.toPadma[Manjusha.consnt_HA]     = Padma.consnt_HA;
Manjusha.toPadma[Manjusha.consnt_KSHA]   = Padma.consnt_KA+ Padma.vattu_SSA;
Manjusha.toPadma[Manjusha.consnt_THRA]   = Padma.consnt_TA + Padma.vattu_RA;
Manjusha.toPadma[Manjusha.consnt_JHNA]   = Padma.consnt_JA+ Padma.vattu_NYA;

//Additional consonants
Manjusha.toPadma[Manjusha.AddConsnt_QA]   = Padma.consnt_QA;
Manjusha.toPadma[Manjusha.AddConsnt_KHHA] = Padma.consnt_KHHA;
Manjusha.toPadma[Manjusha.AddConsnt_GHHA] = Padma.consnt_GHHA;
Manjusha.toPadma[Manjusha.AddConsnt_ZA]   = Padma.consnt_ZA;
Manjusha.toPadma[Manjusha.AddConsnt_DDDHA]= Padma.consnt_DDDHA;
Manjusha.toPadma[Manjusha.AddConsnt_RHA]  = Padma.consnt_RHA;
Manjusha.toPadma[Manjusha.AddConsnt_FA]   = Padma.consnt_FA;

//Gunintamulu
Manjusha.toPadma[Manjusha.vowelsn_AA]    	= Padma.vowelsn_AA;
Manjusha.toPadma[Manjusha.vowelsn_I]   		= Padma.vowelsn_I;
Manjusha.toPadma[Manjusha.vowelsn_II]    	= Padma.vowelsn_II;
Manjusha.toPadma[Manjusha.vowelsn_U_1]   	= Padma.vowelsn_U;
Manjusha.toPadma[Manjusha.vowelsn_U_2]   	= Padma.vowelsn_U;
Manjusha.toPadma[Manjusha.vowelsn_UU]  		= Padma.vowelsn_UU;
Manjusha.toPadma[Manjusha.vowelsn_R]     	= Padma.vowelsn_R;
Manjusha.toPadma[Manjusha.vowelsn_RR]     	= Padma.vowelsn_RR;
Manjusha.toPadma[Manjusha.vowelsn_EE]		= Padma.vowelsn_EE;
Manjusha.toPadma[Manjusha.vowelsn_AI]    	= Padma.vowelsn_AI;
Manjusha.toPadma[Manjusha.vowelsn_CDR_E_1]	= Padma.vowelsn_CDR_E;
Manjusha.toPadma[Manjusha.vowelsn_CDR_E_2]	= Padma.vowelsn_CDR_E;
Manjusha.toPadma[Manjusha.vowelsn_CDR_O_1] 	= Padma.vowelsn_CDR_O;
Manjusha.toPadma[Manjusha.vowelsn_CDR_O_2] 	= Padma.vowelsn_CDR_O;
Manjusha.toPadma[Manjusha.vowelsn_OO]    	= Padma.vowelsn_OO;
Manjusha.toPadma[Manjusha.vowelsn_AU]    	= Padma.vowelsn_AU;

//Matra + anusvara
Manjusha.toPadma[Manjusha.vowelsn_IM]    = Padma.vowelsn_I + Padma.anusvara;
Manjusha.toPadma[Manjusha.vowelsn_IIM]   = Padma.vowelsn_II + Padma.anusvara;
Manjusha.toPadma[Manjusha.vowelsn_EM]    = Padma.vowelsn_EE + Padma.anusvara;
Manjusha.toPadma[Manjusha.vowelsn_OM]    = Padma.vowelsn_O + Padma.anusvara;
Manjusha.toPadma[Manjusha.vowelsn_AAM]   = Padma.vowelsn_AA+ Padma.anusvara;
Manjusha.toPadma[Manjusha.vowelsn_AIM]   = Padma.vowelsn_AI + Padma.anusvara;
Manjusha.toPadma[Manjusha.vowelsn_UM]    = Padma.vowelsn_U + Padma.nukta;
Manjusha.toPadma[Manjusha.vowelsn_UUM]   = Padma.vowelsn_UU + Padma.nukta;

//Halffm
Manjusha.toPadma[Manjusha.halffm_KA]     = Padma.halffm_KA;
Manjusha.toPadma[Manjusha.halffm_KHA]    = Padma.halffm_KHA;
Manjusha.toPadma[Manjusha.halffm_GA]     = Padma.halffm_GA;
Manjusha.toPadma[Manjusha.halffm_GHA]    = Padma.halffm_GHA;
Manjusha.toPadma[Manjusha.halffm_CA]     = Padma.halffm_CA;
Manjusha.toPadma[Manjusha.halffm_JA]     = Padma.halffm_JA;
Manjusha.toPadma[Manjusha.halffm_JHA]    = Padma.halffm_JHA;
Manjusha.toPadma[Manjusha.halffm_NYA]    = Padma.halffm_NYA;
Manjusha.toPadma[Manjusha.halffm_THR]    = Padma.halffm_TA+ Padma.halffm_RA;
Manjusha.toPadma[Manjusha.halffm_NNA]    = Padma.halffm_NNA;
Manjusha.toPadma[Manjusha.halffm_TA]     = Padma.halffm_TA;
Manjusha.toPadma[Manjusha.halffm_ATTA]   = Padma.halffm_TA+ Padma.halffm_TA;
Manjusha.toPadma[Manjusha.halffm_THA]    = Padma.halffm_THA;
Manjusha.toPadma[Manjusha.halffm_DHA]    = Padma.halffm_DHA;
Manjusha.toPadma[Manjusha.halffm_NA]     = Padma.halffm_NA;
Manjusha.toPadma[Manjusha.halffm_PA]     = Padma.halffm_PA;
Manjusha.toPadma[Manjusha.halffm_PHA]    = Padma.halffm_PHA;
Manjusha.toPadma[Manjusha.halffm_BA]     = Padma.halffm_BA;
Manjusha.toPadma[Manjusha.halffm_BHA]    = Padma.halffm_BHA;
Manjusha.toPadma[Manjusha.halffm_MA]     = Padma.halffm_MA;
Manjusha.toPadma[Manjusha.halffm_YA]     = Padma.halffm_YA;
Manjusha.toPadma[Manjusha.halffm_RA]     = Padma.halffm_RA;
Manjusha.toPadma[Manjusha.halffm_LA_1]   = Padma.halffm_LA;
Manjusha.toPadma[Manjusha.halffm_LA_2]   = Padma.halffm_LA;
Manjusha.toPadma[Manjusha.halffm_VA]     = Padma.halffm_VA;
Manjusha.toPadma[Manjusha.halffm_SHA]    = Padma.halffm_SHA;
Manjusha.toPadma[Manjusha.halffm_SSA]    = Padma.halffm_SSA;
Manjusha.toPadma[Manjusha.halffm_SA]     = Padma.halffm_SA;
Manjusha.toPadma[Manjusha.halffm_KSHA]   = Padma.halffm_KA+ Padma.halffm_SSA;
Manjusha.toPadma[Manjusha.vattu_YA]	 = Padma.vattu_YA;
Manjusha.toPadma[Manjusha.MISC_EQUAL]	 = Padma.halffm_RRA;

//Conjuncts
Manjusha.toPadma[Manjusha.conjct_DDDHA]    	 = Padma.consnt_DA + Padma.vattu_DHA;
Manjusha.toPadma[Manjusha.conjct_RU]    	 = Padma.consnt_RA + Padma.vowelsn_U;
Manjusha.toPadma[Manjusha.conjct_RR_MISC_II]     = Padma.halffm_RA+ Padma.vowelsn_II;
Manjusha.toPadma[Manjusha.conjct_RUU]     	 = Padma.consnt_RA + Padma.vowelsn_UU;
Manjusha.toPadma[Manjusha.conjct_DHYA] 		 = Padma.consnt_DA + Padma.vattu_YA;
Manjusha.toPadma[Manjusha.conjct_AA_RA] 	 = Padma.consnt_RA + Padma.vowelsn_AA;// + Padma.consnt_RA;
Manjusha.toPadma[Manjusha.conjct_RR_MISC_AI]     = Padma.halffm_RA + Padma.vowelsn_AI;
Manjusha.toPadma[Manjusha.conjct_MISC_LA_1]    	 = Padma.consnt_LA;
Manjusha.toPadma[Manjusha.conjct_MISC_LA_2]   	 = Padma.consnt_LA;
Manjusha.toPadma[Manjusha.conjct_NNNA] 		 = Padma.consnt_NA + Padma.vattu_NA;
Manjusha.toPadma[Manjusha.conjct_TTTA]	         = Padma.consnt_TTA + Padma.vattu_TTA;
Manjusha.toPadma[Manjusha.conjct_DDDA]     	 = Padma.consnt_DDA + Padma.vattu_DDA;
Manjusha.toPadma[Manjusha.conjct_SHCHA]          = Padma.consnt_SHA + Padma.vattu_CA;
Manjusha.toPadma[Manjusha.conjct_TTTHA]     	 = Padma.consnt_TTHA + Padma.vattu_TTHA;
Manjusha.toPadma[Manjusha.conjct_DHMA]    	 = Padma.consnt_DA + Padma.vattu_MA;
Manjusha.toPadma[Manjusha.conjct_BHD]     	 = Padma.consnt_DA + Padma.vattu_BHA;
Manjusha.toPadma[Manjusha.conjct_GHD]    	 = Padma.consnt_DA + Padma.vattu_GA;
Manjusha.toPadma[Manjusha.conjct_MISC_0]    	 = Padma.consnt_KA+ Padma.vattu_TA;
Manjusha.toPadma[Manjusha.conjct_SHTTA]     	 = Padma.consnt_SSA + Padma.vattu_TTHA;
Manjusha.toPadma[Manjusha.conjct_KKKA]     	 = Padma.consnt_KA + Padma.vattu_KA;
Manjusha.toPadma[Manjusha.conjct_DHRU]    	 = Padma.consnt_DA + Padma.vowelsn_R;
Manjusha.toPadma[Manjusha.conjct_MISC_1]    	 = Padma.vattu_RA+ Padma.vowelsn_U;
Manjusha.toPadma[Manjusha.conjct_MISC_2]    	 = Padma.vattu_RA+ Padma.vowelsn_UU;
Manjusha.toPadma[Manjusha.conjct_NGGA]     	 = Padma.consnt_GA + Padma.vattu_NA;
Manjusha.toPadma[Manjusha.conjct_RR_MISC_AA]     = Padma.halffm_RA + Padma.vowelsn_AA ;
Manjusha.toPadma[Manjusha.conjct_MISC_3]    	 = Padma.vattu_RA;

Manjusha.toPadma[Manjusha.conjct_PHRA]    	 = Padma.consnt_PHA + Padma.vattu_RA ;
Manjusha.toPadma[Manjusha.conjct_BR]    	 = Padma.consnt_BA + Padma.vattu_RA ;
Manjusha.toPadma[Manjusha.conjct_GR]    	 = Padma.consnt_GA + Padma.vattu_RA ;
Manjusha.toPadma[Manjusha.conjct_SHTA] 		 = Padma.consnt_SSA + Padma.vattu_TTA;
Manjusha.toPadma[Manjusha.conjct_RR_MISC_E]      = Padma.halffm_RA + Padma.vowelsn_EE;
Manjusha.toPadma[Manjusha.conjct_RR_MISC_AI_M]   = Padma.halffm_RA+ Padma.vowelsn_AI+ Padma.anusvara;
Manjusha.toPadma[Manjusha.conjct_TTTTHA_1]     	 = Padma.consnt_TA + Padma.vattu_TA;
Manjusha.toPadma[Manjusha.conjct_TTTTHA_2]     	 = Padma.consnt_TA + Padma.vattu_TA;
Manjusha.toPadma[Manjusha.conjct_RR_MISC_I]    	 = Padma.halffm_RA + Padma.vowelsn_I;
Manjusha.toPadma[Manjusha.conjct_RR_MISC_E_M]    = Padma.halffm_RA+ Padma.vowelsn_EE+ Padma.anusvara;
Manjusha.toPadma[Manjusha.conjct_MISC_4]    	 = Padma.halffm_SHA;
Manjusha.toPadma[Manjusha.conjct_SHRA]     	 = Padma.consnt_SHA + Padma.vattu_RA;
Manjusha.toPadma[Manjusha.conjct_KRA]     	 = Padma.consnt_KA + Padma.vattu_RA;
Manjusha.toPadma[Manjusha.conjct_MISC_5]    	 = Padma.vowelsn_AA + Padma.candrabindu;
Manjusha.toPadma[Manjusha.conjct_RR_MISC_AA_M]   = Padma.halffm_RA+ Padma.vowelsn_AA+ Padma.anusvara;
Manjusha.toPadma[Manjusha.conjct_RR_MISC_M]    	 = Padma.halffm_RA+ Padma.anusvara;
Manjusha.toPadma[Manjusha.conjct_PRA]     	 = Padma.consnt_PA + Padma.vattu_RA;
Manjusha.toPadma[Manjusha.conjct_SHNNA]     	 = Padma.consnt_SHA+ Padma.vattu_NA;
Manjusha.toPadma[Manjusha.conjct_MISC_7]     	 = Padma.consnt_DA + Padma.vattu_DA;
Manjusha.toPadma[Manjusha.conjct_DHRA]    	 = Padma.consnt_DA + Padma.vattu_RA;
Manjusha.toPadma[Manjusha.conjct_DHVA]    	 = Padma.consnt_DA + Padma.vattu_VA;
Manjusha.toPadma[Manjusha.conjct_RR_MISC_II_M]   = Padma.vowelsn_II + Padma.halffm_RA+Padma.anusvara;
Manjusha.toPadma[Manjusha.conjct_HYA]     	 = Padma.consnt_HA + Padma.vattu_YA;
Manjusha.toPadma[Manjusha.conjct_HRU]     	 = Padma.consnt_HA + Padma.vowelsn_R;
Manjusha.toPadma[Manjusha.conjct_SHVA]   	 = Padma.consnt_SHA + Padma.vattu_VA;
Manjusha.toPadma[Manjusha.conjct_PTA]     	 = Padma.consnt_TA + Padma.vattu_PA;
Manjusha.toPadma[Manjusha.conjct_HMA]     	 = Padma.consnt_HA + Padma.vattu_MA;

//GENERIC PUNCTUATION MARKS
Manjusha.toPadma[Manjusha.conjct_MISC_OM]  		= Padma.om;
Manjusha.toPadma[Manjusha.conjct_MISC_DANDA]       	= Padma.danda;
Manjusha.toPadma[Manjusha.conjct_MISC_AVAGRAHA]         = Padma.avagraha;
Manjusha.toPadma[Manjusha.conjct_MISC_VIRAMA ]          = Padma.syllbreak;

//Digits
Manjusha.toPadma[Manjusha.digit_ZERO]    = Padma.digit_ZERO;
Manjusha.toPadma[Manjusha.digit_ONE]     = Padma.digit_ONE;
Manjusha.toPadma[Manjusha.digit_TWO]     = Padma.digit_TWO;
Manjusha.toPadma[Manjusha.digit_THREE]   = Padma.digit_THREE;
Manjusha.toPadma[Manjusha.digit_FOUR]    = Padma.digit_FOUR;
Manjusha.toPadma[Manjusha.digit_FIVE]    = Padma.digit_FIVE;
Manjusha.toPadma[Manjusha.digit_SIX]     = Padma.digit_SIX;
Manjusha.toPadma[Manjusha.digit_SEVEN]   = Padma.digit_SEVEN;
Manjusha.toPadma[Manjusha.digit_EIGHT]   = Padma.digit_EIGHT;
Manjusha.toPadma[Manjusha.digit_NINE]    = Padma.digit_NINE;

// ASCII
Manjusha.toPadma[Manjusha.QUESTIONMARK]    	 = "?";
Manjusha.toPadma[Manjusha.EXCLAM]    		 = "!";
Manjusha.toPadma[Manjusha.PERCENT]		 = "%";
Manjusha.toPadma[Manjusha.PLUS]			 = "+";
Manjusha.toPadma[Manjusha.MINUS]		 = "-"; 
Manjusha.toPadma[Manjusha.COMMA]		 = ",";
Manjusha.toPadma[Manjusha.PERIOD]		 = ".";
Manjusha.toPadma[Manjusha.SOLIDUS]		 = "/";
Manjusha.toPadma[Manjusha.EQUALS]		 = "=";
Manjusha.toPadma[Manjusha.DIVISION]		 = "/";
Manjusha.toPadma[Manjusha.MULTIPLY]		 = "\u00D7";
Manjusha.toPadma[Manjusha.LEFTPARANTHESIS]	 = "(";
Manjusha.toPadma[Manjusha.RIGHTPARANTHESIS]	 = ")";
Manjusha.toPadma[Manjusha.HYPHEN]		 = "-";
Manjusha.toPadma[Manjusha.STAR]			 = "*";
Manjusha.toPadma[Manjusha.COLON]		 = ":";
Manjusha.toPadma[Manjusha.SEMICOLON]		 = ";";
Manjusha.toPadma[Manjusha.APOSTROPHE]		 = "\u2019";
Manjusha.toPadma[Manjusha.MISC]			 = "\u2018";
Manjusha.toPadma[Manjusha.ENG_1]		 = "1";
Manjusha.toPadma[Manjusha.ENG_2]		 = "2";
Manjusha.toPadma[Manjusha.ENG_3]		 = "3";
Manjusha.toPadma[Manjusha.ENG_4]		 = "4";
Manjusha.toPadma[Manjusha.ENG_5]		 = "5";
Manjusha.toPadma[Manjusha.ENG_6]		 = "6";
Manjusha.toPadma[Manjusha.ENG_7]		 = "7";
Manjusha.toPadma[Manjusha.ENG_8]		 = "8";
Manjusha.toPadma[Manjusha.ENG_9]		 = "9";
Manjusha.toPadma[Manjusha.ENG_0]		 = "0";

Manjusha.prefixList = new Array();
Manjusha.prefixList[Manjusha.vowelsn_I]      = true;
Manjusha.prefixList[Manjusha.vowelsn_IM]     = true;
Manjusha.prefixList[Manjusha.halffm_THR]     = true;

Manjusha.suffixList = new Array();
Manjusha.suffixList[Manjusha.halffm_RA]          = true;
Manjusha.suffixList[Manjusha.vowelsn_II]         = true;
Manjusha.suffixList[Manjusha.vowelsn_OO]         = true;
Manjusha.suffixList[Manjusha.conjct_RR_MISC_II]  = true;
Manjusha.suffixList[Manjusha.conjct_RR_MISC_AI]  = true;
Manjusha.suffixList[Manjusha.conjct_RR_MISC_AA]  = true;
Manjusha.suffixList[Manjusha.conjct_RR_MISC_AI_M]= true;
Manjusha.suffixList[Manjusha.conjct_RR_MISC_AA_M]= true;
Manjusha.suffixList[Manjusha.conjct_RR_MISC_M]   = true;
Manjusha.suffixList[Manjusha.conjct_RR_MISC_II_M]= true;
Manjusha.suffixList[Manjusha.conjct_RR_MISC_E_M] = true;
Manjusha.suffixList[Manjusha.conjct_RR_MISC_E]   = true;
Manjusha.suffixList[Manjusha.conjct_AA_RA]  	 = true;

Manjusha.redundantList = new Array();
Manjusha.redundantList[Manjusha.BLANK_1]  = true;
Manjusha.redundantList[Manjusha.BLANK_2]  = true;

Manjusha.overloadList = new Array();
Manjusha.overloadList[Manjusha.vowel_A]      = true;
Manjusha.overloadList[Manjusha.vowel_AA]     = true;
Manjusha.overloadList[Manjusha.vowelsn_AA]   = true;
Manjusha.overloadList[Manjusha.vowel_EE]     = true;
Manjusha.overloadList[Manjusha.vowel_I]      = true;
Manjusha.overloadList[Manjusha.halffm_KA]    = true;
Manjusha.overloadList[Manjusha.halffm_KHA]   = true;
Manjusha.overloadList[Manjusha.halffm_GA]    = true;
Manjusha.overloadList[Manjusha.halffm_GHA]   = true;
Manjusha.overloadList[Manjusha.halffm_CA]    = true;
Manjusha.overloadList[Manjusha.halffm_JA]    = true;
Manjusha.overloadList[Manjusha.halffm_JHA]   = true;
Manjusha.overloadList[Manjusha.halffm_NYA]   = true;
Manjusha.overloadList[Manjusha.halffm_NNA]   = true;
Manjusha.overloadList[Manjusha.halffm_TA]    = true;
Manjusha.overloadList[Manjusha.halffm_THA]   = true;
Manjusha.overloadList[Manjusha.halffm_DHA]   = true;
Manjusha.overloadList[Manjusha.halffm_NA]    = true;
Manjusha.overloadList[Manjusha.halffm_PA]    = true;
Manjusha.overloadList[Manjusha.halffm_BA]    = true;
Manjusha.overloadList[Manjusha.halffm_BHA]   = true;
Manjusha.overloadList[Manjusha.halffm_MA]    = true;
Manjusha.overloadList[Manjusha.halffm_YA]    = true;
Manjusha.overloadList[Manjusha.halffm_VA]    = true;
Manjusha.overloadList[Manjusha.halffm_SHA]   = true;
Manjusha.overloadList[Manjusha.halffm_SSA]   = true;
Manjusha.overloadList[Manjusha.halffm_SA]    = true;
Manjusha.overloadList[Manjusha.halffm_KSHA]  = true;
Manjusha.overloadList[Manjusha.halffm_ATTA]  = true; 
Manjusha.overloadList["\u0082"]    	     = true; 
Manjusha.overloadList["\u00F7"]    	     = true; 
Manjusha.overloadList["\u00EF"]              = true; 
Manjusha.overloadList["\u00AF"]              = true; 
Manjusha.overloadList["\u00D7"]              = true; 


//ManjushaMedium
function ManjushaMedium()
{
}

ManjushaMedium.maxLookupLen = Manjusha.maxLookupLen;
ManjushaMedium.fontFace     = "ManjushaMedium";
ManjushaMedium.displayName  = "ManjushaMedium";
ManjushaMedium.script       = Manjusha.script;
ManjushaMedium.hasSuffixes  = Manjusha.hasSuffixes;

ManjushaMedium.lookup = function (str) 
{
    return Manjusha.lookup(str);
}

ManjushaMedium.isPrefixSymbol = function (str)
{
    return Manjusha.isPrefixSymbol(str);
}

ManjushaMedium.isSuffixSymbol = function (str)
{
    return Manjusha.isSuffixSymbol(str);
}

ManjushaMedium.isOverloaded = function (str)
{
    return Manjusha.isOverloaded(str);
}

ManjushaMedium.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return Manjusha.handleTwoPartVowelSigns(sign1, sign2);
}

ManjushaMedium.isRedundant = function (str)
{
    return Manjusha.isRedundant(str);
}
