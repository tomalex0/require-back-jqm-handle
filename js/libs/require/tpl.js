define(function() {
        return {
            load: function(name, req, load, config) {
            	
	        	if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
					$.ajax({
						url : name + '.handlebars',
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
            }
        };
    });