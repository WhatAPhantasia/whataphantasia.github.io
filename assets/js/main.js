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

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("toplights").style.top = "0";
  } else {
    document.getElementById("toplights").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
/*window.addEventListener("scroll",function() { 
   if(window.scrollY > 10) {
      $('.toplights').slideUp();
   }
   else {
      $('.toplights').slideDown();
   }
},false);*/

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