// $Id: Eenadu.js,v 1.10 2006/10/15 17:28:36 vnagarjuna Exp $ -->

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

function Eenadu()
{
}

//The interface every dynamic font encoding should implement
Eenadu.maxLookupLen = 4;
Eenadu.fontFace     = "Eenadu";
Eenadu.displayName  = Eenadu.fontFace;
Eenadu.script       = Padma.script_TELUGU;

Eenadu.lookup = function (str) 
{
    return Eenadu.toPadma[str];
}

Eenadu.isPrefixSymbol = function (str)
{
    return Eenadu.prefixList[str] != null;
}

Eenadu.isOverloaded = function (str)
{
    return Eenadu.overloadList[str] != null;
}

Eenadu.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if (sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_AILEN)
        return Padma.vowelsn_AI;
    if (sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_U)
        return Padma.vowelsn_O;
    if (sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_AA)
        return Padma.vowelsn_OO;
    return sign1 + sign2;    
}

//\u00C7 is used mostly for AA gunintam - unfortunately it is also used for writing HA, so it needs to be handled specially
Eenadu.preprocessMessage = function (input)
{
    var output = "", ctxt = 0;
    for(var i = 0; i < input.length; ++i) {
        var cur = input.charAt(i);
        if (Eenadu.isRedundant(cur))
            continue;
        if (ctxt == 1) {
            if (cur == Eenadu.vowelsn_AA_3) {
                ctxt = 0;
                continue;
            }
            var val = Eenadu.lookup(cur);
            if (val != null) {
                var type = Padma.getType(val.charAt(0));
                if (type != Padma.type_vattu && type != Padma.type_gunintam && type != Padma.type_hallu_mod)
                    ctxt = 0;
            }
            else ctxt = 0;
        }
        else if (cur == Eenadu.consnt_HA)
            ctxt = 1;
        output += cur;
    }
    return output;
}

Eenadu.prepareOverloadList = function ()
{
    Eenadu.overloadList = new Object();
    for(var key in Eenadu.toPadma) {
        if (key.length > 1) {
            for(var i = 0; i < key.length - 1; ++i) {
                var sub = key.substr(0, i + 1);
                if (Eenadu.overloadList[sub] == undefined) {
                    Eenadu.overloadList[sub] = true;
                }
            }
        }
    }
}

//Implementation details start here

//Specials
Eenadu.candrabindu    = "\u00D2";
Eenadu.visarga        = "\u00D3";
Eenadu.virama_1       = "\u0072";
Eenadu.virama_2       = "\u00FA";
Eenadu.virama_3       = "\u00FB";
Eenadu.virama_4       = "\u00FC";
Eenadu.virama_5       = "\u00FD";
Eenadu.virama_6       = "\u00FE";
Eenadu.anusvara       = "\u00A2";

//Vowels
Eenadu.vowel_A_1      = "\u20AC";
Eenadu.vowel_A_2      = "\u00C6";
Eenadu.vowel_AA       = "\u201A";
Eenadu.vowel_I        = "\u0192";
Eenadu.vowel_II       = "\u00A8";
Eenadu.vowel_U        = "\u2026";
Eenadu.vowel_UU       = "\u00AD";
Eenadu.vowel_R        = "\u00A6\u00D5\u00D5";
Eenadu.vowel_RR       = "\u00A6\u00D5\u00D6";
Eenadu.vowel_E        = "\u2021";
Eenadu.vowel_EE       = "\u005C";
Eenadu.vowel_AI       = "\u2030";
Eenadu.vowel_O        = "\u0160";
Eenadu.vowel_OO       = "\u2039";
Eenadu.vowel_AU       = "\u00BB";

//Consonants
Eenadu.consnt_KA_1    = "\u008F";
Eenadu.consnt_KA_2    = "\u00C2";
Eenadu.consnt_KHA_1   = "\u2018";
Eenadu.consnt_KHA_2   = "\u00C8";
Eenadu.consnt_GA      = "\u2019";
Eenadu.consnt_GHA     = "\u0058\u00B6\u00D5";
Eenadu.consnt_NGA     = "\u203A";

Eenadu.consnt_CA      = "\u00CD";
Eenadu.consnt_CHA     = "\u00CD\u00B5";
Eenadu.consnt_JA_1    = "\u2022";
Eenadu.consnt_JA_2    = "\u00E8";
Eenadu.consnt_JHA     = "\u00AA\u2014";
Eenadu.consnt_NYA     = "\u0076";

Eenadu.consnt_TTA_1   = "\u007B";
Eenadu.consnt_TTA_2   = "\u02DC";
Eenadu.consnt_TTA_3   = "\u0161";
Eenadu.consnt_TTHA    = "\u00AA\u00B8";
Eenadu.consnt_DDA     = "\u0153";
Eenadu.consnt_DDHA    = "\u0153\u00B5";
Eenadu.consnt_NNA     = "\u00BA";

Eenadu.consnt_TA      = "\u00C5";
Eenadu.consnt_THA_1   = "\u0178\u00B1";
Eenadu.consnt_THA_2   = "\u0178\u00B8";
Eenadu.consnt_DA      = "\u0178";
Eenadu.consnt_DHA     = "\u0178\u00B5";
Eenadu.consnt_NA_1    = "\u00CA";
Eenadu.consnt_NA_2    = "\u00AF";

Eenadu.consnt_PA_1    = "\u0058";
Eenadu.consnt_PA_2    = "\u00A4";
Eenadu.consnt_PHA_1   = "\u0058\u00B6";
Eenadu.consnt_PHA_2   = "\u00A4\u00B6";
Eenadu.consnt_BA_1    = "\u00A6";
Eenadu.consnt_BA_2    = "\u00FF";
Eenadu.consnt_BHA     = "\u00A6\u00B5";
Eenadu.consnt_MA      = "\u00AB\u00D5";

Eenadu.consnt_YA_1    = "\u00A7";
Eenadu.consnt_YA_2    = "\u00A7\u00D5";
Eenadu.consnt_RA      = "\u00AA";
Eenadu.consnt_LA_1    = "\u2122";
Eenadu.consnt_LA_2    = "\u00A9";
Eenadu.consnt_VA_1    = "\u201E";
Eenadu.consnt_VA_2    = "\u00AB";
Eenadu.consnt_SHA     = "\u00AC";
Eenadu.consnt_SSA_1   = "\u2020";
Eenadu.consnt_SSA_2   = "\u00B3";
Eenadu.consnt_SA_1    = "\u00AE";
Eenadu.consnt_SA_2    = "\u00B2";
Eenadu.consnt_HA      = "\u00A3";
Eenadu.consnt_LLA     = "\u0040";
Eenadu.consnt_RRA     = "\u00B7";
Eenadu.conjct_KSHA    = "\u00C2\u007E";

//Gunintamulu
Eenadu.vowelsn_AA_1   = "\u00C3";
Eenadu.vowelsn_AA_2   = "\u00C4";
Eenadu.vowelsn_AA_3   = "\u00C7";
Eenadu.vowelsn_AA_4   = "\u00C9";
Eenadu.vowelsn_I_1    = "\u00CB";
Eenadu.vowelsn_I_2    = "\u00CF";
Eenadu.vowelsn_II_1   = "\u00CC";
Eenadu.vowelsn_II_2   = "\u00CE";
Eenadu.vowelsn_II_3   = "\u00D4";
Eenadu.vowelsn_U_1    = "\u00D5";
Eenadu.vowelsn_U_2    = "\u00D7";
Eenadu.vowelsn_U_3    = "\u00D9";
Eenadu.vowelsn_U_4    = "\u00DB";
Eenadu.vowelsn_U_5    = "\u00DD";
Eenadu.vowelsn_U_6    = "\u00DF";
Eenadu.vowelsn_U_7    = "\u00E1";
Eenadu.vowelsn_UU_1   = "\u00D6";
Eenadu.vowelsn_UU_2   = "\u00D8";
Eenadu.vowelsn_UU_3   = "\u00DA";
Eenadu.vowelsn_UU_4   = "\u00DC";
Eenadu.vowelsn_UU_5   = "\u00DE";
Eenadu.vowelsn_UU_6   = "\u00E0";
Eenadu.vowelsn_UU_7   = "\u00E2";
Eenadu.vowelsn_R      = "\u0025";
Eenadu.vowelsn_RR     = "\u0025\u00C7";
Eenadu.vowelsn_E_1    = "\u00E3";
Eenadu.vowelsn_E_2    = "\u00E5";
Eenadu.vowelsn_E_3    = "\u00E7";
Eenadu.vowelsn_E_4    = "\u00E9";
Eenadu.vowelsn_E_5    = "\u00EB";
Eenadu.vowelsn_EE_1   = "\u00E4";
Eenadu.vowelsn_EE_2   = "\u00E6";
Eenadu.vowelsn_EE_3   = "\u00EA";
Eenadu.vowelsn_EE_4   = "\u00EC";
Eenadu.vowelsn_O_1    = "\u00ED";
Eenadu.vowelsn_O_2    = "\u00EF";
Eenadu.vowelsn_O_3    = "\u00F1";
Eenadu.vowelsn_O_4    = "\u00F3";
Eenadu.vowelsn_OO_1   = "\u00EE";
Eenadu.vowelsn_OO_2   = "\u00F0";
Eenadu.vowelsn_OO_3   = "\u00F2";
Eenadu.vowelsn_OO_4   = "\u00F4";
Eenadu.vowelsn_OO_5   = "\u00E3\u00D6";
Eenadu.vowelsn_AU_1   = "\u00F5";
Eenadu.vowelsn_AU_2   = "\u00F6";
Eenadu.vowelsn_AU_3   = "\u00F7";
Eenadu.vowelsn_AU_4   = "\u00F8";
Eenadu.vowelsn_AU_5   = "\u00F9";

Eenadu.vowelsn_AILEN_1 = "\u0069";
Eenadu.vowelsn_AILEN_2 = "\u006A";

//Special Combinations
Eenadu.combo_KHI      = "\u0022";
Eenadu.combo_KHII     = "\u0026";
Eenadu.combo_GI       = "\u0054";
Eenadu.combo_GII      = "\u0055";
Eenadu.combo_GHAA_1   = "\u0058\u00B6\u00E2";
Eenadu.combo_GHAA_2   = "\u0058\u00B6\u00D6";
Eenadu.combo_GHI      = "\u0058\u00B6\u00CF\u00D5";
Eenadu.combo_GHII     = "\u0058\u00B6\u00D4\u00D5";
Eenadu.combo_GHU      = "\u0058\u00B6\u00E1";
Eenadu.combo_GHUU     = "\u0058\u00B6\u00E2";
Eenadu.combo_GHPOLLU  = "\u0058\u00B6\u00FD\u00D5";

Eenadu.combo_CI       = "\u002A";
Eenadu.combo_CII      = "\u003C";
Eenadu.combo_CHI      = "\u002A\u00B5";
Eenadu.combo_CHII     = "\u003C\u00B5";
Eenadu.combo_JI       = "\u003E";
Eenadu.combo_JII      = "\u00B0";
Eenadu.combo_JU       = "\u0056";
Eenadu.combo_JUU      = "\u0057";
Eenadu.combo_JHI      = "\u004A\u2014";
Eenadu.combo_JHII     = "\u004B\u2014";
Eenadu.combo_JHPOLLU  = "\u00AA\u00FD\u2014";

Eenadu.combo_TTHI     = "\u004A\u00B8";
Eenadu.combo_TTHII    = "\u004B\u00B8";

Eenadu.combo_TI       = "\u0041";
Eenadu.combo_TII      = "\u0042";
Eenadu.combo_THI      = "\u0043\u00B1";
Eenadu.combo_THII     = "\u0044\u00B1";
Eenadu.combo_DI       = "\u0043";
Eenadu.combo_DII      = "\u0044";
Eenadu.combo_DHI      = "\u0043\u00B5";
Eenadu.combo_DHII     = "\u0044\u00B5";
Eenadu.combo_NI       = "\u0045";
Eenadu.combo_NII      = "\u0046";

Eenadu.combo_BI       = "\u0047";
Eenadu.combo_BII      = "\u0048";
Eenadu.combo_BHI      = "\u0047\u00B5";
Eenadu.combo_BHII     = "\u0048\u00B5";
Eenadu.combo_MAA      = "\u00AB\u00D6";
Eenadu.combo_MI       = "\u004E\u00D5";
Eenadu.combo_MII      = "\u004F\u00D5";
Eenadu.combo_MU       = "\u00AB\u00E1";
Eenadu.combo_MUU      = "\u00AB\u00E2";
Eenadu.combo_ME_1     = "\u201E\u00E3\u00D5";
Eenadu.combo_ME_2     = "\u201E\u00E7\u00D5";
Eenadu.combo_MEE      = "\u201E\u00E4\u00D5";
Eenadu.combo_MAI      = "\u201E\u00E7\u00D5\u0069";
Eenadu.combo_MO       = "\u201E\u00E7\u00E1";
Eenadu.combo_MOO      = "\u201E\u00E7\u00D6";
Eenadu.combo_MPOLLU   = "\u201E\u00FE\u00D5";

Eenadu.combo_YAA      = "\u00A7\u00D6";
Eenadu.combo_YI       = "\u00AA\u00E1";
Eenadu.combo_YII      = "\u00AA\u00E2";
Eenadu.combo_YE       = "\u00A7\u00E7\u00D5";
Eenadu.combo_YEE      = "\u00A7\u00E4\u00D5";
Eenadu.combo_YAI      = "\u00A7\u00E7\u0069\u00D5";
Eenadu.combo_YO       = "\u00A7\u00E7\u00E1";
Eenadu.combo_YOO      = "\u00A7\u00E7\u00D6";
Eenadu.combo_YPOLLU_1 = "\u00A7\u00FC\u00D5";
Eenadu.combo_YPOLLU_2 = "\u00A7\u00FD\u00D5";
Eenadu.combo_RI       = "\u004A";
Eenadu.combo_RII      = "\u004B";
Eenadu.combo_LI       = "\u004C";
Eenadu.combo_LII      = "\u004D";
Eenadu.combo_VI       = "\u004E";
Eenadu.combo_VII      = "\u004F";
Eenadu.combo_SHI      = "\u0050";
Eenadu.combo_SHII     = "\u0051";
Eenadu.combo_LLI      = "\u0052";
Eenadu.combo_LLII     = "\u0053";

Eenadu.combo_SHRII    = "\u00A1";

//Vattulu
Eenadu.vattu_KA       = "\u02C6";
Eenadu.vattu_KHA      = "\u005E";
Eenadu.vattu_GA       = "\u005F";
Eenadu.vattu_GHA      = "\u0060";

Eenadu.vattu_CA       = "\u0061";
Eenadu.vattu_CHA      = "\u0061\u00B4";
Eenadu.vattu_JA       = "\u0062";
Eenadu.vattu_JHA      = "\u006D";
Eenadu.vattu_NYA      = "\u0063";

Eenadu.vattu_TTA      = "\u0064";
Eenadu.vattu_TTHA     = "\u0065";
Eenadu.vattu_DDA      = "\u0066";
Eenadu.vattu_NNA      = "\u0067";

Eenadu.vattu_TA_1     = "\u0068";
Eenadu.vattu_TA_2     = "\u006B";
Eenadu.vattu_THA      = "\u006E";
Eenadu.vattu_DA       = "\u006C";
Eenadu.vattu_DHA      = "\u006C\u00B4";
Eenadu.vattu_NA       = "\u006F";

Eenadu.vattu_PA       = "\u0070";
Eenadu.vattu_PHA      = "\u0070\u00B4";
Eenadu.vattu_BA       = "\u0073";
Eenadu.vattu_BHA      = "\u0073\u00B4";
Eenadu.vattu_MA       = "\u0074";

Eenadu.vattu_YA       = "\u0075";
Eenadu.vattu_RA_1     = "\u0077";
Eenadu.vattu_RA_2     = "\u201C";
Eenadu.vattu_LA       = "\u0078";
Eenadu.vattu_VA       = "\u0079";
Eenadu.vattu_SHA      = "\u007A";
Eenadu.vattu_SSA_1    = "\u007E";
Eenadu.vattu_SSA_2    = "\u00A5";
Eenadu.vattu_SA       = "\u0071";
Eenadu.vattu_HA       = "\u007C";
Eenadu.vattu_LLA      = "\u007D";
Eenadu.vattu_RRA      = "\u00C0";

//Conjuncts
Eenadu.vattu_TRA      = "\u0059";
Eenadu.vattu_TTRA     = "\u005A";

//Matches ASCII
Eenadu.EXCLAM         = "\u0021";
Eenadu.QTSINGLE       = "\u0027";
Eenadu.PARENLEFT      = "\u0028";
Eenadu.PARENRIGT      = "\u0029";
Eenadu.PLUS           = "\u002B";
Eenadu.COMMA          = "\u002C";
Eenadu.HYPHEN         = "\u002D";   //I don't know what the significance is, shows up as '-' on Linux, not displayed on Windows in Firefox
Eenadu.PERIOD         = "\u002E";
Eenadu.SLASH          = "\u002F";
Eenadu.COLON          = "\u003A";
Eenadu.SEMICOLON      = "\u003B";
Eenadu.EQUALS         = "\u003D";
Eenadu.QUESTION       = "\u003F";

Eenadu.digit_ZERO     = "\u0030";
Eenadu.digit_ONE      = "\u0031";
Eenadu.digit_TWO      = "\u0032";
Eenadu.digit_THREE    = "\u0033";
Eenadu.digit_FOUR     = "\u0034";
Eenadu.digit_FIVE     = "\u0035";
Eenadu.digit_SIX      = "\u0036";
Eenadu.digit_SEVEN    = "\u0037";
Eenadu.digit_EIGHT    = "\u0038";
Eenadu.digit_NINE     = "\u0039";

//Does not match ASCII
Eenadu.DIVIDE         = "\u0023";
Eenadu.MULTIPLY       = "\u0024";
Eenadu.PIPE           = "\u0049";
Eenadu.ASTERISK       = "\u005B";
Eenadu.PERCENT        = "\u005D";

//Kommu
Eenadu.misc_TICK_1    = "\u0152";
Eenadu.misc_TICK_2    = "\u00B9";
Eenadu.misc_TICK_3    = "\u00BC";
Eenadu.misc_TICK_4    = "\u00BD";
Eenadu.misc_TICK_5    = "\u00BE";
Eenadu.misc_TICK_6    = "\u00BF";
Eenadu.misc_TICK_7    = "\u00C1";

Eenadu.misc_vattu_1   = "\u00B4";               //This seems to be for vattulu
Eenadu.misc_vattu_2   = "\u00B5";               //This seems to be for consonants
Eenadu.misc_vattu_3   = "\u00B6";               //Gha, pha etc

Eenadu.extra_HYPHEN   = "\u00D0";
Eenadu.extra_QTSINGLE = "\u00D1";

Eenadu.toPadma = new Object();

Eenadu.toPadma[Eenadu.candrabindu] = Padma.candrabindu;
Eenadu.toPadma[Eenadu.visarga]  = Padma.visarga;
Eenadu.toPadma[Eenadu.virama_1] = Padma.syllbreak;
Eenadu.toPadma[Eenadu.virama_2] = Padma.syllbreak;
Eenadu.toPadma[Eenadu.virama_3] = Padma.syllbreak;
Eenadu.toPadma[Eenadu.virama_4] = Padma.syllbreak;
Eenadu.toPadma[Eenadu.virama_5] = Padma.syllbreak;
Eenadu.toPadma[Eenadu.virama_6] = Padma.syllbreak;
Eenadu.toPadma[Eenadu.anusvara] = Padma.anusvara;

Eenadu.toPadma[Eenadu.vowel_A_1] = Padma.vowel_A;
Eenadu.toPadma[Eenadu.vowel_A_2] = Padma.vowel_A;
Eenadu.toPadma[Eenadu.vowel_AA] = Padma.vowel_AA;
Eenadu.toPadma[Eenadu.vowel_I] = Padma.vowel_I;
Eenadu.toPadma[Eenadu.vowel_II] = Padma.vowel_II;
Eenadu.toPadma[Eenadu.vowel_U] = Padma.vowel_U;
Eenadu.toPadma[Eenadu.vowel_UU] = Padma.vowel_UU;
Eenadu.toPadma[Eenadu.vowel_R] = Padma.vowel_R;
Eenadu.toPadma[Eenadu.vowel_RR] = Padma.vowel_RR;
Eenadu.toPadma[Eenadu.vowel_E] = Padma.vowel_E;
Eenadu.toPadma[Eenadu.vowel_EE] = Padma.vowel_EE;
Eenadu.toPadma[Eenadu.vowel_AI] = Padma.vowel_AI;
Eenadu.toPadma[Eenadu.vowel_O] = Padma.vowel_O;
Eenadu.toPadma[Eenadu.vowel_OO] = Padma.vowel_OO;
Eenadu.toPadma[Eenadu.vowel_AU] = Padma.vowel_AU;

Eenadu.toPadma[Eenadu.consnt_KA_1] = Padma.consnt_KA;
Eenadu.toPadma[Eenadu.consnt_KA_2] = Padma.consnt_KA;
Eenadu.toPadma[Eenadu.consnt_KHA_1] = Padma.consnt_KHA;
Eenadu.toPadma[Eenadu.consnt_KHA_2] = Padma.consnt_KHA;
Eenadu.toPadma[Eenadu.consnt_GA] = Padma.consnt_GA;
Eenadu.toPadma[Eenadu.consnt_GHA] = Padma.consnt_GHA;
Eenadu.toPadma[Eenadu.consnt_NGA] = Padma.consnt_NGA;

Eenadu.toPadma[Eenadu.consnt_CA] = Padma.consnt_CA;
Eenadu.toPadma[Eenadu.consnt_CHA] = Padma.consnt_CHA;
Eenadu.toPadma[Eenadu.consnt_JA_1] = Padma.consnt_JA;
Eenadu.toPadma[Eenadu.consnt_JA_2] = Padma.consnt_JA;
Eenadu.toPadma[Eenadu.consnt_JHA] = Padma.consnt_JHA;
Eenadu.toPadma[Eenadu.consnt_NYA] = Padma.consnt_NYA;

Eenadu.toPadma[Eenadu.consnt_TTA_1] = Padma.consnt_TTA;
Eenadu.toPadma[Eenadu.consnt_TTA_2] = Padma.consnt_TTA;
Eenadu.toPadma[Eenadu.consnt_TTA_3] = Padma.consnt_TTA;
Eenadu.toPadma[Eenadu.consnt_TTHA] = Padma.consnt_TTHA;
Eenadu.toPadma[Eenadu.consnt_DDA] = Padma.consnt_DDA;
Eenadu.toPadma[Eenadu.consnt_DDHA] = Padma.consnt_DDHA;
Eenadu.toPadma[Eenadu.consnt_NNA] = Padma.consnt_NNA;

Eenadu.toPadma[Eenadu.consnt_TA] = Padma.consnt_TA;
Eenadu.toPadma[Eenadu.consnt_THA_1] = Padma.consnt_THA;
Eenadu.toPadma[Eenadu.consnt_THA_2] = Padma.consnt_THA;
Eenadu.toPadma[Eenadu.consnt_DA] = Padma.consnt_DA;
Eenadu.toPadma[Eenadu.consnt_DHA] = Padma.consnt_DHA;
Eenadu.toPadma[Eenadu.consnt_NA_1] = Padma.consnt_NA;
Eenadu.toPadma[Eenadu.consnt_NA_2] = Padma.consnt_NA;

Eenadu.toPadma[Eenadu.consnt_PA_1] = Padma.consnt_PA;
Eenadu.toPadma[Eenadu.consnt_PA_2] = Padma.consnt_PA;
Eenadu.toPadma[Eenadu.consnt_PHA_1]  = Padma.consnt_PHA;
Eenadu.toPadma[Eenadu.consnt_PHA_2]  = Padma.consnt_PHA;
Eenadu.toPadma[Eenadu.consnt_BA_1] = Padma.consnt_BA;
Eenadu.toPadma[Eenadu.consnt_BA_2] = Padma.consnt_BA;
Eenadu.toPadma[Eenadu.consnt_BHA]  = Padma.consnt_BHA;
Eenadu.toPadma[Eenadu.consnt_MA] = Padma.consnt_MA;

Eenadu.toPadma[Eenadu.consnt_YA_1] = Padma.consnt_YA;
Eenadu.toPadma[Eenadu.consnt_YA_2] = Padma.consnt_YA;
Eenadu.toPadma[Eenadu.consnt_RA] = Padma.consnt_RA;
Eenadu.toPadma[Eenadu.consnt_LA_1] = Padma.consnt_LA;
Eenadu.toPadma[Eenadu.consnt_LA_2] = Padma.consnt_LA;
Eenadu.toPadma[Eenadu.consnt_VA_1] = Padma.consnt_VA;
Eenadu.toPadma[Eenadu.consnt_VA_2] = Padma.consnt_VA;
Eenadu.toPadma[Eenadu.consnt_SHA] = Padma.consnt_SHA;
Eenadu.toPadma[Eenadu.consnt_SSA_1] = Padma.consnt_SSA;
Eenadu.toPadma[Eenadu.consnt_SSA_2] = Padma.consnt_SSA;
Eenadu.toPadma[Eenadu.consnt_SA_1] = Padma.consnt_SA;
Eenadu.toPadma[Eenadu.consnt_SA_2] = Padma.consnt_SA;

Eenadu.toPadma[Eenadu.consnt_HA] = Padma.consnt_HA;
Eenadu.toPadma[Eenadu.consnt_LLA] = Padma.consnt_LLA;
Eenadu.toPadma[Eenadu.consnt_RRA] = Padma.consnt_RRA;
Eenadu.toPadma[Eenadu.conjct_KSHA] = Padma.consnt_KA + Padma.vattu_SSA;


//Gunintamulu
Eenadu.toPadma[Eenadu.vowelsn_AA_1]  = Padma.vowelsn_AA;
Eenadu.toPadma[Eenadu.vowelsn_AA_2]  = Padma.vowelsn_AA;
Eenadu.toPadma[Eenadu.vowelsn_AA_3]  = Padma.vowelsn_AA;
Eenadu.toPadma[Eenadu.vowelsn_AA_4]  = Padma.vowelsn_AA;
Eenadu.toPadma[Eenadu.vowelsn_I_1]   = Padma.vowelsn_I;
Eenadu.toPadma[Eenadu.vowelsn_I_2]   = Padma.vowelsn_I;
Eenadu.toPadma[Eenadu.vowelsn_II_1]  = Padma.vowelsn_II;
Eenadu.toPadma[Eenadu.vowelsn_II_2]  = Padma.vowelsn_II;
Eenadu.toPadma[Eenadu.vowelsn_II_3]  = Padma.vowelsn_II;
Eenadu.toPadma[Eenadu.vowelsn_U_1]   = Padma.vowelsn_U;
Eenadu.toPadma[Eenadu.vowelsn_U_2]   = Padma.vowelsn_U;
Eenadu.toPadma[Eenadu.vowelsn_U_3]   = Padma.vowelsn_U;
Eenadu.toPadma[Eenadu.vowelsn_U_4]   = Padma.vowelsn_U;
Eenadu.toPadma[Eenadu.vowelsn_U_5]   = Padma.vowelsn_U;
Eenadu.toPadma[Eenadu.vowelsn_U_6]   = Padma.vowelsn_U;
Eenadu.toPadma[Eenadu.vowelsn_U_7]   = Padma.vowelsn_U;
Eenadu.toPadma[Eenadu.vowelsn_UU_1]  = Padma.vowelsn_UU;
Eenadu.toPadma[Eenadu.vowelsn_UU_2]  = Padma.vowelsn_UU;
Eenadu.toPadma[Eenadu.vowelsn_UU_3]  = Padma.vowelsn_UU;
Eenadu.toPadma[Eenadu.vowelsn_UU_4]  = Padma.vowelsn_UU;
Eenadu.toPadma[Eenadu.vowelsn_UU_5]  = Padma.vowelsn_UU;
Eenadu.toPadma[Eenadu.vowelsn_UU_6]  = Padma.vowelsn_UU;
Eenadu.toPadma[Eenadu.vowelsn_UU_7]  = Padma.vowelsn_UU;
Eenadu.toPadma[Eenadu.vowelsn_R]     = Padma.vowelsn_R;
Eenadu.toPadma[Eenadu.vowelsn_RR]    = Padma.vowelsn_RR;
Eenadu.toPadma[Eenadu.vowelsn_E_1]   = Padma.vowelsn_E;
Eenadu.toPadma[Eenadu.vowelsn_E_2]   = Padma.vowelsn_E;
Eenadu.toPadma[Eenadu.vowelsn_E_3]   = Padma.vowelsn_E;
Eenadu.toPadma[Eenadu.vowelsn_E_4]   = Padma.vowelsn_E;
Eenadu.toPadma[Eenadu.vowelsn_E_5]   = Padma.vowelsn_E;
Eenadu.toPadma[Eenadu.vowelsn_EE_1]  = Padma.vowelsn_EE;
Eenadu.toPadma[Eenadu.vowelsn_EE_2]  = Padma.vowelsn_EE;
Eenadu.toPadma[Eenadu.vowelsn_EE_3]  = Padma.vowelsn_EE;
Eenadu.toPadma[Eenadu.vowelsn_EE_4]  = Padma.vowelsn_EE;
Eenadu.toPadma[Eenadu.vowelsn_O_1]   = Padma.vowelsn_O;
Eenadu.toPadma[Eenadu.vowelsn_O_2]   = Padma.vowelsn_O;
Eenadu.toPadma[Eenadu.vowelsn_O_3]   = Padma.vowelsn_O;
Eenadu.toPadma[Eenadu.vowelsn_O_4]   = Padma.vowelsn_O;
Eenadu.toPadma[Eenadu.vowelsn_OO_1]  = Padma.vowelsn_OO;
Eenadu.toPadma[Eenadu.vowelsn_OO_2]  = Padma.vowelsn_OO;
Eenadu.toPadma[Eenadu.vowelsn_OO_3]  = Padma.vowelsn_OO;
Eenadu.toPadma[Eenadu.vowelsn_OO_4]  = Padma.vowelsn_OO;
Eenadu.toPadma[Eenadu.vowelsn_OO_5]  = Padma.vowelsn_OO;
Eenadu.toPadma[Eenadu.vowelsn_AU_1]  = Padma.vowelsn_AU;
Eenadu.toPadma[Eenadu.vowelsn_AU_2]  = Padma.vowelsn_AU;
Eenadu.toPadma[Eenadu.vowelsn_AU_3]  = Padma.vowelsn_AU;
Eenadu.toPadma[Eenadu.vowelsn_AU_4]  = Padma.vowelsn_AU;
Eenadu.toPadma[Eenadu.vowelsn_AU_5]  = Padma.vowelsn_AU;
Eenadu.toPadma[Eenadu.vowelsn_AILEN_1] = Padma.vowelsn_AILEN;
Eenadu.toPadma[Eenadu.vowelsn_AILEN_2] = Padma.vowelsn_AILEN;

//Special Combinations
Eenadu.toPadma[Eenadu.combo_KHI]     = Padma.consnt_KHA + Padma.vowelsn_I;
Eenadu.toPadma[Eenadu.combo_KHII]    = Padma.consnt_KHA + Padma.vowelsn_II;
Eenadu.toPadma[Eenadu.combo_GI]      = Padma.consnt_GA + Padma.vowelsn_I;
Eenadu.toPadma[Eenadu.combo_GII]     = Padma.consnt_GA + Padma.vowelsn_II;
Eenadu.toPadma[Eenadu.combo_GHAA_1]  = Padma.consnt_GHA + Padma.vowelsn_AA;
Eenadu.toPadma[Eenadu.combo_GHAA_2]  = Padma.consnt_GHA + Padma.vowelsn_AA;
Eenadu.toPadma[Eenadu.combo_GHI]     = Padma.consnt_GHA + Padma.vowelsn_I;
Eenadu.toPadma[Eenadu.combo_GHII]    = Padma.consnt_GHA + Padma.vowelsn_II;
Eenadu.toPadma[Eenadu.combo_GHU]     = Padma.consnt_GHA + Padma.vowelsn_U;
Eenadu.toPadma[Eenadu.combo_GHUU]    = Padma.consnt_GHA + Padma.vowelsn_UU;
Eenadu.toPadma[Eenadu.combo_GHPOLLU] = Padma.consnt_GHA + Padma.syllbreak;

Eenadu.toPadma[Eenadu.combo_CI]      = Padma.consnt_CA + Padma.vowelsn_I;
Eenadu.toPadma[Eenadu.combo_CII]     = Padma.consnt_CA + Padma.vowelsn_II;
Eenadu.toPadma[Eenadu.combo_CHI]     = Padma.consnt_CHA + Padma.vowelsn_I;
Eenadu.toPadma[Eenadu.combo_CHII]    = Padma.consnt_CHA + Padma.vowelsn_II;
Eenadu.toPadma[Eenadu.combo_JI]      = Padma.consnt_JA + Padma.vowelsn_I;
Eenadu.toPadma[Eenadu.combo_JII]     = Padma.consnt_JA + Padma.vowelsn_II;
Eenadu.toPadma[Eenadu.combo_JU]      = Padma.consnt_JA + Padma.vowelsn_U;
Eenadu.toPadma[Eenadu.combo_JUU]     = Padma.consnt_JA + Padma.vowelsn_UU;
Eenadu.toPadma[Eenadu.combo_JHI]     = Padma.consnt_JHA + Padma.vowelsn_I;
Eenadu.toPadma[Eenadu.combo_JHII]    = Padma.consnt_JHA + Padma.vowelsn_II;
Eenadu.toPadma[Eenadu.combo_JHPOLLU] = Padma.consnt_JHA + Padma.syllbreak;

Eenadu.toPadma[Eenadu.combo_TTHI]    = Padma.consnt_TTHA + Padma.vowelsn_I;
Eenadu.toPadma[Eenadu.combo_TTHII]   = Padma.consnt_TTHA + Padma.vowelsn_II;

Eenadu.toPadma[Eenadu.combo_TI]      = Padma.consnt_TA + Padma.vowelsn_I;
Eenadu.toPadma[Eenadu.combo_TII]     = Padma.consnt_TA + Padma.vowelsn_II;
Eenadu.toPadma[Eenadu.combo_THI]     = Padma.consnt_THA + Padma.vowelsn_I;
Eenadu.toPadma[Eenadu.combo_THII]    = Padma.consnt_THA + Padma.vowelsn_II;
Eenadu.toPadma[Eenadu.combo_DI]      = Padma.consnt_DA + Padma.vowelsn_I;
Eenadu.toPadma[Eenadu.combo_DII]     = Padma.consnt_DA + Padma.vowelsn_II;
Eenadu.toPadma[Eenadu.combo_DHI]     = Padma.consnt_DHA + Padma.vowelsn_I;
Eenadu.toPadma[Eenadu.combo_DHII]    = Padma.consnt_DHA + Padma.vowelsn_II;
Eenadu.toPadma[Eenadu.combo_NI]      = Padma.consnt_NA + Padma.vowelsn_I;
Eenadu.toPadma[Eenadu.combo_NII]     = Padma.consnt_NA + Padma.vowelsn_II;

Eenadu.toPadma[Eenadu.combo_BI]      = Padma.consnt_BA + Padma.vowelsn_I;
Eenadu.toPadma[Eenadu.combo_BII]     = Padma.consnt_BA + Padma.vowelsn_II;
Eenadu.toPadma[Eenadu.combo_BHI]     = Padma.consnt_BHA + Padma.vowelsn_I;
Eenadu.toPadma[Eenadu.combo_BHII]    = Padma.consnt_BHA + Padma.vowelsn_II;
Eenadu.toPadma[Eenadu.combo_MAA]     = Padma.consnt_MA + Padma.vowelsn_AA;
Eenadu.toPadma[Eenadu.combo_MI]      = Padma.consnt_MA + Padma.vowelsn_I;
Eenadu.toPadma[Eenadu.combo_MII]     = Padma.consnt_MA + Padma.vowelsn_II;
Eenadu.toPadma[Eenadu.combo_MU]      = Padma.consnt_MA + Padma.vowelsn_U;
Eenadu.toPadma[Eenadu.combo_MUU]     = Padma.consnt_MA + Padma.vowelsn_UU;
Eenadu.toPadma[Eenadu.combo_ME_1]    = Padma.consnt_MA + Padma.vowelsn_E;
Eenadu.toPadma[Eenadu.combo_ME_2]    = Padma.consnt_MA + Padma.vowelsn_E;
Eenadu.toPadma[Eenadu.combo_MEE]     = Padma.consnt_MA + Padma.vowelsn_EE;
Eenadu.toPadma[Eenadu.combo_MAI]     = Padma.consnt_MA + Padma.vowelsn_AI;
Eenadu.toPadma[Eenadu.combo_MO]      = Padma.consnt_MA + Padma.vowelsn_O;
Eenadu.toPadma[Eenadu.combo_MOO]     = Padma.consnt_MA + Padma.vowelsn_OO;
Eenadu.toPadma[Eenadu.combo_MPOLLU]  = Padma.consnt_MA + Padma.syllbreak;

Eenadu.toPadma[Eenadu.combo_YAA]     = Padma.consnt_YA + Padma.vowelsn_AA;
Eenadu.toPadma[Eenadu.combo_YI]      = Padma.consnt_YA + Padma.vowelsn_I;
Eenadu.toPadma[Eenadu.combo_YII]     = Padma.consnt_YA + Padma.vowelsn_II;
Eenadu.toPadma[Eenadu.combo_YE]      = Padma.consnt_YA + Padma.vowelsn_E;
Eenadu.toPadma[Eenadu.combo_YEE]     = Padma.consnt_YA + Padma.vowelsn_EE;
Eenadu.toPadma[Eenadu.combo_YAI]     = Padma.consnt_YA + Padma.vowelsn_AI;
Eenadu.toPadma[Eenadu.combo_YO]      = Padma.consnt_YA + Padma.vowelsn_O;
Eenadu.toPadma[Eenadu.combo_YOO]     = Padma.consnt_YA + Padma.vowelsn_OO;
Eenadu.toPadma[Eenadu.combo_YPOLLU_1]= Padma.consnt_YA + Padma.syllbreak;
Eenadu.toPadma[Eenadu.combo_YPOLLU_2]= Padma.consnt_YA + Padma.syllbreak;
Eenadu.toPadma[Eenadu.combo_RI]      = Padma.consnt_RA + Padma.vowelsn_I;
Eenadu.toPadma[Eenadu.combo_RII]     = Padma.consnt_RA + Padma.vowelsn_II;
Eenadu.toPadma[Eenadu.combo_LI]      = Padma.consnt_LA + Padma.vowelsn_I;
Eenadu.toPadma[Eenadu.combo_LII]     = Padma.consnt_LA + Padma.vowelsn_II;
Eenadu.toPadma[Eenadu.combo_VI]      = Padma.consnt_VA + Padma.vowelsn_I;
Eenadu.toPadma[Eenadu.combo_VII]     = Padma.consnt_VA + Padma.vowelsn_II;
Eenadu.toPadma[Eenadu.combo_SHI]     = Padma.consnt_SHA + Padma.vowelsn_I;
Eenadu.toPadma[Eenadu.combo_SHII]    = Padma.consnt_SHA + Padma.vowelsn_II;
Eenadu.toPadma[Eenadu.combo_LLI]     = Padma.consnt_LLA + Padma.vowelsn_I;
Eenadu.toPadma[Eenadu.combo_LLII]    = Padma.consnt_LLA + Padma.vowelsn_II;

Eenadu.toPadma[Eenadu.combo_SHRII]   = Padma.consnt_SHA + Padma.vattu_RA + Padma.vowelsn_II;

//Vattulu
Eenadu.toPadma[Eenadu.vattu_KA]      = Padma.vattu_KA;
Eenadu.toPadma[Eenadu.vattu_KHA]     = Padma.vattu_KHA;
Eenadu.toPadma[Eenadu.vattu_GA]      = Padma.vattu_GA;
Eenadu.toPadma[Eenadu.vattu_GHA]     = Padma.vattu_GHA;
Eenadu.toPadma[Eenadu.vattu_CA]      = Padma.vattu_CA;
Eenadu.toPadma[Eenadu.vattu_CHA]     = Padma.vattu_CHA;
Eenadu.toPadma[Eenadu.vattu_JA]      = Padma.vattu_JA;
Eenadu.toPadma[Eenadu.vattu_JHA]     = Padma.vattu_JHA;
Eenadu.toPadma[Eenadu.vattu_NYA]     = Padma.vattu_NYA;
Eenadu.toPadma[Eenadu.vattu_TTA]     = Padma.vattu_TTA;
Eenadu.toPadma[Eenadu.vattu_TTHA]    = Padma.vattu_TTHA;
Eenadu.toPadma[Eenadu.vattu_DDA]     = Padma.vattu_DDA;
Eenadu.toPadma[Eenadu.vattu_NNA]     = Padma.vattu_NNA;
Eenadu.toPadma[Eenadu.vattu_TA_1]    = Padma.vattu_TA;
Eenadu.toPadma[Eenadu.vattu_TA_2]    = Padma.vattu_TA;
Eenadu.toPadma[Eenadu.vattu_THA]     = Padma.vattu_THA;
Eenadu.toPadma[Eenadu.vattu_DA]      = Padma.vattu_DA;
Eenadu.toPadma[Eenadu.vattu_DHA]     = Padma.vattu_DHA;
Eenadu.toPadma[Eenadu.vattu_NA]      = Padma.vattu_NA;
Eenadu.toPadma[Eenadu.vattu_PA]      = Padma.vattu_PA;
Eenadu.toPadma[Eenadu.vattu_PHA]     = Padma.vattu_PHA;
Eenadu.toPadma[Eenadu.vattu_BA]      = Padma.vattu_BA;
Eenadu.toPadma[Eenadu.vattu_BHA]     = Padma.vattu_BHA;
Eenadu.toPadma[Eenadu.vattu_MA]      = Padma.vattu_MA;
Eenadu.toPadma[Eenadu.vattu_YA]      = Padma.vattu_YA;
Eenadu.toPadma[Eenadu.vattu_RA_1]    = Padma.vattu_RA;
Eenadu.toPadma[Eenadu.vattu_RA_2]    = Padma.vattu_RA;
Eenadu.toPadma[Eenadu.vattu_LA]      = Padma.vattu_LA;
Eenadu.toPadma[Eenadu.vattu_VA]      = Padma.vattu_VA;
Eenadu.toPadma[Eenadu.vattu_SHA]     = Padma.vattu_SHA;
Eenadu.toPadma[Eenadu.vattu_SSA_1]   = Padma.vattu_SSA;
Eenadu.toPadma[Eenadu.vattu_SSA_2]   = Padma.vattu_SSA;
Eenadu.toPadma[Eenadu.vattu_SA]      = Padma.vattu_SA;
Eenadu.toPadma[Eenadu.vattu_HA]      = Padma.vattu_HA;
Eenadu.toPadma[Eenadu.vattu_LLA]     = Padma.vattu_LLA;
Eenadu.toPadma[Eenadu.vattu_RRA]     = Padma.vattu_RRA;

//Conjuncts
Eenadu.toPadma[Eenadu.vattu_TRA]     = Padma.vattu_TA + Padma.vattu_RA;
Eenadu.toPadma[Eenadu.vattu_TTRA]    = Padma.vattu_TTA + Padma.vattu_RA;

//Miscellaneous(where it doesn't match ASCII representation)
Eenadu.toPadma[Eenadu.extra_HYPHEN]   = Eenadu.HYPHEN;
Eenadu.toPadma[Eenadu.extra_QTSINGLE] = Eenadu.QTSINGLE;
Eenadu.toPadma[Eenadu.DIVIDE]         = "/";        //Should lookup Unicode standard for this and multiply
Eenadu.toPadma[Eenadu.MULTIPLY]       = "X";
Eenadu.toPadma[Eenadu.PIPE]           = "|";
Eenadu.toPadma[Eenadu.ASTERISK]       = "*";
Eenadu.toPadma[Eenadu.PERCENT]        = "%";

Eenadu.redundantList = new Object();
Eenadu.redundantList[Eenadu.misc_TICK_1] = true;
Eenadu.redundantList[Eenadu.misc_TICK_2] = true;
Eenadu.redundantList[Eenadu.misc_TICK_3] = true;
Eenadu.redundantList[Eenadu.misc_TICK_4] = true;
Eenadu.redundantList[Eenadu.misc_TICK_5] = true;
Eenadu.redundantList[Eenadu.misc_TICK_6] = true;
Eenadu.redundantList[Eenadu.misc_TICK_7] = true;
Eenadu.redundantList[Eenadu.HYPHEN]      = true;

Eenadu.prefixList = new Object();
Eenadu.prefixList[Eenadu.vattu_RA_1]   = true;
Eenadu.prefixList[Eenadu.vattu_RA_2]   = true;
Eenadu.prefixList[Eenadu.vowelsn_E_2]  = true;
Eenadu.prefixList[Eenadu.vowelsn_E_4]  = true;
Eenadu.prefixList[Eenadu.vowelsn_EE_2] = true;
Eenadu.prefixList[Eenadu.vowelsn_EE_3] = true;

/*
Eenadu.overloadList = new Object();
Eenadu.overloadList[Eenadu.consnt_KA_2]   = true;
Eenadu.overloadList[Eenadu.consnt_CA]     = true;
Eenadu.overloadList[Eenadu.consnt_DDA]    = true;
Eenadu.overloadList[Eenadu.consnt_DA]     = true;
Eenadu.overloadList[Eenadu.consnt_PA_1]   = true;
Eenadu.overloadList[Eenadu.consnt_PA_2]   = true;
Eenadu.overloadList[Eenadu.consnt_PHA_1]  = true;
Eenadu.overloadList[Eenadu.consnt_BA_1]   = true;
Eenadu.overloadList[Eenadu.consnt_YA_1]   = true;
Eenadu.overloadList[Eenadu.consnt_RA]     = true;
Eenadu.overloadList[Eenadu.consnt_VA_1]   = true;
Eenadu.overloadList[Eenadu.consnt_VA_2]   = true;
Eenadu.overloadList[Eenadu.vowelsn_R]     = true;
Eenadu.overloadList[Eenadu.vowelsn_E_1]   = true;
Eenadu.overloadList[Eenadu.combo_CI]      = true;
Eenadu.overloadList[Eenadu.combo_CII]     = true;
Eenadu.overloadList[Eenadu.combo_DI]      = true;
Eenadu.overloadList[Eenadu.combo_DII]     = true;
Eenadu.overloadList[Eenadu.combo_BI]      = true;
Eenadu.overloadList[Eenadu.combo_BII]     = true;
Eenadu.overloadList[Eenadu.combo_VI]      = true;
Eenadu.overloadList[Eenadu.combo_VII]     = true;
Eenadu.overloadList[Eenadu.combo_RI]      = true;
Eenadu.overloadList[Eenadu.combo_RII]     = true;
Eenadu.overloadList[Eenadu.vattu_CA]      = true;
Eenadu.overloadList[Eenadu.vattu_DA]      = true;
Eenadu.overloadList[Eenadu.vattu_PA]      = true;
Eenadu.overloadList[Eenadu.vattu_BA]      = true;
Eenadu.overloadList["\u0058\u00B6\u00CF"] = true;
Eenadu.overloadList["\u0058\u00B6\u00D4"] = true;
Eenadu.overloadList["\u0058\u00B6\u00FD"] = true;
Eenadu.overloadList["\u00AA\u00FD"]       = true;
Eenadu.overloadList["\u201E\u00E3"]       = true;
Eenadu.overloadList["\u201E\u00E4"]       = true;
Eenadu.overloadList["\u201E\u00E7"]       = true;
Eenadu.overloadList["\u201E\u00E7\u00D5"] = true;
Eenadu.overloadList["\u201E\u00FE"]       = true;
Eenadu.overloadList["\u00A6\u00D5"]       = true;
Eenadu.overloadList["\u00A7\u00E4"]       = true;
Eenadu.overloadList["\u00A7\u00E7"]       = true;
Eenadu.overloadList["\u00A7\u00E7\u0069"] = true;
Eenadu.overloadList["\u00A7\u00FC"]       = true;
Eenadu.overloadList["\u00A7\u00FD"]       = true;
*/

Eenadu.isRedundant = function (str)
{
    return Eenadu.redundantList[str] != null;
}
