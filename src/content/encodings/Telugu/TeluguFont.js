// $Id: TeluguFont.js,v 1.4 2006/03/07 18:30:23 vnagarjuna Exp $ -->

//Copyright 2006 Nagarjuna Venna <vnagarjuna@yahoo.com>

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

function TeluguFont()
{
}

//The interface every dynamic font encoding should implement
TeluguFont.maxLookupLen = 3;
TeluguFont.fontFace     = "TeluguFont";
TeluguFont.displayName  = TeluguFont.fontFace;
TeluguFont.script       = Padma.script_TELUGU;

TeluguFont.lookup = function (str) 
{
    return TeluguFont.toPadma[str];
}

TeluguFont.isPrefixSymbol = function (str)
{
    return TeluguFont.prefixList[str] != null;
}

TeluguFont.isOverloaded = function (str)
{
    return TeluguFont.overloadList[str] != null;
}

TeluguFont.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if (sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_AILEN)
        return Padma.vowelsn_AI;
    if (sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_EELEN)
        return Padma.vowelsn_EE;
    if (sign1 == Padma.vowelsn_I && sign2 == Padma.vowelsn_IILEN)
        return Padma.vowelsn_II;
    if (sign1 == Padma.vowelsn_O && sign2 == Padma.vowelsn_EELEN)
        return Padma.vowelsn_OO;
    if (sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_U)
        return Padma.vowelsn_O;
    if (sign2 == Padma.vowelsn_E && (sign1 == Padma.vowelsn_II || sign1 == Padma.vowelsn_AA))
        return Padma.vowelsn_OO;
    return sign1 + sign2;    
}

//1. Remove redundant symbols (ra and sunna are overloaded... argh!!!)
//2. Insert some talakattus (that we have just removed) that will help with ra Gunintam (anusvara and ra are overloaded)
TeluguFont.preprocessMessage = function (input)
{
    var output = "", last = null;
    //1.
    for(var i = 0; i < input.length; ++i) {
        var cur = input.charAt(i);
        if (!TeluguFont.isRedundant(cur, last))
            output += last = cur;
    }

    //2.
    return TeluguFont.insertTalakattuForRaGunintam(output);
}

//Implementation details start here

//0x 23, 26 (jha), 

//Specials
TeluguFont.candrabindu    = "\u00B7";
TeluguFont.visarga        = "\u004D";
TeluguFont.virama_1       = "\u0060";
TeluguFont.virama_2       = "\u2019";
TeluguFont.virama_3       = "\u00A3";
TeluguFont.virama_4       = "\u00B1";
TeluguFont.virama_5       = "\u00BA";
TeluguFont.anusvara       = "\u004C";

//Vowels
TeluguFont.vowel_A        = "\u0040";
TeluguFont.vowel_AA       = "\u0041";
TeluguFont.vowel_I        = "\u0042";
TeluguFont.vowel_II       = "\u0043";
TeluguFont.vowel_U        = "\u0044";
TeluguFont.vowel_UU       = "\u0045";
TeluguFont.vowel_E        = "\u0046";
TeluguFont.vowel_EE       = "\u0047";
TeluguFont.vowel_AI       = "\u0048";
TeluguFont.vowel_O        = "\u0049";
TeluguFont.vowel_OO       = "\u004A";
TeluguFont.vowel_AU       = "\u004B";

//Consonants
TeluguFont.consnt_KA      = "\u004E";
TeluguFont.consnt_KHA_1   = "\u00C5";
TeluguFont.consnt_KHA_2   = "\u00C6";
TeluguFont.consnt_GA      = "\u0067";
TeluguFont.consnt_GHA     = "\u006D\u006E\u00A7";
TeluguFont.consnt_NGA     = "\u00C3";

TeluguFont.consnt_CA      = "\u00BF";
TeluguFont.consnt_CHA     = "\u00BF\u006E";
TeluguFont.consnt_JA      = "\u00C7";
//TeluguFont.consnt_JHA     = "\u00AA\u2014";
TeluguFont.consnt_NYA     = "\u00C4";

TeluguFont.consnt_TTA     = "\u00C8";
TeluguFont.consnt_TTHA    = "\u0068";
TeluguFont.consnt_DDA     = "\u0192";
TeluguFont.consnt_DDHA    = "\u0192\u006E";
TeluguFont.consnt_NNA     = "\u00DF";

TeluguFont.consnt_TA      = "\u00BB";
TeluguFont.consnt_THA     = "\u00B4";
TeluguFont.consnt_DA      = "\u0063";
TeluguFont.consnt_DHA     = "\u0063\u006E";
TeluguFont.consnt_NA      = "\u00A9";

TeluguFont.consnt_PA      = "\u006D";
TeluguFont.consnt_PHA_1   = "\u0046\u006E";
TeluguFont.consnt_PHA_2   = "\u006D\u006E";
TeluguFont.consnt_BA      = "\u00CA";
TeluguFont.consnt_BHA     = "\u00CA\u006E";
TeluguFont.consnt_MA      = "\u00AA\u00A7";

TeluguFont.consnt_YA      = "\u00B8\u00A7";
TeluguFont.consnt_RA      = "\u004C\u0052";
TeluguFont.consnt_LA      = "\u00CC";
TeluguFont.consnt_VA      = "\u00AA";
TeluguFont.consnt_SHA     = "\u0061";
TeluguFont.consnt_SSA_1   = "\u0074";
TeluguFont.consnt_SSA_2   = "\u0075";
TeluguFont.consnt_SA_1    = "\u0071";
TeluguFont.consnt_SA_2    = "\u0072";
TeluguFont.consnt_HA      = "\u00A4";
TeluguFont.consnt_LLA     = "\u00CE";
TeluguFont.consnt_RRA     = "\u00E0";

//Gunintamulu
TeluguFont.vowelsn_AA_1   = "\u0053";
TeluguFont.vowelsn_AA_2   = "\u0079";
TeluguFont.vowelsn_AA_3   = "\u00D8";
TeluguFont.vowelsn_I_1    = "\u0054";
TeluguFont.vowelsn_I_2    = "\u006A";
TeluguFont.vowelsn_I_3    = "\u007A";
TeluguFont.vowelsn_I_4    = "\u00D3";
TeluguFont.vowelsn_II_1   = "\u0055";
TeluguFont.vowelsn_II_2   = "\u006B";
TeluguFont.vowelsn_II_3   = "\u007B";
TeluguFont.vowelsn_II_4   = "\u00D4";
TeluguFont.vowelsn_U_1    = "\u0056";
TeluguFont.vowelsn_U_2    = "\u006F";
TeluguFont.vowelsn_U_3    = "\u0076";
TeluguFont.vowelsn_U_4    = "\u00A7";
TeluguFont.vowelsn_U_5    = "\u00D9";
TeluguFont.vowelsn_UU_1   = "\u0057";
TeluguFont.vowelsn_UU_2   = "\u0070";
TeluguFont.vowelsn_UU_3   = "\u0077";
TeluguFont.vowelsn_UU_4   = "\u00A8";
TeluguFont.vowelsn_UU_5   = "\u00DA";
TeluguFont.vowelsn_R      = "\u0058";
TeluguFont.vowelsn_RR     = "\u0059";
TeluguFont.vowelsn_E_1    = "\u005A";
TeluguFont.vowelsn_E_2    = "\u006C";
TeluguFont.vowelsn_E_3    = "\u007C";
TeluguFont.vowelsn_E_4    = "\u2026";
TeluguFont.vowelsn_E_5    = "\u02C6";
TeluguFont.vowelsn_E_6    = "\u00AE";
TeluguFont.vowelsn_E_7    = "\u00C2";
TeluguFont.vowelsn_E_8    = "\u00DB";
TeluguFont.vowelsn_E_9    = "\u00E2";
TeluguFont.vowelsn_EE     = "\u007D";
TeluguFont.vowelsn_O_1    = "\u005D";
TeluguFont.vowelsn_O_2    = "\u007E";
TeluguFont.vowelsn_O_3    = "\u00AF";
TeluguFont.vowelsn_O_4    = "\u00DC";
TeluguFont.vowelsn_OO     = "\u00A1";
TeluguFont.vowelsn_AU_1   = "\u005F";
TeluguFont.vowelsn_AU_2   = "\u0066";
TeluguFont.vowelsn_AU_3   = "\u2018";
TeluguFont.vowelsn_AU_4   = "\u00A2";

TeluguFont.vowelsn_IILEN_1 = "\u0064";
TeluguFont.vowelsn_IILEN_2 = "\u00C9";
TeluguFont.vowelsn_EELEN_1 = "\u005B";
TeluguFont.vowelsn_EELEN_2 = "\u00CD";
TeluguFont.vowelsn_AILEN_1 = "\u005C";
TeluguFont.vowelsn_AILEN_2 = "\u005E";

//Special Combinations
TeluguFont.combo_KSHA     = "\u004F";
TeluguFont.combo_KHI      = "\u2039";
TeluguFont.combo_GHAA     = "\u006D\u006E\u0057";

TeluguFont.combo_CI       = "\u00C0";
TeluguFont.combo_CHI      = "\u00C0\u006E";
TeluguFont.combo_JI       = "\u00D1";
TeluguFont.combo_JII      = "\u00D2";

TeluguFont.combo_TI       = "\u2020";
TeluguFont.combo_NI       = "\u00AC";

TeluguFont.combo_PAA      = "\u0046\u0079";
TeluguFont.combo_PO       = "\u0046\u007E";
TeluguFont.combo_POO      = "\u0046\u00A1";
TeluguFont.combo_PAU      = "\u0046\u00A2";
TeluguFont.combo_PPOLLU   = "\u00A3\u006D";
TeluguFont.combo_PHPOLLU  = "\u00A3\u006D\u006E";
TeluguFont.combo_BI       = "\u00D5";
TeluguFont.combo_BHI      = "\u00D5\u006E";
TeluguFont.combo_MAA_1    = "\u00AA\u0057";
TeluguFont.combo_MAA_2    = "\u00AA\u0077";
TeluguFont.combo_MI       = "\u201A\u00A7";
TeluguFont.combo_MII      = "\u201A\u0064\u00A7";
TeluguFont.combo_MEELEN   = "\u00AA\u00CD\u00A7";
TeluguFont.combo_MAU      = "\u00AA\u00B0";
TeluguFont.combo_MPOLLU   = "\u00AA\u00BA\u00A7";

TeluguFont.combo_YAA      = "\u00B8\u0077";
TeluguFont.combo_YI       = "\u004C\u0056\u0056";
TeluguFont.combo_YII_1    = "\u004C\u0056\u0057";
TeluguFont.combo_YII_2    = "\u00B8\u0057";
TeluguFont.combo_YEELEN   = "\u00B8\u00CD\u00A7";
TeluguFont.combo_YPOLLU   = "\u00B8\u00BA\u00A7";
TeluguFont.combo_RAA      = "\u004C\u0053";
TeluguFont.combo_RI       = "\u004C\u006A";
TeluguFont.combo_RII      = "\u004C\u006B\u006A"; //handle broken telugupeople.com
TeluguFont.combo_REELEN   = "\u004C\u00CD";
TeluguFont.combo_RO       = "\u004C\u00AF";
TeluguFont.combo_RPOLLU   = "\u004C\u00BA";
TeluguFont.combo_LI       = "\u00D6";
TeluguFont.combo_VI_1     = "\u0025";
TeluguFont.combo_VI_2     = "\u201A";
TeluguFont.combo_SHI      = "\u0062";
TeluguFont.combo_SHRII    = "\u0024";
TeluguFont.combo_SSPOLLU_1 = "\u00A3\u0074";
TeluguFont.combo_SSPOLLU_2 = "\u00A3\u0075";
TeluguFont.combo_SPOLLU_1 = "\u00A3\u0071";
TeluguFont.combo_SPOLLU_2 = "\u00A3\u0071";
TeluguFont.combo_LLI      = "\u0152";
TeluguFont.combo_HAA      = "\u00A5";

//Vattulu
TeluguFont.vattu_KA       = "\u00E4";
TeluguFont.vattu_KHA      = "\u00E5";
TeluguFont.vattu_GA       = "\u00E6";
TeluguFont.vattu_GHA      = "\u00E7";

TeluguFont.vattu_CA       = "\u00E8";
TeluguFont.vattu_CHA      = "\u00E8\u00E9";
TeluguFont.vattu_JA       = "\u00EA";
TeluguFont.vattu_JHA      = "\u00EB";
TeluguFont.vattu_NYA      = "\u00EC";

TeluguFont.vattu_TTA      = "\u00ED";
TeluguFont.vattu_TTHA     = "\u00EE";
TeluguFont.vattu_DDA      = "\u00EF";
TeluguFont.vattu_NNA      = "\u00F1";

TeluguFont.vattu_TA       = "\u00F2";
TeluguFont.vattu_THA      = "\u00F3";
TeluguFont.vattu_DA       = "\u00F4";
TeluguFont.vattu_DHA      = "\u00F4\u201C";
TeluguFont.vattu_NA       = "\u00F5";

TeluguFont.vattu_PA       = "\u00F6";
TeluguFont.vattu_PHA      = "\u00F6\u00E9";
TeluguFont.vattu_BA       = "\u00F7";
TeluguFont.vattu_BHA      = "\u00F7\u00E9";
TeluguFont.vattu_MA       = "\u00F8";

TeluguFont.vattu_YA       = "\u00F9";
TeluguFont.vattu_RA_1     = "\u00FA";
TeluguFont.vattu_RA_2     = "\u00FB";
TeluguFont.vattu_LA       = "\u201D";
TeluguFont.vattu_VA       = "\u002A";
TeluguFont.vattu_SHA      = "\u002B";
TeluguFont.vattu_SSA      = "\u003C";
TeluguFont.vattu_SA       = "\u003D";
TeluguFont.vattu_HA       = "\u003E";
TeluguFont.vattu_LLA      = "\u2022";
TeluguFont.vattu_RRA      = "\u00FC";

TeluguFont.LQTSINGLE      = "\u0022";
TeluguFont.RQTSINGLE      = "\u0027";
TeluguFont.misc_DANDA     = "\u0065";

//Matches ASCII
TeluguFont.EXCLAM         = "\u0021";
TeluguFont.PARENLEFT      = "\u0028";
TeluguFont.PARENRIGT      = "\u0029";
TeluguFont.COMMA          = "\u002C";
TeluguFont.PERIOD         = "\u002E";
TeluguFont.SLASH          = "\u002F";
TeluguFont.COLON          = "\u003A";
TeluguFont.SEMICOLON      = "\u003B";
TeluguFont.QUESTION       = "\u003F";
TeluguFont.digit_ZERO     = "\u0030";
TeluguFont.digit_ONE      = "\u0031";
TeluguFont.digit_TWO      = "\u0032";
TeluguFont.digit_THREE    = "\u0033";
TeluguFont.digit_FOUR     = "\u0034";
TeluguFont.digit_FIVE     = "\u0035";
TeluguFont.digit_SIX      = "\u0036";
TeluguFont.digit_SEVEN    = "\u0037";
TeluguFont.digit_EIGHT    = "\u0038";
TeluguFont.digit_NINE     = "\u0039";

//does not match ASCII
TeluguFont.extra_HYPHEN   = "\u2014";

//Kommu
TeluguFont.misc_TICK_1    = "\u0052";
TeluguFont.misc_TICK_2    = "\u0078";
TeluguFont.misc_TICK_3    = "\u00AB";
TeluguFont.misc_TICK_4    = "\u00CF";

TeluguFont.misc_UNKNOWN_1 = "\u0050";
TeluguFont.misc_UNKNOWN_2 = "\u0051";
TeluguFont.misc_UNKNOWN_3 = "\u0069";
TeluguFont.misc_UNKNOWN_4 = "\u0073";
TeluguFont.misc_UNKNOWN_5 = "\u00CB";
TeluguFont.misc_UNKNOWN_6 = "\u00E3";

TeluguFont.misc_vattu_1   = "\u006E";
TeluguFont.misc_vattu_2   = "\u201E";
TeluguFont.misc_vattu_3   = "\u201C";
TeluguFont.misc_vattu_1   = "\u00E9";

TeluguFont.toPadma = new Object();

TeluguFont.toPadma[TeluguFont.candrabindu] = Padma.candrabindu;
TeluguFont.toPadma[TeluguFont.visarga]  = Padma.visarga;
TeluguFont.toPadma[TeluguFont.virama_1] = Padma.syllbreak;
TeluguFont.toPadma[TeluguFont.virama_2] = Padma.syllbreak;
TeluguFont.toPadma[TeluguFont.virama_3] = Padma.syllbreak;
TeluguFont.toPadma[TeluguFont.virama_4] = Padma.syllbreak;
TeluguFont.toPadma[TeluguFont.virama_5] = Padma.syllbreak;
TeluguFont.toPadma[TeluguFont.anusvara] = Padma.anusvara;

TeluguFont.toPadma[TeluguFont.vowel_A]  = Padma.vowel_A;
TeluguFont.toPadma[TeluguFont.vowel_AA] = Padma.vowel_AA;
TeluguFont.toPadma[TeluguFont.vowel_I]  = Padma.vowel_I;
TeluguFont.toPadma[TeluguFont.vowel_II] = Padma.vowel_II;
TeluguFont.toPadma[TeluguFont.vowel_U]  = Padma.vowel_U;
TeluguFont.toPadma[TeluguFont.vowel_UU] = Padma.vowel_UU;
//TeluguFont.toPadma[TeluguFont.vowel_R]  = Padma.vowel_R;
//TeluguFont.toPadma[TeluguFont.vowel_RR] = Padma.vowel_RR;
TeluguFont.toPadma[TeluguFont.vowel_E]  = Padma.vowel_E;
TeluguFont.toPadma[TeluguFont.vowel_EE] = Padma.vowel_EE;
TeluguFont.toPadma[TeluguFont.vowel_AI] = Padma.vowel_AI;
TeluguFont.toPadma[TeluguFont.vowel_O]  = Padma.vowel_O;
TeluguFont.toPadma[TeluguFont.vowel_OO] = Padma.vowel_OO;
TeluguFont.toPadma[TeluguFont.vowel_AU] = Padma.vowel_AU;

TeluguFont.toPadma[TeluguFont.consnt_KA]    = Padma.consnt_KA;
TeluguFont.toPadma[TeluguFont.consnt_KHA_1] = Padma.consnt_KHA;
TeluguFont.toPadma[TeluguFont.consnt_KHA_2] = Padma.consnt_KHA;
TeluguFont.toPadma[TeluguFont.consnt_GA]    = Padma.consnt_GA;
TeluguFont.toPadma[TeluguFont.consnt_GHA]   = Padma.consnt_GHA;
TeluguFont.toPadma[TeluguFont.consnt_NGA]   = Padma.consnt_NGA;

TeluguFont.toPadma[TeluguFont.consnt_CA]  = Padma.consnt_CA;
TeluguFont.toPadma[TeluguFont.consnt_CHA] = Padma.consnt_CHA;
TeluguFont.toPadma[TeluguFont.consnt_JA]  = Padma.consnt_JA;
//TeluguFont.toPadma[TeluguFont.consnt_JHA] = Padma.consnt_JHA;
TeluguFont.toPadma[TeluguFont.consnt_NYA] = Padma.consnt_NYA;

TeluguFont.toPadma[TeluguFont.consnt_TTA]  = Padma.consnt_TTA;
TeluguFont.toPadma[TeluguFont.consnt_TTHA] = Padma.consnt_TTHA;
TeluguFont.toPadma[TeluguFont.consnt_DDA]  = Padma.consnt_DDA;
TeluguFont.toPadma[TeluguFont.consnt_DDHA] = Padma.consnt_DDHA;
TeluguFont.toPadma[TeluguFont.consnt_NNA]  = Padma.consnt_NNA;

TeluguFont.toPadma[TeluguFont.consnt_TA]  = Padma.consnt_TA;
TeluguFont.toPadma[TeluguFont.consnt_THA] = Padma.consnt_THA;
TeluguFont.toPadma[TeluguFont.consnt_DA]  = Padma.consnt_DA;
TeluguFont.toPadma[TeluguFont.consnt_DHA] = Padma.consnt_DHA;
TeluguFont.toPadma[TeluguFont.consnt_NA]  = Padma.consnt_NA;

TeluguFont.toPadma[TeluguFont.consnt_PA]  = Padma.consnt_PA;
TeluguFont.toPadma[TeluguFont.consnt_PHA_1] = Padma.consnt_PHA;
TeluguFont.toPadma[TeluguFont.consnt_PHA_2] = Padma.consnt_PHA;
TeluguFont.toPadma[TeluguFont.consnt_BA]  = Padma.consnt_BA;
TeluguFont.toPadma[TeluguFont.consnt_BHA] = Padma.consnt_BHA;
TeluguFont.toPadma[TeluguFont.consnt_MA]  = Padma.consnt_MA;

TeluguFont.toPadma[TeluguFont.consnt_YA]  = Padma.consnt_YA;
TeluguFont.toPadma[TeluguFont.consnt_RA]  = Padma.consnt_RA;
TeluguFont.toPadma[TeluguFont.consnt_LA]  = Padma.consnt_LA;
TeluguFont.toPadma[TeluguFont.consnt_VA]  = Padma.consnt_VA;
TeluguFont.toPadma[TeluguFont.consnt_SHA]  = Padma.consnt_SHA;
TeluguFont.toPadma[TeluguFont.consnt_SSA_1] = Padma.consnt_SSA;
TeluguFont.toPadma[TeluguFont.consnt_SSA_2] = Padma.consnt_SSA;
TeluguFont.toPadma[TeluguFont.consnt_SA_1] = Padma.consnt_SA;
TeluguFont.toPadma[TeluguFont.consnt_SA_2] = Padma.consnt_SA;
TeluguFont.toPadma[TeluguFont.consnt_HA]  = Padma.consnt_HA;
TeluguFont.toPadma[TeluguFont.consnt_LLA] = Padma.consnt_LLA;
TeluguFont.toPadma[TeluguFont.consnt_RRA] = Padma.consnt_RRA;

//Gunintamulu
TeluguFont.toPadma[TeluguFont.vowelsn_AA_1]  = Padma.vowelsn_AA;
TeluguFont.toPadma[TeluguFont.vowelsn_AA_2]  = Padma.vowelsn_AA;
TeluguFont.toPadma[TeluguFont.vowelsn_AA_3]  = Padma.vowelsn_AA;
TeluguFont.toPadma[TeluguFont.vowelsn_I_1]   = Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.vowelsn_I_2]   = Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.vowelsn_I_3]   = Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.vowelsn_I_4]   = Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.vowelsn_II_1]  = Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.vowelsn_II_2]  = Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.vowelsn_II_3]  = Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.vowelsn_II_4]  = Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.vowelsn_U_1]   = Padma.vowelsn_U;
TeluguFont.toPadma[TeluguFont.vowelsn_U_2]   = Padma.vowelsn_U;
TeluguFont.toPadma[TeluguFont.vowelsn_U_3]   = Padma.vowelsn_U;
TeluguFont.toPadma[TeluguFont.vowelsn_U_4]   = Padma.vowelsn_U;
TeluguFont.toPadma[TeluguFont.vowelsn_U_5]   = Padma.vowelsn_U;
TeluguFont.toPadma[TeluguFont.vowelsn_UU_1]  = Padma.vowelsn_UU;
TeluguFont.toPadma[TeluguFont.vowelsn_UU_2]  = Padma.vowelsn_UU;
TeluguFont.toPadma[TeluguFont.vowelsn_UU_3]  = Padma.vowelsn_UU;
TeluguFont.toPadma[TeluguFont.vowelsn_UU_4]  = Padma.vowelsn_UU;
TeluguFont.toPadma[TeluguFont.vowelsn_UU_5]  = Padma.vowelsn_UU;
TeluguFont.toPadma[TeluguFont.vowelsn_R]     = Padma.vowelsn_R;
TeluguFont.toPadma[TeluguFont.vowelsn_RR]    = Padma.vowelsn_RR;
TeluguFont.toPadma[TeluguFont.vowelsn_E_1]   = Padma.vowelsn_E;
TeluguFont.toPadma[TeluguFont.vowelsn_E_2]   = Padma.vowelsn_E;
TeluguFont.toPadma[TeluguFont.vowelsn_E_3]   = Padma.vowelsn_E;
TeluguFont.toPadma[TeluguFont.vowelsn_E_4]   = Padma.vowelsn_E;
TeluguFont.toPadma[TeluguFont.vowelsn_E_5]   = Padma.vowelsn_E;
TeluguFont.toPadma[TeluguFont.vowelsn_E_6]   = Padma.vowelsn_E;
TeluguFont.toPadma[TeluguFont.vowelsn_E_7]   = Padma.vowelsn_E;
TeluguFont.toPadma[TeluguFont.vowelsn_E_8]   = Padma.vowelsn_E;
TeluguFont.toPadma[TeluguFont.vowelsn_E_9]   = Padma.vowelsn_E;
TeluguFont.toPadma[TeluguFont.vowelsn_EE]    = Padma.vowelsn_EE;
TeluguFont.toPadma[TeluguFont.vowelsn_O_1]   = Padma.vowelsn_O;
TeluguFont.toPadma[TeluguFont.vowelsn_O_2]   = Padma.vowelsn_O;
TeluguFont.toPadma[TeluguFont.vowelsn_O_3]   = Padma.vowelsn_O;
TeluguFont.toPadma[TeluguFont.vowelsn_O_4]   = Padma.vowelsn_O;
TeluguFont.toPadma[TeluguFont.vowelsn_OO]    = Padma.vowelsn_OO;
TeluguFont.toPadma[TeluguFont.vowelsn_AU_1]  = Padma.vowelsn_AU;
TeluguFont.toPadma[TeluguFont.vowelsn_AU_2]  = Padma.vowelsn_AU;
TeluguFont.toPadma[TeluguFont.vowelsn_AU_3]  = Padma.vowelsn_AU;
TeluguFont.toPadma[TeluguFont.vowelsn_AU_4]  = Padma.vowelsn_AU;
TeluguFont.toPadma[TeluguFont.vowelsn_IILEN_1] = Padma.vowelsn_IILEN;
TeluguFont.toPadma[TeluguFont.vowelsn_IILEN_2] = Padma.vowelsn_IILEN;
TeluguFont.toPadma[TeluguFont.vowelsn_EELEN_1] = Padma.vowelsn_EELEN;
TeluguFont.toPadma[TeluguFont.vowelsn_EELEN_2] = Padma.vowelsn_EELEN;
TeluguFont.toPadma[TeluguFont.vowelsn_AILEN_1] = Padma.vowelsn_AILEN;
TeluguFont.toPadma[TeluguFont.vowelsn_AILEN_2] = Padma.vowelsn_AILEN;

//Special Combinations
TeluguFont.toPadma[TeluguFont.combo_KSHA]    = Padma.consnt_KA + Padma.vattu_SSA;
TeluguFont.toPadma[TeluguFont.combo_KHI]     = Padma.consnt_KHA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_GHAA]    = Padma.consnt_GHA + Padma.vowelsn_AA;

TeluguFont.toPadma[TeluguFont.combo_CI]      = Padma.consnt_CA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_CHI]     = Padma.consnt_CHA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_JI]      = Padma.consnt_JA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_JII]     = Padma.consnt_JA + Padma.vowelsn_II;

TeluguFont.toPadma[TeluguFont.combo_TI]      = Padma.consnt_TA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_NI]      = Padma.consnt_NA + Padma.vowelsn_I;

TeluguFont.toPadma[TeluguFont.combo_PAA]     = Padma.consnt_PA + Padma.vowelsn_AA;
TeluguFont.toPadma[TeluguFont.combo_PO]      = Padma.consnt_PA + Padma.vowelsn_O;
TeluguFont.toPadma[TeluguFont.combo_POO]     = Padma.consnt_PA + Padma.vowelsn_OO;
TeluguFont.toPadma[TeluguFont.combo_PAU]     = Padma.consnt_PA + Padma.vowelsn_AU;
TeluguFont.toPadma[TeluguFont.combo_PPOLLU]  = Padma.consnt_PA + Padma.syllbreak;
TeluguFont.toPadma[TeluguFont.combo_PHPOLLU] = Padma.consnt_PHA + Padma.syllbreak;
TeluguFont.toPadma[TeluguFont.combo_BI]      = Padma.consnt_BA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_BHI]     = Padma.consnt_BHA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_MAA_1]   = Padma.consnt_MA + Padma.vowelsn_AA;
TeluguFont.toPadma[TeluguFont.combo_MAA_2]   = Padma.consnt_MA + Padma.vowelsn_AA;
TeluguFont.toPadma[TeluguFont.combo_MI]      = Padma.consnt_MA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_MII]     = Padma.consnt_MA + Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.combo_MEELEN]  = Padma.consnt_MA + Padma.vowelsn_EELEN;
TeluguFont.toPadma[TeluguFont.combo_MAU]     = Padma.consnt_MA + Padma.vowelsn_AU;
TeluguFont.toPadma[TeluguFont.combo_MPOLLU]  = Padma.consnt_MA + Padma.syllbreak;

TeluguFont.toPadma[TeluguFont.combo_YAA]     = Padma.consnt_YA + Padma.vowelsn_AA;
TeluguFont.toPadma[TeluguFont.combo_YI]      = Padma.consnt_YA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_YII_1]   = Padma.consnt_YA + Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.combo_YII_2]   = Padma.consnt_YA + Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.combo_YEELEN]  = Padma.consnt_YA + Padma.vowelsn_EELEN;
TeluguFont.toPadma[TeluguFont.combo_YPOLLU]  = Padma.consnt_YA + Padma.syllbreak;
TeluguFont.toPadma[TeluguFont.combo_RAA]     = Padma.consnt_RA + Padma.vowelsn_AA;
TeluguFont.toPadma[TeluguFont.combo_RI]      = Padma.consnt_RA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_RII]     = Padma.consnt_RA + Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.combo_REELEN]  = Padma.consnt_RA + Padma.vowelsn_EELEN;
TeluguFont.toPadma[TeluguFont.combo_RO]      = Padma.consnt_RA + Padma.vowelsn_O;
TeluguFont.toPadma[TeluguFont.combo_RPOLLU]  = Padma.consnt_RA + Padma.syllbreak;
TeluguFont.toPadma[TeluguFont.combo_LI]      = Padma.consnt_LA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_VI_1]    = Padma.consnt_VA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_VI_2]    = Padma.consnt_VA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_SHI]     = Padma.consnt_SHA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_SHRII]   = Padma.consnt_SHA + Padma.vattu_RA + Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.combo_SSPOLLU_1] = Padma.consnt_SSA + Padma.syllbreak;
TeluguFont.toPadma[TeluguFont.combo_SSPOLLU_2] = Padma.consnt_SSA + Padma.syllbreak;
TeluguFont.toPadma[TeluguFont.combo_SPOLLU_1] = Padma.consnt_SA + Padma.syllbreak;
TeluguFont.toPadma[TeluguFont.combo_SPOLLU_2] = Padma.consnt_SA + Padma.syllbreak;
TeluguFont.toPadma[TeluguFont.combo_LLI]     = Padma.consnt_LLA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_HAA]     = Padma.consnt_HA + Padma.vowelsn_AA;

//Vattulu
TeluguFont.toPadma[TeluguFont.vattu_KA]      = Padma.vattu_KA;
TeluguFont.toPadma[TeluguFont.vattu_KHA]     = Padma.vattu_KHA;
TeluguFont.toPadma[TeluguFont.vattu_GA]      = Padma.vattu_GA;
TeluguFont.toPadma[TeluguFont.vattu_GHA]     = Padma.vattu_GHA;
TeluguFont.toPadma[TeluguFont.vattu_CA]      = Padma.vattu_CA;
TeluguFont.toPadma[TeluguFont.vattu_CHA]     = Padma.vattu_CHA;
TeluguFont.toPadma[TeluguFont.vattu_JA]      = Padma.vattu_JA;
TeluguFont.toPadma[TeluguFont.vattu_JHA]     = Padma.vattu_JHA;
TeluguFont.toPadma[TeluguFont.vattu_NYA]     = Padma.vattu_NYA;
TeluguFont.toPadma[TeluguFont.vattu_TTA]     = Padma.vattu_TTA;
TeluguFont.toPadma[TeluguFont.vattu_TTHA]    = Padma.vattu_TTHA;
TeluguFont.toPadma[TeluguFont.vattu_DDA]     = Padma.vattu_DDA;
TeluguFont.toPadma[TeluguFont.vattu_NNA]     = Padma.vattu_NNA;
TeluguFont.toPadma[TeluguFont.vattu_TA]      = Padma.vattu_TA;
TeluguFont.toPadma[TeluguFont.vattu_THA]     = Padma.vattu_THA;
TeluguFont.toPadma[TeluguFont.vattu_DA]      = Padma.vattu_DA;
TeluguFont.toPadma[TeluguFont.vattu_DHA]     = Padma.vattu_DHA;
TeluguFont.toPadma[TeluguFont.vattu_NA]      = Padma.vattu_NA;
TeluguFont.toPadma[TeluguFont.vattu_PA]      = Padma.vattu_PA;
TeluguFont.toPadma[TeluguFont.vattu_PHA]     = Padma.vattu_PHA;
TeluguFont.toPadma[TeluguFont.vattu_BA]      = Padma.vattu_BA;
TeluguFont.toPadma[TeluguFont.vattu_BHA]     = Padma.vattu_BHA;
TeluguFont.toPadma[TeluguFont.vattu_MA]      = Padma.vattu_MA;
TeluguFont.toPadma[TeluguFont.vattu_YA]      = Padma.vattu_YA;
TeluguFont.toPadma[TeluguFont.vattu_RA_1]    = Padma.vattu_RA;
TeluguFont.toPadma[TeluguFont.vattu_RA_2]    = Padma.vattu_RA;
TeluguFont.toPadma[TeluguFont.vattu_LA]      = Padma.vattu_LA;
TeluguFont.toPadma[TeluguFont.vattu_VA]      = Padma.vattu_VA;
TeluguFont.toPadma[TeluguFont.vattu_SHA]     = Padma.vattu_SHA;
TeluguFont.toPadma[TeluguFont.vattu_SSA]     = Padma.vattu_SSA;
TeluguFont.toPadma[TeluguFont.vattu_SA]      = Padma.vattu_SA;
TeluguFont.toPadma[TeluguFont.vattu_HA]      = Padma.vattu_HA;
TeluguFont.toPadma[TeluguFont.vattu_LLA]     = Padma.vattu_LLA;
TeluguFont.toPadma[TeluguFont.vattu_RRA]     = Padma.vattu_RRA;

TeluguFont.toPadma[TeluguFont.LQTSINGLE]  = "\u2018";
TeluguFont.toPadma[TeluguFont.RQTSINGLE]  = "\u2019";
TeluguFont.toPadma[TeluguFont.misc_DANDA] = Padma.danda;

TeluguFont.toPadma[TeluguFont.extra_HYPHEN] = '-';

TeluguFont.redundantList = new Object();
TeluguFont.redundantList[TeluguFont.misc_TICK_1]    = true;
TeluguFont.redundantList[TeluguFont.misc_TICK_2]    = true;
TeluguFont.redundantList[TeluguFont.misc_TICK_3]    = true;
TeluguFont.redundantList[TeluguFont.misc_TICK_4]    = true;
TeluguFont.redundantList[TeluguFont.misc_UNKNOWN_1] = true;
TeluguFont.redundantList[TeluguFont.misc_UNKNOWN_2] = true;
TeluguFont.redundantList[TeluguFont.misc_UNKNOWN_3] = true;
TeluguFont.redundantList[TeluguFont.misc_UNKNOWN_4] = true;
TeluguFont.redundantList[TeluguFont.misc_UNKNOWN_5] = true;
TeluguFont.redundantList[TeluguFont.misc_UNKNOWN_6] = true;

TeluguFont.prefixList = new Object();
TeluguFont.prefixList[TeluguFont.vowelsn_I_3]     = true;
TeluguFont.prefixList[TeluguFont.vowelsn_II_3]    = true;
TeluguFont.prefixList[TeluguFont.vowelsn_E_1]     = true;
TeluguFont.prefixList[TeluguFont.vowelsn_E_2]     = true;
TeluguFont.prefixList[TeluguFont.vowelsn_E_3]     = true;
TeluguFont.prefixList[TeluguFont.vowelsn_E_4]     = true;
TeluguFont.prefixList[TeluguFont.vowelsn_E_5]     = true;
TeluguFont.prefixList[TeluguFont.vowelsn_E_6]     = true;
TeluguFont.prefixList[TeluguFont.vowelsn_E_7]     = true;
TeluguFont.prefixList[TeluguFont.vowelsn_E_8]     = true;
TeluguFont.prefixList[TeluguFont.vowelsn_E_9]     = true;
TeluguFont.prefixList[TeluguFont.vowelsn_EE]      = true;
TeluguFont.prefixList[TeluguFont.vowelsn_AILEN_1] = true;
TeluguFont.prefixList[TeluguFont.vattu_RA_1]      = true;

TeluguFont.overloadList = new Object();
TeluguFont.overloadList[TeluguFont.virama_3]      = true;
TeluguFont.overloadList[TeluguFont.anusvara]      = true;
TeluguFont.overloadList[TeluguFont.vowel_E]       = true;
TeluguFont.overloadList[TeluguFont.consnt_CA]     = true;
TeluguFont.overloadList[TeluguFont.consnt_DA]     = true;
TeluguFont.overloadList[TeluguFont.consnt_DDA]    = true;
TeluguFont.overloadList[TeluguFont.consnt_PA]     = true;
TeluguFont.overloadList[TeluguFont.consnt_PHA_2]  = true;
TeluguFont.overloadList[TeluguFont.consnt_BA]     = true;
TeluguFont.overloadList[TeluguFont.consnt_VA]     = true;
TeluguFont.overloadList[TeluguFont.vattu_CA]      = true;
TeluguFont.overloadList[TeluguFont.vattu_DA]      = true;
TeluguFont.overloadList[TeluguFont.vattu_PA]      = true;
TeluguFont.overloadList[TeluguFont.vattu_BA]      = true;
TeluguFont.overloadList[TeluguFont.combo_CI]      = true;
TeluguFont.overloadList[TeluguFont.combo_PPOLLU]  = true;
TeluguFont.overloadList[TeluguFont.combo_BI]      = true;
TeluguFont.overloadList[TeluguFont.combo_VI_2]    = true;
TeluguFont.overloadList["\u004C\u0056"]           = true;
TeluguFont.overloadList["\u004C\u006B"]           = true;
TeluguFont.overloadList["\u201A\u0064"]           = true;
TeluguFont.overloadList["\u00AA\u00BA"]           = true;
TeluguFont.overloadList["\u00AA\u00CD"]           = true;
TeluguFont.overloadList["\u00B8"]                 = true;
TeluguFont.overloadList["\u00B8\u00BA"]           = true;
TeluguFont.overloadList["\u00B8\u00CD"]           = true;

//Terrible hack because this font overloads anusvara and ra
//This will take care of all cases when a vattu follows ra
TeluguFont.insertTalakattuForRaGunintam = function (str)
{
    var output = "", last = null, added = false;
    for(var i = 0; i < str.length; ++i) {
        var cur = str.charAt(i);
        if (last == TeluguFont.anusvara && !added) {
            var val = TeluguFont.lookup(cur);
            if (val != null && Padma.getType(val.charAt(0)) == Padma.type_vattu && !TeluguFont.isPrefixSymbol(cur))
                    output += TeluguFont.misc_TICK_1;
            output += cur;
        }
        else if (cur == TeluguFont.anusvara && last != null && TeluguFont.isPrefixSymbol(last)) {
            val = TeluguFont.lookup(last);
            output += cur;
            if (val == Padma.vowelsn_E) {
                output += TeluguFont.misc_TICK_1;
                added = true;
            }
        }
        else {
            output += cur;
            added = false;
        }
        last = cur;
    }
    return output;
}

TeluguFont.isRedundant = function (str, prev)
{
    if (str == TeluguFont.misc_TICK_1 && prev == TeluguFont.anusvara)
        return false;
    return TeluguFont.redundantList[str] != null;
}
