//$Id: Shree_Dev_0714.js,v 1.1 2008/06/16 17:18:55 vnagarjuna Exp $

//Copyright 2007 KulbirSaini   <kulbirsaini@students.iiit.ac.in>
//Copyright 2007 Harshita Vani <harshita@atc.tcs.com>

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

//Shree_Dev_0714 Devanagari
function Shree_Dev_0714()
{
}

//The interface every dynamic font encoding should implement
Shree_Dev_0714.maxLookupLen = 3;
Shree_Dev_0714.fontFace     = "Shree-Dev-0714";
Shree_Dev_0714.displayName  = "Shree Dev 714";
Shree_Dev_0714.script       = Padma.script_DEVANAGARI;
Shree_Dev_0714.hasSuffixes  = true;

Shree_Dev_0714.lookup = function (str)
{
    return Shree_Dev_0714.toPadma[str];
}

Shree_Dev_0714.isPrefixSymbol = function (str)
{
    return Shree_Dev_0714.prefixList[str] != null;
}

Shree_Dev_0714.isSuffixSymbol = function (str)
{
    return Shree_Dev_0714.suffixList[str] != null;
}

Shree_Dev_0714.isOverloaded = function (str)
{
    return Shree_Dev_0714.overloadList[str] != null;
}

Shree_Dev_0714.handleTwoPartVowelSigns = function (sign1, sign2)
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

Shree_Dev_0714.isRedundant = function (str)
{
    return Shree_Dev_0714.redundantList[str] != null;
}

//TODO
//00A6,00AD,00AE,00AF,
//00B7,00D6,00FD,0161,2030

//Implementation details start here
//Specials
Shree_Dev_0714.avagraha       = "\u0040";
Shree_Dev_0714.anusvara_1     = "\u00A7";
Shree_Dev_0714.anusvara_2     = "\u00A8";
Shree_Dev_0714.candrabindu    = "\u00B1";
Shree_Dev_0714.virama         = "\u00B2";
Shree_Dev_0714.visarga        = "\u2026";

//Vowels
Shree_Dev_0714.vowel_A        = "\u0041";
Shree_Dev_0714.vowel_AA       = "\u0041\u006D";
Shree_Dev_0714.vowel_I        = "\u0042";
Shree_Dev_0714.vowel_II       = "\u0042\u00A9";
Shree_Dev_0714.vowel_U        = "\u0043";
Shree_Dev_0714.vowel_UU       = "\u0044";
Shree_Dev_0714.vowel_R_1      = "\u0046";
Shree_Dev_0714.vowel_R_2      = "\u0047";
Shree_Dev_0714.vowel_CDR_E    = "\u0045\u00B0";
Shree_Dev_0714.vowel_EE       = "\u0045";
Shree_Dev_0714.vowel_AI       = "\u0045\u006F";
Shree_Dev_0714.vowel_CDR_O    = "\u0041\u006D\u00B0";
Shree_Dev_0714.vowel_OO_1     = "\u0041\u006D\u006F";
Shree_Dev_0714.vowel_OO_2     = "\u0041\u006D\u006F";
Shree_Dev_0714.vowel_AU_1     = "\u0041\u006D\u00A1";
Shree_Dev_0714.vowel_AU_2     = "\u0041\u006D\u00A1";

//Consonants
Shree_Dev_0714.consnt_KA      = "\u0048";
Shree_Dev_0714.consnt_KHA_1   = "\u00BB\u006D";
Shree_Dev_0714.consnt_KHA_2   = "\u0049";
Shree_Dev_0714.consnt_KHHA_1  = "\u02DC";
Shree_Dev_0714.consnt_KHHA_2  = "\u2122\u006D";
Shree_Dev_0714.consnt_GA_1    = "\u00BD\u006D";
Shree_Dev_0714.consnt_GA_2    = "\u004A";
Shree_Dev_0714.consnt_GHA_1   = "\u00BF\u006D"; 	
Shree_Dev_0714.consnt_GHA_2   = "\u004B"; 	
Shree_Dev_0714.consnt_NGA     = "\u004C";

Shree_Dev_0714.consnt_CA_1    = "\u00C0\u006D";
Shree_Dev_0714.consnt_CA_2    = "\u004D";
Shree_Dev_0714.consnt_CHA     = "\u004E";
Shree_Dev_0714.consnt_JA_1    = "\u004F";
Shree_Dev_0714.consnt_JA_2    = "\u00C1\u006D";
Shree_Dev_0714.consnt_ZA_1    = "\u00C1\u2039\u006D";
Shree_Dev_0714.consnt_ZA_2    = "\u00C1\u2039\u006D";
Shree_Dev_0714.consnt_JHA_1   = "\u00C2\u006D";
Shree_Dev_0714.consnt_JHA_2   = "\u0050";			

Shree_Dev_0714.consnt_TTA     = "\u0051";
Shree_Dev_0714.consnt_TTHA    = "\u0052";
Shree_Dev_0714.consnt_DDA     = "\u0053";
Shree_Dev_0714.consnt_DDDHA   = "\u0053\u2039";
Shree_Dev_0714.consnt_DDHA    = "\u0054";
Shree_Dev_0714.consnt_RHA     = "\u0054\u2039";
Shree_Dev_0714.consnt_NNA_1   = "\u00CA\u006D"; 	
Shree_Dev_0714.consnt_NNA_2   = "\u0055"; 	

Shree_Dev_0714.consnt_TA_1    = "\u00CB\u006D";
Shree_Dev_0714.consnt_TA_2    = "\u0056";
Shree_Dev_0714.consnt_THA_1   = "\u00CF\u006D";
Shree_Dev_0714.consnt_THA_2   = "\u0057";
Shree_Dev_0714.consnt_DA      = "\u0058";
Shree_Dev_0714.consnt_DHA_1   = "\u00DC\u006D";
Shree_Dev_0714.consnt_DHA_2   = "\u0059";
Shree_Dev_0714.consnt_NA      = "\u005A";

Shree_Dev_0714.consnt_PA_1    = "\u006E";
Shree_Dev_0714.consnt_PA_2    = "\u00DF\u006D";
Shree_Dev_0714.consnt_PHA     = "\u005C";
Shree_Dev_0714.consnt_BA      = "\u007E";
Shree_Dev_0714.consnt_BHA_1   = "\u00E4\u006D";
Shree_Dev_0714.consnt_BHA_2   = "\u005E";
Shree_Dev_0714.consnt_MA_1    = "\u00E5\u006D";
Shree_Dev_0714.consnt_MA_2    = "\u005F";

Shree_Dev_0714.consnt_YA_1    = "\u00E6\u006D";
Shree_Dev_0714.consnt_YA_2    = "\u0060";
Shree_Dev_0714.consnt_RA      = "\u0061";
Shree_Dev_0714.consnt_LA_1    = "\u0063";
Shree_Dev_0714.consnt_LA_2    = "\u00EB\u006D";
Shree_Dev_0714.consnt_LA_3    = "\u0062";
Shree_Dev_0714.consnt_VA      = "\u0064";
Shree_Dev_0714.consnt_SHA_1   = "\u00ED\u006D";
Shree_Dev_0714.consnt_SHA_2   = "\u00FB\u006D";
Shree_Dev_0714.consnt_SHA_3   = "\u0065";			
Shree_Dev_0714.consnt_SSA_1   = "\u00EE\u006D";
Shree_Dev_0714.consnt_SSA_2   = "\u0066";
Shree_Dev_0714.consnt_SA      = "\u0067";
Shree_Dev_0714.consnt_HA      = "\u0068";
Shree_Dev_0714.consnt_LLA     = "\u0069";
Shree_Dev_0714.consnt_KSH     = "\u006A"; 		

//Gunintamulu
Shree_Dev_0714.vowelsn_AA     = "\u006D";
Shree_Dev_0714.vowelsn_I      = "\u007B";			
Shree_Dev_0714.vowelsn_I_1    = "\u005B";			
Shree_Dev_0714.vowelsn_I_2    = "\u0070"; 		
Shree_Dev_0714.vowelsn_II_1   = "\u0072"; 		
Shree_Dev_0714.vowelsn_II_2   = "\u0073";				
Shree_Dev_0714.vowelsn_U_1    = "\u0078";			
Shree_Dev_0714.vowelsn_U_2    = "\u0077";			
Shree_Dev_0714.vowelsn_U_3    = "\u00FE";			
Shree_Dev_0714.vowelsn_UU_1   = "\u007A"; 		
Shree_Dev_0714.vowelsn_UU_2   = "\u0079"; 		
Shree_Dev_0714.vowelsn_UU_3   = "\u00FF"; 		
Shree_Dev_0714.vowelsn_R      = "\u00A5";
Shree_Dev_0714.vowelsn_CDR_E  = "\u00B0";
Shree_Dev_0714.vowelsn_EE     = "\u006F";
Shree_Dev_0714.vowelsn_AI     = "\u00A1";
Shree_Dev_0714.vowelsn_OO     = "\u006F\u006D";
Shree_Dev_0714.vowelsn_AU     = "\u00A1\u006D";

//Vowel + anusvara
Shree_Dev_0714.vowel_IIM       = "\u0042\u00AA";

//Matra + modifier
Shree_Dev_0714.vowelsn_IM      = "\u0071";
Shree_Dev_0714.vowelsn_IIM     = "\u0074";			
Shree_Dev_0714.vowelsn_EEM     = "\u007C";			
Shree_Dev_0714.vowelsn_AIM     = "\u00A2";			
Shree_Dev_0714.vowelsn_U_BINDU = "\u00B1\u00B2";

//Half Forms
Shree_Dev_0714.halffm_KA      = "\u0160";
Shree_Dev_0714.halffm_KSH     = "\u00FA";
Shree_Dev_0714.halffm_KHA     = "\u00BB";
Shree_Dev_0714.halffm_KHHA    = "\u2122";
Shree_Dev_0714.halffm_GA      = "\u00BD";
Shree_Dev_0714.halffm_GHA     = "\u00BF";
Shree_Dev_0714.halffm_CA      = "\u00C0";
Shree_Dev_0714.halffm_JA      = "\u00C1";
Shree_Dev_0714.halffm_JJ      = "\u201A";
Shree_Dev_0714.halffm_ZA_1    = "\u00C1\u2039";
Shree_Dev_0714.halffm_ZA_2    = "\u00C1\u2039";
Shree_Dev_0714.halffm_JHA     = "\u00C2";
Shree_Dev_0714.halffm_NYA     = "\u00C4";
Shree_Dev_0714.halffm_NNA     = "\u00CA";
Shree_Dev_0714.halffm_TA      = "\u00CB";
Shree_Dev_0714.halffm_TT      = "\u00CE"; 		
Shree_Dev_0714.halffm_TR      = "\u00CD";
Shree_Dev_0714.halffm_THA     = "\u00CF";
Shree_Dev_0714.halffm_DHA     = "\u00DC";
Shree_Dev_0714.halffm_NA      = "\u00DD";
Shree_Dev_0714.halffm_NN      = "\u00DE";
Shree_Dev_0714.halffm_PA      = "\u00DF";
Shree_Dev_0714.halffm_PHA     = "\u00E2";
Shree_Dev_0714.halffm_BA      = "\u00E3";
Shree_Dev_0714.halffm_BHA     = "\u00E4";
Shree_Dev_0714.halffm_MA      = "\u00E5";
Shree_Dev_0714.halffm_YA      = "\u00E6";
Shree_Dev_0714.halffm_RA      = "\u00A9";
Shree_Dev_0714.halffm_LA      = "\u00EB";
Shree_Dev_0714.halffm_VA      = "\u00EC";
Shree_Dev_0714.halffm_SHA     = "\u00ED";
Shree_Dev_0714.halffm_SSA     = "\u00EE";
Shree_Dev_0714.halffm_SA      = "\u00F1";
Shree_Dev_0714.halffm_HA      = "\u00F4";
Shree_Dev_0714.halffm_LLA     = "\u00F9";
Shree_Dev_0714.halffm_RRA     = "\u00E8";

//Conjuncts
Shree_Dev_0714.conjct_KK      = "\u00B8";
Shree_Dev_0714.conjct_KV      = "\u00B9";
Shree_Dev_0714.conjct_KT      = "\u00BA";
Shree_Dev_0714.conjct_KSH     = "\u00FA\u006D";
Shree_Dev_0714.conjct_KSHEE   = "\u00FA\u006D\u006F";
Shree_Dev_0714.conjct_KHR     = "\u00BC";
Shree_Dev_0714.conjct_NGKSH   = "\u00AC";
Shree_Dev_0714.conjct_NGK     = "\u2018";
Shree_Dev_0714.conjct_NGKH    = "\u2019";
Shree_Dev_0714.conjct_NGG     = "\u201C";
Shree_Dev_0714.conjct_NGGH    = "\u201D";
Shree_Dev_0714.conjct_NGM     = "\u00B6";
Shree_Dev_0714.conjct_CC      = "\u0192";
Shree_Dev_0714.conjct_JNY     = "\u006B";
Shree_Dev_0714.conjct_JHR     = "\u00C3";
Shree_Dev_0714.conjct_NYC     = "\u0023\u006D";
Shree_Dev_0714.conjct_JJ      = "\u201A\u006D";
Shree_Dev_0714.conjct_TTTT    = "\u00C5";
Shree_Dev_0714.conjct_TT_TTH  = "\u00C6";
Shree_Dev_0714.conjct_TTHTTH  = "\u00C7";
Shree_Dev_0714.conjct_DDDD    = "\u00C8";
Shree_Dev_0714.conjct_DD_DDH  = "\u2013";
Shree_Dev_0714.conjct_DDHDDH  = "\u00C9";
Shree_Dev_0714.conjct_TT      = "\u00CE\u006D"; 		
Shree_Dev_0714.conjct_TR_2    = "\u00CD\u006D";
Shree_Dev_0714.conjct_TR_3    = "\u00CC"; 		
Shree_Dev_0714.conjct_DG      = "\u00D2";
Shree_Dev_0714.conjct_DGH     = "\u00D3";
Shree_Dev_0714.conjct_DD      = "\u00D4";
Shree_Dev_0714.conjct_D_DH    = "\u00D5";
Shree_Dev_0714.conjct_DB      = "\u00D7";
Shree_Dev_0714.conjct_DBH     = "\u00D8";
Shree_Dev_0714.conjct_DM      = "\u00D9";
Shree_Dev_0714.conjct_DY      = "\u00DA";
Shree_Dev_0714.conjct_DV      = "\u00DB";
Shree_Dev_0714.conjct_NN      = "\u00DE";
Shree_Dev_0714.conjct_PT      = "\u00E1";
Shree_Dev_0714.conjct_LL      = "\u201E";
Shree_Dev_0714.conjct_SHC     = "\u00FC";
Shree_Dev_0714.conjct_SHR     = "\u006C";
Shree_Dev_0714.conjct_SHREE   = "\u006C\u006F";
Shree_Dev_0714.conjct_SHV     = "\u0153";
Shree_Dev_0714.conjct_SSTT    = "\u00EF";
Shree_Dev_0714.conjct_SSTTH   = "\u00F0";
Shree_Dev_0714.conjct_STR     = "\u00F3";
Shree_Dev_0714.conjct_SR      = "\u00F2";
Shree_Dev_0714.conjct_HNN     = "\u2020";
Shree_Dev_0714.conjct_HN      = "\u2022";
Shree_Dev_0714.conjct_HM      = "\u00F7";
Shree_Dev_0714.conjct_HY      = "\u00F8";
Shree_Dev_0714.conjct_HR      = "\u00F5";
Shree_Dev_0714.conjct_HL      = "\u2021";
Shree_Dev_0714.conjct_HV      = "\u02C6";
Shree_Dev_0714.conjct_DRA     = "\u00D0"; 		
Shree_Dev_0714.conjct_PRA     = "\u00E0"; 		
Shree_Dev_0714.conjct_GN      = "\u00BE"; 		

//Combos
Shree_Dev_0714.combo_RU       = "\u00E9";
Shree_Dev_0714.combo_RUU      = "\u00EA";
Shree_Dev_0714.conjct_SHAU    = "\u0065\u00A1";
Shree_Dev_0714.combo_HR       = "\u00F6";
Shree_Dev_0714.combo_DR       = "\u00D1"; 		

//Half forms of RA
Shree_Dev_0714.halffm_REE     = "\u007D";
Shree_Dev_0714.halffm_RII     = "\u0075";		
Shree_Dev_0714.halffm_RIIM    = "\u0076";		
Shree_Dev_0714.halffm_RA_ANU  = "\u00AA";
Shree_Dev_0714.halffm_RAI     = "\u00A3";		
Shree_Dev_0714.halffm_RAIM    = "\u00A4";		

Shree_Dev_0714.vattu_YA       = "\u00E7";
Shree_Dev_0714.vattu_RA_1     = "\u00B3";
Shree_Dev_0714.vattu_RA_2     = "\u00AB";
Shree_Dev_0714.vattu_RA_3     = "\u2014";
Shree_Dev_0714.vattu_RA_4     = "\u00B4";		
Shree_Dev_0714.vattu_RA_5     = "\u0152";		

Shree_Dev_0714.misc_DANDA     = "\u0026";
Shree_Dev_0714.misc_OM        = "\u203A";
Shree_Dev_0714.nukta_1        = "\u00B5";
Shree_Dev_0714.nukta_2        = "\u2039";

//Digits
Shree_Dev_0714.digit_ZERO     = "\u0030";
Shree_Dev_0714.digit_ONE      = "\u0031";
Shree_Dev_0714.digit_TWO      = "\u0032";
Shree_Dev_0714.digit_THREE    = "\u0033";
Shree_Dev_0714.digit_FOUR     = "\u0034";
Shree_Dev_0714.digit_FIVE     = "\u0035";
Shree_Dev_0714.digit_SIX      = "\u0036";
Shree_Dev_0714.digit_SEVEN    = "\u0037";
Shree_Dev_0714.digit_EIGHT    = "\u0038";
Shree_Dev_0714.digit_NINE     = "\u0039";

//Matches ASCII
Shree_Dev_0714.EXCLAM         = "\u0021";
Shree_Dev_0714.PAREN_LEFT     = "\u0028";
Shree_Dev_0714.PAREN_RIGHT    = "\u0029";
Shree_Dev_0714.ASTERISK       = "\u002A";
Shree_Dev_0714.PLUS           = "\u002B";
Shree_Dev_0714.COMMA          = "\u002C";
Shree_Dev_0714.PERIOD         = "\u002E";
Shree_Dev_0714.SLASH          = "\u002F";
Shree_Dev_0714.COLON          = "\u003A";
Shree_Dev_0714.SEMICOLON      = "\u003B";
Shree_Dev_0714.EQUALS         = "\u003D";
Shree_Dev_0714.QUESTION       = "\u003F";
Shree_Dev_0714.HYPHEN 	      = "\u002D"; 		

//Does not match ASCII
Shree_Dev_0714.LQTSINGLE = "\u0022";
Shree_Dev_0714.RQTSINGLE = "\u0027";
Shree_Dev_0714.MULTIPLY  = "\u0081";
Shree_Dev_0714.PERCENT   = "\u0025";

Shree_Dev_0714.misc_UNKNOWN_1 = "\u0024";
Shree_Dev_0714.misc_UNKNOWN_2 = "\u003E";
Shree_Dev_0714.misc_UNKNOWN_3 = "\u0090";
Shree_Dev_0714.misc_UNKNOWN_4 = "\u00A0";
Shree_Dev_0714.misc_UNKNOWN_5 = "\u0178";

Shree_Dev_0714.toPadma = new Object();

Shree_Dev_0714.toPadma[Shree_Dev_0714.avagraha]    = Padma.avagraha;
Shree_Dev_0714.toPadma[Shree_Dev_0714.anusvara_1]  = Padma.anusvara;
Shree_Dev_0714.toPadma[Shree_Dev_0714.anusvara_2]  = Padma.anusvara;
Shree_Dev_0714.toPadma[Shree_Dev_0714.candrabindu] = Padma.candrabindu;
Shree_Dev_0714.toPadma[Shree_Dev_0714.virama]      = Padma.syllbreak;
Shree_Dev_0714.toPadma[Shree_Dev_0714.visarga]     = Padma.visarga;

Shree_Dev_0714.toPadma[Shree_Dev_0714.vowel_A]    = Padma.vowel_A;
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowel_AA]   = Padma.vowel_AA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowel_I]    = Padma.vowel_I;
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowel_II]   = Padma.vowel_II;
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowel_U]    = Padma.vowel_U;
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowel_UU]   = Padma.vowel_UU;
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowel_R_1]  = Padma.vowel_R;
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowel_R_2]  = Padma.vowel_R;
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowel_CDR_E]= Padma.vowel_CDR_E;
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowel_EE]   = Padma.vowel_EE;
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowel_AI]   = Padma.vowel_AI;
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowel_CDR_O]= Padma.vowel_CDR_O;
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowel_OO_1] = Padma.vowel_OO;
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowel_OO_2] = Padma.vowel_OO;
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowel_AU_1] = Padma.vowel_AU;
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowel_AU_2] = Padma.vowel_AU;

Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_KA]    = Padma.consnt_KA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_KHA_1] = Padma.consnt_KHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_KHA_2] = Padma.consnt_KHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_KHHA_1]= Padma.consnt_KHHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_KHHA_2]= Padma.consnt_KHHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_GA_1]  = Padma.consnt_GA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_GA_2]  = Padma.consnt_GA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_GHA_1] = Padma.consnt_GHA; 		
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_GHA_2] = Padma.consnt_GHA; 		
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_NGA]   = Padma.consnt_NGA;

Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_CA_1]  = Padma.consnt_CA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_CA_2]  = Padma.consnt_CA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_CHA]   = Padma.consnt_CHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_JA_1]  = Padma.consnt_JA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_JA_2]  = Padma.consnt_JA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_ZA_1]  = Padma.consnt_ZA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_ZA_2]  = Padma.consnt_ZA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_JHA_1] = Padma.consnt_JHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_JHA_2] = Padma.consnt_JHA;			

Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_TTA]   = Padma.consnt_TTA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_TTHA]  = Padma.consnt_TTHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_DDA]   = Padma.consnt_DDA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_DDDHA] = Padma.consnt_DDDHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_DDHA]  = Padma.consnt_DDHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_RHA]   = Padma.consnt_RHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_NNA_1] = Padma.consnt_NNA; 		
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_NNA_2] = Padma.consnt_NNA; 		

Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_TA_1]  = Padma.consnt_TA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_TA_2]  = Padma.consnt_TA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_THA_1] = Padma.consnt_THA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_THA_2] = Padma.consnt_THA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_DA]    = Padma.consnt_DA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_DHA_1] = Padma.consnt_DHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_DHA_2] = Padma.consnt_DHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_NA]    = Padma.consnt_NA;

Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_PA_1]  = Padma.consnt_PA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_PA_2]  = Padma.consnt_PA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_PHA]   = Padma.consnt_PHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_BA]    = Padma.consnt_BA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_BHA_1] = Padma.consnt_BHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_BHA_2] = Padma.consnt_BHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_MA_1]  = Padma.consnt_MA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_MA_2]  = Padma.consnt_MA;

Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_YA_1]  = Padma.consnt_YA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_YA_2]  = Padma.consnt_YA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_RA]    = Padma.consnt_RA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_LA_1]  = Padma.consnt_LA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_LA_2]  = Padma.consnt_LA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_LA_3]  = Padma.consnt_LA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_VA]    = Padma.consnt_VA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_SHA_1] = Padma.consnt_SHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_SHA_2] = Padma.consnt_SHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_SHA_3] = Padma.consnt_SHA; 		
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_SSA_1] = Padma.consnt_SSA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_SSA_2] = Padma.consnt_SSA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_SA]    = Padma.consnt_SA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_HA]    = Padma.consnt_HA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_LLA]   = Padma.consnt_LLA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.consnt_KSH]   = Padma.consnt_KA + Padma.vattu_SSA; 		

//Gunintamulu
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowelsn_AA]   = Padma.vowelsn_AA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowelsn_I]    = Padma.vowelsn_I; 		
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowelsn_I_1]  = Padma.vowelsn_I; 		
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowelsn_I_2]  = Padma.vowelsn_I; 		
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowelsn_II_1] = Padma.vowelsn_II;		
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowelsn_II_2] = Padma.vowelsn_II;		
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowelsn_U_1]  = Padma.vowelsn_U;			
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowelsn_U_2]  = Padma.vowelsn_U;			
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowelsn_U_3]  = Padma.vowelsn_U;			
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowelsn_UU_1] = Padma.vowelsn_UU;			
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowelsn_UU_2] = Padma.vowelsn_UU;			
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowelsn_UU_3] = Padma.vowelsn_UU;			
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowelsn_R]    = Padma.vowelsn_R;
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowelsn_CDR_E]= Padma.vowelsn_CDR_E;
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowelsn_EE]   = Padma.vowelsn_EE;
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowelsn_AI]   = Padma.vowelsn_AI;
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowelsn_OO]   = Padma.vowelsn_OO;
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowelsn_AU]   = Padma.vowelsn_AU;

//Vowel + anusvara
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowel_IIM]    = Padma.vowel_II + Padma.anusvara;

//matra + modifier
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowelsn_IM]   = Padma.vowelsn_I + Padma.anusvara;
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowelsn_IIM]  = Padma.vowelsn_II + Padma.anusvara;  		
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowelsn_EEM]  = Padma.vowelsn_EE + Padma.anusvara;  		
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowelsn_AIM]  = Padma.vowelsn_AI + Padma.anusvara;  		
Shree_Dev_0714.toPadma[Shree_Dev_0714.vowelsn_U_BINDU] = Padma.vowelsn_U + Padma.candrabindu;

//Halffm
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_KA]   = Padma.halffm_KA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_KSH]  = Padma.halffm_KA + Padma.halffm_SSA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_KHA]  = Padma.halffm_KHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_KHHA] = Padma.halffm_KHHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_GA]   = Padma.halffm_GA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_GHA]  = Padma.halffm_GHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_CA]   = Padma.halffm_CA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_JA]   = Padma.halffm_JA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_JJ]   = Padma.halffm_JA + Padma.halffm_JA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_ZA_1] = Padma.halffm_ZA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_ZA_2] = Padma.halffm_ZA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_JHA]  = Padma.halffm_JHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_NYA]  = Padma.halffm_NYA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_NNA]  = Padma.halffm_NNA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_TA]   = Padma.halffm_TA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_TT]   = Padma.halffm_TA + Padma.halffm_TA; 		
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_TR]   = Padma.halffm_TA + Padma.halffm_RA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_THA]  = Padma.halffm_THA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_DHA]  = Padma.halffm_DHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_NA]   = Padma.halffm_NA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_NN]   = Padma.halffm_NA + Padma.halffm_NA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_PA]   = Padma.halffm_PA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_PHA]  = Padma.halffm_PHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_BA]   = Padma.halffm_BA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_BHA]  = Padma.halffm_BHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_MA]   = Padma.halffm_MA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_YA]   = Padma.halffm_YA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_RA]   = Padma.halffm_RA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_LA]   = Padma.halffm_LA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_VA]   = Padma.halffm_VA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_SHA]  = Padma.halffm_SHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_SSA]  = Padma.halffm_SSA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_SA]   = Padma.halffm_SA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_HA]   = Padma.halffm_HA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_LLA]  = Padma.halffm_LLA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_RRA]  = Padma.halffm_RRA;

//Conjuncts
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_KK]     = Padma.consnt_KA + Padma.vattu_KA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_KV]     = Padma.consnt_KA + Padma.vattu_VA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_KT]     = Padma.consnt_KA + Padma.vattu_TA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_KSH]    = Padma.consnt_KA + Padma.vattu_SSA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_KSHEE]  = Padma.consnt_KA + Padma.vattu_SSA + Padma.vowelsn_EE;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_KHR]    = Padma.consnt_KHA + Padma.vattu_RA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_NGKSH]  = Padma.consnt_NGA + Padma.vattu_KA + Padma.vattu_SSA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_NGK]    = Padma.consnt_NGA + Padma.vattu_KA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_NGKH]   = Padma.consnt_NGA + Padma.vattu_KHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_NGG]    = Padma.consnt_NGA + Padma.vattu_GA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_NGGH]   = Padma.consnt_NGA + Padma.vattu_GHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_NGM]    = Padma.consnt_NGA + Padma.vattu_MA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_CC]     = Padma.consnt_CA + Padma.vattu_CA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_JNY]    = Padma.consnt_JA + Padma.vattu_NYA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_JHR]    = Padma.consnt_JHA + Padma.vattu_RA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_NYC]    = Padma.consnt_NYA + Padma.vattu_CA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_JJ]     = Padma.consnt_JA + Padma.vattu_JA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_TTTT]   = Padma.consnt_TTA + Padma.vattu_TTA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_TT_TTH] = Padma.consnt_TTA + Padma.vattu_TTHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_TTHTTH] = Padma.consnt_TTHA + Padma.vattu_TTHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_DDDD]   = Padma.consnt_DDA + Padma.vattu_DDA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_DD_DDH] = Padma.consnt_DDA + Padma.vattu_DDHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_DDHDDH] = Padma.consnt_DDHA + Padma.vattu_DDHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_TT]     = Padma.consnt_TA + Padma.vattu_TA; 		
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_TR_2]   = Padma.consnt_TA + Padma.vattu_RA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_TR_3]   = Padma.consnt_TA + Padma.vattu_RA; 		
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_DG]     = Padma.consnt_DA + Padma.vattu_GA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_DGH]    = Padma.consnt_DA + Padma.vattu_GHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_DD]     = Padma.consnt_DA + Padma.vattu_DA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_D_DH]   = Padma.consnt_DA + Padma.vattu_DHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_DB]     = Padma.consnt_DA + Padma.vattu_BA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_DBH]    = Padma.consnt_DA + Padma.vattu_BHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_DM]     = Padma.consnt_DA + Padma.vattu_MA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_DY]     = Padma.consnt_DA + Padma.vattu_YA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_DV]     = Padma.consnt_DA + Padma.vattu_VA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_NN]     = Padma.consnt_NA + Padma.vattu_NA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_PT]     = Padma.consnt_PA + Padma.vattu_TA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_LL]     = Padma.consnt_LA + Padma.vattu_LA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_SHC]    = Padma.consnt_SHA + Padma.vattu_CA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_SHR]    = Padma.consnt_SHA + Padma.vattu_RA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_SHREE]  = Padma.consnt_SHA + Padma.vattu_RA + Padma.vowelsn_EE;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_SHV]    = Padma.consnt_SHA + Padma.vattu_VA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_SSTT]   = Padma.consnt_SSA + Padma.vattu_TTA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_SSTTH]  = Padma.consnt_SSA + Padma.vattu_TTHA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_STR]    = Padma.consnt_SA + Padma.vattu_TA + Padma.vattu_RA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_SR]     = Padma.consnt_SA + Padma.vattu_RA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_HNN]    = Padma.consnt_HA + Padma.vattu_NNA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_HN]     = Padma.consnt_HA + Padma.vattu_NA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_HM]     = Padma.consnt_HA + Padma.vattu_MA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_HY]     = Padma.consnt_HA + Padma.vattu_YA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_HR]     = Padma.consnt_HA + Padma.vattu_RA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_HL]     = Padma.consnt_HA + Padma.vattu_LA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_HV]     = Padma.consnt_HA + Padma.vattu_VA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_DRA]    = Padma.consnt_DA + Padma.vattu_RA; 		
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_PRA]    = Padma.consnt_PA + Padma.vattu_RA; 		
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_GN]     = Padma.consnt_GA + Padma.vattu_NA; 		

//Combos
Shree_Dev_0714.toPadma[Shree_Dev_0714.combo_RU]      = Padma.consnt_RA + Padma.vowelsn_U;
Shree_Dev_0714.toPadma[Shree_Dev_0714.combo_RUU]     = Padma.consnt_RA + Padma.vowelsn_UU;
Shree_Dev_0714.toPadma[Shree_Dev_0714.conjct_SHAU]   = Padma.consnt_SHA + Padma.vowelsn_AU;
Shree_Dev_0714.toPadma[Shree_Dev_0714.combo_HR]      = Padma.consnt_HA + Padma.vowelsn_R;
Shree_Dev_0714.toPadma[Shree_Dev_0714.combo_DR]      = Padma.consnt_DA + Padma.vowelsn_R;		

//Half forms of RA
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_REE]    = Padma.halffm_RA + Padma.vowelsn_EE; 		
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_RII]    = Padma.halffm_RA + Padma.vowelsn_II; 		
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_RIIM]   = Padma.halffm_RA + Padma.vowelsn_II + Padma.anusvara;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_RA_ANU] = Padma.halffm_RA + Padma.anusvara;
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_RAI]    = Padma.halffm_RA + Padma.vowelsn_AI; 		
Shree_Dev_0714.toPadma[Shree_Dev_0714.halffm_RAIM]   = Padma.halffm_RA + Padma.vowelsn_AI + Padma.anusvara;

Shree_Dev_0714.toPadma[Shree_Dev_0714.vattu_YA]      = Padma.vattu_YA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.vattu_RA_1]    = Padma.vattu_RA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.vattu_RA_2]    = Padma.vattu_RA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.vattu_RA_3]    = Padma.vattu_RA;
Shree_Dev_0714.toPadma[Shree_Dev_0714.vattu_RA_4]    = Padma.vattu_RA;		
Shree_Dev_0714.toPadma[Shree_Dev_0714.vattu_RA_5]    = Padma.vattu_RA;		


Shree_Dev_0714.toPadma[Shree_Dev_0714.misc_DANDA]    = Padma.danda;
Shree_Dev_0714.toPadma[Shree_Dev_0714.misc_OM]       = Padma.om;
Shree_Dev_0714.toPadma[Shree_Dev_0714.nukta_1]       = Padma.nukta;
Shree_Dev_0714.toPadma[Shree_Dev_0714.nukta_2]       = Padma.nukta;

//Digits
Shree_Dev_0714.toPadma[Shree_Dev_0714.digit_ZERO]    = Padma.digit_ZERO;
Shree_Dev_0714.toPadma[Shree_Dev_0714.digit_ONE]     = Padma.digit_ONE;
Shree_Dev_0714.toPadma[Shree_Dev_0714.digit_TWO]     = Padma.digit_TWO;
Shree_Dev_0714.toPadma[Shree_Dev_0714.digit_THREE]   = Padma.digit_THREE;
Shree_Dev_0714.toPadma[Shree_Dev_0714.digit_FOUR]    = Padma.digit_FOUR;
Shree_Dev_0714.toPadma[Shree_Dev_0714.digit_FIVE]    = Padma.digit_FIVE;
Shree_Dev_0714.toPadma[Shree_Dev_0714.digit_SIX]     = Padma.digit_SIX;
Shree_Dev_0714.toPadma[Shree_Dev_0714.digit_SEVEN]   = Padma.digit_SEVEN;
Shree_Dev_0714.toPadma[Shree_Dev_0714.digit_EIGHT]   = Padma.digit_EIGHT;
Shree_Dev_0714.toPadma[Shree_Dev_0714.digit_NINE]    = Padma.digit_NINE;

//Does not match ASCII
Shree_Dev_0714.toPadma[Shree_Dev_0714.LQTSINGLE]        = "\u2018";
Shree_Dev_0714.toPadma[Shree_Dev_0714.RQTSINGLE]        = "\u2019";
Shree_Dev_0714.toPadma[Shree_Dev_0714.MULTIPLY]         = "\u00D7"; //Unicode for multiplication symbol
Shree_Dev_0714.toPadma[Shree_Dev_0714.PERCENT]          = "%";

Shree_Dev_0714.prefixList = new Object();
Shree_Dev_0714.prefixList[Shree_Dev_0714.vowelsn_I]  = true;
Shree_Dev_0714.prefixList[Shree_Dev_0714.vowelsn_I_1]= true;
Shree_Dev_0714.prefixList[Shree_Dev_0714.vowelsn_I_2]= true;
Shree_Dev_0714.prefixList[Shree_Dev_0714.vowelsn_IM] = true;
Shree_Dev_0714.prefixList[Shree_Dev_0714.nukta_1]    = true;
//Shree_Dev_0714.prefixList[Shree_Dev_0714.halffm_RI]  = true;
//Shree_Dev_0714.prefixList[Shree_Dev_0714.halffm_RIM] = true;

Shree_Dev_0714.suffixList = new Object();
Shree_Dev_0714.suffixList[Shree_Dev_0714.halffm_RA]     = true;
Shree_Dev_0714.suffixList[Shree_Dev_0714.halffm_REE]    = true;
Shree_Dev_0714.suffixList[Shree_Dev_0714.halffm_RII]    = true;
Shree_Dev_0714.suffixList[Shree_Dev_0714.halffm_RA_ANU] = true;
Shree_Dev_0714.suffixList[Shree_Dev_0714.halffm_RAI]    = true;
Shree_Dev_0714.suffixList[Shree_Dev_0714.halffm_RAIM]   = true;


Shree_Dev_0714.redundantList = new Object();
Shree_Dev_0714.redundantList[Shree_Dev_0714.misc_UNKNOWN_1] = true;
Shree_Dev_0714.redundantList[Shree_Dev_0714.misc_UNKNOWN_2] = true;
Shree_Dev_0714.redundantList[Shree_Dev_0714.misc_UNKNOWN_3] = true;
Shree_Dev_0714.redundantList[Shree_Dev_0714.misc_UNKNOWN_4] = true;
Shree_Dev_0714.redundantList[Shree_Dev_0714.misc_UNKNOWN_5] = true;
Shree_Dev_0714.redundantList[Shree_Dev_0714.HYPHEN]         = true;
Shree_Dev_0714.redundantList[Shree_Dev_0714.PERIOD]         = true;

Shree_Dev_0714.overloadList = new Object();
Shree_Dev_0714.overloadList[Shree_Dev_0714.vowel_A]     = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.vowel_AA]    = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.vowel_EE]    = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.vowel_I]     = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.consnt_DDA]  = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.consnt_DDHA] = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.vowelsn_AA]  = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.halffm_KSH]  = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.halffm_KHA]  = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.halffm_KHHA] = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.halffm_GA]   = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.halffm_GHA]  = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.halffm_CA]   = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.halffm_JA]   = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.halffm_JJ]   = true;
//Shree_Dev_0714.overloadList[Shree_Dev_0714.halffm_JNY]  = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.halffm_ZA_1] = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.halffm_ZA_2] = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.halffm_JHA]  = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.halffm_NNA]  = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.halffm_TA]   = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.halffm_TT]   = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.halffm_TR]   = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.halffm_THA]  = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.halffm_DHA]  = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.halffm_NN]   = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.halffm_BHA]  = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.halffm_PA]   = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.halffm_MA]   = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.halffm_YA]   = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.halffm_LA]   = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.halffm_SHA]  = true;
//Shree_Dev_0714.overloadList[Shree_Dev_0714.halffm_SHR]  = true;
Shree_Dev_0714.overloadList[Shree_Dev_0714.halffm_SSA]  = true;
