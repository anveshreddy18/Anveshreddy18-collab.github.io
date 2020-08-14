var sum=0;
var image=["https://wallpapercave.com/wp/wp1808940.jpg",
"https://i.pinimg.com/originals/f0/04/bb/f004bbb91caea47f1f4681f01000427d.jpg",
"https://cdn1.thr.com/sites/default/files/2015/12/got-iconic-images-18_2.jpg",
"https://images3.alphacoders.com/795/thumb-1920-795561.jpg"];
function gotonext() {
	sum++;
	var count=sum%4; 
	document.getElementsByTagName('img')[0].setAttribute("src",image[count]);
	for(var i=0;i<4;i++)
	document.getElementsByClassName('bubble')[i].style.background="black";
	document.getElementsByClassName('bubble')[count].style.background="white";
}
function gotoprevious(){
	sum--;
	var count=((1024)+sum)%4;
	// the value (1024) is set to be some large multiple of 4 because if someone keeps on pressing the negative value then 
	// sum may get beyond he -4 and things would go wrong.
	document.getElementsByTagName('img')[0].setAttribute("src",image[count]);
	for(var i=0;i<4;i++)
	document.getElementsByClassName('bubble')[i].style.background="black";
	document.getElementsByClassName('bubble')[count].style.background="white";
}