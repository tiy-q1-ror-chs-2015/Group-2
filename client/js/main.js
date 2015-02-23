var App = {};
$(function() {
  App.router = new AppRouter();
  Backbone.history.start();
});



<<<<<<< HEAD

$(document).ready(function(){

var drinkView = new DrinkView();


  $('section div').on('click', 'button', function(event){
    event.preventDefault();
    var relatedMood = '.' + $(this).attr('rel');
    $(this).siblings('button').addClass('animate');
    $(this).siblings('h2').fadeOut('slow');
    // $(this).parent().siblings('h2').fadeOut('slow');
    $(this).addClass('chosenOne');
    $(relatedMood).addClass('active');
    $(relatedMood).addClass('fadein');
    // $(relatedMood).parent('div').addClass('active');
    // $(relatedMood).parent().siblings().removeClass('active');
  });

});
=======
>>>>>>> efa26530cae1c23ea309f260ba78f1fa13cb7535
