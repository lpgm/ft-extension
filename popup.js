document.addEventListener("DOMContentLoaded", () => {
	document.querySelector("#ft").onclick = () => {
		chrome.tabs.query(
			{
				active: true
			},
			tabs => {
				const tab = tabs[0];
				chrome.tabs.executeScript(tab.id, {
					code: 'document.querySelector(".o-cookie-message__outer").remove()'
				});
			}
		);
	};
});
