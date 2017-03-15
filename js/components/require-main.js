require.config({
    baseUrl: "js/",
    paths: {
        backbone: "bower_components/backbone/backbone",
        "backbone.radio": "bower_components/backbone.radio/build/backbone.radio.js",
        underscore: "bower_components/underscore/underscore",
        text: "bower_components/text/text",
        jquery: "bower_components/jquery/dist/jquery",
        marionette: "bower_components/backbone.marionette/lib/backbone.marionette",
        
        app: "components/app",
        router: "components/routes",
        
        login_controller: "components/login/login.controller",
        login_view: "components/login/login.view"
    },
    waitSeconds: 15
});

requirejs(["app"],
function(app){
    app.init();
});