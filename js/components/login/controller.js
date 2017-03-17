/**
 * Controller for login view
 */
define(["jquery",
        "resource_service",
        "router",
        "login_views"],
function($,
         Resource,
         Router,
         Views){
    
    //Sets up login page view
    var init = function(){
        var view = new Views.LoginView();
        bindEvents(view);
        $("#container").html(view.render().el);
    };
    
    //Binds view events to controller functions
    var bindEvents = function(view){
        view.on("login:submit", function(){
            Router.navigate("home", {trigger: true}); 
        })
    }
    
    var controller = {
        init: init
    };
    return controller;
});

