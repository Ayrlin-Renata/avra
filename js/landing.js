/*
landing.html JS

author: Ayrlin Renata
*/

$(document).ready(function() {
	loadTitle();
	
});

function loadTitle() {
	//load the title images
	
	//Remove load screen
	$('#load-screen').css("display","none");
	
	//animate title screen
	//animate title
	setTimeout(function() { $('#title-1').addClass('anim'); }, 200);
	setTimeout(function() { $('#title-2').addClass('anim'); }, 400);
	setTimeout(function() { $('#title-3').addClass('anim'); }, 600);
	setTimeout(function() { $('#title-4').addClass('anim'); }, 800);
	//animate subtitle
	setTimeout(function() { $('#subtitle-1').addClass('anim'); }, 1000);
	setTimeout(function() { $('#subtitle-2').addClass('anim'); }, 1500);
	setTimeout(function() { $('#subtitle-3').addClass('anim'); }, 2000);
	setTimeout(function() { $('#subtitle-4').addClass('anim'); }, 2500);
}