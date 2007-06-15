// $Id: Gurmukhi.js,v 1.1 2007/06/15 21:55:27 vnagarjuna Exp $ -->

//Copyright 2005-2007 A S Alam <aalam@users.sf.net>
//Copyright 2005-2007 Punjabi OpenSource Team (POST) http://www.satluj.org/
//Copyright 2007 Nagarjuna Venna <vnagarjuna@yahoo.com>

/* ***** BEGIN LICENSE BLOCK ***** 
 *  This file is part of Padma, Provided by POST
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

function Gurmukhi()
{
}

//Generate map entries for vattulu and half-forms
Gurmukhi.initialize = function () {
    for(var i = Padma.vattu_START; i <= Padma.vattu_END; i++)
        Gurmukhi.fromPadma[String.fromCharCode(i)] = Gurmukhi.codePoints.misc_VIRAMA + Gurmukhi.fromPadma[Padma.fast_baseFormFromVattu(i)];
    for(i = Padma.half_START; i <= Padma.half_END; i++)
        Gurmukhi.fromPadma[String.fromCharCode(i)] = Gurmukhi.fromPadma[Padma.fast_baseFormFromHalfForm(i)] + Gurmukhi.codePoints.misc_VIRAMA;
}

//Unicode Codepoints
Gurmukhi.codePoints = new Object();

Gurmukhi.codePoints.candrabindu = "\u0A01";
//Vowel Modifiers
Gurmukhi.codePoints.anusvara    = "\u0A02";
Gurmukhi.codePoints.visarga     = "\u0A03";

//Independent Vowels
Gurmukhi.codePoints.letter_A    = "\u0A05";
Gurmukhi.codePoints.letter_AA   = "\u0A06";
Gurmukhi.codePoints.letter_I    = "\u0A07";
Gurmukhi.codePoints.letter_II   = "\u0A08";
Gurmukhi.codePoints.letter_U    = "\u0A09";
Gurmukhi.codePoints.letter_UU   = "\u0A0A";
Gurmukhi.codePoints.letter_EE   = "\u0A0F";
Gurmukhi.codePoints.letter_AI   = "\u0A10";
Gurmukhi.codePoints.letter_OO   = "\u0A13";
Gurmukhi.codePoints.letter_AU   = "\u0A14";

//Consonants
Gurmukhi.codePoints.letter_KA   = "\u0A15";
Gurmukhi.codePoints.letter_KHA  = "\u0A16";
Gurmukhi.codePoints.letter_GA   = "\u0A17";
Gurmukhi.codePoints.letter_GHA  = "\u0A18";
Gurmukhi.codePoints.letter_NGA  = "\u0A19";
Gurmukhi.codePoints.letter_CA   = "\u0A1A";
Gurmukhi.codePoints.letter_CHA  = "\u0A1B";
Gurmukhi.codePoints.letter_JA   = "\u0A1C";
Gurmukhi.codePoints.letter_JHA  = "\u0A1D";
Gurmukhi.codePoints.letter_NYA  = "\u0A1E";
Gurmukhi.codePoints.letter_TTA  = "\u0A1F";
Gurmukhi.codePoints.letter_TTHA = "\u0A20";
Gurmukhi.codePoints.letter_DDA  = "\u0A21";
Gurmukhi.codePoints.letter_DDHA = "\u0A22";
Gurmukhi.codePoints.letter_NNA  = "\u0A23";
Gurmukhi.codePoints.letter_TA   = "\u0A24";
Gurmukhi.codePoints.letter_THA  = "\u0A25";
Gurmukhi.codePoints.letter_DA   = "\u0A26";
Gurmukhi.codePoints.letter_DHA  = "\u0A27";
Gurmukhi.codePoints.letter_NA   = "\u0A28";
Gurmukhi.codePoints.letter_PA   = "\u0A2A";
Gurmukhi.codePoints.letter_PHA  = "\u0A2B";
Gurmukhi.codePoints.letter_BA   = "\u0A2C";
Gurmukhi.codePoints.letter_BHA  = "\u0A2D";
Gurmukhi.codePoints.letter_MA   = "\u0A2E";
Gurmukhi.codePoints.letter_YA   = "\u0A2F";
Gurmukhi.codePoints.letter_RA   = "\u0A30";
Gurmukhi.codePoints.letter_LA   = "\u0A32";
Gurmukhi.codePoints.letter_LLA  = "\u0A33";
Gurmukhi.codePoints.letter_VA   = "\u0A35";
Gurmukhi.codePoints.letter_SHA  = "\u0A36";
Gurmukhi.codePoints.letter_SA   = "\u0A38";
Gurmukhi.codePoints.letter_HA   = "\u0A39";

Gurmukhi.codePoints.letter_KHHA = "\u0A59";
Gurmukhi.codePoints.letter_GHHA = "\u0A5A";
Gurmukhi.codePoints.letter_ZA   = "\u0A5B";
Gurmukhi.codePoints.letter_RRA  = "\u0A5C";
Gurmukhi.codePoints.letter_FA   = "\u0A5E";

//Dependent Vowel Signs
Gurmukhi.codePoints.vowelsn_AA  = "\u0A3E";
Gurmukhi.codePoints.vowelsn_I   = "\u0A3F";
Gurmukhi.codePoints.vowelsn_II  = "\u0A40";
Gurmukhi.codePoints.vowelsn_U   = "\u0A41";
Gurmukhi.codePoints.vowelsn_UU  = "\u0A42";
Gurmukhi.codePoints.vowelsn_EE  = "\u0A47";
Gurmukhi.codePoints.vowelsn_AI  = "\u0A48";
Gurmukhi.codePoints.vowelsn_OO  = "\u0A4B";
Gurmukhi.codePoints.vowelsn_AU  = "\u0A4C";

//Miscellaneous Signs
Gurmukhi.codePoints.misc_NUKTA   = "\u0A3C";
Gurmukhi.codePoints.misc_VIRAMA   = "\u0A4D";

Gurmukhi.codePoints.misc_TIPPI    = "\u0A70";
Gurmukhi.codePoints.misc_ADDAK    = "\u0A71";
Gurmukhi.codePoints.misc_IRI      = "\u0A72";
Gurmukhi.codePoints.misc_URA      = "\u0A73";
Gurmukhi.codePoints.misc_EKONKAR = "\u0A74";
Gurmukhi.codePoints.misc_KHANDA = "\u262C";

//Digits
Gurmukhi.codePoints.digit_ZERO  = "\u0A66";
Gurmukhi.codePoints.digit_ONE   = "\u0A67";
Gurmukhi.codePoints.digit_TWO   = "\u0A68";
Gurmukhi.codePoints.digit_THREE = "\u0A69";
Gurmukhi.codePoints.digit_FOUR  = "\u0A6A";
Gurmukhi.codePoints.digit_FIVE  = "\u0A6B";
Gurmukhi.codePoints.digit_SIX   = "\u0A6C";
Gurmukhi.codePoints.digit_SEVEN = "\u0A6D";
Gurmukhi.codePoints.digit_EIGHT = "\u0A6E";
Gurmukhi.codePoints.digit_NINE  = "\u0A6F";

Gurmukhi.fromPadma = new Object();

Gurmukhi.fromPadma[Padma.anusvara]    = Gurmukhi.codePoints.anusvara;
Gurmukhi.fromPadma[Padma.visarga]     = Gurmukhi.codePoints.visarga;
Gurmukhi.fromPadma[Padma.candrabindu] = Gurmukhi.codePoints.candrabindu;
Gurmukhi.fromPadma[Padma.halant]      = Gurmukhi.codePoints.misc_VIRAMA;
Gurmukhi.fromPadma[Padma.udAtta]      = Unicode_Shared.UDATTA;
Gurmukhi.fromPadma[Padma.anudAtta]    = Unicode_Shared.ANUDATTA;
Gurmukhi.fromPadma[Padma.svarita]     = Unicode_Shared.SVARITA;
Gurmukhi.fromPadma[Padma.danda]       = Unicode_Shared.DANDA;
Gurmukhi.fromPadma[Padma.ddanda]      = Unicode_Shared.DDANDA;
Gurmukhi.fromPadma[Padma.nukta]       = Gurmukhi.codePoints.misc_NUKTA;

//digits
Gurmukhi.fromPadma[Padma.digit_ZERO]  = Gurmukhi.codePoints.digit_ZERO;
Gurmukhi.fromPadma[Padma.digit_ONE]   = Gurmukhi.codePoints.digit_ONE;
Gurmukhi.fromPadma[Padma.digit_TWO]   = Gurmukhi.codePoints.digit_TWO;
Gurmukhi.fromPadma[Padma.digit_THREE] = Gurmukhi.codePoints.digit_THREE;
Gurmukhi.fromPadma[Padma.digit_FOUR]  = Gurmukhi.codePoints.digit_FOUR;
Gurmukhi.fromPadma[Padma.digit_FIVE]  = Gurmukhi.codePoints.digit_FIVE;
Gurmukhi.fromPadma[Padma.digit_SIX]   = Gurmukhi.codePoints.digit_SIX;
Gurmukhi.fromPadma[Padma.digit_SEVEN] = Gurmukhi.codePoints.digit_SEVEN;
Gurmukhi.fromPadma[Padma.digit_EIGHT] = Gurmukhi.codePoints.digit_EIGHT;
Gurmukhi.fromPadma[Padma.digit_NINE]  = Gurmukhi.codePoints.digit_NINE;

//Vowels
Gurmukhi.fromPadma[Padma.vowel_A]     = Gurmukhi.codePoints.letter_A;
Gurmukhi.fromPadma[Padma.vowel_AA]    = Gurmukhi.codePoints.letter_AA;
Gurmukhi.fromPadma[Padma.vowel_I]     = Gurmukhi.codePoints.letter_I;
Gurmukhi.fromPadma[Padma.vowel_II]    = Gurmukhi.codePoints.letter_II;
Gurmukhi.fromPadma[Padma.vowel_U]     = Gurmukhi.codePoints.letter_U;
Gurmukhi.fromPadma[Padma.vowel_UU]    = Gurmukhi.codePoints.letter_UU;
Gurmukhi.fromPadma[Padma.vowel_EE]    = Gurmukhi.codePoints.letter_EE;
Gurmukhi.fromPadma[Padma.vowel_AI]    = Gurmukhi.codePoints.letter_AI;
Gurmukhi.fromPadma[Padma.vowel_OO]    = Gurmukhi.codePoints.letter_OO;
Gurmukhi.fromPadma[Padma.vowel_AU]    = Gurmukhi.codePoints.letter_AU;

//Consonants
Gurmukhi.fromPadma[Padma.consnt_KA]   = Gurmukhi.codePoints.letter_KA;
Gurmukhi.fromPadma[Padma.consnt_KHA]  = Gurmukhi.codePoints.letter_KHA;
Gurmukhi.fromPadma[Padma.consnt_GA]   = Gurmukhi.codePoints.letter_GA;
Gurmukhi.fromPadma[Padma.consnt_GHA]  = Gurmukhi.codePoints.letter_GHA;
Gurmukhi.fromPadma[Padma.consnt_NGA]  = Gurmukhi.codePoints.letter_NGA;
Gurmukhi.fromPadma[Padma.consnt_CA]   = Gurmukhi.codePoints.letter_CA;
Gurmukhi.fromPadma[Padma.consnt_CHA]  = Gurmukhi.codePoints.letter_CHA;
Gurmukhi.fromPadma[Padma.consnt_JA]   = Gurmukhi.codePoints.letter_JA;
Gurmukhi.fromPadma[Padma.consnt_JHA]  = Gurmukhi.codePoints.letter_JHA;
Gurmukhi.fromPadma[Padma.consnt_NYA]  = Gurmukhi.codePoints.letter_NYA;
Gurmukhi.fromPadma[Padma.consnt_TTA]  = Gurmukhi.codePoints.letter_TTA;
Gurmukhi.fromPadma[Padma.consnt_TTHA] = Gurmukhi.codePoints.letter_TTHA;
Gurmukhi.fromPadma[Padma.consnt_DDA]  = Gurmukhi.codePoints.letter_DDA;
Gurmukhi.fromPadma[Padma.consnt_DDHA] = Gurmukhi.codePoints.letter_DDHA;
Gurmukhi.fromPadma[Padma.consnt_NNA]  = Gurmukhi.codePoints.letter_NNA;
Gurmukhi.fromPadma[Padma.consnt_TA]   = Gurmukhi.codePoints.letter_TA;
Gurmukhi.fromPadma[Padma.consnt_THA]  = Gurmukhi.codePoints.letter_THA;
Gurmukhi.fromPadma[Padma.consnt_DA]   = Gurmukhi.codePoints.letter_DA;
Gurmukhi.fromPadma[Padma.consnt_DHA]  = Gurmukhi.codePoints.letter_DHA;
Gurmukhi.fromPadma[Padma.consnt_NA]   = Gurmukhi.codePoints.letter_NA;
Gurmukhi.fromPadma[Padma.consnt_PA]   = Gurmukhi.codePoints.letter_PA;
Gurmukhi.fromPadma[Padma.consnt_PHA]  = Gurmukhi.codePoints.letter_PHA;
Gurmukhi.fromPadma[Padma.consnt_BA]   = Gurmukhi.codePoints.letter_BA;
Gurmukhi.fromPadma[Padma.consnt_BHA]  = Gurmukhi.codePoints.letter_BHA;
Gurmukhi.fromPadma[Padma.consnt_MA]   = Gurmukhi.codePoints.letter_MA;
Gurmukhi.fromPadma[Padma.consnt_YA]   = Gurmukhi.codePoints.letter_YA;
Gurmukhi.fromPadma[Padma.consnt_RA]   = Gurmukhi.codePoints.letter_RA;
Gurmukhi.fromPadma[Padma.consnt_LA]   = Gurmukhi.codePoints.letter_LA;
Gurmukhi.fromPadma[Padma.consnt_LLA]  = Gurmukhi.codePoints.letter_LLA;
Gurmukhi.fromPadma[Padma.consnt_VA]   = Gurmukhi.codePoints.letter_VA;
Gurmukhi.fromPadma[Padma.consnt_SHA]  = Gurmukhi.codePoints.letter_SHA;
Gurmukhi.fromPadma[Padma.consnt_SA]   = Gurmukhi.codePoints.letter_SA;
Gurmukhi.fromPadma[Padma.consnt_HA]   = Gurmukhi.codePoints.letter_HA;

Gurmukhi.fromPadma[Padma.consnt_KHHA] = Gurmukhi.codePoints.letter_KHHA;
Gurmukhi.fromPadma[Padma.consnt_GHHA] = Gurmukhi.codePoints.letter_GHHA;
Gurmukhi.fromPadma[Padma.consnt_ZA]   = Gurmukhi.codePoints.letter_ZA;
Gurmukhi.fromPadma[Padma.consnt_RRA]  = Gurmukhi.codePoints.letter_RRA;
Gurmukhi.fromPadma[Padma.consnt_FA]   = Gurmukhi.codePoints.letter_FA;

Gurmukhi.fromPadma[Padma.tippi]       = Gurmukhi.codePoints.misc_TIPPI;
Gurmukhi.fromPadma[Padma.addak]       = Gurmukhi.codePoints.misc_ADDAK;
Gurmukhi.fromPadma[Padma.ekonkar]     = Gurmukhi.codePoints.misc_EKONKAR;

//Dependent Vowel Signs
Gurmukhi.fromPadma[Padma.vowelsn_AA]  = Gurmukhi.codePoints.vowelsn_AA;
Gurmukhi.fromPadma[Padma.vowelsn_I]   = Gurmukhi.codePoints.vowelsn_I;
Gurmukhi.fromPadma[Padma.vowelsn_II]  = Gurmukhi.codePoints.vowelsn_II;
Gurmukhi.fromPadma[Padma.vowelsn_U]   = Gurmukhi.codePoints.vowelsn_U;
Gurmukhi.fromPadma[Padma.vowelsn_UU]  = Gurmukhi.codePoints.vowelsn_UU;
Gurmukhi.fromPadma[Padma.vowelsn_EE]  = Gurmukhi.codePoints.vowelsn_EE;
Gurmukhi.fromPadma[Padma.vowelsn_AI]  = Gurmukhi.codePoints.vowelsn_AI;
Gurmukhi.fromPadma[Padma.vowelsn_OO]  = Gurmukhi.codePoints.vowelsn_OO;
Gurmukhi.fromPadma[Padma.vowelsn_AU]  = Gurmukhi.codePoints.vowelsn_AU;

//The following are not directly present in Gurmukhi - equivalent transliteration
Gurmukhi.fromPadma[Padma.vowel_SHT_A]   = Gurmukhi.codePoints.letter_A;
Gurmukhi.fromPadma[Padma.vowel_CDR_E]   = Gurmukhi.codePoints.letter_EE;
Gurmukhi.fromPadma[Padma.vowel_E]       = Gurmukhi.codePoints.letter_EE;
Gurmukhi.fromPadma[Padma.vowel_CDR_O]   = Gurmukhi.codePoints.letter_OO;
Gurmukhi.fromPadma[Padma.vowel_O]       = Gurmukhi.codePoints.letter_OO;
Gurmukhi.fromPadma[Padma.consnt_NNNA]   = Gurmukhi.codePoints.letter_NA;
Gurmukhi.fromPadma[Padma.consnt_SSA]    = Gurmukhi.codePoints.letter_SA;
Gurmukhi.fromPadma[Padma.vowelsn_CDR_E] = Gurmukhi.codePoints.vowelsn_EE;
Gurmukhi.fromPadma[Padma.vowelsn_E]     = Gurmukhi.codePoints.vowelsn_EE;
Gurmukhi.fromPadma[Padma.vowelsn_CDR_O] = Gurmukhi.codePoints.vowelsn_OO;
Gurmukhi.fromPadma[Padma.vowelsn_O]     = Gurmukhi.codePoints.vowelsn_OO;
