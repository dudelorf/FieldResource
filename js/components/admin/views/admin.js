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
        
        render: function(){
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });
    
    return adminView;
});
