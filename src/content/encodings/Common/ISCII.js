// $Id: ISCII.js,v 1.7 2005/12/09 15:00:36 vnagarjuna Exp $ -->

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

//ISCII
function ISCII() 
{
}

ISCII.maxLookupLen = 2;

//ISCII Special codes
ISCII.special_INVISIBLE = "\u00D9";
ISCII.special_NUKTA     = "\u00E9"; //Diacritic mark that is used to generate some less used vowels/consonants
ISCII.special_ATR       = "\u00EF"; //switching languages, ignored here
ISCII.special_EXT       = "\u00F0";

//Codes not supported yet, listed here for completeness

//Vowel modifiers
ISCII.candrabindu = "\u00A1";
ISCII.anusvara    = "\u00A2";
ISCII.visarga     = "\u00A3";

//Independent Vowels
ISCII.letter_A    = "\u00A4";
ISCII.letter_AA   = "\u00A5";
ISCII.letter_I    = "\u00A6";
ISCII.letter_II   = "\u00A7";
ISCII.letter_U    = "\u00A8";
ISCII.letter_UU   = "\u00A9";
ISCII.letter_R    = "\u00AA";
ISCII.letter_RR   = "\u00AA\u00E9";
ISCII.letter_L    = "\u00A6\u00E9";
ISCII.letter_LL   = "\u00A7\u00E9";
ISCII.letter_E    = "\u00AB";
ISCII.letter_EE   = "\u00AC";
ISCII.letter_AI   = "\u00AD";
ISCII.letter_AYE  = "\u00AE";
ISCII.letter_O    = "\u00AF";
ISCII.letter_OO   = "\u00B0";
ISCII.letter_AU   = "\u00B1";
ISCII.letter_AWE  = "\u00B2";

//Consonants
ISCII.letter_KA   = "\u00B3";
ISCII.letter_KHA  = "\u00B4";
ISCII.letter_GA   = "\u00B5";
ISCII.letter_GHA  = "\u00B6";
ISCII.letter_NGA  = "\u00B7";
ISCII.letter_CA   = "\u00B8";
ISCII.letter_CHA  = "\u00B9";
ISCII.letter_JA   = "\u00BA";
ISCII.letter_JHA  = "\u00BB";
ISCII.letter_NYA  = "\u00BC";
ISCII.letter_TTA  = "\u00BD";
ISCII.letter_TTHA = "\u00BE";
ISCII.letter_DDA  = "\u00BF";
ISCII.letter_DDHA = "\u00C0";
ISCII.letter_NNA  = "\u00C1";
ISCII.letter_TA   = "\u00C2";
ISCII.letter_THA  = "\u00C3";
ISCII.letter_DA   = "\u00C4";
ISCII.letter_DHA  = "\u00C5";
ISCII.letter_NA   = "\u00C6";
ISCII.letter_NNNA = "\u00C7";
ISCII.letter_PA   = "\u00C8";
ISCII.letter_PHA  = "\u00C9";
ISCII.letter_BA   = "\u00CA";
ISCII.letter_BHA  = "\u00CB";
ISCII.letter_MA   = "\u00CC";
ISCII.letter_YA   = "\u00CD";
ISCII.letter_YYA  = "\u00CE";
ISCII.letter_RA   = "\u00CF";
ISCII.letter_RRA  = "\u00D0";
ISCII.letter_LA   = "\u00D1";
ISCII.letter_LLA  = "\u00D2";
ISCII.letter_ZHA  = "\u00D3";   //Tamil and Malayalam
ISCII.letter_VA   = "\u00D4";
ISCII.letter_SHA  = "\u00D5";
ISCII.letter_SSA  = "\u00D6";
ISCII.letter_SA   = "\u00D7";
ISCII.letter_HA   = "\u00D8";
ISCII.letter_QA   = "\u00B3\u00E9";
ISCII.letter_KHHA = "\u00B4\u00E9";
ISCII.letter_GHHA = "\u00B5\u00E9";
ISCII.letter_ZA   = "\u00BA\u00E9";
ISCII.letter_DDDHA = "\u00BF\u00E9";
ISCII.letter_RHA  = "\u00C0\u00E9";
ISCII.letter_FA   = "\u00C9\u00E9";

//Dependent Vowel Signs
ISCII.vowelsn_AA  = "\u00DA";
ISCII.vowelsn_I   = "\u00DB";
ISCII.vowelsn_II  = "\u00DC";
ISCII.vowelsn_U   = "\u00DD";
ISCII.vowelsn_UU  = "\u00DE";
ISCII.vowelsn_R   = "\u00DF";
ISCII.vowelsn_RR  = "\u00DF\u00E9";
ISCII.vowelsn_L   = "\u00DB\u00E9";
ISCII.vowelsn_LL  = "\u00DC\u00E9";
ISCII.vowelsn_E   = "\u00E0";
ISCII.vowelsn_EE  = "\u00E1";
ISCII.vowelsn_AI  = "\u00E2";
ISCII.vowelsn_AYE = "\u00E3";
ISCII.vowelsn_O   = "\u00E4";
ISCII.vowelsn_OO  = "\u00E5";
ISCII.vowelsn_AU  = "\u00E6";
ISCII.vowelsn_AWE = "\u00E7";

//Miscellaneous Signs
ISCII.misc_DANDA    = "\u00EA";
ISCII.misc_AVAGRAHA = "\u00EA\u00E9";
ISCII.misc_OM       = "\u00A1\u00E9";

//Digits
ISCII.digit_ZERO  = "\u00F1";
ISCII.digit_ONE   = "\u00F2";
ISCII.digit_TWO   = "\u00F3";
ISCII.digit_THREE = "\u00F4";
ISCII.digit_FOUR  = "\u00F5";
ISCII.digit_FIVE  = "\u00F6";
ISCII.digit_SIX   = "\u00F7";
ISCII.digit_SEVEN = "\u00F8";
ISCII.digit_EIGHT = "\u00F9";
ISCII.digit_NINE  = "\u00FA";

//Soft and Explicit Halant
ISCII.misc_VIRAMA     = "\u00E8";       //halant
ISCII.misc_SOFTHALANT = "\u00E8\u00E9"; //equivalent of HALANT + ZWJ in Unicode
ISCII.misc_EXPHALANT  = "\u00E8\u00E8"; //equivalent of HALANT + ZWNJ in Unicode

ISCII.toPadma = new Object();

ISCII.toPadma[ISCII.candrabindu]     = Padma.candrabindu;
ISCII.toPadma[ISCII.visarga]         = Padma.visarga;
ISCII.toPadma[ISCII.misc_EXPHALANT]  = Padma.syllbreak;
ISCII.toPadma[ISCII.misc_SOFTHALANT] = Padma.chillu;
ISCII.toPadma[ISCII.misc_VIRAMA]     = Padma.pollu;
ISCII.toPadma[ISCII.anusvara]        = Padma.anusvara;
ISCII.toPadma[ISCII.misc_AVAGRAHA]   = Padma.avagraha;
ISCII.toPadma[ISCII.misc_DANDA]      = Padma.danda;
ISCII.toPadma[ISCII.misc_OM]         = Padma.om;

//digits
ISCII.toPadma[ISCII.digit_ZERO]  = Padma.digit_ZERO;
ISCII.toPadma[ISCII.digit_ONE]   = Padma.digit_ONE;
ISCII.toPadma[ISCII.digit_TWO]   = Padma.digit_TWO;
ISCII.toPadma[ISCII.digit_THREE] = Padma.digit_THREE;
ISCII.toPadma[ISCII.digit_FOUR]  = Padma.digit_FOUR;
ISCII.toPadma[ISCII.digit_FIVE]  = Padma.digit_FIVE;
ISCII.toPadma[ISCII.digit_SIX]   = Padma.digit_SIX;
ISCII.toPadma[ISCII.digit_SEVEN] = Padma.digit_SEVEN;
ISCII.toPadma[ISCII.digit_EIGHT] = Padma.digit_EIGHT;
ISCII.toPadma[ISCII.digit_NINE]  = Padma.digit_NINE;

//Vowels
ISCII.toPadma[ISCII.letter_A]     = Padma.vowel_A;
ISCII.toPadma[ISCII.letter_AA]    = Padma.vowel_AA;
ISCII.toPadma[ISCII.letter_I]     = Padma.vowel_I;
ISCII.toPadma[ISCII.letter_II]    = Padma.vowel_II;
ISCII.toPadma[ISCII.letter_U]     = Padma.vowel_U;
ISCII.toPadma[ISCII.letter_UU]    = Padma.vowel_UU;
ISCII.toPadma[ISCII.letter_R]     = Padma.vowel_R;
ISCII.toPadma[ISCII.letter_RR]    = Padma.vowel_RR;
ISCII.toPadma[ISCII.letter_L]     = Padma.vowel_L;
ISCII.toPadma[ISCII.letter_LL]    = Padma.vowel_LL;
ISCII.toPadma[ISCII.letter_E]     = Padma.vowel_E;
ISCII.toPadma[ISCII.letter_EE]    = Padma.vowel_EE;
ISCII.toPadma[ISCII.letter_AI]    = Padma.vowel_AI;
ISCII.toPadma[ISCII.letter_AYE]   = Padma.vowel_CDR_E;
ISCII.toPadma[ISCII.letter_O]     = Padma.vowel_O;
ISCII.toPadma[ISCII.letter_OO]    = Padma.vowel_OO;
ISCII.toPadma[ISCII.letter_AU]    = Padma.vowel_AU;
ISCII.toPadma[ISCII.letter_AWE]   = Padma.vowel_CDR_O;

//Consonants
ISCII.toPadma[ISCII.letter_KA]    = Padma.consnt_KA;
ISCII.toPadma[ISCII.letter_KHA]   = Padma.consnt_KHA;
ISCII.toPadma[ISCII.letter_GA]    = Padma.consnt_GA;
ISCII.toPadma[ISCII.letter_GHA]   = Padma.consnt_GHA;
ISCII.toPadma[ISCII.letter_NGA]   = Padma.consnt_NGA;
ISCII.toPadma[ISCII.letter_CA]    = Padma.consnt_CA;
ISCII.toPadma[ISCII.letter_CHA]   = Padma.consnt_CHA;
ISCII.toPadma[ISCII.letter_JA]    = Padma.consnt_JA;
ISCII.toPadma[ISCII.letter_JHA]   = Padma.consnt_JHA;
ISCII.toPadma[ISCII.letter_NYA]   = Padma.consnt_NYA;
ISCII.toPadma[ISCII.letter_TTA]   = Padma.consnt_TTA;
ISCII.toPadma[ISCII.letter_TTHA]  = Padma.consnt_TTHA;
ISCII.toPadma[ISCII.letter_DDA]   = Padma.consnt_DDA;
ISCII.toPadma[ISCII.letter_DDHA]  = Padma.consnt_DDHA;
ISCII.toPadma[ISCII.letter_NNA]   = Padma.consnt_NNA;
ISCII.toPadma[ISCII.letter_TA]    = Padma.consnt_TA;
ISCII.toPadma[ISCII.letter_THA]   = Padma.consnt_THA;
ISCII.toPadma[ISCII.letter_DA]    = Padma.consnt_DA;
ISCII.toPadma[ISCII.letter_DHA]   = Padma.consnt_DHA;
ISCII.toPadma[ISCII.letter_NA]    = Padma.consnt_NA;
ISCII.toPadma[ISCII.letter_NNNA]  = Padma.consnt_NNNA;
ISCII.toPadma[ISCII.letter_PA]    = Padma.consnt_PA;
ISCII.toPadma[ISCII.letter_PHA]   = Padma.consnt_PHA;
ISCII.toPadma[ISCII.letter_BA]    = Padma.consnt_BA;
ISCII.toPadma[ISCII.letter_BHA]   = Padma.consnt_BHA;
ISCII.toPadma[ISCII.letter_MA]    = Padma.consnt_MA;
ISCII.toPadma[ISCII.letter_YA]    = Padma.consnt_YA;
ISCII.toPadma[ISCII.letter_YYA]   = Padma.consnt_YYA;
ISCII.toPadma[ISCII.letter_RA]    = Padma.consnt_RA;
ISCII.toPadma[ISCII.letter_RRA]   = Padma.consnt_RRA;
ISCII.toPadma[ISCII.letter_LA]    = Padma.consnt_LA;
ISCII.toPadma[ISCII.letter_LLA]   = Padma.consnt_LLA;
ISCII.toPadma[ISCII.letter_ZHA]   = Padma.consnt_ZHA;
ISCII.toPadma[ISCII.letter_VA]    = Padma.consnt_VA;
ISCII.toPadma[ISCII.letter_SHA]   = Padma.consnt_SHA;
ISCII.toPadma[ISCII.letter_SSA]   = Padma.consnt_SSA;
ISCII.toPadma[ISCII.letter_SA]    = Padma.consnt_SA;
ISCII.toPadma[ISCII.letter_HA]    = Padma.consnt_HA;
ISCII.toPadma[ISCII.letter_QA]    = Padma.consnt_QA;
ISCII.toPadma[ISCII.letter_KHHA]  = Padma.consnt_KHHA;
ISCII.toPadma[ISCII.letter_GHHA]  = Padma.consnt_GHHA;
ISCII.toPadma[ISCII.letter_ZA]    = Padma.consnt_ZA;
ISCII.toPadma[ISCII.letter_FA]    = Padma.consnt_FA;
ISCII.toPadma[ISCII.letter_DDDHA] = Padma.consnt_DDDHA;
ISCII.toPadma[ISCII.letter_RHA]   = Padma.consnt_RHA;

//Gunimtaalu
ISCII.toPadma[ISCII.vowelsn_AA]  = Padma.vowelsn_AA;
ISCII.toPadma[ISCII.vowelsn_I]   = Padma.vowelsn_I;
ISCII.toPadma[ISCII.vowelsn_II]  = Padma.vowelsn_II;
ISCII.toPadma[ISCII.vowelsn_U]   = Padma.vowelsn_U;
ISCII.toPadma[ISCII.vowelsn_UU]  = Padma.vowelsn_UU;
ISCII.toPadma[ISCII.vowelsn_R]   = Padma.vowelsn_R;
ISCII.toPadma[ISCII.vowelsn_RR]  = Padma.vowelsn_RR;
ISCII.toPadma[ISCII.vowelsn_L]   = Padma.vowelsn_L;
ISCII.toPadma[ISCII.vowelsn_LL]  = Padma.vowelsn_LL;
ISCII.toPadma[ISCII.vowelsn_E]   = Padma.vowelsn_E;
ISCII.toPadma[ISCII.vowelsn_EE]  = Padma.vowelsn_EE;
ISCII.toPadma[ISCII.vowelsn_AI]  = Padma.vowelsn_AI;
ISCII.toPadma[ISCII.vowelsn_AYE] = Padma.vowelsn_CDR_E;
ISCII.toPadma[ISCII.vowelsn_O]   = Padma.vowelsn_O;
ISCII.toPadma[ISCII.vowelsn_OO]  = Padma.vowelsn_OO;
ISCII.toPadma[ISCII.vowelsn_AU]  = Padma.vowelsn_AU;
ISCII.toPadma[ISCII.vowelsn_AWE] = Padma.vowelsn_CDR_O;

//Vattulu
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_KA]    = Padma.vattu_KA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_KHA]   = Padma.vattu_KHA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_GA]    = Padma.vattu_GA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_GHA]   = Padma.vattu_GHA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_NGA]   = Padma.vattu_NGA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_CA]    = Padma.vattu_CA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_CHA]   = Padma.vattu_CHA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_JA]    = Padma.vattu_JA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_JHA]   = Padma.vattu_JHA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_NYA]   = Padma.vattu_NYA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_TTA]   = Padma.vattu_TTA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_TTHA]  = Padma.vattu_TTHA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_DDA]   = Padma.vattu_DDA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_DDHA]  = Padma.vattu_DDHA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_NNA]   = Padma.vattu_NNA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_TA]    = Padma.vattu_TA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_THA]   = Padma.vattu_THA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_DA]    = Padma.vattu_DA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_DHA]   = Padma.vattu_DHA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_NA]    = Padma.vattu_NA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_NNNA]  = Padma.vattu_NNNA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_PA]    = Padma.vattu_PA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_PHA]   = Padma.vattu_PHA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_BA]    = Padma.vattu_BA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_BHA]   = Padma.vattu_BHA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_MA]    = Padma.vattu_MA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_YA]    = Padma.vattu_YA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_YYA]   = Padma.vattu_YYA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_RA]    = Padma.vattu_RA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_RRA]   = Padma.vattu_RRA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_LA]    = Padma.vattu_LA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_LLA]   = Padma.vattu_LLA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_ZHA]   = Padma.vattu_ZHA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_VA]    = Padma.vattu_VA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_SHA]   = Padma.vattu_SHA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_SSA]   = Padma.vattu_SSA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_SA]    = Padma.vattu_SA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_HA]    = Padma.vattu_HA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_QA]    = Padma.vattu_QA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_KHHA]  = Padma.vattu_KHHA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_GHHA]  = Padma.vattu_GHHA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_ZA]    = Padma.vattu_ZA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_FA]    = Padma.vattu_FA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_DDDHA] = Padma.vattu_DDDHA;
ISCII.toPadma[ISCII.misc_VIRAMA + ISCII.letter_RHA]   = Padma.vattu_RHA;

ISCII.lookup = function (str) 
{
    var val = ISCII.toPadma[str];
    return val == undefined ? null : val;
}
