// var clientId= 'bbb77e2a6a799bfc26ed0';

var str = '';
var searchBox = document.querySelector('header input');
searchBox.addEventListener('keyup', userStr);

function githubUsers(data){
    console.log(data)
}

function processData(data){
    console.log(data.lists);
    for(var i =0; i < data.list.length; i++){
     console.log(data.list[i]);
    var weatherDesc = data.list[i].avatar_url[0];
    console.log(weatherDesc);
    // var timeOfDay= data.list[i].dt;
   console.log(data.lists.avatar_url[i]);
    var myLi=`
    <li>
        <p><img src='${weatherDesc}'></p>
    </li>
    `;
    myUL.innerHTML +=myLi;
    }
}