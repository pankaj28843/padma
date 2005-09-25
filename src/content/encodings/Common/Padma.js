// $Id: Padma.js,v 1.2 2005/09/25 14:52:26 vnagarjuna Exp $ -->

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

//Internal format - This is my way of expressing displeasure with the Unicode standard
//IMHO, Unicode is not consistent, not optimized and is unintuitive.
function Padma()
{
}

//Language codes
Padma.lang_TELUGU     = 0;
Padma.lang_MALAYALAM  = 1;
Padma.lang_TAMIL      = 2;
Padma.lang_DEVANAGARI = 3;
Padma.lang_BENGALI    = 4;
Padma.lang_GURMUKHI   = 5;
Padma.lang_GUJARATI   = 6;
Padma.lang_ORIYA      = 7;
Padma.lang_KANNADA    = 8;

//Only 3 languages supported now
Padma.lang_MAXLANGS   = 3;

//Types
Padma.type_accu      = 0;
Padma.type_gunintam  = 1;
Padma.type_accu_mod  = 2;    //vowel modififers
Padma.type_digit     = 3;
Padma.type_vattu     = 4;
Padma.type_hallu     = 5;
Padma.type_hallu_mod = 6;
Padma.type_unknown   = 7;

//Use Unicode Private Use Area for Padma's internal symbols starting with U+EC00.
//Code pints used: +UEC00-+UEC0D, +UEC10-+UEC1C, +UEC20-+UEC57, +UEC70-+UEC7A, +UECA1-+UECD7.

//Code points 32-64, 91-96, 123-127 (which are in the ASCII range) are not explicitly listed here
//but are part of Padma's internal format and are of type Padma.type_unknown.

//Dependent forms of vowels and consonats (vattulu and gunintamulu respectively) are off 0x80 from their base forms

//Vowel modifiers (including pollu with visarga and anusvara
Padma.anusvara    = "\uEC00";
Padma.visarga     = "\uEC01";
Padma.pollu       = "\uEC02";   //dead consonant - in honor of the Telugu word (anything generated with a ZWNJ in Unicode)
Padma.chillu      = "\uEC0D";   //half consonant - in honor of the Malayalam word chillksharamu (anything generated with a ZWJ in Unicode)

//Other names for the equivalent of pollu
Padma.chandrakkala = Padma.pollu;   //Malayalam
Padma.pulli        = Padma.pollu;   //Tamil

//Specials
Padma.candrabindu = "\uEC03";
Padma.avagraha    = "\uEC04";
Padma.yati        = "\uEC05";   //vertical diamond filled dark (classical), sometimes asterisk
Padma.udAtta      = "\uEC06";   //this and the next 2 are vedic symbols
Padma.anudAtta    = "\uEC07";
Padma.svarita     = "\uEC08";   //equivalent of udAtta
Padma.guru        = "\uEC09";
Padma.laghu       = "\uEC0A";
Padma.danda       = "\uEC0B";   //comma
Padma.ddanda      = "\uEC0C";   //full stop (double danda)

//digits
Padma.digit_ZERO  = "\uEC10";
Padma.digit_ONE   = "\uEC11";
Padma.digit_TWO   = "\uEC12";
Padma.digit_THREE = "\uEC13";
Padma.digit_FOUR  = "\uEC14";
Padma.digit_FIVE  = "\uEC15";
Padma.digit_SIX   = "\uEC16";
Padma.digit_SEVEN = "\uEC17";
Padma.digit_EIGHT = "\uEC18";
Padma.digit_NINE  = "\uEC19";

//Vowels
Padma.vowel_A     = "\uEC20";
Padma.vowel_AA    = "\uEC21";
Padma.vowel_I     = "\uEC22";
Padma.vowel_II    = "\uEC23";
Padma.vowel_U     = "\uEC24";
Padma.vowel_UU    = "\uEC25";
Padma.vowel_R     = "\uEC26";
Padma.vowel_RR    = "\uEC27";
Padma.vowel_L     = "\uEC28";
Padma.vowel_LL    = "\uEC29";
Padma.vowel_E     = "\uEC2A";
Padma.vowel_EE    = "\uEC2B";
Padma.vowel_AI    = "\uEC2C";
Padma.vowel_O     = "\uEC2D";
Padma.vowel_OO    = "\uEC2E";
Padma.vowel_AU    = "\uEC2F";

//Consonants
Padma.consnt_KA   = "\uEC30";
Padma.consnt_KHA  = "\uEC31";
Padma.consnt_GA   = "\uEC32";
Padma.consnt_GHA  = "\uEC33";
Padma.consnt_NGA  = "\uEC34";
Padma.consnt_CA   = "\uEC35";
Padma.consnt_CHA  = "\uEC36";
Padma.consnt_JA   = "\uEC37";
Padma.consnt_JHA  = "\uEC38";
Padma.consnt_NYA  = "\uEC39";
Padma.consnt_TTA  = "\uEC3A";
Padma.consnt_TTHA = "\uEC3B";
Padma.consnt_DDA  = "\uEC3C";
Padma.consnt_DDHA = "\uEC3D";
Padma.consnt_NNA  = "\uEC3E";
Padma.consnt_TA   = "\uEC3F";
Padma.consnt_THA  = "\uEC40";
Padma.consnt_DA   = "\uEC41";
Padma.consnt_DHA  = "\uEC42";
Padma.consnt_NA   = "\uEC43";
Padma.consnt_PA   = "\uEC44";
Padma.consnt_PHA  = "\uEC45";
Padma.consnt_BA   = "\uEC46";
Padma.consnt_BHA  = "\uEC47";
Padma.consnt_MA   = "\uEC48";
Padma.consnt_YA   = "\uEC49";
Padma.consnt_RA   = "\uEC4A";
Padma.consnt_LA   = "\uEC4B";
Padma.consnt_VA   = "\uEC4C";
Padma.consnt_SHA  = "\uEC4D";
Padma.consnt_SSA  = "\uEC4E";
Padma.consnt_SA   = "\uEC4F";
Padma.consnt_HA   = "\uEC50";
Padma.consnt_LLA  = "\uEC51";
Padma.consnt_KSH  = "\uEC52";   
Padma.consnt_RRA  = "\uEC53";

//extinct consonants (Telugu)
Padma.consnt_TCH  = "\uEC54";
Padma.consnt_TJ   = "\uEC55";

//Tamil and Malayalam
Padma.consnt_ZHA  = "\uEC56";

//Tamil
Padma.consnt_NNNA = "\uEC57";

//Gunimtaalu
Padma.vowelsn_AA  = "\uECA1";
Padma.vowelsn_I   = "\uECA2";
Padma.vowelsn_II  = "\uECA3";
Padma.vowelsn_U   = "\uECA4";
Padma.vowelsn_UU  = "\uECA5";
Padma.vowelsn_R   = "\uECA6";
Padma.vowelsn_RR  = "\uECA7";
Padma.vowelsn_L   = "\uECA8";
Padma.vowelsn_LL  = "\uECA9";
Padma.vowelsn_E   = "\uECAA";
Padma.vowelsn_EE  = "\uECAB";
Padma.vowelsn_AI  = "\uECAC";
Padma.vowelsn_O   = "\uECAD";
Padma.vowelsn_OO  = "\uECAE";
Padma.vowelsn_AU  = "\uECAF";

//Useful when a vowelsn is broken into component parts
Padma.vowelsn_EELEN = "\uEC1A";
Padma.vowelsn_AILEN = "\uEC1B";
Padma.vowelsn_AULEN = "\uEC1C";

//vattulu
Padma.vattu_KA    = "\uECB0";
Padma.vattu_KHA   = "\uECB1";
Padma.vattu_GA    = "\uECB2";
Padma.vattu_GHA   = "\uECB3";
Padma.vattu_NGA   = "\uECB4";
Padma.vattu_CA    = "\uECB5";
Padma.vattu_CHA   = "\uECB6";
Padma.vattu_JA    = "\uECB7";
Padma.vattu_JHA   = "\uECB8";
Padma.vattu_NYA   = "\uECB9";
Padma.vattu_TTA   = "\uECBA";
Padma.vattu_TTHA  = "\uECBB";
Padma.vattu_DDA   = "\uECBC";
Padma.vattu_DDHA  = "\uECBD";
Padma.vattu_NNA   = "\uECBE";
Padma.vattu_TA    = "\uECBF";
Padma.vattu_THA   = "\uECC0";
Padma.vattu_DA    = "\uECC1";
Padma.vattu_DHA   = "\uECC2";
Padma.vattu_NA    = "\uECC3";
Padma.vattu_PA    = "\uECC4";
Padma.vattu_PHA   = "\uECC5";
Padma.vattu_BA    = "\uECC6";
Padma.vattu_BHA   = "\uECC7";
Padma.vattu_MA    = "\uECC8";
Padma.vattu_YA    = "\uECC9";
Padma.vattu_RA    = "\uECCA";
Padma.vattu_LA    = "\uECCB";
Padma.vattu_VA    = "\uECCC";
Padma.vattu_SHA   = "\uECCD";
Padma.vattu_SSA   = "\uECCE";
Padma.vattu_SA    = "\uECCF";
Padma.vattu_HA    = "\uECD0";
Padma.vattu_LLA   = "\uECD1";
Padma.vattu_KSH   = "\uECD2";   
Padma.vattu_RRA   = "\uECD3";
Padma.vattu_TCH   = "\uECD4";
Padma.vattu_TJ    = "\uECD5";
Padma.vattu_ZHA   = "\uECD6";
Padma.vattu_NNNA  = "\uECD7";

//Special signs (inherited from Tamil)
Padma.digit_TEN      = "\uEC70";
Padma.digit_HUNDRED  = "\uEC71";
Padma.digit_THOUSAND = "\uEC72";
Padma.sign_DAY       = "\uEC73";
Padma.sign_MONTH     = "\uEC74";
Padma.sign_YEAR      = "\uEC75";
Padma.sign_DEBIT     = "\uEC76";
Padma.sign_CREDIT    = "\uEC77";
Padma.sign_ASABOVE   = "\uEC78";
Padma.sign_RUPEE     = "\uEC79";
Padma.sign_NUMBER    = "\uEC7A";

//Vowel and consonant range (exculudes #a#)
Padma.base_START = 0xEC21;
Padma.base_END   = 0xEC55;
//Dependent form range (exculudes #a#)
Padma.dep_START = 0xECA1;
Padma.dep_END   = 0xECD5;

//Symbol table
Padma.symbols = new Array();
Padma.symbols[Padma.vowel_A]     = Padma.type_accu;
Padma.symbols[Padma.vowel_AA]    = Padma.type_accu;
Padma.symbols[Padma.vowel_I]     = Padma.type_accu;
Padma.symbols[Padma.vowel_II]    = Padma.type_accu;
Padma.symbols[Padma.vowel_U]     = Padma.type_accu;
Padma.symbols[Padma.vowel_UU]    = Padma.type_accu;
Padma.symbols[Padma.vowel_R]     = Padma.type_accu;
Padma.symbols[Padma.vowel_RR]    = Padma.type_accu;
Padma.symbols[Padma.vowel_L]     = Padma.type_accu;
Padma.symbols[Padma.vowel_LL]    = Padma.type_accu;
Padma.symbols[Padma.vowel_E]     = Padma.type_accu;
Padma.symbols[Padma.vowel_EE]    = Padma.type_accu;
Padma.symbols[Padma.vowel_AI]    = Padma.type_accu;
Padma.symbols[Padma.vowel_O]     = Padma.type_accu;
Padma.symbols[Padma.vowel_OO]    = Padma.type_accu;
Padma.symbols[Padma.vowel_AU]    = Padma.type_accu;

Padma.symbols[Padma.candrabindu] = Padma.type_unknown;
Padma.symbols[Padma.visarga]     = Padma.type_accu_mod;
Padma.symbols[Padma.pollu]       = Padma.type_hallu_mod;
Padma.symbols[Padma.chillu]      = Padma.type_hallu_mod;
Padma.symbols[Padma.anusvara]    = Padma.type_accu_mod;
Padma.symbols[Padma.avagraha]    = Padma.type_unknown;
Padma.symbols[Padma.yati]        = Padma.type_unknown;
Padma.symbols[Padma.udAtta]      = Padma.type_unknown;
Padma.symbols[Padma.anudAtta]    = Padma.type_unknown;
Padma.symbols[Padma.svarita]     = Padma.type_unknown;
Padma.symbols[Padma.guru]        = Padma.type_unknown;
Padma.symbols[Padma.laghu]       = Padma.type_unknown;
Padma.symbols[Padma.danda]       = Padma.type_unknown;
Padma.symbols[Padma.ddanda]      = Padma.type_unknown;

Padma.symbols[Padma.digit_ZERO]  = Padma.type_digit;
Padma.symbols[Padma.digit_ONE]   = Padma.type_digit;
Padma.symbols[Padma.digit_TWO]   = Padma.type_digit;
Padma.symbols[Padma.digit_THREE] = Padma.type_digit;
Padma.symbols[Padma.digit_FOUR]  = Padma.type_digit;
Padma.symbols[Padma.digit_FIVE]  = Padma.type_digit;
Padma.symbols[Padma.digit_SIX]   = Padma.type_digit;
Padma.symbols[Padma.digit_SEVEN] = Padma.type_digit;
Padma.symbols[Padma.digit_EIGHT] = Padma.type_digit;
Padma.symbols[Padma.digit_NINE]  = Padma.type_digit;

Padma.symbols[Padma.consnt_KA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_KHA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_GA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_GHA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_NGA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_CA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_CHA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_JA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_JHA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_NYA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_TTA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_TTHA] = Padma.type_hallu;
Padma.symbols[Padma.consnt_DDA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_DDHA] = Padma.type_hallu;
Padma.symbols[Padma.consnt_NNA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_TA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_THA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_DA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_DHA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_NA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_PA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_PHA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_BA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_BHA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_MA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_YA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_RA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_LA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_VA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_SHA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_SSA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_SA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_HA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_LLA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_KSH]  = Padma.type_hallu;   
Padma.symbols[Padma.consnt_RRA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_TCH]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_TJ]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_ZHA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_NNNA] = Padma.type_hallu;

Padma.symbols[Padma.vowelsn_AA]  = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_I]   = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_II]  = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_U]   = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_UU]  = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_R]   = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_RR]  = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_L]   = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_LL]  = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_E]   = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_EE]  = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_AI]  = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_O]   = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_OO]  = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_AU]  = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_EELEN]  = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_AILEN]  = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_AULEN]  = Padma.type_gunintam;

Padma.symbols[Padma.vattu_KA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_KHA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_GA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_GHA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_NGA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_CA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_CHA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_JA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_JHA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_NYA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_TTA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_TTHA]  = Padma.type_vattu;
Padma.symbols[Padma.vattu_DDA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_DDHA]  = Padma.type_vattu;
Padma.symbols[Padma.vattu_NNA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_TA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_THA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_DA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_DHA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_NA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_PA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_PHA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_BA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_BHA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_MA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_YA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_RA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_LA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_VA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_SHA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_SSA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_SA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_HA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_LLA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_KSH]   = Padma.type_vattu;   
Padma.symbols[Padma.vattu_RRA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_TCH]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_TJ]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_ZHA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_NNNA]  = Padma.type_vattu;

Padma.symbols[Padma.digit_TEN]      = Padma.type_digit;
Padma.symbols[Padma.digit_HUNDRED]  = Padma.type_digit;
Padma.symbols[Padma.digit_THOUSAND] = Padma.type_digit;
Padma.symbols[Padma.sign_DAY]       = Padma.type_unknown;
Padma.symbols[Padma.sign_MONTH]     = Padma.type_unknown;
Padma.symbols[Padma.sign_YEAR]      = Padma.type_unknown;
Padma.symbols[Padma.sign_DEBIT]     = Padma.type_unknown;
Padma.symbols[Padma.sign_CREDIT]    = Padma.type_unknown;
Padma.symbols[Padma.sign_ASABOVE]   = Padma.type_unknown;
Padma.symbols[Padma.sign_RUPEE]     = Padma.type_unknown;
Padma.symbols[Padma.sign_NUMBER]    = Padma.type_unknown;

Padma.isVowel = function (str)
{
    return Padma.symbols[str] == Padma.type_accu;
}

Padma.isSpecial = function (str)
{
    var val = Padma.symbols[str];
    return val == null || val == Padma.type_unknown;
}

Padma.isConsonant = function (str)
{
    return Padma.symbols[str] == Padma.type_hallu;
}

Padma.isDigit = function (str)
{
    return Padma.symbols[str] == Padma.type_digit;
}

Padma.isGunintam = function (str)
{
    return Padma.symbols[str] == Padma.type_gunintam;
}

Padma.isVattu = function (str)
{
    return Padma.symbols[str] == Padma.type_vattu;
}

Padma.getType = function (str)
{
    if (str == null)
        return Padma.type_unknown;
    var val = Padma.symbols[str];
    return val == null ? Padma.type_unknown : val;
}

Padma.dependentForm = function (str)
{
    var response = "";
    for(var i = 0; i < str.length; ++i) {
        var code = str.charCodeAt(i);
        if (code >= Padma.base_START && code <= Padma.base_END)
            response += String.fromCharCode(code + 0x80);
    }
    return response;
}

Padma.baseForm = function (str)
{
    var response = "";
    for(var i = 0; i < str.length; ++i) {
        var code = str.charCodeAt(i);
        if (code >= Padma.dep_START && code <= Padma.dep_END)
            response += String.fromCharCode(code - 0x80);
    }
    return response;
}
