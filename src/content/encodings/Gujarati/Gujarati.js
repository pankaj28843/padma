// $Id: Gujarati.js,v 1.3 2012/01/22 04:12:50 vnagarjuna Exp $ -->

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

function Gujarati()
{
}

//Generate map entries for vattulu and half-forms
Gujarati.initialize = function () {
    for(var i = Padma.vattu_START; i <= Padma.vattu_END; i++)
        Gujarati.fromPadma[String.fromCharCode(i)] = Gujarati.codePoints.misc_VIRAMA + Gujarati.fromPadma[Padma.fast_baseFormFromVattu(i)];
    for(i = Padma.half_START; i <= Padma.half_END; i++)
        Gujarati.fromPadma[String.fromCharCode(i)] = Gujarati.fromPadma[Padma.fast_baseFormFromHalfForm(i)] + Gujarati.codePoints.misc_VIRAMA;
}

//Unicode Codepoints
Gujarati.codePoints = new Object();

Gujarati.codePoints.candrabindu  = "\u0A81";
//Vowel Modifiers
Gujarati.codePoints.anusvara     = "\u0A82";
Gujarati.codePoints.visarga      = "\u0A83";

//Independent Vowels
Gujarati.codePoints.letter_A     = "\u0A85";
Gujarati.codePoints.letter_AA    = "\u0A86";
Gujarati.codePoints.letter_I     = "\u0A87";
Gujarati.codePoints.letter_II    = "\u0A88";
Gujarati.codePoints.letter_U     = "\u0A89";
Gujarati.codePoints.letter_UU    = "\u0A8A";
Gujarati.codePoints.letter_R     = "\u0A8B";
Gujarati.codePoints.letter_RR    = "\u0AE0";
Gujarati.codePoints.letter_L     = "\u0A8C";
Gujarati.codePoints.letter_LL    = "\u0AE1";
Gujarati.codePoints.letter_CDR_E = "\u0A8D";
Gujarati.codePoints.letter_EE    = "\u0A8F";
Gujarati.codePoints.letter_AI    = "\u0A90";
Gujarati.codePoints.letter_CDR_O = "\u0A91";
Gujarati.codePoints.letter_OO    = "\u0A93";
Gujarati.codePoints.letter_AU    = "\u0A94";

//Consonants
Gujarati.codePoints.letter_KA   = "\u0A95";
Gujarati.codePoints.letter_KHA  = "\u0A96";
Gujarati.codePoints.letter_GA   = "\u0A97";
Gujarati.codePoints.letter_GHA  = "\u0A98";
Gujarati.codePoints.letter_NGA  = "\u0A99";
Gujarati.codePoints.letter_CA   = "\u0A9A";
Gujarati.codePoints.letter_CHA  = "\u0A9B";
Gujarati.codePoints.letter_JA   = "\u0A9C";
Gujarati.codePoints.letter_JHA  = "\u0A9D";
Gujarati.codePoints.letter_NYA  = "\u0A9E";
Gujarati.codePoints.letter_TTA  = "\u0A9F";
Gujarati.codePoints.letter_TTHA = "\u0AA0";
Gujarati.codePoints.letter_DDA  = "\u0AA1";
Gujarati.codePoints.letter_DDHA = "\u0AA2";
Gujarati.codePoints.letter_NNA  = "\u0AA3";
Gujarati.codePoints.letter_TA   = "\u0AA4";
Gujarati.codePoints.letter_THA  = "\u0AA5";
Gujarati.codePoints.letter_DA   = "\u0AA6";
Gujarati.codePoints.letter_DHA  = "\u0AA7";
Gujarati.codePoints.letter_NA   = "\u0AA8";
Gujarati.codePoints.letter_PA   = "\u0AAA";
Gujarati.codePoints.letter_PHA  = "\u0AAB";
Gujarati.codePoints.letter_BA   = "\u0AAC";
Gujarati.codePoints.letter_BHA  = "\u0AAD";
Gujarati.codePoints.letter_MA   = "\u0AAE";
Gujarati.codePoints.letter_YA   = "\u0AAF";
Gujarati.codePoints.letter_RA   = "\u0AB0";
Gujarati.codePoints.letter_LA   = "\u0AB2";
Gujarati.codePoints.letter_LLA  = "\u0AB3";
Gujarati.codePoints.letter_VA   = "\u0AB5";
Gujarati.codePoints.letter_SHA  = "\u0AB6";
Gujarati.codePoints.letter_SSA  = "\u0AB7";
Gujarati.codePoints.letter_SA   = "\u0AB8";
Gujarati.codePoints.letter_HA   = "\u0AB9";

//Dependent Vowel Signs
Gujarati.codePoints.vowelsn_AA    = "\u0ABE";
Gujarati.codePoints.vowelsn_I     = "\u0ABF";
Gujarati.codePoints.vowelsn_II    = "\u0AC0";
Gujarati.codePoints.vowelsn_U     = "\u0AC1";
Gujarati.codePoints.vowelsn_UU    = "\u0AC2";
Gujarati.codePoints.vowelsn_R     = "\u0AC3";
Gujarati.codePoints.vowelsn_RR    = "\u0AC4";
Gujarati.codePoints.vowelsn_L     = "\u0AE2";
Gujarati.codePoints.vowelsn_LL    = "\u0AE3";
Gujarati.codePoints.vowelsn_CDR_E = "\u0AC5";
Gujarati.codePoints.vowelsn_EE    = "\u0AC7";
Gujarati.codePoints.vowelsn_AI    = "\u0AC8";
Gujarati.codePoints.vowelsn_CDR_O = "\u0AC9";
Gujarati.codePoints.vowelsn_OO    = "\u0ACB";
Gujarati.codePoints.vowelsn_AU    = "\u0ACC";

//Miscellaneous Signs
Gujarati.codePoints.misc_VIRAMA   = "\u0ACD";
Gujarati.codePoints.misc_NUKTA    = "\u0ABC";
Gujarati.codePoints.misc_AVAGRAHA = "\u0ABD";
Gujarati.codePoints.misc_OM       = "\u0AD0";
Gujarati.codePoints.misc_RUPEE    = "\u0AF1";

//Digits
Gujarati.codePoints.digit_ZERO  = "\u0AE6";
Gujarati.codePoints.digit_ONE   = "\u0AE7";
Gujarati.codePoints.digit_TWO   = "\u0AE8";
Gujarati.codePoints.digit_THREE = "\u0AE9";
Gujarati.codePoints.digit_FOUR  = "\u0AEA";
Gujarati.codePoints.digit_FIVE  = "\u0AEB";
Gujarati.codePoints.digit_SIX   = "\u0AEC";
Gujarati.codePoints.digit_SEVEN = "\u0AED";
Gujarati.codePoints.digit_EIGHT = "\u0AEE";
Gujarati.codePoints.digit_NINE  = "\u0AEF";

Gujarati.fromPadma = new Object();

Gujarati.fromPadma[Padma.anusvara]    = Gujarati.codePoints.anusvara;
Gujarati.fromPadma[Padma.visarga]     = Gujarati.codePoints.visarga;
Gujarati.fromPadma[Padma.halant]      = Gujarati.codePoints.misc_VIRAMA;
Gujarati.fromPadma[Padma.chillu]      = Gujarati.codePoints.misc_VIRAMA + Unicode_Shared.ZWJ;
Gujarati.fromPadma[Padma.chillu_C2]   = Unicode_Shared.ZWJ;
Gujarati.fromPadma[Padma.syllbreak]   = Gujarati.codePoints.misc_VIRAMA + Unicode_Shared.ZWNJ;
Gujarati.fromPadma[Padma.nukta]       = Gujarati.codePoints.misc_NUKTA;
Gujarati.fromPadma[Padma.candrabindu] = Gujarati.codePoints.candrabindu;
Gujarati.fromPadma[Padma.avagraha]    = Gujarati.codePoints.misc_AVAGRAHA;
Gujarati.fromPadma[Padma.udAtta]      = Unicode_Shared.UDATTA;
Gujarati.fromPadma[Padma.anudAtta]    = Unicode_Shared.ANUDATTA;
Gujarati.fromPadma[Padma.svarita]     = Unicode_Shared.SVARITA;
Gujarati.fromPadma[Padma.danda]       = Unicode_Shared.DANDA;
Gujarati.fromPadma[Padma.ddanda]      = Unicode_Shared.DDANDA;
Gujarati.fromPadma[Padma.om]          = Gujarati.codePoints.misc_OM;
Gujarati.fromPadma[Padma.abbrev]      = Unicode_Shared.abbrev;

//digits
Gujarati.fromPadma[Padma.digit_ZERO]  = Gujarati.codePoints.digit_ZERO;
Gujarati.fromPadma[Padma.digit_ONE]   = Gujarati.codePoints.digit_ONE;
Gujarati.fromPadma[Padma.digit_TWO]   = Gujarati.codePoints.digit_TWO;
Gujarati.fromPadma[Padma.digit_THREE] = Gujarati.codePoints.digit_THREE;
Gujarati.fromPadma[Padma.digit_FOUR]  = Gujarati.codePoints.digit_FOUR;
Gujarati.fromPadma[Padma.digit_FIVE]  = Gujarati.codePoints.digit_FIVE;
Gujarati.fromPadma[Padma.digit_SIX]   = Gujarati.codePoints.digit_SIX;
Gujarati.fromPadma[Padma.digit_SEVEN] = Gujarati.codePoints.digit_SEVEN;
Gujarati.fromPadma[Padma.digit_EIGHT] = Gujarati.codePoints.digit_EIGHT;
Gujarati.fromPadma[Padma.digit_NINE]  = Gujarati.codePoints.digit_NINE;

//Vowels
Gujarati.fromPadma[Padma.vowel_A]     = Gujarati.codePoints.letter_A;
Gujarati.fromPadma[Padma.vowel_AA]    = Gujarati.codePoints.letter_AA;
Gujarati.fromPadma[Padma.vowel_I]     = Gujarati.codePoints.letter_I;
Gujarati.fromPadma[Padma.vowel_II]    = Gujarati.codePoints.letter_II;
Gujarati.fromPadma[Padma.vowel_U]     = Gujarati.codePoints.letter_U;
Gujarati.fromPadma[Padma.vowel_UU]    = Gujarati.codePoints.letter_UU;
Gujarati.fromPadma[Padma.vowel_R]     = Gujarati.codePoints.letter_R;
Gujarati.fromPadma[Padma.vowel_RR]    = Gujarati.codePoints.letter_RR;
Gujarati.fromPadma[Padma.vowel_L]     = Gujarati.codePoints.letter_L;
Gujarati.fromPadma[Padma.vowel_LL]    = Gujarati.codePoints.letter_LL;
Gujarati.fromPadma[Padma.vowel_CDR_E] = Gujarati.codePoints.letter_CDR_E;
Gujarati.fromPadma[Padma.vowel_EE]    = Gujarati.codePoints.letter_EE;
Gujarati.fromPadma[Padma.vowel_AI]    = Gujarati.codePoints.letter_AI;
Gujarati.fromPadma[Padma.vowel_CDR_O] = Gujarati.codePoints.letter_CDR_O;
Gujarati.fromPadma[Padma.vowel_OO]    = Gujarati.codePoints.letter_OO;
Gujarati.fromPadma[Padma.vowel_AU]    = Gujarati.codePoints.letter_AU;

//Consonants
Gujarati.fromPadma[Padma.consnt_KA]   = Gujarati.codePoints.letter_KA;
Gujarati.fromPadma[Padma.consnt_KHA]  = Gujarati.codePoints.letter_KHA;
Gujarati.fromPadma[Padma.consnt_GA]   = Gujarati.codePoints.letter_GA;
Gujarati.fromPadma[Padma.consnt_GHA]  = Gujarati.codePoints.letter_GHA;
Gujarati.fromPadma[Padma.consnt_NGA]  = Gujarati.codePoints.letter_NGA;
Gujarati.fromPadma[Padma.consnt_CA]   = Gujarati.codePoints.letter_CA;
Gujarati.fromPadma[Padma.consnt_CHA]  = Gujarati.codePoints.letter_CHA;
Gujarati.fromPadma[Padma.consnt_JA]   = Gujarati.codePoints.letter_JA;
Gujarati.fromPadma[Padma.consnt_JHA]  = Gujarati.codePoints.letter_JHA;
Gujarati.fromPadma[Padma.consnt_NYA]  = Gujarati.codePoints.letter_NYA;
Gujarati.fromPadma[Padma.consnt_TTA]  = Gujarati.codePoints.letter_TTA;
Gujarati.fromPadma[Padma.consnt_TTHA] = Gujarati.codePoints.letter_TTHA;
Gujarati.fromPadma[Padma.consnt_DDA]  = Gujarati.codePoints.letter_DDA;
Gujarati.fromPadma[Padma.consnt_DDHA] = Gujarati.codePoints.letter_DDHA;
Gujarati.fromPadma[Padma.consnt_NNA]  = Gujarati.codePoints.letter_NNA;
Gujarati.fromPadma[Padma.consnt_TA]   = Gujarati.codePoints.letter_TA;
Gujarati.fromPadma[Padma.consnt_THA]  = Gujarati.codePoints.letter_THA;
Gujarati.fromPadma[Padma.consnt_DA]   = Gujarati.codePoints.letter_DA;
Gujarati.fromPadma[Padma.consnt_DHA]  = Gujarati.codePoints.letter_DHA;
Gujarati.fromPadma[Padma.consnt_NA]   = Gujarati.codePoints.letter_NA;
Gujarati.fromPadma[Padma.consnt_PA]   = Gujarati.codePoints.letter_PA;
Gujarati.fromPadma[Padma.consnt_PHA]  = Gujarati.codePoints.letter_PHA;
Gujarati.fromPadma[Padma.consnt_BA]   = Gujarati.codePoints.letter_BA;
Gujarati.fromPadma[Padma.consnt_BHA]  = Gujarati.codePoints.letter_BHA;
Gujarati.fromPadma[Padma.consnt_MA]   = Gujarati.codePoints.letter_MA;
Gujarati.fromPadma[Padma.consnt_YA]   = Gujarati.codePoints.letter_YA;
Gujarati.fromPadma[Padma.consnt_RA]   = Gujarati.codePoints.letter_RA;
Gujarati.fromPadma[Padma.consnt_LA]   = Gujarati.codePoints.letter_LA;
Gujarati.fromPadma[Padma.consnt_LLA]  = Gujarati.codePoints.letter_LLA;
Gujarati.fromPadma[Padma.consnt_VA]   = Gujarati.codePoints.letter_VA;
Gujarati.fromPadma[Padma.consnt_SHA]  = Gujarati.codePoints.letter_SHA;
Gujarati.fromPadma[Padma.consnt_SSA]  = Gujarati.codePoints.letter_SSA;
Gujarati.fromPadma[Padma.consnt_SA]   = Gujarati.codePoints.letter_SA;
Gujarati.fromPadma[Padma.consnt_HA]   = Gujarati.codePoints.letter_HA;

//Gunimtaalu
Gujarati.fromPadma[Padma.vowelsn_AA]  = Gujarati.codePoints.vowelsn_AA;
Gujarati.fromPadma[Padma.vowelsn_I]   = Gujarati.codePoints.vowelsn_I;
Gujarati.fromPadma[Padma.vowelsn_II]  = Gujarati.codePoints.vowelsn_II;
Gujarati.fromPadma[Padma.vowelsn_U]   = Gujarati.codePoints.vowelsn_U;
Gujarati.fromPadma[Padma.vowelsn_UU]  = Gujarati.codePoints.vowelsn_UU;
Gujarati.fromPadma[Padma.vowelsn_R]   = Gujarati.codePoints.vowelsn_R;
Gujarati.fromPadma[Padma.vowelsn_RR]  = Gujarati.codePoints.vowelsn_RR;
Gujarati.fromPadma[Padma.vowelsn_CDR_E] = Gujarati.codePoints.vowelsn_CDR_E;
Gujarati.fromPadma[Padma.vowelsn_EE]  = Gujarati.codePoints.vowelsn_EE;
Gujarati.fromPadma[Padma.vowelsn_AI]  = Gujarati.codePoints.vowelsn_AI;
Gujarati.fromPadma[Padma.vowelsn_CDR_O] = Gujarati.codePoints.vowelsn_CDR_O;
Gujarati.fromPadma[Padma.vowelsn_OO]  = Gujarati.codePoints.vowelsn_OO;
Gujarati.fromPadma[Padma.vowelsn_AU]  = Gujarati.codePoints.vowelsn_AU;

//The following are not directly present in Gujarati - equivalent transliteration
Gujarati.fromPadma[Padma.vowel_SHT_A]  = Gujarati.codePoints.letter_A;
Gujarati.fromPadma[Padma.vowel_E]      = Gujarati.codePoints.letter_EE;
Gujarati.fromPadma[Padma.vowel_O]      = Gujarati.codePoints.letter_OO;
Gujarati.fromPadma[Padma.consnt_QA]    = Gujarati.codePoints.letter_KA;
Gujarati.fromPadma[Padma.consnt_KHHA]  = Gujarati.codePoints.letter_KHA;
Gujarati.fromPadma[Padma.consnt_GHHA]  = Gujarati.codePoints.letter_GHA;
Gujarati.fromPadma[Padma.consnt_ZA]    = Gujarati.codePoints.letter_JA;
Gujarati.fromPadma[Padma.consnt_DDDHA] = Gujarati.codePoints.letter_DDA;
Gujarati.fromPadma[Padma.consnt_RHA]   = Gujarati.codePoints.letter_DDHA;
Gujarati.fromPadma[Padma.consnt_NNNA]  = Gujarati.codePoints.letter_NNA;
Gujarati.fromPadma[Padma.consnt_FA]    = Gujarati.codePoints.letter_PHA;
Gujarati.fromPadma[Padma.consnt_YYA]   = Gujarati.codePoints.letter_YA;
Gujarati.fromPadma[Padma.consnt_ZHA]   = Gujarati.codePoints.letter_LLA;
Gujarati.fromPadma[Padma.vowelsn_E]    = Gujarati.codePoints.vowelsn_EE;
Gujarati.fromPadma[Padma.vowelsn_O]    = Gujarati.codePoints.vowelsn_OO;
