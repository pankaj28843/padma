// $Id: AAADurga.js,v 1.2 2011/10/27 15:34:20 vnagarjuna Exp $ -->

//Copyright 2008 Nagarjuna Venna <vnagarjuna@yahoo.com>
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

function AAADurga()
{
}

//The interface every dynamic font encoding should implement
AAADurga.maxLookupLen = 3;
AAADurga.fontFace     = "AAADurga";
AAADurga.displayName  = "AAADurga";
AAADurga.script       = Padma.script_BENGALI;
AAADurga.hasSuffixes  = true;

AAADurga.lookup = function (str) 
{
    return AAADurga.toPadma[str];
}

AAADurga.isPrefixSymbol = function (str)
{
    return AAADurga.prefixList[str] != null;
}

AAADurga.isSuffixSymbol = function (str)
{
    return AAADurga.suffixList[str] != null;
}

AAADurga.isOverloaded = function (str)
{
    return AAADurga.overloadList[str] != null;
}

AAADurga.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if ((sign1 == Padma.vowelsn_E && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_E))
        return Padma.vowelsn_OO;
    if ((sign1 == Padma.vowelsn_AULEN && sign2 == Padma.vowelsn_E) ||
        (sign1 == Padma.vowelsn_E && sign2 == Padma.vowelsn_AULEN))
        return Padma.vowelsn_AU;
    return sign1 + sign2;    
}

AAADurga.isRedundant = function (str)
{
    return AAADurga.redundantList[str] != null;
}


/* Map from AAADurga   starts here */

AAADurga.halffm_RA_1    = "\u0027";
AAADurga.halffm_RA_2    = "\u00D5";
AAADurga.halffm_RA_3    = "\u00F1";
AAADurga.candrabindu_1  = "\u003C"; 
AAADurga.candrabindu_2  = "\u003E"; 
AAADurga.candrabindu_3  = "\u0040"; 
AAADurga.virama_1       = "\u0051";
AAADurga.virama_2       = "\u00A1";
AAADurga.virama_3       = "\u00AB";
AAADurga.virama_4       = "\u00BF";
AAADurga.virama_5       = "\u00C0";
AAADurga.virama_6       = "\u00C3";


//Vowels
AAADurga.vowel_A        = "\u0057";
AAADurga.vowel_AA       = "\u0058";
AAADurga.vowel_I        = "\u0059";
AAADurga.vowel_II       = "\u005A";
AAADurga.vowel_U        = "\u005B";
AAADurga.vowel_UU       = "\u005C";
AAADurga.vowel_R        = "\u005D";
//AAADurga.vowel_RR       = "\u005E";
AAADurga.vowel_E        = "\u005E";
AAADurga.vowel_AI       = "\u005F";
AAADurga.vowel_O        = "\u0060";
AAADurga.vowel_AU       = "\u0061";


//Consonants
AAADurga.consnt_KA      = "\u0062";
AAADurga.consnt_KHA     = "\u0063";
AAADurga.consnt_GA      = "\u0064";
AAADurga.consnt_GHA     = "\u0065";
AAADurga.consnt_NGA     = "\u0066";

AAADurga.consnt_CA      = "\u0067";
AAADurga.consnt_CHA     = "\u0068";
AAADurga.consnt_JA      = "\u0069";
AAADurga.consnt_JHA     = "\u006A";
AAADurga.consnt_NYA     = "\u006B";

AAADurga.consnt_TTA     = "\u006C";
AAADurga.consnt_TTHA    = "\u006D";
AAADurga.consnt_DDA     = "\u006E";
AAADurga.consnt_DDHA    = "\u006F";
AAADurga.consnt_NNA     = "\u0070";

AAADurga.consnt_TA      = "\u0071";
AAADurga.consnt_THA     = "\u0072";
AAADurga.consnt_DA      = "\u0073";
AAADurga.consnt_DHA     = "\u0074";
AAADurga.consnt_NA      = "\u0075";

AAADurga.consnt_PA      = "\u0076";
AAADurga.consnt_PHA     = "\u0077";
AAADurga.consnt_BA      = "\u0078";
AAADurga.consnt_BHA     = "\u0079";
AAADurga.consnt_MA      = "\u007A";


AAADurga.consnt_YA      = "\u007B";
AAADurga.consnt_RA      = "\u007C";
AAADurga.consnt_LA      = "\u007D";
AAADurga.consnt_SHA     = "\u007E";
AAADurga.consnt_SSA     = "\u00A6";
AAADurga.consnt_SA      = "\u00A8";
AAADurga.consnt_HA      = "\u00AA";

AAADurga.consnt_KHANDA_TA     = "\u00E0";

AAADurga.consnt_RRA     = "\u00AC";
AAADurga.consnt_RHA     = "\u00AF";
AAADurga.consnt_YYA     = "\u00AE";



//Gunintamulu
AAADurga.vowelsn_AA     = "\u0053";

AAADurga.vowelsn_I_1    = "\u0041";
AAADurga.vowelsn_I_2    = "\u0042";
AAADurga.vowelsn_I_3    = "\u0043";
AAADurga.vowelsn_I_4    = "\u0044";
AAADurga.vowelsn_I_candrabindu_1   = "\u0045";
AAADurga.vowelsn_I_candrabindu_2   = "\u00B1";
AAADurga.vowelsn_I_candrabindu_3   = "\u00C6";
AAADurga.vowelsn_I_candrabindu_4   = "\u00D8";

AAADurga.vowelsn_R_II_1 = "\u0046";
AAADurga.vowelsn_R_II_2 = "\u0047";
AAADurga.vowelsn_II_1   = "\u0048";
AAADurga.vowelsn_II_2   = "\u0049";
AAADurga.vowelsn_II_candrabindu_1   = "\u00E2";
AAADurga.vowelsn_II_candrabindu_2   = "\u00E4";

AAADurga.vowelsn_U_1    = "\u004A";
AAADurga.vowelsn_U_2    = "\u00C1";
AAADurga.vowelsn_U_3    = "\u00C2";
AAADurga.vowelsn_U_4    = "\u00CC";
AAADurga.vowelsn_U_5    = "\u00CD";
AAADurga.vowelsn_U_6    = "\u00DA";

AAADurga.vowelsn_UU_1   = "\u004C";
AAADurga.vowelsn_UU_2   = "\u00CA";
AAADurga.vowelsn_UU_3   = "\u00CB";
AAADurga.vowelsn_UU_4   = "\u00CE";
AAADurga.vowelsn_UU_5   = "\u00D3";
AAADurga.vowelsn_UU_6   = "\u00DB";

AAADurga.vowelsn_R_1    = "\u00BF";
AAADurga.vowelsn_R_2    = "\u00C8";
AAADurga.vowelsn_R_3    = "\u00CF";
AAADurga.vowelsn_R_4    = "\u00D2";
AAADurga.vowelsn_R_5    = "\u00D4";
AAADurga.vowelsn_R_6    = "\u00D9";

AAADurga.vowelsn_E_1   = "\u004D";
AAADurga.vowelsn_E_2   = "\u0050";

AAADurga.vowelsn_AI_1   = "\u004B";
AAADurga.vowelsn_AI_2   = "\u004E";

AAADurga.vowelsn_AULEN_1   = "\u0052";
AAADurga.vowelsn_AULEN_2   = "\u0054";
AAADurga.vowelsn_AULEN_candrabindu_1   = "\u0055";
AAADurga.vowelsn_AULEN_candrabindu_2   = "\u0056";
AAADurga.vowelsn_AULEN_candrabindu_3   = "\u00EF";

//Conjuncts
AAADurga.conjct_NNDD    = "\u00A2";
AAADurga.conjct_NN_NN   = "\u00A3";
AAADurga.conjct_TT      = "\u00A7";

AAADurga.conjct_NTR     = "\u00B0";
AAADurga.conjct_TM_1    = "\u00B2";
AAADurga.conjct_NNTT_1  = "\u00B3";
AAADurga.conjct_DM_1    = "\u00B4";
AAADurga.conjct_SHR     = "\u00B5";
AAADurga.conjct_NDH     = "\u00B6";
AAADurga.conjct_D_DB    = "\u00B7";
AAADurga.conjct_D_DH    = "\u00B8";
AAADurga.conjct_PP      = "\u00B9";
AAADurga.conjct_DB      = "\u00BA";
AAADurga.conjct_DR      = "\u00BB";
AAADurga.conjct_PR      = "\u00BC";
AAADurga.conjct_PL      = "\u00BD";
AAADurga.conjct_DDR     = "\u00BE";
AAADurga.conjct_NN      = "\u00C5";
AAADurga.conjct_NM      = "\u00C7";
AAADurga.conjct_PTT     = "\u00C9";
AAADurga.conjct_PS      = "\u00D0";
AAADurga.conjct_ND      = "\u00D7";
AAADurga.conjct_NDR     = "\u00DC";
AAADurga.conjct_NDB     = "\u00DD";
AAADurga.conjct_DHB     = "\u00DE";
AAADurga.conjct_TM_2    = "\u00DF";
AAADurga.conjct_NDHR    = "\u00E1";
AAADurga.conjct_KK      = "\u00E3";
AAADurga.conjct_KT      = "\u00E5";
AAADurga.conjct_KR      = "\u00E7";
AAADurga.conjct_KL      = "\u00E8";
AAADurga.conjct_GR      = "\u00E9";
AAADurga.conjct_KSH     = "\u00EA";

AAADurga.conjct_GM      = "\u00EC";
AAADurga.conjct_GDH     = "\u00ED";
AAADurga.conjct_GN      = "\u00EE";
AAADurga.conjct_NTTR    = "\u00F0";

AAADurga.conjct_NGG     = "\u00F2";
AAADurga.conjct_NGK     = "\u00F3";
AAADurga.conjct_CC      = "\u00F4";
AAADurga.conjct_JJ      = "\u00F5";
AAADurga.conjct_CCH     = "\u00F6";
AAADurga.conjct_TR      = "\u00F7";
AAADurga.conjct_SHR_II  = "\u00F8";
AAADurga.conjct_DM_2    = "\u00F9";
AAADurga.conjct_GL      = "\u00FA";
AAADurga.conjct_DDDD    = "\u00FB";
AAADurga.conjct_NNTT_2  = "\u00FC";
AAADurga.conjct_NTH     = "\u00FD";


// YA-phala
AAADurga.vattu_YA       = "\u00A9";

//Devanagari Digits
AAADurga.digit_ZERO     = "\u0030";
AAADurga.digit_ONE      = "\u0031";
AAADurga.digit_TWO      = "\u0032";
AAADurga.digit_THREE    = "\u0033";
AAADurga.digit_FOUR     = "\u0034";
AAADurga.digit_FIVE     = "\u0035";
AAADurga.digit_SIX      = "\u0036";
AAADurga.digit_SEVEN    = "\u0037";
AAADurga.digit_EIGHT    = "\u0038";
AAADurga.digit_NINE     = "\u0039";

////Does not match ASCII
AAADurga.misc_DANDA       = "\u00A5";

AAADurga.misc_UNKNOWN_1 = "\u00C4";
AAADurga.misc_UNKNOWN_2 = "\u00E6";
AAADurga.misc_UNKNOWN_3 = "\u00FE";

//AAADurga.misc_UNKNOWN_3 = "\u00EB";



//end

AAADurga.toPadma = new Object();

AAADurga.toPadma[AAADurga.candrabindu_1] = Padma.candrabindu;
AAADurga.toPadma[AAADurga.candrabindu_2] = Padma.candrabindu;
AAADurga.toPadma[AAADurga.candrabindu_3] = Padma.candrabindu;
AAADurga.toPadma[AAADurga.virama_1]      = Padma.syllbreak;
AAADurga.toPadma[AAADurga.virama_2]      = Padma.syllbreak;
AAADurga.toPadma[AAADurga.virama_3]      = Padma.syllbreak;
AAADurga.toPadma[AAADurga.virama_4]      = Padma.syllbreak;
AAADurga.toPadma[AAADurga.virama_5]      = Padma.syllbreak;
AAADurga.toPadma[AAADurga.virama_6]      = Padma.syllbreak;


AAADurga.toPadma[AAADurga.vowel_A]  = Padma.vowel_A;
AAADurga.toPadma[AAADurga.vowel_AA] = Padma.vowel_AA;
AAADurga.toPadma[AAADurga.vowel_I]  = Padma.vowel_I;
AAADurga.toPadma[AAADurga.vowel_II] = Padma.vowel_II;
AAADurga.toPadma[AAADurga.vowel_U]  = Padma.vowel_U;
AAADurga.toPadma[AAADurga.vowel_UU] = Padma.vowel_UU;
AAADurga.toPadma[AAADurga.vowel_R]  = Padma.vowel_R;
//AAADurga.toPadma[AAADurga.vowel_RR] = Padma.vowel_RR;
AAADurga.toPadma[AAADurga.vowel_E] = Padma.vowel_E;
AAADurga.toPadma[AAADurga.vowel_AI] = Padma.vowel_AI;
AAADurga.toPadma[AAADurga.vowel_O]  = Padma.vowel_O;
AAADurga.toPadma[AAADurga.vowel_AU] = Padma.vowel_AU;

AAADurga.toPadma[AAADurga.consnt_KA]  = Padma.consnt_KA;
AAADurga.toPadma[AAADurga.consnt_KHA] = Padma.consnt_KHA;
AAADurga.toPadma[AAADurga.consnt_GA]  = Padma.consnt_GA;
AAADurga.toPadma[AAADurga.consnt_GHA] = Padma.consnt_GHA;
AAADurga.toPadma[AAADurga.consnt_NGA] = Padma.consnt_NGA;

AAADurga.toPadma[AAADurga.consnt_CA]  = Padma.consnt_CA;
AAADurga.toPadma[AAADurga.consnt_CHA] = Padma.consnt_CHA;
AAADurga.toPadma[AAADurga.consnt_JA]  = Padma.consnt_JA;
AAADurga.toPadma[AAADurga.consnt_JHA] = Padma.consnt_JHA;
//AAADurga.toPadma[AAADurga.consnt_NYA] = Padma.consnt_NYA;

AAADurga.toPadma[AAADurga.consnt_TTA] = Padma.consnt_TTA;
AAADurga.toPadma[AAADurga.consnt_TTHA] = Padma.consnt_TTHA;
AAADurga.toPadma[AAADurga.consnt_DDA] = Padma.consnt_DDA;
AAADurga.toPadma[AAADurga.consnt_DDHA] = Padma.consnt_DDHA;
AAADurga.toPadma[AAADurga.consnt_NNA] = Padma.consnt_NNA;

AAADurga.toPadma[AAADurga.consnt_TA]  = Padma.consnt_TA;
AAADurga.toPadma[AAADurga.consnt_THA] = Padma.consnt_THA;
AAADurga.toPadma[AAADurga.consnt_DA]  = Padma.consnt_DA;
AAADurga.toPadma[AAADurga.consnt_DHA] = Padma.consnt_DHA;
AAADurga.toPadma[AAADurga.consnt_NA]  = Padma.consnt_NA;

AAADurga.toPadma[AAADurga.consnt_PA]   = Padma.consnt_PA;
AAADurga.toPadma[AAADurga.consnt_PHA]  = Padma.consnt_PHA;
AAADurga.toPadma[AAADurga.consnt_BA]   = Padma.consnt_BA;
AAADurga.toPadma[AAADurga.consnt_BHA]  = Padma.consnt_BHA;
AAADurga.toPadma[AAADurga.consnt_MA]   = Padma.consnt_MA;

AAADurga.toPadma[AAADurga.consnt_YA]   = Padma.consnt_YA;
AAADurga.toPadma[AAADurga.consnt_RA]   = Padma.consnt_RA;
AAADurga.toPadma[AAADurga.consnt_LA]   = Padma.consnt_LA;
AAADurga.toPadma[AAADurga.consnt_SHA]  = Padma.consnt_SHA;
AAADurga.toPadma[AAADurga.consnt_SSA]  = Padma.consnt_SSA;
AAADurga.toPadma[AAADurga.consnt_SA]   = Padma.consnt_SA;
AAADurga.toPadma[AAADurga.consnt_HA] = Padma.consnt_HA;
AAADurga.toPadma[AAADurga.consnt_RRA]  = Padma.consnt_RRA;
AAADurga.toPadma[AAADurga.consnt_RHA]  = Padma.consnt_RHA;
AAADurga.toPadma[AAADurga.consnt_YYA]  = Padma.consnt_YYA;
AAADurga.toPadma[AAADurga.consnt_KHANDA_TA]  = Padma.consnt_KHANDA_TA;


//Gunintamulu
AAADurga.toPadma[AAADurga.vowelsn_AA]   = Padma.vowelsn_AA;
AAADurga.toPadma[AAADurga.vowelsn_I_1]  = Padma.vowelsn_I;
AAADurga.toPadma[AAADurga.vowelsn_I_2]  = Padma.vowelsn_I;
AAADurga.toPadma[AAADurga.vowelsn_I_3]  = Padma.vowelsn_I;
AAADurga.toPadma[AAADurga.vowelsn_I_4]  = Padma.vowelsn_I;
AAADurga.toPadma[AAADurga.vowelsn_I_candrabindu_1]   = Padma.vowelsn_I + Padma.candrabindu;
AAADurga.toPadma[AAADurga.vowelsn_I_candrabindu_2]   = Padma.vowelsn_I + Padma.candrabindu;
AAADurga.toPadma[AAADurga.vowelsn_I_candrabindu_3]   = Padma.vowelsn_I + Padma.candrabindu;
AAADurga.toPadma[AAADurga.vowelsn_I_candrabindu_4]   = Padma.vowelsn_I + Padma.candrabindu;
AAADurga.toPadma[AAADurga.vowelsn_R_II_1] = Padma.halffm_RA + Padma.vowelsn_II;
AAADurga.toPadma[AAADurga.vowelsn_R_II_2] = Padma.halffm_RA + Padma.vowelsn_II;
AAADurga.toPadma[AAADurga.vowelsn_II_1] = Padma.vowelsn_II;
AAADurga.toPadma[AAADurga.vowelsn_II_2] = Padma.vowelsn_II;
AAADurga.toPadma[AAADurga.vowelsn_U_1]  = Padma.vowelsn_U;
AAADurga.toPadma[AAADurga.vowelsn_U_2]  = Padma.vowelsn_U;
AAADurga.toPadma[AAADurga.vowelsn_U_3]  = Padma.vowelsn_U;
AAADurga.toPadma[AAADurga.vowelsn_U_4]  = Padma.vowelsn_U;
AAADurga.toPadma[AAADurga.vowelsn_U_5]  = Padma.vowelsn_U;
AAADurga.toPadma[AAADurga.vowelsn_U_6]  = Padma.vowelsn_U;
AAADurga.toPadma[AAADurga.vowelsn_UU_1] = Padma.vowelsn_UU;
AAADurga.toPadma[AAADurga.vowelsn_UU_2] = Padma.vowelsn_UU;
AAADurga.toPadma[AAADurga.vowelsn_UU_3] = Padma.vowelsn_UU;
AAADurga.toPadma[AAADurga.vowelsn_UU_4] = Padma.vowelsn_UU;
AAADurga.toPadma[AAADurga.vowelsn_UU_5] = Padma.vowelsn_UU;
AAADurga.toPadma[AAADurga.vowelsn_UU_6] = Padma.vowelsn_UU;
AAADurga.toPadma[AAADurga.vowelsn_R_1]  = Padma.vowelsn_R;
AAADurga.toPadma[AAADurga.vowelsn_R_2]  = Padma.vowelsn_R;
AAADurga.toPadma[AAADurga.vowelsn_R_3]  = Padma.vowelsn_R;
AAADurga.toPadma[AAADurga.vowelsn_R_4]  = Padma.vowelsn_R;
AAADurga.toPadma[AAADurga.vowelsn_R_5]  = Padma.vowelsn_R;
AAADurga.toPadma[AAADurga.vowelsn_R_6]  = Padma.vowelsn_R;
//AAADurga.toPadma[AAADurga.vowelsn_RR]   = Padma.vowelsn_RR;
AAADurga.toPadma[AAADurga.vowelsn_E_1] = Padma.vowelsn_E;
AAADurga.toPadma[AAADurga.vowelsn_E_2] = Padma.vowelsn_E;
//AAADurga.toPadma[AAADurga.vowelsn_AI]   = Padma.vowelsn_AI;
AAADurga.toPadma[AAADurga.vowelsn_AI_1]   = Padma.vowelsn_AI;
AAADurga.toPadma[AAADurga.vowelsn_AI_2]   = Padma.vowelsn_AI;
//AAADurga.toPadma[AAADurga.vowelsn_AU]   = Padma.vowelsn_AU;
AAADurga.toPadma[AAADurga.vowelsn_AULEN_1]   = Padma.vowelsn_AULEN;
AAADurga.toPadma[AAADurga.vowelsn_AULEN_2]   = Padma.vowelsn_AULEN;
AAADurga.toPadma[AAADurga.vowelsn_AULEN_candrabindu_1]   = Padma.vowelsn_AULEN + Padma.candrabindu;
AAADurga.toPadma[AAADurga.vowelsn_AULEN_candrabindu_2]   = Padma.vowelsn_AULEN + Padma.candrabindu;
AAADurga.toPadma[AAADurga.vowelsn_AULEN_candrabindu_3]   = Padma.vowelsn_AULEN + Padma.candrabindu;

// Halffm
AAADurga.toPadma[AAADurga.halffm_RA_1]   = Padma.halffm_RA;
AAADurga.toPadma[AAADurga.halffm_RA_2]   = Padma.halffm_RA;
AAADurga.toPadma[AAADurga.halffm_RA_3]   = Padma.halffm_RA;

//Conjuncts
AAADurga.toPadma[AAADurga.conjct_NN_NN]  = Padma.consnt_NNA + Padma.vattu_NNA;
AAADurga.toPadma[AAADurga.conjct_NTR]    = Padma.consnt_NA + Padma.vattu_TA + Padma.vattu_RA;
AAADurga.toPadma[AAADurga.conjct_KK]     = Padma.consnt_KA + Padma.vattu_KA;
AAADurga.toPadma[AAADurga.conjct_KT]     = Padma.consnt_KA + Padma.vattu_TA;
AAADurga.toPadma[AAADurga.conjct_KR]     = Padma.consnt_KA + Padma.vattu_RA;
AAADurga.toPadma[AAADurga.conjct_KL]     = Padma.consnt_KA + Padma.vattu_LA;
AAADurga.toPadma[AAADurga.conjct_GR]     = Padma.consnt_GA + Padma.vattu_RA;
AAADurga.toPadma[AAADurga.conjct_KSH]    = Padma.consnt_KA + Padma.vattu_SSA;
//AAADurga.toPadma[AAADurga.conjct_JNY]  = Padma.consnt_JA + Padma.vattu_NYA;

AAADurga.toPadma[AAADurga.conjct_GM]     = Padma.consnt_GA + Padma.vattu_MA;
AAADurga.toPadma[AAADurga.conjct_GDH]    = Padma.consnt_GA + Padma.vattu_DHA;
AAADurga.toPadma[AAADurga.conjct_GN]     = Padma.consnt_GA + Padma.vattu_NA;
AAADurga.toPadma[AAADurga.conjct_GL]     = Padma.consnt_GA + Padma.vattu_LA;
AAADurga.toPadma[AAADurga.conjct_NGK]    = Padma.consnt_NGA + Padma.vattu_KA;
AAADurga.toPadma[AAADurga.conjct_NGG]    = Padma.consnt_NGA + Padma.vattu_GA;
AAADurga.toPadma[AAADurga.conjct_CC]     = Padma.consnt_CA + Padma.vattu_CA;
AAADurga.toPadma[AAADurga.conjct_CCH]    = Padma.consnt_CA + Padma.vattu_CHA;
AAADurga.toPadma[AAADurga.conjct_JJ]     = Padma.consnt_JA + Padma.vattu_JA;
AAADurga.toPadma[AAADurga.conjct_NNTT_1] = Padma.consnt_NNA + Padma.vattu_TTA;
AAADurga.toPadma[AAADurga.conjct_NNTT_2] = Padma.consnt_NNA + Padma.vattu_TTA;
AAADurga.toPadma[AAADurga.conjct_DDDD]   = Padma.consnt_DDA + Padma.vattu_DDA;
AAADurga.toPadma[AAADurga.conjct_NNDD]   = Padma.consnt_NNA + Padma.vattu_DDA;
AAADurga.toPadma[AAADurga.conjct_TT]     = Padma.consnt_TA + Padma.vattu_TA;
AAADurga.toPadma[AAADurga.conjct_TM_1]   = Padma.consnt_TA + Padma.vattu_MA;
AAADurga.toPadma[AAADurga.conjct_TM_2]   = Padma.consnt_TA + Padma.vattu_MA;
AAADurga.toPadma[AAADurga.conjct_TR]     = Padma.consnt_TA + Padma.vattu_RA;
AAADurga.toPadma[AAADurga.conjct_DM_1]   = Padma.consnt_DA + Padma.vattu_MA;
AAADurga.toPadma[AAADurga.conjct_DM_2]   = Padma.consnt_DA + Padma.vattu_MA;
AAADurga.toPadma[AAADurga.conjct_SHR]    = Padma.consnt_SHA + Padma.vattu_RA;
AAADurga.toPadma[AAADurga.conjct_NDH]    = Padma.consnt_NA + Padma.vattu_DHA;
AAADurga.toPadma[AAADurga.conjct_D_DB]   = Padma.consnt_DA + Padma.vattu_DA + Padma.vattu_BA;
AAADurga.toPadma[AAADurga.conjct_D_DH]   = Padma.consnt_DA + Padma.vattu_DHA;
AAADurga.toPadma[AAADurga.conjct_PP]     = Padma.consnt_PA + Padma.vattu_PA;
AAADurga.toPadma[AAADurga.conjct_DB]     = Padma.consnt_DA + Padma.vattu_BA;
AAADurga.toPadma[AAADurga.conjct_DR]     = Padma.consnt_DA + Padma.vattu_RA;
AAADurga.toPadma[AAADurga.conjct_PR]     = Padma.consnt_PA + Padma.vattu_RA;
AAADurga.toPadma[AAADurga.conjct_PL]     = Padma.consnt_PA + Padma.vattu_LA;
AAADurga.toPadma[AAADurga.conjct_DDR]    = Padma.consnt_DDA + Padma.vattu_RA;
AAADurga.toPadma[AAADurga.conjct_NN]     = Padma.consnt_NA + Padma.vattu_NA;
AAADurga.toPadma[AAADurga.conjct_NM]     = Padma.consnt_NA + Padma.vattu_MA;
AAADurga.toPadma[AAADurga.conjct_PTT]    = Padma.consnt_PA + Padma.vattu_TTA;
AAADurga.toPadma[AAADurga.conjct_PS]     = Padma.consnt_PA + Padma.vattu_SA;
AAADurga.toPadma[AAADurga.conjct_ND]     = Padma.consnt_NA + Padma.vattu_DA;
AAADurga.toPadma[AAADurga.conjct_NDR]    = Padma.consnt_NA + Padma.vattu_DA + Padma.vattu_RA;
AAADurga.toPadma[AAADurga.conjct_DHB]    = Padma.consnt_DHA + Padma.vattu_BA;
AAADurga.toPadma[AAADurga.conjct_NDHR]   = Padma.consnt_NA + Padma.vattu_DHA + Padma.vattu_RA;
AAADurga.toPadma[AAADurga.conjct_NTTR]   = Padma.consnt_NA + Padma.vattu_TTA + Padma.vattu_RA;
AAADurga.toPadma[AAADurga.conjct_NTH]    = Padma.consnt_NA + Padma.vattu_THA;
AAADurga.toPadma[AAADurga.conjct_SHR_II] = Padma.consnt_SHA + Padma.vattu_RA + Padma.vowelsn_II;


AAADurga.toPadma[AAADurga.vattu_YA]      = Padma.vattu_YA;

//Digits
AAADurga.toPadma[AAADurga.digit_ZERO]    = Padma.digit_ZERO;
AAADurga.toPadma[AAADurga.digit_ONE]     = Padma.digit_ONE;
AAADurga.toPadma[AAADurga.digit_TWO]     = Padma.digit_TWO;
AAADurga.toPadma[AAADurga.digit_THREE]   = Padma.digit_THREE;
AAADurga.toPadma[AAADurga.digit_FOUR]    = Padma.digit_FOUR;
AAADurga.toPadma[AAADurga.digit_FIVE]    = Padma.digit_FIVE;
AAADurga.toPadma[AAADurga.digit_SIX]     = Padma.digit_SIX;
AAADurga.toPadma[AAADurga.digit_SEVEN]   = Padma.digit_SEVEN;
AAADurga.toPadma[AAADurga.digit_EIGHT]   = Padma.digit_EIGHT;
AAADurga.toPadma[AAADurga.digit_NINE]    = Padma.digit_NINE;

AAADurga.toPadma[AAADurga.misc_DANDA]     = Padma.danda;

AAADurga.prefixList = new Object();

AAADurga.prefixList[AAADurga.vowelsn_I_1]  = true;
AAADurga.prefixList[AAADurga.vowelsn_I_2]  = true;
AAADurga.prefixList[AAADurga.vowelsn_I_3]  = true;
AAADurga.prefixList[AAADurga.vowelsn_I_4]  = true;
AAADurga.prefixList[AAADurga.vowelsn_I_candrabindu_1] = true;
AAADurga.prefixList[AAADurga.vowelsn_I_candrabindu_2] = true;
AAADurga.prefixList[AAADurga.vowelsn_I_candrabindu_3] = true;
AAADurga.prefixList[AAADurga.vowelsn_I_candrabindu_4] = true;
//AAADurga.prefixList[AAADurga.vowelsn_R_II_1] = true;
//AAADurga.prefixList[AAADurga.vowelsn_R_II_2] = true;
AAADurga.prefixList[AAADurga.vowelsn_E_1] = true;
AAADurga.prefixList[AAADurga.vowelsn_E_2] = true;
AAADurga.prefixList[AAADurga.vowelsn_AI_1] = true;
AAADurga.prefixList[AAADurga.vowelsn_AI_2] = true;
//AAADurga.prefixList[AAADurga.candrabindu_1] = true;
//AAADurga.prefixList[AAADurga.candrabindu_2] = true;
//AAADurga.prefixList[AAADurga.candrabindu_3] = true;


AAADurga.suffixList = new Object();

AAADurga.suffixList[AAADurga.halffm_RA_1]  = true;
AAADurga.suffixList[AAADurga.halffm_RA_2]  = true;
AAADurga.suffixList[AAADurga.halffm_RA_3]  = true;




AAADurga.redundantList = new Object();
AAADurga.redundantList[AAADurga.misc_UNKNOWN_1] = true;
AAADurga.redundantList[AAADurga.misc_UNKNOWN_2] = true;
AAADurga.redundantList[AAADurga.misc_UNKNOWN_3] = true;
//AAADurga.redundantList[AAADurga.misc_UNKNOWN_4] = true;

AAADurga.overloadList = new Object();

