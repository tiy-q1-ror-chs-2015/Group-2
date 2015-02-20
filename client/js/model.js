var DrinkPost = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/group2drinks',
  defaults: function() {
    return {
      photo: 'http://www.placecage.com/100/100'
      word_one: 'word one',
      word_two: 'word two',
      shoutout: 'shoutout',
    };
  },
  initialize: function() {
    console.log("drink has been initialized!");
  },
  toJSON: function() {
    return {drink: this.attributes};
  }
});
