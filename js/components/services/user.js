/**
 * User service for maintaining current user information
 */
define(["underscore"],
function(_){
    
    var currentUser = {
        name: "joe"
    };
    
    function validateLogin(){
        return true;
    }
    
    function clearLogin(){
        console.log("clearing login info");
    }
    
    var userObj = {
        currentUser: currentUser,
        validateLogin: validateLogin,
        clearLogin: clearLogin
    };
    
    return userObj;
});