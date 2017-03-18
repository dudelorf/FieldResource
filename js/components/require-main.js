/*global requirejs*/
require.config({
    baseUrl: "js/",
    paths: {
        backbone: "bower_components/backbone/backbone",
        underscore: "bower_components/underscore/underscore",
        text: "bower_components/text/text",
        jquery: "bower_components/jquery/dist/jquery",
        
        app: "components/app",
        router: "components/routes",
        
        user_service: "components/services/user",
        
        login_controller: "components/login/controller",
        login_views: "components/login/views/factory",
        login_main: "components/login/views/login",
        
        home_controller: "components/home/controller",
        home_views: "components/home/views/factory",
        home_main: "components/home/views/home"
    },
    waitSeconds: 15
});

requirejs(["app"],
function(app){
    app.init();
});