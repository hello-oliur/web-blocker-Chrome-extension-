

console.log("switch page is loaded");
/*
let syncOther = document.getElementById("syncOther");

syncOther.onclick = () => {
	
	if (syncOther.checked == true) {
		localStorage.setItem("syncOther", 'true');
	}
	if (syncOther.checked == false) {
		localStorage.setItem("syncOther", 'false');
	}
}

if (localStorage.getItem("syncOther")) {
	if (localStorage.getItem("syncOther") == "true") {
		syncOther.checked = true;
	}
	if (localStorage.getItem("syncOther") == "false") {
		syncOther.checked = false;
	}
}
else {
	localStorage.setItem("syncOther", 'false');
}

*/
 function dataset(ids, localname, deft) {
	 let syncOther = document.getElementById(ids);

	syncOther.onclick = () => {
		
		if (syncOther.checked == true) {
			localStorage.setItem(localname, 'true');
		}
		if (syncOther.checked == false) {
			localStorage.setItem(localname, 'false');
		}
	}

	if (localStorage.getItem(localname)) {
		if (localStorage.getItem(localname) == "true") {
			syncOther.checked = true;
		}
		if (localStorage.getItem(localname) == "false") {
			syncOther.checked = false;
		}
	}
	else {
		localStorage.setItem(localname, deft);
	}
	 
 }

dataset("syncOther", "syncOther", 'false');
dataset("getNotification", "getNotification", 'false');
dataset("startVpn", "startVpn", 'false');
dataset("adltAI", "adltAI", 'false');

// free version

dataset("AccPass", "AccPass", 'false');
dataset("blocImg", "blocImg", 'false');
dataset("blockINTR", "blockINTR", 'false');

// main switch 

dataset("mainSwitch", "mainSwitch", 'true');

if (localStorage.getItem("mainSwitch")) {
		if (localStorage.getItem("mainSwitch") == "true") {
			document.getElementById("mainSwitch").checked = true;
		}
		if (localStorage.getItem("mainSwitch") == "false") {
			document.getElementById("mainSwitch").checked = false;
		}
	}
	else {
		localStorage.setItem("mainSwitch", "true");
		document.getElementById("mainSwitch").checked = true;
	}


document.getElementById("mainSwitch").addEventListener("click", function(){
	chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
	  console.log(response.farewell);
	});
});










