// $Id: padma.js,v 1.2 2005/03/28 19:07:14 vnagarjuna Exp $ -->

/* ***** BEGIN LICENSE BLOCK ***** 
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Initial Developer of the Original Code is Nagarjuna Venna.
 * Portions created by the Initial Developer are Copyright (C) 2005
 * by the Initial Developer. All Rights Reserved.
 *
 * Contributor(s): Nagarjuna Venna <vnagarjuna@yahoo.com>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

//Unicode
//Various Signs
var Unicode_candrabindu = "\u0C01";
var Unicode_anusvara    = "\u0C02";  //sunna
var Unicode_visarga     = "\u0C03";

//Independent Vowels
var Unicode_letter_A    = "\u0C05";
var Unicode_letter_AA   = "\u0C06";
var Unicode_letter_I    = "\u0C07";
var Unicode_letter_II   = "\u0C08";
var Unicode_letter_U    = "\u0C09";
var Unicode_letter_UU   = "\u0C0A";
var Unicode_letter_R    = "\u0C0B";   //vocalic R
var Unicode_letter_RR   = "\u0C60";   //vocalic R
var Unicode_letter_L    = "\u0C0C";   //vocalic L
var Unicode_letter_LL   = "\u0C61";   //vocalic L
var Unicode_letter_E    = "\u0C0E";
var Unicode_letter_EE   = "\u0C0F";
var Unicode_letter_AI   = "\u0C10";
var Unicode_letter_O    = "\u0C12";
var Unicode_letter_OO   = "\u0C13";
var Unicode_letter_AU   = "\u0C14";

//Consonants
var Unicode_letter_KA   = "\u0C15";
var Unicode_letter_KHA  = "\u0C16";
var Unicode_letter_GA   = "\u0C17";
var Unicode_letter_GHA  = "\u0C18";
var Unicode_letter_NGA  = "\u0C19";
var Unicode_letter_CA   = "\u0C1A";
var Unicode_letter_CHA  = "\u0C1B";
var Unicode_letter_JA   = "\u0C1C";
var Unicode_letter_JHA  = "\u0C1D";
var Unicode_letter_NYA  = "\u0C1E";
var Unicode_letter_TTA  = "\u0C1F";
var Unicode_letter_TTHA = "\u0C20";
var Unicode_letter_DDA  = "\u0C21";
var Unicode_letter_DDHA = "\u0C22";
var Unicode_letter_NNA  = "\u0C23";
var Unicode_letter_TA   = "\u0C24";
var Unicode_letter_THA  = "\u0C25";
var Unicode_letter_DA   = "\u0C26";
var Unicode_letter_DHA  = "\u0C27";
var Unicode_letter_NA   = "\u0C28";
var Unicode_letter_PA   = "\u0C2A";
var Unicode_letter_PHA  = "\u0C2B";
var Unicode_letter_BA   = "\u0C2C";
var Unicode_letter_BHA  = "\u0C2D";
var Unicode_letter_MA   = "\u0C2E";
var Unicode_letter_YA   = "\u0C2F";
var Unicode_letter_RA   = "\u0C30";
var Unicode_letter_RRA  = "\u0C31";
var Unicode_letter_LA   = "\u0C32";
var Unicode_letter_LLA  = "\u0C33";
var Unicode_letter_VA   = "\u0C35";
var Unicode_letter_SHA  = "\u0C36";
var Unicode_letter_SSA  = "\u0C37";
var Unicode_letter_SA   = "\u0C38";
var Unicode_letter_HA   = "\u0C39";

//Dependent Vowel Signs
var Unicode_vowelsn_AA  = "\u0C3E";
var Unicode_vowelsn_I   = "\u0C3F";
var Unicode_vowelsn_II  = "\u0C40";
var Unicode_vowelsn_U   = "\u0C41";
var Unicode_vowelsn_UU  = "\u0C42";
var Unicode_vowelsn_R   = "\u0C43";
var Unicode_vowelsn_RR  = "\u0C44";
var Unicode_vowelsn_E   = "\u0C46";
var Unicode_vowelsn_EE  = "\u0C47";
var Unicode_vowelsn_AI  = "\u0C48";   //this is the same as 0C46 followed by 0C56
var Unicode_vowelsn_O   = "\u0C4A";
var Unicode_vowelsn_OO  = "\u0C4B";
var Unicode_vowelsn_AU  = "\u0C4C";

//Miscellaneous Signs
var Unicode_misc_VIRAMA   = "\u0C4D";   //halant
var Unicode_misc_LENGTH   = "\u0C55";
var Unicode_misc_AILEN    = "\u0C56";
var Unicode_misc_AVAGRAHA = "\u093D";
var Unicode_misc_NUKTA    = "\u093C";

//Ligatures
var Unicode_ligature_KSH = "\u0C15\u0C37";
//nukt
var Unicode_nukt_TCH = "\u0C1A\u093C\u0C4D";
var Unicode_nukt_TJ  = "\u0C1C\u093C\u0C4d";
//Miscellaneous
var Unicode_conjuct_JNY = "\u0C1C\u0C1E";
var Unicode_conjuct_DDDD = "\u0C21\u0C21";
var Unicode_conjuct_TTTT = "\u0C1F\u0C1F";

//Digits
var Unicode_digit_ZERO  = "\u0C66";
var Unicode_digit_ONE   = "\u0C67";
var Unicode_digit_TWO   = "\u0C68";
var Unicode_digit_THREE = "\u0C69";
var Unicode_digit_FOUR  = "\u0C6A";
var Unicode_digit_FIVE  = "\u0C6B";
var Unicode_digit_SIX   = "\u0C6C";
var Unicode_digit_SEVEN = "\u0C6D";
var Unicode_digit_EIGHT = "\u0C6E";
var Unicode_digit_NINE  = "\u0C6F";

//Zero-Width Joiner/Non Joiner for Virama
var Unicode_misc_ZWNJ   = "\u200C";
var Unicode_misc_ZWJ    = "\u200D";

var Unicode_independentVowels = new Array();
var Unicode_vowelMap = new Array();

Unicode_independentVowels[Unicode_letter_A] = 1;
Unicode_independentVowels[Unicode_letter_AA] = 1;
Unicode_independentVowels[Unicode_letter_I] = 1;
Unicode_independentVowels[Unicode_letter_II] = 1;
Unicode_independentVowels[Unicode_letter_U] = 1;
Unicode_independentVowels[Unicode_letter_UU] = 1;
Unicode_independentVowels[Unicode_letter_R] = 1;
Unicode_independentVowels[Unicode_letter_RR] = 1;
Unicode_independentVowels[Unicode_letter_L] = 1;
Unicode_independentVowels[Unicode_letter_LL] = 1;
Unicode_independentVowels[Unicode_letter_E] = 1;
Unicode_independentVowels[Unicode_letter_EE] = 1;
Unicode_independentVowels[Unicode_letter_AI] = 1;
Unicode_independentVowels[Unicode_letter_O] = 1;
Unicode_independentVowels[Unicode_letter_OO] = 1;
Unicode_independentVowels[Unicode_letter_AU] = 1;

Unicode_vowelMap[Unicode_letter_AA] = Unicode_vowelsn_AA;
Unicode_vowelMap[Unicode_letter_I] = Unicode_vowelsn_I;
Unicode_vowelMap[Unicode_letter_II] = Unicode_vowelsn_II;
Unicode_vowelMap[Unicode_letter_U] = Unicode_vowelsn_U;
Unicode_vowelMap[Unicode_letter_UU] = Unicode_vowelsn_UU;
Unicode_vowelMap[Unicode_letter_R] = Unicode_vowelsn_R;
Unicode_vowelMap[Unicode_letter_RR] = Unicode_vowelsn_RR;
Unicode_vowelMap[Unicode_letter_E] = Unicode_vowelsn_E;
Unicode_vowelMap[Unicode_letter_EE] = Unicode_vowelsn_EE;
Unicode_vowelMap[Unicode_letter_AI] = Unicode_vowelsn_AI;
Unicode_vowelMap[Unicode_letter_O] = Unicode_vowelsn_O;
Unicode_vowelMap[Unicode_letter_OO] = Unicode_vowelsn_OO;
Unicode_vowelMap[Unicode_letter_AU] = Unicode_vowelsn_AU;

function Unicode_isInherentVowel(str) 
{
    return str == Unicode_letter_A;
}
	
function Unicode_isVirama(str) 
{
    return str == Unicode_misc_VIRAMA;
}
	
function Unicode_getDependentVowel(str) 
{
    return Unicode_vowelMap[str];
}	

//RTS
var RTS_maxLookupLen = 3;

var RTS_candrabindu_1  = "@M"; //arasunna
var RTS_candrabindu_2  = "@m";
var RTS_visarga_1      = "@h";
var RTS_visarga_2      = "@H";
var RTS_virama_1       = "^";
var RTS_virama_2       = "@n"; //nakarapollu what is this? 
var RTS_virama_3       = "@N";
var RTS_avagraha       = "@2"; 

//all the sunnas
var RTS_anusvara_1     = "M";  //sunna, non standard but supported by raMgavallika
var RTS_anusvara_2     = "nk";
var RTS_anusvara_3     = "nK";
var RTS_anusvara_4     = "ng";
var RTS_anusvara_5     = "nG";
var RTS_anusvara_6     = "nc";
var RTS_anusvara_7     = "nC";
var RTS_anusvara_8     = "nj";
var RTS_anusvara_9     = "nJ";
var RTS_anusvara_10    = "nT";
var RTS_anusvara_11    = "nD";
var RTS_anusvara_12    = "nt";
var RTS_anusvara_13    = "nd";
//var RTS_anusvara_14    = "np";
//var RTS_anusvara_15    = "nP";
var RTS_anusvara_16    = "nb";
var RTS_anusvara_17    = "nB";
//var RTS_anusvara_18    = "nl";
//var RTS_anusvara_19    = "nL";
//var RTS_anusvara_20    = "ns";
//var RTS_anusvara_21    = "nS";
//var RTS_anusvara_22    = "nh";
//var RTS_anusvara_23    = "nH";
//var RTS_anusvara_24    = "nv";
var RTS_anusvara_25    = "mk";
var RTS_anusvara_26    = "mK";
var RTS_anusvara_27    = "mg";
var RTS_anusvara_28    = "mG";
var RTS_anusvara_29    = "mc";
var RTS_anusvara_30    = "mC";
var RTS_anusvara_31    = "mj";
var RTS_anusvara_32    = "mJ";
var RTS_anusvara_33    = "mT";
var RTS_anusvara_34    = "mD";
var RTS_anusvara_35    = "mt";
var RTS_anusvara_36    = "md";
var RTS_anusvara_37    = "mp";
var RTS_anusvara_38    = "mP";
var RTS_anusvara_39    = "mb";
var RTS_anusvara_40    = "mB";
var RTS_anusvara_41    = "ml";
var RTS_anusvara_42    = "mL";
var RTS_anusvara_43    = "ms";
var RTS_anusvara_44    = "mS";
var RTS_anusvara_45    = "mh";
var RTS_anusvara_46    = "mH";
var RTS_anusvara_47    = "mv";
var RTS_anusvara_48    = "mV";
var RTS_anusvara_49    = "mw";
var RTS_anusvara_50    = "mW";

//Vowels
var RTS_vowel_A        = "a";
var RTS_vowel_AA_1     = "aa";
var RTS_vowel_AA_2     = "A";
var RTS_vowel_AA_3     = "a'";
var RTS_vowel_AA_4     = "aaa";
var RTS_vowel_I        = "i";
var RTS_vowel_II_1     = "ee";
var RTS_vowel_II_2     = "ii";
var RTS_vowel_II_3     = "I";
var RTS_vowel_II_4     = "i'";
var RTS_vowel_II_5     = "ia";
var RTS_vowel_U        = "u";
var RTS_vowel_UU_1     = "uu";
var RTS_vowel_UU_2     = "oo";
var RTS_vowel_UU_3     = "U";
var RTS_vowel_UU_4     = "u'";
var RTS_vowel_UU_5     = "ua";
var RTS_vowel_R_1      = "R";
var RTS_vowel_R_2      = "r'";
var RTS_vowel_RR_1     = "RU";
var RTS_vowel_RR_2     = "r'u";
var RTS_vowel_L        = "~l";
var RTS_vowel_LL       = "~L";
var RTS_vowel_E        = "e";
var RTS_vowel_EE_1     = "ae";
var RTS_vowel_EE_2     = "E";
var RTS_vowel_EE_3     = "e'";
var RTS_vowel_EE_4     = "ea";
var RTS_vowel_AI_1     = "ai";
var RTS_vowel_AI_2     = "ei";
var RTS_vowel_O        = "o";
var RTS_vowel_OO_1     = "O";
var RTS_vowel_OO_2     = "oe";
var RTS_vowel_OO_3     = "oa";
var RTS_vowel_OO_4     = "o'";
var RTS_vowel_AU_1     = "au";
var RTS_vowel_AU_2     = "ou";
var RTS_vowel_AU_3     = "ow";

//Consonants
var RTS_consnt_KA      = "k";
var RTS_consnt_KHA_1   = "kh";
var RTS_consnt_KHA_2   = "kH";
var RTS_consnt_KHA_3   = "K";
var RTS_consnt_KHA_4   = "Kh";
var RTS_consnt_KHA_5   = "KH";
var RTS_consnt_GA      = "g";
var RTS_consnt_GHA_1   = "gh";
var RTS_consnt_GHA_2   = "gH";
var RTS_consnt_GHA_3   = "G";
var RTS_consnt_GHA_4   = "Gh";
var RTS_consnt_GHA_5   = "GH";
var RTS_consnt_NGA     = "~m";
var RTS_consnt_CA_1    = "c";
var RTS_consnt_CA_2    = "ch";
var RTS_consnt_CA_3    = "cH";
var RTS_consnt_CHA_1   = "C";
var RTS_consnt_CHA_2   = "Ch";
var RTS_consnt_CHA_3   = "c'";
var RTS_consnt_CHA_4   = "CH";
var RTS_consnt_JA_1    = "j";
var RTS_consnt_JA_2    = "z";
var RTS_consnt_JHA_1   = "jh";
var RTS_consnt_JHA_2   = "jH";
var RTS_consnt_JHA_3   = "J";
var RTS_consnt_JHA_4   = "Jh";
var RTS_consnt_JHA_5   = "JH";
var RTS_consnt_NYA     = "~n";
var RTS_consnt_TTA_1   = "t'";
var RTS_consnt_TTA_2   = "T";
var RTS_consnt_TTHA_1  = "t'h";
var RTS_consnt_TTHA_2  = "t'H";
var RTS_consnt_TTHA_3  = "Th";
var RTS_consnt_TTHA_4  = "TH";
var RTS_consnt_TTHA_5  = "th'";
var RTS_consnt_TTHA_6  = "tH'";
var RTS_consnt_DDA_1   = "d'";
var RTS_consnt_DDA_2   = "D";
var RTS_consnt_DDHA_1  = "dh'";
var RTS_consnt_DDHA_2  = "Dh";
var RTS_consnt_DDHA_3  = "DH";
var RTS_consnt_DDHA_4  = "dH'";
var RTS_consnt_NNA_1   = "N";
var RTS_consnt_NNA_2   = "Nh";
var RTS_consnt_NNA_3   = "NH";
var RTS_consnt_NNA_4   = "n'";
var RTS_consnt_NNA_5   = "nh";
var RTS_consnt_NNA_6   = "nH";
var RTS_consnt_TA      = "t";
var RTS_consnt_THA_1   = "th";
var RTS_consnt_THA_2   = "tH";
var RTS_consnt_DA      = "d";
var RTS_consnt_DHA_1   = "dh";
var RTS_consnt_DHA_2   = "dH";
var RTS_consnt_NA_1    = "n";
var RTS_consnt_NA_2    = "n&";
var RTS_consnt_PA      = "p";
var RTS_consnt_PHA_1   = "ph";
var RTS_consnt_PHA_2   = "pH";
var RTS_consnt_PHA_3   = "f";
var RTS_consnt_PHA_4   = "P";
var RTS_consnt_PHA_5   = "Ph";
var RTS_consnt_PHA_6   = "PH";
var RTS_consnt_BA      = "b";
var RTS_consnt_BHA_1   = "bh";
var RTS_consnt_BHA_2   = "bH";
var RTS_consnt_BHA_3   = "B";
var RTS_consnt_BHA_4   = "Bh";
var RTS_consnt_BHA_5   = "BH";
var RTS_consnt_MA_1    = "m";
var RTS_consnt_MA_2    = "m&";
var RTS_consnt_YA      = "y";
var RTS_consnt_RA      = "r";
var RTS_consnt_LA      = "l";
var RTS_consnt_VA_1    = "v";
var RTS_consnt_VA_2    = "w";
var RTS_consnt_VA_3    = "V";
var RTS_consnt_VA_4    = "W";
var RTS_consnt_SHA_1   = "S";
var RTS_consnt_SHA_2   = "s'";
var RTS_consnt_SSA_1   = "sh";
var RTS_consnt_SSA_2   = "sH";
var RTS_consnt_SSA_3   = "Sh";
var RTS_consnt_SSA_4   = "SH";
var RTS_consnt_SA      = "s";
var RTS_consnt_HA_1    = "h";
var RTS_consnt_HA_2    = "H";
var RTS_consnt_LLA_1   = "L";
var RTS_consnt_LLA_2   = "l'";
var RTS_consnt_LLA_3   = "Lh";
var RTS_consnt_LLA_4   = "lh";
var RTS_consnt_LLA_5   = "lH";
var RTS_consnt_LLA_6   = "LH";
var RTS_consnt_RRA_1   = "~r";
var RTS_consnt_RRA_2   = "r''"; 
var RTS_consnt_KSH     = "x";   //ksh is automatically handled

//extinct consonants
var RTS_consnt_TCH     = "~c";
var RTS_consnt_TJ      = "~j";

//equivalents
var RTS_misc_JN        = "jn";
var RTS_misc_DDD       = "dd'";
var RTS_misc_TTT       = "tt'";

//digits
var RTS_digit_ZERO     = "~0";
var RTS_digit_ONE      = "~1";
var RTS_digit_TWO      = "~2";
var RTS_digit_THREE    = "~3";
var RTS_digit_FOUR     = "~4";
var RTS_digit_FIVE     = "~5";
var RTS_digit_SIX      = "~6";
var RTS_digit_SEVEN    = "~7";
var RTS_digit_EIGHT    = "~8";
var RTS_digit_NINE     = "~9";

var RTS_toUnicode = new Array();
var RTS_vowels = new Array();
var RTS_specials = new Array();
var RTS_anusvaras = new Array();
var RTS_digits = new Array();	
	
RTS_toUnicode[RTS_candrabindu_1] = Unicode_candrabindu;
RTS_toUnicode[RTS_candrabindu_2] = Unicode_candrabindu;
RTS_toUnicode[RTS_visarga_1] = Unicode_visarga;
RTS_toUnicode[RTS_visarga_2] = Unicode_visarga;
RTS_toUnicode[RTS_virama_1] = Unicode_misc_VIRAMA;
RTS_toUnicode[RTS_virama_2] = Unicode_misc_VIRAMA;
RTS_toUnicode[RTS_virama_3] = Unicode_misc_VIRAMA;
RTS_toUnicode[RTS_avagraha] = Unicode_misc_AVAGRAHA;

RTS_toUnicode[RTS_anusvara_1] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_2] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_3] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_4] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_5] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_6] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_7] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_8] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_9] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_10] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_11] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_12] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_13] = Unicode_anusvara;
//RTS_toUnicode[RTS_anusvara_14] = Unicode_anusvara;
//RTS_toUnicode[RTS_anusvara_15] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_16] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_17] = Unicode_anusvara;
//RTS_toUnicode[RTS_anusvara_18] = Unicode_anusvara;
//RTS_toUnicode[RTS_anusvara_19] = Unicode_anusvara;
//RTS_toUnicode[RTS_anusvara_20] = Unicode_anusvara;
//RTS_toUnicode[RTS_anusvara_21] = Unicode_anusvara;
//RTS_toUnicode[RTS_anusvara_22] = Unicode_anusvara;
//RTS_toUnicode[RTS_anusvara_23] = Unicode_anusvara;
//RTS_toUnicode[RTS_anusvara_24] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_25] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_26] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_27] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_28] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_29] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_30] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_31] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_32] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_33] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_34] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_35] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_36] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_37] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_38] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_39] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_40] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_41] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_42] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_43] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_44] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_45] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_46] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_47] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_48] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_49] = Unicode_anusvara;
RTS_toUnicode[RTS_anusvara_50] = Unicode_anusvara;

RTS_specials[RTS_candrabindu_1] = 1;
RTS_specials[RTS_candrabindu_2] = 1;
RTS_specials[RTS_visarga_1] = 1;
RTS_specials[RTS_visarga_2] = 1;
RTS_specials[RTS_virama_1] = 1;
RTS_specials[RTS_virama_2] = 1;
RTS_specials[RTS_virama_3] = 1;
RTS_specials[RTS_avagraha] = 1;
RTS_specials[RTS_anusvara_1] = 1;

RTS_anusvaras[RTS_anusvara_2] = 1;
RTS_anusvaras[RTS_anusvara_3] = 1;
RTS_anusvaras[RTS_anusvara_4] = 1;
RTS_anusvaras[RTS_anusvara_5] = 1;
RTS_anusvaras[RTS_anusvara_6] = 1;
RTS_anusvaras[RTS_anusvara_7] = 1;
RTS_anusvaras[RTS_anusvara_8] = 1;
RTS_anusvaras[RTS_anusvara_9] = 1;
RTS_anusvaras[RTS_anusvara_10] = 1;
RTS_anusvaras[RTS_anusvara_11] = 1;
RTS_anusvaras[RTS_anusvara_12] = 1;
RTS_anusvaras[RTS_anusvara_13] = 1;
//RTS_anusvaras[RTS_anusvara_14] = 1;
//RTS_anusvaras[RTS_anusvara_15] = 1;
RTS_anusvaras[RTS_anusvara_16] = 1;
RTS_anusvaras[RTS_anusvara_17] = 1;
//RTS_anusvaras[RTS_anusvara_18] = 1;
//RTS_anusvaras[RTS_anusvara_19] = 1;
//RTS_anusvaras[RTS_anusvara_20] = 1;
//RTS_anusvaras[RTS_anusvara_21] = 1;
//RTS_anusvaras[RTS_anusvara_22] = 1;
//RTS_anusvaras[RTS_anusvara_23] = 1;
//RTS_anusvaras[RTS_anusvara_24] = 1;
RTS_anusvaras[RTS_anusvara_25] = 1;
RTS_anusvaras[RTS_anusvara_26] = 1;
RTS_anusvaras[RTS_anusvara_27] = 1;
RTS_anusvaras[RTS_anusvara_28] = 1;
RTS_anusvaras[RTS_anusvara_29] = 1;
RTS_anusvaras[RTS_anusvara_30] = 1;
RTS_anusvaras[RTS_anusvara_31] = 1;
RTS_anusvaras[RTS_anusvara_32] = 1;
RTS_anusvaras[RTS_anusvara_33] = 1;
RTS_anusvaras[RTS_anusvara_34] = 1;
RTS_anusvaras[RTS_anusvara_35] = 1;
RTS_anusvaras[RTS_anusvara_36] = 1;
RTS_anusvaras[RTS_anusvara_37] = 1;
RTS_anusvaras[RTS_anusvara_38] = 1;
RTS_anusvaras[RTS_anusvara_39] = 1;
RTS_anusvaras[RTS_anusvara_40] = 1;
RTS_anusvaras[RTS_anusvara_41] = 1;
RTS_anusvaras[RTS_anusvara_42] = 1;
RTS_anusvaras[RTS_anusvara_43] = 1;
RTS_anusvaras[RTS_anusvara_44] = 1;
RTS_anusvaras[RTS_anusvara_45] = 1;
RTS_anusvaras[RTS_anusvara_46] = 1;
RTS_anusvaras[RTS_anusvara_47] = 1;
RTS_anusvaras[RTS_anusvara_48] = 1;
RTS_anusvaras[RTS_anusvara_49] = 1;
RTS_anusvaras[RTS_anusvara_50] = 1;

RTS_toUnicode[RTS_vowel_A] = Unicode_letter_A;
RTS_toUnicode[RTS_vowel_AA_1] = Unicode_letter_AA;
RTS_toUnicode[RTS_vowel_AA_2] = Unicode_letter_AA;
RTS_toUnicode[RTS_vowel_AA_3] = Unicode_letter_AA;
RTS_toUnicode[RTS_vowel_AA_4] = Unicode_letter_AA;
RTS_toUnicode[RTS_vowel_I] = Unicode_letter_I;
RTS_toUnicode[RTS_vowel_II_1] = Unicode_letter_II;
RTS_toUnicode[RTS_vowel_II_2] = Unicode_letter_II;
RTS_toUnicode[RTS_vowel_II_3] = Unicode_letter_II;
RTS_toUnicode[RTS_vowel_II_4] = Unicode_letter_II;
RTS_toUnicode[RTS_vowel_II_5] = Unicode_letter_II;
RTS_toUnicode[RTS_vowel_U] = Unicode_letter_U;
RTS_toUnicode[RTS_vowel_UU_1] = Unicode_letter_UU;
RTS_toUnicode[RTS_vowel_UU_2] = Unicode_letter_UU;
RTS_toUnicode[RTS_vowel_UU_3] = Unicode_letter_UU;
RTS_toUnicode[RTS_vowel_UU_4] = Unicode_letter_UU;
RTS_toUnicode[RTS_vowel_UU_5] = Unicode_letter_UU;
RTS_toUnicode[RTS_vowel_R_1] = Unicode_letter_R;
RTS_toUnicode[RTS_vowel_R_2] = Unicode_letter_R;
RTS_toUnicode[RTS_vowel_RR_1] = Unicode_letter_RR;
RTS_toUnicode[RTS_vowel_RR_2] = Unicode_letter_RR;
RTS_toUnicode[RTS_vowel_L] = Unicode_letter_L;
RTS_toUnicode[RTS_vowel_LL] = Unicode_letter_LL;
RTS_toUnicode[RTS_vowel_E] = Unicode_letter_E;
RTS_toUnicode[RTS_vowel_EE_1] = Unicode_letter_EE;
RTS_toUnicode[RTS_vowel_EE_2] = Unicode_letter_EE;
RTS_toUnicode[RTS_vowel_EE_3] = Unicode_letter_EE;
RTS_toUnicode[RTS_vowel_EE_4] = Unicode_letter_EE;
RTS_toUnicode[RTS_vowel_AI_1] = Unicode_letter_AI;
RTS_toUnicode[RTS_vowel_AI_2] = Unicode_letter_AI;
RTS_toUnicode[RTS_vowel_O] = Unicode_letter_O;
RTS_toUnicode[RTS_vowel_OO_1] = Unicode_letter_OO;
RTS_toUnicode[RTS_vowel_OO_2] = Unicode_letter_OO;
RTS_toUnicode[RTS_vowel_OO_3] = Unicode_letter_OO;
RTS_toUnicode[RTS_vowel_OO_4] = Unicode_letter_OO;
RTS_toUnicode[RTS_vowel_AU_1] = Unicode_letter_AU;
RTS_toUnicode[RTS_vowel_AU_2] = Unicode_letter_AU;
RTS_toUnicode[RTS_vowel_AU_3] = Unicode_letter_AU;

RTS_vowels[RTS_vowel_A] = 1;
RTS_vowels[RTS_vowel_AA_1] = 1;
RTS_vowels[RTS_vowel_AA_2] = 1;
RTS_vowels[RTS_vowel_AA_3] = 1;
RTS_vowels[RTS_vowel_AA_4] = 1;
RTS_vowels[RTS_vowel_I] = 1;
RTS_vowels[RTS_vowel_II_1] = 1;
RTS_vowels[RTS_vowel_II_2] = 1;
RTS_vowels[RTS_vowel_II_3] = 1;
RTS_vowels[RTS_vowel_II_4] = 1;
RTS_vowels[RTS_vowel_II_5] = 1;
RTS_vowels[RTS_vowel_U] = 1;
RTS_vowels[RTS_vowel_UU_1] = 1;
RTS_vowels[RTS_vowel_UU_2] = 1;
RTS_vowels[RTS_vowel_UU_3] = 1;
RTS_vowels[RTS_vowel_UU_4] = 1;
RTS_vowels[RTS_vowel_UU_5] = 1;
RTS_vowels[RTS_vowel_R_1] = 1;
RTS_vowels[RTS_vowel_R_2] = 1;
RTS_vowels[RTS_vowel_RR_1] = 1;
RTS_vowels[RTS_vowel_RR_2] = 1;
RTS_vowels[RTS_vowel_L] = 1;
RTS_vowels[RTS_vowel_LL] = 1;
RTS_vowels[RTS_vowel_E] = 1;
RTS_vowels[RTS_vowel_EE_1] = 1;
RTS_vowels[RTS_vowel_EE_2] = 1;
RTS_vowels[RTS_vowel_EE_3] = 1;
RTS_vowels[RTS_vowel_EE_4] = 1;
RTS_vowels[RTS_vowel_AI_1] = 1;
RTS_vowels[RTS_vowel_AI_2] = 1;
RTS_vowels[RTS_vowel_O] = 1;
RTS_vowels[RTS_vowel_OO_1] = 1;
RTS_vowels[RTS_vowel_OO_2] = 1;
RTS_vowels[RTS_vowel_OO_3] = 1;
RTS_vowels[RTS_vowel_OO_4] = 1;
RTS_vowels[RTS_vowel_AU_1] = 1;
RTS_vowels[RTS_vowel_AU_2] = 1;
RTS_vowels[RTS_vowel_AU_3] = 1;

RTS_toUnicode[RTS_consnt_KA] = Unicode_letter_KA;
RTS_toUnicode[RTS_consnt_KHA_1] = Unicode_letter_KHA;
RTS_toUnicode[RTS_consnt_KHA_2] = Unicode_letter_KHA;
RTS_toUnicode[RTS_consnt_KHA_3] = Unicode_letter_KHA;
RTS_toUnicode[RTS_consnt_KHA_4] = Unicode_letter_KHA;
RTS_toUnicode[RTS_consnt_KHA_5] = Unicode_letter_KHA;
RTS_toUnicode[RTS_consnt_GA] = Unicode_letter_GA;
RTS_toUnicode[RTS_consnt_GHA_1] = Unicode_letter_GHA;
RTS_toUnicode[RTS_consnt_GHA_2] = Unicode_letter_GHA;
RTS_toUnicode[RTS_consnt_GHA_3] = Unicode_letter_GHA;
RTS_toUnicode[RTS_consnt_GHA_4] = Unicode_letter_GHA;
RTS_toUnicode[RTS_consnt_GHA_5] = Unicode_letter_GHA;
RTS_toUnicode[RTS_consnt_NGA] = Unicode_letter_NGA;

RTS_toUnicode[RTS_consnt_CA_1] = Unicode_letter_CA;
RTS_toUnicode[RTS_consnt_CA_2] = Unicode_letter_CA;
RTS_toUnicode[RTS_consnt_CA_3] = Unicode_letter_CA;
RTS_toUnicode[RTS_consnt_CHA_1] = Unicode_letter_CHA;
RTS_toUnicode[RTS_consnt_CHA_2] = Unicode_letter_CHA;
RTS_toUnicode[RTS_consnt_CHA_3] = Unicode_letter_CHA;
RTS_toUnicode[RTS_consnt_CHA_4] = Unicode_letter_CHA;
RTS_toUnicode[RTS_consnt_JA_1] = Unicode_letter_JA;
RTS_toUnicode[RTS_consnt_JA_2] = Unicode_letter_JA;
RTS_toUnicode[RTS_consnt_JHA_1] = Unicode_letter_JHA;
RTS_toUnicode[RTS_consnt_JHA_2] = Unicode_letter_JHA;
RTS_toUnicode[RTS_consnt_JHA_3] = Unicode_letter_JHA;
RTS_toUnicode[RTS_consnt_JHA_4] = Unicode_letter_JHA;
RTS_toUnicode[RTS_consnt_JHA_5] = Unicode_letter_JHA;
RTS_toUnicode[RTS_consnt_NYA] = Unicode_letter_NYA;

RTS_toUnicode[RTS_consnt_TTA_1] = Unicode_letter_TTA;
RTS_toUnicode[RTS_consnt_TTA_2] = Unicode_letter_TTA;
RTS_toUnicode[RTS_consnt_TTHA_1] = Unicode_letter_TTHA;
RTS_toUnicode[RTS_consnt_TTHA_2] = Unicode_letter_TTHA;
RTS_toUnicode[RTS_consnt_TTHA_3] = Unicode_letter_TTHA;
RTS_toUnicode[RTS_consnt_TTHA_4] = Unicode_letter_TTHA;
RTS_toUnicode[RTS_consnt_TTHA_5] = Unicode_letter_TTHA;
RTS_toUnicode[RTS_consnt_TTHA_6] = Unicode_letter_TTHA;
RTS_toUnicode[RTS_consnt_DDA_1] = Unicode_letter_DDA;
RTS_toUnicode[RTS_consnt_DDA_2] = Unicode_letter_DDA;
RTS_toUnicode[RTS_consnt_DDHA_1] = Unicode_letter_DDHA;
RTS_toUnicode[RTS_consnt_DDHA_2] = Unicode_letter_DDHA;
RTS_toUnicode[RTS_consnt_DDHA_3] = Unicode_letter_DDHA;
RTS_toUnicode[RTS_consnt_DDHA_4] = Unicode_letter_DDHA;
RTS_toUnicode[RTS_consnt_NNA_1] = Unicode_letter_NNA;
RTS_toUnicode[RTS_consnt_NNA_2] = Unicode_letter_NNA;
RTS_toUnicode[RTS_consnt_NNA_3] = Unicode_letter_NNA;
RTS_toUnicode[RTS_consnt_NNA_4] = Unicode_letter_NNA;
RTS_toUnicode[RTS_consnt_NNA_5] = Unicode_letter_NNA;
RTS_toUnicode[RTS_consnt_NNA_6] = Unicode_letter_NNA;

RTS_toUnicode[RTS_consnt_TA] = Unicode_letter_TA;
RTS_toUnicode[RTS_consnt_THA_1] = Unicode_letter_THA;
RTS_toUnicode[RTS_consnt_THA_2] = Unicode_letter_THA;
RTS_toUnicode[RTS_consnt_DA] = Unicode_letter_DA;
RTS_toUnicode[RTS_consnt_DHA_1] = Unicode_letter_DHA;
RTS_toUnicode[RTS_consnt_DHA_2] = Unicode_letter_DHA;
RTS_toUnicode[RTS_consnt_NA_1] = Unicode_letter_NA;
RTS_toUnicode[RTS_consnt_NA_2] = Unicode_letter_NA;

RTS_toUnicode[RTS_consnt_PA] = Unicode_letter_PA;
RTS_toUnicode[RTS_consnt_PHA_1] = Unicode_letter_PHA;
RTS_toUnicode[RTS_consnt_PHA_2] = Unicode_letter_PHA;
RTS_toUnicode[RTS_consnt_PHA_3] = Unicode_letter_PHA;
RTS_toUnicode[RTS_consnt_PHA_4] = Unicode_letter_PHA;
RTS_toUnicode[RTS_consnt_PHA_5] = Unicode_letter_PHA;
RTS_toUnicode[RTS_consnt_PHA_6] = Unicode_letter_PHA;
RTS_toUnicode[RTS_consnt_BA] = Unicode_letter_BA;
RTS_toUnicode[RTS_consnt_BHA_1] = Unicode_letter_BHA;
RTS_toUnicode[RTS_consnt_BHA_2] = Unicode_letter_BHA;
RTS_toUnicode[RTS_consnt_BHA_3] = Unicode_letter_BHA;
RTS_toUnicode[RTS_consnt_BHA_4] = Unicode_letter_BHA;
RTS_toUnicode[RTS_consnt_BHA_5] = Unicode_letter_BHA;
RTS_toUnicode[RTS_consnt_MA_1] = Unicode_letter_MA;
RTS_toUnicode[RTS_consnt_MA_2] = Unicode_letter_MA;

RTS_toUnicode[RTS_consnt_YA] = Unicode_letter_YA;
RTS_toUnicode[RTS_consnt_RA] = Unicode_letter_RA;
RTS_toUnicode[RTS_consnt_LA] = Unicode_letter_LA;
RTS_toUnicode[RTS_consnt_VA_1] = Unicode_letter_VA;
RTS_toUnicode[RTS_consnt_VA_2] = Unicode_letter_VA;
RTS_toUnicode[RTS_consnt_VA_3] = Unicode_letter_VA;
RTS_toUnicode[RTS_consnt_VA_4] = Unicode_letter_VA;
RTS_toUnicode[RTS_consnt_SHA_1] = Unicode_letter_SHA;
RTS_toUnicode[RTS_consnt_SHA_2] = Unicode_letter_SHA;
RTS_toUnicode[RTS_consnt_SSA_1] = Unicode_letter_SSA;
RTS_toUnicode[RTS_consnt_SSA_2] = Unicode_letter_SSA;
RTS_toUnicode[RTS_consnt_SSA_3] = Unicode_letter_SSA;
RTS_toUnicode[RTS_consnt_SSA_4] = Unicode_letter_SSA;
RTS_toUnicode[RTS_consnt_SA] = Unicode_letter_SA;

RTS_toUnicode[RTS_consnt_HA_1] = Unicode_letter_HA;
RTS_toUnicode[RTS_consnt_HA_2] = Unicode_letter_HA;
RTS_toUnicode[RTS_consnt_LLA_1] = Unicode_letter_LLA;
RTS_toUnicode[RTS_consnt_LLA_2] = Unicode_letter_LLA;
RTS_toUnicode[RTS_consnt_LLA_3] = Unicode_letter_LLA;
RTS_toUnicode[RTS_consnt_LLA_4] = Unicode_letter_LLA;
RTS_toUnicode[RTS_consnt_LLA_5] = Unicode_letter_LLA;
RTS_toUnicode[RTS_consnt_LLA_6] = Unicode_letter_LLA;
RTS_toUnicode[RTS_consnt_RRA_1] = Unicode_letter_RRA;
RTS_toUnicode[RTS_consnt_RRA_2] = Unicode_letter_RRA;
RTS_toUnicode[RTS_consnt_KSH] = Unicode_ligature_KSH;

RTS_toUnicode[RTS_consnt_TCH] = Unicode_nukt_TCH;
RTS_toUnicode[RTS_consnt_TJ]  = Unicode_nukt_TJ;

RTS_toUnicode[RTS_misc_JN] = Unicode_conjuct_JNY;
RTS_toUnicode[RTS_misc_DDD] = Unicode_conjuct_DDDD;
RTS_toUnicode[RTS_misc_TTT] = Unicode_conjuct_TTTT;

RTS_toUnicode[RTS_digit_ZERO] = Unicode_digit_ZERO;
RTS_toUnicode[RTS_digit_ONE] = Unicode_digit_ONE;
RTS_toUnicode[RTS_digit_TWO] = Unicode_digit_TWO;
RTS_toUnicode[RTS_digit_THREE] = Unicode_digit_THREE;
RTS_toUnicode[RTS_digit_FOUR] = Unicode_digit_FOUR;
RTS_toUnicode[RTS_digit_FIVE] = Unicode_digit_FIVE;
RTS_toUnicode[RTS_digit_SIX] = Unicode_digit_SIX;
RTS_toUnicode[RTS_digit_SEVEN] = Unicode_digit_SEVEN;
RTS_toUnicode[RTS_digit_EIGHT] = Unicode_digit_EIGHT;
RTS_toUnicode[RTS_digit_NINE] = Unicode_digit_NINE;

RTS_digits[RTS_digit_ZERO] = 1;
RTS_digits[RTS_digit_ONE] = 1;
RTS_digits[RTS_digit_TWO] = 1;
RTS_digits[RTS_digit_THREE] = 1;
RTS_digits[RTS_digit_FOUR] = 1;
RTS_digits[RTS_digit_FIVE] = 1;
RTS_digits[RTS_digit_SIX] = 1;
RTS_digits[RTS_digit_SEVEN] = 1;
RTS_digits[RTS_digit_EIGHT] = 1;
RTS_digits[RTS_digit_NINE] = 1;

function RTS_lookup(str) 
{
    return RTS_toUnicode[str];
}
	
function RTS_polluCharacter() 
{
    return Unicode_misc_VIRAMA;
}
	
function RTS_anusvaraCharacter() 
{
    return Unicode_anusvara;
}
	
function RTS_isVowel(str) 
{
    var b = RTS_vowels[str];
    return b != null;
}

function RTS_isSpecial(str) 
{
    var b = RTS_specials[str];
    return b == null ? RTS_isAnusvara(str) : true;
}
	
function RTS_isAnusvara(str) 
{
    var b = RTS_anusvaras[str];
    return b != null;
}
	
function RTS_isSpecialHandlingForSunna(str) 
{
    return str == Unicode_letter_MA;
}

function RTS_isDigit(str)
{
    return RTS_digits[str] != null;
}

//Parser
var parser_index = 0;
var parser_length = 0;
var parser_text = "";

function init(input)
{
    parser_text = input;
    parser_length = input.length;
    parser_index = 0;
}
	
function parser_hasMore()
{
    return parser_index < parser_length;
}

function parser_next()
{
    var response = "";
    var key = null;
    var curLen = 0;

    var remaining = parser_length - parser_index;
    for(; remaining > 0; remaining = parser_length - parser_index) {
        var maxLookupLen = remaining > RTS_maxLookupLen ? RTS_maxLookupLen : remaining;
        
        var value;
        var bufLen = 0;
        for(var i = maxLookupLen; i > 0; i--) {
            key = parser_text.substring(parser_index, parser_index + i);
            value = RTS_lookup(key);
            if (value != null) {
                //found a match
                if (!RTS_isAnusvara(key)) {
                    bufLen = i;
                    break;
                }
                //the match is one of the special sunnas (n or m followed by some consonant). Treat this as sunna
                //only if this is the beginning of a syllable. Lame example: #arnku# - the nk here should not be sunna
                //This piece of code is probably not necessary, I doubt there is a word in telugu that would match this
                else if (curLen == 0) {
                    //only the n/m is consumed - so buffer length is 1 less
                    bufLen = i - 1;
                    break;
                }
            }
        }
		
        if (value == null) {
            break;
        }

        var digit = RTS_isDigit(key);
        if (digit) {
            //we will parse the digit again the next time
            if (curLen != 0)
                break;
        }
			
        parser_index += bufLen;			
        if (RTS_isVowel(key) || RTS_isSpecial(key) || digit)
            return response + value;
				
        response += value;
        curLen++;
    }
		
    if (curLen == 0) {
        //can happen in two cases, bad clients (of RTSParser) or if the character we read is not recognized in RTS
        //don't worry about bad clients - if next() is called even after hasNext() returns false, there is no harm in incrmenting index
        //Those not recognized in RTS are returned as is.
        parser_index++;
        return key;
    }
    //act as if there is a virama at the end unless it is m, then treat it as sunna
    if (curLen == 1 && RTS_isSpecialHandlingForSunna(response))
        return RTS_anusvaraCharacter();
    return response + RTS_polluCharacter();
}

//Transformer
function transformSyllable(syllable) 
{
    var length = syllable.length;
		
    switch (length) {
        case 0:
            return "";
            
        case 1:
            //typically a vowel or a special character
            return syllable;
				
         default:
             break;
    }
		
    var response = "";
    for(var i = 0; i < length - 2; i++) {
        response += syllable[i];
        if (syllable[i + 1] != Unicode_misc_NUKTA && syllable[i + 1] != Unicode_misc_VIRAMA)
            response += Unicode_misc_VIRAMA;
    }
    response += syllable[length - 2];
		
    var c = syllable[length - 1];
    //TODO: This should be an vowel
    if (Unicode_isInherentVowel(c))
        return response;
    
    var v = Unicode_getDependentVowel(c);
    if (v != null) {
        return response + v;
    }
    else {
        if (Unicode_isVirama(c))
            return response + c + Unicode_misc_ZWNJ;
        //TODO:
        return response;
    }
}

function convert(input)
{
    var output = "";
    init(input);

    while (parser_hasMore()) {
        var syllable = parser_next();
        output += transformSyllable(syllable);
    }
    return output;
}

//Browser related
//Used only for special controls
function setTransformedText(text)
{
    //The credit for this piece goes to Jed Brown of the BBCode extension.
    //http://jedbrown.net/1.0
    try {
        var command = "cmd_insertText";
        var controller = document.commandDispatcher.getControllerForCommand(command);
        
        if (controller && controller.isCommandEnabled(command)) {
            controller = controller.QueryInterface(Components.interfaces.nsICommandController);
            var params = Components.classes["@mozilla.org/embedcomp/command-params;1"];
            params = params.createInstance(Components.interfaces.nsICommandParams);
            
            params.setStringValue("state_data", text);
            controller.doCommandWithParams(command, params);
        }
    } catch (e) {
        dump("Can't do cmd_insertText! ");
        dump(e+"\n");
    }
}

//Mode 0 is English, 1 is RTS
var mode = 0; 

//Transforms input based on mode
function transformInput(input)
{
    if (mode != 0 && mode != 1) {
        alert("Invalid mode " + mode);
        mode = 0;
    }

    var output = "";
    var next = 0;

    do {
        var hash = input.indexOf('#', next);
        if (hash == next) {
            hash = input.indexOf('#', hash + 1);
            if (hash != -1) {
                //Mode remains unchanged because we process text between hashes here
                if (mode == 0)
                    output += convert(input.substring(next + 1, hash));
                else output += input.substring(next + 1, hash);
            }
            else {
                //Mode changes because there is no terminating hash
                if (mode == 0) {
                    mode = 1;
                    output += convert(input.substring(next + 1));
                }
                else {
                    mode = 0;
                    output += input.substring(next + 1);
                }
            }
            next = hash + 1;
        }
        //don't change the mode yet because it will be done when it is matched the next time around
        else if (hash != -1) {
            if (mode == 0)
                output += input.substring(next, hash);
            else output += convert(input.substring(next, hash));
            next = hash;
        }
        //Mode reamins the same because there are no more hashes
        else {
            if (mode == 0)
                output += input.substring(next);
            else output += convert(input.substring(next));
        }
    } while (hash != -1 && hash < input.length);
    return output;
}

function traverseNode(selection, node, start, end, soff, eoff)
{
    if (node.nodeType == 3) {
        if (selection.containsNode(node, true)) {
            if (node == start && node == end)
                node.replaceData(soff, eoff - soff, transformInput(node.nodeValue.substring(soff, eoff)));
            else if (node == start)
                node.replaceData(soff, node.length - soff, transformInput(node.nodeValue.substring(soff)));
            else if (node == end)
                node.replaceData(0, eoff, transformInput(node.nodeValue.substring(0, eoff)));
            else node.replaceData(0, node.length, transformInput(node.nodeValue));
        }
    }
    else {
        for(var i = 0; i < node.childNodes.length; ++i) {
            traverseNode(selection, node.childNodes.item(i), start, end, soff, eoff);
        }
    }
}

function traverseDOM(selection)
{
    for(var i = 0; i < selection.rangeCount; i++) {
        var range = selection.getRangeAt(i);
        traverseNode(selection, range.commonAncestorContainer, range.startContainer, range.endContainer, range.startOffset, range.endOffset);
    }
}

//Callback
function onTransform(start)
{
    //Reset mode
    mode = start;

    var node = document.popupNode;
    var nodeLocalName = node.localName.toUpperCase();

    var selection;

    //Check for Selection in various controls
    //This code is thanks to Jaap Haitsma of the dictionarySearch extension and roachfiend of a million extensions
    //http://roachfiend.com/
    //http://mozdev.org/pipermail/project_owners/2004-March/001833.html
    if ((nodeLocalName == "TEXTAREA") || (nodeLocalName == "INPUT" && (node.type == "text" || node.type == "password"))) {
        selection = node.value.substring(node.selectionStart, node.selectionEnd);
    } else if (nodeLocalName == "OPTION") {
        var parentSelect = node.parentNode;
        if (parentSelect.localName.toUpperCase() == "SELECT") {
            if (parentSelect.multiple) {
                var anOption;
                for (var i = 0; i < parentSelect.options.length; i++) {
                    anOption = parentSelect.options[i];
                    if (anOption.selected) {
                        selection += " " + anOption.value;
                    }
                }
            } else {
                selection = node.value;
            }
        }
    } else if (nodeLocalName == "SELECT") {
        selection = node.options[node.selected].value;
    }
    else {
        //Selection in a regular window
        var focusedWindow = document.commandDispatcher.focusedWindow;
        var selection = focusedWindow.__proto__.getSelection.call(focusedWindow);
        traverseDOM(selection);
        selection.collapseToEnd();
        return;
    }

    //For the specials
    setTransformedText(transformInput(selection));
}
