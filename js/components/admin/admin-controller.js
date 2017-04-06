/**
 * Controller for home view
 */
define(["backbone",
        "jquery",
        "user_service",
        "admin_view"],
function(Backbone,
         $,
         User,
         adminView){
           
    //Sets up home page view
    var init = function(){
        var model = new Backbone.Model({});
        var view = new adminView({model: model});
        bindEvents(view);
        $("#container").html(view.render().el);
    };

    //Binds view events to controller functions
    var bindEvents = function(view){

    };

    var controller = {
        init: init
    };
    return controller;
             
    
});
