// $Id: Hemalatha.js,v 1.11 2005/12/09 15:06:47 vnagarjuna Exp $ -->

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

//HEMALATHA Telugu

function Hemalatha()
{
}

//The interface every dynamic font encoding should implement
Hemalatha.maxLookupLen = 4;
Hemalatha.fontFace     = "TLW-TTHemalatha";
Hemalatha.displayName  = "Hemalatha";
Hemalatha.script       = Padma.script_TELUGU;

Hemalatha.lookup = function (str) 
{
    return Hemalatha.toPadma[str];
}

Hemalatha.isPrefixSymbol = function (str)
{
    return Hemalatha.prefixList[str] != null;
}

Hemalatha.isOverloaded = function (str)
{
    return Hemalatha.overloadList[str] != null;
}

Hemalatha.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if (sign2 == Padma.vowelsn_E) {
        if (sign1 == Padma.vowelsn_AILEN)
            return Padma.vowelsn_AI;
        if (sign1 == Padma.vowelsn_EELEN)
            return Padma.vowelsn_EE;
        if (sign1 == Padma.vowelsn_AA)
            return Padma.vowelsn_OO;
        if (sign1 == Padma.vowelsn_U)
            return Padma.vowelsn_O;
    }
    return sign1 + sign2;
}

//Baby steps
//1. Remove redundant symbols
//2. Insert some talakattus (that we have just removed) that will help with ra Gunintam (anusvara and ra are overloaded)
Hemalatha.preprocessMessage = function (input)
{
    var output = "", last = null;
    //1.
    for(var i = 0; i < input.length; ++i) {
        var cur = input.charAt(i);
        if (!Hemalatha.isRedundant(cur, last))
            output += last = cur;
    }

    //2.
    return Hemalatha.insertTalakattuForRaGunintam(output);
}

//Implementation details start here

//Specials
Hemalatha.candrabindu    = "\u2020";
Hemalatha.avagraha       = "\u3030";
Hemalatha.visarga        = "\u004D";
Hemalatha.anusvara       = "\u004C";
Hemalatha.virama_1       = "\u0060";
Hemalatha.virama_2       = "\u00A3";
Hemalatha.virama_3       = "\u00B1";
Hemalatha.virama_4       = "\u00BA";
Hemalatha.virama_5       = "\u00DE";

//Vowels
Hemalatha.vowel_A        = "\u0040";
Hemalatha.vowel_AA       = "\u0041";
Hemalatha.vowel_I        = "\u0042";
Hemalatha.vowel_II       = "\u0043";
Hemalatha.vowel_U        = "\u0044";
Hemalatha.vowel_UU       = "\u0045";
Hemalatha.vowel_R        = "\u2021\u0056\u0056";
Hemalatha.vowel_E        = "\u0046";
Hemalatha.vowel_EE       = "\u0047";
Hemalatha.vowel_AI       = "\u0048";
Hemalatha.vowel_O        = "\u0049";
Hemalatha.vowel_OO       = "\u004A";
Hemalatha.vowel_AU       = "\u004B";

//Consonants
Hemalatha.consnt_KA      = "\u004E";
Hemalatha.consnt_KHA_1   = "\u00C5";
Hemalatha.consnt_KHA_2   = "\u00C6";
Hemalatha.consnt_GA      = "\u0067";
Hemalatha.consnt_GHA     = "\u006D\u006E\u0056";
Hemalatha.consnt_NGA     = "\u00C3";

Hemalatha.consnt_CA      = "\u00BF";
Hemalatha.consnt_CHA     = "\u00BF\u00B3";
Hemalatha.consnt_JA      = "\u00C7";
Hemalatha.consnt_JHA     = "\u004C\u0052\u0026\u0056"; 
Hemalatha.consnt_NYA     = "\u00C4";

Hemalatha.consnt_TTA_1   = "\u00C8";
Hemalatha.consnt_TTA_2   = "\u00C9";
Hemalatha.consnt_TTHA    = "\u0068";
Hemalatha.consnt_DDA     = "\u00B2";
Hemalatha.consnt_DDHA    = "\u00B2\u00B3";         
Hemalatha.consnt_NNA     = "\u00DF";               

Hemalatha.consnt_TA      = "\u00BB";
Hemalatha.consnt_THA     = "\u00B4";
Hemalatha.consnt_DA      = "\u00B5";
Hemalatha.consnt_DHA     = "\u00B5\u00B3";
Hemalatha.consnt_NA      = "\u0192";

Hemalatha.consnt_PA      = "\u006D";
Hemalatha.consnt_PHA     = "\u006D\u006E";  
Hemalatha.consnt_BA_1    = "\u2021";
Hemalatha.consnt_BA_2    = "\u00CB";
Hemalatha.consnt_BHA     = "\u00CB\u00B3";
Hemalatha.consnt_MA      = "\u00AA\u0056";

Hemalatha.consnt_YA      = "\u00B8\u0056";
Hemalatha.consnt_RA      = "\u004C\u0052";
Hemalatha.consnt_LA_1    = "\u00CC";
Hemalatha.consnt_LA_2    = "\u00CD";         
Hemalatha.consnt_VA      = "\u00AA";
Hemalatha.consnt_SHA     = "\u0061";
Hemalatha.consnt_SSA_1   = "\u0074";
Hemalatha.consnt_SSA_2   = "\u0075";
Hemalatha.consnt_SA_1    = "\u0071";
Hemalatha.consnt_SA_2    = "\u0072";

Hemalatha.consnt_HA      = "\u00A4";
Hemalatha.consnt_LLA     = "\u00CE";
Hemalatha.conjct_KSHA    = "\u004F";
Hemalatha.consnt_RRA     = "\u00E0";  

//Gunintamulu
Hemalatha.vowelsn_AA_1   = "\u0053";
Hemalatha.vowelsn_AA_2   = "\u0079";
Hemalatha.vowelsn_AA_3   = "\u00D8";
Hemalatha.vowelsn_I_1    = "\u0054";
Hemalatha.vowelsn_I_2    = "\u006A";
Hemalatha.vowelsn_I_3    = "\u007A";
Hemalatha.vowelsn_I_4    = "\u00D3";
Hemalatha.vowelsn_II_1   = "\u0055";
Hemalatha.vowelsn_II_2   = "\u006B";
Hemalatha.vowelsn_II_3   = "\u007B";
Hemalatha.vowelsn_II_4   = "\u00D4";
Hemalatha.vowelsn_U_1    = "\u0056";
Hemalatha.vowelsn_U_2    = "\u006F";
Hemalatha.vowelsn_U_3    = "\u0076";
Hemalatha.vowelsn_U_4    = "\u00A7";
Hemalatha.vowelsn_U_5    = "\u00D9";
Hemalatha.vowelsn_UU_1   = "\u0057";
Hemalatha.vowelsn_UU_2   = "\u0070";
Hemalatha.vowelsn_UU_3   = "\u0077";
Hemalatha.vowelsn_UU_4   = "\u00A8";
Hemalatha.vowelsn_UU_5   = "\u00DA";
Hemalatha.vowelsn_R      = "\u0058";
Hemalatha.vowelsn_RR     = "\u0059";
Hemalatha.vowelsn_E_1    = "\u005A";
Hemalatha.vowelsn_E_2    = "\u006C";
Hemalatha.vowelsn_E_3    = "\u007C";
Hemalatha.vowelsn_E_4    = "\u00AE";
Hemalatha.vowelsn_E_5    = "\u00B9";
Hemalatha.vowelsn_E_6    = "\u00BE";
Hemalatha.vowelsn_E_7    = "\u00C2";
Hemalatha.vowelsn_E_8    = "\u00DB";
Hemalatha.vowelsn_E_9    = "\u00E1";
Hemalatha.vowelsn_EE_1   = "\u007D";
Hemalatha.vowelsn_EE_2   = "\u00E1\u005B";
Hemalatha.vowelsn_O_1    = "\u005D";
Hemalatha.vowelsn_O_2    = "\u007E";
Hemalatha.vowelsn_O_3    = "\u00AF";
Hemalatha.vowelsn_O_4    = "\u00DC";
Hemalatha.vowelsn_OO_1   = "\u005D\u005B";
Hemalatha.vowelsn_OO_2   = "\u00A1";
Hemalatha.vowelsn_OO_3   = "\u00AF\u005B";
Hemalatha.vowelsn_OO_4   = "\u00DC\u005B";
Hemalatha.vowelsn_AU_1   = "\u005F";
Hemalatha.vowelsn_AU_2   = "\u0066";
Hemalatha.vowelsn_AU_3   = "\u00A2";
Hemalatha.vowelsn_AU_4   = "\u00DD";

Hemalatha.vowelsn_EELEN    = "\u005B";
Hemalatha.vowelsn_AILEN_1  = "\u005C";
Hemalatha.vowelsn_AILEN_2  = "\u005E";

//Special Combinations
Hemalatha.combo_KHI      = "\u00D0";
Hemalatha.combo_KHII     = "\u00D0\u0064";
Hemalatha.combo_GHAA     = "\u006D\u006E\u0057";

Hemalatha.combo_CI       = "\u00C0";
Hemalatha.combo_CII      = "\u00C0\u0064";
Hemalatha.combo_CHI      = "\u00C0\u00B3";
Hemalatha.combo_CHII     = "\u00C0\u00B3\u0064";
Hemalatha.combo_JI       = "\u00D1";
Hemalatha.combo_JII      = "\u00D2";
Hemalatha.combo_JHAA     = "\u004C\u0052\u0026\u0057";

Hemalatha.combo_TI       = "\u00BC";
Hemalatha.combo_TII      = "\u00BC\u0064";
Hemalatha.combo_NI       = "\u00AC";
Hemalatha.combo_NII      = "\u00AC\u0064";

Hemalatha.combo_PAA      = "\u0046\u0079";
Hemalatha.combo_PO       = "\u0046\u007E";
Hemalatha.combo_POO      = "\u0046\u00A1";
Hemalatha.combo_PAU      = "\u0046\u00A2";
Hemalatha.combo_PHAA     = "\u0046\u006E\u0079";
Hemalatha.combo_PHO      = "\u0046\u006E\u007E";
Hemalatha.combo_PHOO     = "\u0046\u006E\u00A1";
Hemalatha.combo_PHAU     = "\u0046\u006E\u00A2";
Hemalatha.combo_PDA      = "\u0046\u00F4";
Hemalatha.combo_PLA      = "\u0046\u00FD";
Hemalatha.combo_PHDA     = "\u0046\u006E\u00F4";
Hemalatha.combo_PHLA     = "\u0046\u006E\u00FD";
Hemalatha.combo_BI       = "\u00D5";
Hemalatha.combo_BII      = "\u00D5\u0064";
Hemalatha.combo_BHI      = "\u00D5\u00B3";
Hemalatha.combo_BHII     = "\u00D5\u00B3\u0064";
Hemalatha.combo_MAA      = "\u00AA\u0057";
Hemalatha.combo_MI       = "\u201E\u0056";
Hemalatha.combo_MII      = "\u201E\u0064\u0056";
Hemalatha.combo_MAU      = "\u00AA\u00B0";
Hemalatha.combo_MEELEN   = "\u00AA\u005B\u0056";
Hemalatha.combo_MPOLLU   = "\u00AA\u00B1\u0056";

Hemalatha.combo_YAA      = "\u00B8\u0057";
Hemalatha.combo_YI       = "\u004C\u0056\u0056";
Hemalatha.combo_YII      = "\u004C\u0056\u0057";
Hemalatha.combo_YEELEN   = "\u00B8\u005B\u0056";
Hemalatha.combo_YPOLLU   = "\u00B8\u00BA\u0056";
Hemalatha.combo_RAA      = "\u004C\u0053";
Hemalatha.combo_RI       = "\u004C\u006A";
Hemalatha.combo_RII      = "\u004C\u006B";
Hemalatha.combo_RU       = "\u004C\u0052\u0056";
Hemalatha.combo_RAU      = "\u004C\u005F";
Hemalatha.combo_RO       = "\u004C\u005D";
Hemalatha.combo_ROO      = "\u004C\u005D\u005B";
Hemalatha.combo_REELEN   = "\u004C\u005B";
Hemalatha.combo_RPOLLU   = "\u004C\u0060";
Hemalatha.combo_LI       = "\u00D6";
Hemalatha.combo_LII      = "\u00D6\u0064";               
Hemalatha.combo_VI       = "\u201E";
Hemalatha.combo_VII      = "\u201E\u0064";
Hemalatha.combo_SHI      = "\u0062";
Hemalatha.combo_SHII     = "\u0062\u0064";               

Hemalatha.combo_HAA      = "\u00A5";
Hemalatha.combo_LLI      = "\u00D7";
Hemalatha.combo_LLII     = "\u00D7\u0064";               

Hemalatha.combo_SHRII    = "\u0024";

//Vattulu
Hemalatha.vattu_KA       = "\u00E4";
//Hemalatha.vattu_KHA      = "\u00??";
Hemalatha.vattu_GA       = "\u00E6";
Hemalatha.vattu_GHA      = "\u00E7";
//Hemalatha.vattu_NGA      = "\u00??";

Hemalatha.vattu_CA       = "\u00E8";
Hemalatha.vattu_CHA      = "\u00E8\u00E9";
Hemalatha.vattu_JA       = "\u00EA";
Hemalatha.vattu_JHA      = "\u00EB";
Hemalatha.vattu_NYA      = "\u00EC";

Hemalatha.vattu_TTA      = "\u00ED";
Hemalatha.vattu_TTHA     = "\u00EE";
Hemalatha.vattu_DDA      = "\u00EF";
Hemalatha.vattu_DDHA     = "\u00EF\u00F0";
Hemalatha.vattu_NNA      = "\u00F1";

Hemalatha.vattu_TA       = "\u00F2";
Hemalatha.vattu_THA      = "\u00F3";
Hemalatha.vattu_DA       = "\u00F4";
Hemalatha.vattu_DHA      = "\u00F4\u00F0";
Hemalatha.vattu_NA       = "\u00F5";

Hemalatha.vattu_PA       = "\u00F6";
Hemalatha.vattu_PHA      = "\u00F6\u00E9";
Hemalatha.vattu_BA       = "\u00F7";
Hemalatha.vattu_BHA      = "\u00F7\u00E9";
Hemalatha.vattu_MA       = "\u00F8";

Hemalatha.vattu_YA       = "\u00F9";
Hemalatha.vattu_RA_1     = "\u00FA";
Hemalatha.vattu_RA_2     = "\u00FB";
Hemalatha.vattu_LA       = "\u00FD";
Hemalatha.vattu_VA       = "\u002A";
Hemalatha.vattu_SHA      = "\u002B";
Hemalatha.vattu_SSA      = "\u003C";
Hemalatha.vattu_SA       = "\u003D";
Hemalatha.vattu_HA       = "\u003E";
Hemalatha.vattu_LLA      = "\u00FE";
Hemalatha.vattu_RRA      = "\u00FC";

//Digits
Hemalatha.digit_ZERO     = "\u0030";
Hemalatha.digit_ONE      = "\u0031";
Hemalatha.digit_TWO      = "\u0032";
Hemalatha.digit_THREE    = "\u0033";
Hemalatha.digit_FOUR     = "\u0034";
Hemalatha.digit_FIVE     = "\u0035";
Hemalatha.digit_SIX      = "\u0036";
Hemalatha.digit_SEVEN    = "\u0037";
Hemalatha.digit_EIGHT    = "\u0038";
Hemalatha.digit_NINE     = "\u0039";

//Matches ASCII
Hemalatha.EXCLAM         = "\u0021";
Hemalatha.QTSINGLE       = "\u0027";
Hemalatha.PARENLEFT      = "\u0028";
Hemalatha.PARENRIGT      = "\u0029";
Hemalatha.COMMA          = "\u002C"; 
Hemalatha.PERIOD         = "\u002E";
Hemalatha.SLASH          = "\u002F";
Hemalatha.COLON          = "\u003A";
Hemalatha.SEMICOLON      = "\u003B";
Hemalatha.QUESTION       = "\u003F";

//Does not match ASCII
Hemalatha.extra_QTSINGLE = "\u0022"; 
Hemalatha.HYPHEN         = "\u0063";
Hemalatha.PIPE           = "\u0065";

//Kommu
Hemalatha.misc_TICK_1    = "\u0052";
Hemalatha.misc_TICK_2    = "\u0078";
Hemalatha.misc_TICK_3    = "\u00AB";
Hemalatha.misc_TICK_4    = "\u00CF";

//
Hemalatha.misc_vattu     = "\u00B3";
           

//What are these for?
Hemalatha.misc_UNKNOWN_1  = "\u002D";
Hemalatha.misc_UNKNOWN_2  = "\u0050";
Hemalatha.misc_UNKNOWN_3  = "\u0051";
Hemalatha.misc_UNKNOWN_4  = "\u0069";
Hemalatha.misc_UNKNOWN_5  = "\u0073";
Hemalatha.misc_UNKNOWN_6  = "\u2026";
Hemalatha.misc_UNKNOWN_7  = "\u00A6";
Hemalatha.misc_UNKNOWN_8  = "\u00BD";
Hemalatha.misc_UNKNOWN_9  = "\u00C1";
Hemalatha.misc_UNKNOWN_10 = "\u00E1";
Hemalatha.misc_UNKNOWN_11 = "\u00E2";
Hemalatha.misc_UNKNOWN_12 = "\u00E3";

Hemalatha.toPadma = new Object();

Hemalatha.toPadma[Hemalatha.candrabindu] = Padma.candrabindu;
Hemalatha.toPadma[Hemalatha.avagraha] = Padma.avagraha;
Hemalatha.toPadma[Hemalatha.visarga]  = Padma.visarga;
Hemalatha.toPadma[Hemalatha.virama_1] = Padma.syllbreak;
Hemalatha.toPadma[Hemalatha.virama_2] = Padma.syllbreak;
Hemalatha.toPadma[Hemalatha.virama_3] = Padma.syllbreak;
Hemalatha.toPadma[Hemalatha.virama_4] = Padma.syllbreak;
Hemalatha.toPadma[Hemalatha.virama_5] = Padma.syllbreak;
Hemalatha.toPadma[Hemalatha.anusvara] = Padma.anusvara;

Hemalatha.toPadma[Hemalatha.vowel_A]  = Padma.vowel_A;
Hemalatha.toPadma[Hemalatha.vowel_AA] = Padma.vowel_AA;
Hemalatha.toPadma[Hemalatha.vowel_I]  = Padma.vowel_I;
Hemalatha.toPadma[Hemalatha.vowel_II] = Padma.vowel_II;
Hemalatha.toPadma[Hemalatha.vowel_U]  = Padma.vowel_U;
Hemalatha.toPadma[Hemalatha.vowel_UU] = Padma.vowel_UU;
Hemalatha.toPadma[Hemalatha.vowel_R]  = Padma.vowel_R;
Hemalatha.toPadma[Hemalatha.vowel_E]  = Padma.vowel_E;
Hemalatha.toPadma[Hemalatha.vowel_EE] = Padma.vowel_EE;
Hemalatha.toPadma[Hemalatha.vowel_AI] = Padma.vowel_AI;
Hemalatha.toPadma[Hemalatha.vowel_O]  = Padma.vowel_O;
Hemalatha.toPadma[Hemalatha.vowel_OO] = Padma.vowel_OO;
Hemalatha.toPadma[Hemalatha.vowel_AU] = Padma.vowel_AU;

Hemalatha.toPadma[Hemalatha.consnt_KA]    = Padma.consnt_KA;
Hemalatha.toPadma[Hemalatha.consnt_KHA_1] = Padma.consnt_KHA;
Hemalatha.toPadma[Hemalatha.consnt_KHA_2] = Padma.consnt_KHA;
Hemalatha.toPadma[Hemalatha.consnt_GA]    = Padma.consnt_GA;
Hemalatha.toPadma[Hemalatha.consnt_GHA] = Padma.consnt_GHA;
Hemalatha.toPadma[Hemalatha.consnt_NGA] = Padma.consnt_NGA;

Hemalatha.toPadma[Hemalatha.consnt_CA] = Padma.consnt_CA;
Hemalatha.toPadma[Hemalatha.consnt_CHA] = Padma.consnt_CHA;
Hemalatha.toPadma[Hemalatha.consnt_JA] = Padma.consnt_JA;
Hemalatha.toPadma[Hemalatha.consnt_JHA] = Padma.consnt_JHA;
Hemalatha.toPadma[Hemalatha.consnt_NYA] = Padma.consnt_NYA;

Hemalatha.toPadma[Hemalatha.consnt_TTA_1] = Padma.consnt_TTA;
Hemalatha.toPadma[Hemalatha.consnt_TTA_2] = Padma.consnt_TTA;
Hemalatha.toPadma[Hemalatha.consnt_TTHA] = Padma.consnt_TTHA;
Hemalatha.toPadma[Hemalatha.consnt_DDA] = Padma.consnt_DDA;
Hemalatha.toPadma[Hemalatha.consnt_DDHA] = Padma.consnt_DDHA;
Hemalatha.toPadma[Hemalatha.consnt_NNA] = Padma.consnt_NNA;

Hemalatha.toPadma[Hemalatha.consnt_TA] = Padma.consnt_TA;
Hemalatha.toPadma[Hemalatha.consnt_THA] = Padma.consnt_THA;
Hemalatha.toPadma[Hemalatha.consnt_DA] = Padma.consnt_DA;
Hemalatha.toPadma[Hemalatha.consnt_DHA] = Padma.consnt_DHA;
Hemalatha.toPadma[Hemalatha.consnt_NA] = Padma.consnt_NA;

Hemalatha.toPadma[Hemalatha.consnt_PA]   = Padma.consnt_PA;
Hemalatha.toPadma[Hemalatha.consnt_PHA]  = Padma.consnt_PHA;
Hemalatha.toPadma[Hemalatha.consnt_BA_1] = Padma.consnt_BA;
Hemalatha.toPadma[Hemalatha.consnt_BA_2] = Padma.consnt_BA;
Hemalatha.toPadma[Hemalatha.consnt_BHA]  = Padma.consnt_BHA;
Hemalatha.toPadma[Hemalatha.consnt_MA]  = Padma.consnt_MA;

Hemalatha.toPadma[Hemalatha.consnt_YA] = Padma.consnt_YA;
Hemalatha.toPadma[Hemalatha.consnt_RA] = Padma.consnt_RA;
Hemalatha.toPadma[Hemalatha.consnt_LA_1] = Padma.consnt_LA;
Hemalatha.toPadma[Hemalatha.consnt_LA_2] = Padma.consnt_LA;
Hemalatha.toPadma[Hemalatha.consnt_VA] = Padma.consnt_VA;
Hemalatha.toPadma[Hemalatha.consnt_SHA] = Padma.consnt_SHA;
Hemalatha.toPadma[Hemalatha.consnt_SSA_1] = Padma.consnt_SSA;
Hemalatha.toPadma[Hemalatha.consnt_SSA_2] = Padma.consnt_SSA;
Hemalatha.toPadma[Hemalatha.consnt_SA_1] = Padma.consnt_SA;
Hemalatha.toPadma[Hemalatha.consnt_SA_2] = Padma.consnt_SA;

Hemalatha.toPadma[Hemalatha.consnt_HA] = Padma.consnt_HA;
Hemalatha.toPadma[Hemalatha.consnt_LLA] = Padma.consnt_LLA;
Hemalatha.toPadma[Hemalatha.consnt_RRA] = Padma.consnt_RRA;
Hemalatha.toPadma[Hemalatha.conjct_KSHA] = Padma.consnt_KA + Padma.vattu_SSA;

//Gunintamulu
Hemalatha.toPadma[Hemalatha.vowelsn_AA_1]  = Padma.vowelsn_AA;
Hemalatha.toPadma[Hemalatha.vowelsn_AA_2]  = Padma.vowelsn_AA;
Hemalatha.toPadma[Hemalatha.vowelsn_AA_3]  = Padma.vowelsn_AA;
Hemalatha.toPadma[Hemalatha.vowelsn_I_1]   = Padma.vowelsn_I;
Hemalatha.toPadma[Hemalatha.vowelsn_I_2]   = Padma.vowelsn_I;
Hemalatha.toPadma[Hemalatha.vowelsn_I_3]   = Padma.vowelsn_I;
Hemalatha.toPadma[Hemalatha.vowelsn_I_4]   = Padma.vowelsn_I;
Hemalatha.toPadma[Hemalatha.vowelsn_II_1]  = Padma.vowelsn_II;
Hemalatha.toPadma[Hemalatha.vowelsn_II_2]  = Padma.vowelsn_II;
Hemalatha.toPadma[Hemalatha.vowelsn_II_3]  = Padma.vowelsn_II;
Hemalatha.toPadma[Hemalatha.vowelsn_II_4]  = Padma.vowelsn_II;
Hemalatha.toPadma[Hemalatha.vowelsn_U_1]   = Padma.vowelsn_U;
Hemalatha.toPadma[Hemalatha.vowelsn_U_2]   = Padma.vowelsn_U;
Hemalatha.toPadma[Hemalatha.vowelsn_U_3]   = Padma.vowelsn_U;
Hemalatha.toPadma[Hemalatha.vowelsn_U_4]   = Padma.vowelsn_U;
Hemalatha.toPadma[Hemalatha.vowelsn_U_5]   = Padma.vowelsn_U;
Hemalatha.toPadma[Hemalatha.vowelsn_UU_1]  = Padma.vowelsn_UU;
Hemalatha.toPadma[Hemalatha.vowelsn_UU_2]  = Padma.vowelsn_UU;
Hemalatha.toPadma[Hemalatha.vowelsn_UU_3]  = Padma.vowelsn_UU;
Hemalatha.toPadma[Hemalatha.vowelsn_UU_4]  = Padma.vowelsn_UU;
Hemalatha.toPadma[Hemalatha.vowelsn_UU_5]  = Padma.vowelsn_UU;
Hemalatha.toPadma[Hemalatha.vowelsn_R]     = Padma.vowelsn_R;
Hemalatha.toPadma[Hemalatha.vowelsn_RR]    = Padma.vowelsn_RR;
Hemalatha.toPadma[Hemalatha.vowelsn_E_1]   = Padma.vowelsn_E;
Hemalatha.toPadma[Hemalatha.vowelsn_E_2]   = Padma.vowelsn_E;
Hemalatha.toPadma[Hemalatha.vowelsn_E_3]   = Padma.vowelsn_E;
Hemalatha.toPadma[Hemalatha.vowelsn_E_4]   = Padma.vowelsn_E;
Hemalatha.toPadma[Hemalatha.vowelsn_E_5]   = Padma.vowelsn_E;
Hemalatha.toPadma[Hemalatha.vowelsn_E_6]   = Padma.vowelsn_E;
Hemalatha.toPadma[Hemalatha.vowelsn_E_7]   = Padma.vowelsn_E;
Hemalatha.toPadma[Hemalatha.vowelsn_E_8]   = Padma.vowelsn_E;
Hemalatha.toPadma[Hemalatha.vowelsn_E_9]   = Padma.vowelsn_E;
Hemalatha.toPadma[Hemalatha.vowelsn_EE_1]  = Padma.vowelsn_EE;
Hemalatha.toPadma[Hemalatha.vowelsn_EE_2]  = Padma.vowelsn_EE;
Hemalatha.toPadma[Hemalatha.vowelsn_O_1]   = Padma.vowelsn_O;
Hemalatha.toPadma[Hemalatha.vowelsn_O_2]   = Padma.vowelsn_O;
Hemalatha.toPadma[Hemalatha.vowelsn_O_3]   = Padma.vowelsn_O;
Hemalatha.toPadma[Hemalatha.vowelsn_O_4]   = Padma.vowelsn_O;
Hemalatha.toPadma[Hemalatha.vowelsn_OO_1]  = Padma.vowelsn_OO;
Hemalatha.toPadma[Hemalatha.vowelsn_OO_2]  = Padma.vowelsn_OO;
Hemalatha.toPadma[Hemalatha.vowelsn_OO_3]  = Padma.vowelsn_OO;
Hemalatha.toPadma[Hemalatha.vowelsn_OO_4]  = Padma.vowelsn_OO;
Hemalatha.toPadma[Hemalatha.vowelsn_AU_1]  = Padma.vowelsn_AU;
Hemalatha.toPadma[Hemalatha.vowelsn_AU_2]  = Padma.vowelsn_AU;
Hemalatha.toPadma[Hemalatha.vowelsn_AU_3]  = Padma.vowelsn_AU;
Hemalatha.toPadma[Hemalatha.vowelsn_AU_4]  = Padma.vowelsn_AU;

Hemalatha.toPadma[Hemalatha.vowelsn_EELEN]   = Padma.vowelsn_EELEN;
Hemalatha.toPadma[Hemalatha.vowelsn_AILEN_1] = Padma.vowelsn_AILEN;
Hemalatha.toPadma[Hemalatha.vowelsn_AILEN_2] = Padma.vowelsn_AILEN;

//Special Combinations
Hemalatha.toPadma[Hemalatha.combo_KHI]     = Padma.consnt_KHA + Padma.vowelsn_I;
Hemalatha.toPadma[Hemalatha.combo_KHII]    = Padma.consnt_KHA + Padma.vowelsn_II;
Hemalatha.toPadma[Hemalatha.combo_GHAA]    = Padma.consnt_GHA + Padma.vowelsn_AA;

Hemalatha.toPadma[Hemalatha.combo_CI]      = Padma.consnt_CA + Padma.vowelsn_I;
Hemalatha.toPadma[Hemalatha.combo_CII]     = Padma.consnt_CA + Padma.vowelsn_II;
Hemalatha.toPadma[Hemalatha.combo_CHI]     = Padma.consnt_CHA + Padma.vowelsn_I;
Hemalatha.toPadma[Hemalatha.combo_CHII]    = Padma.consnt_CHA + Padma.vowelsn_II;
Hemalatha.toPadma[Hemalatha.combo_JI]      = Padma.consnt_JA + Padma.vowelsn_I;
Hemalatha.toPadma[Hemalatha.combo_JII]     = Padma.consnt_JA + Padma.vowelsn_II;
Hemalatha.toPadma[Hemalatha.combo_JHAA]    = Padma.consnt_JHA + Padma.vowelsn_AA;

Hemalatha.toPadma[Hemalatha.combo_TI]      = Padma.consnt_TA + Padma.vowelsn_I;
Hemalatha.toPadma[Hemalatha.combo_TII]     = Padma.consnt_TA + Padma.vowelsn_II;
Hemalatha.toPadma[Hemalatha.combo_NI]      = Padma.consnt_NA + Padma.vowelsn_I;
Hemalatha.toPadma[Hemalatha.combo_NII]     = Padma.consnt_NA + Padma.vowelsn_II;

Hemalatha.toPadma[Hemalatha.combo_PAA]     = Padma.consnt_PA + Padma.vowelsn_AA;
Hemalatha.toPadma[Hemalatha.combo_PO]      = Padma.consnt_PA + Padma.vowelsn_O;
Hemalatha.toPadma[Hemalatha.combo_POO]     = Padma.consnt_PA + Padma.vowelsn_OO;
Hemalatha.toPadma[Hemalatha.combo_PAU]     = Padma.consnt_PA + Padma.vowelsn_AU;
Hemalatha.toPadma[Hemalatha.combo_PDA]     = Padma.consnt_PA + Padma.vattu_DA;
Hemalatha.toPadma[Hemalatha.combo_PLA]     = Padma.consnt_PA + Padma.vattu_LA;
Hemalatha.toPadma[Hemalatha.combo_PHDA]    = Padma.consnt_PHA + Padma.vattu_DA;
Hemalatha.toPadma[Hemalatha.combo_PHLA]    = Padma.consnt_PHA + Padma.vattu_LA;
Hemalatha.toPadma[Hemalatha.combo_PHAA]    = Padma.consnt_PHA + Padma.vowelsn_AA;
Hemalatha.toPadma[Hemalatha.combo_PHO]     = Padma.consnt_PHA + Padma.vowelsn_O;
Hemalatha.toPadma[Hemalatha.combo_PHOO]    = Padma.consnt_PHA + Padma.vowelsn_OO;
Hemalatha.toPadma[Hemalatha.combo_PHAU]    = Padma.consnt_PHA + Padma.vowelsn_AU;
Hemalatha.toPadma[Hemalatha.combo_BI]      = Padma.consnt_BA + Padma.vowelsn_I;
Hemalatha.toPadma[Hemalatha.combo_BII]     = Padma.consnt_BA + Padma.vowelsn_II;
Hemalatha.toPadma[Hemalatha.combo_BHI]     = Padma.consnt_BHA + Padma.vowelsn_I;
Hemalatha.toPadma[Hemalatha.combo_BHII]    = Padma.consnt_BHA + Padma.vowelsn_II;
Hemalatha.toPadma[Hemalatha.combo_MAA]     = Padma.consnt_MA + Padma.vowelsn_AA;
Hemalatha.toPadma[Hemalatha.combo_MI]      = Padma.consnt_MA + Padma.vowelsn_I;
Hemalatha.toPadma[Hemalatha.combo_MII]     = Padma.consnt_MA + Padma.vowelsn_II;
Hemalatha.toPadma[Hemalatha.combo_MAU]     = Padma.consnt_MA + Padma.vowelsn_AU;
Hemalatha.toPadma[Hemalatha.combo_MEELEN]  = Padma.consnt_MA + Padma.vowelsn_EELEN;
Hemalatha.toPadma[Hemalatha.combo_MPOLLU]  = Padma.consnt_MA + Padma.syllbreak;

Hemalatha.toPadma[Hemalatha.combo_YAA]     = Padma.consnt_YA + Padma.vowelsn_AA;
Hemalatha.toPadma[Hemalatha.combo_YI]      = Padma.consnt_YA + Padma.vowelsn_I;
Hemalatha.toPadma[Hemalatha.combo_YII]     = Padma.consnt_YA + Padma.vowelsn_II;
Hemalatha.toPadma[Hemalatha.combo_YEELEN]  = Padma.consnt_YA + Padma.vowelsn_EELEN;
Hemalatha.toPadma[Hemalatha.combo_YPOLLU]  = Padma.consnt_YA + Padma.syllbreak;
Hemalatha.toPadma[Hemalatha.combo_RAA]     = Padma.consnt_RA + Padma.vowelsn_AA;
Hemalatha.toPadma[Hemalatha.combo_RI]      = Padma.consnt_RA + Padma.vowelsn_I;
Hemalatha.toPadma[Hemalatha.combo_RII]     = Padma.consnt_RA + Padma.vowelsn_II;
Hemalatha.toPadma[Hemalatha.combo_RU]      = Padma.consnt_RA + Padma.vowelsn_U;
Hemalatha.toPadma[Hemalatha.combo_RAU]     = Padma.consnt_RA + Padma.vowelsn_AU;
Hemalatha.toPadma[Hemalatha.combo_RO]      = Padma.consnt_RA + Padma.vowelsn_O;
Hemalatha.toPadma[Hemalatha.combo_ROO]     = Padma.consnt_RA + Padma.vowelsn_OO;
Hemalatha.toPadma[Hemalatha.combo_REELEN]  = Padma.consnt_RA + Padma.vowelsn_EELEN;
Hemalatha.toPadma[Hemalatha.combo_RPOLLU]  = Padma.consnt_RA + Padma.syllbreak;
Hemalatha.toPadma[Hemalatha.combo_LI]      = Padma.consnt_LA + Padma.vowelsn_I;
Hemalatha.toPadma[Hemalatha.combo_LII]     = Padma.consnt_LA + Padma.vowelsn_II;
Hemalatha.toPadma[Hemalatha.combo_VI]      = Padma.consnt_VA + Padma.vowelsn_I;
Hemalatha.toPadma[Hemalatha.combo_VII]     = Padma.consnt_VA + Padma.vowelsn_II;
Hemalatha.toPadma[Hemalatha.combo_SHI]     = Padma.consnt_SHA + Padma.vowelsn_I;
Hemalatha.toPadma[Hemalatha.combo_SHII]    = Padma.consnt_SHA + Padma.vowelsn_II;

Hemalatha.toPadma[Hemalatha.combo_HAA]     = Padma.consnt_HA + Padma.vowelsn_AA;
Hemalatha.toPadma[Hemalatha.combo_LLI]     = Padma.consnt_LLA + Padma.vowelsn_I;
Hemalatha.toPadma[Hemalatha.combo_LLII]    = Padma.consnt_LLA + Padma.vowelsn_II;

Hemalatha.toPadma[Hemalatha.combo_SHRII]   = Padma.consnt_SHA + Padma.vattu_RA + Padma.vowelsn_II;

//Vattulu
Hemalatha.toPadma[Hemalatha.vattu_KA]      = Padma.vattu_KA;
//Hemalatha.toPadma[Hemalatha.vattu_KHA]     = Padma.vattu_KHA;
Hemalatha.toPadma[Hemalatha.vattu_GA]      = Padma.vattu_GA;
Hemalatha.toPadma[Hemalatha.vattu_GHA]     = Padma.vattu_GHA;
//Hemalatha.toPadma[Hemalatha.vattu_NGA]     = Padma.vattu_NGA;

Hemalatha.toPadma[Hemalatha.vattu_CA]      = Padma.vattu_CA;
Hemalatha.toPadma[Hemalatha.vattu_CHA]     = Padma.vattu_CHA;
Hemalatha.toPadma[Hemalatha.vattu_JA]      = Padma.vattu_JA;
Hemalatha.toPadma[Hemalatha.vattu_JHA]     = Padma.vattu_JHA;
Hemalatha.toPadma[Hemalatha.vattu_NYA]     = Padma.vattu_NYA;

Hemalatha.toPadma[Hemalatha.vattu_TTA]     = Padma.vattu_TTA;
Hemalatha.toPadma[Hemalatha.vattu_TTHA]    = Padma.vattu_TTHA;
Hemalatha.toPadma[Hemalatha.vattu_DDA]     = Padma.vattu_DDA;
Hemalatha.toPadma[Hemalatha.vattu_DDHA]    = Padma.vattu_DDHA;
Hemalatha.toPadma[Hemalatha.vattu_NNA]     = Padma.vattu_NNA;

Hemalatha.toPadma[Hemalatha.vattu_TA]      = Padma.vattu_TA;
Hemalatha.toPadma[Hemalatha.vattu_THA]     = Padma.vattu_THA;
Hemalatha.toPadma[Hemalatha.vattu_DA]      = Padma.vattu_DA;
Hemalatha.toPadma[Hemalatha.vattu_DHA]     = Padma.vattu_DHA;
Hemalatha.toPadma[Hemalatha.vattu_NA]      = Padma.vattu_NA;

Hemalatha.toPadma[Hemalatha.vattu_PA]      = Padma.vattu_PA;
Hemalatha.toPadma[Hemalatha.vattu_PHA]     = Padma.vattu_PHA;
Hemalatha.toPadma[Hemalatha.vattu_BA]      = Padma.vattu_BA;
Hemalatha.toPadma[Hemalatha.vattu_BHA]     = Padma.vattu_BHA;
Hemalatha.toPadma[Hemalatha.vattu_MA]      = Padma.vattu_MA;

Hemalatha.toPadma[Hemalatha.vattu_YA]      = Padma.vattu_YA;
Hemalatha.toPadma[Hemalatha.vattu_RA_1]    = Padma.vattu_RA;
Hemalatha.toPadma[Hemalatha.vattu_RA_2]    = Padma.vattu_RA;
Hemalatha.toPadma[Hemalatha.vattu_LA]      = Padma.vattu_LA;
Hemalatha.toPadma[Hemalatha.vattu_VA]      = Padma.vattu_VA;
Hemalatha.toPadma[Hemalatha.vattu_SHA]     = Padma.vattu_SHA;
Hemalatha.toPadma[Hemalatha.vattu_SSA]     = Padma.vattu_SSA;
Hemalatha.toPadma[Hemalatha.vattu_SA]      = Padma.vattu_SA;
Hemalatha.toPadma[Hemalatha.vattu_HA]      = Padma.vattu_HA;
Hemalatha.toPadma[Hemalatha.vattu_LLA]     = Padma.vattu_LLA;
Hemalatha.toPadma[Hemalatha.vattu_RRA]     = Padma.vattu_RRA;

//Miscellaneous(where it doesn't match ASCII representation)
Hemalatha.toPadma[Hemalatha.extra_QTSINGLE] = Hemalatha.QTSINGLE;
Hemalatha.toPadma[Hemalatha.HYPHEN]         = "-";
Hemalatha.toPadma[Hemalatha.PIPE]           = "|";

Hemalatha.redundantList = new Object();
Hemalatha.redundantList[Hemalatha.misc_TICK_1] = true;
Hemalatha.redundantList[Hemalatha.misc_TICK_2] = true;
Hemalatha.redundantList[Hemalatha.misc_TICK_3] = true;
Hemalatha.redundantList[Hemalatha.misc_TICK_4] = true;
Hemalatha.redundantList[Hemalatha.misc_UNKNOWN_1]  = true;
Hemalatha.redundantList[Hemalatha.misc_UNKNOWN_2]  = true;
Hemalatha.redundantList[Hemalatha.misc_UNKNOWN_3]  = true;
Hemalatha.redundantList[Hemalatha.misc_UNKNOWN_4]  = true;
Hemalatha.redundantList[Hemalatha.misc_UNKNOWN_5]  = true;
Hemalatha.redundantList[Hemalatha.misc_UNKNOWN_6]  = true;
Hemalatha.redundantList[Hemalatha.misc_UNKNOWN_7]  = true;
Hemalatha.redundantList[Hemalatha.misc_UNKNOWN_8]  = true;
Hemalatha.redundantList[Hemalatha.misc_UNKNOWN_9]  = true;
Hemalatha.redundantList[Hemalatha.misc_UNKNOWN_10] = true;
Hemalatha.redundantList[Hemalatha.misc_UNKNOWN_11] = true;
Hemalatha.redundantList[Hemalatha.misc_UNKNOWN_12] = true;

Hemalatha.prefixList = new Object();
Hemalatha.prefixList[Hemalatha.virama_2]     = true;
Hemalatha.prefixList[Hemalatha.vowelsn_I_3]  = true;
Hemalatha.prefixList[Hemalatha.vowelsn_II_3] = true;
Hemalatha.prefixList[Hemalatha.vowelsn_E_1]  = true;
Hemalatha.prefixList[Hemalatha.vowelsn_E_2]  = true;
Hemalatha.prefixList[Hemalatha.vowelsn_E_3]  = true;
Hemalatha.prefixList[Hemalatha.vowelsn_E_4]  = true;
Hemalatha.prefixList[Hemalatha.vowelsn_E_5]  = true;
Hemalatha.prefixList[Hemalatha.vowelsn_E_6]  = true;
Hemalatha.prefixList[Hemalatha.vowelsn_E_7]  = true;
Hemalatha.prefixList[Hemalatha.vowelsn_E_8]  = true;
Hemalatha.prefixList[Hemalatha.vowelsn_EE_1] = true;
Hemalatha.prefixList[Hemalatha.vowelsn_AILEN_1] = true;
Hemalatha.prefixList[Hemalatha.vattu_RA_1]   = true;

Hemalatha.overloadList = new Object();
Hemalatha.overloadList[Hemalatha.anusvara]    = true;
Hemalatha.overloadList[Hemalatha.vowel_E]     = true;
Hemalatha.overloadList[Hemalatha.consnt_CA]   = true;
Hemalatha.overloadList[Hemalatha.consnt_DDA]  = true;
Hemalatha.overloadList[Hemalatha.consnt_DA]   = true;
Hemalatha.overloadList[Hemalatha.consnt_PA]   = true;
Hemalatha.overloadList[Hemalatha.consnt_PHA]  = true;
Hemalatha.overloadList[Hemalatha.consnt_BA_1] = true;
Hemalatha.overloadList[Hemalatha.consnt_BA_2] = true;
Hemalatha.overloadList[Hemalatha.consnt_RA]   = true;
Hemalatha.overloadList[Hemalatha.consnt_VA]   = true;
Hemalatha.overloadList[Hemalatha.vowelsn_E_9] = true;
Hemalatha.overloadList[Hemalatha.vowelsn_O_1] = true;
Hemalatha.overloadList[Hemalatha.vowelsn_O_3] = true;
Hemalatha.overloadList[Hemalatha.vowelsn_O_4] = true;
Hemalatha.overloadList[Hemalatha.combo_KHI]   = true;
Hemalatha.overloadList[Hemalatha.combo_CI]    = true;
Hemalatha.overloadList[Hemalatha.combo_CHI]   = true;
Hemalatha.overloadList[Hemalatha.combo_TI]    = true;
Hemalatha.overloadList[Hemalatha.combo_NI]    = true;
Hemalatha.overloadList[Hemalatha.combo_PHAA]  = true;
Hemalatha.overloadList[Hemalatha.combo_BI]    = true;
Hemalatha.overloadList[Hemalatha.combo_BHI]   = true;
Hemalatha.overloadList[Hemalatha.combo_LI]    = true;
Hemalatha.overloadList[Hemalatha.combo_VI]    = true;
Hemalatha.overloadList[Hemalatha.combo_VII]   = true;
Hemalatha.overloadList[Hemalatha.combo_SHI]   = true;
Hemalatha.overloadList[Hemalatha.combo_LLI]   = true;
Hemalatha.overloadList[Hemalatha.vattu_CA]    = true;
Hemalatha.overloadList[Hemalatha.vattu_DDA]   = true;
Hemalatha.overloadList[Hemalatha.vattu_DA]    = true;
Hemalatha.overloadList[Hemalatha.vattu_PA]    = true;
Hemalatha.overloadList[Hemalatha.vattu_BA]    = true;
Hemalatha.overloadList["\u0046\u006E"]        = true;
Hemalatha.overloadList["\u0046\u00FD"]        = true;
Hemalatha.overloadList["\u004C\u0052\u0026"]  = true;
Hemalatha.overloadList["\u004C\u0056"]        = true;
Hemalatha.overloadList["\u004C\u005D"]        = true;
Hemalatha.overloadList["\u00AA\u005B"]        = true;
Hemalatha.overloadList["\u00AA\u00B1"]        = true;
Hemalatha.overloadList["\u00B8"]              = true;
Hemalatha.overloadList["\u00B8\u005B"]        = true;
Hemalatha.overloadList["\u00B8\u00BA"]        = true;
Hemalatha.overloadList["\u2021\u0056"]        = true;

//Terrible hack because this font overloads anusvara and ra
//This will take care of all cases when a vattu follows ra
Hemalatha.insertTalakattuForRaGunintam = function (str)
{
    var output = "", last = null, added = false;
    for(var i = 0; i < str.length; ++i) {
        var cur = str.charAt(i);
        if (last == Hemalatha.anusvara && !added) {
            var val = Hemalatha.lookup(cur);
            if (val != null && Padma.getType(val.charAt(0)) == Padma.type_vattu && !Hemalatha.isPrefixSymbol(cur))
                    output += Hemalatha.misc_TICK_1;
            output += cur;
        }
        else if (cur == Hemalatha.anusvara && last != null && Hemalatha.isPrefixSymbol(last)) {
            val = Hemalatha.lookup(last);
            output += cur;
            if (val == Padma.vowelsn_E) {
                output += Hemalatha.misc_TICK_1;
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

Hemalatha.isRedundant = function (str, prev)
{
    if (str == Hemalatha.misc_TICK_1 && prev == Hemalatha.anusvara)
        return false;
    return Hemalatha.redundantList[str] != null;
}
