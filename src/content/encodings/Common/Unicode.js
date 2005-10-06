// $Id: Unicode.js,v 1.3 2005/10/06 16:26:32 vnagarjuna Exp $ -->

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

//Unicode
function Unicode() 
{
    this.lang = Padma.lang_TELUGU;
}

Unicode.maxLookupLen = 2;

//Common to all languages
Unicode.common_NUKTA    = "\u093C";
Unicode.common_AVAGRAHA = "\u093D";
Unicode.common_OM       = "\u0950";
Unicode.common_UDATTA   = "\u0951";
Unicode.common_ANUDATTA = "\u0952";
Unicode.common_SVARITA  = "\u0951";
Unicode.common_DANDA    = "\u0964";
Unicode.common_DDANDA   = "\u0965";

//Code Points
Unicode.codePoints = new Array();

Unicode.codePoints[Padma.lang_TELUGU]     = new Object();
Unicode.codePoints[Padma.lang_MALAYALAM]  = new Object();
Unicode.codePoints[Padma.lang_TAMIL]      = new Object();
Unicode.codePoints[Padma.lang_DEVANAGARI] = new Object();

//TELUGU
Unicode.codePoints[Padma.lang_TELUGU].candrabindu = "\u0C01";
//Vowel Modifiers
Unicode.codePoints[Padma.lang_TELUGU].anusvara    = "\u0C02";  //sunna
Unicode.codePoints[Padma.lang_TELUGU].visarga     = "\u0C03";

//Independent Vowels
Unicode.codePoints[Padma.lang_TELUGU].letter_A    = "\u0C05";
Unicode.codePoints[Padma.lang_TELUGU].letter_AA   = "\u0C06";
Unicode.codePoints[Padma.lang_TELUGU].letter_I    = "\u0C07";
Unicode.codePoints[Padma.lang_TELUGU].letter_II   = "\u0C08";
Unicode.codePoints[Padma.lang_TELUGU].letter_U    = "\u0C09";
Unicode.codePoints[Padma.lang_TELUGU].letter_UU   = "\u0C0A";
Unicode.codePoints[Padma.lang_TELUGU].letter_R    = "\u0C0B";   //vocalic R
Unicode.codePoints[Padma.lang_TELUGU].letter_RR   = "\u0C60";   //vocalic R
Unicode.codePoints[Padma.lang_TELUGU].letter_L    = "\u0C0C";   //vocalic L
Unicode.codePoints[Padma.lang_TELUGU].letter_LL   = "\u0C61";   //vocalic L
Unicode.codePoints[Padma.lang_TELUGU].letter_E    = "\u0C0E";
Unicode.codePoints[Padma.lang_TELUGU].letter_EE   = "\u0C0F";
Unicode.codePoints[Padma.lang_TELUGU].letter_AI   = "\u0C10";
Unicode.codePoints[Padma.lang_TELUGU].letter_O    = "\u0C12";
Unicode.codePoints[Padma.lang_TELUGU].letter_OO   = "\u0C13";
Unicode.codePoints[Padma.lang_TELUGU].letter_AU   = "\u0C14";

//Consonants
Unicode.codePoints[Padma.lang_TELUGU].letter_KA   = "\u0C15";
Unicode.codePoints[Padma.lang_TELUGU].letter_KHA  = "\u0C16";
Unicode.codePoints[Padma.lang_TELUGU].letter_GA   = "\u0C17";
Unicode.codePoints[Padma.lang_TELUGU].letter_GHA  = "\u0C18";
Unicode.codePoints[Padma.lang_TELUGU].letter_NGA  = "\u0C19";
Unicode.codePoints[Padma.lang_TELUGU].letter_CA   = "\u0C1A";
Unicode.codePoints[Padma.lang_TELUGU].letter_CHA  = "\u0C1B";
Unicode.codePoints[Padma.lang_TELUGU].letter_JA   = "\u0C1C";
Unicode.codePoints[Padma.lang_TELUGU].letter_JHA  = "\u0C1D";
Unicode.codePoints[Padma.lang_TELUGU].letter_NYA  = "\u0C1E";
Unicode.codePoints[Padma.lang_TELUGU].letter_TTA  = "\u0C1F";
Unicode.codePoints[Padma.lang_TELUGU].letter_TTHA = "\u0C20";
Unicode.codePoints[Padma.lang_TELUGU].letter_DDA  = "\u0C21";
Unicode.codePoints[Padma.lang_TELUGU].letter_DDHA = "\u0C22";
Unicode.codePoints[Padma.lang_TELUGU].letter_NNA  = "\u0C23";
Unicode.codePoints[Padma.lang_TELUGU].letter_TA   = "\u0C24";
Unicode.codePoints[Padma.lang_TELUGU].letter_THA  = "\u0C25";
Unicode.codePoints[Padma.lang_TELUGU].letter_DA   = "\u0C26";
Unicode.codePoints[Padma.lang_TELUGU].letter_DHA  = "\u0C27";
Unicode.codePoints[Padma.lang_TELUGU].letter_NA   = "\u0C28";
Unicode.codePoints[Padma.lang_TELUGU].letter_PA   = "\u0C2A";
Unicode.codePoints[Padma.lang_TELUGU].letter_PHA  = "\u0C2B";
Unicode.codePoints[Padma.lang_TELUGU].letter_BA   = "\u0C2C";
Unicode.codePoints[Padma.lang_TELUGU].letter_BHA  = "\u0C2D";
Unicode.codePoints[Padma.lang_TELUGU].letter_MA   = "\u0C2E";
Unicode.codePoints[Padma.lang_TELUGU].letter_YA   = "\u0C2F";
Unicode.codePoints[Padma.lang_TELUGU].letter_RA   = "\u0C30";
Unicode.codePoints[Padma.lang_TELUGU].letter_RRA  = "\u0C31";
Unicode.codePoints[Padma.lang_TELUGU].letter_LA   = "\u0C32";
Unicode.codePoints[Padma.lang_TELUGU].letter_LLA  = "\u0C33";
Unicode.codePoints[Padma.lang_TELUGU].letter_VA   = "\u0C35";
Unicode.codePoints[Padma.lang_TELUGU].letter_SHA  = "\u0C36";
Unicode.codePoints[Padma.lang_TELUGU].letter_SSA  = "\u0C37";
Unicode.codePoints[Padma.lang_TELUGU].letter_SA   = "\u0C38";
Unicode.codePoints[Padma.lang_TELUGU].letter_HA   = "\u0C39";
Unicode.codePoints[Padma.lang_TELUGU].conjct_KSH  = "\u0C15\u0C4D\u0C37";
Unicode.codePoints[Padma.lang_TELUGU].letter_TCH  = "\u0C1A\u093C";    //not known to be correct
Unicode.codePoints[Padma.lang_TELUGU].letter_TJ   = "\u0C1C\u093C";    //not known to be correct
//Telugu does not have the Tamil 'zh' - use ll for transliteration purposes
Unicode.codePoints[Padma.lang_TELUGU].letter_ZHA  = Unicode.codePoints[Padma.lang_TELUGU].letter_LLA;

//Dependent Vowel Signs
Unicode.codePoints[Padma.lang_TELUGU].vowelsn_AA  = "\u0C3E";
Unicode.codePoints[Padma.lang_TELUGU].vowelsn_I   = "\u0C3F";
Unicode.codePoints[Padma.lang_TELUGU].vowelsn_II  = "\u0C40";
Unicode.codePoints[Padma.lang_TELUGU].vowelsn_U   = "\u0C41";
Unicode.codePoints[Padma.lang_TELUGU].vowelsn_UU  = "\u0C42";
Unicode.codePoints[Padma.lang_TELUGU].vowelsn_R   = "\u0C43";
Unicode.codePoints[Padma.lang_TELUGU].vowelsn_RR  = "\u0C44";
Unicode.codePoints[Padma.lang_TELUGU].vowelsn_E   = "\u0C46";
Unicode.codePoints[Padma.lang_TELUGU].vowelsn_EE  = "\u0C47";
Unicode.codePoints[Padma.lang_TELUGU].vowelsn_AI  = "\u0C48";   //this is the same as 0C46 followed by 0C56
Unicode.codePoints[Padma.lang_TELUGU].vowelsn_O   = "\u0C4A";
Unicode.codePoints[Padma.lang_TELUGU].vowelsn_OO  = "\u0C4B";
Unicode.codePoints[Padma.lang_TELUGU].vowelsn_AU  = "\u0C4C";

//Miscellaneous Signs
Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA   = "\u0C4D";   //halant
Unicode.codePoints[Padma.lang_TELUGU].misc_LENGTH   = "\u0C55";
Unicode.codePoints[Padma.lang_TELUGU].misc_AILEN    = "\u0C56";

//Digits
Unicode.codePoints[Padma.lang_TELUGU].digit_ZERO  = "\u0C66";
Unicode.codePoints[Padma.lang_TELUGU].digit_ONE   = "\u0C67";
Unicode.codePoints[Padma.lang_TELUGU].digit_TWO   = "\u0C68";
Unicode.codePoints[Padma.lang_TELUGU].digit_THREE = "\u0C69";
Unicode.codePoints[Padma.lang_TELUGU].digit_FOUR  = "\u0C6A";
Unicode.codePoints[Padma.lang_TELUGU].digit_FIVE  = "\u0C6B";
Unicode.codePoints[Padma.lang_TELUGU].digit_SIX   = "\u0C6C";
Unicode.codePoints[Padma.lang_TELUGU].digit_SEVEN = "\u0C6D";
Unicode.codePoints[Padma.lang_TELUGU].digit_EIGHT = "\u0C6E";
Unicode.codePoints[Padma.lang_TELUGU].digit_NINE  = "\u0C6F";

//MALAYALAM
//Vowel Modifiers
Unicode.codePoints[Padma.lang_MALAYALAM].anusvara    = "\u0D02";  //sunna
Unicode.codePoints[Padma.lang_MALAYALAM].visarga     = "\u0D03";

//Independent Vowels
Unicode.codePoints[Padma.lang_MALAYALAM].letter_A    = "\u0D05";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_AA   = "\u0D06";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_I    = "\u0D07";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_II   = "\u0D08";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_U    = "\u0D09";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_UU   = "\u0D0A";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_R    = "\u0D0B";   //vocalic R
Unicode.codePoints[Padma.lang_MALAYALAM].letter_RR   = "\u0D60";   //vocalic R
Unicode.codePoints[Padma.lang_MALAYALAM].letter_L    = "\u0D0C";   //vocalic L
Unicode.codePoints[Padma.lang_MALAYALAM].letter_LL   = "\u0D61";   //vocalic L
Unicode.codePoints[Padma.lang_MALAYALAM].letter_E    = "\u0D0E";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_EE   = "\u0D0F";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_AI   = "\u0D10";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_O    = "\u0D12";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_OO   = "\u0D13";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_AU   = "\u0D14";

//Consonants
Unicode.codePoints[Padma.lang_MALAYALAM].letter_KA   = "\u0D15";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_KHA  = "\u0D16";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_GA   = "\u0D17";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_GHA  = "\u0D18";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_NGA  = "\u0D19";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_CA   = "\u0D1A";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_CHA  = "\u0D1B";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_JA   = "\u0D1C";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_JHA  = "\u0D1D";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_NYA  = "\u0D1E";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_TTA  = "\u0D1F";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_TTHA = "\u0D20";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_DDA  = "\u0D21";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_DDHA = "\u0D22";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_NNA  = "\u0D23";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_TA   = "\u0D24";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_THA  = "\u0D25";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_DA   = "\u0D26";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_DHA  = "\u0D27";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_NA   = "\u0D28";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_PA   = "\u0D2A";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_PHA  = "\u0D2B";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_BA   = "\u0D2C";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_BHA  = "\u0D2D";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_MA   = "\u0D2E";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_YA   = "\u0D2F";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_RA   = "\u0D30";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_RRA  = "\u0D31";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_LA   = "\u0D32";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_LLA  = "\u0D33";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_ZHA  = "\u0D34";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_VA   = "\u0D35";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_SHA  = "\u0D36";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_SSA  = "\u0D37";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_SA   = "\u0D38";
Unicode.codePoints[Padma.lang_MALAYALAM].letter_HA   = "\u0D39";

//Dependent Vowel Signs
Unicode.codePoints[Padma.lang_MALAYALAM].vowelsn_AA  = "\u0D3E";
Unicode.codePoints[Padma.lang_MALAYALAM].vowelsn_I   = "\u0D3F";
Unicode.codePoints[Padma.lang_MALAYALAM].vowelsn_II  = "\u0D40";
Unicode.codePoints[Padma.lang_MALAYALAM].vowelsn_U   = "\u0D41";
Unicode.codePoints[Padma.lang_MALAYALAM].vowelsn_UU  = "\u0D42";
Unicode.codePoints[Padma.lang_MALAYALAM].vowelsn_R   = "\u0D43";
Unicode.codePoints[Padma.lang_MALAYALAM].vowelsn_RR  = "\u0D43\u0D57";
Unicode.codePoints[Padma.lang_MALAYALAM].vowelsn_E   = "\u0D46";
Unicode.codePoints[Padma.lang_MALAYALAM].vowelsn_EE  = "\u0D47";
Unicode.codePoints[Padma.lang_MALAYALAM].vowelsn_AI  = "\u0D48"; 
Unicode.codePoints[Padma.lang_MALAYALAM].vowelsn_O   = "\u0D4A"; //Also 0D46 + 0D3E
Unicode.codePoints[Padma.lang_MALAYALAM].vowelsn_OO  = "\u0D4B"; //Also 0D47 + 0D3E
Unicode.codePoints[Padma.lang_MALAYALAM].vowelsn_AU  = "\u0D4C"; //Also 0D46 + 0D57

//Miscellaneous Signs
Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA   = "\u0D4D";   //chandrakkala
Unicode.codePoints[Padma.lang_MALAYALAM].misc_AULEN    = "\u0D57";

//Digits
Unicode.codePoints[Padma.lang_MALAYALAM].digit_ZERO  = "\u0D66";
Unicode.codePoints[Padma.lang_MALAYALAM].digit_ONE   = "\u0D67";
Unicode.codePoints[Padma.lang_MALAYALAM].digit_TWO   = "\u0D68";
Unicode.codePoints[Padma.lang_MALAYALAM].digit_THREE = "\u0D69";
Unicode.codePoints[Padma.lang_MALAYALAM].digit_FOUR  = "\u0D6A";
Unicode.codePoints[Padma.lang_MALAYALAM].digit_FIVE  = "\u0D6B";
Unicode.codePoints[Padma.lang_MALAYALAM].digit_SIX   = "\u0D6C";
Unicode.codePoints[Padma.lang_MALAYALAM].digit_SEVEN = "\u0D6D";
Unicode.codePoints[Padma.lang_MALAYALAM].digit_EIGHT = "\u0D6E";
Unicode.codePoints[Padma.lang_MALAYALAM].digit_NINE  = "\u0D6F";

//TAMIL
//Vowel Modifiers
Unicode.codePoints[Padma.lang_TAMIL].anusvara    = "\u0B82";  //not used in Tamil apparently
Unicode.codePoints[Padma.lang_TAMIL].visarga     = "\u0B83";  //aytham

//Independent Vowels
Unicode.codePoints[Padma.lang_TAMIL].letter_A    = "\u0B85";
Unicode.codePoints[Padma.lang_TAMIL].letter_AA   = "\u0B86";
Unicode.codePoints[Padma.lang_TAMIL].letter_I    = "\u0B87";
Unicode.codePoints[Padma.lang_TAMIL].letter_II   = "\u0B88";
Unicode.codePoints[Padma.lang_TAMIL].letter_U    = "\u0B89";
Unicode.codePoints[Padma.lang_TAMIL].letter_UU   = "\u0B8A";
Unicode.codePoints[Padma.lang_TAMIL].letter_E    = "\u0B8E";
Unicode.codePoints[Padma.lang_TAMIL].letter_EE   = "\u0B8F";
Unicode.codePoints[Padma.lang_TAMIL].letter_AI   = "\u0B90";
Unicode.codePoints[Padma.lang_TAMIL].letter_O    = "\u0B92";
Unicode.codePoints[Padma.lang_TAMIL].letter_OO   = "\u0B93";
Unicode.codePoints[Padma.lang_TAMIL].letter_AU   = "\u0B94";  //also 0B92 0BD7

//Consonants
Unicode.codePoints[Padma.lang_TAMIL].letter_KA   = "\u0B95";
Unicode.codePoints[Padma.lang_TAMIL].letter_NGA  = "\u0B99";
Unicode.codePoints[Padma.lang_TAMIL].letter_CA   = "\u0B9A";
Unicode.codePoints[Padma.lang_TAMIL].letter_JA   = "\u0B9C";
Unicode.codePoints[Padma.lang_TAMIL].letter_NYA  = "\u0B9E";
Unicode.codePoints[Padma.lang_TAMIL].letter_TTA  = "\u0B9F";
Unicode.codePoints[Padma.lang_TAMIL].letter_NNA  = "\u0BA3";
Unicode.codePoints[Padma.lang_TAMIL].letter_TA   = "\u0BA4";
Unicode.codePoints[Padma.lang_TAMIL].letter_NA   = "\u0BA8";
Unicode.codePoints[Padma.lang_TAMIL].letter_NNNA = "\u0BA9";
Unicode.codePoints[Padma.lang_TAMIL].letter_PA   = "\u0BAA";
Unicode.codePoints[Padma.lang_TAMIL].letter_MA   = "\u0BAE";
Unicode.codePoints[Padma.lang_TAMIL].letter_YA   = "\u0BAF";
Unicode.codePoints[Padma.lang_TAMIL].letter_RA   = "\u0BB0";
Unicode.codePoints[Padma.lang_TAMIL].letter_RRA  = "\u0BB1";
Unicode.codePoints[Padma.lang_TAMIL].letter_LA   = "\u0BB2";
Unicode.codePoints[Padma.lang_TAMIL].letter_LLA  = "\u0BB3";
Unicode.codePoints[Padma.lang_TAMIL].letter_ZHA  = "\u0BB4";
Unicode.codePoints[Padma.lang_TAMIL].letter_VA   = "\u0BB5";
Unicode.codePoints[Padma.lang_TAMIL].letter_SHA  = "\u0BB6";
Unicode.codePoints[Padma.lang_TAMIL].letter_SSA  = "\u0BB7";
Unicode.codePoints[Padma.lang_TAMIL].letter_SA   = "\u0BB8";
Unicode.codePoints[Padma.lang_TAMIL].letter_HA   = "\u0BB9";

//Dependent Vowel Signs
Unicode.codePoints[Padma.lang_TAMIL].vowelsn_AA  = "\u0BBE";
Unicode.codePoints[Padma.lang_TAMIL].vowelsn_I   = "\u0BBF";
Unicode.codePoints[Padma.lang_TAMIL].vowelsn_II  = "\u0BC0";
Unicode.codePoints[Padma.lang_TAMIL].vowelsn_U   = "\u0BC1";
Unicode.codePoints[Padma.lang_TAMIL].vowelsn_UU  = "\u0BC2";
Unicode.codePoints[Padma.lang_TAMIL].vowelsn_E   = "\u0BC6"; //left of consonat
Unicode.codePoints[Padma.lang_TAMIL].vowelsn_EE  = "\u0BC7"; //left of consonant
Unicode.codePoints[Padma.lang_TAMIL].vowelsn_AI  = "\u0BC8"; //left of consonat
Unicode.codePoints[Padma.lang_TAMIL].vowelsn_O   = "\u0BCA"; //Also 0BC6 + 0BBE
Unicode.codePoints[Padma.lang_TAMIL].vowelsn_OO  = "\u0BCB"; //Also 0BC7 + 0BBE
Unicode.codePoints[Padma.lang_TAMIL].vowelsn_AU  = "\u0BCC"; //Also 0BC6 + 0BD7

//Miscellaneous Signs
Unicode.codePoints[Padma.lang_TAMIL].misc_VIRAMA   = "\u0BCD";  //pulli
Unicode.codePoints[Padma.lang_TAMIL].misc_AULEN    = "\u0BD7";

//Digits
Unicode.codePoints[Padma.lang_TAMIL].digit_ZERO  = "\u0BE6";
Unicode.codePoints[Padma.lang_TAMIL].digit_ONE   = "\u0BE7";
Unicode.codePoints[Padma.lang_TAMIL].digit_TWO   = "\u0BE8";
Unicode.codePoints[Padma.lang_TAMIL].digit_THREE = "\u0BE9";
Unicode.codePoints[Padma.lang_TAMIL].digit_FOUR  = "\u0BEA";
Unicode.codePoints[Padma.lang_TAMIL].digit_FIVE  = "\u0BEB";
Unicode.codePoints[Padma.lang_TAMIL].digit_SIX   = "\u0BEC";
Unicode.codePoints[Padma.lang_TAMIL].digit_SEVEN = "\u0BED";
Unicode.codePoints[Padma.lang_TAMIL].digit_EIGHT = "\u0BEE";
Unicode.codePoints[Padma.lang_TAMIL].digit_NINE  = "\u0BEF";

Unicode.codePoints[Padma.lang_TAMIL].digit_TEN      = "\u0BF0";
Unicode.codePoints[Padma.lang_TAMIL].digit_HUNDRED  = "\u0BF1";
Unicode.codePoints[Padma.lang_TAMIL].digit_THOUSAND = "\u0BF2";
Unicode.codePoints[Padma.lang_TAMIL].sign_DAY       = "\u0BF3";
Unicode.codePoints[Padma.lang_TAMIL].sign_MONTH     = "\u0BF4";
Unicode.codePoints[Padma.lang_TAMIL].sign_YEAR      = "\u0BF5";
Unicode.codePoints[Padma.lang_TAMIL].sign_DEBIT     = "\u0BF6";
Unicode.codePoints[Padma.lang_TAMIL].sign_CREDIT    = "\u0BF7";
Unicode.codePoints[Padma.lang_TAMIL].sign_ASABOVE   = "\u0BF8";
Unicode.codePoints[Padma.lang_TAMIL].sign_RUPEE     = "\u0BF9";
Unicode.codePoints[Padma.lang_TAMIL].sign_NUMBER    = "\u0BFA";

//DEVANAGARI
Unicode.codePoints[Padma.lang_DEVANAGARI].candrabindu  = "\u0901";
//Vowel Modifiers
Unicode.codePoints[Padma.lang_DEVANAGARI].anusvara     = "\u0902";  //sunna
Unicode.codePoints[Padma.lang_DEVANAGARI].visarga      = "\u0903";

//Independent Vowels
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_SHT_A = "\u0904";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_A     = "\u0905";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_AA    = "\u0906";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_I     = "\u0907";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_II    = "\u0908";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_U     = "\u0909";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_UU    = "\u090A";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_R     = "\u090B";   //vocalic R
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_RR    = "\u0960";   //vocalic R
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_L     = "\u090C";   //vocalic L
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_LL    = "\u0961";   //vocalic L
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_CDR_E = "\u090D";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_E     = "\u090E";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_EE    = "\u090F";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_AI    = "\u0910";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_CDR_E = "\u0911";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_O     = "\u0912";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_OO    = "\u0913";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_AU    = "\u0914";

//Consonants
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_KA   = "\u0915";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_KHA  = "\u0916";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_GA   = "\u0917";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_GHA  = "\u0918";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_NGA  = "\u0919";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_CA   = "\u091A";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_CHA  = "\u091B";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_JA   = "\u091C";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_JHA  = "\u091D";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_NYA  = "\u091E";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_TTA  = "\u091F";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_TTHA = "\u0920";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_DDA  = "\u0921";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_DDHA = "\u0922";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_NNA  = "\u0923";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_TA   = "\u0924";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_THA  = "\u0925";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_DA   = "\u0926";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_DHA  = "\u0927";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_NA   = "\u0928";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_NNNA = "\u0929";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_PA   = "\u092A";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_PHA  = "\u092B";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_BA   = "\u092C";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_BHA  = "\u092D";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_MA   = "\u092E";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_YA   = "\u092F";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_RA   = "\u0930";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_RRA  = "\u0931";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_LA   = "\u0932";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_LLA  = "\u0933";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_ZHA  = "\u0934";  //LLLA
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_VA   = "\u0935";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_SHA  = "\u0936";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_SSA  = "\u0937";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_SA   = "\u0938";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_HA   = "\u0939";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_QA   = "\u0958";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_KHHA = "\u0959";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_GHHA = "\u095A";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_ZA   = "\u095B";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_DDDHA= "\u095C";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_RHA  = "\u095D";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_FA   = "\u095E";
Unicode.codePoints[Padma.lang_DEVANAGARI].letter_YYA  = "\u095F";

//Dependent Vowel Signs
Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_AA    = "\u093E";
Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_I     = "\u093F";
Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_II    = "\u0940";
Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_U     = "\u0941";
Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_UU    = "\u0942";
Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_R     = "\u0943";
Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_RR    = "\u0944";
Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_L     = "\u0962";
Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_LL    = "\u0963";
Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_CDR_E = "\u0945";
Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_E     = "\u0946";
Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_EE    = "\u0947";
Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_AI    = "\u0948";
Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_O     = "\u094A";
Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_OO    = "\u094B";
Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_AU    = "\u094C";

//Miscellaneous Signs
Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA   = "\u094D";   //halant
Unicode.codePoints[Padma.lang_DEVANAGARI].misc_abbrev   = "\u0970";   //halant

//Digits
Unicode.codePoints[Padma.lang_DEVANAGARI].digit_ZERO  = "\u0966";
Unicode.codePoints[Padma.lang_DEVANAGARI].digit_ONE   = "\u0967";
Unicode.codePoints[Padma.lang_DEVANAGARI].digit_TWO   = "\u0968";
Unicode.codePoints[Padma.lang_DEVANAGARI].digit_THREE = "\u0969";
Unicode.codePoints[Padma.lang_DEVANAGARI].digit_FOUR  = "\u096A";
Unicode.codePoints[Padma.lang_DEVANAGARI].digit_FIVE  = "\u096B";
Unicode.codePoints[Padma.lang_DEVANAGARI].digit_SIX   = "\u096C";
Unicode.codePoints[Padma.lang_DEVANAGARI].digit_SEVEN = "\u096D";
Unicode.codePoints[Padma.lang_DEVANAGARI].digit_EIGHT = "\u096E";
Unicode.codePoints[Padma.lang_DEVANAGARI].digit_NINE  = "\u096F";

//Zero-Width Joiner/Non Joiner for Virama
Unicode.misc_ZWNJ   = "\u200C";
Unicode.misc_ZWJ    = "\u200D";

//To Unicode
Unicode.fromPadma = new Array();

Unicode.fromPadma[Padma.lang_TELUGU]     = new Array();
Unicode.fromPadma[Padma.lang_MALAYALAM]  = new Array();
Unicode.fromPadma[Padma.lang_TAMIL]      = new Array();
Unicode.fromPadma[Padma.lang_DEVANAGARI] = new Array();

//TELUGU
Unicode.fromPadma[Padma.lang_TELUGU][Padma.candrabindu] = Unicode.codePoints[Padma.lang_TELUGU].candrabindu;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.visarga]     = Unicode.codePoints[Padma.lang_TELUGU].visarga;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.pollu]       = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.syllbreak]   = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.misc_ZWNJ;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.chillu]      = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.misc_ZWJ;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.anusvara]    = Unicode.codePoints[Padma.lang_TELUGU].anusvara;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.avagraha]    = Unicode.common_AVAGRAHA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.udAtta]      = Unicode.common_UDATTA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.anudAtta]    = Unicode.common_ANUDATTA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.svarita]     = Unicode.common_SVARITA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.danda]       = Unicode.common_DANDA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.ddanda]      = Unicode.common_DDANDA;

//digits
Unicode.fromPadma[Padma.lang_TELUGU][Padma.digit_ZERO]  = Unicode.codePoints[Padma.lang_TELUGU].digit_ZERO;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.digit_ONE]   = Unicode.codePoints[Padma.lang_TELUGU].digit_ONE;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.digit_TWO]   = Unicode.codePoints[Padma.lang_TELUGU].digit_TWO;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.digit_THREE] = Unicode.codePoints[Padma.lang_TELUGU].digit_THREE;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.digit_FOUR]  = Unicode.codePoints[Padma.lang_TELUGU].digit_FOUR;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.digit_FIVE]  = Unicode.codePoints[Padma.lang_TELUGU].digit_FIVE;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.digit_SIX]   = Unicode.codePoints[Padma.lang_TELUGU].digit_SIX;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.digit_SEVEN] = Unicode.codePoints[Padma.lang_TELUGU].digit_SEVEN;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.digit_EIGHT] = Unicode.codePoints[Padma.lang_TELUGU].digit_EIGHT;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.digit_NINE]  = Unicode.codePoints[Padma.lang_TELUGU].digit_NINE;

//Vowels
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowel_A]     = Unicode.codePoints[Padma.lang_TELUGU].letter_A;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowel_AA]    = Unicode.codePoints[Padma.lang_TELUGU].letter_AA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowel_I]     = Unicode.codePoints[Padma.lang_TELUGU].letter_I;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowel_II]    = Unicode.codePoints[Padma.lang_TELUGU].letter_II;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowel_U]     = Unicode.codePoints[Padma.lang_TELUGU].letter_U;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowel_UU]    = Unicode.codePoints[Padma.lang_TELUGU].letter_UU;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowel_R]     = Unicode.codePoints[Padma.lang_TELUGU].letter_R;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowel_RR]    = Unicode.codePoints[Padma.lang_TELUGU].letter_RR;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowel_L]     = Unicode.codePoints[Padma.lang_TELUGU].letter_L;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowel_LL]    = Unicode.codePoints[Padma.lang_TELUGU].letter_LL;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowel_E]     = Unicode.codePoints[Padma.lang_TELUGU].letter_E;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowel_EE]    = Unicode.codePoints[Padma.lang_TELUGU].letter_EE;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowel_AI]    = Unicode.codePoints[Padma.lang_TELUGU].letter_AI;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowel_O]     = Unicode.codePoints[Padma.lang_TELUGU].letter_O;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowel_OO]    = Unicode.codePoints[Padma.lang_TELUGU].letter_OO;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowel_AU]    = Unicode.codePoints[Padma.lang_TELUGU].letter_AU;

//Consonants
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_KA]   = Unicode.codePoints[Padma.lang_TELUGU].letter_KA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_KHA]  = Unicode.codePoints[Padma.lang_TELUGU].letter_KHA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_GA]   = Unicode.codePoints[Padma.lang_TELUGU].letter_GA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_GHA]  = Unicode.codePoints[Padma.lang_TELUGU].letter_GHA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_NGA]  = Unicode.codePoints[Padma.lang_TELUGU].letter_NGA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_CA]   = Unicode.codePoints[Padma.lang_TELUGU].letter_CA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_CHA]  = Unicode.codePoints[Padma.lang_TELUGU].letter_CHA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_JA]   = Unicode.codePoints[Padma.lang_TELUGU].letter_JA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_JHA]  = Unicode.codePoints[Padma.lang_TELUGU].letter_JHA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_NYA]  = Unicode.codePoints[Padma.lang_TELUGU].letter_NYA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_TTA]  = Unicode.codePoints[Padma.lang_TELUGU].letter_TTA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_TTHA] = Unicode.codePoints[Padma.lang_TELUGU].letter_TTHA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_DDA]  = Unicode.codePoints[Padma.lang_TELUGU].letter_DDA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_DDHA] = Unicode.codePoints[Padma.lang_TELUGU].letter_DDHA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_NNA]  = Unicode.codePoints[Padma.lang_TELUGU].letter_NNA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_TA]   = Unicode.codePoints[Padma.lang_TELUGU].letter_TA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_THA]  = Unicode.codePoints[Padma.lang_TELUGU].letter_THA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_DA]   = Unicode.codePoints[Padma.lang_TELUGU].letter_DA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_DHA]  = Unicode.codePoints[Padma.lang_TELUGU].letter_DHA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_NA]   = Unicode.codePoints[Padma.lang_TELUGU].letter_NA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_PA]   = Unicode.codePoints[Padma.lang_TELUGU].letter_PA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_PHA]  = Unicode.codePoints[Padma.lang_TELUGU].letter_PHA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_BA]   = Unicode.codePoints[Padma.lang_TELUGU].letter_BA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_BHA]  = Unicode.codePoints[Padma.lang_TELUGU].letter_BHA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_MA]   = Unicode.codePoints[Padma.lang_TELUGU].letter_MA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_YA]   = Unicode.codePoints[Padma.lang_TELUGU].letter_YA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_RA]   = Unicode.codePoints[Padma.lang_TELUGU].letter_RA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_LA]   = Unicode.codePoints[Padma.lang_TELUGU].letter_LA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_VA]   = Unicode.codePoints[Padma.lang_TELUGU].letter_VA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_SHA]  = Unicode.codePoints[Padma.lang_TELUGU].letter_SHA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_SSA]  = Unicode.codePoints[Padma.lang_TELUGU].letter_SSA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_SA]   = Unicode.codePoints[Padma.lang_TELUGU].letter_SA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_HA]   = Unicode.codePoints[Padma.lang_TELUGU].letter_HA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_LLA]  = Unicode.codePoints[Padma.lang_TELUGU].letter_LLA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.conjct_KSH]  = Unicode.codePoints[Padma.lang_TELUGU].conjct_KSH;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_RRA]  = Unicode.codePoints[Padma.lang_TELUGU].letter_RRA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_TCH]  = Unicode.codePoints[Padma.lang_TELUGU].letter_TCH;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_TJ]   = Unicode.codePoints[Padma.lang_TELUGU].letter_TJ;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.consnt_ZHA]  = Unicode.codePoints[Padma.lang_TELUGU].letter_ZHA;

//Gunimtaalu
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowelsn_AA]  = Unicode.codePoints[Padma.lang_TELUGU].vowelsn_AA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowelsn_I]   = Unicode.codePoints[Padma.lang_TELUGU].vowelsn_I;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowelsn_II]  = Unicode.codePoints[Padma.lang_TELUGU].vowelsn_II;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowelsn_U]   = Unicode.codePoints[Padma.lang_TELUGU].vowelsn_U;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowelsn_UU]  = Unicode.codePoints[Padma.lang_TELUGU].vowelsn_UU;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowelsn_R]   = Unicode.codePoints[Padma.lang_TELUGU].vowelsn_R;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowelsn_RR]  = Unicode.codePoints[Padma.lang_TELUGU].vowelsn_RR;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowelsn_E]   = Unicode.codePoints[Padma.lang_TELUGU].vowelsn_E;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowelsn_EE]  = Unicode.codePoints[Padma.lang_TELUGU].vowelsn_EE;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowelsn_AI]  = Unicode.codePoints[Padma.lang_TELUGU].vowelsn_AI;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowelsn_O]   = Unicode.codePoints[Padma.lang_TELUGU].vowelsn_O;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowelsn_OO]  = Unicode.codePoints[Padma.lang_TELUGU].vowelsn_OO;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowelsn_AU]  = Unicode.codePoints[Padma.lang_TELUGU].vowelsn_AU;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vowelsn_AILEN]  = Unicode.codePoints[Padma.lang_TELUGU].misc_AILEN;

//vattulu
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_KA]    = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_KA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_KHA]   = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_KHA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_GA]    = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_GA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_GHA]   = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_GHA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_NGA]   = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_NGA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_CA]    = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_CA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_CHA]   = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_CHA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_JA]    = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_JA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_JHA]   = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_JHA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_NYA]   = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_NYA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_TTA]   = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_TTA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_TTHA]  = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_TTHA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_DDA]   = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_DDA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_DDHA]  = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_DDHA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_NNA]   = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_NNA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_TA]    = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_TA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_THA]   = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_THA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_DA]    = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_DA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_DHA]   = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_DHA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_NA]    = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_NA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_PA]    = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_PA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_PHA]   = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_PHA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_BA]    = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_BA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_BHA]   = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_BHA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_MA]    = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_MA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_YA]    = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_YA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_RA]    = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_RA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_LA]    = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_LA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_VA]    = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_VA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_SHA]   = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_SHA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_SSA]   = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_SSA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_SA]    = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_SA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_HA]    = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_HA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_LLA]   = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_LLA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_KSH]   = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].conjct_KSH;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_RRA]   = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_RRA;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_TCH]   = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_TCH;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_TJ]    = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_TJ;
Unicode.fromPadma[Padma.lang_TELUGU][Padma.vattu_ZHA]   = Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_ZHA;

//MALAYALAM
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.visarga]     = Unicode.codePoints[Padma.lang_MALAYALAM].visarga;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.chandrakkala] = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.syllbreak]   = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.misc_ZWNJ;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.chillu]      = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.misc_ZWJ;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.anusvara]    = Unicode.codePoints[Padma.lang_MALAYALAM].anusvara;

//digits
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.digit_ZERO]  = Unicode.codePoints[Padma.lang_MALAYALAM].digit_ZERO;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.digit_ONE]   = Unicode.codePoints[Padma.lang_MALAYALAM].digit_ONE;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.digit_TWO]   = Unicode.codePoints[Padma.lang_MALAYALAM].digit_TWO;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.digit_THREE] = Unicode.codePoints[Padma.lang_MALAYALAM].digit_THREE;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.digit_FOUR]  = Unicode.codePoints[Padma.lang_MALAYALAM].digit_FOUR;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.digit_FIVE]  = Unicode.codePoints[Padma.lang_MALAYALAM].digit_FIVE;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.digit_SIX]   = Unicode.codePoints[Padma.lang_MALAYALAM].digit_SIX;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.digit_SEVEN] = Unicode.codePoints[Padma.lang_MALAYALAM].digit_SEVEN;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.digit_EIGHT] = Unicode.codePoints[Padma.lang_MALAYALAM].digit_EIGHT;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.digit_NINE]  = Unicode.codePoints[Padma.lang_MALAYALAM].digit_NINE;

//Vowels
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowel_A]     = Unicode.codePoints[Padma.lang_MALAYALAM].letter_A;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowel_AA]    = Unicode.codePoints[Padma.lang_MALAYALAM].letter_AA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowel_I]     = Unicode.codePoints[Padma.lang_MALAYALAM].letter_I;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowel_II]    = Unicode.codePoints[Padma.lang_MALAYALAM].letter_II;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowel_U]     = Unicode.codePoints[Padma.lang_MALAYALAM].letter_U;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowel_UU]    = Unicode.codePoints[Padma.lang_MALAYALAM].letter_UU;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowel_R]     = Unicode.codePoints[Padma.lang_MALAYALAM].letter_R;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowel_RR]    = Unicode.codePoints[Padma.lang_MALAYALAM].letter_RR;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowel_L]     = Unicode.codePoints[Padma.lang_MALAYALAM].letter_L;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowel_LL]    = Unicode.codePoints[Padma.lang_MALAYALAM].letter_LL;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowel_E]     = Unicode.codePoints[Padma.lang_MALAYALAM].letter_E;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowel_EE]    = Unicode.codePoints[Padma.lang_MALAYALAM].letter_EE;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowel_AI]    = Unicode.codePoints[Padma.lang_MALAYALAM].letter_AI;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowel_O]     = Unicode.codePoints[Padma.lang_MALAYALAM].letter_O;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowel_OO]    = Unicode.codePoints[Padma.lang_MALAYALAM].letter_OO;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowel_AU]    = Unicode.codePoints[Padma.lang_MALAYALAM].letter_AU;

//Consonants
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_KA]   = Unicode.codePoints[Padma.lang_MALAYALAM].letter_KA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_KHA]  = Unicode.codePoints[Padma.lang_MALAYALAM].letter_KHA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_GA]   = Unicode.codePoints[Padma.lang_MALAYALAM].letter_GA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_GHA]  = Unicode.codePoints[Padma.lang_MALAYALAM].letter_GHA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_NGA]  = Unicode.codePoints[Padma.lang_MALAYALAM].letter_NGA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_CA]   = Unicode.codePoints[Padma.lang_MALAYALAM].letter_CA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_CHA]  = Unicode.codePoints[Padma.lang_MALAYALAM].letter_CHA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_JA]   = Unicode.codePoints[Padma.lang_MALAYALAM].letter_JA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_JHA]  = Unicode.codePoints[Padma.lang_MALAYALAM].letter_JHA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_NYA]  = Unicode.codePoints[Padma.lang_MALAYALAM].letter_NYA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_TTA]  = Unicode.codePoints[Padma.lang_MALAYALAM].letter_TTA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_TTHA] = Unicode.codePoints[Padma.lang_MALAYALAM].letter_TTHA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_DDA]  = Unicode.codePoints[Padma.lang_MALAYALAM].letter_DDA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_DDHA] = Unicode.codePoints[Padma.lang_MALAYALAM].letter_DDHA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_NNA]  = Unicode.codePoints[Padma.lang_MALAYALAM].letter_NNA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_TA]   = Unicode.codePoints[Padma.lang_MALAYALAM].letter_TA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_THA]  = Unicode.codePoints[Padma.lang_MALAYALAM].letter_THA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_DA]   = Unicode.codePoints[Padma.lang_MALAYALAM].letter_DA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_DHA]  = Unicode.codePoints[Padma.lang_MALAYALAM].letter_DHA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_NA]   = Unicode.codePoints[Padma.lang_MALAYALAM].letter_NA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_PA]   = Unicode.codePoints[Padma.lang_MALAYALAM].letter_PA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_PHA]  = Unicode.codePoints[Padma.lang_MALAYALAM].letter_PHA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_BA]   = Unicode.codePoints[Padma.lang_MALAYALAM].letter_BA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_BHA]  = Unicode.codePoints[Padma.lang_MALAYALAM].letter_BHA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_MA]   = Unicode.codePoints[Padma.lang_MALAYALAM].letter_MA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_YA]   = Unicode.codePoints[Padma.lang_MALAYALAM].letter_YA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_RA]   = Unicode.codePoints[Padma.lang_MALAYALAM].letter_RA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_LA]   = Unicode.codePoints[Padma.lang_MALAYALAM].letter_LA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_VA]   = Unicode.codePoints[Padma.lang_MALAYALAM].letter_VA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_SHA]  = Unicode.codePoints[Padma.lang_MALAYALAM].letter_SHA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_SSA]  = Unicode.codePoints[Padma.lang_MALAYALAM].letter_SSA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_SA]   = Unicode.codePoints[Padma.lang_MALAYALAM].letter_SA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_HA]   = Unicode.codePoints[Padma.lang_MALAYALAM].letter_HA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_LLA]  = Unicode.codePoints[Padma.lang_MALAYALAM].letter_LLA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_ZHA]  = Unicode.codePoints[Padma.lang_MALAYALAM].letter_ZHA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.consnt_RRA]  = Unicode.codePoints[Padma.lang_MALAYALAM].letter_RRA;

//Gunimtaalu
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowelsn_AA]  = Unicode.codePoints[Padma.lang_MALAYALAM].vowelsn_AA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowelsn_I]   = Unicode.codePoints[Padma.lang_MALAYALAM].vowelsn_I;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowelsn_II]  = Unicode.codePoints[Padma.lang_MALAYALAM].vowelsn_II;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowelsn_U]   = Unicode.codePoints[Padma.lang_MALAYALAM].vowelsn_U;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowelsn_UU]  = Unicode.codePoints[Padma.lang_MALAYALAM].vowelsn_UU;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowelsn_R]   = Unicode.codePoints[Padma.lang_MALAYALAM].vowelsn_R;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowelsn_RR]  = Unicode.codePoints[Padma.lang_MALAYALAM].vowelsn_RR;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowelsn_E]   = Unicode.codePoints[Padma.lang_MALAYALAM].vowelsn_E;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowelsn_EE]  = Unicode.codePoints[Padma.lang_MALAYALAM].vowelsn_EE;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowelsn_AI]  = Unicode.codePoints[Padma.lang_MALAYALAM].vowelsn_AI;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowelsn_O]   = Unicode.codePoints[Padma.lang_MALAYALAM].vowelsn_O;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowelsn_OO]  = Unicode.codePoints[Padma.lang_MALAYALAM].vowelsn_OO;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowelsn_AU]  = Unicode.codePoints[Padma.lang_MALAYALAM].vowelsn_AU;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vowelsn_AULEN]  = Unicode.codePoints[Padma.lang_MALAYALAM].misc_AULEN;

//vattulu
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_KA]  = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_KA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_KHA] = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_KHA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_GA]  = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_GA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_GHA] = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_GHA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_NGA] = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_NGA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_CA]  = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_CA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_CHA] = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_CHA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_JA]  = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_JA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_JHA] = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_JHA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_NYA] = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_NYA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_TTA] = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_TTA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_TTHA]= Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA +Unicode.codePoints[Padma.lang_MALAYALAM].letter_TTHA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_DDA] = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_DDA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_DDHA]= Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA +Unicode.codePoints[Padma.lang_MALAYALAM].letter_DDHA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_NNA] = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_NNA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_TA]  = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_TA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_THA] = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_THA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_DA]  = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_DA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_DHA] = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_DHA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_NA]  = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_NA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_PA]  = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_PA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_PHA] = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_PHA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_BA]  = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_BA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_BHA] = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_BHA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_MA]  = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_MA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_YA]  = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_YA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_RA]  = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_RA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_LA]  = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_LA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_VA]  = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_VA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_SHA] = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_SHA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_SSA] = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_SSA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_SA]  = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_SA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_HA]  = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_HA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_LLA] = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_LLA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_ZHA] = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_ZHA;
Unicode.fromPadma[Padma.lang_MALAYALAM][Padma.vattu_RRA] = Unicode.codePoints[Padma.lang_MALAYALAM].misc_VIRAMA + Unicode.codePoints[Padma.lang_MALAYALAM].letter_RRA;

//TAMIL
Unicode.fromPadma[Padma.lang_TAMIL][Padma.visarga]     = Unicode.codePoints[Padma.lang_TAMIL].visarga;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.pulli]       = Unicode.codePoints[Padma.lang_TAMIL].misc_VIRAMA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.syllbreak]   = Unicode.codePoints[Padma.lang_TAMIL].misc_VIRAMA + Unicode.misc_ZWNJ;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.anusvara]    = Unicode.codePoints[Padma.lang_TAMIL].anusvara;

//digits
Unicode.fromPadma[Padma.lang_TAMIL][Padma.digit_ZERO]  = Unicode.codePoints[Padma.lang_TAMIL].digit_ZERO;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.digit_ONE]   = Unicode.codePoints[Padma.lang_TAMIL].digit_ONE;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.digit_TWO]   = Unicode.codePoints[Padma.lang_TAMIL].digit_TWO;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.digit_THREE] = Unicode.codePoints[Padma.lang_TAMIL].digit_THREE;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.digit_FOUR]  = Unicode.codePoints[Padma.lang_TAMIL].digit_FOUR;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.digit_FIVE]  = Unicode.codePoints[Padma.lang_TAMIL].digit_FIVE;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.digit_SIX]   = Unicode.codePoints[Padma.lang_TAMIL].digit_SIX;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.digit_SEVEN] = Unicode.codePoints[Padma.lang_TAMIL].digit_SEVEN;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.digit_EIGHT] = Unicode.codePoints[Padma.lang_TAMIL].digit_EIGHT;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.digit_NINE]  = Unicode.codePoints[Padma.lang_TAMIL].digit_NINE;

//Vowels
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vowel_A]     = Unicode.codePoints[Padma.lang_TAMIL].letter_A;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vowel_AA]    = Unicode.codePoints[Padma.lang_TAMIL].letter_AA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vowel_I]     = Unicode.codePoints[Padma.lang_TAMIL].letter_I;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vowel_II]    = Unicode.codePoints[Padma.lang_TAMIL].letter_II;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vowel_U]     = Unicode.codePoints[Padma.lang_TAMIL].letter_U;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vowel_UU]    = Unicode.codePoints[Padma.lang_TAMIL].letter_UU;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vowel_E]     = Unicode.codePoints[Padma.lang_TAMIL].letter_E;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vowel_EE]    = Unicode.codePoints[Padma.lang_TAMIL].letter_EE;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vowel_AI]    = Unicode.codePoints[Padma.lang_TAMIL].letter_AI;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vowel_O]     = Unicode.codePoints[Padma.lang_TAMIL].letter_O;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vowel_OO]    = Unicode.codePoints[Padma.lang_TAMIL].letter_OO;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vowel_AU]    = Unicode.codePoints[Padma.lang_TAMIL].letter_AU;

//Consonants
Unicode.fromPadma[Padma.lang_TAMIL][Padma.consnt_KA]   = Unicode.codePoints[Padma.lang_TAMIL].letter_KA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.consnt_NGA]  = Unicode.codePoints[Padma.lang_TAMIL].letter_NGA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.consnt_CA]   = Unicode.codePoints[Padma.lang_TAMIL].letter_CA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.consnt_JA]   = Unicode.codePoints[Padma.lang_TAMIL].letter_JA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.consnt_NYA]  = Unicode.codePoints[Padma.lang_TAMIL].letter_NYA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.consnt_TTA]  = Unicode.codePoints[Padma.lang_TAMIL].letter_TTA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.consnt_NNA]  = Unicode.codePoints[Padma.lang_TAMIL].letter_NNA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.consnt_TA]   = Unicode.codePoints[Padma.lang_TAMIL].letter_TA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.consnt_NA]   = Unicode.codePoints[Padma.lang_TAMIL].letter_NA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.consnt_NNNA] = Unicode.codePoints[Padma.lang_TAMIL].letter_NNNA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.consnt_PA]   = Unicode.codePoints[Padma.lang_TAMIL].letter_PA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.consnt_MA]   = Unicode.codePoints[Padma.lang_TAMIL].letter_MA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.consnt_YA]   = Unicode.codePoints[Padma.lang_TAMIL].letter_YA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.consnt_RA]   = Unicode.codePoints[Padma.lang_TAMIL].letter_RA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.consnt_LA]   = Unicode.codePoints[Padma.lang_TAMIL].letter_LA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.consnt_VA]   = Unicode.codePoints[Padma.lang_TAMIL].letter_VA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.consnt_SHA]  = Unicode.codePoints[Padma.lang_TAMIL].letter_SHA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.consnt_SSA]  = Unicode.codePoints[Padma.lang_TAMIL].letter_SSA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.consnt_SA]   = Unicode.codePoints[Padma.lang_TAMIL].letter_SA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.consnt_HA]   = Unicode.codePoints[Padma.lang_TAMIL].letter_HA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.consnt_LLA]  = Unicode.codePoints[Padma.lang_TAMIL].letter_LLA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.consnt_ZHA]  = Unicode.codePoints[Padma.lang_TAMIL].letter_ZHA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.consnt_RRA]  = Unicode.codePoints[Padma.lang_TAMIL].letter_RRA;

//Gunimtaalu
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vowelsn_AA]  = Unicode.codePoints[Padma.lang_TAMIL].vowelsn_AA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vowelsn_I]   = Unicode.codePoints[Padma.lang_TAMIL].vowelsn_I;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vowelsn_II]  = Unicode.codePoints[Padma.lang_TAMIL].vowelsn_II;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vowelsn_U]   = Unicode.codePoints[Padma.lang_TAMIL].vowelsn_U;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vowelsn_UU]  = Unicode.codePoints[Padma.lang_TAMIL].vowelsn_UU;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vowelsn_E]   = Unicode.codePoints[Padma.lang_TAMIL].vowelsn_E;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vowelsn_EE]  = Unicode.codePoints[Padma.lang_TAMIL].vowelsn_EE;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vowelsn_AI]  = Unicode.codePoints[Padma.lang_TAMIL].vowelsn_AI;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vowelsn_O]   = Unicode.codePoints[Padma.lang_TAMIL].vowelsn_O;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vowelsn_OO]  = Unicode.codePoints[Padma.lang_TAMIL].vowelsn_OO;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vowelsn_AU]  = Unicode.codePoints[Padma.lang_TAMIL].vowelsn_AU;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vowelsn_AULEN]  = Unicode.codePoints[Padma.lang_TAMIL].misc_AULEN;

//vattulu
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vattu_KA]  = Unicode.codePoints[Padma.lang_TAMIL].misc_VIRAMA + Unicode.codePoints[Padma.lang_TAMIL].letter_KA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vattu_NGA] = Unicode.codePoints[Padma.lang_TAMIL].misc_VIRAMA + Unicode.codePoints[Padma.lang_TAMIL].letter_NGA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vattu_CA]  = Unicode.codePoints[Padma.lang_TAMIL].misc_VIRAMA + Unicode.codePoints[Padma.lang_TAMIL].letter_CA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vattu_JA]  = Unicode.codePoints[Padma.lang_TAMIL].misc_VIRAMA + Unicode.codePoints[Padma.lang_TAMIL].letter_JA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vattu_NYA] = Unicode.codePoints[Padma.lang_TAMIL].misc_VIRAMA + Unicode.codePoints[Padma.lang_TAMIL].letter_NYA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vattu_TTA] = Unicode.codePoints[Padma.lang_TAMIL].misc_VIRAMA + Unicode.codePoints[Padma.lang_TAMIL].letter_TTA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vattu_NNA] = Unicode.codePoints[Padma.lang_TAMIL].misc_VIRAMA + Unicode.codePoints[Padma.lang_TAMIL].letter_NNA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vattu_TA]  = Unicode.codePoints[Padma.lang_TAMIL].misc_VIRAMA + Unicode.codePoints[Padma.lang_TAMIL].letter_TA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vattu_NA]  = Unicode.codePoints[Padma.lang_TAMIL].misc_VIRAMA + Unicode.codePoints[Padma.lang_TAMIL].letter_NA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vattu_NNNA]= Unicode.codePoints[Padma.lang_TAMIL].misc_VIRAMA + Unicode.codePoints[Padma.lang_TAMIL].letter_NNNA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vattu_PA]  = Unicode.codePoints[Padma.lang_TAMIL].misc_VIRAMA + Unicode.codePoints[Padma.lang_TAMIL].letter_PA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vattu_MA]  = Unicode.codePoints[Padma.lang_TAMIL].misc_VIRAMA + Unicode.codePoints[Padma.lang_TAMIL].letter_MA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vattu_YA]  = Unicode.codePoints[Padma.lang_TAMIL].misc_VIRAMA + Unicode.codePoints[Padma.lang_TAMIL].letter_YA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vattu_RA]  = Unicode.codePoints[Padma.lang_TAMIL].misc_VIRAMA + Unicode.codePoints[Padma.lang_TAMIL].letter_RA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vattu_LA]  = Unicode.codePoints[Padma.lang_TAMIL].misc_VIRAMA + Unicode.codePoints[Padma.lang_TAMIL].letter_LA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vattu_VA]  = Unicode.codePoints[Padma.lang_TAMIL].misc_VIRAMA + Unicode.codePoints[Padma.lang_TAMIL].letter_VA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vattu_SHA] = Unicode.codePoints[Padma.lang_TAMIL].misc_VIRAMA + Unicode.codePoints[Padma.lang_TAMIL].letter_SHA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vattu_SSA] = Unicode.codePoints[Padma.lang_TAMIL].misc_VIRAMA + Unicode.codePoints[Padma.lang_TAMIL].letter_SSA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vattu_SA]  = Unicode.codePoints[Padma.lang_TAMIL].misc_VIRAMA + Unicode.codePoints[Padma.lang_TAMIL].letter_SA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vattu_HA]  = Unicode.codePoints[Padma.lang_TAMIL].misc_VIRAMA + Unicode.codePoints[Padma.lang_TAMIL].letter_HA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vattu_LLA] = Unicode.codePoints[Padma.lang_TAMIL].misc_VIRAMA + Unicode.codePoints[Padma.lang_TAMIL].letter_LLA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vattu_ZHA] = Unicode.codePoints[Padma.lang_TAMIL].misc_VIRAMA + Unicode.codePoints[Padma.lang_TAMIL].letter_ZHA;
Unicode.fromPadma[Padma.lang_TAMIL][Padma.vattu_RRA] = Unicode.codePoints[Padma.lang_TAMIL].misc_VIRAMA + Unicode.codePoints[Padma.lang_TAMIL].letter_RRA;

//DEVANAGARI
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.candrabindu] = Unicode.codePoints[Padma.lang_DEVANAGARI].candrabindu;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.visarga]     = Unicode.codePoints[Padma.lang_DEVANAGARI].visarga;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.halant]      = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.syllbreak]   = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.misc_ZWNJ;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.chillu]      = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.misc_ZWJ;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.anusvara]    = Unicode.codePoints[Padma.lang_DEVANAGARI].anusvara;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.avagraha]    = Unicode.common_AVAGRAHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.udAtta]      = Unicode.common_UDATTA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.anudAtta]    = Unicode.common_ANUDATTA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.svarita]     = Unicode.common_SVARITA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.danda]       = Unicode.common_DANDA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.ddanda]      = Unicode.common_DDANDA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.om]          = Unicode.common_OM;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.abbrev]      = Unicode.codePoints[Padma.lang_DEVANAGARI].abbrev;

//digits
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.digit_ZERO]  = Unicode.codePoints[Padma.lang_DEVANAGARI].digit_ZERO;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.digit_ONE]   = Unicode.codePoints[Padma.lang_DEVANAGARI].digit_ONE;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.digit_TWO]   = Unicode.codePoints[Padma.lang_DEVANAGARI].digit_TWO;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.digit_THREE] = Unicode.codePoints[Padma.lang_DEVANAGARI].digit_THREE;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.digit_FOUR]  = Unicode.codePoints[Padma.lang_DEVANAGARI].digit_FOUR;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.digit_FIVE]  = Unicode.codePoints[Padma.lang_DEVANAGARI].digit_FIVE;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.digit_SIX]   = Unicode.codePoints[Padma.lang_DEVANAGARI].digit_SIX;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.digit_SEVEN] = Unicode.codePoints[Padma.lang_DEVANAGARI].digit_SEVEN;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.digit_EIGHT] = Unicode.codePoints[Padma.lang_DEVANAGARI].digit_EIGHT;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.digit_NINE]  = Unicode.codePoints[Padma.lang_DEVANAGARI].digit_NINE;

//Vowels
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowel_SHT_A] = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_SHT_A;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowel_A]     = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_A;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowel_AA]    = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_AA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowel_I]     = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_I;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowel_II]    = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_II;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowel_U]     = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_U;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowel_UU]    = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_UU;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowel_R]     = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_R;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowel_RR]    = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_RR;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowel_L]     = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_L;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowel_LL]    = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_LL;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowel_CDR_E] = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_CDR_E;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowel_E]     = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_E;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowel_EE]    = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_EE;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowel_AI]    = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_AI;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowel_CDR_O] = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_CDR_0;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowel_O]     = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_O;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowel_OO]    = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_OO;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowel_AU]    = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_AU;

//Consonants
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_KA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_KA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_KHA]  = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_KHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_GA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_GA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_GHA]  = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_GHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_NGA]  = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_NGA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_CA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_CA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_CHA]  = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_CHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_JA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_JA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_JHA]  = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_JHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_NYA]  = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_NYA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_TTA]  = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_TTA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_TTHA] = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_TTHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_DDA]  = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_DDA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_DDHA] = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_DDHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_NNA]  = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_NNA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_NNNA] = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_NNNA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_TA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_TA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_THA]  = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_THA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_DA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_DA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_DHA]  = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_DHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_NA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_NA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_PA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_PA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_PHA]  = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_PHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_BA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_BA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_BHA]  = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_BHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_MA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_MA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_YA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_YA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_RA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_RA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_LA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_LA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_VA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_VA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_SHA]  = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_SHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_SSA]  = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_SSA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_SA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_SA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_HA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_HA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_LLA]  = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_LLA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_ZHA]  = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_ZHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_RRA]  = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_RRA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_QA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_QA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_KHHA] = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_KHHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_GHHA] = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_GHHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_ZA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_ZA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_DDDHA]= Unicode.codePoints[Padma.lang_DEVANAGARI].letter_DDDHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_RHA]  = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_RHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_FA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_FA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.consnt_YYA]  = Unicode.codePoints[Padma.lang_DEVANAGARI].letter_YYA;

//Gunimtaalu
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowelsn_AA]  = Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_AA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowelsn_I]   = Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_I;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowelsn_II]  = Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_II;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowelsn_U]   = Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_U;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowelsn_UU]  = Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_UU;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowelsn_R]   = Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_R;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowelsn_RR]  = Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_RR;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowelsn_E]   = Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_E;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowelsn_EE]  = Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_EE;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowelsn_AI]  = Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_AI;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowelsn_O]   = Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_O;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowelsn_OO]  = Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_OO;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowelsn_AU]  = Unicode.codePoints[Padma.lang_DEVANAGARI].vowelsn_AU;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vowelsn_AILEN]  = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_AILEN;

//vattulu
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_KA]    = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_KA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_KHA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_KHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_GA]    = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_GA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_GHA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_GHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_NGA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_NGA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_CA]    = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_CA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_CHA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_CHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_JA]    = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_JA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_JHA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_JHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_NYA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_NYA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_TTA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_TTA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_TTHA]  = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_TTHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_DDA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_DDA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_DDHA]  = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_DDHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_NNA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_NNA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_TA]    = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_TA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_THA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_THA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_DA]    = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_DA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_DHA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_DHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_NA]    = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_NA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_PA]    = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_PA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_PHA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_PHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_BA]    = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_BA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_BHA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_BHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_MA]    = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_MA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_YA]    = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_YA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_RA]    = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_RA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_LA]    = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_LA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_VA]    = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_VA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_SHA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_SHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_SSA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_SSA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_SA]    = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_SA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_HA]    = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_HA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_LLA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_LLA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_RRA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_RRA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_ZHA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_ZHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_NNNA]  = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_NNNA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_QA]    = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_QA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_KHHA]  = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_KHHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_GHHA]  = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_GHHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_ZA]    = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_ZA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_DDDHA] = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_DDDHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_RHA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_RHA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_FA]    = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_FA;
Unicode.fromPadma[Padma.lang_DEVANAGARI][Padma.vattu_YYA]   = Unicode.codePoints[Padma.lang_DEVANAGARI].misc_VIRAMA + Unicode.codePoints[Padma.lang_DEVANAGARI].letter_YYA;

Unicode.toPadma = new Array();

Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].candrabindu]   = Padma.candrabindu;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].visarga]       = Padma.visarga;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA] = Padma.pollu;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.misc_ZWNJ] = Padma.syllbreak;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.misc_ZWJ]  = Padma.chillu;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].anusvara]      = Padma.anusvara;
Unicode.toPadma[Unicode.common_AVAGRAHA] = Padma.avagraha;
Unicode.toPadma[Unicode.common_UDATTA]   = Padma.udAtta;
Unicode.toPadma[Unicode.common_ANUDATTA] = Padma.anudAtta;
Unicode.toPadma[Unicode.common_SVARITA]  = Padma.svarita;
Unicode.toPadma[Unicode.common_DANDA]    = Padma.danda;
Unicode.toPadma[Unicode.common_DDANDA]   = Padma.ddanda;

//digits
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].digit_ZERO]  = Padma.digit_ZERO;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].digit_ONE]   = Padma.digit_ONE;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].digit_TWO]   = Padma.digit_TWO;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].digit_THREE] = Padma.digit_THREE;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].digit_FOUR]  = Padma.digit_FOUR;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].digit_FIVE]  = Padma.digit_FIVE;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].digit_SIX]   = Padma.digit_SIX;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].digit_SEVEN] = Padma.digit_SEVEN;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].digit_EIGHT] = Padma.digit_EIGHT;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].digit_NINE]  = Padma.digit_NINE;

//Vowels
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_A]     = Padma.vowel_A;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_AA]    = Padma.vowel_AA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_I]     = Padma.vowel_I;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_II]    = Padma.vowel_II;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_U]     = Padma.vowel_U;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_UU]    = Padma.vowel_UU;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_R]     = Padma.vowel_R;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_RR]    = Padma.vowel_RR;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_L]     = Padma.vowel_L;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_LL]    = Padma.vowel_LL;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_E]     = Padma.vowel_E;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_EE]    = Padma.vowel_EE;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_AI]    = Padma.vowel_AI;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_O]     = Padma.vowel_O;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_OO]    = Padma.vowel_OO;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_AU]    = Padma.vowel_AU;

//Consonants
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_KA]    = Padma.consnt_KA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_KHA]   = Padma.consnt_KHA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_GA]    = Padma.consnt_GA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_GHA]   = Padma.consnt_GHA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_NGA]   = Padma.consnt_NGA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_CA]    = Padma.consnt_CA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_CHA]   = Padma.consnt_CHA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_JA]    = Padma.consnt_JA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_JHA]   = Padma.consnt_JHA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_NYA]   = Padma.consnt_NYA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_TTA]   = Padma.consnt_TTA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_TTHA]  = Padma.consnt_TTHA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_DDA]   = Padma.consnt_DDA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_DDHA]  = Padma.consnt_DDHA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_NNA]   = Padma.consnt_NNA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_TA]    = Padma.consnt_TA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_THA]   = Padma.consnt_THA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_DA]    = Padma.consnt_DA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_DHA]   = Padma.consnt_DHA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_NA]    = Padma.consnt_NA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_PA]    = Padma.consnt_PA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_PHA]   = Padma.consnt_PHA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_BA]    = Padma.consnt_BA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_BHA]   = Padma.consnt_BHA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_MA]    = Padma.consnt_MA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_YA]    = Padma.consnt_YA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_RA]    = Padma.consnt_RA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_LA]    = Padma.consnt_LA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_VA]    = Padma.consnt_VA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_SHA]   = Padma.consnt_SHA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_SSA]   = Padma.consnt_SSA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_SA]    = Padma.consnt_SA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_HA]    = Padma.consnt_HA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_LLA]   = Padma.consnt_LLA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].conjct_KSH]   = Padma.conjct_KSH;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_RRA]   = Padma.consnt_RRA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_TCH]   = Padma.consnt_TCH;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_TJ]    = Padma.consnt_TJ;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].letter_ZHA]   = Padma.consnt_ZHA;

//Gunimtaalu
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].vowelsn_AA]  = Padma.vowelsn_AA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].vowelsn_I]   = Padma.vowelsn_I;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].vowelsn_II]  = Padma.vowelsn_II;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].vowelsn_U]   = Padma.vowelsn_U;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].vowelsn_UU]  = Padma.vowelsn_UU;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].vowelsn_R]   = Padma.vowelsn_R;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].vowelsn_RR]  = Padma.vowelsn_RR;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].vowelsn_E]   = Padma.vowelsn_E;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].vowelsn_EE]  = Padma.vowelsn_EE;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].vowelsn_AI]  = Padma.vowelsn_AI;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].vowelsn_O]   = Padma.vowelsn_O;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].vowelsn_OO]  = Padma.vowelsn_OO;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].vowelsn_AU]  = Padma.vowelsn_AU;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_AILEN]  = Padma.vowelsn_AILEN;

//Vattulu
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_KA]    = Padma.vattu_KA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_KHA]   = Padma.vattu_KHA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_GA]    = Padma.vattu_GA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_GHA]   = Padma.vattu_GHA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_NGA]   = Padma.vattu_NGA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_CA]    = Padma.vattu_CA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_CHA]   = Padma.vattu_CHA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_JA]    = Padma.vattu_JA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_JHA]   = Padma.vattu_JHA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_NYA]   = Padma.vattu_NYA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_TTA]   = Padma.vattu_TTA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_TTHA]  = Padma.vattu_TTHA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_DDA]   = Padma.vattu_DDA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_DDHA]  = Padma.vattu_DDHA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_NNA]   = Padma.vattu_NNA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_TA]    = Padma.vattu_TA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_THA]   = Padma.vattu_THA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_DA]    = Padma.vattu_DA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_DHA]   = Padma.vattu_DHA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_NA]    = Padma.vattu_NA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_PA]    = Padma.vattu_PA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_PHA]   = Padma.vattu_PHA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_BA]    = Padma.vattu_BA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_BHA]   = Padma.vattu_BHA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_MA]    = Padma.vattu_MA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_YA]    = Padma.vattu_YA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_RA]    = Padma.vattu_RA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_LA]    = Padma.vattu_LA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_VA]    = Padma.vattu_VA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_SHA]   = Padma.vattu_SHA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_SSA]   = Padma.vattu_SSA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_SA]    = Padma.vattu_SA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_HA]    = Padma.vattu_HA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_LLA]   = Padma.vattu_LLA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].conjct_KSH]   = Padma.vattu_KSH;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_RRA]   = Padma.vattu_RRA;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_TCH]   = Padma.vattu_TCH;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_TJ]    = Padma.vattu_TJ;
Unicode.toPadma[Unicode.codePoints[Padma.lang_TELUGU].misc_VIRAMA + Unicode.codePoints[Padma.lang_TELUGU].letter_ZHA]   = Padma.vattu_ZHA;

Unicode.lookup = function (str) 
{
    return Unicode.toPadma[str];
}

Unicode.prototype.setLanguage = function (lang)
{
    if (lang > Padma.lang_MAXLANGS)
        return false;
    this.lang = lang;
    return true;
}

Unicode.prototype.transformFromPadma = function (str)
{
    var output = "";
    for(var i = 0; i < str.length; ++i) {
        var cur = str.charAt(i);
        var out = Unicode.fromPadma[this.lang][cur];
        output += (out == null ? cur : out);
    }
    return output;
}

Unicode.getUnicodeWriter = function ()
{
    return new Unicode();
}
