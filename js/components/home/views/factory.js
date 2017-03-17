/**
 * Factory for home views
 */
define(["home_main"],
function(homeMain){
   
   var factory = {
       HomeView: homeMain.factory
   };
   
   return factory;
});