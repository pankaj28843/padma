//$Id: AabpBengalix.js,v 1.2 2008/06/16 15:43:00 vnagarjuna Exp $

/* Copyright 2006 Nagarjuna Venna <vnagarjuna@yahoo.com> */
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


function Aabpbengalix()
{
}

//The interface every dynamic font encoding should implement
Aabpbengalix.maxLookupLen = 3;
Aabpbengalix.fontFace     = "Aabpbengalix";
Aabpbengalix.displayName  = "Aabpbengalix";
Aabpbengalix.script       = Padma.script_BENGALI;
Aabpbengalix.hasSuffixes  = true;

Aabpbengalix.lookup = function (str) 
{
    return Aabpbengalix.toPadma[str];
}

Aabpbengalix.isPrefixSymbol = function (str)
{
    return Aabpbengalix.prefixList[str] != null;
}

Aabpbengalix.isSuffixSymbol = function (str)
{
    return Aabpbengalix.suffixList[str] != null;
}

Aabpbengalix.isOverloaded = function (str)
{
    return Aabpbengalix.overloadList[str] != null;
}

Aabpbengalix.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return Aabpbengali.handleTwoPartVowelSigns(sign1, sign2);
}

Aabpbengalix.isRedundant = function (str)
{
    return Aabpbengalix.redundantList[str] != null;
}


Aabpbengalix.misc_UNKNOWN_1     = "\u00DE";
Aabpbengalix.misc_UNKNOWN_2     = "\u00FE";

/* All map from Aabpbengalix */
/* ABP: start here */

Aabpbengalix.vowelsn_U_1    = "\u00C0";
Aabpbengalix.vowelsn_U_2    = "\u00C1";
Aabpbengalix.vowelsn_U_3    = "\u00C2";
Aabpbengalix.vowelsn_UU_1   = "\u00C3";
Aabpbengalix.visarga	    = "\u00C6";
Aabpbengalix.vowelsn_R_1    = "\u00C8";
Aabpbengalix.vowelsn_UU_2   = "\u00CA";
Aabpbengalix.vowelsn_UU_3   = "\u00CB";
Aabpbengalix.vowelsn_U_4    = "\u00CC";
Aabpbengalix.vowelsn_U_5    = "\u00CD";
Aabpbengalix.vowelsn_UU_4   = "\u00CE";
Aabpbengalix.vowelsn_R_2    = "\u00CF";
Aabpbengalix.vowelsn_R_3    = "\u00D2";
Aabpbengalix.vowelsn_UU_5   = "\u00D3";
Aabpbengalix.vowelsn_R_4    = "\u00D4";
Aabpbengalix.vowelsn_UU_6   = "\u00D5";
Aabpbengalix.anusvara       = "\u00D8";
Aabpbengalix.vowelsn_R_5    = "\u00D9";
Aabpbengalix.vowelsn_U_6    = "\u00DA";
Aabpbengalix.vowelsn_UU_7   = "\u00DB";

Aabpbengalix.conjct_DDR     = "\u0021";
Aabpbengalix.conjct_D_DB    = "\u0023";
Aabpbengalix.conjct_D_DH    = "\u0024";
Aabpbengalix.conjct_D_DHB   = "\u0025";
Aabpbengalix.conjct_DB      = "\u0026";
Aabpbengalix.halffm_RA      = "\u0027";
Aabpbengalix.conjct_DR      = "\u0028";
Aabpbengalix.conjct_DHB     = "\u0029";
Aabpbengalix.conjct_NTT     = "\u002A";
Aabpbengalix.conjct_NTTR    = "\u002B";

Aabpbengalix.conjct_NTB     = "\u002F";
Aabpbengalix.conjct_NTR_1   = "\u0030";
Aabpbengalix.conjct_NTH_1   = "\u0031";
Aabpbengalix.conjct_ND      = "\u0032";
Aabpbengalix.conjct_NDH_1   = "\u0033";
Aabpbengalix.conjct_NDR     = "\u0034";
Aabpbengalix.conjct_NDB     = "\u0035";
Aabpbengalix.conjct_NDHR_1  = "\u0036";
Aabpbengalix.conjct_NN      = "\u0037";
Aabpbengalix.conjct_NM      = "\u0038";
Aabpbengalix.conjct_PTT     = "\u0039";
Aabpbengalix.conjct_PS      = "\u003A";
Aabpbengalix.conjct_PP      = "\u003B";
Aabpbengalix.conjct_PR      = "\u003C";
Aabpbengalix.conjct_PL      = "\u003D";
Aabpbengalix.conjct_PHR     = "\u003E";
Aabpbengalix.conjct_PHL     = "\u003F";
Aabpbengalix.conjct_BD      = "\u0040";
Aabpbengalix.conjct_BDH     = "\u0041";
Aabpbengalix.conjct_BL      = "\u0042";
Aabpbengalix.conjct_BHR     = "\u0043";
Aabpbengalix.conjct_MP      = "\u0044";
Aabpbengalix.conjct_MPR     = "\u0045";
Aabpbengalix.conjct_MPH     = "\u0046";
Aabpbengalix.conjct_MB      = "\u0047";
Aabpbengalix.conjct_MBH     = "\u0048";
Aabpbengalix.conjct_MM      = "\u0049";
Aabpbengalix.conjct_MR      = "\u004A";
Aabpbengalix.conjct_ML      = "\u004B";

Aabpbengalix.conjct_KHR     = "\u004C";

Aabpbengalix.conjct_LK      = "\u004D";
Aabpbengalix.conjct_LL      = "\u004E";
Aabpbengalix.conjct_LP      = "\u004F";
Aabpbengalix.conjct_MN      = "\u0050";

Aabpbengalix.conjct_GHN     = "\u0051";

Aabpbengalix.conjct_SR      = "\u0052";
Aabpbengalix.conjct_SB      = "\u0053";
Aabpbengalix.conjct_SM      = "\u0054";
Aabpbengalix.conjct_ST      = "\u0055";
Aabpbengalix.conjct_STR     = "\u0056";
Aabpbengalix.conjct_SSTTR_1 = "\u0057";
Aabpbengalix.conjct_SSNN    = "\u0058";
Aabpbengalix.conjct_SSM     = "\u0059";
Aabpbengalix.conjct_SHC     = "\u005A";
Aabpbengalix.conjct_C_NYA   = "\u005B";
Aabpbengalix.conjct_HN      = "\u005C";
Aabpbengalix.conjct_HM      = "\u005D";

Aabpbengalix.conjct_SN      = "\u005E";

Aabpbengalix.combo_HR       = "\u005F"; //combo
Aabpbengalix.combo_GU       = "\u0060"; //combo

Aabpbengalix.conjct_LB      = "\u0061";
Aabpbengalix.conjct_STU     = "\u0062";

Aabpbengalix.combo_SHU      = "\u0063"; //combo
Aabpbengalix.combo_HU       = "\u0064"; //combo

Aabpbengalix.conjct_SHRU    = "\u0065";

Aabpbengalix.conjct_KTT     = "\u0066";
Aabpbengalix.conjct_KM      = "\u0067";
Aabpbengalix.conjct_KN      = "\u0068";
Aabpbengalix.conjct_KS      = "\u0069";
Aabpbengalix.conjct_KSSNN   = "\u006A";
Aabpbengalix.conjct_GG      = "\u006B";
Aabpbengalix.conjct_GB      = "\u006C";
Aabpbengalix.conjct_GHR     = "\u006D";
Aabpbengalix.conjct_NGA_KH  = "\u006E";
Aabpbengalix.conjct_NGA_GH  = "\u006F";
Aabpbengalix.conjct_C_CHB   = "\u0070";
Aabpbengalix.conjct_CHR     = "\u0071";

Aabpbengalix.conjct_JR      = "\u0072";
Aabpbengalix.conjct_JB      = "\u0073";

Aabpbengalix.conjct_NYA_CH  = "\u0074";

Aabpbengalix.conjct_NNDDR   = "\u0075";
Aabpbengalix.conjct_NNB     = "\u0076";
Aabpbengalix.conjct_NNM     = "\u0077";

Aabpbengalix.conjct_T_TB     = "\u0078";
Aabpbengalix.conjct_DBH     = "\u0079";
Aabpbengalix.conjct_DHN     = "\u007A";
Aabpbengalix.conjct_DHR     = "\u007B";

Aabpbengalix.conjct_NYA_C   = "\u007C";

Aabpbengalix.conjct_SSP     = "\u007D";
Aabpbengalix.conjct_NB      = "\u007E";

Aabpbengalix.conjct_NDH_2   = "\u00A1";
Aabpbengalix.conjct_TTR     = "\u00A2";
Aabpbengalix.conjct_PT      = "\u00A3";

Aabpbengalix.conjct_NDHR_2  = "\u00A5";

Aabpbengalix.conjct_TB      = "\u00A7";

Aabpbengalix.conjct_NTU     = "\u00A9";

Aabpbengalix.consnt_KHANDA_TA = "\u00AB";

Aabpbengalix.conjct_SHB     = "\u00AE";

Aabpbengalix.conjct_D_D     = "\u00B1";

Aabpbengalix.conjct_LM      = "\u00B5";

Aabpbengalix.conjct_NTH_2   = "\u00BF";

Aabpbengalix.conjct_NS      = "\u00C4";
Aabpbengalix.conjct_BJ      = "\u00C5";

Aabpbengalix.conjct_BB      = "\u00C7";

Aabpbengalix.conjct_BR      = "\u00C9";

Aabpbengalix.conjct_LTT     = "\u00D1";

Aabpbengalix.conjct_LG      = "\u00D6";

Aabpbengalix.conjct_SK      = "\u00DC";

Aabpbengalix.conjct_LPH     = "\u00DF";
Aabpbengalix.conjct_SL      = "\u00E0";
Aabpbengalix.conjct_SKR     = "\u00E1";

Aabpbengalix.conjct_DBHR    = "\u00E2";

Aabpbengalix.conjct_NNTTH_1 = "\u00E3";
Aabpbengalix.conjct_NNDD    = "\u00E4";
Aabpbengalix.conjct_NT      = "\u00E5";
Aabpbengalix.conjct_NTR_2   = "\u00E6";

Aabpbengalix.conjct_SSB     = "\u00E7";
Aabpbengalix.conjct_SP      = "\u00E8";
Aabpbengalix.conjct_STB     = "\u00E9";
Aabpbengalix.conjct_SPH     = "\u00EA";
Aabpbengalix.conjct_SSTTR_2 = "\u00EB";
Aabpbengalix.conjct_SSKR    = "\u00EC";
Aabpbengalix.conjct_SSK     = "\u00ED";
Aabpbengalix.conjct_SSTT    = "\u00EE";
Aabpbengalix.conjct_SSTTH   = "\u00EF";

Aabpbengalix.conjct_SSPR    = "\u00F1";

Aabpbengalix.conjct_STT     = "\u00F2";

Aabpbengalix.conjct_NGA_M   = "\u00F3";

Aabpbengalix.conjct_STH     = "\u00F4";

Aabpbengalix.conjct_KB      = "\u00F5";

Aabpbengalix.conjct_THR     = "\u00F6";

Aabpbengalix.conjct_TTTT    = "\u00F9";

Aabpbengalix.conjct_JJB     = "\u00FA";

Aabpbengalix.conjct_NNTTH_2 = "\u00FB";

Aabpbengalix.conjct_T_TH     = "\u00FC";

/* ABP: end here */


Aabpbengalix.toPadma = new Object();

Aabpbengalix.toPadma[Aabpbengalix.vowelsn_U_1] = Padma.vowelsn_U;
Aabpbengalix.toPadma[Aabpbengalix.vowelsn_U_2] = Padma.vowelsn_U;
Aabpbengalix.toPadma[Aabpbengalix.vowelsn_U_3] = Padma.vowelsn_U;
Aabpbengalix.toPadma[Aabpbengalix.vowelsn_U_4] = Padma.vowelsn_U;
Aabpbengalix.toPadma[Aabpbengalix.vowelsn_U_5] = Padma.vowelsn_U;
Aabpbengalix.toPadma[Aabpbengalix.vowelsn_U_6] = Padma.vowelsn_U;
Aabpbengalix.toPadma[Aabpbengalix.vowelsn_UU_1] = Padma.vowelsn_UU;
Aabpbengalix.toPadma[Aabpbengalix.vowelsn_UU_2] = Padma.vowelsn_UU;
Aabpbengalix.toPadma[Aabpbengalix.vowelsn_UU_3] = Padma.vowelsn_UU;
Aabpbengalix.toPadma[Aabpbengalix.vowelsn_UU_4] = Padma.vowelsn_UU;
Aabpbengalix.toPadma[Aabpbengalix.vowelsn_UU_5] = Padma.vowelsn_UU;
Aabpbengalix.toPadma[Aabpbengalix.vowelsn_UU_6] = Padma.vowelsn_UU;
Aabpbengalix.toPadma[Aabpbengalix.vowelsn_UU_7] = Padma.vowelsn_UU;
Aabpbengalix.toPadma[Aabpbengalix.vowelsn_R_1]  = Padma.vowelsn_R;
Aabpbengalix.toPadma[Aabpbengalix.vowelsn_R_2]  = Padma.vowelsn_R;
Aabpbengalix.toPadma[Aabpbengalix.vowelsn_R_3]  = Padma.vowelsn_R;
Aabpbengalix.toPadma[Aabpbengalix.vowelsn_R_4]  = Padma.vowelsn_R;
Aabpbengalix.toPadma[Aabpbengalix.vowelsn_R_5]  = Padma.vowelsn_R;
Aabpbengalix.toPadma[Aabpbengalix.anusvara]     = Padma.anusvara;
Aabpbengalix.toPadma[Aabpbengalix.visarga]      = Padma.visarga;

/* ABP: Conjunct definition starts here */

//These have been defined multiple times
Aabpbengalix.toPadma[Aabpbengalix.conjct_NDHR_1]   = Padma.consnt_NA + Padma.vattu_DHA + Padma.vattu_RA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_NDHR_2]   = Padma.consnt_NA + Padma.vattu_DHA + Padma.vattu_RA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_NDH_1]    = Padma.consnt_NA + Padma.vattu_DHA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_NDH_2]    = Padma.consnt_NA + Padma.vattu_DHA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_NNTTH_1]  = Padma.consnt_NNA + Padma.vattu_TTHA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_NNTTH_2]  = Padma.consnt_NNA + Padma.vattu_TTHA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_NTH_1]    = Padma.consnt_NA + Padma.vattu_THA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_NTH_2]    = Padma.consnt_NA + Padma.vattu_THA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_NTR_1]    = Padma.consnt_NA + Padma.vattu_TA + Padma.vattu_RA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_NTR_2]    = Padma.consnt_NA + Padma.vattu_TA + Padma.vattu_RA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_SSTTR_1]  = Padma.consnt_SSA + Padma.vattu_TTA + Padma.vattu_RA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_SSTTR_2]  = Padma.consnt_SSA + Padma.vattu_TTA + Padma.vattu_RA;

//General

Aabpbengalix.toPadma[Aabpbengalix.conjct_BB]     = Padma.consnt_BA + Padma.vattu_BA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_BD]     = Padma.consnt_BA + Padma.vattu_DA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_BDH]    = Padma.consnt_BA + Padma.vattu_DHA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_BHR]    = Padma.consnt_BHA + Padma.vattu_RA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_BJ]     = Padma.consnt_BA + Padma.vattu_JA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_BL]     = Padma.consnt_BA + Padma.vattu_LA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_BR]     = Padma.consnt_BA + Padma.vattu_RA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_C_CHB]  = Padma.consnt_CA + Padma.vattu_CHA + Padma.vattu_BA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_C_NYA]  = Padma.consnt_CA + Padma.vattu_NYA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_DB]     = Padma.consnt_DA + Padma.vattu_BA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_DBH]    = Padma.consnt_DA + Padma.vattu_BHA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_DBHR]   = Padma.consnt_DA + Padma.vattu_BHA + Padma.vattu_RA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_DDR]    = Padma.consnt_DDA + Padma.vattu_RA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_DHB]    = Padma.consnt_DHA + Padma.vattu_BA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_DHN]    = Padma.consnt_DHA + Padma.vattu_NA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_DHR]    = Padma.consnt_DHA + Padma.vattu_RA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_DR]     = Padma.consnt_DA + Padma.vattu_RA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_D_D]     = Padma.consnt_DA + Padma.vattu_DA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_D_DB]    = Padma.consnt_DA + Padma.vattu_DA + Padma.vattu_BA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_D_DH]   = Padma.consnt_DA + Padma.vattu_DHA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_D_DHB]  = Padma.consnt_DA + Padma.vattu_DHA + Padma.vattu_BA;

Aabpbengalix.toPadma[Aabpbengalix.conjct_DHB]    = Padma.consnt_DHA + Padma.vattu_BA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_DR]     = Padma.consnt_DA + Padma.vattu_RA;

Aabpbengalix.toPadma[Aabpbengalix.conjct_GB]     = Padma.consnt_GA + Padma.vattu_BA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_GG]     = Padma.consnt_GA + Padma.vattu_GA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_GHN]    = Padma.consnt_GHA + Padma.vattu_NA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_GHR]    = Padma.consnt_GHA + Padma.vattu_RA;

Aabpbengalix.toPadma[Aabpbengalix.conjct_HM]     = Padma.consnt_HA + Padma.vattu_MA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_HN]     = Padma.consnt_HA + Padma.vattu_NA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_JB]     = Padma.consnt_JA + Padma.vattu_BA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_JJB]    = Padma.consnt_JA + Padma.vattu_JA + Padma.vattu_BA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_JR]     = Padma.consnt_JA + Padma.vattu_RA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_KB]     = Padma.consnt_KA + Padma.vattu_BA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_KHR]    = Padma.consnt_KHA + Padma.vattu_RA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_KM]     = Padma.consnt_KA + Padma.vattu_MA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_KN]     = Padma.consnt_KA + Padma.vattu_NA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_KS]     = Padma.consnt_KA + Padma.vattu_SA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_KSSNN]  = Padma.consnt_KA + Padma.vattu_SSA + Padma.vattu_NA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_KTT]    = Padma.consnt_KA + Padma.vattu_TTA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_LB]     = Padma.consnt_LA + Padma.vattu_BA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_LG]     = Padma.consnt_LA + Padma.vattu_GA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_LK]     = Padma.consnt_LA + Padma.vattu_KA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_LL]     = Padma.consnt_LA + Padma.vattu_LA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_LM]     = Padma.consnt_LA + Padma.vattu_MA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_LP]     = Padma.consnt_LA + Padma.vattu_PA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_LPH]    = Padma.consnt_LA + Padma.vattu_PHA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_LTT]    = Padma.consnt_LA + Padma.vattu_TTA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_MB]     = Padma.consnt_MA + Padma.vattu_BA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_MBH]    = Padma.consnt_MA + Padma.vattu_BHA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_ML]     = Padma.consnt_MA + Padma.vattu_LA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_MM]     = Padma.consnt_MA + Padma.vattu_MA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_MN]     = Padma.consnt_MA + Padma.vattu_NA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_MP]     = Padma.consnt_MA + Padma.vattu_PA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_MPH]    = Padma.consnt_MA + Padma.vattu_PHA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_MPR]    = Padma.consnt_MA + Padma.vattu_PA + Padma.vattu_RA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_MR]    = Padma.consnt_MA + Padma.vattu_RA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_NB]    = Padma.consnt_NA + Padma.vattu_BA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_ND]    = Padma.consnt_NA + Padma.vattu_DA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_NDB]    = Padma.consnt_NA + Padma.vattu_DA + Padma.vattu_BA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_NDR]    = Padma.consnt_NA + Padma.vattu_DA + Padma.vattu_RA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_ND]     = Padma.consnt_NA + Padma.vattu_DA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_NGA_GH] = Padma.consnt_NGA + Padma.vattu_GHA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_NGA_KH] = Padma.consnt_NGA + Padma.vattu_KHA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_NM]     = Padma.consnt_NA + Padma.vattu_MA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_NN]     = Padma.consnt_NA + Padma.vattu_NA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_NNB]    = Padma.consnt_NNA + Padma.vattu_BA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_NNDD]   = Padma.consnt_NNA + Padma.vattu_DDA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_NNDDR]  = Padma.consnt_NNA + Padma.vattu_DDA + Padma.vattu_RA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_NNM]    = Padma.consnt_NNA + Padma.vattu_MA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_NTB]    = Padma.consnt_NA + Padma.vattu_TA + Padma.vattu_BA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_NTTR]   = Padma.consnt_NA + Padma.vattu_TTA + Padma.vattu_RA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_NTT]    = Padma.consnt_NA + Padma.vattu_TTA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_NTU]    = Padma.consnt_NA + Padma.vattu_TA + Padma.vowelsn_U;
Aabpbengalix.toPadma[Aabpbengalix.conjct_NS]     = Padma.consnt_NA + Padma.vattu_SA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_NT]     = Padma.consnt_NA + Padma.vattu_TA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_NYA_C]  = Padma.consnt_NYA + Padma.vattu_CA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_NYA_CH] = Padma.consnt_NYA + Padma.vattu_CHA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_PHL]    = Padma.consnt_PHA + Padma.vattu_LA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_PHR]    = Padma.consnt_PHA + Padma.vattu_RA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_PL]     = Padma.consnt_PA + Padma.vattu_LA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_PP]     = Padma.consnt_PA + Padma.vattu_PA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_PR]     = Padma.consnt_PA + Padma.vattu_RA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_PS]     = Padma.consnt_PA + Padma.vattu_SA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_PTT]    = Padma.consnt_PA + Padma.vattu_TTA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_PT]     = Padma.consnt_PA + Padma.vattu_TA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_SB]     = Padma.consnt_SA + Padma.vattu_BA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_SHB]    = Padma.consnt_SHA + Padma.vattu_BA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_SHC]    = Padma.consnt_SHA + Padma.vattu_CA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_SK]     = Padma.consnt_SA + Padma.vattu_KA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_SKR]    = Padma.consnt_SA + Padma.vattu_KA + Padma.vattu_RA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_SL]     = Padma.consnt_SA + Padma.vattu_LA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_SM]     = Padma.consnt_SA + Padma.vattu_MA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_SN]     = Padma.consnt_SA + Padma.vattu_NA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_SP]     = Padma.consnt_SA + Padma.vattu_PA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_SPH]    = Padma.consnt_SA + Padma.vattu_PHA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_SR]     = Padma.consnt_SA + Padma.vattu_RA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_SHRU]   = Padma.consnt_SHA + Padma.vattu_RA + Padma.vowelsn_U;
Aabpbengalix.toPadma[Aabpbengalix.conjct_SSB]    = Padma.consnt_SSA + Padma.vattu_BA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_SSK]    = Padma.consnt_SSA + Padma.vattu_KA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_SSKR]    = Padma.consnt_SSA + Padma.vattu_KA + Padma.vattu_RA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_SSM]    = Padma.consnt_SSA + Padma.vattu_MA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_SSNN]   = Padma.consnt_SSA + Padma.vattu_NNA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_SSP]    = Padma.consnt_SSA + Padma.vattu_PA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_SSTTH]  = Padma.consnt_SSA + Padma.vattu_TTHA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_SSPR]   = Padma.consnt_SSA + Padma.vattu_PA + Padma.vattu_RA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_SSTT]   = Padma.consnt_SSA + Padma.vattu_TTA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_SSTTH]  = Padma.consnt_SSA + Padma.vattu_TTHA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_STH]    = Padma.consnt_SA + Padma.vattu_THA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_STR]    = Padma.consnt_SA + Padma.vattu_TA + Padma.vattu_RA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_ST]     = Padma.consnt_SA + Padma.vattu_TA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_STT]    = Padma.consnt_SA + Padma.vattu_TTA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_STU]    = Padma.consnt_SA + Padma.vattu_TA + Padma.vowelsn_U;
Aabpbengalix.toPadma[Aabpbengalix.conjct_STB]    = Padma.consnt_SA + Padma.vattu_TA + Padma.vattu_BA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_STH]    = Padma.consnt_SA + Padma.vattu_THA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_TB]     = Padma.consnt_TA + Padma.vattu_BA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_THR]    = Padma.consnt_THA + Padma.vattu_RA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_TTR]    = Padma.consnt_TTA + Padma.vattu_RA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_T_TB]   = Padma.consnt_TA + Padma.vattu_TA + Padma.vattu_BA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_T_TH]   = Padma.consnt_TA + Padma.vattu_THA;
Aabpbengalix.toPadma[Aabpbengalix.conjct_TTTT]   = Padma.consnt_TTA + Padma.vattu_TTA;


/* ABP: Conjunct definition ends here */


Aabpbengalix.toPadma[Aabpbengalix.combo_GU]      = Padma.consnt_GA + Padma.vowelsn_U;
Aabpbengalix.toPadma[Aabpbengalix.combo_SHU]     = Padma.consnt_SHA + Padma.vowelsn_U;
Aabpbengalix.toPadma[Aabpbengalix.combo_HU]      = Padma.consnt_HA + Padma.vowelsn_U;
Aabpbengalix.toPadma[Aabpbengalix.combo_HR]      = Padma.consnt_HA + Padma.vowelsn_R;


Aabpbengalix.prefixList = new Object();

Aabpbengalix.suffixList = new Object();
Aabpbengalix.suffixList[Aabpbengalix.halffm_RA]  = true;

Aabpbengalix.redundantList = new Object();
Aabpbengalix.redundantList[Aabpbengalix.misc_UNKNOWN_1] = true;
Aabpbengalix.redundantList[Aabpbengalix.misc_UNKNOWN_2] = true;

Aabpbengalix.overloadList = new Object();




/*
// Preprocessings
Aabpbengalix.preprocessMessage = function (input)
{
    var output = "", next = "" , last = null;
    //1.
    for(var i = 0; i < input.length; ++i) {

        var cur = input.charAt(i);
        if ( next != "" ){
        	cur = next; 
        	next = "";
	}
	else if ( cur == Aabpbengalix.vowelsn_EE_1 || cur == Aabpbengalix.vowelsn_EE_2 ){
        	next = cur;
		cur  = input.charAt(i+1);
	}

            output += last = cur;
    }

    //2.
    return output;
}

*/
