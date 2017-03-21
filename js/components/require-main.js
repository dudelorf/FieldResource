/*global requirejs*/
require.config({
    baseUrl: "js/",
    paths: {
        backbone: "bower_components/backbone/backbone",
        underscore: "bower_components/underscore/underscore",
        text: "bower_components/text/text",
        jquery: "bower_components/jquery/dist/jquery",
        bootstrap: "bower_components/bootstrap/dist/js/bootstrap",
        
        app: "components/app",
        router: "components/routes",
        
        user_service: "components/services/user",
        
        login_controller: "components/login/controller",
        login_view: "components/login/views/login",
        
        home_controller: "components/home/controller",
        home_view: "components/home/views/home"
    },
    shim: {
        "jquery": {
            exports: "$"
        },
        "bootstrap": {
            deps: ["jquery"]
        }
    },
    waitSeconds: 15
});

require(["app", "jquery", "bootstrap"],
function(app){
    app.init();
});