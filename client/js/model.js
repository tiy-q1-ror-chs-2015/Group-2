var DrinkPost = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/group2drinks',
  defaults: function() {
    return {
      word_one: 'Joette Smoe',
      word_two: 'Choose Not to Disclose',
      photo: 'http://www.placecage.com/100/100'
    };
  },
  initialize: function() {
    console.log("drink has been initialized!");
  },
  toJSON: function() {
    return {drink: this.attributes};
  }
});
