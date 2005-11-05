// $Id: upgrade.js,v 1.1 2005/11/05 16:27:16 vnagarjuna Exp $ -->

//Copyright 2005 Nagarjuna Venna <vnagarjuna@yahoo.com>

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

//Upgrade from version to version
var Padma_Extension_Upgrader = {

    curVer     : Padma_Version.getCurVersionInt(),
    prefBranch : Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService).getBranch("Padma."),

    //There was no version number preference until v0.4.3
    doUpgrade : function() {
        var exists = this.prefBranch.prefHasUserValue(PadmaSettings.prefExtVersion);
        //Upgrades will be in a step wise fashion i.e. if current version is 0.4.5 and previous version is 0.4.3 
        //we first upgrade to 0.4.4 and then to 0.4.5
        var prevVer = exists ? this.prefBranch.getIntPref(PadmaSettings.prefExtVersion) : 0;
        var ver043  = Padma_Version.convertVersionToInt('0.4.3');
        //Is prevver before 0.4.3?
        if (prevVer < ver043)
            this.upgradeFromPre043();
        this.prefBranch.setIntPref(PadmaSettings.prefExtVersion, this.curVer);
    },

    upgradeFromPre043 : function() {
        //delete heuristic transform related prefs
        this.prefBranch.deleteBranch('enableHeuristics');
        this.prefBranch.deleteBranch('heuristicWhiteList');

        //transform auto transform white list to include script selector
        var whitelist = this.prefBranch.getCharPref('autoTransformWhiteList'), newlist = "";
        var sites = whitelist.split(',');
        for(var i = 0; i < sites.length; i++) {
            //be anal
            var check = sites[i].split(':');
            newlist += sites[i] + (check.length == 1 ? ':-1' : '');
            if (i != sites.length - 1)
                newlist += ',';
        }
        this.prefBranch.setCharPref(PadmaSettings.prefAutoTransformWhiteList, newlist);
    }
};

