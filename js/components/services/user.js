/**
 * User service for maintaining current user information
 */
define(["jquery"],
function($){
    
    var currentUser = {
        name: "joe"
    };
    
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
    
    function getCurrentUser(){
        $.get("user/current")
        .then(function(userDetails){
            currentUser = userDetails; 
        });
    };
    
    function clearCurrentUser(){
        console.log("clearing login info");
    }
    
    var userObj = {
        currentUser: currentUser,
        validateLoginCredentials: validateLoginCredentials,
        clearCurrentUser: clearCurrentUser
    };
    
    return userObj;
});