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
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
		// animate hadouken to the right of the screen
	})
	.mouseup(function() {
		//console.log('mouseup');
		$('.ryu-throwin').hide();
		$('.ryu-ready').show();
	});
});