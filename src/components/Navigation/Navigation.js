// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#header");
const CShamburgerMenu = document.querySelector("#header .cs-toggle");

CShamburgerMenu.addEventListener("click", function () {
	CShamburgerMenu.classList.toggle("cs-active");
	CSnavbarMenu.classList.toggle("cs-active");
	CSbody.classList.toggle("cs-open");
	// run the function to check the aria-expanded value
	ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
	const csUL = document.querySelector("#nav-ul-expanded");
	const csExpanded = csUL.getAttribute("aria-expanded");

	if (csExpanded === "false") {
		csUL.setAttribute("aria-expanded", "true");
	} else {
		csUL.setAttribute("aria-expanded", "false");
	}
}

var pos1 = window.scrollY;
window.onscroll = function () {
	var pos2 = window.scrollY;
	if (pos1 > pos2) {
		document.querySelector("#header .navigation").style.top = "1rem";
		document.querySelector("#header .navigation").style.opacity = "1";
	} else {
		document.querySelector("#header .navigation").style.top = "-20rem";
		document.querySelector("#header .navigation").style.opacity = "0";
	}
	pos1 = pos2;
};
