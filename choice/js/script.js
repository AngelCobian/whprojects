var randomNumber= Math.floor(Math.random() * 2);
console.log(randomNumber);
var  short = document.body.style;
var randomevents =  Math.floor(Math.random() * 10);
console.log(randomevents);
var text = document.querySelector('p')
var numberofRooms = 10;
var start = document.getElementById("start");
// var forRandomcolors = (red, blue, green, yellow, white);

start.addEventListener('click', lightout);

function lightout(){
short.backgroundColor = "black";
short.color= "white";
text.innerHTML="Suddenly, the lights go out! Yes, inclulds the TV. You look out the window and notice that everyone has power. So you belive that you blown the fuse. but your fusebox is outside on the roof top. You have to go thought a few colored doors and stairs to get their.";


hiddenbtn();
showbtn();

};
var button = document.querySelectorAll('button');
function hiddenbtn() {
    document.getElementById("start").className = "btn1";
}
function showbtn(){
    // document.querySelector('button');
    button[1].className = " ";
    // button[1].id= "ch1" ;   
    button[1].textContent = "hello world" 
    button[2].className = " ";
    // button[2].id= "ch2";
    button[2].textContent = "hello world2" 
    
}

// console.log(button[1]);
// console.log(button[2]);