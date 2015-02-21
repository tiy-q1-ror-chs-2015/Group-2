var Router = Backbone.Router.extend({
    routes: {
        "mood": "mood",
        // "drink": "drink"
    },

    mood: function(params) {
    //   var mood= params.split('=')[1];
      // this.loadView(new DrinkView());
      var self = this;
      var drinks = new DrinkCollections();
      // {data: $.param({limit: 2})}
      drinks.fetch({data: $.param({mood: 'happy'})}).then(function() {
        self.loadView(new drinkNamesView({collection: drinks}));
      });
    },




  loadView: function(view) {
    this.view && this.view.remove();
    this.view = view;
}


  });
