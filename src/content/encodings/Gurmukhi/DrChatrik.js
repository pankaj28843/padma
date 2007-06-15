//$Id: DrChatrik.js,v 1.1 2007/06/15 21:55:27 vnagarjuna Exp $

/* Copyright 2006, 2007 AP Singh Alam <aalam@users.sf.net> */
/* Copyright 2006, 2007 Punjabi Open Source Team (POST) http://www.satluj.org/ */
//Copyright 2007 Nagarjuna Venna <vnagarjuna@yahoo.com>

/* drchatrik means 'Dani Ram Chatrik */

/* ***** BEGIN LICENSE BLOCK ***** 
 *  This file is part of Padma provided by POST.
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


function DrChatrik()
{
}

//The inter45ce every dynamic font encoding should implement
DrChatrik.maxLookupLen = 2;
DrChatrik.fontFace     = "drchatr0";
DrChatrik.displayName  = "DrChatrik";
DrChatrik.script       = Padma.script_GURMUKHI;
DrChatrik.hasSuffixes  = false;

DrChatrik.lookup = function (str) 
{
    return DrChatrik.toPadma[str];
}

DrChatrik.isPrefixSymbol = function (str)
{
    return DrChatrik.prefixList[str] != null;
}

DrChatrik.isSuffixSymbol = function (str)
{
    return DrChatrik.suffixList[str] != null;
}

DrChatrik.isOverloaded = function (str)
{
    return DrChatrik.overloadList[str] != null;
}

DrChatrik.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if ((sign1 == Padma.vowelsn_EE && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_EE))
        return Padma.vowelsn_OO;
    if ((sign1 == Padma.vowelsn_AI && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_AI))
        return Padma.vowelsn_AU;
    return sign1 + sign2;    
}

DrChatrik.isRedundant = function (str)
{
    return DrChatrik.redundantList[str] != null;
}

//This font unfortunately overloads period and nukta...
//TODO: 218, 214,  181-184, 149-151, 130, 132 - 135, 153, 173, 

//Vowels
DrChatrik.vowel_A        = "\u0061";
DrChatrik.vowel_AA       = "\u0061\u0066";
DrChatrik.vowel_I        = "\u0065\u0069";
DrChatrik.vowel_II       = "\u0065\u0049";
DrChatrik.vowel_U        = "\u0041\u0075";
DrChatrik.vowel_UU       = "\u0041\u0055";
DrChatrik.vowel_UU       = "\u0041\u00a8";
DrChatrik.vowel_EE       = "\u0069\u0079";
DrChatrik.vowel_AI       = "\u0061\u0059";
DrChatrik.vowel_OO       = "\u0045";
DrChatrik.vowel_AU       = "\u0061\u004F";

//Consonants
DrChatrik.consnt_KA	= "\u006B";
DrChatrik.consnt_KHA	= "\u004B";
DrChatrik.consnt_GA	= "\u0067";
DrChatrik.consnt_GHA	= "\u0047";
DrChatrik.consnt_NGA	= "\u00D5";
DrChatrik.consnt_CA	= "\u0063";
DrChatrik.consnt_CHA	= "\u0043";
DrChatrik.consnt_JA	= "\u006A";
DrChatrik.consnt_JHA	= "\u004A";
DrChatrik.consnt_NYA	= "\u00D6";
DrChatrik.consnt_TTA	= "\u0074";
DrChatrik.consnt_TTHA	= "\u0054";
DrChatrik.consnt_DDA	= "\u007A";
DrChatrik.consnt_DDHA	= "\u005A";
DrChatrik.consnt_NNA	= "\u0078";
DrChatrik.consnt_TA	= "\u0071";
DrChatrik.consnt_THA	= "\u0051";
DrChatrik.consnt_DA	= "\u0064";
DrChatrik.consnt_DHA	= "\u0044";
DrChatrik.consnt_NA	= "\u006E";
DrChatrik.consnt_PA	= "\u0070";
DrChatrik.consnt_PHA	= "\u0050";
DrChatrik.consnt_BA	= "\u0062";
DrChatrik.consnt_BHA	= "\u0042";
DrChatrik.consnt_MA	= "\u006D";
DrChatrik.consnt_YA	= "\u0058";
DrChatrik.consnt_RA	= "\u0072";
DrChatrik.consnt_LA	= "\u006C";
DrChatrik.consnt_LLA	= "\u00DC";
DrChatrik.consnt_VA	= "\u0076";
DrChatrik.consnt_SHA	= "\u00C8";
DrChatrik.consnt_SA	= "\u0073";
DrChatrik.consnt_HA	= "\u0068";

//Additional consonants
DrChatrik.consnt_KHHA	= "\u00C9";
DrChatrik.consnt_GHHA	= "\u00CA";
DrChatrik.consnt_ZA	= "\u00CB";
DrChatrik.consnt_RRA	= "\u0056";
DrChatrik.consnt_FA	= "\u00CC";

//Vowel signs
DrChatrik.vowelsn_AA    = "\u0066";     //kaana
DrChatrik.vowelsn_I     = "\u0069";     //sihari
DrChatrik.vowelsn_II    = "\u0049";     //bihari
DrChatrik.vowelsn_U     = "\u0075";     //aunkar
DrChatrik.vowelsn_UU_1  = "\u0055";     //dulainkar
DrChatrik.vowelsn_UU_2  = "\u00A8";     //dulainkar
DrChatrik.vowelsn_EE    = "\u0079";     //lanvan
DrChatrik.vowelsn_AI    = "\u0059";     //dulanvan
DrChatrik.vowelsn_OO    = "\u006F";     //hora
DrChatrik.vowelsn_AU    = "\u004F";     //kanaura

/* Latin Digit - Used in Punjabi - Updated on 19 March 2007*/
DrChatrik.digit_ZERO    = "\u0030";
DrChatrik.digit_ONE     = "\u0031";
DrChatrik.digit_TWO     = "\u0032";
DrChatrik.digit_THREE   = "\u0033";
DrChatrik.digit_FOUR    = "\u0034";
DrChatrik.digit_FIVE    = "\u0035";
DrChatrik.digit_SIX     = "\u0036";
DrChatrik.digit_SEVEN   = "\u0037";
DrChatrik.digit_EIGHT   = "\u0038";
DrChatrik.digit_NINE    = "\u0039";

//Conjuncts - half forms KA is only for Reference*/
DrChatrik.vattu_RA_1    = "\u0052";
DrChatrik.vattu_RA_2    = "\u00AE";
DrChatrik.vattu_CA      = "\u00E7";
DrChatrik.vattu_TTA     = "\u2020";
DrChatrik.vattu_TA      = "\u0153";
DrChatrik.vattu_NA      = "\u02DC";
DrChatrik.vattu_HA      = "\u0048";
DrChatrik.vattu_VA      = "\u00CD";
DrChatrik.vattu_YA_1    = "\u00CE";
DrChatrik.vattu_YA_2    = "\u00CF";

//
DrChatrik.vowelsn_AA_BINDI = "\u0046";
DrChatrik.conjct_NA_vowelUU_TIPPi = "\u0192";

//Gurmukhi Misc - Updated on 19March2007/
DrChatrik.misc_BINDI    = "\u004E";
DrChatrik.misc_TIPPI_1	= "\u0053";
DrChatrik.misc_TIPPI_2	= "\u00B5";
DrChatrik.misc_TIPPI_3	= "\u00BC";
DrChatrik.misc_TIPPI_4	= "\u004D";
DrChatrik.misc_TIPPI_5	= "\u00C0";
DrChatrik.misc_TIPPI_6	= "\u00C1";
DrChatrik.misc_ADDAK_1  = "\u0077";
DrChatrik.misc_ADDAK_2  = "\u0057";
DrChatrik.misc_DANDA_1  = "\u00AE";
DrChatrik.misc_DANDA_2  = "\u00BB";
DrChatrik.misc_DANDA_3  = "\u007C";
DrChatrik.misc_DDANDA_1 = "\u005D";
DrChatrik.misc_DDANDA_2 = "\u00AB";
DrChatrik.misc_DDANDA_3 = "\u00D2";
DrChatrik.misc_IRI      = "\u0069";
DrChatrik.misc_URA      = "\u0041";
DrChatrik.misc_EKONKAR_1 = "\u00C3";
DrChatrik.misc_EKONKAR_2 = "\u00C5";
DrChatrik.misc_KHANDA   = "\u00C7"


//Matches ASCII
DrChatrik.misc_QTDOUBLE  = "\u0022";
DrChatrik.misc_QTSINGLE  = "\u0027";

//Does not match ASCII
DrChatrik.PERIOD         = "\u002E";
DrChatrik.PERCENT        = "\u0025";
DrChatrik.LESSTHAN       = "\u003C";
DrChatrik.LQTSINGLE      = "\u00D2";
DrChatrik.RQTSINGLE      = "\u00D3";
DrChatrik.LQTDOUBLE      = "\u0054";
DrChatrik.RQTDOUBLE      = "\u0055";
DrChatrik.TILDE          = "\u02DC";
DrChatrik.GREATERTHAN    = "\u003E";
DrChatrik.SQBKTLEFT      = "\u005B";
DrChatrik.SQBKTRIGHT     = "\u005D";
DrChatrik.PARENLEFT      = "\u0028";
DrChatrik.PARENRIGHT     = "\u0029";
DrChatrik.HYPHEN         = "\u002D";
DrChatrik.SLASH          = "\u005C";
DrChatrik.COLON          = "\u003A";
DrChatrik.SEMICOLON      = "\u003B";
DrChatrik.EQUALS         = "\u003D";
DrChatrik.QUESTION       = "\u003F";
DrChatrik.ATSIGN         = "\u0027";
DrChatrik.COMMA          = "\u00AD";
DrChatrik.EXCLAMATION    = "\u0021";
DrChatrik.BACKSLASH      = "\u002F";

DrChatrik.toPadma = new Object();

DrChatrik.toPadma[DrChatrik.vowel_A]    = Padma.vowel_A;
DrChatrik.toPadma[DrChatrik.vowel_AA]   = Padma.vowel_AA;
DrChatrik.toPadma[DrChatrik.vowel_I]    = Padma.vowel_I;
DrChatrik.toPadma[DrChatrik.vowel_II]   = Padma.vowel_II;
DrChatrik.toPadma[DrChatrik.vowel_U]    = Padma.vowel_U;
DrChatrik.toPadma[DrChatrik.vowel_UU]   = Padma.vowel_UU;
DrChatrik.toPadma[DrChatrik.vowel_EE]   = Padma.vowel_EE;
DrChatrik.toPadma[DrChatrik.vowel_AI]   = Padma.vowel_AI;
DrChatrik.toPadma[DrChatrik.vowel_OO]   = Padma.vowel_OO;
DrChatrik.toPadma[DrChatrik.vowel_AU]   = Padma.vowel_AU;

DrChatrik.toPadma[DrChatrik.consnt_KA]  = Padma.consnt_KA;
DrChatrik.toPadma[DrChatrik.consnt_KHA] = Padma.consnt_KHA;
DrChatrik.toPadma[DrChatrik.consnt_GA]  = Padma.consnt_GA;
DrChatrik.toPadma[DrChatrik.consnt_GHA] = Padma.consnt_GHA;
DrChatrik.toPadma[DrChatrik.consnt_NGA] = Padma.consnt_NGA;
DrChatrik.toPadma[DrChatrik.consnt_CA]  = Padma.consnt_CA;
DrChatrik.toPadma[DrChatrik.consnt_CHA] = Padma.consnt_CHA;
DrChatrik.toPadma[DrChatrik.consnt_JA]  = Padma.consnt_JA;
DrChatrik.toPadma[DrChatrik.consnt_JHA] = Padma.consnt_JHA;
DrChatrik.toPadma[DrChatrik.consnt_NYA] = Padma.consnt_NYA;
DrChatrik.toPadma[DrChatrik.consnt_TTA] = Padma.consnt_TTA;
DrChatrik.toPadma[DrChatrik.consnt_TTHA] = Padma.consnt_TTHA;
DrChatrik.toPadma[DrChatrik.consnt_DDA] = Padma.consnt_DDA;
DrChatrik.toPadma[DrChatrik.consnt_DDHA] = Padma.consnt_DDHA;
DrChatrik.toPadma[DrChatrik.consnt_NNA] = Padma.consnt_NNA;
DrChatrik.toPadma[DrChatrik.consnt_TA]  = Padma.consnt_TA;
DrChatrik.toPadma[DrChatrik.consnt_THA] = Padma.consnt_THA;
DrChatrik.toPadma[DrChatrik.consnt_DA]  = Padma.consnt_DA;
DrChatrik.toPadma[DrChatrik.consnt_DHA] = Padma.consnt_DHA;
DrChatrik.toPadma[DrChatrik.consnt_NA]  = Padma.consnt_NA;
DrChatrik.toPadma[DrChatrik.consnt_PA]  = Padma.consnt_PA;
DrChatrik.toPadma[DrChatrik.consnt_PHA] = Padma.consnt_PHA;
DrChatrik.toPadma[DrChatrik.consnt_BA]  = Padma.consnt_BA;
DrChatrik.toPadma[DrChatrik.consnt_BHA] = Padma.consnt_BHA;
DrChatrik.toPadma[DrChatrik.consnt_MA]  = Padma.consnt_MA;
DrChatrik.toPadma[DrChatrik.consnt_YA]  = Padma.consnt_YA;
DrChatrik.toPadma[DrChatrik.consnt_RA]  = Padma.consnt_RA;
DrChatrik.toPadma[DrChatrik.consnt_LA]  = Padma.consnt_LA;
DrChatrik.toPadma[DrChatrik.consnt_LLA] = Padma.consnt_LLA;
DrChatrik.toPadma[DrChatrik.consnt_VA]  = Padma.consnt_VA;
DrChatrik.toPadma[DrChatrik.consnt_SHA] = Padma.consnt_SHA;
DrChatrik.toPadma[DrChatrik.consnt_SA]  = Padma.consnt_SA;
DrChatrik.toPadma[DrChatrik.consnt_HA]  = Padma.consnt_HA;
DrChatrik.toPadma[DrChatrik.consnt_KHHA] = Padma.consnt_KHHA; 
DrChatrik.toPadma[DrChatrik.consnt_GHHA] = Padma.consnt_GHHA;
DrChatrik.toPadma[DrChatrik.consnt_ZA]	=  Padma.consnt_ZA;
DrChatrik.toPadma[DrChatrik.consnt_RRA] = Padma.consnt_RRA;
DrChatrik.toPadma[DrChatrik.consnt_FA]	=  Padma.consnt_FA;

//Gunintamulu
DrChatrik.toPadma[DrChatrik.vowelsn_AA] = Padma.vowelsn_AA;
DrChatrik.toPadma[DrChatrik.vowelsn_I]  = Padma.vowelsn_I;
DrChatrik.toPadma[DrChatrik.vowelsn_II] = Padma.vowelsn_II;
DrChatrik.toPadma[DrChatrik.vowelsn_U]  = Padma.vowelsn_U;
DrChatrik.toPadma[DrChatrik.vowelsn_UU_1] = Padma.vowelsn_UU;
DrChatrik.toPadma[DrChatrik.vowelsn_UU_2] = Padma.vowelsn_UU;
DrChatrik.toPadma[DrChatrik.vowelsn_EE] = Padma.vowelsn_EE;
DrChatrik.toPadma[DrChatrik.vowelsn_AI] = Padma.vowelsn_AI;
DrChatrik.toPadma[DrChatrik.vowelsn_OO] = Padma.vowelsn_OO;
DrChatrik.toPadma[DrChatrik.vowelsn_AU] = Padma.vowelsn_AU;

//Half forms-Vattu
DrChatrik.toPadma[DrChatrik.vattu_RA_1] = Padma.vattu_RA;
DrChatrik.toPadma[DrChatrik.vattu_RA_2] = Padma.vattu_RA;
DrChatrik.toPadma[DrChatrik.vattu_CA]   = Padma.vattu_CA;
DrChatrik.toPadma[DrChatrik.vattu_TTA]  = Padma.vattu_TTA;
DrChatrik.toPadma[DrChatrik.vattu_TA]   = Padma.vattu_TA;
DrChatrik.toPadma[DrChatrik.vattu_NA]   = Padma.vattu_NA;
DrChatrik.toPadma[DrChatrik.vattu_HA]   = Padma.vattu_HA;
DrChatrik.toPadma[DrChatrik.vattu_VA]   = Padma.vattu_VA;
DrChatrik.toPadma[DrChatrik.vattu_YA_1] = Padma.vattu_YA;
DrChatrik.toPadma[DrChatrik.vattu_YA_2] = Padma.vattu_YA;

//conjuncts
DrChatrik.toPadma[DrChatrik.vowelsn_AA_BINDI] = Padma.vowelsn_AA + Padma.anusvara;
//DrChatrik.toPadma[DrChatrik.conjct_NA_vowelUU_TIPPi] = "ਨੂੰ"; TODO for Alam, what is this?

//Gurmukhi Misc - updated on 19March2007
DrChatrik.toPadma[DrChatrik.misc_BINDI]  = Padma.anusvara; //0a02
DrChatrik.toPadma[DrChatrik.misc_TIPPI_1] = Padma.tippi;
DrChatrik.toPadma[DrChatrik.misc_TIPPI_2] = Padma.tippi;
DrChatrik.toPadma[DrChatrik.misc_TIPPI_3] = Padma.tippi;
DrChatrik.toPadma[DrChatrik.misc_TIPPI_4] = Padma.tippi;
DrChatrik.toPadma[DrChatrik.misc_TIPPI_5] = Padma.tippi;
DrChatrik.toPadma[DrChatrik.misc_TIPPI_6] = Padma.tippi;
DrChatrik.toPadma[DrChatrik.misc_ADDAK_1] = Padma.addak;
DrChatrik.toPadma[DrChatrik.misc_ADDAK_2] = Padma.addak;
DrChatrik.toPadma[DrChatrik.misc_DANDA_1] = Padma.danda;
DrChatrik.toPadma[DrChatrik.misc_DANDA_2] = Padma.danda;
DrChatrik.toPadma[DrChatrik.misc_DANDA_3] = Padma.danda;
DrChatrik.toPadma[DrChatrik.misc_DDANDA_1] = Padma.ddanda;
DrChatrik.toPadma[DrChatrik.misc_DDANDA_2] = Padma.ddanda;
DrChatrik.toPadma[DrChatrik.misc_DDANDA_3] = Padma.ddanda;
//DrChatrik.toPadma[DrChatrik.misc_IRI] = "ੲ";
//DrChatrik.toPadma[DrChatrik.misc_URA] = "ੳ";
DrChatrik.toPadma[DrChatrik.misc_EKONKAR_1] = Padma.ekonkar;
DrChatrik.toPadma[DrChatrik.misc_EKONKAR_2] = Padma.ekonkar;
//DrChatrik.toPadma[DrChatrik.misc_KHANDA] = Padma.khanda;

//More
DrChatrik.toPadma[DrChatrik.PERIOD]        = ".";
DrChatrik.toPadma[DrChatrik.PERCENT]       = "%";
DrChatrik.toPadma[DrChatrik.LESSTHAN]      = "<";
DrChatrik.toPadma[DrChatrik.LQTSINGLE]     = "\u2018";
DrChatrik.toPadma[DrChatrik.RQTSINGLE]     = "\u2019";
DrChatrik.toPadma[DrChatrik.LQTDOUBLE]     = "\u201C";
DrChatrik.toPadma[DrChatrik.RQTDOUBLE]     = "\u201D";
DrChatrik.toPadma[DrChatrik.GREATERTHAN]   = ">";
DrChatrik.toPadma[DrChatrik.SQBKTLEFT]     = "[";
DrChatrik.toPadma[DrChatrik.SQBKTRIGHT]    = "]";
DrChatrik.toPadma[DrChatrik.PARENLEFT]     = "(";
DrChatrik.toPadma[DrChatrik.PARENRIGHT]    = ")";
DrChatrik.toPadma[DrChatrik.HYPHEN]        = "-";
DrChatrik.toPadma[DrChatrik.SLASH]         = "/";
DrChatrik.toPadma[DrChatrik.COLON]         = ":";
DrChatrik.toPadma[DrChatrik.SEMICOLON]     = ";";
DrChatrik.toPadma[DrChatrik.EQUALS]        = "=";
DrChatrik.toPadma[DrChatrik.QUESTION]      = "?";
DrChatrik.toPadma[DrChatrik.ATSIGN]        = "@";
DrChatrik.toPadma[DrChatrik.COMMA]         = ",";
DrChatrik.toPadma[DrChatrik.EXCLAMATION]   = "!";
DrChatrik.toPadma[DrChatrik.BACKSLASH]     = "\\";

DrChatrik.prefixList = new Object();
DrChatrik.prefixList[DrChatrik.vowelsn_I]  = true;

DrChatrik.suffixList = new Object();
//DrChatrik.suffixList[DrChatrik.halffm_RA]  = true;


DrChatrik.redundantList = new Object();

DrChatrik.overloadList = new Object();
DrChatrik.overloadList[DrChatrik.vowel_A]     = true;
DrChatrik.overloadList["\u0065"]            = true;
DrChatrik.overloadList[DrChatrik.vowelsn_I] = true;
DrChatrik.overloadList[DrChatrik.misc_URA]  = true;
