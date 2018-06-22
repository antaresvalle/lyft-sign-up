$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(500, function(){
      	$('#main-view').css('display', 'block');
      });
   }, 2000);
});