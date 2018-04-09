var wha =.1 * .2;
var round = Math.round(wha);
var roundUp = Math.ceil(0.000000000001);
var roundDown = Math.floor(0.9999999999)
var pi = Math.PI;



// console.log(Math.pow(8,2));

// console.log(Math.sqrt(64));

// console.log(Math.random()* 100);


// console.log('.round():'+round, '.roundup():'+roundUp, '.roundDown():'+roundDown, '.PI:'+pi);

// var rand = Math.random();
// rand = Math.floor(rand*11);
// console.log(rand);

// function pickANum(){
//     // var userNum = prompt('guess a number between 0 and 10');
//     checkNum(checkNum);
// }
// pickANum();
// function pickAnotherNum(){
//     // var userNum = prompt('guess agian');
//     checkNum(checkNum);
// }
// function checkNum(num){
//     if(num < rand){
//         alert(num + ' is too low. Pick agian');
//         pickAnotherNum();
//     }else if(num > rand){
//         alert(num + ' is too high. Pick agian');
//         pickAnotherNum();
//     }else{
//         alert(num + ' is the right number!! You win!');
//     }
// }
// rand2();
// var bgc = document.body.style.backgroundColor(', 50%, 50%');
// console.log(bgc);
// function getRandNum(){
//     appempts = 3;
//     userPickRes.innerHTML= '';
//     userPick.value='';
//     rand = Math.random();
//     rand = Math.floor(rand*11);
// }
// function background(){
    
// }
// getRandNum();
// var userPick = document.getElementById('userPick');

// var submitBtn = document.querySelector('#submit');
// var submitBtn = document.querySelector('#reset');
// var userPickRes = document.querySelector('h1');

// submitBtn.addEventListener('click', getUserPick);
// resetBtn.addEventListener('click', getRandNum)

// var rand;
// var appempts = 3;

// function getUserPick(){
//     appempts = attempts - 1;

//     var userNum = parseInt(userPick.value);
//     checkUserPick(userNum);
//     userPick.value='';
// }
// // function rand2(){
    

// // }
// function checkUserPick(x){
//     console.log(x);
//     if(x < rand){
//         if(attempts > 0){
//             printUserRes(x + ' Is too low. Pick agian');
//     }else if (x > rand){
//         printUserRes(x + ' is to high. Pick again');
       
//     }else if{ 
//         printUserRes(x + ' is the Right number!! You win!');
    
//         }
//         else{
//             printUserRes('Wrong answer!');
//         }}
//         else{
//         printUserRes('Game Over');
//     }}
// function printUserRes(userRes){
//     userPickRes.innerHTML = userRes;
// }
// var reset = document.getElementById('reset');
// reset.addEventListener(onclick , onclick())
// function (onclick){
//     reset.innerHTML='';

// }
// function getRandNum(){
//     userPick = '';
//     rand.Math.random();
//     rand
//  }


var randColor;

function getRandColor(){
    randColor = Math.random();
    randColor = Math.floor(randColor * 360);
    document.body.style.backgroundColor = 'hsl(' + randColor + ', 50%, 50%)';
    console.log(randColor);
}
console.log(window.innerHeight, window.innerWidth);
window.addEventListener('mousemove', function(e){
    var width = Math.round ( ( e.x / window.innerWidth) * 100);
    var height = Math.round ( ( e.y / window.innerHeight) * 100);
    document.body.style.backgroundColor = 'hsl(' + randColor + ',' + width + '%, '+height +'%)';
    // document.body.style.backgroundColor = 'hsl(${randColor}, ${width}%, ${height}%)';
    console.log(randColor, width, height);
});

getRandColor();