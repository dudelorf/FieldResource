/**
 * Main home view page 
 */
define(["backbone",
        "underscore",
        "jquery",
        "text!components/home/html/home.html"],
function(Backbone,
         _,
         $,
         viewHTML){
    
    var homeView = Backbone.View.extend({
        
        template: _.template(viewHTML),
        
        events: {
            
        },
        
        render: function(){
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });
    
    return homeView;
});