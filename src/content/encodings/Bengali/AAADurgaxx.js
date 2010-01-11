//$Id: AAADurgaxx.js,v 1.2 2010/01/11 13:46:01 harshita Exp $

/* Copyright 2008 Nagarjuna Venna <vnagarjuna@yahoo.com> */
/*                Golam Mortuza Hossain <gmhossain@gmail.com> */

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


//AAADurgaxx
function AAADurgaxx()
{
}

AAADurgaxx.maxLookupLen = 3;
AAADurgaxx.fontFace     = "AAADurgaxx";
AAADurgaxx.displayName  = "AAADurgaxx";
AAADurgaxx.script       =  Padma.script_BENGALI;
AAADurgaxx.hasSuffixes  = true;

AAADurgaxx.lookup = function (str) 
{
    return AAADurgaxx.toPadma[str];
}

AAADurgaxx.isPrefixSymbol = function (str)
{
    return AAADurgaxx.prefixList[str] != null;
}

AAADurgaxx.isSuffixSymbol = function (str)
{
    return AAADurgaxx.suffixList[str] != null;
}

AAADurgaxx.isOverloaded = function (str)
{
    return AAADurga.isOverloaded(str);
}

AAADurgaxx.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return AAADurga.handleTwoPartVowelSigns(sign1, sign2);
}

AAADurgaxx.isRedundant = function (str)
{
    return AAADurgaxx.redundantList[str] != null;
}


// AAADurgaxx map starts here 

AAADurgaxx.halffm_RA_1    = "\u0027";

AAADurgaxx.conjct_SKH_1   = "\u0030"; 
AAADurgaxx.conjct_KTR     = "\u0031"; 
AAADurgaxx.conjct_KSSB    = "\u0032"; 
AAADurgaxx.conjct_GHB     = "\u0033"; 
AAADurgaxx.conjct_NGA_GHR = "\u0034"; 
AAADurgaxx.conjct_TTM     = "\u0035"; 
AAADurgaxx.conjct_DDM     = "\u0036"; 
AAADurgaxx.conjct_BHL     = "\u0037"; 
AAADurgaxx.combo_RUU      = "\u0038"; //combo
AAADurgaxx.conjct_BHB     = "\u0039"; 
AAADurgaxx.conjct_DDHR    = "\u003A"; 
AAADurgaxx.conjct_NGA_KR  = "\u003B"; 
AAADurgaxx.conjct_DG      = "\u003C"; 
AAADurgaxx.conjct_LDD     = "\u003D"; 
AAADurgaxx.conjct_MBHR    = "\u003E"; 
AAADurgaxx.conjct_SPR     = "\u003F"; 
AAADurgaxx.combo_RU       = "\u0040"; //combo
AAADurgaxx.conjct_DHRUU   = "\u0041"; 
AAADurgaxx.consnt_JA      = "\u0042";
AAADurgaxx.consnt_RRA     = "\u0043";
AAADurgaxx.consnt_YYA     = "\u0044";
AAADurgaxx.conjct_RRG     = "\u0045";
AAADurgaxx.consnt_RHA     = "\u0046";
AAADurgaxx.conjct_TRUU    = "\u0047"; 
AAADurgaxx.conjct_JNYA    = "\u0048"; 
AAADurgaxx.conjct_NYA_J   = "\u0049"; 
AAADurgaxx.conjct_TRU     = "\u004A"; 
AAADurgaxx.conjct_NNDDR   = "\u004B"; 
AAADurgaxx.conjct_DRU     = "\u004C"; 
AAADurgaxx.conjct_HB      = "\u004D"; 

AAADurgaxx.avagraha       = "\u0051"; 
AAADurgaxx.conjct_DHRU    = "\u0052"; 
AAADurgaxx.conjct_SSTTB   = "\u0053"; 
AAADurgaxx.conjct_PN      = "\u0054"; 
AAADurgaxx.conjct_SSPH    = "\u0055"; 
AAADurgaxx.conjct_SHCH    = "\u0056"; 
AAADurgaxx.vowelsn_II_1   = "\u0057";
AAADurgaxx.vowelsn_II_2   = "\u0058";

AAADurgaxx.conjct_SKH_2   = "\u0059"; 

AAADurgaxx.conjct_TN      = "\u0060"; 
AAADurgaxx.conjct_KTB     = "\u0061"; 

AAADurgaxx.conjct_HNN     = "\u0063"; 

AAADurgaxx.conjct_LTTR    = "\u0065"; 
AAADurgaxx.conjct_GRU     = "\u0066"; 
AAADurgaxx.conjct_SPL     = "\u0067"; 
AAADurgaxx.conjct_KTTR    = "\u0068"; 
AAADurgaxx.conjct_DRUU    = "\u0069"; 
AAADurgaxx.conjct_LTH     = "\u006A"; 

AAADurgaxx.vowelsn_UU_1   = "\u006D";
AAADurgaxx.vowelsn_U_1    = "\u006E";
AAADurgaxx.vowelsn_R_1    = "\u006F";
AAADurgaxx.vowelsn_U_2    = "\u0070";
AAADurgaxx.vowelsn_UU_2   = "\u0071";
AAADurgaxx.vowelsn_R_2    = "\u0072";

AAADurgaxx.vowelsn_UU_3   = "\u007B";
AAADurgaxx.vowelsn_U_3    = "\u007C";
AAADurgaxx.vowelsn_R_3    = "\u007D";

AAADurgaxx.vowelsn_U_4    = "\u00AB";

AAADurgaxx.misc_2_by_3    = "\u00BB"; 
AAADurgaxx.misc_1_by_4    = "\u00BC"; 
AAADurgaxx.misc_1_by_2    = "\u00BD"; 
AAADurgaxx.misc_3_by_4    = "\u00BE"; 
AAADurgaxx.misc_1_by_3    = "\u00BF"; 

AAADurgaxx.vowelsn_U_5    = "\u00C0";
AAADurgaxx.vowelsn_U_6    = "\u00C1";
AAADurgaxx.vowelsn_U_7    = "\u00C2";
AAADurgaxx.vowelsn_UU_4   = "\u00C3";

AAADurgaxx.vowelsn_R_5    = "\u00C8";

AAADurgaxx.vowelsn_UU_5   = "\u00CA";
AAADurgaxx.vowelsn_UU_6   = "\u00CB";
AAADurgaxx.vowelsn_U_8    = "\u00CC";
AAADurgaxx.vowelsn_U_9    = "\u00CD";
AAADurgaxx.vowelsn_UU_7   = "\u00CE";
AAADurgaxx.vowelsn_R_6    = "\u00CF";

AAADurgaxx.vowelsn_R_7    = "\u00D2";
AAADurgaxx.vowelsn_UU_8   = "\u00D3";
AAADurgaxx.vowelsn_R_8    = "\u00D4";
AAADurgaxx.vowelsn_UU_9   = "\u00D5";

AAADurgaxx.vowelsn_R_9    = "\u00D9";
AAADurgaxx.vowelsn_U_10   = "\u00DA";
AAADurgaxx.vowelsn_UU_10  = "\u00DB";

AAADurgaxx.nukta_1        = "\u00DD"; 
AAADurgaxx.nukta_2        = "\u00DE"; 
AAADurgaxx.vattu_BA_1     = "\u00DF";
AAADurgaxx.vattu_RA_1     = "\u00E0";
AAADurgaxx.vattu_BA_2     = "\u00E1";
AAADurgaxx.vowelsn_R_10   = "\u00E2";
AAADurgaxx.vattu_TR       = "\u00E3";
AAADurgaxx.vattu_RA_2     = "\u00E4";
AAADurgaxx.vattu_THA      = "\u00E5";
AAADurgaxx.vattu_PA       = "\u00E6";
AAADurgaxx.vattu_LA_1     = "\u00E7";
AAADurgaxx.vattu_BHR      = "\u00E8";
AAADurgaxx.vattu_RA_3     = "\u00E9";
AAADurgaxx.vattu_GA       = "\u00EA";
AAADurgaxx.vattu_BHA      = "\u00EB";
AAADurgaxx.vattu_LA_2     = "\u00EC";
AAADurgaxx.vattu_NA       = "\u00ED";
AAADurgaxx.vattu_RA_4     = "\u00EE";
AAADurgaxx.vattu_MA       = "\u00EF";

AAADurgaxx.vattu_RA_5     = "\u00F1";
AAADurgaxx.candrabindu    = "\u00F2";
AAADurgaxx.vowelsn_AULEN_1= "\u00F3";
AAADurgaxx.consnt_KA      = "\u00F4";
AAADurgaxx.vowelsn_U_11   = "\u00F5";
AAADurgaxx.vowelsn_UU_11  = "\u00F6";
AAADurgaxx.vowelsn_R_12   = "\u00F7";
AAADurgaxx.vowelsn_AULEN_2= "\u00F8";
AAADurgaxx.virama         = "\u00F9";
AAADurgaxx.vowelsn_U_12   = "\u00FA";
AAADurgaxx.vowelsn_UU_12  = "\u00FB";
AAADurgaxx.vowelsn_R_11   = "\u00FC";
AAADurgaxx.vattu_RA_6     = "\u00FD";
AAADurgaxx.halffm_RA_2    = "\u00FE";

//I am here.

AAADurgaxx.toPadma = new Object();
//H

AAADurgaxx.toPadma[AAADurgaxx.consnt_KA]      = Padma.consnt_KA;
AAADurgaxx.toPadma[AAADurgaxx.avagraha]       = Padma.avagraha;
AAADurgaxx.toPadma[AAADurgaxx.virama]         = Padma.virama;
AAADurgaxx.toPadma[AAADurgaxx.nukta_1]        = Padma.nukta;
AAADurgaxx.toPadma[AAADurgaxx.nukta_2]        = Padma.nukta;

AAADurgaxx.toPadma[AAADurgaxx.misc_2_by_3]    = Padma.digit_TWO + "/" + Padma.digit_THREE; 
AAADurgaxx.toPadma[AAADurgaxx.misc_1_by_4]    = Padma.digit_ONE + "/" + Padma.digit_FOUR; 
AAADurgaxx.toPadma[AAADurgaxx.misc_1_by_2]    = Padma.digit_ONE + "/" + Padma.digit_TWO; 
AAADurgaxx.toPadma[AAADurgaxx.misc_3_by_4]    = Padma.digit_THREE + "/" + Padma.digit_FOUR; 
AAADurgaxx.toPadma[AAADurgaxx.misc_1_by_3]    = Padma.digit_ONE + "/" + Padma.digit_THREE; 

AAADurgaxx.toPadma[AAADurgaxx.consnt_RRA]     = Padma.consnt_RRA;
AAADurgaxx.toPadma[AAADurgaxx.consnt_YYA]     = Padma.consnt_YYA;
AAADurgaxx.toPadma[AAADurgaxx.consnt_RHA]     = Padma.consnt_RHA;

AAADurgaxx.toPadma[AAADurgaxx.halffm_RA_1]      = Padma.halffm_RA;
AAADurgaxx.toPadma[AAADurgaxx.halffm_RA_2]      = Padma.halffm_RA;

AAADurgaxx.toPadma[AAADurgaxx.vowelsn_II_1]   = Padma.vowelsn_II;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_II_2]   = Padma.vowelsn_II;
//
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_U_1]    = Padma.vowelsn_U;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_U_2]    = Padma.vowelsn_U;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_U_3]    = Padma.vowelsn_U;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_U_4]    = Padma.vowelsn_U;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_U_5]    = Padma.vowelsn_U;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_U_6]    = Padma.vowelsn_U;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_U_7]    = Padma.vowelsn_U;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_U_8]    = Padma.vowelsn_U;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_U_9]    = Padma.vowelsn_U;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_U_10]   = Padma.vowelsn_U;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_U_11]   = Padma.vowelsn_U;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_U_12]   = Padma.vowelsn_U;
//
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_UU_1]   = Padma.vowelsn_UU;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_UU_2]   = Padma.vowelsn_UU;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_UU_3]   = Padma.vowelsn_UU;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_UU_4]   = Padma.vowelsn_UU;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_UU_5]   = Padma.vowelsn_UU;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_UU_6]   = Padma.vowelsn_UU;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_UU_7]   = Padma.vowelsn_UU;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_UU_8]   = Padma.vowelsn_UU;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_UU_9]   = Padma.vowelsn_UU;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_UU_10]  = Padma.vowelsn_UU;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_UU_11]  = Padma.vowelsn_UU;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_UU_12]  = Padma.vowelsn_UU;
//
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_R_1]    = Padma.vowelsn_R;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_R_2]    = Padma.vowelsn_R;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_R_3]    = Padma.vowelsn_R;
//AAADurgaxx.toPadma[AAADurgaxx.vowelsn_R_4]    = Padma.vowelsn_R;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_R_5]    = Padma.vowelsn_R;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_R_6]    = Padma.vowelsn_R;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_R_7]    = Padma.vowelsn_R;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_R_8]    = Padma.vowelsn_R;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_R_9]    = Padma.vowelsn_R;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_R_10]   = Padma.vowelsn_R;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_R_11]   = Padma.vowelsn_R;
AAADurgaxx.toPadma[AAADurgaxx.vowelsn_R_12]   = Padma.vowelsn_R;

//AAADurgaxx.toPadma[AAADurgaxx.conjct_SSPH_1]  = Padma.consnt_SSA + Padma.vattu_PHA;
//AAADurgaxx.toPadma[AAADurgaxx.conjct_SSPH_2]  = Padma.consnt_SSA + Padma.vattu_PHA;
//AAADurgaxx.toPadma[AAADurgaxx.conjct_NTU]     = Padma.consnt_NA + Padma.vattu_TA + Padma.vowelsn_U;
//AAADurgaxx.toPadma[AAADurgaxx.conjct_SHM]     = Padma.consnt_SHA + Padma.vattu_MA;
AAADurgaxx.toPadma[AAADurgaxx.conjct_SHCH]    = Padma.consnt_SHA + Padma.vattu_CHA;
//AAADurgaxx.toPadma[AAADurgaxx.conjct_SHN]     = Padma.consnt_SHA + Padma.vattu_NA;
////AAADurgaxx.toPadma[AAADurgaxx.conjct_SHL]     = Padma.consnt_SHA + Padma.vattu_LA;
//AAADurgaxx.toPadma[AAADurgaxx.conjct_HNN_1]     = Padma.consnt_HA + Padma.vattu_NNA;
//AAADurgaxx.toPadma[AAADurgaxx.conjct_HNN_2]     = Padma.consnt_HA + Padma.vattu_NNA;
//AAADurgaxx.toPadma[AAADurgaxx.conjct_HL]      = Padma.consnt_HA + Padma.vattu_LA;
//AAADurgaxx.toPadma[AAADurgaxx.conjct_HR]      = Padma.consnt_HA + Padma.vattu_RA;
//AAADurgaxx.toPadma[AAADurgaxx.conjct_KSSM]    = Padma.consnt_KA + Padma.vattu_SSA + Padma.vattu_MA;
//AAADurgaxx.toPadma[AAADurgaxx.conjct_NGA_KSS] = Padma.consnt_NGA + Padma.vattu_KA + Padma.vattu_SSA;
//AAADurgaxx.toPadma[AAADurgaxx.conjct_CCHR]    = Padma.consnt_CA + Padma.vattu_CHA + Padma.vattu_RA;
//AAADurgaxx.toPadma[AAADurgaxx.conjct_JJH]     = Padma.consnt_JA + Padma.vattu_JHA;
//AAADurgaxx.toPadma[AAADurgaxx.conjct_NYA_JH]  = Padma.consnt_NYA + Padma.vattu_JHA;
//AAADurgaxx.toPadma[AAADurgaxx.conjct_TTB]     = Padma.consnt_TTA + Padma.vattu_BA;
AAADurgaxx.toPadma[AAADurgaxx.conjct_SSTTB]   = Padma.consnt_SSA +Padma.consnt_TTA + Padma.vattu_BA;
//AAADurgaxx.toPadma[AAADurgaxx.conjct_NNDDH]   = Padma.consnt_NNA + Padma.vattu_DDHA;
AAADurgaxx.toPadma[AAADurgaxx.conjct_SPL]     = Padma.consnt_SA + Padma.vattu_PA + Padma.vattu_LA;
//AAADurgaxx.toPadma[AAADurgaxx.conjct_THB]     = Padma.consnt_THA + Padma.vattu_BA;
//
//AAADurgaxx.toPadma[AAADurgaxx.conjct_DGH]     = Padma.consnt_DA + Padma.vattu_GHA;
AAADurgaxx.toPadma[AAADurgaxx.conjct_SKH_1]   = Padma.consnt_SA + Padma.vattu_KHA;
AAADurgaxx.toPadma[AAADurgaxx.conjct_SKH_2]   = Padma.consnt_SA + Padma.vattu_KHA;
AAADurgaxx.toPadma[AAADurgaxx.conjct_LTH]     = Padma.consnt_LA + Padma.vattu_THA;
AAADurgaxx.toPadma[AAADurgaxx.conjct_LTTR]    = Padma.consnt_LA + Padma.vattu_TTA + Padma.vattu_RA;
AAADurgaxx.toPadma[AAADurgaxx.conjct_KTR]     = Padma.consnt_KA + Padma.vattu_TA + Padma.vattu_RA;
AAADurgaxx.toPadma[AAADurgaxx.conjct_KTTR]    = Padma.consnt_KA + Padma.vattu_TTA + Padma.vattu_RA;
AAADurgaxx.toPadma[AAADurgaxx.conjct_KSSB]    = Padma.consnt_KA + Padma.vattu_SSA + Padma.vattu_BA;
AAADurgaxx.toPadma[AAADurgaxx.conjct_GHB]     = Padma.consnt_GHA + Padma.vattu_BA;
AAADurgaxx.toPadma[AAADurgaxx.conjct_NGA_GHR] = Padma.consnt_NGA + Padma.vattu_GHA + Padma.vattu_RA;
AAADurgaxx.toPadma[AAADurgaxx.conjct_TTM]     = Padma.consnt_TTA + Padma.vattu_MA;
AAADurgaxx.toPadma[AAADurgaxx.conjct_DDM]     = Padma.consnt_DDA + Padma.vattu_MA;
AAADurgaxx.toPadma[AAADurgaxx.conjct_BHL]     = Padma.consnt_BHA + Padma.vattu_LA;
AAADurgaxx.toPadma[AAADurgaxx.combo_RUU]      = Padma.consnt_RA + Padma.vowelsn_UU;
AAADurgaxx.toPadma[AAADurgaxx.conjct_BHB]     = Padma.consnt_BHA + Padma.vattu_BA;
AAADurgaxx.toPadma[AAADurgaxx.conjct_DDHR]    = Padma.consnt_DDHA + Padma.vattu_RA;
AAADurgaxx.toPadma[AAADurgaxx.conjct_NGA_KR]  = Padma.consnt_NGA + Padma.vattu_KA + Padma.vattu_RA;
AAADurgaxx.toPadma[AAADurgaxx.conjct_DG]      = Padma.consnt_DA + Padma.vattu_GA;
AAADurgaxx.toPadma[AAADurgaxx.conjct_LDD]     = Padma.consnt_LA + Padma.vattu_DDA;
AAADurgaxx.toPadma[AAADurgaxx.conjct_MBHR]    = Padma.consnt_MA + Padma.vattu_BHA + Padma.vattu_RA;
AAADurgaxx.toPadma[AAADurgaxx.conjct_SPR]     = Padma.consnt_SA + Padma.vattu_PA + Padma.vattu_RA;
AAADurgaxx.toPadma[AAADurgaxx.combo_RU]       = Padma.consnt_RA + Padma.vowelsn_U;
AAADurgaxx.toPadma[AAADurgaxx.conjct_DHRU]    = Padma.consnt_DHA +  Padma.vattu_RA + Padma.vowelsn_U;
AAADurgaxx.toPadma[AAADurgaxx.conjct_DHRUU]   = Padma.consnt_DHA +  Padma.vattu_RA + Padma.vowelsn_UU;
// H

AAADurgaxx.toPadma[AAADurgaxx.conjct_RRG]    = Padma.consnt_RRA + Padma.vattu_GA;
AAADurgaxx.toPadma[AAADurgaxx.conjct_JNYA]    = Padma.consnt_JA + Padma.vattu_NYA;
AAADurgaxx.toPadma[AAADurgaxx.conjct_NYA_J]   = Padma.consnt_NYA + Padma.vattu_JA;

AAADurgaxx.toPadma[AAADurgaxx.conjct_GRU]     = Padma.consnt_GA + Padma.vattu_RA + Padma.vowelsn_U;
AAADurgaxx.toPadma[AAADurgaxx.conjct_TRU]     = Padma.consnt_TA + Padma.vattu_RA + Padma.vowelsn_U;
AAADurgaxx.toPadma[AAADurgaxx.conjct_TRUU]    = Padma.consnt_TA + Padma.vattu_RA + Padma.vowelsn_UU;
AAADurgaxx.toPadma[AAADurgaxx.conjct_DRU]     = Padma.consnt_DA + Padma.vattu_RA + Padma.vowelsn_U;
AAADurgaxx.toPadma[AAADurgaxx.conjct_DRUU]    = Padma.consnt_DA + Padma.vattu_RA + Padma.vowelsn_U;
AAADurgaxx.toPadma[AAADurgaxx.conjct_HB]      = Padma.consnt_HA + Padma.vattu_BA;
AAADurgaxx.toPadma[AAADurgaxx.conjct_PN]      = Padma.consnt_PA + Padma.vattu_NA;
AAADurgaxx.toPadma[AAADurgaxx.conjct_TN]      = Padma.consnt_TA + Padma.vattu_NA;
AAADurgaxx.toPadma[AAADurgaxx.conjct_KTB]     = Padma.consnt_KA + Padma.vattu_TA + Padma.vattu_BA;
AAADurgaxx.toPadma[AAADurgaxx.conjct_SHCH]    = Padma.consnt_SHA + Padma.vattu_CHA;

//
AAADurgaxx.toPadma[AAADurgaxx.vattu_BA_1]     = Padma.vattu_BA;
AAADurgaxx.toPadma[AAADurgaxx.vattu_BA_2]     = Padma.vattu_BA;

AAADurgaxx.toPadma[AAADurgaxx.vattu_RA_1]     = Padma.vattu_RA;
AAADurgaxx.toPadma[AAADurgaxx.vattu_RA_2]     = Padma.vattu_RA;
AAADurgaxx.toPadma[AAADurgaxx.vattu_RA_3]     = Padma.vattu_RA;
AAADurgaxx.toPadma[AAADurgaxx.vattu_RA_4]     = Padma.vattu_RA;
AAADurgaxx.toPadma[AAADurgaxx.vattu_RA_5]     = Padma.vattu_RA;
AAADurgaxx.toPadma[AAADurgaxx.vattu_RA_6]     = Padma.vattu_RA;
//
AAADurgaxx.toPadma[AAADurgaxx.vattu_TR]   = Padma.vattu_TA + Padma.vattu_RA;
AAADurgaxx.toPadma[AAADurgaxx.vattu_BHR]  = Padma.vattu_BHA + Padma.vattu_RA;

AAADurgaxx.toPadma[AAADurgaxx.vattu_THA]     = Padma.vattu_THA;
AAADurgaxx.toPadma[AAADurgaxx.vattu_PA]      = Padma.vattu_PA;

AAADurgaxx.toPadma[AAADurgaxx.vattu_LA_1]      = Padma.vattu_LA;
AAADurgaxx.toPadma[AAADurgaxx.vattu_LA_2]      = Padma.vattu_LA;

AAADurgaxx.toPadma[AAADurgaxx.vattu_GA]      = Padma.vattu_GA;
AAADurgaxx.toPadma[AAADurgaxx.vattu_BHA]     = Padma.vattu_BHA;

AAADurgaxx.toPadma[AAADurgaxx.vattu_NA]      = Padma.vattu_NA;
AAADurgaxx.toPadma[AAADurgaxx.vattu_MA]      = Padma.vattu_MA;


AAADurgaxx.prefixList = new Object();

//AAADurga.prefixList[AAADurga.vowelsn_I_1]  = true;
//AAADurga.prefixList[AAADurga.vowelsn_I_2]  = true;
//AAADurga.prefixList[AAADurga.vowelsn_I_3]  = true;
//AAADurga.prefixList[AAADurga.vowelsn_I_4]  = true;
//AAADurga.prefixList[AAADurga.vowelsn_R_II_1] = true;
//AAADurga.prefixList[AAADurga.vowelsn_R_II_2] = true;


AAADurgaxx.suffixList = new Object();

AAADurgaxx.prefixList[AAADurga.halffm_RA_1]  = true;
AAADurgaxx.prefixList[AAADurga.halffm_RA_2]  = true;

AAADurgaxx.redundantList = new Object();


