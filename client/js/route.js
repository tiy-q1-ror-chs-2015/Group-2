var Router = Backbone.Router.extend({
    routes: {
        "mood": "mood"
    },

    mood: function() {
      // this.loadView(new DrinkView());
      var self = this;
      var drinks = new DrinkCollections();
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
