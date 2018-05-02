// var storageBtn1 = document.querySelector('#btn1');
// var storageBtn2 = document.querySelector('#btn2');

// storageBtn1.addEventListener('click', setLocalStorage);
// storageBtn2.addEventListener('click', setSessionStorage);

// // localStorage.setItem('lastname', 'Cobian');
// function setLocalStorage(){
//     localStorage.setItem('first', 'angel')
// }
// function setSessionStorage(){
//     sessionStorage.setItem('vehicle', 'jeep');
// }

var saveBtn = document.querySelector('input[type="submit"]');

if(localStorage.getItem('details') !== null){
 saveBtn.addEventListener('click', checkPassword);
 }else{
     saveBtn.addEventListener('click', getUserInfo)
 }

saveBtn.addEventListener('click', getUserInfo);

function getUserInfo(evt){
    evt.preventDefault();
    var radio = document.querySelector('input[type="radio"]:checked').value;
    var username = document.querySelector('input[type="text"]').value;
    var password = MD5(document.querySelector('input[type="password"]').value);

    localStorage.setItem('details', JSON.stringify(new userInfo(username, password, radio)));
    document.querySelector('label[for="theme"]').style.display= 'none';
//    console.log(radio);
   
}
function userInfo(un, pw, theme){
    this.user = un;
    this.pass = pw;
    this.theme = theme;
}

function checkUserInfo(){
    
    if(localStorage.getItem('details') !== null){
        document.querySelector('label[for="theme"]').style.display= 'none';        
        var userInfo = JSON.parse(localStorage.getItem('details'));
        document.querySelector('input[type="text"]').value = userInfo.user
             // alert('Please enter your password');
    }
}
checkUserInfo();

function checkPassword(evt){
    evt.preventDefault();
    var userName = document.querySelector('input[type="text"]').value;
    var userPass = MD5(document.querySelector('input[type="password"]').value);
    var userInfo=JSON.parse(localStorage.getItem("details"));
    if(userName === userInfo.user && userPass === userInfo.pass){
        alert('Welcome Home!');
        document.body.classList.add(userInfo.theme);
    }else{
        alert('Please enter proper credentials');
    }
}