/*
Common JS Lib

author: Ayrlin Renata
*/

$(document).ready(function() {
	initListeners();
});

function initListeners() {
	$('.collapse-row').click(function() {
		doUncollapse(this);
	});
}

function doUncollapse(ele) {
	$(ele).find('.body-row').css("display","block");
	$(ele).find('.collapse-header').css("display","none");
}