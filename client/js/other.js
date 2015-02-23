$(document).ready(function(){

  $('.moodbtn').on('click', function(){
    var buttonInfo = $(this).attr('rel');
    console.log(buttonInfo);

    App.router.navigate('mood_'+ buttonInfo, true);
  });

});
