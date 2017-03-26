/**
 * User service for maintaining current user information
 */
define(["jquery"],
function($){
    
    var currentUser = null;
    
    /**
     * Sends login information to server for validation
     */
    function validateLoginCredentials(username, password){
        return $.post("api/login", {username: username, password: password})
        .then(function(userDetails){
            window.localStorage.setItem("token", userDetails.token);
            return true;
        }, function(){
            window.localStorage.removeItem("token");
            userObj.currentUser = null;
            return false;
        });
        
    }
    
    function getCurrentUser(){
        return $.get("api/user/current")
        .then(function(userDetails){
            userObj.currentUser = userDetails;
            return true; 
        }, function(){
            userObj.currentUser = null;
            return false;
        });
    }
    
    function clearCurrentUser(){
        currentUser = null;
    }
    
    var userObj = {
        currentUser: currentUser,
        validateLoginCredentials: validateLoginCredentials,
        getCurrentUser: getCurrentUser,
        clearCurrentUser: clearCurrentUser
    };
    
    return userObj;
});