// $Id: whitelist.js,v 1.6 2005/11/23 19:54:43 vnagarjuna Exp $ -->

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

    defaultLabel: "Default",
    defaultValue: -1,
    
    onLoad: function() {
        //Get handles
        this.params = window.arguments[0];

        this.removeButton = document.getElementById("btnRemove");
        this.removeAllButton = document.getElementById("btnRemoveAll");
        this.addButton    = document.getElementById("autoBtnAdd");
        this.newSiteBox   = document.getElementById("autoSiteTextbox");
        this.whitelistBox = document.getElementById("autoSitelist");
        this.scriptList   = document.getElementById("autoScriptList");
        this.scriptChangePopup = document.getElementById('changeScriptPopup');
        
        //Fill the script list with the menu items
        //Add Default always
        this.scriptList.appendItem(this.defaultLabel, this.defaultValue);
        this.scriptChangePopup.appendChild(this.getPopupMenuItem(this.defaultLabel, this.defaultValue));
        for(var i = 0; i < Padma.script_MAXSCRIPTS; ++i) {
            this.scriptList.appendItem(Padma.scripts[i], i);
            this.scriptChangePopup.appendChild(this.getPopupMenuItem(Padma.scripts[i], i));
        }
        this.scriptList.selectedIndex = 0;

        //Load site list
        if (this.params.input.length != 0) {
            var sites = this.params.input.split(",");
            for(i = 0; i < sites.length; ++i) {
                var map = sites[i].split(":");
                if (map.length != 2 || map[1] >= Padma.script_MAXSCRIPTS)
                    continue;
                this.appendItem(map[0], map[1]);
            }
        }
        else this.removeAllButton.disabled = true;
    },

    onSave: function() {
        //Cheap hack to enable user to add a site by pressing enter
        if (this.newSiteBox.value.length != 0) {
            this.onAddSite();
            return false;
        }
        var rows = this.whitelistBox.getRowCount(), whitelist = "";
        for(var i = 0; i < rows; ++i) {
            var item = this.whitelistBox.getItemAtIndex(i);
            var cell1 = item.firstChild;
            var index =  cell1.nextSibling.getAttribute(this.cellAttributeIndexName);
            if (index >= Padma.script_MAXSCRIPTS)
                continue;
            if (i != 0)
                whitelist += ",";
            whitelist += cell1.getAttribute('label') + ":" + index;
        }
        this.params.output = whitelist;
        return true;
    },

    onSelected: function() {
        this.removeButton.disabled = (this.whitelistBox.selectedIndex == -1);
    },

    onNewSiteInput: function() {
        this.addButton.disabled = this.scriptList.disabled = !this.newSiteBox.value;
    },

    onAddSite: function() {
        var host;
        if ((host = this.checkSite(this.newSiteBox.value)) == null) {
            return false;
        }

        if (!this.listHasSite(host)) {
            var item = this.appendItem(host, this.scriptList.selectedItem.value);
            this.whitelistBox.ensureElementIsVisible(item);
            this.scriptList.disabled = true;
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
        this.whitelistBox.removeItemAt(index + 1 + 1);

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
                this.whitelistBox.removeItemAt(i + 1);
            this.removeAllButton.disabled = true;
        }
    },

    appendItem: function(label, value) {
        var item = document.createElement('listitem');
        var cell1 = document.createElement('listcell'), cell2 = document.createElement('listcell');
        cell1.setAttribute('label', label);
        cell2.setAttribute('label', value == this.defaultValue ? this.defaultLabel : Padma.scripts[value]);
        cell2.setAttribute(this.cellAttributeIndexName, value);
        item.appendChild(cell1);
        item.appendChild(cell2);
        item.setAttribute('context', 'changeScriptPopup');
        this.whitelistBox.appendChild(item);
        return item;
    },

    getPopupMenuItem: function(label, value) {
        var menuItem = document.createElement('menuitem');
        menuItem.setAttribute('label', label);
        menuItem.setAttribute('oncommand', 'PadmaWhitelist.onChangeScript(' + value + ')');
        return menuItem;
    },

    onChangeScript: function(value) {
        var index = this.whitelistBox.selectedIndex;
        if (index == -1)
            return;

        var selItem = this.whitelistBox.selectedItem;
        var cell2   = selItem.firstChild.nextSibling;;
        cell2.setAttribute('label', value == this.defaultValue ? this.defaultLabel : Padma.scripts[value]);
        cell2.setAttribute(this.cellAttributeIndexName, value);
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
            if (this.whitelistBox.getItemAtIndex(i).firstChild.getAttribute('label') == site)
                return true;

        return false;
    },

    cellAttributeIndexName: 'padma_internalindex'
};
