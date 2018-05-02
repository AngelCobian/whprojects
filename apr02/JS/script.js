// var p1 = document.getElementById('p1');
// console.log (p1);

// var p1q = document.querySelector('#p2');
// console.log(p1q);

// var pClass = document.querySelector('.p');
// console.log(pClass);

// var pLast = document.querySelector('.p:last-of-type');
// console.log(pLast);
// pLast.style.fontSize = '28px';

var pClasses = document.querySelectorAll('p');
console.log(pClasses.length);
// pClasses[2].style.fontSize = '8px';
// pClasses[1].style.color = 'red';
// pClasses[3].style.fontWeight = 'boldest';

// var pByClassname = document.getElementsByClassName('p');
// console.log(pByClassname);

// pByClassname[0].style.fontSize = '32px';

// var pbyTagname = document.getElementsByTagName('p');
// console.log(pbyTagname);
// pbyTagname[9].style.color = 'blue';

// console.log(pbyTagname.length);
//   |-------------------| Arguments
//   |--------| New Variable
//              |-----| Number of loops
//                     |-| Incrementer
// for (var i = 0; i < 5; i++){
//      pbyTagname[i].style.color = 'red';
//     console.log(i);
// }

// var myName = 'Angel';
// console.log(myName.length);
// for (var i = 0; i < myName.length; i++){
//     console.log(i);
//     console.log(myName[i]);
// }

// function name(){
//     var first = prompt('Frist name');
//     console.log(first.length);
//     for (var i = 0; i < first.length; i++){
//     console.log(i);
//     console.log(first[i]);}

//         var last = prompt("last name");
//         console.log(last.length)
//         for (var i = 0; i < last.length; i++){
//             console.log(i);
//             console.log(last[i]);}
// }
// name(a)
// function getUserName(){
//     var username = prompt("Your name");
//     console.log(username + ' form inside the function')
//     printUsername(username);
// }
// getUserName();

// function printUsername(x){
//     // console.log(x);
//     for(var i =0; i < x.length; i++){
//     console.log(x[i]);
//     }    
// }
// function getUserNums(){
//     var num1 = prompt("Enter a number");
//     var num2 = prompt("Enter another number");
//     addUserNums(num1, num2);
// }
// function addUserNums(x, y){
//     console.log(arguments.length);
//     // alert(parseInt(x) + parseInt(y));
// }
// getUserNums()
function getUserColor(){
    var c1 = prompt("Enter colors (comma separated)".split(','));
    var userTrimmedColors = [];
    for(var i =0; i < c1.length; i++){
        userTrimmedColors.push(c1[i])
    }
    // var c2 = prompt("Enter another color 2/3");
    // var ?c3 = prompt("Enter ther final color 3/3");
    // var c1 = 'red';
    // var c2 = 'blue';
    // var c3 = 'green';
    getUserColors(c1, c2, c3);
}
function getUserColors(x, y, z){
    // console.log(x, y ,z);
    for(var i = 0; i < arguments.length; i++){
        // pClasses[i].style.color = arguments[i];

    }


    // for(var i = 0; i < pClasses.length; i++){
    //     // log
    // pClasses[0, 3, 7].style.color = x;
    // pClasses[1, 4, 6].style.color = y;
    // pClasses[2, 5, 8].style.color = z;
// }

}
getUserColor();