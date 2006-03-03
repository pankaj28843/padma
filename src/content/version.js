// $Id: version.js,v 1.5 2006/03/03 15:32:08 vnagarjuna Exp $ -->

//Copyright 2005-2006 Nagarjuna Venna <vnagarjuna@yahoo.com>

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
var Padma_Version = {

    curVersion    : '0.4.5',

    getCurVersion : function() {
        return this.curVersion;
    },

    getCurVersionInt : function() {
        return this.convertVersionToInt(this.curVersion);
    },

    //Allow for version numbers of the form "a.b.c.d"
    convertVersionToInt: function(ver) {
        var num = ver.split('.');
        var version = 0, multiplier = 10;
        for(var i = num.length - 1; i >= 0; --i, multiplier *= 100)
            version += num[i] * multiplier;
        return version;
    }
};

