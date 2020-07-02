/*
landing.html JS

author: Ayrlin Renata
*/
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
	for(var tidx = 1; tidx < 5; tidx++) {
		animIntroUtil(tidx,'#title-',200);
	}
	//animate subtitle
	for(var tidx = 1; tidx < 5; tidx++) {
		animIntroUtil(tidx,'#subtitle-',500);
	}
	setTimeout(function() { 
		if(!clicked) {
			$('#arrow-down').addClass('anim-intro'); 
		}
	}, 2500);
	
	setTimeout(function() { 
		$('#arrow-down').removeClass('anim-intro'); 
		if(!clicked) 
			$('#arrow-down').addClass('anim-intro-loop'); 
	}, 3000);
	
}

/**
 * Workaround for setTimeout() not using different values in a loop
 */
function animIntroUtil(tidx,prefix,delta) {
	setTimeout(function() { 
		if(!clicked) {
			$(prefix+tidx).addClass('anim-intro'); 
		} else {
			$(prefix+tidx).addClass('fullviz'); 
		}
	}, tidx*delta);
}

function animCollapse() {
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