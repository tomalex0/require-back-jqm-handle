define(['underscore', 'backbone', 'models/listModel'], function (_, Backbone, listModel) {
    var dataCollection = Backbone.Collection.extend({
        model : listModel,
        url : function() {
        	return dataurl+'data/list.json?cb=' + Math.random();
	    },
    });
    
    return dataCollection;

});