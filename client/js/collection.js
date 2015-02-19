var DrinkCollections = Backbone.Collection.extend({
    url: 'http://tiy-fee-rest.herokuapp.com/collections/group2drinks',
    model: DrinkPost

});
