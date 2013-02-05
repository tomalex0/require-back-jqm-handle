require.config({
  baseUrl: "../js/",
  urlArgs: 'cb=' + Math.random(),
  paths: {
    jquery: 'libs/jquery/jquery',
    jquerymobile: 'libs/jquerymobile/jquery.mobile',
    underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone',
    handlebars: 'libs/handlebar/handlebars',
    text: 'libs/require/text',
    domReady: 'libs/require/domReady',
    templates: '../templates',
    jasmine: '../jasmine/libs/jasmine',
    sinon: '../jasmine/libs/sinon',
    'jasmine-html': '../jasmine/libs/jasmine-html',
    spec: '../jasmine/spec',
    precompiledtpl: '../precompiled/templates',
    templates: '../templates',
    i18n: 'libs/i18n/i18next.amd-1.5.10'
   
  },
  shim: {
    jasmine: {
      exports: 'jasmine'
    },
    sinon: {
      exports: 'sinon'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmine'
    },
    'precompiledtpl' :{
		 deps: ['handlebars', 'tplplugin']
	},
	'tplpartials' :{
		 deps: ['handlebars', 'tplplugin']
	}
  }
});



var dataurl =  (document.location.host != "tomalex0.github.com") ? "http://localhost/github_repo/require-back-jqm-handle/" : "http://tomalex0.github.com/require-back-jqm-handle/", lang = "fr";
require(['jquery', 'underscore', 'backbone', 'domReady', 'jasmine-html', 'sinon', 'tplplugin', 'precompiledtpl', 'tplpartials'], function($,  _, Backbones, domReady, jasmine){

  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };
  
  var specs = [];

  specs.push('spec/views/loginViewSpec');
  specs.push('spec/views/homeViewSpec');
 //specs.push('spec/routerSpec');
 domReady(function () {
    require(specs, function(){
      jasmineEnv.execute();
    });
  });

});
