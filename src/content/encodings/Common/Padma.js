// $Id: Padma.js,v 1.18 2012/01/22 04:12:49 vnagarjuna Exp $ -->

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

//Internal format - This is my way of expressing displeasure with the Unicode standard
//IMHO, Unicode is not consistent, not optimized and is unintuitive.
function Padma()
{
}

//Script codes
Padma.script_TELUGU     = 0;
Padma.script_MALAYALAM  = 1;
Padma.script_TAMIL      = 2;
Padma.script_DEVANAGARI = 3;
Padma.script_GUJARATI   = 4;
Padma.script_KANNADA    = 5;
Padma.script_BENGALI    = 6;
Padma.script_GURMUKHI   = 7;
Padma.script_ORIYA      = 8;

//7 scripts supported now
Padma.script_MAXSCRIPTS = 8;

//Script names
Padma.scripts = new Array();
Padma.scripts[Padma.script_TELUGU]     = "Telugu";
Padma.scripts[Padma.script_MALAYALAM]  = "Malayalam";
Padma.scripts[Padma.script_TAMIL]      = "Tamil";
Padma.scripts[Padma.script_DEVANAGARI] = "Devanagari";
Padma.scripts[Padma.script_GUJARATI]   = "Gujarati";
Padma.scripts[Padma.script_KANNADA]    = "Kannada";
Padma.scripts[Padma.script_BENGALI]    = "Bengali";
Padma.scripts[Padma.script_GURMUKHI]   = "Gurmukhi";

//Types (values to allow bit wise operations)
Padma.type_accu      = 1;
Padma.type_gunintam  = 2;
Padma.type_accu_mod  = 4;    //vowel modififers
Padma.type_digit     = 8;
Padma.type_vattu     = 16;
Padma.type_hallu     = 32;
Padma.type_hallu_mod = 64;
Padma.type_half_form = 128;
Padma.type_unknown   = 256; //catch all

//Use Unicode Private Use Area for Padma's internal symbols starting with U+EC00.
//Code pints used: +UEC00-+UEC0F, +UEC10-+UEC1E, +UEC20-+UEC68, +UEC70-+UEC80, +UECA1-+UECE8, +UED33-+UED68.

//Code points 32-64, 91-96, 123-127 (from the ASCII range) are not explicitly listed here
//but are part of Padma's internal format and are of type Padma.type_unknown.

//Dependent forms of vowels and consonats (gunintamulu and vowels respectively) are off 0x80 from their base forms

//Vowel modifiers (including pollu with visarga and anusvara
Padma.anusvara    = "\uEC00";   //60416
Padma.visarga     = "\uEC01";
Padma.pollu       = "\uEC02";   //dead consonant
Padma.chillu      = "\uEC0D";   //half consonant - in honor of the Malayalam word chillksharamu (anything generated with a ZWJ in Unicode)
Padma.syllbreak   = "\uEC7B";   //syllable break - (anything generated with a ZWNJ in Unicode)
Padma.nukta       = "\uEC7C";
Padma.ardhavisarga = "\uEC7D";
Padma.tippi       = "\uEC7E";   //Gurmukhi specific
Padma.addak       = "\uEC7F";   //Gurmukhi specific
Padma.ekonkar     = "\uEC80";   //Gurmukhi specific
Padma.chillu_C2   = "\uEC1E";   //half consonant for C2 conjoining consonants

//Other names for the equivalent of pollu
Padma.virama       = Padma.pollu;   //Telugu
Padma.chandrakkala = Padma.pollu;   //Malayalam
Padma.pulli        = Padma.pollu;   //Tamil
Padma.halant       = Padma.pollu;   //Devanagari
Padma.hasant       = Padma.pollu;   //Bengali

//Specials
Padma.candrabindu = "\uEC03";
Padma.avagraha    = "\uEC04";
Padma.yati        = "\uEC05";   //vertical diamond filled dark (classical), sometimes asterisk
Padma.udAtta      = "\uEC06";   //this and the next 2 are vedic symbols
Padma.anudAtta    = "\uEC07";
Padma.svarita     = "\uEC08";   //equivalent of udAtta
Padma.guru        = "\uEC09";
Padma.laghu       = "\uEC0A";
Padma.danda       = "\uEC0B";   //purna virama
Padma.ddanda      = "\uEC0C";   //deergha virama (double danda)
Padma.abbrev      = "\uEC0E";
Padma.om          = "\uEC0F";

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
Padma.vowel_SHT_A = "\uEC21";  //SHORT A - DEVANAGARI
Padma.vowel_AA    = "\uEC22";
Padma.vowel_I     = "\uEC23";
Padma.vowel_II    = "\uEC24";
Padma.vowel_U     = "\uEC25";
Padma.vowel_UU    = "\uEC26";
Padma.vowel_R     = "\uEC27";
Padma.vowel_RR    = "\uEC28";
Padma.vowel_L     = "\uEC29";
Padma.vowel_LL    = "\uEC2A";
Padma.vowel_CDR_E = "\uEC2B";  //CANDRA E - DEVANAGARI
Padma.vowel_E     = "\uEC2C";
Padma.vowel_EE    = "\uEC2D";
Padma.vowel_AI    = "\uEC2E";
Padma.vowel_CDR_O = "\uEC2F";  //CANDRA O - DEVANAGARI
Padma.vowel_O     = "\uEC30";
Padma.vowel_OO    = "\uEC31";
Padma.vowel_AU    = "\uEC32";

//Consonants
Padma.consnt_KA   = "\uEC33";
Padma.consnt_QA   = "\uEC34";  //Urdu
Padma.consnt_KHA  = "\uEC35";
Padma.consnt_KHHA = "\uEC36";  //Urdu
Padma.consnt_GA   = "\uEC37";
Padma.consnt_GHA  = "\uEC38";
Padma.consnt_GHHA = "\uEC39";  //Urdu
Padma.consnt_NGA  = "\uEC3A";
Padma.consnt_CA   = "\uEC3B";
Padma.consnt_CHA  = "\uEC3C";
Padma.consnt_JA   = "\uEC3D";
Padma.consnt_ZA   = "\uEC3E";  //Urdu
Padma.consnt_JHA  = "\uEC3F";
Padma.consnt_NYA  = "\uEC40";
Padma.consnt_TTA  = "\uEC41";
Padma.consnt_TTHA = "\uEC42";
Padma.consnt_DDA  = "\uEC43";
Padma.consnt_DDDHA= "\uEC44";  //Devanagari (Flapped DDA)
Padma.consnt_DDHA = "\uEC45";
Padma.consnt_RHA  = "\uEC46";  //Devanagari (Flapped DDHA)
Padma.consnt_NNA  = "\uEC47";
Padma.consnt_TA   = "\uEC48";
Padma.consnt_THA  = "\uEC49";
Padma.consnt_DA   = "\uEC4A";
Padma.consnt_DHA  = "\uEC4B";
Padma.consnt_NA   = "\uEC4C";
Padma.consnt_NNNA = "\uEC4D";  //Tamil
Padma.consnt_PA   = "\uEC4E";
Padma.consnt_FA   = "\uEC4F";  //Urdu
Padma.consnt_PHA  = "\uEC50";
Padma.consnt_BA   = "\uEC51";
Padma.consnt_BHA  = "\uEC52";
Padma.consnt_MA   = "\uEC53";
Padma.consnt_YA   = "\uEC54";
Padma.consnt_YYA  = "\uEC55";  //Bengali
Padma.consnt_RA   = "\uEC56";
Padma.consnt_RRA  = "\uEC57";
Padma.consnt_LA   = "\uEC58";
Padma.consnt_LLA  = "\uEC59";
Padma.consnt_ZHA  = "\uEC5A";  //Malayalam and Tamil
Padma.consnt_VA   = "\uEC5B";
Padma.consnt_SHA  = "\uEC5C";
Padma.consnt_SSA  = "\uEC5D";
Padma.consnt_SA   = "\uEC5E";
Padma.consnt_HA   = "\uEC5F";
Padma.consnt_TSA  = "\uEC60";  //Telugu (Extinct)
Padma.consnt_DJA  = "\uEC61";  //Telugu (Extinct)
Padma.consnt_GGA  = "\uEC62";  //Sindhi
Padma.consnt_JJA  = "\uEC63";  //Sindhi
Padma.consnt_DDDA = "\uEC64";  //Sindhi
Padma.consnt_BBA  = "\uEC65";  //Sindhi
Padma.consnt_RA_MD = "\uEC66";  //Assamese - RA with mid diagonal
Padma.consnt_RA_LD = "\uEC67";  //Assamese - RA with lower diagonal
Padma.consnt_KHANDA_TA = "\uEC68";  //Bengali

//Gunimtaalu
Padma.vowelsn_AA    = "\uECA2";
Padma.vowelsn_I     = "\uECA3";
Padma.vowelsn_II    = "\uECA4";
Padma.vowelsn_U     = "\uECA5";
Padma.vowelsn_UU    = "\uECA6";
Padma.vowelsn_R     = "\uECA7";
Padma.vowelsn_RR    = "\uECA8";
Padma.vowelsn_L     = "\uECA9";
Padma.vowelsn_LL    = "\uECAA";
Padma.vowelsn_CDR_E = "\uECAB";
Padma.vowelsn_E     = "\uECAC";
Padma.vowelsn_EE    = "\uECAD";
Padma.vowelsn_AI    = "\uECAE";
Padma.vowelsn_CDR_O = "\uECAF";
Padma.vowelsn_O     = "\uECB0";
Padma.vowelsn_OO    = "\uECB1";
Padma.vowelsn_AU    = "\uECB2";

//Useful when a vowelsn is broken into component parts
Padma.vowelsn_EELEN = "\uEC1A";
Padma.vowelsn_AILEN = "\uEC1B";
Padma.vowelsn_AULEN = "\uEC1C";
Padma.vowelsn_IILEN = "\uEC1D";

//vattulu
Padma.vattu_KA    = "\uECB3";
Padma.vattu_QA    = "\uECB4";
Padma.vattu_KHA   = "\uECB5";
Padma.vattu_KHHA  = "\uECB6";
Padma.vattu_GA    = "\uECB7";
Padma.vattu_GHA   = "\uECB8";
Padma.vattu_GHHA  = "\uECB9";
Padma.vattu_NGA   = "\uECBA";
Padma.vattu_CA    = "\uECBB";
Padma.vattu_CHA   = "\uECBC";
Padma.vattu_JA    = "\uECBD";
Padma.vattu_ZA    = "\uECBE";
Padma.vattu_JHA   = "\uECBF";
Padma.vattu_NYA   = "\uECC0";
Padma.vattu_TTA   = "\uECC1";
Padma.vattu_TTHA  = "\uECC2";
Padma.vattu_DDA   = "\uECC3";
Padma.vattu_DDDHA = "\uECC4";
Padma.vattu_DDHA  = "\uECC5";
Padma.vattu_RHA   = "\uECC6";
Padma.vattu_NNA   = "\uECC7";
Padma.vattu_TA    = "\uECC8";
Padma.vattu_THA   = "\uECC9";
Padma.vattu_DA    = "\uECCA";
Padma.vattu_DHA   = "\uECCB";
Padma.vattu_NA    = "\uECCC";
Padma.vattu_NNNA  = "\uECCD";
Padma.vattu_PA    = "\uECCE";
Padma.vattu_FA    = "\uECCF";
Padma.vattu_PHA   = "\uECD0";
Padma.vattu_BA    = "\uECD1";
Padma.vattu_BHA   = "\uECD2";
Padma.vattu_MA    = "\uECD3";
Padma.vattu_YA    = "\uECD4";
Padma.vattu_YYA   = "\uECD5";
Padma.vattu_RA    = "\uECD6";
Padma.vattu_RRA   = "\uECD7";
Padma.vattu_LA    = "\uECD8";
Padma.vattu_LLA   = "\uECD9";
Padma.vattu_ZHA   = "\uECDA";
Padma.vattu_VA    = "\uECDB";
Padma.vattu_SHA   = "\uECDC";
Padma.vattu_SSA   = "\uECDD";
Padma.vattu_SA    = "\uECDE";
Padma.vattu_HA    = "\uECDF";
Padma.vattu_TSA   = "\uECE0";
Padma.vattu_DJA   = "\uECE1";
Padma.vattu_GGA   = "\uECE2";
Padma.vattu_JJA   = "\uECE3";
Padma.vattu_DDDA  = "\uECE4";
Padma.vattu_BBA   = "\uECE5";
Padma.vattu_RA_MD = "\uECE6";
Padma.vattu_RA_LD = "\uECE7";
Padma.vattu_KHANDA_TA = "\uECE8";

//Half Forms
Padma.halffm_KA   = "\uED33";
Padma.halffm_QA   = "\uED34";  //Urdu
Padma.halffm_KHA  = "\uED35";
Padma.halffm_KHHA = "\uED36";  //Urdu
Padma.halffm_GA   = "\uED37";
Padma.halffm_GHA  = "\uED38";
Padma.halffm_GHHA = "\uED39";  //Urdu
Padma.halffm_NGA  = "\uED3A";
Padma.halffm_CA   = "\uED3B";
Padma.halffm_CHA  = "\uED3C";
Padma.halffm_JA   = "\uED3D";
Padma.halffm_ZA   = "\uED3E";  //Urdu
Padma.halffm_JHA  = "\uED3F";
Padma.halffm_NYA  = "\uED40";
Padma.halffm_TTA  = "\uED41";
Padma.halffm_TTHA = "\uED42";
Padma.halffm_DDA  = "\uED43";
Padma.halffm_DDDHA= "\uED44";  //Devanagari (Flapped DDA)
Padma.halffm_DDHA = "\uED45";
Padma.halffm_RHA  = "\uED46";  //Devanagari (Flapped DDHA)
Padma.halffm_NNA  = "\uED47";
Padma.halffm_TA   = "\uED48";
Padma.halffm_THA  = "\uED49";
Padma.halffm_DA   = "\uED4A";
Padma.halffm_DHA  = "\uED4B";
Padma.halffm_NA   = "\uED4C";
Padma.halffm_NNNA = "\uED4D";  //Tamil
Padma.halffm_PA   = "\uED4E";
Padma.halffm_FA   = "\uED4F";  //Urdu
Padma.halffm_PHA  = "\uED50";
Padma.halffm_BA   = "\uED51";
Padma.halffm_BHA  = "\uED52";
Padma.halffm_MA   = "\uED53";
Padma.halffm_YA   = "\uED54";
Padma.halffm_YYA  = "\uED55";  //Bengali
Padma.halffm_RA   = "\uED56";
Padma.halffm_RRA  = "\uED57";
Padma.halffm_LA   = "\uED58";
Padma.halffm_LLA  = "\uED59";
Padma.halffm_ZHA  = "\uED5A";  //Malayalam and Tamil
Padma.halffm_VA   = "\uED5B";
Padma.halffm_SHA  = "\uED5C";
Padma.halffm_SSA  = "\uED5D";
Padma.halffm_SA   = "\uED5E";
Padma.halffm_HA   = "\uED5F";
Padma.halffm_TSA  = "\uED60";  //Telugu (Extinct)
Padma.halffm_DJA  = "\uED61";  //Telugu (Extinct)
Padma.halffm_GGA  = "\uED62";
Padma.halffm_JJA  = "\uED63";
Padma.halffm_DDDA = "\uED64";
Padma.halffm_BBA  = "\uED65";
Padma.halffm_RA_MD = "\uED66";
Padma.halffm_RA_LD = "\uED67";
Padma.halffm_KHANDA_TA = "\uED68";

//Special signs
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
Padma.base_START = 0xEC22;
Padma.base_END   = 0xEC68;
//Dependent form range (exculudes #a#)
Padma.dep_START = 0xECA2;
Padma.dep_END   = 0xECE8;
//Half form range
Padma.half_START = 0xED33;
Padma.half_END   = 0xED68;
//Vattu
Padma.vattu_START = 0xECB3;
Padma.vattu_END   = 0xECE8;

//Symbol table
Padma.symbols = new Object();
Padma.symbols[Padma.vowel_A]     = Padma.type_accu;
Padma.symbols[Padma.vowel_SHT_A] = Padma.type_accu;
Padma.symbols[Padma.vowel_AA]    = Padma.type_accu;
Padma.symbols[Padma.vowel_I]     = Padma.type_accu;
Padma.symbols[Padma.vowel_II]    = Padma.type_accu;
Padma.symbols[Padma.vowel_U]     = Padma.type_accu;
Padma.symbols[Padma.vowel_UU]    = Padma.type_accu;
Padma.symbols[Padma.vowel_R]     = Padma.type_accu;
Padma.symbols[Padma.vowel_RR]    = Padma.type_accu;
Padma.symbols[Padma.vowel_L]     = Padma.type_accu;
Padma.symbols[Padma.vowel_LL]    = Padma.type_accu;
Padma.symbols[Padma.vowel_CDR_E] = Padma.type_accu;
Padma.symbols[Padma.vowel_E]     = Padma.type_accu;
Padma.symbols[Padma.vowel_EE]    = Padma.type_accu;
Padma.symbols[Padma.vowel_AI]    = Padma.type_accu;
Padma.symbols[Padma.vowel_CDR_O] = Padma.type_accu;
Padma.symbols[Padma.vowel_O]     = Padma.type_accu;
Padma.symbols[Padma.vowel_OO]    = Padma.type_accu;
Padma.symbols[Padma.vowel_AU]    = Padma.type_accu;

Padma.symbols[Padma.candrabindu] = Padma.type_unknown;
Padma.symbols[Padma.visarga]     = Padma.type_accu_mod;
Padma.symbols[Padma.ardhavisarga]= Padma.type_accu_mod;
Padma.symbols[Padma.pollu]       = Padma.type_hallu_mod;
Padma.symbols[Padma.chillu]      = Padma.type_hallu_mod;
Padma.symbols[Padma.chillu_C2]   = Padma.type_half_form;
Padma.symbols[Padma.syllbreak]   = Padma.type_hallu_mod;
Padma.symbols[Padma.nukta]       = Padma.type_hallu_mod;
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
Padma.symbols[Padma.abbrev]      = Padma.type_unknown;
Padma.symbols[Padma.om]          = Padma.type_unknown;
Padma.symbols[Padma.tippi]       = Padma.type_unknown;  //TODO: Is this right?
Padma.symbols[Padma.addak]       = Padma.type_unknown;  //TODO: Is this right?
Padma.symbols[Padma.ekonkar]     = Padma.type_unknown;

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
Padma.symbols[Padma.consnt_QA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_KHA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_KHHA] = Padma.type_hallu;
Padma.symbols[Padma.consnt_GA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_GHA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_GHHA] = Padma.type_hallu;
Padma.symbols[Padma.consnt_NGA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_CA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_CHA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_JA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_ZA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_JHA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_NYA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_TTA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_TTHA] = Padma.type_hallu;
Padma.symbols[Padma.consnt_DDA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_DDDHA] = Padma.type_hallu;
Padma.symbols[Padma.consnt_DDHA] = Padma.type_hallu;
Padma.symbols[Padma.consnt_RHA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_NNA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_TA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_THA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_DA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_DHA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_NA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_NNNA] = Padma.type_hallu;
Padma.symbols[Padma.consnt_PA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_FA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_PHA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_BA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_BHA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_MA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_YA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_YYA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_RA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_RRA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_LA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_LLA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_ZHA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_VA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_SHA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_SSA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_SA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_HA]   = Padma.type_hallu;
Padma.symbols[Padma.consnt_TSA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_DJA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_GGA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_JJA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_DDDA] = Padma.type_hallu;
Padma.symbols[Padma.consnt_BBA]  = Padma.type_hallu;
Padma.symbols[Padma.consnt_RA_MD] = Padma.type_hallu;
Padma.symbols[Padma.consnt_RA_LD] = Padma.type_hallu;
Padma.symbols[Padma.consnt_KHANDA_TA] = Padma.type_hallu;

Padma.symbols[Padma.vowelsn_AA]  = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_I]   = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_II]  = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_U]   = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_UU]  = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_R]   = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_RR]  = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_L]   = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_LL]  = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_CDR_E] = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_E]   = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_EE]  = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_AI]  = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_CDR_O] = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_O]   = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_OO]  = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_AU]  = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_EELEN] = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_AILEN] = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_AULEN] = Padma.type_gunintam;
Padma.symbols[Padma.vowelsn_IILEN] = Padma.type_gunintam;

Padma.symbols[Padma.vattu_KA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_QA]    = Padma.type_hallu;
Padma.symbols[Padma.vattu_KHA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_KHHA]  = Padma.type_hallu;
Padma.symbols[Padma.vattu_GA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_GHA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_GHHA]  = Padma.type_hallu;
Padma.symbols[Padma.vattu_NGA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_CA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_CHA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_JA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_ZA]    = Padma.type_hallu;
Padma.symbols[Padma.vattu_JHA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_NYA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_TTA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_TTHA]  = Padma.type_vattu;
Padma.symbols[Padma.vattu_DDA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_DDDHA] = Padma.type_hallu;
Padma.symbols[Padma.vattu_DDHA]  = Padma.type_vattu;
Padma.symbols[Padma.vattu_RHA]   = Padma.type_hallu;
Padma.symbols[Padma.vattu_NNA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_TA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_THA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_DA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_DHA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_NA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_NNNA]  = Padma.type_vattu;
Padma.symbols[Padma.vattu_PA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_FA]    = Padma.type_hallu;
Padma.symbols[Padma.vattu_PHA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_BA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_BHA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_MA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_YA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_YYA]   = Padma.type_hallu;
Padma.symbols[Padma.vattu_RA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_RRA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_LA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_LLA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_ZHA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_VA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_SHA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_SSA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_SA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_HA]    = Padma.type_vattu;
Padma.symbols[Padma.vattu_TSA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_DJA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_GGA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_JJA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_DDDA]  = Padma.type_vattu;
Padma.symbols[Padma.vattu_BBA]   = Padma.type_vattu;
Padma.symbols[Padma.vattu_RA_MD] = Padma.type_vattu;
Padma.symbols[Padma.vattu_RA_LD] = Padma.type_vattu;
Padma.symbols[Padma.vattu_KHANDA_TA] = Padma.type_vattu;

Padma.symbols[Padma.halffm_KA]   = Padma.type_half_form;
Padma.symbols[Padma.halffm_QA]   = Padma.type_half_form;
Padma.symbols[Padma.halffm_KHA]  = Padma.type_half_form;
Padma.symbols[Padma.halffm_KHHA] = Padma.type_half_form;
Padma.symbols[Padma.halffm_GA]   = Padma.type_half_form;
Padma.symbols[Padma.halffm_GHA]  = Padma.type_half_form;
Padma.symbols[Padma.halffm_GHHA] = Padma.type_half_form;
Padma.symbols[Padma.halffm_NGA]  = Padma.type_half_form;
Padma.symbols[Padma.halffm_CA]   = Padma.type_half_form;
Padma.symbols[Padma.halffm_CHA]  = Padma.type_half_form;
Padma.symbols[Padma.halffm_JA]   = Padma.type_half_form;
Padma.symbols[Padma.halffm_ZA]   = Padma.type_half_form;
Padma.symbols[Padma.halffm_JHA]  = Padma.type_half_form;
Padma.symbols[Padma.halffm_NYA]  = Padma.type_half_form;
Padma.symbols[Padma.halffm_TTA]  = Padma.type_half_form;
Padma.symbols[Padma.halffm_TTHA] = Padma.type_half_form;
Padma.symbols[Padma.halffm_DDA]  = Padma.type_half_form;
Padma.symbols[Padma.halffm_DDDHA] = Padma.type_half_form;
Padma.symbols[Padma.halffm_DDHA] = Padma.type_half_form;
Padma.symbols[Padma.halffm_RHA]  = Padma.type_half_form;
Padma.symbols[Padma.halffm_NNA]  = Padma.type_half_form;
Padma.symbols[Padma.halffm_TA]   = Padma.type_half_form;
Padma.symbols[Padma.halffm_THA]  = Padma.type_half_form;
Padma.symbols[Padma.halffm_DA]   = Padma.type_half_form;
Padma.symbols[Padma.halffm_DHA]  = Padma.type_half_form;
Padma.symbols[Padma.halffm_NA]   = Padma.type_half_form;
Padma.symbols[Padma.halffm_NNNA] = Padma.type_half_form;
Padma.symbols[Padma.halffm_PA]   = Padma.type_half_form;
Padma.symbols[Padma.halffm_FA]   = Padma.type_half_form;
Padma.symbols[Padma.halffm_PHA]  = Padma.type_half_form;
Padma.symbols[Padma.halffm_BA]   = Padma.type_half_form;
Padma.symbols[Padma.halffm_BHA]  = Padma.type_half_form;
Padma.symbols[Padma.halffm_MA]   = Padma.type_half_form;
Padma.symbols[Padma.halffm_YA]   = Padma.type_half_form;
Padma.symbols[Padma.halffm_YYA]  = Padma.type_half_form;
Padma.symbols[Padma.halffm_RA]   = Padma.type_half_form;
Padma.symbols[Padma.halffm_RRA]  = Padma.type_half_form;
Padma.symbols[Padma.halffm_LA]   = Padma.type_half_form;
Padma.symbols[Padma.halffm_LLA]  = Padma.type_half_form;
Padma.symbols[Padma.halffm_ZHA]  = Padma.type_half_form;
Padma.symbols[Padma.halffm_VA]   = Padma.type_half_form;
Padma.symbols[Padma.halffm_SHA]  = Padma.type_half_form;
Padma.symbols[Padma.halffm_SSA]  = Padma.type_half_form;
Padma.symbols[Padma.halffm_SA]   = Padma.type_half_form;
Padma.symbols[Padma.halffm_HA]   = Padma.type_half_form;
Padma.symbols[Padma.halffm_TSA]  = Padma.type_half_form;
Padma.symbols[Padma.halffm_DJA]  = Padma.type_half_form;
Padma.symbols[Padma.halffm_GGA]  = Padma.type_half_form;
Padma.symbols[Padma.halffm_JJA]  = Padma.type_half_form;
Padma.symbols[Padma.halffm_DDDA] = Padma.type_half_form;
Padma.symbols[Padma.halffm_BBA]  = Padma.type_half_form;
Padma.symbols[Padma.halffm_RA_MD] = Padma.type_half_form;
Padma.symbols[Padma.halffm_RA_LD] = Padma.type_half_form;
Padma.symbols[Padma.halffm_KHANDA_TA] = Padma.type_half_form;

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

Padma.isHalfForm = function (str)
{
    return Padma.symbols[str] == Padma.type_half_form;
}

Padma.getType = function (str)
{
    if (str == null)
        return Padma.type_unknown;
    var val = Padma.symbols[str];
    return val == null ? Padma.type_unknown : val;
}

//No Input validation - only one char code assumed
Padma.fast_Vattu = function (code)
{
    return String.fromCharCode(code + 0x80);
}

Padma.fast_halfForm = function (code)
{
    return String.fromCharCode(code + 0x100);
}

Padma.fast_baseFormFromVattu = function (code)
{
    return String.fromCharCode(code - 0x80);
}

Padma.fast_baseFormFromHalfForm = function (code)
{
    return String.fromCharCode(code - 0x100);
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

Padma.halfForm = function (str)
{
    var response = "";
    for(var i = 0; i < str.length; ++i) {
        var code = str.charCodeAt(i);
        if (code >= Padma.base_START && code <= Padma.base_END)
            response += String.fromCharCode(code + 0x100);
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
        else if (code >= Padma.half_START && code <= Padma.half_END)
            response += String.fromCharCode(code - 0x100);
    }
    return response;
}
