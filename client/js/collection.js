var DrinkCollections = Backbone.Collection.extend({
    model: DrinkPost,
    url: 'http://localhost:9000',
    initialize: function(){
        console.log('collection works..or not');
    }

});
