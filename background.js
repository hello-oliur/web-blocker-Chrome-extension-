




if(localStorage.blockList){
	var urlss = JSON.parse(localStorage.blockList);
}
else {
	var urlss = ["eval.com"]
}
console.log(urlss);

if(localStorage.keywordList){
	var keywords = JSON.parse(localStorage.keywordList);
}
else {
	var keywords = ["porn"]
}

var myid = chrome.runtime.id;

if(localStorage.mainSwitch){

	if(localStorage.mainSwitch == "true") {

		chrome.webRequest.onBeforeRequest.addListener(
		  function(details) {
			 // console.log(details.url);
			  var redeact = "chrome-extension://"+myid+"/page/redirect.html";
			if (localStorage.getItem("rediUrl")) {
	
				redeact =  localStorage.rediUrl;
			} else {
				redeact = "chrome-extension://"+myid+"/page/redirect.html";
			}
			  
			  const domain = (new URL(details.url)).hostname.replace('www.','');
			  
			  if(domain == "google.com") {
				  let str = details.url;
					const myArr = str.split("=");
					if (myArr.length > 1) {
						
						const newkeys = myArr[1].split("&");
					
						  for (var k = 0; k < keywords.length; k++) {
							  if(keywords[k] == newkeys[0]) {
								  return {redirectUrl: "chrome-extension://"+myid+"/page/keywordblck.html"};
							  }
						  }
						
					}
					
			  }
			  
			  for(var i = 0; i < urlss.length; i++) {
				  if(domain == urlss[i]){
					  return {redirectUrl: "http://"+redeact};
				  }
			  }
			  
			  
			 
			 var offinter = details.url.indexOf("https");
			 console.log(offinter);
			if(offinter > -1){
				if(localStorage.blockINTR) {
					if (localStorage.blockINTR == "true") {
						return {redirectUrl: "http://"+redeact};
					}
					if (localStorage.blockINTR == "false") {
						
					}
				}
			}
			
			
			//
			
			if(localStorage.blocImg) {
				if(localStorage.blocImg == "true") {
					var imgdata = [".jpg", ".png", ".jpeg"];
					for (var im = 0; im < imgdata.length; im++) {
						return {cancel: details.url.indexOf(imgdata[im]) != -1};
					}
					
				}
				if(localStorage.blocImg == "false") {
					
					
				}
				
			}
			
			  
			//return {cancel: details.url.indexOf("://www.evil.com/") != -1, redirectUrl: "https://www.google.com" };
		  },
		  {urls: ["<all_urls>"]},
		  ["blocking"]
		);
		
		/*
		if(localStorage.startVpn) {
			if(localStorage.startVpn == "true") {
				
				var config = {
				  mode: "fixed_servers",
				  rules: {
					proxyForHttp: {
					  scheme: "http",
					  host: "185.228.168.168",
					  port: 53,
					},
					proxyForHttp: {
					  scheme: "http",
					  host: "185.228.169.168",
					  port: 53,
					},
					bypassList: [],
				  },
				};


				chrome.proxy.settings.set(
					  {
						value: config,
						scope: "regular",
					  },
					  function () {}
					);

			}
		}
		*/
		

	}
}

/*


const url = 'https://mydomain.com/blog?search=hello&world';
const domain = (new URL(url)).hostname.replace('www.','');



*/

/*

var config = {
  mode: "fixed_servers",
  rules: {
    proxyForHttp: {
      scheme: "http",
      host: "185.228.168.168",
      port: 53,
    },
    proxyForHttp: {
      scheme: "http",
      host: "185.228.169.168",
      port: 53,
    },
    bypassList: [],
  },
};


chrome.proxy.settings.set(
      {
        value: config,
        scope: "regular",
      },
      function () {}
    );


*/




chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
   
    if (request.greeting === "hello") {
      sendResponse({farewell: "goodbye"});
	  window.location.reload();
	}
  }
);





/*

document.getElementById("test").addEventListener("click", function(){
	chrome.runtime.getURL("/page/setting.html");
	chrome.tabs.create({
		url: chrome.runtime.getURL("/page/setting.html")
	});
});

*/



chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.create({
		url: chrome.runtime.getURL("/page/setting.html")
	});
});




setTimeout(function(){ 
	window.location.reload();
}, 5000);





