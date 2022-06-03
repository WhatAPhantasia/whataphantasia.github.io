/* When the user clicks on the button,
toggle between hiding and showing the dropdown content 
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}*/

// Close the sidebar if the user clicks outside of it. still a bit funky bc if you click on the black part it still goes away but ahwduawud its not a big problem
window.onclick = function(event) {
  if (!event.target.matches('.indexbtn'||'.sidepanel')) {
    if (document.getElementById("mySidepanel").style.width="250px") {
		document.getElementById("mySidepanel").style.width = "0px";
    }
  }
}

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

function toggleSidebar() {
	if (document.getElementById("mySidepanel").style.width="0px") {
		document.getElementById("mySidepanel").style.width = "250px";
	}
	else {
		document.getElementById("mySidepanel").style.width = "0px";
	}
}

/*function toggleSidebar() {
	var checkBox = document.getElementById("indexCheck");
	var text = document.getElementById("text");
	
	if (checkBox.checked == true){
		document.getElementById("mySidepanel").style.width = "250px";
	}
	else {
		document.getElementById("mySidepanel").style.width = "0";
	}
}*/