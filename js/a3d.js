$(document).ready(function(){

	// error checking within the form (focus events)
	$('button').click(function(submit){
		if ($('#name').val().length == 0) {
			$('label[for="name"]').html('Please enter your name.').addClass('error');
			submit.preventDefault();
		}
		if ($('#email').val().length == 0) {
			$('label[for="email"]').html('Please enter your email.').addClass('error');
			submit.preventDefault();
		}
	}); 
	$('#name').focusout(function(){
		if ($('#name').val().length == 0) {
			$('label[for="name"]').html('Please enter your name.').addClass('error');
		} else {
			$('label[for="name"]').html('Your name (required)').removeClass('error');
		}
	});
	$('#email').focusout(function(){
		if ($('#email').val().length == 0) {
			$('label[for="email"]').html('Please enter your email.').addClass('error');
		} else {
			$('label[for="email"]').html('*Email').removeClass('error');
		}
	});

	// interactive form elements with if/else
	$('#models').change(function(){
		if ($('#models').val() == 'casa') {
			$('#msgs').html('Note:<br>Cas A takes about 2 hours to print and will require support structures and their removal after print.');
		} else if ($('#models').val() == 'eros') {
			$('#msgs').html('Note:<br>Eros will print cleanest with minimal supports and takes about 45 min.');
		} else if ($('#models').val() == 'mars') {
			$('#msgs').html('Note:<br>Mars wil take 6 hours to print, and requires some support structure on the bottom.');
		} else if ($('#models').val() == 'pillars') {
			$('#msgs').html('Note:<br>The pillars will take about 3 hours to print and does not require supports.');
		} else {
			$('#msgs').html('Please select a model.');
		}
	});

	// hover events
	$('figure img').hover(function(){
		$(this).animate({
			width: "250px",
			height: "250px"
		}, 	'slow');
	}, function() {
		$(this).animate({
			width: "150px",
			height: "150px"
		}, 	'slow');
	});

	// toggle image colors
	var imgs1 = [
		'img/blackhole.jpg',
		'img/pillars2.jpg',
		'img/eros.jpg',
		'img/homunculus.jpg',
		'img/mars.jpg',];
	var imgs2 = [
		'img/blackhole_g.jpg',
		'img/pillars2_g.jpg',
		'img/eros_g.jpg',
		'img/homunculus_g.jpg',
		'img/mars_g.jpg'];
	$('#color').click(function(){
		for (i = 0; i <= imgs1.length; i++) {
			var id = '#img'+i;
			var osrc = imgs1[i];
			var nsrc = imgs2[i];
			colorSwap(id, osrc, nsrc);
		}
	});
	function colorSwap(id, osrc, nsrc){
		var src = $(id).attr('src');
		if (src == osrc){
			$(id).attr('src', nsrc);
		} else {
			$(id).attr('src', osrc);
		}
	}

	// add filtered border to images
	$('#border').click(function(){
		$('figure img:even').css({'border-color': 'black', 
								  'border-width': '1px',
								  'border-style': 'solid'});
	});
});













