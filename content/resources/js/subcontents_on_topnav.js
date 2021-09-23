// for subcontent on topnav, using dropdown format
// when the user clicks on the button, toggle between hiding and showing the dropdown content
function subContent(evt, fileName) {
	// Declear all variables
	var i, content, subtablinks;
	// Get all elements with class = "tabcontent" and hide them
	content = document.getElementsByClassName("content");
	for (i = 0; i < content.length; i++) {
		content[i].style.display = "none";
	}
	// Get all elements with class="tablinks" and remove the class "active"
	subtablinks = document.getElementsByClassName("subtablinks");
	for (i = 0; i < subtablinks.length; i++) {
		subtablinks[i].className = subtablinks[i].className.replace(" active", "");
	}

	/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
	document.getElementById(fileName).style.display = "block";
	evt.currentTarget.className += " active";
}
