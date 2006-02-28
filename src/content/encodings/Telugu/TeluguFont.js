// $Id: TeluguFont.js,v 1.1 2006/02/28 02:53:46 vnagarjuna Exp $ -->

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

//0x 23, 26 (jha), 5E, B0, 

//Specials
TeluguFont.candrabindu    = "\u00B7"; //Y
TeluguFont.visarga        = "\u004D"; //Y
TeluguFont.virama_1       = "\u0060"; //Y
TeluguFont.virama_2       = "\u2019"; //Y
TeluguFont.virama_3       = "\u00A3"; //Y
TeluguFont.virama_4       = "\u00B1"; //Y
TeluguFont.virama_5       = "\u00BA"; //Y
//TeluguFont.virama_6       = "\u00FE";
TeluguFont.anusvara       = "\u004C"; //Y

//Vowels
TeluguFont.vowel_A_1      = "\u0040"; //Y
//TeluguFont.vowel_A_2      = "\u00C6";
TeluguFont.vowel_AA       = "\u0041"; //Y
TeluguFont.vowel_I        = "\u0042"; //Y
TeluguFont.vowel_II       = "\u0043"; //Y
TeluguFont.vowel_U        = "\u0044"; //Y
TeluguFont.vowel_UU       = "\u0045"; //Y
//TeluguFont.vowel_R        = "\u00A6\u00D5\u00D5";
//TeluguFont.vowel_RR       = "\u00A6\u00D5\u00D6";
TeluguFont.vowel_E        = "\u0046"; //Y
TeluguFont.vowel_EE       = "\u0047"; //Y
TeluguFont.vowel_AI       = "\u0048"; //Y
TeluguFont.vowel_O        = "\u0049"; //Y
TeluguFont.vowel_OO       = "\u004A"; //Y
TeluguFont.vowel_AU       = "\u004B"; //Y

//Consonants
TeluguFont.consnt_KA_1    = "\u004E"; //Y
//TeluguFont.consnt_KA_2    = "\u00C2";
TeluguFont.consnt_KHA_1   = "\u00C5"; //Y
TeluguFont.consnt_KHA_2   = "\u00C6"; //Y
TeluguFont.consnt_GA      = "\u0067"; //Y
//TeluguFont.consnt_GHA     = "\u0058\u00B6\u00D5";
TeluguFont.consnt_NGA     = "\u00C3"; //Y

TeluguFont.consnt_CA      = "\u00BF"; //Y
//TeluguFont.consnt_CHA     = "\u00CD\u00B5";
TeluguFont.consnt_JA_1    = "\u00C7"; //Y
//TeluguFont.consnt_JA_2    = "\u00E8";
//TeluguFont.consnt_JHA     = "\u00AA\u2014";
TeluguFont.consnt_NYA     = "\u00C4"; //Y

TeluguFont.consnt_TTA_1   = "\u00C8"; //Y
//TeluguFont.consnt_TTA_2   = "\u02DC";
//TeluguFont.consnt_TTA_3   = "\u0161";
TeluguFont.consnt_TTHA    = "\u0068"; //Y
TeluguFont.consnt_DDA     = "\u0192"; //Y
//TeluguFont.consnt_DDHA    = "\u0153\u00B5";
TeluguFont.consnt_NNA     = "\u00DF"; //Y

TeluguFont.consnt_TA      = "\u00BB"; //Y
TeluguFont.consnt_THA_1   = "\u00B4"; //Y
//TeluguFont.consnt_THA_2   = "\u0178\u00B8";
TeluguFont.consnt_DA      = "\u0063"; //Y
TeluguFont.consnt_DHA     = "\u0063\u006E"; //Y
TeluguFont.consnt_NA_1    = "\u00A9"; //Y
//TeluguFont.consnt_NA_2    = "\u00AF";

TeluguFont.consnt_PA_1    = "\u006D"; //Y
//TeluguFont.consnt_PA_2    = "\u00A4";
TeluguFont.consnt_PHA_1   = "\u006D\u006E"; //Y
//TeluguFont.consnt_PHA_2   = "\u00A4\u00B6";
TeluguFont.consnt_BA_1    = "\u00CA"; //Y
//TeluguFont.consnt_BA_2    = "\u00FF";
TeluguFont.consnt_BHA     = "\u00CA\u006E"; //Y
TeluguFont.consnt_MA      = "\u00AA\u00A7"; //Y

TeluguFont.consnt_YA_1    = "\u00B8\u00A7"; //Y
//TeluguFont.consnt_YA_2    = "\u00A7\u00D5";
TeluguFont.consnt_RA      = "\u004C\u0052"; //Y
TeluguFont.consnt_LA_1    = "\u00CC"; //Y
//TeluguFont.consnt_LA_2    = "\u00A9";
TeluguFont.consnt_VA_1    = "\u00AA"; //Y
//TeluguFont.consnt_VA_2    = "\u00AB";
TeluguFont.consnt_SHA     = "\u0061"; //Y
TeluguFont.consnt_SSA_1   = "\u0074"; //Y
//TeluguFont.consnt_SSA_2   = "\u00B3";
TeluguFont.consnt_SA_1    = "\u0071"; //Y
TeluguFont.consnt_SA_2    = "\u0072"; //Y
TeluguFont.consnt_HA      = "\u00A4"; //Y
TeluguFont.consnt_LLA     = "\u00CE"; //Y
TeluguFont.consnt_RRA     = "\u00E0"; //Y

//Gunintamulu
TeluguFont.vowelsn_AA_1   = "\u0053"; //Y
TeluguFont.vowelsn_AA_2   = "\u0079"; //Y
TeluguFont.vowelsn_AA_3   = "\u00D8"; //Y
//TeluguFont.vowelsn_AA_4   = "\u00C9";
TeluguFont.vowelsn_I_1    = "\u0054"; //Y
TeluguFont.vowelsn_I_2    = "\u006A"; //Y
TeluguFont.vowelsn_I_3    = "\u007A"; //Y
TeluguFont.vowelsn_I_4    = "\u00D3"; //Y
TeluguFont.vowelsn_II_1   = "\u0055"; //Y
TeluguFont.vowelsn_II_2   = "\u006B"; //Y
TeluguFont.vowelsn_II_3   = "\u007B"; //Y
TeluguFont.vowelsn_II_4   = "\u00D4"; //Y
TeluguFont.vowelsn_U_1    = "\u0056"; //Y
TeluguFont.vowelsn_U_2    = "\u006F"; //Y
TeluguFont.vowelsn_U_3    = "\u0076"; //Y
TeluguFont.vowelsn_U_4    = "\u00A7"; //Y
TeluguFont.vowelsn_U_5    = "\u00D9"; //Y
//TeluguFont.vowelsn_U_6    = "\u00DF";
//TeluguFont.vowelsn_U_7    = "\u00E1";
TeluguFont.vowelsn_UU_1   = "\u0057"; //Y
TeluguFont.vowelsn_UU_2   = "\u0070"; //Y
TeluguFont.vowelsn_UU_3   = "\u0077"; //Y
TeluguFont.vowelsn_UU_4   = "\u00A8"; //Y
TeluguFont.vowelsn_UU_5   = "\u00DA"; //Y
//TeluguFont.vowelsn_UU_6   = "\u00E0";
//TeluguFont.vowelsn_UU_7   = "\u00E2";
TeluguFont.vowelsn_R      = "\u0058"; //Y
TeluguFont.vowelsn_RR     = "\u0059"; //Y
TeluguFont.vowelsn_E_1    = "\u005A"; //Y
TeluguFont.vowelsn_E_2    = "\u006C"; //Y
TeluguFont.vowelsn_E_3    = "\u007C"; //Y
TeluguFont.vowelsn_E_4    = "\u2026"; //Y
TeluguFont.vowelsn_E_5    = "\u02C6"; //Y
TeluguFont.vowelsn_E_6    = "\u00AE"; //Y
TeluguFont.vowelsn_E_7    = "\u00C2"; //Y
TeluguFont.vowelsn_E_8    = "\u00DB"; //Y
TeluguFont.vowelsn_E_9    = "\u00E2"; //Y
TeluguFont.vowelsn_EE_1   = "\u007D"; //Y
//TeluguFont.vowelsn_EE_3   = "\u00EA";
//TeluguFont.vowelsn_EE_4   = "\u00EC";
TeluguFont.vowelsn_O_1    = "\u005D"; //Y
TeluguFont.vowelsn_O_2    = "\u007E"; //Y
TeluguFont.vowelsn_O_3    = "\u00AF"; //Y
TeluguFont.vowelsn_O_4    = "\u00DC"; //Y
TeluguFont.vowelsn_OO_1   = "\u00A1"; //Y
//TeluguFont.vowelsn_OO_2   = "\u00F0";
//TeluguFont.vowelsn_OO_3   = "\u00F2";
//TeluguFont.vowelsn_OO_4   = "\u00F4";
//TeluguFont.vowelsn_OO_5   = "\u00E3\u00D6";
TeluguFont.vowelsn_AU_1   = "\u005F"; //Y
TeluguFont.vowelsn_AU_2   = "\u0066"; //Y
TeluguFont.vowelsn_AU_3   = "\u2018"; //Y
TeluguFont.vowelsn_AU_4   = "\u00A2"; //Y
//TeluguFont.vowelsn_AU_5   = "\u00DA";

TeluguFont.vowelsn_IILEN_1 = "\u0064"; //Y
TeluguFont.vowelsn_IILEN_2 = "\u00C9"; //Y
TeluguFont.vowelsn_EELEN_1 = "\u005B"; //Y
TeluguFont.vowelsn_EELEN_2 = "\u00CD"; //Y
TeluguFont.vowelsn_AILEN_1 = "\u005C"; //Y
//TeluguFont.vowelsn_AILEN_2 = "\u006A";

//Special Combinations
TeluguFont.combo_KSHA     = "\u004F"; //Y
TeluguFont.combo_KHI      = "\u2039"; //Y
//TeluguFont.combo_KHII     = "\u0026";
//TeluguFont.combo_GI       = "\u0054";
//TeluguFont.combo_GII      = "\u0055";
//TeluguFont.combo_GHAA_1   = "\u0058\u00B6\u00E2";
//TeluguFont.combo_GHAA_2   = "\u0058\u00B6\u00D6";
//TeluguFont.combo_GHI      = "\u0058\u00B6\u00CF\u00D5";
//TeluguFont.combo_GHII     = "\u0058\u00B6\u00D4\u00D5";
//TeluguFont.combo_GHU      = "\u0058\u00B6\u00E1";
//TeluguFont.combo_GHUU     = "\u0058\u00B6\u00E2";
//TeluguFont.combo_GHPOLLU  = "\u0058\u00B6\u00FD\u00D5";

TeluguFont.combo_CI       = "\u00C0"; //Y
//TeluguFont.combo_CII      = "\u003C";
//TeluguFont.combo_CHI      = "\u002A\u00B5";
//TeluguFont.combo_CHII     = "\u003C\u00B5";
TeluguFont.combo_JI       = "\u00D1"; //Y
TeluguFont.combo_JII      = "\u00D2"; //Y
//TeluguFont.combo_JU       = "\u0056";
//TeluguFont.combo_JUU      = "\u0057";
//TeluguFont.combo_JHI      = "\u004A\u2014";
//TeluguFont.combo_JHII     = "\u004B\u2014";
//TeluguFont.combo_JHPOLLU  = "\u00AA\u00FD\u2014";

//TeluguFont.combo_TTHI     = "\u004A\u00B8";
//TeluguFont.combo_TTHII    = "\u004B\u00B8";

TeluguFont.combo_TI       = "\u2020"; //Y
//TeluguFont.combo_TII      = "\u0042";
//TeluguFont.combo_THI      = "\u0043\u00B1";
//TeluguFont.combo_THII     = "\u0044\u00B1";
//TeluguFont.combo_DI       = "\u0043";
//TeluguFont.combo_DII      = "\u0044";
//TeluguFont.combo_DHI      = "\u0043\u00B5";
//TeluguFont.combo_DHII     = "\u0044\u00B5";
TeluguFont.combo_NI       = "\u00AC"; //Y
//TeluguFont.combo_NII      = "\u0046";

TeluguFont.combo_PAA      = "\u0046\u0079"; //Y
TeluguFont.combo_PAU      = "\u0046\u00A2"; //Y
TeluguFont.combo_POO      = "\u0046\u0041"; //Y
TeluguFont.combo_BI       = "\u00D5"; //Y
//TeluguFont.combo_BII      = "\u0048";
//TeluguFont.combo_BHI      = "\u0047\u00B5";
//TeluguFont.combo_BHII     = "\u0048\u00B5";
TeluguFont.combo_MAA      = "\u00AA\u0077"; //Y
TeluguFont.combo_MI       = "\u201A\u00A7"; //Y
//TeluguFont.combo_MII      = "\u004F\u00D5";
//TeluguFont.combo_MU       = "\u00AB\u00E1";
//TeluguFont.combo_MUU      = "\u00AB\u00E2";
//TeluguFont.combo_ME_1     = "\u201E\u00E3\u00D5";
//TeluguFont.combo_ME_2     = "\u201E\u00E7\u00D5";
//TeluguFont.combo_MEE      = "\u201E\u00E4\u00D5";
//TeluguFont.combo_MAI      = "\u201E\u00E7\u00D5\u0069";
//TeluguFont.combo_MO       = "\u201E\u00E7\u00E1";
//TeluguFont.combo_MOO      = "\u201E\u00E7\u00D6";
TeluguFont.combo_MPOLLU   = "\u00AA\u00BA\u00A7"; //Y

//TeluguFont.combo_YAA      = "\u00A7\u00D6";
TeluguFont.combo_YI       = "\u004C\u0056\u0056";
//TeluguFont.combo_YII      = "\u00AA\u00E2";
//TeluguFont.combo_YE       = "\u00A7\u00E7\u00D5";
//TeluguFont.combo_YEE      = "\u00A7\u00E4\u00D5";
//TeluguFont.combo_YAI      = "\u00A7\u00E7\u0069\u00D5";
//TeluguFont.combo_YO       = "\u00A7\u00E7\u00E1";
//TeluguFont.combo_YOO      = "\u00A7\u00E7\u00D6";
TeluguFont.combo_YPOLLU_1 = "\u00B8\u00BA\u00A7"; //Y
//TeluguFont.combo_YPOLLU_2 = "\u00A7\u00FD\u00D5";
TeluguFont.combo_RAA      = "\u004C\u0053"; //Y
TeluguFont.combo_RI       = "\u004C\u006A"; //Y
TeluguFont.combo_RII      = "\u004C\u006B"; //Y
TeluguFont.combo_REELEN   = "\u004C\u00CD"; //Y
TeluguFont.combo_RO       = "\u004C\u00AF"; //Y
TeluguFont.combo_RPOLLU   = "\u004C\u00BA"; //Y
TeluguFont.combo_LI       = "\u00D6"; //Y
//TeluguFont.combo_LII      = "\u004D";
TeluguFont.combo_VI_1     = "\u0025"; //Y
TeluguFont.combo_VI_2     = "\u201A"; //Y
//TeluguFont.combo_VII      = "\u004F";
TeluguFont.combo_SHI      = "\u0062"; //Y
//TeluguFont.combo_SHII     = "\u0051";
TeluguFont.combo_LLI      = "\u0152"; //Y
//TeluguFont.combo_LLII     = "\u0053";
TeluguFont.combo_HAA      = "\u00A5"; //Y

TeluguFont.combo_SHRII    = "\u0024"; //Y

//Vattulu
TeluguFont.vattu_KA       = "\u00E4"; //Y
TeluguFont.vattu_KHA      = "\u00E5"; //Y
TeluguFont.vattu_GA       = "\u00E6"; //Y
TeluguFont.vattu_GHA      = "\u00E7"; //Y

TeluguFont.vattu_CA       = "\u00E8"; //Y
//TeluguFont.vattu_CHA      = "\u0061\u00B4";
TeluguFont.vattu_JA       = "\u00EA"; //Y
TeluguFont.vattu_JHA      = "\u00EB"; //Y
TeluguFont.vattu_NYA      = "\u00EC"; //Y

TeluguFont.vattu_TTA      = "\u00ED"; //Y
TeluguFont.vattu_TTHA     = "\u00EE"; //Y
TeluguFont.vattu_DDA      = "\u00EF"; //Y
TeluguFont.vattu_NNA      = "\u00F1"; //Y

TeluguFont.vattu_TA_1     = "\u00F2"; //Y
//TeluguFont.vattu_TA_2     = "\u006B";
TeluguFont.vattu_THA      = "\u00F3"; //Y
TeluguFont.vattu_DA       = "\u00F4"; //Y
//TeluguFont.vattu_DHA      = "\u006C\u00B4";
TeluguFont.vattu_NA       = "\u00F5"; //Y

TeluguFont.vattu_PA       = "\u00F6"; //Y
//TeluguFont.vattu_PHA      = "\u0070\u00B4";
TeluguFont.vattu_BA       = "\u00F7"; //Y
//TeluguFont.vattu_BHA      = "\u0073\u00B4";
TeluguFont.vattu_MA       = "\u00F8"; //Y

TeluguFont.vattu_YA       = "\u00F9"; //Y
TeluguFont.vattu_RA_1     = "\u00FA"; //Y
TeluguFont.vattu_RA_2     = "\u00FB"; //Y
TeluguFont.vattu_LA       = "\u201D"; //Y
TeluguFont.vattu_VA       = "\u002A"; //Y
TeluguFont.vattu_SHA      = "\u002B"; //Y
TeluguFont.vattu_SSA_1    = "\u003C"; //Y
TeluguFont.vattu_SSA_2    = "\u0075"; //Y
TeluguFont.vattu_SA_1     = "\u003D"; //Y
//TeluguFont.vattu_SA_2     = "\u0072"; //Y
TeluguFont.vattu_HA       = "\u003E"; //Y
TeluguFont.vattu_LLA      = "\u2022"; //Y
TeluguFont.vattu_RRA      = "\u00FC"; //Y

//Conjuncts
//TeluguFont.vattu_TRA      = "\u0059";
//TeluguFont.vattu_TTRA     = "\u005A";

TeluguFont.LQTSINGLE      = "\u0022"; //Y
TeluguFont.RQTSINGLE      = "\u0027"; //Y

//Matches ASCII
TeluguFont.EXCLAM         = "\u0021"; //Y
TeluguFont.PARENLEFT      = "\u0028"; //Y
TeluguFont.PARENRIGT      = "\u0029"; //Y
//TeluguFont.PLUS           = "\u002B";
TeluguFont.COMMA          = "\u002C"; //Y
TeluguFont.HYPHEN         = "\u002D";   //I don't know what the significance is, shows up as '-' on Linux, not displayed on Windows in Firefox
TeluguFont.PERIOD         = "\u002E"; //Y
TeluguFont.SLASH          = "\u002F"; //Y
TeluguFont.COLON          = "\u003A"; //Y
TeluguFont.SEMICOLON      = "\u003B"; //Y
//TeluguFont.EQUALS         = "\u003D";
TeluguFont.QUESTION       = "\u003F"; //Y

TeluguFont.digit_ZERO     = "\u0030"; //Y
TeluguFont.digit_ONE      = "\u0031"; //Y
TeluguFont.digit_TWO      = "\u0032"; //Y
TeluguFont.digit_THREE    = "\u0033"; //Y
TeluguFont.digit_FOUR     = "\u0034"; //Y
TeluguFont.digit_FIVE     = "\u0035"; //Y
TeluguFont.digit_SIX      = "\u0036"; //Y
TeluguFont.digit_SEVEN    = "\u0037"; //Y
TeluguFont.digit_EIGHT    = "\u0038"; //Y
TeluguFont.digit_NINE     = "\u0039"; //Y

TeluguFont.misc_DANDA     = "\u0065"; //Y

//Does not match ASCII
//TeluguFont.DIVIDE         = "\u0023";
//TeluguFont.MULTIPLY       = "\u0024";
//TeluguFont.PIPE           = "\u0049";
//TeluguFont.ASTERISK       = "\u005B";
//TeluguFont.PERCENT        = "\u005D";

//Kommu
TeluguFont.misc_TICK_1    = "\u0052"; //Y
TeluguFont.misc_TICK_2    = "\u0078"; //Y
TeluguFont.misc_TICK_3    = "\u00AB"; //Y
TeluguFont.misc_TICK_4    = "\u00CF"; //Y

TeluguFont.misc_UNKNOWN_1 = "\u0050"; //Y
TeluguFont.misc_UNKNOWN_2 = "\u0051"; //Y
TeluguFont.misc_UNKNOWN_3 = "\u0069"; //Y
TeluguFont.misc_UNKNOWN_4 = "\u0073"; //Y
TeluguFont.misc_UNKNOWN_5 = "\u00CB"; //Y
TeluguFont.misc_UNKNOWN_6 = "\u00E3"; //Y
//TeluguFont.misc_TICK_5    = "\u00BE";
//TeluguFont.misc_TICK_6    = "\u00BF";
//TeluguFont.misc_TICK_7    = "\u00C1";

TeluguFont.misc_vattu_1   = "\u006E"; //Y TODO
TeluguFont.misc_vattu_2   = "\u201E"; //Y TODO
TeluguFont.misc_vattu_3   = "\u201C"; //Y TODO
TeluguFont.misc_vattu_1   = "\u00E9"; //Y TODO

//TeluguFont.extra_HYPHEN   = "\u00D0";
//TeluguFont.extra_QTSINGLE = "\u00D1";

TeluguFont.toPadma = new Object();

TeluguFont.toPadma[TeluguFont.candrabindu] = Padma.candrabindu;
TeluguFont.toPadma[TeluguFont.visarga]  = Padma.visarga;
TeluguFont.toPadma[TeluguFont.virama_1] = Padma.syllbreak;
TeluguFont.toPadma[TeluguFont.virama_2] = Padma.syllbreak;
TeluguFont.toPadma[TeluguFont.virama_3] = Padma.syllbreak;
TeluguFont.toPadma[TeluguFont.virama_4] = Padma.syllbreak;
TeluguFont.toPadma[TeluguFont.virama_5] = Padma.syllbreak;
TeluguFont.toPadma[TeluguFont.virama_6] = Padma.syllbreak;
TeluguFont.toPadma[TeluguFont.anusvara] = Padma.anusvara;

TeluguFont.toPadma[TeluguFont.vowel_A_1] = Padma.vowel_A;
TeluguFont.toPadma[TeluguFont.vowel_A_2] = Padma.vowel_A;
TeluguFont.toPadma[TeluguFont.vowel_AA] = Padma.vowel_AA;
TeluguFont.toPadma[TeluguFont.vowel_I] = Padma.vowel_I;
TeluguFont.toPadma[TeluguFont.vowel_II] = Padma.vowel_II;
TeluguFont.toPadma[TeluguFont.vowel_U] = Padma.vowel_U;
TeluguFont.toPadma[TeluguFont.vowel_UU] = Padma.vowel_UU;
TeluguFont.toPadma[TeluguFont.vowel_R] = Padma.vowel_R;
TeluguFont.toPadma[TeluguFont.vowel_RR] = Padma.vowel_RR;
TeluguFont.toPadma[TeluguFont.vowel_E] = Padma.vowel_E;
TeluguFont.toPadma[TeluguFont.vowel_EE] = Padma.vowel_EE;
TeluguFont.toPadma[TeluguFont.vowel_AI] = Padma.vowel_AI;
TeluguFont.toPadma[TeluguFont.vowel_O] = Padma.vowel_O;
TeluguFont.toPadma[TeluguFont.vowel_OO] = Padma.vowel_OO;
TeluguFont.toPadma[TeluguFont.vowel_AU] = Padma.vowel_AU;

TeluguFont.toPadma[TeluguFont.consnt_KA_1] = Padma.consnt_KA;
TeluguFont.toPadma[TeluguFont.consnt_KA_2] = Padma.consnt_KA;
TeluguFont.toPadma[TeluguFont.consnt_KHA_1] = Padma.consnt_KHA;
TeluguFont.toPadma[TeluguFont.consnt_KHA_2] = Padma.consnt_KHA;
TeluguFont.toPadma[TeluguFont.consnt_GA] = Padma.consnt_GA;
TeluguFont.toPadma[TeluguFont.consnt_GHA] = Padma.consnt_GHA;
TeluguFont.toPadma[TeluguFont.consnt_NGA] = Padma.consnt_NGA;

TeluguFont.toPadma[TeluguFont.consnt_CA] = Padma.consnt_CA;
TeluguFont.toPadma[TeluguFont.consnt_CHA] = Padma.consnt_CHA;
TeluguFont.toPadma[TeluguFont.consnt_JA_1] = Padma.consnt_JA;
TeluguFont.toPadma[TeluguFont.consnt_JA_2] = Padma.consnt_JA;
TeluguFont.toPadma[TeluguFont.consnt_JHA] = Padma.consnt_JHA;
TeluguFont.toPadma[TeluguFont.consnt_NYA] = Padma.consnt_NYA;

TeluguFont.toPadma[TeluguFont.consnt_TTA_1] = Padma.consnt_TTA;
TeluguFont.toPadma[TeluguFont.consnt_TTA_2] = Padma.consnt_TTA;
TeluguFont.toPadma[TeluguFont.consnt_TTA_3] = Padma.consnt_TTA;
TeluguFont.toPadma[TeluguFont.consnt_TTHA] = Padma.consnt_TTHA;
TeluguFont.toPadma[TeluguFont.consnt_DDA] = Padma.consnt_DDA;
TeluguFont.toPadma[TeluguFont.consnt_DDHA] = Padma.consnt_DDHA;
TeluguFont.toPadma[TeluguFont.consnt_NNA] = Padma.consnt_NNA;

TeluguFont.toPadma[TeluguFont.consnt_TA] = Padma.consnt_TA;
TeluguFont.toPadma[TeluguFont.consnt_THA_1] = Padma.consnt_THA;
TeluguFont.toPadma[TeluguFont.consnt_THA_2] = Padma.consnt_THA;
TeluguFont.toPadma[TeluguFont.consnt_DA] = Padma.consnt_DA;
TeluguFont.toPadma[TeluguFont.consnt_DHA] = Padma.consnt_DHA;
TeluguFont.toPadma[TeluguFont.consnt_NA_1] = Padma.consnt_NA;
TeluguFont.toPadma[TeluguFont.consnt_NA_2] = Padma.consnt_NA;

TeluguFont.toPadma[TeluguFont.consnt_PA_1] = Padma.consnt_PA;
TeluguFont.toPadma[TeluguFont.consnt_PA_2] = Padma.consnt_PA;
TeluguFont.toPadma[TeluguFont.consnt_PHA_1]  = Padma.consnt_PHA;
TeluguFont.toPadma[TeluguFont.consnt_PHA_2]  = Padma.consnt_PHA;
TeluguFont.toPadma[TeluguFont.consnt_BA_1] = Padma.consnt_BA;
TeluguFont.toPadma[TeluguFont.consnt_BA_2] = Padma.consnt_BA;
TeluguFont.toPadma[TeluguFont.consnt_BHA]  = Padma.consnt_BHA;
TeluguFont.toPadma[TeluguFont.consnt_MA] = Padma.consnt_MA;

TeluguFont.toPadma[TeluguFont.consnt_YA_1] = Padma.consnt_YA;
TeluguFont.toPadma[TeluguFont.consnt_YA_2] = Padma.consnt_YA;
TeluguFont.toPadma[TeluguFont.consnt_RA] = Padma.consnt_RA;
TeluguFont.toPadma[TeluguFont.consnt_LA_1] = Padma.consnt_LA;
TeluguFont.toPadma[TeluguFont.consnt_LA_2] = Padma.consnt_LA;
TeluguFont.toPadma[TeluguFont.consnt_VA_1] = Padma.consnt_VA;
TeluguFont.toPadma[TeluguFont.consnt_VA_2] = Padma.consnt_VA;
TeluguFont.toPadma[TeluguFont.consnt_SHA] = Padma.consnt_SHA;
TeluguFont.toPadma[TeluguFont.consnt_SSA_1] = Padma.consnt_SSA;
TeluguFont.toPadma[TeluguFont.consnt_SSA_2] = Padma.consnt_SSA;
TeluguFont.toPadma[TeluguFont.consnt_SA_1] = Padma.consnt_SA;
TeluguFont.toPadma[TeluguFont.consnt_SA_2] = Padma.consnt_SA;

TeluguFont.toPadma[TeluguFont.consnt_HA] = Padma.consnt_HA;
TeluguFont.toPadma[TeluguFont.consnt_LLA] = Padma.consnt_LLA;
TeluguFont.toPadma[TeluguFont.consnt_RRA] = Padma.consnt_RRA;


//Gunintamulu
TeluguFont.toPadma[TeluguFont.vowelsn_AA_1]  = Padma.vowelsn_AA;
TeluguFont.toPadma[TeluguFont.vowelsn_AA_2]  = Padma.vowelsn_AA;
TeluguFont.toPadma[TeluguFont.vowelsn_AA_3]  = Padma.vowelsn_AA;
TeluguFont.toPadma[TeluguFont.vowelsn_AA_4]  = Padma.vowelsn_AA;
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
TeluguFont.toPadma[TeluguFont.vowelsn_U_6]   = Padma.vowelsn_U;
TeluguFont.toPadma[TeluguFont.vowelsn_U_7]   = Padma.vowelsn_U;
TeluguFont.toPadma[TeluguFont.vowelsn_UU_1]  = Padma.vowelsn_UU;
TeluguFont.toPadma[TeluguFont.vowelsn_UU_2]  = Padma.vowelsn_UU;
TeluguFont.toPadma[TeluguFont.vowelsn_UU_3]  = Padma.vowelsn_UU;
TeluguFont.toPadma[TeluguFont.vowelsn_UU_4]  = Padma.vowelsn_UU;
TeluguFont.toPadma[TeluguFont.vowelsn_UU_5]  = Padma.vowelsn_UU;
TeluguFont.toPadma[TeluguFont.vowelsn_UU_6]  = Padma.vowelsn_UU;
TeluguFont.toPadma[TeluguFont.vowelsn_UU_7]  = Padma.vowelsn_UU;
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
TeluguFont.toPadma[TeluguFont.vowelsn_EE_1]  = Padma.vowelsn_EE;
TeluguFont.toPadma[TeluguFont.vowelsn_EE_2]  = Padma.vowelsn_EE;
TeluguFont.toPadma[TeluguFont.vowelsn_EE_3]  = Padma.vowelsn_EE;
TeluguFont.toPadma[TeluguFont.vowelsn_EE_4]  = Padma.vowelsn_EE;
TeluguFont.toPadma[TeluguFont.vowelsn_O_1]   = Padma.vowelsn_O;
TeluguFont.toPadma[TeluguFont.vowelsn_O_2]   = Padma.vowelsn_O;
TeluguFont.toPadma[TeluguFont.vowelsn_O_3]   = Padma.vowelsn_O;
TeluguFont.toPadma[TeluguFont.vowelsn_O_4]   = Padma.vowelsn_O;
TeluguFont.toPadma[TeluguFont.vowelsn_OO_1]  = Padma.vowelsn_OO;
TeluguFont.toPadma[TeluguFont.vowelsn_OO_2]  = Padma.vowelsn_OO;
TeluguFont.toPadma[TeluguFont.vowelsn_OO_3]  = Padma.vowelsn_OO;
TeluguFont.toPadma[TeluguFont.vowelsn_OO_4]  = Padma.vowelsn_OO;
TeluguFont.toPadma[TeluguFont.vowelsn_OO_5]  = Padma.vowelsn_OO;
TeluguFont.toPadma[TeluguFont.vowelsn_AU_1]  = Padma.vowelsn_AU;
TeluguFont.toPadma[TeluguFont.vowelsn_AU_2]  = Padma.vowelsn_AU;
TeluguFont.toPadma[TeluguFont.vowelsn_AU_3]  = Padma.vowelsn_AU;
TeluguFont.toPadma[TeluguFont.vowelsn_AU_4]  = Padma.vowelsn_AU;
TeluguFont.toPadma[TeluguFont.vowelsn_AU_5]  = Padma.vowelsn_AU;
TeluguFont.toPadma[TeluguFont.vowelsn_IILEN_1] = Padma.vowelsn_IILEN;
TeluguFont.toPadma[TeluguFont.vowelsn_IILEN_2] = Padma.vowelsn_IILEN;
TeluguFont.toPadma[TeluguFont.vowelsn_EELEN_1] = Padma.vowelsn_EELEN;
TeluguFont.toPadma[TeluguFont.vowelsn_EELEN_2] = Padma.vowelsn_EELEN;
TeluguFont.toPadma[TeluguFont.vowelsn_AILEN_1] = Padma.vowelsn_AILEN;
TeluguFont.toPadma[TeluguFont.vowelsn_AILEN_2] = Padma.vowelsn_AILEN;

//Special Combinations
TeluguFont.toPadma[TeluguFont.combo_KSHA]    = Padma.consnt_KA + Padma.vattu_SSA;
TeluguFont.toPadma[TeluguFont.combo_KHI]     = Padma.consnt_KHA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_KHII]    = Padma.consnt_KHA + Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.combo_GI]      = Padma.consnt_GA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_GII]     = Padma.consnt_GA + Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.combo_GHAA_1]  = Padma.consnt_GHA + Padma.vowelsn_AA;
TeluguFont.toPadma[TeluguFont.combo_GHAA_2]  = Padma.consnt_GHA + Padma.vowelsn_AA;
TeluguFont.toPadma[TeluguFont.combo_GHI]     = Padma.consnt_GHA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_GHII]    = Padma.consnt_GHA + Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.combo_GHU]     = Padma.consnt_GHA + Padma.vowelsn_U;
TeluguFont.toPadma[TeluguFont.combo_GHUU]    = Padma.consnt_GHA + Padma.vowelsn_UU;
TeluguFont.toPadma[TeluguFont.combo_GHPOLLU] = Padma.consnt_GHA + Padma.syllbreak;

TeluguFont.toPadma[TeluguFont.combo_CI]      = Padma.consnt_CA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_CII]     = Padma.consnt_CA + Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.combo_CHI]     = Padma.consnt_CHA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_CHII]    = Padma.consnt_CHA + Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.combo_JI]      = Padma.consnt_JA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_JII]     = Padma.consnt_JA + Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.combo_JU]      = Padma.consnt_JA + Padma.vowelsn_U;
TeluguFont.toPadma[TeluguFont.combo_JUU]     = Padma.consnt_JA + Padma.vowelsn_UU;
TeluguFont.toPadma[TeluguFont.combo_JHI]     = Padma.consnt_JHA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_JHII]    = Padma.consnt_JHA + Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.combo_JHPOLLU] = Padma.consnt_JHA + Padma.syllbreak;

TeluguFont.toPadma[TeluguFont.combo_TTHI]    = Padma.consnt_TTHA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_TTHII]   = Padma.consnt_TTHA + Padma.vowelsn_II;

TeluguFont.toPadma[TeluguFont.combo_TI]      = Padma.consnt_TA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_TII]     = Padma.consnt_TA + Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.combo_THI]     = Padma.consnt_THA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_THII]    = Padma.consnt_THA + Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.combo_DI]      = Padma.consnt_DA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_DII]     = Padma.consnt_DA + Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.combo_DHI]     = Padma.consnt_DHA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_DHII]    = Padma.consnt_DHA + Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.combo_NI]      = Padma.consnt_NA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_NII]     = Padma.consnt_NA + Padma.vowelsn_II;

TeluguFont.toPadma[TeluguFont.combo_PAA]     = Padma.consnt_PA + Padma.vowelsn_AA;
TeluguFont.toPadma[TeluguFont.combo_PAU]     = Padma.consnt_PA + Padma.vowelsn_AU;
TeluguFont.toPadma[TeluguFont.combo_POO]     = Padma.consnt_PA + Padma.vowelsn_OO;
TeluguFont.toPadma[TeluguFont.combo_BI]      = Padma.consnt_BA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_BII]     = Padma.consnt_BA + Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.combo_BHI]     = Padma.consnt_BHA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_BHII]    = Padma.consnt_BHA + Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.combo_MAA]     = Padma.consnt_MA + Padma.vowelsn_AA;
TeluguFont.toPadma[TeluguFont.combo_MI]      = Padma.consnt_MA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_MII]     = Padma.consnt_MA + Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.combo_MU]      = Padma.consnt_MA + Padma.vowelsn_U;
TeluguFont.toPadma[TeluguFont.combo_MUU]     = Padma.consnt_MA + Padma.vowelsn_UU;
TeluguFont.toPadma[TeluguFont.combo_ME_1]    = Padma.consnt_MA + Padma.vowelsn_E;
TeluguFont.toPadma[TeluguFont.combo_ME_2]    = Padma.consnt_MA + Padma.vowelsn_E;
TeluguFont.toPadma[TeluguFont.combo_MEE]     = Padma.consnt_MA + Padma.vowelsn_EE;
TeluguFont.toPadma[TeluguFont.combo_MAI]     = Padma.consnt_MA + Padma.vowelsn_AI;
TeluguFont.toPadma[TeluguFont.combo_MO]      = Padma.consnt_MA + Padma.vowelsn_O;
TeluguFont.toPadma[TeluguFont.combo_MOO]     = Padma.consnt_MA + Padma.vowelsn_OO;
TeluguFont.toPadma[TeluguFont.combo_MPOLLU]  = Padma.consnt_MA + Padma.syllbreak;

TeluguFont.toPadma[TeluguFont.combo_YAA]     = Padma.consnt_YA + Padma.vowelsn_AA;
TeluguFont.toPadma[TeluguFont.combo_YI]      = Padma.consnt_YA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_YII]     = Padma.consnt_YA + Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.combo_YE]      = Padma.consnt_YA + Padma.vowelsn_E;
TeluguFont.toPadma[TeluguFont.combo_YEE]     = Padma.consnt_YA + Padma.vowelsn_EE;
TeluguFont.toPadma[TeluguFont.combo_YAI]     = Padma.consnt_YA + Padma.vowelsn_AI;
TeluguFont.toPadma[TeluguFont.combo_YO]      = Padma.consnt_YA + Padma.vowelsn_O;
TeluguFont.toPadma[TeluguFont.combo_YOO]     = Padma.consnt_YA + Padma.vowelsn_OO;
TeluguFont.toPadma[TeluguFont.combo_YPOLLU_1]= Padma.consnt_YA + Padma.syllbreak;
TeluguFont.toPadma[TeluguFont.combo_YPOLLU_2]= Padma.consnt_YA + Padma.syllbreak;
TeluguFont.toPadma[TeluguFont.combo_RAA]     = Padma.consnt_RA + Padma.vowelsn_AA;
TeluguFont.toPadma[TeluguFont.combo_RI]      = Padma.consnt_RA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_RII]     = Padma.consnt_RA + Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.combo_REELEN]  = Padma.consnt_RA + Padma.vowelsn_EELEN;
TeluguFont.toPadma[TeluguFont.combo_RO]      = Padma.consnt_RA + Padma.vowelsn_O;
TeluguFont.toPadma[TeluguFont.combo_RPOLLU]  = Padma.consnt_RA + Padma.syllbreak;
TeluguFont.toPadma[TeluguFont.combo_LI]      = Padma.consnt_LA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_LII]     = Padma.consnt_LA + Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.combo_VI_1]    = Padma.consnt_VA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_VI_2]    = Padma.consnt_VA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_VII]     = Padma.consnt_VA + Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.combo_SHI]     = Padma.consnt_SHA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_SHII]    = Padma.consnt_SHA + Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.combo_LLI]     = Padma.consnt_LLA + Padma.vowelsn_I;
TeluguFont.toPadma[TeluguFont.combo_LLII]    = Padma.consnt_LLA + Padma.vowelsn_II;
TeluguFont.toPadma[TeluguFont.combo_HAA]     = Padma.consnt_HA + Padma.vowelsn_AA;

TeluguFont.toPadma[TeluguFont.combo_SHRII]   = Padma.consnt_SHA + Padma.vattu_RA + Padma.vowelsn_II;

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
TeluguFont.toPadma[TeluguFont.vattu_TA_1]    = Padma.vattu_TA;
TeluguFont.toPadma[TeluguFont.vattu_TA_2]    = Padma.vattu_TA;
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
TeluguFont.toPadma[TeluguFont.vattu_SSA_1]   = Padma.vattu_SSA;
TeluguFont.toPadma[TeluguFont.vattu_SSA_2]   = Padma.vattu_SSA;
TeluguFont.toPadma[TeluguFont.vattu_SA_1]    = Padma.vattu_SA;
TeluguFont.toPadma[TeluguFont.vattu_SA_2]    = Padma.vattu_SA;
TeluguFont.toPadma[TeluguFont.vattu_HA]      = Padma.vattu_HA;
TeluguFont.toPadma[TeluguFont.vattu_LLA]     = Padma.vattu_LLA;
TeluguFont.toPadma[TeluguFont.vattu_RRA]     = Padma.vattu_RRA;

//Conjuncts
TeluguFont.toPadma[TeluguFont.vattu_TRA]     = Padma.vattu_TA + Padma.vattu_RA;
TeluguFont.toPadma[TeluguFont.vattu_TTRA]    = Padma.vattu_TTA + Padma.vattu_RA;

TeluguFont.toPadma[TeluguFont.LQTSINGLE]  = "\u2018";
TeluguFont.toPadma[TeluguFont.RQTSINGLE]  = "\u2019";
TeluguFont.toPadma[TeluguFont.misc_DANDA] = Padma.danda;

//Miscellaneous(where it doesn't match ASCII representation)
TeluguFont.toPadma[TeluguFont.extra_HYPHEN]   = TeluguFont.HYPHEN;
TeluguFont.toPadma[TeluguFont.DIVIDE]         = "/";        //Should lookup Unicode standard for this and multiply
TeluguFont.toPadma[TeluguFont.MULTIPLY]       = "X";
TeluguFont.toPadma[TeluguFont.PIPE]           = "|";
TeluguFont.toPadma[TeluguFont.ASTERISK]       = "*";
TeluguFont.toPadma[TeluguFont.PERCENT]        = "%";

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
TeluguFont.prefixList[TeluguFont.virama_3]        = true;
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
TeluguFont.prefixList[TeluguFont.vowelsn_EE_1]    = true;
TeluguFont.prefixList[TeluguFont.vowelsn_AILEN_1] = true;
TeluguFont.prefixList[TeluguFont.vattu_RA_1]      = true;

TeluguFont.overloadList = new Object();
TeluguFont.overloadList[TeluguFont.anusvara]      = true;
TeluguFont.overloadList[TeluguFont.vowel_E]       = true;
TeluguFont.overloadList[TeluguFont.consnt_DA]     = true;
TeluguFont.overloadList[TeluguFont.consnt_PA_1]   = true;
TeluguFont.overloadList[TeluguFont.consnt_BA_1]   = true;
TeluguFont.overloadList[TeluguFont.consnt_VA_1]   = true;
TeluguFont.overloadList[TeluguFont.combo_VI_2]    = true;
TeluguFont.overloadList["\u004C\u0056"]           = true;
TeluguFont.overloadList["\u00AA\u00BA"]           = true;
TeluguFont.overloadList["\u00B8"]                 = true;
TeluguFont.overloadList["\u00B8\u00BA"]           = true;

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
