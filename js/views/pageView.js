define(['backbone', 'handlebars', 'i18n'], function(Back, hbs, i18n) {
	var Page = Backbone.View.extend({
		template : null,
		render : function() {
			$(this.el).html(this.template);
			return this;
		},
		events : function(){
			var me = this, events = {};
			/*
			{
				"change [name='language']" : function(e,v){
					console.log(me.pageref)
					me.menu();
				}
			};*/
		     
		
		     return events;
		},
		attachEvents : function(){
			
		}
	});
	return Page;
}); 