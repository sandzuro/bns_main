// EdgeCommons for Edge Animate v1.1.2 +++ Visit edgecommons.org for documentation, updates and examples +++ Copyright (c) 2013 by Simon Widjaja +++ Distributed under the terms of the MIT license (http://www.opensource.org/licenses/mit-license.html) +++ This notice shall be included in all copies or substantial portions of the Software.

/*
 * EdgeCommons
 * Dirty little Helpers for Adobe Edge Animate
 * by Simon Widjaja
 *
 * Additional Contributors:
 * Timm Jansen, Johannes Boyne
 *
 * Copyright (c) 2013 Simon Widjaja
 *
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 * Released under MIT license
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 * Additional 3rd party libraries are used. For related credits and license models take a closer look at the affected library.
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 * EdgeCommons uses:
 * - Adobe Edge API
 * - Modulog
 * - YepNope
 * - SoundJS (CreateJS)
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 * Features:
 * #Core
 * - Advanced Logging and Config with Modulog
 * - Loading external Scripts and Style Sheets with YepNope
 * - Injecting Data
 * #Sound
 * - Load and play sounds with SoundJS (CreateJS)
 * #Preload
 * - PreloadJS (uses by SoundJS) (CreateJS)
 */

/**
TODO: DESCRIPTION FOR MASTER

@module EdgeCommons
**/
(function (window, $) {
    //------------------------------------
    // Constructor
    //------------------------------------
    var EdgeCommons = function () {
    };

    //------------------------------------
    // Public
    //------------------------------------
    EdgeCommons.VERSION = "1.1.2";
    EdgeCommons.$ = $;

    //------------------------------------
    // Private
    //------------------------------------
    var LOG_GROUP = "EdgeCommons";

    //------------------------------------
    // Methods
    //------------------------------------

    //------------------------------------
    // Init
    //------------------------------------
    window.EC = window.EdgeCommons = EdgeCommons;
    //Log.debug("v" + VERSION, LOG_GROUP);

})(window, jQuery);
;/*
 * EdgeCommons
 * Dirty little Helpers for Adobe Edge
 * by Simon Widjaja
 *
 * Copyright (c) 2013 Simon Widjaja
 *
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 * Released under MIT license
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 * Additional 3rd party libraries are used. For related credits and license models take a closer look at the affected library.
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
 * Module: SVG
 */

/**
SVG: Interactive SVG within you Edge Animate compositions

@module EdgeCommons
@submodule SVG
@main EdgeCommons
@class SVG
**/
(function (EC) {
    //------------------------------------
    // Constructor
    //------------------------------------
    var C = function () {
    };

    //------------------------------------
    // Public
    //------------------------------------
    C.VERSION = "1.0.0";
    
    //------------------------------------
    // Private
    //------------------------------------
    // jQuery
    var $ = EC.$;
    // Logger
    var Log = ModulogLog;
    var LOG_GROUP = "EdgeCommons | SVG";

    //------------------------------------
    // Methods
    //------------------------------------  
    /**
    Convert SVG to be accessible
        <pre>
		EC.SVG.accessSVG( sym.$("pie") )
			.done(function(svgDocument, svgElement, uniqueId){
				EC.debug("DONE");
				var el = svgDocument.getElementById("Cyan");
				$(el).attr({fill: "#000"});
				$(el).click(function(){
					alert("DYNAMIC CLICK ON INNER PATH");
				});				
			});  
        </pre>        
    **/
    C.accessSVG = function(element) {
        if (element.is("div")) {
			var imgSrc = element.css("background-image").replace("url(","").replace(")","");
			// Remove "" in IE
			imgSrc = imgSrc.replace("\"", "");
		}
		//TODO: Check if is SVG

		// Replace with real SVG
		// TODO: improve flicker (maybe set invisible during loading and wait for complete)
		element.css("background-image", "");
        var uniqueId = "ec_"+Math.random().toString(36).substring(7);
		element.append('<embed id="'+uniqueId+'" src="'+imgSrc+'" type="image/svg+xml" width="100%" height="100%" />');
        
		// Create promise
		var promise = new jQuery.Deferred();

		// Wait for Embed to be loaded
		//var embed = jQuery("#svgEmbed");
        
        var svgElement = document.getElementById(uniqueId);

		svgElement.onload = function() {
            var svgDocument = svgElement.getSVGDocument();
            // Update (Inject notify function. Makes svg.js obsolete)
            svgDocument.notify = function (ref, type) {
                 var event = document.createEvent("CustomEvent");
                 event.initEvent(type,true,true);
                 ref.dispatchEvent(event);
            }
			// TODO return id
			promise.resolve( svgDocument, svgElement, uniqueId );
		};
        
        return promise;
    }
        
    //------------------------------------
    // Init
    //------------------------------------
    EC.SVG = C;
    //Log.debug("v" + C.VERSION, LOG_GROUP);

})(EdgeCommons);