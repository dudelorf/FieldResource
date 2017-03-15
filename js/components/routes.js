define(["backbone", "login_controller"],
function(Backbone, Login){
    
    var Router = Backbone.Router.extend({
        
        routes: {
            login: Login.init,
            second: "second"
        }
    });
    
    return new Router;
});

