//$Id: VikaasWebFont.js,v 1.1 2010/01/11 13:44:44 harshita Exp $

//Copyright 2009-2010 HarshitaVani <harshita@atc.tcs.com>

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

//Telugu -- VikaasWebFont, PriyaankaBoldWebFont, PallaviBoldWebFont
function VikaasWebFont()
{
}

//The interface every dynamic font encoding should implement
VikaasWebFont.maxLookupLen = 4;
VikaasWebFont.fontFace     = "VikaasWebFont";
VikaasWebFont.displayName  = "VikaasWebFont";
VikaasWebFont.script       = Padma.script_TELUGU;

VikaasWebFont.lookup = function (str) 
{
    return VikaasWebFont.toPadma[str];
}

VikaasWebFont.isPrefixSymbol = function (str)
{
    return VikaasWebFont.prefixList[str] != null;
}

VikaasWebFont.isOverloaded = function (str)
{
    return VikaasWebFont.overloadList[str] != null;
}

VikaasWebFont.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if ((sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_AILEN) || 
        (sign1 == Padma.vowelsn_E && sign2 == Padma.vowelsn_AILEN) )
        return Padma.vowelsn_AI;
    if ((sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_U) || 
        (sign1 == Padma.vowelsn_E && sign2 == Padma.vowelsn_U))
        return Padma.vowelsn_O;
    if ((sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_AA) || 
        (sign1 == Padma.vowelsn_E && sign2 == Padma.vowelsn_AA))
        return Padma.vowelsn_OO;
    return sign1 + sign2;    
}

//\u00B2 is used mostly for AA gunintam - unfortunately it is also used for writing HA, so it needs to be handled specially
VikaasWebFont.preprocessMessage = function (input)
{
    var output = "", ctxt = 0;
    for(var i = 0; i < input.length; ++i) {
        var cur = input.charAt(i);
        if (VikaasWebFont.isRedundant(cur))
            continue;
        if (ctxt == 1) {
            if (cur == VikaasWebFont.vowelsn_AA_5) {
                ctxt = 0;
                continue;
            }
            var val = VikaasWebFont.lookup(cur);
            if (val != null) {
                var type = Padma.getType(val.charAt(0));
                if (type != Padma.type_vattu && type != Padma.type_gunintam && type != Padma.type_hallu_mod)
                    ctxt = 0;
            }
            else ctxt = 0;
        }
        else if (cur == VikaasWebFont.consnt_HA_1)
            ctxt = 1;
        output += cur;
    }
    return output;
}

//Implementation details start here
//TODO :0098,00AD,00B6,00F6,

//Specials
VikaasWebFont.candrabindu    = "\u0022";
VikaasWebFont.visarga        = "\u0027";
VikaasWebFont.virama_1       = "\u0059";
VikaasWebFont.virama_2       = "\u0074";
VikaasWebFont.virama_3       = "\u008E";
VikaasWebFont.virama_4       = "\u00B4";
VikaasWebFont.virama_5       = "\u00D9";
VikaasWebFont.virama_6       = "\u00F9";
VikaasWebFont.virama_7       = "\u017D";
VikaasWebFont.anusvara       = "\u002B";

//Vowels
VikaasWebFont.vowel_A        = "\u006E";
VikaasWebFont.vowel_AA_1     = "\u0080";
VikaasWebFont.vowel_AA_2     = "\u20AC";
VikaasWebFont.vowel_I_1      = "\u0082";
VikaasWebFont.vowel_I_2      = "\u201A";
VikaasWebFont.vowel_II_1     = "\u0087";
VikaasWebFont.vowel_II_2     = "\u2021";
VikaasWebFont.vowel_U_1      = "\u0096";
VikaasWebFont.vowel_U_2      = "\u2013";
VikaasWebFont.vowel_UU       = "\u007D";
VikaasWebFont.vowel_R_1      = "\u2039\u0054\u0054";
VikaasWebFont.vowel_R_2      = "\u008B\u0054\u0054";
VikaasWebFont.vowel_RR_1     = "\u2039\u0054\u00D6";
VikaasWebFont.vowel_RR_2     = "\u008B\u0054\u00D6";
VikaasWebFont.vowel_E        = "\u006D";
VikaasWebFont.vowel_EE       = "\u0040";
VikaasWebFont.vowel_AI       = "\u00D7";
VikaasWebFont.vowel_O        = "\u00FF";
VikaasWebFont.vowel_OO       = "\u007A";
VikaasWebFont.vowel_AU       = "\u0057";

//Consonants
VikaasWebFont.consnt_KA_1    = "\u00BF";
VikaasWebFont.consnt_KA_2    = "\u00C5";
VikaasWebFont.consnt_KHA_1   = "\u004B";
VikaasWebFont.consnt_KHA_2   = "\u0055";
VikaasWebFont.consnt_GA      = "\u003E";
VikaasWebFont.consnt_GHA_1   = "\u007C\u02DC\u0054";
VikaasWebFont.consnt_GHA_2   = "\u007C\u0098\u0054";
VikaasWebFont.consnt_NGA     = "\u0076";

VikaasWebFont.consnt_CA      = "\u0023";
VikaasWebFont.consnt_CHA_1   = "\u0023\u00F3";
VikaasWebFont.consnt_CHA_2   = "\u0023\u00DB";
VikaasWebFont.consnt_JA_1    = "\u0043";
VikaasWebFont.consnt_JA_2    = "\u00C8";
VikaasWebFont.consnt_JHA     = "\u0073\u0061";
VikaasWebFont.consnt_NYA     = "\u0078";

VikaasWebFont.consnt_TTA_1   = "\u0066";
VikaasWebFont.consnt_TTA_2   = "\u007B";
VikaasWebFont.consnt_TTA_3   = "\u00B3";
VikaasWebFont.consnt_TTHA    = "\u0073\u00C4";
VikaasWebFont.consnt_DDA     = "\u0026";
VikaasWebFont.consnt_DDHA    = "\u0026\u00F3";
VikaasWebFont.consnt_NNA     = "\u0044";

VikaasWebFont.consnt_TA      = "\u00D4";
VikaasWebFont.consnt_THA_1   = "\u003C\u00B8";
//VikaasWebFont.consnt_THA_2   = "\u";
VikaasWebFont.consnt_DA      = "\u003C";
VikaasWebFont.consnt_DHA     = "\u003C\u00F3";
VikaasWebFont.consnt_NA_1    = "\u0071";
VikaasWebFont.consnt_NA_2    = "\u0048";

VikaasWebFont.consnt_PA_1    = "\u0062";
//VikaasWebFont.consnt_PA_2    = "\u0079";
VikaasWebFont.consnt_PA_3    = "\u007C";
VikaasWebFont.consnt_PHA_1   = "\u007C\u02DC";
VikaasWebFont.consnt_PHA_2   = "\u007C\u0098";
VikaasWebFont.consnt_PHA_3   = "\u0062\u02DC";
VikaasWebFont.consnt_PHA_4   = "\u0062\u0098";
VikaasWebFont.consnt_BA_1    = "\u0075";
VikaasWebFont.consnt_BA_2    = "\u008B";
VikaasWebFont.consnt_BA_3    = "\u2039";
VikaasWebFont.consnt_BHA     = "\u0075\u00F3";
VikaasWebFont.consnt_MA      = "\u0065\u0054";

VikaasWebFont.consnt_YA_1    = "\u006A\u0054";
//VikaasWebFont.consnt_YA_2    = "\u";
VikaasWebFont.consnt_RA      = "\u0073";
VikaasWebFont.consnt_LA_1    = "\u005C";
VikaasWebFont.consnt_LA_2    = "\u00FD";
VikaasWebFont.consnt_VA_1    = "\u0065";
VikaasWebFont.consnt_VA_2    = "\u0079";
VikaasWebFont.consnt_SHA     = "\u0058";
VikaasWebFont.consnt_SSA_1   = "\u0077";
VikaasWebFont.consnt_SSA_2   = "\u0063";
VikaasWebFont.consnt_SA_1    = "\u0064";
VikaasWebFont.consnt_SA_2    = "\u006B";
VikaasWebFont.consnt_HA_1    = "\u0056";
VikaasWebFont.consnt_LLA     = "\u00DE";
VikaasWebFont.consnt_RRA     = "\u0069";
//VikaasWebFont.conjct_KSHA    = "\u";

VikaasWebFont.conjct_STR     = "\u0067";
VikaasWebFont.conjct_SSTTR   = "\u0068";

//Gunintamulu
VikaasWebFont.vowelsn_AA_1   = "\u0086";
VikaasWebFont.vowelsn_AA_2   = "\u0090";
VikaasWebFont.vowelsn_AA_3   = "\u0091";
VikaasWebFont.vowelsn_AA_4   = "\u00B1";
VikaasWebFont.vowelsn_AA_5   = "\u00B2";
VikaasWebFont.vowelsn_AA_6   = "\u00CD";
VikaasWebFont.vowelsn_AA_7   = "\u00E4";
VikaasWebFont.vowelsn_AA_8   = "\u00E6";
VikaasWebFont.vowelsn_AA_9   = "\u2018";
VikaasWebFont.vowelsn_AA_10  = "\u2020";
VikaasWebFont.vowelsn_AA_11  = "\u0041";
VikaasWebFont.vowelsn_I_1    = "\u008D";
VikaasWebFont.vowelsn_I_2    = "\u00BE";
VikaasWebFont.vowelsn_I_3    = "\u00EC";
VikaasWebFont.vowelsn_II_1   = "\u009E";
VikaasWebFont.vowelsn_II_2   = "\u00A1";
VikaasWebFont.vowelsn_II_3   = "\u00D3";
VikaasWebFont.vowelsn_II_4   = "\u017E";
VikaasWebFont.vowelsn_U_1    = "\u0051";
VikaasWebFont.vowelsn_U_2    = "\u0054";
VikaasWebFont.vowelsn_U_3    = "\u0094";
VikaasWebFont.vowelsn_U_4    = "\u0097";
VikaasWebFont.vowelsn_U_5    = "\u00A7";
VikaasWebFont.vowelsn_U_6    = "\u00DA";
VikaasWebFont.vowelsn_U_7    = "\u201D";
VikaasWebFont.vowelsn_U_8    = "\u2014";
VikaasWebFont.vowelsn_UU_1   = "\u004C";
VikaasWebFont.vowelsn_UU_2   = "\u004F";
VikaasWebFont.vowelsn_UU_3   = "\u0050";
VikaasWebFont.vowelsn_UU_4   = "\u0053";
VikaasWebFont.vowelsn_UU_5   = "\u00D6";
VikaasWebFont.vowelsn_R_1    = "\u007F";
VikaasWebFont.vowelsn_R_2    = "\u008F";
//VikaasWebFont.vowelsn_RR     = "\u";
VikaasWebFont.vowelsn_E_1    = "\u0099";
VikaasWebFont.vowelsn_E_2    = "\u00C2";
VikaasWebFont.vowelsn_E_3    = "\u00C9";
VikaasWebFont.vowelsn_E_4    = "\u00E8";
VikaasWebFont.vowelsn_E_5    = "\u00EE";
VikaasWebFont.vowelsn_E_6    = "\u2122";
VikaasWebFont.vowelsn_EE_1   = "\u009D";
VikaasWebFont.vowelsn_EE_2   = "\u00B9";
VikaasWebFont.vowelsn_EE_3   = "\u00E2";
VikaasWebFont.vowelsn_EE_4   = "\u00F1";
VikaasWebFont.vowelsn_EE_5   = "\u00FB";
VikaasWebFont.vowelsn_O_1    = "\u003D";
VikaasWebFont.vowelsn_O_2    = "\u00A4";
VikaasWebFont.vowelsn_O_3    = "\u00F5";
//VikaasWebFont.vowelsn_O_4    = "\u";
VikaasWebFont.vowelsn_OO_1   = "\u00C3";
VikaasWebFont.vowelsn_OO_2   = "\u00CB";
VikaasWebFont.vowelsn_OO_3   = "\u00FE";
//VikaasWebFont.vowelsn_OO_4   = "\u";
//VikaasWebFont.vowelsn_OO_5   = "\u";
VikaasWebFont.vowelsn_AU_1   = "\u0085";
VikaasWebFont.vowelsn_AU_2   = "\u009A";
VikaasWebFont.vowelsn_AU_3   = "\u00E5";
VikaasWebFont.vowelsn_AU_4   = "\u00EA";
VikaasWebFont.vowelsn_AU_5   = "\u00F2";
VikaasWebFont.vowelsn_AU_6   = "\u0161";
VikaasWebFont.vowelsn_AU_7   = "\u2026";
VikaasWebFont.vowelsn_AILEN_1 = "\u00AE";
VikaasWebFont.vowelsn_AILEN_2 = "\u00D5";
VikaasWebFont.vowelsn_AILEN_3 = "\u00ED";

//Special Combinations
VikaasWebFont.combo_KHI      = "\u00CF";
VikaasWebFont.combo_KHII     = "\u0046";
VikaasWebFont.combo_GI       = "\u00D0";
VikaasWebFont.combo_GII      = "\u005E";
VikaasWebFont.combo_GHAA     = "\u007C\u0098\u00D6";
//VikaasWebFont.combo_GHAA_2   = "\u";
VikaasWebFont.combo_GHI_1    = "\u007C\u0098\u00BE\u0054";
VikaasWebFont.combo_GHI_2    = "\u007C\u02DC\u00BE\u0054";
VikaasWebFont.combo_GHII     = "\u007C\u0098\u00D3\u0054";
//VikaasWebFont.combo_GHU      = "\u";
//VikaasWebFont.combo_GHUU     = "\u";
//VikaasWebFont.combo_GHPOLLU  = "\u";

VikaasWebFont.combo_CI       = "\u00BA";
VikaasWebFont.combo_CII      = "\u004E";
VikaasWebFont.combo_CHI      = "\u00BA\u00F3";
VikaasWebFont.combo_CHII     = "\u004E\u00F3";
VikaasWebFont.combo_JI_1     = "\u009B";
VikaasWebFont.combo_JI_2     = "\u203A";
VikaasWebFont.combo_JII      = "\u004A";
VikaasWebFont.combo_JU       = "\u0045";
VikaasWebFont.combo_JUU      = "\u0070";
VikaasWebFont.combo_JHI      = "\u005D\u0061";
VikaasWebFont.combo_JHII     = "\u00AF\u0061";
//VikaasWebFont.combo_JHPOLLU  = "\u";

//VikaasWebFont.combo_TTHI     = "\u";
//VikaasWebFont.combo_TTHII    = "\u";

VikaasWebFont.combo_TI       = "\u00DC";
VikaasWebFont.combo_TII      = "\u0072";
//VikaasWebFont.combo_THI      = "\u";
//VikaasWebFont.combo_THII     = "\u";
VikaasWebFont.combo_DI       = "\u007E";
VikaasWebFont.combo_DII      = "\u0042";
VikaasWebFont.combo_DHI      = "\u007E\u00F3";
VikaasWebFont.combo_DHII     = "\u0042\u00F3";
VikaasWebFont.combo_NI_1     = "\u0093";
VikaasWebFont.combo_NI_2     = "\u201C";
VikaasWebFont.combo_NII      = "\u00FA";

VikaasWebFont.combo_BAA      = "\u0075\u00B2";
VikaasWebFont.combo_BOO      = "\u0075\u00CB";
VikaasWebFont.combo_BI       = "\u005F";
VikaasWebFont.combo_BII      = "\u003B";
VikaasWebFont.combo_BHI      = "\u005F\u00F3";
VikaasWebFont.combo_BHII     = "\u003B\u00F3";
VikaasWebFont.combo_MAA      = "\u0065\u00D6";
VikaasWebFont.combo_MI       = "\u0024\u0054";
VikaasWebFont.combo_MII_1    = "\u004D\u0054";
VikaasWebFont.combo_MII_2    = "\u0024\u004C";
//VikaasWebFont.combo_MU       = "\u";
//VikaasWebFont.combo_MUU      = "\u";
VikaasWebFont.combo_VE       = "\u0079\u00EE";
VikaasWebFont.combo_VEE      = "\u0079\u00FB";
VikaasWebFont.combo_ME_1     = "\u0079\u00EE\u0054";
//VikaasWebFont.combo_ME_2     = "\u006A\u00EE\u0054";
VikaasWebFont.combo_MEE      = "\u0079\u00FB\u0054";
//VikaasWebFont.combo_MAI      = "\u";
//VikaasWebFont.combo_MO       = "\u";
VikaasWebFont.combo_MOO      = "\u0079\u00EE\u00D6";
VikaasWebFont.combo_MPOLLU   = "\u0079\u017D\u0054";

VikaasWebFont.combo_YAA      = "\u006A\u00D6";
VikaasWebFont.combo_YI       = "\u0073\u0054\u0054";
VikaasWebFont.combo_YII_1    = "\u0073\u0054\u00D6";
VikaasWebFont.combo_YII_2    = "\u0073\u0054\u0054\u00B1";
VikaasWebFont.combo_YE       = "\u006A\u00EE\u0054";
VikaasWebFont.combo_YEE      = "\u006A\u00FB\u0054";
VikaasWebFont.combo_YAI      = "\u006A\u00EE\u00AE\u0054";
//VikaasWebFont.combo_YO       = "\u";
VikaasWebFont.combo_YOO      = "\u006A\u00EE\u00D6";
VikaasWebFont.combo_YPOLLU_1 = "\u006A\u0059\u0054";
//VikaasWebFont.combo_YPOLLU_2 = "\u";
VikaasWebFont.combo_RI       = "\u005D";
VikaasWebFont.combo_RII      = "\u00AF";
VikaasWebFont.combo_LI       = "\u002A";
VikaasWebFont.combo_LII      = "\u00A9";
VikaasWebFont.combo_VI       = "\u0024";
VikaasWebFont.combo_VII      = "\u004D";
VikaasWebFont.combo_SHI      = "\u00A5";
VikaasWebFont.combo_SHII     = "\u006F";
VikaasWebFont.combo_LLI      = "\u005B";
VikaasWebFont.combo_LLII     = "\u00B0";

VikaasWebFont.combo_SHRII    = "\u006C";
VikaasWebFont.combo_HOO      = "\u00AC";

//Vattulu
VikaasWebFont.vattu_KA       = "\u00D8";
VikaasWebFont.vattu_KHA      = "\u0089";
VikaasWebFont.vattu_GA       = "\u005A";
VikaasWebFont.vattu_GHA      = "\u00E9";

VikaasWebFont.vattu_CA       = "\u00CC";
VikaasWebFont.vattu_CHA      = "\u00CC\u00DB";
VikaasWebFont.vattu_JA       = "\u00A8";
//VikaasWebFont.vattu_JHA      = "\u";
VikaasWebFont.vattu_NYA      = "\u00E3";

VikaasWebFont.vattu_TTA      = "\u00BC";
VikaasWebFont.vattu_TTHA     = "\u00F7";
VikaasWebFont.vattu_DDA      = "\u00A6";
VikaasWebFont.vattu_NNA_1    = "\u0092";
VikaasWebFont.vattu_NNA_2    = "\u2019";

VikaasWebFont.vattu_TA_1     = "\u00EF";
//VikaasWebFont.vattu_TA_2     = "\u";
VikaasWebFont.vattu_THA_1    = "\u009C";
VikaasWebFont.vattu_THA_2    = "\u0153";
VikaasWebFont.vattu_DA       = "\u00DD";
VikaasWebFont.vattu_DHA      = "\u00C6";
VikaasWebFont.vattu_NA_1     = "\u0095";
VikaasWebFont.vattu_NA_2     = "\u2022";

VikaasWebFont.vattu_PA       = "\u00CE";
VikaasWebFont.vattu_PHA      = "\u00CE\u00DB";
VikaasWebFont.vattu_BA       = "\u00D2";
VikaasWebFont.vattu_BHA      = "\u00D2\u00DB";
VikaasWebFont.vattu_MA_1     = "\u0088";
VikaasWebFont.vattu_MA_2     = "\u02C6";

VikaasWebFont.vattu_YA       = "\u00AB";
VikaasWebFont.vattu_RA_1     = "\u0081";
VikaasWebFont.vattu_RA_2     = "\u00E7";
VikaasWebFont.vattu_LA       = "\u00A2";
VikaasWebFont.vattu_VA       = "\u00C7";
VikaasWebFont.vattu_SHA      = "\u00F4";
VikaasWebFont.vattu_SSA_1    = "\u008C";
VikaasWebFont.vattu_SSA_2    = "\u00EB";
VikaasWebFont.vattu_SSA_3    = "\u00FC";
VikaasWebFont.vattu_SSA_4    = "\u0152";
VikaasWebFont.vattu_SA       = "\u00E0";
VikaasWebFont.vattu_HA       = "\u00BD";
VikaasWebFont.vattu_LLA      = "\u00DF";
VikaasWebFont.vattu_RRA      = "\u00C0";

//Conjuncts
//VikaasWebFont.vattu_TRA      = "\u";
//VikaasWebFont.vattu_TTRA     = "\u";
VikaasWebFont.vattu_PPU      = "\u00F0";

//Matches ASCII
VikaasWebFont.EXCLAM         = "\u0021";
VikaasWebFont.PARENLEFT      = "\u0028";
VikaasWebFont.PARENRIGT      = "\u0029";
VikaasWebFont.COMMA          = "\u002C";
VikaasWebFont.HYPHEN_1       = "\u002D";   //I don't know what the significance is, shows up as '-' on Linux, not displayed on Windows in Firefox
VikaasWebFont.PERIOD         = "\u002E";
VikaasWebFont.SLASH          = "\u002F";
VikaasWebFont.COLON          = "\u003A";
VikaasWebFont.QUESTION       = "\u003F";

VikaasWebFont.digit_ZERO     = "\u0030";
VikaasWebFont.digit_ONE      = "\u0031";
VikaasWebFont.digit_TWO      = "\u0032";
VikaasWebFont.digit_THREE    = "\u0033";
VikaasWebFont.digit_FOUR     = "\u0034";
VikaasWebFont.digit_FIVE     = "\u0035";
VikaasWebFont.digit_SIX      = "\u0036";
VikaasWebFont.digit_SEVEN    = "\u0037";
VikaasWebFont.digit_EIGHT    = "\u0038";
VikaasWebFont.digit_NINE     = "\u0039";

//Does not match ASCII
VikaasWebFont.PLUS           = "\u0047";
VikaasWebFont.MULTIPLY       = "\u0049";
VikaasWebFont.EQUALS         = "\u0052";
VikaasWebFont.HYPHEN_2       = "\u0060";
VikaasWebFont.DIVIDE         = "\u00AA";
VikaasWebFont.AMPERSAND      = "\u00CA";
VikaasWebFont.SEMICOLON      = "\u00D1";
VikaasWebFont.PIPE           = "\u00F6";
VikaasWebFont.PERCENT        = "\u0025";
VikaasWebFont.LQTSINGLE      = "\u00BB";
VikaasWebFont.RQTSINGLE      = "\u00B5";

//Kommu
VikaasWebFont.misc_TICK_1    = "\u0083";
VikaasWebFont.misc_TICK_2    = "\u0084";
VikaasWebFont.misc_TICK_3    = "\u008A";
VikaasWebFont.misc_TICK_4    = "\u009F";
VikaasWebFont.misc_TICK_5    = "\u00A3";
VikaasWebFont.misc_TICK_6    = "\u00B7";
VikaasWebFont.misc_TICK_7    = "\u00C1";
VikaasWebFont.misc_TICK_8    = "\u00E1";
VikaasWebFont.misc_TICK_9    = "\u00F8";
VikaasWebFont.misc_TICK_10   = "\u0160";
VikaasWebFont.misc_TICK_11   = "\u0192";
VikaasWebFont.misc_TICK_12   = "\u0178";
VikaasWebFont.misc_TICK_13   = "\u201E";


VikaasWebFont.toPadma = new Object();

VikaasWebFont.toPadma[VikaasWebFont.candrabindu] = Padma.candrabindu;
VikaasWebFont.toPadma[VikaasWebFont.visarga]  = Padma.visarga;
VikaasWebFont.toPadma[VikaasWebFont.virama_1] = Padma.syllbreak;
VikaasWebFont.toPadma[VikaasWebFont.virama_2] = Padma.syllbreak;
VikaasWebFont.toPadma[VikaasWebFont.virama_3] = Padma.syllbreak;
VikaasWebFont.toPadma[VikaasWebFont.virama_4] = Padma.syllbreak;
VikaasWebFont.toPadma[VikaasWebFont.virama_5] = Padma.syllbreak;
VikaasWebFont.toPadma[VikaasWebFont.virama_6] = Padma.syllbreak;
VikaasWebFont.toPadma[VikaasWebFont.virama_7] = Padma.syllbreak;
VikaasWebFont.toPadma[VikaasWebFont.anusvara] = Padma.anusvara;

VikaasWebFont.toPadma[VikaasWebFont.vowel_A] = Padma.vowel_A;
VikaasWebFont.toPadma[VikaasWebFont.vowel_AA_1] = Padma.vowel_AA;
VikaasWebFont.toPadma[VikaasWebFont.vowel_AA_2] = Padma.vowel_AA;
VikaasWebFont.toPadma[VikaasWebFont.vowel_I_1] = Padma.vowel_I;
VikaasWebFont.toPadma[VikaasWebFont.vowel_I_2] = Padma.vowel_I;
VikaasWebFont.toPadma[VikaasWebFont.vowel_II_1] = Padma.vowel_II;
VikaasWebFont.toPadma[VikaasWebFont.vowel_II_2] = Padma.vowel_II;
VikaasWebFont.toPadma[VikaasWebFont.vowel_U_1] = Padma.vowel_U;
VikaasWebFont.toPadma[VikaasWebFont.vowel_U_2] = Padma.vowel_U;
VikaasWebFont.toPadma[VikaasWebFont.vowel_UU] = Padma.vowel_UU;
VikaasWebFont.toPadma[VikaasWebFont.vowel_R_1] = Padma.vowel_R;
VikaasWebFont.toPadma[VikaasWebFont.vowel_R_2] = Padma.vowel_R;
VikaasWebFont.toPadma[VikaasWebFont.vowel_RR_1] = Padma.vowel_RR;
VikaasWebFont.toPadma[VikaasWebFont.vowel_RR_2] = Padma.vowel_RR;
VikaasWebFont.toPadma[VikaasWebFont.vowel_E] = Padma.vowel_E;
VikaasWebFont.toPadma[VikaasWebFont.vowel_EE] = Padma.vowel_EE;
VikaasWebFont.toPadma[VikaasWebFont.vowel_AI] = Padma.vowel_AI;
VikaasWebFont.toPadma[VikaasWebFont.vowel_O] = Padma.vowel_O;
VikaasWebFont.toPadma[VikaasWebFont.vowel_OO] = Padma.vowel_OO;
VikaasWebFont.toPadma[VikaasWebFont.vowel_AU] = Padma.vowel_AU;

VikaasWebFont.toPadma[VikaasWebFont.consnt_KA_1] = Padma.consnt_KA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_KA_2] = Padma.consnt_KA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_KHA_1] = Padma.consnt_KHA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_KHA_2] = Padma.consnt_KHA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_GA] = Padma.consnt_GA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_GHA_1] = Padma.consnt_GHA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_GHA_2] = Padma.consnt_GHA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_NGA] = Padma.consnt_NGA;

VikaasWebFont.toPadma[VikaasWebFont.consnt_CA] = Padma.consnt_CA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_CHA_1] = Padma.consnt_CHA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_CHA_2] = Padma.consnt_CHA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_JA_1] = Padma.consnt_JA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_JA_2] = Padma.consnt_JA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_JHA] = Padma.consnt_JHA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_NYA] = Padma.consnt_NYA;

VikaasWebFont.toPadma[VikaasWebFont.consnt_TTA_1] = Padma.consnt_TTA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_TTA_2] = Padma.consnt_TTA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_TTA_3] = Padma.consnt_TTA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_TTHA] = Padma.consnt_TTHA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_DDA] = Padma.consnt_DDA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_DDHA] = Padma.consnt_DDHA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_NNA] = Padma.consnt_NNA;

VikaasWebFont.toPadma[VikaasWebFont.consnt_TA] = Padma.consnt_TA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_THA_1] = Padma.consnt_THA;
//VikaasWebFont.toPadma[VikaasWebFont.consnt_THA_2] = Padma.consnt_THA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_DA] = Padma.consnt_DA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_DHA] = Padma.consnt_DHA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_NA_1] = Padma.consnt_NA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_NA_2] = Padma.consnt_NA;

VikaasWebFont.toPadma[VikaasWebFont.consnt_PA_1] = Padma.consnt_PA;
//VikaasWebFont.toPadma[VikaasWebFont.consnt_PA_2] = Padma.consnt_PA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_PA_3] = Padma.consnt_PA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_PHA_1]  = Padma.consnt_PHA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_PHA_2]  = Padma.consnt_PHA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_PHA_3]  = Padma.consnt_PHA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_PHA_4]  = Padma.consnt_PHA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_BA_1] = Padma.consnt_BA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_BA_2] = Padma.consnt_BA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_BA_3] = Padma.consnt_BA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_BHA]  = Padma.consnt_BHA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_MA] = Padma.consnt_MA;

VikaasWebFont.toPadma[VikaasWebFont.consnt_YA_1] = Padma.consnt_YA;
//VikaasWebFont.toPadma[VikaasWebFont.consnt_YA_2] = Padma.consnt_YA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_RA] = Padma.consnt_RA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_LA_1] = Padma.consnt_LA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_LA_2] = Padma.consnt_LA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_VA_1] = Padma.consnt_VA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_VA_2] = Padma.consnt_VA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_SHA] = Padma.consnt_SHA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_SSA_1] = Padma.consnt_SSA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_SSA_2] = Padma.consnt_SSA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_SA_1] = Padma.consnt_SA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_SA_2] = Padma.consnt_SA;

VikaasWebFont.toPadma[VikaasWebFont.consnt_HA_1] = Padma.consnt_HA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_LLA] = Padma.consnt_LLA;
VikaasWebFont.toPadma[VikaasWebFont.consnt_RRA] = Padma.consnt_RRA;
//VikaasWebFont.toPadma[VikaasWebFont.conjct_KSHA] = Padma.consnt_KA + Padma.vattu_SSA;

VikaasWebFont.toPadma[VikaasWebFont.conjct_STR]   = Padma.consnt_SA + Padma.vattu_TA + Padma.vattu_RA;
VikaasWebFont.toPadma[VikaasWebFont.conjct_SSTTR] = Padma.consnt_SSA + Padma.vattu_TTA + Padma.vattu_RA;


//Gunintamulu
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_AA_1]  = Padma.vowelsn_AA;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_AA_2]  = Padma.vowelsn_AA;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_AA_3]  = Padma.vowelsn_AA;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_AA_4]  = Padma.vowelsn_AA;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_AA_5]  = Padma.vowelsn_AA;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_AA_6]  = Padma.vowelsn_AA;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_AA_7]  = Padma.vowelsn_AA;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_AA_8]  = Padma.vowelsn_AA;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_AA_9]  = Padma.vowelsn_AA;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_AA_10] = Padma.vowelsn_AA;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_AA_11] = Padma.vowelsn_AA;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_I_1]   = Padma.vowelsn_I;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_I_2]   = Padma.vowelsn_I;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_I_3]   = Padma.vowelsn_I;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_II_1]  = Padma.vowelsn_II;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_II_2]  = Padma.vowelsn_II;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_II_3]  = Padma.vowelsn_II;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_II_4]  = Padma.vowelsn_II;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_U_1]   = Padma.vowelsn_U;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_U_2]   = Padma.vowelsn_U;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_U_3]   = Padma.vowelsn_U;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_U_4]   = Padma.vowelsn_U;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_U_5]   = Padma.vowelsn_U;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_U_6]   = Padma.vowelsn_U;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_U_7]   = Padma.vowelsn_U;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_U_8]   = Padma.vowelsn_U;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_UU_1]  = Padma.vowelsn_UU;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_UU_2]  = Padma.vowelsn_UU;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_UU_3]  = Padma.vowelsn_UU;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_UU_4]  = Padma.vowelsn_UU;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_UU_5]  = Padma.vowelsn_UU;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_R_1]   = Padma.vowelsn_R;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_R_2]   = Padma.vowelsn_R;
//VikaasWebFont.toPadma[VikaasWebFont.vowelsn_RR]    = Padma.vowelsn_RR;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_E_1]   = Padma.vowelsn_E;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_E_2]   = Padma.vowelsn_E;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_E_3]   = Padma.vowelsn_E;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_E_4]   = Padma.vowelsn_E;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_E_5]   = Padma.vowelsn_E;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_E_6]   = Padma.vowelsn_E;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_EE_1]  = Padma.vowelsn_EE;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_EE_2]  = Padma.vowelsn_EE;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_EE_3]  = Padma.vowelsn_EE;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_EE_4]  = Padma.vowelsn_EE;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_EE_5]  = Padma.vowelsn_EE;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_O_1]   = Padma.vowelsn_O;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_O_2]   = Padma.vowelsn_O;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_O_3]   = Padma.vowelsn_O;
//VikaasWebFont.toPadma[VikaasWebFont.vowelsn_O_4]   = Padma.vowelsn_O;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_OO_1]  = Padma.vowelsn_OO;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_OO_2]  = Padma.vowelsn_OO;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_OO_3]  = Padma.vowelsn_OO;
//VikaasWebFont.toPadma[VikaasWebFont.vowelsn_OO_4]  = Padma.vowelsn_OO;
//VikaasWebFont.toPadma[VikaasWebFont.vowelsn_OO_5]  = Padma.vowelsn_OO;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_AU_1]  = Padma.vowelsn_AU;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_AU_2]  = Padma.vowelsn_AU;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_AU_3]  = Padma.vowelsn_AU;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_AU_4]  = Padma.vowelsn_AU;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_AU_5]  = Padma.vowelsn_AU;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_AU_6]  = Padma.vowelsn_AU;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_AU_7]  = Padma.vowelsn_AU;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_AILEN_1] = Padma.vowelsn_AILEN;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_AILEN_2] = Padma.vowelsn_AILEN;
VikaasWebFont.toPadma[VikaasWebFont.vowelsn_AILEN_3] = Padma.vowelsn_AILEN;

//Special Combinations
VikaasWebFont.toPadma[VikaasWebFont.combo_KHI]     = Padma.consnt_KHA + Padma.vowelsn_I;
VikaasWebFont.toPadma[VikaasWebFont.combo_KHII]    = Padma.consnt_KHA + Padma.vowelsn_II;
VikaasWebFont.toPadma[VikaasWebFont.combo_GI]      = Padma.consnt_GA + Padma.vowelsn_I;
VikaasWebFont.toPadma[VikaasWebFont.combo_GII]     = Padma.consnt_GA + Padma.vowelsn_II;
VikaasWebFont.toPadma[VikaasWebFont.combo_GHAA]  = Padma.consnt_GHA + Padma.vowelsn_AA;
//VikaasWebFont.toPadma[VikaasWebFont.combo_GHAA_2]  = Padma.consnt_GHA + Padma.vowelsn_AA;
VikaasWebFont.toPadma[VikaasWebFont.combo_GHI_1]   = Padma.consnt_GHA + Padma.vowelsn_I;
VikaasWebFont.toPadma[VikaasWebFont.combo_GHI_2]   = Padma.consnt_GHA + Padma.vowelsn_I;
VikaasWebFont.toPadma[VikaasWebFont.combo_GHII]    = Padma.consnt_GHA + Padma.vowelsn_II;
//VikaasWebFont.toPadma[VikaasWebFont.combo_GHU]     = Padma.consnt_GHA + Padma.vowelsn_U;
//VikaasWebFont.toPadma[VikaasWebFont.combo_GHUU]    = Padma.consnt_GHA + Padma.vowelsn_UU;
//VikaasWebFont.toPadma[VikaasWebFont.combo_GHPOLLU] = Padma.consnt_GHA + Padma.syllbreak;

VikaasWebFont.toPadma[VikaasWebFont.combo_CI]      = Padma.consnt_CA + Padma.vowelsn_I;
VikaasWebFont.toPadma[VikaasWebFont.combo_CII]     = Padma.consnt_CA + Padma.vowelsn_II;
VikaasWebFont.toPadma[VikaasWebFont.combo_CHI]     = Padma.consnt_CHA + Padma.vowelsn_I;
VikaasWebFont.toPadma[VikaasWebFont.combo_CHII]    = Padma.consnt_CHA + Padma.vowelsn_II;
VikaasWebFont.toPadma[VikaasWebFont.combo_JI_1]    = Padma.consnt_JA + Padma.vowelsn_I;
VikaasWebFont.toPadma[VikaasWebFont.combo_JI_2]    = Padma.consnt_JA + Padma.vowelsn_I;
VikaasWebFont.toPadma[VikaasWebFont.combo_JII]     = Padma.consnt_JA + Padma.vowelsn_II;
VikaasWebFont.toPadma[VikaasWebFont.combo_JU]      = Padma.consnt_JA + Padma.vowelsn_U;
VikaasWebFont.toPadma[VikaasWebFont.combo_JUU]     = Padma.consnt_JA + Padma.vowelsn_UU;
VikaasWebFont.toPadma[VikaasWebFont.combo_JHI]     = Padma.consnt_JHA + Padma.vowelsn_I;
VikaasWebFont.toPadma[VikaasWebFont.combo_JHII]    = Padma.consnt_JHA + Padma.vowelsn_II;
//VikaasWebFont.toPadma[VikaasWebFont.combo_JHPOLLU] = Padma.consnt_JHA + Padma.syllbreak;

//VikaasWebFont.toPadma[VikaasWebFont.combo_TTHI]    = Padma.consnt_TTHA + Padma.vowelsn_I;
//VikaasWebFont.toPadma[VikaasWebFont.combo_TTHII]   = Padma.consnt_TTHA + Padma.vowelsn_II;

VikaasWebFont.toPadma[VikaasWebFont.combo_TI]      = Padma.consnt_TA + Padma.vowelsn_I;
VikaasWebFont.toPadma[VikaasWebFont.combo_TII]     = Padma.consnt_TA + Padma.vowelsn_II;
//VikaasWebFont.toPadma[VikaasWebFont.combo_THI]     = Padma.consnt_THA + Padma.vowelsn_I;
//VikaasWebFont.toPadma[VikaasWebFont.combo_THII]    = Padma.consnt_THA + Padma.vowelsn_II;
VikaasWebFont.toPadma[VikaasWebFont.combo_DI]      = Padma.consnt_DA + Padma.vowelsn_I;
VikaasWebFont.toPadma[VikaasWebFont.combo_DII]     = Padma.consnt_DA + Padma.vowelsn_II;
VikaasWebFont.toPadma[VikaasWebFont.combo_DHI]     = Padma.consnt_DHA + Padma.vowelsn_I;
VikaasWebFont.toPadma[VikaasWebFont.combo_DHII]    = Padma.consnt_DHA + Padma.vowelsn_II;
VikaasWebFont.toPadma[VikaasWebFont.combo_NI_1]    = Padma.consnt_NA + Padma.vowelsn_I;
VikaasWebFont.toPadma[VikaasWebFont.combo_NI_2]    = Padma.consnt_NA + Padma.vowelsn_I;
VikaasWebFont.toPadma[VikaasWebFont.combo_NII]     = Padma.consnt_NA + Padma.vowelsn_II;

VikaasWebFont.toPadma[VikaasWebFont.combo_BAA]     = Padma.consnt_BA + Padma.vowelsn_AA;
VikaasWebFont.toPadma[VikaasWebFont.combo_BOO]     = Padma.consnt_BA + Padma.vowelsn_OO;
VikaasWebFont.toPadma[VikaasWebFont.combo_BI]      = Padma.consnt_BA + Padma.vowelsn_I;
VikaasWebFont.toPadma[VikaasWebFont.combo_BII]     = Padma.consnt_BA + Padma.vowelsn_II;
VikaasWebFont.toPadma[VikaasWebFont.combo_BHI]     = Padma.consnt_BHA + Padma.vowelsn_I;
VikaasWebFont.toPadma[VikaasWebFont.combo_BHII]    = Padma.consnt_BHA + Padma.vowelsn_II;
VikaasWebFont.toPadma[VikaasWebFont.combo_MAA]     = Padma.consnt_MA + Padma.vowelsn_AA;
VikaasWebFont.toPadma[VikaasWebFont.combo_MI]      = Padma.consnt_MA + Padma.vowelsn_I;
VikaasWebFont.toPadma[VikaasWebFont.combo_MII_1]   = Padma.consnt_MA + Padma.vowelsn_II;
VikaasWebFont.toPadma[VikaasWebFont.combo_MII_2]   = Padma.consnt_MA + Padma.vowelsn_II;
//VikaasWebFont.toPadma[VikaasWebFont.combo_MU]      = Padma.consnt_MA + Padma.vowelsn_U;
//VikaasWebFont.toPadma[VikaasWebFont.combo_MUU]     = Padma.consnt_MA + Padma.vowelsn_UU;
VikaasWebFont.toPadma[VikaasWebFont.combo_VE]      = Padma.consnt_VA + Padma.vowelsn_E;
VikaasWebFont.toPadma[VikaasWebFont.combo_VEE]     = Padma.consnt_VA + Padma.vowelsn_EE;
VikaasWebFont.toPadma[VikaasWebFont.combo_ME_1]    = Padma.consnt_MA + Padma.vowelsn_E;
//VikaasWebFont.toPadma[VikaasWebFont.combo_ME_2]    = Padma.consnt_MA + Padma.vowelsn_E;
VikaasWebFont.toPadma[VikaasWebFont.combo_MEE]     = Padma.consnt_MA + Padma.vowelsn_EE;
//VikaasWebFont.toPadma[VikaasWebFont.combo_MAI]     = Padma.consnt_MA + Padma.vowelsn_AI;
//VikaasWebFont.toPadma[VikaasWebFont.combo_MO]      = Padma.consnt_MA + Padma.vowelsn_O;
VikaasWebFont.toPadma[VikaasWebFont.combo_MOO]     = Padma.consnt_MA + Padma.vowelsn_OO;
VikaasWebFont.toPadma[VikaasWebFont.combo_MPOLLU]  = Padma.consnt_MA + Padma.syllbreak;

VikaasWebFont.toPadma[VikaasWebFont.combo_YAA]     = Padma.consnt_YA + Padma.vowelsn_AA;
VikaasWebFont.toPadma[VikaasWebFont.combo_YI]      = Padma.consnt_YA + Padma.vowelsn_I;
VikaasWebFont.toPadma[VikaasWebFont.combo_YII_1]   = Padma.consnt_YA + Padma.vowelsn_II;
VikaasWebFont.toPadma[VikaasWebFont.combo_YII_2]   = Padma.consnt_YA + Padma.vowelsn_II;
VikaasWebFont.toPadma[VikaasWebFont.combo_YE]      = Padma.consnt_YA + Padma.vowelsn_E;
VikaasWebFont.toPadma[VikaasWebFont.combo_YEE]     = Padma.consnt_YA + Padma.vowelsn_EE;
VikaasWebFont.toPadma[VikaasWebFont.combo_YAI]     = Padma.consnt_YA + Padma.vowelsn_AI;
//VikaasWebFont.toPadma[VikaasWebFont.combo_YO]      = Padma.consnt_YA + Padma.vowelsn_O;
VikaasWebFont.toPadma[VikaasWebFont.combo_YOO]     = Padma.consnt_YA + Padma.vowelsn_OO;
VikaasWebFont.toPadma[VikaasWebFont.combo_YPOLLU_1]= Padma.consnt_YA + Padma.syllbreak;
//VikaasWebFont.toPadma[VikaasWebFont.combo_YPOLLU_2]= Padma.consnt_YA + Padma.syllbreak;
VikaasWebFont.toPadma[VikaasWebFont.combo_RI]      = Padma.consnt_RA + Padma.vowelsn_I;
VikaasWebFont.toPadma[VikaasWebFont.combo_RII]     = Padma.consnt_RA + Padma.vowelsn_II;
VikaasWebFont.toPadma[VikaasWebFont.combo_LI]      = Padma.consnt_LA + Padma.vowelsn_I;
VikaasWebFont.toPadma[VikaasWebFont.combo_LII]     = Padma.consnt_LA + Padma.vowelsn_II;
VikaasWebFont.toPadma[VikaasWebFont.combo_VI]      = Padma.consnt_VA + Padma.vowelsn_I;
VikaasWebFont.toPadma[VikaasWebFont.combo_VII]     = Padma.consnt_VA + Padma.vowelsn_II;
VikaasWebFont.toPadma[VikaasWebFont.combo_SHI]     = Padma.consnt_SHA + Padma.vowelsn_I;
VikaasWebFont.toPadma[VikaasWebFont.combo_SHII]    = Padma.consnt_SHA + Padma.vowelsn_II;
VikaasWebFont.toPadma[VikaasWebFont.combo_LLI]     = Padma.consnt_LLA + Padma.vowelsn_I;
VikaasWebFont.toPadma[VikaasWebFont.combo_LLII]    = Padma.consnt_LLA + Padma.vowelsn_II;

VikaasWebFont.toPadma[VikaasWebFont.combo_SHRII]   = Padma.consnt_SHA + Padma.vattu_RA + Padma.vowelsn_II;
VikaasWebFont.toPadma[VikaasWebFont.combo_HOO]     = Padma.consnt_HA + Padma.vowelsn_OO;

//Vattulu
VikaasWebFont.toPadma[VikaasWebFont.vattu_KA]      = Padma.vattu_KA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_KHA]     = Padma.vattu_KHA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_GA]      = Padma.vattu_GA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_GHA]     = Padma.vattu_GHA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_CA]      = Padma.vattu_CA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_CHA]     = Padma.vattu_CHA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_JA]      = Padma.vattu_JA;
//VikaasWebFont.toPadma[VikaasWebFont.vattu_JHA]     = Padma.vattu_JHA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_NYA]     = Padma.vattu_NYA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_TTA]     = Padma.vattu_TTA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_TTHA]    = Padma.vattu_TTHA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_DDA]     = Padma.vattu_DDA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_NNA_1]   = Padma.vattu_NNA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_NNA_2]   = Padma.vattu_NNA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_TA_1]    = Padma.vattu_TA;
//VikaasWebFont.toPadma[VikaasWebFont.vattu_TA_2]    = Padma.vattu_TA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_THA_1]   = Padma.vattu_THA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_THA_2]   = Padma.vattu_THA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_DA]      = Padma.vattu_DA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_DHA]     = Padma.vattu_DHA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_NA_1]    = Padma.vattu_NA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_NA_2]    = Padma.vattu_NA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_PA]      = Padma.vattu_PA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_PHA]     = Padma.vattu_PHA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_BA]      = Padma.vattu_BA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_BHA]     = Padma.vattu_BHA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_MA_1]    = Padma.vattu_MA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_MA_2]    = Padma.vattu_MA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_YA]      = Padma.vattu_YA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_RA_1]    = Padma.vattu_RA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_RA_2]    = Padma.vattu_RA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_LA]      = Padma.vattu_LA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_VA]      = Padma.vattu_VA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_SHA]     = Padma.vattu_SHA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_SSA_1]   = Padma.vattu_SSA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_SSA_2]   = Padma.vattu_SSA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_SSA_3]   = Padma.vattu_SSA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_SSA_4]   = Padma.vattu_SSA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_SA]      = Padma.vattu_SA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_HA]      = Padma.vattu_HA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_LLA]     = Padma.vattu_LLA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_RRA]     = Padma.vattu_RRA;

//Conjuncts
//VikaasWebFont.toPadma[VikaasWebFont.vattu_TRA]     = Padma.vattu_TA + Padma.vattu_RA;
//VikaasWebFont.toPadma[VikaasWebFont.vattu_TTRA]    = Padma.vattu_TTA + Padma.vattu_RA;
VikaasWebFont.toPadma[VikaasWebFont.vattu_PPU]     = Padma.vattu_PA + Padma.vowelsn_U;

//Miscellaneous(where it doesn't match ASCII representation)
VikaasWebFont.toPadma[VikaasWebFont.PLUS]           = "+";
VikaasWebFont.toPadma[VikaasWebFont.MULTIPLY]       = "X";
VikaasWebFont.toPadma[VikaasWebFont.EQUALS]         = "=";
VikaasWebFont.toPadma[VikaasWebFont.HYPHEN_2]       = "-";
VikaasWebFont.toPadma[VikaasWebFont.DIVIDE]         = "/";
VikaasWebFont.toPadma[VikaasWebFont.AMPERSAND]      = "&";
VikaasWebFont.toPadma[VikaasWebFont.SEMICOLON]      = ";";
VikaasWebFont.toPadma[VikaasWebFont.PIPE]           = "|";
VikaasWebFont.toPadma[VikaasWebFont.PERCENT]        = "%";
VikaasWebFont.toPadma[VikaasWebFont.LQTSINGLE]      = "\u2018";
VikaasWebFont.toPadma[VikaasWebFont.RQTSINGLE]      = "\u2019";

VikaasWebFont.redundantList = new Object();
VikaasWebFont.redundantList[VikaasWebFont.misc_TICK_1] = true;
VikaasWebFont.redundantList[VikaasWebFont.misc_TICK_2] = true;
VikaasWebFont.redundantList[VikaasWebFont.misc_TICK_3] = true;
VikaasWebFont.redundantList[VikaasWebFont.misc_TICK_4] = true;
VikaasWebFont.redundantList[VikaasWebFont.misc_TICK_5] = true;
VikaasWebFont.redundantList[VikaasWebFont.misc_TICK_6] = true;
VikaasWebFont.redundantList[VikaasWebFont.misc_TICK_7] = true;
VikaasWebFont.redundantList[VikaasWebFont.misc_TICK_8] = true;
VikaasWebFont.redundantList[VikaasWebFont.misc_TICK_9] = true;
VikaasWebFont.redundantList[VikaasWebFont.misc_TICK_10]= true;
VikaasWebFont.redundantList[VikaasWebFont.misc_TICK_11]= true;
VikaasWebFont.redundantList[VikaasWebFont.misc_TICK_12]= true;
VikaasWebFont.redundantList[VikaasWebFont.misc_TICK_13]= true;

VikaasWebFont.prefixList = new Object();
VikaasWebFont.prefixList[VikaasWebFont.vattu_RA_1]   = true;
VikaasWebFont.prefixList[VikaasWebFont.vattu_RA_2]   = true;
VikaasWebFont.prefixList[VikaasWebFont.vowelsn_E_1]  = true;
VikaasWebFont.prefixList[VikaasWebFont.vowelsn_E_2]  = true;
//VikaasWebFont.prefixList[VikaasWebFont.vowelsn_E_4]  = true;//shouldn't
VikaasWebFont.prefixList[VikaasWebFont.vowelsn_E_6]  = true;
VikaasWebFont.prefixList[VikaasWebFont.vowelsn_EE_1] = true;
VikaasWebFont.prefixList[VikaasWebFont.vowelsn_EE_2] = true;
//VikaasWebFont.prefixList[VikaasWebFont.vowelsn_EE_3] = true;//shouldn't
//VikaasWebFont.prefixList[VikaasWebFont.vowelsn_EE_5] = true;//shouldn't

VikaasWebFont.overloadList = new Object();
VikaasWebFont.overloadList[VikaasWebFont.consnt_KA_2]   = true;
VikaasWebFont.overloadList[VikaasWebFont.consnt_CA]     = true;
VikaasWebFont.overloadList[VikaasWebFont.consnt_DDA]    = true;
VikaasWebFont.overloadList[VikaasWebFont.consnt_DA]     = true;
VikaasWebFont.overloadList[VikaasWebFont.consnt_PA_1]   = true;
//VikaasWebFont.overloadList[VikaasWebFont.consnt_PA_2]   = true;
VikaasWebFont.overloadList[VikaasWebFont.consnt_PA_3]   = true;
VikaasWebFont.overloadList[VikaasWebFont.consnt_PHA_1]  = true;
VikaasWebFont.overloadList[VikaasWebFont.consnt_BA_1]   = true;
VikaasWebFont.overloadList[VikaasWebFont.consnt_BA_2]   = true;
VikaasWebFont.overloadList[VikaasWebFont.consnt_BA_3]   = true;
VikaasWebFont.overloadList[VikaasWebFont.consnt_YA_1]   = true;
VikaasWebFont.overloadList[VikaasWebFont.consnt_RA]     = true;
VikaasWebFont.overloadList[VikaasWebFont.consnt_VA_1]   = true;
VikaasWebFont.overloadList[VikaasWebFont.consnt_VA_2]   = true;
VikaasWebFont.overloadList[VikaasWebFont.vowelsn_R_1]   = true;
VikaasWebFont.overloadList[VikaasWebFont.vowelsn_R_2]   = true;
VikaasWebFont.overloadList[VikaasWebFont.vowelsn_E_1]   = true;
VikaasWebFont.overloadList[VikaasWebFont.vowelsn_EE_1]  = true;
VikaasWebFont.overloadList[VikaasWebFont.combo_CI]      = true;
VikaasWebFont.overloadList[VikaasWebFont.combo_CII]     = true;
VikaasWebFont.overloadList[VikaasWebFont.combo_DI]      = true;
VikaasWebFont.overloadList[VikaasWebFont.combo_DII]     = true;
VikaasWebFont.overloadList[VikaasWebFont.combo_BI]      = true;
VikaasWebFont.overloadList[VikaasWebFont.combo_BII]     = true;
VikaasWebFont.overloadList[VikaasWebFont.combo_YI]      = true;
VikaasWebFont.overloadList[VikaasWebFont.combo_VI]      = true;
VikaasWebFont.overloadList[VikaasWebFont.combo_VII]     = true;
VikaasWebFont.overloadList[VikaasWebFont.combo_VE]      = true;
VikaasWebFont.overloadList[VikaasWebFont.combo_VEE]      = true;
VikaasWebFont.overloadList[VikaasWebFont.combo_RI]      = true;
VikaasWebFont.overloadList[VikaasWebFont.combo_RII]     = true;
VikaasWebFont.overloadList[VikaasWebFont.vattu_CA]      = true;
VikaasWebFont.overloadList[VikaasWebFont.vattu_DA]      = true;
VikaasWebFont.overloadList[VikaasWebFont.vattu_PA]      = true;
VikaasWebFont.overloadList[VikaasWebFont.vattu_BA]      = true;
VikaasWebFont.overloadList["\u007C\u02DC"] = true;
VikaasWebFont.overloadList["\u007C\u02DC\u00BE"] = true;
VikaasWebFont.overloadList["\u007C\u0098"] = true;
VikaasWebFont.overloadList["\u006A"] = true;
VikaasWebFont.overloadList["\u006A\u00EE"] = true;
VikaasWebFont.overloadList["\u006A\u0059"] = true;
VikaasWebFont.overloadList["\u006A\u00FB"] = true;
VikaasWebFont.overloadList["\u2039\u0054"] = true;
VikaasWebFont.overloadList["\u008B\u0054"] = true;
VikaasWebFont.overloadList["\u0073\u0054"] = true;
VikaasWebFont.overloadList["\u007C\u0098\u00BE"] = true;
VikaasWebFont.overloadList["\u007C\u0098\u00D3"] = true;
VikaasWebFont.overloadList["\u006A\u00EE\u00AE"] = true;
VikaasWebFont.overloadList["\u0079\u017D"] = true;

VikaasWebFont.isRedundant = function (str)
{
    return VikaasWebFont.redundantList[str] != null;
}


function PriyaankaBoldWebFont()
{
}

//The interface every dynamic font encoding should implement
PriyaankaBoldWebFont.maxLookupLen = VikaasWebFont.maxLookupLen;
PriyaankaBoldWebFont.fontFace     = "PriyaankaBoldWebFont";
PriyaankaBoldWebFont.displayName  = "PriyaankaBoldWebFont";
PriyaankaBoldWebFont.script       = Padma.script_TELUGU;

PriyaankaBoldWebFont.lookup = function (str)
{
    return VikaasWebFont.lookup(str);
}

PriyaankaBoldWebFont.isPrefixSymbol = function (str)
{
    return VikaasWebFont.isPrefixSymbol(str);
}

PriyaankaBoldWebFont.isOverloaded = function (str)
{
    return VikaasWebFont.isOverloaded(str);
}

PriyaankaBoldWebFont.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return VikaasWebFont.handleTwoPartVowelSigns(sign1, sign2);
}

PriyaankaBoldWebFont.isRedundant = function (str)
{
    return VikaasWebFont.isRedundant(str);
}

function PallaviBoldWebFont()
{
}

//The interface every dynamic font encoding should implement
PallaviBoldWebFont.maxLookupLen = VikaasWebFont.maxLookupLen;
PallaviBoldWebFont.fontFace     = "PallaviBoldWebFont";
PallaviBoldWebFont.displayName  = "PallaviBoldWebFont";
PallaviBoldWebFont.script       = Padma.script_TELUGU;

PallaviBoldWebFont.lookup = function (str)
{
    return VikaasWebFont.lookup(str);
}

PallaviBoldWebFont.isPrefixSymbol = function (str)
{
    return VikaasWebFont.isPrefixSymbol(str);
}

PallaviBoldWebFont.isOverloaded = function (str)
{
    return VikaasWebFont.isOverloaded(str);
}

PallaviBoldWebFont.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return VikaasWebFont.handleTwoPartVowelSigns(sign1, sign2);
}

PallaviBoldWebFont.isRedundant = function (str)
{
    return VikaasWebFont.isRedundant(str);
}

