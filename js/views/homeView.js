define(['views/pageView', 'backbone', 'handlebars', 'i18n', 'underscore'], function(Page, Backbn, hbs, i18n) {
	var currentPage = Page.extend({
		pageconfig : {
			headertitle : "home.headertitle",
			isback : 1,
			ismenu : 1,
		},
		initialize : function() {
			this.router =  this.options.router;
			var data = {
				list : this.options.data
			},
			pagedata = _.extend({}, data, this.pageconfig);
			this.template = hbs.getTemplate('home')(pagedata);
			
		},
		events :function(){ 
		   var me = this, additionalEvents,
		   events = 'ontouchstart' in document ? 
		     {
		         "touchstart #back-btn" : function(e){
		         	e.preventDefault();
		         	me.prevhome();
		         }
		     } : 
		     {
		         "click #back-btn" : "prevhome",
		        
		     };
		     additionalEvents = {
		     	"change [name='language']" : function(e,v){
		     		me.menu();
		     	}
		     };
		    
		     events = _.extend({}, Page.prototype.events(), additionalEvents, events);
		     return events;
		},
		prevhome : function(){
			
			this.router.navigateApp("login", true);
		},
		menu : function(){
			var me = this, langelem = $("#language");
			lang = langelem.val();	
			i18n.init({lng : lang},function(){
				me.router.home(false, 'none');
			});	
			
		},
		attachEvents : function(){
			
			
		}
	});
	return currentPage;

}); 