/**
 * User service for maintaining current user information
 */
define(["jquery"],
function($){
    
    var currentUser = {
        name: "joe"
    };
    
    function validateLogin(){
        return true;
    }
    
    /**
     * Sends login information to server for validation
     */
    function validateLoginCredentials(userName, password){
        console.log(userName);
        console.log(password);
        
        var defer = $.Deferred();
        defer.reject();
        return defer.promise();
        
//        return $.post("api/login", 
//            {userName: userName, password: password});
    }
    
    function clearLogin(){
        console.log("clearing login info");
    }
    
    var userObj = {
        currentUser: currentUser,
        validateLogin: validateLogin,
        validateLoginCredentials: validateLoginCredentials,
        clearLogin: clearLogin
    };
    
    return userObj;
});