// $Id: defaults.js,v 1.2 2006/02/20 21:16:28 vnagarjuna Exp $ -->

//Copyright 2006 Nagarjuna Venna <vnagarjuna@yahoo.com>

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

//Based on http://kb.mozillazine.org/Mozilla_Default_Prefs

var Padma_Extension_DefaultPrefCheck = {
    
    extName: 'padma', 
    
    check: function() {
        var file = Components.classes["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties)
                             .get("ProfD", Components.interfaces.nsIFile);
        file.append("pref");
        file.append(this.extName + ".js");
        if (!file.exists()) 
            return; // if not on Mozilla file does not exist so exit
        var data = this.readData(file);
        
        // remove comments and split lines into array
        data = data.replace(/\/\/.*/gm, "").replace(/\/\*([^*][^\/])*[^\0]?\*\//gm, "").split(';');
        
        // check pref type and set, if it does not exist
        var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
        for (var i=0; i<data.length; i++) {
            //if valid pref line
            if (/^\s*pref\(.*\,.*\)\s*$/i.test(data[i])) {
                var pref = data[i].slice(data[i].indexOf('(') + 2, data[i].indexOf(',') - 1);
                var value = data[i].slice(data[i].indexOf(',') + 1, data[i].indexOf(')'));
                
                if (/^\s*false\s*$/i.test(value) || /^\s*true\s*$/i.test(value)) { // if boolean pref
                    value = (/\s*true\s*/i.test(value));
                    try {
                        prefs.getBoolPref(pref);
                    } catch (e) {
                        prefs.setBoolPref(pref, value);
                    }
                }
                else if (/^\s*["][^"]*[\"]\s*$/.test(value)) { // if char pref
                    value = value.slice(value.indexOf('"') + 1,value.lastIndexOf('"'));
                    try {
                        prefs.getCharPref(pref);
                    } catch (e) {
                        prefs.setCharPref(pref, value);
                    }
                }
                else { // if integer pref
                    value = new Number(value);
                    try {
                        prefs.getIntPref(pref);
                    } catch (e) {
                        prefs.setIntPref(pref, value);
                    }
                }
            }
        }
    },
    
    readData: function(file) {
        var data = "";
        var fstream = Components.classes["@mozilla.org/network/file-input-stream;1"]
            .createInstance(Components.interfaces.nsIFileInputStream);
        var sstream = Components.classes["@mozilla.org/scriptableinputstream;1"]
            .createInstance(Components.interfaces.nsIScriptableInputStream);
        fstream.init(file, 1, 0, false);
        sstream.init(fstream); 
        
        var str = sstream.read(-1);
        while (str.length > 0) {
            data += str;
            str = sstream.read(-1);
        }
        
        sstream.close();
        fstream.close();
        
        return data;
    }
}
