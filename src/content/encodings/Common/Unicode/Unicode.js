// $Id: Unicode.js,v 1.9 2012/01/22 04:12:49 vnagarjuna Exp $ -->

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

//Unicode
function Unicode() 
{
    this.script = Padma.script_TELUGU;
}

//Classes that implement the supported scripts
Unicode.script_Class = new Array();
Unicode.script_Class[Padma.script_TELUGU]     = Telugu;
Unicode.script_Class[Padma.script_MALAYALAM]  = Malayalam;
Unicode.script_Class[Padma.script_TAMIL]      = Tamil;
Unicode.script_Class[Padma.script_DEVANAGARI] = Devanagari;
Unicode.script_Class[Padma.script_GUJARATI]   = Gujarati;
Unicode.script_Class[Padma.script_KANNADA]    = Kannada;
Unicode.script_Class[Padma.script_BENGALI]    = Bengali;
Unicode.script_Class[Padma.script_GURMUKHI]   = Gurmukhi;

Unicode.fromPadma = new Array();

Unicode.initialize = function () {
    for(var i = 0; i < Padma.script_MAXSCRIPTS; ++i) {
        Unicode.script_Class[i].initialize();
        Unicode.fromPadma[i] = Unicode.script_Class[i].fromPadma;
    }
}

Unicode.maxLookupLen = 2;

Unicode.toPadma = new Object();

Unicode.toPadma[Telugu.codePoints.candrabindu]   = Padma.candrabindu;
Unicode.toPadma[Telugu.codePoints.visarga]       = Padma.visarga;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA] = Padma.pollu;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Unicode_Shared.ZWNJ] = Padma.syllbreak;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Unicode_Shared.ZWJ]  = Padma.chillu;
Unicode.toPadma[Unicode_Shared.ZWJ]  = Padma.chillu_C2;
Unicode.toPadma[Telugu.codePoints.anusvara]      = Padma.anusvara;
Unicode.toPadma[Unicode_Shared.AVAGRAHA] = Padma.avagraha;
Unicode.toPadma[Unicode_Shared.UDATTA]   = Padma.udAtta;
Unicode.toPadma[Unicode_Shared.ANUDATTA] = Padma.anudAtta;
Unicode.toPadma[Unicode_Shared.SVARITA]  = Padma.svarita;
Unicode.toPadma[Unicode_Shared.DANDA]    = Padma.danda;
Unicode.toPadma[Unicode_Shared.DDANDA]   = Padma.ddanda;

//digits
Unicode.toPadma[Telugu.codePoints.digit_ZERO]  = Padma.digit_ZERO;
Unicode.toPadma[Telugu.codePoints.digit_ONE]   = Padma.digit_ONE;
Unicode.toPadma[Telugu.codePoints.digit_TWO]   = Padma.digit_TWO;
Unicode.toPadma[Telugu.codePoints.digit_THREE] = Padma.digit_THREE;
Unicode.toPadma[Telugu.codePoints.digit_FOUR]  = Padma.digit_FOUR;
Unicode.toPadma[Telugu.codePoints.digit_FIVE]  = Padma.digit_FIVE;
Unicode.toPadma[Telugu.codePoints.digit_SIX]   = Padma.digit_SIX;
Unicode.toPadma[Telugu.codePoints.digit_SEVEN] = Padma.digit_SEVEN;
Unicode.toPadma[Telugu.codePoints.digit_EIGHT] = Padma.digit_EIGHT;
Unicode.toPadma[Telugu.codePoints.digit_NINE]  = Padma.digit_NINE;

//Vowels
Unicode.toPadma[Telugu.codePoints.letter_A]     = Padma.vowel_A;
Unicode.toPadma[Telugu.codePoints.letter_AA]    = Padma.vowel_AA;
Unicode.toPadma[Telugu.codePoints.letter_I]     = Padma.vowel_I;
Unicode.toPadma[Telugu.codePoints.letter_II]    = Padma.vowel_II;
Unicode.toPadma[Telugu.codePoints.letter_U]     = Padma.vowel_U;
Unicode.toPadma[Telugu.codePoints.letter_UU]    = Padma.vowel_UU;
Unicode.toPadma[Telugu.codePoints.letter_R]     = Padma.vowel_R;
Unicode.toPadma[Telugu.codePoints.letter_RR]    = Padma.vowel_RR;
Unicode.toPadma[Telugu.codePoints.letter_L]     = Padma.vowel_L;
Unicode.toPadma[Telugu.codePoints.letter_LL]    = Padma.vowel_LL;
Unicode.toPadma[Telugu.codePoints.letter_E]     = Padma.vowel_E;
Unicode.toPadma[Telugu.codePoints.letter_EE]    = Padma.vowel_EE;
Unicode.toPadma[Telugu.codePoints.letter_AI]    = Padma.vowel_AI;
Unicode.toPadma[Telugu.codePoints.letter_O]     = Padma.vowel_O;
Unicode.toPadma[Telugu.codePoints.letter_OO]    = Padma.vowel_OO;
Unicode.toPadma[Telugu.codePoints.letter_AU]    = Padma.vowel_AU;

//Consonants
Unicode.toPadma[Telugu.codePoints.letter_KA]    = Padma.consnt_KA;
Unicode.toPadma[Telugu.codePoints.letter_KHA]   = Padma.consnt_KHA;
Unicode.toPadma[Telugu.codePoints.letter_GA]    = Padma.consnt_GA;
Unicode.toPadma[Telugu.codePoints.letter_GHA]   = Padma.consnt_GHA;
Unicode.toPadma[Telugu.codePoints.letter_NGA]   = Padma.consnt_NGA;
Unicode.toPadma[Telugu.codePoints.letter_CA]    = Padma.consnt_CA;
Unicode.toPadma[Telugu.codePoints.letter_CHA]   = Padma.consnt_CHA;
Unicode.toPadma[Telugu.codePoints.letter_JA]    = Padma.consnt_JA;
Unicode.toPadma[Telugu.codePoints.letter_JHA]   = Padma.consnt_JHA;
Unicode.toPadma[Telugu.codePoints.letter_NYA]   = Padma.consnt_NYA;
Unicode.toPadma[Telugu.codePoints.letter_TTA]   = Padma.consnt_TTA;
Unicode.toPadma[Telugu.codePoints.letter_TTHA]  = Padma.consnt_TTHA;
Unicode.toPadma[Telugu.codePoints.letter_DDA]   = Padma.consnt_DDA;
Unicode.toPadma[Telugu.codePoints.letter_DDHA]  = Padma.consnt_DDHA;
Unicode.toPadma[Telugu.codePoints.letter_NNA]   = Padma.consnt_NNA;
Unicode.toPadma[Telugu.codePoints.letter_TA]    = Padma.consnt_TA;
Unicode.toPadma[Telugu.codePoints.letter_THA]   = Padma.consnt_THA;
Unicode.toPadma[Telugu.codePoints.letter_DA]    = Padma.consnt_DA;
Unicode.toPadma[Telugu.codePoints.letter_DHA]   = Padma.consnt_DHA;
Unicode.toPadma[Telugu.codePoints.letter_NA]    = Padma.consnt_NA;
Unicode.toPadma[Telugu.codePoints.letter_PA]    = Padma.consnt_PA;
Unicode.toPadma[Telugu.codePoints.letter_PHA]   = Padma.consnt_PHA;
Unicode.toPadma[Telugu.codePoints.letter_BA]    = Padma.consnt_BA;
Unicode.toPadma[Telugu.codePoints.letter_BHA]   = Padma.consnt_BHA;
Unicode.toPadma[Telugu.codePoints.letter_MA]    = Padma.consnt_MA;
Unicode.toPadma[Telugu.codePoints.letter_YA]    = Padma.consnt_YA;
Unicode.toPadma[Telugu.codePoints.letter_RA]    = Padma.consnt_RA;
Unicode.toPadma[Telugu.codePoints.letter_LA]    = Padma.consnt_LA;
Unicode.toPadma[Telugu.codePoints.letter_VA]    = Padma.consnt_VA;
Unicode.toPadma[Telugu.codePoints.letter_SHA]   = Padma.consnt_SHA;
Unicode.toPadma[Telugu.codePoints.letter_SSA]   = Padma.consnt_SSA;
Unicode.toPadma[Telugu.codePoints.letter_SA]    = Padma.consnt_SA;
Unicode.toPadma[Telugu.codePoints.letter_HA]    = Padma.consnt_HA;
Unicode.toPadma[Telugu.codePoints.letter_LLA]   = Padma.consnt_LLA;
Unicode.toPadma[Telugu.codePoints.letter_RRA]   = Padma.consnt_RRA;
Unicode.toPadma[Telugu.codePoints.letter_TSA]   = Padma.consnt_TSA;
Unicode.toPadma[Telugu.codePoints.letter_DJA]   = Padma.consnt_DJA;

//Gunimtaalu
Unicode.toPadma[Telugu.codePoints.vowelsn_AA]  = Padma.vowelsn_AA;
Unicode.toPadma[Telugu.codePoints.vowelsn_I]   = Padma.vowelsn_I;
Unicode.toPadma[Telugu.codePoints.vowelsn_II]  = Padma.vowelsn_II;
Unicode.toPadma[Telugu.codePoints.vowelsn_U]   = Padma.vowelsn_U;
Unicode.toPadma[Telugu.codePoints.vowelsn_UU]  = Padma.vowelsn_UU;
Unicode.toPadma[Telugu.codePoints.vowelsn_R]   = Padma.vowelsn_R;
Unicode.toPadma[Telugu.codePoints.vowelsn_RR]  = Padma.vowelsn_RR;
Unicode.toPadma[Telugu.codePoints.vowelsn_E]   = Padma.vowelsn_E;
Unicode.toPadma[Telugu.codePoints.vowelsn_EE]  = Padma.vowelsn_EE;
Unicode.toPadma[Telugu.codePoints.vowelsn_AI]  = Padma.vowelsn_AI;
Unicode.toPadma[Telugu.codePoints.vowelsn_O]   = Padma.vowelsn_O;
Unicode.toPadma[Telugu.codePoints.vowelsn_OO]  = Padma.vowelsn_OO;
Unicode.toPadma[Telugu.codePoints.vowelsn_AU]  = Padma.vowelsn_AU;
Unicode.toPadma[Telugu.codePoints.misc_AILEN]  = Padma.vowelsn_AILEN;

//Vattulu
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_KA]    = Padma.vattu_KA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_KHA]   = Padma.vattu_KHA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_GA]    = Padma.vattu_GA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_GHA]   = Padma.vattu_GHA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_NGA]   = Padma.vattu_NGA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_CA]    = Padma.vattu_CA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_CHA]   = Padma.vattu_CHA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_JA]    = Padma.vattu_JA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_JHA]   = Padma.vattu_JHA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_NYA]   = Padma.vattu_NYA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_TTA]   = Padma.vattu_TTA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_TTHA]  = Padma.vattu_TTHA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_DDA]   = Padma.vattu_DDA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_DDHA]  = Padma.vattu_DDHA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_NNA]   = Padma.vattu_NNA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_TA]    = Padma.vattu_TA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_THA]   = Padma.vattu_THA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_DA]    = Padma.vattu_DA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_DHA]   = Padma.vattu_DHA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_NA]    = Padma.vattu_NA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_PA]    = Padma.vattu_PA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_PHA]   = Padma.vattu_PHA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_BA]    = Padma.vattu_BA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_BHA]   = Padma.vattu_BHA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_MA]    = Padma.vattu_MA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_YA]    = Padma.vattu_YA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_RA]    = Padma.vattu_RA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_LA]    = Padma.vattu_LA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_VA]    = Padma.vattu_VA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_SHA]   = Padma.vattu_SHA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_SSA]   = Padma.vattu_SSA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_SA]    = Padma.vattu_SA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_HA]    = Padma.vattu_HA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_LLA]   = Padma.vattu_LLA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_RRA]   = Padma.vattu_RRA;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_TSA]   = Padma.vattu_TCH;
Unicode.toPadma[Telugu.codePoints.misc_VIRAMA + Telugu.codePoints.letter_DJA]   = Padma.vattu_DJA;

Unicode.lookup = function (str) 
{
    var val = Unicode.toPadma[str];
    return val == undefined ? null : val;
}

Unicode.prototype.setScript = function (script)
{
    if (script > Padma.script_MAXSCRIPTS)
        return false;
    this.script = script;
    return true;
}

Unicode.prototype.transformFromPadma = function (str)
{
    var output = "";
    for(var i = 0; i < str.length; ++i) {
        var cur = str.charAt(i);

        var out = Unicode.fromPadma[this.script][cur];
        output += (out == null ? cur : out);
    }
    return output;
}

Unicode.prototype.cleanup = function (str)
{
    return "";
}

Unicode.getUnicodeWriter = function ()
{
    return new Unicode();
}
