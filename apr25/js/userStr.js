var clientId= 'bbb77e2a6a799bfc26ed0';
var clientId2= 'M2JViWMjEClGhhM1NN1fl2gXinP9ZxrM';
var myUL = document.querySelector('ul');

function userStr(evt)
{
    console.log(searchBox.value);
    getReq(`https://api.github.com/search/users?q=${searchBox.value}&client_id=${clientId}`, githubUsers);
    // if(evt.key !== undefined && 
    //     evt.key !== 'Backspace' && 
    //     evt.key !== 'Tab')
    // str += evt.key;
    // // getCharacter(userStr);
    // console.log(str, searchBox.value) 
    // processData(apiData);
    
}

// function processData(data){
//     console.log(data.lists);
//     for(var i =0; i < data.list.length; i++){
//      console.log(data.list[i]);
//     var weatherDesc = data.list[i].avatar_url[0];
//     console.log(weatherDesc);
//     // var timeOfDay= data.list[i].dt;
//    console.log(data.lists.avatar_url[i]);
//     var myLi=`
//     <li>
//         <p><img src='${weatherDesc}'></p>
//     </li>
//     `;
//     myUL.innerHTML +=myLi;
//     }
// }