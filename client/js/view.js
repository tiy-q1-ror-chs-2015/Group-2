//Model View

var DrinkView = Backbone.View.extend({
  tagName: 'body',
  template: _.template($('#drinkTmpl').html()),
  initialize: function() {
    console.log('initialize working')
    this.render();
    $('.mood').append(this.el);

  },
  events: {
    'click .moodbtn': 'submitDrink'
  },
  render: function() {
    this.$el.html(this.template({data: 'something'}));
    return this;
  },
  submitDrink: function(e) {
    e.preventDefault();

    var mood = $(e.target).attr('rel');

    console.log(mood);
    console.log(this.$el);
    // this.model = new DrinkPost(mood);
    // this.model.save();
    App.router.navigate('mood?submitDrink='+ mood, true);
  }
});


//Collection View

var StudentsView = Backbone.View.extend({
  tagName: 'body',
  template: _.template($('#drinkTmpl').html()),
  initialize: function() {
    console.log("im defined!");
    this.render();
    $('.result').append(this.el);

  },

  events: {
    "click .moodbtn": "createDrink"
  },
  render: function() {
    this.addAll();
    return this;
  },
  addOne: function(drinkModel) {

    var drinkView = new DrinkView({model: drinkModel});
    this.$el.append(drinkView.render().el);

  },
  addAll: function() {

    _.each(this.collection.models, this.addOne, this);

  },

createDrink: function(event) {
  event.preventDefault();

  var mood = $(e.target).attr('rel');
  // var newDrink = {
  //
  //   name:  mine.find('input[name="name"]').val(),
  //   bio: mine.find('textarea[name="bio"]').val(),
  //   wingspan: mine.find('input[name="wingspan"]').val(),
  //   photo: mine.find('input[name="photo"]').val()
  //
  // };
  var drinkModel = new DrinkPost(mood);
  drinkModel.save();
}

});
