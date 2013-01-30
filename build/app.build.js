( {
	appDir : '../',
	baseUrl : 'js',
	dir : '../release',
	paths : {
		jquery : 'libs/jquery/jquery',
		underscore : 'libs/underscore/underscore',
		backbone : 'libs/backbone/backbone',
		handlebars : 'libs/handlebar/handlebars',
		domReady : 'libs/require/domReady',
		jquerymobile : 'libs/jquerymobile/jquery.mobile',
		i18n: 'libs/i18n/i18next.amd-1.5.10',
		precompiledtpl: '../precompiled/templates',
		localesjs: '../localesjs',
	},
	optimize : 'uglify',
	modules : [{
		name : 'main',
		//exclude: ['jquery', 'underscore', 'backbone', 'text', 'domReady', 'jquerymobile','handlebars']
	}],
	 preserveLicenseComments: false
})