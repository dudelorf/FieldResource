/**
 * App wide event aggregator
 * 
 * used for triggering navigation events from controllers
 */
define(["backbone_radio"],
function(BackboneRadio){
    
    var navigationChannel = BackboneRadio.channel("navigation");
    
    return navigationChannel;
    
});
