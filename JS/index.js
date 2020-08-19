/* function close()
  {
    var z=document.getElementsByClassName('header')[0];
  //  if(z.style.left==="0vw" && z.style.top==="8%")
      z.style.left="-40vw";
  }
*/
//window.location.reload();
var toggler;
var sum=0;
function myFunction(x) 
{
  toggler=x;
  x.classList.toggle("change");
  var y=document.getElementsByClassName('header')[0];

    if(sum%2==0)
    {
      // y.style.left="-40vw";
      y.style.transform="translate(40vw,0px)";
    }
    else
    {
      //y.style.left="0vw";
      y.style.transform="translate(-40vw,0px)";

    }
    sum++;
}
function closer()
{
//  var b=document.getElementsByTagName('button')[0];
  var a=window.innerWidth;
  if(a<=739)
  {
    var z=document.getElementsByClassName('header')[0];
    if(sum%2==1)
    {
    //  b.style.background="red";
      sum++;
      z.style.transform="translate(-40vw,0px)";
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