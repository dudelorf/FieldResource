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
        view.on("login:submit", function(username, password){
            User.validateLoginCredentials(username, password)
            .then(function(status){
                if(status){
                    Router.navigate("home", {trigger: true});
                }else{
                    view.showInvalidLogin(true);
                }
            });
            
        })
    }
    
    var controller = {
        init: init
    };
    return controller;
});

