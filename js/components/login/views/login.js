/**
 * Main login view 
 */
define(["backbone",
        "underscore",
        "jquery",
        "text!components/login/html/login.html"],
function(Backbone,
         _,
         $,
         viewHTML){
    
    var loginView = Backbone.View.extend({
        
        template: _.template(viewHTML),
        
        events: {
            "click #login-submit": "submit",
            "keydown": "enterCheck"
        },
        
        //submits the login form
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
        
        //Prevents default form submission behavior while still alowing
        //submission on enter
        enterCheck: function(evt){
            if(evt.which === 13){ //enter pressed
                evt.preventDefault();
                evt.stopPropagation();
                this.submit();
                return false;
            }
        },
        
        //Returns value of username field
        getUserName: function(){
            var obj = $("#login-username");
            return obj.val();
        },
        
        //Returns value of password field
        getPassword: function(){
            return $("#login-password").val();
        },
        
        /**
         * Shows or hides the invalid login message
         *
         * If status value is true the message gets shown, othewise it is hidden
         *
         * @param {bool} status Show or hide message
         */
        showInvalidLogin: function(status){
            if(status){
                $(".js-error-msg").removeClass("no-show");  
            }else{
                $(".js-error-msg").addClass("no-show");  
            }
        },
        
        //Renders the view
        render: function(){
            this.$el.html(this.template());
            return this;
        }
    });
    
    return loginView;
});