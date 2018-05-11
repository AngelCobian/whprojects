const value = 5;


document.getElementById('test').innerHTML="text: " + value
const warn =document.querySelector('#warning');
  if (value < 10) {
    warn.innerHTML= "to low"
  }

  const colors = ['red', 'orange', 'yellow', 'green'];

let result = '';

colors.forEach(eachColor => {
  result = result + ' ' +eachColor;
});
document.getElementById('colors').innerHTML = result;
