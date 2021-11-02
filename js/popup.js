
console.log("hello rakib");





document.getElementById("test").addEventListener("click", function(){
	chrome.runtime.getURL("/page/setting.html");
	chrome.tabs.create({
		url: chrome.runtime.getURL("/page/setting.html")
	});
});


