var Router = Backbone.Router.extend({
  initialize: function() {
    console.log('routes have started')
  },
  routes: {
      "mood_lonely": "moodShowLonely",
      "mood_happy": "moodShowHappy",
      "mood_inspired": "moodShowInspired",
      "mood_dark": "moodShowDark",
      // "drink": "drink"
  },

  moodShowLonely: function() {
    var self = this;
    var drinks = new DrinkCollection();
    drinks.fetch({data: $.param({mood: 'lonely'})}).then(function() {
      self.loadView(new DrinkNamesView({collection: drinks}));
    });
  },
  moodShowHappy: function() {
    var self = this;
    var drinks = new DrinkCollection();
    drinks.fetch({data: $.param({mood: 'happy'})}).then(function() {
      self.loadView(new DrinkNamesView({collection: drinks}));
    });
  },
  moodShowInspired: function() {
    var self = this;
    var drinks = new DrinkCollection();
    drinks.fetch({data: $.param({mood: 'inspired'})}).then(function() {
      self.loadView(new DrinkNamesView({collection: drinks}));
    });
  },
  moodShowDark: function() {
    var self = this;
    var drinks = new DrinkCollection();
    drinks.fetch({data: $.param({mood: 'dark'})}).then(function() {
      self.loadView(new DrinkNamesView({collection: drinks}));
    });
  },
  loadView: function(view) {
    this.view && this.view.remove();
    this.view = view;
  }
});
