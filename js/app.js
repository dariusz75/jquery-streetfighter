$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.still').hide();
	$('.ready').show();
  })

   .mouseleave(function() {
    $('.ready').hide();
	$('.still').show();
  })

     .mousedown(function() {
    playHadouken();
    $('.ready').hide();
    $('.throwing').show();
    $('.hadouken').finish().show().animate(
  {'left': '1020px'},
  500,
  function() {
    $(this).hide();
    $(this).css('left', '550px');
  }
);
    // play hadouken sound
    // show hadouken and animate it to the right of the screen
  })
  .mouseup(function() {
  	$('.throwing').hide();
    $('.ready').show();
    // ryu goes back to his ready position
  });

  $("body").keydown(function(e) {
		if (e.which == 88) {
			$('.ready').hide();
			$('.cool').show();			
		}
	})

  $("body").keyup(function(e) {
		if (e.which == 88) {
			$('.cool').hide();
			$('.ready').show();			
		}
	})


});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}