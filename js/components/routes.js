define(["backbone",
        "user_service", 
        "login_controller",
        "home_controller"],
function(Backbone, 
         User,
         Login,
         Home){
    
    var Router = Backbone.Router.extend({
        
        routes: {
            "login": "login",
            "home": "home",
            
            //fallback for nonmatch routes
            "*fallback": "fallback"
        },
        
        login: function(){
            this.navigate("login");
            Login.init();  
        },
        
        home: function(){
            if(User.validateLogin()){
                Home.init();
            }else{
                User.clearLogin();
                Login.init();
            }
        },
        
        fallback: function(){
            this.navigate("home", {trigger: true});
        }
    });
    
    return new Router;
});

