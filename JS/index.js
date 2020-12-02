/* function close()
  {
    var z=document.getElementsByClassName('header')[0];
  //  if(z.style.left==="0vw" && z.style.top==="8%")
      z.style.left="-40vw";
  }
*/
//window.location.reload();
window.onscroll=function(){scroll_change()};
function scroll_change()
{
  if(document.body.scrollTop>15 || document.documentElement.scrollTop>15)
  {
    document.getElementsByClassName('scroll')[0].style.display="none";
  }
  else
  {
    document.getElementsByClassName('scroll')[0].style.display="block";
  }
  var p=window.innerHeight;
  p=p/2;

  if(( document.body.scrollTop>=p-100 && document.body.scrollTop<=p+100 ) || ( document.documentElement.scrollTop>=p-100 && document.documentElement.scrollTop<=p+100))
  {
    document.getElementsByClassName('bar1')[0].style.background="blue";
    document.getElementsByClassName('bar2')[0].style.background="white";
    document.getElementsByClassName('bar3')[0].style.background="#2bd411";
  }
  else if(document.body.scrollTop>=p+100 || document.documentElement.scrollTop>=p+100)
  {
    document.getElementsByClassName('bar1')[0].style.background="#2bd411";
    document.getElementsByClassName('bar2')[0].style.background="#2bd411";
    document.getElementsByClassName('bar3')[0].style.background="#2bd411"; 
  }
   
  else
  {
    document.getElementsByClassName('bar1')[0].style.background="blue";
    document.getElementsByClassName('bar2')[0].style.background="blue";
    document.getElementsByClassName('bar3')[0].style.background="blue";
  }
}
var toggler;
var sum1=0;
function myFunction(x) 
{
  toggler=x;
  x.classList.toggle("change");
  var y=document.getElementsByClassName('header')[0];

    if(sum1%2==0)
    {
      // y.style.left="-40vw";
      y.style.transform="translate(45vw,0px)";
    }
    else
    {
      //y.style.left="0vw";
      y.style.transform="translate(-45vw,0px)";

    }
    sum1++;
}
function closer()
{
//  var b=document.getElementsByTagName('button')[0];
  var a=window.innerWidth;
  if(a<=739)
  {
    var z=document.getElementsByClassName('header')[0];
    if(sum1%2==1)
    {
    //  b.style.background="red";
      sum1++;
      z.style.transform="translate(-45vw,0px)";
      toggler.classList.toggle("change");
    }
  }
}

// this is to reload the browser when ever the width changes to 740px or more....

function resize()
{
  var w;
  var h;

    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight

    if (typeof window.innerWidth != 'undefined') {
        w = window.innerWidth;
        h= window.innerHeight;
    }

    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)

    else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
        w = document.documentElement.clientWidth;
        h= document.documentElement.clientHeight;
    }

    // older versions of IE

    else {
        w = document.getElementsByTagName('body')[0].clientWidth;
        h = document.getElementsByTagName('body')[0].clientHeight;
    }

   // w=window.innerWidth;
    if((w>=739 && w<=800))
    window.location.reload();
}
// function to judge wheter the user is using mobile or desktop, if mobile->redirect to linked else, direct user to carousel.html page.
function judje()
{
  wi = document.documentElement.clientWidth; 
  if(wi<=1250)
    document.getElementsByTagName('a')[2].setAttribute("href", "sub%20parts/error.html");
  else
    document.getElementsByTagName('a')[2].setAttribute("href", "sub%20parts/carousel.html");
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//***********************    JS code for carousel *****************
  
