/**
 * Factory for login views
 */
define(["login_main"],
function(loginMain){
   
   var factories = {
       LoginView: loginMain.factory
   };
   
   return factories;
});