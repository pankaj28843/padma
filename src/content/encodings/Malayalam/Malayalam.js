// $Id: Malayalam.js,v 1.4 2012/01/22 04:12:51 vnagarjuna Exp $ -->

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

function Malayalam()
{
}

//Generate map entries for vattulu and half-forms
Malayalam.initialize = function () {
    for(var i = Padma.vattu_START; i <= Padma.vattu_END; i++)
        Malayalam.fromPadma[String.fromCharCode(i)] = Malayalam.codePoints.misc_VIRAMA + Malayalam.fromPadma[Padma.fast_baseFormFromVattu(i)];
    for(i = Padma.half_START; i <= Padma.half_END; i++)
        Malayalam.fromPadma[String.fromCharCode(i)] = Malayalam.fromPadma[Padma.fast_baseFormFromHalfForm(i)] + Malayalam.codePoints.misc_VIRAMA;
}

//Unicode Codepoints
Malayalam.codePoints = new Object();

//Vowel Modifiers
Malayalam.codePoints.anusvara    = "\u0D02";  //sunna
Malayalam.codePoints.visarga     = "\u0D03";

//Independent Vowels
Malayalam.codePoints.letter_A    = "\u0D05";
Malayalam.codePoints.letter_AA   = "\u0D06";
Malayalam.codePoints.letter_I    = "\u0D07";
Malayalam.codePoints.letter_II   = "\u0D08";
Malayalam.codePoints.letter_U    = "\u0D09";
Malayalam.codePoints.letter_UU   = "\u0D0A";
Malayalam.codePoints.letter_R    = "\u0D0B";   //vocalic R
Malayalam.codePoints.letter_RR   = "\u0D60";   //vocalic R
Malayalam.codePoints.letter_L    = "\u0D0C";   //vocalic L
Malayalam.codePoints.letter_LL   = "\u0D61";   //vocalic L
Malayalam.codePoints.letter_E    = "\u0D0E";
Malayalam.codePoints.letter_EE   = "\u0D0F";
Malayalam.codePoints.letter_AI   = "\u0D10";
Malayalam.codePoints.letter_O    = "\u0D12";
Malayalam.codePoints.letter_OO   = "\u0D13";
Malayalam.codePoints.letter_AU   = "\u0D14";

//Consonants
Malayalam.codePoints.letter_KA   = "\u0D15";
Malayalam.codePoints.letter_KHA  = "\u0D16";
Malayalam.codePoints.letter_GA   = "\u0D17";
Malayalam.codePoints.letter_GHA  = "\u0D18";
Malayalam.codePoints.letter_NGA  = "\u0D19";
Malayalam.codePoints.letter_CA   = "\u0D1A";
Malayalam.codePoints.letter_CHA  = "\u0D1B";
Malayalam.codePoints.letter_JA   = "\u0D1C";
Malayalam.codePoints.letter_JHA  = "\u0D1D";
Malayalam.codePoints.letter_NYA  = "\u0D1E";
Malayalam.codePoints.letter_TTA  = "\u0D1F";
Malayalam.codePoints.letter_TTHA = "\u0D20";
Malayalam.codePoints.letter_DDA  = "\u0D21";
Malayalam.codePoints.letter_DDHA = "\u0D22";
Malayalam.codePoints.letter_NNA  = "\u0D23";
Malayalam.codePoints.letter_TA   = "\u0D24";
Malayalam.codePoints.letter_THA  = "\u0D25";
Malayalam.codePoints.letter_DA   = "\u0D26";
Malayalam.codePoints.letter_DHA  = "\u0D27";
Malayalam.codePoints.letter_NA   = "\u0D28";
Malayalam.codePoints.letter_PA   = "\u0D2A";
Malayalam.codePoints.letter_PHA  = "\u0D2B";
Malayalam.codePoints.letter_BA   = "\u0D2C";
Malayalam.codePoints.letter_BHA  = "\u0D2D";
Malayalam.codePoints.letter_MA   = "\u0D2E";
Malayalam.codePoints.letter_YA   = "\u0D2F";
Malayalam.codePoints.letter_RA   = "\u0D30";
Malayalam.codePoints.letter_RRA  = "\u0D31";
Malayalam.codePoints.letter_LA   = "\u0D32";
Malayalam.codePoints.letter_LLA  = "\u0D33";
Malayalam.codePoints.letter_ZHA  = "\u0D34";
Malayalam.codePoints.letter_VA   = "\u0D35";
Malayalam.codePoints.letter_SHA  = "\u0D36";
Malayalam.codePoints.letter_SSA  = "\u0D37";
Malayalam.codePoints.letter_SA   = "\u0D38";
Malayalam.codePoints.letter_HA   = "\u0D39";

//Dependent Vowel Signs
Malayalam.codePoints.vowelsn_AA  = "\u0D3E";
Malayalam.codePoints.vowelsn_I   = "\u0D3F";
Malayalam.codePoints.vowelsn_II  = "\u0D40";
Malayalam.codePoints.vowelsn_U   = "\u0D41";
Malayalam.codePoints.vowelsn_UU  = "\u0D42";
Malayalam.codePoints.vowelsn_R   = "\u0D43";
Malayalam.codePoints.vowelsn_RR  = "\u0D43\u0D57";
Malayalam.codePoints.vowelsn_E   = "\u0D46";
Malayalam.codePoints.vowelsn_EE  = "\u0D47";
Malayalam.codePoints.vowelsn_AI  = "\u0D48"; 
Malayalam.codePoints.vowelsn_O   = "\u0D4A"; //Also 0D46 + 0D3E
Malayalam.codePoints.vowelsn_OO  = "\u0D4B"; //Also 0D47 + 0D3E
Malayalam.codePoints.vowelsn_AU  = "\u0D4C"; //Also 0D46 + 0D57

//Miscellaneous Signs
Malayalam.codePoints.misc_VIRAMA   = "\u0D4D";   //chandrakkala
Malayalam.codePoints.misc_AULEN    = "\u0D57";

//Digits
Malayalam.codePoints.digit_ZERO  = "\u0D66";
Malayalam.codePoints.digit_ONE   = "\u0D67";
Malayalam.codePoints.digit_TWO   = "\u0D68";
Malayalam.codePoints.digit_THREE = "\u0D69";
Malayalam.codePoints.digit_FOUR  = "\u0D6A";
Malayalam.codePoints.digit_FIVE  = "\u0D6B";
Malayalam.codePoints.digit_SIX   = "\u0D6C";
Malayalam.codePoints.digit_SEVEN = "\u0D6D";
Malayalam.codePoints.digit_EIGHT = "\u0D6E";
Malayalam.codePoints.digit_NINE  = "\u0D6F";

Malayalam.fromPadma = new Object();

Malayalam.fromPadma[Padma.anusvara]    = Malayalam.codePoints.anusvara;
Malayalam.fromPadma[Padma.visarga]     = Malayalam.codePoints.visarga;
Malayalam.fromPadma[Padma.chandrakkala] = Malayalam.codePoints.misc_VIRAMA;
Malayalam.fromPadma[Padma.chillu]      = Malayalam.codePoints.misc_VIRAMA + Unicode_Shared.ZWJ;
Malayalam.fromPadma[Padma.chillu_C2]   = Unicode_Shared.ZWJ;
Malayalam.fromPadma[Padma.syllbreak]   = Malayalam.codePoints.misc_VIRAMA + Unicode_Shared.ZWNJ;
Malayalam.fromPadma[Padma.avagraha]    = Unicode_Shared.AVAGRAHA;
Malayalam.fromPadma[Padma.udAtta]      = Unicode_Shared.UDATTA;
Malayalam.fromPadma[Padma.anudAtta]    = Unicode_Shared.ANUDATTA;
Malayalam.fromPadma[Padma.svarita]     = Unicode_Shared.SVARITA;
Malayalam.fromPadma[Padma.danda]       = Unicode_Shared.DANDA;
Malayalam.fromPadma[Padma.ddanda]      = Unicode_Shared.DDANDA;
Malayalam.fromPadma[Padma.abbrev]      = Unicode_Shared.abbrev;
Malayalam.fromPadma[Padma.om]          = Unicode_Shared.OM;

//digits
Malayalam.fromPadma[Padma.digit_ZERO]  = Malayalam.codePoints.digit_ZERO;
Malayalam.fromPadma[Padma.digit_ONE]   = Malayalam.codePoints.digit_ONE;
Malayalam.fromPadma[Padma.digit_TWO]   = Malayalam.codePoints.digit_TWO;
Malayalam.fromPadma[Padma.digit_THREE] = Malayalam.codePoints.digit_THREE;
Malayalam.fromPadma[Padma.digit_FOUR]  = Malayalam.codePoints.digit_FOUR;
Malayalam.fromPadma[Padma.digit_FIVE]  = Malayalam.codePoints.digit_FIVE;
Malayalam.fromPadma[Padma.digit_SIX]   = Malayalam.codePoints.digit_SIX;
Malayalam.fromPadma[Padma.digit_SEVEN] = Malayalam.codePoints.digit_SEVEN;
Malayalam.fromPadma[Padma.digit_EIGHT] = Malayalam.codePoints.digit_EIGHT;
Malayalam.fromPadma[Padma.digit_NINE]  = Malayalam.codePoints.digit_NINE;

//Vowels
Malayalam.fromPadma[Padma.vowel_A]     = Malayalam.codePoints.letter_A;
Malayalam.fromPadma[Padma.vowel_AA]    = Malayalam.codePoints.letter_AA;
Malayalam.fromPadma[Padma.vowel_I]     = Malayalam.codePoints.letter_I;
Malayalam.fromPadma[Padma.vowel_II]    = Malayalam.codePoints.letter_II;
Malayalam.fromPadma[Padma.vowel_U]     = Malayalam.codePoints.letter_U;
Malayalam.fromPadma[Padma.vowel_UU]    = Malayalam.codePoints.letter_UU;
Malayalam.fromPadma[Padma.vowel_R]     = Malayalam.codePoints.letter_R;
Malayalam.fromPadma[Padma.vowel_RR]    = Malayalam.codePoints.letter_RR;
Malayalam.fromPadma[Padma.vowel_L]     = Malayalam.codePoints.letter_L;
Malayalam.fromPadma[Padma.vowel_LL]    = Malayalam.codePoints.letter_LL;
Malayalam.fromPadma[Padma.vowel_E]     = Malayalam.codePoints.letter_E;
Malayalam.fromPadma[Padma.vowel_EE]    = Malayalam.codePoints.letter_EE;
Malayalam.fromPadma[Padma.vowel_AI]    = Malayalam.codePoints.letter_AI;
Malayalam.fromPadma[Padma.vowel_O]     = Malayalam.codePoints.letter_O;
Malayalam.fromPadma[Padma.vowel_OO]    = Malayalam.codePoints.letter_OO;
Malayalam.fromPadma[Padma.vowel_AU]    = Malayalam.codePoints.letter_AU;

//Consonants
Malayalam.fromPadma[Padma.consnt_KA]   = Malayalam.codePoints.letter_KA;
Malayalam.fromPadma[Padma.consnt_KHA]  = Malayalam.codePoints.letter_KHA;
Malayalam.fromPadma[Padma.consnt_GA]   = Malayalam.codePoints.letter_GA;
Malayalam.fromPadma[Padma.consnt_GHA]  = Malayalam.codePoints.letter_GHA;
Malayalam.fromPadma[Padma.consnt_NGA]  = Malayalam.codePoints.letter_NGA;
Malayalam.fromPadma[Padma.consnt_CA]   = Malayalam.codePoints.letter_CA;
Malayalam.fromPadma[Padma.consnt_CHA]  = Malayalam.codePoints.letter_CHA;
Malayalam.fromPadma[Padma.consnt_JA]   = Malayalam.codePoints.letter_JA;
Malayalam.fromPadma[Padma.consnt_JHA]  = Malayalam.codePoints.letter_JHA;
Malayalam.fromPadma[Padma.consnt_NYA]  = Malayalam.codePoints.letter_NYA;
Malayalam.fromPadma[Padma.consnt_TTA]  = Malayalam.codePoints.letter_TTA;
Malayalam.fromPadma[Padma.consnt_TTHA] = Malayalam.codePoints.letter_TTHA;
Malayalam.fromPadma[Padma.consnt_DDA]  = Malayalam.codePoints.letter_DDA;
Malayalam.fromPadma[Padma.consnt_DDHA] = Malayalam.codePoints.letter_DDHA;
Malayalam.fromPadma[Padma.consnt_NNA]  = Malayalam.codePoints.letter_NNA;
Malayalam.fromPadma[Padma.consnt_TA]   = Malayalam.codePoints.letter_TA;
Malayalam.fromPadma[Padma.consnt_THA]  = Malayalam.codePoints.letter_THA;
Malayalam.fromPadma[Padma.consnt_DA]   = Malayalam.codePoints.letter_DA;
Malayalam.fromPadma[Padma.consnt_DHA]  = Malayalam.codePoints.letter_DHA;
Malayalam.fromPadma[Padma.consnt_NA]   = Malayalam.codePoints.letter_NA;
Malayalam.fromPadma[Padma.consnt_PA]   = Malayalam.codePoints.letter_PA;
Malayalam.fromPadma[Padma.consnt_PHA]  = Malayalam.codePoints.letter_PHA;
Malayalam.fromPadma[Padma.consnt_BA]   = Malayalam.codePoints.letter_BA;
Malayalam.fromPadma[Padma.consnt_BHA]  = Malayalam.codePoints.letter_BHA;
Malayalam.fromPadma[Padma.consnt_MA]   = Malayalam.codePoints.letter_MA;
Malayalam.fromPadma[Padma.consnt_YA]   = Malayalam.codePoints.letter_YA;
Malayalam.fromPadma[Padma.consnt_RA]   = Malayalam.codePoints.letter_RA;
Malayalam.fromPadma[Padma.consnt_LA]   = Malayalam.codePoints.letter_LA;
Malayalam.fromPadma[Padma.consnt_VA]   = Malayalam.codePoints.letter_VA;
Malayalam.fromPadma[Padma.consnt_SHA]  = Malayalam.codePoints.letter_SHA;
Malayalam.fromPadma[Padma.consnt_SSA]  = Malayalam.codePoints.letter_SSA;
Malayalam.fromPadma[Padma.consnt_SA]   = Malayalam.codePoints.letter_SA;
Malayalam.fromPadma[Padma.consnt_HA]   = Malayalam.codePoints.letter_HA;
Malayalam.fromPadma[Padma.consnt_LLA]  = Malayalam.codePoints.letter_LLA;
Malayalam.fromPadma[Padma.consnt_ZHA]  = Malayalam.codePoints.letter_ZHA;
Malayalam.fromPadma[Padma.consnt_RRA]  = Malayalam.codePoints.letter_RRA;

//Gunimtaalu
Malayalam.fromPadma[Padma.vowelsn_AA]  = Malayalam.codePoints.vowelsn_AA;
Malayalam.fromPadma[Padma.vowelsn_I]   = Malayalam.codePoints.vowelsn_I;
Malayalam.fromPadma[Padma.vowelsn_II]  = Malayalam.codePoints.vowelsn_II;
Malayalam.fromPadma[Padma.vowelsn_U]   = Malayalam.codePoints.vowelsn_U;
Malayalam.fromPadma[Padma.vowelsn_UU]  = Malayalam.codePoints.vowelsn_UU;
Malayalam.fromPadma[Padma.vowelsn_R]   = Malayalam.codePoints.vowelsn_R;
Malayalam.fromPadma[Padma.vowelsn_RR]  = Malayalam.codePoints.vowelsn_RR;
Malayalam.fromPadma[Padma.vowelsn_E]   = Malayalam.codePoints.vowelsn_E;
Malayalam.fromPadma[Padma.vowelsn_EE]  = Malayalam.codePoints.vowelsn_EE;
Malayalam.fromPadma[Padma.vowelsn_AI]  = Malayalam.codePoints.vowelsn_AI;
Malayalam.fromPadma[Padma.vowelsn_O]   = Malayalam.codePoints.vowelsn_O;
Malayalam.fromPadma[Padma.vowelsn_OO]  = Malayalam.codePoints.vowelsn_OO;
Malayalam.fromPadma[Padma.vowelsn_AU]  = Malayalam.codePoints.vowelsn_AU;
Malayalam.fromPadma[Padma.vowelsn_AULEN]  = Malayalam.codePoints.misc_AULEN;

//The following are not directly present in Malayalam - equivalent transliteration
Malayalam.fromPadma[Padma.vowel_SHT_A]   = Malayalam.codePoints.letter_A;
Malayalam.fromPadma[Padma.vowel_CDR_E]   = Malayalam.codePoints.letter_E;
Malayalam.fromPadma[Padma.vowel_CDR_O]   = Malayalam.codePoints.letter_O;
Malayalam.fromPadma[Padma.consnt_QA]     = Malayalam.codePoints.letter_KA;
Malayalam.fromPadma[Padma.consnt_KHHA]   = Malayalam.codePoints.letter_KHA;
Malayalam.fromPadma[Padma.consnt_GHHA]   = Malayalam.codePoints.letter_GHA;
Malayalam.fromPadma[Padma.consnt_ZA]     = Malayalam.codePoints.letter_JA;
Malayalam.fromPadma[Padma.consnt_DDDHA]  = Malayalam.codePoints.letter_DDA;
Malayalam.fromPadma[Padma.consnt_RHA]    = Malayalam.codePoints.letter_DDHA;
Malayalam.fromPadma[Padma.consnt_NNNA]   = Malayalam.codePoints.letter_NNA;
Malayalam.fromPadma[Padma.consnt_FA]     = Malayalam.codePoints.letter_PHA;
Malayalam.fromPadma[Padma.consnt_YYA]    = Malayalam.codePoints.letter_YA;
Malayalam.fromPadma[Padma.vowelsn_CDR_E] = Malayalam.codePoints.vowelsn_E;
Malayalam.fromPadma[Padma.vowelsn_CDR_O] = Malayalam.codePoints.vowelsn_O;
