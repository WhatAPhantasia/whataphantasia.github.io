//toplight scroll thing? dunno how to set this up w bootstrap
window.addEventListener("scroll",function() { 
    if(window.scrollY > 200) {
       document.getElementById("toplights").style.top = "-10px";
    }
    else {
       document.getElementById("toplights").style.top = "45px";
    }
 },false);