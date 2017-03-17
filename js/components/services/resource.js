/**
 * Resource service for backend data communication
 */
define(["jquery"],
function($){
    
    var customGet = function(){
        console.log("getting");
    };
    
    var resourceObj = {
        get: customGet
    };
    
    return resourceObj;
});