// $Id: RTS.js,v 1.12 2012/01/22 04:12:52 vnagarjuna Exp $ -->

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

//RTS

//Writing Styles
RTS.wstyle_Kanneganti = 0;
RTS.wstyle_Pillalamarri = 1;
RTS.wstyle_Paalana = 2;

//Sunna styles
RTS.sstyle_Ramgavallika = 0;
RTS.sstyle_Classic = 1;

function RTS(wstyle, sstyle)
{
    this.writingStyle = wstyle;
    this.sunnaStyle = sstyle;
    this.cache = null;
}

RTS.maxLookupLen = 3;

RTS.candrabindu_1  = "@M"; //arasunna
RTS.candrabindu_2  = "@m";
RTS.visarga_1      = "@h";
RTS.visarga_2      = "@H";
RTS.virama_1       = "^";
RTS.virama_2       = "@n"; //nakarapollu what is this? 
RTS.virama_3       = "@N";
RTS.avagraha       = "@2"; 
RTS.anusvara_1     = "M";  //sunna, non standard but supported by raMgavallika
RTS.anusvara_2     = "m^";

//Vowels
RTS.vowel_A        = "a";
RTS.vowel_AA_1     = "aa";
RTS.vowel_AA_2     = "A";
RTS.vowel_AA_3     = "a'";
RTS.vowel_AA_4     = "aaa";
RTS.vowel_I        = "i";
RTS.vowel_II_1     = "ee";
RTS.vowel_II_2     = "ii";
RTS.vowel_II_3     = "I";
RTS.vowel_II_4     = "i'";
RTS.vowel_II_5     = "ia";
RTS.vowel_U        = "u";
RTS.vowel_UU_1     = "oo";
RTS.vowel_UU_2     = "uu";
RTS.vowel_UU_3     = "U";
RTS.vowel_UU_4     = "u'";
RTS.vowel_UU_5     = "ua";
RTS.vowel_R_1      = "R";
RTS.vowel_R_2      = "r'";
RTS.vowel_RR_1     = "Ru";
RTS.vowel_RR_2     = "RU";
RTS.vowel_RR_3     = "r'u";
RTS.vowel_L        = "~l";
RTS.vowel_LL       = "~L";
RTS.vowel_E        = "e";
RTS.vowel_EE_1     = "ae";
RTS.vowel_EE_2     = "E";
RTS.vowel_EE_3     = "e'";
RTS.vowel_EE_4     = "ea";
RTS.vowel_AI_1     = "ai";
RTS.vowel_AI_2     = "ei";
RTS.vowel_O        = "o";
RTS.vowel_OO_1     = "O";
RTS.vowel_OO_2     = "oe";
RTS.vowel_OO_3     = "oa";
RTS.vowel_OO_4     = "o'";
RTS.vowel_AU_1     = "au";
RTS.vowel_AU_2     = "ou";
RTS.vowel_AU_3     = "ow";

//Consonants
RTS.consnt_KA      = "k";
RTS.consnt_KA_JAMPALA = "k&";
RTS.consnt_KHA_1   = "kh";
RTS.consnt_KHA_2   = "kH";
RTS.consnt_KHA_3   = "K";
RTS.consnt_KHA_4   = "Kh";
RTS.consnt_KHA_5   = "KH";
RTS.consnt_GA      = "g";
RTS.consnt_GHA_1   = "gh";
RTS.consnt_GHA_2   = "gH";
RTS.consnt_GHA_3   = "G";
RTS.consnt_GHA_4   = "Gh";
RTS.consnt_GHA_5   = "GH";
RTS.consnt_NGA     = "~m";
RTS.consnt_CA_1    = "ch";
RTS.consnt_CA_2    = "c";
RTS.consnt_CA_3    = "cH";
RTS.consnt_CHA_1   = "Ch";
RTS.consnt_CHA_2   = "C";
RTS.consnt_CHA_3   = "c'";
RTS.consnt_CHA_4   = "CH";
RTS.consnt_JA_1    = "j";
RTS.consnt_JA_2    = "z";
RTS.consnt_JHA_1   = "jh";
RTS.consnt_JHA_2   = "jH";
RTS.consnt_JHA_3   = "J";
RTS.consnt_JHA_4   = "Jh";
RTS.consnt_JHA_5   = "JH";
RTS.consnt_NYA     = "~n";
RTS.consnt_TTA_1   = "T";
RTS.consnt_TTA_2   = "t'";
RTS.consnt_TTHA_1  = "Th";
RTS.consnt_TTHA_2  = "t'h";
RTS.consnt_TTHA_3  = "t'H";
RTS.consnt_TTHA_4  = "TH";
RTS.consnt_TTHA_5  = "th'";
RTS.consnt_TTHA_6  = "tH'";
RTS.consnt_DDA_1   = "D";
RTS.consnt_DDA_2   = "d'";
RTS.consnt_DDHA_1  = "Dh";
RTS.consnt_DDHA_2  = "dh'";
RTS.consnt_DDHA_3  = "DH";
RTS.consnt_DDHA_4  = "dH'";
RTS.consnt_DDHA_5  = "d'h";
RTS.consnt_NNA_1   = "N";
RTS.consnt_NNA_2   = "Nh";
RTS.consnt_NNA_3   = "NH";
RTS.consnt_NNA_4   = "n'";
RTS.consnt_NNA_5   = "nh";
RTS.consnt_NNA_6   = "nH";
RTS.consnt_TA      = "t";
RTS.consnt_THA_1   = "th";
RTS.consnt_THA_2   = "tH";
RTS.consnt_DA      = "d";
RTS.consnt_DHA_1   = "dh";
RTS.consnt_DHA_2   = "dH";
RTS.consnt_NA_1    = "n";
RTS.consnt_NA_2    = "n&";
RTS.consnt_PA      = "p";
RTS.consnt_PHA_1   = "ph";
RTS.consnt_PHA_2   = "pH";
RTS.consnt_PHA_3   = "f";
RTS.consnt_PHA_4   = "P";
RTS.consnt_PHA_5   = "Ph";
RTS.consnt_PHA_6   = "PH";
RTS.consnt_BA      = "b";
RTS.consnt_BHA_1   = "bh";
RTS.consnt_BHA_2   = "bH";
RTS.consnt_BHA_3   = "B";
RTS.consnt_BHA_4   = "Bh";
RTS.consnt_BHA_5   = "BH";
RTS.consnt_MA_1    = "m";
RTS.consnt_MA_2    = "m&";
RTS.consnt_YA      = "y";
RTS.consnt_RA      = "r";
RTS.consnt_LA      = "l";
RTS.consnt_VA_1    = "v";
RTS.consnt_VA_2    = "w";
RTS.consnt_VA_3    = "V";
RTS.consnt_VA_4    = "W";
RTS.consnt_SHA_1   = "S";
RTS.consnt_SHA_2   = "s'";
RTS.consnt_SSA_1   = "sh";
RTS.consnt_SSA_2   = "sH";
RTS.consnt_SSA_3   = "Sh";
RTS.consnt_SSA_4   = "SH";
RTS.consnt_SA      = "s";
RTS.consnt_HA_1    = "h";
RTS.consnt_HA_2    = "H";
RTS.consnt_LLA_1   = "L";
RTS.consnt_LLA_2   = "l'";
RTS.consnt_LLA_3   = "Lh";
RTS.consnt_LLA_4   = "lh";
RTS.consnt_LLA_5   = "lH";
RTS.consnt_LLA_6   = "LH";
RTS.consnt_RRA_1   = "~r";
RTS.consnt_RRA_2   = "r''"; 
RTS.conjct_KSH_1   = "x";   //ksh is automatically handled
RTS.conjct_KSH_2   = "ksh"; //here for completeness

//extinct consonants
RTS.consnt_TSA     = "~c";
RTS.consnt_DJA     = "~j";

//equivalents
RTS.misc_JN        = "jn";
RTS.misc_DDD       = "dd'";
RTS.misc_TTT       = "tt'";

//digits
RTS.digit_ZERO     = "~0";
RTS.digit_ONE      = "~1";
RTS.digit_TWO      = "~2";
RTS.digit_THREE    = "~3";
RTS.digit_FOUR     = "~4";
RTS.digit_FIVE     = "~5";
RTS.digit_SIX      = "~6";
RTS.digit_SEVEN    = "~7";
RTS.digit_EIGHT    = "~8";
RTS.digit_NINE     = "~9";

RTS.toPadma = new Object();
	
RTS.toPadma[RTS.candrabindu_1] = Padma.candrabindu;
RTS.toPadma[RTS.candrabindu_2] = Padma.candrabindu;
RTS.toPadma[RTS.visarga_1] = Padma.visarga;
RTS.toPadma[RTS.visarga_2] = Padma.visarga;
RTS.toPadma[RTS.virama_1] = Padma.syllbreak;
RTS.toPadma[RTS.virama_2] = Padma.pollu;
RTS.toPadma[RTS.virama_3] = Padma.pollu;
RTS.toPadma[RTS.avagraha] = Padma.avagraha;
RTS.toPadma[RTS.anusvara_1] = Padma.anusvara;
RTS.toPadma[RTS.anusvara_2] = Padma.anusvara;
RTS.toPadma[RTS.vowel_A] = Padma.vowel_A;
RTS.toPadma[RTS.vowel_AA_1] = Padma.vowel_AA;
RTS.toPadma[RTS.vowel_AA_2] = Padma.vowel_AA;
RTS.toPadma[RTS.vowel_AA_3] = Padma.vowel_AA;
RTS.toPadma[RTS.vowel_AA_4] = Padma.vowel_AA;
RTS.toPadma[RTS.vowel_I] = Padma.vowel_I;
RTS.toPadma[RTS.vowel_II_1] = Padma.vowel_II;
RTS.toPadma[RTS.vowel_II_2] = Padma.vowel_II;
RTS.toPadma[RTS.vowel_II_3] = Padma.vowel_II;
RTS.toPadma[RTS.vowel_II_4] = Padma.vowel_II;
RTS.toPadma[RTS.vowel_II_5] = Padma.vowel_II;
RTS.toPadma[RTS.vowel_U] = Padma.vowel_U;
RTS.toPadma[RTS.vowel_UU_1] = Padma.vowel_UU;
RTS.toPadma[RTS.vowel_UU_2] = Padma.vowel_UU;
RTS.toPadma[RTS.vowel_UU_3] = Padma.vowel_UU;
RTS.toPadma[RTS.vowel_UU_4] = Padma.vowel_UU;
RTS.toPadma[RTS.vowel_UU_5] = Padma.vowel_UU;
RTS.toPadma[RTS.vowel_R_1] = Padma.vowel_R;
RTS.toPadma[RTS.vowel_R_2] = Padma.vowel_R;
RTS.toPadma[RTS.vowel_RR_1] = Padma.vowel_RR;
RTS.toPadma[RTS.vowel_RR_2] = Padma.vowel_RR;
RTS.toPadma[RTS.vowel_RR_3] = Padma.vowel_RR;
RTS.toPadma[RTS.vowel_L] = Padma.vowel_L;
RTS.toPadma[RTS.vowel_LL] = Padma.vowel_LL;
RTS.toPadma[RTS.vowel_E] = Padma.vowel_E;
RTS.toPadma[RTS.vowel_EE_1] = Padma.vowel_EE;
RTS.toPadma[RTS.vowel_EE_2] = Padma.vowel_EE;
RTS.toPadma[RTS.vowel_EE_3] = Padma.vowel_EE;
RTS.toPadma[RTS.vowel_EE_4] = Padma.vowel_EE;
RTS.toPadma[RTS.vowel_AI_1] = Padma.vowel_AI;
RTS.toPadma[RTS.vowel_AI_2] = Padma.vowel_AI;
RTS.toPadma[RTS.vowel_O] = Padma.vowel_O;
RTS.toPadma[RTS.vowel_OO_1] = Padma.vowel_OO;
RTS.toPadma[RTS.vowel_OO_2] = Padma.vowel_OO;
RTS.toPadma[RTS.vowel_OO_3] = Padma.vowel_OO;
RTS.toPadma[RTS.vowel_OO_4] = Padma.vowel_OO;
RTS.toPadma[RTS.vowel_AU_1] = Padma.vowel_AU;
RTS.toPadma[RTS.vowel_AU_2] = Padma.vowel_AU;
RTS.toPadma[RTS.vowel_AU_3] = Padma.vowel_AU;
RTS.toPadma[RTS.consnt_KA] = Padma.consnt_KA;
RTS.toPadma[RTS.consnt_KA_JAMPALA] = Padma.consnt_KA + Padma.chillu_C2;
RTS.toPadma[RTS.consnt_KHA_1] = Padma.consnt_KHA;
RTS.toPadma[RTS.consnt_KHA_2] = Padma.consnt_KHA;
RTS.toPadma[RTS.consnt_KHA_3] = Padma.consnt_KHA;
RTS.toPadma[RTS.consnt_KHA_4] = Padma.consnt_KHA;
RTS.toPadma[RTS.consnt_KHA_5] = Padma.consnt_KHA;
RTS.toPadma[RTS.consnt_GA] = Padma.consnt_GA;
RTS.toPadma[RTS.consnt_GHA_1] = Padma.consnt_GHA;
RTS.toPadma[RTS.consnt_GHA_2] = Padma.consnt_GHA;
RTS.toPadma[RTS.consnt_GHA_3] = Padma.consnt_GHA;
RTS.toPadma[RTS.consnt_GHA_4] = Padma.consnt_GHA;
RTS.toPadma[RTS.consnt_GHA_5] = Padma.consnt_GHA;
RTS.toPadma[RTS.consnt_NGA] = Padma.consnt_NGA;
RTS.toPadma[RTS.consnt_CA_1] = Padma.consnt_CA;
RTS.toPadma[RTS.consnt_CA_2] = Padma.consnt_CA;
RTS.toPadma[RTS.consnt_CA_3] = Padma.consnt_CA;
RTS.toPadma[RTS.consnt_CHA_1] = Padma.consnt_CHA;
RTS.toPadma[RTS.consnt_CHA_2] = Padma.consnt_CHA;
RTS.toPadma[RTS.consnt_CHA_3] = Padma.consnt_CHA;
RTS.toPadma[RTS.consnt_CHA_4] = Padma.consnt_CHA;
RTS.toPadma[RTS.consnt_JA_1] = Padma.consnt_JA;
RTS.toPadma[RTS.consnt_JA_2] = Padma.consnt_JA;
RTS.toPadma[RTS.consnt_JHA_1] = Padma.consnt_JHA;
RTS.toPadma[RTS.consnt_JHA_2] = Padma.consnt_JHA;
RTS.toPadma[RTS.consnt_JHA_3] = Padma.consnt_JHA;
RTS.toPadma[RTS.consnt_JHA_4] = Padma.consnt_JHA;
RTS.toPadma[RTS.consnt_JHA_5] = Padma.consnt_JHA;
RTS.toPadma[RTS.consnt_NYA] = Padma.consnt_NYA;
RTS.toPadma[RTS.consnt_TTA_1] = Padma.consnt_TTA;
RTS.toPadma[RTS.consnt_TTA_2] = Padma.consnt_TTA;
RTS.toPadma[RTS.consnt_TTHA_1] = Padma.consnt_TTHA;
RTS.toPadma[RTS.consnt_TTHA_2] = Padma.consnt_TTHA;
RTS.toPadma[RTS.consnt_TTHA_3] = Padma.consnt_TTHA;
RTS.toPadma[RTS.consnt_TTHA_4] = Padma.consnt_TTHA;
RTS.toPadma[RTS.consnt_TTHA_5] = Padma.consnt_TTHA;
RTS.toPadma[RTS.consnt_TTHA_6] = Padma.consnt_TTHA;
RTS.toPadma[RTS.consnt_DDA_1] = Padma.consnt_DDA;
RTS.toPadma[RTS.consnt_DDA_2] = Padma.consnt_DDA;
RTS.toPadma[RTS.consnt_DDHA_1] = Padma.consnt_DDHA;
RTS.toPadma[RTS.consnt_DDHA_2] = Padma.consnt_DDHA;
RTS.toPadma[RTS.consnt_DDHA_3] = Padma.consnt_DDHA;
RTS.toPadma[RTS.consnt_DDHA_4] = Padma.consnt_DDHA;
RTS.toPadma[RTS.consnt_DDHA_5] = Padma.consnt_DDHA;
RTS.toPadma[RTS.consnt_NNA_1] = Padma.consnt_NNA;
RTS.toPadma[RTS.consnt_NNA_2] = Padma.consnt_NNA;
RTS.toPadma[RTS.consnt_NNA_3] = Padma.consnt_NNA;
RTS.toPadma[RTS.consnt_NNA_4] = Padma.consnt_NNA;
RTS.toPadma[RTS.consnt_NNA_5] = Padma.consnt_NNA;
RTS.toPadma[RTS.consnt_NNA_6] = Padma.consnt_NNA;
RTS.toPadma[RTS.consnt_TA] = Padma.consnt_TA;
RTS.toPadma[RTS.consnt_THA_1] = Padma.consnt_THA;
RTS.toPadma[RTS.consnt_THA_2] = Padma.consnt_THA;
RTS.toPadma[RTS.consnt_DA] = Padma.consnt_DA;
RTS.toPadma[RTS.consnt_DHA_1] = Padma.consnt_DHA;
RTS.toPadma[RTS.consnt_DHA_2] = Padma.consnt_DHA;
RTS.toPadma[RTS.consnt_NA_1] = Padma.consnt_NA;
RTS.toPadma[RTS.consnt_NA_2] = Padma.consnt_NA;
RTS.toPadma[RTS.consnt_PA] = Padma.consnt_PA;
RTS.toPadma[RTS.consnt_PHA_1] = Padma.consnt_PHA;
RTS.toPadma[RTS.consnt_PHA_2] = Padma.consnt_PHA;
RTS.toPadma[RTS.consnt_PHA_3] = Padma.consnt_PHA;
RTS.toPadma[RTS.consnt_PHA_4] = Padma.consnt_PHA;
RTS.toPadma[RTS.consnt_PHA_5] = Padma.consnt_PHA;
RTS.toPadma[RTS.consnt_PHA_6] = Padma.consnt_PHA;
RTS.toPadma[RTS.consnt_BA] = Padma.consnt_BA;
RTS.toPadma[RTS.consnt_BHA_1] = Padma.consnt_BHA;
RTS.toPadma[RTS.consnt_BHA_2] = Padma.consnt_BHA;
RTS.toPadma[RTS.consnt_BHA_3] = Padma.consnt_BHA;
RTS.toPadma[RTS.consnt_BHA_4] = Padma.consnt_BHA;
RTS.toPadma[RTS.consnt_BHA_5] = Padma.consnt_BHA;
RTS.toPadma[RTS.consnt_MA_1] = Padma.consnt_MA;
RTS.toPadma[RTS.consnt_MA_2] = Padma.consnt_MA;
RTS.toPadma[RTS.consnt_YA] = Padma.consnt_YA;
RTS.toPadma[RTS.consnt_RA] = Padma.consnt_RA;
RTS.toPadma[RTS.consnt_LA] = Padma.consnt_LA;
RTS.toPadma[RTS.consnt_VA_1] = Padma.consnt_VA;
RTS.toPadma[RTS.consnt_VA_2] = Padma.consnt_VA;
RTS.toPadma[RTS.consnt_VA_3] = Padma.consnt_VA;
RTS.toPadma[RTS.consnt_VA_4] = Padma.consnt_VA;
RTS.toPadma[RTS.consnt_SHA_1] = Padma.consnt_SHA;
RTS.toPadma[RTS.consnt_SHA_2] = Padma.consnt_SHA;
RTS.toPadma[RTS.consnt_SSA_1] = Padma.consnt_SSA;
RTS.toPadma[RTS.consnt_SSA_2] = Padma.consnt_SSA;
RTS.toPadma[RTS.consnt_SSA_3] = Padma.consnt_SSA;
RTS.toPadma[RTS.consnt_SSA_4] = Padma.consnt_SSA;
RTS.toPadma[RTS.consnt_SA] = Padma.consnt_SA;
RTS.toPadma[RTS.consnt_HA_1] = Padma.consnt_HA;
RTS.toPadma[RTS.consnt_HA_2] = Padma.consnt_HA;
RTS.toPadma[RTS.consnt_LLA_1] = Padma.consnt_LLA;
RTS.toPadma[RTS.consnt_LLA_2] = Padma.consnt_LLA;
RTS.toPadma[RTS.consnt_LLA_3] = Padma.consnt_LLA;
RTS.toPadma[RTS.consnt_LLA_4] = Padma.consnt_LLA;
RTS.toPadma[RTS.consnt_LLA_5] = Padma.consnt_LLA;
RTS.toPadma[RTS.consnt_LLA_6] = Padma.consnt_LLA;
RTS.toPadma[RTS.consnt_RRA_1] = Padma.consnt_RRA;
RTS.toPadma[RTS.consnt_RRA_2] = Padma.consnt_RRA;
RTS.toPadma[RTS.conjct_KSH_1] = Padma.consnt_KA + Padma.vattu_SSA;
RTS.toPadma[RTS.consnt_TSA] = Padma.consnt_TSA;
RTS.toPadma[RTS.consnt_DJA] = Padma.consnt_DJA;
RTS.toPadma[RTS.misc_JN] = Padma.consnt_JA + Padma.vattu_NYA;
RTS.toPadma[RTS.misc_DDD] = Padma.consnt_DDA + Padma.vattu_DDA;
RTS.toPadma[RTS.misc_TTT] = Padma.consnt_TTA + Padma.vattu_TTA;
RTS.toPadma[RTS.digit_ZERO] = Padma.digit_ZERO;
RTS.toPadma[RTS.digit_ONE] = Padma.digit_ONE;
RTS.toPadma[RTS.digit_TWO] = Padma.digit_TWO;
RTS.toPadma[RTS.digit_THREE] = Padma.digit_THREE;
RTS.toPadma[RTS.digit_FOUR] = Padma.digit_FOUR;
RTS.toPadma[RTS.digit_FIVE] = Padma.digit_FIVE;
RTS.toPadma[RTS.digit_SIX] = Padma.digit_SIX;
RTS.toPadma[RTS.digit_SEVEN] = Padma.digit_SEVEN;
RTS.toPadma[RTS.digit_EIGHT] = Padma.digit_EIGHT;
RTS.toPadma[RTS.digit_NINE] = Padma.digit_NINE;

//Default style is Kanneganti
RTS.fromPadma = new Object();
RTS.fromPadma[Padma.candrabindu] = RTS.candrabindu_1;
RTS.fromPadma[Padma.visarga]     = RTS.visarga_1;
RTS.fromPadma[Padma.syllbreak]   = RTS.virama_1;
RTS.fromPadma[Padma.pollu]       = RTS.virama_1;
RTS.fromPadma[Padma.anusvara]    = RTS.anusvara_1;
RTS.fromPadma[Padma.avagraha]    = RTS.avagraha;
//RTS.fromPadma[Padma.yati]        = RTS.yati;
//RTS.fromPadma[Padma.udAtta]      = RTS.udAtta;
//RTS.fromPadma[Padma.anudAtta]    = RTS.anudAtta;
//RTS.fromPadma[Padma.svarita]     = RTS.svarita;
//RTS.fromPadma[Padma.guru]        = RTS.guru;
//RTS.fromPadma[Padma.laghu]       = RTS.laghu;
//RTS.fromPadma[Padma.danda]       = RTS.danda;
//RTS.fromPadma[Padma.ddanda]      = RTS.ddanda;
RTS.fromPadma[Padma.digit_ZERO]  = RTS.digit_ZERO;
RTS.fromPadma[Padma.digit_ONE]   = RTS.digit_ONE;
RTS.fromPadma[Padma.digit_TWO]   = RTS.digit_TWO;
RTS.fromPadma[Padma.digit_THREE] = RTS.digit_THREE;
RTS.fromPadma[Padma.digit_FOUR]  = RTS.digit_FOUR;
RTS.fromPadma[Padma.digit_FIVE]  = RTS.digit_FIVE;
RTS.fromPadma[Padma.digit_SIX]   = RTS.digit_SIX;
RTS.fromPadma[Padma.digit_SEVEN] = RTS.digit_SEVEN;
RTS.fromPadma[Padma.digit_EIGHT] = RTS.digit_EIGHT;
RTS.fromPadma[Padma.digit_NINE]  = RTS.digit_NINE;
RTS.fromPadma[Padma.vowel_A]     = RTS.vowel_A;
RTS.fromPadma[Padma.vowel_AA]    = RTS.vowel_AA_1;
RTS.fromPadma[Padma.vowel_I]     = RTS.vowel_I;
RTS.fromPadma[Padma.vowel_II]    = RTS.vowel_II_1;
RTS.fromPadma[Padma.vowel_U]     = RTS.vowel_U;
RTS.fromPadma[Padma.vowel_UU]    = RTS.vowel_UU_1;
RTS.fromPadma[Padma.vowel_R]     = RTS.vowel_R_1;
RTS.fromPadma[Padma.vowel_RR]    = RTS.vowel_RR_1;
RTS.fromPadma[Padma.vowel_L]     = RTS.vowel_L;
RTS.fromPadma[Padma.vowel_LL]    = RTS.vowel_LL;
RTS.fromPadma[Padma.vowel_E]     = RTS.vowel_E;
RTS.fromPadma[Padma.vowel_EE]    = RTS.vowel_EE_1;
RTS.fromPadma[Padma.vowel_AI]    = RTS.vowel_AI_1;
RTS.fromPadma[Padma.vowel_O]     = RTS.vowel_O;
RTS.fromPadma[Padma.vowel_OO]    = RTS.vowel_OO_1;
RTS.fromPadma[Padma.vowel_AU]    = RTS.vowel_AU_1;
RTS.fromPadma[Padma.consnt_KA]   = RTS.consnt_KA;
RTS.fromPadma[Padma.consnt_KHA]  = RTS.consnt_KHA_1;
RTS.fromPadma[Padma.consnt_GA]   = RTS.consnt_GA;
RTS.fromPadma[Padma.consnt_GHA]  = RTS.consnt_GHA_1;
RTS.fromPadma[Padma.consnt_NGA]  = RTS.consnt_NGA;
RTS.fromPadma[Padma.consnt_CA]   = RTS.consnt_CA_1;
RTS.fromPadma[Padma.consnt_CHA]  = RTS.consnt_CHA_1;
RTS.fromPadma[Padma.consnt_JA]   = RTS.consnt_JA_1;
RTS.fromPadma[Padma.consnt_JHA]  = RTS.consnt_JHA_1;
RTS.fromPadma[Padma.consnt_NYA]  = RTS.consnt_NYA;
RTS.fromPadma[Padma.consnt_TTA]  = RTS.consnt_TTA_1;
RTS.fromPadma[Padma.consnt_TTHA] = RTS.consnt_TTHA_1;
RTS.fromPadma[Padma.consnt_DDA]  = RTS.consnt_DDA_1;
RTS.fromPadma[Padma.consnt_DDHA] = RTS.consnt_DDHA_1;
RTS.fromPadma[Padma.consnt_NNA]  = RTS.consnt_NNA_1;
RTS.fromPadma[Padma.consnt_TA]   = RTS.consnt_TA;
RTS.fromPadma[Padma.consnt_THA]  = RTS.consnt_THA_1;
RTS.fromPadma[Padma.consnt_DA]   = RTS.consnt_DA;
RTS.fromPadma[Padma.consnt_DHA]  = RTS.consnt_DHA_1;
RTS.fromPadma[Padma.consnt_NA]   = RTS.consnt_NA_1;
RTS.fromPadma[Padma.consnt_PA]   = RTS.consnt_PA;
RTS.fromPadma[Padma.consnt_PHA]  = RTS.consnt_PHA_1;
RTS.fromPadma[Padma.consnt_BA]   = RTS.consnt_BA;
RTS.fromPadma[Padma.consnt_BHA]  = RTS.consnt_BHA_1;
RTS.fromPadma[Padma.consnt_MA]   = RTS.consnt_MA_1;
RTS.fromPadma[Padma.consnt_YA]   = RTS.consnt_YA;
RTS.fromPadma[Padma.consnt_RA]   = RTS.consnt_RA;
RTS.fromPadma[Padma.consnt_LA]   = RTS.consnt_LA;
RTS.fromPadma[Padma.consnt_VA]   = RTS.consnt_VA_1;
RTS.fromPadma[Padma.consnt_SHA]  = RTS.consnt_SHA_1;
RTS.fromPadma[Padma.consnt_SSA]  = RTS.consnt_SSA_1;
RTS.fromPadma[Padma.consnt_SA]   = RTS.consnt_SA;
RTS.fromPadma[Padma.consnt_HA]   = RTS.consnt_HA_1;
RTS.fromPadma[Padma.consnt_LLA]  = RTS.consnt_LLA_1;
RTS.fromPadma[Padma.consnt_RRA]  = RTS.consnt_RRA_1;
RTS.fromPadma[Padma.consnt_TSA]  = RTS.consnt_TSA;
RTS.fromPadma[Padma.consnt_DJA]  = RTS.consnt_DJA;
RTS.fromPadma[Padma.vowelsn_AA]  = RTS.vowel_AA_1;
RTS.fromPadma[Padma.vowelsn_I]   = RTS.vowel_I;
RTS.fromPadma[Padma.vowelsn_II]  = RTS.vowel_II_1;
RTS.fromPadma[Padma.vowelsn_U]   = RTS.vowel_U;
RTS.fromPadma[Padma.vowelsn_UU]  = RTS.vowel_UU_1;
RTS.fromPadma[Padma.vowelsn_R]   = RTS.vowel_R_1;
RTS.fromPadma[Padma.vowelsn_RR]  = RTS.vowel_RR_1;
RTS.fromPadma[Padma.vowelsn_L]   = RTS.vowel_L;
RTS.fromPadma[Padma.vowelsn_LL]  = RTS.vowel_LL;
RTS.fromPadma[Padma.vowelsn_E]   = RTS.vowel_E;
RTS.fromPadma[Padma.vowelsn_EE]  = RTS.vowel_EE_1;
RTS.fromPadma[Padma.vowelsn_AI]  = RTS.vowel_AI_1;
RTS.fromPadma[Padma.vowelsn_O]   = RTS.vowel_O;
RTS.fromPadma[Padma.vowelsn_OO]  = RTS.vowel_OO_1;
RTS.fromPadma[Padma.vowelsn_AU]  = RTS.vowel_AU_1;
RTS.fromPadma[Padma.vattu_KA]    = RTS.consnt_KA;
RTS.fromPadma[Padma.vattu_KHA]   = RTS.consnt_KHA_1;
RTS.fromPadma[Padma.vattu_GA]    = RTS.consnt_GA;
RTS.fromPadma[Padma.vattu_GHA]   = RTS.consnt_GHA_1;
RTS.fromPadma[Padma.vattu_NGA]   = RTS.consnt_NGA;
RTS.fromPadma[Padma.vattu_CA]    = RTS.consnt_CA_1;
RTS.fromPadma[Padma.vattu_CHA]   = RTS.consnt_CHA_1;
RTS.fromPadma[Padma.vattu_JA]    = RTS.consnt_JA_1;
RTS.fromPadma[Padma.vattu_JHA]   = RTS.consnt_JHA_1;
RTS.fromPadma[Padma.vattu_NYA]   = RTS.consnt_NYA;
RTS.fromPadma[Padma.vattu_TTA]   = RTS.consnt_TTA_1;
RTS.fromPadma[Padma.vattu_TTHA]  = RTS.consnt_TTHA_1;
RTS.fromPadma[Padma.vattu_DDA]   = RTS.consnt_DDA_1;
RTS.fromPadma[Padma.vattu_DDHA]  = RTS.consnt_DDHA_1;
RTS.fromPadma[Padma.vattu_NNA]   = RTS.consnt_NNA_1;
RTS.fromPadma[Padma.vattu_TA]    = RTS.consnt_TA;
RTS.fromPadma[Padma.vattu_THA]   = RTS.consnt_THA_1;
RTS.fromPadma[Padma.vattu_DA]    = RTS.consnt_DA;
RTS.fromPadma[Padma.vattu_DHA]   = RTS.consnt_DHA_1;
RTS.fromPadma[Padma.vattu_NA]    = RTS.consnt_NA_1;
RTS.fromPadma[Padma.vattu_PA]    = RTS.consnt_PA;
RTS.fromPadma[Padma.vattu_PHA]   = RTS.consnt_PHA_1;
RTS.fromPadma[Padma.vattu_BA]    = RTS.consnt_BA;
RTS.fromPadma[Padma.vattu_BHA]   = RTS.consnt_BHA_1;
RTS.fromPadma[Padma.vattu_MA]    = RTS.consnt_MA_1;
RTS.fromPadma[Padma.vattu_YA]    = RTS.consnt_YA;
RTS.fromPadma[Padma.vattu_RA]    = RTS.consnt_RA;
RTS.fromPadma[Padma.vattu_LA]    = RTS.consnt_LA;
RTS.fromPadma[Padma.vattu_VA]    = RTS.consnt_VA_1;
RTS.fromPadma[Padma.vattu_SHA]   = RTS.consnt_SHA_1;
RTS.fromPadma[Padma.vattu_SSA]   = RTS.consnt_SSA_1;
RTS.fromPadma[Padma.vattu_SA]    = RTS.consnt_SA;
RTS.fromPadma[Padma.vattu_HA]    = RTS.consnt_HA_1;
RTS.fromPadma[Padma.vattu_LLA]   = RTS.consnt_LLA_1;
RTS.fromPadma[Padma.vattu_RRA]   = RTS.consnt_RRA_1;
RTS.fromPadma[Padma.vattu_TSA]   = RTS.consnt_TSA;
RTS.fromPadma[Padma.vattu_DJA]   = RTS.consnt_DJA;

//The following consonants when preceeded by n or m make it a sunna
RTS.anusvaraMakerCommon = new Object();
RTS.anusvaraMakerCommon[Padma.consnt_KA]   = true;
RTS.anusvaraMakerCommon[Padma.consnt_KHA]  = true;
RTS.anusvaraMakerCommon[Padma.consnt_GA]   = true;
RTS.anusvaraMakerCommon[Padma.consnt_GHA]  = true;
RTS.anusvaraMakerCommon[Padma.consnt_CA]   = true;
RTS.anusvaraMakerCommon[Padma.consnt_CHA]  = true;
RTS.anusvaraMakerCommon[Padma.consnt_JA]   = true;
RTS.anusvaraMakerCommon[Padma.consnt_JHA]  = true;
RTS.anusvaraMakerCommon[Padma.consnt_TTA]  = true;
RTS.anusvaraMakerCommon[Padma.consnt_TTHA] = true;
RTS.anusvaraMakerCommon[Padma.consnt_DDA]  = true;
RTS.anusvaraMakerCommon[Padma.consnt_DDHA] = true;
RTS.anusvaraMakerCommon[Padma.consnt_TA]   = true;
RTS.anusvaraMakerCommon[Padma.consnt_THA]  = true;
RTS.anusvaraMakerCommon[Padma.consnt_DA]   = true;
RTS.anusvaraMakerCommon[Padma.consnt_DHA]  = true;
RTS.anusvaraMakerCommon[Padma.consnt_PA]   = true;
RTS.anusvaraMakerCommon[Padma.consnt_PHA]  = true;
RTS.anusvaraMakerCommon[Padma.consnt_BA]   = true;
RTS.anusvaraMakerCommon[Padma.consnt_BHA]  = true;

//The following consonats when preceeded by m make it a sunna
RTS.anusvaraMakerForMOnly = new Object();
RTS.anusvaraMakerForMOnly[Padma.consnt_LA]  = true;
RTS.anusvaraMakerForMOnly[Padma.consnt_SA]  = true;
RTS.anusvaraMakerForMOnly[Padma.consnt_SHA] = true;
RTS.anusvaraMakerForMOnly[Padma.consnt_VA]  = true;

RTS.Pillalamarri = new Object();
RTS.Pillalamarri.fromPadma = new Object();
RTS.Pillalamarri.fromPadma[Padma.vowel_AA]    = RTS.vowel_AA_2;
RTS.Pillalamarri.fromPadma[Padma.vowel_II]    = RTS.vowel_II_3;
RTS.Pillalamarri.fromPadma[Padma.vowel_UU]    = RTS.vowel_UU_3;
RTS.Pillalamarri.fromPadma[Padma.vowel_EE]    = RTS.vowel_EE_2;
RTS.Pillalamarri.fromPadma[Padma.consnt_KHA]  = RTS.consnt_KHA_3;
RTS.Pillalamarri.fromPadma[Padma.consnt_GHA]  = RTS.consnt_GHA_3;
RTS.Pillalamarri.fromPadma[Padma.consnt_CHA]  = RTS.consnt_CHA_4;
RTS.Pillalamarri.fromPadma[Padma.consnt_JHA]  = RTS.consnt_JHA_3;
RTS.Pillalamarri.fromPadma[Padma.consnt_BHA]  = RTS.consnt_BHA_3;
RTS.Pillalamarri.fromPadma[Padma.vowelsn_AA]  = RTS.vowel_AA_2;
RTS.Pillalamarri.fromPadma[Padma.vowelsn_II]  = RTS.vowel_II_3;
RTS.Pillalamarri.fromPadma[Padma.vowelsn_UU]  = RTS.vowel_UU_3;
RTS.Pillalamarri.fromPadma[Padma.vowelsn_EE]  = RTS.vowel_EE_2;
RTS.Pillalamarri.fromPadma[Padma.vattu_KHA]   = RTS.consnt_KHA_3;
RTS.Pillalamarri.fromPadma[Padma.vattu_GHA]   = RTS.consnt_GHA_3;
RTS.Pillalamarri.fromPadma[Padma.vattu_CHA]   = RTS.consnt_CHA_4;
RTS.Pillalamarri.fromPadma[Padma.vattu_JHA]   = RTS.consnt_JHA_3;
RTS.Pillalamarri.fromPadma[Padma.vattu_BHA]   = RTS.consnt_BHA_3;

RTS.Paalana = new Object();
RTS.Paalana.fromPadma = new Object();
RTS.Paalana.fromPadma[Padma.vowel_AA]    = RTS.vowel_AA_3;
RTS.Paalana.fromPadma[Padma.vowel_II]    = RTS.vowel_II_4;
RTS.Paalana.fromPadma[Padma.vowel_UU]    = RTS.vowel_UU_4;
RTS.Paalana.fromPadma[Padma.vowel_EE]    = RTS.vowel_EE_3;
RTS.Paalana.fromPadma[Padma.vowel_OO]    = RTS.vowel_OO_4;
RTS.Paalana.fromPadma[Padma.consnt_KHA]  = RTS.consnt_KHA_3;
RTS.Paalana.fromPadma[Padma.consnt_GHA]  = RTS.consnt_GHA_3;
RTS.Paalana.fromPadma[Padma.consnt_CHA]  = RTS.consnt_CHA_3;
RTS.Paalana.fromPadma[Padma.consnt_JHA]  = RTS.consnt_JHA_3;
RTS.Paalana.fromPadma[Padma.consnt_TTA]  = RTS.consnt_TTA_2;
RTS.Paalana.fromPadma[Padma.consnt_TTHA] = RTS.consnt_TTHA_2;
RTS.Paalana.fromPadma[Padma.consnt_DDA]  = RTS.consnt_DDA_2;
RTS.Paalana.fromPadma[Padma.consnt_DDHA] = RTS.consnt_DDHA_5;
RTS.Paalana.fromPadma[Padma.consnt_NNA]  = RTS.consnt_NNA_4;
RTS.Paalana.fromPadma[Padma.consnt_BHA]  = RTS.consnt_BHA_3;
RTS.Paalana.fromPadma[Padma.consnt_LLA]  = RTS.consnt_LLA_2;
RTS.Paalana.fromPadma[Padma.vowelsn_AA]  = RTS.vowel_AA_3;
RTS.Paalana.fromPadma[Padma.vowelsn_II]  = RTS.vowel_II_4;
RTS.Paalana.fromPadma[Padma.vowelsn_UU]  = RTS.vowel_UU_4;
RTS.Paalana.fromPadma[Padma.vowelsn_EE]  = RTS.vowel_EE_3;
RTS.Paalana.fromPadma[Padma.vowelsn_OO]  = RTS.vowel_OO_4;
RTS.Paalana.fromPadma[Padma.vattu_KHA]   = RTS.consnt_KHA_3;
RTS.Paalana.fromPadma[Padma.vattu_GHA]   = RTS.consnt_GHA_3;
RTS.Paalana.fromPadma[Padma.vattu_CHA]   = RTS.consnt_CHA_3;
RTS.Paalana.fromPadma[Padma.vattu_JHA]   = RTS.consnt_JHA_3;
RTS.Paalana.fromPadma[Padma.vattu_TTA]   = RTS.consnt_TTA_2;
RTS.Paalana.fromPadma[Padma.vattu_TTHA]  = RTS.consnt_TTHA_2;
RTS.Paalana.fromPadma[Padma.vattu_DDA]   = RTS.consnt_DDA_2;
RTS.Paalana.fromPadma[Padma.vattu_DDHA]  = RTS.consnt_DDHA_5;
RTS.Paalana.fromPadma[Padma.vattu_NNA]   = RTS.consnt_NNA_4;
RTS.Paalana.fromPadma[Padma.vattu_BHA]   = RTS.consnt_BHA_3;
RTS.Paalana.fromPadma[Padma.vattu_LLA]   = RTS.consnt_LLA_2;

//Special handling in Classic style (different from rangavallika)
RTS.classicSpecials = new Object();
RTS.classicSpecials[Padma.anusvara]  = true;
RTS.classicSpecials[Padma.pollu]     = true;
RTS.classicSpecials[Padma.consnt_MA] = true;
RTS.classicSpecials[Padma.consnt_NA] = true;



RTS.lookup = function (str) 
{
    var val = RTS.toPadma[str];
    return val == undefined ? null : val;
}
	
RTS.isPossibleAnusvara = function (str)
{
    return str == RTS.consnt_NA_1 || str == RTS.consnt_MA_1;
}

RTS.isAnusvara = function (prefix, suffix)
{
    if (RTS.anusvaraMakerCommon[suffix] != undefined)
        return true;
    if (prefix == Padma.consnt_MA)
        return RTS.anusvaraMakerForMOnly[suffix] != null ? true : false;
    return false;
}

RTS.getRTSWriter = function (wstyle, sstyle)
{
    return new RTS(wstyle, sstyle);
}

RTS.prototype.transformFromPadma = function (str)
{
    if (str.length == 0)
        return "";
    var last = str.charAt(str.length - 1), output = "";
    var last_type = Padma.getType(last);
    if (last_type == Padma.type_hallu || last_type == Padma.type_vattu)
        str += Padma.vowel_A;
    else if (last_type == Padma.type_accu_mod && str.length > 1) {
        var type = Padma.getType(str.charAt(str.length - 2));
        if (type == Padma.type_hallu || type == Padma.type_vattu)
            str = str.substring(0, str.length - 1) + Padma.vowel_A + last;
    }
    for(var i = 0; i < str.length; ++i)
        output += this.transformSyllableConstituent(str.charAt(i));
    return output;
}
 
RTS.prototype.transformSyllableConstituent = function (str)
{
    if (this.sunnaStyle == RTS.sstyle_Classic && RTS.classicSpecials[str] != undefined) {
        var ret = "";
        if (this.cache != null)
            ret = this.cleanup();
        this.cache = str;
        return ret;
    }
    var output = null;
    if (this.writingStyle == RTS.wstyle_Pillalamarri)
        output = RTS.Pillalamarri.fromPadma[str];
    else if (this.writingStyle == RTS.wstyle_Paalana)
        output = RTS.Paalana.fromPadma[str];

    if (output == null)
        output = RTS.fromPadma[str];
    output = (output == null ? str : output);
    
    if (this.cache != null && this.sunnaStyle == RTS.sstyle_Classic) {
        if (this.cache == Padma.anusvara) {
            //Generate the more natural style of writing (whatever that means)
            if (str == Padma.consnt_PA || str == Padma.consnt_PHA || str == Padma.consnt_BA || str == Padma.consnt_BHA 
                || RTS.anusvaraMakerForMOnly[str] != null)
                output = RTS.consnt_MA_1 + output;
            else if (RTS.anusvaraMakerCommon[str] != null)
                output = RTS.consnt_NA_1 + output;
            else output = RTS.consnt_MA_1 + output;
        }
        else if (this.cache == Padma.pollu) {
            if (Padma.getType(str) != Padma.type_unknown)
                output = RTS.virama_1 + output;
        }
        else {
            var vattu = (Padma.getType(str) == Padma.type_vattu ? true : false);
            if (this.cache == Padma.consnt_NA) {
                if (!vattu || RTS.anusvaraMakerCommon[Padma.baseForm(str)] == null)
                    output = RTS.consnt_NA_1 + output;
                else output = RTS.consnt_NA_2 + output;
            }
            else if (this.cache == Padma.consnt_MA) {
                var base = Padma.baseForm(str);
                if (!vattu || (RTS.anusvaraMakerCommon[base] == null && RTS.anusvaraMakerForMOnly[base] == null))
                    output = RTS.consnt_MA_1 + output;
                else output = RTS.consnt_MA_2 + output;
            }
        }
        this.cache = null;
    }
    return output;
}

RTS.prototype.cleanup = function()
{
    var ret = "";
    if (this.cache == Padma.anusvara || this.cache == Padma.consnt_MA)
        ret = RTS.consnt_MA_1;
    else if (this.cache == Padma.consnt_NA)
        ret = RTS.consnt_NA_1;
/*
    //Don't put a caret for terminating pollus - default will work here
    else if (this.cache == Padma.pollu)
        ret = "";
*/
    this.cache = null;
    return ret;
}
