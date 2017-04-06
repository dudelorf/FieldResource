define(["backbone",
        "user_service",
        "radio_service"],
function(Backbone, 
         User,
         Radio){
    
    
    var Router = Backbone.Router.extend({
        
        routes: {
            "login": "login",
            "home": "home",
            "admin": "admin",
            
            //fallback for nonmatch routes
            "*fallback": "fallback"
        },
        
        //Login page - all non-logged in users redirect here
        login: function(){
            if(User.currentUser){
                this.navigate("home", {trigger: true});
            }else{
                require(["login_controller"], function(Login){
                    Login.init();
                });
            }
        },
        
        //Homepage - default logged in landing page
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
        
        //Settings page
        admin: function(){
            if(User.currentUser){
                require(["admin_controller"], function(Admin){
                    Admin.init();
                });
            }else{
                User.clearCurrentUser();
                this.navigate("login", {trigger: true});
            }
        },
        
        //Non-match fallback route
        fallback: function(){
            this.navigate("home", {trigger: true});
        }
    });
    
    /**
     * App wide navigation events
     * 
     * Sync radio service events with route handlers
     */
    Radio.on("logout", function(){
        AppRouter.navigate("login", {trigger: true});
    });
    
    var AppRouter = new Router();
    return AppRouter;
});

