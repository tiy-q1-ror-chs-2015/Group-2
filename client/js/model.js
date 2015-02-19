var DrinkPost = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/group2drinks',
  idAttribute: '_id',
    




  initialize: function () {
    console.log("model was created");
  }
});
