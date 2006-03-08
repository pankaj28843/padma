// $Id: padma.js,v 1.27 2006/03/08 14:20:48 vnagarjuna Exp $ -->

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

//Broswer - both automatic and manual transformation start here

var Padma_Browser_Transformer = {

    //Common stuff

    inputMethod:  Transformer.method_Unknown,
    outputMethod: Transformer.method_Unknown,
    transfomer:   null,

    //Preferences
    prefBranch: Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService).getBranch("Padma."),
    whitelist:  null,

    createTransformer : function(inputMode, outputMode) {
        this.inputMethod = inputMode;
        this.outputMethod = outputMode;

        if (this.outputMethod == Transformer.method_RTS)
            this.transformer = Transformer.createTransformer(this.inputMethod, this.outputMethod, 
                                                             this.prefBranch.getIntPref(PadmaSettings.prefRTSWritingStyle), 
                                                             this.prefBranch.getIntPref(PadmaSettings.prefRTSSunnaStyle));
        else this.transformer = Transformer.createTransformer(this.inputMethod, this.outputMethod);
    },

    isFixCharEncoding: function() {
        return this.prefBranch.getBoolPref(PadmaSettings.prefFixCharEncoding);
    },

    //From http://www.mozilla.org/docs/dom/technote/whitespace/nodomws.js
    is_all_ws: function(text) {
        return !(/[^\t\n\r ]/.test(text));
    },

    //text-align:justify does not work for Unicode, set it to left if the alignmet is not supported
    unModifiableTextAligns: { left: true, right: true, center: true, start: true },

    setNodeTextAlign: function (node, align) {
        if (this.unModifiableTextAligns[align] != true)
            node.style.textAlign = "left";
    },

    onExtensionInit: function() {
        //Handle background loads in the browser
        var appcontent = document.getElementById("appcontent"); //browser
        if (appcontent)
            appcontent.addEventListener("DOMContentLoaded", this.onPageLoadPre, true);
        var messagepane = document.getElementById("messagepane");   //mail
        if (messagepane)
            messagepane.addEventListener("DOMContentLoaded", this.onPageLoadPre, true);

        //Before the manual transform popup window is shown
        var contextMenu = document.getElementById("contentAreaContextMenu"); //browser
        if (contextMenu)
            contextMenu.addEventListener("popupshowing", this.onPopupShowingPre, true);
        //mail
        contextMenu = document.getElementById("messagePaneContext");
        if (contextMenu)
            contextMenu.addEventListener("popupshowing", this.onPopupShowingPre, true);
        contextMenu = document.getElementById("msgComposeContext");
        if (contextMenu)
            contextMenu.addEventListener("popupshowing", this.onPopupShowingPre, true);

        //Initialize other one time stuff
        initializeRelationships();
        Unicode.initialize();
        Transformer.initialize();

        //Ensure default prefs are available on Mozilla suite
        Padma_Extension_DefaultPrefCheck.check();

        //Install this as a preference observer for autotransform  white list 
        this.prefBranch.QueryInterface(Components.interfaces.nsIPrefBranchInternal);
        this.prefBranch.addObserver(PadmaSettings.prefAutoTransformWhiteList, this, false);

        //Build auto transform whitelist
        this.buildAutoTransformWhiteList();

        //TODO: Should do this only at install time
        Padma_Extension_Upgrader.doUpgrade();
    },

    //returns font if set, otherwise null
    setDynamicFont: function(fonts) {
        var font_list = fonts.split(","), font_is_valid = false;

        for(var i = 0; i < font_list.length; ++i) {
            if (this.transformer.setDynamicFontByName(font_list[i]))  //can transform?
                return font_list[i];
        }
        return null;
    },

    //Auto Transform
    attrFontFamilyProperty: "padma_font_family_property",

    //The event target is the browser window, this is a hack to make Pamda_Browser_Transformer 'this'
    onPageLoadPre: function(evt) {
        Padma_Browser_Transformer.onPageLoad(evt);
    },

    //Transform all children of this node
    transformNode: function(page, node) {
        if(node.nodeType == 3) {
            if (this.is_all_ws(node.nodeValue))
               return;
            var parent = node.parentNode;
            if (parent.nodeType == 1) {
                var style = page.defaultView.getComputedStyle(parent, null);
                var font = parent.getAttribute(this.attrFontFamilyProperty);
                if (font == null) {
                    font = style.getPropertyValue("font-family");
                    parent.setAttribute(this.attrFontFamilyProperty, font);
                }
                if (this.setDynamicFont(font) != null) {
                    node.replaceData(0, node.length, this.transformer.convert(node.nodeValue));
                    this.setNodeTextAlign(parent, style.getPropertyValue("text-align"));
                }
            }
        }
        //Ignore comment nodes and script nodes
        else if (node.nodeType != 8 && (node.nodeType != 1 || !(node instanceof HTMLScriptElement))) {
            for(var j = 0; j < node.childNodes.length; ++j)
                this.transformNode(page, node.childNodes.item(j));
        }
    },

    buildAutoTransformWhiteList: function() {
        var whitelist = this.prefBranch.getCharPref(PadmaSettings.prefAutoTransformWhiteList);

        this.whitelist = new Object();
        var sites = whitelist.split(",");
        for(var i = 0; i < sites.length; ++i) {
            var map = sites[i].split(":");
            if (map.length < 2)
                continue;
            //Let the beginning www. be optional
            if (map[0].match(/^www./) != null)
                this.whitelist[map[0].substr(4)] = map[1];
            else this.whitelist[map[0]] = map[1];
        }
    },

    isAutoTransformEnabled: function() {
        return this.prefBranch.getBoolPref(PadmaSettings.prefEnableAutoTransform);
    },

    onPageLoad: function(evt) {
        var start = new Date().getTime();
        var page = evt.originalTarget;
        if (!page || !page.location || page.location.toString().match('^about:') || page.location.host == undefined || !this.isAutoTransformEnabled())
            return;

        //check if this page needs to be transformed
        var script;
        if (page.location.host.match(/^www./) != null)
            script = this.whitelist[page.location.host.substr(4)];
        else {
            script = this.whitelist[page.location.host];
            if (script == undefined)
                script = this.whitelist[page.location.host.replace(/^[^.]*\./, '')];
        }
        if (script == undefined)
            return;

        if (page.characterSet == 'x-user-defined' && this.isFixCharEncoding()) {
            var requestor = page.defaultView.QueryInterface(Components.interfaces.nsIInterfaceRequestor);
            var navigator = requestor.getInterface(Components.interfaces.nsIWebNavigation);
            var docCharSet = requestor.getInterface(Components.interfaces.nsIDocCharset);
            docCharSet.charset = 'ISO-8859-1';
            navigator.reload(Components.interfaces.nsIWebNavigation.LOAD_FLAGS_CHARSET_CHANGE);
            return;
        }

        this.createTransformer(Transformer.method_DynFonts, Transformer.method_Unicode);
        if (script != -1)
            this.transformer.setOutputScript(script);

        var body = page.getElementsByTagName("BODY");
        for(var j = 0; j < body.length; ++j)
            this.transformNode(page, body[j]);
        var end = new Date().getTime();
        //alert(end - start);
    },

    //Manual transform starts here
    popupNodeBaseURI: null,

    //if transforming to RTS, set font-family to Arial so that the right text is displayed even
    //if the dynamic font is installed on the user machine
    setNodeFontFamily: function (node) {
        node.style.fontFamily = "Arial";
    },

    //Based on input method, determine if the selected text needs to be transformed
    requiresTransform: function(page, node) {
        if (this.inputMethod == Transformer.method_RTS || this.inputMethod == Transformer.method_ISCII ||
            this.inputMethod == Transformer.method_ITRANS || this.inputMethod == Transformer.method_TSCII ||
            this.inputMethod == Transformer.method_TAB || this.inputMethod == Transformer.method_TAM)
            return true;

        if (this.inputMethod == Transformer.method_Unknown) {
            if (node.nodeValue.match(/[\u0C00-\u0C7F]/)) {
                if (this.outputMethod == Transformer.method_RTS && node.parentNode.nodeType == 1)
                    this.setNodeFontFamily(node.parentNode);
                return true;
            }
        }
        
        if (this.inputMethod == Transformer.method_DynFonts || this.inputMethod == Transformer.method_Unknown) {
            var parent = node.parentNode;
            if (parent.nodeType != 1)
                return false;
            
            //Check computed style for parent node
            var style = page.defaultView.getComputedStyle(parent, null);
            var font = style.getPropertyValue("font-family");
            if (this.setDynamicFont(font) != null) {
                if (this.outputMethod == Transformer.method_RTS)
                    this.setNodeFontFamily(parent);
                if (this.outputMethod == Transformer.method_Unicode)
                    this.setNodeTextAlign(parent, style.getPropertyValue("text-align"));
                return true;
            }
        }
        return false;
    },

    //Process all nodes with root "root"
    processNodes: function(page, selection, root, start, end, soff, eoff) {
        if (root.nodeType == 3) {
            if (selection.containsNode(root, true) && !this.is_all_ws(root.nodeValue) && this.requiresTransform(page, root)) {
                if (root == start && root == end)
                    root.replaceData(soff, eoff - soff, this.transformer.convert(root.nodeValue.substring(soff, eoff)));
                else if (root == start)
                    root.replaceData(soff, root.length - soff, this.transformer.convert(root.nodeValue.substring(soff)));
                else if (root == end)
                    root.replaceData(0, eoff, this.transformer.convert(root.nodeValue.substring(0, eoff)));
                else root.replaceData(0, root.length, this.transformer.convert(root.nodeValue));
            }
        }
        else if (root.nodeType != 8) {
            //Don't process comment nodes
            for(var i = 0; i < root.childNodes.length; ++i)
                this.processNodes(page, selection, root.childNodes.item(i), start, end, soff, eoff);
        }
    },

    traverseDOM: function(page, selection) {
        var inputMethod = this.transformer.getInputMethod();

        for(var i = 0; i < selection.rangeCount; i++) {
            var range = selection.getRangeAt(i);
            this.processNodes(page, selection, range.commonAncestorContainer, range.startContainer, range.endContainer, 
                              range.startOffset, range.endOffset);
        }
    },
    
    //Used only for special controls
    setTransformedText: function(text) {
        //The credit for this piece goes to Jed Brown of the BBCode extension.
        //http://jedbrown.net/1.0
        try {
            var command = "cmd_insertText";
            var controller = document.commandDispatcher.getControllerForCommand(command);
            
            if (controller && controller.isCommandEnabled(command)) {
                controller = controller.QueryInterface(Components.interfaces.nsICommandController);
                var params = Components.classes["@mozilla.org/embedcomp/command-params;1"];
                params = params.createInstance(Components.interfaces.nsICommandParams);
                
                params.setStringValue("state_data", text);
                controller.doCommandWithParams(command, params);
            }
        } 
        catch (e) {
            dump("Can't do cmd_insertText! ");
            dump(e+"\n");
        }
    },

    getSelection : function(node) {
        var result = { selection: null, control: true };
        if (node instanceof HTMLTextAreaElement || (node instanceof HTMLInputElement && 
                                                    (node.type == "text" || node.type == "password"))) 
        {
            result.selection = node.value.substring(node.selectionStart, node.selectionEnd);
        }
        else {
            var focusedWindow = document.commandDispatcher.focusedWindow;
            result.selection = focusedWindow.getSelection();
            result.control = false;
        }
        return result;
    },

    //Callback
    onManualTransform: function(inputMode, outputMode) {
        var start = new Date().getTime();
        
        //Create a transformer
        this.createTransformer(inputMode, outputMode);

        if (arguments.length > 2) {
            if (this.inputMethod == Transformer.method_RTS)
                this.transformer.setRTSMode(arguments[2]);
            else if (this.inputMethod == Transformer.method_ISCII || this.inputMethod == Transformer.method_ITRANS || 
                     this.inputMethod == Transformer.method_TSCII || this.inputMethod == Transformer.method_TAB || 
                     this.inputMethod == Transformer.method_TAM)
                this.transformer.setOutputScript(arguments[2]);
        }

        this.popupNodeBaseURI = document.popupNode.baseURI;
        var result = this.getSelection(document.popupNode);
        if (result.control) {
            //For the specials
            this.setTransformedText(this.transformer.convert(result.selection));
        }
        else {
            //for regular selection
            this.traverseDOM(document.popupNode.ownerDocument, result.selection);
            if (result.selection.rangeCount != 0)
                result.selection.collapseToEnd();
        }

        var end = new Date().getTime();
        //alert(end - start);
    },

 
    //The event target is the browser window, this is a hack to make Pamda_Browser_Transformer 'this'
    onPopupShowingPre: function(evt) {
        Padma_Browser_Transformer.onPopupShowing(evt);
    },

    onPopupShowing: function(evt) {
        var result = this.getSelection(document.popupNode), hidden = true;;
        var val = result.selection;
        if (!result.control)
            val = val.toString();
        if (val.length != 0)
            //something selected - show menu items
            hidden = false;

        //Always show menu separator and transform to Unicode options
        var item = document.getElementById("padmaMenuItem0");
        item.hidden = hidden;
        item = document.getElementById("padmaMenuItem1");
        item.hidden = hidden;

        var rts = this.prefBranch.getBoolPref(PadmaSettings.prefEnableRTS);
        var iscii = this.prefBranch.getBoolPref(PadmaSettings.prefEnableISCII);
        var itrans = this.prefBranch.getBoolPref(PadmaSettings.prefEnableITRANS);
        var tscii = this.prefBranch.getBoolPref(PadmaSettings.prefEnableTSCII);
        var tab = this.prefBranch.getBoolPref(PadmaSettings.prefEnableTAB);
        var tam = this.prefBranch.getBoolPref(PadmaSettings.prefEnableTAM);
        var telugu = this.prefBranch.getBoolPref(PadmaSettings.prefEnableTelugu);
        var malayalam = this.prefBranch.getBoolPref(PadmaSettings.prefEnableMalayalam);
        var tamil = this.prefBranch.getBoolPref(PadmaSettings.prefEnableTamil);
        var devanagari = this.prefBranch.getBoolPref(PadmaSettings.prefEnableDevanagari);
        var gujarati = this.prefBranch.getBoolPref(PadmaSettings.prefEnableGujarati);
        var kannada = this.prefBranch.getBoolPref(PadmaSettings.prefEnableKannada);

        item = document.getElementById("padmaMenuItem2");
        item.hidden = hidden || !rts || !telugu;
        item = document.getElementById("padmaMenuItem3");
        item.hidden = hidden || !rts || !telugu;
        item = document.getElementById("padmaMenuItem4");
        item.hidden = hidden || !rts || !telugu;
        item = document.getElementById("padmaMenuItem5");
        item.hidden = hidden || !iscii || !telugu;
        item = document.getElementById("padmaMenuItem6");
        item.hidden = hidden || !iscii || !malayalam;
        item = document.getElementById("padmaMenuItem7");
        item.hidden = hidden || !iscii || !tamil;
        item = document.getElementById("padmaMenuItem8");
        item.hidden = hidden || !iscii || !devanagari;
        item = document.getElementById("padmaMenuItem9");
        item.hidden = hidden || !itrans || !telugu;
        item = document.getElementById("padmaMenuItem10");
        item.hidden = hidden || !itrans || !malayalam;
        item = document.getElementById("padmaMenuItem11");
        item.hidden = hidden || !itrans || !tamil;
        item = document.getElementById("padmaMenuItem12");
        item.hidden = hidden || !itrans || !devanagari;
        item = document.getElementById("padmaMenuItem13");
        item.hidden = hidden || !itrans || !gujarati;
        item = document.getElementById("padmaMenuItem14");
        item.hidden = hidden || !itrans || !gujarati;
        item = document.getElementById("padmaMenuItem15");
        item.hidden = hidden || !itrans || !kannada;
        item = document.getElementById("padmaMenuItem16");
        item.hidden = hidden || !itrans || !kannada;
        item = document.getElementById("padmaMenuItem17");
        item.hidden = hidden || !tscii || !tamil;
        item = document.getElementById("padmaMenuItem18");
        item.hidden = hidden || !tab || !tamil;
        item = document.getElementById("padmaMenuItem19");
        item.hidden = hidden || !tam || !tamil;
    },

    //Preference observer
    observe: function(subject, topic, data) {
        if (topic != 'nsPref:changed')
            return;
        if (data == PadmaSettings.prefAutoTransformWhiteList)
            this.buildAutoTransformWhiteList();
        else alert('Subject = ' + subject + ', topic = ' + topic + ', data = ' + data);
        return;
    },

    //Launch prefs dialog from tools menu
    launchPrefsDialog: function(filterURL, url, type) {
        var winMediator = Components.classes['@mozilla.org/appshell/window-mediator;1'].getService(Components.interfaces.nsIWindowMediator);
        var win = winMediator.getMostRecentWindow(type || 'padma:prefs');
        if (win && !win.closed) {
            win.document.commandDispatcher.focusedWindow.focus();
            win._filterURL = filterURL;
        }
        else {
            win = window.openDialog("chrome://padma/content/prefs.xul", "padmaPreferences", "chrome,centerscreen");
            win._filterURL = filterURL;
        }
        win.focus();
        return win;
    },

    //Launch about dialog from tools menu
    launchAboutDialog: function(filterURL, url, type) {
        var winMediator = Components.classes['@mozilla.org/appshell/window-mediator;1'].getService(Components.interfaces.nsIWindowMediator);
        var win = winMediator.getMostRecentWindow(type || 'padma:about');
        if (win && !win.closed) {
            win.document.commandDispatcher.focusedWindow.focus();
            win._filterURL = filterURL;
        }
        else {
            win = window.openDialog("chrome://padma/content/about.xul", "padmaAbout", "chrome,centerscreen");
            win._filterURL = filterURL;
        }
        win.focus();
        return win;
    }
};

window.addEventListener("load", function() { Padma_Browser_Transformer.onExtensionInit(); }, false);
