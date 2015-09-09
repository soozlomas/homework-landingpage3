//Prevent a form submission with the event.preventDefault() function
//Use the $.ready() handler to delay your code from executing
//until all DOM assets have been loaded


$(document).ready(function(){

$('a').click(function(event){
  event.preventDefault();
});

$('.readmore').click(function() {
  console.log('clicked 2');

    $('.readmore').hide();
    $('#show-this-on-click').slideDown(750);
    $('.readless').show();
});

$('.readless').click(function() {
  console.log('clicked 2');

    $('#show-this-on-click').slideUp(750, function() {
      $('.readmore').fadeIn(500);
    });

    $('.readless').hide();

});

$('.learnmore').click(function() {
  console.log('clicked 2');

    $('#learnmoretext').slideDown(750);
    $('.learnmore').hide();
});

});
