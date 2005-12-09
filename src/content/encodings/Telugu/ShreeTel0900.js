// $Id: ShreeTel0900.js,v 1.10 2005/12/09 15:06:47 vnagarjuna Exp $ -->

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

//SHREE-TEL-0900 Telugu

function Shree_Tel_0900()
{
}

//The interface every dynamic font encoding should implement
Shree_Tel_0900.maxLookupLen = 4;
Shree_Tel_0900.fontFace     = "Shree-Tel-0900";
Shree_Tel_0900.displayName  = "Shree Tel 0900";
Shree_Tel_0900.script       = Padma.script_TELUGU;

Shree_Tel_0900.lookup = function (str) 
{
    return Shree_Tel_0900.toPadma[str];
}

Shree_Tel_0900.isPrefixSymbol = function (str)
{
    return Shree_Tel_0900.prefixList[str] != null;
}

Shree_Tel_0900.isOverloaded = function (str)
{
    return Shree_Tel_0900.overloadList[str] != null;
}

Shree_Tel_0900.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if (sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_AILEN)
        return Padma.vowelsn_AI;
    if (sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_AA)
        return Padma.vowelsn_OO;
    return sign1 + sign2;    
}

Shree_Tel_0900.isRedundant = function (str)
{
    return Shree_Tel_0900.redundantList[str] != null;
}

//Implementation details start here

//Specials
Shree_Tel_0900.candrabindu    = "\u00B6";
Shree_Tel_0900.visarga        = "\u0040";
Shree_Tel_0900.anusvara_1     = "\u2026";
Shree_Tel_0900.anusvara_2     = "\u00B7";   //doesn't look like sunnaa because it is filled in, call it sunnaa for now
Shree_Tel_0900.virama_1       = "\u0160";
Shree_Tel_0900.virama_2       = "\u2039";
Shree_Tel_0900.virama_3       = "\u0152";
Shree_Tel_0900.virama_4       = "\u201C";
Shree_Tel_0900.virama_5       = "\u201D";

//Vowels
Shree_Tel_0900.vowel_A        = "\u0041";
Shree_Tel_0900.vowel_AA       = "\u0042";
Shree_Tel_0900.vowel_I        = "\u0043";
Shree_Tel_0900.vowel_II       = "\u0044";               
Shree_Tel_0900.vowel_U        = "\u0045";
Shree_Tel_0900.vowel_UU       = "\u0046";
Shree_Tel_0900.vowel_E        = "\u0047";
Shree_Tel_0900.vowel_EE       = "\u0048";               
Shree_Tel_0900.vowel_R        = "\u00BA\u0024\u0024";
Shree_Tel_0900.vowel_AI_1     = "\u0049";
Shree_Tel_0900.vowel_AI_2     = "\u00ED\u0049";         //This is probably a bug
Shree_Tel_0900.vowel_O        = "\u004A";
Shree_Tel_0900.vowel_OO       = "\u004B";
Shree_Tel_0900.vowel_AU       = "\u004C";

//Consonants
Shree_Tel_0900.consnt_KA      = "\u004D";
Shree_Tel_0900.consnt_KHA_1   = "\u0051";
Shree_Tel_0900.consnt_KHA_2   = "\u0052";
Shree_Tel_0900.consnt_GA      = "\u0056";
Shree_Tel_0900.consnt_GHA     = "\u0153\u0024";
Shree_Tel_0900.consnt_NGA     = "\u005C";

Shree_Tel_0900.consnt_CA      = "\u005E";
Shree_Tel_0900.consnt_CHA     = "\u0062";
Shree_Tel_0900.consnt_JA_1    = "\u0066";
Shree_Tel_0900.consnt_JA_2    = "\u0067";               
Shree_Tel_0900.consnt_JHA     = "\u006D"; 
Shree_Tel_0900.consnt_NYA     = "\u0070";

Shree_Tel_0900.consnt_TTA_1   = "\u0072";
Shree_Tel_0900.consnt_TTA_2   = "\u0073";
Shree_Tel_0900.consnt_TTHA    = "\u0075";
Shree_Tel_0900.consnt_DDA     = "\u0079";
Shree_Tel_0900.consnt_DDHA    = "\u00C9";         
Shree_Tel_0900.consnt_NNA     = "\u00D7";               

Shree_Tel_0900.consnt_TA      = "\u2122";
Shree_Tel_0900.consnt_THA     = "\u00A3";
Shree_Tel_0900.consnt_DA      = "\u00A7";
Shree_Tel_0900.consnt_DHA     = "\u00AB\u00A7";
Shree_Tel_0900.consnt_NA      = "\u00AF";

Shree_Tel_0900.consnt_PA_1    = "\u00B3";               
Shree_Tel_0900.consnt_PA_2    = "\u00B4";               
Shree_Tel_0900.consnt_PHA_1   = "\u0153";
Shree_Tel_0900.consnt_PHA_2   = "\u00B8";         
Shree_Tel_0900.consnt_BA_1    = "\u00BA";               
Shree_Tel_0900.consnt_BA_2    = "\u00BB";
Shree_Tel_0900.consnt_BHA     = "\u00BF";         
Shree_Tel_0900.consnt_MA      = "\u00D0\u0024";

Shree_Tel_0900.consnt_YA      = "\u00C4\u0024";                
Shree_Tel_0900.consnt_RA      = "\u00C6";               
Shree_Tel_0900.consnt_LA_1    = "\u00CB";
Shree_Tel_0900.consnt_LA_2    = "\u00CC";               
Shree_Tel_0900.consnt_VA      = "\u00D0";
Shree_Tel_0900.consnt_SHA     = "\u00D4";               
Shree_Tel_0900.consnt_SSA_1   = "\u00D9";
Shree_Tel_0900.consnt_SSA_2   = "\u00DA";               
Shree_Tel_0900.consnt_SA_1    = "\u00DC";               
Shree_Tel_0900.consnt_SA_2    = "\u00DD";               

Shree_Tel_0900.consnt_HA      = "\u00DF";                
Shree_Tel_0900.consnt_LLA     = "\u00E2";               
Shree_Tel_0900.conjct_KSHA_1  = "\u003C";
Shree_Tel_0900.conjct_KSHA_2  = "\u201E";
Shree_Tel_0900.consnt_RRA     = "\u201A";

//Gunintamulu
Shree_Tel_0900.vowelsn_AA_1   = "\u003E";
Shree_Tel_0900.vowelsn_AA_2   = "\u00E9";                
Shree_Tel_0900.vowelsn_AA_3   = "\u00EA";               
Shree_Tel_0900.vowelsn_AA_4   = "\u00EB";
Shree_Tel_0900.vowelsn_I_1    = "\u00EC";               
Shree_Tel_0900.vowelsn_I_2    = "\u00ED";               
Shree_Tel_0900.vowelsn_II_1   = "\u00EE";               
Shree_Tel_0900.vowelsn_II_2   = "\u00EF";
Shree_Tel_0900.vowelsn_U_1    = "\u0023";
Shree_Tel_0900.vowelsn_U_2    = "\u0024";
Shree_Tel_0900.vowelsn_UU_1   = "\u002A";
Shree_Tel_0900.vowelsn_UU_2   = "\u004E";
Shree_Tel_0900.vowelsn_R      = "\u2013";
Shree_Tel_0900.vowelsn_RR     = "\u2014";
Shree_Tel_0900.vowelsn_E_1    = "\u00F0";               
Shree_Tel_0900.vowelsn_E_2    = "\u00F1";               
Shree_Tel_0900.vowelsn_E_3    = "\u00F2";               
Shree_Tel_0900.vowelsn_EE_1   = "\u00F3";               
Shree_Tel_0900.vowelsn_EE_2   = "\u00F4";               
Shree_Tel_0900.vowelsn_EE_3   = "\u00F5";               
Shree_Tel_0900.vowelsn_O_1    = "\u0178";
Shree_Tel_0900.vowelsn_O_2    = "\u00F6";               
Shree_Tel_0900.vowelsn_O_3    = "\u00F7";               
Shree_Tel_0900.vowelsn_OO_1   = "\u005A";
Shree_Tel_0900.vowelsn_OO_2   = "\u00F8";               
Shree_Tel_0900.vowelsn_OO_3   = "\u00F9";               
Shree_Tel_0900.vowelsn_AU_1   = "\u006F";
Shree_Tel_0900.vowelsn_AU_2   = "\u02DC";
Shree_Tel_0900.vowelsn_AU_3   = "\u00FA";
Shree_Tel_0900.vowelsn_AU_4   = "\u00FB";

Shree_Tel_0900.vowelsn_AILEN_1 = "\u004F";
Shree_Tel_0900.vowelsn_AILEN_2 = "\u2022";


//Special Combinations
Shree_Tel_0900.combo_KHI      = "\u0053";
Shree_Tel_0900.combo_KHII     = "\u0054";
Shree_Tel_0900.combo_GI       = "\u0057";
Shree_Tel_0900.combo_GII      = "\u0058";
Shree_Tel_0900.combo_GHAA     = "\u0153\u002A";

Shree_Tel_0900.combo_CI       = "\u005F";
Shree_Tel_0900.combo_CII      = "\u0060";
Shree_Tel_0900.combo_CHI      = "\u0063";
Shree_Tel_0900.combo_CHII     = "\u0064";
Shree_Tel_0900.combo_JI       = "\u0068";
Shree_Tel_0900.combo_JII      = "\u0069";               
Shree_Tel_0900.combo_JU       = "\u006B";
Shree_Tel_0900.combo_JUU      = "\u006C";               
Shree_Tel_0900.combo_JHAA     = "\u00C6\u006E\u002A";
Shree_Tel_0900.combo_JHI      = "\u00C7\u006E\u0024";
Shree_Tel_0900.combo_JHII     = "\u00C8\u006E\u0024";
Shree_Tel_0900.combo_JHEE     = "\u00C6\u00F3\u006E\u0024";

Shree_Tel_0900.combo_TTHI     = "\u0076";
Shree_Tel_0900.combo_TTHII    = "\u0077";

Shree_Tel_0900.combo_TI       = "\u2020";
Shree_Tel_0900.combo_TII      = "\u00A1";
Shree_Tel_0900.combo_THI      = "\u00A4";
Shree_Tel_0900.combo_THII     = "\u00A5";
Shree_Tel_0900.combo_DI       = "\u00A8";
Shree_Tel_0900.combo_DII      = "\u00A9";               
Shree_Tel_0900.combo_DHI      = "\u00AB\u00A8";
Shree_Tel_0900.combo_DHII     = "\u00AB\u00A9";
Shree_Tel_0900.combo_NI       = "\u00B0";
Shree_Tel_0900.combo_NII      = "\u00B1";

Shree_Tel_0900.combo_BI       = "\u00BC";               
Shree_Tel_0900.combo_BII      = "\u00BD";
Shree_Tel_0900.combo_BHI      = "\u00C0";         
Shree_Tel_0900.combo_BHII     = "\u00C1";         
Shree_Tel_0900.combo_MAA      = "\u00D0\u002A";                
Shree_Tel_0900.combo_MI       = "\u00D1\u0024";                
Shree_Tel_0900.combo_MII      = "\u00D2\u0024";                
Shree_Tel_0900.combo_ME       = "\u00D0\u00F0\u0024";                
Shree_Tel_0900.combo_MEE      = "\u00D0\u00F3\u0024";                
Shree_Tel_0900.combo_MO       = "\u00D0\u00F0\u0024\u0024";
Shree_Tel_0900.combo_MOO      = "\u00D0\u00F0\u002A";
Shree_Tel_0900.combo_MAU      = "\u00D0\u02DC";
Shree_Tel_0900.combo_MPOLLU   = "\u00D0\u0152\u0024";

Shree_Tel_0900.combo_YAA      = "\u00C4\u002A";
Shree_Tel_0900.combo_YI       = "\u00C6\u0024\u0024";
Shree_Tel_0900.combo_YII      = "\u00C6\u0024\u002A";
Shree_Tel_0900.combo_YE       = "\u00C4\u00F1\u0024";
Shree_Tel_0900.combo_YEE      = "\u00C4\u00F4\u0024";
Shree_Tel_0900.combo_YO       = "\u00C4\u00F1\u0024\u0024";
Shree_Tel_0900.combo_YOO      = "\u00C4\u00F1\u002A";
Shree_Tel_0900.combo_YPOLLU   = "\u00C4\u0152\u0024";
Shree_Tel_0900.combo_RI       = "\u00C7";               
Shree_Tel_0900.combo_RII      = "\u00C8";               
Shree_Tel_0900.combo_LI       = "\u00CD";               
Shree_Tel_0900.combo_LII      = "\u00CE";               
Shree_Tel_0900.combo_VI       = "\u00D1";                
Shree_Tel_0900.combo_VII      = "\u00D2";               
Shree_Tel_0900.combo_SHI      = "\u00D5";
Shree_Tel_0900.combo_SHII     = "\u00D6";               

Shree_Tel_0900.combo_HAA      = "\u00E0";   
Shree_Tel_0900.combo_LLI      = "\u00E3";
Shree_Tel_0900.combo_LLII     = "\u00E4";               

Shree_Tel_0900.combo_SHRII    = "\u007D";

//Vattulu
Shree_Tel_0900.vattu_KA       = "\u0050";
Shree_Tel_0900.vattu_KHA      = "\u0055";
Shree_Tel_0900.vattu_GA       = "\u0059";
Shree_Tel_0900.vattu_GHA      = "\u0192";
Shree_Tel_0900.vattu_NGA      = "\u005D";

Shree_Tel_0900.vattu_CA       = "\u0061";               
Shree_Tel_0900.vattu_CHA      = "\u0065";
Shree_Tel_0900.vattu_JA       = "\u006A";
Shree_Tel_0900.vattu_NYA      = "\u0071";

Shree_Tel_0900.vattu_TTA      = "\u0074";
Shree_Tel_0900.vattu_TTHA     = "\u0078";
Shree_Tel_0900.vattu_DDA      = "\u007A";
Shree_Tel_0900.vattu_DDHA     = "\u007C";
Shree_Tel_0900.vattu_NNA      = "\u007E";

Shree_Tel_0900.vattu_TA       = "\u00A2";
Shree_Tel_0900.vattu_THA      = "\u00A6";
Shree_Tel_0900.vattu_DA       = "\u00AA";
Shree_Tel_0900.vattu_DHA      = "\u00AE";
Shree_Tel_0900.vattu_NA       = "\u00B2";

Shree_Tel_0900.vattu_PA       = "\u00B5";               
Shree_Tel_0900.vattu_PHA      = "\u00B9";         
Shree_Tel_0900.vattu_BA       = "\u00BE";               
Shree_Tel_0900.vattu_BHA      = "\u00C2";          
Shree_Tel_0900.vattu_MA       = "\u00C3";               

Shree_Tel_0900.vattu_YA       = "\u00C5";               
Shree_Tel_0900.vattu_RA_1     = "\u005B";
Shree_Tel_0900.vattu_RA_2     = "\u007B";
Shree_Tel_0900.vattu_LA       = "\u00CF";               
Shree_Tel_0900.vattu_VA       = "\u00D3";               
Shree_Tel_0900.vattu_SHA      = "\u00D8";               
Shree_Tel_0900.vattu_SSA      = "\u00DB";
Shree_Tel_0900.vattu_SA       = "\u00DE";               
Shree_Tel_0900.vattu_HA       = "\u00E1";
Shree_Tel_0900.vattu_LLA      = "\u00E5";
Shree_Tel_0900.vattu_RRA      = "\u00CA";

Shree_Tel_0900.vattu_SSMA     = "\u2021";
Shree_Tel_0900.vattu_TRA      = "\u02C6";
Shree_Tel_0900.vattu_TTRA     = "\u2030";
Shree_Tel_0900.vattu_PU       = "\u0161";

//Digits
Shree_Tel_0900.digit_ZERO     = "\u0030";
Shree_Tel_0900.digit_ONE      = "\u0031";
Shree_Tel_0900.digit_TWO      = "\u0032";
Shree_Tel_0900.digit_THREE    = "\u0033";
Shree_Tel_0900.digit_FOUR     = "\u0034";
Shree_Tel_0900.digit_FIVE     = "\u0035";
Shree_Tel_0900.digit_SIX      = "\u0036";
Shree_Tel_0900.digit_SEVEN    = "\u0037";
Shree_Tel_0900.digit_EIGHT    = "\u0038";
Shree_Tel_0900.digit_NINE     = "\u0039";

//Matches ASCII
Shree_Tel_0900.EXCLAM         = "\u0021";
Shree_Tel_0900.PERCENT        = "\u0025";
Shree_Tel_0900.QTSINGLE       = "\u0027";
Shree_Tel_0900.PARENLEFT      = "\u0028";
Shree_Tel_0900.PARENRIGT      = "\u0029";
Shree_Tel_0900.PLUS           = "\u002B";
Shree_Tel_0900.COMMA          = "\u002C";
Shree_Tel_0900.PERIOD         = "\u002E";
Shree_Tel_0900.SLASH          = "\u002F";
Shree_Tel_0900.COLON          = "\u003A";
Shree_Tel_0900.SEMICOLON      = "\u003B";
Shree_Tel_0900.EQUALS         = "\u003D";
Shree_Tel_0900.QUESTION       = "\u003F";

//Does not match ASCII
Shree_Tel_0900.extra_QTSINGLE = "\u0022";
Shree_Tel_0900.extra_DBLQT    = "\u0022\u0022";
Shree_Tel_0900.HYPHEN         = "\u0026";
Shree_Tel_0900.ASTERISK       = "\u2019";

//Danda and double danda
Shree_Tel_0900.misc_danda     = "\u2018";
Shree_Tel_0900.misc_ddanda    = "\u2018\u2018";

//Kommu
Shree_Tel_0900.misc_TICK_1    = "\u00E6";
Shree_Tel_0900.misc_TICK_2    = "\u00E7";               
Shree_Tel_0900.misc_TICK_3    = "\u00E8";

//
Shree_Tel_0900.misc_vattu     = "\u00AB";
           

//What are these for?
Shree_Tel_0900.misc_UNKNOWN_1 = "\u002D";
Shree_Tel_0900.misc_UNKNOWN_2 = "\u00FC";
Shree_Tel_0900.misc_UNKNOWN_3 = "\u00FD";
Shree_Tel_0900.misc_UNKNOWN_4 = "\u00FE";
Shree_Tel_0900.misc_UNKNOWN_5 = "\u00FF";
Shree_Tel_0900.misc_UNKNOWN_6 = "\u203A";

Shree_Tel_0900.toPadma = new Object();

Shree_Tel_0900.toPadma[Shree_Tel_0900.candrabindu] = Padma.candrabindu;
Shree_Tel_0900.toPadma[Shree_Tel_0900.visarga]  = Padma.visarga;
Shree_Tel_0900.toPadma[Shree_Tel_0900.virama_1] = Padma.syllbreak;
Shree_Tel_0900.toPadma[Shree_Tel_0900.virama_2] = Padma.syllbreak;
Shree_Tel_0900.toPadma[Shree_Tel_0900.virama_3] = Padma.syllbreak;
Shree_Tel_0900.toPadma[Shree_Tel_0900.virama_4] = Padma.syllbreak;
Shree_Tel_0900.toPadma[Shree_Tel_0900.virama_5] = Padma.syllbreak;
Shree_Tel_0900.toPadma[Shree_Tel_0900.anusvara_1] = Padma.anusvara;
Shree_Tel_0900.toPadma[Shree_Tel_0900.anusvara_2] = Padma.anusvara;

Shree_Tel_0900.toPadma[Shree_Tel_0900.vowel_A] = Padma.vowel_A;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowel_AA] = Padma.vowel_AA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowel_I] = Padma.vowel_I;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowel_II] = Padma.vowel_II;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowel_U] = Padma.vowel_U;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowel_UU] = Padma.vowel_UU;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowel_E] = Padma.vowel_E;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowel_EE] = Padma.vowel_EE;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowel_R] = Padma.vowel_R;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowel_AI_1] = Padma.vowel_AI;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowel_AI_2] = Padma.vowel_AI;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowel_O] = Padma.vowel_O;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowel_OO] = Padma.vowel_OO;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowel_AU] = Padma.vowel_AU;

Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_KA] = Padma.consnt_KA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_KHA_1] = Padma.consnt_KHA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_KHA_2] = Padma.consnt_KHA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_GA] = Padma.consnt_GA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_GHA] = Padma.consnt_GHA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_NGA] = Padma.consnt_NGA;

Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_CA] = Padma.consnt_CA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_CHA] = Padma.consnt_CHA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_JA_1] = Padma.consnt_JA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_JA_2] = Padma.consnt_JA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_JHA] = Padma.consnt_JHA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_NYA] = Padma.consnt_NYA;

Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_TTA_1] = Padma.consnt_TTA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_TTA_2] = Padma.consnt_TTA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_TTHA] = Padma.consnt_TTHA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_DDA] = Padma.consnt_DDA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_DDHA] = Padma.consnt_DDHA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_NNA] = Padma.consnt_NNA;

Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_TA] = Padma.consnt_TA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_THA] = Padma.consnt_THA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_DA] = Padma.consnt_DA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_DHA] = Padma.consnt_DHA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_NA] = Padma.consnt_NA;

Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_PA_1] = Padma.consnt_PA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_PA_2] = Padma.consnt_PA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_PHA_1]  = Padma.consnt_PHA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_PHA_2]  = Padma.consnt_PHA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_BA_1] = Padma.consnt_BA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_BA_2] = Padma.consnt_BA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_BHA]  = Padma.consnt_BHA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_MA]  = Padma.consnt_MA;

Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_YA] = Padma.consnt_YA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_RA] = Padma.consnt_RA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_LA_1] = Padma.consnt_LA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_LA_2] = Padma.consnt_LA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_VA] = Padma.consnt_VA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_SHA] = Padma.consnt_SHA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_SSA_1] = Padma.consnt_SSA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_SSA_2] = Padma.consnt_SSA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_SA_1] = Padma.consnt_SA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_SA_2] = Padma.consnt_SA;

Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_HA] = Padma.consnt_HA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_LLA] = Padma.consnt_LLA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.consnt_RRA] = Padma.consnt_RRA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.conjct_KSHA_1] = Padma.consnt_KA + Padma.vattu_SSA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.conjct_KSHA_2] = Padma.consnt_KA + Padma.vattu_SSA;

//Gunintamulu
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_AA_1]  = Padma.vowelsn_AA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_AA_2]  = Padma.vowelsn_AA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_AA_3]  = Padma.vowelsn_AA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_AA_4]  = Padma.vowelsn_AA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_I_1]   = Padma.vowelsn_I;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_I_2]   = Padma.vowelsn_I;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_II_1]  = Padma.vowelsn_II;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_II_2]  = Padma.vowelsn_II;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_U_1]   = Padma.vowelsn_U;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_U_2]   = Padma.vowelsn_U;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_UU_1]  = Padma.vowelsn_UU;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_UU_2]  = Padma.vowelsn_UU;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_R]     = Padma.vowelsn_R;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_RR]    = Padma.vowelsn_RR;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_E_1]   = Padma.vowelsn_E;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_E_2]   = Padma.vowelsn_E;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_E_3]   = Padma.vowelsn_E;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_EE_1]  = Padma.vowelsn_EE;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_EE_2]  = Padma.vowelsn_EE;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_EE_3]  = Padma.vowelsn_EE;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_O_1]   = Padma.vowelsn_O;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_O_2]   = Padma.vowelsn_O;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_O_3]   = Padma.vowelsn_O;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_OO_1]  = Padma.vowelsn_OO;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_OO_2]  = Padma.vowelsn_OO;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_OO_3]  = Padma.vowelsn_OO;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_AU_1]  = Padma.vowelsn_AU;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_AU_2]  = Padma.vowelsn_AU;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_AU_3]  = Padma.vowelsn_AU;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_AU_4]  = Padma.vowelsn_AU;

Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_AILEN_1] = Padma.vowelsn_AILEN;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vowelsn_AILEN_2] = Padma.vowelsn_AILEN;

//Special Combinations
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_KHI]     = Padma.consnt_KHA + Padma.vowelsn_I;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_KHII]    = Padma.consnt_KHA + Padma.vowelsn_II;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_GI]      = Padma.consnt_GA + Padma.vowelsn_I;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_GII]     = Padma.consnt_GA + Padma.vowelsn_II;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_GHAA]    = Padma.consnt_GHA + Padma.vowelsn_AA;

Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_CI]      = Padma.consnt_CA + Padma.vowelsn_I;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_CII]     = Padma.consnt_CA + Padma.vowelsn_II;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_CHI]     = Padma.consnt_CHA + Padma.vowelsn_I;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_CHII]    = Padma.consnt_CHA + Padma.vowelsn_II;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_JI]      = Padma.consnt_JA + Padma.vowelsn_I;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_JII]     = Padma.consnt_JA + Padma.vowelsn_II;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_JU]      = Padma.consnt_JA + Padma.vowelsn_U;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_JUU]     = Padma.consnt_JA + Padma.vowelsn_UU;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_JHAA]    = Padma.consnt_JHA + Padma.vowelsn_AA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_JHI]     = Padma.consnt_JHA + Padma.vowelsn_I;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_JHII]    = Padma.consnt_JHA + Padma.vowelsn_II;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_JHEE]    = Padma.consnt_JHA + Padma.vowelsn_EE;

Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_TTHI]     = Padma.consnt_TTHA + Padma.vowelsn_I;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_TTHII]    = Padma.consnt_TTHA + Padma.vowelsn_II;

Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_TI]      = Padma.consnt_TA + Padma.vowelsn_I;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_TII]     = Padma.consnt_TA + Padma.vowelsn_II;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_THI]     = Padma.consnt_THA + Padma.vowelsn_I;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_THII]    = Padma.consnt_THA + Padma.vowelsn_II;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_DI]      = Padma.consnt_DA + Padma.vowelsn_I;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_DII]     = Padma.consnt_DA + Padma.vowelsn_II;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_DHI]     = Padma.consnt_DHA + Padma.vowelsn_I;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_DHII]    = Padma.consnt_DHA + Padma.vowelsn_II;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_NI]      = Padma.consnt_NA + Padma.vowelsn_I;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_NII]     = Padma.consnt_NA + Padma.vowelsn_II;

Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_BI]      = Padma.consnt_BA + Padma.vowelsn_I;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_BII]     = Padma.consnt_BA + Padma.vowelsn_II;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_BHI]     = Padma.consnt_BHA + Padma.vowelsn_I;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_BHII]    = Padma.consnt_BHA + Padma.vowelsn_II;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_MAA]     = Padma.consnt_MA + Padma.vowelsn_AA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_MI]      = Padma.consnt_MA + Padma.vowelsn_I;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_MII]     = Padma.consnt_MA + Padma.vowelsn_II;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_ME]      = Padma.consnt_MA + Padma.vowelsn_E;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_MEE]     = Padma.consnt_MA + Padma.vowelsn_EE;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_MO]      = Padma.consnt_MA + Padma.vowelsn_O;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_MOO]     = Padma.consnt_MA + Padma.vowelsn_OO;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_MAU]     = Padma.consnt_MA + Padma.vowelsn_AU;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_MPOLLU]  = Padma.consnt_MA + Padma.syllbreak;

Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_YAA]     = Padma.consnt_YA + Padma.vowelsn_AA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_YI]      = Padma.consnt_YA + Padma.vowelsn_I;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_YII]     = Padma.consnt_YA + Padma.vowelsn_II;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_YE]      = Padma.consnt_YA + Padma.vowelsn_E;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_YEE]     = Padma.consnt_YA + Padma.vowelsn_EE;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_YO]      = Padma.consnt_YA + Padma.vowelsn_O;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_YOO]     = Padma.consnt_YA + Padma.vowelsn_OO;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_YPOLLU]  = Padma.consnt_YA + Padma.syllbreak;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_RI]      = Padma.consnt_RA + Padma.vowelsn_I;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_RII]     = Padma.consnt_RA + Padma.vowelsn_II;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_LI]      = Padma.consnt_LA + Padma.vowelsn_I;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_LII]     = Padma.consnt_LA + Padma.vowelsn_II;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_VI]      = Padma.consnt_VA + Padma.vowelsn_I;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_VII]     = Padma.consnt_VA + Padma.vowelsn_II;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_SHI]     = Padma.consnt_SHA + Padma.vowelsn_I;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_SHII]    = Padma.consnt_SHA + Padma.vowelsn_II;

Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_HAA]     = Padma.consnt_HA + Padma.vowelsn_AA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_LLI]     = Padma.consnt_LLA + Padma.vowelsn_I;
Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_LLII]    = Padma.consnt_LLA + Padma.vowelsn_II;

Shree_Tel_0900.toPadma[Shree_Tel_0900.combo_SHRII]   = Padma.consnt_SHA + Padma.vattu_RA + Padma.vowelsn_II;

//Vattulu
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_KA]      = Padma.vattu_KA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_KHA]     = Padma.vattu_KHA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_GA]      = Padma.vattu_GA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_GHA]     = Padma.vattu_GHA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_NGA]     = Padma.vattu_NGA;

Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_CA]      = Padma.vattu_CA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_CHA]     = Padma.vattu_CHA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_JA]      = Padma.vattu_JA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_NYA]     = Padma.vattu_NYA;

Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_TTA]     = Padma.vattu_TTA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_TTHA]    = Padma.vattu_TTHA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_DDA]     = Padma.vattu_DDA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_DDHA]    = Padma.vattu_DDHA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_NNA]     = Padma.vattu_NNA;

Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_TA]      = Padma.vattu_TA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_THA]     = Padma.vattu_THA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_DA]      = Padma.vattu_DA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_DHA]     = Padma.vattu_DHA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_NA]      = Padma.vattu_NA;

Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_PA]      = Padma.vattu_PA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_PHA]     = Padma.vattu_PHA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_BA]      = Padma.vattu_BA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_BHA]     = Padma.vattu_BHA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_MA]      = Padma.vattu_MA;

Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_YA]      = Padma.vattu_YA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_RA_1]    = Padma.vattu_RA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_RA_2]    = Padma.vattu_RA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_LA]      = Padma.vattu_LA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_VA]      = Padma.vattu_VA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_SHA]     = Padma.vattu_SHA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_SSA]     = Padma.vattu_SSA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_SA]      = Padma.vattu_SA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_HA]      = Padma.vattu_HA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_LLA]     = Padma.vattu_LLA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_RRA]     = Padma.vattu_RRA;

//Conjuncts
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_SSMA]    = Padma.vattu_SSA + Padma.vattu_MA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_TRA]     = Padma.vattu_TA + Padma.vattu_RA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_TTRA]    = Padma.vattu_TTA + Padma.vattu_RA;
Shree_Tel_0900.toPadma[Shree_Tel_0900.vattu_PU]      = Padma.vattu_PA + Padma.vowelsn_U;

//Miscellaneous(where it doesn't match ASCII representation)
Shree_Tel_0900.toPadma[Shree_Tel_0900.extra_QTSINGLE] = Shree_Tel_0900.QTSINGLE;
Shree_Tel_0900.toPadma[Shree_Tel_0900.extra_DBLQT]    = '"';
Shree_Tel_0900.toPadma[Shree_Tel_0900.HYPHEN]         = "-";
Shree_Tel_0900.toPadma[Shree_Tel_0900.ASTERISK]       = "*";

Shree_Tel_0900.toPadma[Shree_Tel_0900.misc_danda]     = Padma.danda;
Shree_Tel_0900.toPadma[Shree_Tel_0900.misc_ddanda]    = Padma.ddanda;

Shree_Tel_0900.redundantList = new Object();
Shree_Tel_0900.redundantList[Shree_Tel_0900.misc_TICK_1] = true;
Shree_Tel_0900.redundantList[Shree_Tel_0900.misc_TICK_2] = true;
Shree_Tel_0900.redundantList[Shree_Tel_0900.misc_TICK_3] = true;
Shree_Tel_0900.redundantList[Shree_Tel_0900.misc_UNKNOWN_1] = true;
Shree_Tel_0900.redundantList[Shree_Tel_0900.misc_UNKNOWN_2] = true;
Shree_Tel_0900.redundantList[Shree_Tel_0900.misc_UNKNOWN_3] = true;
Shree_Tel_0900.redundantList[Shree_Tel_0900.misc_UNKNOWN_4] = true;
Shree_Tel_0900.redundantList[Shree_Tel_0900.misc_UNKNOWN_5] = true;
Shree_Tel_0900.redundantList[Shree_Tel_0900.misc_UNKNOWN_6] = true;

Shree_Tel_0900.prefixList = new Object();
Shree_Tel_0900.prefixList[Shree_Tel_0900.virama_2]     = true;
Shree_Tel_0900.prefixList[Shree_Tel_0900.vowelsn_I_2]  = true;
Shree_Tel_0900.prefixList[Shree_Tel_0900.vowelsn_II_2] = true;
Shree_Tel_0900.prefixList[Shree_Tel_0900.vowelsn_E_3]  = true;
Shree_Tel_0900.prefixList[Shree_Tel_0900.vowelsn_EE_3] = true;
Shree_Tel_0900.prefixList[Shree_Tel_0900.vattu_RA_2]   = true;

Shree_Tel_0900.overloadList = new Object();
Shree_Tel_0900.overloadList[Shree_Tel_0900.vowelsn_I_2]  = true;
Shree_Tel_0900.overloadList[Shree_Tel_0900.consnt_PHA_1] = true;
Shree_Tel_0900.overloadList[Shree_Tel_0900.consnt_BA_1]  = true;
Shree_Tel_0900.overloadList[Shree_Tel_0900.consnt_VA]    = true;
Shree_Tel_0900.overloadList[Shree_Tel_0900.consnt_RA]    = true;
Shree_Tel_0900.overloadList[Shree_Tel_0900.combo_RI]     = true;
Shree_Tel_0900.overloadList[Shree_Tel_0900.combo_RII]    = true;
Shree_Tel_0900.overloadList[Shree_Tel_0900.combo_VI]     = true;
Shree_Tel_0900.overloadList[Shree_Tel_0900.combo_VII]    = true;
Shree_Tel_0900.overloadList[Shree_Tel_0900.misc_vattu]   = true;
Shree_Tel_0900.overloadList["\u00BA\u0024"]              = true;
Shree_Tel_0900.overloadList["\u00D0\u00F0"]              = true;
Shree_Tel_0900.overloadList["\u00D0\u00F0\u0024"]        = true;
Shree_Tel_0900.overloadList["\u00D0\u00F3"]              = true;
Shree_Tel_0900.overloadList["\u00D0\u0152"]              = true;
Shree_Tel_0900.overloadList["\u00C4"]                    = true;
Shree_Tel_0900.overloadList["\u00C4\u00F1"]              = true;
Shree_Tel_0900.overloadList["\u00C4\u00F1\u0024"]        = true;
Shree_Tel_0900.overloadList["\u00C4\u00F4"]              = true;
Shree_Tel_0900.overloadList["\u00C4\u0152"]              = true;
Shree_Tel_0900.overloadList["\u00C6\u0024"]              = true;
Shree_Tel_0900.overloadList["\u00C6\u006E"]              = true;
Shree_Tel_0900.overloadList["\u00C6\u00F3"]              = true;
Shree_Tel_0900.overloadList["\u00C6\u00F3\u006E"]        = true;
Shree_Tel_0900.overloadList["\u00C7\u006E"]              = true;
Shree_Tel_0900.overloadList["\u00C8\u006E"]              = true;
Shree_Tel_0900.overloadList[Shree_Tel_0900.extra_QTSINGLE]  = true;
Shree_Tel_0900.overloadList[Shree_Tel_0900.misc_danda]   = true;

