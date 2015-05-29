$(document).ready(function () {
	$('.ryu').mouseenter(function() {
		/*alert('mouse entered .ryu div');*/
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		/*alert('mouse left .ryu div');*/
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function() {
		console.log('mousedown');
		// play hadouken sound
		// show hadouken and animate it to the right of the screen
	})
	.mouseup(function() {
		console.log('mouseup');
		// ryu goes back to his ready position
	});
});