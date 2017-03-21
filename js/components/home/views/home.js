/**
 * Main home view page 
 */
define(["backbone",
        "underscore",
        "text!components/home/html/home.html"],
function(Backbone,
         _,
         viewHTML){
    
    var homeView = Backbone.View.extend({
        
        template: _.template(viewHTML),
        
        events: {
            
        },
        
        render: function(){
            this.$el.html(this.template());
            return this;
        }
    });
 
    return homeView;
});