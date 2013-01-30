define(['views/pageView', 'backbone', 'handlebars', 'i18n'], function(Page, Backbn, hbs, i18n) {
	var currentPage = Page.extend({
		pageconfig : {
			headertitle : 'login.headertitle',
			ismenu : 1
		},
		initialize : function() {
			this.router =  this.options.router;
			this.template = hbs.getTemplate('login')(this.pageconfig);
			
		},
		events :function(){ 
		   var me = this, 
		   events = 'ontouchstart' in document ? 
		     {
		         "touchstart #login-btn" : function(e){
		         	e.preventDefault();
		         	me.home();
		         }
		     } : 
		     {
		         "click #login-btn" : "home",
		        
		     };
		    
		     additionalEvents = {
		     	"change [name='language']" : function(e,v){
		     		me.menu();
		     	}
		     };
		    
		     events = _.extend({}, Page.prototype.events(), additionalEvents, events);
		     return events;
		},
		menu : function(){
			var me = this, langelem = $("#language");
			lang = langelem.val();	
			i18n.init({lng : lang},function(){
				me.router.login(false, "none");
			});	
			
		},
		home : function(){
			this.router.navigateApp("home");
		},
		attachEvents : function(){
			
		}
	});
	return currentPage;

}); 