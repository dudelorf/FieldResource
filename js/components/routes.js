define(["backbone",
        "user_service"],
function(Backbone, 
         User){
    
    var Router = Backbone.Router.extend({
        
        routes: {
            "login": "login",
            "home": "home",
            
            //fallback for nonmatch routes
            "*fallback": "fallback"
        },
        
        login: function(){
            if(User.currentUser){
                this.navigate("home", {trigger: true});
            }else{
                require(["login_controller"], function(Login){
                    Login.init();
                });
            }
        },
        
        home: function(){
            if(User.currentUser){
                require(["home_controller"], function(Home){
                    Home.init(); 
                });
            }else{
                User.clearCurrentUser();
                this.navigate("login", {trigger: true});
            }
        },
        
        fallback: function(){
            this.navigate("home", {trigger: true});
        }
    });
    
    return new Router;
});

