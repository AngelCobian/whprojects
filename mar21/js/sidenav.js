var navbtn = document.getElementById('navbtn');
var nav = document.getElementById('nav');
// target element by declared variable
// navbtn.style.color = "red";
// navbtn.style.fontSize = "32px";

navbtn.addEventListener("click", showNav);

function showNav() {
    navbtn.classList.toggle("active")
    nav.classList.toggle("viewNav");
}