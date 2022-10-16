setInterval(function()){
	var skipButton=document.getElementByClassName("ytp-ad-skip-button");
	if(skipButton!=undefined && skipButton.length>0){
		console.log("Ad detectd");
		skipButton[0].click();
	}
},3000)