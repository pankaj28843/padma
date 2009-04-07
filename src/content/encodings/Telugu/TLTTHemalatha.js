//$Id: TLTTHemalatha.js,v 1.2 2009/04/07 07:35:18 harshita Exp $

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

//TL_Hemalatha Telugu
function TL_Hemalatha()
{
}

//The interface every dynamic font encoding should implement
TL_Hemalatha.maxLookupLen = 4;
TL_Hemalatha.fontFace     = "TL-TTHemalatha";
TL_Hemalatha.displayName  = "TL-TTHemalatha";
TL_Hemalatha.script       = Padma.script_TELUGU;

TL_Hemalatha.lookup = function (str) 
{
    return TL_Hemalatha.toPadma[str];
}

TL_Hemalatha.isPrefixSymbol = function (str)
{
    return TL_Hemalatha.prefixList[str] != null;
}

TL_Hemalatha.isOverloaded = function (str)
{
    return TL_Hemalatha.overloadList[str] != null;
}

TL_Hemalatha.handleTwoPartVowelSigns = function (sign1, sign2)
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
TL_Hemalatha.preprocessMessage = function (input)
{
    var output = "",output1 ="", last = null;
    //1.
    for(var i = 0; i < input.length; ++i) {
        var cur = input.charAt(i);
        if (!TL_Hemalatha.isRedundant(cur, last))
            output += last = cur;
     }	
    for(var i = 0; i < output.length; ++i) {
         var cur1 = output.charAt(i); 
         var cur2 = output.charAt(i+1); 
	 if(cur1 == "\u00E1")
            {
             if(cur2 == "\u005B")
             {
             output1 = output1 + cur1 + cur2;
             i++;
             }
            }
            else
            {
              output1 += cur1;
            }
     }  
    //2.
    return TL_Hemalatha.insertTalakattuForRaGunintam(output1);
}

//Implementation details start here

//Specials
TL_Hemalatha.candrabindu_1  = "\u00B7";
TL_Hemalatha.candrabindu_2  = "\u2020";
TL_Hemalatha.avagraha       = "\u3030";
TL_Hemalatha.visarga        = "\u004D";
TL_Hemalatha.anusvara       = "\u004C";
TL_Hemalatha.virama_1       = "\u0060";
TL_Hemalatha.virama_2       = "\u00A3";
TL_Hemalatha.virama_3       = "\u00B1";
TL_Hemalatha.virama_4       = "\u00BA";
TL_Hemalatha.virama_5       = "\u00DE";

//Vowels
TL_Hemalatha.vowel_A        = "\u0040";
TL_Hemalatha.vowel_AA       = "\u0041";
TL_Hemalatha.vowel_I        = "\u0042";
TL_Hemalatha.vowel_II       = "\u0043";
TL_Hemalatha.vowel_U        = "\u0044";
TL_Hemalatha.vowel_UU       = "\u0045";
TL_Hemalatha.vowel_R        = "\u00CA\u0056\u0056";
TL_Hemalatha.vowel_E        = "\u0046";
TL_Hemalatha.vowel_EE       = "\u0047";
TL_Hemalatha.vowel_AI       = "\u0048";
TL_Hemalatha.vowel_O        = "\u0049";
TL_Hemalatha.vowel_OO       = "\u004A";
TL_Hemalatha.vowel_AU       = "\u004B";

//Consonants
TL_Hemalatha.consnt_KA      = "\u004E";
TL_Hemalatha.consnt_KHA_1   = "\u00C5";
TL_Hemalatha.consnt_KHA_2   = "\u00C6";
TL_Hemalatha.consnt_GA      = "\u0067";
TL_Hemalatha.consnt_GHA     = "\u006D\u006E\u0056";
TL_Hemalatha.consnt_NGA     = "\u00C3";

TL_Hemalatha.consnt_CA      = "\u00BF";
TL_Hemalatha.consnt_CHA     = "\u00BF\u00B3";
TL_Hemalatha.consnt_JA      = "\u00C7";
TL_Hemalatha.consnt_JHA     = "\u004C\u0052\u0026\u0056"; 
TL_Hemalatha.consnt_NYA     = "\u00C4";

TL_Hemalatha.consnt_TTA_1   = "\u00C8";
TL_Hemalatha.consnt_TTA_2   = "\u00C9";
TL_Hemalatha.consnt_TTHA    = "\u0068";
TL_Hemalatha.consnt_DDA     = "\u00B2";
TL_Hemalatha.consnt_DDHA    = "\u00B2\u00B3";         
TL_Hemalatha.consnt_NNA     = "\u00DF";               

TL_Hemalatha.consnt_TA      = "\u00BB";
TL_Hemalatha.consnt_THA     = "\u00B4";
TL_Hemalatha.consnt_DA      = "\u00B5";
TL_Hemalatha.consnt_DHA     = "\u00B5\u00B3";
TL_Hemalatha.consnt_NA      = "\u00A9";

TL_Hemalatha.consnt_PA      = "\u006D";
TL_Hemalatha.consnt_PHA     = "\u006D\u006E";  
TL_Hemalatha.consnt_BA_1    = "\u00CA";
TL_Hemalatha.consnt_BA_2    = "\u00CB";
TL_Hemalatha.consnt_BHA     = "\u00CB\u00B3";
TL_Hemalatha.consnt_MA      = "\u00AA\u0056";

TL_Hemalatha.consnt_YA      = "\u00B8\u0056";
TL_Hemalatha.consnt_RA      = "\u004C\u0052";
TL_Hemalatha.consnt_LA_1    = "\u00CC";
TL_Hemalatha.consnt_LA_2    = "\u00CD";         
TL_Hemalatha.consnt_VA      = "\u00AA";
TL_Hemalatha.consnt_SHA     = "\u0061";
TL_Hemalatha.consnt_SSA_1   = "\u0074";
TL_Hemalatha.consnt_SSA_2   = "\u0075";
TL_Hemalatha.consnt_SA_1    = "\u0071";
TL_Hemalatha.consnt_SA_2    = "\u0072";

TL_Hemalatha.consnt_HA      = "\u00A4";
TL_Hemalatha.consnt_LLA     = "\u00CE";
TL_Hemalatha.conjct_KSHA    = "\u004F";
TL_Hemalatha.consnt_RRA     = "\u00E0";  

//Gunintamulu
TL_Hemalatha.vowelsn_AA_1   = "\u0053";
TL_Hemalatha.vowelsn_AA_2   = "\u0079";
TL_Hemalatha.vowelsn_AA_3   = "\u00D8";
TL_Hemalatha.vowelsn_I_1    = "\u0054";
TL_Hemalatha.vowelsn_I_2    = "\u006A";
TL_Hemalatha.vowelsn_I_3    = "\u007A";
TL_Hemalatha.vowelsn_I_4    = "\u00D3";
TL_Hemalatha.vowelsn_II_1   = "\u0055";
TL_Hemalatha.vowelsn_II_2   = "\u006B";
TL_Hemalatha.vowelsn_II_3   = "\u007B";
TL_Hemalatha.vowelsn_II_4   = "\u00D4";
TL_Hemalatha.vowelsn_U_1    = "\u0056";
TL_Hemalatha.vowelsn_U_2    = "\u006F";
TL_Hemalatha.vowelsn_U_3    = "\u0076";
TL_Hemalatha.vowelsn_U_4    = "\u00A7";
TL_Hemalatha.vowelsn_U_5    = "\u00D9";
TL_Hemalatha.vowelsn_UU_1   = "\u0057";
TL_Hemalatha.vowelsn_UU_2   = "\u0070";
TL_Hemalatha.vowelsn_UU_3   = "\u0077";
TL_Hemalatha.vowelsn_UU_4   = "\u00A8";
TL_Hemalatha.vowelsn_UU_5   = "\u00DA";
TL_Hemalatha.vowelsn_R      = "\u0058";
TL_Hemalatha.vowelsn_RR     = "\u0059";
TL_Hemalatha.vowelsn_E_1    = "\u005A";
TL_Hemalatha.vowelsn_E_2    = "\u006C";
TL_Hemalatha.vowelsn_E_3    = "\u007C";
TL_Hemalatha.vowelsn_E_4    = "\u00AE";
TL_Hemalatha.vowelsn_E_5    = "\u00B9";
TL_Hemalatha.vowelsn_E_6    = "\u00BE";
TL_Hemalatha.vowelsn_E_7    = "\u00C2";
TL_Hemalatha.vowelsn_E_8    = "\u00DB";
TL_Hemalatha.vowelsn_E_9    = "\u00E1";
TL_Hemalatha.vowelsn_E_10   = "\u00E2";
TL_Hemalatha.vowelsn_EE_1   = "\u007D";
TL_Hemalatha.vowelsn_EE_2   = "\u00E1\u005B";
TL_Hemalatha.vowelsn_O_1    = "\u005D";
TL_Hemalatha.vowelsn_O_2    = "\u007E";
TL_Hemalatha.vowelsn_O_3    = "\u00AF";
TL_Hemalatha.vowelsn_O_4    = "\u00DC";
TL_Hemalatha.vowelsn_OO_1   = "\u005D\u005B";
TL_Hemalatha.vowelsn_OO_2   = "\u00A1";
TL_Hemalatha.vowelsn_OO_3   = "\u00AF\u005B";
TL_Hemalatha.vowelsn_OO_4   = "\u00DC\u005B";
TL_Hemalatha.vowelsn_AU_1   = "\u005F";
TL_Hemalatha.vowelsn_AU_2   = "\u0066";
TL_Hemalatha.vowelsn_AU_3   = "\u00A2";
TL_Hemalatha.vowelsn_AU_4   = "\u00DD";

TL_Hemalatha.vowelsn_EELEN    = "\u005B";
TL_Hemalatha.vowelsn_AILEN_1  = "\u005C";
TL_Hemalatha.vowelsn_AILEN_2  = "\u005E";

//Special Combinations
TL_Hemalatha.combo_KHI      = "\u00D0";
TL_Hemalatha.combo_KHII     = "\u00D0\u0064";
TL_Hemalatha.combo_GHAA     = "\u006D\u006E\u0057";

TL_Hemalatha.combo_CI       = "\u00C0";
TL_Hemalatha.combo_CII      = "\u00C0\u0064";
TL_Hemalatha.combo_CHI      = "\u00C0\u00B3";
TL_Hemalatha.combo_CHII     = "\u00C0\u00B3\u0064";
TL_Hemalatha.combo_JI       = "\u00D1";
TL_Hemalatha.combo_JII      = "\u00D2";
TL_Hemalatha.combo_JHAA     = "\u004C\u0052\u0026\u0057";

TL_Hemalatha.combo_TI       = "\u00BC";
TL_Hemalatha.combo_TII      = "\u00BC\u0064";
TL_Hemalatha.combo_NI       = "\u00AC";
TL_Hemalatha.combo_NII      = "\u00AC\u0064";

TL_Hemalatha.combo_PAA      = "\u0046\u0079";
TL_Hemalatha.combo_PO       = "\u0046\u007E";
TL_Hemalatha.combo_POO      = "\u0046\u00A1";
TL_Hemalatha.combo_PAU      = "\u0046\u00A2";
TL_Hemalatha.combo_PHAA     = "\u0046\u006E\u0079";
TL_Hemalatha.combo_PHO      = "\u0046\u006E\u007E";
TL_Hemalatha.combo_PHOO     = "\u0046\u006E\u00A1";
TL_Hemalatha.combo_PHAU     = "\u0046\u006E\u00A2";
TL_Hemalatha.combo_PDA      = "\u0046\u00F4";
TL_Hemalatha.combo_PLA      = "\u0046\u00FD";
TL_Hemalatha.combo_PHDA     = "\u0046\u006E\u00F4";
TL_Hemalatha.combo_PHLA     = "\u0046\u006E\u00FD";
TL_Hemalatha.combo_BI       = "\u00D5";
TL_Hemalatha.combo_BII      = "\u00D5\u0064";
TL_Hemalatha.combo_BHI      = "\u00D5\u00B3";
TL_Hemalatha.combo_BHII     = "\u00D5\u00B3\u0064";
TL_Hemalatha.combo_MAA      = "\u00AA\u0057";
TL_Hemalatha.combo_MI       = "\u0025\u0056";
TL_Hemalatha.combo_MII      = "\u0025\u0064\u0056";
TL_Hemalatha.combo_MAU      = "\u00AA\u00B0";
TL_Hemalatha.combo_MEELEN   = "\u00AA\u005B\u0056";
TL_Hemalatha.combo_MPOLLU   = "\u00AA\u00B1\u0056";

TL_Hemalatha.combo_YAA      = "\u00B8\u0057";
TL_Hemalatha.combo_YI       = "\u004C\u0056\u0056";
TL_Hemalatha.combo_YII      = "\u004C\u0056\u0057";
TL_Hemalatha.combo_YEELEN   = "\u00B8\u005B\u0056";
TL_Hemalatha.combo_YPOLLU   = "\u00B8\u00BA\u0056";
TL_Hemalatha.combo_RAA      = "\u004C\u0053";
TL_Hemalatha.combo_RI       = "\u004C\u006A";
TL_Hemalatha.combo_RII      = "\u004C\u006B";
TL_Hemalatha.combo_RU       = "\u004C\u0052\u0056";
TL_Hemalatha.combo_RAU      = "\u004C\u005F";
TL_Hemalatha.combo_RO       = "\u004C\u005D";
TL_Hemalatha.combo_ROO      = "\u004C\u005D\u005B";
TL_Hemalatha.combo_REELEN   = "\u004C\u005B";
TL_Hemalatha.combo_RPOLLU   = "\u004C\u0060";
TL_Hemalatha.combo_LI       = "\u00D6";
TL_Hemalatha.combo_LII      = "\u00D6\u0064";               
TL_Hemalatha.combo_VI       = "\u0025";
TL_Hemalatha.combo_VII      = "\u0025\u0064";
TL_Hemalatha.combo_SHI      = "\u0062";
TL_Hemalatha.combo_SHII     = "\u0062\u0064";               

TL_Hemalatha.combo_HAA      = "\u00A5";
TL_Hemalatha.combo_LLI      = "\u00D7";
TL_Hemalatha.combo_LLII     = "\u00D7\u0064";               

TL_Hemalatha.combo_SHRII    = "\u0024";

//Vattulu
TL_Hemalatha.vattu_KA       = "\u00E4";
//TL_Hemalatha.vattu_KHA      = "\u00??";
TL_Hemalatha.vattu_GA       = "\u00E6";
TL_Hemalatha.vattu_GHA      = "\u00E7";
//TL_Hemalatha.vattu_NGA      = "\u00??";

TL_Hemalatha.vattu_CA       = "\u00E8";
TL_Hemalatha.vattu_CHA      = "\u00E8\u00E9";
TL_Hemalatha.vattu_JA       = "\u00EA";
TL_Hemalatha.vattu_JHA      = "\u00EB";
TL_Hemalatha.vattu_NYA      = "\u00EC";

TL_Hemalatha.vattu_TTA      = "\u00ED";
TL_Hemalatha.vattu_TTHA     = "\u00EE";
TL_Hemalatha.vattu_DDA      = "\u00EF";
TL_Hemalatha.vattu_DDHA     = "\u00EF\u00F0";
TL_Hemalatha.vattu_NNA      = "\u00F1";

TL_Hemalatha.vattu_TA       = "\u00F2";
TL_Hemalatha.vattu_THA      = "\u00F3";
TL_Hemalatha.vattu_DA       = "\u00F4";
TL_Hemalatha.vattu_DHA      = "\u00F4\u00F0";
TL_Hemalatha.vattu_NA       = "\u00F5";

TL_Hemalatha.vattu_PA       = "\u00F6";
TL_Hemalatha.vattu_PHA      = "\u00F6\u00E9";
TL_Hemalatha.vattu_BA       = "\u00F7";
TL_Hemalatha.vattu_BHA      = "\u00F7\u00E9";
TL_Hemalatha.vattu_MA       = "\u00F8";

TL_Hemalatha.vattu_YA       = "\u00F9";
TL_Hemalatha.vattu_RA_1     = "\u00FA";
TL_Hemalatha.vattu_RA_2     = "\u00FB";
TL_Hemalatha.vattu_LA       = "\u00FD";
TL_Hemalatha.vattu_VA       = "\u002A";
TL_Hemalatha.vattu_SHA      = "\u002B";
TL_Hemalatha.vattu_SSA      = "\u003C";
TL_Hemalatha.vattu_SA       = "\u003D";
TL_Hemalatha.vattu_HA       = "\u003E";
TL_Hemalatha.vattu_LLA      = "\u00FE";
TL_Hemalatha.vattu_RRA      = "\u00FC";

//Digits
TL_Hemalatha.digit_ZERO     = "\u0030";
TL_Hemalatha.digit_ONE      = "\u0031";
TL_Hemalatha.digit_TWO      = "\u0032";
TL_Hemalatha.digit_THREE    = "\u0033";
TL_Hemalatha.digit_FOUR     = "\u0034";
TL_Hemalatha.digit_FIVE     = "\u0035";
TL_Hemalatha.digit_SIX      = "\u0036";
TL_Hemalatha.digit_SEVEN    = "\u0037";
TL_Hemalatha.digit_EIGHT    = "\u0038";
TL_Hemalatha.digit_NINE     = "\u0039";

//Matches ASCII
TL_Hemalatha.EXCLAM         = "\u0021";
TL_Hemalatha.QTSINGLE       = "\u0027";
TL_Hemalatha.PARENLEFT      = "\u0028";
TL_Hemalatha.PARENRIGT      = "\u0029";
TL_Hemalatha.COMMA          = "\u002C"; 
TL_Hemalatha.PERIOD         = "\u002E";
TL_Hemalatha.SLASH          = "\u002F";
TL_Hemalatha.COLON          = "\u003A";
TL_Hemalatha.SEMICOLON      = "\u003B";
TL_Hemalatha.QUESTION       = "\u003F";

//Does not match ASCII
TL_Hemalatha.extra_QTSINGLE = "\u0022"; 
TL_Hemalatha.HYPHEN         = "\u0063";
TL_Hemalatha.PIPE           = "\u0065";

//Kommu
TL_Hemalatha.misc_TICK_1    = "\u0052";
TL_Hemalatha.misc_TICK_2    = "\u0078";
TL_Hemalatha.misc_TICK_3    = "\u00AB";
TL_Hemalatha.misc_TICK_4    = "\u00CF";

//
TL_Hemalatha.misc_vattu     = "\u00B3";
           

//What are these for?
TL_Hemalatha.misc_UNKNOWN_1  = "\u002D";
TL_Hemalatha.misc_UNKNOWN_2  = "\u0050";
TL_Hemalatha.misc_UNKNOWN_3  = "\u0051";
TL_Hemalatha.misc_UNKNOWN_4  = "\u0069";
TL_Hemalatha.misc_UNKNOWN_5  = "\u0073";
TL_Hemalatha.misc_UNKNOWN_6  = "\u00B6";
TL_Hemalatha.misc_UNKNOWN_7  = "\u00A6";
TL_Hemalatha.misc_UNKNOWN_8  = "\u00BD";
TL_Hemalatha.misc_UNKNOWN_9  = "\u00C1";
//TL_Hemalatha.misc_UNKNOWN_10 = "\u00E1";
TL_Hemalatha.misc_UNKNOWN_11 = "\u00E3";
TL_Hemalatha.misc_UNKNOWN_12 = "\u0023";

TL_Hemalatha.toPadma = new Object();

TL_Hemalatha.toPadma[TL_Hemalatha.candrabindu_1] = Padma.candrabindu;
TL_Hemalatha.toPadma[TL_Hemalatha.candrabindu_2] = Padma.candrabindu;
TL_Hemalatha.toPadma[TL_Hemalatha.avagraha] = Padma.avagraha;
TL_Hemalatha.toPadma[TL_Hemalatha.visarga]  = Padma.visarga;
TL_Hemalatha.toPadma[TL_Hemalatha.virama_1] = Padma.syllbreak;
TL_Hemalatha.toPadma[TL_Hemalatha.virama_2] = Padma.syllbreak;
TL_Hemalatha.toPadma[TL_Hemalatha.virama_3] = Padma.syllbreak;
TL_Hemalatha.toPadma[TL_Hemalatha.virama_4] = Padma.syllbreak;
TL_Hemalatha.toPadma[TL_Hemalatha.virama_5] = Padma.syllbreak;
TL_Hemalatha.toPadma[TL_Hemalatha.anusvara] = Padma.anusvara;

TL_Hemalatha.toPadma[TL_Hemalatha.vowel_A]  = Padma.vowel_A;
TL_Hemalatha.toPadma[TL_Hemalatha.vowel_AA] = Padma.vowel_AA;
TL_Hemalatha.toPadma[TL_Hemalatha.vowel_I]  = Padma.vowel_I;
TL_Hemalatha.toPadma[TL_Hemalatha.vowel_II] = Padma.vowel_II;
TL_Hemalatha.toPadma[TL_Hemalatha.vowel_U]  = Padma.vowel_U;
TL_Hemalatha.toPadma[TL_Hemalatha.vowel_UU] = Padma.vowel_UU;
TL_Hemalatha.toPadma[TL_Hemalatha.vowel_R]  = Padma.vowel_R;
TL_Hemalatha.toPadma[TL_Hemalatha.vowel_E]  = Padma.vowel_E;
TL_Hemalatha.toPadma[TL_Hemalatha.vowel_EE] = Padma.vowel_EE;
TL_Hemalatha.toPadma[TL_Hemalatha.vowel_AI] = Padma.vowel_AI;
TL_Hemalatha.toPadma[TL_Hemalatha.vowel_O]  = Padma.vowel_O;
TL_Hemalatha.toPadma[TL_Hemalatha.vowel_OO] = Padma.vowel_OO;
TL_Hemalatha.toPadma[TL_Hemalatha.vowel_AU] = Padma.vowel_AU;

TL_Hemalatha.toPadma[TL_Hemalatha.consnt_KA]    = Padma.consnt_KA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_KHA_1] = Padma.consnt_KHA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_KHA_2] = Padma.consnt_KHA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_GA]    = Padma.consnt_GA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_GHA] = Padma.consnt_GHA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_NGA] = Padma.consnt_NGA;

TL_Hemalatha.toPadma[TL_Hemalatha.consnt_CA] = Padma.consnt_CA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_CHA] = Padma.consnt_CHA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_JA] = Padma.consnt_JA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_JHA] = Padma.consnt_JHA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_NYA] = Padma.consnt_NYA;

TL_Hemalatha.toPadma[TL_Hemalatha.consnt_TTA_1] = Padma.consnt_TTA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_TTA_2] = Padma.consnt_TTA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_TTHA] = Padma.consnt_TTHA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_DDA] = Padma.consnt_DDA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_DDHA] = Padma.consnt_DDHA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_NNA] = Padma.consnt_NNA;

TL_Hemalatha.toPadma[TL_Hemalatha.consnt_TA] = Padma.consnt_TA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_THA] = Padma.consnt_THA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_DA] = Padma.consnt_DA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_DHA] = Padma.consnt_DHA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_NA] = Padma.consnt_NA;

TL_Hemalatha.toPadma[TL_Hemalatha.consnt_PA]   = Padma.consnt_PA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_PHA]  = Padma.consnt_PHA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_BA_1] = Padma.consnt_BA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_BA_2] = Padma.consnt_BA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_BHA]  = Padma.consnt_BHA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_MA]  = Padma.consnt_MA;

TL_Hemalatha.toPadma[TL_Hemalatha.consnt_YA] = Padma.consnt_YA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_RA] = Padma.consnt_RA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_LA_1] = Padma.consnt_LA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_LA_2] = Padma.consnt_LA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_VA] = Padma.consnt_VA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_SHA] = Padma.consnt_SHA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_SSA_1] = Padma.consnt_SSA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_SSA_2] = Padma.consnt_SSA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_SA_1] = Padma.consnt_SA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_SA_2] = Padma.consnt_SA;

TL_Hemalatha.toPadma[TL_Hemalatha.consnt_HA] = Padma.consnt_HA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_LLA] = Padma.consnt_LLA;
TL_Hemalatha.toPadma[TL_Hemalatha.consnt_RRA] = Padma.consnt_RRA;
TL_Hemalatha.toPadma[TL_Hemalatha.conjct_KSHA] = Padma.consnt_KA + Padma.vattu_SSA;

//Gunintamulu
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_AA_1]  = Padma.vowelsn_AA;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_AA_2]  = Padma.vowelsn_AA;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_AA_3]  = Padma.vowelsn_AA;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_I_1]   = Padma.vowelsn_I;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_I_2]   = Padma.vowelsn_I;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_I_3]   = Padma.vowelsn_I;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_I_4]   = Padma.vowelsn_I;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_II_1]  = Padma.vowelsn_II;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_II_2]  = Padma.vowelsn_II;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_II_3]  = Padma.vowelsn_II;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_II_4]  = Padma.vowelsn_II;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_U_1]   = Padma.vowelsn_U;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_U_2]   = Padma.vowelsn_U;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_U_3]   = Padma.vowelsn_U;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_U_4]   = Padma.vowelsn_U;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_U_5]   = Padma.vowelsn_U;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_UU_1]  = Padma.vowelsn_UU;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_UU_2]  = Padma.vowelsn_UU;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_UU_3]  = Padma.vowelsn_UU;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_UU_4]  = Padma.vowelsn_UU;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_UU_5]  = Padma.vowelsn_UU;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_R]     = Padma.vowelsn_R;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_RR]    = Padma.vowelsn_RR;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_E_1]   = Padma.vowelsn_E;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_E_2]   = Padma.vowelsn_E;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_E_3]   = Padma.vowelsn_E;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_E_4]   = Padma.vowelsn_E;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_E_5]   = Padma.vowelsn_E;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_E_6]   = Padma.vowelsn_E;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_E_7]   = Padma.vowelsn_E;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_E_8]   = Padma.vowelsn_E;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_E_9]   = Padma.vowelsn_E;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_EE_1]  = Padma.vowelsn_EE;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_EE_2]  = Padma.vowelsn_EE;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_O_1]   = Padma.vowelsn_O;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_O_2]   = Padma.vowelsn_O;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_O_3]   = Padma.vowelsn_O;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_O_4]   = Padma.vowelsn_O;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_OO_1]  = Padma.vowelsn_OO;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_OO_2]  = Padma.vowelsn_OO;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_OO_3]  = Padma.vowelsn_OO;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_OO_4]  = Padma.vowelsn_OO;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_AU_1]  = Padma.vowelsn_AU;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_AU_2]  = Padma.vowelsn_AU;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_AU_3]  = Padma.vowelsn_AU;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_AU_4]  = Padma.vowelsn_AU;

TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_EELEN]   = Padma.vowelsn_EELEN;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_AILEN_1] = Padma.vowelsn_AILEN;
TL_Hemalatha.toPadma[TL_Hemalatha.vowelsn_AILEN_2] = Padma.vowelsn_AILEN;

//Special Combinations
TL_Hemalatha.toPadma[TL_Hemalatha.combo_KHI]     = Padma.consnt_KHA + Padma.vowelsn_I;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_KHII]    = Padma.consnt_KHA + Padma.vowelsn_II;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_GHAA]    = Padma.consnt_GHA + Padma.vowelsn_AA;

TL_Hemalatha.toPadma[TL_Hemalatha.combo_CI]      = Padma.consnt_CA + Padma.vowelsn_I;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_CII]     = Padma.consnt_CA + Padma.vowelsn_II;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_CHI]     = Padma.consnt_CHA + Padma.vowelsn_I;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_CHII]    = Padma.consnt_CHA + Padma.vowelsn_II;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_JI]      = Padma.consnt_JA + Padma.vowelsn_I;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_JII]     = Padma.consnt_JA + Padma.vowelsn_II;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_JHAA]    = Padma.consnt_JHA + Padma.vowelsn_AA;

TL_Hemalatha.toPadma[TL_Hemalatha.combo_TI]      = Padma.consnt_TA + Padma.vowelsn_I;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_TII]     = Padma.consnt_TA + Padma.vowelsn_II;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_NI]      = Padma.consnt_NA + Padma.vowelsn_I;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_NII]     = Padma.consnt_NA + Padma.vowelsn_II;

TL_Hemalatha.toPadma[TL_Hemalatha.combo_PAA]     = Padma.consnt_PA + Padma.vowelsn_AA;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_PO]      = Padma.consnt_PA + Padma.vowelsn_O;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_POO]     = Padma.consnt_PA + Padma.vowelsn_OO;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_PAU]     = Padma.consnt_PA + Padma.vowelsn_AU;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_PDA]     = Padma.consnt_PA + Padma.vattu_DA;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_PLA]     = Padma.consnt_PA + Padma.vattu_LA;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_PHDA]    = Padma.consnt_PHA + Padma.vattu_DA;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_PHLA]    = Padma.consnt_PHA + Padma.vattu_LA;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_PHAA]    = Padma.consnt_PHA + Padma.vowelsn_AA;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_PHO]     = Padma.consnt_PHA + Padma.vowelsn_O;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_PHOO]    = Padma.consnt_PHA + Padma.vowelsn_OO;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_PHAU]    = Padma.consnt_PHA + Padma.vowelsn_AU;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_BI]      = Padma.consnt_BA + Padma.vowelsn_I;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_BII]     = Padma.consnt_BA + Padma.vowelsn_II;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_BHI]     = Padma.consnt_BHA + Padma.vowelsn_I;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_BHII]    = Padma.consnt_BHA + Padma.vowelsn_II;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_MAA]     = Padma.consnt_MA + Padma.vowelsn_AA;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_MI]      = Padma.consnt_MA + Padma.vowelsn_I;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_MII]     = Padma.consnt_MA + Padma.vowelsn_II;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_MAU]     = Padma.consnt_MA + Padma.vowelsn_AU;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_MEELEN]  = Padma.consnt_MA + Padma.vowelsn_EELEN;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_MPOLLU]  = Padma.consnt_MA + Padma.syllbreak;

TL_Hemalatha.toPadma[TL_Hemalatha.combo_YAA]     = Padma.consnt_YA + Padma.vowelsn_AA;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_YI]      = Padma.consnt_YA + Padma.vowelsn_I;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_YII]     = Padma.consnt_YA + Padma.vowelsn_II;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_YEELEN]  = Padma.consnt_YA + Padma.vowelsn_EELEN;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_YPOLLU]  = Padma.consnt_YA + Padma.syllbreak;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_RAA]     = Padma.consnt_RA + Padma.vowelsn_AA;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_RI]      = Padma.consnt_RA + Padma.vowelsn_I;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_RII]     = Padma.consnt_RA + Padma.vowelsn_II;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_RU]      = Padma.consnt_RA + Padma.vowelsn_U;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_RAU]     = Padma.consnt_RA + Padma.vowelsn_AU;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_RO]      = Padma.consnt_RA + Padma.vowelsn_O;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_ROO]     = Padma.consnt_RA + Padma.vowelsn_OO;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_REELEN]  = Padma.consnt_RA + Padma.vowelsn_EELEN;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_RPOLLU]  = Padma.consnt_RA + Padma.syllbreak;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_LI]      = Padma.consnt_LA + Padma.vowelsn_I;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_LII]     = Padma.consnt_LA + Padma.vowelsn_II;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_VI]      = Padma.consnt_VA + Padma.vowelsn_I;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_VII]     = Padma.consnt_VA + Padma.vowelsn_II;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_SHI]     = Padma.consnt_SHA + Padma.vowelsn_I;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_SHII]    = Padma.consnt_SHA + Padma.vowelsn_II;

TL_Hemalatha.toPadma[TL_Hemalatha.combo_HAA]     = Padma.consnt_HA + Padma.vowelsn_AA;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_LLI]     = Padma.consnt_LLA + Padma.vowelsn_I;
TL_Hemalatha.toPadma[TL_Hemalatha.combo_LLII]    = Padma.consnt_LLA + Padma.vowelsn_II;

TL_Hemalatha.toPadma[TL_Hemalatha.combo_SHRII]   = Padma.consnt_SHA + Padma.vattu_RA + Padma.vowelsn_II;

//Vattulu
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_KA]      = Padma.vattu_KA;
//TL_Hemalatha.toPadma[TL_Hemalatha.vattu_KHA]     = Padma.vattu_KHA;
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_GA]      = Padma.vattu_GA;
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_GHA]     = Padma.vattu_GHA;
//TL_Hemalatha.toPadma[TL_Hemalatha.vattu_NGA]     = Padma.vattu_NGA;

TL_Hemalatha.toPadma[TL_Hemalatha.vattu_CA]      = Padma.vattu_CA;
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_CHA]     = Padma.vattu_CHA;
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_JA]      = Padma.vattu_JA;
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_JHA]     = Padma.vattu_JHA;
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_NYA]     = Padma.vattu_NYA;

TL_Hemalatha.toPadma[TL_Hemalatha.vattu_TTA]     = Padma.vattu_TTA;
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_TTHA]    = Padma.vattu_TTHA;
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_DDA]     = Padma.vattu_DDA;
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_DDHA]    = Padma.vattu_DDHA;
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_NNA]     = Padma.vattu_NNA;

TL_Hemalatha.toPadma[TL_Hemalatha.vattu_TA]      = Padma.vattu_TA;
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_THA]     = Padma.vattu_THA;
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_DA]      = Padma.vattu_DA;
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_DHA]     = Padma.vattu_DHA;
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_NA]      = Padma.vattu_NA;

TL_Hemalatha.toPadma[TL_Hemalatha.vattu_PA]      = Padma.vattu_PA;
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_PHA]     = Padma.vattu_PHA;
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_BA]      = Padma.vattu_BA;
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_BHA]     = Padma.vattu_BHA;
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_MA]      = Padma.vattu_MA;

TL_Hemalatha.toPadma[TL_Hemalatha.vattu_YA]      = Padma.vattu_YA;
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_RA_1]    = Padma.vattu_RA;
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_RA_2]    = Padma.vattu_RA;
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_LA]      = Padma.vattu_LA;
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_VA]      = Padma.vattu_VA;
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_SHA]     = Padma.vattu_SHA;
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_SSA]     = Padma.vattu_SSA;
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_SA]      = Padma.vattu_SA;
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_HA]      = Padma.vattu_HA;
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_LLA]     = Padma.vattu_LLA;
TL_Hemalatha.toPadma[TL_Hemalatha.vattu_RRA]     = Padma.vattu_RRA;

//Miscellaneous(where it doesn't match ASCII representation)
TL_Hemalatha.toPadma[TL_Hemalatha.extra_QTSINGLE] = TL_Hemalatha.QTSINGLE;
TL_Hemalatha.toPadma[TL_Hemalatha.HYPHEN]         = "-";
TL_Hemalatha.toPadma[TL_Hemalatha.PIPE]           = "|";

TL_Hemalatha.redundantList = new Object();
TL_Hemalatha.redundantList[TL_Hemalatha.misc_TICK_1] = true;
TL_Hemalatha.redundantList[TL_Hemalatha.misc_TICK_2] = true;
TL_Hemalatha.redundantList[TL_Hemalatha.misc_TICK_3] = true;
TL_Hemalatha.redundantList[TL_Hemalatha.misc_TICK_4] = true;
TL_Hemalatha.redundantList[TL_Hemalatha.misc_UNKNOWN_1]  = true;
TL_Hemalatha.redundantList[TL_Hemalatha.misc_UNKNOWN_2]  = true;
TL_Hemalatha.redundantList[TL_Hemalatha.misc_UNKNOWN_3]  = true;
TL_Hemalatha.redundantList[TL_Hemalatha.misc_UNKNOWN_4]  = true;
TL_Hemalatha.redundantList[TL_Hemalatha.misc_UNKNOWN_5]  = true;
TL_Hemalatha.redundantList[TL_Hemalatha.misc_UNKNOWN_6]  = true;
TL_Hemalatha.redundantList[TL_Hemalatha.misc_UNKNOWN_7]  = true;
TL_Hemalatha.redundantList[TL_Hemalatha.misc_UNKNOWN_8]  = true;
TL_Hemalatha.redundantList[TL_Hemalatha.misc_UNKNOWN_9]  = true;
//TL_Hemalatha.redundantList[TL_Hemalatha.misc_UNKNOWN_10] = true;
TL_Hemalatha.redundantList[TL_Hemalatha.misc_UNKNOWN_11] = true;
TL_Hemalatha.redundantList[TL_Hemalatha.misc_UNKNOWN_12] = true;
TL_Hemalatha.redundantList[TL_Hemalatha.vowelsn_E_10] = true;

TL_Hemalatha.prefixList = new Object();
TL_Hemalatha.prefixList[TL_Hemalatha.virama_2]     = true;
TL_Hemalatha.prefixList[TL_Hemalatha.vowelsn_I_3]  = true;
TL_Hemalatha.prefixList[TL_Hemalatha.vowelsn_II_3] = true;
TL_Hemalatha.prefixList[TL_Hemalatha.vowelsn_E_1]  = true;
TL_Hemalatha.prefixList[TL_Hemalatha.vowelsn_E_2]  = true;
TL_Hemalatha.prefixList[TL_Hemalatha.vowelsn_E_3]  = true;
TL_Hemalatha.prefixList[TL_Hemalatha.vowelsn_E_4]  = true;
TL_Hemalatha.prefixList[TL_Hemalatha.vowelsn_E_5]  = true;
TL_Hemalatha.prefixList[TL_Hemalatha.vowelsn_E_6]  = true;
TL_Hemalatha.prefixList[TL_Hemalatha.vowelsn_E_7]  = true;
TL_Hemalatha.prefixList[TL_Hemalatha.vowelsn_E_8]  = true;
TL_Hemalatha.prefixList[TL_Hemalatha.vowelsn_EE_1] = true;
TL_Hemalatha.prefixList[TL_Hemalatha.vowelsn_AILEN_1] = true;
TL_Hemalatha.prefixList[TL_Hemalatha.vattu_RA_1]   = true;

TL_Hemalatha.overloadList = new Object();
TL_Hemalatha.overloadList[TL_Hemalatha.anusvara]    = true;
TL_Hemalatha.overloadList[TL_Hemalatha.vowel_E]     = true;
TL_Hemalatha.overloadList[TL_Hemalatha.consnt_CA]   = true;
TL_Hemalatha.overloadList[TL_Hemalatha.consnt_DDA]  = true;
TL_Hemalatha.overloadList[TL_Hemalatha.consnt_DA]   = true;
TL_Hemalatha.overloadList[TL_Hemalatha.consnt_PA]   = true;
TL_Hemalatha.overloadList[TL_Hemalatha.consnt_PHA]  = true;
TL_Hemalatha.overloadList[TL_Hemalatha.consnt_BA_1] = true;
TL_Hemalatha.overloadList[TL_Hemalatha.consnt_BA_2] = true;
TL_Hemalatha.overloadList[TL_Hemalatha.consnt_RA]   = true;
TL_Hemalatha.overloadList[TL_Hemalatha.consnt_VA]   = true;
TL_Hemalatha.overloadList[TL_Hemalatha.vowelsn_E_9] = true;
TL_Hemalatha.overloadList[TL_Hemalatha.vowelsn_O_1] = true;
TL_Hemalatha.overloadList[TL_Hemalatha.vowelsn_O_3] = true;
TL_Hemalatha.overloadList[TL_Hemalatha.vowelsn_O_4] = true;
TL_Hemalatha.overloadList[TL_Hemalatha.combo_KHI]   = true;
TL_Hemalatha.overloadList[TL_Hemalatha.combo_CI]    = true;
TL_Hemalatha.overloadList[TL_Hemalatha.combo_CHI]   = true;
TL_Hemalatha.overloadList[TL_Hemalatha.combo_TI]    = true;
TL_Hemalatha.overloadList[TL_Hemalatha.combo_NI]    = true;
TL_Hemalatha.overloadList[TL_Hemalatha.combo_PHAA]  = true;
TL_Hemalatha.overloadList[TL_Hemalatha.combo_BI]    = true;
TL_Hemalatha.overloadList[TL_Hemalatha.combo_BHI]   = true;
TL_Hemalatha.overloadList[TL_Hemalatha.combo_LI]    = true;
TL_Hemalatha.overloadList[TL_Hemalatha.combo_VI]    = true;
TL_Hemalatha.overloadList[TL_Hemalatha.combo_VII]   = true;
TL_Hemalatha.overloadList[TL_Hemalatha.combo_SHI]   = true;
TL_Hemalatha.overloadList[TL_Hemalatha.combo_LLI]   = true;
TL_Hemalatha.overloadList[TL_Hemalatha.vattu_CA]    = true;
TL_Hemalatha.overloadList[TL_Hemalatha.vattu_DDA]   = true;
TL_Hemalatha.overloadList[TL_Hemalatha.vattu_DA]    = true;
TL_Hemalatha.overloadList[TL_Hemalatha.vattu_PA]    = true;
TL_Hemalatha.overloadList[TL_Hemalatha.vattu_BA]    = true;
TL_Hemalatha.overloadList["\u0046\u006E"]        = true;
TL_Hemalatha.overloadList["\u0046\u00FD"]        = true;
TL_Hemalatha.overloadList["\u004C\u0052\u0026"]  = true;
TL_Hemalatha.overloadList["\u004C\u0056"]        = true;
TL_Hemalatha.overloadList["\u004C\u005D"]        = true;
TL_Hemalatha.overloadList["\u00AA\u005B"]        = true;
TL_Hemalatha.overloadList["\u00AA\u00B1"]        = true;
TL_Hemalatha.overloadList["\u00B8"]              = true;
TL_Hemalatha.overloadList["\u00B8\u005B"]        = true;
TL_Hemalatha.overloadList["\u00B8\u00BA"]        = true;
TL_Hemalatha.overloadList["\u00CA\u0056"]        = true;

//Terrible hack because this font overloads anusvara and ra
//This will take care of all cases when a vattu follows ra
TL_Hemalatha.insertTalakattuForRaGunintam = function (str)
{
    var output = "", last = null, added = false;
    for(var i = 0; i < str.length; ++i) {
        var cur = str.charAt(i);
        if (last == TL_Hemalatha.anusvara && !added) {
            var val = TL_Hemalatha.lookup(cur);
            if (val != null && Padma.getType(val.charAt(0)) == Padma.type_vattu && !TL_Hemalatha.isPrefixSymbol(cur))
                    output += TL_Hemalatha.misc_TICK_1;
            output += cur;
        }
        else if (cur == TL_Hemalatha.anusvara && last != null && TL_Hemalatha.isPrefixSymbol(last)) {
            val = TL_Hemalatha.lookup(last);
            output += cur;
            if (val == Padma.vowelsn_E) {
                output += TL_Hemalatha.misc_TICK_1;
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

TL_Hemalatha.isRedundant = function (str, prev)
{
    if (str == TL_Hemalatha.misc_TICK_1 && prev == TL_Hemalatha.anusvara)
        return false;
    return TL_Hemalatha.redundantList[str] != null;
}

