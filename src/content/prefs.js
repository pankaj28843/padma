// $Id: prefs.js,v 1.11 2006/10/15 17:24:47 vnagarjuna Exp $ -->

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
        this.enableTSCII = document.getElementById("enableTSCII");
        this.enableTAB = document.getElementById("enableTAB");
        this.enableTAM = document.getElementById("enableTAM");
        this.enableTelugu = document.getElementById("enableTelugu");
        this.enableMalayalam = document.getElementById("enableMalayalam");
        this.enableTamil = document.getElementById("enableTamil");
        this.enableDevanagari = document.getElementById("enableDevanagari");
        this.enableGujarati = document.getElementById("enableGujarati");
        this.enableKannada = document.getElementById("enableKannada");
        this.enableBengali = document.getElementById("enableBengali");

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
        this.enableTSCII.checked = this.branch.getBoolPref(this.prefEnableTSCII);
        this.enableTAB.checked = this.branch.getBoolPref(this.prefEnableTAB);
        this.enableTAM.checked = this.branch.getBoolPref(this.prefEnableTAM);
        this.enableTelugu.checked = this.branch.getBoolPref(this.prefEnableTelugu);
        this.enableMalayalam.checked = this.branch.getBoolPref(this.prefEnableMalayalam);
        this.enableTamil.checked = this.branch.getBoolPref(this.prefEnableTamil);
        this.enableDevanagari.checked = this.branch.getBoolPref(this.prefEnableDevanagari);
        this.enableGujarati.checked = this.branch.getBoolPref(this.prefEnableGujarati);
        this.enableKannada.checked = this.branch.getBoolPref(this.prefEnableKannada);
        this.enableBengali.checked = this.branch.getBoolPref(this.prefEnableBengali);

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
        this.branch.setBoolPref(this.prefEnableTSCII,  this.enableTSCII.checked);
        this.branch.setBoolPref(this.prefEnableTAB,    this.enableTAB.checked);
        this.branch.setBoolPref(this.prefEnableTAM,    this.enableTAM.checked);

        this.branch.setBoolPref(this.prefEnableTelugu,     this.enableTelugu.checked);
        this.branch.setBoolPref(this.prefEnableMalayalam,  this.enableMalayalam.checked);
        this.branch.setBoolPref(this.prefEnableTamil,      this.enableTamil.checked);
        this.branch.setBoolPref(this.prefEnableDevanagari, this.enableDevanagari.checked);
        this.branch.setBoolPref(this.prefEnableGujarati,   this.enableGujarati.checked);
        this.branch.setBoolPref(this.prefEnableKannada,    this.enableKannada.checked);
        this.branch.setBoolPref(this.prefEnableBengali,    this.enableBengali.checked);

        this.branch.setCharPref(this.prefAutoTransformWhiteList, this.autoTransformWhiteList);
        this.applyButton.disabled = true;
    },

    onCheckBoxUpdate: function() {
        this.autoListUpdate.disabled = this.fixCharEncoding.disabled = !this.autoCheck.checked;
        this.enableRTS.disabled = !this.enableTelugu.checked;
        this.rtsWritingStyleButton.disabled = this.rtsSunnaStyleButton.disabled = !this.enableTelugu.checked || !this.enableRTS.checked;
        this.enableISCII.disabled = this.enableITRANS.disabled = !this.enableTelugu.checked && !this.enableTamil.checked &&
                                    !this.enableMalayalam.checked && !this.enableDevanagari.checked && !this.enableGujarati.checked && 
                                    !this.enableKannada.checked && !this.enableBengali.checked;
        this.enableTSCII.disabled = this.enableTAB.disabled = this.enableTAM.disabled = !this.enableTamil.checked;
        this.applyButton.disabled = false;
    },

    updateAutoTransformList: function() {
        var params = { input: this.autoTransformWhiteList, output: null };
        window.openDialog("chrome://padma/content/whitelist.xul", "updateauottransformlist", "chrome,modal", params);
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
    prefEnableTSCII: "enableTSCII",
    prefEnableTAB: "enableTAB",
    prefEnableTAM: "enableTAM",
    prefEnableTelugu: "enableTelugu",
    prefEnableMalayalam: "enableMalyalam",
    prefEnableTamil: "enableTamil",
    prefEnableDevanagari: "enableDevanagari",
    prefEnableGujarati: "enableGujarati",
    prefEnableKannada: "enableKannada",
    prefEnableBengali: "enableBengali"
};
