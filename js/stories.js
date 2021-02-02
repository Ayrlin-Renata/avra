$(document).ready(function() {
	loadTitle();
	openAnchor();
});

function loadTitle() {
	//Remove load screen
	$('#load-screen').css("display","none");
}

function openAnchor() {
	var hash = window.location.hash.substr(1);
	var ele = document.getElementById(hash);
	doUncollapse(ele);
}