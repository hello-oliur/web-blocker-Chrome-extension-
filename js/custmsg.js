if (localStorage.getItem("customMsg")) {
	document.getElementById("redmsg").innerText = localStorage.getItem("customMsg");
} else {
	document.getElementById("redmsg").innerText = "This site is blocked";
}