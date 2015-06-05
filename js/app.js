$(document).ready(function () {
	$('.ryu').mouseenter(function() {
		//alert('mouse entered .ryu div');
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		//alert('mouse left .ryu div');
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function() {
		//console.log('mousedown');
		// play hadouken sound
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '2000px'}, 850,
			function() {
				$(this).hide();
				$(this).css('left', '570px');
			}
		);
	})
	.mouseup(function() {
		//console.log('mouseup');
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});

	$(document).keydown(function(e) {
		if (e.keyCode == 88) {
			$('.ryu-action').hide();
			$('.ryu-cool').show();
		}
	}).keyup(function(e) {
		if (e.keyCode == 88) {
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}
	});
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
