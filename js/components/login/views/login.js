/**
 * Main login view page 
 */
define(["jquery",
        "backbone",
        "underscore",
        "text!components/login/html/login.html"],
function($,
         Backbone,
         _,
         viewHTML){
    
    var factory = Backbone.View.extend({
        
        template: _.template(viewHTML),
        
        events: {
            "click #login-submit": "submit"
        },
        
        submit: function(){
            console.log("handler clickeded");
            this.trigger("login:submit");
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