//$Id: Pudhari.js,v 1.2 2009/04/07 07:31:07 harshita Exp $

//Copyright 2008-2009 Kinshul Verma <kinshul20@gmail.com>
//Copyright 2008-2009 Harshita Vani <harshita@atc.tcs.com>

/* ****** BEGIN LICENSE BLOCK ***** 
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
 
//SHREE-PUDHARI Devanagari
function Pudhari()
{
}

//Generate the slightly different lookup tables

Pudhari.maxLookupLen      = 4;
Pudhari.fontFace          = "SHREE-PUDHARI";
Pudhari.displayName       = "Pudhari";
Pudhari.script            = Padma.script_DEVANAGARI;
Pudhari.hasSuffixes       = true;

Pudhari.lookup = function (str)
{
	return Pudhari.toPadma[str];
}

Pudhari.isPrefixSymbol = function (str)
{
    return Pudhari.prefixList[str] != null;
}

Pudhari.isSuffixSymbol = function (str)
{
    return Pudhari.suffixList[str] != null;
}

Pudhari.isOverloaded = function (str)
{
    return Pudhari.overloadList[str] != null;
}

Pudhari.handleTwoPartVowelSigns = function (sign1, sign2)
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

Pudhari.isRedundant = function (str)
{
    return Pudhari.redundantList[str] != null;
}

//TODO: 
//Specials
Pudhari.avagraha       = "\u0040";
Pudhari.anusvara_1     = "\u00A7";
Pudhari.anusvara_2     = "\u00A8";
Pudhari.candrabindu    = "\u00B1";
Pudhari.virama         = "\u00B2";
Pudhari.visarga        = "\u003A";//check

//Vowels
Pudhari.vowel_A        = "\u0041";
Pudhari.vowel_AA       = "\u0041\u006D";
Pudhari.vowel_I        = "\u0042";
Pudhari.vowel_II       = "\u0042\u00A9";
Pudhari.vowel_U        = "\u0043";
Pudhari.vowel_UU       = "\u0044";
Pudhari.vowel_R        = "\u0047";         
Pudhari.vowel_RR       = "\u0046";      
Pudhari.vowel_CDR_E    = "\u0045\u00B0";
Pudhari.vowel_EE       = "\u0045";
Pudhari.vowel_AI       = "\u0045\u006F";
Pudhari.vowel_CDR_O    = "\u0041\u006D\u00B0";
Pudhari.vowel_OO       = "\u0041\u006D\u006F";
Pudhari.vowel_AU       = "\u0041\u006D\u00A1";

//Consonants
Pudhari.consnt_KA      = "\u0048";
Pudhari.consnt_KHA_1   = "\u00BB\u006D";
Pudhari.consnt_KHA_2   = "\u0049";
Pudhari.consnt_KHHA_1  = "\u02DC";
Pudhari.consnt_KHHA_2  = "\u2122\u006D";
Pudhari.consnt_GA_1    = "\u00BD\u006D";
Pudhari.consnt_GA_2    = "\u004A";
Pudhari.consnt_GHA     = "\u004B";
Pudhari.consnt_NGA     = "\u004C";

Pudhari.consnt_CA_1    = "\u00C0\u006D";
Pudhari.consnt_CA_2    = "\u004D";
Pudhari.consnt_CHA     = "\u004E";
Pudhari.consnt_JA      = "\u004F";
Pudhari.consnt_ZA      = "\u00C1\u00B5\u006D";
Pudhari.consnt_JHA     = "\u0050";

Pudhari.consnt_TTA     = "\u0051";
Pudhari.consnt_TTHA    = "\u0052";
Pudhari.consnt_DDA     = "\u0053";
Pudhari.consnt_DDDHA   = "\u0053\u2039";
Pudhari.consnt_DDHA    = "\u0054";
Pudhari.consnt_RHA     = "\u0054\u2039";
Pudhari.consnt_NNA     = "\u0055";

Pudhari.consnt_TA_1    = "\u00CB\u006D";
Pudhari.consnt_TA_2    = "\u0056";
//Pudhari.consnt_TA_3    = "\u006D";
Pudhari.consnt_THA_1   = "\u00CF\u006D";
Pudhari.consnt_THA_2   = "\u0057";
Pudhari.consnt_DA      = "\u0058";
Pudhari.consnt_DHA_1   = "\u00DC\u006D";
Pudhari.consnt_DHA_2   = "\u0059";
Pudhari.consnt_NA_1    = "\u005A";
Pudhari.consnt_NA_2    = "\u00DD\u006D";
Pudhari.consnt_SHA     = "\u0065"; 

Pudhari.consnt_PA_1    = "\u006E";
Pudhari.consnt_PA_2    = "\u00DF\u006D";
Pudhari.consnt_PHA     = "\u005C";
Pudhari.consnt_BA      = "\u007E";
Pudhari.consnt_BHA_1   = "\u00E4\u006D";
Pudhari.consnt_BHA_2   = "\u005E";
Pudhari.consnt_MA_1    = "\u00E5\u006D";
Pudhari.consnt_MA_2    = "\u005F";

Pudhari.consnt_YA_1    = "\u00E6\u006D";
Pudhari.consnt_YA_2    = "\u0060";
Pudhari.consnt_RA      = "\u0061";
Pudhari.consnt_LA_1    = "\u0063";
Pudhari.consnt_LA_2    = "\u00EB\u006D";
Pudhari.consnt_LA_3    = "\u0062";
Pudhari.consnt_VA      = "\u0064";
Pudhari.consnt_SHA_1   = "\u00ED\u006D";
Pudhari.consnt_SHA_2   = "\u00FB\u006D";
Pudhari.consnt_SSA_1   = "\u00EE\u006D";
Pudhari.consnt_SSA_2   = "\u0066";
Pudhari.consnt_SA_1    = "\u0067";
Pudhari.consnt_SA_2    = "\u00F1\u006D";
Pudhari.consnt_HA      = "\u0068";
Pudhari.consnt_LLA     = "\u0069";

//Gunintamulu
Pudhari.vowelsn_AA     = "\u006D";
Pudhari.vowelsn_I_1    = "\u0070";
Pudhari.vowelsn_I_2    = "\u007B";
Pudhari.vowelsn_I_3    = "\u005B";
Pudhari.vowelsn_II_1   = "\u0072";
Pudhari.vowelsn_II_2   = "\u0073";
Pudhari.vowelsn_U_1    = "\u0078";
Pudhari.vowelsn_U_2    = "\u0077";       
Pudhari.vowelsn_U_3    = "\u00FE";       
Pudhari.vowelsn_UU_1   = "\u007A";
Pudhari.vowelsn_UU_2   = "\u0079";   
Pudhari.vowelsn_UU_3   = "\u00FF";   
Pudhari.vowelsn_R      = "\u00A5";
Pudhari.vowelsn_RR     = "\u00A6";
Pudhari.vowelsn_CDR_E  = "\u00B0";
Pudhari.vowelsn_EE     = "\u006F";
Pudhari.vowelsn_AI     = "\u00A1";
Pudhari.vowelsn_OO     = "\u006F\u006D";
Pudhari.vowelsn_AU     = "\u00A1\u006D";

//Vowel + anusvara
Pudhari.vowel_IIM      = "\u0042\u00AA";
//Matra + modifier
Pudhari.vowelsn_IM     = "\u0071";

//Half Forms
Pudhari.halffm_KA      = "\u0160";    
Pudhari.halffm_KSH     = "\u00FA";
Pudhari.halffm_KHA     = "\u00BB";
Pudhari.halffm_KHHA    = "\u2122";
Pudhari.halffm_GA      = "\u00BD";
Pudhari.halffm_GHA     = "\u00BF";
Pudhari.halffm_CA      = "\u00C0";
Pudhari.halffm_JA_1    = "\u00C1";
Pudhari.halffm_JJ      = "\u201A";
Pudhari.halffm_ZA_1    = "\u00C1\u00B5";
Pudhari.halffm_JHA     = "\u00C2";
Pudhari.halffm_NYA     = "\u00C4";
Pudhari.halffm_NNA     = "\u00CA";
Pudhari.halffm_TA      = "\u00CB";
Pudhari.halffm_TT      = "\u00CE";   
Pudhari.halffm_TR      = "\u00CD";
Pudhari.halffm_THA     = "\u00CF";
Pudhari.halffm_DHA     = "\u00DC";
Pudhari.halffm_NA      = "\u00DD";
Pudhari.halffm_PA      = "\u00DF";
Pudhari.halffm_PHA     = "\u00E2";
Pudhari.halffm_BA      = "\u00E3";   
Pudhari.halffm_BHA     = "\u00E4";
Pudhari.halffm_MA      = "\u00E5";
Pudhari.halffm_YA      = "\u00E6";
Pudhari.halffm_RA      = "\u00A9";
Pudhari.halffm_LA      = "\u00EB";
Pudhari.halffm_VA      = "\u00EC";
Pudhari.halffm_SHA_1   = "\u00FB";  
Pudhari.halffm_SHA_2   = "\u00ED";
Pudhari.halffm_SHR     = "\u00FB\u0152";
Pudhari.halffm_SSA     = "\u00EE";
Pudhari.halffm_SA      = "\u00F1";
Pudhari.halffm_HA_1    = "\u00F4";
Pudhari.halffm_HA_2    = "\u00D1";
Pudhari.halffm_LLA     = "\u00F9";
Pudhari.halffm_RRA     = "\u00E8";

//Conjuncts
Pudhari.conjct_KK      = "\u00B8";
Pudhari.conjct_KV      = "\u00B9";
Pudhari.conjct_KT      = "\u00BA";
Pudhari.conjct_KSH     = "\u006A";
Pudhari.conjct_KSHA    = "\u00FA\u006D";
//Pudhari.conjct_KSHEE   = "\u00FA\u006D\u006F";//check
Pudhari.conjct_KHR     = "\u00BC";
Pudhari.conjct_NGK     = "\u2018";
Pudhari.conjct_NGKH    = "\u2019";
Pudhari.conjct_GNA     = "\u00BE";
Pudhari.conjct_DNA     = "\u00D6";
Pudhari.conjct_SNA     = "\u00FD";
Pudhari.conjct_SCA     = "\u00FC";
Pudhari.conjct_NGM     = "\u00B6";
Pudhari.conjct_NGG     = "\u201C";
Pudhari.conjct_NGGH    = "\u201D";
Pudhari.conjct_CC      = "\u0192";
Pudhari.conjct_JNY     = "\u006B";
Pudhari.conjct_JHR     = "\u00C3";
Pudhari.conjct_NYC     = "\u0023\u006D";
Pudhari.conjct_JJ      = "\u201A\u006D";
Pudhari.conjct_TT      = "\u00CE\u006D";
Pudhari.conjct_TTTT    = "\u00C5";
Pudhari.conjct_TT_TTH  = "\u00C6";
Pudhari.conjct_TTHTTH  = "\u00C7";  
Pudhari.conjct_DDDD    = "\u00C8";
Pudhari.conjct_DD_DDH  = "\u2013";
Pudhari.conjct_DDHDDH  = "\u00C9";
Pudhari.conjct_TR_1    = "\u00CD\u00AB\u006D";
Pudhari.conjct_TR_2    = "\u00CC";
//Pudhari.conjct_TN      = "\u00CB\u00B3\u006D"; //check
Pudhari.conjct_DG      = "\u00D2";
Pudhari.conjct_DGH     = "\u00D3";
Pudhari.conjct_DD      = "\u00D4";
Pudhari.conjct_D_DH    = "\u00D5";
Pudhari.conjct_DB      = "\u00D7";
Pudhari.conjct_DBH     = "\u00D8";
Pudhari.conjct_DM      = "\u00D9";
Pudhari.conjct_DY      = "\u00DA";
Pudhari.conjct_DV      = "\u00DB";
Pudhari.conjct_NN      = "\u00DE";
Pudhari.conjct_PT      = "\u00E1";
Pudhari.conjct_LL      = "\u201E";  
Pudhari.conjct_SHC     = "\u00F3";
Pudhari.conjct_SHR     = "\u006C";
Pudhari.conjct_SHREE   = "\u00FB\u0152\u006F\u006D";
Pudhari.conjct_SHV     = "\u0153";
Pudhari.conjct_SSTT    = "\u00EF";
Pudhari.conjct_SSTTV   = "\u00EF\u2030";
Pudhari.conjct_SSTTH   = "\u00F0";
Pudhari.conjct_STR     = "\u00F2";
Pudhari.conjct_HNN     = "\u2020";
Pudhari.conjct_HN      = "\u2022";
Pudhari.conjct_HM      = "\u00F7";
Pudhari.conjct_HY      = "\u00F8";
Pudhari.conjct_HR      = "\u00F5";
Pudhari.conjct_HL      = "\u2021";
Pudhari.conjct_HV      = "\u02C6";
Pudhari.conjct_PR      = "\u00E0";
Pudhari.conjct_DR      = "\u00D0";
Pudhari.conjct_RU      = "\u00AE";
Pudhari.conjct_RUU     = "\u00AF";


//Vowel signs + anusvara
Pudhari.vowelsn_IIN    = "\u0074";
Pudhari.vowelsn_EEN    = "\u007C";
Pudhari.vowelsn_AIN    = "\u00A2";

//Vowel signs + RA
Pudhari.vowelsn_II_RA  = "\u0075";
Pudhari.vowelsn_EE_RA  = "\u007D";
Pudhari.vowelsn_AA_RA  = "\u006D\u00A9";
Pudhari.vowelsn_AI_RA  = "\u00A3";

//Vowel sign + anusvara + RA
Pudhari.vowelsn_IIN_RA = "\u0076";
Pudhari.vowelsn_EEN_RA = "\u005D";
Pudhari.vowelsn_AIN_RA = "\u00A4";


//Combos
Pudhari.combo_RU       = "\u00E9";
Pudhari.combo_RUU      = "\u00EA";
Pudhari.conjct_SHAU    = "\u0065\u00A1";
Pudhari.combo_HR       = "\u00F6";

//Half forms of RA
Pudhari.halffm_RA_ANU  = "\u00AA";

Pudhari.vattu_YA       = "\u00E7";
Pudhari.vattu_RA_1     = "\u0152";
Pudhari.vattu_RA_2     = "\u00AB";
Pudhari.vattu_RA_3     = "\u2014";
Pudhari.vattu_RA_4     = "\u00B3";
Pudhari.vattu_RA_5     = "\u00B4";
Pudhari.vattu_VA       = "\u2032";

Pudhari.misc_DANDA     = "\u0026";
Pudhari.misc_OM        = "\u203A";
Pudhari.misc_ABBREV    = "\u0030";
Pudhari.nukta_1        = "\u00B5";
Pudhari.nukta_2        = "\u2039";

//Digits
Pudhari.digit_ZERO     = "\u0030";
Pudhari.digit_ONE      = "\u0031";
Pudhari.digit_TWO      = "\u0032";
Pudhari.digit_THREE    = "\u0033";
Pudhari.digit_FOUR     = "\u0034";
Pudhari.digit_FIVE     = "\u0035";
Pudhari.digit_SIX      = "\u0036";
Pudhari.digit_SEVEN    = "\u0037";
Pudhari.digit_EIGHT    = "\u0038";
Pudhari.digit_NINE     = "\u0039";

//Matches ASCII
Pudhari.EXCLAM         = "\u0021";
Pudhari.PAREN_LEFT     = "\u0028";
Pudhari.PAREN_RIGHT    = "\u0029";
Pudhari.ASTERISK       = "\u002A";
Pudhari.PLUS           = "\u002B";
Pudhari.COMMA          = "\u002C";
Pudhari.HYPHEN         = "\u002D";
Pudhari.PERIOD         = "\u002E";
Pudhari.SLASH          = "\u002F";
Pudhari.SEMICOLON      = "\u003B";
Pudhari.EQUALS         = "\u003D";
Pudhari.QUESTION       = "\u003F";

//Does not match ASCII
Pudhari.extra_QTSINGLE_1 = "\u0022";
Pudhari.extra_QTSINGLE_2 = "\u0027";
Pudhari.MULTIPLY         = "\u0081";
Pudhari.MINUS_1          = "\u00AD";
Pudhari.MINUS_2          = "\u008D";
Pudhari.PERCENT          = "\u0025";
Pudhari.extra_COLON_1    = "\u003A";
Pudhari.extra_COLON_2    = "\u2026";
Pudhari.underscore       = "\u0161";

//Unknown list
Pudhari.misc_UNKNOWN_1 = "\u0024";  
Pudhari.misc_UNKNOWN_2 = "\u003E"; 
Pudhari.misc_UNKNOWN_3 = "\u0178"; 

Pudhari.toPadma = new Object();

Pudhari.toPadma[Pudhari.avagraha]    = Padma.avagraha;
Pudhari.toPadma[Pudhari.anusvara_1]  = Padma.anusvara;
Pudhari.toPadma[Pudhari.anusvara_2]  = Padma.anusvara;
Pudhari.toPadma[Pudhari.candrabindu] = Padma.candrabindu;
Pudhari.toPadma[Pudhari.virama]      = Padma.syllbreak;
Pudhari.toPadma[Pudhari.visarga]     = Padma.visarga;

Pudhari.toPadma[Pudhari.vowel_A]    = Padma.vowel_A;
Pudhari.toPadma[Pudhari.vowel_AA]   = Padma.vowel_AA;
Pudhari.toPadma[Pudhari.vowel_I]    = Padma.vowel_I;
Pudhari.toPadma[Pudhari.vowel_II]   = Padma.vowel_II;
Pudhari.toPadma[Pudhari.vowel_U]    = Padma.vowel_U;
Pudhari.toPadma[Pudhari.vowel_UU]   = Padma.vowel_UU;
Pudhari.toPadma[Pudhari.vowel_R]    = Padma.vowel_R;
Pudhari.toPadma[Pudhari.vowel_RR]   = Padma.vowel_RR;            
Pudhari.toPadma[Pudhari.vowel_CDR_E]= Padma.vowel_CDR_E;
Pudhari.toPadma[Pudhari.vowel_EE]   = Padma.vowel_EE;
Pudhari.toPadma[Pudhari.vowel_AI]   = Padma.vowel_AI;
Pudhari.toPadma[Pudhari.vowel_CDR_O]= Padma.vowel_CDR_O;
Pudhari.toPadma[Pudhari.vowel_OO]   = Padma.vowel_OO;
Pudhari.toPadma[Pudhari.vowel_AU]   = Padma.vowel_AU;

Pudhari.toPadma[Pudhari.consnt_KA]    = Padma.consnt_KA;
Pudhari.toPadma[Pudhari.consnt_KHA_1] = Padma.consnt_KHA;
Pudhari.toPadma[Pudhari.consnt_KHA_2] = Padma.consnt_KHA;
Pudhari.toPadma[Pudhari.consnt_KHHA_1]= Padma.consnt_KHHA;
Pudhari.toPadma[Pudhari.consnt_KHHA_2]= Padma.consnt_KHHA;
Pudhari.toPadma[Pudhari.consnt_GA_1]  = Padma.consnt_GA;
Pudhari.toPadma[Pudhari.consnt_GA_2]  = Padma.consnt_GA;
Pudhari.toPadma[Pudhari.consnt_GHA]   = Padma.consnt_GHA;
Pudhari.toPadma[Pudhari.consnt_NGA]   = Padma.consnt_NGA;

Pudhari.toPadma[Pudhari.consnt_CA_1]  = Padma.consnt_CA;
Pudhari.toPadma[Pudhari.consnt_CA_2]  = Padma.consnt_CA;
Pudhari.toPadma[Pudhari.consnt_CHA]   = Padma.consnt_CHA;
Pudhari.toPadma[Pudhari.consnt_JA]    = Padma.consnt_JA;
Pudhari.toPadma[Pudhari.consnt_ZA]    = Padma.consnt_ZA;
Pudhari.toPadma[Pudhari.consnt_JHA]   = Padma.consnt_JHA;

Pudhari.toPadma[Pudhari.consnt_TTA]   = Padma.consnt_TTA;
Pudhari.toPadma[Pudhari.consnt_TTHA]  = Padma.consnt_TTHA;
Pudhari.toPadma[Pudhari.consnt_DDA]   = Padma.consnt_DDA;
Pudhari.toPadma[Pudhari.consnt_DDDHA] = Padma.consnt_DDDHA;
Pudhari.toPadma[Pudhari.consnt_DDHA]  = Padma.consnt_DDHA;
Pudhari.toPadma[Pudhari.consnt_RHA]   = Padma.consnt_RHA;
Pudhari.toPadma[Pudhari.consnt_NNA]   = Padma.consnt_NNA;

Pudhari.toPadma[Pudhari.consnt_TA_1]  = Padma.consnt_TA;
Pudhari.toPadma[Pudhari.consnt_TA_2]  = Padma.consnt_TA;
//Pudhari.toPadma[Pudhari.consnt_TA_3]  = Padma.consnt_TA;
Pudhari.toPadma[Pudhari.consnt_THA_1] = Padma.consnt_THA;
Pudhari.toPadma[Pudhari.consnt_THA_2] = Padma.consnt_THA;
Pudhari.toPadma[Pudhari.consnt_DA]    = Padma.consnt_DA;
Pudhari.toPadma[Pudhari.consnt_DHA_1] = Padma.consnt_DHA;
Pudhari.toPadma[Pudhari.consnt_DHA_2] = Padma.consnt_DHA;
Pudhari.toPadma[Pudhari.consnt_NA_1]  = Padma.consnt_NA;
Pudhari.toPadma[Pudhari.consnt_NA_2]  = Padma.consnt_NA;

Pudhari.toPadma[Pudhari.consnt_PA_1]  = Padma.consnt_PA;
Pudhari.toPadma[Pudhari.consnt_PA_2]  = Padma.consnt_PA;
Pudhari.toPadma[Pudhari.consnt_PHA]   = Padma.consnt_PHA;
Pudhari.toPadma[Pudhari.consnt_BA]    = Padma.consnt_BA;
Pudhari.toPadma[Pudhari.consnt_BHA_1] = Padma.consnt_BHA;
Pudhari.toPadma[Pudhari.consnt_BHA_2] = Padma.consnt_BHA;
Pudhari.toPadma[Pudhari.consnt_MA_1]  = Padma.consnt_MA;
Pudhari.toPadma[Pudhari.consnt_MA_2]  = Padma.consnt_MA;

Pudhari.toPadma[Pudhari.consnt_YA_1]  = Padma.consnt_YA;
Pudhari.toPadma[Pudhari.consnt_YA_2]  = Padma.consnt_YA;
Pudhari.toPadma[Pudhari.consnt_RA]    = Padma.consnt_RA;
Pudhari.toPadma[Pudhari.consnt_LA_1]  = Padma.consnt_LA;
Pudhari.toPadma[Pudhari.consnt_LA_2]  = Padma.consnt_LA;
Pudhari.toPadma[Pudhari.consnt_LA_3]  = Padma.consnt_LA;
Pudhari.toPadma[Pudhari.consnt_VA]    = Padma.consnt_VA;
Pudhari.toPadma[Pudhari.consnt_SHA]   = Padma.consnt_SHA;
Pudhari.toPadma[Pudhari.consnt_SHA_1] = Padma.consnt_SHA;
Pudhari.toPadma[Pudhari.consnt_SHA_2] = Padma.consnt_SHA;
Pudhari.toPadma[Pudhari.consnt_SSA_1] = Padma.consnt_SSA;
Pudhari.toPadma[Pudhari.consnt_SSA_2] = Padma.consnt_SSA;
Pudhari.toPadma[Pudhari.consnt_SA_1]  = Padma.consnt_SA;
Pudhari.toPadma[Pudhari.consnt_SA_2]  = Padma.consnt_SA;
Pudhari.toPadma[Pudhari.consnt_HA]    = Padma.consnt_HA;
Pudhari.toPadma[Pudhari.consnt_LLA]   = Padma.consnt_LLA;

//Gunintamulu
Pudhari.toPadma[Pudhari.vowelsn_AA]   = Padma.vowelsn_AA;
Pudhari.toPadma[Pudhari.vowelsn_I_1]  = Padma.vowelsn_I;
Pudhari.toPadma[Pudhari.vowelsn_I_2]  = Padma.vowelsn_I;
Pudhari.toPadma[Pudhari.vowelsn_I_3]  = Padma.vowelsn_I;
Pudhari.toPadma[Pudhari.vowelsn_II_1] = Padma.vowelsn_II;
Pudhari.toPadma[Pudhari.vowelsn_II_2] = Padma.vowelsn_II;
Pudhari.toPadma[Pudhari.vowelsn_U_1]  = Padma.vowelsn_U;
Pudhari.toPadma[Pudhari.vowelsn_U_2]  = Padma.vowelsn_U;
Pudhari.toPadma[Pudhari.vowelsn_U_3]  = Padma.vowelsn_U;
Pudhari.toPadma[Pudhari.vowelsn_UU_1] = Padma.vowelsn_UU;
Pudhari.toPadma[Pudhari.vowelsn_UU_2] = Padma.vowelsn_UU;
Pudhari.toPadma[Pudhari.vowelsn_UU_3] = Padma.vowelsn_UU;
Pudhari.toPadma[Pudhari.vowelsn_R]    = Padma.vowelsn_R;
Pudhari.toPadma[Pudhari.vowelsn_RR]   = Padma.vowelsn_RR;
Pudhari.toPadma[Pudhari.vowelsn_CDR_E]= Padma.vowelsn_CDR_E;
Pudhari.toPadma[Pudhari.vowelsn_EE]   = Padma.vowelsn_EE;
Pudhari.toPadma[Pudhari.vowelsn_AI]   = Padma.vowelsn_AI;
Pudhari.toPadma[Pudhari.vowelsn_OO]   = Padma.vowelsn_OO;
Pudhari.toPadma[Pudhari.vowelsn_AU]   = Padma.vowelsn_AU;

//Vowel + anusvara
Pudhari.toPadma[Pudhari.vowel_IIM]    = Padma.vowel_II + Padma.anusvara;
//matra + modifier
Pudhari.toPadma[Pudhari.vowelsn_IM]   = Padma.vowelsn_I + Padma.anusvara;

//Halffm
Pudhari.toPadma[Pudhari.halffm_KA]   = Padma.halffm_KA;
Pudhari.toPadma[Pudhari.halffm_KSH]  = Padma.halffm_KA + Padma.halffm_SSA;
Pudhari.toPadma[Pudhari.halffm_KHA]  = Padma.halffm_KHA;
Pudhari.toPadma[Pudhari.halffm_KHHA] = Padma.halffm_KHHA;
Pudhari.toPadma[Pudhari.halffm_GA]   = Padma.halffm_GA;
Pudhari.toPadma[Pudhari.halffm_GHA]  = Padma.halffm_GHA;
Pudhari.toPadma[Pudhari.halffm_CA]   = Padma.halffm_CA;
Pudhari.toPadma[Pudhari.halffm_JA_1] = Padma.halffm_JA;
Pudhari.toPadma[Pudhari.halffm_JJ]   = Padma.halffm_JA + Padma.halffm_JA;
Pudhari.toPadma[Pudhari.halffm_ZA_1] = Padma.halffm_ZA;
Pudhari.toPadma[Pudhari.halffm_JHA]  = Padma.halffm_JHA;
Pudhari.toPadma[Pudhari.halffm_NYA]  = Padma.halffm_NYA;
Pudhari.toPadma[Pudhari.halffm_NNA]  = Padma.halffm_NNA;
Pudhari.toPadma[Pudhari.halffm_TA]   = Padma.halffm_TA;
Pudhari.toPadma[Pudhari.halffm_TT]   = Padma.halffm_TA + Padma.halffm_TA;
Pudhari.toPadma[Pudhari.halffm_TR]   = Padma.halffm_TA + Padma.halffm_RA;
Pudhari.toPadma[Pudhari.halffm_THA]  = Padma.halffm_THA;
Pudhari.toPadma[Pudhari.halffm_DHA]  = Padma.halffm_DHA;
Pudhari.toPadma[Pudhari.halffm_NA]   = Padma.halffm_NA;
Pudhari.toPadma[Pudhari.halffm_PA]   = Padma.halffm_PA;
Pudhari.toPadma[Pudhari.halffm_PHA]  = Padma.halffm_PHA;
Pudhari.toPadma[Pudhari.halffm_BA]   = Padma.halffm_BA;
Pudhari.toPadma[Pudhari.halffm_BHA]  = Padma.halffm_BHA;
Pudhari.toPadma[Pudhari.halffm_MA]   = Padma.halffm_MA;
Pudhari.toPadma[Pudhari.halffm_YA]   = Padma.halffm_YA;
Pudhari.toPadma[Pudhari.halffm_RA]   = Padma.halffm_RA;
Pudhari.toPadma[Pudhari.halffm_LA]   = Padma.halffm_LA;
Pudhari.toPadma[Pudhari.halffm_VA]   = Padma.halffm_VA;
Pudhari.toPadma[Pudhari.halffm_SHA_1]= Padma.halffm_SHA;
Pudhari.toPadma[Pudhari.halffm_SHA_2]= Padma.halffm_SHA;
Pudhari.toPadma[Pudhari.halffm_SHR]  = Padma.halffm_SHA + Padma.halffm_RA;
Pudhari.toPadma[Pudhari.halffm_SSA]  = Padma.halffm_SSA;
Pudhari.toPadma[Pudhari.halffm_SA]   = Padma.halffm_SA;
Pudhari.toPadma[Pudhari.halffm_HA_1] = Padma.halffm_HA;
Pudhari.toPadma[Pudhari.halffm_HA_2] = Padma.halffm_HA;
Pudhari.toPadma[Pudhari.halffm_LLA]  = Padma.halffm_LLA;
Pudhari.toPadma[Pudhari.halffm_RRA]  = Padma.halffm_RRA;

//Conjuncts
Pudhari.toPadma[Pudhari.conjct_KK]     = Padma.consnt_KA + Padma.vattu_KA;
Pudhari.toPadma[Pudhari.conjct_KV]     = Padma.consnt_KA + Padma.vattu_VA;
Pudhari.toPadma[Pudhari.conjct_KT]     = Padma.consnt_KA + Padma.vattu_TA;
Pudhari.toPadma[Pudhari.conjct_KSH]    = Padma.consnt_KA + Padma.vattu_SSA;
Pudhari.toPadma[Pudhari.conjct_KSHA]   = Padma.consnt_KA + Padma.vattu_SSA;
//Pudhari.toPadma[Pudhari.conjct_KSHEE]  = Padma.consnt_KA + Padma.vattu_SSA + Padma.vowelsn_EE;
Pudhari.toPadma[Pudhari.conjct_KHR]    = Padma.consnt_KHA + Padma.vattu_RA;
Pudhari.toPadma[Pudhari.conjct_NGK]    = Padma.consnt_NGA + Padma.vattu_KA;
Pudhari.toPadma[Pudhari.conjct_NGKH]   = Padma.consnt_NGA + Padma.vattu_KHA;
Pudhari.toPadma[Pudhari.conjct_GNA]    = Padma.consnt_GA + Padma.vattu_NA;
Pudhari.toPadma[Pudhari.conjct_DNA]    = Padma.consnt_DA + Padma.vattu_NA;
Pudhari.toPadma[Pudhari.conjct_SNA]    = Padma.consnt_SHA + Padma.vattu_NA;
Pudhari.toPadma[Pudhari.conjct_SCA]    = Padma.consnt_SHA + Padma.vattu_CA;
Pudhari.toPadma[Pudhari.conjct_NGM]    = Padma.consnt_NGA + Padma.vattu_MA;
Pudhari.toPadma[Pudhari.conjct_NGG]    = Padma.consnt_NGA + Padma.vattu_GA;
Pudhari.toPadma[Pudhari.conjct_NGGH]   = Padma.consnt_NGA + Padma.vattu_GHA;
Pudhari.toPadma[Pudhari.conjct_CC]     = Padma.consnt_CA + Padma.vattu_CA;
Pudhari.toPadma[Pudhari.conjct_JNY]    = Padma.consnt_JA + Padma.vattu_NYA;
Pudhari.toPadma[Pudhari.conjct_JHR]    = Padma.consnt_JHA + Padma.vattu_RA;
Pudhari.toPadma[Pudhari.conjct_NYC]    = Padma.consnt_NYA + Padma.vattu_CA;
Pudhari.toPadma[Pudhari.conjct_JJ]     = Padma.consnt_JA + Padma.vattu_JA;
Pudhari.toPadma[Pudhari.conjct_TT]     = Padma.consnt_TA + Padma.vattu_TA;
Pudhari.toPadma[Pudhari.conjct_TTTT]   = Padma.consnt_TTA + Padma.vattu_TTA;
Pudhari.toPadma[Pudhari.conjct_TT_TTH] = Padma.consnt_TTA + Padma.vattu_TTHA;
Pudhari.toPadma[Pudhari.conjct_TTHTTH] = Padma.consnt_TTHA + Padma.vattu_TTHA;
Pudhari.toPadma[Pudhari.conjct_DDDD]   = Padma.consnt_DDA + Padma.vattu_DDA;
Pudhari.toPadma[Pudhari.conjct_DD_DDH] = Padma.consnt_DDA + Padma.vattu_DDHA;
Pudhari.toPadma[Pudhari.conjct_DDHDDH] = Padma.consnt_DDHA + Padma.vattu_DDHA;
Pudhari.toPadma[Pudhari.conjct_TR_1]   = Padma.consnt_TA + Padma.vattu_RA;
Pudhari.toPadma[Pudhari.conjct_TR_2]   = Padma.consnt_TA + Padma.vattu_RA;
//Pudhari.toPadma[Pudhari.conjct_TN]     = Padma.consnt_TA + Padma.vattu_NA;
Pudhari.toPadma[Pudhari.conjct_DG]     = Padma.consnt_DA + Padma.vattu_GA;
Pudhari.toPadma[Pudhari.conjct_DGH]    = Padma.consnt_DA + Padma.vattu_GHA;
Pudhari.toPadma[Pudhari.conjct_DD]     = Padma.consnt_DA + Padma.vattu_DA;
Pudhari.toPadma[Pudhari.conjct_D_DH]   = Padma.consnt_DA + Padma.vattu_DHA;
Pudhari.toPadma[Pudhari.conjct_DB]     = Padma.consnt_DA + Padma.vattu_BA;
Pudhari.toPadma[Pudhari.conjct_DBH]    = Padma.consnt_DA + Padma.vattu_BHA;
Pudhari.toPadma[Pudhari.conjct_DM]     = Padma.consnt_DA + Padma.vattu_MA;
Pudhari.toPadma[Pudhari.conjct_DY]     = Padma.consnt_DA + Padma.vattu_YA;
Pudhari.toPadma[Pudhari.conjct_DV]     = Padma.consnt_DA + Padma.vattu_VA;
Pudhari.toPadma[Pudhari.conjct_NN]     = Padma.consnt_NA + Padma.vattu_NA;
Pudhari.toPadma[Pudhari.conjct_PT]     = Padma.consnt_PA + Padma.vattu_TA;
Pudhari.toPadma[Pudhari.conjct_LL]     = Padma.consnt_LA + Padma.vattu_LA;
Pudhari.toPadma[Pudhari.conjct_SHC]    = Padma.consnt_SHA + Padma.vattu_CA;
Pudhari.toPadma[Pudhari.conjct_SHR]    = Padma.consnt_SHA + Padma.vattu_RA;
Pudhari.toPadma[Pudhari.conjct_SHREE]  = Padma.consnt_SHA + Padma.vattu_RA + Padma.vowelsn_EE;
Pudhari.toPadma[Pudhari.conjct_SHV]    = Padma.consnt_SHA + Padma.vattu_VA;
Pudhari.toPadma[Pudhari.conjct_SSTT]   = Padma.consnt_SSA + Padma.vattu_TTA;
Pudhari.toPadma[Pudhari.conjct_SSTTV]  = Padma.consnt_SSA + Padma.vattu_TTA + Padma.vattu_VA;
Pudhari.toPadma[Pudhari.conjct_SSTTH]  = Padma.consnt_SSA + Padma.vattu_TTHA;
Pudhari.toPadma[Pudhari.conjct_STR]    = Padma.consnt_SA + Padma.vattu_TA + Padma.vattu_RA;
Pudhari.toPadma[Pudhari.conjct_HNN]    = Padma.consnt_HA + Padma.vattu_NNA;
Pudhari.toPadma[Pudhari.conjct_HN]     = Padma.consnt_HA + Padma.vattu_NA;
Pudhari.toPadma[Pudhari.conjct_HM]     = Padma.consnt_HA + Padma.vattu_MA;
Pudhari.toPadma[Pudhari.conjct_HY]     = Padma.consnt_HA + Padma.vattu_YA;
Pudhari.toPadma[Pudhari.conjct_HR]     = Padma.consnt_HA + Padma.vattu_RA;
Pudhari.toPadma[Pudhari.conjct_HL]     = Padma.consnt_HA + Padma.vattu_LA;
Pudhari.toPadma[Pudhari.conjct_HV]     = Padma.consnt_HA + Padma.vattu_VA;
Pudhari.toPadma[Pudhari.conjct_PR]     = Padma.consnt_PA + Padma.vattu_RA;
Pudhari.toPadma[Pudhari.conjct_DR]     = Padma.consnt_DA + Padma.vattu_RA;
Pudhari.toPadma[Pudhari.conjct_RU]     = Padma.vattu_RA + Padma.vowelsn_U;
Pudhari.toPadma[Pudhari.conjct_RUU]    = Padma.vattu_RA + Padma.vowelsn_UU;

//Vowel signs + anusvara
Pudhari.toPadma[Pudhari.vowelsn_IIN]  = Padma.vowelsn_II + Padma.anusvara;
Pudhari.toPadma[Pudhari.vowelsn_EEN]   = Padma.vowelsn_EE + Padma.anusvara;
Pudhari.toPadma[Pudhari.vowelsn_AIN]   = Padma.vowelsn_AI + Padma.anusvara;

//Vowel signs + RA
Pudhari.toPadma[Pudhari.vowelsn_II_RA]  = Padma.vowelsn_II + Padma.halffm_RA;
Pudhari.toPadma[Pudhari.vowelsn_EE_RA]  = Padma.vowelsn_EE + Padma.halffm_RA;
Pudhari.toPadma[Pudhari.vowelsn_AA_RA]  = Padma.vowelsn_AA + Padma.halffm_RA;
Pudhari.toPadma[Pudhari.vowelsn_AI_RA]  = Padma.vowelsn_AI + Padma.halffm_RA;

//Vowel sign + anusvara + RA
Pudhari.toPadma[Pudhari.vowelsn_IIN_RA] = Padma.vowelsn_II + Padma.anusvara + Padma.halffm_RA;
Pudhari.toPadma[Pudhari.vowelsn_EEN_RA] = Padma.vowelsn_EE + Padma.anusvara + Padma.halffm_RA;
Pudhari.toPadma[Pudhari.vowelsn_AIN_RA] = Padma.vowelsn_AI + Padma.anusvara + Padma.halffm_RA;

//Combos
Pudhari.toPadma[Pudhari.combo_RU]      = Padma.consnt_RA + Padma.vowelsn_U;
Pudhari.toPadma[Pudhari.combo_RUU]     = Padma.consnt_RA + Padma.vowelsn_UU;
Pudhari.toPadma[Pudhari.conjct_SHAU]   = Padma.consnt_SHA + Padma.vowelsn_AU;
Pudhari.toPadma[Pudhari.combo_HR]      = Padma.consnt_HA + Padma.vowelsn_R;
Pudhari.toPadma[Pudhari.halffm_RA_ANU] = Padma.halffm_RA + Padma.anusvara;

Pudhari.toPadma[Pudhari.vattu_YA]      = Padma.vattu_YA;
Pudhari.toPadma[Pudhari.vattu_RA_1]    = Padma.vattu_RA;
Pudhari.toPadma[Pudhari.vattu_RA_2]    = Padma.vattu_RA;
Pudhari.toPadma[Pudhari.vattu_RA_3]    = Padma.vattu_RA;
Pudhari.toPadma[Pudhari.vattu_RA_4]    = Padma.vattu_RA;
Pudhari.toPadma[Pudhari.vattu_RA_5]    = Padma.vattu_RA;
Pudhari.toPadma[Pudhari.vattu_VA]      = Padma.vattu_VA;

Pudhari.toPadma[Pudhari.misc_DANDA]    = Padma.danda;
Pudhari.toPadma[Pudhari.misc_OM]       = Padma.om;
Pudhari.toPadma[Pudhari.misc_ABBREV]   = Padma.abbrev;
Pudhari.toPadma[Pudhari.nukta_1]       = Padma.nukta;
Pudhari.toPadma[Pudhari.nukta_2]       = Padma.nukta;

//Does not match ASCII
Pudhari.toPadma[Pudhari.extra_QTSINGLE_1] = "\u2018"; //Left single quotation mark
Pudhari.toPadma[Pudhari.extra_QTSINGLE_2] = "\u2019"; //Right single quotation mark
Pudhari.toPadma[Pudhari.MULTIPLY]         = "\u00D7"; //Unicode for multiplication symbol
Pudhari.toPadma[Pudhari.MINUS_1]          = "\u002D"; //Unicode for substraction symbol
Pudhari.toPadma[Pudhari.MINUS_2]          = "\u002D"; //Unicode for substraction symbol
Pudhari.toPadma[Pudhari.PERCENT]          = "%";
Pudhari.toPadma[Pudhari.extra_COLON_1]    = ":";
Pudhari.toPadma[Pudhari.extra_COLON_2]    = ":";
Pudhari.toPadma[Pudhari.underscore]       = "_";

//Digits
Pudhari.toPadma[Pudhari.digit_ZERO]    = Padma.digit_ZERO;
Pudhari.toPadma[Pudhari.digit_ONE]     = Padma.digit_ONE;
Pudhari.toPadma[Pudhari.digit_TWO]     = Padma.digit_TWO;
Pudhari.toPadma[Pudhari.digit_THREE]   = Padma.digit_THREE;
Pudhari.toPadma[Pudhari.digit_FOUR]    = Padma.digit_FOUR;
Pudhari.toPadma[Pudhari.digit_FIVE]    = Padma.digit_FIVE;
Pudhari.toPadma[Pudhari.digit_SIX]     = Padma.digit_SIX;
Pudhari.toPadma[Pudhari.digit_SEVEN]   = Padma.digit_SEVEN;
Pudhari.toPadma[Pudhari.digit_EIGHT]   = Padma.digit_EIGHT;
Pudhari.toPadma[Pudhari.digit_NINE]    = Padma.digit_NINE;


Pudhari.prefixList = new Object();
Pudhari.prefixList[Pudhari.vowelsn_I_1]= true;
Pudhari.prefixList[Pudhari.vowelsn_I_2]= true;
Pudhari.prefixList[Pudhari.vowelsn_I_3]= true;
Pudhari.prefixList[Pudhari.vowelsn_IM] = true;
Pudhari.prefixList[Pudhari.nukta_1]    = true;
//Pudhari.prefixList[Pudhari.halffm_NA]  = true;

Pudhari.suffixList = new Object();
//Pudhari.suffixList[Pudhari.vowelsn_EE]    = true;
Pudhari.suffixList[Pudhari.halffm_RA]     = true;
Pudhari.suffixList[Pudhari.halffm_RA_ANU] = true;
Pudhari.suffixList[Pudhari.vowelsn_AA_RA] = true;
Pudhari.suffixList[Pudhari.vowelsn_II_RA] = true;
Pudhari.suffixList[Pudhari.vowelsn_IIN_RA]= true;
Pudhari.suffixList[Pudhari.vowelsn_EEN_RA]= true;
Pudhari.suffixList[Pudhari.vowelsn_EE_RA] = true;

Pudhari.redundantList = new Object();
Pudhari.redundantList[Pudhari.misc_UNKNOWN_1] = true;
Pudhari.redundantList[Pudhari.misc_UNKNOWN_2] = true;
Pudhari.redundantList[Pudhari.misc_UNKNOWN_3] = true;

Pudhari.overloadList = new Object();
Pudhari.overloadList[Pudhari.vowel_A]      = true;
Pudhari.overloadList[Pudhari.vowel_AA]     = true;
Pudhari.overloadList[Pudhari.vowel_EE]     = true;
Pudhari.overloadList[Pudhari.vowel_I]      = true;
Pudhari.overloadList[Pudhari.consnt_DDA]   = true;
Pudhari.overloadList[Pudhari.consnt_DDHA]  = true;
Pudhari.overloadList[Pudhari.vowelsn_AA]   = true;
Pudhari.overloadList[Pudhari.vowelsn_EE]   = true;
Pudhari.overloadList[Pudhari.vowelsn_AI]   = true;
Pudhari.overloadList[Pudhari.halffm_KSH]   = true;
Pudhari.overloadList[Pudhari.halffm_KHA]   = true;
Pudhari.overloadList[Pudhari.halffm_KHHA]  = true;
Pudhari.overloadList[Pudhari.halffm_GA]    = true;
Pudhari.overloadList[Pudhari.halffm_GHA]   = true;
Pudhari.overloadList[Pudhari.halffm_CA]    = true;
Pudhari.overloadList[Pudhari.halffm_JJ]    = true;
Pudhari.overloadList[Pudhari.halffm_JA_1]  = true;
Pudhari.overloadList[Pudhari.halffm_ZA_1]  = true;
Pudhari.overloadList[Pudhari.halffm_JHA]   = true;
Pudhari.overloadList[Pudhari.halffm_NNA]   = true;
Pudhari.overloadList[Pudhari.halffm_TA]    = true;
Pudhari.overloadList[Pudhari.halffm_TT]    = true;
Pudhari.overloadList[Pudhari.halffm_TR]    = true;
Pudhari.overloadList[Pudhari.halffm_THA]   = true;
Pudhari.overloadList[Pudhari.halffm_DHA]   = true;
Pudhari.overloadList[Pudhari.halffm_NA]    = true;
Pudhari.overloadList[Pudhari.halffm_BHA]   = true;
Pudhari.overloadList[Pudhari.halffm_PA]    = true;
Pudhari.overloadList[Pudhari.halffm_MA]    = true;
Pudhari.overloadList[Pudhari.halffm_YA]    = true;
Pudhari.overloadList[Pudhari.halffm_LA]    = true;
Pudhari.overloadList[Pudhari.halffm_SHA_2] = true;
Pudhari.overloadList[Pudhari.halffm_SHR]   = true;
Pudhari.overloadList[Pudhari.halffm_SSA]   = true;
Pudhari.overloadList[Pudhari.halffm_SA]    = true;
Pudhari.overloadList[Pudhari.conjct_KSH]   = true;
Pudhari.overloadList[Pudhari.conjct_TR_2]  = true;
Pudhari.overloadList[Pudhari.conjct_SSTT]  = true;
Pudhari.overloadList["\u00FB"]              = true;
Pudhari.overloadList["\u0065"]              = true;
Pudhari.overloadList["\u0023"]              = true;
Pudhari.overloadList["\u00CD\u00AB"]        = true;
//Pudhari.overloadList["\u00CB\u00B3"]        = true;
Pudhari.overloadList["\u00FB\u0152\u006F"]  = true;

//shree-pud-77bl
function ShreePud77bl()
{
}

ShreePud77bl.maxLookupLen = Pudhari.maxLookupLen;
ShreePud77bl.fontFace     = "Shree-Pud-77BL";
ShreePud77bl.displayName  = "Shree-Pud-77BL";
ShreePud77bl.script       = Pudhari.script;
ShreePud77bl.hasSuffixes  = Pudhari.hasSuffixes;

ShreePud77bl.lookup = function (str) 
{
    return Pudhari.lookup(str);
}

ShreePud77bl.isPrefixSymbol = function (str)
{
    return Pudhari.isPrefixSymbol(str);
}

ShreePud77bl.isSuffixSymbol = function (str)
{
    return Pudhari.isSuffixSymbol(str);
}

ShreePud77bl.isOverloaded = function (str)
{
    return Pudhari.isOverloaded(str);
}

ShreePud77bl.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return Pudhari.handleTwoPartVowelSigns(sign1, sign2);
}

ShreePud77bl.isRedundant = function (str)
{
    return Pudhari.isRedundant(str);
}

//shree-pud-77nl
function ShreePud77nl()
{
}

ShreePud77nl.maxLookupLen = Pudhari.maxLookupLen;
ShreePud77nl.fontFace     = "Shree-Pud-77NL";
ShreePud77nl.displayName  = "Shree-Pud-77NL";
ShreePud77nl.script       = Pudhari.script;
ShreePud77nl.hasSuffixes  = Pudhari.hasSuffixes;

ShreePud77nl.lookup = function (str) 
{
    return Pudhari.lookup(str);
}

ShreePud77nl.isPrefixSymbol = function (str)
{
    return Pudhari.isPrefixSymbol(str);
}

ShreePud77nl.isSuffixSymbol = function (str)
{
    return Pudhari.isSuffixSymbol(str);
}

ShreePud77nl.isOverloaded = function (str)
{
    return Pudhari.isOverloaded(str);
}

ShreePud77nl.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return Pudhari.handleTwoPartVowelSigns(sign1, sign2);
}

ShreePud77nl.isRedundant = function (str)
{
    return Pudhari.isRedundant(str);
}

//shree-pud-77nw
//Differs -- 00B3,00B4,00B6,2018,2019
function ShreePud77nw()
{
}

ShreePud77nw.initialize = function()
{
    for (var name in Pudhari.toPadma)
    ShreePud77nw.toPadma[name] = Pudhari.toPadma[name];

    //overwrite 
    ShreePud77nw.toPadma[ShreePud77nw.halffm_KA_2] = Padma.halffm_KA;
    ShreePud77nw.toPadma[ShreePud77nw.vattu_NA]    = Padma.vattu_NA;
    ShreePud77nw.toPadma[ShreePud77nw.consnt_YA_3] = Padma.consnt_YA;
    ShreePud77nw.toPadma[ShreePud77nw.consnt_MA_3] = Padma.consnt_MA;
    ShreePud77nw.toPadma[ShreePud77nw.consnt_PHA_2]= Padma.consnt_PHA;
}

ShreePud77nw.maxLookupLen = Pudhari.maxLookupLen;
ShreePud77nw.fontFace     = "Shree-Pud-77NW";
ShreePud77nw.displayName  = "Shree-Pud-77NW";
ShreePud77nw.script       = Pudhari.script;
ShreePud77nw.hasSuffixes  = Pudhari.hasSuffixes;

ShreePud77nw.lookup = function (str) 
{
    return ShreePud77nw.toPadma[str];
}

ShreePud77nw.isPrefixSymbol = function (str)
{
    return Pudhari.isPrefixSymbol(str);
}

ShreePud77nw.isSuffixSymbol = function (str)
{
    return Pudhari.isSuffixSymbol(str);
}

ShreePud77nw.isOverloaded = function (str)
{
    return Pudhari.isOverloaded(str);
}

ShreePud77nw.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return Pudhari.handleTwoPartVowelSigns(sign1, sign2);
}

ShreePud77nw.isRedundant = function (str)
{
    return Pudhari.isRedundant(str);
}

ShreePud77nw.toPadma = new Object();

ShreePud77nw.halffm_KA_2  = "\u00B3";
ShreePud77nw.vattu_NA     = "\u00B4";
ShreePud77nw.consnt_YA_3  = "\u00B6";
ShreePud77nw.consnt_MA_3  = "\u2018";
ShreePud77nw.consnt_PHA_2 = "\u2019";
