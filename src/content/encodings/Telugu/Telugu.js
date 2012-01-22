// $Id: Telugu.js,v 1.7 2012/01/22 04:12:52 vnagarjuna Exp $ -->

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

function Telugu()
{
}

//Generate map entries for vattulu and half-forms
Telugu.initialize = function () {
    for(var i = Padma.vattu_START; i <= Padma.vattu_END; i++)
        Telugu.fromPadma[String.fromCharCode(i)] = Telugu.codePoints.misc_VIRAMA + Telugu.fromPadma[Padma.fast_baseFormFromVattu(i)];
    for(i = Padma.half_START; i <= Padma.half_END; i++)
        Telugu.fromPadma[String.fromCharCode(i)] = Telugu.fromPadma[Padma.fast_baseFormFromHalfForm(i)] + Telugu.codePoints.misc_VIRAMA;
}

//Unicode Codepoints
Telugu.codePoints = new Object();

Telugu.codePoints.candrabindu = "\u0C01";
//Vowel Modifiers
Telugu.codePoints.anusvara    = "\u0C02";  //sunna
Telugu.codePoints.visarga     = "\u0C03";
Telugu.codePoints.ardhavisarga= "\u0C71";

//Independent Vowels
Telugu.codePoints.letter_A    = "\u0C05";
Telugu.codePoints.letter_AA   = "\u0C06";
Telugu.codePoints.letter_I    = "\u0C07";
Telugu.codePoints.letter_II   = "\u0C08";
Telugu.codePoints.letter_U    = "\u0C09";
Telugu.codePoints.letter_UU   = "\u0C0A";
Telugu.codePoints.letter_R    = "\u0C0B";   //vocalic R
Telugu.codePoints.letter_RR   = "\u0C60";   //vocalic R
Telugu.codePoints.letter_L    = "\u0C0C";   //vocalic L
Telugu.codePoints.letter_LL   = "\u0C61";   //vocalic L
Telugu.codePoints.letter_E    = "\u0C0E";
Telugu.codePoints.letter_EE   = "\u0C0F";
Telugu.codePoints.letter_AI   = "\u0C10";
Telugu.codePoints.letter_O    = "\u0C12";
Telugu.codePoints.letter_OO   = "\u0C13";
Telugu.codePoints.letter_AU   = "\u0C14";

//Consonants
Telugu.codePoints.letter_KA   = "\u0C15";
Telugu.codePoints.letter_KHA  = "\u0C16";
Telugu.codePoints.letter_GA   = "\u0C17";
Telugu.codePoints.letter_GHA  = "\u0C18";
Telugu.codePoints.letter_NGA  = "\u0C19";
Telugu.codePoints.letter_CA   = "\u0C1A";
Telugu.codePoints.letter_CHA  = "\u0C1B";
Telugu.codePoints.letter_JA   = "\u0C1C";
Telugu.codePoints.letter_JHA  = "\u0C1D";
Telugu.codePoints.letter_NYA  = "\u0C1E";
Telugu.codePoints.letter_TTA  = "\u0C1F";
Telugu.codePoints.letter_TTHA = "\u0C20";
Telugu.codePoints.letter_DDA  = "\u0C21";
Telugu.codePoints.letter_DDHA = "\u0C22";
Telugu.codePoints.letter_NNA  = "\u0C23";
Telugu.codePoints.letter_TA   = "\u0C24";
Telugu.codePoints.letter_THA  = "\u0C25";
Telugu.codePoints.letter_DA   = "\u0C26";
Telugu.codePoints.letter_DHA  = "\u0C27";
Telugu.codePoints.letter_NA   = "\u0C28";
Telugu.codePoints.letter_PA   = "\u0C2A";
Telugu.codePoints.letter_PHA  = "\u0C2B";
Telugu.codePoints.letter_BA   = "\u0C2C";
Telugu.codePoints.letter_BHA  = "\u0C2D";
Telugu.codePoints.letter_MA   = "\u0C2E";
Telugu.codePoints.letter_YA   = "\u0C2F";
Telugu.codePoints.letter_RA   = "\u0C30";
Telugu.codePoints.letter_RRA  = "\u0C31";
Telugu.codePoints.letter_LA   = "\u0C32";
Telugu.codePoints.letter_LLA  = "\u0C33";
Telugu.codePoints.letter_VA   = "\u0C35";
Telugu.codePoints.letter_SHA  = "\u0C36";
Telugu.codePoints.letter_SSA  = "\u0C37";
Telugu.codePoints.letter_SA   = "\u0C38";
Telugu.codePoints.letter_HA   = "\u0C39";
Telugu.codePoints.letter_TSA  = "\u0C58";
Telugu.codePoints.letter_DJA  = "\u0C59";

//Dependent Vowel Signs
Telugu.codePoints.vowelsn_AA  = "\u0C3E";
Telugu.codePoints.vowelsn_I   = "\u0C3F";
Telugu.codePoints.vowelsn_II  = "\u0C40";
Telugu.codePoints.vowelsn_U   = "\u0C41";
Telugu.codePoints.vowelsn_UU  = "\u0C42";
Telugu.codePoints.vowelsn_R   = "\u0C43";
Telugu.codePoints.vowelsn_RR  = "\u0C44";
Telugu.codePoints.vowelsn_L   = "\u0C62";
Telugu.codePoints.vowelsn_LL  = "\u0C63";
Telugu.codePoints.vowelsn_E   = "\u0C46";
Telugu.codePoints.vowelsn_EE  = "\u0C47";
Telugu.codePoints.vowelsn_AI  = "\u0C48";   //this is the same as 0C46 followed by 0C56
Telugu.codePoints.vowelsn_O   = "\u0C4A";
Telugu.codePoints.vowelsn_OO  = "\u0C4B";
Telugu.codePoints.vowelsn_AU  = "\u0C4C";

//Miscellaneous Signs
Telugu.codePoints.misc_AVAGRAHA = "\u0C3D";
Telugu.codePoints.misc_VIRAMA   = "\u0C4D";   //halant
Telugu.codePoints.misc_LENGTH   = "\u0C55";
Telugu.codePoints.misc_AILEN    = "\u0C56";

//Digits
Telugu.codePoints.digit_ZERO  = "\u0C66";
Telugu.codePoints.digit_ONE   = "\u0C67";
Telugu.codePoints.digit_TWO   = "\u0C68";
Telugu.codePoints.digit_THREE = "\u0C69";
Telugu.codePoints.digit_FOUR  = "\u0C6A";
Telugu.codePoints.digit_FIVE  = "\u0C6B";
Telugu.codePoints.digit_SIX   = "\u0C6C";
Telugu.codePoints.digit_SEVEN = "\u0C6D";
Telugu.codePoints.digit_EIGHT = "\u0C6E";
Telugu.codePoints.digit_NINE  = "\u0C6F";

Telugu.fromPadma = new Object();

Telugu.fromPadma[Padma.anusvara]    = Telugu.codePoints.anusvara;
Telugu.fromPadma[Padma.visarga]     = Telugu.codePoints.visarga;
Telugu.fromPadma[Padma.ardhavisarga]= Telugu.codePoints.ardhavisarga;
Telugu.fromPadma[Padma.pollu]       = Telugu.codePoints.misc_VIRAMA;
Telugu.fromPadma[Padma.chillu]      = Telugu.codePoints.misc_VIRAMA + Unicode_Shared.ZWJ;
Telugu.fromPadma[Padma.chillu_C2]   = Unicode_Shared.ZWJ;
Telugu.fromPadma[Padma.syllbreak]   = Telugu.codePoints.misc_VIRAMA + Unicode_Shared.ZWNJ;
Telugu.fromPadma[Padma.candrabindu] = Telugu.codePoints.candrabindu;
Telugu.fromPadma[Padma.avagraha]    = Telugu.codePoints.misc_AVAGRAHA;
Telugu.fromPadma[Padma.udAtta]      = Unicode_Shared.UDATTA;
Telugu.fromPadma[Padma.anudAtta]    = Unicode_Shared.ANUDATTA;
Telugu.fromPadma[Padma.svarita]     = Unicode_Shared.SVARITA;
Telugu.fromPadma[Padma.danda]       = Unicode_Shared.DANDA;
Telugu.fromPadma[Padma.ddanda]      = Unicode_Shared.DDANDA;
Telugu.fromPadma[Padma.abbrev]      = Unicode_Shared.abbrev;
Telugu.fromPadma[Padma.om]          = Unicode_Shared.OM;

//digits
Telugu.fromPadma[Padma.digit_ZERO]  = Telugu.codePoints.digit_ZERO;
Telugu.fromPadma[Padma.digit_ONE]   = Telugu.codePoints.digit_ONE;
Telugu.fromPadma[Padma.digit_TWO]   = Telugu.codePoints.digit_TWO;
Telugu.fromPadma[Padma.digit_THREE] = Telugu.codePoints.digit_THREE;
Telugu.fromPadma[Padma.digit_FOUR]  = Telugu.codePoints.digit_FOUR;
Telugu.fromPadma[Padma.digit_FIVE]  = Telugu.codePoints.digit_FIVE;
Telugu.fromPadma[Padma.digit_SIX]   = Telugu.codePoints.digit_SIX;
Telugu.fromPadma[Padma.digit_SEVEN] = Telugu.codePoints.digit_SEVEN;
Telugu.fromPadma[Padma.digit_EIGHT] = Telugu.codePoints.digit_EIGHT;
Telugu.fromPadma[Padma.digit_NINE]  = Telugu.codePoints.digit_NINE;

//Vowels
Telugu.fromPadma[Padma.vowel_A]     = Telugu.codePoints.letter_A;
Telugu.fromPadma[Padma.vowel_AA]    = Telugu.codePoints.letter_AA;
Telugu.fromPadma[Padma.vowel_I]     = Telugu.codePoints.letter_I;
Telugu.fromPadma[Padma.vowel_II]    = Telugu.codePoints.letter_II;
Telugu.fromPadma[Padma.vowel_U]     = Telugu.codePoints.letter_U;
Telugu.fromPadma[Padma.vowel_UU]    = Telugu.codePoints.letter_UU;
Telugu.fromPadma[Padma.vowel_R]     = Telugu.codePoints.letter_R;
Telugu.fromPadma[Padma.vowel_RR]    = Telugu.codePoints.letter_RR;
Telugu.fromPadma[Padma.vowel_L]     = Telugu.codePoints.letter_L;
Telugu.fromPadma[Padma.vowel_LL]    = Telugu.codePoints.letter_LL;
Telugu.fromPadma[Padma.vowel_E]     = Telugu.codePoints.letter_E;
Telugu.fromPadma[Padma.vowel_EE]    = Telugu.codePoints.letter_EE;
Telugu.fromPadma[Padma.vowel_AI]    = Telugu.codePoints.letter_AI;
Telugu.fromPadma[Padma.vowel_O]     = Telugu.codePoints.letter_O;
Telugu.fromPadma[Padma.vowel_OO]    = Telugu.codePoints.letter_OO;
Telugu.fromPadma[Padma.vowel_AU]    = Telugu.codePoints.letter_AU;

//Consonants
Telugu.fromPadma[Padma.consnt_KA]   = Telugu.codePoints.letter_KA;
Telugu.fromPadma[Padma.consnt_KHA]  = Telugu.codePoints.letter_KHA;
Telugu.fromPadma[Padma.consnt_GA]   = Telugu.codePoints.letter_GA;
Telugu.fromPadma[Padma.consnt_GHA]  = Telugu.codePoints.letter_GHA;
Telugu.fromPadma[Padma.consnt_NGA]  = Telugu.codePoints.letter_NGA;
Telugu.fromPadma[Padma.consnt_CA]   = Telugu.codePoints.letter_CA;
Telugu.fromPadma[Padma.consnt_CHA]  = Telugu.codePoints.letter_CHA;
Telugu.fromPadma[Padma.consnt_JA]   = Telugu.codePoints.letter_JA;
Telugu.fromPadma[Padma.consnt_JHA]  = Telugu.codePoints.letter_JHA;
Telugu.fromPadma[Padma.consnt_NYA]  = Telugu.codePoints.letter_NYA;
Telugu.fromPadma[Padma.consnt_TTA]  = Telugu.codePoints.letter_TTA;
Telugu.fromPadma[Padma.consnt_TTHA] = Telugu.codePoints.letter_TTHA;
Telugu.fromPadma[Padma.consnt_DDA]  = Telugu.codePoints.letter_DDA;
Telugu.fromPadma[Padma.consnt_DDHA] = Telugu.codePoints.letter_DDHA;
Telugu.fromPadma[Padma.consnt_NNA]  = Telugu.codePoints.letter_NNA;
Telugu.fromPadma[Padma.consnt_TA]   = Telugu.codePoints.letter_TA;
Telugu.fromPadma[Padma.consnt_THA]  = Telugu.codePoints.letter_THA;
Telugu.fromPadma[Padma.consnt_DA]   = Telugu.codePoints.letter_DA;
Telugu.fromPadma[Padma.consnt_DHA]  = Telugu.codePoints.letter_DHA;
Telugu.fromPadma[Padma.consnt_NA]   = Telugu.codePoints.letter_NA;
Telugu.fromPadma[Padma.consnt_PA]   = Telugu.codePoints.letter_PA;
Telugu.fromPadma[Padma.consnt_PHA]  = Telugu.codePoints.letter_PHA;
Telugu.fromPadma[Padma.consnt_BA]   = Telugu.codePoints.letter_BA;
Telugu.fromPadma[Padma.consnt_BHA]  = Telugu.codePoints.letter_BHA;
Telugu.fromPadma[Padma.consnt_MA]   = Telugu.codePoints.letter_MA;
Telugu.fromPadma[Padma.consnt_YA]   = Telugu.codePoints.letter_YA;
Telugu.fromPadma[Padma.consnt_RA]   = Telugu.codePoints.letter_RA;
Telugu.fromPadma[Padma.consnt_LA]   = Telugu.codePoints.letter_LA;
Telugu.fromPadma[Padma.consnt_VA]   = Telugu.codePoints.letter_VA;
Telugu.fromPadma[Padma.consnt_SHA]  = Telugu.codePoints.letter_SHA;
Telugu.fromPadma[Padma.consnt_SSA]  = Telugu.codePoints.letter_SSA;
Telugu.fromPadma[Padma.consnt_SA]   = Telugu.codePoints.letter_SA;
Telugu.fromPadma[Padma.consnt_HA]   = Telugu.codePoints.letter_HA;
Telugu.fromPadma[Padma.consnt_LLA]  = Telugu.codePoints.letter_LLA;
Telugu.fromPadma[Padma.consnt_RRA]  = Telugu.codePoints.letter_RRA;
Telugu.fromPadma[Padma.consnt_TSA]  = Telugu.codePoints.letter_TSA;
Telugu.fromPadma[Padma.consnt_DJA]  = Telugu.codePoints.letter_DJA;

//Gunimtaalu
Telugu.fromPadma[Padma.vowelsn_AA]  = Telugu.codePoints.vowelsn_AA;
Telugu.fromPadma[Padma.vowelsn_I]   = Telugu.codePoints.vowelsn_I;
Telugu.fromPadma[Padma.vowelsn_II]  = Telugu.codePoints.vowelsn_II;
Telugu.fromPadma[Padma.vowelsn_U]   = Telugu.codePoints.vowelsn_U;
Telugu.fromPadma[Padma.vowelsn_UU]  = Telugu.codePoints.vowelsn_UU;
Telugu.fromPadma[Padma.vowelsn_R]   = Telugu.codePoints.vowelsn_R;
Telugu.fromPadma[Padma.vowelsn_RR]  = Telugu.codePoints.vowelsn_RR;
Telugu.fromPadma[Padma.vowelsn_L]   = Telugu.codePoints.vowelsn_L;
Telugu.fromPadma[Padma.vowelsn_LL]  = Telugu.codePoints.vowelsn_LL;
Telugu.fromPadma[Padma.vowelsn_E]   = Telugu.codePoints.vowelsn_E;
Telugu.fromPadma[Padma.vowelsn_EE]  = Telugu.codePoints.vowelsn_EE;
Telugu.fromPadma[Padma.vowelsn_AI]  = Telugu.codePoints.vowelsn_AI;
Telugu.fromPadma[Padma.vowelsn_O]   = Telugu.codePoints.vowelsn_O;
Telugu.fromPadma[Padma.vowelsn_OO]  = Telugu.codePoints.vowelsn_OO;
Telugu.fromPadma[Padma.vowelsn_AU]  = Telugu.codePoints.vowelsn_AU;
Telugu.fromPadma[Padma.vowelsn_AILEN]  = Telugu.codePoints.misc_AILEN;

//The following are not directly present in Telugu - equivalent transliteration
Telugu.fromPadma[Padma.vowel_SHT_A]   = Telugu.codePoints.letter_A;
Telugu.fromPadma[Padma.vowel_CDR_E]   = Telugu.codePoints.letter_E;
Telugu.fromPadma[Padma.vowel_CDR_O]   = Telugu.codePoints.letter_O;
Telugu.fromPadma[Padma.consnt_QA]     = Telugu.codePoints.letter_KA;
Telugu.fromPadma[Padma.consnt_KHHA]   = Telugu.codePoints.letter_KHA;
Telugu.fromPadma[Padma.consnt_GHHA]   = Telugu.codePoints.letter_GHA;
Telugu.fromPadma[Padma.consnt_ZA]     = Telugu.codePoints.letter_JA;
Telugu.fromPadma[Padma.consnt_DDDHA]  = Telugu.codePoints.letter_DDA;
Telugu.fromPadma[Padma.consnt_RHA]    = Telugu.codePoints.letter_DDHA;
Telugu.fromPadma[Padma.consnt_NNNA]   = Telugu.codePoints.letter_NNA;
Telugu.fromPadma[Padma.consnt_FA]     = Telugu.codePoints.letter_PHA;
Telugu.fromPadma[Padma.consnt_YYA]    = Telugu.codePoints.letter_YA;
Telugu.fromPadma[Padma.consnt_ZHA]    = Telugu.codePoints.letter_LLA;
Telugu.fromPadma[Padma.vowelsn_CDR_E] = Telugu.codePoints.vowelsn_E;
Telugu.fromPadma[Padma.vowelsn_CDR_O] = Telugu.codePoints.vowelsn_O;
Telugu.fromPadma[Padma.consnt_GGA]    = Telugu.codePoints.letter_GA;
Telugu.fromPadma[Padma.consnt_JJA]    = Telugu.codePoints.letter_JA;
Telugu.fromPadma[Padma.consnt_DDDA]   = Telugu.codePoints.letter_DDA;
Telugu.fromPadma[Padma.consnt_BBA]    = Telugu.codePoints.letter_BA;
Telugu.fromPadma[Padma.consnt_RA_MD]  = Telugu.codePoints.letter_RA;
Telugu.fromPadma[Padma.consnt_RA_LD]  = Telugu.codePoints.letter_RA;
