function reload(){
	window.location = window.location.href+'?eraseCache=true';
}

function loginPage(){
	document.getElementById("loginForm").style.display = "block";
	document.getElementById("noLogin").style.display = "none";
}

function bar(){
	document.getElementById("bar").innerHTML = '';
}
