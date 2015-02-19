var DrinkView = Backbone.View.extend({
  template: _.template($('#drinkTmpl').text()),
  tagName: '.hello',
  initialize: function () {
     console.log('initialize working')
  }

 });
