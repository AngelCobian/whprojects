function swap(){
    document.getElementById('invert').style.backgroundColor = "black";
    document.getElementById('invert').style.color="white";
    document.getElementById("white1").style.backgroundColor= "white";
    document.getElementById('back').style.backgroundColor="wheat";
}
function toggle(button)
{
  if(document.getElementById("fl").value=="OFF"){
   document.getElementById("fl").value="ON";}

  else if(document.getElementById("fl").value=="ON"){
   document.getElementById("fl").value="OFF";}
}
