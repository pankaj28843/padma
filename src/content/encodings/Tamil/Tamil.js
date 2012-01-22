// $Id: Tamil.js,v 1.5 2012/01/22 04:12:52 vnagarjuna Exp $ -->

//Copyright 2005-2006 Nagarjuna Venna <vnagarjuna@yahoo.com>

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

function Tamil()
{
}

//Generate map entries for vattulu and half-forms
Tamil.initialize = function () {
    for(var i = Padma.vattu_START; i <= Padma.vattu_END; i++)
        Tamil.fromPadma[String.fromCharCode(i)] = Tamil.codePoints.misc_VIRAMA + Tamil.fromPadma[Padma.fast_baseFormFromVattu(i)];
    for(i = Padma.half_START; i <= Padma.half_END; i++)
        Tamil.fromPadma[String.fromCharCode(i)] = Tamil.fromPadma[Padma.fast_baseFormFromHalfForm(i)] + Tamil.codePoints.misc_VIRAMA;
}

//Unicode Codepoints
Tamil.codePoints = new Object();

//Vowel Modifiers
Tamil.codePoints.anusvara    = "\u0B82";  //not used in Tamil apparently
Tamil.codePoints.visarga     = "\u0B83";  //aytham

//Independent Vowels
Tamil.codePoints.letter_A    = "\u0B85";
Tamil.codePoints.letter_AA   = "\u0B86";
Tamil.codePoints.letter_I    = "\u0B87";
Tamil.codePoints.letter_II   = "\u0B88";
Tamil.codePoints.letter_U    = "\u0B89";
Tamil.codePoints.letter_UU   = "\u0B8A";
Tamil.codePoints.letter_E    = "\u0B8E";
Tamil.codePoints.letter_EE   = "\u0B8F";
Tamil.codePoints.letter_AI   = "\u0B90";
Tamil.codePoints.letter_O    = "\u0B92";
Tamil.codePoints.letter_OO   = "\u0B93";
Tamil.codePoints.letter_AU   = "\u0B94";  //also 0B92 0BD7

//Consonants
Tamil.codePoints.letter_KA   = "\u0B95";
Tamil.codePoints.letter_NGA  = "\u0B99";
Tamil.codePoints.letter_CA   = "\u0B9A";
Tamil.codePoints.letter_JA   = "\u0B9C";
Tamil.codePoints.letter_NYA  = "\u0B9E";
Tamil.codePoints.letter_TTA  = "\u0B9F";
Tamil.codePoints.letter_NNA  = "\u0BA3";
Tamil.codePoints.letter_TA   = "\u0BA4";
Tamil.codePoints.letter_NA   = "\u0BA8";
Tamil.codePoints.letter_NNNA = "\u0BA9";
Tamil.codePoints.letter_PA   = "\u0BAA";
Tamil.codePoints.letter_MA   = "\u0BAE";
Tamil.codePoints.letter_YA   = "\u0BAF";
Tamil.codePoints.letter_RA   = "\u0BB0";
Tamil.codePoints.letter_RRA  = "\u0BB1";
Tamil.codePoints.letter_LA   = "\u0BB2";
Tamil.codePoints.letter_LLA  = "\u0BB3";
Tamil.codePoints.letter_ZHA  = "\u0BB4";
Tamil.codePoints.letter_VA   = "\u0BB5";
Tamil.codePoints.letter_SHA  = "\u0BB6";
Tamil.codePoints.letter_SSA  = "\u0BB7";
Tamil.codePoints.letter_SA   = "\u0BB8";
Tamil.codePoints.letter_HA   = "\u0BB9";

//Dependent Vowel Signs
Tamil.codePoints.vowelsn_AA  = "\u0BBE";
Tamil.codePoints.vowelsn_I   = "\u0BBF";
Tamil.codePoints.vowelsn_II  = "\u0BC0";
Tamil.codePoints.vowelsn_U   = "\u0BC1";
Tamil.codePoints.vowelsn_UU  = "\u0BC2";
Tamil.codePoints.vowelsn_E   = "\u0BC6"; //left of consonat
Tamil.codePoints.vowelsn_EE  = "\u0BC7"; //left of consonant
Tamil.codePoints.vowelsn_AI  = "\u0BC8"; //left of consonat
Tamil.codePoints.vowelsn_O   = "\u0BCA"; //Also 0BC6 + 0BBE
Tamil.codePoints.vowelsn_OO  = "\u0BCB"; //Also 0BC7 + 0BBE
Tamil.codePoints.vowelsn_AU  = "\u0BCC"; //Also 0BC6 + 0BD7

//Miscellaneous Signs
Tamil.codePoints.misc_VIRAMA   = "\u0BCD";  //pulli
Tamil.codePoints.misc_AULEN    = "\u0BD7";

//Digits
Tamil.codePoints.digit_ZERO  = "\u0BE6";
Tamil.codePoints.digit_ONE   = "\u0BE7";
Tamil.codePoints.digit_TWO   = "\u0BE8";
Tamil.codePoints.digit_THREE = "\u0BE9";
Tamil.codePoints.digit_FOUR  = "\u0BEA";
Tamil.codePoints.digit_FIVE  = "\u0BEB";
Tamil.codePoints.digit_SIX   = "\u0BEC";
Tamil.codePoints.digit_SEVEN = "\u0BED";
Tamil.codePoints.digit_EIGHT = "\u0BEE";
Tamil.codePoints.digit_NINE  = "\u0BEF";

Tamil.codePoints.digit_TEN      = "\u0BF0";
Tamil.codePoints.digit_HUNDRED  = "\u0BF1";
Tamil.codePoints.digit_THOUSAND = "\u0BF2";
Tamil.codePoints.sign_DAY       = "\u0BF3";
Tamil.codePoints.sign_MONTH     = "\u0BF4";
Tamil.codePoints.sign_YEAR      = "\u0BF5";
Tamil.codePoints.sign_DEBIT     = "\u0BF6";
Tamil.codePoints.sign_CREDIT    = "\u0BF7";
Tamil.codePoints.sign_ASABOVE   = "\u0BF8";
Tamil.codePoints.sign_RUPEE     = "\u0BF9";
Tamil.codePoints.sign_NUMBER    = "\u0BFA";

Tamil.fromPadma = new Object();

Tamil.fromPadma[Padma.anusvara]    = Tamil.codePoints.anusvara;
Tamil.fromPadma[Padma.visarga]     = Tamil.codePoints.visarga;
Tamil.fromPadma[Padma.pulli]       = Tamil.codePoints.misc_VIRAMA;
Tamil.fromPadma[Padma.chillu]      = Tamil.codePoints.misc_VIRAMA + Unicode_Shared.ZWJ;
Tamil.fromPadma[Padma.chillu_C2]   = Unicode_Shared.ZWJ;
Tamil.fromPadma[Padma.syllbreak]   = Tamil.codePoints.misc_VIRAMA + Unicode_Shared.ZWNJ;
Tamil.fromPadma[Padma.avagraha]    = Unicode_Shared.AVAGRAHA;
Tamil.fromPadma[Padma.udAtta]      = Unicode_Shared.UDATTA;
Tamil.fromPadma[Padma.anudAtta]    = Unicode_Shared.ANUDATTA;
Tamil.fromPadma[Padma.svarita]     = Unicode_Shared.SVARITA;
Tamil.fromPadma[Padma.danda]       = Unicode_Shared.DANDA;
Tamil.fromPadma[Padma.ddanda]      = Unicode_Shared.DDANDA;
Tamil.fromPadma[Padma.abbrev]      = Unicode_Shared.abbrev;
Tamil.fromPadma[Padma.om]          = Unicode_Shared.OM;

//digits
Tamil.fromPadma[Padma.digit_ZERO]  = Tamil.codePoints.digit_ZERO;
Tamil.fromPadma[Padma.digit_ONE]   = Tamil.codePoints.digit_ONE;
Tamil.fromPadma[Padma.digit_TWO]   = Tamil.codePoints.digit_TWO;
Tamil.fromPadma[Padma.digit_THREE] = Tamil.codePoints.digit_THREE;
Tamil.fromPadma[Padma.digit_FOUR]  = Tamil.codePoints.digit_FOUR;
Tamil.fromPadma[Padma.digit_FIVE]  = Tamil.codePoints.digit_FIVE;
Tamil.fromPadma[Padma.digit_SIX]   = Tamil.codePoints.digit_SIX;
Tamil.fromPadma[Padma.digit_SEVEN] = Tamil.codePoints.digit_SEVEN;
Tamil.fromPadma[Padma.digit_EIGHT] = Tamil.codePoints.digit_EIGHT;
Tamil.fromPadma[Padma.digit_NINE]  = Tamil.codePoints.digit_NINE;
Tamil.fromPadma[Padma.digit_TEN]   = Tamil.codePoints.digit_TEN;
Tamil.fromPadma[Padma.digit_HUNDRED] = Tamil.codePoints.digit_HUNDRED;
Tamil.fromPadma[Padma.digit_THOUSAND] = Tamil.codePoints.digit_THOUSAND;

//Vowels
Tamil.fromPadma[Padma.vowel_A]     = Tamil.codePoints.letter_A;
Tamil.fromPadma[Padma.vowel_AA]    = Tamil.codePoints.letter_AA;
Tamil.fromPadma[Padma.vowel_I]     = Tamil.codePoints.letter_I;
Tamil.fromPadma[Padma.vowel_II]    = Tamil.codePoints.letter_II;
Tamil.fromPadma[Padma.vowel_U]     = Tamil.codePoints.letter_U;
Tamil.fromPadma[Padma.vowel_UU]    = Tamil.codePoints.letter_UU;
Tamil.fromPadma[Padma.vowel_E]     = Tamil.codePoints.letter_E;
Tamil.fromPadma[Padma.vowel_EE]    = Tamil.codePoints.letter_EE;
Tamil.fromPadma[Padma.vowel_AI]    = Tamil.codePoints.letter_AI;
Tamil.fromPadma[Padma.vowel_O]     = Tamil.codePoints.letter_O;
Tamil.fromPadma[Padma.vowel_OO]    = Tamil.codePoints.letter_OO;
Tamil.fromPadma[Padma.vowel_AU]    = Tamil.codePoints.letter_AU;

//Consonants
Tamil.fromPadma[Padma.consnt_KA]   = Tamil.codePoints.letter_KA;
Tamil.fromPadma[Padma.consnt_NGA]  = Tamil.codePoints.letter_NGA;
Tamil.fromPadma[Padma.consnt_CA]   = Tamil.codePoints.letter_CA;
Tamil.fromPadma[Padma.consnt_JA]   = Tamil.codePoints.letter_JA;
Tamil.fromPadma[Padma.consnt_NYA]  = Tamil.codePoints.letter_NYA;
Tamil.fromPadma[Padma.consnt_TTA]  = Tamil.codePoints.letter_TTA;
Tamil.fromPadma[Padma.consnt_NNA]  = Tamil.codePoints.letter_NNA;
Tamil.fromPadma[Padma.consnt_TA]   = Tamil.codePoints.letter_TA;
Tamil.fromPadma[Padma.consnt_NA]   = Tamil.codePoints.letter_NA;
Tamil.fromPadma[Padma.consnt_NNNA] = Tamil.codePoints.letter_NNNA;
Tamil.fromPadma[Padma.consnt_PA]   = Tamil.codePoints.letter_PA;
Tamil.fromPadma[Padma.consnt_MA]   = Tamil.codePoints.letter_MA;
Tamil.fromPadma[Padma.consnt_YA]   = Tamil.codePoints.letter_YA;
Tamil.fromPadma[Padma.consnt_RA]   = Tamil.codePoints.letter_RA;
Tamil.fromPadma[Padma.consnt_LA]   = Tamil.codePoints.letter_LA;
Tamil.fromPadma[Padma.consnt_VA]   = Tamil.codePoints.letter_VA;
Tamil.fromPadma[Padma.consnt_SHA]  = Tamil.codePoints.letter_SHA;
Tamil.fromPadma[Padma.consnt_SSA]  = Tamil.codePoints.letter_SSA;
Tamil.fromPadma[Padma.consnt_SA]   = Tamil.codePoints.letter_SA;
Tamil.fromPadma[Padma.consnt_HA]   = Tamil.codePoints.letter_HA;
Tamil.fromPadma[Padma.consnt_LLA]  = Tamil.codePoints.letter_LLA;
Tamil.fromPadma[Padma.consnt_ZHA]  = Tamil.codePoints.letter_ZHA;
Tamil.fromPadma[Padma.consnt_RRA]  = Tamil.codePoints.letter_RRA;

//Gunimtaalu
Tamil.fromPadma[Padma.vowelsn_AA]  = Tamil.codePoints.vowelsn_AA;
Tamil.fromPadma[Padma.vowelsn_I]   = Tamil.codePoints.vowelsn_I;
Tamil.fromPadma[Padma.vowelsn_II]  = Tamil.codePoints.vowelsn_II;
Tamil.fromPadma[Padma.vowelsn_U]   = Tamil.codePoints.vowelsn_U;
Tamil.fromPadma[Padma.vowelsn_UU]  = Tamil.codePoints.vowelsn_UU;
Tamil.fromPadma[Padma.vowelsn_E]   = Tamil.codePoints.vowelsn_E;
Tamil.fromPadma[Padma.vowelsn_EE]  = Tamil.codePoints.vowelsn_EE;
Tamil.fromPadma[Padma.vowelsn_AI]  = Tamil.codePoints.vowelsn_AI;
Tamil.fromPadma[Padma.vowelsn_O]   = Tamil.codePoints.vowelsn_O;
Tamil.fromPadma[Padma.vowelsn_OO]  = Tamil.codePoints.vowelsn_OO;
Tamil.fromPadma[Padma.vowelsn_AU]  = Tamil.codePoints.vowelsn_AU;
Tamil.fromPadma[Padma.vowelsn_AULEN]  = Tamil.codePoints.misc_AULEN;

//Misc
Tamil.fromPadma[Padma.sign_DAY]     = Tamil.codePoints.sign_DAY;
Tamil.fromPadma[Padma.sign_MONTH]   = Tamil.codePoints.sign_MONTH;
Tamil.fromPadma[Padma.sign_YEAR]    = Tamil.codePoints.sign_YEAR;
Tamil.fromPadma[Padma.sign_DEBIT]   = Tamil.codePoints.sign_DEBIT;
Tamil.fromPadma[Padma.sign_CREDIT]  = Tamil.codePoints.sign_CREDIT;
Tamil.fromPadma[Padma.sign_ASABOVE] = Tamil.codePoints.sign_ASABOVE;
Tamil.fromPadma[Padma.sign_RUPEE]   = Tamil.codePoints.sign_RUPEE;
Tamil.fromPadma[Padma.sign_NUMBER]  = Tamil.codePoints.sign_NUMBER;

//The following are not directly present in Tamil - equivalent transliteration
Tamil.fromPadma[Padma.vowel_SHT_A]   = Tamil.codePoints.letter_A;
Tamil.fromPadma[Padma.vowel_CDR_E]   = Tamil.codePoints.letter_E;
Tamil.fromPadma[Padma.vowel_CDR_O]   = Tamil.codePoints.letter_O;
Tamil.fromPadma[Padma.consnt_QA]     = Tamil.codePoints.letter_KA;
Tamil.fromPadma[Padma.consnt_KHA]    = Tamil.codePoints.letter_KA;
Tamil.fromPadma[Padma.consnt_KHHA]   = Tamil.codePoints.letter_KA;
Tamil.fromPadma[Padma.consnt_GA]     = Tamil.codePoints.letter_KA;
Tamil.fromPadma[Padma.consnt_GHA]    = Tamil.codePoints.letter_KA;
Tamil.fromPadma[Padma.consnt_GHHA]   = Tamil.codePoints.letter_KA;
Tamil.fromPadma[Padma.consnt_CHA]    = Tamil.codePoints.letter_CA;
Tamil.fromPadma[Padma.consnt_ZA]     = Tamil.codePoints.letter_JA;
Tamil.fromPadma[Padma.consnt_JHA]    = Tamil.codePoints.letter_JA;
Tamil.fromPadma[Padma.consnt_TTHA]   = Tamil.codePoints.letter_TTA;
Tamil.fromPadma[Padma.consnt_DDA]    = Tamil.codePoints.letter_TTA;
Tamil.fromPadma[Padma.consnt_DDHA]   = Tamil.codePoints.letter_TTA;
Tamil.fromPadma[Padma.consnt_DDDHA]  = Tamil.codePoints.letter_TTA;
Tamil.fromPadma[Padma.consnt_RHA]    = Tamil.codePoints.letter_TTA;
Tamil.fromPadma[Padma.consnt_THA]    = Tamil.codePoints.letter_TA;
Tamil.fromPadma[Padma.consnt_DA]     = Tamil.codePoints.letter_TA;
Tamil.fromPadma[Padma.consnt_DHA]    = Tamil.codePoints.letter_TA;
Tamil.fromPadma[Padma.consnt_FA]     = Tamil.codePoints.letter_PA;
Tamil.fromPadma[Padma.consnt_PHA]    = Tamil.codePoints.letter_PA;
Tamil.fromPadma[Padma.consnt_BA]     = Tamil.codePoints.letter_PA;
Tamil.fromPadma[Padma.consnt_BHA]    = Tamil.codePoints.letter_PA;
Tamil.fromPadma[Padma.consnt_YYA]    = Tamil.codePoints.letter_YA;
Tamil.fromPadma[Padma.vowelsn_CDR_E] = Tamil.codePoints.vowelsn_E;
Tamil.fromPadma[Padma.vowelsn_CDR_O] = Tamil.codePoints.vowelsn_O;
