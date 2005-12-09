// $Id: TeluguLipi.js,v 1.8 2005/12/09 15:06:47 vnagarjuna Exp $ -->

//Copyright 2005 Nagarjuna Venna <vnagarjuna@yahoo.com>

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

function TeluguLipi()
{
}

//The interface every dynamic font encoding should implement
TeluguLipi.maxLookupLen = 2;
TeluguLipi.fontFace     = "Telugu Lipi";
TeluguLipi.displayName  = TeluguLipi.fontFace;
TeluguLipi.script       = Padma.script_TELUGU;

TeluguLipi.lookup = function (str) 
{
    return TeluguLipi.toPadma[str];
}

TeluguLipi.isPrefixSymbol = function (str)
{
    return false;
}

TeluguLipi.isOverloaded = function (str)
{
    return TeluguLipi.overloadList[str] != null;
}

TeluguLipi.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if (sign1 == Padma.vowelsn_E && sign2 == Padma.vowelsn_U)
        return Padma.vowelsn_O;
    if (sign1 == Padma.vowelsn_E && sign2 == Padma.vowelsn_AA)
        return Padma.vowelsn_OO;
    if (sign1 == Padma.vowelsn_I && sign2 == Padma.vowelsn_AA)
        return Padma.vowelsn_II;
    return sign1 + sign2;    
}

//Don't remove kommu if it is used with ya
TeluguLipi.preprocessMessage = function (input)
{
    var output = "", last = null;
    for(var i = 0; i < input.length; ++i) {
        var cur = input.charAt(i);
        if (!TeluguLipi.isRedundant(cur, last))
            output += last = cur;
    }
    return output;
}

//Implementation details start here

//Specials
TeluguLipi.candrabindu    = "\u00BF";
TeluguLipi.visarga        = "\u00D0";
TeluguLipi.virama         = "\u00F7";
TeluguLipi.anusvara       = "\u00CF";

//Vowels
TeluguLipi.vowel_A        = "\u20AC";
TeluguLipi.vowel_AA       = "\u0081";
TeluguLipi.vowel_I        = "\u201A";
TeluguLipi.vowel_II       = "\u0192";
TeluguLipi.vowel_U        = "\u201E";
TeluguLipi.vowel_UU       = "\u2026";
TeluguLipi.vowel_R        = "\u2020";
TeluguLipi.vowel_RR       = "\u00F8";
TeluguLipi.vowel_E        = "\u2021";
TeluguLipi.vowel_EE       = "\u02C6";
TeluguLipi.vowel_AI       = "\u2030";
TeluguLipi.vowel_O        = "\u0160";
TeluguLipi.vowel_OO       = "\u2039";
TeluguLipi.vowel_AU       = "\u0152";

//Consonants
TeluguLipi.consnt_KA      = "\u008D";
TeluguLipi.consnt_KHA     = "\u017D";
TeluguLipi.consnt_GA      = "\u008F";
TeluguLipi.consnt_GHA     = "\u0090";
TeluguLipi.consnt_NGA     = "\u00F9";

TeluguLipi.consnt_CA      = "\u00FA";
TeluguLipi.consnt_CHA     = "\u00FB";
TeluguLipi.consnt_JA      = "\u00FC";
TeluguLipi.consnt_JHA     = "\u2022";
TeluguLipi.consnt_NYA     = "\u2013";

TeluguLipi.consnt_TTA     = "\u00FD";
TeluguLipi.consnt_TTHA    = "\u02DC";
TeluguLipi.consnt_DDA     = "\u2122";
TeluguLipi.consnt_DDHA    = "\u0161";
TeluguLipi.consnt_NNA     = "\u203A";

TeluguLipi.consnt_TA      = "\u0153";
TeluguLipi.consnt_THA     = "\u009D";
TeluguLipi.consnt_DA      = "\u017E";
TeluguLipi.consnt_DHA     = "\u0178";
TeluguLipi.consnt_NA      = "\u00FE";

TeluguLipi.consnt_PA_1    = "\u00A1";
TeluguLipi.consnt_PA_2    = "\u00B1";
TeluguLipi.consnt_PHA_1   = "\u00A2";
TeluguLipi.consnt_PHA_2   = "\u00B2";
TeluguLipi.consnt_BA      = "\u00A3";
TeluguLipi.consnt_BHA     = "\u00A4";
TeluguLipi.consnt_MA      = "\u00A5";

TeluguLipi.consnt_YA      = "\u00A6\u00C1";
TeluguLipi.consnt_RA      = "\u00A7";
TeluguLipi.consnt_LA      = "\u00A8";
TeluguLipi.consnt_VA      = "\u00A9";
TeluguLipi.consnt_SHA     = "\u00AA";
TeluguLipi.consnt_SSA_1   = "\u00AB";
TeluguLipi.consnt_SSA_2   = "\u00B4";
TeluguLipi.consnt_SA_1    = "\u00AC";
TeluguLipi.consnt_SA_2    = "\u00B3";
TeluguLipi.consnt_HA      = "\u00FF";
TeluguLipi.consnt_LLA     = "\u00AE";
TeluguLipi.consnt_RRA     = "\u00B0";
TeluguLipi.conjct_KSHA    = "\u00AF";

//Gunintamulu
TeluguLipi.vowelsn_AA     = "\u00C2";
TeluguLipi.vowelsn_I      = "\u00C3";
TeluguLipi.vowelsn_II     = "\u00C4";
TeluguLipi.vowelsn_U_1    = "\u00C5";
TeluguLipi.vowelsn_U_2    = "\u00F4";
TeluguLipi.vowelsn_UU_1   = "\u00C6";
TeluguLipi.vowelsn_UU_2   = "\u00F5";
TeluguLipi.vowelsn_R      = "\u00C7";
TeluguLipi.vowelsn_RR     = "\u00C8";
TeluguLipi.vowelsn_E      = "\u00C9";
TeluguLipi.vowelsn_EE     = "\u00CA";
TeluguLipi.vowelsn_AI     = "\u00CB";
TeluguLipi.vowelsn_O      = "\u00CC";
TeluguLipi.vowelsn_OO     = "\u00CD";
TeluguLipi.vowelsn_AU     = "\u00CE";

//Special Combinations
TeluguLipi.combo_YI       = "\u00A6";
TeluguLipi.combo_YE       = "\u00A6\u00C9";
TeluguLipi.combo_YEE      = "\u00A6\u00CA";
TeluguLipi.combo_YAI      = "\u00A6\u00CB";
TeluguLipi.combo_YAU      = "\u00A6\u00CE";
TeluguLipi.combo_YPOLLU   = "\u00A6\u00F7";
TeluguLipi.combo_HAA      = "\u00F6";

//Vattulu
TeluguLipi.vattu_KA       = "\u00D1";
TeluguLipi.vattu_KHA      = "\u00D2";
TeluguLipi.vattu_GA       = "\u00D3";
TeluguLipi.vattu_GHA      = "\u00D4";
TeluguLipi.vattu_NGA      = "\u00D5";

TeluguLipi.vattu_CA       = "\u00D6";
TeluguLipi.vattu_CHA      = "\u00D7";
TeluguLipi.vattu_JA       = "\u00D8";
TeluguLipi.vattu_JHA      = "\u00D9";
TeluguLipi.vattu_NYA      = "\u00DA";

TeluguLipi.vattu_TTA      = "\u00DB";
TeluguLipi.vattu_TTHA     = "\u00DC";
TeluguLipi.vattu_DDA      = "\u00DD";
TeluguLipi.vattu_DDHA     = "\u00DE";
TeluguLipi.vattu_NNA      = "\u00DF";

TeluguLipi.vattu_TA       = "\u00E0";
TeluguLipi.vattu_THA      = "\u00E1";
TeluguLipi.vattu_DA       = "\u00E2";
TeluguLipi.vattu_DHA      = "\u00E3";
TeluguLipi.vattu_NA       = "\u00E4";

TeluguLipi.vattu_PA       = "\u00E5";
TeluguLipi.vattu_PHA      = "\u00E6";
TeluguLipi.vattu_BA       = "\u00E7";
TeluguLipi.vattu_BHA      = "\u00E8";
TeluguLipi.vattu_MA       = "\u00E9";

TeluguLipi.vattu_YA       = "\u00EA";
TeluguLipi.vattu_RA       = "\u00EB";
TeluguLipi.vattu_LA       = "\u00EC";
TeluguLipi.vattu_VA       = "\u00ED";
TeluguLipi.vattu_SHA      = "\u00EE";
TeluguLipi.vattu_SSA      = "\u00EF";
TeluguLipi.vattu_SA       = "\u00F0";
TeluguLipi.vattu_HA       = "\u00F1";
TeluguLipi.vattu_LLA      = "\u00F2";
TeluguLipi.vattu_RRA      = "\u00F3";

//Matches ASCII from 0x20-0x7F
//Does not match ASCII
TeluguLipi.extra_QTSINGLE_1 = "\u2018";
TeluguLipi.extra_QTSINGLE_2 = "\u2019";
TeluguLipi.extra_QTDOUBLE_1 = "\u201C";
TeluguLipi.extra_QTDOUBLE_2 = "\u201D";

//Telugu Digits
TeluguLipi.digit_ZERO     = "\u00BE";
TeluguLipi.digit_ONE      = "\u00B5";
TeluguLipi.digit_TWO      = "\u00B6";
TeluguLipi.digit_THREE    = "\u00B7";
TeluguLipi.digit_FOUR     = "\u00B8";
TeluguLipi.digit_FIVE     = "\u00B9";
TeluguLipi.digit_SIX      = "\u00BA";
TeluguLipi.digit_SEVEN    = "\u00BB";
TeluguLipi.digit_EIGHT    = "\u00BC";
TeluguLipi.digit_NINE     = "\u00BD";

//Kommu
TeluguLipi.misc_TICK      = "\u00C1";

TeluguLipi.toPadma = new Object();

TeluguLipi.toPadma[TeluguLipi.candrabindu] = Padma.candrabindu;
TeluguLipi.toPadma[TeluguLipi.visarga]  = Padma.visarga;
TeluguLipi.toPadma[TeluguLipi.virama]   = Padma.syllbreak;
TeluguLipi.toPadma[TeluguLipi.anusvara] = Padma.anusvara;

TeluguLipi.toPadma[TeluguLipi.vowel_A]  = Padma.vowel_A;
TeluguLipi.toPadma[TeluguLipi.vowel_AA] = Padma.vowel_AA;
TeluguLipi.toPadma[TeluguLipi.vowel_I]  = Padma.vowel_I;
TeluguLipi.toPadma[TeluguLipi.vowel_II] = Padma.vowel_II;
TeluguLipi.toPadma[TeluguLipi.vowel_U]  = Padma.vowel_U;
TeluguLipi.toPadma[TeluguLipi.vowel_UU] = Padma.vowel_UU;
TeluguLipi.toPadma[TeluguLipi.vowel_R]  = Padma.vowel_R;
TeluguLipi.toPadma[TeluguLipi.vowel_RR] = Padma.vowel_RR;
TeluguLipi.toPadma[TeluguLipi.vowel_E]  = Padma.vowel_E;
TeluguLipi.toPadma[TeluguLipi.vowel_EE] = Padma.vowel_EE;
TeluguLipi.toPadma[TeluguLipi.vowel_AI] = Padma.vowel_AI;
TeluguLipi.toPadma[TeluguLipi.vowel_O]  = Padma.vowel_O;
TeluguLipi.toPadma[TeluguLipi.vowel_OO] = Padma.vowel_OO;
TeluguLipi.toPadma[TeluguLipi.vowel_AU] = Padma.vowel_AU;

TeluguLipi.toPadma[TeluguLipi.consnt_KA]  = Padma.consnt_KA;
TeluguLipi.toPadma[TeluguLipi.consnt_KHA] = Padma.consnt_KHA;
TeluguLipi.toPadma[TeluguLipi.consnt_GA]  = Padma.consnt_GA;
TeluguLipi.toPadma[TeluguLipi.consnt_GHA] = Padma.consnt_GHA;
TeluguLipi.toPadma[TeluguLipi.consnt_NGA] = Padma.consnt_NGA;

TeluguLipi.toPadma[TeluguLipi.consnt_CA]  = Padma.consnt_CA;
TeluguLipi.toPadma[TeluguLipi.consnt_CHA] = Padma.consnt_CHA;
TeluguLipi.toPadma[TeluguLipi.consnt_JA]  = Padma.consnt_JA;
TeluguLipi.toPadma[TeluguLipi.consnt_JHA] = Padma.consnt_JHA;
TeluguLipi.toPadma[TeluguLipi.consnt_NYA] = Padma.consnt_NYA;

TeluguLipi.toPadma[TeluguLipi.consnt_TTA] = Padma.consnt_TTA;
TeluguLipi.toPadma[TeluguLipi.consnt_TTHA] = Padma.consnt_TTHA;
TeluguLipi.toPadma[TeluguLipi.consnt_DDA] = Padma.consnt_DDA;
TeluguLipi.toPadma[TeluguLipi.consnt_DDHA] = Padma.consnt_DDHA;
TeluguLipi.toPadma[TeluguLipi.consnt_NNA] = Padma.consnt_NNA;

TeluguLipi.toPadma[TeluguLipi.consnt_TA]  = Padma.consnt_TA;
TeluguLipi.toPadma[TeluguLipi.consnt_THA] = Padma.consnt_THA;
TeluguLipi.toPadma[TeluguLipi.consnt_DA]  = Padma.consnt_DA;
TeluguLipi.toPadma[TeluguLipi.consnt_DHA] = Padma.consnt_DHA;
TeluguLipi.toPadma[TeluguLipi.consnt_NA]  = Padma.consnt_NA;

TeluguLipi.toPadma[TeluguLipi.consnt_PA_1]  = Padma.consnt_PA;
TeluguLipi.toPadma[TeluguLipi.consnt_PA_2]  = Padma.consnt_PA;
TeluguLipi.toPadma[TeluguLipi.consnt_PHA_1] = Padma.consnt_PHA;
TeluguLipi.toPadma[TeluguLipi.consnt_PHA_2] = Padma.consnt_PHA;
TeluguLipi.toPadma[TeluguLipi.consnt_BA]    = Padma.consnt_BA;
TeluguLipi.toPadma[TeluguLipi.consnt_BHA]   = Padma.consnt_BHA;
TeluguLipi.toPadma[TeluguLipi.consnt_MA]    = Padma.consnt_MA;

TeluguLipi.toPadma[TeluguLipi.consnt_YA]  = Padma.consnt_YA;
TeluguLipi.toPadma[TeluguLipi.consnt_RA]  = Padma.consnt_RA;
TeluguLipi.toPadma[TeluguLipi.consnt_LA]  = Padma.consnt_LA;
TeluguLipi.toPadma[TeluguLipi.consnt_VA]  = Padma.consnt_VA;
TeluguLipi.toPadma[TeluguLipi.consnt_SHA] = Padma.consnt_SHA;
TeluguLipi.toPadma[TeluguLipi.consnt_SSA_1] = Padma.consnt_SSA;
TeluguLipi.toPadma[TeluguLipi.consnt_SSA_2] = Padma.consnt_SSA;
TeluguLipi.toPadma[TeluguLipi.consnt_SA_1] = Padma.consnt_SA;
TeluguLipi.toPadma[TeluguLipi.consnt_SA_2] = Padma.consnt_SA;
TeluguLipi.toPadma[TeluguLipi.consnt_HA] = Padma.consnt_HA;
TeluguLipi.toPadma[TeluguLipi.consnt_LLA] = Padma.consnt_LLA;
TeluguLipi.toPadma[TeluguLipi.consnt_RRA] = Padma.consnt_RRA;
TeluguLipi.toPadma[TeluguLipi.conjct_KSHA] = Padma.consnt_KA + Padma.vattu_SSA;

//Gunintamulu
TeluguLipi.toPadma[TeluguLipi.vowelsn_AA]  = Padma.vowelsn_AA;
TeluguLipi.toPadma[TeluguLipi.vowelsn_I]   = Padma.vowelsn_I;
TeluguLipi.toPadma[TeluguLipi.vowelsn_II]  = Padma.vowelsn_II;
TeluguLipi.toPadma[TeluguLipi.vowelsn_U_1] = Padma.vowelsn_U;
TeluguLipi.toPadma[TeluguLipi.vowelsn_U_2] = Padma.vowelsn_U;
TeluguLipi.toPadma[TeluguLipi.vowelsn_UU_1] = Padma.vowelsn_UU;
TeluguLipi.toPadma[TeluguLipi.vowelsn_UU_2] = Padma.vowelsn_UU;
TeluguLipi.toPadma[TeluguLipi.vowelsn_R]   = Padma.vowelsn_R;
TeluguLipi.toPadma[TeluguLipi.vowelsn_RR]  = Padma.vowelsn_RR;
TeluguLipi.toPadma[TeluguLipi.vowelsn_E]   = Padma.vowelsn_E;
TeluguLipi.toPadma[TeluguLipi.vowelsn_EE]  = Padma.vowelsn_EE;
TeluguLipi.toPadma[TeluguLipi.vowelsn_AI]  = Padma.vowelsn_AI;
TeluguLipi.toPadma[TeluguLipi.vowelsn_O]   = Padma.vowelsn_O;
TeluguLipi.toPadma[TeluguLipi.vowelsn_OO]  = Padma.vowelsn_OO;
TeluguLipi.toPadma[TeluguLipi.vowelsn_AU]  = Padma.vowelsn_AU;

//Specials
TeluguLipi.toPadma[TeluguLipi.combo_YI]  = Padma.consnt_YA + Padma.vowelsn_I;
TeluguLipi.toPadma[TeluguLipi.combo_YE]  = Padma.consnt_YA + Padma.vowelsn_E;
TeluguLipi.toPadma[TeluguLipi.combo_YEE] = Padma.consnt_YA + Padma.vowelsn_EE;
TeluguLipi.toPadma[TeluguLipi.combo_YAI] = Padma.consnt_YA + Padma.vowelsn_AI;
TeluguLipi.toPadma[TeluguLipi.combo_YAU] = Padma.consnt_YA + Padma.vowelsn_AU;
TeluguLipi.toPadma[TeluguLipi.combo_YPOLLU] = Padma.consnt_YA + Padma.syllbreak;
TeluguLipi.toPadma[TeluguLipi.combo_HAA] = Padma.consnt_HA + Padma.vowelsn_AA;

//Vattulu
TeluguLipi.toPadma[TeluguLipi.vattu_KA]      = Padma.vattu_KA;
TeluguLipi.toPadma[TeluguLipi.vattu_KHA]     = Padma.vattu_KHA;
TeluguLipi.toPadma[TeluguLipi.vattu_GA]      = Padma.vattu_GA;
TeluguLipi.toPadma[TeluguLipi.vattu_GHA]     = Padma.vattu_GHA;
TeluguLipi.toPadma[TeluguLipi.vattu_NGA]     = Padma.vattu_NGA;
TeluguLipi.toPadma[TeluguLipi.vattu_CA]      = Padma.vattu_CA;
TeluguLipi.toPadma[TeluguLipi.vattu_CHA]     = Padma.vattu_CHA;
TeluguLipi.toPadma[TeluguLipi.vattu_JA]      = Padma.vattu_JA;
TeluguLipi.toPadma[TeluguLipi.vattu_JHA]     = Padma.vattu_JHA;
TeluguLipi.toPadma[TeluguLipi.vattu_NYA]     = Padma.vattu_NYA;
TeluguLipi.toPadma[TeluguLipi.vattu_TTA]     = Padma.vattu_TTA;
TeluguLipi.toPadma[TeluguLipi.vattu_TTHA]    = Padma.vattu_TTHA;
TeluguLipi.toPadma[TeluguLipi.vattu_DDA]     = Padma.vattu_DDA;
TeluguLipi.toPadma[TeluguLipi.vattu_DDHA]    = Padma.vattu_DDHA;
TeluguLipi.toPadma[TeluguLipi.vattu_NNA]     = Padma.vattu_NNA;
TeluguLipi.toPadma[TeluguLipi.vattu_TA]      = Padma.vattu_TA;
TeluguLipi.toPadma[TeluguLipi.vattu_THA]     = Padma.vattu_THA;
TeluguLipi.toPadma[TeluguLipi.vattu_DA]      = Padma.vattu_DA;
TeluguLipi.toPadma[TeluguLipi.vattu_DHA]     = Padma.vattu_DHA;
TeluguLipi.toPadma[TeluguLipi.vattu_NA]      = Padma.vattu_NA;
TeluguLipi.toPadma[TeluguLipi.vattu_PA]      = Padma.vattu_PA;
TeluguLipi.toPadma[TeluguLipi.vattu_PHA]     = Padma.vattu_PHA;
TeluguLipi.toPadma[TeluguLipi.vattu_BA]      = Padma.vattu_BA;
TeluguLipi.toPadma[TeluguLipi.vattu_BHA]     = Padma.vattu_BHA;
TeluguLipi.toPadma[TeluguLipi.vattu_MA]      = Padma.vattu_MA;
TeluguLipi.toPadma[TeluguLipi.vattu_YA]      = Padma.vattu_YA;
TeluguLipi.toPadma[TeluguLipi.vattu_RA]      = Padma.vattu_RA;
TeluguLipi.toPadma[TeluguLipi.vattu_LA]      = Padma.vattu_LA;
TeluguLipi.toPadma[TeluguLipi.vattu_VA]      = Padma.vattu_VA;
TeluguLipi.toPadma[TeluguLipi.vattu_SHA]     = Padma.vattu_SHA;
TeluguLipi.toPadma[TeluguLipi.vattu_SSA]     = Padma.vattu_SSA;
TeluguLipi.toPadma[TeluguLipi.vattu_SA]      = Padma.vattu_SA;
TeluguLipi.toPadma[TeluguLipi.vattu_HA]      = Padma.vattu_HA;
TeluguLipi.toPadma[TeluguLipi.vattu_LLA]     = Padma.vattu_LLA;
TeluguLipi.toPadma[TeluguLipi.vattu_RRA]     = Padma.vattu_RRA;

//Digits
TeluguLipi.toPadma[TeluguLipi.digit_ZERO]    = Padma.digit_ZERO;
TeluguLipi.toPadma[TeluguLipi.digit_ONE]     = Padma.digit_ONE;
TeluguLipi.toPadma[TeluguLipi.digit_TWO]     = Padma.digit_TWO;
TeluguLipi.toPadma[TeluguLipi.digit_THREE]   = Padma.digit_THREE;
TeluguLipi.toPadma[TeluguLipi.digit_FOUR]    = Padma.digit_FOUR;
TeluguLipi.toPadma[TeluguLipi.digit_FIVE]    = Padma.digit_FIVE;
TeluguLipi.toPadma[TeluguLipi.digit_SIX]     = Padma.digit_SIX;
TeluguLipi.toPadma[TeluguLipi.digit_SEVEN]   = Padma.digit_SEVEN;
TeluguLipi.toPadma[TeluguLipi.digit_EIGHT]   = Padma.digit_EIGHT;
TeluguLipi.toPadma[TeluguLipi.digit_NINE]    = Padma.digit_NINE;

//Miscellaneous(where it doesn't match ASCII representation)
TeluguLipi.toPadma[TeluguLipi.extra_QTSINGLE_1] = "'";
TeluguLipi.toPadma[TeluguLipi.extra_QTSINGLE_2] = "'";
TeluguLipi.toPadma[TeluguLipi.extra_QTDOUBLE_1] = '"';
TeluguLipi.toPadma[TeluguLipi.extra_QTDOUBLE_2] = '"';

TeluguLipi.redundantList = new Object();
TeluguLipi.redundantList[TeluguLipi.misc_TICK] = true;

TeluguLipi.overloadList = new Object();
TeluguLipi.overloadList[TeluguLipi.combo_YI]   = true;

TeluguLipi.isRedundant = function (str, prev)
{
    if (str == TeluguLipi.misc_TICK && prev == TeluguLipi.combo_YI)
        return false;
    return TeluguLipi.redundantList[str] != null;
}
