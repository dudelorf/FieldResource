/**
 * Main login view page 
 */
define(["backbone",
        "underscore",
        "text!components/login/html/login.html"],
function(Backbone,
         _,
         viewHTML){
    
    var factory = Backbone.View.extend({
        
        template: _.template(viewHTML),
        
        events: {
            "click #login-submit": "submit"
        },
        
        submit: function(){
            var userName = this.getUserName();
            var password = this.getPassword();
            if(!userName || !password){
                this.showInvalidLogin(true);
            }else{
                this.showInvalidLogin(false);
                this.trigger("login:submit", userName, password);
            }
        },
        
        getUserName: function(){
            var obj = $("#login-username");
            return obj.val();
        },
        
        getPassword: function(){
            return $("#login-password").val();
        },
        
        showInvalidLogin: function(status){
            if(status){
                $(".js-error-msg").removeClass("no-show");  
            }else{
                $(".js-error-msg").addClass("no-show");  
            }
        },
        
        render: function(){
            this.$el.html(this.template());
            return this;
        }
    });
    
    var viewObj = {
        factory: factory
    };
    return viewObj;
});