var theDate = new Date();
console.log(theDate);
console.log(theDate.getDate());
// var = 
console.log(theDate.getDay());
console.log(theDate.getFullYear());
console.log(theDate.getMonth() + 1);
console.log(theDate.toLocaleString('en-us', {month: 'long'}));
var myBday = new Date(1932, 10, 1);
// var dateStr = `
//     Today's date is ${myBday.getDate()}th of ${myBday.toLocaleString('en-us', {month: 'long'})} ${theDate.getFullYear()}
// `;

var dateStr = `
    ${myBday.toLocaleString('en-us', {month: '2-digit'})}/${myBday.toLocaleString('en-us', {day: '2-digit'})}/${myBday.toLocaleString('en-us', {year: '2-digit'})}
`;
// document.body.textContent = dateStr;

var theTime = new Date();
var theStr = `
${theTime.toLocaleString('en-us', {hour: 'nuumeric' '2-digit'})}

`
document.body.textContent= theTime;

var myTimer = setInterval(updateTimer, 1000);
function updateTimer(){
    var theTime = new Date();
    var timeStr =  `
    ${theTime.toLocaleString('en-us', {hour: 'numeric', hour12: false, minute:'2-digit', second:'2-digit'}) }
    
    `;
    document.querySelector('h3').textContent = timeStr'
}
var myDelay = setTimeout(runTimer,5000);
function hiliteBg(){
    document.body.classList.add('hilite')
}    

function runTimer(){
    var theTime = new Date();
    var timeStr= `
    ${theTime.toLocaleString('en-us', {hour: 'numeric', hour12: false,minute: '2-digit', second: '2-digit'})}`;
    document.querySelector('h3').textContent = timeStr;
}