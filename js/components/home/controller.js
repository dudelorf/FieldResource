/**
 * Controller for home view
 */
define(["jquery",
        "home_view"],
function($,
         HomeView){
    
    //Sets up home page view
    var init = function(){
        var view = new HomeView();
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

