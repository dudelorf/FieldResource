/**
 * Admin settings page
 */
define(["backbone",
        "underscore",
        "jquery",
        "text!components/admin/html/admin.html"],
function(Backbone,
         _,
         $,
         viewHTML){
             
    var adminView = Backbone.View.extend({
        
        template: _.template(viewHTML),
        
        events: {
            "click #admin-submit": "saveDetails",
            "keypress": "enterSubmit"
        },
        
        /**
         * Saves the user informtion provided
         * 
         * Validates form before saving. If a new password was entered, it is passed
         * to the controller, otherwise and empty string is provided as a placeholder
         * for the password value.
         */
        saveDetails: function(){
            if(this.validateDetails()){
                var userDetails = {
                    name: this.getName(),
                    username: this.getUsername()
                };
                if(this.getPassword()){
                    userDetails.password = this.getPassword();
                }
                this.trigger("user:save", userDetails);
            }
            return false; //prevent form submission
        },
        
        /**
         * Submits details on enter keypress
         * 
         * @param {event} e Keypress event
         * @return false/undefined false if enter keypress
         */
        enterSubmit: function(evt){
            if(evt.which === 13){ //enter pressed
                evt.preventDefault();
                evt.stopPropagation();
                this.saveDetails();
            }
        },
        
        /**
         * Gets value from the username field
         * 
         * @returns {string} username value
         */
        getUsername: function(){
            return $("#username").val();
        },
        
        /**
         * Gets value from the name field
         * 
         * @returns {string} name value
         */
        getName: function(){
            return $("#name").val();
        },
        
        /**
         * Gets value from the password field
         * 
         * @returns {string} password value
         */
        getPassword: function(){
            return $("#password").val();
        },
        
        /**
         * Gets value from the confirm password field
         * 
         * @returns {string} confirm password value
         */
        getConfirmPass: function(){
            return $("#confirm-password").val();
        },
        
        /**
         * Clears all visible messages
         */
        clearErrors: function(){
            this.showUsernameError(false);
            this.showNameError(false);
            this.showConfirmPassError(false);
            this.showSaveSuccess(false);
            this.showSaveError(false);
        },
        
        /**
         * Displays message when save was successful
         * 
         * @param {type} show shows/hides message if true/false respectively
         */
        showSaveSuccess: function(show){
            if(show){
                $("#save-success-msg").removeClass("no-show");
            }else{
                $("#save-success-msg").addClass("no-show");
            }
        },
        
        /**
         * Displays message when save unsuccessful
         * 
         * @param {type} show shows/hides message if true/false respectively
         */
        showSaveError: function(show){
            if(show){
                $("#save-error-msg").removeClass("no-show");
            }else{
                $("#save-error-msg").addClass("no-show");
            }
        },
        
        /**
         * Shows missing username error
         * 
         * @param {boolean} shows/hides error if true/false respectively
         */
        showUsernameError: function(show){
            if(show){
                $("#no-username-err").removeClass("no-show");
            }else{
                $("#no-username-err").addClass("no-show");
            }
        },
        
        /**
         * Shows missing name error
         * 
         * @param {boolean} shows/hides error if true/false respectively
         */
        showNameError: function(show){
            if(show){
                $("#no-name-err").removeClass("no-show");
            }else{
                $("#no-name-err").addClass("no-show");
            }
        },
        
        /**
         * Shows password mismatch error
         * 
         * @param {boolean} shows/hides error if true/false respectively
         */
        showConfirmPassError: function(show){
            if(show){
                $("#password-match-err").removeClass("no-show");
            }else{
                $("#password-match-err").addClass("no-show");
            }
        },
        
        /**
         * Validates user form
         * 
         * @returns {Boolean} true if valid, false otherwise
         */
        validateDetails: function(){
            var valid = true;
            this.clearErrors();
            
            if(!this.getUsername()){
                this.showUsernameError(true);
                valid = false;
            }
            if(!this.getName()){
                this.showNameError(true);
                valid = false;
            }
            if(this.getPassword()){
                if(!this.getConfirmPass() ||
                    this.getPassword() !== this.getConfirmPass()){
                    this.showConfirmPassError(true);
                    valid = false;
                }
            }
            
            return valid;
        },
        
        render: function(){
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });
    
    return adminView;
});
