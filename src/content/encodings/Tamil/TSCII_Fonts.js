// $Id: TSCII_Fonts.js,v 1.1 2006/03/06 16:30:25 vnagarjuna Exp $ -->

//Copyright 2006 Nagarjuna Venna <vnagarjuna@yahoo.com>
//Copyright 2006 Saravana Kumar  <saravanannkl@gmail.com>

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

//Single file contains all fonts of TSCII encoding

function TSCMylai()
{
}

//The interface every dynamic font encoding should implement
TSCMylai.maxLookupLen = TSCII.maxLookupLen;
TSCMylai.fontFace     = "TSCMylai";
TSCMylai.displayName  = "TSCMylai";
TSCMylai.script       = Padma.script_TAMIL;

TSCMylai.lookup = function (str) 
{
    return TSCII.lookup(str);
}

TSCMylai.isPrefixSymbol = function (str)
{
    return TSCII.isPrefixSymbol(str);
}

TSCMylai.isOverloaded = function (str)
{
    return TSCII.isOverloaded(str);
}

TSCMylai.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return TSCII.handleTwoPartVowelSigns(sign1, sign2);
}

TSCMylai.isRedundant = function (str)
{
    return TSCII.isRedundant(str);
}

TSCMylai.preprocessMessage = function (input)
{
    return TSCII.preprocessMessage(input);
}

/////////////////////////////////////////////////////////////////////////////

function TSCComic()
{
}

//The interface every dynamic font encoding should implement
TSCComic.maxLookupLen = TSCII.maxLookupLen;
TSCComic.fontFace     = "TSCComic";
TSCComic.displayName  = "TSCComic";
TSCComic.script       = Padma.script_TAMIL;

TSCComic.lookup = function (str) 
{
    return TSCII.lookup(str);
}

TSCComic.isPrefixSymbol = function (str)
{
    return TSCII.isPrefixSymbol(str);
}

TSCComic.isOverloaded = function (str)
{
    return TSCII.isOverloaded(str);
}

TSCComic.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return TSCII.handleTwoPartVowelSigns(sign1, sign2);
}

TSCComic.isRedundant = function (str)
{
    return TSCII.isRedundant(str);
}

TSCComic.preprocessMessage = function (input)
{
    return TSCII.preprocessMessage(input);
}

/////////////////////////////////////////////////////////////////////////////

function TSCJanani()
{
}

//The interface every dynamic font encoding should implement
TSCJanani.maxLookupLen = TSCII.maxLookupLen;
TSCJanani.fontFace     = "TSC_Janani";
TSCJanani.displayName  = "TSCJanani";
TSCJanani.script       = Padma.script_TAMIL;

TSCJanani.lookup = function (str) 
{
    return TSCII.lookup(str);
}

TSCJanani.isPrefixSymbol = function (str)
{
    return TSCII.isPrefixSymbol(str);
}

TSCJanani.isOverloaded = function (str)
{
    return TSCII.isOverloaded(str);
}

TSCJanani.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return TSCII.handleTwoPartVowelSigns(sign1, sign2);
}

TSCJanani.isRedundant = function (str)
{
    return TSCII.isRedundant(str);
}

TSCJanani.preprocessMessage = function (input)
{
    return TSCII.preprocessMessage(input);
}

/////////////////////////////////////////////////////////////////////////////

function TSCKomathi()
{
}

//The interface every dynamic font encoding should implement
TSCKomathi.maxLookupLen = TSCII.maxLookupLen;
TSCKomathi.fontFace     = "TSC Komathi";
TSCKomathi.displayName  = "TSCKomathi";
TSCKomathi.script       = Padma.script_TAMIL;

TSCKomathi.lookup = function (str) 
{
    return TSCII.lookup(str);
}

TSCKomathi.isPrefixSymbol = function (str)
{
    return TSCII.isPrefixSymbol(str);
}

TSCKomathi.isOverloaded = function (str)
{
    return TSCII.isOverloaded(str);
}

TSCKomathi.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return TSCII.handleTwoPartVowelSigns(sign1, sign2);
}

TSCKomathi.isRedundant = function (str)
{
    return TSCII.isRedundant(str);
}

TSCKomathi.preprocessMessage = function (input)
{
    return TSCII.preprocessMessage(input);
}


/////////////////////////////////////////////////////////////////////////////

function TSCSri()
{
}

//The interface every dynamic font encoding should implement
TSCSri.maxLookupLen = TSCII.maxLookupLen;
TSCSri.fontFace     = "TSC-Sri";
TSCSri.displayName  = "TSCSri";
TSCSri.script       = Padma.script_TAMIL;

TSCSri.lookup = function (str) 
{
    return TSCII.lookup(str);
}

TSCSri.isPrefixSymbol = function (str)
{
    return TSCII.isPrefixSymbol(str);
}

TSCSri.isOverloaded = function (str)
{
    return TSCII.isOverloaded(str);
}

TSCSri.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return TSCII.handleTwoPartVowelSigns(sign1, sign2);
}

TSCSri.isRedundant = function (str)
{
    return TSCII.isRedundant(str);
}

TSCSri.preprocessMessage = function (input)
{
    return TSCII.preprocessMessage(input);
}

/////////////////////////////////////////////////////////////////////////////

function TSCTimes()
{
}

//The interface every dynamic font encoding should implement
TSCTimes.maxLookupLen = TSCII.maxLookupLen;
TSCTimes.fontFace     = "TSCTimes";
TSCTimes.displayName  = "TSCTimes";
TSCTimes.script       = Padma.script_TAMIL;

TSCTimes.lookup = function (str) 
{
    return TSCII.lookup(str);
}

TSCTimes.isPrefixSymbol = function (str)
{
    return TSCII.isPrefixSymbol(str);
}

TSCTimes.isOverloaded = function (str)
{
    return TSCII.isOverloaded(str);
}

TSCTimes.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return TSCII.handleTwoPartVowelSigns(sign1, sign2);
}

TSCTimes.isRedundant = function (str)
{
    return TSCII.isRedundant(str);
}

TSCTimes.preprocessMessage = function (input)
{
    return TSCII.preprocessMessage(input);
}

/////////////////////////////////////////////////////////////////////////////

function TSCAandaal()
{
}

//The interface every dynamic font encoding should implement
TSCAandaal.maxLookupLen = TSCII.maxLookupLen;
TSCAandaal.fontFace     = "TSC_Aandaal";
TSCAandaal.displayName  = "TSCAandaal";
TSCAandaal.script       = Padma.script_TAMIL;

TSCAandaal.lookup = function (str) 
{
    return TSCII.lookup(str);
}

TSCAandaal.isPrefixSymbol = function (str)
{
    return TSCII.isPrefixSymbol(str);
}

TSCAandaal.isOverloaded = function (str)
{
    return TSCII.isOverloaded(str);
}

TSCAandaal.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return TSCII.handleTwoPartVowelSigns(sign1, sign2);
}

TSCAandaal.isRedundant = function (str)
{
    return TSCII.isRedundant(str);
}

TSCAandaal.preprocessMessage = function (input)
{
    return TSCII.preprocessMessage(input);
}

/////////////////////////////////////////////////////////////////////////////

function TSCAparanarPdf()
{
}

//The interface every dynamic font encoding should implement
TSCAparanarPdf.maxLookupLen = TSCII.maxLookupLen;
TSCAparanarPdf.fontFace     = "TSC_AparanarPDF";
TSCAparanarPdf.displayName  = "TSCAparanarPdf";
TSCAparanarPdf.script       = Padma.script_TAMIL;

TSCAparanarPdf.lookup = function (str) 
{
    return TSCII.lookup(str);
}

TSCAparanarPdf.isPrefixSymbol = function (str)
{
    return TSCII.isPrefixSymbol(str);
}

TSCAparanarPdf.isOverloaded = function (str)
{
    return TSCII.isOverloaded(str);
}

TSCAparanarPdf.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return TSCII.handleTwoPartVowelSigns(sign1, sign2);
}

TSCAparanarPdf.isRedundant = function (str)
{
    return TSCII.isRedundant(str);
}

TSCAparanarPdf.preprocessMessage = function (input)
{
    return TSCII.preprocessMessage(input);
}

/////////////////////////////////////////////////////////////////////////////

function TSCKannadaasan()
{
}

//The interface every dynamic font encoding should implement
TSCKannadaasan.maxLookupLen = TSCII.maxLookupLen;
TSCKannadaasan.fontFace     = "TSC_Kannadaasan";
TSCKannadaasan.displayName  = "TSCKannadaasan";
TSCKannadaasan.script       = Padma.script_TAMIL;

TSCKannadaasan.lookup = function (str) 
{
    return TSCII.lookup(str);
}

TSCKannadaasan.isPrefixSymbol = function (str)
{
    return TSCII.isPrefixSymbol(str);
}

TSCKannadaasan.isOverloaded = function (str)
{
    return TSCII.isOverloaded(str);
}

TSCKannadaasan.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return TSCII.handleTwoPartVowelSigns(sign1, sign2);
}

TSCKannadaasan.isRedundant = function (str)
{
    return TSCII.isRedundant(str);
}

TSCKannadaasan.preprocessMessage = function (input)
{
    return TSCII.preprocessMessage(input);
}

/////////////////////////////////////////////////////////////////////////////

function TSCParanbold()
{
}

//The interface every dynamic font encoding should implement
TSCParanbold.maxLookupLen = TSCII.maxLookupLen;
TSCParanbold.fontFace     = "TSC_Paranbold";
TSCParanbold.displayName  = "TSCParanbold";
TSCParanbold.script       = Padma.script_TAMIL;

TSCParanbold.lookup = function (str) 
{
    return TSCII.lookup(str);
}

TSCParanbold.isPrefixSymbol = function (str)
{
    return TSCII.isPrefixSymbol(str);
}

TSCParanbold.isOverloaded = function (str)
{
    return TSCII.isOverloaded(str);
}

TSCParanbold.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return TSCII.handleTwoPartVowelSigns(sign1, sign2);
}

TSCParanbold.isRedundant = function (str)
{
    return TSCII.isRedundant(str);
}

TSCParanbold.preprocessMessage = function (input)
{
    return TSCII.preprocessMessage(input);
}

/////////////////////////////////////////////////////////////////////////////

function TSCParanar()
{
}

//The interface every dynamic font encoding should implement
TSCParanar.maxLookupLen = TSCII.maxLookupLen;
TSCParanar.fontFace     = "TSC_Paranar";
TSCParanar.displayName  = "TSCParanar";
TSCParanar.script       = Padma.script_TAMIL;

TSCParanar.lookup = function (str) 
{
    return TSCII.lookup(str);
}

TSCParanar.isPrefixSymbol = function (str)
{
    return TSCII.isPrefixSymbol(str);
}

TSCParanar.isOverloaded = function (str)
{
    return TSCII.isOverloaded(str);
}

TSCParanar.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return TSCII.handleTwoPartVowelSigns(sign1, sign2);
}

TSCParanar.isRedundant = function (str)
{
    return TSCII.isRedundant(str);
}

TSCParanar.preprocessMessage = function (input)
{
    return TSCII.preprocessMessage(input);
}


/////////////////////////////////////////////////////////////////////////////

function TSCParanarPdf()
{
}

//The interface every dynamic font encoding should implement
TSCParanarPdf.maxLookupLen = TSCII.maxLookupLen;
TSCParanarPdf.fontFace     = "TSC_ParanarPDF";
TSCParanarPdf.displayName  = "TSCParanarPdf";
TSCParanarPdf.script       = Padma.script_TAMIL;

TSCParanarPdf.lookup = function (str) 
{
    return TSCII.lookup(str);
}

TSCParanarPdf.isPrefixSymbol = function (str)
{
    return TSCII.isPrefixSymbol(str);
}

TSCParanarPdf.isOverloaded = function (str)
{
    return TSCII.isOverloaded(str);
}

TSCParanarPdf.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return TSCII.handleTwoPartVowelSigns(sign1, sign2);
}

TSCParanarPdf.isRedundant = function (str)
{
    return TSCII.isRedundant(str);
}

TSCParanarPdf.preprocessMessage = function (input)
{
    return TSCII.preprocessMessage(input);
}

/////////////////////////////////////////////////////////////////////////////

function TSCAvarangal()
{
}

//The interface every dynamic font encoding should implement
TSCAvarangal.maxLookupLen = TSCII.maxLookupLen;
TSCAvarangal.fontFace     = "TSC_Avarangal";
TSCAvarangal.displayName  = "TSCAvarangal";
TSCAvarangal.script       = Padma.script_TAMIL;

TSCAvarangal.lookup = function (str) 
{
    return TSCII.lookup(str);
}

TSCAvarangal.isPrefixSymbol = function (str)
{
    return TSCII.isPrefixSymbol(str);
}

TSCAvarangal.isOverloaded = function (str)
{
    return TSCII.isOverloaded(str);
}

TSCAvarangal.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return TSCII.handleTwoPartVowelSigns(sign1, sign2);
}

TSCAvarangal.isRedundant = function (str)
{
    return TSCII.isRedundant(str);
}

TSCAvarangal.preprocessMessage = function (input)
{
    return TSCII.preprocessMessage(input);
}

/////////////////////////////////////////////////////////////////////////////

function TSCAvarangalFxd()
{
}

//The interface every dynamic font encoding should implement
TSCAvarangalFxd.maxLookupLen = TSCII.maxLookupLen;
TSCAvarangalFxd.fontFace     = "TSC_AvarangalFxd";
TSCAvarangalFxd.displayName  = "TSCAvarangalFxd";
TSCAvarangalFxd.script       = Padma.script_TAMIL;

TSCAvarangalFxd.lookup = function (str) 
{
    return TSCII.lookup(str);
}

TSCAvarangalFxd.isPrefixSymbol = function (str)
{
    return TSCII.isPrefixSymbol(str);
}

TSCAvarangalFxd.isOverloaded = function (str)
{
    return TSCII.isOverloaded(str);
}

TSCAvarangalFxd.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return TSCII.handleTwoPartVowelSigns(sign1, sign2);
}

TSCAvarangalFxd.isRedundant = function (str)
{
    return TSCII.isRedundant(str);
}

TSCAvarangalFxd.preprocessMessage = function (input)
{
    return TSCII.preprocessMessage(input);
}

/////////////////////////////////////////////////////////////////////////////

function TSCThunaivan()
{
}

//The interface every dynamic font encoding should implement
TSCThunaivan.maxLookupLen = TSCII.maxLookupLen;
TSCThunaivan.fontFace     = "TSC_Thunaivan";
TSCThunaivan.displayName  = "TSCThunaivan";
TSCThunaivan.script       = Padma.script_TAMIL;

TSCThunaivan.lookup = function (str) 
{
    return TSCII.lookup(str);
}

TSCThunaivan.isPrefixSymbol = function (str)
{
    return TSCII.isPrefixSymbol(str);
}

TSCThunaivan.isOverloaded = function (str)
{
    return TSCII.isOverloaded(str);
}

TSCThunaivan.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return TSCII.handleTwoPartVowelSigns(sign1, sign2);
}

TSCThunaivan.isRedundant = function (str)
{
    return TSCII.isRedundant(str);
}

TSCThunaivan.preprocessMessage = function (input)
{
    return TSCII.preprocessMessage(input);
}

/////////////////////////////////////////////////////////////////////////////

function TSCNattai()
{
}

//The interface every dynamic font encoding should implement
TSCNattai.maxLookupLen = TSCII.maxLookupLen;
TSCNattai.fontFace     = "TSC Nattai";
TSCNattai.displayName  = "TSCNattai";
TSCNattai.script       = Padma.script_TAMIL;

TSCNattai.lookup = function (str) 
{
    return TSCII.lookup(str);
}

TSCNattai.isPrefixSymbol = function (str)
{
    return TSCII.isPrefixSymbol(str);
}

TSCNattai.isOverloaded = function (str)
{
    return TSCII.isOverloaded(str);
}

TSCNattai.handleTwoPartVowelSigns = function (sign1, sign2)
{
    return TSCII.handleTwoPartVowelSigns(sign1, sign2);
}

TSCNattai.isRedundant = function (str)
{
    return TSCII.isRedundant(str);
}

TSCNattai.preprocessMessage = function (input)
{
    return TSCII.preprocessMessage(input);
}

/////////////////////////////////////////////////////////////////////////////
