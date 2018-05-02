var nav = document.getElementById('nav')
var main = document.getElementById('main')
var menu = document.getElementById('menu')
var username = document.getElementById('username')
var userstyle = document.getElementById('userstyle')
var user = document.getElementById('user')
var a1 = document.getElementById('a1')
var a2 = document.getElementById('a2')

menu.addEventListener('click', vertMenu);
username.addEventListener('click', getUserName);
userstyle.addEventListener('click', styleUserName);
a1.addEventListener('click', function(e){
    e.preventDefault()
    console.log(e);
});
a2.addEventListener('click', colorText2);

function vertMenu(){
    nav.classList.toggle('vertical');
    main.classList.toggle('vertical');
}

function getUserName(){
    var username = prompt('What is your name?');
    user.innerHTML= username;
}

function styleUserName(){
    user.classList.add('maga');
}

function colorText1(){
    a1.style.color = "red";
}

function colorText2(e){
    a2.style.color = "red";
    e.preventDefault();
    console.log(e);
}
function changeBody(){
    document.body.style.backgroundColor = 'teal';
}
changeBody()