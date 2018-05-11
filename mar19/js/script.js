// document.getElementById('btn2').style.color = "red";
// document.getElementById('btn2').onclick="alert('HAY!!!')";
// console.log("Here is my frist console message");
// document.getElementById('btn').style.fontSize="12px";
console.info("This is info");
console.warn("Danger will");
console.error("Im am error");
// Browser alert box
// alert('Hello world!!!');

//browser confirm box
// var userResvault = confirm("Did you remember to lock your car?");
// console.log(userResult);

//Browser Prompt Box
// var name = prompt("What is your name?");
// console.log(name);

/*
varibales
Must start with a lowercase!
Must start with a letter!
Can contain underscore.
May use camelCasing
*/

var math = 67876;
var add = 20;
var double = 2;
var divide = 10
var total = (math + add) * double / divide;
//PENDAS Matters
console.log(total);

//Concatination
// var fristName = prompt("what is first name?");
// var lastName = prompt("what is last name?");
// alert(fristName + " " lastName);
/* Interpolaion
    ${ Variable}
alert(`${firstName} ${lastName}`)
*/
function getUserVehicle(){
    var vehicle = prompt("Make of the vehicle?");
    var year = prompt("The year of the vehicle?");
    var color = prompt("The Color of the Veicle?");
    alert(`${color}, ${year} ${vehicle}`);
}
function primaryUser(){
    var frist = prompt("What is your frist name?");
    var last = prompt("What is your last name?");
    var place = prompt("where were you born?");
    document.getElementById('primaryUser').innerHTML = frist+ " " + last + ", born in " + place;
}
function computerUser(){
var vendor1 = prompt("Which complany made your computer?");
var year1 = prompt("What year did it release? If don't know know what year did you buy it?");

var os = prompt("Do you if you have Windows, MacOS, Lunix installed? If don't know leave blank"); 
// var os = "I Don't know!";
document.getElementById('computerUser').innerHTML = vendor1 + " " + year1 + "My OS is  " + os
}