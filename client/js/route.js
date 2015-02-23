var Router = Backbone.Router.extend({
    routes: {
        "mood": "mood"
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
