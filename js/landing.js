/*
landing.html JS

author: Ayrlin Renata
*/
var clicked = false;
var skipIntro = false;

$(document).ready(function() {
	openGet();
	loadTitle();
	
});

function openGet() {
	var sear = window.location.search;
	if(sear) {
		skipIntro = true;
	} 
}

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
		animIntroUtil(tidx,'#title-', 0, 200);
	}
	//animate subtitle
	for(var tidx = 1; tidx < 5; tidx++) {
		animIntroUtil(tidx,'#subtitle-', 500, 600);
	}
	if(!skipIntro) {
		setTimeout(function() { 
			if(!clicked) {
				$('#arrow-down').addClass('anim-intro'); 
			}
		}, 3800);
		
		setTimeout(function() { 
			$('#arrow-down').removeClass('anim-intro'); 
			if(!clicked) 
				$('#arrow-down').addClass('anim-intro-loop'); 
		}, 4300);
	} else {
		animCollapse();
	}
}

/**
 * Workaround for setTimeout() not using different values in a loop
 */
function animIntroUtil(tidx,prefix,delay,delta) {
	if(skipIntro) {
		$(prefix+tidx).addClass('skip-anim');
	}
	setTimeout(function() { 
		if(!clicked) {
			$(prefix+tidx).addClass('anim-intro'); 
		} else {
			$(prefix+tidx).addClass('fullviz'); 
		}
	}, (skipIntro)? 0 : delay + tidx*delta);
}

function animCollapse() {
	clicked = true;
	
	//remove click
	$('#title-screen').attr("onClick","");
	
	//remove previous animation
	$('.t-text').removeClass("anim-intro");
	$('#arrow-down').removeClass("anim-intro-loop");
	
	if(skipIntro) {
		$('#title-screen').addClass('skip-anim');
		$('#title-container').addClass('skip-anim');
		$('#subtitle-container').addClass('skip-anim');
		$('#top-overlay').addClass('skip-anim');
		$('.t-text').addClass('skip-anim');
	}
	//do collapse anim
	$('#title-screen').addClass('anim-collapse');
	$('#title-container').addClass('anim-collapse');
	$('#subtitle-container').addClass('anim-collapse');
	$('#top-overlay').addClass('anim-collapse');
	$('.t-text').addClass('anim-collapse');
}

