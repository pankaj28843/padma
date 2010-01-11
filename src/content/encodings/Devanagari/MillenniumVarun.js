//$Id: MillenniumVarun.js,v 1.1 2010/01/11 14:04:43 harshita Exp $

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

//MillenniumVarun Devanagari
function MillenniumVarun()
{
}

//The interface every dynamic font encoding should implement
MillenniumVarun.maxLookupLen = 5;
MillenniumVarun.fontFace     = "MillenniumVarun";
MillenniumVarun.displayName  = "MillenniumVarun";
MillenniumVarun.script       = Padma.script_DEVANAGARI;
MillenniumVarun.hasSuffixes  = true;

MillenniumVarun.lookup = function (str)
{
    return MillenniumVarun.toPadma[str];
}

MillenniumVarun.isPrefixSymbol = function (str)
{
    return MillenniumVarun.prefixList[str] != null;
}

MillenniumVarun.isSuffixSymbol = function (str)
{
    return MillenniumVarun.suffixList[str] != null;
}

MillenniumVarun.isOverloaded = function (str)
{
    return MillenniumVarun.overloadList[str] != null;
}

MillenniumVarun.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if ((sign1 == Padma.vowelsn_EE && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_EE))
    return Padma.vowelsn_OO;
    if ((sign1 == Padma.vowelsn_CDR_E && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_CDR_E))
    return Padma.vowelsn_CDR_O;
    if ((sign1 == Padma.vowelsn_AI && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_AI))
        return Padma.vowelsn_AU;
    return sign1 + sign2;
}

MillenniumVarun.isRedundant = function (str)
{
    return MillenniumVarun.redundantList[str] != null;
}


//Implementation details start here

//Specials
MillenniumVarun.avagraha       = "\u0065";
MillenniumVarun.anusvara       = "\u0062";
MillenniumVarun.candrabindu    = "\u0042";
MillenniumVarun.virama         = "\u0064";
//MillenniumVarun.visarga        = "\u00EB";

//Vowels
MillenniumVarun.vowel_A_1      = "\u0044\u00D5";
MillenniumVarun.vowel_A_2      = "\u0044\u00E7";
MillenniumVarun.vowel_AA_1     = "\u0044\u00D5\u00D5";
MillenniumVarun.vowel_AA_2     = "\u0044\u00E7\u00E7";
MillenniumVarun.vowel_I        = "\u0046";
MillenniumVarun.vowel_II       = "\u0046\u0026";
MillenniumVarun.vowel_U        = "\u0047";
MillenniumVarun.vowel_UU       = "\u0054";
MillenniumVarun.vowel_R        = "\u0024\u00D5\u002B";
MillenniumVarun.vowel_EE       = "\u0053";
MillenniumVarun.vowel_AI       = "\u0053\u00ED";
MillenniumVarun.vowel_CDR_O    = "\u0044\u00D5\u00D5\u0040";
MillenniumVarun.vowel_OO_1     = "\u0044\u00E7\u00E7\u00ED";
MillenniumVarun.vowel_OO_2     = "\u0044\u00E7\u00E7\u00ED";
MillenniumVarun.vowel_AU_1     = "\u0044\u00D5\u00D5\u00CC";
MillenniumVarun.vowel_AU_2     = "\u0044\u00E7\u00E7\u00CC";

//Consonants
MillenniumVarun.consnt_KA_1    = "\u004A\u00D5\u00C0";
MillenniumVarun.consnt_KA_2    = "\u004A\u00E7\u00C0";
MillenniumVarun.consnt_KA_3    = "\u006B\u00D5\u00C0";
MillenniumVarun.consnt_KA_4    = "\u006B\u00E7\u00C0";
MillenniumVarun.consnt_KHA_1   = "\u004B\u00D5";
MillenniumVarun.consnt_KHA_2   = "\u004B\u00E7";
MillenniumVarun.consnt_KHHA    = "\u2122\u00D5";
MillenniumVarun.consnt_GA_1    = "\u0069\u00D5";
MillenniumVarun.consnt_GA_2    = "\u0069\u00E7";
MillenniumVarun.consnt_GHHA    = "\u0153\u00D5";
MillenniumVarun.consnt_GHA_1   = "\u0049\u00D5";
MillenniumVarun.consnt_GHA_2   = "\u0049\u00E7";
MillenniumVarun.consnt_NGA     = "\u002A";

MillenniumVarun.consnt_CA_1    = "\u00AE\u00D5";
MillenniumVarun.consnt_CA_2    = "\u00AE\u00E7";
MillenniumVarun.consnt_CHA     = "\u0073";
MillenniumVarun.consnt_JA_1    = "\u0070\u00D5";
MillenniumVarun.consnt_JA_2    = "\u0070\u00E7";
MillenniumVarun.consnt_JHA_1   = "\u0050\u00D5";
MillenniumVarun.consnt_JHA_2   = "\u0050\u00E7";
MillenniumVarun.consnt_NYA     = "\u005F\u00D5";

MillenniumVarun.consnt_TTA     = "\u00EC";
MillenniumVarun.consnt_TTHA_1  = "\u0022";
MillenniumVarun.consnt_TTHA_2  = "\u00FE";
MillenniumVarun.consnt_DDA     = "\u005B";
MillenniumVarun.consnt_DDDHA   = "\u203A";
MillenniumVarun.consnt_DDHA    = "\u007B";
MillenniumVarun.consnt_NNA_1   = "\u0043\u00D5";
MillenniumVarun.consnt_NNA_2   = "\u0043\u00E7";

MillenniumVarun.consnt_TA_1    = "\u006C\u00D5";
MillenniumVarun.consnt_TA_2    = "\u006C\u00E7";
MillenniumVarun.consnt_THA_1   = "\u004C\u00D5";
MillenniumVarun.consnt_THA_2   = "\u004C\u00E7";
MillenniumVarun.consnt_DA_1    = "\u006F";
MillenniumVarun.consnt_DHA_1   = "\u004F\u00D5";
MillenniumVarun.consnt_DHA_2   = "\u004F\u00E7";
MillenniumVarun.consnt_NA_1    = "\u0076\u00D5";
MillenniumVarun.consnt_NA_2    = "\u0076\u00E7";

MillenniumVarun.consnt_PA_1    = "\u0048\u00D5";
MillenniumVarun.consnt_PA_2    = "\u0048\u00E7";
MillenniumVarun.consnt_PA_3    = "\u0068\u00D5";
MillenniumVarun.consnt_PA_4    = "\u0068\u00E7";
MillenniumVarun.consnt_PHA_1   = "\u0048\u00D5\u00C0";
MillenniumVarun.consnt_PHA_2   = "\u0048\u00E7\u00C0";
MillenniumVarun.consnt_PHA_3   = "\u0068\u00D5\u00C0";
MillenniumVarun.consnt_PHA_4   = "\u0068\u00E7\u00C0";
MillenniumVarun.consnt_BA_1    = "\u0079\u00D5";
MillenniumVarun.consnt_BA_2    = "\u0079\u00E7";
MillenniumVarun.consnt_BHA_1   = "\u0059\u00D5";
MillenniumVarun.consnt_BHA_2   = "\u0059\u00E7";
MillenniumVarun.consnt_MA_1    = "\u0063\u00D5";
MillenniumVarun.consnt_MA_2    = "\u0063\u00E7";

MillenniumVarun.consnt_YA_1    = "\u00AD\u00D5";
MillenniumVarun.consnt_YA_2    = "\u00AD\u00E7";
MillenniumVarun.consnt_YA_3    = "\u00B3\u00D5";
MillenniumVarun.consnt_YA_4    = "\u00B3\u00E7";
MillenniumVarun.consnt_YA_5    = "\u00EE\u00D5";
MillenniumVarun.consnt_YA_6    = "\u00EE\u00E7";
MillenniumVarun.consnt_RA      = "\u006A";
MillenniumVarun.consnt_LA_1    = "\u0075\u00D5";
MillenniumVarun.consnt_LA_2    = "\u007D";
MillenniumVarun.consnt_LA_3    = "\u0075\u00E7";
MillenniumVarun.consnt_VA_1    = "\u004A\u00D5";
MillenniumVarun.consnt_VA_2    = "\u004A\u00E7";
MillenniumVarun.consnt_VA_3    = "\u006B\u00D5";
MillenniumVarun.consnt_VA_4    = "\u006B\u00E7";
MillenniumVarun.consnt_SHA_1   = "\u004D\u00D5";
MillenniumVarun.consnt_SHA_2   = "\u004D\u00E7";
MillenniumVarun.consnt_SHA_3   = "\u00B5\u00D5";
MillenniumVarun.consnt_SHA_4   = "\u00B5\u00E7";
MillenniumVarun.consnt_SSA_1   = "\u003C\u00D5";
MillenniumVarun.consnt_SSA_2   = "\u003C\u00E7";
MillenniumVarun.consnt_SSA_3   = "\u00F8\u00D5";
MillenniumVarun.consnt_SSA_4   = "\u00F8\u00E7";
MillenniumVarun.consnt_SA_1    = "\u006D\u00D5";
MillenniumVarun.consnt_SA_2    = "\u006D\u00E7";
MillenniumVarun.consnt_HA      = "\u006E";
MillenniumVarun.consnt_LLA     = "\u0055";

//Gunintamulu
MillenniumVarun.vowelsn_AA_1   = "\u00D5";
MillenniumVarun.vowelsn_AA_2   = "\u00E7";
MillenniumVarun.vowelsn_I_1    = "\u00D5\u00C6";
MillenniumVarun.vowelsn_I_2    = "\u00E7\u00C6";
MillenniumVarun.vowelsn_I_3    = "\u00E7\u0071";
MillenniumVarun.vowelsn_II_1   = "\u00D5\u00C7";
MillenniumVarun.vowelsn_II_2   = "\u00E7\u00C7";
MillenniumVarun.vowelsn_U_1    = "\u00A7";
MillenniumVarun.vowelsn_U_2    = "\u00E1";
MillenniumVarun.vowelsn_UU_1   = "\u00D3";
MillenniumVarun.vowelsn_UU_2   = "\u00E8";
MillenniumVarun.vowelsn_R_1    = "\u003D";
MillenniumVarun.vowelsn_R_2    = "\u00C9";
MillenniumVarun.vowelsn_R_3    = "\u00E3";
MillenniumVarun.vowelsn_CDR_E  = "\u0040";
MillenniumVarun.vowelsn_CDR_O  = "\u00E7\u0040";
MillenniumVarun.vowelsn_EE_1   = "\u00ED";
MillenniumVarun.vowelsn_AI_1   = "\u00CC";
MillenniumVarun.vowelsn_AI_2   = "\u00ED\u00ED";
MillenniumVarun.vowelsn_OO     = "\u00E7\u00ED";

//Matra + anusvara
MillenniumVarun.vowelsn_IM     = "\u00D5\u00C5";
MillenniumVarun.vowelsn_IIM_1  = "\u00D5\u0052";
MillenniumVarun.vowelsn_IIM_2  = "\u00E7\u0052";
MillenniumVarun.vowelsn_IIM_3  = "\u00E7\u0062\u00C7";
MillenniumVarun.vowelsn_AIM    = "\u0051";
MillenniumVarun.vowelsn_OOM    = "\u00E7\u0057";
MillenniumVarun.vowelsn_EEM    = "\u0057";

//Half Forms
MillenniumVarun.halffm_KA_1    = "\u004A\u00D5\u0077";
MillenniumVarun.halffm_KA_2    = "\u004A\u00E7\u0077";
MillenniumVarun.halffm_KA_3    = "\u006B\u00D5\u0077";
MillenniumVarun.halffm_KA_4    = "\u006B\u00E7\u0077";
MillenniumVarun.halffm_KR_1    = "\u00AC\u00D5\u0077";
MillenniumVarun.halffm_KR_2    = "\u00AC\u00E7\u0077";
MillenniumVarun.halffm_KR_3    = "\u00AF\u00D5\u0077";
MillenniumVarun.halffm_KR_4    = "\u00AF\u00E7\u0077";
MillenniumVarun.halffm_KSH     = "\u0023";
MillenniumVarun.halffm_KHA_1   = "\u004B";
MillenniumVarun.halffm_KHHA    = "\u2122";
MillenniumVarun.halffm_KHR     = "\u00B8";
MillenniumVarun.halffm_GA      = "\u0069";
MillenniumVarun.halffm_GR      = "\u00FB";
MillenniumVarun.halffm_GHHA    = "\u0153";
MillenniumVarun.halffm_GHA     = "\u0049";
MillenniumVarun.halffm_CA      = "\u00AE";
MillenniumVarun.halffm_JA_1    = "\u0070";
MillenniumVarun.halffm_JR_1    = "\u00FC";
MillenniumVarun.halffm_JR_2    = "\u00FD";
MillenniumVarun.halffm_NYC     = "\u0067";
MillenniumVarun.halffm_NYJ     = "\u00A1";
MillenniumVarun.halffm_JNY     = "\u0025";
MillenniumVarun.halffm_JHA     = "\u0050";
MillenniumVarun.halffm_NYA     = "\u005F";
MillenniumVarun.halffm_NNA     = "\u0043";
MillenniumVarun.halffm_TA      = "\u006C";
MillenniumVarun.halffm_TT      = "\u00CA";
MillenniumVarun.halffm_TR      = "\u0024";
MillenniumVarun.halffm_THA_1   = "\u004C";
MillenniumVarun.halffm_DY      = "\u00D0";
MillenniumVarun.halffm_DHA     = "\u004F";
MillenniumVarun.halffm_NA      = "\u0076";
MillenniumVarun.halffm_NN      = "\u0056";
MillenniumVarun.halffm_PA_1    = "\u0048";
MillenniumVarun.halffm_PA_2    = "\u0068";
MillenniumVarun.halffm_PR_1    = "\u00D2";
MillenniumVarun.halffm_PR_2    = "\u00D6";
MillenniumVarun.halffm_PHA_1   = "\u0068\u00D5\u0077";
MillenniumVarun.halffm_PHA_2   = "\u0068\u00E7\u0077";
MillenniumVarun.halffm_PHA_3   = "\u0048\u00D5\u0077";
MillenniumVarun.halffm_PHA_4   = "\u0048\u00E7\u0077";
MillenniumVarun.halffm_BA      = "\u0079";
MillenniumVarun.halffm_BHA     = "\u0059";
MillenniumVarun.halffm_MA      = "\u0063";
MillenniumVarun.halffm_YA_1    = "\u00AD";
MillenniumVarun.halffm_YA_2    = "\u00B3";
MillenniumVarun.halffm_YA_3    = "\u00EE";
MillenniumVarun.halffm_RA      = "\u0026";
MillenniumVarun.halffm_LA      = "\u0075";
MillenniumVarun.halffm_VA_1    = "\u004A";
MillenniumVarun.halffm_VA_2    = "\u006B";
MillenniumVarun.halffm_VR_1    = "\u00AC";
MillenniumVarun.halffm_VR_2    = "\u00AF";
MillenniumVarun.halffm_VN      = "\u00D8";
MillenniumVarun.halffm_SHA_1   = "\u004D";
MillenniumVarun.halffm_SHA_2   = "\u00B5";
MillenniumVarun.halffm_SHA_3   = "\u00CD";
MillenniumVarun.halffm_SHR_1   = "\u00CD\u00B4";
MillenniumVarun.halffm_SHR_2   = "\u00DE";
MillenniumVarun.halffm_SSA_1   = "\u003C";
MillenniumVarun.halffm_SSA_2   = "\u00F8";
MillenniumVarun.halffm_SA      = "\u006D";
MillenniumVarun.halffm_HA      = "\u00D4";
MillenniumVarun.halffm_LLA     = "\u00C8";
MillenniumVarun.halffm_RRA     = "\u004E";


//Conjuncts
MillenniumVarun.conjct_KT_1    = "\u00CA\u00D5\u00C0";
MillenniumVarun.conjct_KT_2    = "\u00CA\u00E7\u00C0";
MillenniumVarun.conjct_KR_1    = "\u00AC\u00D5\u00C0";
MillenniumVarun.conjct_KR_2    = "\u00AC\u00E7\u00C0";
MillenniumVarun.conjct_KR_3    = "\u00AF\u00D5\u00C0";
MillenniumVarun.conjct_KR_4    = "\u00AF\u00E7\u00C0";
MillenniumVarun.conjct_RK      = "\u006B\u00E7\u0026\u00C0";
MillenniumVarun.conjct_KSH_1   = "\u0023\u00D5";
MillenniumVarun.conjct_KSH_2   = "\u0023\u00E7";
MillenniumVarun.conjct_KHR_1   = "\u00B8\u00D5";
MillenniumVarun.conjct_KHR_2   = "\u00B8\u00E7";
MillenniumVarun.conjct_GR_1    = "\u00FB\u00D5";
MillenniumVarun.conjct_GR_2    = "\u00FB\u00E7";
MillenniumVarun.conjct_JNY_1   = "\u0025\u00D5";
MillenniumVarun.conjct_JNY_2   = "\u0025\u00E7";
MillenniumVarun.conjct_NYC     = "\u0067\u00D5";
MillenniumVarun.conjct_NYJ     = "\u00A1\u00D5";
MillenniumVarun.conjct_JR_1    = "\u00FC\u00D5";
MillenniumVarun.conjct_JR_2    = "\u00FD\u00D5";
MillenniumVarun.conjct_TTTT    = "\u0066";
MillenniumVarun.conjct_TT_TTH  = "\u00F9";
MillenniumVarun.conjct_TTHTTH  = "\u0072";
MillenniumVarun.conjct_DDDD_1  = "\u00B7";
MillenniumVarun.conjct_DDDD_2  = "\u00BA";
MillenniumVarun.conjct_DD_DDH  = "\u00FA";
MillenniumVarun.conjct_DDHDDH  = "\u00B6";
MillenniumVarun.conjct_TT_1    = "\u00CA\u00D5";
MillenniumVarun.conjct_TT_2    = "\u00CA\u00E7";
MillenniumVarun.conjct_TR_1    = "\u0024\u00D5";
MillenniumVarun.conjct_TR_2    = "\u0024\u00E7";
MillenniumVarun.conjct_DG      = "\u00C3";
MillenniumVarun.conjct_DD      = "\u00CE";
MillenniumVarun.conjct_D_DH_1  = "\u00D7";
MillenniumVarun.conjct_D_DH_2  = "\u00E0";
MillenniumVarun.conjct_DB      = "\u00C2";
MillenniumVarun.conjct_DBH     = "\u0074";
MillenniumVarun.conjct_DY_1    = "\u00D0\u00D5";
MillenniumVarun.conjct_DY_2    = "\u00D0\u00E7";
MillenniumVarun.conjct_DV      = "\u00DC";
MillenniumVarun.conjct_DR      = "\u00EA";
MillenniumVarun.conjct_NN_1    = "\u0056\u00D5";
MillenniumVarun.conjct_NN_2    = "\u0056\u00E7";
MillenniumVarun.conjct_PR_1    = "\u00D2\u00D5";
MillenniumVarun.conjct_PR_2    = "\u00D2\u00E7";
MillenniumVarun.conjct_PR_3    = "\u00D6\u00D5";
MillenniumVarun.conjct_PR_4    = "\u00D6\u00E7";
MillenniumVarun.conjct_VR_1    = "\u00AC\u00D5";
MillenniumVarun.conjct_VR_2    = "\u00AC\u00E7";
MillenniumVarun.conjct_VR_3    = "\u00AF\u00D5";
MillenniumVarun.conjct_VR_4    = "\u00AF\u00E7";
MillenniumVarun.conjct_VN      = "\u00D8\u00D5";
MillenniumVarun.conjct_SHR_1   = "\u00CD\u00B4\u00D5";
MillenniumVarun.conjct_SHR_2   = "\u00DE\u00E7";
MillenniumVarun.conjct_SHC     = "\u00BD\u00E7";
MillenniumVarun.conjct_SHV_1   = "\u00E9\u00D5";
MillenniumVarun.conjct_SHV_2   = "\u00E9\u00E7";
MillenniumVarun.conjct_SSTT    = "\u00E4";
MillenniumVarun.conjct_SSTTH_1 = "\u00F7";
MillenniumVarun.conjct_SSTTH_2 = "\u00FF";
MillenniumVarun.conjct_HNN     = "\u201D";
MillenniumVarun.conjct_HL      = "\u00BC";
MillenniumVarun.conjct_HV      = "\u00BB";
MillenniumVarun.conjct_HY      = "\u00BF\u00E7";
MillenniumVarun.conjct_RPHE    = "\u0048\u00E7\u0026\u00ED\u00C0";

//Combos
MillenniumVarun.combo_KE       = "\u006B\u00E7\u00ED\u00C0";
MillenniumVarun.combo_KEM      = "\u006B\u00E7\u0057\u00C0";
MillenniumVarun.combo_KAM      = "\u006B\u00E7\u0062\u00C0";
MillenniumVarun.combo_KUM      = "\u006B\u00E7\u00E1\u0062\u00C0";
MillenniumVarun.combo_KR       = "\u006B\u00E7\u003D\u00C0";
MillenniumVarun.combo_KU       = "\u006B\u00E7\u00E1\u00C0";
MillenniumVarun.combo_KUU      = "\u006B\u00E7\u00D3\u00C0";
MillenniumVarun.combo_PHAI     = "\u0048\u00E7\u00CC\u00C0";
MillenniumVarun.combo_RU       = "\u00A9";
MillenniumVarun.combo_RUU      = "\u00AA";
MillenniumVarun.combo_HR       = "\u00CB";

//Half forms of RA
MillenniumVarun.halffm_RA_ANU  = "\u00A5";
MillenniumVarun.halffm_IIR     = "\u00E7\u0061";
MillenniumVarun.halffm_EER_1   = "\u0078";
MillenniumVarun.halffm_EER_2   = "\u0026\u00ED";

//rakar
MillenniumVarun.vattu_RA_1     = "\u00CF";
MillenniumVarun.vattu_RA_2     = "\u00A3";
MillenniumVarun.vattu_RA_3     = "\u00B4";
MillenniumVarun.vattu_RA_4     = "\u005E";

MillenniumVarun.vattu_LA       = "\u00C1";
MillenniumVarun.vattu_NA       = "\u003E";

MillenniumVarun.misc_OM        = "\u00DF";

//Matches ASCII
MillenniumVarun.EXCLAM         = "\u0021";
MillenniumVarun.PAREN_LEFT     = "\u0028";
MillenniumVarun.PAREN_RIGHT    = "\u0029";
MillenniumVarun.COMMA          = "\u002C";
MillenniumVarun.HYPHEN         = "\u002D";
MillenniumVarun.PERIOD         = "\u002E";
MillenniumVarun.SLASH          = "\u002F";
MillenniumVarun.SEMICOLON      = "\u003B";
MillenniumVarun.EQUALS         = "\u2020";
MillenniumVarun.QUESTION       = "\u003F";

//Does not match ASCII
//Devanagari Digits
MillenniumVarun.digit_ZERO_DE  = "\u0030";
MillenniumVarun.digit_ONE_DE   = "\u0031";
MillenniumVarun.digit_TWO_DE   = "\u0032";
MillenniumVarun.digit_THREE_DE = "\u0033";
MillenniumVarun.digit_FOUR_DE  = "\u0034";
MillenniumVarun.digit_FIVE_DE  = "\u0035";
MillenniumVarun.digit_SIX_DE   = "\u0036";
MillenniumVarun.digit_SEVEN_DE = "\u0037";
MillenniumVarun.digit_EIGHT_DE = "\u0038";
MillenniumVarun.digit_NINE_DE  = "\u0039";

//Digits
MillenniumVarun.digit_ZERO     = "\u02C6";
MillenniumVarun.digit_ONE      = "\u2030";
MillenniumVarun.digit_TWO      = "\u0160";
MillenniumVarun.digit_FOUR     = "\u0152";
MillenniumVarun.digit_NINE     = "\u2018";

MillenniumVarun.PLUS           = "\u0129";
MillenniumVarun.MULTIPLY       = "\u0192";
MillenniumVarun.PERCENT        = "\u2026";
MillenniumVarun.LQTDOUBLE      = "\u2019";
MillenniumVarun.RQTDOUBLE      = "\u201C";

MillenniumVarun.toPadma = new Object();

//Specials
MillenniumVarun.toPadma[MillenniumVarun.avagraha]      = Padma.avagraha;
MillenniumVarun.toPadma[MillenniumVarun.anusvara]      = Padma.anusvara;
MillenniumVarun.toPadma[MillenniumVarun.candrabindu]   = Padma.candrabindu;
MillenniumVarun.toPadma[MillenniumVarun.virama]        = Padma.syllbreak;
//MillenniumVarun.toPadma[MillenniumVarun.visarga]       = Padma.visarga;

//Vowels
MillenniumVarun.toPadma[MillenniumVarun.vowel_A_1]     = Padma.vowel_A;
MillenniumVarun.toPadma[MillenniumVarun.vowel_A_2]     = Padma.vowel_A;
MillenniumVarun.toPadma[MillenniumVarun.vowel_AA_1]    = Padma.vowel_AA;
MillenniumVarun.toPadma[MillenniumVarun.vowel_AA_2]    = Padma.vowel_AA;
MillenniumVarun.toPadma[MillenniumVarun.vowel_I]       = Padma.vowel_I;
MillenniumVarun.toPadma[MillenniumVarun.vowel_II]      = Padma.vowel_II;
MillenniumVarun.toPadma[MillenniumVarun.vowel_U]       = Padma.vowel_U;
MillenniumVarun.toPadma[MillenniumVarun.vowel_UU]      = Padma.vowel_UU;
MillenniumVarun.toPadma[MillenniumVarun.vowel_R]       = Padma.vowel_R;
MillenniumVarun.toPadma[MillenniumVarun.vowel_EE]      = Padma.vowel_EE;
MillenniumVarun.toPadma[MillenniumVarun.vowel_AI]      = Padma.vowel_AI;
MillenniumVarun.toPadma[MillenniumVarun.vowel_CDR_O]   = Padma.vowel_CDR_O;
MillenniumVarun.toPadma[MillenniumVarun.vowel_OO_1]    = Padma.vowel_OO;
MillenniumVarun.toPadma[MillenniumVarun.vowel_OO_2]    = Padma.vowel_OO;
MillenniumVarun.toPadma[MillenniumVarun.vowel_AU_1]    = Padma.vowel_AU;
MillenniumVarun.toPadma[MillenniumVarun.vowel_AU_2]    = Padma.vowel_AU;

//consonants
MillenniumVarun.toPadma[MillenniumVarun.consnt_KA_1]   = Padma.consnt_KA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_KA_2]   = Padma.consnt_KA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_KA_3]   = Padma.consnt_KA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_KA_4]   = Padma.consnt_KA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_KHA_1]  = Padma.consnt_KHA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_KHA_2]  = Padma.consnt_KHA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_KHHA]   = Padma.consnt_KHHA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_GA_1]   = Padma.consnt_GA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_GA_2]   = Padma.consnt_GA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_GHHA]   = Padma.consnt_GHHA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_GHA_1]  = Padma.consnt_GHA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_GHA_2]  = Padma.consnt_GHA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_NGA]    = Padma.consnt_NGA;

MillenniumVarun.toPadma[MillenniumVarun.consnt_CA_1]   = Padma.consnt_CA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_CA_2]   = Padma.consnt_CA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_CHA]    = Padma.consnt_CHA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_JA_1]   = Padma.consnt_JA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_JA_2]   = Padma.consnt_JA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_JHA_1]  = Padma.consnt_JHA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_JHA_2]  = Padma.consnt_JHA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_NYA]    = Padma.consnt_NYA;

MillenniumVarun.toPadma[MillenniumVarun.consnt_TTA]    = Padma.consnt_TTA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_TTHA_1] = Padma.consnt_TTHA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_TTHA_2] = Padma.consnt_TTHA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_DDA]    = Padma.consnt_DDA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_DDDHA]  = Padma.consnt_DDDHA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_DDHA]   = Padma.consnt_DDHA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_NNA_1]  = Padma.consnt_NNA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_NNA_2]  = Padma.consnt_NNA;

MillenniumVarun.toPadma[MillenniumVarun.consnt_TA_1]   = Padma.consnt_TA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_TA_2]   = Padma.consnt_TA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_THA_1]  = Padma.consnt_THA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_THA_2]  = Padma.consnt_THA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_DA_1]   = Padma.consnt_DA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_DHA_1]  = Padma.consnt_DHA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_DHA_2]  = Padma.consnt_DHA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_NA_1]   = Padma.consnt_NA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_NA_2]   = Padma.consnt_NA;

MillenniumVarun.toPadma[MillenniumVarun.consnt_PA_1]   = Padma.consnt_PA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_PA_2]   = Padma.consnt_PA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_PA_3]   = Padma.consnt_PA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_PA_4]   = Padma.consnt_PA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_PHA_1]  = Padma.consnt_PHA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_PHA_2]  = Padma.consnt_PHA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_PHA_3]  = Padma.consnt_PHA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_PHA_4]  = Padma.consnt_PHA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_BA_1]   = Padma.consnt_BA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_BA_2]   = Padma.consnt_BA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_BHA_1]  = Padma.consnt_BHA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_BHA_2]  = Padma.consnt_BHA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_MA_1]   = Padma.consnt_MA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_MA_2]   = Padma.consnt_MA;

MillenniumVarun.toPadma[MillenniumVarun.consnt_YA_1]   = Padma.consnt_YA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_YA_2]   = Padma.consnt_YA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_YA_3]   = Padma.consnt_YA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_YA_4]   = Padma.consnt_YA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_YA_5]   = Padma.consnt_YA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_YA_6]   = Padma.consnt_YA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_RA]     = Padma.consnt_RA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_LA_1]   = Padma.consnt_LA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_LA_2]   = Padma.consnt_LA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_LA_3]   = Padma.consnt_LA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_VA_1]   = Padma.consnt_VA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_VA_2]   = Padma.consnt_VA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_VA_3]   = Padma.consnt_VA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_VA_4]   = Padma.consnt_VA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_SHA_1]  = Padma.consnt_SHA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_SHA_2]  = Padma.consnt_SHA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_SHA_3]  = Padma.consnt_SHA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_SHA_4]  = Padma.consnt_SHA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_SSA_1]  = Padma.consnt_SSA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_SSA_2]  = Padma.consnt_SSA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_SSA_3]  = Padma.consnt_SSA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_SSA_4]  = Padma.consnt_SSA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_SA_1]   = Padma.consnt_SA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_SA_2]   = Padma.consnt_SA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_HA]     = Padma.consnt_HA;
MillenniumVarun.toPadma[MillenniumVarun.consnt_LLA]    = Padma.consnt_LLA;

//Gunintamulu
MillenniumVarun.toPadma[MillenniumVarun.vowelsn_AA_1]  = Padma.vowelsn_AA;
MillenniumVarun.toPadma[MillenniumVarun.vowelsn_AA_2]  = Padma.vowelsn_AA;
MillenniumVarun.toPadma[MillenniumVarun.vowelsn_I_1]   = Padma.vowelsn_I;
MillenniumVarun.toPadma[MillenniumVarun.vowelsn_I_2]   = Padma.vowelsn_I;
MillenniumVarun.toPadma[MillenniumVarun.vowelsn_I_3]   = Padma.vowelsn_I;
MillenniumVarun.toPadma[MillenniumVarun.vowelsn_II_1]  = Padma.vowelsn_II;
MillenniumVarun.toPadma[MillenniumVarun.vowelsn_II_2]  = Padma.vowelsn_II;
MillenniumVarun.toPadma[MillenniumVarun.vowelsn_U_1]   = Padma.vowelsn_U;
MillenniumVarun.toPadma[MillenniumVarun.vowelsn_U_2]   = Padma.vowelsn_U;
MillenniumVarun.toPadma[MillenniumVarun.vowelsn_UU_1]  = Padma.vowelsn_UU;
MillenniumVarun.toPadma[MillenniumVarun.vowelsn_UU_2]  = Padma.vowelsn_UU;
MillenniumVarun.toPadma[MillenniumVarun.vowelsn_R_1]   = Padma.vowelsn_R;
MillenniumVarun.toPadma[MillenniumVarun.vowelsn_R_2]   = Padma.vowelsn_R;
MillenniumVarun.toPadma[MillenniumVarun.vowelsn_R_3]   = Padma.vowelsn_R;
MillenniumVarun.toPadma[MillenniumVarun.vowelsn_CDR_E] = Padma.vowelsn_CDR_E;
MillenniumVarun.toPadma[MillenniumVarun.vowelsn_CDR_O] = Padma.vowelsn_CDR_O;
MillenniumVarun.toPadma[MillenniumVarun.vowelsn_EE_1]  = Padma.vowelsn_EE;
MillenniumVarun.toPadma[MillenniumVarun.vowelsn_AI_1]  = Padma.vowelsn_AI;
MillenniumVarun.toPadma[MillenniumVarun.vowelsn_AI_2]  = Padma.vowelsn_AI;
MillenniumVarun.toPadma[MillenniumVarun.vowelsn_OO]    = Padma.vowelsn_OO;

//Matra + anusvara
MillenniumVarun.toPadma[MillenniumVarun.vowelsn_IM]    = Padma.vowelsn_I  + Padma.anusvara;
MillenniumVarun.toPadma[MillenniumVarun.vowelsn_IIM_1] = Padma.vowelsn_II + Padma.anusvara;
MillenniumVarun.toPadma[MillenniumVarun.vowelsn_IIM_2] = Padma.vowelsn_II + Padma.anusvara;
MillenniumVarun.toPadma[MillenniumVarun.vowelsn_IIM_3] = Padma.vowelsn_II + Padma.anusvara;
MillenniumVarun.toPadma[MillenniumVarun.vowelsn_AIM]   = Padma.vowelsn_AI + Padma.anusvara;
MillenniumVarun.toPadma[MillenniumVarun.vowelsn_OOM]   = Padma.vowelsn_OO + Padma.anusvara;
MillenniumVarun.toPadma[MillenniumVarun.vowelsn_EEM]   = Padma.vowelsn_EE + Padma.anusvara;

//half forms
MillenniumVarun.toPadma[MillenniumVarun.halffm_KA_1]   = Padma.halffm_KA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_KA_2]   = Padma.halffm_KA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_KA_3]   = Padma.halffm_KA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_KA_4]   = Padma.halffm_KA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_KR_1]   = Padma.halffm_KA + Padma.halffm_RA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_KR_2]   = Padma.halffm_KA + Padma.halffm_RA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_KR_3]   = Padma.halffm_KA + Padma.halffm_RA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_KR_4]   = Padma.halffm_KA + Padma.halffm_RA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_KSH]    = Padma.halffm_KA + Padma.halffm_SSA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_KHA_1]  = Padma.halffm_KHA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_KHHA]   = Padma.halffm_KHHA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_KHR]    = Padma.halffm_KHA + Padma.halffm_RA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_GA]     = Padma.halffm_GA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_GR]     = Padma.halffm_GA + Padma.halffm_RA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_GHHA]   = Padma.halffm_GHHA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_GHA]    = Padma.halffm_GHA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_CA]     = Padma.halffm_CA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_JA_1]   = Padma.halffm_JA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_JR_1]   = Padma.halffm_JA + Padma.halffm_RA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_JR_2]   = Padma.halffm_JA + Padma.halffm_RA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_NYC]    = Padma.halffm_NYA + Padma.halffm_CA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_NYJ]    = Padma.halffm_NYA + Padma.halffm_JA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_JNY]    = Padma.halffm_JA + Padma.halffm_NYA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_JHA]    = Padma.halffm_JHA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_NYA]    = Padma.halffm_NYA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_NNA]    = Padma.halffm_NNA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_TA]     = Padma.halffm_TA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_TT]     = Padma.halffm_TA + Padma.halffm_TA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_TR]     = Padma.halffm_TA + Padma.halffm_RA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_THA_1]  = Padma.halffm_THA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_DY]     = Padma.halffm_DA + Padma.halffm_YA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_DHA]    = Padma.halffm_DHA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_NA]     = Padma.halffm_NA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_NN]     = Padma.halffm_NA + Padma.halffm_NA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_PA_1]   = Padma.halffm_PA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_PA_2]   = Padma.halffm_PA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_PR_1]   = Padma.halffm_PA + Padma.halffm_RA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_PR_2]   = Padma.halffm_PA + Padma.halffm_RA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_PHA_1]  = Padma.halffm_PHA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_PHA_2]  = Padma.halffm_PHA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_PHA_3]  = Padma.halffm_PHA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_PHA_4]  = Padma.halffm_PHA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_BA]     = Padma.halffm_BA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_BHA]    = Padma.halffm_BHA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_MA]     = Padma.halffm_MA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_YA_1]   = Padma.halffm_YA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_YA_2]   = Padma.halffm_YA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_YA_3]   = Padma.halffm_YA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_RA]     = Padma.halffm_RA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_LA]     = Padma.halffm_LA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_VA_1]   = Padma.halffm_VA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_VA_2]   = Padma.halffm_VA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_VR_1]   = Padma.halffm_VA + Padma.halffm_RA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_VR_2]   = Padma.halffm_VA + Padma.halffm_RA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_SHA_1]  = Padma.halffm_SHA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_SHA_2]  = Padma.halffm_SHA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_SHA_3]  = Padma.halffm_SHA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_SHR_1]  = Padma.halffm_SHA + Padma.halffm_RA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_SHR_2]  = Padma.halffm_SHA + Padma.halffm_RA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_SSA_1]  = Padma.halffm_SSA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_SSA_2]  = Padma.halffm_SSA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_SA]     = Padma.halffm_SA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_HA]     = Padma.halffm_HA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_LLA]    = Padma.halffm_LLA;
MillenniumVarun.toPadma[MillenniumVarun.halffm_RRA]    = Padma.halffm_RRA;

//Conjuncts
MillenniumVarun.toPadma[MillenniumVarun.conjct_KT_1]   = Padma.consnt_KA + Padma.vattu_TA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_KT_2]   = Padma.consnt_KA + Padma.vattu_TA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_KR_1]   = Padma.consnt_KA + Padma.vattu_RA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_KR_2]   = Padma.consnt_KA + Padma.vattu_RA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_KR_3]   = Padma.consnt_KA + Padma.vattu_RA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_KR_4]   = Padma.consnt_KA + Padma.vattu_RA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_RK]     = Padma.consnt_RA + Padma.vattu_KA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_KSH_1]  = Padma.consnt_KA + Padma.vattu_SSA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_KSH_2]  = Padma.consnt_KA + Padma.vattu_SSA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_KHR_1]  = Padma.consnt_KHA + Padma.vattu_RA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_KHR_2]  = Padma.consnt_KHA + Padma.vattu_RA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_GR_1]   = Padma.consnt_GA + Padma.vattu_RA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_GR_2]   = Padma.consnt_GA + Padma.vattu_RA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_JNY_1]  = Padma.consnt_JA + Padma.vattu_NYA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_JNY_2]  = Padma.consnt_JA + Padma.vattu_NYA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_NYC]    = Padma.consnt_NYA + Padma.vattu_CA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_NYJ]    = Padma.consnt_NYA + Padma.vattu_JA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_JR_1]   = Padma.consnt_JA + Padma.vattu_JA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_JR_2]   = Padma.consnt_JA + Padma.vattu_JA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_TTTT]   = Padma.consnt_TTA + Padma.vattu_TTA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_TT_TTH] = Padma.consnt_TTA + Padma.vattu_TTHA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_TTHTTH] = Padma.consnt_TTHA + Padma.vattu_TTHA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_DDDD_1] = Padma.consnt_DDA + Padma.vattu_DDA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_DDDD_2] = Padma.consnt_DDA + Padma.vattu_DDA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_DD_DDH] = Padma.consnt_DDA + Padma.vattu_DDHA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_DDHDDH] = Padma.consnt_DDHA + Padma.vattu_DDHA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_TT_1]   = Padma.consnt_TA + Padma.vattu_TA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_TT_2]   = Padma.consnt_TA + Padma.vattu_TA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_TR_1]   = Padma.consnt_TA + Padma.vattu_RA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_TR_2]   = Padma.consnt_TA + Padma.vattu_RA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_DG]     = Padma.consnt_DA + Padma.vattu_GA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_DD]     = Padma.consnt_DA + Padma.vattu_DA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_D_DH_1] = Padma.consnt_DA + Padma.vattu_DHA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_D_DH_2] = Padma.consnt_DA + Padma.vattu_DHA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_DB]     = Padma.consnt_DA + Padma.vattu_BA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_DBH]    = Padma.consnt_DA + Padma.vattu_BHA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_DY_1]   = Padma.consnt_DA + Padma.vattu_YA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_DY_2]   = Padma.consnt_DA + Padma.vattu_YA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_DV]     = Padma.consnt_DA + Padma.vattu_VA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_DR]     = Padma.consnt_DA + Padma.vattu_RA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_NN_1]   = Padma.consnt_NA + Padma.vattu_NA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_NN_2]   = Padma.consnt_NA + Padma.vattu_NA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_PR_1]   = Padma.consnt_PA + Padma.vattu_RA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_PR_2]   = Padma.consnt_PA + Padma.vattu_RA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_PR_3]   = Padma.consnt_PA + Padma.vattu_RA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_PR_4]   = Padma.consnt_PA + Padma.vattu_RA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_VR_1]   = Padma.consnt_VA + Padma.vattu_RA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_VR_2]   = Padma.consnt_VA + Padma.vattu_RA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_VR_3]   = Padma.consnt_VA + Padma.vattu_RA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_VR_4]   = Padma.consnt_VA + Padma.vattu_RA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_VN]     = Padma.consnt_VA + Padma.vattu_NA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_SHR_1]  = Padma.consnt_SHA + Padma.vattu_RA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_SHR_2]  = Padma.consnt_SHA + Padma.vattu_RA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_SHC]    = Padma.consnt_SHA + Padma.vattu_CA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_SHV_1]  = Padma.consnt_SHA + Padma.vattu_VA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_SHV_2]  = Padma.consnt_SHA + Padma.vattu_VA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_SSTT]   = Padma.consnt_SSA + Padma.vattu_TTA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_SSTTH_1]= Padma.consnt_SSA + Padma.vattu_TTHA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_SSTTH_2]= Padma.consnt_SSA + Padma.vattu_TTHA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_HNN]    = Padma.consnt_HA + Padma.vattu_NNA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_HL]     = Padma.consnt_HA + Padma.vattu_LA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_HV]     = Padma.consnt_HA + Padma.vattu_VA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_HY]     = Padma.consnt_HA + Padma.vattu_YA;
MillenniumVarun.toPadma[MillenniumVarun.conjct_RPHE]   = Padma.consnt_RA + Padma.vattu_PHA + Padma.vowelsn_EE;

//Combos
MillenniumVarun.toPadma[MillenniumVarun.combo_KE]      = Padma.consnt_KA + Padma.vowelsn_EE;
MillenniumVarun.toPadma[MillenniumVarun.combo_KEM]     = Padma.consnt_KA + Padma.vowelsn_EE + Padma.anusvara;
MillenniumVarun.toPadma[MillenniumVarun.combo_KAM]     = Padma.consnt_KA + Padma.anusvara;
MillenniumVarun.toPadma[MillenniumVarun.combo_KUM]     = Padma.consnt_KA + Padma.vowelsn_U + Padma.anusvara;
MillenniumVarun.toPadma[MillenniumVarun.combo_KR]      = Padma.consnt_KA + Padma.vowelsn_R;
MillenniumVarun.toPadma[MillenniumVarun.combo_KU]      = Padma.consnt_KA + Padma.vowelsn_U;
MillenniumVarun.toPadma[MillenniumVarun.combo_KUU]     = Padma.consnt_KA + Padma.vowelsn_UU;
MillenniumVarun.toPadma[MillenniumVarun.combo_PHAI]    = Padma.consnt_PHA + Padma.vowelsn_AI;
MillenniumVarun.toPadma[MillenniumVarun.combo_RU]      = Padma.consnt_RA + Padma.vowelsn_U;
MillenniumVarun.toPadma[MillenniumVarun.combo_RUU]     = Padma.consnt_RA + Padma.vowelsn_UU;
MillenniumVarun.toPadma[MillenniumVarun.combo_HR]      = Padma.consnt_HA + Padma.vowelsn_R;

//Half forms of RA
MillenniumVarun.toPadma[MillenniumVarun.halffm_RA_ANU] = Padma.halffm_RA + Padma.anusvara;
MillenniumVarun.toPadma[MillenniumVarun.halffm_IIR]    = Padma.halffm_RA + Padma.vowelsn_II;
MillenniumVarun.toPadma[MillenniumVarun.halffm_EER_1]  = Padma.halffm_RA + Padma.vowelsn_EE;
MillenniumVarun.toPadma[MillenniumVarun.halffm_EER_2]  = Padma.halffm_RA + Padma.vowelsn_EE;

MillenniumVarun.toPadma[MillenniumVarun.vattu_RA_1]    = Padma.vattu_RA;
MillenniumVarun.toPadma[MillenniumVarun.vattu_RA_2]    = Padma.vattu_RA;
MillenniumVarun.toPadma[MillenniumVarun.vattu_RA_3]    = Padma.vattu_RA;
MillenniumVarun.toPadma[MillenniumVarun.vattu_RA_4]    = Padma.vattu_RA;

MillenniumVarun.toPadma[MillenniumVarun.vattu_LA]      = Padma.vattu_LA;
MillenniumVarun.toPadma[MillenniumVarun.vattu_NA]      = Padma.vattu_NA;

MillenniumVarun.toPadma[MillenniumVarun.misc_OM]       = Padma.om;

//Devanagari Digits
MillenniumVarun.toPadma[MillenniumVarun.digit_ZERO_DE] = Padma.digit_ZERO;
MillenniumVarun.toPadma[MillenniumVarun.digit_ONE_DE]  = Padma.digit_ONE;
MillenniumVarun.toPadma[MillenniumVarun.digit_TWO_DE]  = Padma.digit_TWO;
MillenniumVarun.toPadma[MillenniumVarun.digit_THREE_DE]= Padma.digit_THREE;
MillenniumVarun.toPadma[MillenniumVarun.digit_FOUR_DE] = Padma.digit_FOUR;
MillenniumVarun.toPadma[MillenniumVarun.digit_FIVE_DE] = Padma.digit_FIVE;
MillenniumVarun.toPadma[MillenniumVarun.digit_SIX_DE]  = Padma.digit_SIX;
MillenniumVarun.toPadma[MillenniumVarun.digit_SEVEN_DE]= Padma.digit_SEVEN;
MillenniumVarun.toPadma[MillenniumVarun.digit_EIGHT_DE]= Padma.digit_EIGHT;
MillenniumVarun.toPadma[MillenniumVarun.digit_NINE_DE] = Padma.digit_NINE;

//Digits
MillenniumVarun.toPadma[MillenniumVarun.digit_ZERO]    = '0';
MillenniumVarun.toPadma[MillenniumVarun.digit_ONE]     = '1';
MillenniumVarun.toPadma[MillenniumVarun.digit_TWO]     = '2';
MillenniumVarun.toPadma[MillenniumVarun.digit_FOUR]    = '4';
MillenniumVarun.toPadma[MillenniumVarun.digit_NINE]    = '9';

MillenniumVarun.toPadma[MillenniumVarun.PLUS]          = "\u002B";
MillenniumVarun.toPadma[MillenniumVarun.MULTIPLY]      = "\u00D7";
MillenniumVarun.toPadma[MillenniumVarun.PERCENT]       = "%";
MillenniumVarun.toPadma[MillenniumVarun.LQTDOUBLE]     = "\u201C";
MillenniumVarun.toPadma[MillenniumVarun.RQTDOUBLE]     = "\u201D";


MillenniumVarun.prefixList = new Object();
MillenniumVarun.prefixList[MillenniumVarun.vowelsn_I_1] = true;
MillenniumVarun.prefixList[MillenniumVarun.vowelsn_I_2] = true;
MillenniumVarun.prefixList[MillenniumVarun.vowelsn_I_3] = true;
MillenniumVarun.prefixList[MillenniumVarun.vowelsn_IM]  = true;

MillenniumVarun.suffixList = new Object();
MillenniumVarun.suffixList[MillenniumVarun.halffm_RA]     = true;
MillenniumVarun.suffixList[MillenniumVarun.halffm_RA_ANU] = true;
MillenniumVarun.suffixList[MillenniumVarun.halffm_IIR]    = true;
MillenniumVarun.suffixList[MillenniumVarun.halffm_EER_1]  = true;
MillenniumVarun.suffixList[MillenniumVarun.halffm_EER_2]  = true;

MillenniumVarun.redundantList = new Object();

MillenniumVarun.overloadList = new Object();
MillenniumVarun.overloadList["\u0044"]     = true;
MillenniumVarun.overloadList["\u0044\u00D5\u00E7"] = true;
MillenniumVarun.overloadList["\u00E7"]     = true;
MillenniumVarun.overloadList["\u00E9"]     = true;
MillenniumVarun.overloadList["\u00BF"]     = true;
MillenniumVarun.overloadList["\u00BD"]     = true;
MillenniumVarun.overloadList[MillenniumVarun.vowel_A_1]    = true;
MillenniumVarun.overloadList[MillenniumVarun.vowel_A_2]    = true;
MillenniumVarun.overloadList[MillenniumVarun.vowel_AA_1]   = true;
MillenniumVarun.overloadList[MillenniumVarun.vowel_AA_2]   = true;
MillenniumVarun.overloadList[MillenniumVarun.vowel_EE]     = true;
MillenniumVarun.overloadList[MillenniumVarun.vowel_I]      = true;
MillenniumVarun.overloadList[MillenniumVarun.vowelsn_AA_1] = true;
MillenniumVarun.overloadList[MillenniumVarun.vowelsn_AA_2] = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_KSH]   = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_KHA_1] = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_KHHA]  = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_KHR]   = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_GA]    = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_GR]    = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_GHHA]  = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_GHA]   = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_CA]    = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_JA_1]  = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_NYC]   = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_NYJ]   = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_NYA]   = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_JNY]   = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_JHA]   = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_NNA]   = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_TA]    = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_TT]    = true;
MillenniumVarun.overloadList[MillenniumVarun.conjct_TT_1]  = true;
MillenniumVarun.overloadList[MillenniumVarun.conjct_TT_2]  = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_TR]    = true;
MillenniumVarun.overloadList[MillenniumVarun.conjct_TR_1]  = true;
MillenniumVarun.overloadList[MillenniumVarun.conjct_TR_2]  = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_THA_1] = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_DY]    = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_DHA]   = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_NA]    = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_NN]    = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_PA_1]  = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_PA_2]  = true;
MillenniumVarun.overloadList[MillenniumVarun.consnt_PA_1]  = true;
MillenniumVarun.overloadList[MillenniumVarun.consnt_PA_2]  = true;
MillenniumVarun.overloadList[MillenniumVarun.consnt_PA_3]  = true;
MillenniumVarun.overloadList[MillenniumVarun.consnt_PA_4]  = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_PR_1]  = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_PR_2]  = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_BA]    = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_BHA]   = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_MA]    = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_YA_1]  = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_YA_2]  = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_YA_3]  = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_LA]    = true;
MillenniumVarun.overloadList[MillenniumVarun.consnt_VA_1]  = true;
MillenniumVarun.overloadList[MillenniumVarun.consnt_VA_2]  = true;
MillenniumVarun.overloadList[MillenniumVarun.consnt_VA_3]  = true;
MillenniumVarun.overloadList[MillenniumVarun.consnt_VA_4]  = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_VA_1]  = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_VA_2]  = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_VR_1]  = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_VR_2]  = true;
MillenniumVarun.overloadList[MillenniumVarun.conjct_VR_1]  = true;
MillenniumVarun.overloadList[MillenniumVarun.conjct_VR_2]  = true;
MillenniumVarun.overloadList[MillenniumVarun.conjct_VR_3]  = true;
MillenniumVarun.overloadList[MillenniumVarun.conjct_VR_4]  = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_VN]    = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_SHA_1] = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_SHA_2] = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_SHA_3] = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_SHR_1] = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_SHR_2] = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_SSA_1] = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_SSA_2] = true;
MillenniumVarun.overloadList[MillenniumVarun.halffm_SA]    = true;
MillenniumVarun.overloadList["\u006B\u00E7\u00ED"]       = true;
MillenniumVarun.overloadList["\u006B\u00E7\u003D"]       = true;
MillenniumVarun.overloadList["\u006B\u00E7\u00E1"]       = true;
MillenniumVarun.overloadList["\u006B\u00E7\u00E1\u0062"] = true;
MillenniumVarun.overloadList["\u006B\u00E7\u0057"]       = true;
MillenniumVarun.overloadList["\u006B\u00E7\u0062"]       = true;
MillenniumVarun.overloadList["\u00E7\u0062"]             = true;
MillenniumVarun.overloadList["\u006B\u00E7\u00D3"]       = true;
MillenniumVarun.overloadList["\u0048\u00E7\u00CC"]       = true;
MillenniumVarun.overloadList["\u006B\u00E7\u0026"]       = true;
MillenniumVarun.overloadList["\u0048\u00E7\u0026"]       = true;
MillenniumVarun.overloadList["\u0048\u00E7\u0026\u00ED"] = true;

//MillenniumVarunFX
function MillenniumVarunFX()
{
}

MillenniumVarunFX.maxLookupLen = MillenniumVarun.maxLookupLen;
MillenniumVarunFX.fontFace     = "MillenniumVarunFX";
MillenniumVarunFX.displayName  = "MillenniumVarunFX";
MillenniumVarunFX.script       = MillenniumVarun.script;
MillenniumVarunFX.hasSuffixes  = MillenniumVarun.hasSuffixes;

MillenniumVarunFX.lookup = function (str)
{
    return MillenniumVarun.lookup(str);
}

MillenniumVarunFX.isPrefixSymbol = function (str)
{
    return MillenniumVarun.isPrefixSymbol(str);
}

MillenniumVarunFX.isSuffixSymbol = function (str)
{
    return MillenniumVarun.isSuffixSymbol(str);
}

MillenniumVarunFX.isOverloaded = function (str)
{
    return MillenniumVarun.isOverloaded(str);
}

MillenniumVarunFX.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return MillenniumVarun.handleTwoPartVowelSigns(sign1, sign2);
}

MillenniumVarunFX.isRedundant = function (str)
{
    return MillenniumVarun.isRedundant(str);
}
