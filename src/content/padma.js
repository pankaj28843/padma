// $Id: padma.js,v 1.8 2005/10/19 23:16:53 vnagarjuna Exp $ -->

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

//Broswer - both automatic and manual transformation start here

var Padma_Browser_Transformer = {

    //Common stuff

    inputMethod: Transformer.method_Unknown,
    outputMethod: Transformer.method_Unknown,
    transfomer: null,

    //Preferences
    prefBranch:Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService).getBranch("Padma."),

    createTransformer : function(inputMode, outputMode) {
        this.inputMethod = inputMode;
        this.outputMethod = outputMode;

        if (this.outputMethod == Transformer.method_RTS) {
            var rtsWritingStyle = this.prefBranch.prefHasUserValue(PadmaSettings.prefRTSWritingStyle) ? 
                                  this.prefBranch.getIntPref(PadmaSettings.prefRTSWritingStyle) : 0; //default = 0
            var rtsSunnaStyle = this.prefBranch.prefHasUserValue(PadmaSettings.prefRTSSunnaStyle) ? 
                                  this.prefBranch.getIntPref(PadmaSettings.prefRTSSunnaStyle) : 0; //default = 0
            this.transformer = Transformer.createTransformer(this.inputMethod, this.outputMethod, rtsWritingStyle, rtsSunnaStyle);
        }
        else this.transformer = Transformer.createTransformer(this.inputMethod, this.outputMethod);
    },

    isHeuristicTransformEnabled: function() {
        return this.prefBranch.prefHasUserValue(PadmaSettings.prefEnableHeuristics) ? this.prefBranch.getBoolPref(PadmaSettings.prefEnableHeuristics) : true;
    },

    isFixCharEncoding: function() {
        return this.prefBranch.prefHasUserValue(PadmaSettings.prefFixCharEncoding) ? this.prefBranch.getBoolPref(PadmaSettings.prefFixCharEncoding) : true;
    },

    getHeuristicTransformSiteList: function() {
        var whitelist = "";
        if (this.prefBranch.prefHasUserValue(PadmaSettings.prefHeuristicTransformWhiteList))
            whitelist = this.prefBranch.getCharPref(PadmaSettings.prefHeuristicTransformWhiteList);
        else whitelist = PadmaSettings.defHeuristicTransformWhiteList;

        var index = 0, result = { sites: [], fonts: [] };
        var sites = whitelist.split(",");
        for(var i = 0; i < sites.length; ++i) {
            var map = sites[i].split(":");
            if (map.length < 2)
                continue;
            result.sites[index] = map[0];
            result.fonts[index++] = Transformer.dynFont_Name[map[1]];
        }
        return result;
    },

    //From http://www.mozilla.org/docs/dom/technote/whitespace/nodomws.js
    is_all_ws: function(text) {
        return !(/[^\t\n\r ]/.test(text));
    },

    //multiple uri's should be separated by ,
    makeRegExOfURIS: function(list) {
        return new RegExp(list.replace(/www\./gi, '').replace(/,/gi, '|').replace(/\./gi, "\\."));
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
        Transformer.initialize();
    },

    //Auto Transform
    attrNodeVisited: "padma_was_here",

    //The event target is the browser window, this is a hack to make Pamda_Browser_Transformer 'this'
    onPageLoadPre: function(evt) {
        Padma_Browser_Transformer.onPageLoad(evt);
    },

    //No heuristics - auto transform all text nodes that are children of this node
    transformNode: function(page, node) {
        var style = page.defaultView.getComputedStyle(node, null);
        var font = style.getPropertyValue("font-family");
        var align = style.getPropertyValue("text-align");
        var font_is_valid = this.transformer.setDynamicFontByName(font);  //can transform?

        node.setAttribute(this.attrNodeVisited, "1");
        for(var j = 0; j < node.childNodes.length; ++j) {
            var child = node.childNodes.item(j);
            if(child.nodeType == 3) {
                if (!font_is_valid || this.is_all_ws(child.nodeValue))
                    continue;
                this.transformer.setDynamicFontByName(font);
                child.replaceData(0, child.length, this.transformer.convert(child.nodeValue));
                this.setNodeTextAlign(node, align);
            }
            //Ignore comment nodes
            else if (child.nodeType != 8 && child.getAttribute(this.attrNodeVisited) != "1")
                this.transformNode(page, child);
        }
    },

    //Apply heuristics to tree rooted at node
    //TOOD: remember a node's style while going down rather than going up again
    processTreeWithHeuristics: function(page, node, newfont) {
        if(node.nodeType == 3) {
            if (this.is_all_ws(node.nodeValue))
               return;
            var parent = node.parentNode;
            if (parent.nodeType == 1) {
                var style = page.defaultView.getComputedStyle(parent, null);
                var font = style.getPropertyValue("font-family");
                if (this.transformer.setDynamicFontByName(font) == true || 
                    (font == "serif" && this.transformer.setDynamicFontByName(newfont) == true))
                {
                    node.replaceData(0, node.length, this.transformer.convert(node.nodeValue));
                    this.setNodeTextAlign(parent, style.getPropertyValue("text-align"));
                }
            }
        }
        //Ignore comment nodes
        else if (node.nodeType != 8) {
            for(var j = 0; j < node.childNodes.length; ++j)
                this.processTreeWithHeuristics(page, node.childNodes.item(j), newfont);
        }
    },

    getAutoTransformSiteList: function() {
        var whitelist = "";
        if (this.prefBranch.prefHasUserValue(PadmaSettings.prefAutoTransformWhiteList))
            whitelist = this.prefBranch.getCharPref(PadmaSettings.prefAutoTransformWhiteList);
        else whitelist = PadmaSettings.defAutoTransformWhiteList;
        return this.makeRegExOfURIS(whitelist);
    },

    isAutoTransformEnabled: function() {
        return this.prefBranch.prefHasUserValue(PadmaSettings.prefEnableAutoTransform) ? 
            this.prefBranch.getBoolPref(PadmaSettings.prefEnableAutoTransform) : true;
    },

    onPageLoad: function(evt) {
        var start = new Date().getTime();
        var page = evt.originalTarget;
        if (!page || !page.location || page.location == "about:blank" || !page.location.host || !this.isAutoTransformEnabled())
            return;

        //Quickly check if auto transform is enabled and if this page needs to be transformed
        var whitelist = this.getAutoTransformSiteList();
        if (!whitelist.test(page.location.host))
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

        //Do we need to apply heuristics
        if (this.isHeuristicTransformEnabled()) {
            var transformList = this.getHeuristicTransformSiteList();
            for(var i = 0; i < transformList.sites.length; ++i) {
                var regex = this.makeRegExOfURIS(transformList.sites[i]);
                if (regex.test(page.location.host)) {
                    var body = page.getElementsByTagName("BODY");
                    for(var j = 0; j < body.length; ++j)
                        this.processTreeWithHeuristics(page, body[j], transformList.fonts[i]);
                    var end = new Date().getTime();
                    alert(end - start);
                    return;
                }
            }
        }

        //TODO:
        var elems = page.getElementsByTagName("FONT");
        for(i = 0; i < elems.length; ++i) {
            if (elems[i].getAttribute(this.attrNodeVisited) == "1")
                continue;
            this.transformNode(page, elems[i]);
        }
        elems = page.getElementsByTagName("SPAN");
        for(i = 0; i < elems.length; ++i) {
            if (elems[i].getAttribute(this.attrNodeVisited) == "1")
                continue;
            this.transformNode(page, elems[i]);
        }
        var end = new Date().getTime();
        alert(end - start);
    },

    //Manual transform starts here
    popupNodeBaseURI: null,

    //if transforming to RTS, set font-family to Arial so that the right text is displayed even
    //if the dynamic font is installed on the user machine
    setNodeFontFamily: function (node) {
        node.style.fontFamily = "Arial";
    },

    //Based on input method, determine if the selected text needs to be transformed
    requiresTransform: function(node, dynFont) {
        if (this.inputMethod == Transformer.method_RTS || this.inputMethod == Transformer.method_ISCII ||
            this.inputMethod == Transformer.method_ITRANS)
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
            var style = document.defaultView.getComputedStyle(parent, null);
            var font = style.getPropertyValue("font-family");
            if (this.transformer.setDynamicFontByName(font) == true || 
                (font == "serif" && dynFont != null && this.transformer.setDynamicFontByName(dynFont) == true))
            {
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
    processNodes: function(selection, root, start, end, soff, eoff, dynFont) {
        if (root.nodeType == 3) {
            if (selection.containsNode(root, true) && this.requiresTransform(root, dynFont)) {
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
                this.processNodes(selection, root.childNodes.item(i), start, end, soff, eoff, dynFont);
        }
    },

    traverseDOM: function(selection) {
        var dynFont = null;
        var inputMethod = this.transformer.getInputMethod();
        //Extract the dynamic font to be used if heuristics are enabled for this website
        if ((inputMethod == Transformer.method_DynFonts || inputMethod == Transformer.method_Unknown) && this.isHeuristicTransformEnabled()) {
            var transformList = this.getHeuristicTransformSiteList();
            for(var i = 0; i < transformList.sites.length; ++i) {
                var regex = this.makeRegExOfURIS(transformList.sites[i]);
                if (!regex.test(this.popupNodeBaseURI))
                    continue;
                dynFont = transformList.fonts[i];
                break;
            }
        }

        for(i = 0; i < selection.rangeCount; i++) {
            var range = selection.getRangeAt(i);
            this.processNodes(selection, range.commonAncestorContainer, range.startContainer, range.endContainer, 
                              range.startOffset, range.endOffset, dynFont);
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
        if ((node instanceof HTMLTextAreaElement) || (node instanceof HTMLInputElement && 
                                                      node.type == "text"|| node.type == "password")) 
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
        
        //Create a transformer
        this.createTransformer(inputMode, outputMode);

        if (arguments.length > 2) {
            if (this.inputMethod == Transformer.method_RTS)
                this.transformer.setRTSMode(arguments[2]);
            else if (this.inputMethod == Transformer.method_ISCII || this.inputMethod == Transformer.method_ITRANS)
                this.transformer.setOutputLanguage(arguments[2]);
        }

        var result = this.getSelection(document.popupNode);
        if (result.control) {
            //For the specials
            this.setTransformedText(this.transformer.convert(result.selection));
        }
        else {
            //for regular selection
            this.traverseDOM(result.selection);
            if (result.selection.rangeCount != 0)
                result.selection.collapseToEnd();
        }
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

        //Hard coded for now
        //This will change based on language options soon
        for(var i = 0; i <= 12; ++i) {
            var item = document.getElementById("padmaMenuItem" + i);
            item.hidden = hidden;
        }
    }
};

window.addEventListener("load", function() { Padma_Browser_Transformer.onExtensionInit(); }, false);
