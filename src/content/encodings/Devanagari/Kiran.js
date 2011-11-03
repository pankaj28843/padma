//$Id: Kiran.js,v 1.3 2011/11/03 09:56:48 harshita Exp $

//Copyright 2008-2009 Radhesh <guptaradhesh@gmail.com>
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

//Kiran fonts -- Kiran,Amruta and Aarti
function Kiran()
{
}

//The interface every dynamic font encoding should implement
Kiran.maxLookupLen = 3;
Kiran.fontFace     = "Kiran";
Kiran.displayName  = "Kiran";
Kiran.script       = Padma.script_DEVANAGARI;
Kiran.hasSuffixes  = true;

Kiran.lookup = function (str) 
{
    return Kiran.toPadma[str];
}

Kiran.isPrefixSymbol = function (str)
{
    return Kiran.prefixList[str] != null;
}

Kiran.isSuffixSymbol = function (str)
{
    return Kiran.suffixList[str] != null;
}

Kiran.isOverloaded = function (str)
{
    return Kiran.overloadList[str] != null;
}

Kiran.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if ((sign1 == Padma.vowelsn_EE && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_EE))
        return Padma.vowelsn_OO;
    if ((sign1 == Padma.vowelsn_AI && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_AI))
        return Padma.vowelsn_AU;
    return sign1 + sign2;    
}

Kiran.isRedundant = function (str)
{
    return Kiran.redundantList[str] != null;
}

//TODO: 00DE,00E7,00ED,00EE,00EF
//Doubts: 0045,005D,00CB,00E6

//Vowel modifiers
Kiran.avagraha	     = "\u0023";
Kiran.anusvara       = "\u004D";
Kiran.candrabindu    = "\u005E\u004D";
Kiran.visarga	     = "\u003A";
Kiran.virama         = "\u005C";

//Vowels
Kiran.vowel_A        = "\u0041";
Kiran.vowel_AA       = "\u0041\u0061";
Kiran.vowel_I        = "\u005B";
Kiran.vowel_II       = "\u005B\u002D";
Kiran.vowel_U        = "\u007B";
Kiran.vowel_UU       = "\u007B\u005D";
Kiran.vowel_R        = "\u0050";
Kiran.vowel_CDR_E    = "\u0065\u005E";
Kiran.vowel_EE       = "\u0065";
Kiran.vowel_AI       = "\u0065\u006F";
Kiran.vowel_CDR_O    = "\u0041\u0061\u005E";
Kiran.vowel_OO       = "\u0041\u0061\u006F";
Kiran.vowel_AU       = "\u0041\u0061\u004F";

//Consonants
Kiran.consnt_KA      = "\u006B";
Kiran.consnt_KHA     = "\u004B\u0061";
Kiran.consnt_KHHA    = "\u004B\u0061\u00DC";
Kiran.consnt_GA      = "\u0067\u0061";
Kiran.consnt_GHHA    = "\u0067\u0061\u00DC";
Kiran.consnt_GHA     = "\u0047\u0061";
Kiran.consnt_NGA     = "\u00C8";

Kiran.consnt_CA      = "\u0063\u0061";
Kiran.consnt_CHA     = "\u0043";
Kiran.consnt_JA      = "\u006A\u0061";
Kiran.consnt_ZA_1    = "\u006A\u00DC\u0061";
Kiran.consnt_ZA_2    = "\u006A\u0061\u00DC";
Kiran.consnt_JHA     = "\u004A\u0061";
Kiran.consnt_NYA     = "\u00C9\u0061";

Kiran.consnt_TTA     = "\u0054";
Kiran.consnt_TTHA    = "\u007A";
Kiran.consnt_DDA     = "\u0044";
Kiran.consnt_DDDHA   = "\u0044\u00DC";
Kiran.consnt_DDHA    = "\u005A";
Kiran.consnt_RHA     = "\u005A\u00DC";
Kiran.consnt_NNA     = "\u004E\u0061";

Kiran.consnt_TA      = "\u0074\u0061";
Kiran.consnt_THA     = "\u0071\u0061";
Kiran.consnt_DA      = "\u0064";
Kiran.consnt_DHA     = "\u0051\u0061";
Kiran.consnt_NA      = "\u006E\u0061";

Kiran.consnt_PA      = "\u0070\u0061";
Kiran.consnt_PHA     = "\u0066";
Kiran.consnt_FA      = "\u0066\u00DC";
Kiran.consnt_BA      = "\u0062\u0061";
Kiran.consnt_BHA     = "\u0042\u0061";
Kiran.consnt_MA      = "\u006D\u0061";

Kiran.consnt_YA_1    = "\u0079\u0061";
Kiran.consnt_YA_2    = "\u00CB";
Kiran.consnt_RA      = "\u0072";
Kiran.consnt_LA_1    = "\u006C\u0061";
Kiran.consnt_LA_2    = "\u00CA";
Kiran.consnt_VA      = "\u0076\u0061";
Kiran.consnt_SHA_1   = "\u0053\u0061";
Kiran.consnt_SHA_2   = "\u00CC\u0061";
Kiran.consnt_SHA_3   = "\u0045\u0061";
Kiran.consnt_SSA     = "\u0059\u0061";
Kiran.consnt_SA      = "\u0073\u0061";
Kiran.consnt_HA      = "\u0068";
Kiran.consnt_LLA     = "\u004C";

//Vowel signs
Kiran.vowelsn_AA     = "\u0061";
Kiran.vowelsn_I      = "\u0069";
Kiran.vowelsn_II     = "\u0049";
Kiran.vowelsn_U_1    = "\u0075";
Kiran.vowelsn_U_2    = "\u005D";
Kiran.vowelsn_UU_1   = "\u0055";
Kiran.vowelsn_UU_2   = "\u007D";
Kiran.vowelsn_R      = "\u0052";
Kiran.vowelsn_CDR_E  = "\u005E";
Kiran.vowelsn_EE     = "\u006F";
Kiran.vowelsn_AI     = "\u004F";
Kiran.vowelsn_CDR_O  = "\u0061\u005E";

// Half forms
Kiran.halffm_KA      = "\u0040";
Kiran.halffm_KSH     = "\u0058";
Kiran.halffm_KHA     = "\u004B";
Kiran.halffm_GA      = "\u0067";
Kiran.halffm_GHA     = "\u0047";

Kiran.halffm_CA      = "\u0063";
Kiran.halffm_JA      = "\u006A";
Kiran.halffm_ZA      = "\u006A\u00DC";
Kiran.halffm_JHA     = "\u004A";
Kiran.halffm_NYA     = "\u00C9";
Kiran.halffm_NNA     = "\u004E";

Kiran.halffm_TA      = "\u0074";
Kiran.halffm_TT      = "\u003C";
Kiran.halffm_THA     = "\u0071";
Kiran.halffm_DHA     = "\u0051";
Kiran.halffm_NA      = "\u006E";
Kiran.halffm_PA      = "\u0070";
Kiran.halffm_PHA     = "\u0046";

Kiran.halffm_BA      = "\u0062";
Kiran.halffm_BHA     = "\u0042";
Kiran.halffm_MA      = "\u006D";
Kiran.halffm_YA      = "\u0079";
Kiran.halffm_RA      = "\u002D"; 
Kiran.halffm_RRA     = "\u0025";
Kiran.halffm_LA      = "\u006C";
Kiran.halffm_VA      = "\u0076";

Kiran.halffm_SHA_1   = "\u0053";
Kiran.halffm_SHA_2   = "\u00CC";
Kiran.halffm_SHA_3   = "\u0045";
Kiran.halffm_SSA     = "\u0059";
Kiran.halffm_SA      = "\u0073";
Kiran.halffm_HA      = "\u0048";

Kiran.halffm_SHR     = "\u0045\u0060";
Kiran.halffm_TR      = "\u007E"; 
Kiran.halffm_JNY     = "\u0026";
Kiran.halffm_NN      = "\u00D9";


//Conjuncts
Kiran.conjct_KT      = "\u003E";
Kiran.conjct_KSH     = "\u0058\u0061";
Kiran.conjct_JNY     = "\u0026\u0061";
Kiran.conjct_TTTT    = "\u00D5";
Kiran.conjct_TTTTH   = "\u00D6";
Kiran.conjct_TTHTTH  = "\u0024";
Kiran.conjct_T_T     = "\u003C\u0061";
Kiran.conjct_TR      = "\u007E\u0061";

Kiran.conjct_D_D     = "\u005F";
Kiran.conjct_D_DH    = "\u0077";
Kiran.conjct_DM      = "\u00D4";
Kiran.conjct_DY      = "\u0056";
Kiran.conjct_DV      = "\u0057";
Kiran.conjct_DD_DD   = "\u00D7";
Kiran.conjct_DD_DDH  = "\u00D8";
Kiran.conjct_NN      = "\u00D9\u0061";

Kiran.conjct_PHR     = "\u0066\u0060";
Kiran.conjct_SHR     = "\u0045\u0061\u0060";
Kiran.conjct_HR      = "\u00D2";
Kiran.conjct_HM      = "\u00D3";
Kiran.conjct_HY      = "\u002B";
Kiran.conjct_KR      = "\u00DA";

//rakar
Kiran.vattu_RA_1     = "\u002F";
Kiran.vattu_RA_2     = "\u0060";

//Combos
Kiran.combo_JI       = "\u0069\u006A\u0061";
Kiran.combo_RU       = "\u0072\u005D";
Kiran.combo_RUU      = "\u0072\u007D";
Kiran.combo_LR       = "\u00CD";
Kiran.combo_TII      = "\u0074\u0049";
Kiran.combo_NEE      = "\u006E\u0061\u006F";
Kiran.combo_SEE      = "\u0073\u0061\u006F";
Kiran.combo_HR       = "\u003D";
Kiran.combo_KAVA     = "\u00DB";
Kiran.combo_TRAY_1   = "\u007E\u00CB";
Kiran.combo_TRAY_2   = "\u007E\u0079\u0061";

//Kiran.combo_KSHI     = "\u0058\u0069";

Kiran.misc_OM        = "\u002A";
Kiran.misc_DANDA     = "\u007C";
Kiran.nukta          = "\u00DC"; 

//Matches ASCII
Kiran.EXCLAMATION    = "\u0021";
Kiran.QTDOUBLE       = "\u0022";
Kiran.QTSINGLE       = "\u0027";
Kiran.PARENLEFT      = "\u0028";
Kiran.PARENRIGHT     = "\u0029";
Kiran.COMMA          = "\u002C";
Kiran.FULLSTOP       = "\u002E";
Kiran.SEMICOLON      = "\u003B";
Kiran.QUESTION       = "\u003F";
Kiran.LQTSINGLE      = "\u2018";
Kiran.RQTSINGLE      = "\u2019";
Kiran.LQTDOUBLE      = "\u201C";
Kiran.RQTDOUBLE      = "\u201D";

//Does not match ASCII
Kiran.digit_ZERO     = "\u0030";
Kiran.digit_ONE      = "\u0031";
Kiran.digit_TWO      = "\u0032";
Kiran.digit_THREE    = "\u0033";
Kiran.digit_FOUR     = "\u0034";
Kiran.digit_FIVE     = "\u0035";
Kiran.digit_SIX      = "\u0036";
Kiran.digit_SEVEN    = "\u0037";
Kiran.digit_EIGHT    = "\u0038";
Kiran.digit_NINE     = "\u0039";
//Kiran.SWASTIK        = "\u00DE";
Kiran.PLUS           = "\u00DF";
Kiran.HYPHEN         = "\u00E0";
Kiran.MULTIPLY       = "\u00E1";
Kiran.DIVIDE         = "\u00E2";
Kiran.EQUALS         = "\u00E3";
Kiran.LESSTHAN       = "\u00E4";
Kiran.GREATERTHAN    = "\u00E5";
Kiran.CIRCUMFLEX     = "\u00E6";
Kiran.CURLYLEFT      = "\u00E8";
Kiran.CURLYRIGHT     = "\u00E9";
Kiran.SQBKTLEFT      = "\u00EA";
Kiran.SQBKTRIGHT     = "\u00EB";
Kiran.ATSIGN         = "\u00EC";
Kiran.HALF           = "\u00ED";
Kiran.QUARTER        = "\u00EE";
Kiran.THREEFORTH     = "\u00EF";
Kiran.LIRA	         = "\u00F0";
Kiran.DOLLAR	     = "\u00F1";
Kiran.HASH	         = "\u00F2";
Kiran.SLASH          = "\u00F3";
Kiran.BACKSLASH      = "\u00F4";
Kiran.PERCENT        = "\u00F5";
Kiran.UNDERSCORE     = "\u00F6";

//redundantList
Kiran.space_1 = "\u0078";

Kiran.toPadma = new Object();

Kiran.toPadma[Kiran.avagraha]   = Padma.avagraha;
Kiran.toPadma[Kiran.anusvara]   = Padma.anusvara;
Kiran.toPadma[Kiran.candrabindu]= Padma.candrabindu;
Kiran.toPadma[Kiran.visarga]    = Padma.visarga;
Kiran.toPadma[Kiran.virama]     = Padma.syllbreak;

Kiran.toPadma[Kiran.vowel_A]    = Padma.vowel_A;
Kiran.toPadma[Kiran.vowel_AA]   = Padma.vowel_AA;
Kiran.toPadma[Kiran.vowel_I]    = Padma.vowel_I;
Kiran.toPadma[Kiran.vowel_II]   = Padma.vowel_II;
Kiran.toPadma[Kiran.vowel_U]    = Padma.vowel_U;
Kiran.toPadma[Kiran.vowel_UU]   = Padma.vowel_UU;
Kiran.toPadma[Kiran.vowel_R]    = Padma.vowel_R;
Kiran.toPadma[Kiran.vowel_CDR_E]= Padma.vowel_CDR_E;
Kiran.toPadma[Kiran.vowel_EE]   = Padma.vowel_EE;
Kiran.toPadma[Kiran.vowel_AI]   = Padma.vowel_AI;
Kiran.toPadma[Kiran.vowel_CDR_O]= Padma.vowel_CDR_O;
Kiran.toPadma[Kiran.vowel_OO]   = Padma.vowel_OO;
Kiran.toPadma[Kiran.vowel_AU]   = Padma.vowel_AU;

Kiran.toPadma[Kiran.consnt_KA]  = Padma.consnt_KA;
Kiran.toPadma[Kiran.consnt_KHA] = Padma.consnt_KHA;
Kiran.toPadma[Kiran.consnt_KHHA]= Padma.consnt_KHHA;
Kiran.toPadma[Kiran.consnt_GA]  = Padma.consnt_GA;
Kiran.toPadma[Kiran.consnt_GHHA]= Padma.consnt_GHHA;
Kiran.toPadma[Kiran.consnt_GHA] = Padma.consnt_GHA;
Kiran.toPadma[Kiran.consnt_NGA] = Padma.consnt_NGA;

Kiran.toPadma[Kiran.consnt_CA]  = Padma.consnt_CA;
Kiran.toPadma[Kiran.consnt_CHA] = Padma.consnt_CHA;
Kiran.toPadma[Kiran.consnt_JA]  = Padma.consnt_JA;
Kiran.toPadma[Kiran.consnt_ZA_1]= Padma.consnt_ZA;
Kiran.toPadma[Kiran.consnt_ZA_2]= Padma.consnt_ZA;
Kiran.toPadma[Kiran.consnt_JHA] = Padma.consnt_JHA;
Kiran.toPadma[Kiran.consnt_NYA] = Padma.consnt_NYA;

Kiran.toPadma[Kiran.consnt_TTA] = Padma.consnt_TTA;
Kiran.toPadma[Kiran.consnt_TTHA]= Padma.consnt_TTHA;
Kiran.toPadma[Kiran.consnt_DDA] = Padma.consnt_DDA;
Kiran.toPadma[Kiran.consnt_DDDHA]= Padma.consnt_DDDHA;
Kiran.toPadma[Kiran.consnt_DDHA] = Padma.consnt_DDHA;
Kiran.toPadma[Kiran.consnt_RHA] = Padma.consnt_RHA;
Kiran.toPadma[Kiran.consnt_NNA] = Padma.consnt_NNA;

Kiran.toPadma[Kiran.consnt_TA]  = Padma.consnt_TA;
Kiran.toPadma[Kiran.consnt_THA] = Padma.consnt_THA;
Kiran.toPadma[Kiran.consnt_DA]  = Padma.consnt_DA;
Kiran.toPadma[Kiran.consnt_DHA] = Padma.consnt_DHA;
Kiran.toPadma[Kiran.consnt_NA]  = Padma.consnt_NA;

Kiran.toPadma[Kiran.consnt_PA]  = Padma.consnt_PA;
Kiran.toPadma[Kiran.consnt_PHA] = Padma.consnt_PHA;
Kiran.toPadma[Kiran.consnt_FA]  = Padma.consnt_FA;
Kiran.toPadma[Kiran.consnt_BA]  = Padma.consnt_BA;
Kiran.toPadma[Kiran.consnt_BHA] = Padma.consnt_BHA;
Kiran.toPadma[Kiran.consnt_MA]  = Padma.consnt_MA;

Kiran.toPadma[Kiran.consnt_YA_1]  = Padma.consnt_YA;
Kiran.toPadma[Kiran.consnt_YA_2]  = Padma.consnt_YA;
Kiran.toPadma[Kiran.consnt_RA]    = Padma.consnt_RA;
Kiran.toPadma[Kiran.consnt_LA_1]  = Padma.consnt_LA;
Kiran.toPadma[Kiran.consnt_LA_2]  = Padma.consnt_LA;
Kiran.toPadma[Kiran.consnt_VA]    = Padma.consnt_VA;
Kiran.toPadma[Kiran.consnt_SHA_1] = Padma.consnt_SHA;
Kiran.toPadma[Kiran.consnt_SHA_2] = Padma.consnt_SHA;
Kiran.toPadma[Kiran.consnt_SHA_3] = Padma.consnt_SHA;
Kiran.toPadma[Kiran.consnt_SSA] = Padma.consnt_SSA;
Kiran.toPadma[Kiran.consnt_SA]  = Padma.consnt_SA;
Kiran.toPadma[Kiran.consnt_HA]  = Padma.consnt_HA;
Kiran.toPadma[Kiran.consnt_LLA] = Padma.consnt_LLA;

//Gunintamulu
Kiran.toPadma[Kiran.vowelsn_AA] = Padma.vowelsn_AA;
Kiran.toPadma[Kiran.vowelsn_I]  = Padma.vowelsn_I;
Kiran.toPadma[Kiran.vowelsn_II] = Padma.vowelsn_II;
Kiran.toPadma[Kiran.vowelsn_U_1]= Padma.vowelsn_U;
Kiran.toPadma[Kiran.vowelsn_U_2]= Padma.vowelsn_U;
Kiran.toPadma[Kiran.vowelsn_UU_1] = Padma.vowelsn_UU;
Kiran.toPadma[Kiran.vowelsn_UU_2] = Padma.vowelsn_UU;
Kiran.toPadma[Kiran.vowelsn_R]  = Padma.vowelsn_R;
Kiran.toPadma[Kiran.vowelsn_CDR_E] = Padma.vowelsn_CDR_E;
Kiran.toPadma[Kiran.vowelsn_EE] = Padma.vowelsn_EE;
Kiran.toPadma[Kiran.vowelsn_AI] = Padma.vowelsn_AI;
Kiran.toPadma[Kiran.vowelsn_CDR_O] = Padma.vowelsn_CDR_O;

//Halffm
Kiran.toPadma[Kiran.halffm_KA]    = Padma.halffm_KA;
Kiran.toPadma[Kiran.halffm_KSH]   = Padma.halffm_KA + Padma.halffm_SSA;
Kiran.toPadma[Kiran.halffm_KHA]   = Padma.halffm_KHA;
Kiran.toPadma[Kiran.halffm_GA]    = Padma.halffm_GA;
Kiran.toPadma[Kiran.halffm_GHA]   = Padma.halffm_GHA;

Kiran.toPadma[Kiran.halffm_CA]    = Padma.halffm_CA;
Kiran.toPadma[Kiran.halffm_JA]    = Padma.halffm_JA;
Kiran.toPadma[Kiran.halffm_ZA]    = Padma.halffm_ZA;
Kiran.toPadma[Kiran.halffm_JHA]   = Padma.halffm_JHA;
Kiran.toPadma[Kiran.halffm_NYA]   = Padma.halffm_NYA;
Kiran.toPadma[Kiran.halffm_NNA]   = Padma.halffm_NNA;

Kiran.toPadma[Kiran.halffm_TA]    = Padma.halffm_TA;
Kiran.toPadma[Kiran.halffm_TT]    = Padma.halffm_TA + Padma.halffm_TA;
Kiran.toPadma[Kiran.halffm_THA]   = Padma.halffm_THA;
Kiran.toPadma[Kiran.halffm_DHA]   = Padma.halffm_DHA;
Kiran.toPadma[Kiran.halffm_NA]    = Padma.halffm_NA;
Kiran.toPadma[Kiran.halffm_PA]    = Padma.halffm_PA;
Kiran.toPadma[Kiran.halffm_PHA]   = Padma.halffm_PHA;

Kiran.toPadma[Kiran.halffm_BA]    = Padma.halffm_BA;
Kiran.toPadma[Kiran.halffm_BHA]   = Padma.halffm_BHA;
Kiran.toPadma[Kiran.halffm_MA]    = Padma.halffm_MA;
Kiran.toPadma[Kiran.halffm_YA]    = Padma.halffm_YA;
Kiran.toPadma[Kiran.halffm_RA]    = Padma.halffm_RA;
Kiran.toPadma[Kiran.halffm_RRA]   = Padma.halffm_RRA;
Kiran.toPadma[Kiran.halffm_LA]    = Padma.halffm_LA;
Kiran.toPadma[Kiran.halffm_VA]    = Padma.halffm_VA;

Kiran.toPadma[Kiran.halffm_SHA_1] = Padma.halffm_SHA;
Kiran.toPadma[Kiran.halffm_SHA_2] = Padma.halffm_SHA;
Kiran.toPadma[Kiran.halffm_SHA_3] = Padma.halffm_SHA;
Kiran.toPadma[Kiran.halffm_SSA]   = Padma.halffm_SSA;
Kiran.toPadma[Kiran.halffm_SA]    = Padma.halffm_SA;
Kiran.toPadma[Kiran.halffm_HA]    = Padma.halffm_HA;

Kiran.toPadma[Kiran.halffm_SHR]   = Padma.halffm_SHA + Padma.halffm_RA;
Kiran.toPadma[Kiran.halffm_TR]    = Padma.halffm_TA + Padma.halffm_RA;
Kiran.toPadma[Kiran.halffm_JNY]   = Padma.halffm_JA + Padma.halffm_NYA;
Kiran.toPadma[Kiran.halffm_NN]    = Padma.halffm_NA + Padma.halffm_NA;

//Conjuncts
Kiran.toPadma[Kiran.conjct_KT]     = Padma.consnt_KA + Padma.vattu_TA;
Kiran.toPadma[Kiran.conjct_KSH]    = Padma.consnt_KA + Padma.vattu_SSA;
Kiran.toPadma[Kiran.conjct_JNY]    = Padma.consnt_JA + Padma.vattu_NYA;
Kiran.toPadma[Kiran.conjct_TTTT]   = Padma.consnt_TTA + Padma.vattu_TTA;
Kiran.toPadma[Kiran.conjct_TTTTH]  = Padma.consnt_TTA + Padma.vattu_TTHA;
Kiran.toPadma[Kiran.conjct_TTHTTH] = Padma.consnt_TTHA + Padma.vattu_TTHA;
Kiran.toPadma[Kiran.conjct_T_T]    = Padma.consnt_TA + Padma.vattu_TA;
Kiran.toPadma[Kiran.conjct_TR]     = Padma.consnt_TA + Padma.vattu_RA;

Kiran.toPadma[Kiran.conjct_D_D]    = Padma.consnt_DA + Padma.vattu_DA;
Kiran.toPadma[Kiran.conjct_D_DH]   = Padma.consnt_DA + Padma.vattu_DHA;
Kiran.toPadma[Kiran.conjct_DM]     = Padma.consnt_DA + Padma.vattu_MA;
Kiran.toPadma[Kiran.conjct_DY]     = Padma.consnt_DA + Padma.vattu_YA;
Kiran.toPadma[Kiran.conjct_DV]     = Padma.consnt_DA + Padma.vattu_VA;
Kiran.toPadma[Kiran.conjct_DD_DD]  = Padma.consnt_DDA+ Padma.vattu_DDA;
Kiran.toPadma[Kiran.conjct_DD_DDH] = Padma.consnt_DDA+ Padma.vattu_DDHA;
Kiran.toPadma[Kiran.conjct_NN]     = Padma.consnt_NA + Padma.vattu_NA;

Kiran.toPadma[Kiran.conjct_PHR]    = Padma.consnt_PHA + Padma.vattu_RA;
Kiran.toPadma[Kiran.conjct_SHR]    = Padma.consnt_SHA + Padma.vattu_RA;
Kiran.toPadma[Kiran.conjct_HR]     = Padma.consnt_HA + Padma.vattu_RA;
Kiran.toPadma[Kiran.conjct_HM]     = Padma.consnt_HA + Padma.vattu_MA;
Kiran.toPadma[Kiran.conjct_HY]     = Padma.consnt_HA + Padma.vattu_YA;
Kiran.toPadma[Kiran.conjct_KR]     = Padma.consnt_KA + Padma.vattu_RA;

//rakar
Kiran.toPadma[Kiran.vattu_RA_1]    = Padma.vattu_RA;
Kiran.toPadma[Kiran.vattu_RA_2]    = Padma.vattu_RA;

//Combos
Kiran.toPadma[Kiran.combo_JI]      = Padma.consnt_JA + Padma.vowelsn_I;
Kiran.toPadma[Kiran.combo_RU]      = Padma.consnt_RA + Padma.vowelsn_U;
Kiran.toPadma[Kiran.combo_RUU]     = Padma.consnt_RA + Padma.vowelsn_UU;
Kiran.toPadma[Kiran.combo_TII]     = Padma.consnt_TA + Padma.vowelsn_II;
Kiran.toPadma[Kiran.combo_NEE]     = Padma.consnt_SA + Padma.vowelsn_EE;
Kiran.toPadma[Kiran.combo_SEE]     = Padma.consnt_SA + Padma.vowelsn_EE;
Kiran.toPadma[Kiran.combo_LR]      = Padma.consnt_LA + Padma.vowelsn_R;
Kiran.toPadma[Kiran.combo_HR]      = Padma.consnt_HA + Padma.vowelsn_R;
Kiran.toPadma[Kiran.combo_KAVA]    = Padma.consnt_KA + Padma.vattu_VA; 
Kiran.toPadma[Kiran.combo_TRAY_1]  = Padma.halffm_TA + Padma.halffm_RA + Padma.consnt_YA; 
Kiran.toPadma[Kiran.combo_TRAY_2]  = Padma.halffm_TA + Padma.halffm_RA + Padma.consnt_YA; 

//Kiran.toPadma[Kiran.combo_KSHI]    = Padma.consnt_KA + Padma.vattu_SSA + Padma.vowelsn_I;

Kiran.toPadma[Kiran.misc_OM]       = Padma.om;
Kiran.toPadma[Kiran.misc_DANDA]    = Padma.danda;
Kiran.toPadma[Kiran.nukta]         = Padma.nukta;

//Does not match ASCII
Kiran.toPadma[Kiran.digit_ZERO]    = Padma.digit_ZERO;
Kiran.toPadma[Kiran.digit_ONE]     = Padma.digit_ONE;
Kiran.toPadma[Kiran.digit_TWO]     = Padma.digit_TWO;
Kiran.toPadma[Kiran.digit_THREE]   = Padma.digit_THREE;
Kiran.toPadma[Kiran.digit_FOUR]    = Padma.digit_FOUR;
Kiran.toPadma[Kiran.digit_FIVE]    = Padma.digit_FIVE;
Kiran.toPadma[Kiran.digit_SIX]     = Padma.digit_SIX;
Kiran.toPadma[Kiran.digit_SEVEN]   = Padma.digit_SEVEN;
Kiran.toPadma[Kiran.digit_EIGHT]   = Padma.digit_EIGHT;
Kiran.toPadma[Kiran.digit_NINE]    = Padma.digit_NINE;
//Kiran.toPadma[Kiran.SWASTIK]       = "\u5350";
Kiran.toPadma[Kiran.PLUS]          = "+";
Kiran.toPadma[Kiran.HYPHEN]        = "-";
Kiran.toPadma[Kiran.MULTIPLY]      = "\u00D7";//Unicode for multiplication symbol
Kiran.toPadma[Kiran.DIVIDE]        = "\u00F7";//Unicode for division symbol
Kiran.toPadma[Kiran.EQUALS]        = "=";
Kiran.toPadma[Kiran.LESSTHAN]      = "<";
Kiran.toPadma[Kiran.GREATERTHAN]   = ">";
Kiran.toPadma[Kiran.CIRCUMFLEX]    = "^";
Kiran.toPadma[Kiran.CURLYLEFT]     = "{";
Kiran.toPadma[Kiran.CURLYRIGHT]    = "}";
Kiran.toPadma[Kiran.SQBKTLEFT]     = "[";
Kiran.toPadma[Kiran.SQBKTRIGHT]    = "]";
Kiran.toPadma[Kiran.ATSIGN]        = "@";
Kiran.toPadma[Kiran.HALF]          = "\u00BD";
Kiran.toPadma[Kiran.QUARTER]       = "\u00BC";
Kiran.toPadma[Kiran.THREEFORTH]    = "\u00BE";
Kiran.toPadma[Kiran.LIRA]          = "\u20A4";
Kiran.toPadma[Kiran.DOLLAR]        = "$";
Kiran.toPadma[Kiran.HASH]          = "#";
Kiran.toPadma[Kiran.SLASH]         = "/";
Kiran.toPadma[Kiran.BACKSLASH]     = "\u005C";
Kiran.toPadma[Kiran.PERCENT]       = "%";
Kiran.toPadma[Kiran.UNDERSCORE]    = "_";


Kiran.prefixList = new Object();
Kiran.prefixList[Kiran.vowelsn_I]  = true;

Kiran.suffixList = new Object();
Kiran.suffixList[Kiran.halffm_RA]   = true;
Kiran.suffixList[Kiran.vowelsn_U_2] = true;

Kiran.redundantList = new Object();
Kiran.redundantList[Kiran.space_1] = true;

Kiran.overloadList = new Object();
Kiran.overloadList[Kiran.vowel_A]     = true;
Kiran.overloadList[Kiran.vowel_AA]    = true;
Kiran.overloadList[Kiran.vowel_I]     = true;
Kiran.overloadList[Kiran.vowel_EE]    = true;
Kiran.overloadList[Kiran.vowelsn_AA]  = true;
Kiran.overloadList[Kiran.vowelsn_CDR_E]   = true;
Kiran.overloadList[Kiran.vowel_U]     = true;
Kiran.overloadList[Kiran.consnt_GA]   = true;
Kiran.overloadList[Kiran.consnt_JA]   = true;
Kiran.overloadList[Kiran.consnt_DDA]  = true;
Kiran.overloadList[Kiran.consnt_DDHA] = true;
Kiran.overloadList[Kiran.consnt_PHA]  = true;
Kiran.overloadList[Kiran.consnt_RA]   = true;
Kiran.overloadList[Kiran.halffm_KSH]  = true;
Kiran.overloadList[Kiran.halffm_KHA]  = true;
Kiran.overloadList[Kiran.halffm_GA]   = true;
Kiran.overloadList[Kiran.halffm_GHA]  = true;
Kiran.overloadList[Kiran.halffm_CA]   = true;
Kiran.overloadList[Kiran.halffm_JA]   = true;
Kiran.overloadList[Kiran.halffm_ZA]   = true;
Kiran.overloadList[Kiran.halffm_JHA]  = true;
Kiran.overloadList[Kiran.halffm_NYA]  = true;
Kiran.overloadList[Kiran.halffm_NNA]  = true;
Kiran.overloadList[Kiran.halffm_TT]   = true;
Kiran.overloadList[Kiran.halffm_THA]  = true;
Kiran.overloadList[Kiran.halffm_DHA]  = true;
Kiran.overloadList[Kiran.halffm_NA]   = true;
Kiran.overloadList[Kiran.halffm_BA]   = true;
Kiran.overloadList[Kiran.halffm_BHA]  = true;
Kiran.overloadList[Kiran.halffm_MA]   = true;
Kiran.overloadList[Kiran.halffm_YA]   = true;
Kiran.overloadList[Kiran.halffm_LA]   = true;
Kiran.overloadList[Kiran.halffm_VA]   = true;
Kiran.overloadList[Kiran.halffm_SHA_1]= true;
Kiran.overloadList[Kiran.halffm_SHA_2]= true;
Kiran.overloadList[Kiran.halffm_SHA_3]= true;
Kiran.overloadList[Kiran.halffm_SHR]  = true;
Kiran.overloadList[Kiran.halffm_SSA]  = true;
Kiran.overloadList[Kiran.halffm_SA]   = true;
Kiran.overloadList[Kiran.halffm_PA]   = true;
Kiran.overloadList[Kiran.halffm_TA]   = true;
Kiran.overloadList[Kiran.halffm_TR]   = true;
Kiran.overloadList[Kiran.halffm_JA]   = true;
Kiran.overloadList[Kiran.halffm_NA]   = true;
Kiran.overloadList[Kiran.halffm_SA]   = true;
Kiran.overloadList[Kiran.halffm_JNY]  = true;
Kiran.overloadList[Kiran.halffm_NN]   = true;
Kiran.overloadList["\u0045\u0061"]    = true;

//Amruta
function Amruta()
{
}

Amruta.maxLookupLen = Kiran.maxLookupLen;
Amruta.fontFace     = "Amruta";
Amruta.displayName  = "Amruta";
Amruta.script       = Kiran.script;
Amruta.hasSuffixes  = Kiran.hasSuffixes;

Amruta.lookup = function (str) 
{
    return Kiran.lookup(str);
}

Amruta.isPrefixSymbol = function (str)
{
    return Kiran.isPrefixSymbol(str);
}

Amruta.isSuffixSymbol = function (str)
{
    return Kiran.isSuffixSymbol(str);
}

Amruta.isOverloaded = function (str)
{
    return Kiran.isOverloaded(str);
}

Amruta.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return Kiran.handleTwoPartVowelSigns(sign1, sign2);
}

Amruta.isRedundant = function (str)
{
    return Kiran.isRedundant(str);
}

//Aarti
function Aarti()
{
}

Aarti.maxLookupLen = Kiran.maxLookupLen;
Aarti.fontFace     = "Aarti";
Aarti.displayName  = "Aarti";
Aarti.script       = Kiran.script;
Aarti.hasSuffixes  = Kiran.hasSuffixes;

Aarti.lookup = function (str) 
{
    return Kiran.lookup(str);
}

Aarti.isPrefixSymbol = function (str)
{
    return Kiran.isPrefixSymbol(str);
}

Aarti.isSuffixSymbol = function (str)
{
    return Kiran.isSuffixSymbol(str);
}

Aarti.isOverloaded = function (str)
{
    return Kiran.isOverloaded(str);
}

Aarti.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return Kiran.handleTwoPartVowelSigns(sign1, sign2);
}

Aarti.isRedundant = function (str)
{
    return Kiran.isRedundant(str);
}
