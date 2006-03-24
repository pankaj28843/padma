//$Id: Shusha.js,v 1.4 2006/03/24 17:27:57 vnagarjuna Exp $

/* Copyright 2006 G Karunakar <karunakar@freedomink.org> */
/* Copyright 2006 Nagarjuna Venna <vnagarjuna@yahoo.com> */

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


function Shusha()
{
}

//The interface every dynamic font encoding should implement
Shusha.maxLookupLen = 3;
Shusha.fontFace     = "Shusha";
Shusha.displayName  = "Shusha";
Shusha.script       = Padma.script_DEVANAGARI;
Shusha.hasSuffixes  = true;

Shusha.lookup = function (str) 
{
    return Shusha.toPadma[str];
}

Shusha.isPrefixSymbol = function (str)
{
    return Shusha.prefixList[str] != null;
}

Shusha.isSuffixSymbol = function (str)
{
    return Shusha.suffixList[str] != null;
}

Shusha.isOverloaded = function (str)
{
    return Shusha.overloadList[str] != null;
}

Shusha.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if ((sign1 == Padma.vowelsn_EE && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_EE))
        return Padma.vowelsn_OO;
    if ((sign1 == Padma.vowelsn_AI && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_AI))
        return Padma.vowelsn_AU;
    return sign1 + sign2;    
}

Shusha.isRedundant = function (str)
{
    return Shusha.redundantList[str] != null;
}

//This font unfortunately overloads period and nukta...
//TODO: 218, 214,  181-184, 149-151, 130, 132 - 135, 153, 173, 

//Vowel modifiers
Shusha.avagraha	      = "\u007C";
Shusha.anusvara       = "\u004D";
Shusha.candrabindu    = "\u00D0";
Shusha.visarga	      = "\u003A";
Shusha.virama         = "\u005C";

//Vowels
Shusha.vowel_A        = "\u0041";
Shusha.vowel_AA       = "\u0041\u0061";
Shusha.vowel_I        = "\u005B";
Shusha.vowel_II_1     = "\u005B\u002D";
Shusha.vowel_II_2     = "\u0161";
Shusha.vowel_U        = "\u005D";
Shusha.vowel_UU       = "\u007D";
Shusha.vowel_R        = "\u003F";
Shusha.vowel_CDR_E    = "\u0065\u005E";
Shusha.vowel_EE       = "\u0065";
Shusha.vowel_AI       = "\u0065\u006F";
Shusha.vowel_CDR_O    = "\u0041\u0061\u005E";
Shusha.vowel_OO_1     = "\u0041\u0061\u006F";
Shusha.vowel_OO_2     = "\u0041\u00DC";
Shusha.vowel_AU_1     = "\u0041\u0061\u004F";
Shusha.vowel_AU_2     = "\u0041\u00DD";

//Consonants
Shusha.consnt_KA      = "\u006B";
Shusha.consnt_KHA_1   = "\u0023\u0061";
Shusha.consnt_KHA_2   = "\u004B";
Shusha.consnt_KHHA_1  = "\u004B\u002C";
Shusha.consnt_KHHA_2  = "\u00D3";
Shusha.consnt_GA      = "\u0067\u0061";
Shusha.consnt_GHHA    = "\u0067\u0061\u002C";
Shusha.consnt_GHA     = "\u0047\u0061";
Shusha.consnt_NGA     = "\u003D";

Shusha.consnt_CA      = "\u0063\u0061";
Shusha.consnt_CHA     = "\u0043";
Shusha.consnt_JA      = "\u006A\u0061";
Shusha.consnt_ZA_1    = "\u006A\u002C\u0061";
Shusha.consnt_ZA_2    = "\u006A\u0061\u002C";
Shusha.consnt_JHA     = "\u004A\u0061";
Shusha.consnt_NYA     = "\u0048\u0061";

Shusha.consnt_TTA     = "\u0054";
Shusha.consnt_TTHA    = "\u007A";
Shusha.consnt_DDA     = "\u0044";
Shusha.consnt_DDDHA   = "\u0044\u002C";
Shusha.consnt_DDHA    = "\u005A";
Shusha.consnt_RHA     = "\u005A\u002C";
Shusha.consnt_NNA     = "\u004E\u0061";

Shusha.consnt_TA      = "\u0074";
Shusha.consnt_THA     = "\u0071\u0061";
Shusha.consnt_DA      = "\u0064";
Shusha.consnt_DHA     = "\u0051\u0061";
Shusha.consnt_NA      = "\u006E\u0061";

Shusha.consnt_PA      = "\u0070";
Shusha.consnt_PHA     = "\u0066";
Shusha.consnt_FA_1    = "\u0066\u002C";
Shusha.consnt_FA_2    = "\u00D4";
Shusha.consnt_BA      = "\u0062\u0061";
Shusha.consnt_BHA     = "\u0042\u0061";
Shusha.consnt_MA      = "\u006D\u0061";

Shusha.consnt_YA      = "\u0079\u0061";
Shusha.consnt_RA      = "\u0072";
Shusha.consnt_LA      = "\u006C\u0061";
Shusha.consnt_VA      = "\u0076\u0061";
Shusha.consnt_SHA_1   = "\u0053\u0061";
Shusha.consnt_SHA_2   = "\u0058\u0061";
Shusha.consnt_SHA_3   = "\u00CF\u0061";
Shusha.consnt_SSA     = "\u0059\u0061";
Shusha.consnt_SA      = "\u0073\u0061";
Shusha.consnt_HA      = "\u0068";
Shusha.consnt_LLA     = "\u004C";

//Vowel signs
Shusha.vowelsn_AA     = "\u0061";
Shusha.vowelsn_I      = "\u0069";
Shusha.vowelsn_II     = "\u0049";
Shusha.vowelsn_U      = "\u0075";
Shusha.vowelsn_UU     = "\u0055";
Shusha.vowelsn_R      = "\u0052";
Shusha.vowelsn_CDR_E  = "\u005E";
Shusha.vowelsn_EE     = "\u006F";
Shusha.vowelsn_AI     = "\u004F";
Shusha.vowelsn_CDR_O  = "\u0061\u005E";
Shusha.vowelsn_OO     = "\u00DC";
Shusha.vowelsn_AU     = "\u00DD";

// Half forms
Shusha.halffm_KA      = "\u0040";
Shusha.halffm_KSH     = "\u0078";
Shusha.halffm_KHA     = "\u0023";
Shusha.halffm_GA      = "\u0067";
Shusha.halffm_GHA     = "\u0047";
Shusha.halffm_CA      = "\u0063";
Shusha.halffm_JA      = "\u006A";
Shusha.halffm_ZA      = "\u006A\u002C";
Shusha.halffm_JHA     = "\u004A";
Shusha.halffm_NYA     = "\u0048";
Shusha.halffm_NNA     = "\u004E";
Shusha.halffm_TA      = "\u0025";
Shusha.halffm_TT      = "\u003C";
Shusha.halffm_THA     = "\u0071";
Shusha.halffm_DHA     = "\u0051";
Shusha.halffm_NA      = "\u006E";
Shusha.halffm_PA      = "\u0050";
Shusha.halffm_PHA     = "\u0046";
Shusha.halffm_BA      = "\u0062";
Shusha.halffm_BHA     = "\u0042";
Shusha.halffm_MA      = "\u006D";
Shusha.halffm_YA      = "\u0079";
Shusha.halffm_RA      = "\u002D"; //reph according to Karunakar
Shusha.halffm_LA      = "\u006C";
Shusha.halffm_VA      = "\u0076";
Shusha.halffm_SHA_1   = "\u0053";
Shusha.halffm_SHA_2   = "\u0058";
Shusha.halffm_SHA_3   = "\u00CF";
Shusha.halffm_SHR     = "\u0045";
Shusha.halffm_SSA     = "\u0059";
Shusha.halffm_SA      = "\u0073";
Shusha.halffm_HA      = "\u002A";

//Conjuncts
Shusha.conjct_KT      = "\u003E";
Shusha.conjct_KSH     = "\u0078\u0061";
Shusha.conjct_KR      = "\u00CB";
Shusha.conjct_JNY     = "\u0026";
Shusha.conjct_TTTT    = "\u002B";
Shusha.conjct_TTHTTH  = "\u007B";
Shusha.conjct_T_T     = "\u003C\u0061";
Shusha.conjct_TR      = "\u007E";
Shusha.conjct_D_D     = "\u005F";
Shusha.conjct_D_DH    = "\u0077";
Shusha.conjct_DY      = "\u0056";
Shusha.conjct_DV      = "\u0057";
Shusha.conjct_NN      = "\u00D9";
Shusha.conjct_PHR     = "\u00CD";
Shusha.conjct_SHR     = "\u0045\u0061";
Shusha.conjct_HR      = "\u0153";
Shusha.conjct_HY      = "\u0028";

//rakar
Shusha.vattu_RA_1     = "\u002F";
Shusha.vattu_RA_2     = "\u0060";

// Combos
Shusha.combo_KR       = "\u00CC";
Shusha.combo_JI       = "\u0178";
Shusha.combo_PHR      = "\u00CE";
Shusha.combo_RU       = "\u00C9";
Shusha.combo_RUU      = "\u0024";
Shusha.combo_LR       = "\u003B";
Shusha.combo_NEE      = "\u006E\u00DC";
Shusha.combo_SEE      = "\u0073\u00DC";
Shusha.combo_HR       = "\u0029";

Shusha.misc_OM        = "\u0021";
Shusha.misc_DANDA     = "\u002E";

//Matches ASCII
Shusha.digit_ZERO     = "\u0030";
Shusha.digit_ONE      = "\u0031";
Shusha.digit_TWO      = "\u0032";
Shusha.digit_THREE    = "\u0033";
Shusha.digit_FOUR     = "\u0034";
Shusha.digit_FIVE     = "\u0035";
Shusha.digit_SIX      = "\u0036";
Shusha.digit_SEVEN    = "\u0037";
Shusha.digit_EIGHT    = "\u0038";
Shusha.digit_NINE     = "\u0039";
Shusha.misc_QTDOUBLE  = "\u0022";
Shusha.misc_QTSINGLE  = "\u0027";

//Does not match ASCII
Shusha.PERIOD_1       = "\u002C";
Shusha.PERCENT        = "\u2030";
Shusha.LESSTHAN_1     = "\u2039";
Shusha.LQTSINGLE      = "\u2018";
Shusha.RQTSINGLE      = "\u2019";
Shusha.LQTDOUBLE      = "\u201C";
Shusha.RQTDOUBLE      = "\u201D";
Shusha.TILDE          = "\u02DC";
Shusha.GREATERTHAN_1  = "\u203A";
Shusha.CURLYLEFT      = "\u00A1";
Shusha.CURLYRIGHT     = "\u00A3";
Shusha.SQBKTLEFT      = "\u00A4";
Shusha.SQBKTRIGHT     = "\u00A5";
Shusha.BACKQUOTE      = "\u00AA";
Shusha.PARENLEFT      = "\u00B3";
Shusha.PARENRIGHT     = "\u00B4";
Shusha.HYPHEN         = "\u00B9";
Shusha.PERIOD_2       = "\u00BA";
Shusha.SLASH          = "\u00C0";
Shusha.COLON          = "\u00C1";
Shusha.SEMICOLON      = "\u00C2";
Shusha.LESSTHAN_2     = "\u00C3";
Shusha.EQUALS         = "\u00C4";
Shusha.GREATERTHAN_2  = "\u00C5";
Shusha.QUESTION       = "\u00C6";
Shusha.ATSIGN         = "\u00C7";
Shusha.PIPE           = "\u00C8";
Shusha.COMMA          = "\u00CA";
Shusha.EXCLAMATION_1  = "\u00B2";
Shusha.EXCLAMATION_2  = "\u00D1";
Shusha.BACKSLASH      = "\u00D2";
Shusha.SQUAREROOT     = "\u00D5";
Shusha.CIRCUMFLEX     = "\u00D8";

Shusha.toPadma = new Object();

Shusha.toPadma[Shusha.avagraha]   = Padma.avagraha;
Shusha.toPadma[Shusha.anusvara]   = Padma.anusvara;
Shusha.toPadma[Shusha.candrabindu] = Padma.candrabindu;
Shusha.toPadma[Shusha.visarga]    = Shusha.visarga;
Shusha.toPadma[Shusha.virama]     = Padma.syllbreak;

Shusha.toPadma[Shusha.vowel_A]    = Padma.vowel_A;
Shusha.toPadma[Shusha.vowel_AA]   = Padma.vowel_AA;
Shusha.toPadma[Shusha.vowel_I]    = Padma.vowel_I;
Shusha.toPadma[Shusha.vowel_II_1] = Padma.vowel_II;
Shusha.toPadma[Shusha.vowel_II_2] = Padma.vowel_II;
Shusha.toPadma[Shusha.vowel_U]    = Padma.vowel_U;
Shusha.toPadma[Shusha.vowel_UU]   = Padma.vowel_UU;
Shusha.toPadma[Shusha.vowel_R]    = Padma.vowel_R;
Shusha.toPadma[Shusha.vowel_CDR_E] = Padma.vowel_CDR_E;
Shusha.toPadma[Shusha.vowel_EE]   = Padma.vowel_EE;
Shusha.toPadma[Shusha.vowel_AI]   = Padma.vowel_AI;
Shusha.toPadma[Shusha.vowel_CDR_O] = Padma.vowel_CDR_O;
Shusha.toPadma[Shusha.vowel_OO_1] = Padma.vowel_OO;
Shusha.toPadma[Shusha.vowel_OO_2] = Padma.vowel_OO;
Shusha.toPadma[Shusha.vowel_AU_1] = Padma.vowel_AU;
Shusha.toPadma[Shusha.vowel_AU_2] = Padma.vowel_AU;

Shusha.toPadma[Shusha.consnt_KA]  = Padma.consnt_KA;
Shusha.toPadma[Shusha.consnt_KHA_1] = Padma.consnt_KHA;
Shusha.toPadma[Shusha.consnt_KHA_2] = Padma.consnt_KHA;
Shusha.toPadma[Shusha.consnt_KHHA_1] = Padma.consnt_KHHA;
Shusha.toPadma[Shusha.consnt_KHHA_2] = Padma.consnt_KHHA;
Shusha.toPadma[Shusha.consnt_GA]  = Padma.consnt_GA;
Shusha.toPadma[Shusha.consnt_GHHA] = Padma.consnt_GHHA;
Shusha.toPadma[Shusha.consnt_GHA] = Padma.consnt_GHA;
Shusha.toPadma[Shusha.consnt_NGA] = Padma.consnt_NGA;

Shusha.toPadma[Shusha.consnt_CA]  = Padma.consnt_CA;
Shusha.toPadma[Shusha.consnt_CHA] = Padma.consnt_CHA;
Shusha.toPadma[Shusha.consnt_JA]  = Padma.consnt_JA;
Shusha.toPadma[Shusha.consnt_ZA_1]  = Padma.consnt_ZA;
Shusha.toPadma[Shusha.consnt_ZA_2]  = Padma.consnt_ZA;
Shusha.toPadma[Shusha.consnt_JHA] = Padma.consnt_JHA;
Shusha.toPadma[Shusha.consnt_NYA] = Padma.consnt_NYA;

Shusha.toPadma[Shusha.consnt_TTA] = Padma.consnt_TTA;
Shusha.toPadma[Shusha.consnt_TTHA] = Padma.consnt_TTHA;
Shusha.toPadma[Shusha.consnt_DDA] = Padma.consnt_DDA;
Shusha.toPadma[Shusha.consnt_DDDHA] = Padma.consnt_DDDHA;
Shusha.toPadma[Shusha.consnt_DDHA] = Padma.consnt_DDHA;
Shusha.toPadma[Shusha.consnt_RHA] = Padma.consnt_RHA;
Shusha.toPadma[Shusha.consnt_NNA] = Padma.consnt_NNA;

Shusha.toPadma[Shusha.consnt_TA]  = Padma.consnt_TA;
Shusha.toPadma[Shusha.consnt_THA] = Padma.consnt_THA;
Shusha.toPadma[Shusha.consnt_DA]  = Padma.consnt_DA;
Shusha.toPadma[Shusha.consnt_DHA] = Padma.consnt_DHA;
Shusha.toPadma[Shusha.consnt_NA]  = Padma.consnt_NA;

Shusha.toPadma[Shusha.consnt_PA]  = Padma.consnt_PA;
Shusha.toPadma[Shusha.consnt_PHA] = Padma.consnt_PHA;
Shusha.toPadma[Shusha.consnt_FA_1] = Padma.consnt_FA;
Shusha.toPadma[Shusha.consnt_FA_2] = Padma.consnt_FA;
Shusha.toPadma[Shusha.consnt_BA]  = Padma.consnt_BA;
Shusha.toPadma[Shusha.consnt_BHA] = Padma.consnt_BHA;
Shusha.toPadma[Shusha.consnt_MA]  = Padma.consnt_MA;

Shusha.toPadma[Shusha.consnt_YA]  = Padma.consnt_YA;
Shusha.toPadma[Shusha.consnt_RA]  = Padma.consnt_RA;
Shusha.toPadma[Shusha.consnt_LA]  = Padma.consnt_LA;
Shusha.toPadma[Shusha.consnt_VA]  = Padma.consnt_VA;
Shusha.toPadma[Shusha.consnt_SHA_1] = Padma.consnt_SHA;
Shusha.toPadma[Shusha.consnt_SHA_2] = Padma.consnt_SHA;
Shusha.toPadma[Shusha.consnt_SHA_3] = Padma.consnt_SHA;
Shusha.toPadma[Shusha.consnt_SSA] = Padma.consnt_SSA;
Shusha.toPadma[Shusha.consnt_SA]  = Padma.consnt_SA;
Shusha.toPadma[Shusha.consnt_HA]  = Padma.consnt_HA;
Shusha.toPadma[Shusha.consnt_LLA] = Padma.consnt_LLA;

//Gunintamulu
Shusha.toPadma[Shusha.vowelsn_AA] = Padma.vowelsn_AA;
Shusha.toPadma[Shusha.vowelsn_I]  = Padma.vowelsn_I;
Shusha.toPadma[Shusha.vowelsn_II] = Padma.vowelsn_II;
Shusha.toPadma[Shusha.vowelsn_U]  = Padma.vowelsn_U;
Shusha.toPadma[Shusha.vowelsn_UU] = Padma.vowelsn_UU;
Shusha.toPadma[Shusha.vowelsn_R]  = Padma.vowelsn_R;
Shusha.toPadma[Shusha.vowelsn_CDR_E] = Padma.vowelsn_CDR_E;
Shusha.toPadma[Shusha.vowelsn_EE] = Padma.vowelsn_EE;
Shusha.toPadma[Shusha.vowelsn_AI] = Padma.vowelsn_AI;
Shusha.toPadma[Shusha.vowelsn_CDR_O] = Padma.vowelsn_CDR_O;
Shusha.toPadma[Shusha.vowelsn_OO] = Padma.vowelsn_OO;
Shusha.toPadma[Shusha.vowelsn_AU] = Padma.vowelsn_AU;

//Halffm
Shusha.toPadma[Shusha.halffm_KA]    = Padma.halffm_KA;
Shusha.toPadma[Shusha.halffm_KSH]   = Padma.halffm_KA + Padma.halffm_SSA;
Shusha.toPadma[Shusha.halffm_KHA]   = Padma.halffm_KHA;
Shusha.toPadma[Shusha.halffm_GA]    = Padma.halffm_GA;
Shusha.toPadma[Shusha.halffm_GHA]   = Padma.halffm_GHA;
Shusha.toPadma[Shusha.halffm_CA]    = Padma.halffm_CA;
Shusha.toPadma[Shusha.halffm_JA]    = Padma.halffm_JA;
Shusha.toPadma[Shusha.halffm_ZA]    = Padma.halffm_ZA;
Shusha.toPadma[Shusha.halffm_JHA]   = Padma.halffm_JHA;
Shusha.toPadma[Shusha.halffm_NYA]   = Padma.halffm_NYA;
Shusha.toPadma[Shusha.halffm_NNA]   = Padma.halffm_NNA;
Shusha.toPadma[Shusha.halffm_TA]    = Padma.halffm_TA;
Shusha.toPadma[Shusha.halffm_TT]    = Padma.halffm_TA + Padma.halffm_TA;
Shusha.toPadma[Shusha.halffm_THA]   = Padma.halffm_THA;
Shusha.toPadma[Shusha.halffm_DHA]   = Padma.halffm_DHA;
Shusha.toPadma[Shusha.halffm_NA]    = Padma.halffm_NA;
Shusha.toPadma[Shusha.halffm_PA]    = Padma.halffm_PA;
Shusha.toPadma[Shusha.halffm_PHA]   = Padma.halffm_PHA;
Shusha.toPadma[Shusha.halffm_BA]    = Padma.halffm_BA;
Shusha.toPadma[Shusha.halffm_BHA]   = Padma.halffm_BHA;
Shusha.toPadma[Shusha.halffm_MA]    = Padma.halffm_MA;
Shusha.toPadma[Shusha.halffm_YA]    = Padma.halffm_YA;
Shusha.toPadma[Shusha.halffm_RA]    = Padma.halffm_RA;
Shusha.toPadma[Shusha.halffm_LA]    = Padma.halffm_LA;
Shusha.toPadma[Shusha.halffm_VA]    = Padma.halffm_VA;
Shusha.toPadma[Shusha.halffm_SHA_1] = Padma.halffm_SHA;
Shusha.toPadma[Shusha.halffm_SHA_2] = Padma.halffm_SHA;
Shusha.toPadma[Shusha.halffm_SHA_3] = Padma.halffm_SHA;
Shusha.toPadma[Shusha.halffm_SHR]   = Padma.halffm_SHA + Padma.halffm_RA;
Shusha.toPadma[Shusha.halffm_SSA]   = Padma.halffm_SSA;
Shusha.toPadma[Shusha.halffm_SA]    = Padma.halffm_SA;
Shusha.toPadma[Shusha.halffm_HA]    = Padma.halffm_HA;

//Conjuncts
Shusha.toPadma[Shusha.conjct_KT]     = Padma.consnt_KA + Padma.vattu_TA;
Shusha.toPadma[Shusha.conjct_KSH]    = Padma.consnt_KA + Padma.vattu_SSA;
Shusha.toPadma[Shusha.conjct_KR]     = Padma.consnt_KA + Padma.vattu_RA;
Shusha.toPadma[Shusha.conjct_JNY]    = Padma.consnt_JA + Padma.vattu_NYA;
Shusha.toPadma[Shusha.conjct_TTTT]   = Padma.consnt_TTA + Padma.vattu_TTA;
Shusha.toPadma[Shusha.conjct_TTHTTH] = Padma.consnt_TTHA + Padma.vattu_TTHA;
Shusha.toPadma[Shusha.conjct_T_T]    = Padma.consnt_TA + Padma.vattu_TA;
Shusha.toPadma[Shusha.conjct_TR]     = Padma.consnt_TA + Padma.vattu_RA;
Shusha.toPadma[Shusha.conjct_D_D]    = Padma.consnt_DA + Padma.vattu_DA;
Shusha.toPadma[Shusha.conjct_D_DH]   = Padma.consnt_DA + Padma.vattu_DHA;
Shusha.toPadma[Shusha.conjct_DY]     = Padma.consnt_DA + Padma.vattu_YA;
Shusha.toPadma[Shusha.conjct_DV]     = Padma.consnt_DA + Padma.vattu_VA;
Shusha.toPadma[Shusha.conjct_NN]     = Padma.consnt_NA + Padma.vattu_NA;
Shusha.toPadma[Shusha.conjct_PHR]    = Padma.consnt_PHA + Padma.vattu_RA;
Shusha.toPadma[Shusha.conjct_SHR]    = Padma.consnt_SHA + Padma.vattu_RA;
Shusha.toPadma[Shusha.conjct_HR]     = Padma.consnt_HA + Padma.vattu_RA;
Shusha.toPadma[Shusha.conjct_HY]     = Padma.consnt_HA + Padma.vattu_YA;

Shusha.toPadma[Shusha.vattu_RA_1]    = Padma.vattu_RA;
Shusha.toPadma[Shusha.vattu_RA_2]    = Padma.vattu_RA;

Shusha.toPadma[Shusha.combo_KR]      = Padma.consnt_KA + Padma.vowelsn_R;
Shusha.toPadma[Shusha.combo_JI]      = Padma.consnt_JA + Padma.vowelsn_I;
Shusha.toPadma[Shusha.combo_PHR]     = Padma.consnt_PHA + Padma.vowelsn_R;
Shusha.toPadma[Shusha.combo_RU]      = Padma.consnt_RA + Padma.vowelsn_U;
Shusha.toPadma[Shusha.combo_RUU]     = Padma.consnt_RA + Padma.vowelsn_UU;
Shusha.toPadma[Shusha.combo_NEE]     = Padma.consnt_SA + Padma.vowelsn_EE;
Shusha.toPadma[Shusha.combo_SEE]     = Padma.consnt_SA + Padma.vowelsn_EE;
Shusha.toPadma[Shusha.combo_LR]      = Padma.consnt_LA + Padma.vowelsn_R;
Shusha.toPadma[Shusha.combo_HR]      = Padma.consnt_HA + Padma.vowelsn_R;

Shusha.toPadma[Shusha.misc_OM]       = Padma.om;
Shusha.toPadma[Shusha.misc_DANDA]    = Padma.danda;

Shusha.toPadma[Shusha.PERIOD_1]      = ".";
Shusha.toPadma[Shusha.PERCENT]       = "%";
Shusha.toPadma[Shusha.LESSTHAN_1]    = "<";
Shusha.toPadma[Shusha.LQTSINGLE]     = "\u2018";
Shusha.toPadma[Shusha.RQTSINGLE]     = "\u2019";
Shusha.toPadma[Shusha.LQTDOUBLE]     = "\u201C";
Shusha.toPadma[Shusha.RQTDOUBLE]     = "\u201D";
Shusha.toPadma[Shusha.TILDE]         = "~";
Shusha.toPadma[Shusha.GREATERTHAN_1] = ">";
Shusha.toPadma[Shusha.CURLYLEFT]     = "{";
Shusha.toPadma[Shusha.CURLYRIGHT]    = "}";
Shusha.toPadma[Shusha.SQBKTLEFT]     = "[";
Shusha.toPadma[Shusha.SQBKTRIGHT]    = "]";
Shusha.toPadma[Shusha.BACKQUOTE]     = "`";
Shusha.toPadma[Shusha.PARENLEFT]     = "(";
Shusha.toPadma[Shusha.PARENRIGHT]    = ")";
Shusha.toPadma[Shusha.HYPHEN]        = "-";
Shusha.toPadma[Shusha.PERIOD_2]      = ".";
Shusha.toPadma[Shusha.SLASH]         = "/";
Shusha.toPadma[Shusha.COLON]         = ":";
Shusha.toPadma[Shusha.SEMICOLON]     = ";";
Shusha.toPadma[Shusha.LESSTHAN_2]    = "<";
Shusha.toPadma[Shusha.EQUALS]        = "=";
Shusha.toPadma[Shusha.GREATERTHAN_2] = ">";
Shusha.toPadma[Shusha.QUESTION]      = "?";
Shusha.toPadma[Shusha.ATSIGN]        = "@";
Shusha.toPadma[Shusha.PIPE]          = "|";
Shusha.toPadma[Shusha.COMMA]         = ",";
Shusha.toPadma[Shusha.EXCLAMATION_1] = "!";
Shusha.toPadma[Shusha.EXCLAMATION_2] = "!";
Shusha.toPadma[Shusha.BACKSLASH]     = "\\";
Shusha.toPadma[Shusha.SQUAREROOT]    = "\u221A";
Shusha.toPadma[Shusha.CIRCUMFLEX]    = "^";

Shusha.prefixList = new Object();
Shusha.prefixList[Shusha.vowelsn_I]  = true;

Shusha.suffixList = new Object();
Shusha.suffixList[Shusha.halffm_RA]  = true;

Shusha.redundantList = new Object();

Shusha.overloadList = new Object();
Shusha.overloadList[Shusha.vowel_A]     = true;
Shusha.overloadList[Shusha.vowel_AA]    = true;
Shusha.overloadList[Shusha.vowel_I]     = true;
Shusha.overloadList[Shusha.vowel_EE]    = true;
Shusha.overloadList[Shusha.consnt_KHA_2] = true;
Shusha.overloadList[Shusha.consnt_GA]   = true;
Shusha.overloadList[Shusha.consnt_JA]   = true;
Shusha.overloadList[Shusha.consnt_DDA]  = true;
Shusha.overloadList[Shusha.consnt_DDHA] = true;
Shusha.overloadList[Shusha.consnt_PHA]  = true;
Shusha.overloadList[Shusha.vowelsn_AA]  = true;
Shusha.overloadList[Shusha.halffm_KSH]  = true;
Shusha.overloadList[Shusha.halffm_KHA]  = true;
Shusha.overloadList[Shusha.halffm_GA]   = true;
Shusha.overloadList[Shusha.halffm_GHA]  = true;
Shusha.overloadList[Shusha.halffm_CA]   = true;
Shusha.overloadList[Shusha.halffm_JA]   = true;
Shusha.overloadList[Shusha.halffm_ZA]   = true;
Shusha.overloadList[Shusha.halffm_JHA]  = true;
Shusha.overloadList[Shusha.halffm_NYA]  = true;
Shusha.overloadList[Shusha.halffm_NNA]  = true;
Shusha.overloadList[Shusha.halffm_TT]   = true;
Shusha.overloadList[Shusha.halffm_THA]  = true;
Shusha.overloadList[Shusha.halffm_DHA]  = true;
Shusha.overloadList[Shusha.halffm_NA]   = true;
Shusha.overloadList[Shusha.halffm_BA]   = true;
Shusha.overloadList[Shusha.halffm_BHA]  = true;
Shusha.overloadList[Shusha.halffm_MA]   = true;
Shusha.overloadList[Shusha.halffm_YA]   = true;
Shusha.overloadList[Shusha.halffm_LA]   = true;
Shusha.overloadList[Shusha.halffm_VA]   = true;
Shusha.overloadList[Shusha.halffm_SHA_1] = true;
Shusha.overloadList[Shusha.halffm_SHA_2] = true;
Shusha.overloadList[Shusha.halffm_SHA_3] = true;
Shusha.overloadList[Shusha.halffm_SHR]  = true;
Shusha.overloadList[Shusha.halffm_SSA]  = true;
Shusha.overloadList[Shusha.halffm_SA]   = true;

//Shusha02
function Shusha02()
{
}

Shusha02.maxLookupLen = Shusha.maxLookupLen;
Shusha02.fontFace     = "Shusha02";
Shusha02.displayName  = "Shusha02";
Shusha02.script       = Shusha.script;
Shusha02.hasSuffixes  = Shusha.hasSuffixes;

Shusha02.lookup = function (str) 
{
    return Shusha.lookup(str);
}

Shusha02.isPrefixSymbol = function (str)
{
    return Shusha.isPrefixSymbol(str);
}

Shusha02.isSuffixSymbol = function (str)
{
    return Shusha.isSuffixSymbol(str);
}

Shusha02.isOverloaded = function (str)
{
    return Shusha.isOverloaded(str);
}

Shusha02.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return Shusha.handleTwoPartVowelSigns(sign1, sign2);
}

Shusha02.isRedundant = function (str)
{
    return Shusha.isRedundant(str);
}

//Shusha05
function Shusha05()
{
}

Shusha05.maxLookupLen = Shusha.maxLookupLen;
Shusha05.fontFace     = "Shusha05";
Shusha05.displayName  = "Shusha05";
Shusha05.script       = Shusha.script;
Shusha05.hasSuffixes  = Shusha.hasSuffixes;

Shusha05.lookup = function (str) 
{
    return Shusha.lookup(str);
}

Shusha05.isPrefixSymbol = function (str)
{
    return Shusha.isPrefixSymbol(str);
}

Shusha05.isSuffixSymbol = function (str)
{
    return Shusha.isSuffixSymbol(str);
}

Shusha05.isOverloaded = function (str)
{
    return Shusha.isOverloaded(str);
}

Shusha05.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return Shusha.handleTwoPartVowelSigns(sign1, sign2);
}

Shusha05.isRedundant = function (str)
{
    return Shusha.isRedundant(str);
}

