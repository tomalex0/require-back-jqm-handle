define(['underscore', 'backbone'], function (_, Backbone) {
    var dataModel = Backbone.Model.extend({
        defaults: {
            img: '',
            title: '',
            desc : ''
        }
    });
    
    return dataModel;

});