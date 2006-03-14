// $Id: ITRANS.js,v 1.7 2006/03/14 21:32:45 vnagarjuna Exp $ -->

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

//ITRANS

function ITRANS()
{
}

ITRANS.maxLookupLen = 3;

ITRANS.candrabindu_1  = ".N"; //arasunna
ITRANS.candrabindu_2  = "@m";
ITRANS.visarga        = "H";
ITRANS.virama         = ".h";
ITRANS.avagraha       = ".a"; 
ITRANS.anusvara_1     = "M";
ITRANS.anusvara_2     = ".m";
ITRANS.anusvara_3     = ".n";
ITRANS.mapollu        = "m{}";
ITRANS.om_1           = "OM";
ITRANS.om_2           = "AUM";

//Vowels
ITRANS.vowel_A        = "a";
ITRANS.vowel_AA_1     = "aa";
ITRANS.vowel_AA_2     = "A";
ITRANS.vowel_I        = "i";
ITRANS.vowel_II_1     = "ii";
ITRANS.vowel_II_2     = "I";
ITRANS.vowel_U        = "u";
ITRANS.vowel_UU_1     = "uu";
ITRANS.vowel_UU_2     = "U";
ITRANS.vowel_R_1      = "RRi";
ITRANS.vowel_R_2      = "R^i";
ITRANS.vowel_RR_1     = "RRI";
ITRANS.vowel_RR_2     = "R^I";
ITRANS.vowel_L_1      = "LLi";
ITRANS.vowel_L_2      = "L^i";
ITRANS.vowel_LL_1     = "LLI";
ITRANS.vowel_LL_2     = "L^I";
ITRANS.vowel_E        = "e";
ITRANS.vowel_EE       = "E";
ITRANS.vowel_AI       = "ai";
ITRANS.vowel_O        = "o";
ITRANS.vowel_OO       = "O";
ITRANS.vowel_AU       = "au";

//Consonants
ITRANS.consnt_KA      = "k";
ITRANS.consnt_KHA     = "kh";
ITRANS.consnt_GA      = "g";
ITRANS.consnt_GHA     = "gh";
ITRANS.consnt_NGA_1   = "~N";
ITRANS.consnt_NGA_2   = "N^";
ITRANS.consnt_CA      = "ch";
ITRANS.consnt_CHA_1   = "Ch";
ITRANS.consnt_CHA_2   = "chh";
ITRANS.consnt_JA      = "j";
ITRANS.consnt_JHA     = "jh";
ITRANS.consnt_NYA_1   = "~n";
ITRANS.consnt_NYA_2   = "JN";
ITRANS.consnt_TTA     = "T";
ITRANS.consnt_TTHA    = "Th";
ITRANS.consnt_DDA     = "D";
ITRANS.consnt_DDHA    = "Dh";
ITRANS.consnt_NNA     = "N";
ITRANS.consnt_TA      = "t";
ITRANS.consnt_THA     = "th";
ITRANS.consnt_DA      = "d";
ITRANS.consnt_DHA     = "dh";
ITRANS.consnt_NA      = "n";
ITRANS.consnt_PA      = "p";
ITRANS.consnt_PHA     = "ph";
ITRANS.consnt_BA      = "b";
ITRANS.consnt_BHA     = "bh";
ITRANS.consnt_MA      = "m";
ITRANS.consnt_YA      = "y";
ITRANS.consnt_RA      = "r";
ITRANS.consnt_LA      = "l";
ITRANS.consnt_LLA_1   = "L";
ITRANS.consnt_LLA_2   = "ld";
ITRANS.consnt_VA_1    = "v";
ITRANS.consnt_VA_2    = "w";
ITRANS.consnt_SHA     = "sh";
ITRANS.consnt_SSA_1   = "Sh";
ITRANS.consnt_SSA_2   = "shh";
ITRANS.consnt_SA      = "s";
ITRANS.consnt_HA      = "h";
ITRANS.consnt_RRA     = "R";
ITRANS.conjct_KSH_1   = "x";   //ksh is automatically handled
ITRANS.conjct_KSH_2   = "ksh";
ITRANS.conjct_JNY_1   = "GY";  //j~n is automatically handled
ITRANS.conjct_JNY_2   = "dny";
ITRANS.conjct_JNY_3    = "j~n";
ITRANS.consnt_QA      = "q";
ITRANS.consnt_KHHA    = "K";
ITRANS.consnt_GHHA    = "G";
//itrans uses z and J for Tamil's zh and Urdu's za, use z for Tamil and J for Urdu
ITRANS.consnt_ZHA    = "z";
ITRANS.consnt_ZA     = "J";
ITRANS.consnt_FA      = "f";
ITRANS.consnt_DDDHA   = ".D";
ITRANS.consnt_RHA     = ".Dh";
ITRANS.consnt_YYA     = "Y";

//digits
ITRANS.digit_ZERO     = "0";
ITRANS.digit_ONE      = "1";
ITRANS.digit_TWO      = "2";
ITRANS.digit_THREE    = "3";
ITRANS.digit_FOUR     = "4";
ITRANS.digit_FIVE     = "5";
ITRANS.digit_SIX      = "6";
ITRANS.digit_SEVEN    = "7";
ITRANS.digit_EIGHT    = "8";
ITRANS.digit_NINE     = "9";

//vowel signs
ITRANS.vowelsn_CDR_E  = ".c";

ITRANS.toPadma = new Object();
	
ITRANS.toPadma[ITRANS.candrabindu_1] = Padma.candrabindu;
ITRANS.toPadma[ITRANS.candrabindu_2] = Padma.candrabindu;
ITRANS.toPadma[ITRANS.visarga]       = Padma.visarga;
ITRANS.toPadma[ITRANS.virama]        = Padma.syllbreak;
ITRANS.toPadma[ITRANS.avagraha]      = Padma.avagraha;
ITRANS.toPadma[ITRANS.anusvara_1]    = Padma.anusvara;
ITRANS.toPadma[ITRANS.anusvara_2]    = Padma.anusvara;
ITRANS.toPadma[ITRANS.anusvara_3]    = Padma.anusvara;
ITRANS.toPadma[ITRANS.mapollu]       = Padma.consnt_MA + Padma.pollu;
ITRANS.toPadma[ITRANS.om_1]          = Padma.om;
ITRANS.toPadma[ITRANS.om_2]          = Padma.om;

ITRANS.toPadma[ITRANS.vowel_A]    = Padma.vowel_A;
ITRANS.toPadma[ITRANS.vowel_AA_1] = Padma.vowel_AA;
ITRANS.toPadma[ITRANS.vowel_AA_2] = Padma.vowel_AA;
ITRANS.toPadma[ITRANS.vowel_I]    = Padma.vowel_I;
ITRANS.toPadma[ITRANS.vowel_II_1] = Padma.vowel_II;
ITRANS.toPadma[ITRANS.vowel_II_2] = Padma.vowel_II;
ITRANS.toPadma[ITRANS.vowel_U]    = Padma.vowel_U;
ITRANS.toPadma[ITRANS.vowel_UU_1] = Padma.vowel_UU;
ITRANS.toPadma[ITRANS.vowel_UU_2] = Padma.vowel_UU;
ITRANS.toPadma[ITRANS.vowel_R_1]  = Padma.vowel_R;
ITRANS.toPadma[ITRANS.vowel_R_2]  = Padma.vowel_R;
ITRANS.toPadma[ITRANS.vowel_RR_1] = Padma.vowel_RR;
ITRANS.toPadma[ITRANS.vowel_RR_2] = Padma.vowel_RR;
ITRANS.toPadma[ITRANS.vowel_L_1]  = Padma.vowel_L;
ITRANS.toPadma[ITRANS.vowel_L_2]  = Padma.vowel_L;
ITRANS.toPadma[ITRANS.vowel_LL_1] = Padma.vowel_LL;
ITRANS.toPadma[ITRANS.vowel_LL_2] = Padma.vowel_LL;
ITRANS.toPadma[ITRANS.vowel_E]    = Padma.vowel_E;
ITRANS.toPadma[ITRANS.vowel_EE]   = Padma.vowel_EE;
ITRANS.toPadma[ITRANS.vowel_AI]   = Padma.vowel_AI;
ITRANS.toPadma[ITRANS.vowel_O]    = Padma.vowel_O;
ITRANS.toPadma[ITRANS.vowel_OO]   = Padma.vowel_OO;
ITRANS.toPadma[ITRANS.vowel_AU]   = Padma.vowel_AU;

ITRANS.toPadma[ITRANS.consnt_KA]    = Padma.consnt_KA;
ITRANS.toPadma[ITRANS.consnt_KHA]   = Padma.consnt_KHA;
ITRANS.toPadma[ITRANS.consnt_GA]    = Padma.consnt_GA;
ITRANS.toPadma[ITRANS.consnt_GHA]   = Padma.consnt_GHA;
ITRANS.toPadma[ITRANS.consnt_NGA_1] = Padma.consnt_NGA;
ITRANS.toPadma[ITRANS.consnt_NGA_2] = Padma.consnt_NGA;
ITRANS.toPadma[ITRANS.consnt_CA]    = Padma.consnt_CA;
ITRANS.toPadma[ITRANS.consnt_CHA_1] = Padma.consnt_CHA;
ITRANS.toPadma[ITRANS.consnt_CHA_2] = Padma.consnt_CHA;
ITRANS.toPadma[ITRANS.consnt_JA]    = Padma.consnt_JA;
ITRANS.toPadma[ITRANS.consnt_JHA]   = Padma.consnt_JHA;
ITRANS.toPadma[ITRANS.consnt_NYA_1] = Padma.consnt_NYA;
ITRANS.toPadma[ITRANS.consnt_NYA_2] = Padma.consnt_NYA;
ITRANS.toPadma[ITRANS.consnt_TTA]   = Padma.consnt_TTA;
ITRANS.toPadma[ITRANS.consnt_TTHA]  = Padma.consnt_TTHA;
ITRANS.toPadma[ITRANS.consnt_DDA]   = Padma.consnt_DDA;
ITRANS.toPadma[ITRANS.consnt_DDHA]  = Padma.consnt_DDHA;
ITRANS.toPadma[ITRANS.consnt_NNA]   = Padma.consnt_NNA;
ITRANS.toPadma[ITRANS.consnt_TA]    = Padma.consnt_TA;
ITRANS.toPadma[ITRANS.consnt_THA]   = Padma.consnt_THA;
ITRANS.toPadma[ITRANS.consnt_DA]    = Padma.consnt_DA;
ITRANS.toPadma[ITRANS.consnt_DHA]   = Padma.consnt_DHA;
ITRANS.toPadma[ITRANS.consnt_NA]    = Padma.consnt_NA;
ITRANS.toPadma[ITRANS.consnt_PA]    = Padma.consnt_PA;
ITRANS.toPadma[ITRANS.consnt_PHA]   = Padma.consnt_PHA;
ITRANS.toPadma[ITRANS.consnt_BA]    = Padma.consnt_BA;
ITRANS.toPadma[ITRANS.consnt_BHA]   = Padma.consnt_BHA;
ITRANS.toPadma[ITRANS.consnt_MA]    = Padma.consnt_MA;
ITRANS.toPadma[ITRANS.consnt_YA]    = Padma.consnt_YA;
ITRANS.toPadma[ITRANS.consnt_RA]    = Padma.consnt_RA;
ITRANS.toPadma[ITRANS.consnt_LA]    = Padma.consnt_LA;
ITRANS.toPadma[ITRANS.consnt_LLA_1] = Padma.consnt_LLA;
ITRANS.toPadma[ITRANS.consnt_LLA_2] = Padma.consnt_LLA;
ITRANS.toPadma[ITRANS.consnt_VA_1]  = Padma.consnt_VA;
ITRANS.toPadma[ITRANS.consnt_VA_2]  = Padma.consnt_VA;
ITRANS.toPadma[ITRANS.consnt_SHA]   = Padma.consnt_SHA;
ITRANS.toPadma[ITRANS.consnt_SSA_1] = Padma.consnt_SSA;
ITRANS.toPadma[ITRANS.consnt_SSA_2] = Padma.consnt_SSA;
ITRANS.toPadma[ITRANS.consnt_SA]    = Padma.consnt_SA;
ITRANS.toPadma[ITRANS.consnt_HA]    = Padma.consnt_HA;
ITRANS.toPadma[ITRANS.consnt_RRA]   = Padma.consnt_RRA;
ITRANS.toPadma[ITRANS.conjct_KSH_1] = Padma.consnt_KA + Padma.vattu_SSA;
ITRANS.toPadma[ITRANS.conjct_JNY_1] = Padma.consnt_JA + Padma.vattu_NYA;
ITRANS.toPadma[ITRANS.conjct_JNY_2] = Padma.consnt_JA + Padma.vattu_NYA;
ITRANS.toPadma[ITRANS.consnt_QA]    = Padma.consnt_QA;
ITRANS.toPadma[ITRANS.consnt_KHHA]  = Padma.consnt_KHHA;
ITRANS.toPadma[ITRANS.consnt_GHHA]  = Padma.consnt_GHHA;
ITRANS.toPadma[ITRANS.consnt_ZA]    = Padma.consnt_ZA;
ITRANS.toPadma[ITRANS.consnt_FA]    = Padma.consnt_FA;
ITRANS.toPadma[ITRANS.consnt_DDDHA] = Padma.consnt_DDDHA;
ITRANS.toPadma[ITRANS.consnt_RHA]   = Padma.consnt_RHA;
ITRANS.toPadma[ITRANS.consnt_ZHA]   = Padma.consnt_ZHA;
ITRANS.toPadma[ITRANS.consnt_YYA]   = Padma.consnt_YYA;

ITRANS.toPadma[ITRANS.digit_ZERO]  = Padma.digit_ZERO;
ITRANS.toPadma[ITRANS.digit_ONE]   = Padma.digit_ONE;
ITRANS.toPadma[ITRANS.digit_TWO]   = Padma.digit_TWO;
ITRANS.toPadma[ITRANS.digit_THREE] = Padma.digit_THREE;
ITRANS.toPadma[ITRANS.digit_FOUR]  = Padma.digit_FOUR;
ITRANS.toPadma[ITRANS.digit_FIVE]  = Padma.digit_FIVE;
ITRANS.toPadma[ITRANS.digit_SIX]   = Padma.digit_SIX;
ITRANS.toPadma[ITRANS.digit_SEVEN] = Padma.digit_SEVEN;
ITRANS.toPadma[ITRANS.digit_EIGHT] = Padma.digit_EIGHT;
ITRANS.toPadma[ITRANS.digit_NINE]  = Padma.digit_NINE;

ITRANS.toPadma[ITRANS.vowelsn_CDR_E] = Padma.vowelsn_CDR_E;

ITRANS.lookup = function (str) 
{
    var val = ITRANS.toPadma[str];
    return val == undefined ? null : val;
}
