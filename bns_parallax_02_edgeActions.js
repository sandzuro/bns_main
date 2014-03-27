/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         yepnope({
             load: "http://cdn.edgecommons.org/an/1.0.2/js/min/EdgeCommons.js",
         	callback: function() {
         		EC.centerStage(sym);
         		EC.Parallax.setup(sym);
         	}
         });
         
         sym.$('body').css({"background-image":"url(images/main_back_01.jpg)","background-attachment":"fixed",
         "background-position":"center top","background-size":"cover"});

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-733169868");