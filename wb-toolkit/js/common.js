/*
Common JS Lib

author: Ayrlin Renata
*/

function initListeners() {
	$('.collapse-row').click(function() {
		doUncollapse(this);
	}).find('.body-row').click(function() {
		return false;
	});
	$('.collapse-arrow').click(function() {
		doCollapse(this.closest('.collapse-row'));
	});
}

function doUncollapse(ele) {
	$(ele).find('.body-row').css("display","block");
	$(ele).find('.collapse-header').css("display","none");
	window.top.postMessage('uncollapseEvent', '*')
}

function doCollapse(ele) {
	$(ele).find('.body-row').css("display","none");
	$(ele).find('.collapse-header').css("display","block");
	window.top.postMessage('collapseEvent', '*')
}