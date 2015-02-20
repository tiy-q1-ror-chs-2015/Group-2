var DrinkCollections = Backbone.Collection.extend({
    url: 'http://tiy-fee-rest.herokuapp.com/collections/group2drinks',
    initialize: function(){
        console.log('collection works..or not');
    }

});
