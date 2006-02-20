// $Id: Tikkana.js,v 1.10 2006/02/20 21:10:48 vnagarjuna Exp $ -->

//Copyright 2005-2006 Nagarjuna Venna <vnagarjuna@yahoo.com>
//Copyright 2005-2006 Suresh Kolichala <suresh_kolichala@yahoo.com>

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

function Tikkana()
{
}

//The interface every dynamic font encoding should implement
Tikkana.maxLookupLen = 3;
Tikkana.fontFace     = "Tikkana";
Tikkana.displayName  = Tikkana.fontFace;
Tikkana.script       = Padma.script_TELUGU;

Tikkana.lookup = function (str) 
{
    return Tikkana.toPadma[str];
}

Tikkana.isPrefixSymbol = function (str)
{
    return Tikkana.prefixList[str] != null;
}

Tikkana.isOverloaded = function (str)
{
    return Tikkana.overloadList[str] != null;
}

Tikkana.handleTwoPartVowelSigns = function (sign1, sign2)
{
	//alert("sign1 = " + sign1 + " sign2= " + sign2);
    if (sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_AILEN)
        return Padma.vowelsn_AI;
    if (sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_U)
        return Padma.vowelsn_O;
    if (sign2 == Padma.vowelsn_U && sign1 == Padma.vowelsn_E)
        return Padma.vowelsn_O;
    if (sign2 ==  Padma.vowelsn_E && sign1 == Padma.vowelsn_UU)
        return Padma.vowelsn_OO;
    if (sign2 ==  Padma.vowelsn_AA && sign1 == Padma.vowelsn_I)
        return Padma.vowelsn_II;
    return sign1 + sign2;
}

//replace yi with ya + i-guNintamu
Tikkana.preprocessMessage = function (input)
{
    var output = "", last = null;
    for(var i = 0; i < input.length; ++i) {
        var cur = input.charAt(i);
        if (cur == Tikkana.vowelsn_U_3 && last == Tikkana.combo_YA_STEM)
        {
            output += Tikkana.vowelsn_U_3 + Tikkana.vowelsn_I_3; // adding dummy i-karamu for getting YI
        }
        else if (!Tikkana.isRedundant(cur))
        {
            output += cur;
        }
		// copy it into last even if it is redundant.
        last = cur;
    }
    return output;
}

Tikkana.isRedundant = function (str)
{
    return Tikkana.redundantList[str] != null;
}

//Implementation details start here

//Specials
Tikkana.candrabindu    = "\u00FF"; // ara sunna
Tikkana.visarga        = "\u003E";
Tikkana.virama_1       = "\u002A"; // pollu
Tikkana.virama_2       = "\u002B"; // pollu 2 NV
Tikkana.virama_3       = "\u002F"; // pollu 3
Tikkana.avagraha       = "\u003C"; // avagraha NV
Tikkana.anusvara       = "\u003D"; // sunna NV

//Vowels
Tikkana.vowel_A        = "\u0040";  //NV
Tikkana.vowel_AA       = "\u0041";  //NV
Tikkana.vowel_I        = "\u0042";  //NV
Tikkana.vowel_II       = "\u0043";  //NV
Tikkana.vowel_U        = "\u0044";  //NV
Tikkana.vowel_UU       = "\u0045";  //NV
Tikkana.vowel_R        = "\u0046";  //NV
Tikkana.vowel_RR       = "\u0046\u007C";  //NV
Tikkana.vowel_L        = "\u0047";  //NV
Tikkana.vowel_LL       = "\u0047\u007C";  //this is a guess
Tikkana.vowel_E        = "\u0048";  //NV
Tikkana.vowel_EE       = "\u0049";  //NV
Tikkana.vowel_AI       = "\u004A";  //NV
Tikkana.vowel_O        = "\u004B";  //NV
Tikkana.vowel_OO       = "\u004C";  //NV
Tikkana.vowel_AU       = "\u004D";  //NV

//Consonants
Tikkana.consnt_KA      = "\u004E";  //NV
Tikkana.consnt_KHA_1   = "\u004F";  //NV
Tikkana.consnt_KHA_2   = "\u0050";  //NV
Tikkana.consnt_GA      = "\u0051";  //NV
Tikkana.consnt_GHA     = "\u0052";  //NV
Tikkana.consnt_NGA     = "\u0053";  //NV

Tikkana.consnt_CA      = "\u0054";  //NV
Tikkana.consnt_TCH     = "\u003A\u0054"; //NV - ???
Tikkana.consnt_CHA     = "\u0055";  //NV
Tikkana.consnt_JA_1    = "\u0056";  //NV
Tikkana.consnt_JA_2    = "\u0057";  //NV
Tikkana.consnt_TJ      = "\u003A\u0056"; //NV - ???
Tikkana.consnt_JHA     = "\u006D\u0058"; //NV
Tikkana.consnt_NYA     = "\u0059";  //NV

Tikkana.consnt_TTA     = "\u005A";  //NV
Tikkana.consnt_TTHA    = "\u005B";  //NV
Tikkana.consnt_DDA     = "\u005C";  //NV
Tikkana.consnt_DDHA    = "\u005D";  //NV
Tikkana.consnt_NNA     = "\u005E";  //NV

Tikkana.consnt_TA      = "\u005F";  //NV
Tikkana.consnt_THA     = "\u0061";  //NV
Tikkana.consnt_DA      = "\u0062";  //NV
Tikkana.consnt_DHA     = "\u0063";  //NV
Tikkana.consnt_NA      = "\u0064";  //NV

Tikkana.consnt_PA_1    = "\u0065";  //NV
Tikkana.consnt_PA_2    = "\u0066";  //NV
Tikkana.consnt_PHA_1   = "\u0067";  //NV
Tikkana.consnt_PHA_2   = "\u0068";  //NV
Tikkana.consnt_BA_1    = "\u0069";  //NV
Tikkana.consnt_BA_2    = "\u006A";
Tikkana.consnt_BHA     = "\u006B";  //NV
Tikkana.consnt_MA      = "\u0070\u00A8"; //NV

Tikkana.consnt_YA      = "\u006C\u00A8";  //NY
Tikkana.consnt_RA      = "\u006D";  //NV
Tikkana.consnt_LA_1    = "\u006E";  //NV
Tikkana.consnt_LA_2    = "\u006F";  //NV
Tikkana.consnt_VA      = "\u0070";  //NV    
Tikkana.consnt_SHA     = "\u0071";  //NV
Tikkana.consnt_SSA_1   = "\u0072";  //NV
Tikkana.consnt_SSA_2   = "\u0073";  //NV
Tikkana.consnt_SA_1    = "\u0074";  //NV
Tikkana.consnt_SA_2    = "\u0075";               
Tikkana.consnt_HA      = "\u0076";  //NV
Tikkana.consnt_LLA     = "\u0077";  //NV
Tikkana.conjct_KSHA    = "\u0078";  //NV
Tikkana.consnt_RRA     = "\u0079";  //NV

//Gunintamulu
Tikkana.vowelsn_AA_1   = "\u007C";  //NV
Tikkana.vowelsn_AA_2   = "\u007D";  //NV
Tikkana.vowelsn_I_1    = "\u007E";  //NV
Tikkana.vowelsn_I_2    = "\u00A1";               
Tikkana.vowelsn_I_3    = "\u00A2";  //NV
Tikkana.vowelsn_II_1   = "\u00A3";  //NV
Tikkana.vowelsn_II_2   = "\u00A4";
Tikkana.vowelsn_II_3   = "\u00A5";  //NV
Tikkana.vowelsn_U_1    = "\u00A6";               
Tikkana.vowelsn_U_2    = "\u00A7";               
Tikkana.vowelsn_U_3    = "\u00A8";  //NV
Tikkana.vowelsn_UU_1   = "\u00A9";  //NV
Tikkana.vowelsn_UU_2   = "\u00AA";  //NV
Tikkana.vowelsn_UU_3   = "\u00AB";
Tikkana.vowelsn_UU_4   = "\u00A8\u007C";
Tikkana.vowelsn_R      = "\u00AC";  //NV
Tikkana.vowelsn_Ru     = "\u00AE";               
Tikkana.vowelsn_Alu    = "\u00B0";               
Tikkana.vowelsn_E_1    = "\u00B1";  //NV
Tikkana.vowelsn_E_2    = "\u00B2";  //NV
Tikkana.vowelsn_E_3    = "\u00B3";               
Tikkana.vowelsn_EE_1   = "\u00B5";               
Tikkana.vowelsn_EE_2   = "\u00B6";  //NV
Tikkana.vowelsn_EE_3   = "\u00B7";               
//Tikkana.vowelsn_AI_1   = "\u00B9";
//Tikkana.vowelsn_AI_2   = "\u00BA";
Tikkana.vowelsn_O_1    = "\u00BB";               
Tikkana.vowelsn_O_2    = "\u00BC"; //NV
Tikkana.vowelsn_OO_1   = "\u00BD"; //NV
Tikkana.vowelsn_OO_2   = "\u00BE"; //NV
Tikkana.vowelsn_AU_1   = "\u00BF";
Tikkana.vowelsn_AU_2   = "\u00C0";

Tikkana.vowelsn_AILEN_1   = "\u00B9";
Tikkana.vowelsn_AILEN_2   = "\u00BA";

//Special Combinations
Tikkana.combo_CI       = "\u00E7";  //NV
Tikkana.combo_CII      = "\u00E8";
Tikkana.combo_CHI      = "\u00E9";
Tikkana.combo_CHII     = "\u00EA";
Tikkana.combo_JI       = "\u00EB";  //NV
Tikkana.combo_JII      = "\u00EC";               
Tikkana.combo_JU       = "\u00ED";
Tikkana.combo_JUU       = "\u00ED\u007C";

Tikkana.combo_TI       = "\u00EE";  //NV
Tikkana.combo_TII      = "\u00EF";
Tikkana.combo_NI       = "\u00F0";  //NV
Tikkana.combo_NII      = "\u00F1";
Tikkana.combo_BI       = "\u00F2";               
Tikkana.combo_BII      = "\u00F3";
Tikkana.combo_BHI      = "\u00F4";         
Tikkana.combo_BHII     = "\u00F5";         
Tikkana.combo_LI       = "\u00F6";               
Tikkana.combo_LII      = "\u00F7";               
Tikkana.combo_VI       = "\u00F8";               
Tikkana.combo_VII      = "\u00F9";               
Tikkana.combo_SHI      = "\u00FA";  //NV
Tikkana.combo_SHII     = "\u00FB";  //NV
Tikkana.combo_HAA      = "\u00FC";  //NV
Tikkana.combo_LLI      = "\u00FD";
Tikkana.combo_LLII     = "\u00FE";               

Tikkana.combo_MI       = "\u00F8\u00A8";
Tikkana.combo_MII      = "\u00F9\u00A8";
Tikkana.combo_MU       = "\u0070\u00A8\u00A8";
Tikkana.combo_MUU      = "\u0070\u00A8\u00A8\u00A9";
Tikkana.combo_ME       = "\u0070\u00B2\u00A8";
Tikkana.combo_MEE      = "\u0070\u00B6\u00A8";
Tikkana.combo_MAI      = "\u00B9\u0070\u00B2\u00A8";
Tikkana.combo_MO       = "\u0070\u00B2\u00A8\u00A8";
Tikkana.combo_MOO      = "\u0070\u00B2\u00A9";
Tikkana.combo_MAU      = "\u0070\u00A8\u00C0";
Tikkana.combo_MPOLLU   = "\u0070\u002B\u00A8";


Tikkana.combo_YA_STEM  = "\u006C"; // Not included in the lookup table
Tikkana.combo_YU       = "\u006C\u00A8\u00A8";
Tikkana.combo_YUU      = "\u006C\u00A8\u00A8\u00A9";
Tikkana.combo_YE       = "\u006C\u00B2\u00A8";
Tikkana.combo_YEE      = "\u006C\u00B6\u00A8";
Tikkana.combo_YAI      = "\u00B9\u006C\u00B2\u00A8";
Tikkana.combo_YO       = "\u006C\u00B2\u00A8\u00A8";
Tikkana.combo_YOO      = "\u006C\u00B2\u00A9";  //NV
Tikkana.combo_YAU      = "\u006C\u00A8\u00C0";
Tikkana.combo_YPOLLU   = "\u006C\u002B\u00A8";

Tikkana.combo_GHOO   = "\u00b1\u0052\u00a8\u007c";

//Vattulu
Tikkana.vattu_KA       = "\u00C1";  //NV
Tikkana.vattu_KHA      = "\u00C2";
Tikkana.vattu_GA       = "\u00C3"; //KS
Tikkana.vattu_GHA      = "\u00C4"; //
Tikkana.vattu_NGA      = "\u00C5"; //KS             
Tikkana.vattu_CA       = "\u00C6"; //             
Tikkana.vattu_CHA      = "\u00C7";               
Tikkana.vattu_JA       = "\u00C8";
Tikkana.vattu_JHA      = "\u00C9";
Tikkana.vattu_NYA      = "\u00CA"; //KS

Tikkana.vattu_TTA      = "\u00CB";  //NV
Tikkana.vattu_TTHA     = "\u00CC"; //             
Tikkana.vattu_DDA      = "\u00CD"; //             
Tikkana.vattu_DDHA     = "\u00CE";              
Tikkana.vattu_NNA      = "\u00CF";  //NV

Tikkana.vattu_TA       = "\u00D0";  //NV
Tikkana.vattu_THA      = "\u00D1";
Tikkana.vattu_DA       = "\u00D2";  //NV
Tikkana.vattu_DHA      = "\u00D3";  //KS      
Tikkana.vattu_NA       = "\u00D4"; //KS              

Tikkana.vattu_PA       = "\u00D5";              
Tikkana.vattu_PHA      = "\u00D6";               
Tikkana.vattu_BA       = "\u00D7";               
Tikkana.vattu_BHA      = "\u00D8";         
Tikkana.vattu_MA       = "\u00D9";               

Tikkana.vattu_YA       = "\u00DA";  //NV
Tikkana.vattu_RA_1     = "\u00DB";  //NV
Tikkana.vattu_RA_2     = "\u00DC";               
Tikkana.vattu_RA_3     = "\u00DD";               
Tikkana.vattu_LA       = "\u00DE";  //NV
Tikkana.vattu_VA       = "\u00DF";  //KS            
Tikkana.vattu_SHA      = "\u00E0";               
Tikkana.vattu_SSA      = "\u00E1";                
Tikkana.vattu_SA       = "\u00E2";  //NV
Tikkana.vattu_HA       = "\u00E3";
Tikkana.vattu_LLA      = "\u00E4";
Tikkana.vattu_RRA      = "\u00E6";

//Conjuncts
Tikkana.vattu_KSHA     = "\u00E5";
Tikkana.vattu_TRA      = "\u0023";
Tikkana.vattu_TAI      = "\u0024";
Tikkana.vattu_TLA      = "\u0025";
Tikkana.vattu_NGGA     = "\u0026";

//Miscellaneous (punctuation etc)
Tikkana.misc_EXCLAM    = "\u0021";
Tikkana.misc_DIVIDE    = "\u0023";
Tikkana.misc_MULTIPLY  = "\u0024";
Tikkana.misc_QTSINGLE  = "\u0027";
Tikkana.misc_PARENLEFT = "\u0028";
Tikkana.misc_PARENRIGT = "\u0029";
Tikkana.misc_COMMA     = "\u002C";
Tikkana.misc_HYPHEN    = "\u002D";   //I don't know what the significance is, shows up as '-' on Linux, not displayed on Windows in Firefox
Tikkana.misc_PERIOD    = "\u002E";
Tikkana.misc_SLASH     = "\u002F";
Tikkana.misc_COLON     = "\u003A";
Tikkana.misc_SEMICOLON = "\u003B";
Tikkana.misc_QUESTION  = "\u003F";
Tikkana.misc_PIPE      = "\u0049";
Tikkana.misc_ASTERISK  = "\u005B";
Tikkana.misc_PERCENT   = "\u005D";

Tikkana.misc_TICK_1    = "\u007A";  //NV
Tikkana.misc_TICK_2    = "\u007B";  //NV
Tikkana.misc_TICK_3    = "\u0152";               

Tikkana.danda          = "\u00B4";
Tikkana.misc_vattu     = "\u00B5";
Tikkana.danda          = "\u00B6";

Tikkana.toPadma = new Object();

Tikkana.toPadma[Tikkana.candrabindu] = Padma.candrabindu;
Tikkana.toPadma[Tikkana.visarga]  = Padma.visarga;
Tikkana.toPadma[Tikkana.virama_1] = Padma.syllbreak;
Tikkana.toPadma[Tikkana.virama_2] = Padma.syllbreak;
Tikkana.toPadma[Tikkana.virama_3] = Padma.syllbreak;
Tikkana.toPadma[Tikkana.anusvara] = Padma.anusvara;
Tikkana.toPadma[Tikkana.avagraha] = Padma.avagraha;

Tikkana.toPadma[Tikkana.vowel_A] = Padma.vowel_A;
Tikkana.toPadma[Tikkana.vowel_AA] = Padma.vowel_AA;
Tikkana.toPadma[Tikkana.vowel_I] = Padma.vowel_I;
Tikkana.toPadma[Tikkana.vowel_II] = Padma.vowel_II;
Tikkana.toPadma[Tikkana.vowel_U] = Padma.vowel_U;
Tikkana.toPadma[Tikkana.vowel_UU] = Padma.vowel_UU;
Tikkana.toPadma[Tikkana.vowel_R] = Padma.vowel_R;
Tikkana.toPadma[Tikkana.vowel_RR] = Padma.vowel_RR;
Tikkana.toPadma[Tikkana.vowel_L] = Padma.vowel_L;
Tikkana.toPadma[Tikkana.vowel_LL] = Padma.vowel_LL;
Tikkana.toPadma[Tikkana.vowel_E] = Padma.vowel_E;
Tikkana.toPadma[Tikkana.vowel_EE] = Padma.vowel_EE;
Tikkana.toPadma[Tikkana.vowel_AI] = Padma.vowel_AI;
Tikkana.toPadma[Tikkana.vowel_O] = Padma.vowel_O;
Tikkana.toPadma[Tikkana.vowel_OO] = Padma.vowel_OO;
Tikkana.toPadma[Tikkana.vowel_AU] = Padma.vowel_AU;

Tikkana.toPadma[Tikkana.consnt_KA] = Padma.consnt_KA;
Tikkana.toPadma[Tikkana.consnt_KHA_1] = Padma.consnt_KHA;
Tikkana.toPadma[Tikkana.consnt_KHA_2] = Padma.consnt_KHA;
Tikkana.toPadma[Tikkana.consnt_GA] = Padma.consnt_GA;
Tikkana.toPadma[Tikkana.consnt_GHA] = Padma.consnt_GHA;
Tikkana.toPadma[Tikkana.consnt_NGA] = Padma.consnt_NGA;

Tikkana.toPadma[Tikkana.consnt_CA]  = Padma.consnt_CA;
Tikkana.toPadma[Tikkana.consnt_TCH] = Padma.consnt_TCH;
Tikkana.toPadma[Tikkana.consnt_CHA] = Padma.consnt_CHA;
Tikkana.toPadma[Tikkana.consnt_JA_1] = Padma.consnt_JA;
Tikkana.toPadma[Tikkana.consnt_JA_2] = Padma.consnt_JA;
Tikkana.toPadma[Tikkana.consnt_TJ] = Padma.consnt_TJ;
Tikkana.toPadma[Tikkana.consnt_JHA] = Padma.consnt_JHA;
Tikkana.toPadma[Tikkana.consnt_NYA] = Padma.consnt_NYA;

Tikkana.toPadma[Tikkana.consnt_TTA] = Padma.consnt_TTA;
Tikkana.toPadma[Tikkana.consnt_TTHA] = Padma.consnt_TTHA;
Tikkana.toPadma[Tikkana.consnt_DDA] = Padma.consnt_DDA;
Tikkana.toPadma[Tikkana.consnt_DDHA] = Padma.consnt_DDHA;
Tikkana.toPadma[Tikkana.consnt_NNA] = Padma.consnt_NNA;

Tikkana.toPadma[Tikkana.consnt_TA] = Padma.consnt_TA;
Tikkana.toPadma[Tikkana.consnt_THA] = Padma.consnt_THA;
Tikkana.toPadma[Tikkana.consnt_DA] = Padma.consnt_DA;
Tikkana.toPadma[Tikkana.consnt_DHA] = Padma.consnt_DHA;
Tikkana.toPadma[Tikkana.consnt_NA] = Padma.consnt_NA;

Tikkana.toPadma[Tikkana.consnt_PA_1] = Padma.consnt_PA;
Tikkana.toPadma[Tikkana.consnt_PA_2] = Padma.consnt_PA;
Tikkana.toPadma[Tikkana.consnt_PHA_1]  = Padma.consnt_PHA;
Tikkana.toPadma[Tikkana.consnt_PHA_2]  = Padma.consnt_PHA;
Tikkana.toPadma[Tikkana.consnt_BA_1] = Padma.consnt_BA;
Tikkana.toPadma[Tikkana.consnt_BA_2] = Padma.consnt_BA;
Tikkana.toPadma[Tikkana.consnt_BHA]  = Padma.consnt_BHA;
Tikkana.toPadma[Tikkana.consnt_MA] = Padma.consnt_MA;

Tikkana.toPadma[Tikkana.consnt_YA] = Padma.consnt_YA;
Tikkana.toPadma[Tikkana.consnt_RA] = Padma.consnt_RA;
Tikkana.toPadma[Tikkana.consnt_LA_1] = Padma.consnt_LA;
Tikkana.toPadma[Tikkana.consnt_LA_2] = Padma.consnt_LA;
Tikkana.toPadma[Tikkana.consnt_VA] = Padma.consnt_VA;
Tikkana.toPadma[Tikkana.consnt_SHA] = Padma.consnt_SHA;
Tikkana.toPadma[Tikkana.consnt_SSA_1] = Padma.consnt_SSA;
Tikkana.toPadma[Tikkana.consnt_SSA_2] = Padma.consnt_SSA;
Tikkana.toPadma[Tikkana.consnt_SA_1] = Padma.consnt_SA;
Tikkana.toPadma[Tikkana.consnt_SA_2] = Padma.consnt_SA;

Tikkana.toPadma[Tikkana.consnt_HA] = Padma.consnt_HA;
Tikkana.toPadma[Tikkana.consnt_LLA] = Padma.consnt_LLA;
Tikkana.toPadma[Tikkana.consnt_RRA] = Padma.consnt_RRA;
Tikkana.toPadma[Tikkana.conjct_KSHA] = Padma.consnt_KA + Padma.vattu_SSA;;

//Gunintamulu
Tikkana.toPadma[Tikkana.vowelsn_AA_1]  = Padma.vowelsn_AA;
Tikkana.toPadma[Tikkana.vowelsn_AA_2]  = Padma.vowelsn_AA;
Tikkana.toPadma[Tikkana.vowelsn_I_1]   = Padma.vowelsn_I;
Tikkana.toPadma[Tikkana.vowelsn_I_2]   = Padma.vowelsn_I;
Tikkana.toPadma[Tikkana.vowelsn_I_3]   = Padma.vowelsn_I;
Tikkana.toPadma[Tikkana.vowelsn_II_1]  = Padma.vowelsn_II;
Tikkana.toPadma[Tikkana.vowelsn_II_2]  = Padma.vowelsn_II;
Tikkana.toPadma[Tikkana.vowelsn_II_3]  = Padma.vowelsn_II;
Tikkana.toPadma[Tikkana.vowelsn_U_1]   = Padma.vowelsn_U;
Tikkana.toPadma[Tikkana.vowelsn_U_2]   = Padma.vowelsn_U;
Tikkana.toPadma[Tikkana.vowelsn_U_3]   = Padma.vowelsn_U;
Tikkana.toPadma[Tikkana.vowelsn_UU_1]  = Padma.vowelsn_UU;
Tikkana.toPadma[Tikkana.vowelsn_UU_2]  = Padma.vowelsn_UU;
Tikkana.toPadma[Tikkana.vowelsn_UU_3]  = Padma.vowelsn_UU;
Tikkana.toPadma[Tikkana.vowelsn_UU_4]  = Padma.vowelsn_UU;
Tikkana.toPadma[Tikkana.vowelsn_R]     = Padma.vowelsn_R;
Tikkana.toPadma[Tikkana.vowelsn_Ru]    = Padma.vowelsn_RR;
Tikkana.toPadma[Tikkana.vowelsn_E_1]   = Padma.vowelsn_E;
Tikkana.toPadma[Tikkana.vowelsn_E_2]   = Padma.vowelsn_E;
Tikkana.toPadma[Tikkana.vowelsn_E_3]   = Padma.vowelsn_E;
Tikkana.toPadma[Tikkana.vowelsn_EE_1]  = Padma.vowelsn_EE;
Tikkana.toPadma[Tikkana.vowelsn_EE_2]  = Padma.vowelsn_EE;
Tikkana.toPadma[Tikkana.vowelsn_EE_3]  = Padma.vowelsn_EE;
Tikkana.toPadma[Tikkana.vowelsn_AILEN_1]    = Padma.vowelsn_AILEN;
Tikkana.toPadma[Tikkana.vowelsn_AILEN_2]    = Padma.vowelsn_AILEN;
Tikkana.toPadma[Tikkana.vowelsn_O_1]   = Padma.vowelsn_O;
Tikkana.toPadma[Tikkana.vowelsn_O_2]   = Padma.vowelsn_O;
Tikkana.toPadma[Tikkana.vowelsn_OO_1]  = Padma.vowelsn_OO;
Tikkana.toPadma[Tikkana.vowelsn_OO_2]  = Padma.vowelsn_OO;
Tikkana.toPadma[Tikkana.vowelsn_AU_1]  = Padma.vowelsn_AU;
Tikkana.toPadma[Tikkana.vowelsn_AU_2]  = Padma.vowelsn_AU;
Tikkana.toPadma[Tikkana.vowelsn_Alu]   = Padma.vowelsn_L;

//Special Combinations
Tikkana.toPadma[Tikkana.combo_CI]      = Padma.consnt_CA + Padma.vowelsn_I;
Tikkana.toPadma[Tikkana.combo_CII]     = Padma.consnt_CA + Padma.vowelsn_II;
Tikkana.toPadma[Tikkana.combo_CHI]      = Padma.consnt_CHA + Padma.vowelsn_I;
Tikkana.toPadma[Tikkana.combo_CHII]     = Padma.consnt_CHA + Padma.vowelsn_II;
Tikkana.toPadma[Tikkana.combo_JI]      = Padma.consnt_JA + Padma.vowelsn_I;
Tikkana.toPadma[Tikkana.combo_JII]     = Padma.consnt_JA + Padma.vowelsn_II;
Tikkana.toPadma[Tikkana.combo_JU]      = Padma.consnt_JA + Padma.vowelsn_U;
Tikkana.toPadma[Tikkana.combo_JUU]      = Padma.consnt_JA + Padma.vowelsn_UU;

Tikkana.toPadma[Tikkana.combo_TI]      = Padma.consnt_TA + Padma.vowelsn_I;
Tikkana.toPadma[Tikkana.combo_TII]     = Padma.consnt_TA + Padma.vowelsn_II;
Tikkana.toPadma[Tikkana.combo_NI]      = Padma.consnt_NA + Padma.vowelsn_I;
Tikkana.toPadma[Tikkana.combo_NII]     = Padma.consnt_NA + Padma.vowelsn_II;

Tikkana.toPadma[Tikkana.combo_BI]      = Padma.consnt_BA + Padma.vowelsn_I;
Tikkana.toPadma[Tikkana.combo_BII]     = Padma.consnt_BA + Padma.vowelsn_II;
Tikkana.toPadma[Tikkana.combo_BHI]     = Padma.consnt_BHA + Padma.vowelsn_I;
Tikkana.toPadma[Tikkana.combo_BHII]     = Padma.consnt_BHA + Padma.vowelsn_II;
Tikkana.toPadma[Tikkana.combo_MI]      = Padma.consnt_MA + Padma.vowelsn_I;
Tikkana.toPadma[Tikkana.combo_MII]     = Padma.consnt_MA + Padma.vowelsn_II;
Tikkana.toPadma[Tikkana.combo_MU]      = Padma.consnt_MA + Padma.vowelsn_U;
Tikkana.toPadma[Tikkana.combo_MUU]     = Padma.consnt_MA + Padma.vowelsn_UU;
Tikkana.toPadma[Tikkana.combo_ME]      = Padma.consnt_MA + Padma.vowelsn_E;
Tikkana.toPadma[Tikkana.combo_MEE]     = Padma.consnt_MA + Padma.vowelsn_EE;
Tikkana.toPadma[Tikkana.combo_MAI]     = Padma.consnt_MA + Padma.vowelsn_AI;
Tikkana.toPadma[Tikkana.combo_MO]      = Padma.consnt_MA + Padma.vowelsn_O;
Tikkana.toPadma[Tikkana.combo_MOO]     = Padma.consnt_MA + Padma.vowelsn_OO;
Tikkana.toPadma[Tikkana.combo_MAU]     = Padma.consnt_MA + Padma.vowelsn_AU;
Tikkana.toPadma[Tikkana.combo_MPOLLU]  = Padma.consnt_MA + Padma.syllbreak;

Tikkana.toPadma[Tikkana.combo_YE]     = Padma.consnt_YA + Padma.vowelsn_E;
Tikkana.toPadma[Tikkana.combo_YEE]     = Padma.consnt_YA + Padma.vowelsn_EE;
Tikkana.toPadma[Tikkana.combo_YOO]     = Padma.consnt_YA + Padma.vowelsn_OO;
Tikkana.toPadma[Tikkana.combo_YPOLLU]  = Padma.consnt_YA + Padma.syllbreak;
Tikkana.toPadma[Tikkana.combo_LI]      = Padma.consnt_LA + Padma.vowelsn_I;
Tikkana.toPadma[Tikkana.combo_LII]     = Padma.consnt_LA + Padma.vowelsn_II;
Tikkana.toPadma[Tikkana.combo_VI]      = Padma.consnt_VA + Padma.vowelsn_I;
Tikkana.toPadma[Tikkana.combo_VII]     = Padma.consnt_VA + Padma.vowelsn_II;
Tikkana.toPadma[Tikkana.combo_SHI]     = Padma.consnt_SHA + Padma.vowelsn_I;
Tikkana.toPadma[Tikkana.combo_SHII]    = Padma.consnt_SHA + Padma.vowelsn_II;
Tikkana.toPadma[Tikkana.combo_HAA]     = Padma.consnt_HA + Padma.vowelsn_AA;
Tikkana.toPadma[Tikkana.combo_LLI]     = Padma.consnt_LLA + Padma.vowelsn_I;
Tikkana.toPadma[Tikkana.combo_LLII]    = Padma.consnt_LLA + Padma.vowelsn_II;

Tikkana.toPadma[Tikkana.combo_GHOO]    = Padma.consnt_GHA + Padma.vowelsn_OO;

//Tikkana.toPadma[Tikkana.combo_SHRII]   = Padma.consnt_SHA + Padma.vattu_RA + Padma.vowelsn_II;

//Vattulu
Tikkana.toPadma[Tikkana.vattu_KA]      = Padma.vattu_KA;
Tikkana.toPadma[Tikkana.vattu_KHA]     = Padma.vattu_KHA;
Tikkana.toPadma[Tikkana.vattu_GA]      = Padma.vattu_GA;
Tikkana.toPadma[Tikkana.vattu_GHA]     = Padma.vattu_GHA;
Tikkana.toPadma[Tikkana.vattu_NGA]     = Padma.vattu_NGA;
Tikkana.toPadma[Tikkana.vattu_CA]      = Padma.vattu_CA;
Tikkana.toPadma[Tikkana.vattu_CHA]     = Padma.vattu_CHA;
Tikkana.toPadma[Tikkana.vattu_JA]      = Padma.vattu_JA;
Tikkana.toPadma[Tikkana.vattu_JHA]     = Padma.vattu_JHA;
Tikkana.toPadma[Tikkana.vattu_NYA]     = Padma.vattu_NYA;
Tikkana.toPadma[Tikkana.vattu_TTA]     = Padma.vattu_TTA;
Tikkana.toPadma[Tikkana.vattu_TTHA]    = Padma.vattu_TTHA;
Tikkana.toPadma[Tikkana.vattu_DDA]     = Padma.vattu_DDA;
Tikkana.toPadma[Tikkana.vattu_DDHA]    = Padma.vattu_DDHA;
Tikkana.toPadma[Tikkana.vattu_NNA]     = Padma.vattu_NNA;
Tikkana.toPadma[Tikkana.vattu_TA]      = Padma.vattu_TA;
Tikkana.toPadma[Tikkana.vattu_THA]     = Padma.vattu_THA;
Tikkana.toPadma[Tikkana.vattu_DA]      = Padma.vattu_DA;
Tikkana.toPadma[Tikkana.vattu_DHA]     = Padma.vattu_DHA;
Tikkana.toPadma[Tikkana.vattu_NA]      = Padma.vattu_NA;
Tikkana.toPadma[Tikkana.vattu_PA]      = Padma.vattu_PA;
Tikkana.toPadma[Tikkana.vattu_PHA]     = Padma.vattu_PHA;
Tikkana.toPadma[Tikkana.vattu_BA]      = Padma.vattu_BA;
Tikkana.toPadma[Tikkana.vattu_BHA]     = Padma.vattu_BHA;
Tikkana.toPadma[Tikkana.vattu_MA]      = Padma.vattu_MA;
Tikkana.toPadma[Tikkana.vattu_YA]      = Padma.vattu_YA;
Tikkana.toPadma[Tikkana.vattu_RA_1]    = Padma.vattu_RA;
Tikkana.toPadma[Tikkana.vattu_RA_2]    = Padma.vattu_RA;
Tikkana.toPadma[Tikkana.vattu_RA_3]    = Padma.vattu_RA;
Tikkana.toPadma[Tikkana.vattu_LA]      = Padma.vattu_LA;
Tikkana.toPadma[Tikkana.vattu_VA]      = Padma.vattu_VA;
Tikkana.toPadma[Tikkana.vattu_SHA]     = Padma.vattu_SHA;
Tikkana.toPadma[Tikkana.vattu_SSA]     = Padma.vattu_SSA;
Tikkana.toPadma[Tikkana.vattu_SA]      = Padma.vattu_SA;
Tikkana.toPadma[Tikkana.vattu_HA]      = Padma.vattu_HA;
Tikkana.toPadma[Tikkana.vattu_LLA]     = Padma.vattu_LLA;
Tikkana.toPadma[Tikkana.vattu_RRA]     = Padma.vattu_RRA;

//Conjuncts
Tikkana.toPadma[Tikkana.vattu_KSHA]    = Padma.vattu_KA + Padma.vattu_SSA;
Tikkana.toPadma[Tikkana.vattu_TRA]     = Padma.vattu_TA + Padma.vattu_RA;
Tikkana.toPadma[Tikkana.vattu_TAI]     = Padma.vattu_TA +  Padma.vowelsn_AILEN;
Tikkana.toPadma[Tikkana.vattu_TLA]     = Padma.vattu_TA +  Padma.vattu_LA;;
Tikkana.toPadma[Tikkana.vattu_NGGA]    = Padma.vattu_NGA + Padma.vattu_GA;

Tikkana.redundantList = new Object();
Tikkana.redundantList[Tikkana.misc_TICK_1] = true;
Tikkana.redundantList[Tikkana.misc_TICK_2] = true;
Tikkana.redundantList[Tikkana.misc_TICK_3] = true;
Tikkana.redundantList[Tikkana.misc_HYPHEN] = true;

Tikkana.prefixList = new Object();

// Prefix non-vattu symbols
Tikkana.prefixList[Tikkana.vowelsn_I_1]  = true;
Tikkana.prefixList[Tikkana.vowelsn_II_1] = true;
Tikkana.prefixList[Tikkana.vowelsn_E_1]  = true;
Tikkana.prefixList[Tikkana.vowelsn_EE_1] = true;
Tikkana.prefixList[Tikkana.vowelsn_AILEN_1] = true;
Tikkana.prefixList[Tikkana.vowelsn_AILEN_2] = true;
Tikkana.prefixList[Tikkana.virama_1]     = true;

//Prefix vattulu
Tikkana.prefixList[Tikkana.vattu_KHA]    = true;
Tikkana.prefixList[Tikkana.vattu_GA]     = true;
Tikkana.prefixList[Tikkana.vattu_GHA]    = true;
Tikkana.prefixList[Tikkana.vattu_NGA]    = true;
Tikkana.prefixList[Tikkana.vattu_JA]     = true;
Tikkana.prefixList[Tikkana.vattu_JHA]    = true;
Tikkana.prefixList[Tikkana.vattu_NYA]    = true;
Tikkana.prefixList[Tikkana.vattu_TTA]    = true;
Tikkana.prefixList[Tikkana.vattu_TTHA]   = true;
Tikkana.prefixList[Tikkana.vattu_DDA]    = true;
Tikkana.prefixList[Tikkana.vattu_DDHA]   = true;
Tikkana.prefixList[Tikkana.vattu_NNA]    = true;
Tikkana.prefixList[Tikkana.vattu_TA]     = true;
Tikkana.prefixList[Tikkana.vattu_THA]    = true;
Tikkana.prefixList[Tikkana.vattu_DA]     = true;
Tikkana.prefixList[Tikkana.vattu_DHA]    = true;
Tikkana.prefixList[Tikkana.vattu_RA_1]   = true;
Tikkana.prefixList[Tikkana.vattu_RA_2]   = true;
Tikkana.prefixList[Tikkana.vattu_LA]     = true;
Tikkana.prefixList[Tikkana.vattu_SSA]    = true;
Tikkana.prefixList[Tikkana.vattu_SSA]    = true;
Tikkana.prefixList[Tikkana.vattu_HA]     = true;
Tikkana.prefixList[Tikkana.vattu_KSHA]   = true;
Tikkana.prefixList[Tikkana.vattu_RRA]    = true;
Tikkana.prefixList[Tikkana.vattu_TRA]    = true; //KS


Tikkana.overloadList = new Object();
Tikkana.overloadList[Tikkana.vowel_R]   = true;
Tikkana.overloadList[Tikkana.vowel_L]   = true;
Tikkana.overloadList[Tikkana.consnt_RA] = true;
Tikkana.overloadList[Tikkana.consnt_VA] = true;
Tikkana.overloadList[Tikkana.combo_VI]  = true;
Tikkana.overloadList[Tikkana.combo_VII] = true;
Tikkana.overloadList[Tikkana.combo_ME]  = true;
Tikkana.overloadList["\u006C"]          = true;

Tikkana.overloadList["\u0070\u00B2"]    = true; //ve vs me
Tikkana.overloadList["\u0070\u00B6"]    = true; //vE vs mE
Tikkana.overloadList["\u0070\u002B"]    = true; // v^ vs m^

Tikkana.overloadList["\u006C\u00B2"]    = true; //
Tikkana.overloadList["\u006C\u00B6"]    = true;
Tikkana.overloadList["\u006C\u002B"]    = true;

Tikkana.overloadList[Tikkana.combo_JU]    = true;

Tikkana.overloadList[Tikkana.vowelsn_U_3]    = true;
Tikkana.overloadList[Tikkana.misc_COLON] = true;
