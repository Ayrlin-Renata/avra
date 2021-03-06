var fixAttempts = 0;

$(document).ready(function() {
	initListeners();
	initMyListeners();
	openAnchor();
	loadTitle();
	fixComments();
	
});

function initMyListeners() {

}

function clickCard(card) {
	var dofull = false;
	if(!$(card).hasClass('full')) {
		dofull = true;
	}
	$(card).parent().children().removeClass('full');
	if(dofull) {
		$(card).addClass('full');
	}
}

function openAnchor() {
	var hash = window.location.hash.substr(1);
	if(hash) {
		var ele = document.getElementById(hash);
		doUncollapse(ele);
	}
}

function loadTitle() {
	//Remove load screen
	$('#load-screen').css("display","none");
}

/**
 * Ok this is the dumbest thing i've done in a while but hey, bugs in 3rd party stuff
 */
function fixComments() {
	const broke = document.querySelector("#HCB_comment_box > a.btn.btn-secondary");
	if(broke) {
		broke.outerHTML = "<div id=\"HCB_comment_form_box\">" + broke.outerHTML + "<div>";
	} else {
		if(fixAttempts < 100) {
			fixAttempts++;
			setTimeout(function() {fixComments();}, 100);
		}
	}
}

async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}