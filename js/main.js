require.config({
    //locale: "fr-fr",
    urlArgs: 'cb=' + Math.random(),
    paths: {
        jquery: 'libs/jquery/jquery',
        jquerymobile: 'libs/jquerymobile/jquery.mobile',
        underscore: 'libs/underscore/underscore',
        backbone: 'libs/backbone/backbone',
        handlebars: 'libs/handlebar/handlebars',
        domReady: 'libs/require/domReady',
        i18n: 'libs/i18n/i18next.amd-1.5.10',
        precompiledtpl: '../precompiled/templates',
        templates: '../templates',
        localesjs: '../localesjs'
    },
    shim :{
    	'precompiledtpl' :{
    		 deps: ['handlebars', 'tplplugin']
    	},
    	'tplpartials' :{
    		 deps: ['handlebars', 'tplplugin']
    	},
        'i18n' :{
            deps : ["locales"]
        }
    }

});
var dataurl =  "http://localhost/require_back_jqm_handle/", lang = "fr";
require(['jquery', 'jquerymobile', 'underscore', 'backbone', 'domReady', 'router', 'i18n', 'locales', 'handlebars', 'tplplugin', 'precompiledtpl', 'tplpartials', 'utilities'], function ($, jqmobile, _, Backbones, domReady, router, i18n, locales) {
    
    // Remove page from DOM when it's being replaced
    $('div[data-role="page"]').live('pagehide', function (event, ui) {
        $(event.currentTarget).remove();
    }); 
    // Prevents all anchor click handling
    $.mobile.linkBindingEnabled =  false;
    // Disabling this will prevent jQuery Mobile from handling hash changes
    $.mobile.hashListeningEnabled = false;
    domReady(function () {
        
        // Loading locales from json locales/
        /*i18n.init({ preload: ['en', 'fr'], lng : "fr" },function(){
            new router();
            Backbone.history.start();
        });*/
        
        // Loading locales from js file localesjs 
        i18n.init({ resStore: locales, lng : lang },function(){
            new router();
	    // root needed to be changed based on source path, pushState is used to enable html5 pushstate
            Backbone.history.start({pushState: true, root : '/require-back-jqm-handle/'});
        });
        
        
        $(window).bind("orientationchange resize pageshow", adjustContentSection);
    });

});

