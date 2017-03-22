/**
 * Controller for login view
 */
define(["jquery",
        "user_service",
        "router",
        "login_view"],
function($,
         User,
         Router,
         LoginView){
    
    //Sets up login page view
    var init = function(){
        var view = new LoginView();
        bindEvents(view);
        $("#container").html(view.render().el);
    };
    
    //Binds view events to controller functions
    var bindEvents = function(view){
        view.on("login:submit", function(userName, password){
            User.validateLoginCredentials(userName, password)
            .then(function(){
                Router.navigate("home", {trigger: true}); 
            }, function(){
                view.showInvalidLogin(true); 
            })
            
        })
    }
    
    var controller = {
        init: init
    };
    return controller;
});

