// $Id: Transformer.js,v 1.32 2008/06/16 15:43:00 vnagarjuna Exp $ -->

//Copyright 2005-2006 Nagarjuna Venna <vnagarjuna@yahoo.com>

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

//Transformer

//Input/output methods
Transformer.method_RTS      = 0;
Transformer.method_Unicode  = 1;
Transformer.method_ISCII    = 2;
Transformer.method_ITRANS   = 3;
Transformer.method_TSCII    = 4;
Transformer.method_TAB      = 5; //Tamil Bilingual
Transformer.method_TAM      = 6; //Tamil Monolingual
Transformer.method_DynFonts = 7;
Transformer.method_Unknown  = 8;

//Dynamic fonts supported
Transformer.dynFont_Eenadu       = 0;
Transformer.dynFont_ShreeTel0900 = 1;
Transformer.dynFont_Hemalatha    = 2;
Transformer.dynFont_ShreeTel0902 = 3;
Transformer.dynFont_Tikkana      = 4;
Transformer.dynFont_Karthika     = 5;
Transformer.dynFont_Vaartha      = 6;
Transformer.dynFont_Vikatan      = 7;
Transformer.dynFont_TeluguLipi   = 8;
Transformer.dynFont_Kairali      = 9;
Transformer.dynFont_Revathi      = 10;
Transformer.dynFont_Manorama     = 11;
Transformer.dynFont_Subak        = 12;
Transformer.dynFont_Kumudam      = 13;
Transformer.dynFont_ShreeTam0802 = 14;
Transformer.dynFont_Elango       = 15;
Transformer.dynFont_Bhaskar      = 16;
Transformer.dynFont_Thoolika     = 17;
Transformer.dynFont_TCSMith      = 18;
Transformer.dynFont_Gopika       = 19;
Transformer.dynFont_Jagran       = 20;
Transformer.dynFont_EPatrika     = 21;
Transformer.dynFont_Ujala        = 22;
Transformer.dynFont_Chanakya     = 23;
Transformer.dynFont_Nandi        = 24;
Transformer.dynFont_TeluguFont   = 25;
Transformer.dynFont_Suri         = 26;
Transformer.dynFont_TSCMylai     = 27;
Transformer.dynFont_TSCComic     = 28;
Transformer.dynFont_TSCJanani    = 29;
Transformer.dynFont_TSCKomathi   = 30;
Transformer.dynFont_TSCSri       = 31;
Transformer.dynFont_TSCTimes     = 32;
Transformer.dynFont_TSCAandaal   = 33;
Transformer.dynFont_TSCAparanarPdf = 34;
Transformer.dynFont_TSCKannadaasan = 35;
Transformer.dynFont_TSCParanbold = 36;
Transformer.dynFont_TSCParanar   = 37;
Transformer.dynFont_TSCParanarPdf = 38;
Transformer.dynFont_TSCAvarangal = 39;
Transformer.dynFont_TSCAvarangalFxd = 40;
Transformer.dynFont_TSCThunaivan = 41;
Transformer.dynFont_TSCNattai    = 42;
Transformer.dynFont_Shusha       = 43;
Transformer.dynFont_Shusha02     = 44;
Transformer.dynFont_Shusha05     = 45;
Transformer.dynFont_HTChanakya   = 46;
Transformer.dynFont_Vakil01      = 47;
Transformer.dynFont_Shivaji01    = 48;
Transformer.dynFont_Shivaji02    = 49;
Transformer.dynFont_Shivaji05    = 50;
Transformer.dynFont_Vakil02      = 51;
Transformer.dynFont_Vakil05      = 52;
Transformer.dynFont_Mithi        = 53;
Transformer.dynFont_Panchami     = 54;
Transformer.dynFont_Matweb       = 55;
Transformer.dynFont_AabpBengali  = 56;
Transformer.dynFont_AabpBengalix = 57;
Transformer.dynFont_AabpBengalixx = 58;
Transformer.dynFont_Kalakaumudi  = 59;
Transformer.dynFont_BWRevathi    = 60;
Transformer.dynFont_DrChatrik    = 61;
Transformer.dynFont_AAADurga     = 62;
Transformer.dynFont_AAADurgax    = 63;
Transformer.dynFont_AAADurgaxx   = 65;
Transformer.dynFont_Unknown      = 66;  //this should always be the max, this is used as a sentinel

//Classes that implement the above dynamic fonts
Transformer.dynFont_Class = new Array();
Transformer.dynFont_Class[Transformer.dynFont_Eenadu]       = Eenadu;
Transformer.dynFont_Class[Transformer.dynFont_ShreeTel0900] = Shree_Tel_0900;
Transformer.dynFont_Class[Transformer.dynFont_Hemalatha]    = Hemalatha;
Transformer.dynFont_Class[Transformer.dynFont_ShreeTel0902] = Shree_Tel_0902;
Transformer.dynFont_Class[Transformer.dynFont_Tikkana]      = Tikkana;
Transformer.dynFont_Class[Transformer.dynFont_Karthika]     = Karthika;
Transformer.dynFont_Class[Transformer.dynFont_Vaartha]      = Vaartha;
Transformer.dynFont_Class[Transformer.dynFont_Vikatan]      = Vikatan;
Transformer.dynFont_Class[Transformer.dynFont_TeluguLipi]   = TeluguLipi;
Transformer.dynFont_Class[Transformer.dynFont_Kairali]      = Kairali;
Transformer.dynFont_Class[Transformer.dynFont_Revathi]      = Revathi;
Transformer.dynFont_Class[Transformer.dynFont_Manorama]     = Manorama;
Transformer.dynFont_Class[Transformer.dynFont_Subak]        = Subak;
Transformer.dynFont_Class[Transformer.dynFont_Kumudam]      = Kumudam;
Transformer.dynFont_Class[Transformer.dynFont_ShreeTam0802] = Shree_Tam_0802;
Transformer.dynFont_Class[Transformer.dynFont_Elango]       = Elango_Tml_Panchali;
Transformer.dynFont_Class[Transformer.dynFont_Bhaskar]      = Bhaskar;
Transformer.dynFont_Class[Transformer.dynFont_Thoolika]     = Thoolika;
Transformer.dynFont_Class[Transformer.dynFont_TCSMith]      = TCSMith;
Transformer.dynFont_Class[Transformer.dynFont_Gopika]       = Gopika;
Transformer.dynFont_Class[Transformer.dynFont_Jagran]       = Jagran;
Transformer.dynFont_Class[Transformer.dynFont_EPatrika]     = EPatrika;
Transformer.dynFont_Class[Transformer.dynFont_Ujala]        = Ujala;
Transformer.dynFont_Class[Transformer.dynFont_Chanakya]     = Chanakya;
Transformer.dynFont_Class[Transformer.dynFont_Nandi]        = Nandi;
Transformer.dynFont_Class[Transformer.dynFont_TeluguFont]   = TeluguFont;
Transformer.dynFont_Class[Transformer.dynFont_Suri]         = SuriTln;
Transformer.dynFont_Class[Transformer.dynFont_TSCMylai]     = TSCMylai;
Transformer.dynFont_Class[Transformer.dynFont_TSCComic]     = TSCComic;
Transformer.dynFont_Class[Transformer.dynFont_TSCJanani]    = TSCJanani;
Transformer.dynFont_Class[Transformer.dynFont_TSCKomathi]   = TSCKomathi;
Transformer.dynFont_Class[Transformer.dynFont_TSCSri]	    = TSCSri;
Transformer.dynFont_Class[Transformer.dynFont_TSCTimes]	    = TSCTimes;
Transformer.dynFont_Class[Transformer.dynFont_TSCAandaal]   = TSCAandaal;
Transformer.dynFont_Class[Transformer.dynFont_TSCAparanarPdf] = TSCAparanarPdf;
Transformer.dynFont_Class[Transformer.dynFont_TSCKannadaasan] = TSCKannadaasan;
Transformer.dynFont_Class[Transformer.dynFont_TSCParanbold] = TSCParanbold;
Transformer.dynFont_Class[Transformer.dynFont_TSCParanar]   = TSCParanar;
Transformer.dynFont_Class[Transformer.dynFont_TSCParanarPdf] = TSCParanarPdf;
Transformer.dynFont_Class[Transformer.dynFont_TSCAvarangal] = TSCAvarangal;
Transformer.dynFont_Class[Transformer.dynFont_TSCAvarangalFxd] = TSCAvarangalFxd;
Transformer.dynFont_Class[Transformer.dynFont_TSCThunaivan] = TSCThunaivan;
Transformer.dynFont_Class[Transformer.dynFont_TSCNattai]    = TSCNattai;
Transformer.dynFont_Class[Transformer.dynFont_Shusha]       = Shusha;
Transformer.dynFont_Class[Transformer.dynFont_Shusha02]     = Shusha02;
Transformer.dynFont_Class[Transformer.dynFont_Shusha05]     = Shusha05;
Transformer.dynFont_Class[Transformer.dynFont_HTChanakya]   = HTChanakya;
Transformer.dynFont_Class[Transformer.dynFont_Vakil01]      = Vakil01;
Transformer.dynFont_Class[Transformer.dynFont_Shivaji01]    = Shivaji01;
Transformer.dynFont_Class[Transformer.dynFont_Shivaji02]    = Shivaji02;
Transformer.dynFont_Class[Transformer.dynFont_Shivaji05]    = Shivaji05;
Transformer.dynFont_Class[Transformer.dynFont_Vakil02]      = Vakil02;
Transformer.dynFont_Class[Transformer.dynFont_Vakil05]      = Vakil05;
Transformer.dynFont_Class[Transformer.dynFont_Mithi]        = Mithi;
Transformer.dynFont_Class[Transformer.dynFont_Panchami]     = Panchami;
Transformer.dynFont_Class[Transformer.dynFont_Matweb]       = Matweb;
Transformer.dynFont_Class[Transformer.dynFont_AabpBengali]  = Aabpbengali;
Transformer.dynFont_Class[Transformer.dynFont_AabpBengalix] = Aabpbengalix;
Transformer.dynFont_Class[Transformer.dynFont_AabpBengalixx]= Aabpbengalixx;
Transformer.dynFont_Class[Transformer.dynFont_Kalakaumudi]  = Kalakaumudi;
Transformer.dynFont_Class[Transformer.dynFont_BWRevathi]    = BWRevathi;
Transformer.dynFont_Class[Transformer.dynFont_DrChatrik]    = DrChatrik;
Transformer.dynFont_Class[Transformer.dynFont_AAADurga]  = AAADurga;
Transformer.dynFont_Class[Transformer.dynFont_AAADurgax] = AAADurgax;
Transformer.dynFont_Class[Transformer.dynFont_AAADurgaxx]= AAADurgaxx;

//Class names for non-dynamic font encodings
Transformer.className_Unicode = Unicode;
Transformer.className_RTS     = RTS;
Transformer.className_ISCII   = ISCII;
Transformer.className_ITRANS  = ITRANS;
Transformer.className_TSCII   = TSCII; //really a font encoding, but treated as a scheme
Transformer.className_TAB     = TAB;   //really a font encoding, but treated as a scheme
Transformer.className_TAM     = TAM;   //really a font encoding, but treated as a scheme

Transformer.dynFont_Name = new Array();
Transformer.dynFont_NameToIndex = new Object();
Transformer.dynFont_ScriptCode = new Array();
Transformer.dynFont_DisplayName = new Array();

function Transformer(input, output, rtsWritingStyle, rtsSunnaStyle)
{
    this.input = input;
    this.output = output;
    this.dynFontIndex = Transformer.dynFont_Unknown;
    this.scriptCode = -1;
    if (this.output == Transformer.method_RTS)
        this.outputWriter = RTS.getRTSWriter(rtsWritingStyle, rtsSunnaStyle);
    else if (this.output == Transformer.method_Unicode)
        this.outputWriter = Unicode.getUnicodeWriter();
}

Transformer.initialize = function () {
    //Names
    for(var i = 0; i < Transformer.dynFont_Unknown; i++)
        Transformer.dynFont_Name[i] = Transformer.dynFont_Class[i].fontFace;

    //Name To Index
    for(i = 0; i < Transformer.dynFont_Unknown; i++)
        Transformer.dynFont_NameToIndex[Transformer.dynFont_Name[i].toUpperCase()] = i;

    //Display Names
    for(i = 0; i < Transformer.dynFont_Unknown; i++)
        Transformer.dynFont_DisplayName[i] = Transformer.dynFont_Class[i].displayName;

    //Script codes
    for(i = 0; i < Transformer.dynFont_Unknown; i++)
        Transformer.dynFont_ScriptCode[i] = Transformer.dynFont_Class[i].script;

    //Custom font inits
    //Initialize BEJA lookup tables used by Bhaskar, Jagran, EPatrika and AmarUjala fonts
    BEJA.initialize();
    //Shivaji fonts are based on Shusha but are slightly different
    Shivaji.initialize();
    //Vakil fonts are based on Shusha but are slightly different
    Vakil.initialize();

    Eenadu.prepareOverloadList();
}

Transformer.createTransformer = function (input, output, rtsWritingStyle, rtsSunnaStyle)
{
    if (!Transformer.isValidOutputMethod(output) || !Transformer.isValidInputMethod(input))
        return null;
    if (input == Transformer.method_RTS)
        return new RTSTransformer(input, output);
    if (output == Transformer.method_RTS)
        return new Transformer(input, output, rtsWritingStyle, rtsSunnaStyle);
    return new Transformer(input, output);
}

Transformer.prototype.getInputMethod = function ()
{
    return this.input;
}

Transformer.prototype.getOutputMethod = function ()
{
    return this.output;
}

Transformer.isValidInputMethod = function (method)
{
    return method == Transformer.method_RTS || method == Transformer.method_DynFonts || method == Transformer.method_Unicode 
                     || method == Transformer.method_ISCII || method == Transformer.method_ITRANS || method == Transformer.method_TSCII
                     || method == Transformer.method_TAB || method == Transformer.method_TAM || method == Transformer.method_Unknown;
}

Transformer.isValidOutputMethod = function (method)
{
    return method == Transformer.method_RTS || method == Transformer.method_Unicode;
}

Transformer.prototype.convert = function (text)
{
    //Convert to internal format from inputMethod
    var output = "";
    var parser = null;
    if (this.input == Transformer.method_DynFonts || 
        (this.input == Transformer.method_Unknown && this.dynFontIndex != Transformer.dynFont_Unknown)) {
        parser = new DynamicFontParser(text, Transformer.dynFont_Class[this.dynFontIndex]);
        this.dynFontIndex = Transformer.dynFont_Unknown;
    }
    else if (this.input == Transformer.method_Unicode || this.input == Transformer.method_Unknown) {
        parser = new Parser(text, Transformer.className_Unicode);
    }
    else if (this.input == Transformer.method_ISCII) {
        parser = new Parser(text, Transformer.className_ISCII);
    }
    else if (this.input == Transformer.method_ITRANS) {
        parser = new ITRANSParser(text);
    }
    else if (this.input == Transformer.method_TSCII) {
        parser = new DynamicFontParser(text, Transformer.className_TSCII);
    }
    else if (this.input == Transformer.method_TAB) {
        parser = new DynamicFontParser(text, Transformer.className_TAB);
    }
    else if (this.input == Transformer.method_TAM) {
        parser = new DynamicFontParser(text, Transformer.className_TAM);
    }

    while (parser.more())
        output += this.toOutputFormat(parser.next());

    return output + this.outputWriter.cleanup();
}

Transformer.prototype.toOutputFormat = function (syllable)
{
    return this.outputWriter.transformFromPadma(syllable);
}

Transformer.isSupportedDynamicFont = function (face)
{
    return Transformer.getDynFontIndex(face) != Transformer.dynFont_Unknown;
}

Transformer.getDynFontIndex = function (face)
{
    //Remove spurious chars from face name
    face = face.replace(/\"/g, '');
    var index = Transformer.dynFont_NameToIndex[face.toUpperCase()];
    return index != null ? index : Transformer.dynFont_Unknown;
}

Transformer.prototype.setDynamicFontByName = function (face)
{
    if (this.input != Transformer.method_DynFonts && this.input != Transformer.method_Unknown)
        return false;
    var index = Transformer.getDynFontIndex(face);
    if (index == Transformer.dynFont_Unknown)
        return false;
    this.dynFontIndex = index;
    if (this.scriptCode == -1 && this.output == Transformer.method_Unicode)
        this.outputWriter.setScript(Transformer.dynFont_ScriptCode[this.dynFontIndex]);
    return true;
}

Transformer.prototype.setDynamicFontByIndex = function (index)
{
    if (this.input != Transformer.method_DynFonts && this.input != Transformer.method_Unknown)
        return false;
    if (Transformer.dynFont_Name[index] == null)
        return false;
    this.dynFontIndex = index;
    if (this.scriptCode == -1 && this.output == Transformer.method_Unicode)
        this.outputWriter.setScript(Transformer.dynFont_ScriptCode[this.dynFontIndex]);
    return true;
}

Transformer.prototype.setOutputScript = function (scriptCode)
{
    if (scriptCode >= Padma.script_MAXSCRIPTS || this.output != Transformer.method_Unicode)
        return false;
    this.outputWriter.setScript(scriptCode);
    this.scriptCode = scriptCode;
    return true;
}
