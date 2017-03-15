require.config({
    baseUrl: "js/",
    paths: {
        backbone: "bower_components/backbone/backbone",
        underscore: "bower_components/underscore/underscore",
        text: "bower_components/text/text",
        jquery: "bower_components/jquery/dist/jquery",
        marionette: "bower_components/backbone.marionette/lib/backbone.marionette"
    },
    waitSeconds: 15
});

requirejs(["backbone"],
function(backbone){
    
    backbone.history.start();
});