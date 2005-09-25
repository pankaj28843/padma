// $Id: prefs.js,v 1.2 2005/09/25 14:52:25 vnagarjuna Exp $ -->

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
        this.heuristicCheck = document.getElementById("enableHeuristics");
        this.autoListUpdate = document.getElementById("updateAutoTransformList");
        this.heuristicListUpdate = document.getElementById("updateHeuristicsList");
        this.fixCharEncoding = document.getElementById("fixCharEncoding");

        //RTS Writing Style - default = 0
        this.rtsWritingStyle = this.branch.prefHasUserValue(this.prefRTSWritingStyle) ? 
                               this.branch.getIntPref(this.prefRTSWritingStyle) : 0;
        if (this.rtsWritingStyle > 2 || this.rtsWritingStyle < 0)
            this.rtsWritingStyle = 0;
        this.rtsWritingStyleButton.selectedIndex = this.rtsWritingStyle;

        //RTS Sunna and Pollu Style - default = 0
        this.rtsSunnaStyle = this.branch.prefHasUserValue(this.prefRTSSunnaStyle) ? this.branch.getIntPref(this.prefRTSSunnaStyle) : 0;
        if (this.rtsSunnaStyle > 1 || this.rtsSunnaStyle < 0)
            this.rtsSunnaStyle = 0;
        this.rtsSunnaStyleButton.selectedIndex = this.rtsSunnaStyle;

        //Auto Transform - default = true
        this.autoCheck.checked = this.branch.prefHasUserValue(this.prefEnableAutoTransform) ? 
                                 this.branch.getBoolPref(this.prefEnableAutoTransform) : true;
        if (!this.autoCheck.checked)
            this.autoListUpdate.disabled = true;
        
        //Heuristics based Transform - default = true
        this.heuristicCheck.checked = this.branch.prefHasUserValue(this.prefEnableHeuristics) ? 
                                      this.branch.getBoolPref(this.prefEnableHeuristics) : true;
        if (!this.heuristicCheck.checked)
            this.heuristicListUpdate.disabled = true;

        //White list for auto transform
        this.autoTransformWhiteList = this.branch.prefHasUserValue(this.prefAutoTransformWhiteList) ? 
                                      this.branch.getCharPref(this.prefAutoTransformWhiteList) : this.defAutoTransformWhiteList;

        //White list for heuristic transform
        this.heuristicTransformWhiteList = this.branch.prefHasUserValue(this.prefHeuristicTransformWhiteList) ? 
                                           this.branch.getCharPref(this.prefHeuristicTransformWhiteList) : this.defHeuristicTransformWhiteList;

        //Fix Char Encoding - default = true
        this.fixCharEncoding.checked = this.branch.prefHasUserValue(this.prefFixCharEncoding) ? 
                                 this.branch.getBoolPref(this.prefFixCharEncoding) : true;
        if (!this.autoCheck.checked)
            this.fixCharEncoding.disabled = true;

        this.applyButton = document.documentElement.getButton("extra1");
        this.applyButton.disabled = true;
    },

    onSave: function() {
        this.rtsWritingStyle = this.rtsWritingStyleButton.selectedIndex;
        this.rtsSunnaStyle   = this.rtsSunnaStyleButton.selectedIndex;
        this.branch.setIntPref(this.prefRTSWritingStyle, this.rtsWritingStyle);
        this.branch.setIntPref(this.prefRTSSunnaStyle, this.rtsSunnaStyle);

        this.branch.setBoolPref(this.prefEnableAutoTransform, this.autoCheck.checked);
        this.branch.setBoolPref(this.prefEnableHeuristics, this.heuristicCheck.checked);
        this.branch.setBoolPref(this.prefFixCharEncoding, this.fixCharEncoding.checked);

        this.branch.setCharPref(this.prefAutoTransformWhiteList, this.autoTransformWhiteList);
        this.branch.setCharPref(this.prefHeuristicTransformWhiteList, this.heuristicTransformWhiteList);
        this.applyButton.disabled = true;
    },

    onCheckBoxUpdate: function() {
        this.autoListUpdate.disabled = this.fixCharEncoding.disabled = !this.autoCheck.checked;
        this.heuristicListUpdate.disabled = !this.heuristicCheck.checked;
        this.applyButton.disabled = false;
    },

    updateAutoTransformList: function() {
        var params = { input: this.autoTransformWhiteList, type: 0, title: "Automatic Transform List", output: null };
        window.openDialog("chrome://padma/content/whitelist.xul", "updateauottransformlist", "chrome", params);
        if (params.output != null) {
            this.autoTransformWhiteList = params.output;
            this.branch.setCharPref(this.prefAutoTransformWhiteList, this.autoTransformWhiteList);
        }
    },

    updateHeuristicTransformList: function() {
        var params = { input: this.heuristicTransformWhiteList, type: 1, title: "Heuristic Transform List", output: null };
        //Setting title from here does not work
        window.openDialog("chrome://padma/content/whitelist.xul", "updateheuristictransformlist", "chrome,title=\"Heuristic Transform List\"", params);
        if (params.output != null) {
            this.heuristicTransformWhiteList = params.output;
            this.branch.setCharPref(this.prefHeuristicTransformWhiteList, this.heuristicTransformWhiteList);
        }
    },

    onAbout: function() {
        window.openDialog("chrome://padma/content/about.xul", "padmaabout", "chrome");
    },

    defAutoTransformWhiteList: "www.eenadu.net,www.andhrajyothy.com,www.andhraprabha.com,www.apweekly.com,www.vaarttha.com,www.vaartha.com,www.deepika.com,www.mangalam.com",
    defHeuristicTransformWhiteList: "www.andhrajyothy.com:1,www.deepika.com:5",
    prefRTSWritingStyle: "RTSOutputFormat",
    prefRTSSunnaStyle: "RTSSunnaStyle", //also for pollu
    prefEnableAutoTransform: "enableAutoTransform",
    prefEnableHeuristics: "enableHeuristics",
    prefAutoTransformWhiteList: "autoTransformWhiteList",
    prefHeuristicTransformWhiteList: "heuristicWhiteList",
    prefFixCharEncoding: "fixCharEncoding"
};
