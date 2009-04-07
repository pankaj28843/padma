//$Id: Krutidev.js,v 1.2 2009/04/07 07:35:19 harshita Exp $

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

//Kruti Dev 010 Devanagari
function Krutidev()
{
}

//The interface every dynamic font encoding should implement
Krutidev.maxLookupLen = 3;
Krutidev.fontFace     = "Kruti Dev 010";
Krutidev.displayName  = "Krutidev";
Krutidev.script       = Padma.script_DEVANAGARI;
Krutidev.hasSuffixes  = true;

Krutidev.lookup = function (str) 
{
    return Krutidev.toPadma[str];
}

Krutidev.isPrefixSymbol = function (str)
{
    return Krutidev.prefixList[str] != null;
}

Krutidev.isSuffixSymbol = function (str)
{
    return Krutidev.suffixList[str] != null;
}

Krutidev.isOverloaded = function (str)
{
    return Krutidev.overloadList[str] != null;
}

Krutidev.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if ((sign1 == Padma.vowelsn_EE && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_EE))
        return Padma.vowelsn_OO;
    if ((sign1 == Padma.vowelsn_AI && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_AI))
        return Padma.vowelsn_AU;
    return sign1 + sign2;    
}

Krutidev.isRedundant = function (str)
{
    return Krutidev.redundantList[str] != null;
}

//TODO U+ 002D,00A4,00A7,00CA,
//00D3,00DB,00DC,00E5,00EE,00F1,00F3,00F5,0152
//0160,2010,2039,203A

//Vowel modifiers
Krutidev.avagraha	= "\u00B7";
Krutidev.anusvara       = "\u0061";
Krutidev.candrabindu    = "\u00A1";
//Krutidev.visarga	= "\u";
Krutidev.virama         = "\u007E";

//Vowels
Krutidev.vowel_A        = "\u0076";
Krutidev.vowel_AA       = "\u0076\u006B";
Krutidev.vowel_I        = "\u0062";
Krutidev.vowel_II_1     = "\u00C3";
Krutidev.vowel_II_2     = "\u0062\u005A";
Krutidev.vowel_U        = "\u006D";
Krutidev.vowel_UU       = "\u00C5";
Krutidev.vowel_R        = "\u005F";
//Krutidev.vowel_CDR_E    = "\u";
Krutidev.vowel_EE       = "\u002C";
Krutidev.vowel_AI       = "\u002C\u0073";
Krutidev.vowel_CDR_O    = "\u0076\u006B\u0057";
Krutidev.vowel_OO_1     = "\u0076\u006B\u0073";
Krutidev.vowel_OO_2     = "\u0076\u00A8"; 
Krutidev.vowel_AU_1     = "\u0076\u006B\u0053";
Krutidev.vowel_AU_2     = "\u0076\u00A9"; 

//Consonants
Krutidev.consnt_KA_1    = "\u0044\u006B";
Krutidev.consnt_KA_2    = "\u0064";
Krutidev.consnt_KHA_1   = "\u005B\u006B";
//Krutidev.consnt_KHA_2   = "\u";
//Krutidev.consnt_KHHA_1  = "\u";
//Krutidev.consnt_KHHA_2  = "\u";
Krutidev.consnt_GA_1    = "\u0058\u006B";
Krutidev.consnt_GA_2    = "\u0078";
//Krutidev.consnt_GHHA    = "\u";
Krutidev.consnt_GHA_1   = "\u003F\u006B";
Krutidev.consnt_GHA_2   = "\u00C4";
Krutidev.consnt_NGA     = "\u00B3";

Krutidev.consnt_CA_1    = "\u0050\u006B";
Krutidev.consnt_CA_2    = "\u0070";
Krutidev.consnt_CHA     = "\u004E";
Krutidev.consnt_JA_1    = "\u0054\u006B";
Krutidev.consnt_JA_2    = "\u0074";
Krutidev.consnt_ZA_1    = "\u0074\u002B";
//Krutidev.consnt_ZA_2    = "\u"; 
Krutidev.consnt_JHA_1   = "\u003E";
Krutidev.consnt_JHA_2   = "\u00D6\u006B";
Krutidev.consnt_JHA_3   = "\u00F7\u006B";
Krutidev.consnt_NYA_1   = "\u00A5";
Krutidev.consnt_NYA_2   = "\u00B4";

Krutidev.consnt_TTA     = "\u0056";
Krutidev.consnt_TTHA    = "\u0042";
Krutidev.consnt_DDA     = "\u004D";
Krutidev.consnt_DDDHA   = "\u004D\u002B";
Krutidev.consnt_DDHA    = "\u003C";
Krutidev.consnt_RHA     = "\u003C\u002B"; 
Krutidev.consnt_NNA     = "\u002E\u006B";

Krutidev.consnt_TA_1    = "\u0052\u006B";
Krutidev.consnt_TA_2    = "\u0072";
Krutidev.consnt_THA     = "\u0046\u006B";
Krutidev.consnt_DA      = "\u006E";
Krutidev.consnt_DHA_1   = "\u002F\u006B";
Krutidev.consnt_DHA_2   = "\u00CB\u006B";
Krutidev.consnt_DHA_3   = "\u00E8\u006B";
Krutidev.consnt_NA_1    = "\u0055\u006B";
Krutidev.consnt_NA_2    = "\u0075";

Krutidev.consnt_PA_1    = "\u0049\u006B";
Krutidev.consnt_PA_2    = "\u0069";
Krutidev.consnt_PHA_1   = "\u0051";
Krutidev.consnt_PHA_2   = "\u00B6\u006B";
//Krutidev.consnt_FA_1    = "\u";
//Krutidev.consnt_FA_2    = "\u"; 
Krutidev.consnt_BA_1    = "\u0043\u006B";
Krutidev.consnt_BA_2    = "\u0063";
Krutidev.consnt_BHA_1   = "\u0048\u006B";
Krutidev.consnt_BHA_2   = "\u0090";
Krutidev.consnt_BHA_3   = "\u00D2";
Krutidev.consnt_MA_1    = "\u0045\u006B";
Krutidev.consnt_MA_2    = "\u0065";

Krutidev.consnt_YA_1    = "\u003B";
Krutidev.consnt_YA_2    = "\u00B8\u006B";
Krutidev.consnt_RA      = "\u006A";
Krutidev.consnt_LA_1    = "\u0059\u006B";
Krutidev.consnt_LA_2    = "\u0079";
Krutidev.consnt_VA_1    = "\u004F\u006B";
Krutidev.consnt_VA_2    = "\u006F";
Krutidev.consnt_SHA_1   = "\u0027\u006B";
Krutidev.consnt_SHA_2   = "\u201C\u006B"; 
Krutidev.consnt_SHA_3   = "\u201D\u006B"; 
Krutidev.consnt_SSA_1   = "\u0022\u006B";
Krutidev.consnt_SSA_2   = "\u2018\u006B";
Krutidev.consnt_SSA_3   = "\u2019\u006B";
Krutidev.consnt_SA_1    = "\u004C\u006B";
Krutidev.consnt_SA_2    = "\u006C";
Krutidev.consnt_HA      = "\u0067";
Krutidev.consnt_LLA     = "\u0047";

//Vowel signs
Krutidev.vowelsn_AA     = "\u006B";
Krutidev.vowelsn_I      = "\u0066";
Krutidev.vowelsn_II     = "\u0068";
Krutidev.vowelsn_U      = "\u0071";
Krutidev.vowelsn_UU     = "\u0077";
Krutidev.vowelsn_R      = "\u0060";
Krutidev.vowelsn_CDR_E  = "\u0057"; 
Krutidev.vowelsn_EE_1   = "\u0073";
Krutidev.vowelsn_EE_2   = "\u00A2";
Krutidev.vowelsn_AI     = "\u0053";
Krutidev.vowelsn_CDR_O_1= "\u201A";
Krutidev.vowelsn_CDR_O_2= "\u006B\u0057";
Krutidev.vowelsn_OO_1   = "\u00A8";
Krutidev.vowelsn_OO_2   = "\u00AE";
Krutidev.vowelsn_AU     = "\u00A9";

//Matra + modifier
Krutidev.vowelsn_IM     = "\u00C7";
Krutidev.vowelsn_IIM    = "\u00C8";

// Half forms
Krutidev.halffm_KA      = "\u0044";
Krutidev.halffm_KSH     = "\u007B";
Krutidev.halffm_KHA     = "\u005B";
Krutidev.halffm_GA      = "\u0058";
Krutidev.halffm_GHA     = "\u003F";
Krutidev.halffm_CA      = "\u0050";
Krutidev.halffm_JA      = "\u0054";
//Krutidev.halffm_ZA      = "\u";
Krutidev.halffm_JHA_1   = "\u00D6";
Krutidev.halffm_JHA_2   = "\u00F7";
//Krutidev.halffm_NYA     = "\u";
Krutidev.halffm_NN      = "\u2122"; 
Krutidev.halffm_NNA     = "\u002E"; 
Krutidev.halffm_TA      = "\u0052";
Krutidev.halffm_TT_1    = "\u00D9";
Krutidev.halffm_TT_2    = "\u0178";
Krutidev.halffm_THA     = "\u0046";
Krutidev.halffm_DA      = "\u006E\u007E";
Krutidev.halffm_DHA_1   = "\u002F";
Krutidev.halffm_DHA_2   = "\u00CB";
Krutidev.halffm_DHA_3   = "\u00E8";
Krutidev.halffm_NA      = "\u0055";
Krutidev.halffm_PA      = "\u0049";
Krutidev.halffm_PHA     = "\u00B6";
Krutidev.halffm_BA      = "\u0043";
Krutidev.halffm_BHA     = "\u0048";
Krutidev.halffm_MA      = "\u0045";
Krutidev.halffm_YA      = "\u00B8";
Krutidev.halffm_RA      = "\u005A"; 
Krutidev.halffm_LA      = "\u0059";
Krutidev.halffm_VA      = "\u004F";
Krutidev.halffm_SHA_1   = "\u0027";
Krutidev.halffm_SHA_2   = "\u201C";
Krutidev.halffm_SHA_3   = "\u201D";
//Krutidev.halffm_SHR     = "\u";
Krutidev.halffm_SSA_1   = "\u0022";
Krutidev.halffm_SSA_2   = "\u2018";
Krutidev.halffm_SSA_3   = "\u2019";
Krutidev.halffm_SA      = "\u004C";
Krutidev.halffm_HA      = "\u00BA";
Krutidev.halffm_RRA     = "\u00DA";//Check

//Half forms of RA
Krutidev.halffm_RA_ANU  = "\u00B1";
Krutidev.halffm_RI      = "\u00C6";
Krutidev.halffm_RIM     = "\u00C9";

//Conjuncts
Krutidev.conjct_KK      = "\u00F4"; 
Krutidev.conjct_KT      = "\u00E4"; 
Krutidev.conjct_KSH     = "\u007B\u006B";
Krutidev.conjct_KSHEE   = "\u007B\u00A8";
Krutidev.conjct_KR      = "\u00D8";
Krutidev.conjct_KHR     = "\u00A3";
Krutidev.conjct_JNY     = "\u004B";
Krutidev.conjct_TTTT_1  = "\u00CD";
Krutidev.conjct_TTTT_2  = "\u00EA";
Krutidev.conjct_TTTTH_1 = "\u00CE";
Krutidev.conjct_TTTTH_2 = "\u00EB";
Krutidev.conjct_TTHTTH  = "\u00F0";
Krutidev.conjct_TT_1    = "\u00D9\u006B";
Krutidev.conjct_TT_2    = "\u0178\u006B";
Krutidev.conjct_TR_1    = "\u003D";
Krutidev.conjct_TR_2    = "\u00AB";
Krutidev.conjct_DD_1    = "\u00CC";
Krutidev.conjct_DD_2    = "\u00ED";
Krutidev.conjct_DR      = "\u00E6";
Krutidev.conjct_DBH_1   = "\u00F6";
Krutidev.conjct_DBH_2   = "\u02DC";
Krutidev.conjct_DDDD_1  = "\u00CF";
Krutidev.conjct_DDDD_2  = "\u00EC";
Krutidev.conjct_DD_DDH_1= "\u00D4";
Krutidev.conjct_DD_DDH_2= "\u00EF";
Krutidev.conjct_D_DH    = "\u0029";
Krutidev.conjct_DM      = "\u00F9";
Krutidev.conjct_DY      = "\u007C";
Krutidev.conjct_DV      = "\u007D";
Krutidev.conjct_NN_1    = "\u00E9";
Krutidev.conjct_NN_2    = "\u2122\u006B";
Krutidev.conjct_PR_1    = "\u00C1";
Krutidev.conjct_PR_2    = "\u00E7";
Krutidev.conjct_PHR     = "\u00DD";
Krutidev.conjct_SHR     = "\u004A";
Krutidev.conjct_HN      = "\u00E0";
Krutidev.conjct_HM      = "\u00E3";
//Krutidev.conjct_HR      = "\u";
Krutidev.conjct_HY      = "\u00E1";

//rakar
Krutidev.vattu_RA_1     = "\u007A";
Krutidev.vattu_RA_2     = "\u00AA";

// Combos
Krutidev.combo_KR_1     = "\u00D1";
Krutidev.combo_KR_2     = "\u2014";
//Krutidev.combo_JI       = "\u"; 
//Krutidev.combo_PHR      = "\u";
Krutidev.combo_DR       = "\u2013";
Krutidev.combo_RU       = "\u0023";
Krutidev.combo_RUU      = "\u003A";
//Krutidev.combo_LR       = "\u"; 
Krutidev.combo_NNEE     = "\u002E\u0073\u006B"; 
//Krutidev.combo_SEE      = "\u"; 
Krutidev.combo_HR       = "\u00E2";
Krutidev.combo_THEE     = "\u0046\u00A8"; 
Krutidev.combo_DHEE     = "\u002F\u00A8"; 
Krutidev.combo_SHAI     = "\u0027\u00A9"; 

Krutidev.misc_DANDA     = "\u0041";
Krutidev.misc_nukta     = "\u002B";

//Matches ASCII
Krutidev.EXCLAMATION    = "\u0021";
//Digits Arabic
Krutidev.digit_ZERO     = "\u0030";
Krutidev.digit_ONE      = "\u0031";
Krutidev.digit_TWO      = "\u0032";
Krutidev.digit_THREE    = "\u0033";
Krutidev.digit_FOUR     = "\u0034";
Krutidev.digit_FIVE     = "\u0035";
Krutidev.digit_SIX      = "\u0036";
Krutidev.digit_SEVEN    = "\u0037";
Krutidev.digit_EIGHT    = "\u0038";
Krutidev.digit_NINE     = "\u0039";

//Devanagari Digits
//Krutidev.digit_ZERO_DEV     = "\u";
Krutidev.digit_ONE_DEV      = "\u0192";
Krutidev.digit_TWO_DEV      = "\u201E";
Krutidev.digit_THREE_DEV    = "\u2026";
Krutidev.digit_FOUR_DEV     = "\u2020";
Krutidev.digit_FIVE_DEV     = "\u2021";
Krutidev.digit_SIX_DEV      = "\u02C6";
Krutidev.digit_SEVEN_DEV    = "\u2030";
//Krutidev.digit_EIGHT_DEV    = "\u";
//Krutidev.digit_NINE_DEV     = "\u";

//Does not match ASCII
Krutidev.PLUS           = "\u0024";
Krutidev.COLON          = "\u0025";
Krutidev.HYPHEN         = "\u0026";
Krutidev.SEMICOLON      = "\u0028";
Krutidev.SLASH          = "\u0040";
Krutidev.QUESTION       = "\u005C";
Krutidev.COMMA          = "\u005D";
Krutidev.DIVIDE	        = "\u00BB";
Krutidev.PARENLEFT      = "\u00BC";
Krutidev.PARENRIGHT     = "\u00BD";
Krutidev.EQUALS         = "\u00BE";
Krutidev.CURLYLEFT_1    = "\u00BF";
Krutidev.CURLYLEFT_2    = "\u00F8";
Krutidev.CURLYRIGHT     = "\u00C0";
Krutidev.LQTSINGLE      = "\u005E"; 
Krutidev.RQTSINGLE      = "\u002A";
Krutidev.LQTDOUBLE      = "\u00DF";
Krutidev.RQTDOUBLE      = "\u00DE";

/*
Krutidev.misc_QTDOUBLE  = "\u"; 
Krutidev.misc_QTSINGLE  = "\u";  
Krutidev.PERIOD_1       = "\u";
Krutidev.PERCENT        = "\u"; 
Krutidev.LESSTHAN_1     = "\u"; 
Krutidev.TILDE          = "\u";  
Krutidev.GREATERTHAN_1  = "\u"; 
Krutidev.SQBKTLEFT      = "\u"; 
Krutidev.SQBKTRIGHT     = "\u"; 
Krutidev.BACKQUOTE      = "\u";
Krutidev.PERIOD_2       = "\u";
Krutidev.LESSTHAN_2     = "\u";
Krutidev.GREATERTHAN_2  = "\u";
Krutidev.ATSIGN         = "\u";
Krutidev.PIPE           = "\u";
Krutidev.BACKSLASH      = "\u";
Krutidev.SQUAREROOT     = "\u";
Krutidev.CIRCUMFLEX     = "\u";
*/
//Krutidev.misc_UNKNOWN_1 = "\u00C2";

Krutidev.toPadma = new Object();

Krutidev.toPadma[Krutidev.avagraha]   = Padma.avagraha;
Krutidev.toPadma[Krutidev.anusvara]   = Padma.anusvara;
Krutidev.toPadma[Krutidev.candrabindu]= Padma.candrabindu;
//Krutidev.toPadma[Krutidev.visarga]    = Padma.visarga;
Krutidev.toPadma[Krutidev.virama]     = Padma.syllbreak;

Krutidev.toPadma[Krutidev.vowel_A]    = Padma.vowel_A;
Krutidev.toPadma[Krutidev.vowel_AA]   = Padma.vowel_AA;
Krutidev.toPadma[Krutidev.vowel_I]    = Padma.vowel_I;
Krutidev.toPadma[Krutidev.vowel_II_1] = Padma.vowel_II;
Krutidev.toPadma[Krutidev.vowel_II_2] = Padma.vowel_II;
Krutidev.toPadma[Krutidev.vowel_U]    = Padma.vowel_U;
Krutidev.toPadma[Krutidev.vowel_UU]   = Padma.vowel_UU;
Krutidev.toPadma[Krutidev.vowel_R]    = Padma.vowel_R;
//Krutidev.toPadma[Krutidev.vowel_CDR_E] = Padma.vowel_CDR_E;
Krutidev.toPadma[Krutidev.vowel_EE]   = Padma.vowel_EE;
Krutidev.toPadma[Krutidev.vowel_AI]   = Padma.vowel_AI;
Krutidev.toPadma[Krutidev.vowel_CDR_O] = Padma.vowel_CDR_O;
Krutidev.toPadma[Krutidev.vowel_OO_1] = Padma.vowel_OO;
Krutidev.toPadma[Krutidev.vowel_OO_2] = Padma.vowel_OO;
Krutidev.toPadma[Krutidev.vowel_AU_1] = Padma.vowel_AU;
Krutidev.toPadma[Krutidev.vowel_AU_2] = Padma.vowel_AU;

Krutidev.toPadma[Krutidev.consnt_KA_1]  = Padma.consnt_KA;
Krutidev.toPadma[Krutidev.consnt_KA_2]  = Padma.consnt_KA;
Krutidev.toPadma[Krutidev.consnt_KHA_1] = Padma.consnt_KHA;
//Krutidev.toPadma[Krutidev.consnt_KHA_2] = Padma.consnt_KHA;
//Krutidev.toPadma[Krutidev.consnt_KHHA_1] = Padma.consnt_KHHA;
//Krutidev.toPadma[Krutidev.consnt_KHHA_2] = Padma.consnt_KHHA;
Krutidev.toPadma[Krutidev.consnt_GA_1]  = Padma.consnt_GA;
Krutidev.toPadma[Krutidev.consnt_GA_2]  = Padma.consnt_GA;
//Krutidev.toPadma[Krutidev.consnt_GHHA] = Padma.consnt_GHHA;
Krutidev.toPadma[Krutidev.consnt_GHA_1]= Padma.consnt_GHA;
Krutidev.toPadma[Krutidev.consnt_GHA_2]= Padma.consnt_GHA;
Krutidev.toPadma[Krutidev.consnt_NGA] = Padma.consnt_NGA;

Krutidev.toPadma[Krutidev.consnt_CA_1]= Padma.consnt_CA;
Krutidev.toPadma[Krutidev.consnt_CA_2]= Padma.consnt_CA;
Krutidev.toPadma[Krutidev.consnt_CHA] = Padma.consnt_CHA;
Krutidev.toPadma[Krutidev.consnt_JA_1]  = Padma.consnt_JA;
Krutidev.toPadma[Krutidev.consnt_JA_2]  = Padma.consnt_JA;
Krutidev.toPadma[Krutidev.consnt_ZA_1]  = Padma.consnt_ZA;
//Krutidev.toPadma[Krutidev.consnt_ZA_2]  = Padma.consnt_ZA;
Krutidev.toPadma[Krutidev.consnt_JHA_1] = Padma.consnt_JHA;
Krutidev.toPadma[Krutidev.consnt_JHA_2] = Padma.consnt_JHA;
Krutidev.toPadma[Krutidev.consnt_JHA_3] = Padma.consnt_JHA;
Krutidev.toPadma[Krutidev.consnt_NYA_1] = Padma.consnt_NYA;
Krutidev.toPadma[Krutidev.consnt_NYA_2] = Padma.consnt_NYA;

Krutidev.toPadma[Krutidev.consnt_TTA] = Padma.consnt_TTA;
Krutidev.toPadma[Krutidev.consnt_TTHA] = Padma.consnt_TTHA;
Krutidev.toPadma[Krutidev.consnt_DDA] = Padma.consnt_DDA;
Krutidev.toPadma[Krutidev.consnt_DDDHA] = Padma.consnt_DDDHA;
Krutidev.toPadma[Krutidev.consnt_DDHA] = Padma.consnt_DDHA;
Krutidev.toPadma[Krutidev.consnt_RHA] = Padma.consnt_RHA;
Krutidev.toPadma[Krutidev.consnt_NNA] = Padma.consnt_NNA;

Krutidev.toPadma[Krutidev.consnt_TA_1]= Padma.consnt_TA;
Krutidev.toPadma[Krutidev.consnt_TA_2]= Padma.consnt_TA;
Krutidev.toPadma[Krutidev.consnt_THA] = Padma.consnt_THA;
Krutidev.toPadma[Krutidev.consnt_DA]  = Padma.consnt_DA;
Krutidev.toPadma[Krutidev.consnt_DHA_1] = Padma.consnt_DHA;
Krutidev.toPadma[Krutidev.consnt_DHA_2] = Padma.consnt_DHA;
Krutidev.toPadma[Krutidev.consnt_NA_1]= Padma.consnt_NA;
Krutidev.toPadma[Krutidev.consnt_NA_2]= Padma.consnt_NA;

Krutidev.toPadma[Krutidev.consnt_PA_1]= Padma.consnt_PA;
Krutidev.toPadma[Krutidev.consnt_PA_2]= Padma.consnt_PA;
Krutidev.toPadma[Krutidev.consnt_PHA_1] = Padma.consnt_PHA;
Krutidev.toPadma[Krutidev.consnt_PHA_2] = Padma.consnt_PHA;
//Krutidev.toPadma[Krutidev.consnt_FA_1] = Padma.consnt_FA;
//Krutidev.toPadma[Krutidev.consnt_FA_2] = Padma.consnt_FA;
Krutidev.toPadma[Krutidev.consnt_BA_1]= Padma.consnt_BA;
Krutidev.toPadma[Krutidev.consnt_BA_2]= Padma.consnt_BA;
Krutidev.toPadma[Krutidev.consnt_BHA_1] = Padma.consnt_BHA;
Krutidev.toPadma[Krutidev.consnt_BHA_2] = Padma.consnt_BHA;
Krutidev.toPadma[Krutidev.consnt_BHA_3] = Padma.consnt_BHA;
Krutidev.toPadma[Krutidev.consnt_MA_1]  = Padma.consnt_MA;
Krutidev.toPadma[Krutidev.consnt_MA_2]  = Padma.consnt_MA;

Krutidev.toPadma[Krutidev.consnt_YA_1]  = Padma.consnt_YA;
Krutidev.toPadma[Krutidev.consnt_YA_2]  = Padma.consnt_YA;
Krutidev.toPadma[Krutidev.consnt_RA]    = Padma.consnt_RA;
Krutidev.toPadma[Krutidev.consnt_LA_1]  = Padma.consnt_LA;
Krutidev.toPadma[Krutidev.consnt_LA_2]  = Padma.consnt_LA;
Krutidev.toPadma[Krutidev.consnt_VA_1]  = Padma.consnt_VA;
Krutidev.toPadma[Krutidev.consnt_VA_2]  = Padma.consnt_VA;
Krutidev.toPadma[Krutidev.consnt_SHA_1] = Padma.consnt_SHA;
Krutidev.toPadma[Krutidev.consnt_SHA_2] = Padma.consnt_SHA;
Krutidev.toPadma[Krutidev.consnt_SHA_3] = Padma.consnt_SHA;
Krutidev.toPadma[Krutidev.consnt_SSA_1] = Padma.consnt_SSA;
Krutidev.toPadma[Krutidev.consnt_SSA_2] = Padma.consnt_SSA;
Krutidev.toPadma[Krutidev.consnt_SSA_3] = Padma.consnt_SSA;
Krutidev.toPadma[Krutidev.consnt_SA_1]= Padma.consnt_SA;
Krutidev.toPadma[Krutidev.consnt_SA_2]= Padma.consnt_SA;
Krutidev.toPadma[Krutidev.consnt_HA]  = Padma.consnt_HA;
Krutidev.toPadma[Krutidev.consnt_LLA] = Padma.consnt_LLA;

//Gunintamulu
Krutidev.toPadma[Krutidev.vowelsn_AA] = Padma.vowelsn_AA;
Krutidev.toPadma[Krutidev.vowelsn_I]  = Padma.vowelsn_I;
Krutidev.toPadma[Krutidev.vowelsn_II] = Padma.vowelsn_II;
Krutidev.toPadma[Krutidev.vowelsn_U]  = Padma.vowelsn_U;
Krutidev.toPadma[Krutidev.vowelsn_UU] = Padma.vowelsn_UU;
Krutidev.toPadma[Krutidev.vowelsn_R]  = Padma.vowelsn_R;
Krutidev.toPadma[Krutidev.vowelsn_CDR_E] = Padma.vowelsn_CDR_E;
Krutidev.toPadma[Krutidev.vowelsn_EE_1] = Padma.vowelsn_EE;
Krutidev.toPadma[Krutidev.vowelsn_EE_2] = Padma.vowelsn_EE;
Krutidev.toPadma[Krutidev.vowelsn_AI] = Padma.vowelsn_AI;
Krutidev.toPadma[Krutidev.vowelsn_CDR_O_1] = Padma.vowelsn_CDR_O;
Krutidev.toPadma[Krutidev.vowelsn_CDR_O_2] = Padma.vowelsn_CDR_O;
Krutidev.toPadma[Krutidev.vowelsn_OO_1] = Padma.vowelsn_OO;
Krutidev.toPadma[Krutidev.vowelsn_OO_2] = Padma.vowelsn_OO;
Krutidev.toPadma[Krutidev.vowelsn_AU] = Padma.vowelsn_AU;

//Matra + modifier
Krutidev.toPadma[Krutidev.vowelsn_IM]     = Padma.vowelsn_I  + Padma.anusvara;
Krutidev.toPadma[Krutidev.vowelsn_IIM]    = Padma.vowelsn_II + Padma.anusvara;

//Halffm
Krutidev.toPadma[Krutidev.halffm_KA]    = Padma.halffm_KA;
Krutidev.toPadma[Krutidev.halffm_KSH]   = Padma.halffm_KA + Padma.halffm_SSA;
Krutidev.toPadma[Krutidev.halffm_KHA]   = Padma.halffm_KHA;
Krutidev.toPadma[Krutidev.halffm_GA]    = Padma.halffm_GA;
Krutidev.toPadma[Krutidev.halffm_GHA]   = Padma.halffm_GHA;
Krutidev.toPadma[Krutidev.halffm_CA]    = Padma.halffm_CA;
Krutidev.toPadma[Krutidev.halffm_JA]    = Padma.halffm_JA;
//Krutidev.toPadma[Krutidev.halffm_ZA]    = Padma.halffm_ZA;
Krutidev.toPadma[Krutidev.halffm_JHA_1] = Padma.halffm_JHA;
Krutidev.toPadma[Krutidev.halffm_JHA_2] = Padma.halffm_JHA;
//Krutidev.toPadma[Krutidev.halffm_NYA]   = Padma.halffm_NYA;
Krutidev.toPadma[Krutidev.halffm_NNA]   = Padma.halffm_NNA;
Krutidev.toPadma[Krutidev.halffm_TA]    = Padma.halffm_TA;
Krutidev.toPadma[Krutidev.halffm_TT_1]  = Padma.halffm_TA + Padma.halffm_TA;
Krutidev.toPadma[Krutidev.halffm_TT_2]  = Padma.halffm_TA + Padma.halffm_TA;
Krutidev.toPadma[Krutidev.halffm_THA]   = Padma.halffm_THA;
Krutidev.toPadma[Krutidev.halffm_DA]    = Padma.halffm_DA;
Krutidev.toPadma[Krutidev.halffm_DHA_1] = Padma.halffm_DHA;
Krutidev.toPadma[Krutidev.halffm_DHA_2] = Padma.halffm_DHA;
Krutidev.toPadma[Krutidev.halffm_DHA_3] = Padma.halffm_DHA;
Krutidev.toPadma[Krutidev.halffm_NA]    = Padma.halffm_NA;
Krutidev.toPadma[Krutidev.halffm_PA]    = Padma.halffm_PA;
Krutidev.toPadma[Krutidev.halffm_PHA]   = Padma.halffm_PHA;
Krutidev.toPadma[Krutidev.halffm_BA]    = Padma.halffm_BA;
Krutidev.toPadma[Krutidev.halffm_BHA]   = Padma.halffm_BHA;
Krutidev.toPadma[Krutidev.halffm_MA]    = Padma.halffm_MA;
Krutidev.toPadma[Krutidev.halffm_YA]    = Padma.halffm_YA;
Krutidev.toPadma[Krutidev.halffm_RA]    = Padma.halffm_RA;
Krutidev.toPadma[Krutidev.halffm_LA]    = Padma.halffm_LA;
Krutidev.toPadma[Krutidev.halffm_VA]    = Padma.halffm_VA;
Krutidev.toPadma[Krutidev.halffm_SHA_1] = Padma.halffm_SHA;
Krutidev.toPadma[Krutidev.halffm_SHA_2] = Padma.halffm_SHA;
Krutidev.toPadma[Krutidev.halffm_SHA_3] = Padma.halffm_SHA;
//Krutidev.toPadma[Krutidev.halffm_SHR]   = Padma.halffm_SHA + Padma.halffm_RA;
Krutidev.toPadma[Krutidev.halffm_SSA_1] = Padma.halffm_SSA;
Krutidev.toPadma[Krutidev.halffm_SSA_2] = Padma.halffm_SSA;
Krutidev.toPadma[Krutidev.halffm_SSA_3] = Padma.halffm_SSA;
Krutidev.toPadma[Krutidev.halffm_SA]    = Padma.halffm_SA;
Krutidev.toPadma[Krutidev.halffm_HA]    = Padma.halffm_HA;
Krutidev.toPadma[Krutidev.halffm_RRA]   = Padma.halffm_RRA;

//Half forms of RA
Krutidev.toPadma[Krutidev.halffm_RA_ANU]= Padma.halffm_RA + Padma.anusvara;
Krutidev.toPadma[Krutidev.halffm_RI]    = Padma.halffm_RA + Padma.vowelsn_I;
Krutidev.toPadma[Krutidev.halffm_RIM]   = Padma.halffm_RA + Padma.vowelsn_I + Padma.anusvara;

//Conjuncts
Krutidev.toPadma[Krutidev.conjct_KK]     = Padma.consnt_KA + Padma.vattu_KA;
Krutidev.toPadma[Krutidev.conjct_KT]     = Padma.consnt_KA + Padma.vattu_TA;
Krutidev.toPadma[Krutidev.conjct_KSH]    = Padma.consnt_KA + Padma.vattu_SSA;
Krutidev.toPadma[Krutidev.conjct_KSHEE]  = Padma.consnt_KA + Padma.vattu_SSA + Padma.vowelsn_EE;
Krutidev.toPadma[Krutidev.conjct_KR]     = Padma.consnt_KA + Padma.vattu_RA;
Krutidev.toPadma[Krutidev.conjct_KHR]    = Padma.consnt_KHA + Padma.vattu_RA;
Krutidev.toPadma[Krutidev.conjct_JNY]    = Padma.consnt_JA + Padma.vattu_NYA;
Krutidev.toPadma[Krutidev.conjct_TTTT_1] = Padma.consnt_TTA + Padma.vattu_TTA;
Krutidev.toPadma[Krutidev.conjct_TTTT_2] = Padma.consnt_TTA + Padma.vattu_TTA;
Krutidev.toPadma[Krutidev.conjct_TTTTH_1]= Padma.consnt_TTA + Padma.vattu_TTHA;
Krutidev.toPadma[Krutidev.conjct_TTTTH_2]= Padma.consnt_TTA + Padma.vattu_TTHA;
Krutidev.toPadma[Krutidev.conjct_TTHTTH] = Padma.consnt_TTHA + Padma.vattu_TTHA;
Krutidev.toPadma[Krutidev.conjct_TT_1]   = Padma.consnt_TA + Padma.vattu_TA;
Krutidev.toPadma[Krutidev.conjct_TT_2]   = Padma.consnt_TA + Padma.vattu_TA;
Krutidev.toPadma[Krutidev.conjct_TR_1]   = Padma.consnt_TA + Padma.vattu_RA;
Krutidev.toPadma[Krutidev.conjct_TR_2]   = Padma.consnt_TA + Padma.vattu_RA;
Krutidev.toPadma[Krutidev.conjct_DD_1]   = Padma.consnt_DA + Padma.vattu_DA;
Krutidev.toPadma[Krutidev.conjct_DD_2]   = Padma.consnt_DA + Padma.vattu_DA;
Krutidev.toPadma[Krutidev.conjct_DR]     = Padma.consnt_DA + Padma.vattu_RA;
Krutidev.toPadma[Krutidev.conjct_DBH_1]  = Padma.consnt_DA + Padma.vattu_BHA;
Krutidev.toPadma[Krutidev.conjct_DBH_2]  = Padma.consnt_DA + Padma.vattu_BHA;
Krutidev.toPadma[Krutidev.conjct_DDDD_1] = Padma.consnt_DDA + Padma.vattu_DDA;
Krutidev.toPadma[Krutidev.conjct_DDDD_2] = Padma.consnt_DDA + Padma.vattu_DDA;
Krutidev.toPadma[Krutidev.conjct_DD_DDH_1] = Padma.consnt_DDA + Padma.vattu_DDHA;
Krutidev.toPadma[Krutidev.conjct_DD_DDH_2] = Padma.consnt_DDA + Padma.vattu_DDHA;
Krutidev.toPadma[Krutidev.conjct_D_DH]   = Padma.consnt_DA + Padma.vattu_DHA;
Krutidev.toPadma[Krutidev.conjct_DM]     = Padma.consnt_DA + Padma.vattu_MA;
Krutidev.toPadma[Krutidev.conjct_DY]     = Padma.consnt_DA + Padma.vattu_YA;
Krutidev.toPadma[Krutidev.conjct_DV]     = Padma.consnt_DA + Padma.vattu_VA;
Krutidev.toPadma[Krutidev.conjct_NN_1]   = Padma.consnt_NA + Padma.vattu_NA;
Krutidev.toPadma[Krutidev.conjct_NN_2]   = Padma.consnt_NA + Padma.vattu_NA;
Krutidev.toPadma[Krutidev.conjct_PR_1]   = Padma.consnt_PA + Padma.vattu_RA;
Krutidev.toPadma[Krutidev.conjct_PR_2]   = Padma.consnt_PA + Padma.vattu_RA;
Krutidev.toPadma[Krutidev.conjct_PHR]    = Padma.consnt_PHA + Padma.vattu_RA;
Krutidev.toPadma[Krutidev.conjct_SHR]    = Padma.consnt_SHA + Padma.vattu_RA;
Krutidev.toPadma[Krutidev.conjct_HN]     = Padma.consnt_HA + Padma.vattu_NA;
Krutidev.toPadma[Krutidev.conjct_HM]     = Padma.consnt_HA + Padma.vattu_MA;
//Krutidev.toPadma[Krutidev.conjct_HR]     = Padma.consnt_HA + Padma.vattu_RA;
Krutidev.toPadma[Krutidev.conjct_HY]     = Padma.consnt_HA + Padma.vattu_YA;

Krutidev.toPadma[Krutidev.vattu_RA_1]    = Padma.vattu_RA;
Krutidev.toPadma[Krutidev.vattu_RA_2]    = Padma.vattu_RA;

Krutidev.toPadma[Krutidev.combo_KR_1]      = Padma.consnt_KA + Padma.vowelsn_R;
Krutidev.toPadma[Krutidev.combo_KR_2]      = Padma.consnt_KA + Padma.vowelsn_R;
//Krutidev.toPadma[Krutidev.combo_JI]      = Padma.consnt_JA + Padma.vowelsn_I;
//Krutidev.toPadma[Krutidev.combo_PHR]     = Padma.consnt_PHA + Padma.vowelsn_R;
Krutidev.toPadma[Krutidev.combo_DR]      = Padma.consnt_DA + Padma.vowelsn_R;
Krutidev.toPadma[Krutidev.combo_RU]      = Padma.consnt_RA + Padma.vowelsn_U;
Krutidev.toPadma[Krutidev.combo_RUU]     = Padma.consnt_RA + Padma.vowelsn_UU;
//Krutidev.toPadma[Krutidev.combo_LR]      = Padma.consnt_LA + Padma.vowelsn_R;
Krutidev.toPadma[Krutidev.combo_NNEE]     = Padma.consnt_NNA + Padma.vowelsn_EE;
//Krutidev.toPadma[Krutidev.combo_SEE]     = Padma.consnt_SA + Padma.vowelsn_EE;
Krutidev.toPadma[Krutidev.combo_HR]      = Padma.consnt_HA + Padma.vowelsn_R;
Krutidev.toPadma[Krutidev.combo_THEE]    = Padma.consnt_THA + Padma.vowelsn_EE;
Krutidev.toPadma[Krutidev.combo_DHEE]    = Padma.consnt_DHA + Padma.vowelsn_EE;
Krutidev.toPadma[Krutidev.combo_SHAI]    = Padma.consnt_SHA + Padma.vowelsn_AI;

Krutidev.toPadma[Krutidev.misc_DANDA]    = Padma.danda;
Krutidev.toPadma[Krutidev.misc_nukta]    = Padma.nukta;

//Devanagari Digits
//Krutidev.toPadma[Krutidev.digit_ZERO_DEV]       = Padma.digit_ZERO;
Krutidev.toPadma[Krutidev.digit_ONE_DEV]        = Padma.digit_ONE;
Krutidev.toPadma[Krutidev.digit_TWO_DEV]        = Padma.digit_TWO;
Krutidev.toPadma[Krutidev.digit_THREE_DEV]      = Padma.digit_THREE;
Krutidev.toPadma[Krutidev.digit_FOUR_DEV]       = Padma.digit_FOUR;
Krutidev.toPadma[Krutidev.digit_FIVE_DEV]       = Padma.digit_FIVE;
Krutidev.toPadma[Krutidev.digit_SIX_DEV]        = Padma.digit_SIX;
Krutidev.toPadma[Krutidev.digit_SEVEN_DEV]      = Padma.digit_SEVEN;
//Krutidev.toPadma[Krutidev.digit_EIGHT_DEV]      = Padma.digit_EIGHT;
//Krutidev.toPadma[Krutidev.digit_NINE_DEV]       = Padma.digit_NINE;


//Does not match ASCII
Krutidev.toPadma[Krutidev.PLUS]          = "+";
Krutidev.toPadma[Krutidev.COLON]         = ":";
Krutidev.toPadma[Krutidev.HYPHEN]        = "-";
Krutidev.toPadma[Krutidev.SEMICOLON]     = ";";
Krutidev.toPadma[Krutidev.SLASH]         = "/";
Krutidev.toPadma[Krutidev.QUESTION]      = "?";
Krutidev.toPadma[Krutidev.COMMA]         = ",";
Krutidev.toPadma[Krutidev.DIVIDE]        = "\u00F7";
Krutidev.toPadma[Krutidev.PARENLEFT]     = "(";
Krutidev.toPadma[Krutidev.PARENRIGHT]    = ")";
Krutidev.toPadma[Krutidev.EQUALS]        = "=";
Krutidev.toPadma[Krutidev.CURLYLEFT_1]   = "{";
Krutidev.toPadma[Krutidev.CURLYLEFT_2]   = "{";
Krutidev.toPadma[Krutidev.CURLYRIGHT]    = "}";
Krutidev.toPadma[Krutidev.LQTSINGLE]     = "\u2018";
Krutidev.toPadma[Krutidev.RQTSINGLE]     = "\u2019";
Krutidev.toPadma[Krutidev.LQTDOUBLE]     = "\u201C";
Krutidev.toPadma[Krutidev.RQTDOUBLE]     = "\u201D";

/*
Krutidev.toPadma[Krutidev.PERIOD_1]      = ".";
Krutidev.toPadma[Krutidev.PERCENT]       = "%";
Krutidev.toPadma[Krutidev.LESSTHAN_1]    = "<";
Krutidev.toPadma[Krutidev.TILDE]         = "~";
Krutidev.toPadma[Krutidev.GREATERTHAN_1] = ">";
Krutidev.toPadma[Krutidev.SQBKTLEFT]     = "[";
Krutidev.toPadma[Krutidev.SQBKTRIGHT]    = "]";
Krutidev.toPadma[Krutidev.BACKQUOTE]     = "`";
Krutidev.toPadma[Krutidev.PERIOD_2]      = ".";
Krutidev.toPadma[Krutidev.LESSTHAN_2]    = "<";
Krutidev.toPadma[Krutidev.GREATERTHAN_2] = ">";
Krutidev.toPadma[Krutidev.ATSIGN]        = "@";
Krutidev.toPadma[Krutidev.PIPE]          = "|";
Krutidev.toPadma[Krutidev.BACKSLASH]     = "\\";
Krutidev.toPadma[Krutidev.SQUAREROOT]    = "\u221A";
Krutidev.toPadma[Krutidev.CIRCUMFLEX]    = "^";
*/

Krutidev.prefixList = new Object();
Krutidev.prefixList[Krutidev.vowelsn_I]  = true;
Krutidev.prefixList[Krutidev.vowelsn_IM] = true;
Krutidev.prefixList[Krutidev.halffm_RI]  = true;
Krutidev.prefixList[Krutidev.halffm_RIM] = true;

Krutidev.suffixList = new Object();
Krutidev.suffixList[Krutidev.halffm_RA]      = true;
Krutidev.suffixList[Krutidev.halffm_RA_ANU]  = true;

Krutidev.redundantList = new Object();
//Krutidev.redundantList[Krutidev.misc_UNKNOWN_1] = true;

Krutidev.overloadList = new Object();
Krutidev.overloadList[Krutidev.vowel_A]     = true;
Krutidev.overloadList[Krutidev.vowel_AA]    = true;
Krutidev.overloadList[Krutidev.vowel_I]     = true;
Krutidev.overloadList[Krutidev.vowel_EE]    = true;
//Krutidev.overloadList[Krutidev.consnt_KHA_2]= true;
Krutidev.overloadList[Krutidev.consnt_GA_1] = true;
Krutidev.overloadList[Krutidev.consnt_GA_2] = true;
Krutidev.overloadList[Krutidev.consnt_JA_1] = true;
Krutidev.overloadList[Krutidev.consnt_JA_2] = true;
Krutidev.overloadList[Krutidev.consnt_DA]   = true;
Krutidev.overloadList[Krutidev.consnt_DDA]  = true;
Krutidev.overloadList[Krutidev.consnt_DDHA] = true;
Krutidev.overloadList[Krutidev.consnt_PHA_1]= true;
Krutidev.overloadList[Krutidev.consnt_PHA_2]= true;
Krutidev.overloadList[Krutidev.vowelsn_AA]  = true;
Krutidev.overloadList[Krutidev.halffm_KA]   = true;
Krutidev.overloadList[Krutidev.halffm_KSH]  = true;
Krutidev.overloadList[Krutidev.halffm_KHA]  = true;
Krutidev.overloadList[Krutidev.halffm_GA]   = true;
Krutidev.overloadList[Krutidev.halffm_GHA]  = true;
Krutidev.overloadList[Krutidev.halffm_CA]   = true;
Krutidev.overloadList[Krutidev.halffm_JA]   = true;
//Krutidev.overloadList[Krutidev.halffm_ZA]   = true;
Krutidev.overloadList[Krutidev.halffm_JHA_1]= true;
Krutidev.overloadList[Krutidev.halffm_JHA_2]= true;
//Krutidev.overloadList[Krutidev.halffm_NYA]  = true;
Krutidev.overloadList[Krutidev.halffm_NN]   = true;
Krutidev.overloadList[Krutidev.halffm_NNA]  = true;
Krutidev.overloadList[Krutidev.halffm_TA]   = true;
Krutidev.overloadList[Krutidev.halffm_TT_1] = true;
Krutidev.overloadList[Krutidev.halffm_TT_2] = true;
Krutidev.overloadList[Krutidev.halffm_THA]  = true;
Krutidev.overloadList[Krutidev.halffm_DHA_1]= true;
Krutidev.overloadList[Krutidev.halffm_DHA_2]= true;
Krutidev.overloadList[Krutidev.halffm_DHA_3]= true;
Krutidev.overloadList[Krutidev.halffm_NA]   = true;
Krutidev.overloadList[Krutidev.halffm_PA]   = true;
Krutidev.overloadList[Krutidev.halffm_PHA]  = true;
Krutidev.overloadList[Krutidev.halffm_BA]   = true;
Krutidev.overloadList[Krutidev.halffm_BHA]  = true;
Krutidev.overloadList[Krutidev.halffm_MA]   = true;
Krutidev.overloadList[Krutidev.halffm_YA]   = true;
Krutidev.overloadList[Krutidev.halffm_LA]   = true;
Krutidev.overloadList[Krutidev.halffm_VA]   = true;
Krutidev.overloadList[Krutidev.halffm_SHA_1]= true;
Krutidev.overloadList[Krutidev.halffm_SHA_2]= true;
Krutidev.overloadList[Krutidev.halffm_SHA_3]= true;
//Krutidev.overloadList[Krutidev.halffm_SHR]  = true;
Krutidev.overloadList[Krutidev.halffm_SSA_1]= true;
Krutidev.overloadList[Krutidev.halffm_SSA_2]= true;
Krutidev.overloadList[Krutidev.halffm_SSA_3]= true;
Krutidev.overloadList[Krutidev.halffm_SA]   = true;
Krutidev.overloadList["\u002E\u0073"]       = true;
