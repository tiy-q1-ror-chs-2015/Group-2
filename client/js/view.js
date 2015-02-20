//Model View

// var DrinkView = Backbone.View.extend({
//   template: _.template($('#drinkTmpl').text()),
//   tagName: '.hello',
//   initialize: function () {
//      console.log('initialize working')
//   }
//
//  });

var DrinkView = Backbone.View.extend({
  tagName: 'section',
  template: _.template($('#drinkTmpl').html()),
  initialize: function() {
    console.log('initialize working')
    this.render();
    $('.hello').append(this.el);

  },
  events: {
    'click #happy': 'submitDrink'
  },
  render: function() {
    this.$el.html(this.template({data: 'something'}));
    return this;
  },
  submitDrink: function() {
    event.preventDefault();

    var mine = this.$el.find('#createStudent');
    var newStudent = {

      name:  mine.find('input[name="name"]').val(),
      bio: mine.find('textarea[name="bio"]').val(),
      wingspan: mine.find('input[name="wingspan"]').val(),
      photo: mine.find('input[name="photo"]').val()

    };
    this.model = new Student(newStudent);
    this.model.save();
    App.router.navigate('/', true);
  }
});



//Collection View
