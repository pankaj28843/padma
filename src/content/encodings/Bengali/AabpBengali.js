// $Id: AabpBengali.js,v 1.3 2011/10/27 15:34:20 vnagarjuna Exp $ -->

//Copyright 2006 Nagarjuna Venna <vnagarjuna@yahoo.com>
/*               Golam Mortuza Hossain <gmhossain@gmail.com> */

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

function Aabpbengali()
{
}

//The interface every dynamic font encoding should implement
Aabpbengali.maxLookupLen = 3;
Aabpbengali.fontFace     = "Aabpbengali";
Aabpbengali.displayName  = "Aabpbengali";
Aabpbengali.script       = Padma.script_BENGALI;
Aabpbengali.hasSuffixes  = true;

Aabpbengali.lookup = function (str) 
{
    return Aabpbengali.toPadma[str];
}

Aabpbengali.isPrefixSymbol = function (str)
{
    return Aabpbengali.prefixList[str] != null;
}

Aabpbengali.isSuffixSymbol = function (str)
{
    return Aabpbengali.suffixList[str] != null;
}

Aabpbengali.isOverloaded = function (str)
{
    return Aabpbengali.overloadList[str] != null;
}

Aabpbengali.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if ((sign1 == Padma.vowelsn_E && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_E))
        return Padma.vowelsn_OO;
    if ((sign1 == Padma.vowelsn_AULEN && sign2 == Padma.vowelsn_E) ||
        (sign1 == Padma.vowelsn_E && sign2 == Padma.vowelsn_AULEN))
        return Padma.vowelsn_AU;
    return sign1 + sign2;    
}

Aabpbengali.isRedundant = function (str)
{
    return Aabpbengali.redundantList[str] != null;
}


/* Map from Aabpbengali   starts here */


Aabpbengali.halffm_RA_1    = "\u0027";
Aabpbengali.halffm_RA_2    = "\u00D5";
Aabpbengali.halffm_RA_3    = "\u00F1";
Aabpbengali.candrabindu_1  = "\u003C"; 
Aabpbengali.candrabindu_2  = "\u003E"; 
Aabpbengali.candrabindu_3  = "\u0040"; 
Aabpbengali.virama_1       = "\u0051";
Aabpbengali.virama_2       = "\u00A1";
Aabpbengali.virama_3       = "\u00AB";
Aabpbengali.virama_4       = "\u00BF";
Aabpbengali.virama_5       = "\u00C0";
Aabpbengali.virama_6       = "\u00C3";


//Vowels
Aabpbengali.vowel_A        = "\u0058";
Aabpbengali.vowel_AA       = "\u0059";
Aabpbengali.vowel_I        = "\u005A";
Aabpbengali.vowel_II       = "\u005B";
Aabpbengali.vowel_U        = "\u005C";
Aabpbengali.vowel_UU       = "\u005D";
Aabpbengali.vowel_R        = "\u005E";
//Aabpbengali.vowel_RR       = "\u005E";
Aabpbengali.vowel_E        = "\u005F";
Aabpbengali.vowel_AI       = "\u0060";
Aabpbengali.vowel_O        = "\u0061";
Aabpbengali.vowel_AU       = "\u0062";


//Consonants
Aabpbengali.consnt_KA      = "\u0063";
Aabpbengali.consnt_KHA     = "\u0064";
Aabpbengali.consnt_GA      = "\u0065";
Aabpbengali.consnt_GHA     = "\u0066";
Aabpbengali.consnt_NGA     = "\u0067";

Aabpbengali.consnt_CA      = "\u0068";
Aabpbengali.consnt_CHA     = "\u0069";
Aabpbengali.consnt_JA      = "\u006A";
Aabpbengali.consnt_JHA     = "\u006B";
Aabpbengali.consnt_NYA     = "\u006C";

Aabpbengali.consnt_TTA     = "\u006D";
Aabpbengali.consnt_TTHA    = "\u006E";
Aabpbengali.consnt_DDA     = "\u006F";
Aabpbengali.consnt_DDHA    = "\u0070";
Aabpbengali.consnt_NNA     = "\u0071";

Aabpbengali.consnt_TA      = "\u0072";
Aabpbengali.consnt_THA     = "\u0073";
Aabpbengali.consnt_DA      = "\u0074";
Aabpbengali.consnt_DHA     = "\u0075";
Aabpbengali.consnt_NA      = "\u0076";

Aabpbengali.consnt_PA      = "\u0077";
Aabpbengali.consnt_PHA_1   = "\u0078";
Aabpbengali.consnt_PHA_2   = "\u2078";
Aabpbengali.consnt_BA      = "\u0079";
Aabpbengali.consnt_BHA     = "\u007A";
Aabpbengali.consnt_MA_1    = "\u007B";
Aabpbengali.consnt_MA_2    = "\u207B";


Aabpbengali.consnt_YA      = "\u007C";
Aabpbengali.consnt_RA      = "\u007D";
Aabpbengali.consnt_LA_1    = "\u007E";
Aabpbengali.consnt_LA_2    = "\u007E";
Aabpbengali.consnt_VA      = "\u007F";
Aabpbengali.consnt_SHA     = "\u00C5";
Aabpbengali.consnt_SSA     = "\u00C7";
Aabpbengali.consnt_SA      = "\u00C9";
Aabpbengali.consnt_HA      = "\u00D1";

Aabpbengali.consnt_KHANDA_TA     = "\u00E0";

Aabpbengali.consnt_RRA     = "\u00D6";
Aabpbengali.consnt_RHA     = "\u00E1";
Aabpbengali.consnt_YYA     = "\u00DC";



//Gunintamulu
Aabpbengali.vowelsn_AA     = "\u0053";
Aabpbengali.vowelsn_I_1    = "\u0041";
Aabpbengali.vowelsn_I_2    = "\u0042";
Aabpbengali.vowelsn_I_3    = "\u0043";
Aabpbengali.vowelsn_I_4    = "\u0044";
Aabpbengali.vowelsn_I_candrabindu_1   = "\u0045";
Aabpbengali.vowelsn_R_II_1 = "\u0046";
Aabpbengali.vowelsn_R_II_2 = "\u0047";

Aabpbengali.vowelsn_II_1   = "\u0048";
Aabpbengali.vowelsn_II_2   = "\u0049";
Aabpbengali.vowelsn_U_1    = "\u004A";
Aabpbengali.vowelsn_I_candrabindu_2   = "\u00B1";
Aabpbengali.vowelsn_I_candrabindu_3   = "\u00C6";
Aabpbengali.vowelsn_U_2    = "\u00C1";
Aabpbengali.vowelsn_U_3    = "\u00C2";
Aabpbengali.vowelsn_U_4    = "\u00CC";
Aabpbengali.vowelsn_U_5    = "\u00CD";
Aabpbengali.vowelsn_I_candrabindu_4   = "\u00D8";
Aabpbengali.vowelsn_U_6    = "\u00DA";
Aabpbengali.vowelsn_UU_1   = "\u004C";
Aabpbengali.vowelsn_UU_2   = "\u00CA";
Aabpbengali.vowelsn_UU_3   = "\u00CB";
Aabpbengali.vowelsn_UU_4   = "\u00CE";
Aabpbengali.vowelsn_UU_5   = "\u00D3";
Aabpbengali.vowelsn_UU_6   = "\u00DB";
Aabpbengali.vowelsn_UU_7   = "\u004C";
Aabpbengali.vowelsn_R_1    = "\u00BF";
Aabpbengali.vowelsn_R_2    = "\u00C8";
Aabpbengali.vowelsn_R_3    = "\u00CF";
Aabpbengali.vowelsn_R_4    = "\u00D2";
Aabpbengali.vowelsn_R_5    = "\u00D4";
Aabpbengali.vowelsn_R_6    = "\u00D9";
//Aabpbengali.vowelsn_RR     = "\u00A6";
Aabpbengali.vowelsn_E_1    = "\u004D";
Aabpbengali.vowelsn_E_2    = "\u0050";
Aabpbengali.vowelsn_AI_1   = "\u004B";
Aabpbengali.vowelsn_AI_2   = "\u004E";

Aabpbengali.vowelsn_AULEN_1   = "\u0052";
Aabpbengali.vowelsn_AULEN_2   = "\u0054";
Aabpbengali.vowelsn_AULEN_candrabindu_1   = "\u0055";
Aabpbengali.vowelsn_AULEN_candrabindu_2   = "\u0056";
Aabpbengali.vowelsn_AULEN_candrabindu_3   = "\u00EF";

//Conjuncts
Aabpbengali.conjct_NN_NN   = "\u00A3";
Aabpbengali.conjct_TT      = "\u00A7";
Aabpbengali.conjct_KK      = "\u00E3";
//Aabpbengali.conjct_KV      = "\u00B9";
Aabpbengali.conjct_KT      = "\u00E5";
Aabpbengali.conjct_KR      = "\u00E7";
Aabpbengali.conjct_KL      = "\u00E8";
Aabpbengali.conjct_GR      = "\u00E9";
Aabpbengali.conjct_KSH     = "\u00EA";

Aabpbengali.conjct_GM      = "\u00EC";
Aabpbengali.conjct_GDH     = "\u00ED";
Aabpbengali.conjct_GN      = "\u00EE";
Aabpbengali.conjct_GL      = "\u00FA";


//Aabpbengali.conjct_JNY     = "\u006B";

Aabpbengali.conjct_NGG     = "\u00F2";
Aabpbengali.conjct_NGK     = "\u00F3";
//Aabpbengali.conjct_NGGH    = "\u201D";
//Aabpbengali.conjct_NGKSH   = "\u00AC";
//Aabpbengali.conjct_NGM     = "\u00B6";
Aabpbengali.conjct_CC      = "\u00F4";
Aabpbengali.conjct_JJ      = "\u00F5";
Aabpbengali.conjct_CCH     = "\u00F6";
Aabpbengali.conjct_NNTT    = "\u00FC";
//Aabpbengali.conjct_TTTT    = "\u00C5";
//Aabpbengali.conjct_TT_TTH  = "\u00C6";
//Aabpbengali.conjct_TTHTTH  = "\u00C7";
Aabpbengali.conjct_DDDD    = "\u00FB";
//Aabpbengali.conjct_DD_DDH  = "\u2013";
//Aabpbengali.conjct_DDHDDH  = "\u00C9";
Aabpbengali.conjct_NNDD    = "\u00A2";
//Aabpbengali.conjct_TT      = "\u00CE\u006D";
Aabpbengali.conjct_TM      = "\u00DF";
Aabpbengali.conjct_TR      = "\u00AE";

Aabpbengali.conjct_DM      = "\u00F9";

Aabpbengali.conjct_SHR     = "\u00B5";

Aabpbengali.vattu_YA       = "\u00A9";

//Devanagari Digits
Aabpbengali.digit_ZERO     = "\u0030";
Aabpbengali.digit_ONE      = "\u0031";
Aabpbengali.digit_TWO      = "\u0032";
Aabpbengali.digit_THREE    = "\u0033";
Aabpbengali.digit_FOUR     = "\u0034";
Aabpbengali.digit_FIVE     = "\u0035";
Aabpbengali.digit_SIX      = "\u0036";
Aabpbengali.digit_SEVEN    = "\u0037";
Aabpbengali.digit_EIGHT    = "\u0038";
Aabpbengali.digit_NINE     = "\u0039";

////Does not match ASCII
Aabpbengali.misc_DANDA       = "\u00A5";

Aabpbengali.misc_UNKNOWN_1 = "\u0024";
Aabpbengali.misc_UNKNOWN_2 = "\u003E";
Aabpbengali.misc_UNKNOWN_3 = "\u00EB";
Aabpbengali.misc_UNKNOWN_4 = "\u00FE";


//end

Aabpbengali.toPadma = new Object();

Aabpbengali.toPadma[Aabpbengali.candrabindu_1] = Padma.candrabindu;
Aabpbengali.toPadma[Aabpbengali.candrabindu_2] = Padma.candrabindu;
Aabpbengali.toPadma[Aabpbengali.candrabindu_3] = Padma.candrabindu;
Aabpbengali.toPadma[Aabpbengali.virama_1]      = Padma.syllbreak;
Aabpbengali.toPadma[Aabpbengali.virama_2]      = Padma.syllbreak;
Aabpbengali.toPadma[Aabpbengali.virama_3]      = Padma.syllbreak;
Aabpbengali.toPadma[Aabpbengali.virama_4]      = Padma.syllbreak;
Aabpbengali.toPadma[Aabpbengali.virama_5]      = Padma.syllbreak;
Aabpbengali.toPadma[Aabpbengali.virama_6]      = Padma.syllbreak;


Aabpbengali.toPadma[Aabpbengali.vowel_A]  = Padma.vowel_A;
Aabpbengali.toPadma[Aabpbengali.vowel_AA] = Padma.vowel_AA;
Aabpbengali.toPadma[Aabpbengali.vowel_I]  = Padma.vowel_I;
Aabpbengali.toPadma[Aabpbengali.vowel_II] = Padma.vowel_II;
Aabpbengali.toPadma[Aabpbengali.vowel_U]  = Padma.vowel_U;
Aabpbengali.toPadma[Aabpbengali.vowel_UU] = Padma.vowel_UU;
Aabpbengali.toPadma[Aabpbengali.vowel_R]  = Padma.vowel_R;
//Aabpbengali.toPadma[Aabpbengali.vowel_RR] = Padma.vowel_RR;
Aabpbengali.toPadma[Aabpbengali.vowel_E] = Padma.vowel_E;
Aabpbengali.toPadma[Aabpbengali.vowel_AI] = Padma.vowel_AI;
Aabpbengali.toPadma[Aabpbengali.vowel_O]  = Padma.vowel_O;
Aabpbengali.toPadma[Aabpbengali.vowel_AU] = Padma.vowel_AU;

Aabpbengali.toPadma[Aabpbengali.consnt_KA]  = Padma.consnt_KA;
Aabpbengali.toPadma[Aabpbengali.consnt_KHA] = Padma.consnt_KHA;
Aabpbengali.toPadma[Aabpbengali.consnt_GA]  = Padma.consnt_GA;
Aabpbengali.toPadma[Aabpbengali.consnt_GHA] = Padma.consnt_GHA;
Aabpbengali.toPadma[Aabpbengali.consnt_NGA] = Padma.consnt_NGA;

Aabpbengali.toPadma[Aabpbengali.consnt_CA]  = Padma.consnt_CA;
Aabpbengali.toPadma[Aabpbengali.consnt_CHA] = Padma.consnt_CHA;
Aabpbengali.toPadma[Aabpbengali.consnt_JA]  = Padma.consnt_JA;
Aabpbengali.toPadma[Aabpbengali.consnt_JHA] = Padma.consnt_JHA;
//Aabpbengali.toPadma[Aabpbengali.consnt_NYA] = Padma.consnt_NYA;

Aabpbengali.toPadma[Aabpbengali.consnt_TTA] = Padma.consnt_TTA;
Aabpbengali.toPadma[Aabpbengali.consnt_TTHA] = Padma.consnt_TTHA;
Aabpbengali.toPadma[Aabpbengali.consnt_DDA] = Padma.consnt_DDA;
Aabpbengali.toPadma[Aabpbengali.consnt_DDHA] = Padma.consnt_DDHA;
Aabpbengali.toPadma[Aabpbengali.consnt_NNA] = Padma.consnt_NNA;

Aabpbengali.toPadma[Aabpbengali.consnt_TA]  = Padma.consnt_TA;
Aabpbengali.toPadma[Aabpbengali.consnt_THA] = Padma.consnt_THA;
Aabpbengali.toPadma[Aabpbengali.consnt_DA]  = Padma.consnt_DA;
Aabpbengali.toPadma[Aabpbengali.consnt_DHA] = Padma.consnt_DHA;
Aabpbengali.toPadma[Aabpbengali.consnt_NA]  = Padma.consnt_NA;

Aabpbengali.toPadma[Aabpbengali.consnt_PA]   = Padma.consnt_PA;
Aabpbengali.toPadma[Aabpbengali.consnt_PHA_1]= Padma.consnt_PHA;
Aabpbengali.toPadma[Aabpbengali.consnt_PHA_2]= Padma.consnt_PHA;
Aabpbengali.toPadma[Aabpbengali.consnt_BA]   = Padma.consnt_BA;
Aabpbengali.toPadma[Aabpbengali.consnt_BHA]  = Padma.consnt_BHA;
Aabpbengali.toPadma[Aabpbengali.consnt_MA_1] = Padma.consnt_MA;
Aabpbengali.toPadma[Aabpbengali.consnt_MA_2] = Padma.consnt_MA;

Aabpbengali.toPadma[Aabpbengali.consnt_YA]   = Padma.consnt_YA;
Aabpbengali.toPadma[Aabpbengali.consnt_RA]   = Padma.consnt_RA;
Aabpbengali.toPadma[Aabpbengali.consnt_LA_1] = Padma.consnt_LA;
Aabpbengali.toPadma[Aabpbengali.consnt_LA_2] = Padma.consnt_LA;
Aabpbengali.toPadma[Aabpbengali.consnt_VA]   = Padma.consnt_VA;
Aabpbengali.toPadma[Aabpbengali.consnt_SHA]  = Padma.consnt_SHA;
Aabpbengali.toPadma[Aabpbengali.consnt_SSA]  = Padma.consnt_SSA;
Aabpbengali.toPadma[Aabpbengali.consnt_SA]   = Padma.consnt_SA;
Aabpbengali.toPadma[Aabpbengali.consnt_HA] = Padma.consnt_HA;
Aabpbengali.toPadma[Aabpbengali.consnt_RRA]  = Padma.consnt_RRA;
Aabpbengali.toPadma[Aabpbengali.consnt_RHA]  = Padma.consnt_RHA;
Aabpbengali.toPadma[Aabpbengali.consnt_YYA]  = Padma.consnt_YYA;
Aabpbengali.toPadma[Aabpbengali.consnt_KHANDA_TA]  = Padma.consnt_KHANDA_TA;


//Gunintamulu
Aabpbengali.toPadma[Aabpbengali.vowelsn_AA]   = Padma.vowelsn_AA;
Aabpbengali.toPadma[Aabpbengali.vowelsn_I_1]  = Padma.vowelsn_I;
Aabpbengali.toPadma[Aabpbengali.vowelsn_I_2]  = Padma.vowelsn_I;
Aabpbengali.toPadma[Aabpbengali.vowelsn_I_3]  = Padma.vowelsn_I;
Aabpbengali.toPadma[Aabpbengali.vowelsn_I_4]  = Padma.vowelsn_I;
Aabpbengali.toPadma[Aabpbengali.vowelsn_I_candrabindu_1]   = Padma.vowelsn_I + Padma.candrabindu;
Aabpbengali.toPadma[Aabpbengali.vowelsn_I_candrabindu_2]   = Padma.vowelsn_I + Padma.candrabindu;
Aabpbengali.toPadma[Aabpbengali.vowelsn_I_candrabindu_3]   = Padma.vowelsn_I + Padma.candrabindu;
Aabpbengali.toPadma[Aabpbengali.vowelsn_I_candrabindu_4]   = Padma.vowelsn_I + Padma.candrabindu;
Aabpbengali.toPadma[Aabpbengali.vowelsn_R_II_1] = Padma.halffm_RA + Padma.vowelsn_II;
Aabpbengali.toPadma[Aabpbengali.vowelsn_R_II_2] = Padma.halffm_RA + Padma.vowelsn_II;
Aabpbengali.toPadma[Aabpbengali.vowelsn_II_1] = Padma.vowelsn_II;
Aabpbengali.toPadma[Aabpbengali.vowelsn_II_2] = Padma.vowelsn_II;
Aabpbengali.toPadma[Aabpbengali.vowelsn_U_1]  = Padma.vowelsn_U;
Aabpbengali.toPadma[Aabpbengali.vowelsn_U_2]  = Padma.vowelsn_U;
Aabpbengali.toPadma[Aabpbengali.vowelsn_U_3]  = Padma.vowelsn_U;
Aabpbengali.toPadma[Aabpbengali.vowelsn_U_4]  = Padma.vowelsn_U;
Aabpbengali.toPadma[Aabpbengali.vowelsn_U_5]  = Padma.vowelsn_U;
Aabpbengali.toPadma[Aabpbengali.vowelsn_U_6]  = Padma.vowelsn_U;
Aabpbengali.toPadma[Aabpbengali.vowelsn_UU_1] = Padma.vowelsn_UU;
Aabpbengali.toPadma[Aabpbengali.vowelsn_UU_2] = Padma.vowelsn_UU;
Aabpbengali.toPadma[Aabpbengali.vowelsn_UU_3] = Padma.vowelsn_UU;
Aabpbengali.toPadma[Aabpbengali.vowelsn_UU_4] = Padma.vowelsn_UU;
Aabpbengali.toPadma[Aabpbengali.vowelsn_UU_5] = Padma.vowelsn_UU;
Aabpbengali.toPadma[Aabpbengali.vowelsn_UU_6] = Padma.vowelsn_UU;
Aabpbengali.toPadma[Aabpbengali.vowelsn_UU_7] = Padma.vowelsn_UU;
Aabpbengali.toPadma[Aabpbengali.vowelsn_R_1]  = Padma.vowelsn_R;
Aabpbengali.toPadma[Aabpbengali.vowelsn_R_2]  = Padma.vowelsn_R;
Aabpbengali.toPadma[Aabpbengali.vowelsn_R_3]  = Padma.vowelsn_R;
Aabpbengali.toPadma[Aabpbengali.vowelsn_R_4]  = Padma.vowelsn_R;
Aabpbengali.toPadma[Aabpbengali.vowelsn_R_5]  = Padma.vowelsn_R;
Aabpbengali.toPadma[Aabpbengali.vowelsn_R_6]  = Padma.vowelsn_R;
//Aabpbengali.toPadma[Aabpbengali.vowelsn_RR]   = Padma.vowelsn_RR;
Aabpbengali.toPadma[Aabpbengali.vowelsn_E_1] = Padma.vowelsn_E;
Aabpbengali.toPadma[Aabpbengali.vowelsn_E_2] = Padma.vowelsn_E;
//Aabpbengali.toPadma[Aabpbengali.vowelsn_AI]   = Padma.vowelsn_AI;
Aabpbengali.toPadma[Aabpbengali.vowelsn_AI_1]   = Padma.vowelsn_AI;
Aabpbengali.toPadma[Aabpbengali.vowelsn_AI_2]   = Padma.vowelsn_AI;
//Aabpbengali.toPadma[Aabpbengali.vowelsn_AU]   = Padma.vowelsn_AU;
Aabpbengali.toPadma[Aabpbengali.vowelsn_AULEN_1]   = Padma.vowelsn_AULEN;
Aabpbengali.toPadma[Aabpbengali.vowelsn_AULEN_2]   = Padma.vowelsn_AULEN;
Aabpbengali.toPadma[Aabpbengali.vowelsn_AULEN_candrabindu_1]   = Padma.vowelsn_AULEN + Padma.candrabindu;
Aabpbengali.toPadma[Aabpbengali.vowelsn_AULEN_candrabindu_2]   = Padma.vowelsn_AULEN + Padma.candrabindu;
Aabpbengali.toPadma[Aabpbengali.vowelsn_AULEN_candrabindu_3]   = Padma.vowelsn_AULEN + Padma.candrabindu;

// Halffm
Aabpbengali.toPadma[Aabpbengali.halffm_RA_1]   = Padma.halffm_RA;
Aabpbengali.toPadma[Aabpbengali.halffm_RA_2]   = Padma.halffm_RA;
Aabpbengali.toPadma[Aabpbengali.halffm_RA_3]   = Padma.halffm_RA;

//Conjuncts
Aabpbengali.toPadma[Aabpbengali.conjct_NN_NN]  = Padma.consnt_NNA + Padma.vattu_NNA;
Aabpbengali.toPadma[Aabpbengali.conjct_KK]     = Padma.consnt_KA + Padma.vattu_KA;
Aabpbengali.toPadma[Aabpbengali.conjct_KT]     = Padma.consnt_KA + Padma.vattu_TA;
Aabpbengali.toPadma[Aabpbengali.conjct_KR]     = Padma.consnt_KA + Padma.vattu_RA;
Aabpbengali.toPadma[Aabpbengali.conjct_KL]     = Padma.consnt_KA + Padma.vattu_LA;
Aabpbengali.toPadma[Aabpbengali.conjct_GR]     = Padma.consnt_GA + Padma.vattu_RA;
Aabpbengali.toPadma[Aabpbengali.conjct_KSH]    = Padma.consnt_KA + Padma.vattu_SSA;
//Aabpbengali.toPadma[Aabpbengali.conjct_JNY]  = Padma.consnt_JA + Padma.vattu_NYA;

Aabpbengali.toPadma[Aabpbengali.conjct_GM]     = Padma.consnt_GA + Padma.vattu_MA;
Aabpbengali.toPadma[Aabpbengali.conjct_GDH]    = Padma.consnt_GA + Padma.vattu_DHA;
Aabpbengali.toPadma[Aabpbengali.conjct_GN]     = Padma.consnt_GA + Padma.vattu_NA;
Aabpbengali.toPadma[Aabpbengali.conjct_GL]     = Padma.consnt_GA + Padma.vattu_LA;
Aabpbengali.toPadma[Aabpbengali.conjct_NGK]    = Padma.consnt_NGA + Padma.vattu_KA;
Aabpbengali.toPadma[Aabpbengali.conjct_NGG]    = Padma.consnt_NGA + Padma.vattu_GA;
Aabpbengali.toPadma[Aabpbengali.conjct_CC]     = Padma.consnt_CA + Padma.vattu_CA;
Aabpbengali.toPadma[Aabpbengali.conjct_CCH]    = Padma.consnt_CA + Padma.vattu_CHA;
Aabpbengali.toPadma[Aabpbengali.conjct_JJ]     = Padma.consnt_JA + Padma.vattu_JA;
Aabpbengali.toPadma[Aabpbengali.conjct_NNTT]   = Padma.consnt_NNA + Padma.vattu_TTA;
Aabpbengali.toPadma[Aabpbengali.conjct_DDDD]   = Padma.consnt_DDA + Padma.vattu_DDA;
Aabpbengali.toPadma[Aabpbengali.conjct_NNDD]   = Padma.consnt_NNA + Padma.vattu_DDA;
Aabpbengali.toPadma[Aabpbengali.conjct_TT]     = Padma.consnt_TA + Padma.vattu_TA;
Aabpbengali.toPadma[Aabpbengali.conjct_TM]     = Padma.consnt_TA + Padma.vattu_MA;
Aabpbengali.toPadma[Aabpbengali.conjct_TR]     = Padma.consnt_TA + Padma.vattu_RA;
Aabpbengali.toPadma[Aabpbengali.conjct_DM]     = Padma.consnt_DA + Padma.vattu_MA;
Aabpbengali.toPadma[Aabpbengali.conjct_SHR]    = Padma.consnt_SHA + Padma.vattu_RA;




Aabpbengali.toPadma[Aabpbengali.vattu_YA]      = Padma.vattu_YA;

//Digits
Aabpbengali.toPadma[Aabpbengali.digit_ZERO]    = Padma.digit_ZERO;
Aabpbengali.toPadma[Aabpbengali.digit_ONE]     = Padma.digit_ONE;
Aabpbengali.toPadma[Aabpbengali.digit_TWO]     = Padma.digit_TWO;
Aabpbengali.toPadma[Aabpbengali.digit_THREE]   = Padma.digit_THREE;
Aabpbengali.toPadma[Aabpbengali.digit_FOUR]    = Padma.digit_FOUR;
Aabpbengali.toPadma[Aabpbengali.digit_FIVE]    = Padma.digit_FIVE;
Aabpbengali.toPadma[Aabpbengali.digit_SIX]     = Padma.digit_SIX;
Aabpbengali.toPadma[Aabpbengali.digit_SEVEN]   = Padma.digit_SEVEN;
Aabpbengali.toPadma[Aabpbengali.digit_EIGHT]   = Padma.digit_EIGHT;
Aabpbengali.toPadma[Aabpbengali.digit_NINE]    = Padma.digit_NINE;

Aabpbengali.toPadma[Aabpbengali.misc_DANDA]     = Padma.danda;

Aabpbengali.prefixList = new Object();

Aabpbengali.prefixList[Aabpbengali.vowelsn_I_1]  = true;
Aabpbengali.prefixList[Aabpbengali.vowelsn_I_2]  = true;
Aabpbengali.prefixList[Aabpbengali.vowelsn_I_3]  = true;
Aabpbengali.prefixList[Aabpbengali.vowelsn_I_4]  = true;
Aabpbengali.prefixList[Aabpbengali.vowelsn_I_candrabindu_1]  = true;
Aabpbengali.prefixList[Aabpbengali.vowelsn_I_candrabindu_2]  = true;
Aabpbengali.prefixList[Aabpbengali.vowelsn_I_candrabindu_3]  = true;
Aabpbengali.prefixList[Aabpbengali.vowelsn_I_candrabindu_4]  = true;
//Aabpbengali.prefixList[Aabpbengali.vowelsn_R_II_1] = true;
//Aabpbengali.prefixList[Aabpbengali.vowelsn_R_II_2] = true;
Aabpbengali.prefixList[Aabpbengali.vowelsn_E_1] = true;
Aabpbengali.prefixList[Aabpbengali.vowelsn_E_2] = true;
Aabpbengali.prefixList[Aabpbengali.vowelsn_AI_1] = true;
Aabpbengali.prefixList[Aabpbengali.vowelsn_AI_2] = true;


Aabpbengali.suffixList = new Object();

Aabpbengali.suffixList[Aabpbengali.halffm_RA_1]  = true;
Aabpbengali.suffixList[Aabpbengali.halffm_RA_2]  = true;
Aabpbengali.suffixList[Aabpbengali.halffm_RA_3]  = true;



Aabpbengali.redundantList = new Object();
Aabpbengali.redundantList[Aabpbengali.misc_UNKNOWN_1] = true;
Aabpbengali.redundantList[Aabpbengali.misc_UNKNOWN_2] = true;
Aabpbengali.redundantList[Aabpbengali.misc_UNKNOWN_3] = true;
Aabpbengali.redundantList[Aabpbengali.misc_UNKNOWN_4] = true;

Aabpbengali.overloadList = new Object();

