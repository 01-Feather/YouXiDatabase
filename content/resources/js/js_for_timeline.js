// JavaScript source code
function openFile(evt, fileName) {
	// Declear all variables
	var i, content, tablinks, subtablinks;
	// Get all elements with class = "tabcontent" and hide them
	content = document.getElementsByClassName("content");
	for (i = 0; i < content.length; i++) {
		content[i].style.display = "none";
	}
	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("story");
	subtablinks = document.getElementsByClassName("subtablinks")
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	for (i = 0; i < subtablinks.length; i++) {
		subtablinks[i].className = subtablinks[i].className.replace(" active", "");
	}
	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(fileName).style.display = "block";
	evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();