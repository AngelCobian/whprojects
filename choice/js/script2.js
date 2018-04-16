

var startStory = document.getElementById('opt1');
startStory.addEventListener("click", story);

var nameUser = document.getElementById('userinput');
var starts = document.getElementById('start');

function start(){
    var greeting = prompt('Welcome to the beginning of your journey, What is your  full name?');
console.log(greeting);
    
    nameUser.innerHTML = greeting;
    starts.innerHTML = greeting;
    
}

start();
function story(){
    var person = prompt('First need to make a quick decision, what car will you choose gtr, mcclaren, ferrari?');

    
    if(person == 'gtr' || person == 'Gtr'){
        
        colorChoice(person);
    }
    else if( person == 'ferrari' || person == 'Ferarri'){
        colorChoice(person);
    } 
    else if(person == 'mcclaren' || person == 'McClaren' || person == 'Mcclaren'){ 
        colorChoice(person);
    }
    else{
        alert('error please try again ');
    }
 

    console.log(person);
}

function colorChoice(person){
    var color = prompt('Now time to prep up your' + " " + person + " " + 'what color will you choose. red, white, black');

    if(color == 'black' || color == 'Black'){
        // alert('Great choice! You are rolling in a classy elegant' + color );
        final(color, person);
    }
    else if( color == 'red' || color == 'Red'){
        // alert('Great choice! You are rolling in a fierce' + color ); 
        final(color,person);
    } 
    else if(color == 'white' || color == 'White'){ 
        // alert('Great choice! You are rolling in a classic' + color);
        final(color, person);
    }
    else{
        alert('error please try again ');
        colorChoice();
    }
    
}

function final(colorChoice, person){
    var last = prompt('well you made it! now where will you escape to? canada, new york, california?')

    if(last == 'canada'){
        alert('Incredible you just stole a' + " " + colorChoice + " " + person + " " + "you reckless driver, enjoy your ride through the nice mountain yet cold weather of beautiful canada" );
    }
    else if(last == 'new york'){
        alert('Incredible you just stole a' + " " + colorChoice + " " + person + " " + " Look at you now speeding away from the cops through the busy streets of new york city. so long my friend" );
    }
    else if(last == 'california'){
        alert('Incredible you just stole a' + " " + colorChoice + " " + person + " " + "Beautiful paradise in the long sunny days of south california next to the miles and miles of breath taking beaches" );
    }
    else{
        alert('choose city wisely.')
    }
    
    ending.innerHTML = last;
}
