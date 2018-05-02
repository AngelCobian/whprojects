var btns = document.querySelectorAll('button');

for(var i = 0; i <btns.length; i++){
    btns[i].addEventListener('click', function(evt){
        console.log(evt);
        console.log(this);
    });
}
window.addEventListener('click', function(evt){
    console.log(evt.target.nodeName);
    if(evt.target.nodeName == 'BUTTON'){
        console.log(evt.target);
        console.log(this);
    }
});

var cars = ['jeep','honda','jeep','subaru'];
var types = ['string',true,5,[1,2,3]];
console.log(cars);
console.log(types);

var car= {
    type: 'jeep',
    model: 'wrangler',
    color: 'black',
    offroad: 'ture',
    trim: ['sunroof', 'hardtop', '4 wheel drive']
};
console.log(car.trim);
var me ={
    firstname: '0',
    lastname:'0',
    age:'0',
    height: '0',
    hair: '0',
    haircolor:'0',
    facialhair: "0",
    facialhaircolor:'0',
    greeting: function(msg){
        console.log(this.firstname);
        // console.log(msg + "me");
    }
}
console.log(me.haircolor);
me.middlename = 'none';
console.log(me);
me.greeting("Hey there!");
function Person(first, last, age, eye){
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eyecolor = eye;
}
var myDad = new Person('dad', 'Dad', '59', 'brown');
console.log(myDad.eyecolor);
var mymom = new Person('mom', 'mom', '57', 'green');
var tom = new Person('tom', 'joe', '21', 'blue');
console.log(tom.eyecolor);
var april = new Person('april', 'month', '32', 'pink');
console.log(april.eyecolor);
console.log(mymom.eyecolor);

var users = [];
var user = 0;
var form = document.querySelector('form')
console.log(form.elements.value);

function UserAcc(email, username, password){
    this.email = email;
    this.username = username;
    this.password = password;
}
var submitBtn = document.querySelector('input[type="sumbit"]');
submitBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    // user = user + 1;
    user.push( 
        new UserAcc(
            form.elements[0].value
            form.elements[1].value
            form.elements[2].value
        )
    );
    // user++
    // // console.log(user);
    // for(var i = 0; i < form.elements.value - 1; i++){
    //     console.log(form.elements[i].value);
    };
// console.log(user);
});
console.log(user);