// $Id: Vaartha.js,v 1.8 2005/12/09 15:06:47 vnagarjuna Exp $ -->

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

function Vaartha()
{
}

//The interface every dynamic font encoding should implement
Vaartha.maxLookupLen = 4;
Vaartha.fontFace     = "Vaartha";
Vaartha.displayName  = Vaartha.fontFace;
Vaartha.script       = Padma.script_TELUGU;

Vaartha.lookup = function (str) 
{
    return Vaartha.toPadma[str];
}

Vaartha.isPrefixSymbol = function (str)
{
    return Vaartha.prefixList[str] != null;
}

Vaartha.isOverloaded = function (str)
{
    return Vaartha.overloadList[str] != null;
}

Vaartha.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if (sign1 == Padma.vowelsn_E) {
        if (sign2 == Padma.vowelsn_AILEN)
            return Padma.vowelsn_AI;
    }
    return sign1 + sign2;
}

//1. Remove redundant symbols (ra and sunna are overloaded... argh!!!)
Vaartha.preprocessMessage = function (input)
{
    var output = "", last = null;
    //1.
    for(var i = 0; i < input.length; ++i) {
        var cur = input.charAt(i);
        if (!Vaartha.isRedundant(cur, last))
            output += last = cur;
    }
    return output;
}

//Implementation details start here

//left - 0x5D,
//0x6E, 0x78, 0x7C-0x81, 0x89-0x8A, 0x8D-0x90, 0x96, 0x98, 0x9A, 0x9D, 0x9E, 0xA6, 0xAD, 0xB2, 0xB3,
//0xB5, 0xB9, 0xBC-0XBE, 0xD0, 0xD7, 0xDD, 0xDE, 0xF0, 0xFD, 0xFE

//Specials
Vaartha.visarga        = "\u0038";
Vaartha.virama_1       = "\u0032";
Vaartha.virama_2       = "\u0052";
Vaartha.virama_3       = "\u0060";
Vaartha.virama_4       = "\u00F7";
Vaartha.anusvara       = "\u00A7";

//Vowels
Vaartha.vowel_A        = "\u0036";
Vaartha.vowel_AA       = "\u00BB";
Vaartha.vowel_I        = "\u201A";
Vaartha.vowel_II       = "\u0192";
Vaartha.vowel_U        = "\u201E";
Vaartha.vowel_UU       = "\u2026";
Vaartha.vowel_R        = "\u2020";
Vaartha.vowel_E        = "\u2021";
Vaartha.vowel_EE       = "\u02C6";
Vaartha.vowel_AI       = "\u0022";
Vaartha.vowel_O        = "\u0027";
Vaartha.vowel_OO       = "\u2039";
Vaartha.vowel_AU       = "\u0152";

//Consonants
Vaartha.consnt_KA      = "\u00B6";
Vaartha.consnt_KHA     = "\u0178";
Vaartha.consnt_GA      = "\u00B8";
Vaartha.consnt_GHA     = "\u00A1\u006C\u00C5";
Vaartha.consnt_NGA     = "\u201C";

Vaartha.consnt_CA      = "\u00FA";
Vaartha.consnt_CHA     = "\u00FA\u006C";
Vaartha.consnt_JA      = "\u005E";
//Vaartha.consnt_JHA     = "\u2014";
Vaartha.consnt_NYA     = "\u00F9";

Vaartha.consnt_TTA     = "\u0064";
Vaartha.consnt_TTHA    = "\u00A7\u0073";
Vaartha.consnt_DDA     = "\u201D";
Vaartha.consnt_DDHA    = "\u201D\u006C";
Vaartha.consnt_NNA     = "\u203A";

Vaartha.consnt_TA      = "\u0153";
Vaartha.consnt_THA     = "\u0034\u00BA";
Vaartha.consnt_DA      = "\u0034";
Vaartha.consnt_DHA_1   = "\u0034\u006C";
Vaartha.consnt_DHA_2   = "\u0034\u00BA";
Vaartha.consnt_NA      = "\u005B";

Vaartha.consnt_PA_1    = "\u00A1";
Vaartha.consnt_PA_2    = "\u00B1";
Vaartha.consnt_PHA_1   = "\u00A1\u006C";
Vaartha.consnt_PHA_2   = "\u00B1\u006C";
Vaartha.consnt_BA      = "\u00A3";
Vaartha.consnt_BHA     = "\u00A3\u006C";
Vaartha.consnt_MA      = "\u00A5\u00C5";

Vaartha.consnt_YA      = "\u0031\u00C5";
Vaartha.consnt_RA      = "\u00A7\u0075";
Vaartha.consnt_LA      = "\u0051";
Vaartha.consnt_VA      = "\u00A5";
Vaartha.consnt_SHA     = "\u00AA";
Vaartha.consnt_SSA_1   = "\u00AB";
Vaartha.consnt_SSA_2   = "\u00B4";
Vaartha.consnt_SA_1    = "\u0033";
Vaartha.consnt_SA_2    = "\u00AC";
Vaartha.consnt_HA      = "\u0061";
Vaartha.consnt_LLA     = "\u00AE";
Vaartha.consnt_RRA     = "\u00B0";

//Gunintamulu
Vaartha.vowelsn_AA_1   = "\u0053";
Vaartha.vowelsn_AA_2   = "\u0056";
Vaartha.vowelsn_AA_3   = "\u00C2";
Vaartha.vowelsn_I_1    = "\u0057";
Vaartha.vowelsn_I_2    = "\u0065";
Vaartha.vowelsn_I_3    = "\u00C3";
Vaartha.vowelsn_II_1   = "\u0058";
Vaartha.vowelsn_II_2   = "\u0066";
Vaartha.vowelsn_II_3   = "\u00C4";
Vaartha.vowelsn_U_1    = "\u0037";
Vaartha.vowelsn_U_2    = "\u00C5";
Vaartha.vowelsn_U_3    = "\u0076";
Vaartha.vowelsn_U_4    = "\u00F4";
Vaartha.vowelsn_UU_1   = "\u0077";
Vaartha.vowelsn_UU_2   = "\u00C6";
Vaartha.vowelsn_UU_3   = "\u00CB";
Vaartha.vowelsn_UU_4   = "\u00F5";
Vaartha.vowelsn_R      = "\u00C7";
Vaartha.vowelsn_RR     = "\u00C8";
Vaartha.vowelsn_E_1    = "\u0059";
Vaartha.vowelsn_E_2    = "\u0067";
Vaartha.vowelsn_E_3    = "\u0078";
Vaartha.vowelsn_E_4    = "\u00C9";
Vaartha.vowelsn_EE_1   = "\u005A";
Vaartha.vowelsn_EE_2   = "\u0068";
Vaartha.vowelsn_EE_3   = "\u0079";
Vaartha.vowelsn_EE_4   = "\u00CA";
Vaartha.vowelsn_O_1    = "\u0054";
Vaartha.vowelsn_O_2    = "\u00CC";
Vaartha.vowelsn_OO_1   = "\u0055";
Vaartha.vowelsn_OO_2   = "\u00CD";
Vaartha.vowelsn_AU_1   = "\u0063";
Vaartha.vowelsn_AU_2   = "\u0074";
Vaartha.vowelsn_AU_3   = "\u00CE";
Vaartha.vowelsn_AILEN_1 = "\u0069";
Vaartha.vowelsn_AILEN_2 = "\u0072";

//Special Combinations
Vaartha.combo_KHI      = "\u0023";
Vaartha.combo_KHII     = "\u0042";
Vaartha.combo_GI       = "\u00FF";
Vaartha.combo_GII      = "\u0035";
Vaartha.combo_GHAA     = "\u00A1\u006C\u00C6";
Vaartha.combo_GHI      = "\u00A1\u006C\u0057\u00C5";
Vaartha.combo_GHU      = "\u00A1\u006C\u004D";

Vaartha.combo_CI       = "\u0024";
Vaartha.combo_CII      = "\u0043";
Vaartha.combo_CHI      = "\u0024\u006C";
Vaartha.combo_CHII     = "\u0043\u006C";
Vaartha.combo_JI       = "\u0025";
Vaartha.combo_JII      = "\u0044";
Vaartha.combo_JU       = "\u004F";
Vaartha.combo_JUU      = "\u0050";

Vaartha.combo_TTHI     = "\u0062\u0073";

Vaartha.combo_TI       = "\u0026";
Vaartha.combo_TII      = "\u0045";
Vaartha.combo_DI       = "\u2122";
Vaartha.combo_DII      = "\u0030";
Vaartha.combo_DHI_1    = "\u2122\u006C";
Vaartha.combo_DHI_2    = "\u2122\u00BA";
Vaartha.combo_DHII_1   = "\u0030\u006C";
Vaartha.combo_DHII_2   = "\u0030\u00BA";
Vaartha.combo_NI       = "\u006D";
Vaartha.combo_NII      = "\u0046";

Vaartha.combo_PHE      = "\u00A1\u0059\u006C";
Vaartha.combo_PHEE     = "\u00A1\u005A\u006C";
Vaartha.combo_BI       = "\u002A";
Vaartha.combo_BII      = "\u0047";
Vaartha.combo_BHI      = "\u002A\u006C";
Vaartha.combo_BHII     = "\u0047\u006C";
Vaartha.combo_MAA      = "\u00A5\u00C6";
Vaartha.combo_MI       = "\u002B\u00C5";
Vaartha.combo_MII      = "\u0048\u00C5";
Vaartha.combo_MU       = "\u00A5\u004D";
Vaartha.combo_MUU      = "\u00A5\u004E";
Vaartha.combo_ME       = "\u00A5\u00C9\u00C5";
Vaartha.combo_MEE      = "\u00A5\u00CA\u00C5";
Vaartha.combo_MO       = "\u00A5\u00C9\u004D";
Vaartha.combo_MOO      = "\u00A5\u00C9\u00C6";
Vaartha.combo_MPOLLU   = "\u00A5\u0052\u00C5";

Vaartha.combo_YAA      = "\u0031\u00C6";
Vaartha.combo_YI       = "\u00A7\u004D";
Vaartha.combo_YII      = "\u00A7\u004E";
Vaartha.combo_YU       = "\u0031\u004D";
Vaartha.combo_YUU      = "\u0031\u004E";
Vaartha.combo_YE       = "\u0031\u00C9\u00C5";
Vaartha.combo_YEE      = "\u0031\u00CA\u00C5";
Vaartha.combo_YAI      = "\u0031\u00C9\u0072\u00C5";
Vaartha.combo_YOO      = "\u0031\u00C9\u00C6";
Vaartha.combo_YPOLLU   = "\u0031\u0052\u00C5";
Vaartha.combo_RAA      = "\u00A7\u0056";
Vaartha.combo_RI       = "\u0062";
Vaartha.combo_RII      = "\u00A4";
Vaartha.combo_RU       = "\u00A7\u00C5";
Vaartha.combo_RE       = "\u00A7\u00C9";
Vaartha.combo_REE      = "\u00A7\u00CA";
Vaartha.combo_RO       = "\u00A7\u00CC";
Vaartha.combo_ROO      = "\u00A7\u00CD";
Vaartha.combo_RAU      = "\u00A7\u0074";
Vaartha.combo_RPOLLU   = "\u00A7\u0052";
Vaartha.combo_LI       = "\u003C";
Vaartha.combo_LII      = "\u0049";
Vaartha.combo_VI       = "\u002B";
Vaartha.combo_VII      = "\u0048";
Vaartha.combo_SHI      = "\u003E";
Vaartha.combo_SHII     = "\u004A";
Vaartha.combo_LLI      = "\u0040";
Vaartha.combo_LLII     = "\u004B";
Vaartha.combo_HAA      = "\u00F6";

//Vattulu
Vaartha.vattu_KA       = "\u00D1";
Vaartha.vattu_KHA      = "\u00D2";
Vaartha.vattu_GA       = "\u00D3";
Vaartha.vattu_GHA      = "\u00D4";
Vaartha.vattu_NGA      = "\u00D5";

Vaartha.vattu_CA       = "\u00D6";
Vaartha.vattu_CHA      = "\u0039";
Vaartha.vattu_JA       = "\u00D8";
Vaartha.vattu_JHA      = "\u00D9";
Vaartha.vattu_NYA      = "\u00DA";

Vaartha.vattu_TTA      = "\u00DB";
Vaartha.vattu_TTHA     = "\u00DC";
Vaartha.vattu_DDA      = "\u003A";
Vaartha.vattu_NNA      = "\u00DF";

Vaartha.vattu_TA       = "\u00E0";
Vaartha.vattu_THA      = "\u00E1";
Vaartha.vattu_DA       = "\u00E2";
Vaartha.vattu_DHA      = "\u00E3";
Vaartha.vattu_NA       = "\u00E4";

Vaartha.vattu_PA       = "\u00E5";
Vaartha.vattu_PHA      = "\u00E6";
Vaartha.vattu_BA       = "\u00E7";
Vaartha.vattu_BHA      = "\u00E8";
Vaartha.vattu_MA       = "\u00E9";

Vaartha.vattu_YA       = "\u00EA";
Vaartha.vattu_RA       = "\u00EB";
Vaartha.vattu_LA       = "\u00EC";
Vaartha.vattu_VA       = "\u00ED";
Vaartha.vattu_SHA      = "\u00EE";
Vaartha.vattu_SSA_1    = "\u00AF";
Vaartha.vattu_SSA_2    = "\u00EF";
Vaartha.vattu_SA       = "\u005C";
Vaartha.vattu_HA       = "\u00F1";
Vaartha.vattu_LLA      = "\u00F2";
Vaartha.vattu_RRA      = "\u00F3";

//Conjuncts
Vaartha.vattu_PU       = "\u005F";
Vaartha.vattu_TTRA     = "\u006F";
Vaartha.vattu_TRA      = "\u0070";

//Matches ASCII
Vaartha.EXCLAM         = "\u0021";
Vaartha.PARENLEFT      = "\u0028";
Vaartha.PARENRIGT      = "\u0029";
Vaartha.COMMA          = "\u002C";
Vaartha.HYPHEN         = "\u002D";
Vaartha.PERIOD         = "\u002E";
Vaartha.SLASH          = "\u002F";
Vaartha.SEMICOLON      = "\u003B";
Vaartha.EQUALS         = "\u003D";
Vaartha.QUESTION       = "\u003F";

Vaartha.digit_ZERO     = "\u00A8";
Vaartha.digit_ONE      = "\u007A";
Vaartha.digit_TWO      = "\u2014";
Vaartha.digit_THREE    = "\u00A2";
Vaartha.digit_FOUR     = "\u00A9";
Vaartha.digit_FIVE     = "\u00B7";
Vaartha.digit_SIX      = "\u00BF";
Vaartha.digit_SEVEN    = "\u00F8";
Vaartha.digit_EIGHT    = "\u00FB";
Vaartha.digit_NINE     = "\u00FC";

//Does not match ASCII
Vaartha.COLON          = "\u00C0";
Vaartha.QTSINGLE       = "\u2018";
Vaartha.extra_QTSINGLE = "\u2019";
Vaartha.extra_HYPHEN   = "\u00AD";

//Kommu
Vaartha.misc_TICK_1    = "\u0041";
Vaartha.misc_TICK_2    = "\u004C";
Vaartha.misc_TICK_3    = "\u006A";
Vaartha.misc_TICK_4    = "\u0075";
Vaartha.misc_TICK_5    = "\u00C1";

Vaartha.misc_UNKNOWN_1 = "\u00CF";

//not sure where they are used
Vaartha.misc_VATTU_1   = "\u006B";
Vaartha.misc_VATTU_2   = "\u0071";
Vaartha.arasunna       = "\u2022";

Vaartha.toPadma = new Object();

Vaartha.toPadma[Vaartha.visarga]  = Padma.visarga;
Vaartha.toPadma[Vaartha.virama_1] = Padma.syllbreak;
Vaartha.toPadma[Vaartha.virama_2] = Padma.syllbreak;
Vaartha.toPadma[Vaartha.virama_3] = Padma.syllbreak;
Vaartha.toPadma[Vaartha.virama_4] = Padma.syllbreak;
Vaartha.toPadma[Vaartha.anusvara] = Padma.anusvara;

Vaartha.toPadma[Vaartha.vowel_A]  = Padma.vowel_A;
Vaartha.toPadma[Vaartha.vowel_AA] = Padma.vowel_AA;
Vaartha.toPadma[Vaartha.vowel_I]  = Padma.vowel_I;
Vaartha.toPadma[Vaartha.vowel_II] = Padma.vowel_II;
Vaartha.toPadma[Vaartha.vowel_U]  = Padma.vowel_U;
Vaartha.toPadma[Vaartha.vowel_UU] = Padma.vowel_UU;
Vaartha.toPadma[Vaartha.vowel_R]  = Padma.vowel_R;
Vaartha.toPadma[Vaartha.vowel_E]  = Padma.vowel_E;
Vaartha.toPadma[Vaartha.vowel_EE] = Padma.vowel_EE;
Vaartha.toPadma[Vaartha.vowel_AI] = Padma.vowel_AI;
Vaartha.toPadma[Vaartha.vowel_O]  = Padma.vowel_O;
Vaartha.toPadma[Vaartha.vowel_OO] = Padma.vowel_OO;
Vaartha.toPadma[Vaartha.vowel_AU] = Padma.vowel_AU;

Vaartha.toPadma[Vaartha.consnt_KA]  = Padma.consnt_KA;
Vaartha.toPadma[Vaartha.consnt_KHA] = Padma.consnt_KHA;
Vaartha.toPadma[Vaartha.consnt_GA]  = Padma.consnt_GA;
Vaartha.toPadma[Vaartha.consnt_GHA] = Padma.consnt_GHA;
Vaartha.toPadma[Vaartha.consnt_NGA] = Padma.consnt_NGA;

Vaartha.toPadma[Vaartha.consnt_CA]  = Padma.consnt_CA;
Vaartha.toPadma[Vaartha.consnt_CHA] = Padma.consnt_CHA;
Vaartha.toPadma[Vaartha.consnt_JA]  = Padma.consnt_JA;
//Vaartha.toPadma[Vaartha.consnt_JHA] = Padma.consnt_JHA;
Vaartha.toPadma[Vaartha.consnt_NYA] = Padma.consnt_NYA;

Vaartha.toPadma[Vaartha.consnt_TTA]  = Padma.consnt_TTA;
Vaartha.toPadma[Vaartha.consnt_TTHA] = Padma.consnt_TTHA;
Vaartha.toPadma[Vaartha.consnt_DDA]  = Padma.consnt_DDA;
Vaartha.toPadma[Vaartha.consnt_DDHA] = Padma.consnt_DDHA;
Vaartha.toPadma[Vaartha.consnt_NNA]  = Padma.consnt_NNA;

Vaartha.toPadma[Vaartha.consnt_TA]  = Padma.consnt_TA;
Vaartha.toPadma[Vaartha.consnt_THA] = Padma.consnt_THA;
Vaartha.toPadma[Vaartha.consnt_DA]  = Padma.consnt_DA;
Vaartha.toPadma[Vaartha.consnt_DHA_1] = Padma.consnt_DHA;
Vaartha.toPadma[Vaartha.consnt_DHA_2] = Padma.consnt_DHA;
Vaartha.toPadma[Vaartha.consnt_NA]  = Padma.consnt_NA;

Vaartha.toPadma[Vaartha.consnt_PA_1]  = Padma.consnt_PA;
Vaartha.toPadma[Vaartha.consnt_PA_2]  = Padma.consnt_PA;
Vaartha.toPadma[Vaartha.consnt_PHA_1] = Padma.consnt_PHA;
Vaartha.toPadma[Vaartha.consnt_PHA_2] = Padma.consnt_PHA;
Vaartha.toPadma[Vaartha.consnt_BA]    = Padma.consnt_BA;
Vaartha.toPadma[Vaartha.consnt_BHA]   = Padma.consnt_BHA;
Vaartha.toPadma[Vaartha.consnt_MA]    = Padma.consnt_MA;

Vaartha.toPadma[Vaartha.consnt_YA]    = Padma.consnt_YA;
Vaartha.toPadma[Vaartha.consnt_RA]    = Padma.consnt_RA;
Vaartha.toPadma[Vaartha.consnt_LA]    = Padma.consnt_LA;
Vaartha.toPadma[Vaartha.consnt_VA]    = Padma.consnt_VA;
Vaartha.toPadma[Vaartha.consnt_SHA]   = Padma.consnt_SHA;
Vaartha.toPadma[Vaartha.consnt_SSA_1] = Padma.consnt_SSA;
Vaartha.toPadma[Vaartha.consnt_SSA_2] = Padma.consnt_SSA;
Vaartha.toPadma[Vaartha.consnt_SA_1]  = Padma.consnt_SA;
Vaartha.toPadma[Vaartha.consnt_SA_2]  = Padma.consnt_SA;
Vaartha.toPadma[Vaartha.consnt_HA] = Padma.consnt_HA;
Vaartha.toPadma[Vaartha.consnt_LLA] = Padma.consnt_LLA;
Vaartha.toPadma[Vaartha.consnt_RRA] = Padma.consnt_RRA;

//Gunintamulu
Vaartha.toPadma[Vaartha.vowelsn_AA_1]  = Padma.vowelsn_AA;
Vaartha.toPadma[Vaartha.vowelsn_AA_2]  = Padma.vowelsn_AA;
Vaartha.toPadma[Vaartha.vowelsn_AA_3]  = Padma.vowelsn_AA;
Vaartha.toPadma[Vaartha.vowelsn_I_1]   = Padma.vowelsn_I;
Vaartha.toPadma[Vaartha.vowelsn_I_2]   = Padma.vowelsn_I;
Vaartha.toPadma[Vaartha.vowelsn_I_3]   = Padma.vowelsn_I;
Vaartha.toPadma[Vaartha.vowelsn_II_1]  = Padma.vowelsn_II;
Vaartha.toPadma[Vaartha.vowelsn_II_2]  = Padma.vowelsn_II;
Vaartha.toPadma[Vaartha.vowelsn_II_3]  = Padma.vowelsn_II;
Vaartha.toPadma[Vaartha.vowelsn_U_1]   = Padma.vowelsn_U;
Vaartha.toPadma[Vaartha.vowelsn_U_2]   = Padma.vowelsn_U;
Vaartha.toPadma[Vaartha.vowelsn_U_3]   = Padma.vowelsn_U;
Vaartha.toPadma[Vaartha.vowelsn_U_4]   = Padma.vowelsn_U;
Vaartha.toPadma[Vaartha.vowelsn_UU_1]  = Padma.vowelsn_UU;
Vaartha.toPadma[Vaartha.vowelsn_UU_2]  = Padma.vowelsn_UU;
Vaartha.toPadma[Vaartha.vowelsn_UU_3]  = Padma.vowelsn_UU;
Vaartha.toPadma[Vaartha.vowelsn_UU_4]  = Padma.vowelsn_UU;
Vaartha.toPadma[Vaartha.vowelsn_R]     = Padma.vowelsn_R;
Vaartha.toPadma[Vaartha.vowelsn_E_1]   = Padma.vowelsn_E;
Vaartha.toPadma[Vaartha.vowelsn_E_2]   = Padma.vowelsn_E;
Vaartha.toPadma[Vaartha.vowelsn_E_3]   = Padma.vowelsn_E;
Vaartha.toPadma[Vaartha.vowelsn_E_4]   = Padma.vowelsn_E;
Vaartha.toPadma[Vaartha.vowelsn_EE_1]  = Padma.vowelsn_EE;
Vaartha.toPadma[Vaartha.vowelsn_EE_2]  = Padma.vowelsn_EE;
Vaartha.toPadma[Vaartha.vowelsn_EE_3]  = Padma.vowelsn_EE;
Vaartha.toPadma[Vaartha.vowelsn_EE_4]  = Padma.vowelsn_EE;
Vaartha.toPadma[Vaartha.vowelsn_O_1]   = Padma.vowelsn_O;
Vaartha.toPadma[Vaartha.vowelsn_O_2]   = Padma.vowelsn_O;
Vaartha.toPadma[Vaartha.vowelsn_OO_1]  = Padma.vowelsn_OO;
Vaartha.toPadma[Vaartha.vowelsn_OO_2]  = Padma.vowelsn_OO;
Vaartha.toPadma[Vaartha.vowelsn_AU_1]  = Padma.vowelsn_AU;
Vaartha.toPadma[Vaartha.vowelsn_AU_2]  = Padma.vowelsn_AU;
Vaartha.toPadma[Vaartha.vowelsn_AU_3]  = Padma.vowelsn_AU;
Vaartha.toPadma[Vaartha.vowelsn_AILEN_1] = Padma.vowelsn_AILEN;
Vaartha.toPadma[Vaartha.vowelsn_AILEN_2] = Padma.vowelsn_AILEN;

//Special Combinations
Vaartha.toPadma[Vaartha.combo_KHI]     = Padma.consnt_KHA + Padma.vowelsn_I;
Vaartha.toPadma[Vaartha.combo_KHII]    = Padma.consnt_KHA + Padma.vowelsn_II;
Vaartha.toPadma[Vaartha.combo_GI]      = Padma.consnt_GA + Padma.vowelsn_I;
Vaartha.toPadma[Vaartha.combo_GII]     = Padma.consnt_GA + Padma.vowelsn_II;
Vaartha.toPadma[Vaartha.combo_GHAA]    = Padma.consnt_GHA + Padma.vowelsn_AA;
Vaartha.toPadma[Vaartha.combo_GHI]     = Padma.consnt_GHA + Padma.vowelsn_I;
Vaartha.toPadma[Vaartha.combo_GHU]     = Padma.consnt_GHA + Padma.vowelsn_U;

Vaartha.toPadma[Vaartha.combo_CI]      = Padma.consnt_CA + Padma.vowelsn_I;
Vaartha.toPadma[Vaartha.combo_CII]     = Padma.consnt_CA + Padma.vowelsn_II;
Vaartha.toPadma[Vaartha.combo_CHI]     = Padma.consnt_CHA + Padma.vowelsn_I;
Vaartha.toPadma[Vaartha.combo_CHII]    = Padma.consnt_CHA + Padma.vowelsn_II;
Vaartha.toPadma[Vaartha.combo_JI]      = Padma.consnt_JA + Padma.vowelsn_I;
Vaartha.toPadma[Vaartha.combo_JII]     = Padma.consnt_JA + Padma.vowelsn_II;
Vaartha.toPadma[Vaartha.combo_JU]      = Padma.consnt_JA + Padma.vowelsn_U;
Vaartha.toPadma[Vaartha.combo_JUU]     = Padma.consnt_JA + Padma.vowelsn_UU;

Vaartha.toPadma[Vaartha.combo_TTHI]    = Padma.consnt_TTHA + Padma.vowelsn_I;

Vaartha.toPadma[Vaartha.combo_TI]      = Padma.consnt_TA + Padma.vowelsn_I;
Vaartha.toPadma[Vaartha.combo_TII]     = Padma.consnt_TA + Padma.vowelsn_II;
Vaartha.toPadma[Vaartha.combo_DI]      = Padma.consnt_DA + Padma.vowelsn_I;
Vaartha.toPadma[Vaartha.combo_DII]     = Padma.consnt_DA + Padma.vowelsn_II;
Vaartha.toPadma[Vaartha.combo_DHI_1]   = Padma.consnt_DHA + Padma.vowelsn_I;
Vaartha.toPadma[Vaartha.combo_DHI_2]   = Padma.consnt_DHA + Padma.vowelsn_I;
Vaartha.toPadma[Vaartha.combo_DHII_1]  = Padma.consnt_DHA + Padma.vowelsn_II;
Vaartha.toPadma[Vaartha.combo_DHII_2]  = Padma.consnt_DHA + Padma.vowelsn_II;
Vaartha.toPadma[Vaartha.combo_NI]      = Padma.consnt_NA + Padma.vowelsn_I;
Vaartha.toPadma[Vaartha.combo_NII]     = Padma.consnt_NA + Padma.vowelsn_II;

Vaartha.toPadma[Vaartha.combo_PHE]     = Padma.consnt_PHA + Padma.vowelsn_E;
Vaartha.toPadma[Vaartha.combo_PHEE]    = Padma.consnt_PHA + Padma.vowelsn_EE;
Vaartha.toPadma[Vaartha.combo_BI]      = Padma.consnt_BA + Padma.vowelsn_I;
Vaartha.toPadma[Vaartha.combo_BII]     = Padma.consnt_BA + Padma.vowelsn_II;
Vaartha.toPadma[Vaartha.combo_BHI]     = Padma.consnt_BHA + Padma.vowelsn_I;
Vaartha.toPadma[Vaartha.combo_BHII]    = Padma.consnt_BHA + Padma.vowelsn_II;
Vaartha.toPadma[Vaartha.combo_MAA]     = Padma.consnt_MA + Padma.vowelsn_AA;
Vaartha.toPadma[Vaartha.combo_MI]      = Padma.consnt_MA + Padma.vowelsn_I;
Vaartha.toPadma[Vaartha.combo_MII]     = Padma.consnt_MA + Padma.vowelsn_II;
Vaartha.toPadma[Vaartha.combo_MU]      = Padma.consnt_MA + Padma.vowelsn_U;
Vaartha.toPadma[Vaartha.combo_MUU]     = Padma.consnt_MA + Padma.vowelsn_UU;
Vaartha.toPadma[Vaartha.combo_ME]      = Padma.consnt_MA + Padma.vowelsn_E;
Vaartha.toPadma[Vaartha.combo_MEE]     = Padma.consnt_MA + Padma.vowelsn_EE;
Vaartha.toPadma[Vaartha.combo_MO]      = Padma.consnt_MA + Padma.vowelsn_O;
Vaartha.toPadma[Vaartha.combo_MOO]     = Padma.consnt_MA + Padma.vowelsn_OO;
Vaartha.toPadma[Vaartha.combo_MPOLLU]  = Padma.consnt_MA + Padma.syllbreak;

Vaartha.toPadma[Vaartha.combo_YAA]     = Padma.consnt_YA + Padma.vowelsn_AA;
Vaartha.toPadma[Vaartha.combo_YI]      = Padma.consnt_YA + Padma.vowelsn_I;
Vaartha.toPadma[Vaartha.combo_YII]     = Padma.consnt_YA + Padma.vowelsn_II;
Vaartha.toPadma[Vaartha.combo_YU]      = Padma.consnt_YA + Padma.vowelsn_U;
Vaartha.toPadma[Vaartha.combo_YUU]     = Padma.consnt_YA + Padma.vowelsn_UU;
Vaartha.toPadma[Vaartha.combo_YE]      = Padma.consnt_YA + Padma.vowelsn_E;
Vaartha.toPadma[Vaartha.combo_YEE]     = Padma.consnt_YA + Padma.vowelsn_EE;
Vaartha.toPadma[Vaartha.combo_YAI]     = Padma.consnt_YA + Padma.vowelsn_AI;
Vaartha.toPadma[Vaartha.combo_YOO]     = Padma.consnt_YA + Padma.vowelsn_OO;
Vaartha.toPadma[Vaartha.combo_YPOLLU]  = Padma.consnt_YA + Padma.syllbreak;
Vaartha.toPadma[Vaartha.combo_RAA]     = Padma.consnt_RA + Padma.vowelsn_AA;
Vaartha.toPadma[Vaartha.combo_RI]      = Padma.consnt_RA + Padma.vowelsn_I;
Vaartha.toPadma[Vaartha.combo_RII]     = Padma.consnt_RA + Padma.vowelsn_II;
Vaartha.toPadma[Vaartha.combo_RU]      = Padma.consnt_RA + Padma.vowelsn_U;
Vaartha.toPadma[Vaartha.combo_RE]      = Padma.consnt_RA + Padma.vowelsn_E;
Vaartha.toPadma[Vaartha.combo_REE]     = Padma.consnt_RA + Padma.vowelsn_EE;
Vaartha.toPadma[Vaartha.combo_RO]      = Padma.consnt_RA + Padma.vowelsn_O;
Vaartha.toPadma[Vaartha.combo_ROO]     = Padma.consnt_RA + Padma.vowelsn_OO;
Vaartha.toPadma[Vaartha.combo_RAU]     = Padma.consnt_RA + Padma.vowelsn_AU;
Vaartha.toPadma[Vaartha.combo_RPOLLU]  = Padma.consnt_RA + Padma.syllbreak;
Vaartha.toPadma[Vaartha.combo_LI]      = Padma.consnt_LA + Padma.vowelsn_I;
Vaartha.toPadma[Vaartha.combo_LII]     = Padma.consnt_LA + Padma.vowelsn_II;
Vaartha.toPadma[Vaartha.combo_VI]      = Padma.consnt_VA + Padma.vowelsn_I;
Vaartha.toPadma[Vaartha.combo_VII]     = Padma.consnt_VA + Padma.vowelsn_II;
Vaartha.toPadma[Vaartha.combo_SHI]     = Padma.consnt_SHA + Padma.vowelsn_I;
Vaartha.toPadma[Vaartha.combo_SHII]    = Padma.consnt_SHA + Padma.vowelsn_II;
Vaartha.toPadma[Vaartha.combo_LLI]     = Padma.consnt_LLA + Padma.vowelsn_I;
Vaartha.toPadma[Vaartha.combo_LLII]    = Padma.consnt_LLA + Padma.vowelsn_II;
Vaartha.toPadma[Vaartha.combo_HAA]     = Padma.consnt_HA + Padma.vowelsn_AA;

//Vattulu
Vaartha.toPadma[Vaartha.vattu_KA]      = Padma.vattu_KA;
Vaartha.toPadma[Vaartha.vattu_KHA]     = Padma.vattu_KHA;
Vaartha.toPadma[Vaartha.vattu_GA]      = Padma.vattu_GA;
Vaartha.toPadma[Vaartha.vattu_GHA]     = Padma.vattu_GHA;
Vaartha.toPadma[Vaartha.vattu_NGA]     = Padma.vattu_NGA;
Vaartha.toPadma[Vaartha.vattu_CA]      = Padma.vattu_CA;
Vaartha.toPadma[Vaartha.vattu_CHA]     = Padma.vattu_CHA;
Vaartha.toPadma[Vaartha.vattu_JA]      = Padma.vattu_JA;
Vaartha.toPadma[Vaartha.vattu_JHA]     = Padma.vattu_JHA;
Vaartha.toPadma[Vaartha.vattu_NYA]     = Padma.vattu_NYA;
Vaartha.toPadma[Vaartha.vattu_TTA]     = Padma.vattu_TTA;
Vaartha.toPadma[Vaartha.vattu_TTHA]    = Padma.vattu_TTHA;
Vaartha.toPadma[Vaartha.vattu_DDA]     = Padma.vattu_DDA;
Vaartha.toPadma[Vaartha.vattu_NNA]     = Padma.vattu_NNA;
Vaartha.toPadma[Vaartha.vattu_TA]      = Padma.vattu_TA;
Vaartha.toPadma[Vaartha.vattu_THA]     = Padma.vattu_THA;
Vaartha.toPadma[Vaartha.vattu_DA]      = Padma.vattu_DA;
Vaartha.toPadma[Vaartha.vattu_DHA]     = Padma.vattu_DHA;
Vaartha.toPadma[Vaartha.vattu_NA]      = Padma.vattu_NA;
Vaartha.toPadma[Vaartha.vattu_PA]      = Padma.vattu_PA;
Vaartha.toPadma[Vaartha.vattu_PHA]     = Padma.vattu_PHA;
Vaartha.toPadma[Vaartha.vattu_BA]      = Padma.vattu_BA;
Vaartha.toPadma[Vaartha.vattu_BHA]     = Padma.vattu_BHA;
Vaartha.toPadma[Vaartha.vattu_MA]      = Padma.vattu_MA;
Vaartha.toPadma[Vaartha.vattu_YA]      = Padma.vattu_YA;
Vaartha.toPadma[Vaartha.vattu_RA]      = Padma.vattu_RA;
Vaartha.toPadma[Vaartha.vattu_LA]      = Padma.vattu_LA;
Vaartha.toPadma[Vaartha.vattu_VA]      = Padma.vattu_VA;
Vaartha.toPadma[Vaartha.vattu_SHA]     = Padma.vattu_SHA;
Vaartha.toPadma[Vaartha.vattu_SSA_1]   = Padma.vattu_SSA;
Vaartha.toPadma[Vaartha.vattu_SSA_2]   = Padma.vattu_SSA;
Vaartha.toPadma[Vaartha.vattu_SA]      = Padma.vattu_SA;
Vaartha.toPadma[Vaartha.vattu_HA]      = Padma.vattu_HA;
Vaartha.toPadma[Vaartha.vattu_LLA]     = Padma.vattu_LLA;
Vaartha.toPadma[Vaartha.vattu_RRA]     = Padma.vattu_RRA;

//Conjuncts
Vaartha.toPadma[Vaartha.vattu_PU]      = Padma.vattu_PA + Padma.vowelsn_U;
Vaartha.toPadma[Vaartha.vattu_TTRA]    = Padma.vattu_TTA + Padma.vattu_RA;
Vaartha.toPadma[Vaartha.vattu_TRA]     = Padma.vattu_TA + Padma.vattu_RA;

//Miscellaneous(where it doesn't match ASCII representation)
Vaartha.toPadma[Vaartha.extra_QTSINGLE] = "'";
Vaartha.toPadma[Vaartha.QTSINGLE]       = "'";
Vaartha.toPadma[Vaartha.COLON]          = ":";
Vaartha.toPadma[Vaartha.extra_HYPHEN]   = "-";
Vaartha.toPadma[Vaartha.digit_ZERO]     = "0";
Vaartha.toPadma[Vaartha.digit_ONE]      = "1";
Vaartha.toPadma[Vaartha.digit_TWO]      = "2";
Vaartha.toPadma[Vaartha.digit_THREE]    = "3";
Vaartha.toPadma[Vaartha.digit_FOUR]     = "4";
Vaartha.toPadma[Vaartha.digit_FIVE]     = "5";
Vaartha.toPadma[Vaartha.digit_SIX]      = "6";
Vaartha.toPadma[Vaartha.digit_SEVEN]    = "7";
Vaartha.toPadma[Vaartha.digit_EIGHT]    = "8";
Vaartha.toPadma[Vaartha.digit_NINE]     = "9";

Vaartha.redundantList = new Object();
Vaartha.redundantList[Vaartha.misc_TICK_1]    = true;
Vaartha.redundantList[Vaartha.misc_TICK_2]    = true;
Vaartha.redundantList[Vaartha.misc_TICK_3]    = true;
Vaartha.redundantList[Vaartha.misc_TICK_4]    = true;
Vaartha.redundantList[Vaartha.misc_TICK_5]    = true;
Vaartha.redundantList[Vaartha.misc_UNKNOWN_1] = true;

Vaartha.prefixList = new Object();
Vaartha.prefixList[Vaartha.virama_1]     = true;
Vaartha.prefixList[Vaartha.vattu_RA]     = true;
Vaartha.prefixList[Vaartha.vattu_TTRA]   = true;
Vaartha.prefixList[Vaartha.vattu_TRA]    = true;

Vaartha.overloadList = new Object();
Vaartha.overloadList[Vaartha.anusvara]    = true;
Vaartha.overloadList[Vaartha.consnt_CA]   = true;
Vaartha.overloadList[Vaartha.consnt_DA]   = true;
Vaartha.overloadList[Vaartha.consnt_DDA]  = true;
Vaartha.overloadList[Vaartha.consnt_PA_1] = true;
Vaartha.overloadList[Vaartha.consnt_PA_2] = true;
Vaartha.overloadList[Vaartha.consnt_BA]   = true;
Vaartha.overloadList[Vaartha.consnt_VA]   = true;
Vaartha.overloadList[Vaartha.combo_CI]    = true;
Vaartha.overloadList[Vaartha.combo_CII]   = true;
Vaartha.overloadList[Vaartha.combo_DI]    = true;
Vaartha.overloadList[Vaartha.combo_DII]   = true;
Vaartha.overloadList[Vaartha.combo_BI]    = true;
Vaartha.overloadList[Vaartha.combo_BII]   = true;
Vaartha.overloadList[Vaartha.combo_RI]    = true;
Vaartha.overloadList[Vaartha.combo_VI]    = true;
Vaartha.overloadList[Vaartha.combo_VII]   = true;
Vaartha.overloadList["\u0031"]            = true;
Vaartha.overloadList["\u0031\u0052"]      = true;
Vaartha.overloadList["\u0031\u00C9"]      = true;
Vaartha.overloadList["\u0031\u00C9\u0072"] = true;
Vaartha.overloadList["\u0031\u00CA"]      = true;
Vaartha.overloadList["\u00A1\u0059"]      = true;
Vaartha.overloadList["\u00A1\u005A"]      = true;
Vaartha.overloadList["\u00A1\u006C"]      = true;
Vaartha.overloadList["\u00A1\u006C\u0057"] = true;
Vaartha.overloadList["\u00A5\u0052"]      = true;
Vaartha.overloadList["\u00A5\u00C9"]      = true;
Vaartha.overloadList["\u00A5\u00CA"]      = true;

Vaartha.isRedundant = function (str, prev)
{
    if (str == Vaartha.misc_TICK_4 && prev == Vaartha.anusvara)
        return false;
    return Vaartha.redundantList[str] != null;
}

