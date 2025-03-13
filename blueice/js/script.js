window.onload = ()=>{
	document.styleSheets[1].disabled = false;
	document.styleSheets[0].disabled = true;
}

// window.onload = ()=>{
// 	document.styleSheets[0].disabled = true;
// 	document.styleSheets[1].disabled = false;
// }

function serverStat(){
	fetch(`${window.location.origin}/content/serverStat.html`)
		.then((res)=>res.text().then(text=>{
			document.getElementById("container").innerHTML = text;
		}))
}

function externalStat(){
	document.getElementById("container").innerHTML = text;
}