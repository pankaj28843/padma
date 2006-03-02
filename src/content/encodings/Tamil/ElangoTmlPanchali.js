// $Id: ElangoTmlPanchali.js,v 1.8 2006/03/02 23:14:39 vnagarjuna Exp $ -->

//Copyright 2005-2006 Nagarjuna Venna <vnagarjuna@yahoo.com>

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

function Elango_Tml_Panchali()
{
}

//The interface every dynamic font encoding should implement
Elango_Tml_Panchali.maxLookupLen = 3;
Elango_Tml_Panchali.fontFace     = "ELANGO-TML-Panchali-Normal";
Elango_Tml_Panchali.displayName  = "Elango Panchali";
Elango_Tml_Panchali.script       = Padma.script_TAMIL;

Elango_Tml_Panchali.lookup = function (str) 
{
    return Elango_Tml_Panchali.toPadma[str];
}

Elango_Tml_Panchali.isPrefixSymbol = function (str)
{
    return Elango_Tml_Panchali.prefixList[str] != null;
}

Elango_Tml_Panchali.isOverloaded = function (str)
{
    return Elango_Tml_Panchali.overloadList[str] != null;
}

Elango_Tml_Panchali.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if (sign2 == Padma.vowelsn_E && sign1 == Padma.vowelsn_AA)
        return Padma.vowelsn_O;
    if (sign2 == Padma.vowelsn_EE && sign1 == Padma.vowelsn_AA)
        return Padma.vowelsn_OO;
    return sign1 + sign2;    
}

Elango_Tml_Panchali.preprocessMessage = function (input)
{
    return input;
}

//Implementation details start here

//Specials
Elango_Tml_Panchali.visarga        = "\u0040";  //aytham

//Vowels
Elango_Tml_Panchali.vowel_A        = "\u0041";
Elango_Tml_Panchali.vowel_AA       = "\u0042";
Elango_Tml_Panchali.vowel_I        = "\u0043";
Elango_Tml_Panchali.vowel_II       = "\u0044";
Elango_Tml_Panchali.vowel_U        = "\u0045";
Elango_Tml_Panchali.vowel_UU       = "\u0046";
Elango_Tml_Panchali.vowel_E        = "\u0047";
Elango_Tml_Panchali.vowel_EE       = "\u0048";
Elango_Tml_Panchali.vowel_AI       = "\u0049";
Elango_Tml_Panchali.vowel_O        = "\u004A";
Elango_Tml_Panchali.vowel_OO       = "\u004B";
Elango_Tml_Panchali.vowel_AU       = "\u004A\u005B";

//Consonants
Elango_Tml_Panchali.consnt_KA      = "\u004C";
Elango_Tml_Panchali.consnt_NGA     = "\u004D";

Elango_Tml_Panchali.consnt_CA      = "\u004E";
Elango_Tml_Panchali.consnt_JA      = "\u005E";
Elango_Tml_Panchali.consnt_NYA     = "\u004F";

Elango_Tml_Panchali.consnt_TTA     = "\u0050";
Elango_Tml_Panchali.consnt_NNA     = "\u0051";

Elango_Tml_Panchali.consnt_TA      = "\u0052";
Elango_Tml_Panchali.consnt_NA      = "\u0053";
Elango_Tml_Panchali.consnt_NNNA    = "\u005D";

Elango_Tml_Panchali.consnt_PA      = "\u0054";
Elango_Tml_Panchali.consnt_MA      = "\u0055";

Elango_Tml_Panchali.consnt_YA      = "\u0056";
Elango_Tml_Panchali.consnt_RA      = "\u0057";
Elango_Tml_Panchali.consnt_LA      = "\u0058";
Elango_Tml_Panchali.consnt_VA      = "\u0059";
Elango_Tml_Panchali.consnt_SSA     = "\u0063";
Elango_Tml_Panchali.consnt_SA      = "\u0062";
Elango_Tml_Panchali.consnt_HA      = "\u0061";
Elango_Tml_Panchali.consnt_LLA     = "\u005B";
Elango_Tml_Panchali.consnt_ZHA     = "\u005A";
Elango_Tml_Panchali.consnt_RRA     = "\u005C";
Elango_Tml_Panchali.conjct_KSH     = "\u0064";
Elango_Tml_Panchali.conjct_SRII    = "\u007E";

//Gunintamulu
Elango_Tml_Panchali.vowelsn_AA     = "\u00D6";
Elango_Tml_Panchali.vowelsn_I      = "\u00EC";
Elango_Tml_Panchali.vowelsn_U      = "\u00D7";	
Elango_Tml_Panchali.vowelsn_UU     = "\u00D8";
Elango_Tml_Panchali.vowelsn_E_1    = "\u00D9";
Elango_Tml_Panchali.vowelsn_E_2    = "\u00E2";	
Elango_Tml_Panchali.vowelsn_E_3    = "\u00E3";	
Elango_Tml_Panchali.vowelsn_EE     = "\u00DA";
Elango_Tml_Panchali.vowelsn_AI     = "\u00DB";

// Old format. No lomger used.
Elango_Tml_Panchali.combo_NNAA     = "\u00DE";
Elango_Tml_Panchali.combo_NNNAA    = "\u00E0";
Elango_Tml_Panchali.combo_RRAA     = "\u00DF";

//Elango_Tml_Panchali uses the same symbol for generating vowelsn_AU and consnt_LLA. This is a work around
Elango_Tml_Panchali.combo_KAU      = "\u00D9\u004C\u005B";
Elango_Tml_Panchali.combo_NGAU     = "\u00D9\u004D\u005B";
Elango_Tml_Panchali.combo_CAU      = "\u00D9\u004E\u005B";
Elango_Tml_Panchali.combo_JAU      = "\u00D9\u005E\u005B";
Elango_Tml_Panchali.combo_NYAU     = "\u00D9\u004F\u005B";
Elango_Tml_Panchali.combo_TTAU     = "\u00D9\u0050\u005B";
Elango_Tml_Panchali.combo_NNAU     = "\u00D9\u0051\u005B";
Elango_Tml_Panchali.combo_TAU      = "\u00D9\u0052\u005B";
Elango_Tml_Panchali.combo_NAU      = "\u00D9\u0053\u005B";
Elango_Tml_Panchali.combo_NNNAU    = "\u00D9\u005D\u005B";
Elango_Tml_Panchali.combo_PAU      = "\u00D9\u0054\u005B";
Elango_Tml_Panchali.combo_MAU      = "\u00D9\u0055\u005B";
Elango_Tml_Panchali.combo_YAU      = "\u00D9\u0056\u005B";
Elango_Tml_Panchali.combo_RAU      = "\u00D9\u0057\u005B";
Elango_Tml_Panchali.combo_LAU      = "\u00D9\u0058\u005B";
Elango_Tml_Panchali.combo_VAU      = "\u00D9\u0059\u005B";
Elango_Tml_Panchali.combo_SSAU     = "\u00D9\u0063\u005B";
Elango_Tml_Panchali.combo_SAU      = "\u00D9\u0062\u005B";
Elango_Tml_Panchali.combo_HAU      = "\u00D9\u0061\u005B";
Elango_Tml_Panchali.combo_LLAU     = "\u00D9\u005B\u005B";
Elango_Tml_Panchali.combo_ZHAU     = "\u00D9\u005A\u005B";
Elango_Tml_Panchali.combo_RRAU     = "\u00D9\u005C\u005B";
Elango_Tml_Panchali.combo_KSHAU    = "\u00D9\u0064\u005B";

//Special Combinations
Elango_Tml_Panchali.combo_KI      = "\u0066";
Elango_Tml_Panchali.combo_KII     = "\u0067";
Elango_Tml_Panchali.combo_KU      = "\u0068";
Elango_Tml_Panchali.combo_KUU     = "\u0069";
Elango_Tml_Panchali.combo_KPULLI  = "\u0065";
Elango_Tml_Panchali.combo_NGI     = "\u006B";
Elango_Tml_Panchali.combo_NGII    = "\u006C";
Elango_Tml_Panchali.combo_NGU     = "\u006D";
Elango_Tml_Panchali.combo_NGUU    = "\u006E";
Elango_Tml_Panchali.combo_NGPULLI = "\u006A";

Elango_Tml_Panchali.combo_CI      = "\u0070";
Elango_Tml_Panchali.combo_CII     = "\u0071";
Elango_Tml_Panchali.combo_CU      = "\u0072";
Elango_Tml_Panchali.combo_CUU     = "\u0073";
Elango_Tml_Panchali.combo_CPULLI  = "\u006F";
Elango_Tml_Panchali.combo_JI      = "\u00C8";
Elango_Tml_Panchali.combo_JII     = "\u00C9";
Elango_Tml_Panchali.combo_JPULLI  = "\u00C7";
Elango_Tml_Panchali.combo_NYI     = "\u0075";
Elango_Tml_Panchali.combo_NYII    = "\u0076";
Elango_Tml_Panchali.combo_NYU     = "\u0077";
Elango_Tml_Panchali.combo_NYUU    = "\u0078";
Elango_Tml_Panchali.combo_NYPULLI = "\u0074";

Elango_Tml_Panchali.combo_TTI     = "\u007A";
Elango_Tml_Panchali.combo_TTII    = "\u007B";
Elango_Tml_Panchali.combo_TTU     = "\u007C";
Elango_Tml_Panchali.combo_TTUU    = "\u007D";
Elango_Tml_Panchali.combo_TTPULLI = "\u0079";
Elango_Tml_Panchali.combo_NNI     = "\u201A";
Elango_Tml_Panchali.combo_NNII    = "\u0192";
Elango_Tml_Panchali.combo_NNU     = "\u201E";
Elango_Tml_Panchali.combo_NNUU    = "\u2026";
Elango_Tml_Panchali.combo_NNPULLI = "\u0081";

Elango_Tml_Panchali.combo_TI      = "\u2021";
Elango_Tml_Panchali.combo_TII     = "\u02C6";
Elango_Tml_Panchali.combo_TU      = "\u2030";
Elango_Tml_Panchali.combo_TUU     = "\u0160";
Elango_Tml_Panchali.combo_TPULLI  = "\u2020";
Elango_Tml_Panchali.combo_NI      = "\u0152";
Elango_Tml_Panchali.combo_NII     = "\u008D";
Elango_Tml_Panchali.combo_NU      = "\u00EE";
Elango_Tml_Panchali.combo_NUU     = "\u008F";
Elango_Tml_Panchali.combo_NPULLI  = "\u2039";
Elango_Tml_Panchali.combo_NNNI    = "\u00C2";
Elango_Tml_Panchali.combo_NNNII   = "\u00C3";
Elango_Tml_Panchali.combo_NNNU    = "\u00C4";
Elango_Tml_Panchali.combo_NNNUU   = "\u00C5";
Elango_Tml_Panchali.combo_NNNPULLI= "\u00C1";

Elango_Tml_Panchali.combo_PI      = "\u2018";
Elango_Tml_Panchali.combo_PII     = "\u2019";
Elango_Tml_Panchali.combo_PU      = "\u201C";
Elango_Tml_Panchali.combo_PUU     = "\u201D";
Elango_Tml_Panchali.combo_PPULLI  = "\u0090";
Elango_Tml_Panchali.combo_MI      = "\u2013";
Elango_Tml_Panchali.combo_MII     = "\u2014";
Elango_Tml_Panchali.combo_MU      = "\u02DC";
Elango_Tml_Panchali.combo_MUU     = "\u2122";
Elango_Tml_Panchali.combo_MPULLI  = "\u2022";

Elango_Tml_Panchali.combo_YI      = "\u203A";
Elango_Tml_Panchali.combo_YII     = "\u0153";
Elango_Tml_Panchali.combo_YU      = "\u009D";
Elango_Tml_Panchali.combo_YUU     = "\u00EF";
Elango_Tml_Panchali.combo_YPULLI  = "\u0161";
Elango_Tml_Panchali.combo_RI      = "\u00A1";
Elango_Tml_Panchali.combo_RII     = "\u00A2";
Elango_Tml_Panchali.combo_RU      = "\u00A3";
Elango_Tml_Panchali.combo_RUU     = "\u00A4";
Elango_Tml_Panchali.combo_RPULLI  = "\u0178";
Elango_Tml_Panchali.combo_LI      = "\u00A6";
Elango_Tml_Panchali.combo_LII     = "\u00A7";
Elango_Tml_Panchali.combo_LU      = "\u00A8";
Elango_Tml_Panchali.combo_LUU     = "\u00A9";
Elango_Tml_Panchali.combo_LPULLI  = "\u00A5";
Elango_Tml_Panchali.combo_VI      = "\u00AB";
Elango_Tml_Panchali.combo_VII     = "\u00AE";
Elango_Tml_Panchali.combo_VU      = "\u00B0";
Elango_Tml_Panchali.combo_VUU     = "\u00B1";
Elango_Tml_Panchali.combo_VPULLI  = "\u00AA";

Elango_Tml_Panchali.combo_SSI     = "\u00D1";
Elango_Tml_Panchali.combo_SSII    = "\u00D2";
Elango_Tml_Panchali.combo_SSPULLI = "\u00D0";
Elango_Tml_Panchali.combo_SI      = "\u00CE";
Elango_Tml_Panchali.combo_SII     = "\u00CF";
Elango_Tml_Panchali.combo_SPULLI  = "\u00CD";
Elango_Tml_Panchali.combo_HI      = "\u00CB";
Elango_Tml_Panchali.combo_HII     = "\u00CC";
Elango_Tml_Panchali.combo_HPULLI  = "\u00CA";

Elango_Tml_Panchali.combo_LLI     = "\u00B8";
Elango_Tml_Panchali.combo_LLII    = "\u00B9";
Elango_Tml_Panchali.combo_LLU     = "\u00BA";
Elango_Tml_Panchali.combo_LLUU    = "\u00BB";
Elango_Tml_Panchali.combo_LLPULLI = "\u00B7";
Elango_Tml_Panchali.combo_ZHI     = "\u00B3";
Elango_Tml_Panchali.combo_ZHII    = "\u00B4";
Elango_Tml_Panchali.combo_ZHU     = "\u00B5";
Elango_Tml_Panchali.combo_ZHUU    = "\u00B6";
Elango_Tml_Panchali.combo_ZHPULLI = "\u00B2";
Elango_Tml_Panchali.combo_RRI     = "\u00BD";
Elango_Tml_Panchali.combo_RRII    = "\u00BE";
Elango_Tml_Panchali.combo_RRU     = "\u00BF";
Elango_Tml_Panchali.combo_RRUU    = "\u00C0";
Elango_Tml_Panchali.combo_RRPULLI = "\u00BC";
Elango_Tml_Panchali.combo_KSHI    = "\u00D4";
Elango_Tml_Panchali.combo_KSHII   = "\u00D5";
Elango_Tml_Panchali.combo_KSHPULLI= "\u00D3";

//Matches ASCII
Elango_Tml_Panchali.EXCLAM         = "\u0021";
Elango_Tml_Panchali.QTDOUBLE       = "\u0022";
Elango_Tml_Panchali.HASH           = "\u0023";
Elango_Tml_Panchali.DOLLAR         = "\u0024";
Elango_Tml_Panchali.PERCENT        = "\u0025";
Elango_Tml_Panchali.QTSINGLE       = "\u0027";
Elango_Tml_Panchali.PARENLEFT      = "\u0028";
Elango_Tml_Panchali.PARENRIGT      = "\u0029";
Elango_Tml_Panchali.ASTERISK       = "\u002A";
Elango_Tml_Panchali.PLUS           = "\u002B";
Elango_Tml_Panchali.COMMA          = "\u002C";
Elango_Tml_Panchali.PERIOD         = "\u002E";
Elango_Tml_Panchali.SLASH          = "\u002F";
Elango_Tml_Panchali.COLON          = "\u003A";
Elango_Tml_Panchali.SEMICOLON      = "\u003B";
Elango_Tml_Panchali.LESSTHAN       = "\u003C";
Elango_Tml_Panchali.EQUALS         = "\u003D";
Elango_Tml_Panchali.GREATERTHAN    = "\u003E";
Elango_Tml_Panchali.QUESTION       = "\u003F";
//Elango_Tml_Panchali.ATSIGN         = "\u0040";

Elango_Tml_Panchali.digit_ZERO     = "\u0030";
Elango_Tml_Panchali.digit_ONE      = "\u0031";
Elango_Tml_Panchali.digit_TWO      = "\u0032";
Elango_Tml_Panchali.digit_THREE    = "\u0033";
Elango_Tml_Panchali.digit_FOUR     = "\u0034";
Elango_Tml_Panchali.digit_FIVE     = "\u0035";
Elango_Tml_Panchali.digit_SIX      = "\u0036";
Elango_Tml_Panchali.digit_SEVEN    = "\u0037";
Elango_Tml_Panchali.digit_EIGHT    = "\u0038";
Elango_Tml_Panchali.digit_NINE     = "\u0039";

//Does not match ASCII
Elango_Tml_Panchali.HYPHEN         = "\u005F";

Elango_Tml_Panchali.toPadma = new Object();

Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.visarga]  = Padma.visarga;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.vowel_A]  = Padma.vowel_A;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.vowel_AA] = Padma.vowel_AA;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.vowel_I]  = Padma.vowel_I;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.vowel_II] = Padma.vowel_II;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.vowel_U]  = Padma.vowel_U;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.vowel_UU] = Padma.vowel_UU;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.vowel_E]  = Padma.vowel_E;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.vowel_EE] = Padma.vowel_EE;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.vowel_AI] = Padma.vowel_AI;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.vowel_O]  = Padma.vowel_O;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.vowel_OO] = Padma.vowel_OO;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.vowel_AU] = Padma.vowel_AU;

Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.consnt_KA]  = Padma.consnt_KA;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.consnt_NGA] = Padma.consnt_NGA;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.consnt_CA]  = Padma.consnt_CA;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.consnt_JA]  = Padma.consnt_JA;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.consnt_NYA] = Padma.consnt_NYA;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.consnt_TTA] = Padma.consnt_TTA;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.consnt_NNA] = Padma.consnt_NNA;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.consnt_TA]  = Padma.consnt_TA;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.consnt_NA]  = Padma.consnt_NA;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.consnt_NNNA] = Padma.consnt_NNNA;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.consnt_PA]  = Padma.consnt_PA;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.consnt_MA]  = Padma.consnt_MA;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.consnt_YA]  = Padma.consnt_YA;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.consnt_RA]  = Padma.consnt_RA;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.consnt_LA]  = Padma.consnt_LA;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.consnt_VA]  = Padma.consnt_VA;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.consnt_SSA] = Padma.consnt_SSA;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.consnt_SA]  = Padma.consnt_SA;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.consnt_HA]  = Padma.consnt_HA;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.consnt_LLA] = Padma.consnt_LLA;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.consnt_ZHA] = Padma.consnt_ZHA;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.consnt_RRA] = Padma.consnt_RRA;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.conjct_KSH] = Padma.consnt_KA + Padma.vattu_SSA;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.conjct_SRII] = Padma.consnt_SA + Padma.vattu_RA + Padma.vowelsn_II;

//Gunintamulu
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.vowelsn_AA]  = Padma.vowelsn_AA;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.vowelsn_I]   = Padma.vowelsn_I;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.vowelsn_U] = Padma.vowelsn_U;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.vowelsn_UU]  = Padma.vowelsn_UU;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.vowelsn_E_1] = Padma.vowelsn_E;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.vowelsn_E_2] = Padma.vowelsn_E;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.vowelsn_E_3] = Padma.vowelsn_E;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.vowelsn_EE]  = Padma.vowelsn_EE;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.vowelsn_AI]  = Padma.vowelsn_AI;

// Old format. No lomger used.
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_NNAA] = Padma.consnt_NNA + Padma.vowelsn_AA;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_NNNAA] = Padma.consnt_NNNA + Padma.vowelsn_AA;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_RRAA] = Padma.consnt_RRA + Padma.vowelsn_AA;


Elango_Tml_Panchali.combo_KAU      = Padma.consnt_KA + Padma.vowelsn_AU;
Elango_Tml_Panchali.combo_NGAU     = Padma.consnt_NGA + Padma.vowelsn_AU;
Elango_Tml_Panchali.combo_CAU      = Padma.consnt_CA + Padma.vowelsn_AU;
Elango_Tml_Panchali.combo_JAU      = Padma.consnt_JA + Padma.vowelsn_AU;
Elango_Tml_Panchali.combo_NYAU     = Padma.consnt_NYA + Padma.vowelsn_AU;
Elango_Tml_Panchali.combo_TTAU     = Padma.consnt_TTA + Padma.vowelsn_AU;
Elango_Tml_Panchali.combo_NNAU     = Padma.consnt_NNA + Padma.vowelsn_AU;
Elango_Tml_Panchali.combo_TAU      = Padma.consnt_TA + Padma.vowelsn_AU;
Elango_Tml_Panchali.combo_NAU      = Padma.consnt_NA + Padma.vowelsn_AU;
Elango_Tml_Panchali.combo_NNNAU    = Padma.consnt_NNNA + Padma.vowelsn_AU;
Elango_Tml_Panchali.combo_PAU      = Padma.consnt_PA + Padma.vowelsn_AU;
Elango_Tml_Panchali.combo_MAU      = Padma.consnt_MA + Padma.vowelsn_AU;
Elango_Tml_Panchali.combo_YAU      = Padma.consnt_YA + Padma.vowelsn_AU;
Elango_Tml_Panchali.combo_RAU      = Padma.consnt_RA + Padma.vowelsn_AU;
Elango_Tml_Panchali.combo_LAU      = Padma.consnt_LA + Padma.vowelsn_AU;
Elango_Tml_Panchali.combo_VAU      = Padma.consnt_VA + Padma.vowelsn_AU;
Elango_Tml_Panchali.combo_SSAU     = Padma.consnt_SSA + Padma.vowelsn_AU;
Elango_Tml_Panchali.combo_SAU      = Padma.consnt_SA + Padma.vowelsn_AU;
Elango_Tml_Panchali.combo_HAU      = Padma.consnt_HA + Padma.vowelsn_AU;
Elango_Tml_Panchali.combo_LLAU     = Padma.consnt_LLA + Padma.vowelsn_AU;
Elango_Tml_Panchali.combo_ZHAU     = Padma.consnt_ZHA + Padma.vowelsn_AU;
Elango_Tml_Panchali.combo_RRAU     = Padma.consnt_RRA + Padma.vowelsn_AU;
Elango_Tml_Panchali.combo_KSHAU    = Padma.consnt_KA + Padma.vattu_SSA + Padma.vowelsn_AU;

//Special Combinations
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_KI]      = Padma.consnt_KA + Padma.vowelsn_I;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_KII]     = Padma.consnt_KA + Padma.vowelsn_II;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_KU]      = Padma.consnt_KA + Padma.vowelsn_U;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_KUU]     = Padma.consnt_KA + Padma.vowelsn_UU;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_KPULLI]  = Padma.consnt_KA + Padma.pulli;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_NGI]     = Padma.consnt_NGA + Padma.vowelsn_I;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_NGII]    = Padma.consnt_NGA + Padma.vowelsn_II;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_NGU]     = Padma.consnt_NGA + Padma.vowelsn_U;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_NGUU]    = Padma.consnt_NGA + Padma.vowelsn_UU;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_NGPULLI] = Padma.consnt_NGA + Padma.pulli;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_CI]      = Padma.consnt_CA + Padma.vowelsn_I;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_CII]     = Padma.consnt_CA + Padma.vowelsn_II;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_CU]      = Padma.consnt_CA + Padma.vowelsn_U;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_CUU]     = Padma.consnt_CA + Padma.vowelsn_UU;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_CPULLI]  = Padma.consnt_CA + Padma.pulli;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_JI]      = Padma.consnt_JA + Padma.vowelsn_I;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_JII]     = Padma.consnt_JA + Padma.vowelsn_II;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_JPULLI]  = Padma.consnt_JA + Padma.pulli;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_NYI]     = Padma.consnt_NYA + Padma.vowelsn_I;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_NYII]    = Padma.consnt_NYA + Padma.vowelsn_II;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_NYU]     = Padma.consnt_NYA + Padma.vowelsn_U;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_NYUU]    = Padma.consnt_NYA + Padma.vowelsn_UU;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_NYPULLI] = Padma.consnt_NYA + Padma.pulli;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_TTI]     = Padma.consnt_TTA + Padma.vowelsn_I;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_TTII]    = Padma.consnt_TTA + Padma.vowelsn_II;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_TTU]     = Padma.consnt_TTA + Padma.vowelsn_U;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_TTUU]    = Padma.consnt_TTA + Padma.vowelsn_UU;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_TTPULLI] = Padma.consnt_TTA + Padma.pulli;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_NNI]     = Padma.consnt_NNA + Padma.vowelsn_I;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_NNII]    = Padma.consnt_NNA + Padma.vowelsn_II;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_NNU]     = Padma.consnt_NNA + Padma.vowelsn_U;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_NNUU]    = Padma.consnt_NNA + Padma.vowelsn_UU;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_NNPULLI] = Padma.consnt_NNA + Padma.pulli;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_TI]      = Padma.consnt_TA + Padma.vowelsn_I;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_TII]     = Padma.consnt_TA + Padma.vowelsn_II;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_TU]      = Padma.consnt_TA + Padma.vowelsn_U;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_TUU]     = Padma.consnt_TA + Padma.vowelsn_UU;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_TPULLI]  = Padma.consnt_TA + Padma.pulli;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_NI]      = Padma.consnt_NA + Padma.vowelsn_I;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_NII]     = Padma.consnt_NA + Padma.vowelsn_II;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_NU]      = Padma.consnt_NA + Padma.vowelsn_U;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_NUU]     = Padma.consnt_NA + Padma.vowelsn_UU;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_NPULLI]  = Padma.consnt_NA + Padma.pulli;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_NNNI]    = Padma.consnt_NNNA + Padma.vowelsn_I;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_NNNII]   = Padma.consnt_NNNA + Padma.vowelsn_II;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_NNNU]    = Padma.consnt_NNNA + Padma.vowelsn_U;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_NNNUU]   = Padma.consnt_NNNA + Padma.vowelsn_UU;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_NNNPULLI] = Padma.consnt_NNNA + Padma.pulli;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_PI]      = Padma.consnt_PA + Padma.vowelsn_I;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_PII]     = Padma.consnt_PA + Padma.vowelsn_II;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_PU]      = Padma.consnt_PA + Padma.vowelsn_U;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_PUU]     = Padma.consnt_PA + Padma.vowelsn_UU;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_PPULLI]  = Padma.consnt_PA + Padma.pulli;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_MI]      = Padma.consnt_MA + Padma.vowelsn_I;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_MII]     = Padma.consnt_MA + Padma.vowelsn_II;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_MU]      = Padma.consnt_MA + Padma.vowelsn_U;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_MUU]     = Padma.consnt_MA + Padma.vowelsn_UU;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_MPULLI]  = Padma.consnt_MA + Padma.pulli;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_YI]      = Padma.consnt_YA + Padma.vowelsn_I;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_YII]     = Padma.consnt_YA + Padma.vowelsn_II;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_YU]      = Padma.consnt_YA + Padma.vowelsn_U;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_YUU]     = Padma.consnt_YA + Padma.vowelsn_UU;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_YPULLI]  = Padma.consnt_YA + Padma.pulli;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_RI]      = Padma.consnt_RA + Padma.vowelsn_I;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_RII]     = Padma.consnt_RA + Padma.vowelsn_II;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_RU]      = Padma.consnt_RA + Padma.vowelsn_U;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_RUU]     = Padma.consnt_RA + Padma.vowelsn_UU;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_RPULLI]  = Padma.consnt_RA + Padma.pulli;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_LU]      = Padma.consnt_LA + Padma.vowelsn_U;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_LUU]     = Padma.consnt_LA + Padma.vowelsn_UU;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_LI]      = Padma.consnt_LA + Padma.vowelsn_I;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_LII]     = Padma.consnt_LA + Padma.vowelsn_II;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_LPULLI]  = Padma.consnt_LA + Padma.pulli;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_VI]      = Padma.consnt_VA + Padma.vowelsn_I;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_VII]     = Padma.consnt_VA + Padma.vowelsn_II;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_VU]      = Padma.consnt_VA + Padma.vowelsn_U;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_VUU]     = Padma.consnt_VA + Padma.vowelsn_UU;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_VPULLI]  = Padma.consnt_VA + Padma.pulli;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_SSI]     = Padma.consnt_SSA + Padma.vowelsn_I;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_SSII]    = Padma.consnt_SSA + Padma.vowelsn_II;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_SSPULLI] = Padma.consnt_SSA + Padma.pulli;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_SI]      = Padma.consnt_SA + Padma.vowelsn_I;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_SII]     = Padma.consnt_SA + Padma.vowelsn_II;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_SPULLI]  = Padma.consnt_SA + Padma.pulli;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_HI]      = Padma.consnt_HA + Padma.vowelsn_I;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_HII]     = Padma.consnt_HA + Padma.vowelsn_II;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_HPULLI]  = Padma.consnt_HA + Padma.pulli;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_LLI]     = Padma.consnt_LLA + Padma.vowelsn_I;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_LLII]    = Padma.consnt_LLA + Padma.vowelsn_II;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_LLU]     = Padma.consnt_LLA + Padma.vowelsn_U;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_LLUU]    = Padma.consnt_LLA + Padma.vowelsn_UU;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_LLPULLI] = Padma.consnt_LLA + Padma.pulli;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_ZHI]     = Padma.consnt_ZHA + Padma.vowelsn_I;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_ZHII]    = Padma.consnt_ZHA + Padma.vowelsn_II;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_ZHU]     = Padma.consnt_ZHA + Padma.vowelsn_U;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_ZHUU]    = Padma.consnt_ZHA + Padma.vowelsn_UU;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_ZHPULLI] = Padma.consnt_ZHA + Padma.pulli;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_RRI]     = Padma.consnt_RRA + Padma.vowelsn_I;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_RRII]    = Padma.consnt_RRA + Padma.vowelsn_II;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_RRU]     = Padma.consnt_RRA + Padma.vowelsn_U;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_RRUU]    = Padma.consnt_RRA + Padma.vowelsn_UU;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_RRPULLI] = Padma.consnt_RRA + Padma.pulli;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_KSHI]    = Padma.consnt_KA + Padma.vattu_SSA + Padma.vowelsn_I;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_KSHII]   = Padma.consnt_KA + Padma.vattu_SSA + Padma.vowelsn_II;
Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.combo_KSHPULLI]= Padma.consnt_KA + Padma.vattu_SSA + Padma.pulli;

Elango_Tml_Panchali.toPadma[Elango_Tml_Panchali.HYPHEN]   = "-";

Elango_Tml_Panchali.prefixList = new Object();
Elango_Tml_Panchali.prefixList[Elango_Tml_Panchali.vowelsn_E_1]   = true;
Elango_Tml_Panchali.prefixList[Elango_Tml_Panchali.vowelsn_E_2]   = true;
Elango_Tml_Panchali.prefixList[Elango_Tml_Panchali.vowelsn_E_3]   = true;
Elango_Tml_Panchali.prefixList[Elango_Tml_Panchali.vowelsn_EE]    = true;
Elango_Tml_Panchali.prefixList[Elango_Tml_Panchali.vowelsn_AI]    = true;

Elango_Tml_Panchali.overloadList = new Object();
Elango_Tml_Panchali.overloadList[Elango_Tml_Panchali.vowel_O]     = true;
Elango_Tml_Panchali.overloadList[Elango_Tml_Panchali.vowelsn_E_1] = true;
Elango_Tml_Panchali.overloadList[Elango_Tml_Panchali.vowelsn_E_2] = true;
Elango_Tml_Panchali.overloadList[Elango_Tml_Panchali.vowelsn_E_3] = true;
Elango_Tml_Panchali.overloadList["\u00D9\u004C"]    = true;
Elango_Tml_Panchali.overloadList["\u00D9\u004D"]    = true;
Elango_Tml_Panchali.overloadList["\u00D9\u004E"]    = true;
Elango_Tml_Panchali.overloadList["\u00D9\u004F"]    = true;
Elango_Tml_Panchali.overloadList["\u00D9\u0050"]    = true;
Elango_Tml_Panchali.overloadList["\u00D9\u0051"]    = true;
Elango_Tml_Panchali.overloadList["\u00D9\u0052"]    = true;
Elango_Tml_Panchali.overloadList["\u00D9\u0053"]    = true;
Elango_Tml_Panchali.overloadList["\u00D9\u0054"]    = true;
Elango_Tml_Panchali.overloadList["\u00D9\u005D"]    = true;
Elango_Tml_Panchali.overloadList["\u00D9\u0055"]    = true;
Elango_Tml_Panchali.overloadList["\u00D9\u0056"]    = true;
Elango_Tml_Panchali.overloadList["\u00D9\u0057"]    = true;
Elango_Tml_Panchali.overloadList["\u00D9\u0058"]    = true;
Elango_Tml_Panchali.overloadList["\u00D9\u0059"]    = true;
Elango_Tml_Panchali.overloadList["\u00D9\u005A"]    = true;
Elango_Tml_Panchali.overloadList["\u00D9\u005B"]    = true;
Elango_Tml_Panchali.overloadList["\u00D9\u005C"]    = true;
Elango_Tml_Panchali.overloadList["\u00D9\u0061"]    = true;
Elango_Tml_Panchali.overloadList["\u00D9\u0062"]    = true;
Elango_Tml_Panchali.overloadList["\u00D9\u0063"]    = true;
Elango_Tml_Panchali.overloadList["\u00D9\u0064"]    = true;
Elango_Tml_Panchali.overloadList["\u00D9\u005E"]    = true;








