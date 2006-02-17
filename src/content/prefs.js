// $Id: prefs.js,v 1.5 2006/02/17 03:57:27 vnagarjuna Exp $ -->

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

var PadmaSettings = {
    onLoad: function() {
        var prefObj = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService);
        this.branch = prefObj.getBranch("Padma.");


        this.rtsWritingStyleButton = document.getElementById("RTSWritingStyle");
        this.rtsSunnaStyleButton = document.getElementById("RTSSunnaStyle");
        this.autoCheck = document.getElementById("enableAutoTransform");
        this.autoListUpdate = document.getElementById("updateAutoTransformList");
        this.fixCharEncoding = document.getElementById("fixCharEncoding");
        this.enableRTS = document.getElementById("enableRTS");
        this.enableISCII = document.getElementById("enableISCII");
        this.enableITRANS = document.getElementById("enableITRANS");
        this.enableTelugu = document.getElementById("enableTelugu");
        this.enableMalayalam = document.getElementById("enableMalayalam");
        this.enableTamil = document.getElementById("enableTamil");
        this.enableDevanagari = document.getElementById("enableDevanagari");
        this.enableGujarati = document.getElementById("enableGujarati");
        this.enableKannada = document.getElementById("enableKannada");

        //RTS Writing Style
        var rtsWritingStyle = this.branch.getIntPref(this.prefRTSWritingStyle);
        if (rtsWritingStyle > 2 || rtsWritingStyle < 0)
            rtsWritingStyle = 0;
        this.rtsWritingStyleButton.selectedIndex = rtsWritingStyle;

        //RTS Sunna and Pollu Style
        var rtsSunnaStyle = this.branch.getIntPref(this.prefRTSSunnaStyle);
        if (rtsSunnaStyle > 1 || rtsSunnaStyle < 0)
            rtsSunnaStyle = 0;
        this.rtsSunnaStyleButton.selectedIndex = rtsSunnaStyle;

        //Auto Transform
        this.autoCheck.checked = this.branch.getBoolPref(this.prefEnableAutoTransform);
        //Fix Char Encoding
        this.fixCharEncoding.checked = this.branch.getBoolPref(this.prefFixCharEncoding);
        
        //White list for auto transform
        this.autoTransformWhiteList = this.branch.getCharPref(this.prefAutoTransformWhiteList);

        //Manual Transform schemes
        this.enableRTS.checked = this.branch.getBoolPref(this.prefEnableRTS);
        this.enableISCII.checked = this.branch.getBoolPref(this.prefEnableISCII);
        this.enableITRANS.checked = this.branch.getBoolPref(this.prefEnableITRANS);
        this.enableTelugu.checked = this.branch.getBoolPref(this.prefEnableTelugu);
        this.enableMalayalam.checked = this.branch.getBoolPref(this.prefEnableMalayalam);
        this.enableTamil.checked = this.branch.getBoolPref(this.prefEnableTamil);
        this.enableDevanagari.checked = this.branch.getBoolPref(this.prefEnableDevanagari);
        this.enableGujarati.checked = this.branch.getBoolPref(this.prefEnableGujarati);
        this.enableKannada.checked = this.branch.getBoolPref(this.prefEnableKannada);

        this.applyButton = document.documentElement.getButton("extra1");
        this.onCheckBoxUpdate();
        this.applyButton.disabled = true;
    },

    onSave: function() {
        this.branch.setIntPref(this.prefRTSWritingStyle, this.rtsWritingStyleButton.selectedIndex);
        this.branch.setIntPref(this.prefRTSSunnaStyle, this.rtsSunnaStyleButton.selectedIndex);

        this.branch.setBoolPref(this.prefEnableAutoTransform, this.autoCheck.checked);
        this.branch.setBoolPref(this.prefFixCharEncoding, this.fixCharEncoding.checked);

        this.branch.setBoolPref(this.prefEnableRTS,    this.enableRTS.checked);
        this.branch.setBoolPref(this.prefEnableISCII,  this.enableISCII.checked);
        this.branch.setBoolPref(this.prefEnableITRANS, this.enableITRANS.checked);

        this.branch.setBoolPref(this.prefEnableTelugu,     this.enableTelugu.checked);
        this.branch.setBoolPref(this.prefEnableMalayalam,  this.enableMalayalam.checked);
        this.branch.setBoolPref(this.prefEnableTamil,      this.enableTamil.checked);
        this.branch.setBoolPref(this.prefEnableDevanagari, this.enableDevanagari.checked);
        this.branch.setBoolPref(this.prefEnableGujarati,   this.enableGujarati.checked);
        this.branch.setBoolPref(this.prefEnableKannada,    this.enableKannada.checked);

        this.branch.setCharPref(this.prefAutoTransformWhiteList, this.autoTransformWhiteList);
        this.applyButton.disabled = true;
    },

    onCheckBoxUpdate: function() {
        this.autoListUpdate.disabled = this.fixCharEncoding.disabled = !this.autoCheck.checked;
        this.rtsWritingStyleButton.disabled = this.rtsSunnaStyleButton.disabled = !this.enableRTS.checked;
        this.enableTelugu.disabled = this.enableMalayalam.disabled = this.enableTamil.disabled = this.enableDevanagari.disabled = 
        this.enableGujarati.disabled = this.enableKannada.disabled = !this.enableISCII.checked & !this.enableITRANS.checked;
        this.applyButton.disabled = false;
    },

    updateAutoTransformList: function() {
        var params = { input: this.autoTransformWhiteList, output: null };
        window.openDialog("chrome://padma/content/whitelist.xul", "updateauottransformlist", "chrome", params);
        if (params.output != null) {
            this.autoTransformWhiteList = params.output;
            this.branch.setCharPref(this.prefAutoTransformWhiteList, this.autoTransformWhiteList);
        }
    },

    onAbout: function() {
        window.openDialog("chrome://padma/content/about.xul", "padmaabout", "chrome");
    },

    prefExtVersion: 'extVersion',
    prefRTSWritingStyle: "RTSOutputFormat",
    prefRTSSunnaStyle: "RTSSunnaStyle", //also for pollu
    prefEnableAutoTransform: "enableAutoTransform",
    prefAutoTransformWhiteList: "autoTransformWhiteList",
    prefFixCharEncoding: "fixCharEncoding",
    prefEnableRTS: "enableRTS",
    prefEnableISCII: "enableISCII",
    prefEnableITRANS: "enableITRANS",
    prefEnableTelugu: "enableTelugu",
    prefEnableMalayalam: "enableMalyalam",
    prefEnableTamil: "enableTamil",
    prefEnableDevanagari: "enableDevanagari",
    prefEnableGujarati: "enableGujarati",
    prefEnableKannada: "enableKannada"
};
