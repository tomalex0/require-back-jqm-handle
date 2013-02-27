define(['jquery', 'underscore', 'backbone', 'jquerymobile', 'views/loginView', 'views/homeView', 'collections/listCollection'], function($, _, Backbone, jqm, loginView, homeView, listCollection) {

	var Router = Backbone.Router.extend({
		routes : {
			'' 	: 'defaultAction',
			'index.html' 	: 'defaultAction',
			'login' : 'login',
			'home' 	: 'home'
		},
		reverse : undefined,
		initialize : function() {
			this.firstPage = true;
			
			
		},
		defaultAction : function(){
			this.navigateApp("login");		
		},
		login : function(reverse, transition) {
			var me = this, page =  new loginView({
				router : me
			});
			this.changePage(page, reverse, transition);	
		},
		home : function(reverse, transition) {
			var page, me = this, listCollectionStore =  new listCollection();
			
			listCollectionStore.fetch({ 
				data: { 
					page: 1
				},
				success : function(){
					page =  new homeView({
						data : listCollectionStore.toJSON(),
						router : me 
					});
					//console.log($(page.template).find("ul li").length);
					me.changePage(page, reverse, transition);
				}
			});
			
		},
		navigateApp : function(name, reverse){
			this.reverse = reverse;
			var isdeeplinkingAllowed = true;
			if(isdeeplinkingAllowed === true){
				Backbone.history.navigate(name, {trigger: true, reverse: reverse });
			} else {
				Backbone.history.stop();
				this[name](reverse);
			}
		},
		changePage : function(page,reverse, transitionval) {

			$(page.el).attr('data-role', 'page');
			page.render();
			
			$('body').append($(page.el));
			//console.log(page.el);
			var transition = jqm.defaultPageTransition;
			if(this.firstPage) {
				transition = 'none';
				this.firstPage = false;
			}
			try {
				transition = (transitionval == "none" ) ? "none" : 'none';
				var reverseval =  this.reverse || reverse
				direction = (_.isUndefined(reverseval) == true ) ? false : true;
				jqm.changePage($(page.el), {
					changeHash : false,
					transition : transition,
					reverse : direction
				});
				this.reverse = undefined;
			} catch(e) {
				
			}
			page.attachEvents();

		}
	});

	return Router;
}); 
