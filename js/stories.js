$(document).ready(function() {
	loadTitle();
	openAnchor();
});

function loadTitle() {
	//Remove load screen
	$('#load-screen').css("display","none");
	//Make title clickable
	const title = document.querySelector("#title-container");
	title.addEventListener("click",navLanding);
}

function navLanding() {
	window.location = "./landing.html";
}

function openAnchor() {
	var hash = window.location.hash.substr(1);
	var ele = document.getElementById(hash);
	doUncollapse(ele);
}
