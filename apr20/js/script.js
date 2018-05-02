// var req = new XMLHttpRequest();
// var characterUL = document.querySelector('ul')
// req.open('GET', 'https://rickandmortyapi.com/api/character/');
// req.onload = function(){
//     if(req.readyState === 4 && req.status ===200 ) {
//         console.log('success!', req.statusText);
//         getCharacters(req.responseText);
//     }else{
//         console.log('error', req.statusText);
//     }
//     // console.log(req);
// }
// req.send(null);

// function getCharacters(characters){
//     // console.log(JSON.parse(characters));
//     var characterArr = JSON.parse(characters);
//     for(var i = 0; i < characterArr.results.lenght; i++){
//         console.log(characterArr.results[i]);
//         var character =`
//         <li>
//             <img src='${characterArr.results[i].image}' alt='${characterArr.results[i].name}'>
//             <div>
//             <h3>${characterArr.results[i].name}</h3>
//             <ul>
//             <li><b>Species:</br></li>
//         </li>
//         `;
//         characterUL.innerHTML += character;
//     }
// }
var characterUl = document.querySelector('ul');
var homeUrl ='https://rickandmortyapi.com/api/character/'

// function getReq(url, func){

//     var req = new XMLHttpRequest();

// req.open('GET', url);
// req.onload = function()
// {
//    if(req.readyState === 4 && req.status === 200)
//    {
//        console.log('success!', req.statusText);
//        func(JSON.parse(req.responseText));
//    }
//    else
//    {
//        console.log('Error!', req.statusText);
//    }
// }
// req.send(null);
// }
$.ajax({
    url: 'https://rickandmortyapi.com/api/character/',
}).done(getCharacters);
getReq(homeUrl, getCharacters);

// characterUl.addEventListener('click', function(evt){
//     // evt.targe
//     console.log(this);
//     console.log(evt.originalTarget);
// });

var characterURl;

    $('body > ul').on('click', 'li', function(evt){
        if(this.dataset.url){
        console.log(this);
        characterURl=this.dataset.url;
        characterUl.innerHTML = '';
        getReq(characterURl, getCharacter);
    }
    });
function getCharacter(getCharacter){
    // console.log(character);
    // var characterArr=characters;
    var character= `
    <li data-url="${character.url}">
        <img src="${character.image}" alt=${character.name}">
        <div>
        <h3>${character.name}<h3>
        <ul>
            <li><b>Species:</b>${character.species}</li>
            <li><b>Gender:</b>${character.gender}</li>
    `;
    if(!character.type == ""){
        character +=`<li><b>Type:</B>${character.type}<li>`;
    }
    character+=`
    <li><b>Status</b>${character.status}</li>
    </ul>
    </div>
    `;
    characterURl.innerHTML += character;
}

function getCharacters(characters)
{
    var characterlinks = document.querySelectorAll('a');
    console.log(characterlinks);
   var characterArr = characters;
   for(var i = 0; i < characterArr.results.length; i++)
   {
       console.log(characterArr.results[i]);
       var character = `
           <li data-url="${characterArr.results[i].url}">

           <img src="${characterArr.results[i].image}" alt= "${characterArr.results[i].name}">
               <div>    
               <h3>${characterArr.results[i].name}<h3>
               <ul>
                   <li><b>Species:</b>${characterArr.results[i].species}</li>
                   <li><b>Gender:</b>${characterArr.results[i].gender}</li>
           `;
           if(!characterArr.results[i].type == ""){
            character +=`<li><b>Type:</B>${characterArr.results[i].type}<li>`;
           }
           character+=`
           <li><b>Status</b>${characterArr.results[i].status}</li>
           </ul>
           </div>
           </li>
           `;
           characterUl.innerHTML += character;
       }
   }
