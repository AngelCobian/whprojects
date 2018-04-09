// function welcomeMsg(str){
//     // console.log(str);
//     return "welcome " + str;

// }

// // consoleInfo('Angel');
// console.log( welcomeMsg('Angel'));

// function calcNums(x, y){
//     // console.log(x + y);
//     return x + y;
// }
// console.log( calcNums(3, 2));

// function concatStrings (str1, str2){
//     return str1 + " " + str2;

// }

// var h3 = document.querySelector('h3');
// var user= document.querySelector('#user');

// function getFristname(){
//     return prompt('what is your first name');
// }

// function getLastname(){
//     return prompt('What us your last name');
// }
// user.textContent = concatStrings(getFristname(), getLastname());
// function welcomeUser(){
//     h3.innerHTML = concatStrings( getFristname(), getLastname() );
// }
// welcomeUser();
var spans = document.querySelectorAll('span');
var occupations = ['janitor', 'teacher', 'developer', 'plumber', 'cashier', 'bus driver' ];
var plurals = ['fish','monkey', 'shoes','cactii'];
var adjectives = ['weird','strange','hot','sick'];
var nouns = ['sea','classroom','tree','car','lighthouse','person','lab','factory',];
var verbs = ['sleeping','googling','running'];
var liquids = ['nitrogen','water','soda','coffee','mucrey'];
var famous = ['Tom','Jorge','Joe','Jon'];
var female = ['Zelda','Peach','Daisy'];
var nationalitys = ['Mexican','Untied States','Russian','Japanese'];
var places = ['beach'];
// console.log(spans.length);
for(var i = 0; i < spans.length; i++){
    // console.log(spans[i].className);
    // if(spans[i].className == 'plural'){
    //     spans[i].style.color = 'red';
    // }
    switch(spans[i].className){
        case 'occupation':
            // getRandNum(occupations.length);
            // console.log( occupations[getRandNum( occupations.length)]);
            spans[i].textContent = occupations[getRandNum(occupations.length)];
            break;
        case 'plural':
            // spans[i].style.color = 'red';
            // console.log( plurals[getRandNum( plurals.length)]);
            spans[i].textContent = plurals[getRandNum(plurals.length)];
            break;
        case 'adjective':
            // spans[i].style.color = 'green';
            // console.log( adj[getRandNum( adj.length);
                spans[i].textContent = adjectives[getRandNum(adjectives.length)];
            break;
            case 'verb':
                spans[i].textContent = verbs[getRandNum(verbs.length)];
            break;
            case 'noun':
                spans[i].textContent = nouns[getRandNum(nouns.length)];
            break;
            case 'liquid':
            spans[i].textContent = liquids[getRandNum(liquids.length)];
            break;
            case 'number':
            spans[i].textContent = [Math.floor (Math.random() * 10000)];
            break;
            case 'famous':
            spans[i].textContent = famous[getRandNum(famous.length)];
            
            break;
            case 'female':
            spans[i].textContent = female[getRandNum(female.length)];
            break;
            case 'nationality':
            spans[i].textContent = nationalitys[getRandNum(nationalitys.length)];
            break;
            case 'place':
            spans[i].textContent = places[getRandNum(places.length)];
            break;
        default:
        spans[i].style.color = 'blue';
    }
}

function getRandNum(num){
console.log(num);
// 
return Math.floor(Math.random() * num);
// var str = occupations[];
// console.log(rand);
}
// return Math.floor(Math.random()* 10000);