var sum=0;
var image=["https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"https://i.pinimg.com/originals/f0/04/bb/f004bbb91caea47f1f4681f01000427d.jpg",
"https://cdn1.thr.com/sites/default/files/2015/12/got-iconic-images-18_2.jpg",
"https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/gbepvjettqttzqlz_1593258788.jpeg?tr=w-812,h-464"];
function gotonext() {
	sum++;
	var count=sum%4; 
	document.getElementsByTagName('img')[0].setAttribute("src",image[count]);
	for(var i=0;i<4;i++)
	document.getElementsByClassName('bubble')[i].style.background="white";
	document.getElementsByClassName('bubble')[count].style.background="black";
}
function gotoprevious(){
	sum--;
	var count=((1024)+sum)%4;
	// the value (1024) is set to be some large multiple of 4 because if someone keeps on pressing the negative value then 
	// sum may get beyond he -4 and things would go wrong.
	document.getElementsByTagName('img')[0].setAttribute("src",image[count]);
	for(var i=0;i<4;i++)
	document.getElementsByClassName('bubble')[i].style.background="white";
	document.getElementsByClassName('bubble')[count].style.background="black";
}