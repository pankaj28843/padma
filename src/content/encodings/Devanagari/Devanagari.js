// $Id: Devanagari.js,v 1.6 2012/01/22 04:12:49 vnagarjuna Exp $ -->

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

function Devanagari()
{
}

//Generate map entries for vattulu and half-forms
Devanagari.initialize = function () {
    for(var i = Padma.vattu_START; i <= Padma.vattu_END; i++)
        Devanagari.fromPadma[String.fromCharCode(i)] = Devanagari.codePoints.misc_VIRAMA + Devanagari.fromPadma[Padma.fast_baseFormFromVattu(i)];
    for(i = Padma.half_START; i <= Padma.half_END; i++)
        Devanagari.fromPadma[String.fromCharCode(i)] = Devanagari.fromPadma[Padma.fast_baseFormFromHalfForm(i)] + Devanagari.codePoints.misc_VIRAMA;
}

//Unicode Codepoints
Devanagari.codePoints = new Object();

Devanagari.codePoints.candrabindu  = "\u0901";
//Vowel Modifiers
Devanagari.codePoints.anusvara     = "\u0902";  //sunna
Devanagari.codePoints.visarga      = "\u0903";

//Independent Vowels
Devanagari.codePoints.letter_SHT_A = "\u0904";
Devanagari.codePoints.letter_A     = "\u0905";
Devanagari.codePoints.letter_AA    = "\u0906";
Devanagari.codePoints.letter_I     = "\u0907";
Devanagari.codePoints.letter_II    = "\u0908";
Devanagari.codePoints.letter_U     = "\u0909";
Devanagari.codePoints.letter_UU    = "\u090A";
Devanagari.codePoints.letter_R     = "\u090B";   //vocalic R
Devanagari.codePoints.letter_RR    = "\u0960";   //vocalic R
Devanagari.codePoints.letter_L     = "\u090C";   //vocalic L
Devanagari.codePoints.letter_LL    = "\u0961";   //vocalic L
Devanagari.codePoints.letter_CDR_E = "\u090D";
Devanagari.codePoints.letter_E     = "\u090E";
Devanagari.codePoints.letter_EE    = "\u090F";
Devanagari.codePoints.letter_AI    = "\u0910";
Devanagari.codePoints.letter_CDR_O = "\u0911";
Devanagari.codePoints.letter_O     = "\u0912";
Devanagari.codePoints.letter_OO    = "\u0913";
Devanagari.codePoints.letter_AU    = "\u0914";

//Consonants
Devanagari.codePoints.letter_KA   = "\u0915";
Devanagari.codePoints.letter_KHA  = "\u0916";
Devanagari.codePoints.letter_GA   = "\u0917";
Devanagari.codePoints.letter_GHA  = "\u0918";
Devanagari.codePoints.letter_NGA  = "\u0919";
Devanagari.codePoints.letter_CA   = "\u091A";
Devanagari.codePoints.letter_CHA  = "\u091B";
Devanagari.codePoints.letter_JA   = "\u091C";
Devanagari.codePoints.letter_JHA  = "\u091D";
Devanagari.codePoints.letter_NYA  = "\u091E";
Devanagari.codePoints.letter_TTA  = "\u091F";
Devanagari.codePoints.letter_TTHA = "\u0920";
Devanagari.codePoints.letter_DDA  = "\u0921";
Devanagari.codePoints.letter_DDHA = "\u0922";
Devanagari.codePoints.letter_NNA  = "\u0923";
Devanagari.codePoints.letter_TA   = "\u0924";
Devanagari.codePoints.letter_THA  = "\u0925";
Devanagari.codePoints.letter_DA   = "\u0926";
Devanagari.codePoints.letter_DHA  = "\u0927";
Devanagari.codePoints.letter_NA   = "\u0928";
Devanagari.codePoints.letter_NNNA = "\u0929";
Devanagari.codePoints.letter_PA   = "\u092A";
Devanagari.codePoints.letter_PHA  = "\u092B";
Devanagari.codePoints.letter_BA   = "\u092C";
Devanagari.codePoints.letter_BHA  = "\u092D";
Devanagari.codePoints.letter_MA   = "\u092E";
Devanagari.codePoints.letter_YA   = "\u092F";
Devanagari.codePoints.letter_RA   = "\u0930";
Devanagari.codePoints.letter_RRA  = "\u0931";
Devanagari.codePoints.letter_LA   = "\u0932";
Devanagari.codePoints.letter_LLA  = "\u0933";
Devanagari.codePoints.letter_ZHA  = "\u0934";  //LLLA
Devanagari.codePoints.letter_VA   = "\u0935";
Devanagari.codePoints.letter_SHA  = "\u0936";
Devanagari.codePoints.letter_SSA  = "\u0937";
Devanagari.codePoints.letter_SA   = "\u0938";
Devanagari.codePoints.letter_HA   = "\u0939";
Devanagari.codePoints.letter_QA   = "\u0958";
Devanagari.codePoints.letter_KHHA = "\u0959";
Devanagari.codePoints.letter_GHHA = "\u095A";
Devanagari.codePoints.letter_ZA   = "\u095B";
Devanagari.codePoints.letter_DDDHA= "\u095C";
Devanagari.codePoints.letter_RHA  = "\u095D";
Devanagari.codePoints.letter_FA   = "\u095E";
Devanagari.codePoints.letter_YYA  = "\u095F";
Devanagari.codePoints.letter_GGA  = "\u097B";   //Sindhi
Devanagari.codePoints.letter_JJA  = "\u097C";   //Sindhi
Devanagari.codePoints.letter_DDDA = "\u097E";   //Sindhi
Devanagari.codePoints.letter_BBA  = "\u097F";   //Sindhi
Devanagari.codePoints.GLOTTALSTOP = "\u097D";

//Dependent Vowel Signs
Devanagari.codePoints.vowelsn_AA    = "\u093E";
Devanagari.codePoints.vowelsn_I     = "\u093F";
Devanagari.codePoints.vowelsn_II    = "\u0940";
Devanagari.codePoints.vowelsn_U     = "\u0941";
Devanagari.codePoints.vowelsn_UU    = "\u0942";
Devanagari.codePoints.vowelsn_R     = "\u0943";
Devanagari.codePoints.vowelsn_RR    = "\u0944";
Devanagari.codePoints.vowelsn_L     = "\u0962";
Devanagari.codePoints.vowelsn_LL    = "\u0963";
Devanagari.codePoints.vowelsn_CDR_E = "\u0945";
Devanagari.codePoints.vowelsn_E     = "\u0946";
Devanagari.codePoints.vowelsn_EE    = "\u0947";
Devanagari.codePoints.vowelsn_AI    = "\u0948";
Devanagari.codePoints.vowelsn_CDR_O = "\u0949";
Devanagari.codePoints.vowelsn_O     = "\u094A";
Devanagari.codePoints.vowelsn_OO    = "\u094B";
Devanagari.codePoints.vowelsn_AU    = "\u094C";

//Miscellaneous Signs
Devanagari.codePoints.misc_NUKTA    = "\u093C";
Devanagari.codePoints.misc_AVAGRAHA = "\u093D";
Devanagari.codePoints.misc_VIRAMA   = "\u094D";   //halant
Devanagari.codePoints.misc_OM       = "\u0950";
Devanagari.codePoints.misc_ABBREV   = "\u0970";

//Digits
Devanagari.codePoints.digit_ZERO  = "\u0966";
Devanagari.codePoints.digit_ONE   = "\u0967";
Devanagari.codePoints.digit_TWO   = "\u0968";
Devanagari.codePoints.digit_THREE = "\u0969";
Devanagari.codePoints.digit_FOUR  = "\u096A";
Devanagari.codePoints.digit_FIVE  = "\u096B";
Devanagari.codePoints.digit_SIX   = "\u096C";
Devanagari.codePoints.digit_SEVEN = "\u096D";
Devanagari.codePoints.digit_EIGHT = "\u096E";
Devanagari.codePoints.digit_NINE  = "\u096F";

Devanagari.fromPadma = new Object();

Devanagari.fromPadma[Padma.anusvara]    = Devanagari.codePoints.anusvara;
Devanagari.fromPadma[Padma.visarga]     = Devanagari.codePoints.visarga;
Devanagari.fromPadma[Padma.candrabindu] = Devanagari.codePoints.candrabindu;
Devanagari.fromPadma[Padma.halant]      = Devanagari.codePoints.misc_VIRAMA;
Devanagari.fromPadma[Padma.chillu]      = Devanagari.codePoints.misc_VIRAMA + Unicode_Shared.ZWJ;
Devanagari.fromPadma[Padma.chillu_C2]   = Unicode_Shared.ZWJ;
Devanagari.fromPadma[Padma.syllbreak]   = Devanagari.codePoints.misc_VIRAMA + Unicode_Shared.ZWNJ;
Devanagari.fromPadma[Padma.avagraha]    = Devanagari.codePoints.misc_AVAGRAHA;
Devanagari.fromPadma[Padma.udAtta]      = Unicode_Shared.UDATTA;
Devanagari.fromPadma[Padma.anudAtta]    = Unicode_Shared.ANUDATTA;
Devanagari.fromPadma[Padma.svarita]     = Unicode_Shared.SVARITA;
Devanagari.fromPadma[Padma.danda]       = Unicode_Shared.DANDA;
Devanagari.fromPadma[Padma.ddanda]      = Unicode_Shared.DDANDA;
Devanagari.fromPadma[Padma.om]          = Devanagari.codePoints.misc_OM;
Devanagari.fromPadma[Padma.abbrev]      = Devanagari.codePoints.misc_ABBREV;
Devanagari.fromPadma[Padma.nukta]       = Devanagari.codePoints.misc_NUKTA;

//digits
Devanagari.fromPadma[Padma.digit_ZERO]  = Devanagari.codePoints.digit_ZERO;
Devanagari.fromPadma[Padma.digit_ONE]   = Devanagari.codePoints.digit_ONE;
Devanagari.fromPadma[Padma.digit_TWO]   = Devanagari.codePoints.digit_TWO;
Devanagari.fromPadma[Padma.digit_THREE] = Devanagari.codePoints.digit_THREE;
Devanagari.fromPadma[Padma.digit_FOUR]  = Devanagari.codePoints.digit_FOUR;
Devanagari.fromPadma[Padma.digit_FIVE]  = Devanagari.codePoints.digit_FIVE;
Devanagari.fromPadma[Padma.digit_SIX]   = Devanagari.codePoints.digit_SIX;
Devanagari.fromPadma[Padma.digit_SEVEN] = Devanagari.codePoints.digit_SEVEN;
Devanagari.fromPadma[Padma.digit_EIGHT] = Devanagari.codePoints.digit_EIGHT;
Devanagari.fromPadma[Padma.digit_NINE]  = Devanagari.codePoints.digit_NINE;

//Vowels
Devanagari.fromPadma[Padma.vowel_SHT_A] = Devanagari.codePoints.letter_SHT_A;
Devanagari.fromPadma[Padma.vowel_A]     = Devanagari.codePoints.letter_A;
Devanagari.fromPadma[Padma.vowel_AA]    = Devanagari.codePoints.letter_AA;
Devanagari.fromPadma[Padma.vowel_I]     = Devanagari.codePoints.letter_I;
Devanagari.fromPadma[Padma.vowel_II]    = Devanagari.codePoints.letter_II;
Devanagari.fromPadma[Padma.vowel_U]     = Devanagari.codePoints.letter_U;
Devanagari.fromPadma[Padma.vowel_UU]    = Devanagari.codePoints.letter_UU;
Devanagari.fromPadma[Padma.vowel_R]     = Devanagari.codePoints.letter_R;
Devanagari.fromPadma[Padma.vowel_RR]    = Devanagari.codePoints.letter_RR;
Devanagari.fromPadma[Padma.vowel_L]     = Devanagari.codePoints.letter_L;
Devanagari.fromPadma[Padma.vowel_LL]    = Devanagari.codePoints.letter_LL;
Devanagari.fromPadma[Padma.vowel_CDR_E] = Devanagari.codePoints.letter_CDR_E;
Devanagari.fromPadma[Padma.vowel_E]     = Devanagari.codePoints.letter_E;
Devanagari.fromPadma[Padma.vowel_EE]    = Devanagari.codePoints.letter_EE;
Devanagari.fromPadma[Padma.vowel_AI]    = Devanagari.codePoints.letter_AI;
Devanagari.fromPadma[Padma.vowel_CDR_O] = Devanagari.codePoints.letter_CDR_O;
Devanagari.fromPadma[Padma.vowel_O]     = Devanagari.codePoints.letter_O;
Devanagari.fromPadma[Padma.vowel_OO]    = Devanagari.codePoints.letter_OO;
Devanagari.fromPadma[Padma.vowel_AU]    = Devanagari.codePoints.letter_AU;

//Consonants
Devanagari.fromPadma[Padma.consnt_KA]   = Devanagari.codePoints.letter_KA;
Devanagari.fromPadma[Padma.consnt_KHA]  = Devanagari.codePoints.letter_KHA;
Devanagari.fromPadma[Padma.consnt_GA]   = Devanagari.codePoints.letter_GA;
Devanagari.fromPadma[Padma.consnt_GHA]  = Devanagari.codePoints.letter_GHA;
Devanagari.fromPadma[Padma.consnt_NGA]  = Devanagari.codePoints.letter_NGA;
Devanagari.fromPadma[Padma.consnt_CA]   = Devanagari.codePoints.letter_CA;
Devanagari.fromPadma[Padma.consnt_CHA]  = Devanagari.codePoints.letter_CHA;
Devanagari.fromPadma[Padma.consnt_JA]   = Devanagari.codePoints.letter_JA;
Devanagari.fromPadma[Padma.consnt_JHA]  = Devanagari.codePoints.letter_JHA;
Devanagari.fromPadma[Padma.consnt_NYA]  = Devanagari.codePoints.letter_NYA;
Devanagari.fromPadma[Padma.consnt_TTA]  = Devanagari.codePoints.letter_TTA;
Devanagari.fromPadma[Padma.consnt_TTHA] = Devanagari.codePoints.letter_TTHA;
Devanagari.fromPadma[Padma.consnt_DDA]  = Devanagari.codePoints.letter_DDA;
Devanagari.fromPadma[Padma.consnt_DDHA] = Devanagari.codePoints.letter_DDHA;
Devanagari.fromPadma[Padma.consnt_NNA]  = Devanagari.codePoints.letter_NNA;
Devanagari.fromPadma[Padma.consnt_NNNA] = Devanagari.codePoints.letter_NNNA;
Devanagari.fromPadma[Padma.consnt_TA]   = Devanagari.codePoints.letter_TA;
Devanagari.fromPadma[Padma.consnt_THA]  = Devanagari.codePoints.letter_THA;
Devanagari.fromPadma[Padma.consnt_DA]   = Devanagari.codePoints.letter_DA;
Devanagari.fromPadma[Padma.consnt_DHA]  = Devanagari.codePoints.letter_DHA;
Devanagari.fromPadma[Padma.consnt_NA]   = Devanagari.codePoints.letter_NA;
Devanagari.fromPadma[Padma.consnt_PA]   = Devanagari.codePoints.letter_PA;
Devanagari.fromPadma[Padma.consnt_PHA]  = Devanagari.codePoints.letter_PHA;
Devanagari.fromPadma[Padma.consnt_BA]   = Devanagari.codePoints.letter_BA;
Devanagari.fromPadma[Padma.consnt_BHA]  = Devanagari.codePoints.letter_BHA;
Devanagari.fromPadma[Padma.consnt_MA]   = Devanagari.codePoints.letter_MA;
Devanagari.fromPadma[Padma.consnt_YA]   = Devanagari.codePoints.letter_YA;
Devanagari.fromPadma[Padma.consnt_RA]   = Devanagari.codePoints.letter_RA;
Devanagari.fromPadma[Padma.consnt_LA]   = Devanagari.codePoints.letter_LA;
Devanagari.fromPadma[Padma.consnt_VA]   = Devanagari.codePoints.letter_VA;
Devanagari.fromPadma[Padma.consnt_SHA]  = Devanagari.codePoints.letter_SHA;
Devanagari.fromPadma[Padma.consnt_SSA]  = Devanagari.codePoints.letter_SSA;
Devanagari.fromPadma[Padma.consnt_SA]   = Devanagari.codePoints.letter_SA;
Devanagari.fromPadma[Padma.consnt_HA]   = Devanagari.codePoints.letter_HA;
Devanagari.fromPadma[Padma.consnt_LLA]  = Devanagari.codePoints.letter_LLA;
Devanagari.fromPadma[Padma.consnt_ZHA]  = Devanagari.codePoints.letter_ZHA;
Devanagari.fromPadma[Padma.consnt_RRA]  = Devanagari.codePoints.letter_RRA;
Devanagari.fromPadma[Padma.consnt_QA]   = Devanagari.codePoints.letter_QA;
Devanagari.fromPadma[Padma.consnt_KHHA] = Devanagari.codePoints.letter_KHHA;
Devanagari.fromPadma[Padma.consnt_GHHA] = Devanagari.codePoints.letter_GHHA;
Devanagari.fromPadma[Padma.consnt_ZA]   = Devanagari.codePoints.letter_ZA;
Devanagari.fromPadma[Padma.consnt_DDDHA]= Devanagari.codePoints.letter_DDDHA;
Devanagari.fromPadma[Padma.consnt_RHA]  = Devanagari.codePoints.letter_RHA;
Devanagari.fromPadma[Padma.consnt_FA]   = Devanagari.codePoints.letter_FA;
Devanagari.fromPadma[Padma.consnt_YYA]  = Devanagari.codePoints.letter_YYA;
Devanagari.fromPadma[Padma.consnt_GGA]  = Devanagari.codePoints.letter_GGA;
Devanagari.fromPadma[Padma.consnt_JJA]  = Devanagari.codePoints.letter_JJA;
Devanagari.fromPadma[Padma.consnt_DDDA] = Devanagari.codePoints.letter_DDDA;
Devanagari.fromPadma[Padma.consnt_BBA]  = Devanagari.codePoints.letter_BBA;

//Gunimtaalu
Devanagari.fromPadma[Padma.vowelsn_AA]  = Devanagari.codePoints.vowelsn_AA;
Devanagari.fromPadma[Padma.vowelsn_I]   = Devanagari.codePoints.vowelsn_I;
Devanagari.fromPadma[Padma.vowelsn_II]  = Devanagari.codePoints.vowelsn_II;
Devanagari.fromPadma[Padma.vowelsn_U]   = Devanagari.codePoints.vowelsn_U;
Devanagari.fromPadma[Padma.vowelsn_UU]  = Devanagari.codePoints.vowelsn_UU;
Devanagari.fromPadma[Padma.vowelsn_R]   = Devanagari.codePoints.vowelsn_R;
Devanagari.fromPadma[Padma.vowelsn_RR]  = Devanagari.codePoints.vowelsn_RR;
Devanagari.fromPadma[Padma.vowelsn_CDR_E] = Devanagari.codePoints.vowelsn_CDR_E;
Devanagari.fromPadma[Padma.vowelsn_E]   = Devanagari.codePoints.vowelsn_E;
Devanagari.fromPadma[Padma.vowelsn_EE]  = Devanagari.codePoints.vowelsn_EE;
Devanagari.fromPadma[Padma.vowelsn_AI]  = Devanagari.codePoints.vowelsn_AI;
Devanagari.fromPadma[Padma.vowelsn_CDR_O] = Devanagari.codePoints.vowelsn_CDR_O;
Devanagari.fromPadma[Padma.vowelsn_O]   = Devanagari.codePoints.vowelsn_O;
Devanagari.fromPadma[Padma.vowelsn_OO]  = Devanagari.codePoints.vowelsn_OO;
Devanagari.fromPadma[Padma.vowelsn_AU]  = Devanagari.codePoints.vowelsn_AU;
