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
            this.navigate("login");
            require(["login_controller"], function(Login){
                Login.init();
            })
        },
        
        home: function(){
            if(User.validateLogin()){
                require(["home_controller"], function(Home){
                    Home.init(); 
                });
            }else{
                User.clearLogin();
                require(["login_controller"], function(Login){
                    Login.init();
                });
            }
        },
        
        fallback: function(){
            this.navigate("home", {trigger: true});
        }
    });
    
    return new Router;
});

