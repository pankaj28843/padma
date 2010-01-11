/* ***** BEGIN LICENSE BLOCK *****
 *
 *  Copyright (C) 2009 Harshita Vani <harshita@atc.tcs.com>
 *
 *  This program is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.

 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program; if not, write to the Free Software
 *  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 *
 * ***** END LICENSE BLOCK ***** */

//MillenniumVarunWeb Devanagari
function MillenniumVarunWeb()
{
}

//The interface every dynamic font encoding should implement
MillenniumVarunWeb.maxLookupLen = 4;
MillenniumVarunWeb.fontFace     = "MillenniumVarunWeb";
MillenniumVarunWeb.displayName  = "MillenniumVarunWeb";
MillenniumVarunWeb.script       = Padma.script_DEVANAGARI;
MillenniumVarunWeb.hasSuffixes  = true;

MillenniumVarunWeb.lookup = function (str)
{
    return MillenniumVarunWeb.toPadma[str];
}

MillenniumVarunWeb.isPrefixSymbol = function (str)
{
    return MillenniumVarunWeb.prefixList[str] != null;
}

MillenniumVarunWeb.isSuffixSymbol = function (str)
{
    return MillenniumVarunWeb.suffixList[str] != null;
}

MillenniumVarunWeb.isOverloaded = function (str)
{
    return MillenniumVarunWeb.overloadList[str] != null;
}

MillenniumVarunWeb.handleTwoPartVowelSigns = function (sign1, sign2)
{
  /*  if ((sign1 == Padma.vowelsn_EE && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_EE))
    return Padma.vowelsn_OO;*/
    if ((sign1 == Padma.vowelsn_CDR_E && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_CDR_E))
    return Padma.vowelsn_CDR_O;
    /*if ((sign1 == Padma.vowelsn_AI && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_AI))
        return Padma.vowelsn_AU;*/
    return sign1 + sign2;
}

MillenniumVarunWeb.isRedundant = function (str)
{
    return MillenniumVarunWeb.redundantList[str] != null;
}


//Implementation details start here
//TODO:00D5,00D9,00F4,0192,02C6,02DC,2013,2014,201A,201E,2020,2021,2022,2026,007C
//Verify: 2018,2019,201C,201D,2022,2039,203A,2122

//Specials
MillenniumVarunWeb.avagraha       = "\u0065";
MillenniumVarunWeb.anusvara       = "\u0062";
MillenniumVarunWeb.candrabindu    = "\u0042";
MillenniumVarunWeb.virama         = "\u0064";
//MillenniumVarunWeb.visarga        = "\u003A";

//Vowels
MillenniumVarunWeb.vowel_A        = "\u0044\u00E7";
MillenniumVarunWeb.vowel_AA       = "\u0044\u00E7\u00E7";
MillenniumVarunWeb.vowel_I        = "\u0046";
MillenniumVarunWeb.vowel_II       = "\u0046\u0026";
MillenniumVarunWeb.vowel_U        = "\u0047";
MillenniumVarunWeb.vowel_UU       = "\u0054";
MillenniumVarunWeb.vowel_R        = "\u0024\u00E7\u002B";
MillenniumVarunWeb.vowel_EE       = "\u0053";
MillenniumVarunWeb.vowel_AI       = "\u0053\u00ED";
MillenniumVarunWeb.vowel_OO       = "\u0044\u00E7\u00F2";
MillenniumVarunWeb.vowel_AU_1     = "\u0044\u00E7\u00F3";
MillenniumVarunWeb.vowel_AU_2     = "\u0044\u00E7\u00E7\u00CC";

//Consonants
MillenniumVarunWeb.consnt_KA_1    = "\u004A\u00E7\u00C0";
MillenniumVarunWeb.consnt_KA_2    = "\u006B\u00E7\u00C0";
MillenniumVarunWeb.consnt_KHA     = "\u004B\u00E7";
MillenniumVarunWeb.consnt_GA      = "\u0069\u00E7";
MillenniumVarunWeb.consnt_GHA     = "\u0049\u00E7";
MillenniumVarunWeb.consnt_NGA     = "\u002A";

MillenniumVarunWeb.consnt_CA      = "\u00AE\u00E7";
MillenniumVarunWeb.consnt_CHA     = "\u0073";
MillenniumVarunWeb.consnt_JA      = "\u0070\u00E7";
MillenniumVarunWeb.consnt_JHA     = "\u0050\u00E7";

MillenniumVarunWeb.consnt_TTA     = "\u00EC";
MillenniumVarunWeb.consnt_TTHA_1  = "\u0022";
MillenniumVarunWeb.consnt_TTHA_2  = "\u00FE";
MillenniumVarunWeb.consnt_DDA     = "\u005B";
MillenniumVarunWeb.consnt_DDDHA   = "\u203A";
MillenniumVarunWeb.consnt_DDHA    = "\u007B";
MillenniumVarunWeb.consnt_NNA     = "\u0043\u00E7";

MillenniumVarunWeb.consnt_TA      = "\u006C\u00E7";
MillenniumVarunWeb.consnt_THA     = "\u004C\u00E7";
MillenniumVarunWeb.consnt_DA      = "\u006F";
MillenniumVarunWeb.consnt_DHA     = "\u004F\u00E7";
MillenniumVarunWeb.consnt_NA      = "\u0076\u00E7";

MillenniumVarunWeb.consnt_PA_1    = "\u0048\u00E7";
MillenniumVarunWeb.consnt_PA_2    = "\u0068\u00E7";
MillenniumVarunWeb.consnt_PHA     = "\u0048\u00E7\u00C0";
MillenniumVarunWeb.consnt_BA      = "\u0079\u00E7";
MillenniumVarunWeb.consnt_BHA     = "\u0059\u00E7";
MillenniumVarunWeb.consnt_MA      = "\u0063\u00E7";

MillenniumVarunWeb.consnt_YA_1    = "\u00AD\u00E7";
MillenniumVarunWeb.consnt_YA_2    = "\u00B3\u00E7";
MillenniumVarunWeb.consnt_YA_3    = "\u00EE\u00E7";
MillenniumVarunWeb.consnt_RA      = "\u006A";
MillenniumVarunWeb.consnt_LA_1    = "\u007D";
MillenniumVarunWeb.consnt_LA_2    = "\u0075\u00E7";
MillenniumVarunWeb.consnt_VA_1    = "\u004A\u00E7";
MillenniumVarunWeb.consnt_VA_2    = "\u006B\u00E7";
MillenniumVarunWeb.consnt_SHA_1   = "\u004D\u00E7";
MillenniumVarunWeb.consnt_SHA_2   = "\u00B5\u00E7";

MillenniumVarunWeb.consnt_SSA_1   = "\u003C\u00E7";
MillenniumVarunWeb.consnt_SSA_2   = "\u00F8\u00E7";
MillenniumVarunWeb.consnt_SA      = "\u006D\u00E7";
MillenniumVarunWeb.consnt_HA      = "\u006E";
MillenniumVarunWeb.consnt_LLA     = "\u0055";
MillenniumVarunWeb.consnt_LLLA    = "\u005D\u0055";

//Gunintamulu
MillenniumVarunWeb.vowelsn_AA     = "\u00E7";
MillenniumVarunWeb.vowelsn_I_1    = "\u00E7\u0071";
MillenniumVarunWeb.vowelsn_I_2    = "\u00E7\u00C6";
MillenniumVarunWeb.vowelsn_II_1   = "\u00E7\u00C7";
MillenniumVarunWeb.vowelsn_II_2   = "\u00BE";
MillenniumVarunWeb.vowelsn_U_1    = "\u00A7";
MillenniumVarunWeb.vowelsn_U_2    = "\u00E1";
MillenniumVarunWeb.vowelsn_U_3    = "\u2030";
MillenniumVarunWeb.vowelsn_UU_1   = "\u00D3";
MillenniumVarunWeb.vowelsn_UU_2   = "\u00E8";
MillenniumVarunWeb.vowelsn_R_1    = "\u003D";
MillenniumVarunWeb.vowelsn_R_2    = "\u00C9";
MillenniumVarunWeb.vowelsn_R_3    = "\u00E3";
MillenniumVarunWeb.vowelsn_CDR_E  = "\u0040";
MillenniumVarunWeb.vowelsn_EE     = "\u00ED";
MillenniumVarunWeb.vowelsn_AI_1   = "\u00CC";
MillenniumVarunWeb.vowelsn_AI_2   = "\u00ED\u00ED";
MillenniumVarunWeb.vowelsn_OO_1   = "\u00E7\u00ED";
MillenniumVarunWeb.vowelsn_OO_2   = "\u00F2";
MillenniumVarunWeb.vowelsn_AU     = "\u00F3";

//Matra + anusvara
MillenniumVarunWeb.vowelsn_IIM    = "\u00C4";
MillenniumVarunWeb.vowelsn_EEM    = "\u0057";
MillenniumVarunWeb.vowelsn_IM     = "\u00E7\u0045";
MillenniumVarunWeb.vowelsn_AUM    = "\u2026";
MillenniumVarunWeb.vowelsn_OM     = "\u201A";
MillenniumVarunWeb.vowelsn_ER     = "\u0192";
MillenniumVarunWeb.vowelsn_AIR    = "\u007A";
MillenniumVarunWeb.vowelsn_RIIM   = "\u00D5";

//Half Forms
MillenniumVarunWeb.halffm_KA_1    = "\u004A\u00E7\u0077";
MillenniumVarunWeb.halffm_KA_2    = "\u006B\u00E7\u0077";
MillenniumVarunWeb.halffm_KR_1    = "\u00AC\u00E7\u0077";
MillenniumVarunWeb.halffm_KR_2    = "\u00AF\u00E7\u0077";
MillenniumVarunWeb.halffm_KHA     = "\u004B";
MillenniumVarunWeb.halffm_KHHA    = "\u2122";
MillenniumVarunWeb.halffm_KHR     = "\u00B8";
MillenniumVarunWeb.halffm_GA      = "\u0069";
MillenniumVarunWeb.halffm_GR      = "\u00FB";
MillenniumVarunWeb.halffm_GHHA    = "\u0153";
MillenniumVarunWeb.halffm_GHA     = "\u0049";
MillenniumVarunWeb.halffm_NYA     = "\u005F";
MillenniumVarunWeb.halffm_NYC     = "\u0067";
MillenniumVarunWeb.halffm_NYJ     = "\u00A1";
MillenniumVarunWeb.halffm_CA      = "\u00AE";
MillenniumVarunWeb.halffm_JA      = "\u0070";
MillenniumVarunWeb.halffm_JR_1    = "\u00FC";
MillenniumVarunWeb.halffm_JR_2    = "\u00FD";
MillenniumVarunWeb.halffm_JNY     = "\u0025";
MillenniumVarunWeb.halffm_JHA     = "\u0050";
MillenniumVarunWeb.halffm_NNA     = "\u0043";
MillenniumVarunWeb.halffm_TA      = "\u006C";
MillenniumVarunWeb.halffm_TT      = "\u00CA";
MillenniumVarunWeb.halffm_TR      = "\u0024";
MillenniumVarunWeb.halffm_THA     = "\u004C";
MillenniumVarunWeb.halffm_DY      = "\u00D0";
MillenniumVarunWeb.halffm_DHA     = "\u004F";
MillenniumVarunWeb.halffm_NA      = "\u0076";
MillenniumVarunWeb.halffm_NN      = "\u0056";
MillenniumVarunWeb.halffm_PA_1    = "\u0048";
MillenniumVarunWeb.halffm_PA_2    = "\u0068";
MillenniumVarunWeb.halffm_PR_1    = "\u00D2";
MillenniumVarunWeb.halffm_PR_2    = "\u00D6";
MillenniumVarunWeb.halffm_PHA     = "\u0048\u00E7\u0077";
MillenniumVarunWeb.halffm_BA      = "\u0079";
MillenniumVarunWeb.halffm_BHA     = "\u0059";
MillenniumVarunWeb.halffm_MA      = "\u0063";
MillenniumVarunWeb.halffm_YA_1    = "\u00AD";
MillenniumVarunWeb.halffm_YA_2    = "\u00B3";
MillenniumVarunWeb.halffm_YA_3    = "\u00EE";
MillenniumVarunWeb.halffm_RA      = "\u0026";
MillenniumVarunWeb.halffm_LA      = "\u0075";
MillenniumVarunWeb.halffm_VA_1    = "\u004A";
MillenniumVarunWeb.halffm_VA_2    = "\u006B";
MillenniumVarunWeb.halffm_VR_1    = "\u00AC";
MillenniumVarunWeb.halffm_VR_2    = "\u00AF";
MillenniumVarunWeb.halffm_VN      = "\u00D8";
MillenniumVarunWeb.halffm_SHA_1   = "\u004D";
MillenniumVarunWeb.halffm_SHA_2   = "\u00B5";
MillenniumVarunWeb.halffm_SHA_3   = "\u00CD";
MillenniumVarunWeb.halffm_SHR_1   = "\u00CD\u00B4";
MillenniumVarunWeb.halffm_SHR_2   = "\u00DE";
MillenniumVarunWeb.halffm_SSA_1   = "\u003C";
MillenniumVarunWeb.halffm_SSA_2   = "\u00F8";
MillenniumVarunWeb.halffm_SA      = "\u006D";
MillenniumVarunWeb.halffm_SR      = "\u00F1";
MillenniumVarunWeb.halffm_HA      = "\u00D4";
MillenniumVarunWeb.halffm_LLA     = "\u00C8";
MillenniumVarunWeb.halffm_RRA     = "\u004E";
MillenniumVarunWeb.halffm_KSH     = "\u0023";


//Conjuncts
MillenniumVarunWeb.conjct_KT      = "\u00CA\u00E7\u00C0";//Check
MillenniumVarunWeb.conjct_KR_1    = "\u00AC\u00E7\u00C0";
MillenniumVarunWeb.conjct_KR_2    = "\u00AF\u00E7\u00C0";
MillenniumVarunWeb.conjct_KHR     = "\u00B8\u00E7";
MillenniumVarunWeb.conjct_KRU     = "\u00AC\u2030\u00C0";
MillenniumVarunWeb.conjct_VRU     = "\u00AC\u2030";
MillenniumVarunWeb.conjct_SHRU    = "\u00DE\u2030";
MillenniumVarunWeb.conjct_KSH     = "\u0023\u00E7";
MillenniumVarunWeb.conjct_GR      = "\u00FB\u00E7";
MillenniumVarunWeb.conjct_JNY     = "\u0025\u00E7";
MillenniumVarunWeb.conjct_JNYE    = "\u0025\u00F2";
MillenniumVarunWeb.conjct_TTTT    = "\u0066";
MillenniumVarunWeb.conjct_TT_TTH  = "\u00F9";
MillenniumVarunWeb.conjct_TTHTTH  = "\u0072";
MillenniumVarunWeb.conjct_DDDD_1  = "\u00B7";
MillenniumVarunWeb.conjct_DDDD_2  = "\u00BA";
MillenniumVarunWeb.conjct_DD_DDH  = "\u00FA";
MillenniumVarunWeb.conjct_DDHDDH  = "\u00B6";
MillenniumVarunWeb.conjct_TT      = "\u00CA\u00E7";
MillenniumVarunWeb.conjct_TR      = "\u0024\u00E7";
MillenniumVarunWeb.conjct_TREE    = "\u0024\u00F2";
MillenniumVarunWeb.conjct_DG      = "\u00C3";
MillenniumVarunWeb.conjct_DD      = "\u00CE";
MillenniumVarunWeb.conjct_D_DH_1  = "\u00D7";
MillenniumVarunWeb.conjct_D_DH_2  = "\u00E0";
MillenniumVarunWeb.conjct_DB      = "\u00C2";
MillenniumVarunWeb.conjct_DBH     = "\u0074";
MillenniumVarunWeb.conjct_DM      = "\u00A8\u00E7";
MillenniumVarunWeb.conjct_DY      = "\u00D0\u00E7";
MillenniumVarunWeb.conjct_DYU     = "\u00D0\u2030";
MillenniumVarunWeb.conjct_TRU     = "\u0024\u2030";
MillenniumVarunWeb.conjct_HYU     = "\u00BF\u2030";
MillenniumVarunWeb.conjct_DV      = "\u00DC";
MillenniumVarunWeb.conjct_DR      = "\u00EA";
MillenniumVarunWeb.conjct_NN      = "\u0056\u00E7";
MillenniumVarunWeb.conjct_PR_1    = "\u0048\u00E7\u0026";
MillenniumVarunWeb.conjct_PR_2    = "\u00D2\u00E7";
MillenniumVarunWeb.conjct_PR_3    = "\u00D6\u00E7";
MillenniumVarunWeb.conjct_RPE     = "\u0048\u0192";
MillenniumVarunWeb.conjct_RGE     = "\u0069\u0192";
MillenniumVarunWeb.conjct_RSSE    = "\u00F8\u0192";
MillenniumVarunWeb.conjct_SR      = "\u00F1\u00E7";
MillenniumVarunWeb.conjct_SRE     = "\u006D\u0192";
MillenniumVarunWeb.conjct_PHR_1   = "\u0048\u00E7\u0026\u00C0";
MillenniumVarunWeb.conjct_PHR_2   = "\u00D6\u00E7\u00C0";
MillenniumVarunWeb.conjct_VR_1    = "\u006B\u00E7\u0026";
MillenniumVarunWeb.conjct_VR_2    = "\u00AC\u00E7";
MillenniumVarunWeb.conjct_VR_3    = "\u00AF\u00E7";
MillenniumVarunWeb.conjct_VN      = "\u00D8\u00E7";
MillenniumVarunWeb.conjct_SHR     = "\u00DE\u00E7";
MillenniumVarunWeb.conjct_KRE     = "\u00AC\u00F2\u00C0";
MillenniumVarunWeb.conjct_GRE     = "\u00FB\u00F2";
MillenniumVarunWeb.conjct_VRE     = "\u00AC\u00F2";
MillenniumVarunWeb.conjct_PRE_1   = "\u00D2\u00F2";
MillenniumVarunWeb.conjct_PRE_2   = "\u00D6\u00F2";
MillenniumVarunWeb.conjct_PHRE_1  = "\u00D2\u00F2\u00C0";
MillenniumVarunWeb.conjct_PHRE_2  = "\u00D6\u00F2\u00C0";
MillenniumVarunWeb.conjct_SHRE    = "\u00DE\u00F2";
MillenniumVarunWeb.conjct_DHRE    = "\u004F\u0192";
MillenniumVarunWeb.conjct_SHV     = "\u00E9\u00E7";
MillenniumVarunWeb.conjct_SSTT    = "\u00E4";
MillenniumVarunWeb.conjct_SSTTH_1 = "\u00F7";
MillenniumVarunWeb.conjct_SSTTH_2 = "\u00FF";
MillenniumVarunWeb.conjct_HNN     = "\u201D";
MillenniumVarunWeb.conjct_HL      = "\u00BC";
MillenniumVarunWeb.conjct_HV      = "\u00BB";
MillenniumVarunWeb.conjct_HYA     = "\u00BF\u00E7";
MillenniumVarunWeb.conjct_HMA     = "\u00EF\u00E7";
MillenniumVarunWeb.conjct_RK      = "\u006B\u00E7\u0026\u00C0";

//Combos
MillenniumVarunWeb.combo_HR       = "\u00CB";
MillenniumVarunWeb.combo_K_CDR_E  = "\u006B\u00E7\u0040\u00C0";
MillenniumVarunWeb.combo_P_CDR_E  = "\u0048\u00E7\u0040";
MillenniumVarunWeb.combo_PH_CDR_E = "\u0048\u00E7\u0040\u00C0";
MillenniumVarunWeb.combo_V_CDR_E  = "\u006B\u00E7\u0040";


MillenniumVarunWeb.combo_KHAI     = "\u004B\u00F3";
MillenniumVarunWeb.combo_GAI      = "\u0069\u00F3";
MillenniumVarunWeb.combo_PAI      = "\u0048\u00F3";
MillenniumVarunWeb.combo_PHAI     = "\u0048\u00F3\u00C0";
MillenniumVarunWeb.combo_MAI      = "\u0063\u00F3";
MillenniumVarunWeb.combo_JAI      = "\u0070\u00F3";
MillenniumVarunWeb.combo_SAI      = "\u006D\u00F3";
MillenniumVarunWeb.combo_LAI      = "\u0075\u00F3";
MillenniumVarunWeb.combo_NAI      = "\u0076\u00F3";
MillenniumVarunWeb.combo_BAI      = "\u0079\u00F3";
MillenniumVarunWeb.combo_VAI      = "\u004A\u00F3";
MillenniumVarunWeb.combo_SHAI     = "\u004D\u00F3";
MillenniumVarunWeb.combo_DHAI     = "\u004F\u00F3";

MillenniumVarunWeb.combo_VE_1     = "\u006B\u00E7\u00ED";
MillenniumVarunWeb.combo_VE_2     = "\u006B\u00F2";
MillenniumVarunWeb.combo_VE_3     = "\u004A\u00F2";
MillenniumVarunWeb.combo_KE_1     = "\u006B\u00E7\u00ED\u00C0";
MillenniumVarunWeb.combo_KE_2     = "\u006B\u00F2\u00C0";
MillenniumVarunWeb.combo_KHE      = "\u004B\u00F2";
MillenniumVarunWeb.combo_DHYE     = "\u004F\u00B3\u00F2";
MillenniumVarunWeb.combo_NNE      = "\u0043\u00F2";
MillenniumVarunWeb.combo_GE       = "\u0069\u00F2";
MillenniumVarunWeb.combo_GHE      = "\u0049\u00F2";
MillenniumVarunWeb.combo_CE       = "\u00AE\u00F2";
MillenniumVarunWeb.combo_JE       = "\u0070\u00F2";
MillenniumVarunWeb.combo_TE       = "\u006C\u00F2";
MillenniumVarunWeb.combo_THE      = "\u004C\u00F2";
MillenniumVarunWeb.combo_DHE      = "\u004F\u00F2";
MillenniumVarunWeb.combo_NE       = "\u0076\u00F2";
MillenniumVarunWeb.combo_PE_1     = "\u0048\u00F2";
MillenniumVarunWeb.combo_PE_2     = "\u0048\u00E7\u00ED";
MillenniumVarunWeb.combo_PHE_1    = "\u0048\u00F2\u00C0";
MillenniumVarunWeb.combo_PHE_2    = "\u0048\u00E7\u00ED\u00C0";
MillenniumVarunWeb.combo_BE       = "\u0079\u00F2";
MillenniumVarunWeb.combo_BHE      = "\u0059\u00F2";
MillenniumVarunWeb.combo_ME_1     = "\u0063\u00F2";
MillenniumVarunWeb.combo_ME_2     = "\u0063\u201A";
MillenniumVarunWeb.combo_YE       = "\u00B3\u00F2";
MillenniumVarunWeb.combo_LE       = "\u0075\u00F2";
MillenniumVarunWeb.combo_SE       = "\u006D\u00F2";
MillenniumVarunWeb.combo_SSE_1    = "\u003C\u00F2";
MillenniumVarunWeb.combo_SSE_2    = "\u00F8\u00F2";
MillenniumVarunWeb.combo_SHE      = "\u004D\u00F2";
MillenniumVarunWeb.combo_KSHE     = "\u0023\u00F2";

MillenniumVarunWeb.combo_GU       = "\u0069\u2030";
MillenniumVarunWeb.combo_GHU      = "\u0049\u2030";
MillenniumVarunWeb.combo_CU       = "\u00AE\u2030";
MillenniumVarunWeb.combo_JU       = "\u0070\u2030";
MillenniumVarunWeb.combo_NU       = "\u0076\u2030";
MillenniumVarunWeb.combo_NNU      = "\u0043\u2030";
MillenniumVarunWeb.combo_PU       = "\u0048\u2030";
MillenniumVarunWeb.combo_PHU      = "\u0048\u2030\u00C0";
MillenniumVarunWeb.combo_BU       = "\u0079\u2030";
MillenniumVarunWeb.combo_BHU      = "\u0059\u2030";
MillenniumVarunWeb.combo_RU       = "\u00A9";
MillenniumVarunWeb.combo_LU       = "\u0075\u2030";
MillenniumVarunWeb.combo_TU       = "\u006C\u2030";
MillenniumVarunWeb.combo_MU       = "\u0063\u2030";
MillenniumVarunWeb.combo_SU       = "\u006D\u2030";
MillenniumVarunWeb.combo_YU       = "\u00B3\u2030";
MillenniumVarunWeb.combo_SHU      = "\u004D\u2030";
MillenniumVarunWeb.combo_DHU      = "\u004F\u2030";
MillenniumVarunWeb.combo_VU       = "\u006B\u2030";
MillenniumVarunWeb.combo_KU       = "\u006B\u2030\u00C0";
MillenniumVarunWeb.combo_KHU      = "\u004B\u2030";

MillenniumVarunWeb.combo_KRU      = "\u006B\u00E7\u003D\u00C0";
MillenniumVarunWeb.combo_DRU      = "\u00A2";
MillenniumVarunWeb.combo_VRU      = "\u006B\u00E7\u003D";
MillenniumVarunWeb.combo_MRU      = "\u0063\u00E7\u00C9";

MillenniumVarunWeb.combo_KUU      = "\u006B\u00E7\u00D3\u00C0";
MillenniumVarunWeb.combo_VUU      = "\u006B\u00E7\u00D3";
MillenniumVarunWeb.combo_RUU      = "\u00AA";
MillenniumVarunWeb.combo_PUU      = "\u0048\u00E7\u00D3";
MillenniumVarunWeb.combo_PHUU     = "\u0048\u00E7\u00D3\u00C0";

MillenniumVarunWeb.combo_KEM      = "\u006B\u00F2\u0062\u00C0";
MillenniumVarunWeb.combo_VEM      = "\u006B\u00F2\u0062";
MillenniumVarunWeb.combo_CEEM     = "\u00AE\u201A";
MillenniumVarunWeb.combo_NNEM     = "\u0043\u201A";
MillenniumVarunWeb.combo_PEM      = "\u0048\u201A";

MillenniumVarunWeb.combo_KAM      = "\u006B\u00E7\u0062\u00C0";
MillenniumVarunWeb.combo_VAM      = "\u006B\u00E7\u0062";

//Half forms of RA
MillenniumVarunWeb.halffm_RII     = "\u00D1";
MillenniumVarunWeb.halffm_REE     = "\u0078";
MillenniumVarunWeb.halffm_RA_ANU  = "\u00A5";

//rakar
MillenniumVarunWeb.vattu_RA_1     = "\u00CF";
MillenniumVarunWeb.vattu_RA_2     = "\u00A3";
MillenniumVarunWeb.vattu_RA_3     = "\u00B4";
MillenniumVarunWeb.vattu_RA_4     = "\u005E";
MillenniumVarunWeb.vattu_LA       = "\u00C1";

MillenniumVarunWeb.misc_OM        = "\u00DF";

//Matches ASCII
MillenniumVarunWeb.EXCLAM         = "\u0021";
MillenniumVarunWeb.PAREN_LEFT     = "\u0028";
MillenniumVarunWeb.PAREN_RIGHT    = "\u0029";
MillenniumVarunWeb.COMMA          = "\u002C";
MillenniumVarunWeb.HYPHEN         = "\u002D";
MillenniumVarunWeb.PERIOD         = "\u002E";
MillenniumVarunWeb.SLASH          = "\u002F";
MillenniumVarunWeb.SEMICOLON      = "\u003B";
MillenniumVarunWeb.QUESTION       = "\u003F";

//Does not match ASCII
//Devanagari Digits
MillenniumVarunWeb.digit_ZERO_DE  = "\u0030";
MillenniumVarunWeb.digit_ONE_DE   = "\u0031";
MillenniumVarunWeb.digit_TWO_DE   = "\u0032";
MillenniumVarunWeb.digit_THREE_DE = "\u0033";
MillenniumVarunWeb.digit_FOUR_DE  = "\u0034";
MillenniumVarunWeb.digit_FIVE_DE  = "\u0035";
MillenniumVarunWeb.digit_SIX_DE   = "\u0036";
MillenniumVarunWeb.digit_SEVEN_DE = "\u0037";
MillenniumVarunWeb.digit_EIGHT_DE = "\u0038";
MillenniumVarunWeb.digit_NINE_DE  = "\u0039";

//Digits
MillenniumVarunWeb.digit_TWO      = "\u0160";
MillenniumVarunWeb.digit_FOUR     = "\u0152";
MillenniumVarunWeb.digit_NINE     = "\u2018";

MillenniumVarunWeb.PLUS           = "\u0129";//TODO
MillenniumVarunWeb.LQTDOUBLE      = "\u2019";
MillenniumVarunWeb.RQTDOUBLE      = "\u201C";

MillenniumVarunWeb.toPadma = new Object();
//Specials
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.avagraha]      = Padma.avagraha;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.anusvara]      = Padma.anusvara;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.candrabindu]   = Padma.candrabindu;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.virama]        = Padma.syllbreak;
//MillenniumVarunWeb.toPadma[MillenniumVarunWeb.visarga]       = Padma.visarga;

//Vowels
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowel_A]       = Padma.vowel_A;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowel_AA]      = Padma.vowel_AA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowel_I]       = Padma.vowel_I;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowel_II]      = Padma.vowel_II;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowel_U]       = Padma.vowel_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowel_UU]      = Padma.vowel_UU;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowel_R]       = Padma.vowel_R;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowel_EE]      = Padma.vowel_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowel_AI]      = Padma.vowel_AI;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowel_OO]      = Padma.vowel_OO;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowel_AU_1]    = Padma.vowel_AU;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowel_AU_2]    = Padma.vowel_AU;

//consonants
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_KA_1]   = Padma.consnt_KA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_KA_2]   = Padma.consnt_KA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_KHA]    = Padma.consnt_KHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_GA]     = Padma.consnt_GA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_GHA]    = Padma.consnt_GHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_NGA]    = Padma.consnt_NGA;

MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_CA]     = Padma.consnt_CA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_CHA]    = Padma.consnt_CHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_JA]     = Padma.consnt_JA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_JHA]    = Padma.consnt_JHA;

MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_TTA]    = Padma.consnt_TTA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_TTHA_1] = Padma.consnt_TTHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_TTHA_2] = Padma.consnt_TTHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_DDA]    = Padma.consnt_DDA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_DDDHA]  = Padma.consnt_DDDHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_DDHA]   = Padma.consnt_DDHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_NNA]    = Padma.consnt_NNA;

MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_TA]     = Padma.consnt_TA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_THA]    = Padma.consnt_THA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_DA]     = Padma.consnt_DA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_DHA]    = Padma.consnt_DHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_NA]     = Padma.consnt_NA;

MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_PA_1]   = Padma.consnt_PA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_PA_2]   = Padma.consnt_PA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_PHA]    = Padma.consnt_PHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_BA]     = Padma.consnt_BA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_BHA]    = Padma.consnt_BHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_MA]     = Padma.consnt_MA;

MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_YA_1]   = Padma.consnt_YA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_YA_2]   = Padma.consnt_YA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_YA_3]   = Padma.consnt_YA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_RA]     = Padma.consnt_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_LA_1]   = Padma.consnt_LA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_LA_2]   = Padma.consnt_LA;

MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_VA_1]   = Padma.consnt_VA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_VA_2]   = Padma.consnt_VA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_SHA_1]  = Padma.consnt_SHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_SHA_2]  = Padma.consnt_SHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_SSA_1]  = Padma.consnt_SSA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_SSA_2]  = Padma.consnt_SSA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_SA]     = Padma.consnt_SA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_HA]     = Padma.consnt_HA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_LLA]    = Padma.consnt_LLA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.consnt_LLLA]   = "\u0934";
//change this to padma equivalent after adding LLLA to padma and devanagari

//Gunintamulu
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowelsn_AA]    = Padma.vowelsn_AA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowelsn_I_1]   = Padma.vowelsn_I;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowelsn_I_2]   = Padma.vowelsn_I;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowelsn_II_1]  = Padma.vowelsn_II;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowelsn_II_2]  = Padma.vowelsn_II;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowelsn_U_1]   = Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowelsn_U_2]   = Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowelsn_U_3]   = Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowelsn_UU_1]  = Padma.vowelsn_UU;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowelsn_UU_2]  = Padma.vowelsn_UU;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowelsn_R_1]   = Padma.vowelsn_R;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowelsn_R_2]   = Padma.vowelsn_R;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowelsn_R_3]   = Padma.vowelsn_R;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowelsn_CDR_E] = Padma.vowelsn_CDR_E;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowelsn_EE]  = Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowelsn_AI_1]  = Padma.vowelsn_AI;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowelsn_AI_2]  = Padma.vowelsn_AI;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowelsn_OO_1]  = Padma.vowelsn_OO;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowelsn_OO_2]  = Padma.vowelsn_OO;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowelsn_AU]    = Padma.vowelsn_AU;

//Matra + anusvara
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowelsn_IIM]  = Padma.vowelsn_II + Padma.anusvara;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowelsn_EEM]  = Padma.vowelsn_EE + Padma.anusvara;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowelsn_IM]   = Padma.vowelsn_I + Padma.anusvara;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowelsn_AUM]  = Padma.vowelsn_AU + Padma.anusvara;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowelsn_OM]   = Padma.vowelsn_OO + Padma.anusvara;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowelsn_ER]   = Padma.vowelsn_EE + Padma.vattu_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowelsn_AIR]  = Padma.vowelsn_AI + Padma.vattu_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vowelsn_RIIM] = Padma.halffm_RA + Padma.vowelsn_II + Padma.anusvara;

//half forms
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_KA_1]  = Padma.halffm_KA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_KA_2]  = Padma.halffm_KA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_KR_1]  = Padma.halffm_KA + Padma.halffm_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_KR_2]  = Padma.halffm_KA + Padma.halffm_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_KHA]   = Padma.halffm_KHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_KHHA]  = Padma.halffm_KHHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_KHR]   = Padma.halffm_KHA + Padma.halffm_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_GA]    = Padma.halffm_GA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_GR]    = Padma.halffm_GA + Padma.halffm_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_GHHA]  = Padma.halffm_GHHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_GHA]   = Padma.halffm_GHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_NYA]   = Padma.halffm_NYA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_NYC]   = Padma.halffm_NYA + Padma.halffm_CA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_NYJ]   = Padma.halffm_NYA + Padma.halffm_JA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_CA]    = Padma.halffm_CA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_JA]    = Padma.halffm_JA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_JR_1]  = Padma.halffm_JA + Padma.halffm_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_JR_2]  = Padma.halffm_JA + Padma.halffm_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_JNY]   = Padma.halffm_JA + Padma.halffm_NYA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_JHA]   = Padma.halffm_JHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_NNA]   = Padma.halffm_NNA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_TA]    = Padma.halffm_TA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_TT]    = Padma.halffm_TA + Padma.halffm_TA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_TR]    = Padma.halffm_TA + Padma.halffm_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_THA]   = Padma.halffm_THA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_DY]    = Padma.halffm_DA + Padma.halffm_YA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_DHA]   = Padma.halffm_DHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_NA]    = Padma.halffm_NA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_NN]    = Padma.halffm_NA + Padma.halffm_NA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_PA_1]  = Padma.halffm_PA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_PA_2]  = Padma.halffm_PA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_PR_1]  = Padma.halffm_PA + Padma.halffm_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_PR_2]  = Padma.halffm_PA + Padma.halffm_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_PHA]   = Padma.halffm_PHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_BA]    = Padma.halffm_BA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_BHA]   = Padma.halffm_BHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_MA]    = Padma.halffm_MA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_YA_1]  = Padma.halffm_YA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_YA_2]  = Padma.halffm_YA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_YA_3]  = Padma.halffm_YA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_RA]    = Padma.halffm_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_LA]    = Padma.halffm_LA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_VA_1]  = Padma.halffm_VA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_VA_2]  = Padma.halffm_VA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_VR_1]  = Padma.halffm_VA + Padma.halffm_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_VR_2]  = Padma.halffm_VA + Padma.halffm_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_VN]    = Padma.halffm_VA + Padma.halffm_NA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_SHA_1] = Padma.halffm_SHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_SHA_2] = Padma.halffm_SHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_SHA_3] = Padma.halffm_SHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_SHR_1] = Padma.halffm_SHA + Padma.halffm_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_SHR_2] = Padma.halffm_SHA + Padma.halffm_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_SSA_1] = Padma.halffm_SSA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_SSA_2] = Padma.halffm_SSA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_SA]    = Padma.halffm_SA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_SR]    = Padma.halffm_SA + Padma.halffm_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_HA]    = Padma.halffm_HA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_LLA]   = Padma.halffm_LLA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_RRA]   = Padma.halffm_RRA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_KSH]   = Padma.halffm_KA + Padma.halffm_SSA;

//Conjuncts
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_KT]     = Padma.consnt_KA + Padma.vattu_TA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_KR_1]   = Padma.consnt_KA + Padma.vattu_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_KR_2]   = Padma.consnt_KA + Padma.vattu_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_KHR]    = Padma.consnt_KHA + Padma.vattu_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_KRU]    = Padma.consnt_KA + Padma.vattu_RA + Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_VRU]    = Padma.consnt_VA + Padma.vattu_RA + Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_SHRU]   = Padma.consnt_SHA + Padma.vattu_RA + Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_KSH]    = Padma.consnt_KA + Padma.vattu_SSA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_GR]     = Padma.consnt_GA + Padma.vattu_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_JNY]    = Padma.consnt_JA + Padma.vattu_NYA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_JNYE]   = Padma.consnt_JA + Padma.vattu_NYA + Padma.vowelsn_EE;


MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_TTTT]   = Padma.consnt_TTA + Padma.vattu_TTA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_TT_TTH] = Padma.consnt_TTA + Padma.vattu_TTHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_TTHTTH] = Padma.consnt_TTHA + Padma.vattu_TTHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_DDDD_1] = Padma.consnt_DDA + Padma.vattu_DDA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_DDDD_2] = Padma.consnt_DDA + Padma.vattu_DDA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_DD_DDH] = Padma.consnt_DDA + Padma.vattu_DDHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_DDHDDH] = Padma.consnt_DDHA + Padma.vattu_DDHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_TT]     = Padma.consnt_TA + Padma.vattu_TA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_TR]     = Padma.consnt_TA + Padma.vattu_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_TREE]   = Padma.consnt_TA + Padma.vattu_RA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_DG]     = Padma.consnt_DA + Padma.vattu_GA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_DD]     = Padma.consnt_DA + Padma.vattu_DA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_D_DH_1] = Padma.consnt_DA + Padma.vattu_DHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_D_DH_2] = Padma.consnt_DA + Padma.vattu_DHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_DB]     = Padma.consnt_DA + Padma.vattu_BA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_DBH]    = Padma.consnt_DA + Padma.vattu_BHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_DM]     = Padma.consnt_DA + Padma.vattu_MA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_DY]     = Padma.consnt_DA + Padma.vattu_YA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_DYU]    = Padma.consnt_DA + Padma.vattu_YA + Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_TRU]    = Padma.consnt_TA + Padma.vattu_RA + Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_HYU]    = Padma.consnt_HA + Padma.vattu_YA + Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_DV]     = Padma.consnt_DA + Padma.vattu_VA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_DR]     = Padma.consnt_DA + Padma.vattu_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_NN]     = Padma.consnt_NA + Padma.vattu_NA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_PR_1]   = Padma.consnt_PA + Padma.vattu_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_PR_2]   = Padma.consnt_PA + Padma.vattu_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_PR_3]   = Padma.consnt_PA + Padma.vattu_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_RPE]    = Padma.consnt_RA + Padma.vattu_PA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_RGE]    = Padma.consnt_RA + Padma.vattu_GA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_RSSE]   = Padma.consnt_RA + Padma.vattu_SSA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_SR]     = Padma.consnt_SA + Padma.vattu_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_SRE]    = Padma.consnt_RA + Padma.vattu_SA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_PHR_1]  = Padma.consnt_PHA + Padma.vattu_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_PHR_2]  = Padma.consnt_PHA + Padma.vattu_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_VR_1]   = Padma.consnt_VA + Padma.vattu_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_VR_2]   = Padma.consnt_VA + Padma.vattu_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_VR_3]   = Padma.consnt_VA + Padma.vattu_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_VN]     = Padma.consnt_VA + Padma.vattu_NA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_SHR]    = Padma.consnt_SHA + Padma.vattu_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_KRE]    = Padma.consnt_KA + Padma.vattu_RA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_GRE]    = Padma.consnt_GA + Padma.vattu_RA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_VRE]    = Padma.consnt_VA + Padma.vattu_RA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_PRE_1]  = Padma.consnt_PA + Padma.vattu_RA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_PRE_2]  = Padma.consnt_PA + Padma.vattu_RA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_PHRE_1] = Padma.consnt_PHA + Padma.vattu_RA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_PHRE_2] = Padma.consnt_PHA + Padma.vattu_RA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_SHRE]   = Padma.consnt_SHA + Padma.vattu_RA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_DHRE]   = Padma.consnt_RA + Padma.vattu_DHA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_SHV]    = Padma.consnt_SHA + Padma.vattu_VA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_SSTT]   = Padma.consnt_SSA + Padma.vattu_TTA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_SSTTH_1]= Padma.consnt_SSA + Padma.vattu_TTHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_SSTTH_2]= Padma.consnt_SSA + Padma.vattu_TTHA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_HNN]    = Padma.consnt_HA + Padma.vattu_NNA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_HL]     = Padma.consnt_HA + Padma.vattu_LA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_HV]     = Padma.consnt_HA + Padma.vattu_VA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_HYA]    = Padma.consnt_HA + Padma.vattu_YA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_HMA]    = Padma.consnt_HA + Padma.vattu_MA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.conjct_RK]     = Padma.consnt_RA + Padma.vattu_KA;

//Combos
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_HR]       = Padma.consnt_HA + Padma.vowelsn_R;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_K_CDR_E]  = Padma.consnt_KA + Padma.vowelsn_CDR_E;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_P_CDR_E]  = Padma.consnt_PA + Padma.vowelsn_CDR_E;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_PH_CDR_E] = Padma.consnt_PHA + Padma.vowelsn_CDR_E;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_V_CDR_E]  = Padma.consnt_VA + Padma.vowelsn_CDR_E;

MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_KHAI] = Padma.consnt_KHA + Padma.vowelsn_AI;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_GAI]  = Padma.consnt_GA + Padma.vowelsn_AI;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_PAI]  = Padma.consnt_PA + Padma.vowelsn_AI;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_PHAI] = Padma.consnt_PHA + Padma.vowelsn_AI;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_MAI]  = Padma.consnt_MA + Padma.vowelsn_AI;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_JAI]  = Padma.consnt_JA + Padma.vowelsn_AI;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_SAI]  = Padma.consnt_SA + Padma.vowelsn_AI;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_LAI]  = Padma.consnt_LA + Padma.vowelsn_AI;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_NAI]  = Padma.consnt_NA + Padma.vowelsn_AI;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_BAI]  = Padma.consnt_BA + Padma.vowelsn_AI;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_VAI]  = Padma.consnt_VA + Padma.vowelsn_AI;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_SHAI] = Padma.consnt_SHA + Padma.vowelsn_AI;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_DHAI] = Padma.consnt_DHA + Padma.vowelsn_AI;

MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_VE_1] = Padma.consnt_VA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_VE_2] = Padma.consnt_VA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_VE_3] = Padma.consnt_VA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_KE_1] = Padma.consnt_KA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_KE_2] = Padma.consnt_KA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_KHE]  = Padma.consnt_KHA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_DHYE] = Padma.consnt_DHA + Padma.vattu_YA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_NNE]   = Padma.consnt_NNA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_GE]    = Padma.consnt_GA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_GHE]   = Padma.consnt_GHA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_CE]    = Padma.consnt_CA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_JE]    = Padma.consnt_JA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_TE]    = Padma.consnt_TA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_THE]   = Padma.consnt_THA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_DHE]   = Padma.consnt_DHA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_NE]    = Padma.consnt_NA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_PE_1]  = Padma.consnt_PA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_PE_2]  = Padma.consnt_PA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_PHE_1] = Padma.consnt_PHA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_PHE_2] = Padma.consnt_PHA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_BE]    = Padma.consnt_BA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_BHE]   = Padma.consnt_BHA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_ME_1]  = Padma.consnt_MA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_ME_2]  = Padma.consnt_MA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_YE]    = Padma.consnt_YA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_LE]    = Padma.consnt_LA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_SE]    = Padma.consnt_SA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_SSE_1] = Padma.consnt_SSA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_SSE_2] = Padma.consnt_SSA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_SHE]   = Padma.consnt_SHA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_KSHE]  = Padma.consnt_KA + Padma.vattu_SSA + Padma.vowelsn_EE;

MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_GU]  = Padma.consnt_GA + Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_GHU] = Padma.consnt_GHA + Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_CU]  = Padma.consnt_CA + Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_JU]  = Padma.consnt_JA + Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_NU]  = Padma.consnt_NA + Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_NNU] = Padma.consnt_NNA + Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_PU]  = Padma.consnt_PA + Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_PHU] = Padma.consnt_PHA + Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_BU]  = Padma.consnt_BA + Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_BHU] = Padma.consnt_BHA + Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_RU]  = Padma.consnt_RA + Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_LU]  = Padma.consnt_LA + Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_TU]  = Padma.consnt_TA + Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_MU]  = Padma.consnt_MA + Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_SU]  = Padma.consnt_SA + Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_YU]  = Padma.consnt_YA + Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_SHU] = Padma.consnt_SHA + Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_DHU] = Padma.consnt_DHA + Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_VU]  = Padma.consnt_VA + Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_KU]  = Padma.consnt_KA + Padma.vowelsn_U;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_KHU] = Padma.consnt_KHA + Padma.vowelsn_U;

MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_KRU] = Padma.consnt_KA + Padma.vowelsn_R;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_DRU] = Padma.consnt_DA + Padma.vowelsn_R;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_VRU] = Padma.consnt_VA + Padma.vowelsn_R;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_MRU] = Padma.consnt_MA + Padma.vowelsn_R;

MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_KUU]  = Padma.consnt_KA + Padma.vowelsn_UU;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_VUU]  = Padma.consnt_VA + Padma.vowelsn_UU;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_RUU]  = Padma.consnt_RA + Padma.vowelsn_UU;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_PUU]  = Padma.consnt_PA + Padma.vowelsn_UU;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_PHUU] = Padma.consnt_PHA + Padma.vowelsn_UU;

MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_KEM]  = Padma.consnt_KA + Padma.vowelsn_EE + Padma.anusvara;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_VEM]  = Padma.consnt_VA + Padma.vowelsn_EE + Padma.anusvara;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_CEEM] = Padma.consnt_CA + Padma.vowelsn_EE + Padma.anusvara;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_NNEM] = Padma.consnt_NNA + Padma.vowelsn_EE + Padma.anusvara;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_PEM]  = Padma.consnt_PA + Padma.vowelsn_EE + Padma.anusvara;

MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_KAM] = Padma.consnt_KA + Padma.anusvara;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.combo_VAM] = Padma.consnt_VA + Padma.anusvara;

//Half forms of RA
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_RII]    = Padma.halffm_RA + Padma.vowelsn_II;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_REE]    = Padma.halffm_RA + Padma.vowelsn_EE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.halffm_RA_ANU] = Padma.halffm_RA + Padma.anusvara;

MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vattu_RA_1] = Padma.vattu_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vattu_RA_2] = Padma.vattu_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vattu_RA_3] = Padma.vattu_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vattu_RA_4] = Padma.vattu_RA;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.vattu_LA]   = Padma.vattu_LA;

MillenniumVarunWeb.toPadma[MillenniumVarunWeb.misc_OM]    = Padma.om;

//Devanagari Digits
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.digit_ZERO_DE]  = Padma.digit_ZERO;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.digit_ONE_DE]   = Padma.digit_ONE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.digit_TWO_DE]   = Padma.digit_TWO;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.digit_THREE_DE] = Padma.digit_THREE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.digit_FOUR_DE]  = Padma.digit_FOUR;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.digit_FIVE_DE]  = Padma.digit_FIVE;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.digit_SIX_DE]   = Padma.digit_SIX;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.digit_SEVEN_DE] = Padma.digit_SEVEN;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.digit_EIGHT_DE] = Padma.digit_EIGHT;
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.digit_NINE_DE]  = Padma.digit_NINE;

//Digits
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.digit_TWO]  = '2';
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.digit_FOUR] = '4';
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.digit_NINE] = '9';

MillenniumVarunWeb.toPadma[MillenniumVarunWeb.PLUS]       = "\u002B";
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.LQTDOUBLE]  = "\u201C";
MillenniumVarunWeb.toPadma[MillenniumVarunWeb.RQTDOUBLE]  = "\u201D";


MillenniumVarunWeb.prefixList = new Object();
MillenniumVarunWeb.prefixList[MillenniumVarunWeb.vowelsn_I_1] = true;
MillenniumVarunWeb.prefixList[MillenniumVarunWeb.vowelsn_I_2] = true;
MillenniumVarunWeb.prefixList[MillenniumVarunWeb.vowelsn_IM]  = true;

MillenniumVarunWeb.suffixList = new Object();
MillenniumVarunWeb.suffixList[MillenniumVarunWeb.halffm_RA]     = true;
MillenniumVarunWeb.suffixList[MillenniumVarunWeb.halffm_RII]    = true;
MillenniumVarunWeb.suffixList[MillenniumVarunWeb.halffm_REE]    = true;
MillenniumVarunWeb.suffixList[MillenniumVarunWeb.halffm_RA_ANU] = true;
MillenniumVarunWeb.suffixList[MillenniumVarunWeb.vowelsn_RIIM]  = true;
MillenniumVarunWeb.suffixList[MillenniumVarunWeb.vowelsn_ER]    = true;

MillenniumVarunWeb.redundantList = new Object();

MillenniumVarunWeb.overloadList = new Object();
MillenniumVarunWeb.overloadList["\u0044"]      = true;
MillenniumVarunWeb.overloadList["\u005D"]      = true;
MillenniumVarunWeb.overloadList["\u00A8"]      = true;
MillenniumVarunWeb.overloadList["\u00E9"]      = true;
MillenniumVarunWeb.overloadList["\u00BF"]      = true;
MillenniumVarunWeb.overloadList["\u00EF"]      = true;
MillenniumVarunWeb.overloadList["\u004F\u00B3"]= true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.vowel_A]     = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.vowel_AA]    = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.vowel_EE]    = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.vowel_I]     = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.vowelsn_AA]  = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_KSH]  = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_KHA]  = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_KHHA] = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_KHR]  = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_GA]   = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_GR]   = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_GHHA] = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_GHA]  = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_NYC]  = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_NYJ]  = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_NYA]  = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_CA]   = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_JA]   = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_JNY]  = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_JHA]  = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_NNA]  = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_TA]   = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_TT]   = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_TR]   = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_THA]  = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_DY]   = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_DHA]  = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_NA]   = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_NN]   = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_PA_1] = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_PA_2] = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_PR_1] = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_PR_2] = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_BA]   = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_BHA]  = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_MA]   = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_YA_1] = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_YA_2] = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_YA_3] = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_LA]   = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_VA_1] = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_VA_2] = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_VR_1] = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_VR_2] = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_SR]   = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.consnt_PA_1] = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.consnt_MA]   = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.consnt_VA_1] = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.consnt_VA_2] = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.combo_VE_1]  = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.combo_VE_2]  = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.combo_VE_3]  = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.combo_PAI]   = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.combo_VEM]   = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.combo_VRU]   = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.combo_VU]    = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.combo_PUU]   = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.combo_VAM]   = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.combo_PU]    = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.combo_P_CDR_E]= true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.combo_V_CDR_E]= true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.combo_VUU]   = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.combo_PE_1]  = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.combo_PE_2]  = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.conjct_TT]   = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.conjct_TR]   = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.conjct_PR_1] = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.conjct_PR_3] = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.conjct_VR_1] = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.conjct_VR_2] = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.conjct_VR_3] = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.conjct_VRE]  = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.conjct_PRE_1]= true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.conjct_PRE_2]= true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.conjct_VRU]  = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_VN]   = true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_SHA_1]= true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_SHA_2]= true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_SHA_3]= true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_SHR_1]= true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_SHR_2]= true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_SSA_1]= true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_SSA_2]= true;
MillenniumVarunWeb.overloadList[MillenniumVarunWeb.halffm_SA]   = true;
