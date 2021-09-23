// Loop through all drop down buttons to toggle between hiding and showing its dropdown content - this allows the user to have multiple dropdowns without any conflict
// This is the drop down in the time line list.
var dropdown = document.getElementsByClassName("series");
var i;
for (i = 0; i < dropdown.length; i++) {
	dropdown[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var dropdownContent = this.nextElementSibling;
		if (dropdownContent.style.display === "block") {
			dropdownContent.style.display = "none";
		} else {
			dropdownContent.style.display = "block";
		}
	});
}
