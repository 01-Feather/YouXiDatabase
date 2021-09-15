// for character profile
var charapf = document.getElementsByClassName("charabtn");
var x;

for (x = 0; x < charapf.length; x++) {
	charapf[x].addEventListener("click", function () {
		this.classList.toggle("active");
		var charapf = this.nextElementSibling;
		if (charapf.style.maxHeight) {
			charapf.style.maxHeight = null;
		} else {
			charapf.style.maxHeight = charapf.scrollHeight + "px";
		}
	});
}
// for character tab
// but you want charastory from each independent story to be able to open
function charaContent(evt, charaName) {
	var i, charastory, charalinks;
	charastory = document.getElementsByClassName("charastory");
	for (i = 0; i < charastory.length; i++) {
		charastory[i].style.display = "none";
	}
	charalinks = document.getElementsByClassName("charalinks");
	for (i = 0; i < charalinks.length; i++) {
		charalinks[i].className = charalinks[i].className.replace(" active", "");
	}
	document.getElementById(charaName).style.display = "block";
	evt.currentTarget.className += " active";
}
document.getElementById("openedstory").click();
