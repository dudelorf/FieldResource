/*global requirejs*/
require.config({
    baseUrl: "js/",
    paths: {
        backbone: "bower_components/backbone/backbone",
        underscore: "bower_components/underscore/underscore",
        text: "bower_components/text/text",
        jquery: "bower_components/jquery/dist/jquery",
        bootstrap: "bower_components/bootstrap/dist/js/bootstrap",
        backbone_radio: "bower_components/backbone.radio/build/backbone.radio",
        
        app: "components/app",
        router: "components/routes",
        
        radio_service: "components/services/radio",
        user_service: "components/services/user",
        
        login_controller: "components/login/login-controller",
        login_view: "components/login/views/login",
        
        home_controller: "components/home/home-controller",
        home_view: "components/home/views/home",
        
        admin_controller: "components/admin/admin-controller",
        admin_view: "components/admin/views/admin"
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"]
        }
    },
    waitSeconds: 15
});

requirejs(["app", "bootstrap"],
function(app){
    app.init();
});