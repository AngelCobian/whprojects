var randomNumber= Math.floor(Math.random() * 2);
console.log(randomNumber);
var  short = document.body.style;
var randomevents =  Math.floor(Math.random() * 10);
console.log(randomevents);
var text = document.querySelector('p')
var numberofRooms = 10;
var start = document.getElementById("start");
start.addEventListener('click', lightout);

function lightout(){
short.backgroundColor = "black";
short.color= "white";
text.innerHTML="The lights go out!";
hiddenbtn();


};

function hiddenbtn() {
    document.getElementById("start").id = "btn1";
}