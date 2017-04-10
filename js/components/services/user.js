/**
 * User service for maintaining current user information
 */
define(["jquery",
        "backbone"],
function($,
          Backbone){
    
    var UserModel = Backbone.Model.extend({
        urlRoot: "api/user",
        defaults: {
            username: "",
            name: ""
        }
    });
    
    /**
     * Active user for applicaton
     * 
     * Used to determine if a user is logged in and get properties for the 
     * active user.
     */
    var currentUser = null;
    
    /**
     * Sends login information to server for validation
     * 
     * Sets token and returns true if successful,
     * Removes token and returns false if not successful
     * 
     * @param {string} username User to authenticate
     * @param {string} password User's password
     * @return {boolean} success of login
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
    
    /**
     * Fetches user details for current token
     * 
     * On success user values are applied to the current user object. On failure
     * the currentUser object is cleared
     * 
     * @return {boolean} Success of operation
     */
    function getCurrentUser(){
        return $.get("api/user/current")
        .then(function(userDetails){
            userObj.currentUser = new UserModel(userDetails);
            return true; 
        }, function(){
            userObj.currentUser = null;
            return false;
        });
    };
    
    /**
     * Clears current user from application
     */
    function clearCurrentUser(){
        userObj.currentUser = null;
        window.localStorage.removeItem("token");
    }
    
    var userObj = {
        currentUser: currentUser,
        validateLoginCredentials: validateLoginCredentials,
        getCurrentUser: getCurrentUser,
        clearCurrentUser: clearCurrentUser
    };
    
    return userObj;
});