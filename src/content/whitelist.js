// $Id: whitelist.js,v 1.3 2005/09/30 14:32:30 vnagarjuna Exp $ -->

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

//This code was based on Flashblock's implementation of a whitelist
//It has now morphed considerably - NV 8/2

var PadmaWhitelist = {
    
    onLoad: function() {

        Transformer.initialize();
        var dialog = document.getElementById("padma_whitelist_dialog");
        
        //Determine dialog type and get handles
        this.params = window.arguments[0];

        this.removeButton = document.getElementById("btnRemove");
        this.removeAllButton = document.getElementById("btnRemoveAll");
        if (this.params.type == 0) {
            this.addButton    = document.getElementById("autoBtnAdd");
            this.newSiteBox   = document.getElementById("autoSiteTextbox");
            this.whitelistBox = document.getElementById("autoSitelist");
            document.getElementById("autoAddSite").hidden = false;
            document.getElementById("autoDescription").hidden = false;
        }
        else {
            this.addButton    = document.getElementById("heurBtnAdd");
            this.newSiteBox   = document.getElementById("heurSiteTextbox");
            this.fontList     = document.getElementById("heurFontList");
            this.whitelistBox = document.getElementById("heurSitelist");
            document.getElementById("heurAddSite").hidden = false;
            document.getElementById("heurDescription").hidden = false;

            //Fill the font list with the menu items
            for(i = 0; i < Transformer.dynFont_Unknown; ++i)
                this.fontList.appendItem(Transformer.dynFont_DisplayName[i], i);
            this.fontList.selectedIndex = 0;
        }
        this.whitelistBox.hidden = false;
        
        //Load site list
        if (this.params.input.length != 0) {
            var sites = this.params.input.split(",");
            if (this.params.type == 0) {
                for(var i = 0; i < sites.length; ++i)
                    this.whitelistBox.appendItem(sites[i]);
            }
            else {
                for(i = 0; i < sites.length; ++i) {
                    var map = sites[i].split(":");
                    if (map.length != 2)
                        continue;
                    var item = this.whitelistBox.appendItem(map[0]), cell = document.createElement("listcell");
                    cell.setAttribute("label", Transformer.dynFont_DisplayName[map[1]]);
                    cell.setAttribute(this.cellAttributeIndexName, map[1]);
                    item.appendChild(cell);
                }
            }
        }
        else this.removeAllButton.disabled = true;

        document.title = this.params.title;
    },

    onSave: function() {
        //Cheap hack to enable user to add a site by pressing enter
        if (this.newSiteBox.value.length != 0) {
            this.onAddSite();
            return false;
        }
        var rows = this.whitelistBox.getRowCount(), whitelist = "";
        if (this.params.type == 0) {
            for(var i = 0; i < rows; ++i) {
                if (i != 0)
                    whitelist += ",";
                whitelist += this.whitelistBox.getItemAtIndex(i).label;
            }
        }
        else {
            for(i = 0; i < rows; ++i) {
                var item = this.whitelistBox.getItemAtIndex(i);
                if (i != 0)
                    whitelist += ",";
                var index =  item.firstChild.getAttribute(this.cellAttributeIndexName);
                if (index != Transformer.dynFont_Unknown)
                    whitelist += item.label + ":" + index;
            }
        }
        this.params.output = whitelist;
        return true;
    },

    onSelected: function() {
        this.removeButton.disabled = (this.whitelistBox.selectedIndex == -1);
    },

    onNewSiteInput: function() {
        this.addButton.disabled = !this.newSiteBox.value;
        if (this.params.type == 1)
            this.fontList.disabled = !this.newSiteBox.value;
    },

    onAddSite: function() {
        var host;
        if ((host = this.checkSite(this.newSiteBox.value)) == null) {
            return false;
        }

        if (!this.listHasSite(host)) {
            if (this.params.type == 0)
                this.whitelistBox.ensureElementIsVisible(this.whitelistBox.appendItem(host));
            else {
                var item = this.whitelistBox.appendItem(host), cell = document.createElement("listcell");
                cell.setAttribute("label", Transformer.dynFont_DisplayName[this.fontList.selectedItem.value]);
                cell.setAttribute(this.cellAttributeIndexName, this.fontList.selectedItem.value);
                item.appendChild(cell);
                this.fontList.disabled = true;
                this.whitelistBox.ensureElementIsVisible(item);
            }
        }
            
        this.newSiteBox.value = "";
        this.addButton.disabled = true;
        this.newSiteBox.focus();
        //Remove any selection
        this.whitelistBox.selectedIndex = -1;
        this.removeButton.disabled = true;
        this.removeAllButton.disabled = false;
        return true;
    },

    onRemoveSite: function() {
        var index = this.whitelistBox.selectedIndex;
        if (index == -1)
            return;

        var rows = this.whitelistBox.getRowCount();
        var selItem = this.whitelistBox.selectedItem;

        //+1 because there is a header row
        //Mysteriously +1 more for the multi-column list
        this.whitelistBox.removeItemAt(index + 1 + (this.params.type == 0 ? 0 : 1));

        //set focus on next site unless we just deleted the last site
        if (index == rows - 1) {
            if (rows != 1)
                this.whitelistBox.selectItem(this.whitelistBox.getItemAtIndex(index - 1));
            else this.removeButton.disabled = this.removeAllButton.disabled = true;
        }
        else this.whitelistBox.selectItem(this.whitelistBox.getItemAtIndex(index));
    },

    onKeyPress: function (aEvent) {
        if (aEvent.keyCode == 46)
            this.onRemoveSite();
    },
    

    onRemoveAll: function() {
        if (confirm("Are you sure you want to remove all the sites?")) {
            var rows = this.whitelistBox.getRowCount();
            //Account for the header row
            //Mysteriously +1 more for the multi-column list
            for(var i = rows; i > 0; --i)
                this.whitelistBox.removeItemAt(i + (this.params.type == 0 ? 0 : 1));
            this.removeAllButton.disabled = true;
        }
    },

    //TODO: sort
    onClick: function() {
    },

    checkSite: function(site) {
        var host = site.replace(/^\s*/, "");
        if (!/^(http:\/\/)?[-\w\.]+(\/)?$/.test(host)) {
            alert("The URI entered is invalid");
            return null;
        }
        return host.replace(/^(http:\/\/)/, "").replace(/(\/)+$/, "");
    },

    listHasSite: function(site) {
        var rows = this.whitelistBox.getRowCount();
        for(var i = 0; i < rows; ++i)
            if (this.whitelistBox.getItemAtIndex(i).label == site)
                return true;

        return false;
    },

    cellAttributeIndexName: 'padma_internalindex'
};
