$(document).ready(function() {
	loadStories();
	openAnchor();
	loadTitle();
});

async function loadStories() {
	const insertDiv = document.getElementById("story-container");
	var allStories = "";
	allStories += await fetchHtmlAsText("stories/sacrifice.html");
	allStories += await fetchHtmlAsText("stories/afterlife.html");
	insertDiv.innerHTML = allStories; 
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

async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}