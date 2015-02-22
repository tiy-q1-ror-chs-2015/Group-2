var Router = Backbone.Router.extend({
  initialize: function() {
    console.log('routes have started')
  },
  routes: {
      "mood": "moodShow",
      // "drink": "drink"
  },

  moodShow: function() {
    var self = this;
    var drinks = new DrinkCollection();
    drinks.fetch({data: $.param({mood: 'happy'})}).then(function() {
      self.loadView(new DrinkNamesView({collection: drinks}));
    });
  },
  loadView: function(view) {
    this.view && this.view.remove();
    this.view = view;
  }
});
