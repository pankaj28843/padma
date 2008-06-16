//$Id: AAADurgax.js,v 1.1 2008/06/16 15:43:00 vnagarjuna Exp $

/* Copyright 2008 Nagarjuna Venna <vnagarjuna@yahoo.com> */
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


function AAADurgax()
{
}

//The interface every dynamic font encoding should implement
AAADurgax.maxLookupLen = 3;
AAADurgax.fontFace     = "AAADurgax";
AAADurgax.displayName  = "AAADurgax";
AAADurgax.script       = Padma.script_BENGALI;
AAADurgax.hasSuffixes  = true;

AAADurgax.lookup = function (str) 
{
    return AAADurgax.toPadma[str];
}

AAADurgax.isPrefixSymbol = function (str)
{
    return AAADurgax.prefixList[str] != null;
}

AAADurgax.isSuffixSymbol = function (str)
{
    return AAADurgax.suffixList[str] != null;
}

AAADurgax.isOverloaded = function (str)
{
    return AAADurgax.overloadList[str] != null;
}

AAADurgax.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return AAADurga.handleTwoPartVowelSigns(sign1, sign2);
}

AAADurgax.isRedundant = function (str)
{
    return AAADurgax.redundantList[str] != null;
}


/* All map from AAADurgax */
/* AAADurgax: start here */
AAADurgax.halffm_RA      = "\u0027";
AAADurgax.vowelsn_U_1    = "\u00AB";
AAADurgax.vowelsn_U_2    = "\u00C0";
AAADurgax.vowelsn_U_3    = "\u00C1";
AAADurgax.vowelsn_U_4    = "\u00C2";
AAADurgax.vowelsn_UU_1   = "\u00C3";
AAADurgax.visarga	 = "\u00C6";
AAADurgax.vowelsn_R_1    = "\u00C8";
AAADurgax.vowelsn_UU_2   = "\u00CA";
AAADurgax.vowelsn_UU_3   = "\u00CB";
AAADurgax.vowelsn_U_5    = "\u00CC";
AAADurgax.vowelsn_U_6    = "\u00CD";
AAADurgax.vowelsn_UU_4   = "\u00CE";
AAADurgax.vowelsn_R_2    = "\u00CF";
AAADurgax.vowelsn_UU_5   = "\u00D1";
AAADurgax.vowelsn_R_3    = "\u00D2";
AAADurgax.vowelsn_UU_6   = "\u00D3";
AAADurgax.vowelsn_R_4    = "\u00D4";
AAADurgax.vowelsn_UU_7   = "\u00D5";
AAADurgax.anusvara       = "\u00D8";
AAADurgax.vowelsn_R_5    = "\u00D9";
AAADurgax.vowelsn_U_7    = "\u00DA";
AAADurgax.vowelsn_UU_8   = "\u00DB";

// Conjuncts

AAADurgax.conjct_BDH_1   = "\u0030";
AAADurgax.conjct_BL      = "\u0031";
AAADurgax.conjct_BHR     = "\u0032";
AAADurgax.conjct_MP      = "\u0033";
AAADurgax.conjct_MPR_1   = "\u0034";
AAADurgax.conjct_MB      = "\u0036";
AAADurgax.conjct_MM      = "\u0038";
AAADurgax.conjct_MR      = "\u0039";
AAADurgax.conjct_ML      = "\u003A";
AAADurgax.conjct_KHR     = "\u003B";
AAADurgax.conjct_LK      = "\u003C";
AAADurgax.conjct_LL      = "\u003D";
AAADurgax.conjct_LP      = "\u003E";
AAADurgax.conjct_MN      = "\u003F";
AAADurgax.conjct_GHN     = "\u0040";
AAADurgax.conjct_SR      = "\u0041";
AAADurgax.conjct_SB      = "\u0042";
AAADurgax.conjct_SM      = "\u0043";
AAADurgax.conjct_ST      = "\u0044";
AAADurgax.conjct_STR     = "\u0045";
AAADurgax.conjct_SSTTR   = "\u0046";
AAADurgax.conjct_SSNN    = "\u0047";
AAADurgax.conjct_SSM     = "\u0048";
AAADurgax.conjct_SHC     = "\u0049";
AAADurgax.conjct_C_NYA   = "\u004A";
AAADurgax.conjct_HM      = "\u004B";
AAADurgax.conjct_HN      = "\u004C";
AAADurgax.conjct_SN      = "\u004D";
AAADurgax.combo_HR       = "\u004E"; //combo
AAADurgax.combo_GU       = "\u004F"; //combo
AAADurgax.conjct_LB      = "\u0050";
AAADurgax.conjct_STU     = "\u0051";
AAADurgax.combo_SHU      = "\u0052"; //combo
AAADurgax.combo_HU       = "\u0053"; //combo
AAADurgax.conjct_SHRU    = "\u0054";
AAADurgax.conjct_KTT     = "\u0055";
AAADurgax.conjct_KM      = "\u0056";
AAADurgax.conjct_KN      = "\u0057";
AAADurgax.conjct_KS      = "\u0058";
AAADurgax.conjct_KSSNN   = "\u0059";
AAADurgax.conjct_GG      = "\u005A";
AAADurgax.conjct_SHRUU   = "\u005B";
AAADurgax.conjct_GB      = "\u005C";
AAADurgax.conjct_PRU     = "\u005D";
AAADurgax.conjct_GHR     = "\u005E";
AAADurgax.conjct_NGA_KH  = "\u005F";
AAADurgax.conjct_NGA_GH  = "\u0060";
AAADurgax.conjct_C_CHB   = "\u0061";
AAADurgax.conjct_CHR     = "\u0062";
AAADurgax.conjct_JR      = "\u0063";
AAADurgax.conjct_JB      = "\u0064";
AAADurgax.conjct_NYA_CH  = "\u0065";
AAADurgax.conjct_NNDDR   = "\u0066";
AAADurgax.conjct_NNB     = "\u0067";
AAADurgax.conjct_NNM     = "\u0068";
AAADurgax.conjct_T_TB    = "\u0069";
AAADurgax.conjct_DBH     = "\u006A";
AAADurgax.conjct_DHN     = "\u006B";
AAADurgax.conjct_DHR     = "\u006C";
AAADurgax.conjct_NYA_C   = "\u006D";

AAADurgax.conjct_NB      = "\u006F";
AAADurgax.conjct_DDR     = "\u0070";
AAADurgax.conjct_PT_1    = "\u0071";
AAADurgax.conjct_TB_1    = "\u0072";
AAADurgax.conjct_D_D     = "\u0073";
AAADurgax.conjct_SKL     = "\u0074";
AAADurgax.conjct_D_DHB   = "\u0075";

AAADurgax.conjct_DBHR    = "\u0077";
AAADurgax.conjct_SHM     = "\u0078";
AAADurgax.conjct_SHL     = "\u007B";
AAADurgax.conjct_SSPH    = "\u007C";
AAADurgax.conjct_SSP     = "\u007D";
AAADurgax.conjct_GN      = "\u007E";

AAADurgax.conjct_THB     = "\u00A1";
AAADurgax.conjct_BDH_2   = "\u00A2";


AAADurgax.conjct_NS      = "\u00A5";
AAADurgax.conjct_MPR_2   = "\u00A6";

AAADurgax.conjct_MBH     = "\u00A8";
AAADurgax.conjct_BBH     = "\u00A9";
AAADurgax.conjct_SHN     = "\u00AA";

AAADurgax.conjct_HL      = "\u00AE";
AAADurgax.conjct_HR      = "\u00AF";
AAADurgax.conjct_KSSM    = "\u00B0"; 
AAADurgax.conjct_NGA_KSS = "\u00B1"; 
AAADurgax.conjct_CCHR    = "\u00B2";
AAADurgax.conjct_JJH     = "\u00B3";
AAADurgax.conjct_NYA_JH  = "\u00B4";

AAADurgax.conjct_NN_DDH  = "\u00B6";

AAADurgax.conjct_DGH     = "\u00BA";
AAADurgax.conjct_BJ      = "\u00BB";
AAADurgax.conjct_BB      = "\u00BC";
AAADurgax.conjct_BR      = "\u00BD";
AAADurgax.conjct_LTT     = "\u00BE";
AAADurgax.conjct_LG      = "\u00BF";

AAADurgax.conjct_SK      = "\u00C4";
AAADurgax.conjct_SKR     = "\u00C5";
AAADurgax.conjct_SL      = "\u00C7";
AAADurgax.conjct_NTB     = "\u00C9";
AAADurgax.conjct_NDD     = "\u00D0";
AAADurgax.conjct_NTTH    = "\u00D6";
AAADurgax.conjct_NT      = "\u00D7";
AAADurgax.conjct_SSB     = "\u00DC";
AAADurgax.conjct_STB     = "\u00DD";
AAADurgax.conjct_SP      = "\u00DE";
AAADurgax.conjct_SPH     = "\u00DF";
AAADurgax.conjct_STTR    = "\u00E0";
AAADurgax.conjct_SSK     = "\u00E1";
AAADurgax.conjct_SSKR    = "\u00E2";
AAADurgax.conjct_SSTT    = "\u00E3";
AAADurgax.conjct_SSTTH   = "\u00E4";
AAADurgax.conjct_SSPR    = "\u00E5";
AAADurgax.conjct_NGA_M   = "\u00E6";
AAADurgax.conjct_STT     = "\u00E7";
AAADurgax.conjct_STH     = "\u00E8";
AAADurgax.conjct_THR     = "\u00E9";
AAADurgax.conjct_KB      = "\u00EA";
AAADurgax.conjct_JJB     = "\u00EB";
AAADurgax.conjct_TTTT    = "\u00EC";
AAADurgax.conjct_NNTTH   = "\u00ED";
AAADurgax.conjct_T_TH    = "\u00EE";
AAADurgax.conjct_TTR     = "\u00EF";
AAADurgax.conjct_PT_2    = "\u00F0";
AAADurgax.conjct_TB_2    = "\u00F1";
AAADurgax.conjct_LPH     = "\u00F2";
AAADurgax.conjct_SHB     = "\u00F3";
AAADurgax.conjct_NTU     = "\u00F4";

AAADurgax.conjct_LM      = "\u00F7";

AAADurgax.conjct_PHR     = "\u00FB";
AAADurgax.conjct_PHL     = "\u00FC";
AAADurgax.conjct_BD      = "\u00FD";
AAADurgax.conjct_NNTTR   = "\u00FE";

//AAADurgax.misc_UNKNOWN_1     = "\u00DE";
//AAADurgax.misc_UNKNOWN_2     = "\u00FE";

// 

/* AAADurgax: end here */


AAADurgax.toPadma = new Object();

AAADurgax.toPadma[AAADurgax.vowelsn_U_1] = Padma.vowelsn_U;
AAADurgax.toPadma[AAADurgax.vowelsn_U_2] = Padma.vowelsn_U;
AAADurgax.toPadma[AAADurgax.vowelsn_U_3] = Padma.vowelsn_U;
AAADurgax.toPadma[AAADurgax.vowelsn_U_4] = Padma.vowelsn_U;
AAADurgax.toPadma[AAADurgax.vowelsn_U_5] = Padma.vowelsn_U;
AAADurgax.toPadma[AAADurgax.vowelsn_U_6] = Padma.vowelsn_U;
AAADurgax.toPadma[AAADurgax.vowelsn_U_7] = Padma.vowelsn_U;
AAADurgax.toPadma[AAADurgax.vowelsn_UU_1] = Padma.vowelsn_UU;
AAADurgax.toPadma[AAADurgax.vowelsn_UU_2] = Padma.vowelsn_UU;
AAADurgax.toPadma[AAADurgax.vowelsn_UU_3] = Padma.vowelsn_UU;
AAADurgax.toPadma[AAADurgax.vowelsn_UU_4] = Padma.vowelsn_UU;
AAADurgax.toPadma[AAADurgax.vowelsn_UU_5] = Padma.vowelsn_UU;
AAADurgax.toPadma[AAADurgax.vowelsn_UU_6] = Padma.vowelsn_UU;
AAADurgax.toPadma[AAADurgax.vowelsn_UU_7] = Padma.vowelsn_UU;
AAADurgax.toPadma[AAADurgax.vowelsn_UU_8] = Padma.vowelsn_UU;
AAADurgax.toPadma[AAADurgax.vowelsn_R_1]  = Padma.vowelsn_R;
AAADurgax.toPadma[AAADurgax.vowelsn_R_2]  = Padma.vowelsn_R;
AAADurgax.toPadma[AAADurgax.vowelsn_R_3]  = Padma.vowelsn_R;
AAADurgax.toPadma[AAADurgax.vowelsn_R_4]  = Padma.vowelsn_R;
AAADurgax.toPadma[AAADurgax.vowelsn_R_5]  = Padma.vowelsn_R;
AAADurgax.toPadma[AAADurgax.anusvara]     = Padma.anusvara;
AAADurgax.toPadma[AAADurgax.visarga]      = Padma.visarga;

/* ABP: Conjunct definition starts here */

//These have been defined multiple times
AAADurgax.toPadma[AAADurgax.conjct_NTTH]     = Padma.consnt_NA + Padma.vattu_TTHA;
AAADurgax.toPadma[AAADurgax.conjct_NNTTH]    = Padma.consnt_NNA + Padma.vattu_TTHA;
AAADurgax.toPadma[AAADurgax.conjct_NNTTR]    = Padma.consnt_NNA + Padma.vattu_TTA + Padma.vattu_RA;
AAADurgax.toPadma[AAADurgax.conjct_SSTTR]    = Padma.consnt_SSA + Padma.vattu_TTA + Padma.vattu_RA;
AAADurgax.toPadma[AAADurgax.conjct_STTR]     = Padma.consnt_SA + Padma.vattu_TTA + Padma.vattu_RA;

//General

AAADurgax.toPadma[AAADurgax.conjct_BB]     = Padma.consnt_BA + Padma.vattu_BA;
AAADurgax.toPadma[AAADurgax.conjct_BD]     = Padma.consnt_BA + Padma.vattu_DA;
AAADurgax.toPadma[AAADurgax.conjct_BDH_1]  = Padma.consnt_BA + Padma.vattu_DHA;
AAADurgax.toPadma[AAADurgax.conjct_BDH_2]  = Padma.consnt_BA + Padma.vattu_DHA;
AAADurgax.toPadma[AAADurgax.conjct_BHR]    = Padma.consnt_BHA + Padma.vattu_RA;
AAADurgax.toPadma[AAADurgax.conjct_BJ]     = Padma.consnt_BA + Padma.vattu_JA;
AAADurgax.toPadma[AAADurgax.conjct_BL]     = Padma.consnt_BA + Padma.vattu_LA;
AAADurgax.toPadma[AAADurgax.conjct_BR]     = Padma.consnt_BA + Padma.vattu_RA;
AAADurgax.toPadma[AAADurgax.conjct_C_CHB]  = Padma.consnt_CA + Padma.vattu_CHA + Padma.vattu_BA;
AAADurgax.toPadma[AAADurgax.conjct_C_NYA]  = Padma.consnt_CA + Padma.vattu_NYA;
AAADurgax.toPadma[AAADurgax.conjct_DBH]    = Padma.consnt_DA + Padma.vattu_BHA;
AAADurgax.toPadma[AAADurgax.conjct_DGH]    = Padma.consnt_DA + Padma.vattu_GHA;
AAADurgax.toPadma[AAADurgax.conjct_DBHR]   = Padma.consnt_DA + Padma.vattu_BHA + Padma.vattu_RA;
AAADurgax.toPadma[AAADurgax.conjct_DDR]    = Padma.consnt_DDA + Padma.vattu_RA;
AAADurgax.toPadma[AAADurgax.conjct_DHN]    = Padma.consnt_DHA + Padma.vattu_NA;
AAADurgax.toPadma[AAADurgax.conjct_DHR]    = Padma.consnt_DHA + Padma.vattu_RA;
AAADurgax.toPadma[AAADurgax.conjct_D_D]    = Padma.consnt_DA + Padma.vattu_DA;
AAADurgax.toPadma[AAADurgax.conjct_SKL]    = Padma.consnt_SA + Padma.vattu_KA + Padma.vattu_LA;
AAADurgax.toPadma[AAADurgax.conjct_D_DHB]  = Padma.consnt_DA + Padma.vattu_DHA + Padma.vattu_BA;

AAADurgax.toPadma[AAADurgax.conjct_THB]    = Padma.consnt_THA + Padma.vattu_BA;

AAADurgax.toPadma[AAADurgax.conjct_GB]     = Padma.consnt_GA + Padma.vattu_BA;
AAADurgax.toPadma[AAADurgax.conjct_GG]     = Padma.consnt_GA + Padma.vattu_GA;
AAADurgax.toPadma[AAADurgax.conjct_GN]     = Padma.consnt_GA + Padma.vattu_NA;
AAADurgax.toPadma[AAADurgax.conjct_GHN]    = Padma.consnt_GHA + Padma.vattu_NA;
AAADurgax.toPadma[AAADurgax.conjct_GHR]    = Padma.consnt_GHA + Padma.vattu_RA;

AAADurgax.toPadma[AAADurgax.conjct_HM]     = Padma.consnt_HA + Padma.vattu_MA;
AAADurgax.toPadma[AAADurgax.conjct_HN]     = Padma.consnt_HA + Padma.vattu_NA;
AAADurgax.toPadma[AAADurgax.conjct_JB]     = Padma.consnt_JA + Padma.vattu_BA;
AAADurgax.toPadma[AAADurgax.conjct_JJB]    = Padma.consnt_JA + Padma.vattu_JA + Padma.vattu_BA;
AAADurgax.toPadma[AAADurgax.conjct_JR]     = Padma.consnt_JA + Padma.vattu_RA;
AAADurgax.toPadma[AAADurgax.conjct_KB]     = Padma.consnt_KA + Padma.vattu_BA;
AAADurgax.toPadma[AAADurgax.conjct_KHR]    = Padma.consnt_KHA + Padma.vattu_RA;
AAADurgax.toPadma[AAADurgax.conjct_KM]     = Padma.consnt_KA + Padma.vattu_MA;
AAADurgax.toPadma[AAADurgax.conjct_KN]     = Padma.consnt_KA + Padma.vattu_NA;
AAADurgax.toPadma[AAADurgax.conjct_KS]     = Padma.consnt_KA + Padma.vattu_SA;
AAADurgax.toPadma[AAADurgax.conjct_KSSNN]  = Padma.consnt_KA + Padma.vattu_SSA + Padma.vattu_NA;
AAADurgax.toPadma[AAADurgax.conjct_KTT]    = Padma.consnt_KA + Padma.vattu_TTA;
AAADurgax.toPadma[AAADurgax.conjct_LB]     = Padma.consnt_LA + Padma.vattu_BA;
AAADurgax.toPadma[AAADurgax.conjct_LG]     = Padma.consnt_LA + Padma.vattu_GA;
AAADurgax.toPadma[AAADurgax.conjct_LK]     = Padma.consnt_LA + Padma.vattu_KA;
AAADurgax.toPadma[AAADurgax.conjct_LL]     = Padma.consnt_LA + Padma.vattu_LA;
AAADurgax.toPadma[AAADurgax.conjct_LM]     = Padma.consnt_LA + Padma.vattu_MA;
AAADurgax.toPadma[AAADurgax.conjct_LP]     = Padma.consnt_LA + Padma.vattu_PA;
AAADurgax.toPadma[AAADurgax.conjct_LPH]    = Padma.consnt_LA + Padma.vattu_PHA;
AAADurgax.toPadma[AAADurgax.conjct_LTT]    = Padma.consnt_LA + Padma.vattu_TTA;
AAADurgax.toPadma[AAADurgax.conjct_MB]     = Padma.consnt_MA + Padma.vattu_BA;
AAADurgax.toPadma[AAADurgax.conjct_MBH]    = Padma.consnt_MA + Padma.vattu_BHA;
AAADurgax.toPadma[AAADurgax.conjct_BBH]    = Padma.consnt_BA + Padma.vattu_BHA;
AAADurgax.toPadma[AAADurgax.conjct_ML]     = Padma.consnt_MA + Padma.vattu_LA;
AAADurgax.toPadma[AAADurgax.conjct_MM]     = Padma.consnt_MA + Padma.vattu_MA;
AAADurgax.toPadma[AAADurgax.conjct_MN]     = Padma.consnt_MA + Padma.vattu_NA;
AAADurgax.toPadma[AAADurgax.conjct_MP]     = Padma.consnt_MA + Padma.vattu_PA;
AAADurgax.toPadma[AAADurgax.conjct_MPR_1]  = Padma.consnt_MA + Padma.vattu_PA + Padma.vattu_RA;
AAADurgax.toPadma[AAADurgax.conjct_MPR_2]  = Padma.consnt_MA + Padma.vattu_PA + Padma.vattu_RA;
AAADurgax.toPadma[AAADurgax.conjct_MR]    = Padma.consnt_MA + Padma.vattu_RA;
AAADurgax.toPadma[AAADurgax.conjct_NB]    = Padma.consnt_NA + Padma.vattu_BA;
AAADurgax.toPadma[AAADurgax.conjct_NGA_GH] = Padma.consnt_NGA + Padma.vattu_GHA;
AAADurgax.toPadma[AAADurgax.conjct_NGA_KH] = Padma.consnt_NGA + Padma.vattu_KHA;
AAADurgax.toPadma[AAADurgax.conjct_SHM]    = Padma.consnt_SHA + Padma.vattu_MA;
AAADurgax.toPadma[AAADurgax.conjct_SHN]    = Padma.consnt_SHA + Padma.vattu_NA;
AAADurgax.toPadma[AAADurgax.conjct_SHL]    = Padma.consnt_SHA + Padma.vattu_LA;
AAADurgax.toPadma[AAADurgax.conjct_HL]     = Padma.consnt_HA + Padma.vattu_LA;
AAADurgax.toPadma[AAADurgax.conjct_NNB]    = Padma.consnt_NNA + Padma.vattu_BA;
AAADurgax.toPadma[AAADurgax.conjct_NDD]    = Padma.consnt_NA + Padma.vattu_DDA;
AAADurgax.toPadma[AAADurgax.conjct_NNDDR]  = Padma.consnt_NNA + Padma.vattu_DDA + Padma.vattu_RA;
AAADurgax.toPadma[AAADurgax.conjct_NNM]    = Padma.consnt_NNA + Padma.vattu_MA;
AAADurgax.toPadma[AAADurgax.conjct_NTB]    = Padma.consnt_NA + Padma.vattu_TA + Padma.vattu_BA;
AAADurgax.toPadma[AAADurgax.conjct_NTU]    = Padma.consnt_NA + Padma.vattu_TA + Padma.vowelsn_U;
AAADurgax.toPadma[AAADurgax.conjct_NS]     = Padma.consnt_NA + Padma.vattu_SA;
AAADurgax.toPadma[AAADurgax.conjct_NT]     = Padma.consnt_NA + Padma.vattu_TA;
AAADurgax.toPadma[AAADurgax.conjct_NYA_C]  = Padma.consnt_NYA + Padma.vattu_CA;
AAADurgax.toPadma[AAADurgax.conjct_NYA_CH] = Padma.consnt_NYA + Padma.vattu_CHA;
AAADurgax.toPadma[AAADurgax.conjct_PHL]    = Padma.consnt_PHA + Padma.vattu_LA;
AAADurgax.toPadma[AAADurgax.conjct_PHR]    = Padma.consnt_PHA + Padma.vattu_RA;
AAADurgax.toPadma[AAADurgax.conjct_LL]     = Padma.consnt_LA + Padma.vattu_LA;
AAADurgax.toPadma[AAADurgax.conjct_PT_1]   = Padma.consnt_PA + Padma.vattu_TA;
AAADurgax.toPadma[AAADurgax.conjct_PT_2]   = Padma.consnt_PA + Padma.vattu_TA;
AAADurgax.toPadma[AAADurgax.conjct_SB]     = Padma.consnt_SA + Padma.vattu_BA;
AAADurgax.toPadma[AAADurgax.conjct_SHB]    = Padma.consnt_SHA + Padma.vattu_BA;
AAADurgax.toPadma[AAADurgax.conjct_SHC]    = Padma.consnt_SHA + Padma.vattu_CA;
AAADurgax.toPadma[AAADurgax.conjct_SK]     = Padma.consnt_SA + Padma.vattu_KA;
AAADurgax.toPadma[AAADurgax.conjct_SKR]    = Padma.consnt_SA + Padma.vattu_KA + Padma.vattu_RA;
AAADurgax.toPadma[AAADurgax.conjct_SL]     = Padma.consnt_SA + Padma.vattu_LA;
AAADurgax.toPadma[AAADurgax.conjct_SM]     = Padma.consnt_SA + Padma.vattu_MA;
AAADurgax.toPadma[AAADurgax.conjct_SN]     = Padma.consnt_SA + Padma.vattu_NA;
AAADurgax.toPadma[AAADurgax.conjct_SP]     = Padma.consnt_SA + Padma.vattu_PA;
AAADurgax.toPadma[AAADurgax.conjct_SSPH]   = Padma.consnt_SSA + Padma.vattu_PHA;
AAADurgax.toPadma[AAADurgax.conjct_SSP]    = Padma.consnt_SSA + Padma.vattu_PA;
AAADurgax.toPadma[AAADurgax.conjct_SPH]    = Padma.consnt_SA + Padma.vattu_PHA;
AAADurgax.toPadma[AAADurgax.conjct_SR]     = Padma.consnt_SA + Padma.vattu_RA;
AAADurgax.toPadma[AAADurgax.conjct_SHRU]   = Padma.consnt_SHA + Padma.vattu_RA + Padma.vowelsn_U;
AAADurgax.toPadma[AAADurgax.conjct_SHRUU]  = Padma.consnt_SHA + Padma.vattu_RA + Padma.vowelsn_UU;
AAADurgax.toPadma[AAADurgax.conjct_PRU]    = Padma.consnt_PA + Padma.vattu_RA + Padma.vowelsn_U;
AAADurgax.toPadma[AAADurgax.conjct_SSB]    = Padma.consnt_SSA + Padma.vattu_BA;
AAADurgax.toPadma[AAADurgax.conjct_SSK]    = Padma.consnt_SSA + Padma.vattu_KA;
AAADurgax.toPadma[AAADurgax.conjct_SSKR]    = Padma.consnt_SSA + Padma.vattu_KA + Padma.vattu_RA;
AAADurgax.toPadma[AAADurgax.conjct_SSM]    = Padma.consnt_SSA + Padma.vattu_MA;
AAADurgax.toPadma[AAADurgax.conjct_SSNN]   = Padma.consnt_SSA + Padma.vattu_NNA;
AAADurgax.toPadma[AAADurgax.conjct_SSP]    = Padma.consnt_SSA + Padma.vattu_PA;
AAADurgax.toPadma[AAADurgax.conjct_SSTTH]  = Padma.consnt_SSA + Padma.vattu_TTHA;
AAADurgax.toPadma[AAADurgax.conjct_SSPR]   = Padma.consnt_SSA + Padma.vattu_PA + Padma.vattu_RA;
AAADurgax.toPadma[AAADurgax.conjct_SSTT]   = Padma.consnt_SSA + Padma.vattu_TTA;
AAADurgax.toPadma[AAADurgax.conjct_SSTTH]  = Padma.consnt_SSA + Padma.vattu_TTHA;
AAADurgax.toPadma[AAADurgax.conjct_STH]    = Padma.consnt_SA + Padma.vattu_THA;
AAADurgax.toPadma[AAADurgax.conjct_STR]    = Padma.consnt_SA + Padma.vattu_TA + Padma.vattu_RA;
AAADurgax.toPadma[AAADurgax.conjct_ST]     = Padma.consnt_SA + Padma.vattu_TA;
AAADurgax.toPadma[AAADurgax.conjct_STT]    = Padma.consnt_SA + Padma.vattu_TTA;
AAADurgax.toPadma[AAADurgax.conjct_STU]    = Padma.consnt_SA + Padma.vattu_TA + Padma.vowelsn_U;
AAADurgax.toPadma[AAADurgax.conjct_STB]    = Padma.consnt_SA + Padma.vattu_TA + Padma.vattu_BA;
AAADurgax.toPadma[AAADurgax.conjct_STH]    = Padma.consnt_SA + Padma.vattu_THA;
AAADurgax.toPadma[AAADurgax.conjct_TB_1]   = Padma.consnt_TA + Padma.vattu_BA;
AAADurgax.toPadma[AAADurgax.conjct_TB_2]   = Padma.consnt_TA + Padma.vattu_BA;
AAADurgax.toPadma[AAADurgax.conjct_THR]    = Padma.consnt_THA + Padma.vattu_RA;
AAADurgax.toPadma[AAADurgax.conjct_TTR]    = Padma.consnt_TTA + Padma.vattu_RA;
AAADurgax.toPadma[AAADurgax.conjct_T_TB]   = Padma.consnt_TA + Padma.vattu_TA + Padma.vattu_BA;
AAADurgax.toPadma[AAADurgax.conjct_T_TH]   = Padma.consnt_TA + Padma.vattu_THA;
AAADurgax.toPadma[AAADurgax.conjct_TTTT]   = Padma.consnt_TTA + Padma.vattu_TTA;


/* ABP: Conjunct definition ends here */


AAADurgax.toPadma[AAADurgax.combo_GU]      = Padma.consnt_GA + Padma.vowelsn_U;
AAADurgax.toPadma[AAADurgax.combo_SHU]     = Padma.consnt_SHA + Padma.vowelsn_U;
AAADurgax.toPadma[AAADurgax.combo_HU]      = Padma.consnt_HA + Padma.vowelsn_U;
AAADurgax.toPadma[AAADurgax.combo_HR]      = Padma.consnt_HA + Padma.vowelsn_R;
AAADurgax.toPadma[AAADurgax.conjct_KSSM]   = Padma.consnt_KA + Padma.vattu_SSA + Padma.vattu_MA;
AAADurgax.toPadma[AAADurgax.conjct_NGA_KSS]= Padma.consnt_NGA + Padma.vattu_KA + Padma.vattu_SSA;
AAADurgax.toPadma[AAADurgax.conjct_CCHR]   = Padma.consnt_CA + Padma.vattu_CHA + Padma.vattu_RA;
AAADurgax.toPadma[AAADurgax.conjct_JJH]    = Padma.consnt_JA + Padma.vattu_JHA;
AAADurgax.toPadma[AAADurgax.conjct_NYA_JH] = Padma.consnt_NYA + Padma.vattu_JHA;


AAADurgax.prefixList = new Object();

AAADurgax.suffixList = new Object();
AAADurgax.suffixList[AAADurgax.halffm_RA]  = true;

AAADurgax.redundantList = new Object();
//AAADurgax.redundantList[AAADurgax.misc_UNKNOWN_1] = true;
//AAADurgax.redundantList[AAADurgax.misc_UNKNOWN_2] = true;

AAADurgax.overloadList = new Object();



