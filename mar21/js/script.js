function welcome(){
    var username = prompt("What is your name?")
    document.getElementById('welcome').innerHTML = username;
}
// welcome();

function firework(){
    document.getElementById('h1').style.backgroundImage = "url(' ')";
    
    toggleColor();
}

function toggleColor(){
    document.body.classList.toggle('colorize');
    document.getElementById('h1').style.backgroundImage = "url('../pic/fire.gif')";
	document.getElementById('h1').style.color = "white";
    // img();

}

// function img(){
//     document.getElementById('h1').style.backgroundImage = "url(' ')";
// }
// function true1(){
    
// }