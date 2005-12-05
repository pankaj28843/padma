// $Id: Transformer.js,v 1.15 2005/12/05 18:10:18 vnagarjuna Exp $ -->

//Copyright 2005 Nagarjuna Venna <vnagarjuna@yahoo.com>

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
Transformer.method_DynFonts = 4;
Transformer.method_Unknown  = 5;

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
Transformer.dynFont_Unknown      = 24;   //this should always be the max, this is used as a sentinel

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

//Class names for non-dynamic font encodings
Transformer.className_Unicode = Unicode;
Transformer.className_RTS     = RTS;
Transformer.className_ISCII   = ISCII;
Transformer.className_ITRANS  = ITRANS;

Transformer.dynFont_Name = new Array();
Transformer.dynFont_NameToIndex = new Array();
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

    //Initialize BEJA lookup tables used by Bhaskar, Jagran, EPatrika and AmarUjala fonts
    BEJA.initialize();
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
           || method == Transformer.method_ISCII || method == Transformer.method_ITRANS || method == Transformer.method_Unknown;
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
