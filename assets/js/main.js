/* When the user clicks on the button,
toggle between hiding and showing the dropdown content 
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}*/

// Close the sidebar if the user clicks outside of it. i'm excluding .sidepanel from the included events bc i dont like how it looks. i might change it to include dropdown menus if i implement that into the sidebar
window.onclick = function(event) {
  if (!event.target.matches('.indexbtn, .indexbtn img')) {
    if (document.getElementById("mySidepanel").style.width="250px") {
		document.getElementById("mySidepanel").style.width = "0px";
    }
  }
}

/* i wanted to make the stringlights sticky but this ended up not working sooooooo yeah */
/*var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("toplights").style.top = "50px";
  } else {
    document.getElementById("toplights").style.top = "-25px";
  }
  prevScrollPos = currentScrollPos;
}*/
window.addEventListener("scroll",function() { 
   if(window.scrollY > 200) {
      document.getElementById("toplights").style.top = "-10px";
   }
   else {
      document.getElementById("toplights").style.top = "50px";
   }
},false);

/* Set the width of the sidebar to 250px 
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

// Set the width of the sidebar to 0. i guess i dont need this anymore but keeping it just in case 
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}*/

function toggleSidebar() {
	if (document.getElementById("mySidepanel").style.width="0px") {
		document.getElementById("mySidepanel").style.width = "250px";
	}
	else {
		document.getElementById("mySidepanel").style.width = "0px";
	}
} //for some reason the else statement isnt working?? keeping it just bc yk

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