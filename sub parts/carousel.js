var sum2=0;
var pdf=["certificates/html5.pdf",
"certificates/css3.pdf",
"certificates/Js.pdf",
"certificates/responsive.pdf"];
function gotonext(dot) {
	var count;
	if(dot>4)
	{	sum2++;
		count=sum2%4;
	}
	else{
		sum2=dot;
		count=dot;
	} 
	document.getElementsByTagName('iframe')[0].setAttribute("src",pdf[count]);
	for(var i=0;i<4;i++)
	document.getElementsByClassName('bubble')[i].style.background="black";
	document.getElementsByClassName('bubble')[count].style.background="#ffcb0b";
}
function gotoprevious(){
	sum2--;
	var count=((1024)+sum2)%4;
	// the value (1024) is set to be some large multiple of 4 because if someone keeps on pressing the negative value then 
	// sum2 may get beyond he -4 and things would go wrong.
	document.getElementsByTagName('iframe')[0].setAttribute("src",pdf[count]);
	for(var i=0;i<4;i++)
	document.getElementsByClassName('bubble')[i].style.background="black";
	document.getElementsByClassName('bubble')[count].style.background="#ffcb0b";
}
function spanclick(dot)
{
	gotonext(dot);
	// include a focuus when the person is clicking on the link
}
function closer()
{
//  var b=document.getElementsByTagName('button')[0];
  var a=window.innerWidth;
  if(a<=739)
  {
    var z=document.getElementsByClassName('low')[0];
    if(sum1%2==1)
    {
    //  b.style.background="red";
      sum1++;
      z.style.transform="translate(-45vw,0px)";
      toggler.classList.toggle("change");
    }
  }
}