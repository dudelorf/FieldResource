/*global $*/
/**
 * Controller for home view
 */
define(["backbone",
        "jquery",
        "user_service",
        "home_view"],
function(Backbone,
         $,
         User,
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
        
    }
    
    var controller = {
        init: init
    };
    return controller;
});

