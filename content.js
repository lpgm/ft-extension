/*document.querySelector(".o-cookie-message__outer") &&
	document.querySelector(".o-cookie-message__outer").remove();*/

setTimeout(() => {
	const modal = document.querySelector(".o-banner__outer");
	const observer = new IntersectionObserver(entries => {
		for (const entry of entries) {
			if (entry.isIntersecting) {
				modal.remove();
				observer.disconnect();
				break;
			}
		}
	});
	observer.observe(modal);
}, 2000);
