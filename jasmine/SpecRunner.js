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



var dataurl =  "http://localhost/require_back_jqm_handle/";
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
