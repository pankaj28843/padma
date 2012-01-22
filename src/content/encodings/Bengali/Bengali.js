// $Id: Bengali.js,v 1.5 2012/01/22 04:12:49 vnagarjuna Exp $ -->

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

function Bengali()
{
}

//Generate map entries for vattulu and half-forms
Bengali.initialize = function () {
    for(var i = Padma.vattu_START; i <= Padma.vattu_END; i++)
        Bengali.fromPadma[String.fromCharCode(i)] = Bengali.codePoints.misc_VIRAMA + Bengali.fromPadma[Padma.fast_baseFormFromVattu(i)];
    for(i = Padma.half_START; i <= Padma.half_END; i++)
        Bengali.fromPadma[String.fromCharCode(i)] = Bengali.fromPadma[Padma.fast_baseFormFromHalfForm(i)] + Bengali.codePoints.misc_VIRAMA;
}

//Unicode Codepoints
Bengali.codePoints = new Object();

Bengali.codePoints.candrabindu  = "\u0981";
//Vowel Modifiers
Bengali.codePoints.anusvara     = "\u0982";  //sunna
Bengali.codePoints.visarga      = "\u0983";

//Independent Vowels
Bengali.codePoints.letter_A     = "\u0985";
Bengali.codePoints.letter_AA    = "\u0986";
Bengali.codePoints.letter_I     = "\u0987";
Bengali.codePoints.letter_II    = "\u0988";
Bengali.codePoints.letter_U     = "\u0989";
Bengali.codePoints.letter_UU    = "\u098A";
Bengali.codePoints.letter_R     = "\u098B";   //vocalic R
Bengali.codePoints.letter_RR    = "\u09E0";   //vocalic R
Bengali.codePoints.letter_L     = "\u098C";   //vocalic L
Bengali.codePoints.letter_LL    = "\u09E1";   //vocalic L
Bengali.codePoints.letter_EE    = "\u098F";
Bengali.codePoints.letter_AI    = "\u0990";
Bengali.codePoints.letter_OO    = "\u0993";
Bengali.codePoints.letter_AU    = "\u0994";

//Consonants
Bengali.codePoints.letter_KA   = "\u0995";
Bengali.codePoints.letter_KHA  = "\u0996";
Bengali.codePoints.letter_GA   = "\u0997";
Bengali.codePoints.letter_GHA  = "\u0998";
Bengali.codePoints.letter_NGA  = "\u0999";
Bengali.codePoints.letter_CA   = "\u099A";
Bengali.codePoints.letter_CHA  = "\u099B";
Bengali.codePoints.letter_JA   = "\u099C";
Bengali.codePoints.letter_JHA  = "\u099D";
Bengali.codePoints.letter_NYA  = "\u099E";
Bengali.codePoints.letter_TTA  = "\u099F";
Bengali.codePoints.letter_TTHA = "\u09A0";
Bengali.codePoints.letter_DDA  = "\u09A1";
Bengali.codePoints.letter_DDHA = "\u09A2";
Bengali.codePoints.letter_NNA  = "\u09A3";
Bengali.codePoints.letter_TA   = "\u09A4";
Bengali.codePoints.letter_THA  = "\u09A5";
Bengali.codePoints.letter_DA   = "\u09A6";
Bengali.codePoints.letter_DHA  = "\u09A7";
Bengali.codePoints.letter_NA   = "\u09A8";
Bengali.codePoints.letter_PA   = "\u09AA";
Bengali.codePoints.letter_PHA  = "\u09AB";
Bengali.codePoints.letter_BA   = "\u09AC";
Bengali.codePoints.letter_BHA  = "\u09AD";
Bengali.codePoints.letter_MA   = "\u09AE";
Bengali.codePoints.letter_YA   = "\u09AF";
Bengali.codePoints.letter_RA   = "\u09B0";
Bengali.codePoints.letter_LA   = "\u09B2";
Bengali.codePoints.letter_SHA  = "\u09B6";
Bengali.codePoints.letter_SSA  = "\u09B7";
Bengali.codePoints.letter_SA   = "\u09B8";
Bengali.codePoints.letter_HA   = "\u09B9";
Bengali.codePoints.letter_DDDHA= "\u09DC"; //RRA
Bengali.codePoints.letter_RHA  = "\u09DD";
Bengali.codePoints.letter_YYA  = "\u09DF";
Bengali.codePoints.letter_KHANDATA  = "\u09CE";
Bengali.codePoints.letter_RA_MD = "\u09F0";
Bengali.codePoints.letter_RA_LD = "\u09F1";

//Dependent Vowel Signs
Bengali.codePoints.vowelsn_AA    = "\u09BE";
Bengali.codePoints.vowelsn_I     = "\u09BF";
Bengali.codePoints.vowelsn_II    = "\u09C0";
Bengali.codePoints.vowelsn_U     = "\u09C1";
Bengali.codePoints.vowelsn_UU    = "\u09C2";
Bengali.codePoints.vowelsn_R     = "\u09C3";
Bengali.codePoints.vowelsn_RR    = "\u09C4";
Bengali.codePoints.vowelsn_L     = "\u09E2";
Bengali.codePoints.vowelsn_LL    = "\u09E3";
Bengali.codePoints.vowelsn_EE    = "\u09C7";
Bengali.codePoints.vowelsn_AI    = "\u09C8";
Bengali.codePoints.vowelsn_OO    = "\u09CB";
Bengali.codePoints.vowelsn_AU    = "\u09CC";

//Miscellaneous Signs
Bengali.codePoints.misc_VIRAMA   = "\u09CD";   //hasant
Bengali.codePoints.misc_NUKTA    = "\u09BC";
Bengali.codePoints.misc_AVAGRAHA = "\u09BD";
Bengali.codePoints.misc_AULENGTH = "\u09D7";

//Digits
Bengali.codePoints.digit_ZERO  = "\u09E6";
Bengali.codePoints.digit_ONE   = "\u09E7";
Bengali.codePoints.digit_TWO   = "\u09E8";
Bengali.codePoints.digit_THREE = "\u09E9";
Bengali.codePoints.digit_FOUR  = "\u09EA";
Bengali.codePoints.digit_FIVE  = "\u09EB";
Bengali.codePoints.digit_SIX   = "\u09EC";
Bengali.codePoints.digit_SEVEN = "\u09ED";
Bengali.codePoints.digit_EIGHT = "\u09EE";
Bengali.codePoints.digit_NINE  = "\u09EF";

Bengali.fromPadma = new Object();

Bengali.fromPadma[Padma.anusvara]    = Bengali.codePoints.anusvara;
Bengali.fromPadma[Padma.visarga]     = Bengali.codePoints.visarga;
Bengali.fromPadma[Padma.candrabindu] = Bengali.codePoints.candrabindu;
Bengali.fromPadma[Padma.halant]      = Bengali.codePoints.misc_VIRAMA;
Bengali.fromPadma[Padma.chillu]      = Bengali.codePoints.misc_VIRAMA + Unicode_Shared.ZWJ;
Bengali.fromPadma[Padma.chillu_C2]   = Unicode_Shared.ZWJ;
Bengali.fromPadma[Padma.syllbreak]   = Bengali.codePoints.misc_VIRAMA + Unicode_Shared.ZWNJ;
Bengali.fromPadma[Padma.avagraha]    = Bengali.codePoints.misc_AVAGRAHA;
Bengali.fromPadma[Padma.udAtta]      = Unicode_Shared.UDATTA;
Bengali.fromPadma[Padma.anudAtta]    = Unicode_Shared.ANUDATTA;
Bengali.fromPadma[Padma.svarita]     = Unicode_Shared.SVARITA;
Bengali.fromPadma[Padma.danda]       = Unicode_Shared.DANDA;
Bengali.fromPadma[Padma.ddanda]      = Unicode_Shared.DDANDA;
Bengali.fromPadma[Padma.om]          = Unicode_Shared.OM;
Bengali.fromPadma[Padma.abbrev]      = Unicode_Shared.abbrev;
Bengali.fromPadma[Padma.nukta]       = Bengali.codePoints.misc_NUKTA;

//digits
Bengali.fromPadma[Padma.digit_ZERO]  = Bengali.codePoints.digit_ZERO;
Bengali.fromPadma[Padma.digit_ONE]   = Bengali.codePoints.digit_ONE;
Bengali.fromPadma[Padma.digit_TWO]   = Bengali.codePoints.digit_TWO;
Bengali.fromPadma[Padma.digit_THREE] = Bengali.codePoints.digit_THREE;
Bengali.fromPadma[Padma.digit_FOUR]  = Bengali.codePoints.digit_FOUR;
Bengali.fromPadma[Padma.digit_FIVE]  = Bengali.codePoints.digit_FIVE;
Bengali.fromPadma[Padma.digit_SIX]   = Bengali.codePoints.digit_SIX;
Bengali.fromPadma[Padma.digit_SEVEN] = Bengali.codePoints.digit_SEVEN;
Bengali.fromPadma[Padma.digit_EIGHT] = Bengali.codePoints.digit_EIGHT;
Bengali.fromPadma[Padma.digit_NINE]  = Bengali.codePoints.digit_NINE;

//Vowels
Bengali.fromPadma[Padma.vowel_A]     = Bengali.codePoints.letter_A;
Bengali.fromPadma[Padma.vowel_AA]    = Bengali.codePoints.letter_AA;
Bengali.fromPadma[Padma.vowel_I]     = Bengali.codePoints.letter_I;
Bengali.fromPadma[Padma.vowel_II]    = Bengali.codePoints.letter_II;
Bengali.fromPadma[Padma.vowel_U]     = Bengali.codePoints.letter_U;
Bengali.fromPadma[Padma.vowel_UU]    = Bengali.codePoints.letter_UU;
Bengali.fromPadma[Padma.vowel_R]     = Bengali.codePoints.letter_R;
Bengali.fromPadma[Padma.vowel_RR]    = Bengali.codePoints.letter_RR;
Bengali.fromPadma[Padma.vowel_L]     = Bengali.codePoints.letter_L;
Bengali.fromPadma[Padma.vowel_LL]    = Bengali.codePoints.letter_LL;
Bengali.fromPadma[Padma.vowel_EE]    = Bengali.codePoints.letter_EE;
Bengali.fromPadma[Padma.vowel_AI]    = Bengali.codePoints.letter_AI;
Bengali.fromPadma[Padma.vowel_OO]    = Bengali.codePoints.letter_OO;
Bengali.fromPadma[Padma.vowel_AU]    = Bengali.codePoints.letter_AU;

//Consonants
Bengali.fromPadma[Padma.consnt_KA]   = Bengali.codePoints.letter_KA;
Bengali.fromPadma[Padma.consnt_KHA]  = Bengali.codePoints.letter_KHA;
Bengali.fromPadma[Padma.consnt_GA]   = Bengali.codePoints.letter_GA;
Bengali.fromPadma[Padma.consnt_GHA]  = Bengali.codePoints.letter_GHA;
Bengali.fromPadma[Padma.consnt_NGA]  = Bengali.codePoints.letter_NGA;
Bengali.fromPadma[Padma.consnt_CA]   = Bengali.codePoints.letter_CA;
Bengali.fromPadma[Padma.consnt_CHA]  = Bengali.codePoints.letter_CHA;
Bengali.fromPadma[Padma.consnt_JA]   = Bengali.codePoints.letter_JA;
Bengali.fromPadma[Padma.consnt_JHA]  = Bengali.codePoints.letter_JHA;
Bengali.fromPadma[Padma.consnt_NYA]  = Bengali.codePoints.letter_NYA;
Bengali.fromPadma[Padma.consnt_TTA]  = Bengali.codePoints.letter_TTA;
Bengali.fromPadma[Padma.consnt_TTHA] = Bengali.codePoints.letter_TTHA;
Bengali.fromPadma[Padma.consnt_DDA]  = Bengali.codePoints.letter_DDA;
Bengali.fromPadma[Padma.consnt_DDHA] = Bengali.codePoints.letter_DDHA;
Bengali.fromPadma[Padma.consnt_NNA]  = Bengali.codePoints.letter_NNA;
Bengali.fromPadma[Padma.consnt_TA]   = Bengali.codePoints.letter_TA;
Bengali.fromPadma[Padma.consnt_THA]  = Bengali.codePoints.letter_THA;
Bengali.fromPadma[Padma.consnt_DA]   = Bengali.codePoints.letter_DA;
Bengali.fromPadma[Padma.consnt_DHA]  = Bengali.codePoints.letter_DHA;
Bengali.fromPadma[Padma.consnt_NA]   = Bengali.codePoints.letter_NA;
Bengali.fromPadma[Padma.consnt_PA]   = Bengali.codePoints.letter_PA;
Bengali.fromPadma[Padma.consnt_PHA]  = Bengali.codePoints.letter_PHA;
Bengali.fromPadma[Padma.consnt_BA]   = Bengali.codePoints.letter_BA;
Bengali.fromPadma[Padma.consnt_BHA]  = Bengali.codePoints.letter_BHA;
Bengali.fromPadma[Padma.consnt_MA]   = Bengali.codePoints.letter_MA;
Bengali.fromPadma[Padma.consnt_YA]   = Bengali.codePoints.letter_YA;
Bengali.fromPadma[Padma.consnt_RA]   = Bengali.codePoints.letter_RA;
Bengali.fromPadma[Padma.consnt_LA]   = Bengali.codePoints.letter_LA;
Bengali.fromPadma[Padma.consnt_SHA]  = Bengali.codePoints.letter_SHA;
Bengali.fromPadma[Padma.consnt_SSA]  = Bengali.codePoints.letter_SSA;
Bengali.fromPadma[Padma.consnt_SA]   = Bengali.codePoints.letter_SA;
Bengali.fromPadma[Padma.consnt_HA]   = Bengali.codePoints.letter_HA;
Bengali.fromPadma[Padma.consnt_DDDHA]= Bengali.codePoints.letter_DDDHA;
Bengali.fromPadma[Padma.consnt_RHA]  = Bengali.codePoints.letter_RHA;
Bengali.fromPadma[Padma.consnt_YYA]  = Bengali.codePoints.letter_YYA;
Bengali.fromPadma[Padma.consnt_KHANDA_TA]  = Bengali.codePoints.letter_KHANDATA;
Bengali.fromPadma[Padma.consnt_RA_MD] = Bengali.codePoints.letter_RA_MD;
Bengali.fromPadma[Padma.consnt_RA_LD] = Bengali.codePoints.letter_RA_LD;

//Gunimtaalu
Bengali.fromPadma[Padma.vowelsn_AA]  = Bengali.codePoints.vowelsn_AA;
Bengali.fromPadma[Padma.vowelsn_I]   = Bengali.codePoints.vowelsn_I;
Bengali.fromPadma[Padma.vowelsn_II]  = Bengali.codePoints.vowelsn_II;
Bengali.fromPadma[Padma.vowelsn_U]   = Bengali.codePoints.vowelsn_U;
Bengali.fromPadma[Padma.vowelsn_UU]  = Bengali.codePoints.vowelsn_UU;
Bengali.fromPadma[Padma.vowelsn_R]   = Bengali.codePoints.vowelsn_R;
Bengali.fromPadma[Padma.vowelsn_RR]  = Bengali.codePoints.vowelsn_RR;
Bengali.fromPadma[Padma.vowelsn_EE]  = Bengali.codePoints.vowelsn_EE;
Bengali.fromPadma[Padma.vowelsn_AI]  = Bengali.codePoints.vowelsn_AI;
Bengali.fromPadma[Padma.vowelsn_OO]  = Bengali.codePoints.vowelsn_OO;
Bengali.fromPadma[Padma.vowelsn_AU]  = Bengali.codePoints.vowelsn_AU;
Bengali.fromPadma[Padma.vowelsn_AULEN] = Bengali.codePoints.misc_AULENGTH;

//The following are not directly present in Bengali - equivalent transliteration
Bengali.fromPadma[Padma.vowel_SHT_A]   = Bengali.codePoints.letter_A;
Bengali.fromPadma[Padma.vowel_CDR_E]   = Bengali.codePoints.letter_EE;
Bengali.fromPadma[Padma.vowel_E]       = Bengali.codePoints.letter_EE;
Bengali.fromPadma[Padma.vowel_CDR_O]   = Bengali.codePoints.letter_OO;
Bengali.fromPadma[Padma.vowel_O]       = Bengali.codePoints.letter_OO;
Bengali.fromPadma[Padma.consnt_NNNA]   = Bengali.codePoints.letter_NNA;
Bengali.fromPadma[Padma.consnt_RRA]    = Bengali.codePoints.letter_DDDHA;
Bengali.fromPadma[Padma.consnt_LLA]    = Bengali.codePoints.letter_LA;
Bengali.fromPadma[Padma.consnt_ZHA]    = Bengali.codePoints.letter_LA;
Bengali.fromPadma[Padma.consnt_VA]     = Bengali.codePoints.letter_BA;
Bengali.fromPadma[Padma.consnt_QA]     = Bengali.codePoints.letter_KA;
Bengali.fromPadma[Padma.consnt_KHHA]   = Bengali.codePoints.letter_KHA;
Bengali.fromPadma[Padma.consnt_GHHA]   = Bengali.codePoints.letter_GHA;
Bengali.fromPadma[Padma.consnt_ZA]     = Bengali.codePoints.letter_JA;
Bengali.fromPadma[Padma.consnt_FA]     = Bengali.codePoints.letter_PHA;
Bengali.fromPadma[Padma.vowelsn_CDR_E] = Bengali.codePoints.vowelsn_EE;
Bengali.fromPadma[Padma.vowelsn_E]     = Bengali.codePoints.vowelsn_EE;
Bengali.fromPadma[Padma.vowelsn_CDR_O] = Bengali.codePoints.vowelsn_OO;
Bengali.fromPadma[Padma.vowelsn_O]     = Bengali.codePoints.vowelsn_OO;
Bengali.fromPadma[Padma.consnt_GGA]    = Bengali.codePoints.letter_GA;
Bengali.fromPadma[Padma.consnt_JJA]    = Bengali.codePoints.letter_JA;
Bengali.fromPadma[Padma.consnt_DDDA]   = Bengali.codePoints.letter_DDA;
Bengali.fromPadma[Padma.consnt_BBA]    = Bengali.codePoints.letter_BA;
