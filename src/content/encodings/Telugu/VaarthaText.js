//$Id: VaarthaText.js,v 1.1 2010/01/11 13:51:05 harshita Exp $

//Copyright 2008-2009 HarshitaVani <harshita@atc.tcs.com>

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

//Telugu -- VaarthaText 
function VaarthaText()
{
}

//The interface every dynamic font encoding should implement
VaarthaText.maxLookupLen = 4;
VaarthaText.fontFace     = "VaarthaText";
VaarthaText.displayName  = VaarthaText.fontFace;
VaarthaText.script       = Padma.script_TELUGU;

VaarthaText.lookup = function (str) 
{
    return VaarthaText.toPadma[str];
}

VaarthaText.isPrefixSymbol = function (str)
{
    return VaarthaText.prefixList[str] != null;
}

VaarthaText.isOverloaded = function (str)
{
    return VaarthaText.overloadList[str] != null;
}

VaarthaText.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if ((sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_AILEN) ||
    (sign1 == Padma.vowelsn_E && sign2 == Padma.vowelsn_AILEN))
        return Padma.vowelsn_AI;
    if ((sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_U) ||
    (sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_U))
        return Padma.vowelsn_O;
    if ((sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_AA) ||
    (sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_AA))
        return Padma.vowelsn_OO;
    return sign1 + sign2;    
}

//\u00C7 is used mostly for AA gunintam - unfortunately it is also used for writing HA, so it needs to be handled specially
VaarthaText.preprocessMessage = function (input)
{
    var output = "", ctxt = 0;
    for(var i = 0; i < input.length; ++i) {
        var cur = input.charAt(i);
        if (VaarthaText.isRedundant(cur))
            continue;
        if (ctxt == 1) {
            if (cur == VaarthaText.vowelsn_AA_2) {
                ctxt = 0;
                continue;
            }
            var val = VaarthaText.lookup(cur);
            if (val != null) {
                var type = Padma.getType(val.charAt(0));
                if (type != Padma.type_vattu && type != Padma.type_gunintam && type != Padma.type_hallu_mod)
                    ctxt = 0;
            }
            else ctxt = 0;
        }
        else if (cur == VaarthaText.consnt_HA)
            ctxt = 1;
        output += cur;
    }
    return output;
}

//Implementation details start here

//Specials
VaarthaText.candrabindu    = "\u201C";
VaarthaText.visarga        = "\u00D3";
//VaarthaText.virama_1       = "\u02D9";
VaarthaText.virama_2       = "\u00FB";
VaarthaText.virama_3       = "\u00B8";
VaarthaText.virama_4       = "\u00FF";
VaarthaText.virama_5       = "\u00FA";
VaarthaText.virama_6       = "\u00FC";
VaarthaText.virama_7       = "\u00FD";
VaarthaText.virama_8       = "\u00FE";
VaarthaText.anusvara       = "\u008D";

//Vowels
//VaarthaText.vowel_A_1      = "\u20AC";
VaarthaText.vowel_A_2      = "\u0081";
VaarthaText.vowel_AA_1     = "\u0082";
VaarthaText.vowel_AA_2     = "\u201A";
VaarthaText.vowel_I_1      = "\u0083";
VaarthaText.vowel_I_2      = "\u0192";
VaarthaText.vowel_II_1     = "\u0084";
VaarthaText.vowel_II_2     = "\u201E";
VaarthaText.vowel_U_1      = "\u0085";
VaarthaText.vowel_U_2      = "\u2026";
VaarthaText.vowel_UU_1     = "\u0086";
VaarthaText.vowel_UU_2     = "\u2020";
VaarthaText.vowel_R        = "\u00A5\u00D5\u00D5";
VaarthaText.vowel_RR       = "\u00A5\u00D5\u00D6";
VaarthaText.vowel_E_1      = "\u0087";
VaarthaText.vowel_E_2      = "\u2021";
VaarthaText.vowel_EE_1     = "\u0088";
VaarthaText.vowel_EE_2     = "\u02C6";
VaarthaText.vowel_AI_1     = "\u0089";
VaarthaText.vowel_AI_2     = "\u2030";
VaarthaText.vowel_O_1      = "\u008A";
VaarthaText.vowel_O_2      = "\u0160";
VaarthaText.vowel_OO_1     = "\u008B";
VaarthaText.vowel_OO_2     = "\u2039";
VaarthaText.vowel_AU_1     = "\u008C";
VaarthaText.vowel_AU_2     = "\u0152";

//Consonants
VaarthaText.consnt_KA_1    = "\u008E";
VaarthaText.consnt_KA_2    = "\u008F";
VaarthaText.consnt_KA_3    = "\u017D";
VaarthaText.consnt_KHA_1   = "\u0090";
VaarthaText.consnt_KHA_2   = "\u2018";
VaarthaText.consnt_GA      = "\u2019";
VaarthaText.consnt_GHA     = "\u00A1\u00B6\u00D5";
VaarthaText.consnt_NGA     = "\u201C";

VaarthaText.consnt_CA      = "\u201D";
VaarthaText.consnt_CHA     = "\u201D\u00B5";
VaarthaText.consnt_JA_1    = "\u2022";
VaarthaText.consnt_JA_2    = "\u2013";
VaarthaText.consnt_JHA     = "\u00A8\u2014";
VaarthaText.consnt_NYA     = "\u0098";

VaarthaText.consnt_TTA_1   = "\u0099";
VaarthaText.consnt_TTA_2   = "\u009A";
VaarthaText.consnt_TTA_3   = "\u009B";
VaarthaText.consnt_TTA_4   = "\u2122";
VaarthaText.consnt_TTA_5   = "\u0161";
VaarthaText.consnt_TTA_6   = "\u203A";
VaarthaText.consnt_TTHA    = "\u00A8\u00B8";
VaarthaText.consnt_DDA_1   = "\u009C";
VaarthaText.consnt_DDA_2   = "\u0153";
VaarthaText.consnt_DDHA_1  = "\u009C\u00B5";
VaarthaText.consnt_DDHA_2  = "\u0153\u00B5";
VaarthaText.consnt_NNA     = "\u009D";

VaarthaText.consnt_TA_1    = "\u009E";
VaarthaText.consnt_TA_2    = "\u017E";
VaarthaText.consnt_THA_1   = "\u009F\u00B7";
VaarthaText.consnt_THA_2   = "\u0178\u00B7";
VaarthaText.consnt_DA_1    = "\u009F";
VaarthaText.consnt_DA_2    = "\u0178";
VaarthaText.consnt_DHA_1   = "\u009F\u00B5";
VaarthaText.consnt_DHA_2   = "\u0178\u00B5";
VaarthaText.consnt_NA_1    = "\u00A0";
VaarthaText.consnt_NA_2    = "\u00AF";
VaarthaText.consnt_NA_3    = "\u0024";

VaarthaText.consnt_PA_1    = "\u00A1";
VaarthaText.consnt_PA_2    = "\u00A4";
VaarthaText.consnt_PHA_1   = "\u00A1\u00B6";
VaarthaText.consnt_PHA_2   = "\u00A4\u00B6";
VaarthaText.consnt_BA_1    = "\u00A5";
VaarthaText.consnt_BA_2    = "\u00A6";
VaarthaText.consnt_BHA     = "\u00A6\u00B5";
VaarthaText.consnt_MA_1    = "\u00AB\u00D5";
VaarthaText.consnt_MA_2    = "\u00A2\u00D5";

//VaarthaText.consnt_YA_1    = "\u00A7";
VaarthaText.consnt_YA_2    = "\u00A7\u00D5";
VaarthaText.consnt_RA      = "\u00A8";
VaarthaText.consnt_LA_1    = "\u00AA";
VaarthaText.consnt_LA_2    = "\u00A9";
VaarthaText.consnt_VA_1    = "\u00AB";
VaarthaText.consnt_VA_2    = "\u00A2";
VaarthaText.consnt_SHA     = "\u00AC";
VaarthaText.consnt_SSA_1   = "\u00AD";
VaarthaText.consnt_SSA_2   = "\u00B3";
VaarthaText.consnt_SA_1    = "\u00AE";
VaarthaText.consnt_SA_2    = "\u00B2";
VaarthaText.consnt_HA      = "\u00A3";
VaarthaText.consnt_LLA     = "\u00B0";
VaarthaText.consnt_RRA     = "\u00B1";
VaarthaText.conjct_KSHA    = "\u008E\u007E";

//Gunintamulu
VaarthaText.vowelsn_AA_1   = "\u00C2";
VaarthaText.vowelsn_AA_2   = "\u00C7";
VaarthaText.vowelsn_AA_3   = "\u00C3";
VaarthaText.vowelsn_AA_4   = "\u00C5";
VaarthaText.vowelsn_AA_5   = "\u00C6";
VaarthaText.vowelsn_AA_6   = "\u00C4";
VaarthaText.vowelsn_AA_7   = "\u00C8";
VaarthaText.vowelsn_AA_8   = "\u00C9";
VaarthaText.vowelsn_I_1    = "\u00CB";
VaarthaText.vowelsn_I_2    = "\u00CD";
VaarthaText.vowelsn_I_3    = "\u00CF";
VaarthaText.vowelsn_II_1   = "\u00CC";
VaarthaText.vowelsn_II_2   = "\u00CE";
VaarthaText.vowelsn_II_3   = "\u00D4";
VaarthaText.vowelsn_U_1    = "\u00D7";
VaarthaText.vowelsn_U_2    = "\u00D5";
VaarthaText.vowelsn_U_3    = "\u00DB";
VaarthaText.vowelsn_U_4    = "\u00D9";
VaarthaText.vowelsn_U_5    = "\u00DF";
VaarthaText.vowelsn_U_6    = "\u00DD";
VaarthaText.vowelsn_U_7    = "\u00E1";
VaarthaText.vowelsn_UU_1   = "\u00D8";
VaarthaText.vowelsn_UU_2   = "\u00D6";
VaarthaText.vowelsn_UU_3   = "\u00DC";
VaarthaText.vowelsn_UU_4   = "\u00DA";
VaarthaText.vowelsn_UU_5   = "\u00E0";
VaarthaText.vowelsn_UU_6   = "\u00DE";
////VaarthaText.vowelsn_UU_7   = "\u00E2";
VaarthaText.vowelsn_R_1    = "\u005B";
VaarthaText.vowelsn_R_2    = "\u005D";
VaarthaText.vowelsn_RR_1   = "\u005B\u00C7";
VaarthaText.vowelsn_RR_2   = "\u005D\u00C7";
VaarthaText.vowelsn_E_1    = "\u00E9";
VaarthaText.vowelsn_E_2    = "\u00E3";
VaarthaText.vowelsn_E_3    = "\u00E7";
VaarthaText.vowelsn_E_4    = "\u00EB";
VaarthaText.vowelsn_E_5    = "\u00E5";
VaarthaText.vowelsn_EE_1   = "\u00EA";
VaarthaText.vowelsn_EE_2   = "\u00E4";
VaarthaText.vowelsn_EE_3   = "\u00E8";
VaarthaText.vowelsn_EE_4   = "\u00EC";
VaarthaText.vowelsn_EE_5   = "\u00E6";
VaarthaText.vowelsn_O_1    = "\u00ED";
VaarthaText.vowelsn_O_2    = "\u00EF";
VaarthaText.vowelsn_O_3    = "\u00F1";
VaarthaText.vowelsn_O_4    = "\u00F3";
VaarthaText.vowelsn_OO_1   = "\u00EE";
VaarthaText.vowelsn_OO_2   = "\u00F0";
VaarthaText.vowelsn_OO_3   = "\u00F2";
VaarthaText.vowelsn_OO_4   = "\u00F4";
//VaarthaText.vowelsn_OO_5   = "\u00E3\u00D6";
VaarthaText.vowelsn_AU_1   = "\u00F5";
VaarthaText.vowelsn_AU_2   = "\u00F7";
VaarthaText.vowelsn_AU_3   = "\u00F6";
VaarthaText.vowelsn_AU_4   = "\u00F9";
VaarthaText.vowelsn_AU_5   = "\u00F8";
VaarthaText.vowelsn_AILEN_1 = "\u0069";
VaarthaText.vowelsn_AILEN_2 = "\u006A";
VaarthaText.vowelsn_AILEN_3 = "\u006B";

////Special Combinations
VaarthaText.combo_KHI_1    = "\u00D2";
VaarthaText.combo_KHI_2    = "\u0022";
VaarthaText.combo_KHII     = "\u0026";
VaarthaText.combo_GI       = "\u0054";
VaarthaText.combo_GII      = "\u0055";
VaarthaText.combo_GHAA_1   = "\u00A1\u00B6\u00D6";
//VaarthaText.combo_GHAA_2   = "\u0058\u00B6\u00D6";
VaarthaText.combo_GHI      = "\u00A1\u00B6\u00CF\u00D5";
VaarthaText.combo_GHII     = "\u00A1\u00B6\u00D4\u00D5";
VaarthaText.combo_GHU      = "\u00A1\u00B6\u00E1";
VaarthaText.combo_GHUU     = "\u00A1\u00B6\u00E2";
VaarthaText.combo_GHPOLLU  = "\u00A1\u00B6\u00FF\u00D5";

VaarthaText.combo_CI       = "\u002A";
VaarthaText.combo_CII      = "\u003C";
VaarthaText.combo_CHI      = "\u002A\u00B5";
VaarthaText.combo_CHII     = "\u003C\u00B5";
VaarthaText.combo_JI       = "\u003E";
VaarthaText.combo_JII      = "\u0040";
VaarthaText.combo_JU       = "\u0056";
VaarthaText.combo_JUU      = "\u0057";
VaarthaText.combo_JHI      = "\u004A\u2014";
VaarthaText.combo_JHII     = "\u004B\u2014";
////VaarthaText.combo_JHPOLLU  = "\u00AA\u00FD\u2014";

VaarthaText.combo_TTHI     = "\u004A\u00B8";
VaarthaText.combo_TTHII    = "\u004B\u00B8";

VaarthaText.combo_TI       = "\u0041";
VaarthaText.combo_TII      = "\u0042";
VaarthaText.combo_THI      = "\u0043\u00B7";
VaarthaText.combo_THII     = "\u0044\u00B7";
VaarthaText.combo_DI       = "\u0043";
VaarthaText.combo_DII      = "\u0044";
VaarthaText.combo_DHI      = "\u0043\u00B5";
VaarthaText.combo_DHII     = "\u0044\u00B5";
VaarthaText.combo_NI       = "\u0045";
VaarthaText.combo_NII      = "\u0046";

//VaarthaText.combo_PI       = "\u00CF";
//VaarthaText.combo_PII      = "\u00D4";
VaarthaText.combo_BI       = "\u0047";
VaarthaText.combo_BII      = "\u0048";
VaarthaText.combo_BHI      = "\u0047\u00B5";
VaarthaText.combo_BHII     = "\u0048\u00B5";
VaarthaText.combo_MAA      = "\u00AB\u00D6";
VaarthaText.combo_MI       = "\u004E\u00D5";
VaarthaText.combo_MII      = "\u004F\u00D5";
VaarthaText.combo_MU       = "\u00AB\u00E1";
VaarthaText.combo_MUU      = "\u00AB\u00E2";
VaarthaText.combo_ME_1     = "\u00A2\u00E7\u00D5";
//VaarthaText.combo_ME_2     = "\u201E\u00E7\u00D5";
VaarthaText.combo_MEE      = "\u00A2\u00E8\u00D5";
//VaarthaText.combo_MAI      = "\u201E\u00E7\u00D5\u0069";
VaarthaText.combo_MO       = "\u00A2\u00E7\u00E1";
VaarthaText.combo_MOO      = "\u00A2\u00E7\u00D6";
VaarthaText.combo_MPOLLU   = "\u00A2\u00FE\u00D5";

VaarthaText.combo_YAA      = "\u00A7\u00D6";
VaarthaText.combo_YI       = "\u00A8\u00E1";
VaarthaText.combo_YII      = "\u00A8\u00E2";
VaarthaText.combo_YU       = "\u00A7\u00E1";
VaarthaText.combo_YUU      = "\u00A7\u00E2";
VaarthaText.combo_YE       = "\u00A7\u00E7\u00D5";
VaarthaText.combo_YEE      = "\u00A7\u00E8\u00D5";
VaarthaText.combo_YAI      = "\u00A7\u00E7\u0069\u00D5";
VaarthaText.combo_YO       = "\u00A7\u00E7\u00E1";
VaarthaText.combo_YOO      = "\u00A7\u00E7\u00D6";
//VaarthaText.combo_YPOLLU_1 = "\u00A7\u00FC\u00D5";
//VaarthaText.combo_YPOLLU_2 = "\u00A7\u00FD\u00D5";

VaarthaText.combo_RI       = "\u004A";
VaarthaText.combo_RII      = "\u004B";
VaarthaText.combo_LI       = "\u004C";
VaarthaText.combo_LII      = "\u004D";
VaarthaText.combo_VI       = "\u004E";
VaarthaText.combo_VII      = "\u004F";
VaarthaText.combo_SHI      = "\u0050";
VaarthaText.combo_SHII     = "\u0051";
VaarthaText.combo_LLI      = "\u0052";
VaarthaText.combo_LLII     = "\u0053";

VaarthaText.combo_SHRII    = "\u0058";

//Vattulu
VaarthaText.vattu_KA       = "\u005C";
VaarthaText.vattu_KHA      = "\u005E";
VaarthaText.vattu_GA       = "\u005F";
VaarthaText.vattu_GHA      = "\u0060";

VaarthaText.vattu_CA       = "\u0061";
VaarthaText.vattu_CHA      = "\u0061\u00B4";
VaarthaText.vattu_JA       = "\u0062";
////VaarthaText.vattu_JHA      = "\u006D";
VaarthaText.vattu_NYA_1    = "\u0063";
VaarthaText.vattu_NYA_2    = "\u00D1";

VaarthaText.vattu_TTA      = "\u0064";
VaarthaText.vattu_TTHA     = "\u0065";
VaarthaText.vattu_DDA      = "\u0066";
VaarthaText.vattu_NNA      = "\u0067";

VaarthaText.vattu_TA_1     = "\u0068";
//VaarthaText.vattu_TA_2     = "\u006B";
VaarthaText.vattu_THA      = "\u006E";
VaarthaText.vattu_DA       = "\u006C";
VaarthaText.vattu_DHA      = "\u006D";
VaarthaText.vattu_NA       = "\u006F";

VaarthaText.vattu_PA       = "\u0070";
VaarthaText.vattu_PHA      = "\u0070\u00B4";
VaarthaText.vattu_BA       = "\u0073";
VaarthaText.vattu_BHA      = "\u0073\u00B4";
VaarthaText.vattu_MA       = "\u0074";

VaarthaText.vattu_YA       = "\u0075";
VaarthaText.vattu_RA_1     = "\u0076";
//VaarthaText.vattu_RA_2     = "\u201C";
//VaarthaText.vattu_RA_3     = "\u0077";
VaarthaText.vattu_LA       = "\u0078";
VaarthaText.vattu_VA       = "\u0079";
VaarthaText.vattu_SHA      = "\u007A";
VaarthaText.vattu_SSA_1    = "\u007B";
//VaarthaText.vattu_SSA_2    = "\u00A5";
VaarthaText.vattu_SSA_3    = "\u007E";
VaarthaText.vattu_SA       = "\u0071";
VaarthaText.vattu_HA       = "\u007C";
VaarthaText.vattu_LLA      = "\u007D";
//VaarthaText.vattu_RRA      = "\u00C4";

//Conjuncts
VaarthaText.vattu_PU       = "\u0072";
//VaarthaText.vattu_TRA      = "\u0059";
//VaarthaText.vattu_TTRA     = "\u005A";

VaarthaText.misc_vattu_1     = "\u00B6";  //Gha, pha etc
VaarthaText.misc_vattu_2     = "\u00B5";  //This seems to be for consonants
VaarthaText.misc_vattu_3     = "\u00B4";  //This seems to be for vattulu

//Matches ASCII
//VaarthaText.EXCLAM         = "\u0021";
//VaarthaText.QTSINGLE       = "\u0027";
//VaarthaText.PARENLEFT      = "\u0028";
//VaarthaText.PARENRIGT      = "\u0029";
//VaarthaText.PLUS           = "\u002B";
//VaarthaText.COMMA          = "\u002C";
//VaarthaText.PERIOD         = "\u002E";
//VaarthaText.SLASH          = "\u002F";
//VaarthaText.COLON          = "\u003A";
//VaarthaText.SEMICOLON      = "\u003B";
//VaarthaText.EQUALS         = "\u003D";
//VaarthaText.QUESTION       = "\u003F";

//VaarthaText.digit_ZERO     = "\u0030";
//VaarthaText.digit_ONE      = "\u0031";
//VaarthaText.digit_TWO      = "\u0032";
//VaarthaText.digit_THREE    = "\u0033";
//VaarthaText.digit_FOUR     = "\u0034";
//VaarthaText.digit_FIVE     = "\u0035";
//VaarthaText.digit_SIX      = "\u0036";
//VaarthaText.digit_SEVEN    = "\u0037";
//VaarthaText.digit_EIGHT    = "\u0038";
//VaarthaText.digit_NINE     = "\u0039";

//Does not match ASCII
//VaarthaText.DIVIDE         = "\u0025";
//VaarthaText.MULTIPLY       = "\u0024";
//VaarthaText.PIPE           = "\u0049";
//VaarthaText.ASTERISK       = "\u005B";
//VaarthaText.PERCENT        = "\u005D";
VaarthaText.HYPHEN         = "\u00D0";

//Kommu
VaarthaText.misc_TICK_1    = "\u00C0";
VaarthaText.misc_TICK_2    = "\u222B";
VaarthaText.misc_TICK_3    = "\u00BE";
VaarthaText.misc_TICK_4    = "\u00BA";
VaarthaText.misc_TICK_5    = "\u03A9";
//VaarthaText.misc_TICK_6    = "\u00E6";
//VaarthaText.misc_TICK_7    = "\u00F8";
//VaarthaText.misc_TICK_8    = "\u00A1";
VaarthaText.misc_TICK_9    = "\u00BF";
VaarthaText.misc_TICK_10   = "\u00B9";
VaarthaText.misc_TICK_11   = "\u00BB";
VaarthaText.misc_TICK_12   = "\u00BC";
VaarthaText.misc_TICK_13   = "\u00BD";
VaarthaText.misc_TICK_14   = "\u00C1";

VaarthaText.misc_UNKNOWN_1 = "\u0023";
VaarthaText.misc_UNKNOWN_2 = "\u002D";
VaarthaText.misc_UNKNOWN_3 = "\u00CA";


//VaarthaText.extra_HYPHEN   = "\u00D0";
////VaarthaText.extra_QTSINGLE = "\u00D1";

VaarthaText.toPadma = new Object();

VaarthaText.toPadma[VaarthaText.candrabindu] = Padma.candrabindu;
VaarthaText.toPadma[VaarthaText.visarga]  = Padma.visarga;
//VaarthaText.toPadma[VaarthaText.virama_1] = Padma.syllbreak;
VaarthaText.toPadma[VaarthaText.virama_2] = Padma.syllbreak;
VaarthaText.toPadma[VaarthaText.virama_3] = Padma.syllbreak;
VaarthaText.toPadma[VaarthaText.virama_4] = Padma.syllbreak;
VaarthaText.toPadma[VaarthaText.virama_5] = Padma.syllbreak;
VaarthaText.toPadma[VaarthaText.virama_6] = Padma.syllbreak;
VaarthaText.toPadma[VaarthaText.virama_7] = Padma.syllbreak;
VaarthaText.toPadma[VaarthaText.virama_8] = Padma.syllbreak;
VaarthaText.toPadma[VaarthaText.anusvara] = Padma.anusvara;

//VaarthaText.toPadma[VaarthaText.vowel_A_1] = Padma.vowel_A;
VaarthaText.toPadma[VaarthaText.vowel_A_2] = Padma.vowel_A;
VaarthaText.toPadma[VaarthaText.vowel_AA_1] = Padma.vowel_AA;
VaarthaText.toPadma[VaarthaText.vowel_AA_2] = Padma.vowel_AA;
VaarthaText.toPadma[VaarthaText.vowel_I_1] = Padma.vowel_I;
VaarthaText.toPadma[VaarthaText.vowel_I_2] = Padma.vowel_I;
VaarthaText.toPadma[VaarthaText.vowel_II_1] = Padma.vowel_II;
VaarthaText.toPadma[VaarthaText.vowel_II_2] = Padma.vowel_II;
VaarthaText.toPadma[VaarthaText.vowel_U_1] = Padma.vowel_U;
VaarthaText.toPadma[VaarthaText.vowel_U_2] = Padma.vowel_U;
VaarthaText.toPadma[VaarthaText.vowel_UU_1] = Padma.vowel_UU;
VaarthaText.toPadma[VaarthaText.vowel_UU_2] = Padma.vowel_UU;
VaarthaText.toPadma[VaarthaText.vowel_R] = Padma.vowel_R;
VaarthaText.toPadma[VaarthaText.vowel_RR] = Padma.vowel_RR;
VaarthaText.toPadma[VaarthaText.vowel_E_1] = Padma.vowel_E;
VaarthaText.toPadma[VaarthaText.vowel_E_2] = Padma.vowel_E;
VaarthaText.toPadma[VaarthaText.vowel_EE_1] = Padma.vowel_EE;
VaarthaText.toPadma[VaarthaText.vowel_EE_2] = Padma.vowel_EE;
VaarthaText.toPadma[VaarthaText.vowel_AI_1] = Padma.vowel_AI;
VaarthaText.toPadma[VaarthaText.vowel_AI_2] = Padma.vowel_AI;
VaarthaText.toPadma[VaarthaText.vowel_O_1] = Padma.vowel_O;
VaarthaText.toPadma[VaarthaText.vowel_O_2] = Padma.vowel_O;
VaarthaText.toPadma[VaarthaText.vowel_OO_1] = Padma.vowel_OO;
VaarthaText.toPadma[VaarthaText.vowel_OO_2] = Padma.vowel_OO;
VaarthaText.toPadma[VaarthaText.vowel_AU_1] = Padma.vowel_AU;
VaarthaText.toPadma[VaarthaText.vowel_AU_2] = Padma.vowel_AU;

VaarthaText.toPadma[VaarthaText.consnt_KA_1] = Padma.consnt_KA;
VaarthaText.toPadma[VaarthaText.consnt_KA_2] = Padma.consnt_KA;
VaarthaText.toPadma[VaarthaText.consnt_KA_3] = Padma.consnt_KA;
VaarthaText.toPadma[VaarthaText.consnt_KHA_1] = Padma.consnt_KHA;
VaarthaText.toPadma[VaarthaText.consnt_KHA_2] = Padma.consnt_KHA;
VaarthaText.toPadma[VaarthaText.consnt_GA] = Padma.consnt_GA;
VaarthaText.toPadma[VaarthaText.consnt_GHA] = Padma.consnt_GHA;
VaarthaText.toPadma[VaarthaText.consnt_NGA] = Padma.consnt_NGA;

VaarthaText.toPadma[VaarthaText.consnt_CA] = Padma.consnt_CA;
VaarthaText.toPadma[VaarthaText.consnt_CHA] = Padma.consnt_CHA;
VaarthaText.toPadma[VaarthaText.consnt_JA_1] = Padma.consnt_JA;
VaarthaText.toPadma[VaarthaText.consnt_JA_2] = Padma.consnt_JA;
VaarthaText.toPadma[VaarthaText.consnt_JHA] = Padma.consnt_JHA;
VaarthaText.toPadma[VaarthaText.consnt_NYA] = Padma.consnt_NYA;

VaarthaText.toPadma[VaarthaText.consnt_TTA_1] = Padma.consnt_TTA;
VaarthaText.toPadma[VaarthaText.consnt_TTA_2] = Padma.consnt_TTA;
VaarthaText.toPadma[VaarthaText.consnt_TTA_3] = Padma.consnt_TTA;
VaarthaText.toPadma[VaarthaText.consnt_TTA_4] = Padma.consnt_TTA;
VaarthaText.toPadma[VaarthaText.consnt_TTA_5] = Padma.consnt_TTA;
VaarthaText.toPadma[VaarthaText.consnt_TTA_6] = Padma.consnt_TTA;
VaarthaText.toPadma[VaarthaText.consnt_TTHA] = Padma.consnt_TTHA;
VaarthaText.toPadma[VaarthaText.consnt_DDA_1] = Padma.consnt_DDA;
VaarthaText.toPadma[VaarthaText.consnt_DDA_2] = Padma.consnt_DDA;
VaarthaText.toPadma[VaarthaText.consnt_DDHA_1] = Padma.consnt_DDHA;
VaarthaText.toPadma[VaarthaText.consnt_DDHA_2] = Padma.consnt_DDHA;
VaarthaText.toPadma[VaarthaText.consnt_NNA] = Padma.consnt_NNA;

VaarthaText.toPadma[VaarthaText.consnt_TA_1] = Padma.consnt_TA;
VaarthaText.toPadma[VaarthaText.consnt_TA_2] = Padma.consnt_TA;
VaarthaText.toPadma[VaarthaText.consnt_THA_1] = Padma.consnt_THA;
VaarthaText.toPadma[VaarthaText.consnt_THA_2] = Padma.consnt_THA;
VaarthaText.toPadma[VaarthaText.consnt_DA_1] = Padma.consnt_DA;
VaarthaText.toPadma[VaarthaText.consnt_DA_2] = Padma.consnt_DA;
VaarthaText.toPadma[VaarthaText.consnt_DHA_1] = Padma.consnt_DHA;
VaarthaText.toPadma[VaarthaText.consnt_DHA_2] = Padma.consnt_DHA;
VaarthaText.toPadma[VaarthaText.consnt_NA_1] = Padma.consnt_NA;
VaarthaText.toPadma[VaarthaText.consnt_NA_2] = Padma.consnt_NA;
VaarthaText.toPadma[VaarthaText.consnt_NA_3] = Padma.consnt_NA;

VaarthaText.toPadma[VaarthaText.consnt_PA_1] = Padma.consnt_PA;
VaarthaText.toPadma[VaarthaText.consnt_PA_2] = Padma.consnt_PA;
VaarthaText.toPadma[VaarthaText.consnt_PHA_1]  = Padma.consnt_PHA;
VaarthaText.toPadma[VaarthaText.consnt_PHA_2]  = Padma.consnt_PHA;
VaarthaText.toPadma[VaarthaText.consnt_BA_1] = Padma.consnt_BA;
VaarthaText.toPadma[VaarthaText.consnt_BA_2] = Padma.consnt_BA;
VaarthaText.toPadma[VaarthaText.consnt_BHA]  = Padma.consnt_BHA;
VaarthaText.toPadma[VaarthaText.consnt_MA_1] = Padma.consnt_MA;
VaarthaText.toPadma[VaarthaText.consnt_MA_2] = Padma.consnt_MA;

//VaarthaText.toPadma[VaarthaText.consnt_YA_1] = Padma.consnt_YA;
VaarthaText.toPadma[VaarthaText.consnt_YA_2] = Padma.consnt_YA;
VaarthaText.toPadma[VaarthaText.consnt_RA] = Padma.consnt_RA;
VaarthaText.toPadma[VaarthaText.consnt_LA_1] = Padma.consnt_LA;
VaarthaText.toPadma[VaarthaText.consnt_LA_2] = Padma.consnt_LA;
VaarthaText.toPadma[VaarthaText.consnt_VA_1] = Padma.consnt_VA;
VaarthaText.toPadma[VaarthaText.consnt_VA_2] = Padma.consnt_VA;
VaarthaText.toPadma[VaarthaText.consnt_SHA] = Padma.consnt_SHA;
VaarthaText.toPadma[VaarthaText.consnt_SSA_1] = Padma.consnt_SSA;
VaarthaText.toPadma[VaarthaText.consnt_SSA_2] = Padma.consnt_SSA;
VaarthaText.toPadma[VaarthaText.consnt_SA_1] = Padma.consnt_SA;
VaarthaText.toPadma[VaarthaText.consnt_SA_2] = Padma.consnt_SA;

VaarthaText.toPadma[VaarthaText.consnt_HA] = Padma.consnt_HA;
VaarthaText.toPadma[VaarthaText.consnt_LLA] = Padma.consnt_LLA;
VaarthaText.toPadma[VaarthaText.consnt_RRA] = Padma.consnt_RRA;
VaarthaText.toPadma[VaarthaText.conjct_KSHA] = Padma.consnt_KA + Padma.vattu_SSA;

//Gunintamulu
VaarthaText.toPadma[VaarthaText.vowelsn_AA_1]  = Padma.vowelsn_AA;
VaarthaText.toPadma[VaarthaText.vowelsn_AA_2]  = Padma.vowelsn_AA;
VaarthaText.toPadma[VaarthaText.vowelsn_AA_3]  = Padma.vowelsn_AA;
VaarthaText.toPadma[VaarthaText.vowelsn_AA_4]  = Padma.vowelsn_AA;
VaarthaText.toPadma[VaarthaText.vowelsn_AA_5]  = Padma.vowelsn_AA;
VaarthaText.toPadma[VaarthaText.vowelsn_AA_6]  = Padma.vowelsn_AA;
VaarthaText.toPadma[VaarthaText.vowelsn_AA_7]  = Padma.vowelsn_AA;
VaarthaText.toPadma[VaarthaText.vowelsn_AA_8]  = Padma.vowelsn_AA;
VaarthaText.toPadma[VaarthaText.vowelsn_I_1]   = Padma.vowelsn_I;
VaarthaText.toPadma[VaarthaText.vowelsn_I_2]   = Padma.vowelsn_I;
VaarthaText.toPadma[VaarthaText.vowelsn_I_3]   = Padma.vowelsn_I;
VaarthaText.toPadma[VaarthaText.vowelsn_II_1]  = Padma.vowelsn_II;
VaarthaText.toPadma[VaarthaText.vowelsn_II_2]  = Padma.vowelsn_II;
VaarthaText.toPadma[VaarthaText.vowelsn_II_3]  = Padma.vowelsn_II;
VaarthaText.toPadma[VaarthaText.vowelsn_U_1]   = Padma.vowelsn_U;
VaarthaText.toPadma[VaarthaText.vowelsn_U_2]   = Padma.vowelsn_U;
VaarthaText.toPadma[VaarthaText.vowelsn_U_3]   = Padma.vowelsn_U;
VaarthaText.toPadma[VaarthaText.vowelsn_U_4]   = Padma.vowelsn_U;
VaarthaText.toPadma[VaarthaText.vowelsn_U_5]   = Padma.vowelsn_U;
VaarthaText.toPadma[VaarthaText.vowelsn_U_6]   = Padma.vowelsn_U;
VaarthaText.toPadma[VaarthaText.vowelsn_U_7]   = Padma.vowelsn_U;
VaarthaText.toPadma[VaarthaText.vowelsn_UU_1]  = Padma.vowelsn_UU;
VaarthaText.toPadma[VaarthaText.vowelsn_UU_2]  = Padma.vowelsn_UU;
VaarthaText.toPadma[VaarthaText.vowelsn_UU_3]  = Padma.vowelsn_UU;
VaarthaText.toPadma[VaarthaText.vowelsn_UU_4]  = Padma.vowelsn_UU;
VaarthaText.toPadma[VaarthaText.vowelsn_UU_5]  = Padma.vowelsn_UU;
VaarthaText.toPadma[VaarthaText.vowelsn_UU_6]  = Padma.vowelsn_UU;
//VaarthaText.toPadma[VaarthaText.vowelsn_UU_7]  = Padma.vowelsn_UU;
VaarthaText.toPadma[VaarthaText.vowelsn_R_1]   = Padma.vowelsn_R;
VaarthaText.toPadma[VaarthaText.vowelsn_R_2]   = Padma.vowelsn_R;
VaarthaText.toPadma[VaarthaText.vowelsn_RR_1]  = Padma.vowelsn_RR;
VaarthaText.toPadma[VaarthaText.vowelsn_RR_2]  = Padma.vowelsn_RR;
VaarthaText.toPadma[VaarthaText.vowelsn_E_1]   = Padma.vowelsn_E;
VaarthaText.toPadma[VaarthaText.vowelsn_E_2]   = Padma.vowelsn_E;
VaarthaText.toPadma[VaarthaText.vowelsn_E_3]   = Padma.vowelsn_E;
VaarthaText.toPadma[VaarthaText.vowelsn_E_4]   = Padma.vowelsn_E;
VaarthaText.toPadma[VaarthaText.vowelsn_E_5]   = Padma.vowelsn_E;
VaarthaText.toPadma[VaarthaText.vowelsn_EE_1]  = Padma.vowelsn_EE;
VaarthaText.toPadma[VaarthaText.vowelsn_EE_2]  = Padma.vowelsn_EE;
VaarthaText.toPadma[VaarthaText.vowelsn_EE_3]  = Padma.vowelsn_EE;
VaarthaText.toPadma[VaarthaText.vowelsn_EE_4]  = Padma.vowelsn_EE;
VaarthaText.toPadma[VaarthaText.vowelsn_EE_5]  = Padma.vowelsn_EE;
VaarthaText.toPadma[VaarthaText.vowelsn_O_1]   = Padma.vowelsn_O;
VaarthaText.toPadma[VaarthaText.vowelsn_O_2]   = Padma.vowelsn_O;
VaarthaText.toPadma[VaarthaText.vowelsn_O_3]   = Padma.vowelsn_O;
VaarthaText.toPadma[VaarthaText.vowelsn_O_4]   = Padma.vowelsn_O;
VaarthaText.toPadma[VaarthaText.vowelsn_OO_1]  = Padma.vowelsn_OO;
VaarthaText.toPadma[VaarthaText.vowelsn_OO_2]  = Padma.vowelsn_OO;
VaarthaText.toPadma[VaarthaText.vowelsn_OO_3]  = Padma.vowelsn_OO;
VaarthaText.toPadma[VaarthaText.vowelsn_OO_4]  = Padma.vowelsn_OO;
//VaarthaText.toPadma[VaarthaText.vowelsn_OO_5]  = Padma.vowelsn_OO;
VaarthaText.toPadma[VaarthaText.vowelsn_AU_1]  = Padma.vowelsn_AU;
VaarthaText.toPadma[VaarthaText.vowelsn_AU_2]  = Padma.vowelsn_AU;
VaarthaText.toPadma[VaarthaText.vowelsn_AU_3]  = Padma.vowelsn_AU;
VaarthaText.toPadma[VaarthaText.vowelsn_AU_4]  = Padma.vowelsn_AU;
VaarthaText.toPadma[VaarthaText.vowelsn_AU_5]  = Padma.vowelsn_AU;
VaarthaText.toPadma[VaarthaText.vowelsn_AILEN_1] = Padma.vowelsn_AILEN;
VaarthaText.toPadma[VaarthaText.vowelsn_AILEN_2] = Padma.vowelsn_AILEN;
VaarthaText.toPadma[VaarthaText.vowelsn_AILEN_3] = Padma.vowelsn_AILEN;

//Special Combinations
VaarthaText.toPadma[VaarthaText.combo_KHI_1]     = Padma.consnt_KHA + Padma.vowelsn_I;
VaarthaText.toPadma[VaarthaText.combo_KHI_2]     = Padma.consnt_KHA + Padma.vowelsn_I;
VaarthaText.toPadma[VaarthaText.combo_KHII]    = Padma.consnt_KHA + Padma.vowelsn_II;
VaarthaText.toPadma[VaarthaText.combo_GI]      = Padma.consnt_GA + Padma.vowelsn_I;
VaarthaText.toPadma[VaarthaText.combo_GII]     = Padma.consnt_GA + Padma.vowelsn_II;
VaarthaText.toPadma[VaarthaText.combo_GHAA_1]  = Padma.consnt_GHA + Padma.vowelsn_AA;
//VaarthaText.toPadma[VaarthaText.combo_GHAA_2]  = Padma.consnt_GHA + Padma.vowelsn_AA;
VaarthaText.toPadma[VaarthaText.combo_GHI]     = Padma.consnt_GHA + Padma.vowelsn_I;
VaarthaText.toPadma[VaarthaText.combo_GHII]    = Padma.consnt_GHA + Padma.vowelsn_II;
VaarthaText.toPadma[VaarthaText.combo_GHU]     = Padma.consnt_GHA + Padma.vowelsn_U;
VaarthaText.toPadma[VaarthaText.combo_GHUU]    = Padma.consnt_GHA + Padma.vowelsn_UU;
VaarthaText.toPadma[VaarthaText.combo_GHPOLLU] = Padma.consnt_GHA + Padma.syllbreak;

VaarthaText.toPadma[VaarthaText.combo_CI]      = Padma.consnt_CA + Padma.vowelsn_I;
VaarthaText.toPadma[VaarthaText.combo_CII]     = Padma.consnt_CA + Padma.vowelsn_II;
VaarthaText.toPadma[VaarthaText.combo_CHI]     = Padma.consnt_CHA + Padma.vowelsn_I;
VaarthaText.toPadma[VaarthaText.combo_CHII]    = Padma.consnt_CHA + Padma.vowelsn_II;
VaarthaText.toPadma[VaarthaText.combo_JI]      = Padma.consnt_JA + Padma.vowelsn_I;
VaarthaText.toPadma[VaarthaText.combo_JII]     = Padma.consnt_JA + Padma.vowelsn_II;
VaarthaText.toPadma[VaarthaText.combo_JU]      = Padma.consnt_JA + Padma.vowelsn_U;
VaarthaText.toPadma[VaarthaText.combo_JUU]     = Padma.consnt_JA + Padma.vowelsn_UU;
VaarthaText.toPadma[VaarthaText.combo_JHI]     = Padma.consnt_JHA + Padma.vowelsn_I;
VaarthaText.toPadma[VaarthaText.combo_JHII]    = Padma.consnt_JHA + Padma.vowelsn_II;
//VaarthaText.toPadma[VaarthaText.combo_JHPOLLU] = Padma.consnt_JHA + Padma.syllbreak;

VaarthaText.toPadma[VaarthaText.combo_TTHI]    = Padma.consnt_TTHA + Padma.vowelsn_I;
VaarthaText.toPadma[VaarthaText.combo_TTHII]   = Padma.consnt_TTHA + Padma.vowelsn_II;

VaarthaText.toPadma[VaarthaText.combo_TI]      = Padma.consnt_TA + Padma.vowelsn_I;
VaarthaText.toPadma[VaarthaText.combo_TII]     = Padma.consnt_TA + Padma.vowelsn_II;
VaarthaText.toPadma[VaarthaText.combo_THI]     = Padma.consnt_THA + Padma.vowelsn_I;
VaarthaText.toPadma[VaarthaText.combo_THII]    = Padma.consnt_THA + Padma.vowelsn_II;
VaarthaText.toPadma[VaarthaText.combo_DI]      = Padma.consnt_DA + Padma.vowelsn_I;
VaarthaText.toPadma[VaarthaText.combo_DII]     = Padma.consnt_DA + Padma.vowelsn_II;
VaarthaText.toPadma[VaarthaText.combo_DHI]     = Padma.consnt_DHA + Padma.vowelsn_I;
VaarthaText.toPadma[VaarthaText.combo_DHII]    = Padma.consnt_DHA + Padma.vowelsn_II;
VaarthaText.toPadma[VaarthaText.combo_NI]      = Padma.consnt_NA + Padma.vowelsn_I;
VaarthaText.toPadma[VaarthaText.combo_NII]     = Padma.consnt_NA + Padma.vowelsn_II;

//VaarthaText.toPadma[VaarthaText.combo_PI]      = Padma.consnt_PA + Padma.vowelsn_I;
//VaarthaText.toPadma[VaarthaText.combo_PII]     = Padma.consnt_PA + Padma.vowelsn_II;
VaarthaText.toPadma[VaarthaText.combo_BI]      = Padma.consnt_BA + Padma.vowelsn_I;
VaarthaText.toPadma[VaarthaText.combo_BII]     = Padma.consnt_BA + Padma.vowelsn_II;
VaarthaText.toPadma[VaarthaText.combo_BHI]     = Padma.consnt_BHA + Padma.vowelsn_I;
VaarthaText.toPadma[VaarthaText.combo_BHII]    = Padma.consnt_BHA + Padma.vowelsn_II;
VaarthaText.toPadma[VaarthaText.combo_MAA]     = Padma.consnt_MA + Padma.vowelsn_AA;
VaarthaText.toPadma[VaarthaText.combo_MI]      = Padma.consnt_MA + Padma.vowelsn_I;
VaarthaText.toPadma[VaarthaText.combo_MII]     = Padma.consnt_MA + Padma.vowelsn_II;
VaarthaText.toPadma[VaarthaText.combo_MU]      = Padma.consnt_MA + Padma.vowelsn_U;
VaarthaText.toPadma[VaarthaText.combo_MUU]     = Padma.consnt_MA + Padma.vowelsn_UU;
VaarthaText.toPadma[VaarthaText.combo_ME_1]    = Padma.consnt_MA + Padma.vowelsn_E;
//VaarthaText.toPadma[VaarthaText.combo_ME_2]    = Padma.consnt_MA + Padma.vowelsn_E;
VaarthaText.toPadma[VaarthaText.combo_MEE]     = Padma.consnt_MA + Padma.vowelsn_EE;
//VaarthaText.toPadma[VaarthaText.combo_MAI]     = Padma.consnt_MA + Padma.vowelsn_AI;
VaarthaText.toPadma[VaarthaText.combo_MO]      = Padma.consnt_MA + Padma.vowelsn_O;
VaarthaText.toPadma[VaarthaText.combo_MOO]     = Padma.consnt_MA + Padma.vowelsn_OO;
VaarthaText.toPadma[VaarthaText.combo_MPOLLU]  = Padma.consnt_MA + Padma.syllbreak;

VaarthaText.toPadma[VaarthaText.combo_YAA]     = Padma.consnt_YA + Padma.vowelsn_AA;
VaarthaText.toPadma[VaarthaText.combo_YI]      = Padma.consnt_YA + Padma.vowelsn_I;
VaarthaText.toPadma[VaarthaText.combo_YII]     = Padma.consnt_YA + Padma.vowelsn_II;
VaarthaText.toPadma[VaarthaText.combo_YU]      = Padma.consnt_YA + Padma.vowelsn_U;
VaarthaText.toPadma[VaarthaText.combo_YUU]     = Padma.consnt_YA + Padma.vowelsn_UU;
VaarthaText.toPadma[VaarthaText.combo_YE]      = Padma.consnt_YA + Padma.vowelsn_E;
VaarthaText.toPadma[VaarthaText.combo_YEE]     = Padma.consnt_YA + Padma.vowelsn_EE;
VaarthaText.toPadma[VaarthaText.combo_YAI]     = Padma.consnt_YA + Padma.vowelsn_AI;
VaarthaText.toPadma[VaarthaText.combo_YO]      = Padma.consnt_YA + Padma.vowelsn_O;
VaarthaText.toPadma[VaarthaText.combo_YOO]     = Padma.consnt_YA + Padma.vowelsn_OO;
//VaarthaText.toPadma[VaarthaText.combo_YPOLLU_1]= Padma.consnt_YA + Padma.syllbreak;
//VaarthaText.toPadma[VaarthaText.combo_YPOLLU_2]= Padma.consnt_YA + Padma.syllbreak;

VaarthaText.toPadma[VaarthaText.combo_RI]      = Padma.consnt_RA + Padma.vowelsn_I;
VaarthaText.toPadma[VaarthaText.combo_RII]     = Padma.consnt_RA + Padma.vowelsn_II;
VaarthaText.toPadma[VaarthaText.combo_LI]      = Padma.consnt_LA + Padma.vowelsn_I;
VaarthaText.toPadma[VaarthaText.combo_LII]     = Padma.consnt_LA + Padma.vowelsn_II;
VaarthaText.toPadma[VaarthaText.combo_VI]      = Padma.consnt_VA + Padma.vowelsn_I;
VaarthaText.toPadma[VaarthaText.combo_VII]     = Padma.consnt_VA + Padma.vowelsn_II;
VaarthaText.toPadma[VaarthaText.combo_SHI]     = Padma.consnt_SHA + Padma.vowelsn_I;
VaarthaText.toPadma[VaarthaText.combo_SHII]    = Padma.consnt_SHA + Padma.vowelsn_II;
VaarthaText.toPadma[VaarthaText.combo_LLI]     = Padma.consnt_LLA + Padma.vowelsn_I;
VaarthaText.toPadma[VaarthaText.combo_LLII]    = Padma.consnt_LLA + Padma.vowelsn_II;

VaarthaText.toPadma[VaarthaText.combo_SHRII]   = Padma.consnt_SHA + Padma.vattu_RA + Padma.vowelsn_II;

//Vattulu
VaarthaText.toPadma[VaarthaText.vattu_KA]      = Padma.vattu_KA;
VaarthaText.toPadma[VaarthaText.vattu_KHA]     = Padma.vattu_KHA;
VaarthaText.toPadma[VaarthaText.vattu_GA]      = Padma.vattu_GA;
VaarthaText.toPadma[VaarthaText.vattu_GHA]     = Padma.vattu_GHA;

VaarthaText.toPadma[VaarthaText.vattu_CA]      = Padma.vattu_CA;
VaarthaText.toPadma[VaarthaText.vattu_CHA]     = Padma.vattu_CHA;
VaarthaText.toPadma[VaarthaText.vattu_JA]      = Padma.vattu_JA;
//VaarthaText.toPadma[VaarthaText.vattu_JHA]     = Padma.vattu_JHA;
VaarthaText.toPadma[VaarthaText.vattu_NYA_1]   = Padma.vattu_NYA;
VaarthaText.toPadma[VaarthaText.vattu_NYA_2]   = Padma.vattu_NYA;

VaarthaText.toPadma[VaarthaText.vattu_TTA]     = Padma.vattu_TTA;
VaarthaText.toPadma[VaarthaText.vattu_TTHA]    = Padma.vattu_TTHA;
VaarthaText.toPadma[VaarthaText.vattu_DDA]     = Padma.vattu_DDA;
VaarthaText.toPadma[VaarthaText.vattu_NNA]     = Padma.vattu_NNA;

VaarthaText.toPadma[VaarthaText.vattu_TA_1]    = Padma.vattu_TA;
//VaarthaText.toPadma[VaarthaText.vattu_TA_2]    = Padma.vattu_TA;
VaarthaText.toPadma[VaarthaText.vattu_THA]     = Padma.vattu_THA;
VaarthaText.toPadma[VaarthaText.vattu_DA]      = Padma.vattu_DA;
VaarthaText.toPadma[VaarthaText.vattu_DHA]     = Padma.vattu_DHA;
VaarthaText.toPadma[VaarthaText.vattu_NA]      = Padma.vattu_NA;

VaarthaText.toPadma[VaarthaText.vattu_PA]      = Padma.vattu_PA;
VaarthaText.toPadma[VaarthaText.vattu_PHA]     = Padma.vattu_PHA;
VaarthaText.toPadma[VaarthaText.vattu_BA]      = Padma.vattu_BA;
VaarthaText.toPadma[VaarthaText.vattu_BHA]     = Padma.vattu_BHA;
VaarthaText.toPadma[VaarthaText.vattu_MA]      = Padma.vattu_MA;

VaarthaText.toPadma[VaarthaText.vattu_YA]      = Padma.vattu_YA;
VaarthaText.toPadma[VaarthaText.vattu_RA_1]    = Padma.vattu_RA;
//VaarthaText.toPadma[VaarthaText.vattu_RA_2]    = Padma.vattu_RA;
//VaarthaText.toPadma[VaarthaText.vattu_RA_3]    = Padma.vattu_RA;
VaarthaText.toPadma[VaarthaText.vattu_LA]      = Padma.vattu_LA;
VaarthaText.toPadma[VaarthaText.vattu_VA]      = Padma.vattu_VA;
VaarthaText.toPadma[VaarthaText.vattu_SHA]     = Padma.vattu_SHA;
VaarthaText.toPadma[VaarthaText.vattu_SSA_1]   = Padma.vattu_SSA;
//VaarthaText.toPadma[VaarthaText.vattu_SSA_2]   = Padma.vattu_SSA;
VaarthaText.toPadma[VaarthaText.vattu_SSA_3]   = Padma.vattu_SSA;
VaarthaText.toPadma[VaarthaText.vattu_SA]      = Padma.vattu_SA;
VaarthaText.toPadma[VaarthaText.vattu_HA]      = Padma.vattu_HA;
VaarthaText.toPadma[VaarthaText.vattu_LLA]     = Padma.vattu_LLA;
//VaarthaText.toPadma[VaarthaText.vattu_RRA]     = Padma.vattu_RRA;

//Conjuncts
VaarthaText.toPadma[VaarthaText.vattu_PU]      = Padma.vattu_PA + Padma.vowelsn_U;
//VaarthaText.toPadma[VaarthaText.vattu_TRA]     = Padma.vattu_TA + Padma.vattu_RA;
//VaarthaText.toPadma[VaarthaText.vattu_TTRA]    = Padma.vattu_TTA + Padma.vattu_RA;

//Miscellaneous(where it doesn't match ASCII representation)
//VaarthaText.toPadma[VaarthaText.extra_HYPHEN]   = VaarthaText.HYPHEN;
//VaarthaText.toPadma[VaarthaText.extra_QTSINGLE] = VaarthaText.QTSINGLE;
//VaarthaText.toPadma[VaarthaText.DIVIDE]         = "/"; 
//VaarthaText.toPadma[VaarthaText.MULTIPLY]       = "X";
//VaarthaText.toPadma[VaarthaText.PIPE]           = "|";
//VaarthaText.toPadma[VaarthaText.ASTERISK]       = "*";
//VaarthaText.toPadma[VaarthaText.PERCENT]        = "%";
VaarthaText.toPadma[VaarthaText.HYPHEN]         = "-";

VaarthaText.redundantList = new Object();
VaarthaText.redundantList[VaarthaText.misc_TICK_1] = true;
VaarthaText.redundantList[VaarthaText.misc_TICK_2] = true;
VaarthaText.redundantList[VaarthaText.misc_TICK_3] = true;
VaarthaText.redundantList[VaarthaText.misc_TICK_4] = true;
VaarthaText.redundantList[VaarthaText.misc_TICK_5] = true;
//VaarthaText.redundantList[VaarthaText.misc_TICK_6] = true;
//VaarthaText.redundantList[VaarthaText.misc_TICK_7] = true;
//VaarthaText.redundantList[VaarthaText.misc_TICK_8] = true;
VaarthaText.redundantList[VaarthaText.misc_TICK_9] = true;
VaarthaText.redundantList[VaarthaText.misc_TICK_10] = true;
VaarthaText.redundantList[VaarthaText.misc_TICK_11] = true;
VaarthaText.redundantList[VaarthaText.misc_TICK_12] = true;
VaarthaText.redundantList[VaarthaText.misc_TICK_13] = true;
VaarthaText.redundantList[VaarthaText.misc_TICK_14] = true;
VaarthaText.redundantList[VaarthaText.misc_UNKNOWN_1] = true;
VaarthaText.redundantList[VaarthaText.misc_UNKNOWN_2] = true;
VaarthaText.redundantList[VaarthaText.misc_UNKNOWN_3] = true;

VaarthaText.prefixList = new Object();
VaarthaText.prefixList[VaarthaText.vattu_RA_1]   = true;
//VaarthaText.prefixList[VaarthaText.vattu_RA_2]   = true;
//VaarthaText.prefixList[VaarthaText.vattu_RA_3]   = true;
VaarthaText.prefixList[VaarthaText.vowelsn_E_1]  = true;
//VaarthaText.prefixList[VaarthaText.vowelsn_E_2]  = true;
//VaarthaText.prefixList[VaarthaText.vowelsn_E_3]  = true;
VaarthaText.prefixList[VaarthaText.vowelsn_E_5]  = true;
//VaarthaText.prefixList[VaarthaText.vowelsn_E_4]  = true;
VaarthaText.prefixList[VaarthaText.vowelsn_EE_1] = true;
VaarthaText.prefixList[VaarthaText.vowelsn_EE_5] = true;
//VaarthaText.prefixList[VaarthaText.vowelsn_EE_3] = true;


VaarthaText.overloadList = new Object();
VaarthaText.overloadList[VaarthaText.consnt_KA_1]   = true;
VaarthaText.overloadList[VaarthaText.consnt_CA]     = true;
VaarthaText.overloadList[VaarthaText.consnt_DDA_1]    = true;
VaarthaText.overloadList[VaarthaText.consnt_DDA_2]    = true;
VaarthaText.overloadList[VaarthaText.consnt_DA_1]     = true;
VaarthaText.overloadList[VaarthaText.consnt_DA_2]     = true;
VaarthaText.overloadList[VaarthaText.consnt_PA_1]   = true;
VaarthaText.overloadList[VaarthaText.consnt_PA_2]   = true;
VaarthaText.overloadList[VaarthaText.consnt_PHA_1]  = true;
VaarthaText.overloadList[VaarthaText.consnt_BA_1]   = true;
VaarthaText.overloadList[VaarthaText.consnt_BA_2]   = true;
//VaarthaText.overloadList[VaarthaText.consnt_YA_1]   = true;
VaarthaText.overloadList[VaarthaText.consnt_RA]     = true;
VaarthaText.overloadList[VaarthaText.consnt_VA_1]   = true;
VaarthaText.overloadList[VaarthaText.consnt_VA_2]   = true;
VaarthaText.overloadList[VaarthaText.vowelsn_R_1]     = true;
VaarthaText.overloadList[VaarthaText.vowelsn_R_2]     = true;
//VaarthaText.overloadList[VaarthaText.vowelsn_E_1]   = true;
VaarthaText.overloadList[VaarthaText.combo_CI]      = true;
VaarthaText.overloadList[VaarthaText.combo_CII]     = true;
VaarthaText.overloadList[VaarthaText.combo_DI]      = true;
VaarthaText.overloadList[VaarthaText.combo_DII]     = true;
VaarthaText.overloadList[VaarthaText.combo_BI]      = true;
VaarthaText.overloadList[VaarthaText.combo_BII]     = true;
VaarthaText.overloadList[VaarthaText.combo_VI]      = true;
VaarthaText.overloadList[VaarthaText.combo_VII]     = true;
VaarthaText.overloadList[VaarthaText.combo_RI]      = true;
VaarthaText.overloadList[VaarthaText.combo_RII]     = true;
VaarthaText.overloadList[VaarthaText.vattu_CA]      = true;
VaarthaText.overloadList[VaarthaText.vattu_DA]      = true;
VaarthaText.overloadList[VaarthaText.vattu_PA]      = true;
VaarthaText.overloadList[VaarthaText.vattu_BA]      = true;
//VaarthaText.overloadList["\u0058\u00B6\u00CF"] = true;
//VaarthaText.overloadList["\u0058\u00B6\u00D4"] = true;
//VaarthaText.overloadList["\u0058\u00B6\u00FD"] = true;
//VaarthaText.overloadList["\u00AA\u00FD"]       = true;
VaarthaText.overloadList["\u201E\u00E3"]       = true;
VaarthaText.overloadList["\u201E\u00E4"]       = true;
VaarthaText.overloadList["\u201E\u00E7"]       = true;
VaarthaText.overloadList["\u201E\u00E7\u00D5"] = true;
//VaarthaText.overloadList["\u201E\u00FE"]       = true;
//VaarthaText.overloadList["\u00A6\u00D5"]       = true;
VaarthaText.overloadList["\u00A7\u00E8"]       = true;
VaarthaText.overloadList["\u00A7\u00E7"]       = true;
VaarthaText.overloadList["\u00A7\u00E7\u0069"] = true;
//VaarthaText.overloadList["\u00A7\u00FC"]       = true;
//VaarthaText.overloadList["\u00A7\u00FD"]       = true;
VaarthaText.overloadList["\u00A5\u00D5"]       = true;
VaarthaText.overloadList["\u00A2\u00E7"]       = true;
VaarthaText.overloadList["\u00A2\u00E8"]       = true;
VaarthaText.overloadList["\u00A2\u00FE"]       = true;
VaarthaText.overloadList["\u00A7"]       = true;
VaarthaText.overloadList["\u00A1\u00B6\u00CF"]       = true;
VaarthaText.overloadList["\u00A1\u00B6\u00D4"]       = true;
VaarthaText.overloadList["\u00A1\u00B6\u00FF"]       = true;


VaarthaText.isRedundant = function (str)
{
    return VaarthaText.redundantList[str] != null;
}
