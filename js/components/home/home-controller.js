/*global $*/
/**
 * Controller for home view
 */
define(["backbone",
        "jquery",
        "user_service",
        "radio_service",
        "home_view"],
function(Backbone,
         $,
         User,
         Radio,
         HomeView){
    
    //Sets up home page view
    var init = function(){
        var model = new Backbone.Model({username: User.currentUser.name});
        var view = new HomeView({model: model});
        bindEvents(view);
        $("#container").html(view.render().el);
    };
    
    //Binds view events to controller functions
    var bindEvents = function(view){
        view.on("logout", controller.logout);
    };
    
    /**
     * Logs the user out and navigates back to login screen
     */
    var logout = function(){
        User.clearCurrentUser();
        Radio.trigger("logout");
    };
    
    //Module object
    var controller = {
        init: init,
        logout: logout
    };
    return controller;
});

