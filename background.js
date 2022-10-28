chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.executeScript(tab.id, {
		code: 'document.querySelector(".o-cookie-message__outer") && document.querySelector(".o-cookie-message__outer").remove()'
	});
});
