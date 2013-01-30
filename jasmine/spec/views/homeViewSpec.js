define(['views/homeView', 'collections/listCollection'], function(pageView, listCollection) {
  	return describe('Home View ', function () {
  		 var listdata = [];
  		 
    	 describe('List ajax call', function() {
		 	    function getListData(callback){
		 	    	var listCollectionStore =  new listCollection();
					
					listCollectionStore.fetch({ 
						data: { 
							page: 1
						},
						success : function(){
							listdata = listCollectionStore.toJSON();
							callback();
							
						}
					});
		 	    }
				it(' was executed successfuly', function() {
		 			var callback = jasmine.createSpy();
				    getListData(callback);
				   
				    waitsFor(function() {
				    	return callback.callCount > 0;
				    });
				    runs(function() {
				    	expect(callback).toHaveBeenCalled();
				    });
		 		});
		 		
		 		it(' data and dom created are equal', function() {
		 			var callback = jasmine.createSpy();
				    getListData(callback);
				   
				    waitsFor(function() {
				    	return callback.callCount > 0;
				    });
				    runs(function() {
				    	page =  new pageView({
							data : listdata
						});
						listitem =  $(page.template).find("ul li");
						expect(listitem.length).toEqual(listdata.length);
						
				    });
		 		});
				
		  });
	});
 
});