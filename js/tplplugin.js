define(['handlebars', 'jquery'], function(Handlebar, $) {
	Handlebars.getTemplate = function(name) {
                if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
                        $.ajax({
				url : dataurl+'templates/' + name + '.handlebars',
				success : function(data) {
					if (Handlebars.templates === undefined) {
						Handlebars.templates = {};
					}
					Handlebars.templates[name] = Handlebars.compile(data);
				},
				async : false
			});
		}
		return Handlebars.templates[name];
	};
	
	/**
	 * Debug template values 
	 */
	Handlebars.registerHelper("debug", function (optionalValue) {
	    console.log("Current Context");
	    console.log("====================");
	    console.log(this);
	    if (optionalValue) {
	        console.log("Value");
	        console.log("====================");
	        console.log(optionalValue);
	    }
	});
	
	/**
	 * Create album image
	 */
	Handlebars.registerHelper("albumimage", function (imagename) {
	    var imagepath = dataurl+"css/images/album/"+imagename;
	    return imagepath;
	});
        
        Handlebars.registerHelper('selectedlang', function(value) {
            return lang == value ? ' selected' : '';
        });
});