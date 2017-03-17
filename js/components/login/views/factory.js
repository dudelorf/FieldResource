/**
 * Factory for login views
 */
define(["login_main"],
function(loginMain){
   
   var factory = {
       LoginView: loginMain.factory
   };
   
   return factory;
});