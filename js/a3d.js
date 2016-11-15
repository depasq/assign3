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

	// add borders to even images (filtering)
	$('#border').click(function(){
		$('figure img:even').css({'border-color': 'black', 
								  'border-width': '1px',
								  'border-style': 'solid'});
	});

	// make site monochrome
	$('#mono').click(function(){
		var imgs2 = [
			'img/blackhole_g.jpg',
			'img/pillars2_g.jpg',
			'img/eros_g.jpg',
			'img/homunculus_g.jpg',
			'img/mars_g.jpg'];
		$('header img').attr('src', 'img/logo_BW.png');
		$('body').css({'background-color': 'black'});
		$('nav').css({'background-color': 'gray'});
		$('footer').css({'background-color': 'gray'});
		$('fieldset').css({'background-color': 'lightgray'});
		$('h1, h2, legend').css({'color': 'black'});
		$('fieldset p').css({'color': 'black'});
		for (i=0; i<= imgs2.length; i++){
			var id = '#img'+i;
			$(id).attr('src', imgs2[i]);
		}
	});

	// show experimental canvas
	$('#experiment').click(function(){
		$('#draw').slideDown('slow');
	});

// canvas interaction
	//basic shapes
	$('#circle').click(function(){
		$('#canvas').drawArc({
			fillStyle: 'steelblue',
			x: 200,
			y: 150,
			radius: 100,
			layer: true,
			draggable: true
		}) 		
	});
	$('#square').click(function(){
		$('#canvas').drawRect({
			fillStyle: '#3e2e',
			x: 400,
			y: 250,
			width: 100,
			height: 100,
			layer: true,
			draggable: true
		}) 
	});
	$('#triangle').click(function(){
		$('#canvas').drawPolygon({
			fillStyle: 'brown',
			strokeStyle: 'black',
			strokeWidth: 4,
			x: 200, y: 100,
			radius: 50,
			sides: 3,
			layer: true,
			draggable: true
		}) 
	});

	//random shapes chained together
	$('#shapes').click(function(){
		$('#canvas').drawEllipse({
			fillStyle: '#c33',
			x: 200,
			y: 150,
			width: 200,
			height: 100,
			layer: true,
			draggable: true
		}) 
		.drawRect({
			fillStyle: '#3e2e',
			x: 400,
			y: 250,
			width: 200,
			height: 100,
			layer: true,
			draggable: true
		}) 
		.drawPolygon({
			strokeStyle: 'black',
			strokeWidth: 3,
			x: 200,
			y: 200,
			radius: 50,
			sides: 5,
			rotate: 25, 
			fillStyle: '#ccef32',
			layer: true,
			draggable: true
		}); 
	}); 

	$('#final').click(function(){
		var userText = $('#addText').val();

		$('#canvas').drawText({
			fillStyle: '#2ec3',
			strokeStyle: '#000',
			strokeWidth: 3,
			x: 300,
			y: 320,
			fontSize: '2.5em',
			fontFamily: 'Monospace, sans-serif',
			text: userText
		}) 
	}); 

	$('#clear').click(function(){
		$('#canvas').clearCanvas();
	});

});













