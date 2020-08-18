function myFunction(x) {
  x.classList.toggle("change");
  var x=document.getElementsByClassName('header')[0];
  if(x.style.display==="block")
  		x.style.display="none";
  else{
  	x.style.display="block";
  }
}