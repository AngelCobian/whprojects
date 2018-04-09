// function getUserName(){
//     var username = prompt('What is my full name?').split(" ");
 
//     // console.log(username);
//     outputUsername(username);
// }

// function outputUsername(nameArray){
//     // console.log(nameArray);
//     // document.getElementById('firstname').innerHTML = nameArray[0];
//     // document.getElementById('lastname').innerHTML = nameArray[nameArray.length - 1];
//     for(var i = 0; i < nameArray.length; i++){
//         if(i == 0 || i == nameArray.length - 1){
//             // console.log('we got the zeroth element!', nameArray[i]);
//             document.getElementById('firstname').innerHTML += nameArray[i] + " ";
//         }
//                 // else{
//                 //     console.log("not the zeroth");
//                 // }
        
//     }
// }
// getUserName();



var stuff = ["car1", "car2", "car3"];
console.log(stuff[1]);
console.log(stuff.length);
stuff.push("car4");
console.log(stuff);
stuff.pop();
console.log(stuff);
// cars.pop();
// console.log(cars);

var removedCar = stuff.pop();
console.log(stuff);
console.log(removedCar);
stuff.unshift("car5", "car6");
console.log(stuff);
stuff.shift()
    console.log(stuff);
stuff.splice(1, 1, "red", " green")
console.log(stuff);
stuff.splice(1, 1, "grape", "kiki", "apple", "carrot");
console.log(stuff);
stuff.splice(2, 1);
console.log(stuff);

stuff.splice(2, 1);
console.log(stuff);

stuff.slice(4);
var remove = stuff.slice(4);
console.log(stuff);
console.log(remove);


var movie = ["movie1", "movie2", "movie3", "movie4", "movie5", ];
console.log(movie);
movie.unshift("Die Hard");
console.log(movie);
movie.splice(3, 4, "GodFather I", "GodFather II", "GodFather III");
console.log(movie);
movie.push("Guardians of the Galaxy");
console.log(movie);
var three = movie.slice(0,3);
console.log(three);
movie.splice(1,1);
console.log(movie);
console.log(movie[movie.length - 2]);
movie.splice(0, [movie.length], "Jurassic Park");
console.log(movie);

function getUserAge(){
    var userage = parseInt(prompt('how old are you?'));
        if(userage < 21){
            console.log("not old enough");
        }else if(userage == 21){
            console.log('good to go');
        }else{
            console.log('plenty old');
        }
}
getUserAge()
function getAge(){ 
    var age = parseInt(prompt('Whats my age again?'));
(age >= "21") ? console.log('true') : console.log('false');
}
getAge();