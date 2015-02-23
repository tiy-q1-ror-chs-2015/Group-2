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


    mood: function() {
      // this.loadView(new DrinkView());
      var self = this;
      var drinks = new DrinkCollections();
      $('.moodbtn').on('click', function(){
        var buttonInfo = $(this).attr('rel');
        console.log(buttonInfo);

      });
      // {data: $.param({limit: 2})}
      drinks.fetch({data: $.param({mood: 'happy'})}).then(function() {
        self.loadView(new StudentsView({collection: drinks}));
      });
    },


    loadView: function(view) {
      this.view && this.view.remove();
      this.view = view;
    }
  });

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
