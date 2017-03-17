/**
 * Controller for home view
 */
define(["jquery",
        "resource_service",
        "home_views"],
function($,
         Resource,
         Views){
    
    //Sets up home page view
    var init = function(){
        var view = new Views.HomeView();
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

