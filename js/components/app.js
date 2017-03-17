define(["backbone", "router"],
function(Backbone, Router) {
    
    var initFx = function(){
        Backbone.history.start();
    };
    
    var app = {
        init: initFx
    };
    
    return app;
});