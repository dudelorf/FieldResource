/**
 * Main home view page 
 */
define(["jquery",
        "backbone",
        "underscore",
        "text!components/home/html/home.html"],
function($,
         Backbone,
         _,
         viewHTML){
    
    var factory = Backbone.View.extend({
        
        template: _.template(viewHTML),
        
        events: {
            
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