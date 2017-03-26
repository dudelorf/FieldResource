/**
 * Main application module
 * 
 * Responsible for application configuration and intial setup
 */
define(["backbone",
        "jquery",
        "router",
        "user_service",],
function(Backbone,
         $,
         Router,
         User) {

    /**
     * Kicks off application
     * 
     * Do any necessary initialization work here.
     */
    var initFx = function(){
        app.ajaxSetup();
        //Checks if user has an existing login
        User.getCurrentUser()
        .then(function(){
            Backbone.history.start();
        });
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
            }, beforeSend(xhr){
                xhr.setRequestHeader("Authorization", app.getToken());
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