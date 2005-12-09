// $Id: TCSMith.js,v 1.3 2005/12/09 15:06:47 vnagarjuna Exp $ -->

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

function TCSMith()
{
}

//The interface every dynamic font encoding should implement
TCSMith.maxLookupLen = 3;
TCSMith.fontFace     = "TLGmith0";
TCSMith.displayName  = TCSMith.fontFace;
TCSMith.script       = Padma.script_TELUGU;

TCSMith.lookup = function (str) 
{
    return TCSMith.toPadma[str];
}

TCSMith.isPrefixSymbol = function (str)
{
    return TCSMith.prefixList[str] != null;
}

TCSMith.isOverloaded = function (str)
{
    return TCSMith.overloadList[str] != null;
}

TCSMith.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if ((sign1 == Padma.vowelsn_E && sign2 == Padma.vowelsn_EELEN) ||
        (sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_EELEN)) {
            return Padma.vowelsn_EE;
    }
    if ((sign1 == Padma.vowelsn_E && sign2 == Padma.vowelsn_AILEN) ||
        (sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_AILEN)) {
            return Padma.vowelsn_AI;
    }
    if ((sign1 == Padma.vowelsn_E && sign2 == Padma.vowelsn_AA) ||
        (sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_AA)) {
            return Padma.vowelsn_OO;
    }
    if ((sign1 == Padma.vowelsn_O && sign2 == Padma.vowelsn_EELEN) ||
        (sign2 == Padma.vowelsn_O && sign1 == Padma.vowelsn_EELEN)) {
            return Padma.vowelsn_OO;
    }
    if ((sign1 == Padma.vowelsn_E && sign2 == Padma.vowelsn_U) ||
        (sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_U)) {
            return Padma.vowelsn_O;
    }
    if ((sign1 == Padma.vowelsn_E && sign2 == Padma.vowelsn_II) ||
        (sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_II)) {
            return Padma.vowelsn_OO;
    }
    return sign1 + sign2;
}

//Baby steps
//1. Remove redundant symbols
//2. Insert some talakattus (that we have just removed) that will help with ra Gunintam (anusvara and ra are overloaded... argh!!!)
TCSMith.preprocessMessage = function (input)
{
    var output = "", last = null;
    //1.
    for(var i = 0; i < input.length; ++i) {
        var cur = input.charAt(i);
        if (!TCSMith.isRedundant(cur, last))
            output += last = cur;
    }

    //2.
    return TCSMith.insertTalakattuForRaGunintam(output);
}

//Implementation details start here
//0x84, 0xAB, 0xAD, 0xC4, 0xD5, 0xDC,

//Specials
TCSMith.candrabindu    = "\u2021";
TCSMith.visarga        = "\u2026";
TCSMith.virama_1       = "\u00E9";
TCSMith.virama_2       = "\u00EA";
TCSMith.virama_3       = "\u00EB";
TCSMith.virama_4       = "\u00EC";
TCSMith.virama_5       = "\u00ED";
TCSMith.anusvara       = "\u004D";

//Vowels
TCSMith.vowel_A        = "\u0041";
TCSMith.vowel_AA       = "\u0042";
TCSMith.vowel_I        = "\u0043";
TCSMith.vowel_II       = "\u0044";
TCSMith.vowel_U        = "\u0045";
TCSMith.vowel_UU       = "\u0046";
TCSMith.vowel_R        = "\u0065\u00C0\u00C0";
TCSMith.vowel_E        = "\u0047";
TCSMith.vowel_EE       = "\u0048";
TCSMith.vowel_AI       = "\u0049";
TCSMith.vowel_O        = "\u004A";
TCSMith.vowel_OO       = "\u004B";
TCSMith.vowel_AU       = "\u004C";

//Consonants
TCSMith.consnt_KA      = "\u004E";
TCSMith.consnt_KHA_1   = "\u0050";
TCSMith.consnt_KHA_2   = "\u0051";
TCSMith.consnt_GA      = "\u0052";
TCSMith.consnt_GHA     = "\u0064\u00CC\u00C0";
TCSMith.consnt_NGA     = "\u00C5";

TCSMith.consnt_CA      = "\u0053";
TCSMith.consnt_CHA     = "\u0053\u00CB";
TCSMith.consnt_JA      = "\u0054";
TCSMith.consnt_NYA     = "\u00C6";

TCSMith.consnt_TTA_1   = "\u0055";
TCSMith.consnt_TTA_2   = "\u0056";
TCSMith.consnt_TTHA    = "\u0057";
TCSMith.consnt_DDA     = "\u0058";
TCSMith.consnt_DDHA    = "\u0058\u00CB";
TCSMith.consnt_NNA     = "\u0059";

TCSMith.consnt_TA      = "\u005A";
TCSMith.consnt_THA     = "\u0061";
TCSMith.consnt_DA      = "\u0062";
TCSMith.consnt_DHA     = "\u0062\u00CB";
TCSMith.consnt_NA      = "\u0063";

TCSMith.consnt_PA      = "\u0064";
TCSMith.consnt_PHA_1   = "\u0047\u00CC";
TCSMith.consnt_PHA_2   = "\u0064\u00CC";
TCSMith.consnt_BA_1    = "\u0065";
TCSMith.consnt_BA_2    = "\u0066";
TCSMith.consnt_BHA     = "\u0066\u00CB";
TCSMith.consnt_MA      = "\u0067\u00C0";

TCSMith.consnt_YA      = "\u0068\u00D0\u00C0";
TCSMith.consnt_RA      = "\u004D\u00D0";
TCSMith.consnt_LA_1    = "\u0069";
TCSMith.consnt_LA_2    = "\u006A";
TCSMith.consnt_VA      = "\u0067";
TCSMith.consnt_SHA     = "\u006C";
TCSMith.consnt_SSA_1   = "\u006F";
TCSMith.consnt_SSA_2   = "\u0070";
TCSMith.consnt_SA_1    = "\u006D";
TCSMith.consnt_SA_2    = "\u006E";
TCSMith.consnt_HA      = "\u0071";
TCSMith.consnt_LLA     = "\u006B";
TCSMith.consnt_RRA     = "\u0178";

//Gunintamulu
TCSMith.vowelsn_AA_1   = "\u00B0";
TCSMith.vowelsn_AA_2   = "\u00B1";
TCSMith.vowelsn_AA_3   = "\u00B2";
TCSMith.vowelsn_I_1    = "\u00D4";
TCSMith.vowelsn_I_2    = "\u00D5";
TCSMith.vowelsn_I_3    = "\u00D6";
TCSMith.vowelsn_I_4    = "\u00D7";
TCSMith.vowelsn_II_1   = "\u00D8";
TCSMith.vowelsn_II_2   = "\u00D9";
TCSMith.vowelsn_II_3   = "\u00DA";
TCSMith.vowelsn_II_4   = "\u00DB";
TCSMith.vowelsn_U_1    = "\u00B9";
TCSMith.vowelsn_U_2    = "\u00BB";
TCSMith.vowelsn_U_3    = "\u00BD";
TCSMith.vowelsn_U_4    = "\u00C0";
TCSMith.vowelsn_U_5    = "\u00C2";
TCSMith.vowelsn_UU_1   = "\u00BA";
TCSMith.vowelsn_UU_2   = "\u00BC";
TCSMith.vowelsn_UU_3   = "\u00BE";
TCSMith.vowelsn_UU_4   = "\u00C1";
TCSMith.vowelsn_UU_5   = "\u00C3";
TCSMith.vowelsn_R      = "\u00BF";
TCSMith.vowelsn_RR     = "\u2018";
TCSMith.vowelsn_E_1    = "\u00DD";
TCSMith.vowelsn_E_2    = "\u00DE";
TCSMith.vowelsn_E_3    = "\u00DF";
TCSMith.vowelsn_E_4    = "\u00E0";
TCSMith.vowelsn_E_5    = "\u00E1";
TCSMith.vowelsn_E_6    = "\u00E2";
TCSMith.vowelsn_E_7    = "\u00E3";
TCSMith.vowelsn_E_8    = "\u00E4";
TCSMith.vowelsn_E_9    = "\u00E5";
TCSMith.vowelsn_EE     = "\u00E7";
TCSMith.vowelsn_O_1    = "\u00EE";
TCSMith.vowelsn_O_2    = "\u00EF";
TCSMith.vowelsn_O_3    = "\u00F0";
TCSMith.vowelsn_O_4    = "\u00F1";
TCSMith.vowelsn_OO     = "\u00B3";
TCSMith.vowelsn_AU_1   = "\u00B4";
TCSMith.vowelsn_AU_2   = "\u00B5";
TCSMith.vowelsn_AU_3   = "\u00B6";
TCSMith.vowelsn_AU_4   = "\u00B7";
TCSMith.vowelsn_AU_5   = "\u00B8";

TCSMith.vowelsn_EELEN  = "\u00E6";
TCSMith.vowelsn_AILEN_1 = "\u201D";
TCSMith.vowelsn_AILEN_2 = "\u00E8";

//Special Combinations
TCSMith.combo_KSHA     = "\u004F";
TCSMith.combo_KHI      = "\u0077";
TCSMith.combo_GHAA     = "\u0064\u00CC\u00C1";

TCSMith.combo_CI       = "\u0076";
TCSMith.combo_CII      = "\u0076\u00DC";
TCSMith.combo_CHI      = "\u0076\u00CB";
TCSMith.combo_CHII     = "\u0076\u00CB\u00DC";
TCSMith.combo_JI       = "\u00C9";
TCSMith.combo_JII      = "\u00CA";

TCSMith.combo_TI       = "\u0075";
TCSMith.combo_TII      = "\u0075\u00DC";
TCSMith.combo_NI       = "\u0074";
TCSMith.combo_NII      = "\u0074\u00DC";

TCSMith.combo_PAA      = "\u0047\u00B1";
TCSMith.combo_PO       = "\u0047\u00EF";
TCSMith.combo_POO      = "\u0047\u00B3";
TCSMith.combo_PAU      = "\u0047\u00B6";
TCSMith.combo_BI       = "\u0078";
TCSMith.combo_BII      = "\u0078\u00DC";
TCSMith.combo_BHI      = "\u0078\u00CB";
TCSMith.combo_BHII     = "\u0078\u00CB\u00DC";
TCSMith.combo_MAA      = "\u0067\u00C1";
TCSMith.combo_MI       = "\u0073\u00C0";
TCSMith.combo_MII      = "\u0073\u00DC\u00C0";
TCSMith.combo_MAU      = "\u0067\u00B7";
TCSMith.combo_MPOLLU   = "\u0067\u00EB\u00C0";
TCSMith.combo_M_EELEN  = "\u0067\u00E6\u00C0";

TCSMith.combo_YAA      = "\u0068\u00D0\u00C1";
TCSMith.combo_YI       = "\u0068\u00C0";
TCSMith.combo_YII      = "\u0068\u00C1";
TCSMith.combo_Y_EELEN  = "\u0068\u00E6\u00C0";
TCSMith.combo_RAA      = "\u004D\u00B0";
TCSMith.combo_RI       = "\u004D\u00D5";
TCSMith.combo_RII      = "\u004D\u00D9";
TCSMith.combo_RPOLLU   = "\u004D\u00E9";
TCSMith.combo_RO       = "\u004D\u00EE";
TCSMith.combo_ROO      = "\u004D\u00EE\u00E6";
TCSMith.combo_LI       = "\u0079";
TCSMith.combo_LII      = "\u0079\u00DC";
TCSMith.combo_VI       = "\u0073";
TCSMith.combo_VII      = "\u0073\u00DC";
TCSMith.combo_SHI      = "\u0072";
TCSMith.combo_SHII     = "\u0072\u00DC";
TCSMith.combo_SHRII    = "\u02C6";
TCSMith.combo_LLI      = "\u007A";
TCSMith.combo_LLII     = "\u007A\u00DC";
TCSMith.combo_HAA      = "\u00C7";

//Vattulu
TCSMith.vattu_KA       = "\u00A4";
TCSMith.vattu_KHA      = "\u2022";
TCSMith.vattu_GA       = "\u00CD";
TCSMith.vattu_GHA      = "\u2013";

TCSMith.vattu_CA       = "\u00A5";
TCSMith.vattu_CHA      = "\u00A5\u00AE";
TCSMith.vattu_JA       = "\u2014";
TCSMith.vattu_JHA      = "\u02DC";
TCSMith.vattu_NYA      = "\u2122";

TCSMith.vattu_TTA      = "\u00CE";
TCSMith.vattu_TTHA     = "\u00F3";
TCSMith.vattu_DDA      = "\u00CF";
TCSMith.vattu_NNA      = "\u0161";

TCSMith.vattu_TA       = "\u00F2";
TCSMith.vattu_THA      = "\u203A";
TCSMith.vattu_DA       = "\u00F4";
TCSMith.vattu_DHA      = "\u00F4\u00AF";
TCSMith.vattu_NA       = "\u00A6";

TCSMith.vattu_PA       = "\u00A7";
TCSMith.vattu_PHA      = "\u00A7\u00AE";
TCSMith.vattu_BA       = "\u00A8";
TCSMith.vattu_BHA      = "\u00A8\u00AE";
TCSMith.vattu_MA       = "\u00A9";

TCSMith.vattu_YA       = "\u00AA";
TCSMith.vattu_RA_1     = "\u00AB";
TCSMith.vattu_RA_2     = "\u00C8";
TCSMith.vattu_LA       = "\u00F5";
TCSMith.vattu_VA       = "\u00A1";
TCSMith.vattu_SHA      = "\u00A2";
TCSMith.vattu_SSA      = "\u2019";
TCSMith.vattu_SA       = "\u00A3";
TCSMith.vattu_HA       = "\u201C";
TCSMith.vattu_LLA      = "\u00AC";
TCSMith.vattu_RRA      = "\u0153";

//Danda and double danda
TCSMith.misc_danda     = "\u2020";
TCSMith.misc_ddanda    = "\u2020\u2020";

TCSMith.misc_YBASE     = "\u0068";

//Matches ASCII
TCSMith.EXCLAM         = "\u0021";
TCSMith.QTDOUBLE       = "\u0022";
TCSMith.POUND          = "\u0023";
TCSMith.DOLLAR         = "\u0024";
TCSMith.PERCENT        = "\u0025";
TCSMith.AMPERSAND      = "\u0026";
TCSMith.QTSINGLE       = "\u0027";
TCSMith.PARENLEFT      = "\u0028";
TCSMith.PARENRIGT      = "\u0029";
TCSMith.ASTERISK       = "\u002A";
TCSMith.PLUS           = "\u002B";
TCSMith.COMMA          = "\u002C";
TCSMith.HYPHEN         = "\u002D";
TCSMith.PERIOD         = "\u002E";
TCSMith.SLASH          = "\u002F";
TCSMith.digit_ZERO     = "\u0030";
TCSMith.digit_ONE      = "\u0031";
TCSMith.digit_TWO      = "\u0032";
TCSMith.digit_THREE    = "\u0033";
TCSMith.digit_FOUR     = "\u0034";
TCSMith.digit_FIVE     = "\u0035";
TCSMith.digit_SIX      = "\u0036";
TCSMith.digit_SEVEN    = "\u0037";
TCSMith.digit_EIGHT    = "\u0038";
TCSMith.digit_NINE     = "\u0039";
TCSMith.COLON          = "\u003A";
TCSMith.SEMICOLON      = "\u003B";
TCSMith.LESSTHAN       = "\u003C";
TCSMith.EQUALS         = "\u003D";
TCSMith.GREATERTHAN    = "\u003E";
TCSMith.QUESTION       = "\u003F";
TCSMith.ATSIGN         = "\u0040";
TCSMith.PARENLEFT      = "\u005B";
TCSMith.BACKSLASH      = "\u005C";
TCSMith.PARENRIGHT     = "\u005D";
TCSMith.CARET          = "\u005E";
TCSMith.UNDERSCORE     = "\u005F";
TCSMith.BACKQUOTE      = "\u0060"; //circumflex?
TCSMith.CURLYBKTLEFT   = "\u007B";
TCSMith.PIPE           = "\u007C";
TCSMith.CURLYBKTRIGHT  = "\u007D";
TCSMith.TILDE          = "\u007E";

//Kommu
TCSMith.misc_TICK_1    = "\u00D0";
TCSMith.misc_TICK_2    = "\u00D1";
TCSMith.misc_TICK_3    = "\u00D2";
TCSMith.misc_TICK_4    = "\u00D3";
TCSMith.misc_UNKNOWN_1 = "\u00F6";
TCSMith.misc_UNKNOWN_2 = "\u00F7";
TCSMith.misc_UNKNOWN_3 = "\u00F8";
TCSMith.misc_UNKNOWN_4 = "\u00F9";
TCSMith.misc_UNKNOWN_5 = "\u00FA";
TCSMith.misc_UNKNOWN_6 = "\u00FB";
TCSMith.misc_UNKNOWN_7 = "\u00FC";
TCSMith.misc_UNKNOWN_8 = "\u00FD";
TCSMith.misc_UNKNOWN_9 = "\u00FE";
TCSMith.misc_UNKNOWN_A = "\u00FF";

TCSMith.misc_vattu_1   = "\u00AE";
TCSMith.misc_vattu_2   = "\u00AF";
TCSMith.misc_vattu_3   = "\u00CB";
TCSMith.misc_vattu_4   = "\u00CC";

TCSMith.toPadma = new Object();

TCSMith.toPadma[TCSMith.candrabindu] = Padma.candrabindu;
TCSMith.toPadma[TCSMith.visarga]  = Padma.visarga;
TCSMith.toPadma[TCSMith.virama_1] = Padma.syllbreak;
TCSMith.toPadma[TCSMith.virama_2] = Padma.syllbreak;
TCSMith.toPadma[TCSMith.virama_3] = Padma.syllbreak;
TCSMith.toPadma[TCSMith.virama_4] = Padma.syllbreak;
TCSMith.toPadma[TCSMith.virama_5] = Padma.syllbreak;
TCSMith.toPadma[TCSMith.anusvara] = Padma.anusvara;

TCSMith.toPadma[TCSMith.vowel_A]  = Padma.vowel_A;
TCSMith.toPadma[TCSMith.vowel_AA] = Padma.vowel_AA;
TCSMith.toPadma[TCSMith.vowel_I]  = Padma.vowel_I;
TCSMith.toPadma[TCSMith.vowel_II] = Padma.vowel_II;
TCSMith.toPadma[TCSMith.vowel_U]  = Padma.vowel_U;
TCSMith.toPadma[TCSMith.vowel_UU] = Padma.vowel_UU;
TCSMith.toPadma[TCSMith.vowel_R]  = Padma.vowel_R;
TCSMith.toPadma[TCSMith.vowel_E]  = Padma.vowel_E;
TCSMith.toPadma[TCSMith.vowel_EE] = Padma.vowel_EE;
TCSMith.toPadma[TCSMith.vowel_AI] = Padma.vowel_AI;
TCSMith.toPadma[TCSMith.vowel_O]  = Padma.vowel_O;
TCSMith.toPadma[TCSMith.vowel_OO] = Padma.vowel_OO;
TCSMith.toPadma[TCSMith.vowel_AU] = Padma.vowel_AU;

TCSMith.toPadma[TCSMith.consnt_KA]    = Padma.consnt_KA;
TCSMith.toPadma[TCSMith.consnt_KHA_1] = Padma.consnt_KHA;
TCSMith.toPadma[TCSMith.consnt_KHA_2] = Padma.consnt_KHA;
TCSMith.toPadma[TCSMith.consnt_GA]    = Padma.consnt_GA;
TCSMith.toPadma[TCSMith.consnt_GHA]   = Padma.consnt_GHA;
TCSMith.toPadma[TCSMith.consnt_NGA]   = Padma.consnt_NGA;

TCSMith.toPadma[TCSMith.consnt_CA]  = Padma.consnt_CA;
TCSMith.toPadma[TCSMith.consnt_CHA] = Padma.consnt_CHA;
TCSMith.toPadma[TCSMith.consnt_JA]  = Padma.consnt_JA;
TCSMith.toPadma[TCSMith.consnt_NYA] = Padma.consnt_NYA;

TCSMith.toPadma[TCSMith.consnt_TTA_1] = Padma.consnt_TTA;
TCSMith.toPadma[TCSMith.consnt_TTA_2] = Padma.consnt_TTA;
TCSMith.toPadma[TCSMith.consnt_TTHA]  = Padma.consnt_TTHA;
TCSMith.toPadma[TCSMith.consnt_DDA]   = Padma.consnt_DDA;
TCSMith.toPadma[TCSMith.consnt_DDHA]  = Padma.consnt_DDHA;
TCSMith.toPadma[TCSMith.consnt_NNA]   = Padma.consnt_NNA;

TCSMith.toPadma[TCSMith.consnt_TA]  = Padma.consnt_TA;
TCSMith.toPadma[TCSMith.consnt_THA] = Padma.consnt_THA;
TCSMith.toPadma[TCSMith.consnt_DA]  = Padma.consnt_DA;
TCSMith.toPadma[TCSMith.consnt_DHA] = Padma.consnt_DHA;
TCSMith.toPadma[TCSMith.consnt_NA]  = Padma.consnt_NA;

TCSMith.toPadma[TCSMith.consnt_PA]  = Padma.consnt_PA;
TCSMith.toPadma[TCSMith.consnt_PHA_1] = Padma.consnt_PHA;
TCSMith.toPadma[TCSMith.consnt_PHA_2] = Padma.consnt_PHA;
TCSMith.toPadma[TCSMith.consnt_BA_1] = Padma.consnt_BA;
TCSMith.toPadma[TCSMith.consnt_BA_2] = Padma.consnt_BA;
TCSMith.toPadma[TCSMith.consnt_BHA]  = Padma.consnt_BHA;
TCSMith.toPadma[TCSMith.consnt_MA] = Padma.consnt_MA;

TCSMith.toPadma[TCSMith.consnt_YA] = Padma.consnt_YA;
TCSMith.toPadma[TCSMith.consnt_RA] = Padma.consnt_RA;
TCSMith.toPadma[TCSMith.consnt_LA_1] = Padma.consnt_LA;
TCSMith.toPadma[TCSMith.consnt_LA_2] = Padma.consnt_LA;
TCSMith.toPadma[TCSMith.consnt_VA] = Padma.consnt_VA;
TCSMith.toPadma[TCSMith.consnt_SHA] = Padma.consnt_SHA;
TCSMith.toPadma[TCSMith.consnt_SSA_1] = Padma.consnt_SSA;
TCSMith.toPadma[TCSMith.consnt_SSA_2] = Padma.consnt_SSA;
TCSMith.toPadma[TCSMith.consnt_SA_1] = Padma.consnt_SA;
TCSMith.toPadma[TCSMith.consnt_SA_2] = Padma.consnt_SA;
TCSMith.toPadma[TCSMith.consnt_HA] = Padma.consnt_HA;
TCSMith.toPadma[TCSMith.consnt_LLA] = Padma.consnt_LLA;
TCSMith.toPadma[TCSMith.consnt_RRA] = Padma.consnt_RRA;

//Gunintamulu
TCSMith.toPadma[TCSMith.vowelsn_AA_1]  = Padma.vowelsn_AA;
TCSMith.toPadma[TCSMith.vowelsn_AA_2]  = Padma.vowelsn_AA;
TCSMith.toPadma[TCSMith.vowelsn_AA_3]  = Padma.vowelsn_AA;
TCSMith.toPadma[TCSMith.vowelsn_I_1]   = Padma.vowelsn_I;
TCSMith.toPadma[TCSMith.vowelsn_I_2]   = Padma.vowelsn_I;
TCSMith.toPadma[TCSMith.vowelsn_I_3]   = Padma.vowelsn_I;
TCSMith.toPadma[TCSMith.vowelsn_I_4]   = Padma.vowelsn_I;
TCSMith.toPadma[TCSMith.vowelsn_II_1]  = Padma.vowelsn_II;
TCSMith.toPadma[TCSMith.vowelsn_II_2]  = Padma.vowelsn_II;
TCSMith.toPadma[TCSMith.vowelsn_II_3]  = Padma.vowelsn_II;
TCSMith.toPadma[TCSMith.vowelsn_II_4]  = Padma.vowelsn_II;
TCSMith.toPadma[TCSMith.vowelsn_U_1]   = Padma.vowelsn_U;
TCSMith.toPadma[TCSMith.vowelsn_U_2]   = Padma.vowelsn_U;
TCSMith.toPadma[TCSMith.vowelsn_U_3]   = Padma.vowelsn_U;
TCSMith.toPadma[TCSMith.vowelsn_U_4]   = Padma.vowelsn_U;
TCSMith.toPadma[TCSMith.vowelsn_U_5]   = Padma.vowelsn_U;
TCSMith.toPadma[TCSMith.vowelsn_UU_1]  = Padma.vowelsn_UU;
TCSMith.toPadma[TCSMith.vowelsn_UU_2]  = Padma.vowelsn_UU;
TCSMith.toPadma[TCSMith.vowelsn_UU_3]  = Padma.vowelsn_UU;
TCSMith.toPadma[TCSMith.vowelsn_UU_4]  = Padma.vowelsn_UU;
TCSMith.toPadma[TCSMith.vowelsn_UU_5]  = Padma.vowelsn_UU;
TCSMith.toPadma[TCSMith.vowelsn_R]     = Padma.vowelsn_R;
TCSMith.toPadma[TCSMith.vowelsn_RR]    = Padma.vowelsn_RR;
TCSMith.toPadma[TCSMith.vowelsn_E_1]   = Padma.vowelsn_E;
TCSMith.toPadma[TCSMith.vowelsn_E_2]   = Padma.vowelsn_E;
TCSMith.toPadma[TCSMith.vowelsn_E_3]   = Padma.vowelsn_E;
TCSMith.toPadma[TCSMith.vowelsn_E_4]   = Padma.vowelsn_E;
TCSMith.toPadma[TCSMith.vowelsn_E_5]   = Padma.vowelsn_E;
TCSMith.toPadma[TCSMith.vowelsn_E_6]   = Padma.vowelsn_E;
TCSMith.toPadma[TCSMith.vowelsn_E_7]   = Padma.vowelsn_E;
TCSMith.toPadma[TCSMith.vowelsn_E_8]   = Padma.vowelsn_E;
TCSMith.toPadma[TCSMith.vowelsn_E_9]   = Padma.vowelsn_E;
TCSMith.toPadma[TCSMith.vowelsn_EE]    = Padma.vowelsn_EE;
TCSMith.toPadma[TCSMith.vowelsn_O_1]   = Padma.vowelsn_O;
TCSMith.toPadma[TCSMith.vowelsn_O_2]   = Padma.vowelsn_O;
TCSMith.toPadma[TCSMith.vowelsn_O_3]   = Padma.vowelsn_O;
TCSMith.toPadma[TCSMith.vowelsn_O_4]   = Padma.vowelsn_O;
TCSMith.toPadma[TCSMith.vowelsn_OO]    = Padma.vowelsn_OO;
TCSMith.toPadma[TCSMith.vowelsn_AU_1]  = Padma.vowelsn_AU;
TCSMith.toPadma[TCSMith.vowelsn_AU_2]  = Padma.vowelsn_AU;
TCSMith.toPadma[TCSMith.vowelsn_AU_3]  = Padma.vowelsn_AU;
TCSMith.toPadma[TCSMith.vowelsn_AU_4]  = Padma.vowelsn_AU;
TCSMith.toPadma[TCSMith.vowelsn_AU_5]  = Padma.vowelsn_AU;
TCSMith.toPadma[TCSMith.vowelsn_EELEN] = Padma.vowelsn_EELEN;
TCSMith.toPadma[TCSMith.vowelsn_AILEN_1] = Padma.vowelsn_AILEN;
TCSMith.toPadma[TCSMith.vowelsn_AILEN_2] = Padma.vowelsn_AILEN;

//Special Combinations
TCSMith.toPadma[TCSMith.combo_KSHA]    = Padma.consnt_KA + Padma.vattu_SSA;
TCSMith.toPadma[TCSMith.combo_KHI]     = Padma.consnt_KHA + Padma.vowelsn_I;
TCSMith.toPadma[TCSMith.combo_GHAA]    = Padma.consnt_GHA + Padma.vowelsn_AA;

TCSMith.toPadma[TCSMith.combo_CI]      = Padma.consnt_CA + Padma.vowelsn_I;
TCSMith.toPadma[TCSMith.combo_CII]     = Padma.consnt_CA + Padma.vowelsn_II;
TCSMith.toPadma[TCSMith.combo_CHI]     = Padma.consnt_CHA + Padma.vowelsn_I;
TCSMith.toPadma[TCSMith.combo_CHII]    = Padma.consnt_CHA + Padma.vowelsn_II;
TCSMith.toPadma[TCSMith.combo_JI]      = Padma.consnt_JA + Padma.vowelsn_I;
TCSMith.toPadma[TCSMith.combo_JII]     = Padma.consnt_JA + Padma.vowelsn_II;

TCSMith.toPadma[TCSMith.combo_TI]      = Padma.consnt_TA + Padma.vowelsn_I;
TCSMith.toPadma[TCSMith.combo_TII]     = Padma.consnt_TA + Padma.vowelsn_II;
TCSMith.toPadma[TCSMith.combo_NI]      = Padma.consnt_NA + Padma.vowelsn_I;
TCSMith.toPadma[TCSMith.combo_NII]     = Padma.consnt_NA + Padma.vowelsn_II;

TCSMith.toPadma[TCSMith.combo_PAA]     = Padma.consnt_PA + Padma.vowelsn_AA;
TCSMith.toPadma[TCSMith.combo_PO]      = Padma.consnt_PA + Padma.vowelsn_O;
TCSMith.toPadma[TCSMith.combo_POO]     = Padma.consnt_PA + Padma.vowelsn_OO;
TCSMith.toPadma[TCSMith.combo_PAU]     = Padma.consnt_PA + Padma.vowelsn_AU;
TCSMith.toPadma[TCSMith.combo_BI]      = Padma.consnt_BA + Padma.vowelsn_I;
TCSMith.toPadma[TCSMith.combo_BII]     = Padma.consnt_BA + Padma.vowelsn_II;
TCSMith.toPadma[TCSMith.combo_BHI]     = Padma.consnt_BHA + Padma.vowelsn_I;
TCSMith.toPadma[TCSMith.combo_BHII]    = Padma.consnt_BHA + Padma.vowelsn_II;
TCSMith.toPadma[TCSMith.combo_MAA]     = Padma.consnt_MA + Padma.vowelsn_AA;
TCSMith.toPadma[TCSMith.combo_MI]      = Padma.consnt_MA + Padma.vowelsn_I;
TCSMith.toPadma[TCSMith.combo_MII]     = Padma.consnt_MA + Padma.vowelsn_II;
TCSMith.toPadma[TCSMith.combo_MAU]     = Padma.consnt_MA + Padma.vowelsn_AU;
TCSMith.toPadma[TCSMith.combo_MPOLLU]  = Padma.consnt_MA + Padma.syllbreak;
TCSMith.toPadma[TCSMith.combo_M_EELEN] = Padma.consnt_MA + Padma.vowelsn_EELEN;

TCSMith.toPadma[TCSMith.combo_YAA]     = Padma.consnt_YA + Padma.vowelsn_AA;
TCSMith.toPadma[TCSMith.combo_YI]      = Padma.consnt_YA + Padma.vowelsn_I;
TCSMith.toPadma[TCSMith.combo_YII]     = Padma.consnt_YA + Padma.vowelsn_II;
TCSMith.toPadma[TCSMith.combo_Y_EELEN] = Padma.consnt_YA + Padma.vowelsn_EELEN;
TCSMith.toPadma[TCSMith.combo_RAA]     = Padma.consnt_RA + Padma.vowelsn_AA;
TCSMith.toPadma[TCSMith.combo_RI]      = Padma.consnt_RA + Padma.vowelsn_I;
TCSMith.toPadma[TCSMith.combo_RII]     = Padma.consnt_RA + Padma.vowelsn_II;
TCSMith.toPadma[TCSMith.combo_RO]      = Padma.consnt_RA + Padma.vowelsn_O;
TCSMith.toPadma[TCSMith.combo_ROO]     = Padma.consnt_RA + Padma.vowelsn_OO;
TCSMith.toPadma[TCSMith.combo_RPOLLU]  = Padma.consnt_RA + Padma.syllbreak;
TCSMith.toPadma[TCSMith.combo_LI]      = Padma.consnt_LA + Padma.vowelsn_I;
TCSMith.toPadma[TCSMith.combo_LII]     = Padma.consnt_LA + Padma.vowelsn_II;
TCSMith.toPadma[TCSMith.combo_VI]      = Padma.consnt_VA + Padma.vowelsn_I;
TCSMith.toPadma[TCSMith.combo_VII]     = Padma.consnt_VA + Padma.vowelsn_II;
TCSMith.toPadma[TCSMith.combo_SHI]     = Padma.consnt_SHA + Padma.vowelsn_I;
TCSMith.toPadma[TCSMith.combo_SHII]    = Padma.consnt_SHA + Padma.vowelsn_II;
TCSMith.toPadma[TCSMith.combo_SHRII]   = Padma.consnt_SHA + Padma.vattu_RA + Padma.vowelsn_II;
TCSMith.toPadma[TCSMith.combo_LLI]     = Padma.consnt_LLA + Padma.vowelsn_I;
TCSMith.toPadma[TCSMith.combo_LLII]    = Padma.consnt_LLA + Padma.vowelsn_II;
TCSMith.toPadma[TCSMith.combo_HAA]     = Padma.consnt_HA + Padma.vowelsn_AA;

//Vattulu
TCSMith.toPadma[TCSMith.vattu_KA]      = Padma.vattu_KA;
TCSMith.toPadma[TCSMith.vattu_KHA]     = Padma.vattu_KHA;
TCSMith.toPadma[TCSMith.vattu_GA]      = Padma.vattu_GA;
TCSMith.toPadma[TCSMith.vattu_GHA]     = Padma.vattu_GHA;
TCSMith.toPadma[TCSMith.vattu_CA]      = Padma.vattu_CA;
TCSMith.toPadma[TCSMith.vattu_CHA]     = Padma.vattu_CHA;
TCSMith.toPadma[TCSMith.vattu_JA]      = Padma.vattu_JA;
TCSMith.toPadma[TCSMith.vattu_JHA]     = Padma.vattu_JHA;
TCSMith.toPadma[TCSMith.vattu_NYA]     = Padma.vattu_NYA;
TCSMith.toPadma[TCSMith.vattu_TTA]     = Padma.vattu_TTA;
TCSMith.toPadma[TCSMith.vattu_TTHA]    = Padma.vattu_TTHA;
TCSMith.toPadma[TCSMith.vattu_DDA]     = Padma.vattu_DDA;
TCSMith.toPadma[TCSMith.vattu_NNA]     = Padma.vattu_NNA;
TCSMith.toPadma[TCSMith.vattu_TA]      = Padma.vattu_TA;
TCSMith.toPadma[TCSMith.vattu_THA]     = Padma.vattu_THA;
TCSMith.toPadma[TCSMith.vattu_DA]      = Padma.vattu_DA;
TCSMith.toPadma[TCSMith.vattu_DHA]     = Padma.vattu_DHA;
TCSMith.toPadma[TCSMith.vattu_NA]      = Padma.vattu_NA;
TCSMith.toPadma[TCSMith.vattu_PA]      = Padma.vattu_PA;
TCSMith.toPadma[TCSMith.vattu_PHA]     = Padma.vattu_PHA;
TCSMith.toPadma[TCSMith.vattu_BA]      = Padma.vattu_BA;
TCSMith.toPadma[TCSMith.vattu_BHA]     = Padma.vattu_BHA;
TCSMith.toPadma[TCSMith.vattu_MA]      = Padma.vattu_MA;
TCSMith.toPadma[TCSMith.vattu_YA]      = Padma.vattu_YA;
TCSMith.toPadma[TCSMith.vattu_RA_1]    = Padma.vattu_RA;
TCSMith.toPadma[TCSMith.vattu_RA_2]    = Padma.vattu_RA;
TCSMith.toPadma[TCSMith.vattu_LA]      = Padma.vattu_LA;
TCSMith.toPadma[TCSMith.vattu_VA]      = Padma.vattu_VA;
TCSMith.toPadma[TCSMith.vattu_SHA]     = Padma.vattu_SHA;
TCSMith.toPadma[TCSMith.vattu_SSA]     = Padma.vattu_SSA;
TCSMith.toPadma[TCSMith.vattu_SA]      = Padma.vattu_SA;
TCSMith.toPadma[TCSMith.vattu_HA]      = Padma.vattu_HA;
TCSMith.toPadma[TCSMith.vattu_LLA]     = Padma.vattu_LLA;
TCSMith.toPadma[TCSMith.vattu_RRA]     = Padma.vattu_RRA;

TCSMith.toPadma[TCSMith.misc_danda]     = Padma.danda;
TCSMith.toPadma[TCSMith.misc_ddanda]    = Padma.ddanda;

TCSMith.redundantList = new Object();
TCSMith.redundantList[TCSMith.misc_TICK_1]    = true;
TCSMith.redundantList[TCSMith.misc_TICK_2]    = true;
TCSMith.redundantList[TCSMith.misc_TICK_3]    = true;
TCSMith.redundantList[TCSMith.misc_TICK_4]    = true;
TCSMith.redundantList[TCSMith.misc_UNKNOWN_1] = true;
TCSMith.redundantList[TCSMith.misc_UNKNOWN_2] = true;
TCSMith.redundantList[TCSMith.misc_UNKNOWN_3] = true;
TCSMith.redundantList[TCSMith.misc_UNKNOWN_4] = true;
TCSMith.redundantList[TCSMith.misc_UNKNOWN_5] = true;
TCSMith.redundantList[TCSMith.misc_UNKNOWN_6] = true;
TCSMith.redundantList[TCSMith.misc_UNKNOWN_7] = true;
TCSMith.redundantList[TCSMith.misc_UNKNOWN_8] = true;
TCSMith.redundantList[TCSMith.misc_UNKNOWN_9] = true;
TCSMith.redundantList[TCSMith.misc_UNKNOWN_A] = true;
//TCSMith.redundantList[TCSMith.HYPHEN]      = true;

TCSMith.prefixList = new Object();
TCSMith.prefixList[TCSMith.virama_2]        = true;
TCSMith.prefixList[TCSMith.vattu_RA_2]      = true;
TCSMith.prefixList[TCSMith.vowelsn_I_3]     = true;
TCSMith.prefixList[TCSMith.vowelsn_II_3]    = true;
TCSMith.prefixList[TCSMith.vowelsn_E_1]     = true;
TCSMith.prefixList[TCSMith.vowelsn_E_2]     = true;
TCSMith.prefixList[TCSMith.vowelsn_E_3]     = true;
TCSMith.prefixList[TCSMith.vowelsn_E_4]     = true;
TCSMith.prefixList[TCSMith.vowelsn_E_5]     = true;
TCSMith.prefixList[TCSMith.vowelsn_E_6]     = true;
TCSMith.prefixList[TCSMith.vowelsn_E_7]     = true;
TCSMith.prefixList[TCSMith.vowelsn_E_8]     = true;
TCSMith.prefixList[TCSMith.vowelsn_E_9]     = true;
TCSMith.prefixList[TCSMith.vowelsn_EE]      = true;
TCSMith.prefixList[TCSMith.vowelsn_AILEN_2] = true;

TCSMith.overloadList = new Object();
TCSMith.overloadList[TCSMith.anusvara]    = true;
TCSMith.overloadList[TCSMith.vowel_E]     = true;
TCSMith.overloadList[TCSMith.consnt_CA]   = true;
TCSMith.overloadList[TCSMith.consnt_DDA]  = true;
TCSMith.overloadList[TCSMith.consnt_DA]   = true;
TCSMith.overloadList[TCSMith.consnt_PA]   = true;
TCSMith.overloadList[TCSMith.consnt_PHA_2] = true;
TCSMith.overloadList[TCSMith.consnt_BA_1] = true;
TCSMith.overloadList[TCSMith.consnt_BA_2] = true;
TCSMith.overloadList[TCSMith.consnt_VA]   = true;
TCSMith.overloadList[TCSMith.vattu_CA]    = true;
TCSMith.overloadList[TCSMith.vattu_DA]    = true;
TCSMith.overloadList[TCSMith.vattu_PA]    = true;
TCSMith.overloadList[TCSMith.vattu_BA]    = true;
TCSMith.overloadList[TCSMith.combo_CI]    = true;
TCSMith.overloadList[TCSMith.combo_CHI]   = true;
TCSMith.overloadList[TCSMith.combo_TI]    = true;
TCSMith.overloadList[TCSMith.combo_NI]    = true;
TCSMith.overloadList[TCSMith.combo_BI]    = true;
TCSMith.overloadList[TCSMith.combo_BHI]   = true;
TCSMith.overloadList[TCSMith.combo_RO]    = true;
TCSMith.overloadList[TCSMith.combo_LI]    = true;
TCSMith.overloadList[TCSMith.combo_VI]    = true;
TCSMith.overloadList[TCSMith.combo_VII]   = true;
TCSMith.overloadList[TCSMith.combo_SHI]   = true;
TCSMith.overloadList[TCSMith.combo_LLI]   = true;
TCSMith.overloadList["\u0065\u00C0"]      = true;
TCSMith.overloadList["\u0067\u00E6"]      = true;
TCSMith.overloadList["\u0067\u00EB"]      = true;
TCSMith.overloadList[TCSMith.misc_YBASE]  = true;
TCSMith.overloadList["\u0068\u00D0"]      = true;
TCSMith.overloadList["\u0068\u00E6"]      = true;
TCSMith.overloadList[TCSMith.misc_danda]  = true;

TCSMith.isRedundant = function (str, prev)
{
    if (str == TCSMith.misc_TICK_1 && (prev == TCSMith.anusvara || prev == TCSMith.misc_YBASE))
        return false;
    return TCSMith.redundantList[str] != null;
}

//Terrible hack because this font overloads anusvara and ra
//This will take care of all cases when a vattu follows ra
TCSMith.insertTalakattuForRaGunintam = function (str)
{
    var output = "", last = null, added = false;
    for(var i = 0; i < str.length; ++i) {
        var cur = str.charAt(i);
        if (last == TCSMith.anusvara && !added) {
            var val = TCSMith.lookup(cur);
            if (val != null && Padma.getType(val.charAt(0)) == Padma.type_vattu && !TCSMith.isPrefixSymbol(cur))
                    output += TCSMith.misc_TICK_1;
            output += cur;
        }
        else if (cur == TCSMith.anusvara && last != null && TCSMith.isPrefixSymbol(last)) {
            val = TCSMith.lookup(last);
            output += cur;
            if (val == Padma.vowelsn_E) {
                output += TCSMith.misc_TICK_1;
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
