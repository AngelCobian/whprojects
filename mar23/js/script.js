var nav = document.getElementById('nav1');
var a1 = document.getElementById('a1');
var a2 = document.getElementById("a2");
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var lone = document.getElementById('lone');
var lone2 = document.getElementById('lone2');
// var name = prompt("What's it's your frist name?");

function user(){
    // var name = prompt("What's it's your frist name?")
    document.getElementById('user').innerHTML = name
}
user()

navbtn.addEventListener("click", showNav);

function showNav() {
    navbtn.classList.toggle("active")
    nav.classList.toggle("viewNav");
}