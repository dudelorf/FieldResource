define(["jquery", "login_view"],
function($, View){
    
    var init = function(){
        var view = new View.LoginView();
        $("#container").html(view.render().el);
    };
    
    var controller = {
        init: init
    };
    return controller;
});

