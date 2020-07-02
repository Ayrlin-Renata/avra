/*
landing.html JS

author: Ayrlin Renata
*/
var plsNoClick = true;
var clicked = false;

$(document).ready(function() {
	loadTitle();
	
});

function loadTitle() {
	//load the title images
	
	//Remove load screen
	$('#load-screen').css("display","none");
	
	//Animate title screen
	animIntro();
}

// ANIMATIONS

function animIntro() {
	//animate title
	setTimeout(function() { $('#title-1').addClass('anim-intro'); }, 200);
	setTimeout(function() { $('#title-2').addClass('anim-intro'); }, 400);
	setTimeout(function() { $('#title-3').addClass('anim-intro'); }, 600);
	setTimeout(function() { $('#title-4').addClass('anim-intro'); }, 800);
	//animate subtitle
	setTimeout(function() { $('#subtitle-1').addClass('anim-intro'); }, 1000);
	setTimeout(function() { $('#subtitle-2').addClass('anim-intro'); }, 1500);
	setTimeout(function() { $('#subtitle-3').addClass('anim-intro'); }, 2000);
	setTimeout(function() { 
		$('#subtitle-4').addClass('anim-intro'); 
		$('#arrow-down').addClass('anim-intro'); 
		plsNoClick = false;
	}, 2500);
	
	setTimeout(function() { 
		$('#arrow-down').removeClass('anim-intro'); 
		if(!clicked) 
			$('#arrow-down').addClass('anim-intro-loop'); 
	}, 3000);
	
}

function animCollapse() {
	if(plsNoClick)
		return;
	clicked = true;
	
	//remove click
	$('#title-screen').attr("onClick","");
	
	//remove previous animation
	$('.t-text').removeClass("anim-intro");
	$('#arrow-down').removeClass("anim-intro-loop");
	
	//do collapse anim
	$('#title-screen').addClass('anim-collapse');
	$('#title-container').addClass('anim-collapse');
	$('#subtitle-container').addClass('anim-collapse');
	$('#top-overlay').addClass('anim-collapse');
	$('.t-text').addClass('anim-collapse');
}