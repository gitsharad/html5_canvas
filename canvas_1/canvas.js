var canvas = document.querySelector('canvas');
//console.log("canvas",canvas);
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c =canvas.getContext('2d');
var x=100,y=100,width=100,height=100;
c.fillStyle="red";
c.fillRect(x,y,width,height);

c.fillStyle="green";
c.fillRect(500,y,width,height);

c.fillStyle="blue";
c.fillRect(x,400,width,height);

c.fillStyle="voilet";
c.fillRect(500,400,width,height);


//Draw Rectangle Using Line shape 
c.beginPath();
c.moveTo(800,300);
c.lineTo(900,400);
c.lineTo(800,400);
c.lineTo(800,300);
c.lineTo(800,300);
c.strokeStyle="red";
c.stroke();

//draw arc

var col_arr=['red','green','blue','yellow'];
for (var i = 0,j=0; i < 1555; i++) {
 c.beginPath();

 var myx=Math.random() * window.innerWidth;
 var myy=Math.random() * window.innerHeight; 
 c.arc(myx,myy,30,0,Math.PI*2,false);
 c.strokeStyle=col_arr[j];
 c.stroke();
 j++;
 if (j===col_arr.length) {
 	j=0;
 }//else{
 		
 	//console.log("j",j);
 //}
 myx+=60;
 
}