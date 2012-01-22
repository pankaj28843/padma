// $Id: Kannada.js,v 1.3 2012/01/22 04:12:50 vnagarjuna Exp $ -->

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

function Kannada()
{
}

//Generate map entries for vattulu and half-forms
Kannada.initialize = function () {
    for(var i = Padma.vattu_START; i <= Padma.vattu_END; i++)
        Kannada.fromPadma[String.fromCharCode(i)] = Kannada.codePoints.misc_VIRAMA + Kannada.fromPadma[Padma.fast_baseFormFromVattu(i)];
    for(i = Padma.half_START; i <= Padma.half_END; i++)
        Kannada.fromPadma[String.fromCharCode(i)] = Kannada.fromPadma[Padma.fast_baseFormFromHalfForm(i)] + Kannada.codePoints.misc_VIRAMA;
}

//Unicode Codepoints
Kannada.codePoints = new Object();

//Vowel Modifiers
Kannada.codePoints.anusvara    = "\u0C82";  //sunna
Kannada.codePoints.visarga     = "\u0C83";

//Independent Vowels
Kannada.codePoints.letter_A    = "\u0C85";
Kannada.codePoints.letter_AA   = "\u0C86";
Kannada.codePoints.letter_I    = "\u0C87";
Kannada.codePoints.letter_II   = "\u0C88";
Kannada.codePoints.letter_U    = "\u0C89";
Kannada.codePoints.letter_UU   = "\u0C8A";
Kannada.codePoints.letter_R    = "\u0C8B";   //vocalic R
Kannada.codePoints.letter_RR   = "\u0CE0";   //vocalic R
Kannada.codePoints.letter_L    = "\u0C8C";   //vocalic L
Kannada.codePoints.letter_LL   = "\u0CE1";   //vocalic L
Kannada.codePoints.letter_E    = "\u0C8E";
Kannada.codePoints.letter_EE   = "\u0C8F";
Kannada.codePoints.letter_AI   = "\u0C90";
Kannada.codePoints.letter_O    = "\u0C92";
Kannada.codePoints.letter_OO   = "\u0C93";
Kannada.codePoints.letter_AU   = "\u0C94";

//Consonants
Kannada.codePoints.letter_KA   = "\u0C95";
Kannada.codePoints.letter_KHA  = "\u0C96";
Kannada.codePoints.letter_GA   = "\u0C97";
Kannada.codePoints.letter_GHA  = "\u0C98";
Kannada.codePoints.letter_NGA  = "\u0C99";
Kannada.codePoints.letter_CA   = "\u0C9A";
Kannada.codePoints.letter_CHA  = "\u0C9B";
Kannada.codePoints.letter_JA   = "\u0C9C";
Kannada.codePoints.letter_JHA  = "\u0C9D";
Kannada.codePoints.letter_NYA  = "\u0C9E";
Kannada.codePoints.letter_TTA  = "\u0C9F";
Kannada.codePoints.letter_TTHA = "\u0CA0";
Kannada.codePoints.letter_DDA  = "\u0CA1";
Kannada.codePoints.letter_DDHA = "\u0CA2";
Kannada.codePoints.letter_NNA  = "\u0CA3";
Kannada.codePoints.letter_TA   = "\u0CA4";
Kannada.codePoints.letter_THA  = "\u0CA5";
Kannada.codePoints.letter_DA   = "\u0CA6";
Kannada.codePoints.letter_DHA  = "\u0CA7";
Kannada.codePoints.letter_NA   = "\u0CA8";
Kannada.codePoints.letter_PA   = "\u0CAA";
Kannada.codePoints.letter_PHA  = "\u0CAB";
Kannada.codePoints.letter_BA   = "\u0CAC";
Kannada.codePoints.letter_BHA  = "\u0CAD";
Kannada.codePoints.letter_MA   = "\u0CAE";
Kannada.codePoints.letter_YA   = "\u0CAF";
Kannada.codePoints.letter_RA   = "\u0CB0";
Kannada.codePoints.letter_RRA  = "\u0CB1";
Kannada.codePoints.letter_LA   = "\u0CB2";
Kannada.codePoints.letter_LLA  = "\u0CB3";
Kannada.codePoints.letter_VA   = "\u0CB5";
Kannada.codePoints.letter_SHA  = "\u0CB6";
Kannada.codePoints.letter_SSA  = "\u0CB7";
Kannada.codePoints.letter_SA   = "\u0CB8";
Kannada.codePoints.letter_HA   = "\u0CB9";

//Dependent Vowel Signs
Kannada.codePoints.vowelsn_AA  = "\u0CBE";
Kannada.codePoints.vowelsn_I   = "\u0CBF";
Kannada.codePoints.vowelsn_II  = "\u0CC0";
Kannada.codePoints.vowelsn_U   = "\u0CC1";
Kannada.codePoints.vowelsn_UU  = "\u0CC2";
Kannada.codePoints.vowelsn_R   = "\u0CC3";
Kannada.codePoints.vowelsn_RR  = "\u0CC4";
Kannada.codePoints.vowelsn_E   = "\u0CC6";
Kannada.codePoints.vowelsn_EE  = "\u0CC7";   //this is the same as 0CC6 followed by 0CD5
Kannada.codePoints.vowelsn_AI  = "\u0CC8";   //this is the same as 0CC6 followed by 0CD6
Kannada.codePoints.vowelsn_O   = "\u0CCA";   //this is the same as 0CC6 followed by 0CC2
Kannada.codePoints.vowelsn_OO  = "\u0CCB";   //this is the same as 0CCA followed by 0CD5
Kannada.codePoints.vowelsn_AU  = "\u0CCC";

//Miscellaneous Signs
Kannada.codePoints.misc_NUKTA    = "\u0CBC";   //nukta
Kannada.codePoints.misc_AVAGRAHA = "\u0CBD";
Kannada.codePoints.misc_VIRAMA   = "\u0CCD";   //halant
Kannada.codePoints.misc_LENGTH   = "\u0CD5";
Kannada.codePoints.misc_AILEN    = "\u0CD6";

//Digits
Kannada.codePoints.digit_ZERO  = "\u0CE6";
Kannada.codePoints.digit_ONE   = "\u0CE7";
Kannada.codePoints.digit_TWO   = "\u0CE8";
Kannada.codePoints.digit_THREE = "\u0CE9";
Kannada.codePoints.digit_FOUR  = "\u0CEA";
Kannada.codePoints.digit_FIVE  = "\u0CEB";
Kannada.codePoints.digit_SIX   = "\u0CEC";
Kannada.codePoints.digit_SEVEN = "\u0CED";
Kannada.codePoints.digit_EIGHT = "\u0CEE";
Kannada.codePoints.digit_NINE  = "\u0CEF";

Kannada.fromPadma = new Object();

Kannada.fromPadma[Padma.anusvara]    = Kannada.codePoints.anusvara;
Kannada.fromPadma[Padma.visarga]     = Kannada.codePoints.visarga;
Kannada.fromPadma[Padma.pollu]       = Kannada.codePoints.misc_VIRAMA;
Kannada.fromPadma[Padma.chillu]      = Kannada.codePoints.misc_VIRAMA + Unicode_Shared.ZWJ;
Kannada.fromPadma[Padma.chillu_C2]   = Unicode_Shared.ZWJ;
Kannada.fromPadma[Padma.syllbreak]   = Kannada.codePoints.misc_VIRAMA + Unicode_Shared.ZWNJ;
Kannada.fromPadma[Padma.candrabindu] = Kannada.codePoints.candrabindu;
Kannada.fromPadma[Padma.avagraha]    = Kannada.codePoints.misc_AVAGRAHA;
Kannada.fromPadma[Padma.udAtta]      = Unicode_Shared.UDATTA;
Kannada.fromPadma[Padma.anudAtta]    = Unicode_Shared.ANUDATTA;
Kannada.fromPadma[Padma.svarita]     = Unicode_Shared.SVARITA;
Kannada.fromPadma[Padma.danda]       = Unicode_Shared.DANDA;
Kannada.fromPadma[Padma.ddanda]      = Unicode_Shared.DDANDA;
Kannada.fromPadma[Padma.abbrev]      = Unicode_Shared.abbrev;
Kannada.fromPadma[Padma.om]          = Unicode_Shared.OM;
Kannada.fromPadma[Padma.nukta]       = Kannada.codePoints.misc_NUKTA;

//digits
Kannada.fromPadma[Padma.digit_ZERO]  = Kannada.codePoints.digit_ZERO;
Kannada.fromPadma[Padma.digit_ONE]   = Kannada.codePoints.digit_ONE;
Kannada.fromPadma[Padma.digit_TWO]   = Kannada.codePoints.digit_TWO;
Kannada.fromPadma[Padma.digit_THREE] = Kannada.codePoints.digit_THREE;
Kannada.fromPadma[Padma.digit_FOUR]  = Kannada.codePoints.digit_FOUR;
Kannada.fromPadma[Padma.digit_FIVE]  = Kannada.codePoints.digit_FIVE;
Kannada.fromPadma[Padma.digit_SIX]   = Kannada.codePoints.digit_SIX;
Kannada.fromPadma[Padma.digit_SEVEN] = Kannada.codePoints.digit_SEVEN;
Kannada.fromPadma[Padma.digit_EIGHT] = Kannada.codePoints.digit_EIGHT;
Kannada.fromPadma[Padma.digit_NINE]  = Kannada.codePoints.digit_NINE;

//Vowels
Kannada.fromPadma[Padma.vowel_A]     = Kannada.codePoints.letter_A;
Kannada.fromPadma[Padma.vowel_AA]    = Kannada.codePoints.letter_AA;
Kannada.fromPadma[Padma.vowel_I]     = Kannada.codePoints.letter_I;
Kannada.fromPadma[Padma.vowel_II]    = Kannada.codePoints.letter_II;
Kannada.fromPadma[Padma.vowel_U]     = Kannada.codePoints.letter_U;
Kannada.fromPadma[Padma.vowel_UU]    = Kannada.codePoints.letter_UU;
Kannada.fromPadma[Padma.vowel_R]     = Kannada.codePoints.letter_R;
Kannada.fromPadma[Padma.vowel_RR]    = Kannada.codePoints.letter_RR;
Kannada.fromPadma[Padma.vowel_L]     = Kannada.codePoints.letter_L;
Kannada.fromPadma[Padma.vowel_LL]    = Kannada.codePoints.letter_LL;
Kannada.fromPadma[Padma.vowel_E]     = Kannada.codePoints.letter_E;
Kannada.fromPadma[Padma.vowel_EE]    = Kannada.codePoints.letter_EE;
Kannada.fromPadma[Padma.vowel_AI]    = Kannada.codePoints.letter_AI;
Kannada.fromPadma[Padma.vowel_O]     = Kannada.codePoints.letter_O;
Kannada.fromPadma[Padma.vowel_OO]    = Kannada.codePoints.letter_OO;
Kannada.fromPadma[Padma.vowel_AU]    = Kannada.codePoints.letter_AU;

//Consonants
Kannada.fromPadma[Padma.consnt_KA]   = Kannada.codePoints.letter_KA;
Kannada.fromPadma[Padma.consnt_KHA]  = Kannada.codePoints.letter_KHA;
Kannada.fromPadma[Padma.consnt_GA]   = Kannada.codePoints.letter_GA;
Kannada.fromPadma[Padma.consnt_GHA]  = Kannada.codePoints.letter_GHA;
Kannada.fromPadma[Padma.consnt_NGA]  = Kannada.codePoints.letter_NGA;
Kannada.fromPadma[Padma.consnt_CA]   = Kannada.codePoints.letter_CA;
Kannada.fromPadma[Padma.consnt_CHA]  = Kannada.codePoints.letter_CHA;
Kannada.fromPadma[Padma.consnt_JA]   = Kannada.codePoints.letter_JA;
Kannada.fromPadma[Padma.consnt_JHA]  = Kannada.codePoints.letter_JHA;
Kannada.fromPadma[Padma.consnt_NYA]  = Kannada.codePoints.letter_NYA;
Kannada.fromPadma[Padma.consnt_TTA]  = Kannada.codePoints.letter_TTA;
Kannada.fromPadma[Padma.consnt_TTHA] = Kannada.codePoints.letter_TTHA;
Kannada.fromPadma[Padma.consnt_DDA]  = Kannada.codePoints.letter_DDA;
Kannada.fromPadma[Padma.consnt_DDHA] = Kannada.codePoints.letter_DDHA;
Kannada.fromPadma[Padma.consnt_NNA]  = Kannada.codePoints.letter_NNA;
Kannada.fromPadma[Padma.consnt_TA]   = Kannada.codePoints.letter_TA;
Kannada.fromPadma[Padma.consnt_THA]  = Kannada.codePoints.letter_THA;
Kannada.fromPadma[Padma.consnt_DA]   = Kannada.codePoints.letter_DA;
Kannada.fromPadma[Padma.consnt_DHA]  = Kannada.codePoints.letter_DHA;
Kannada.fromPadma[Padma.consnt_NA]   = Kannada.codePoints.letter_NA;
Kannada.fromPadma[Padma.consnt_PA]   = Kannada.codePoints.letter_PA;
Kannada.fromPadma[Padma.consnt_PHA]  = Kannada.codePoints.letter_PHA;
Kannada.fromPadma[Padma.consnt_BA]   = Kannada.codePoints.letter_BA;
Kannada.fromPadma[Padma.consnt_BHA]  = Kannada.codePoints.letter_BHA;
Kannada.fromPadma[Padma.consnt_MA]   = Kannada.codePoints.letter_MA;
Kannada.fromPadma[Padma.consnt_YA]   = Kannada.codePoints.letter_YA;
Kannada.fromPadma[Padma.consnt_RA]   = Kannada.codePoints.letter_RA;
Kannada.fromPadma[Padma.consnt_LA]   = Kannada.codePoints.letter_LA;
Kannada.fromPadma[Padma.consnt_VA]   = Kannada.codePoints.letter_VA;
Kannada.fromPadma[Padma.consnt_SHA]  = Kannada.codePoints.letter_SHA;
Kannada.fromPadma[Padma.consnt_SSA]  = Kannada.codePoints.letter_SSA;
Kannada.fromPadma[Padma.consnt_SA]   = Kannada.codePoints.letter_SA;
Kannada.fromPadma[Padma.consnt_HA]   = Kannada.codePoints.letter_HA;
Kannada.fromPadma[Padma.consnt_LLA]  = Kannada.codePoints.letter_LLA;
Kannada.fromPadma[Padma.consnt_RRA]  = Kannada.codePoints.letter_RRA;

//Gunimtaalu
Kannada.fromPadma[Padma.vowelsn_AA]  = Kannada.codePoints.vowelsn_AA;
Kannada.fromPadma[Padma.vowelsn_I]   = Kannada.codePoints.vowelsn_I;
Kannada.fromPadma[Padma.vowelsn_II]  = Kannada.codePoints.vowelsn_II;
Kannada.fromPadma[Padma.vowelsn_U]   = Kannada.codePoints.vowelsn_U;
Kannada.fromPadma[Padma.vowelsn_UU]  = Kannada.codePoints.vowelsn_UU;
Kannada.fromPadma[Padma.vowelsn_R]   = Kannada.codePoints.vowelsn_R;
Kannada.fromPadma[Padma.vowelsn_RR]  = Kannada.codePoints.vowelsn_RR;
Kannada.fromPadma[Padma.vowelsn_E]   = Kannada.codePoints.vowelsn_E;
Kannada.fromPadma[Padma.vowelsn_EE]  = Kannada.codePoints.vowelsn_EE;
Kannada.fromPadma[Padma.vowelsn_AI]  = Kannada.codePoints.vowelsn_AI;
Kannada.fromPadma[Padma.vowelsn_O]   = Kannada.codePoints.vowelsn_O;
Kannada.fromPadma[Padma.vowelsn_OO]  = Kannada.codePoints.vowelsn_OO;
Kannada.fromPadma[Padma.vowelsn_AU]  = Kannada.codePoints.vowelsn_AU;
Kannada.fromPadma[Padma.vowelsn_AILEN]  = Kannada.codePoints.misc_AILEN;

//The following are not directly present in Kannada - equivalent transliteration
Kannada.fromPadma[Padma.vowel_SHT_A]   = Kannada.codePoints.letter_A;
Kannada.fromPadma[Padma.vowel_CDR_E]   = Kannada.codePoints.letter_E;
Kannada.fromPadma[Padma.vowel_CDR_O]   = Kannada.codePoints.letter_O;
Kannada.fromPadma[Padma.consnt_QA]     = Kannada.codePoints.letter_KA;
Kannada.fromPadma[Padma.consnt_KHHA]   = Kannada.codePoints.letter_KHA;
Kannada.fromPadma[Padma.consnt_GHHA]   = Kannada.codePoints.letter_GHA;
Kannada.fromPadma[Padma.consnt_ZA]     = Kannada.codePoints.letter_JA;
Kannada.fromPadma[Padma.consnt_DDDHA]  = Kannada.codePoints.letter_DDA;
Kannada.fromPadma[Padma.consnt_RHA]    = Kannada.codePoints.letter_DDHA;
Kannada.fromPadma[Padma.consnt_NNNA]   = Kannada.codePoints.letter_NNA;
Kannada.fromPadma[Padma.consnt_FA]     = Kannada.codePoints.letter_PHA;
Kannada.fromPadma[Padma.consnt_YYA]    = Kannada.codePoints.letter_YA;
Kannada.fromPadma[Padma.consnt_ZHA]    = Kannada.codePoints.letter_LLA;
Kannada.fromPadma[Padma.vowelsn_CDR_E] = Kannada.codePoints.vowelsn_E;
Kannada.fromPadma[Padma.vowelsn_CDR_O] = Kannada.codePoints.vowelsn_O;
