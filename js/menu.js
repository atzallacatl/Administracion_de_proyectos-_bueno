

var oldStayle;

function addMenuItem(label,location){
	
	var menu = window.document.getElementById("navBar");
	var menurow = document.createElement("tr");
	var menuItem = document.createElement("td");
	menuItem.innerHTML="<a href='#' onclick='activateMenuItem(this,\""+location+"\");'>"+label+"</a>";
	menurow.appendChild(menuItem);
	menu.appendChild(menurow);
}

function activateMenuItem(menuLink,location){
	window.top.frames[3].location=location;
}

function addMenuExit(label,location){
	
	var menu = window.document.getElementById("navBar");
	var menurow = document.createElement("tr");
	var menuItem = document.createElement("td");
	menuItem.innerHTML="<a href='#' onclick='window.top.location=\"../index.html\";'>"+label+"</a>";
	menurow.appendChild(menuItem);
	menu.appendChild(menurow);
}