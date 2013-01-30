define(['views/loginView'], function(pageView) {
 	
  	return describe('Login View ', function () {
	     it(' does not have back button', function() {
 			var page =  new pageView(),
 			backbtn = $(page.template).find("#back-btn");
 			expect(backbtn.length).toEqual(0);
 		 });
 		 
 		 it(' does not have menu button', function() {
 			var page =  new pageView(),
 			backbtn = $(page.template).find("#menu-btn");
 			expect(backbtn.length).toEqual(0);
 		 });
	});
 	
});