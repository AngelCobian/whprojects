// let firstname = 'angel'
// let lastname = 'cobian'

// function whatsName(){
//     var lastname = "cobian";
//     console.log(firstname);
//     // whatsLastName(lastname);
// }

// // whatsName();

// for ( let i =0; i< 5; i++){
//     console.log('running ' +i + ' times');
// }

// function whatsLastName(str){
//     console.log(str);
//     console.log(i);
// }
// // console.log(i);
// // for (i; i < 10; i++){
// //     console.log('running again ' + i + ' times')
// // }
// let nameCombined = `${firstname} david ${lastname}`;
// console.log(nameCombined);

// let btn = document.querySelector('button');
// // console.log(btn);
// btn.addEventListener('click', function(evt){
//     console.log(this);
//     var colorizer = () => this.style.color= 'red';
//     colorizer();
// });

// var logCase = function(str){
//     console.log(str);

// }

// logCase('matt');

var color = ['red', 'orange', 'green', 'blue'];
for(let i = 0;  i < color.length; i++){
    console.log(color[i]);
}
color.forEach(function(x,y){
    console.log(x, y);
});
var nums=[10 , 20 ,30 ,40];
for(let num of nums){
    num += 1;
    console.log(num);
}

let myName = 'Matt Higley';
for( let letter of myName){
    console.log(letter);    
}