
let blockMenu = document.getElementById("blockSiteMenu");
let focusMenu = document.getElementById("focusMenu");
let keywordMenu = document.getElementById("blockKeywordMenu");
let featureMenu = document.getElementById("featureMenu");
let msgMenu = document.getElementById("msgMenu");
let urlMenu = document.getElementById("urlMenu");


let blockSection = document.getElementById("blockSection");
let focusSection = document.getElementById("focusSection");
let keywordSection = document.getElementById("keywordSection");
let featuresSection = document.getElementById("featuresSection");
let msgSection = document.getElementById("msgSection");
let urlSection = document.getElementById("urlSection");


blockMenu.onclick = () => {
	showhide( blockSection, focusSection, keywordSection, featuresSection, msgSection, urlSection);
}
focusMenu.onclick = () => {
	showhide( focusSection, blockSection, keywordSection, featuresSection, msgSection, urlSection);
}
keywordMenu.onclick = () => {
	showhide( keywordSection, focusSection, blockSection, featuresSection, msgSection, urlSection);
}
featureMenu.onclick = () => {
	showhide( featuresSection, keywordSection, focusSection, blockSection, msgSection, urlSection);
}
msgMenu.onclick = () => {
	showhide( msgSection, keywordSection, focusSection, blockSection, featuresSection, urlSection);
}
urlMenu.onclick = () => {
	showhide( urlSection, keywordSection, focusSection, blockSection, featuresSection, msgSection);
}

function showhide (a, b, c, d, e, f) {

	a.style.display = "block";
	
	b.style.display = "none";
	c.style.display = "none";
	d.style.display = "none";
	e.style.display = "none";
	f.style.display = "none";
	
}

if (localStorage.getItem("blockList")) {
	var showsites = JSON.parse(localStorage.getItem("blockList"));
	
	for (var s = 1; s < showsites.length; s++) {
		document.getElementById("showSites").innerHTML += `<div class="result-bar">
															<div style="padding: 5px; display: flex; justify-content: center; align-items: center; margin-left: -10px; margin-right: 5px;">
															<img src="http://www.google.com/s2/favicons?domain=`+showsites[s]+`" /></div>
															<div style="font-size: 16px;">`+showsites[s]+`</div>
															<div style="position: absolute;left: 85%;cursor: pointer;">
											<img src="../img/logo/delete-button.svg" data-myattri="`+s+`"/>
															</div></div>`;
															
		document.getElementById("focusBlockSection").innerHTML += `<div class="result-bar">
																	<div style="font-size: 16px;">`+showsites[s]+`</div>
																	</div>`;
	}
	
} else {
	localStorage.setItem("blockList", JSON.stringify(["asdas"]));
}

var sites = JSON.parse(localStorage.getItem("blockList"));

document.getElementById("blockAddBtn").addEventListener("click", function(){
	
	var blockInpt = document.getElementById("blockInpt");
	
	if (blockInpt.value.indexOf(".") > 1) {
		//console.log(blockInpt.value);
		sites.push(blockInpt.value);
		localStorage.setItem("blockList", JSON.stringify(sites));
		
		setTimeout(function(){ window.location.reload(); }, 500);
		
	} else {
		alert("invalid domain");
	}
	
	chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
	  console.log(response.farewell);
	});
	
});



// keyword sections

if (localStorage.getItem("keywordList")) {
	var keywordList = JSON.parse(localStorage.getItem("keywordList"));
	
	for (var ks = 1; ks < keywordList.length; ks++) {
		document.getElementById("showKeyword").innerHTML += `<div class="result-bar">
																
																<div style="font-size: 16px;">`+keywordList[ks]+`</div>
																<div style="position: absolute;left: 85%;cursor: pointer;">
																	<img data-myatt="`+ks+`" src="../img/logo/delete-button.svg" />
																</div>
															</div>`;
															
		document.getElementById("focuseShowKeyword").innerHTML += `<div class="result-bar">
																	<div style="font-size: 16px;">`+keywordList[ks]+`</div>
																</div>`;
	}
	
} else {
	localStorage.setItem("keywordList", JSON.stringify(["kkkkks"]));
}

var keywrds = JSON.parse(localStorage.getItem("keywordList"));

document.getElementById("keywordAddBtn").addEventListener("click", function(){
	
	var keywordInpt = document.getElementById("keywordInpt");
	
		console.log(keywordInpt.value);
		keywrds.push(keywordInpt.value);
		localStorage.setItem("keywordList", JSON.stringify(keywrds));
		var kwlengths = (keywrds.length - 1);
		
	for (var kst = kwlengths; kst < keywrds.length; kst++) {
		document.getElementById("showKeyword").innerHTML += `<div class="result-bar">
																<div style="font-size: 16px;">`+keywrds[kst]+`</div>
																<div style="position: absolute;left: 85%;cursor: pointer;">
																	<img src="../img/logo/delete-button.svg" />
																</div>
															</div>`;
		document.getElementById("focuseShowKeyword").innerHTML += `<div class="result-bar">
																	<div style="font-size: 16px;">`+keywrds[kst]+`</div>
																</div>`;
	}
	setTimeout(function(){ keywordInpt.value = ""; }, 500);
	chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
	  console.log(response.farewell);
	});
	
});


var myid = chrome.runtime.id;

if (localStorage.getItem("rediUrl")) {
	
	
} else {
	console.log(myid);
	var urlsred = "chrome-extension://"+myid+"/page/redirect.html";
	localStorage.setItem("rediUrl", urlsred);
}




document.getElementById("addMsg").onclick = () => {
	var dtmsg = document.getElementById("customMsg").value;
	localStorage.setItem("customMsg", dtmsg);
	
	setTimeout(function(){ document.getElementById("customMsg").value = ""; }, 500);
}

document.getElementById("rediUrlBtn").onclick = () => {
	var dtmsgs = document.getElementById("rediUrl").value;
	localStorage.setItem("rediUrl", dtmsgs);
	
	setTimeout(function(){ document.getElementById("rediUrl").value = ""; }, 500);
}





window.onclick=function(e) {

	if(e.target.getAttribute("data-myattri")){
		var indx = e.target.getAttribute("data-myattri");
		
		var stname = JSON.parse(localStorage.getItem("blockList"));
		stname.splice(indx, 1);
		
		localStorage.setItem("blockList", JSON.stringify(stname));
		
		e.target.parentNode.parentNode.remove();
		window.location.reload();
	}
	
	if(e.target.getAttribute("data-myatt")){
		var indxkey = e.target.getAttribute("data-myatt");
		
		var keywo = JSON.parse(localStorage.getItem("keywordList"));
		keywo.splice(indxkey, 1);
		
		localStorage.setItem("keywordList", JSON.stringify(keywo));
		
		e.target.parentNode.parentNode.remove();
		window.location.reload();
	}
	
	

/*	   
		if(e.target.getAttribute("data-myattri")){
			console.log(e.target.getAttribute("data-myattri"));
			var indx = e.target.getAttribute("data-myattri");
			
			var sites = JSON.parse(localStorage.getItem("sitnames"));
			var stname = JSON.parse(localStorage.getItem("domnames"));
			var nurls = JSON.parse(localStorage.getItem("nurls"));
			
			
			console.log(sites);
			sites.splice(indx, 1);
			console.log(sites);
			
			console.log(stname);
			stname.splice(indx, 1);
			console.log(stname);
			
			console.log(nurls);
			nurls.splice(indx, 1);
			console.log(nurls);
			
			localStorage.setItem("sitnames", JSON.stringify(sites));
			localStorage.setItem("domnames", JSON.stringify(stname));
			localStorage.setItem("nurls", JSON.stringify(nurls));
			
			e.target.parentNode.remove();
			
		}
		*/
};













