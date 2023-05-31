chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.executeScript(tab.id, {
		code: 'document.querySelector(".o-banner__outer") && document.querySelector(".o-banner__outer").remove()'
	});
});

//".o-cookie-message__outer"
