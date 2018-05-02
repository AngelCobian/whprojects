var paras = document.querySelectorAll('p');
// for(var i = 0; i <paras.length; i++){
//     // console.log(paras[i].classList.contains('para'));
//     if(!paras[i].classList.contains('para')){
//         console.log('thats not true')
//     }
// }
// console.log(3 === '3');

// console.log(typeof(3));

// var usernum = parseInt(prompt('pick a number'))

// if(typeof(usernum) === 'number'){
//     console.log(3 + usernum);
// }else{
//     console.log('please enter something')
// }
// console.log(typeof('3'));
// console.log(new XMLHttpRequest());
var wetherKey = '786a32ec5254b5b5d89a122e392fc7a3';
var myUL = document.querySelector('ul');

console.log(new XMLHttpRequest());
var req = new XMLHttpRequest();
req.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=5338196&APPID=786a32ec5254b5b5d89a122e392fc7a3 ');
req.onload = function(){
    if(req.readyState === 4){
        var apiData = JSON.parse( req.responseText);
        // console.log(apiData.emojis_url);
        processData(apiData);
    }
}
req.send(null);
function processData(data){
    for(var i =0; i < data.list.length; i++){
     console.log(data.list[i]);
    var weatherDesc = data.list[i].weather[0].description;
    console.log(weatherDesc);
    var timeOfDay= data.list[i].dt;
   
    var myLi=`
    <li>
        <p>${weatherDesc}</p>
    </li>
    `;
    myUL.innerHTML +=myLi;
    }
}
