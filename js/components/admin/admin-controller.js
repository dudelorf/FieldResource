/**
 * Controller for home view
 */
define(["backbone",
        "jquery",
        "user_service",
        "radio_service",
        "admin_view"],
function(Backbone,
         $,
         User,
         Radio,
         adminView){
           
    //Sets up home page view
    var init = function(){
        var view = new adminView({model: User.currentUser});
        bindEvents(view);
        $("#container").html(view.render().el);
    };

    //Binds view events to controller functions
    var bindEvents = function(view){
        view.on("user:save", saveUser);
    };

    var saveUser = function(userDetails){
        User.currentUser.set(userDetails);
        User.currentUser.save();
    };
    
    var controller = {
        init: init
    };
    return controller;
             
    
});
