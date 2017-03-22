define(["backbone", "router", "user_service", "jquery"],
function(Backbone, Router, User, $) {
    
    var initFx = function(){
        Backbone.history.start();
        app.ajaxSetup();
        User.getCurrentUser();
    };
    
    var ajaxSetup = function(){
        $.ajaxSetup({
            statusCode: {
                401: function(){
                    User.clearCurrentUser();
                    Router.navigate("login", {trigger: true});
                },
                403: function(){
                    User.clearCurrentUser();
                    Router.navigate("login", {trigger: true});
                }
            }, headers: {
                Authorization: app.getToken()
            }
        });
    };
    
    var getToken = function(){
        return window.localStorage.getItem("token") || "";
    };
    
    var app = {
        init: initFx,
        ajaxSetup: ajaxSetup,
        getToken: getToken
    };
    
    return app;
});