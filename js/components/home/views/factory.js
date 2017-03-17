/**
 * Factory for home views
 */
define(["home_main"],
function(homeMain){
   
   var factories = {
       HomeView: homeMain.factory
   };
   
   return factories;
});