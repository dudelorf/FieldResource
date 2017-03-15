define(["backbone", "router"],
function(Backbone, Router) {
    
    var initFx = function(){
        Backbone.history.start();
        Router.navigate("login", {trigger: true});
    };
    
    var app = {
        init: initFx
    };
    
    return app;
});