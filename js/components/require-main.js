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
        admin_view: "components/admin/views/admin",
        
        job_controller: "components/jobs/jobs-controller",
        job_models: "components/jobs/jobs-models",
        job_view: "components/jobs/views/job",
        job_new_view: "components/jobs/views/new-job",
        
        search_controller: "components/search/search-controller.js",
        search_models: "components/search/search-models.js",
        search_form: "components/search/views/search-form.js",
        search_results: "components/search/views/search-results.js"
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"]
        },
        "backbone": {
            deps: ["underscore", "jquery"]
        }
    },
    waitSeconds: 15
});

requirejs(["app", "bootstrap"],
function(app){
    app.init();
});