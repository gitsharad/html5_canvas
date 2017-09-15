var canvas = document.querySelector('canvas');
//console.log("canvas",canvas);
//canvas.width=window.innerWidth;
//canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c =canvas.getContext('2d');


animate();
var i=5;
var x=200;
var radius=30;
function animate(){
   requestAnimationFrame(animate);
   c.clearRect(0,0,window.innerWidth,window.innerHeight);
   c.beginPath();
   c.arc(x,200,30,0,Math.PI*2,false);
   c.strokeStyle="red";
   c.stroke();
   if (x+radius>innerWidth || x-radius < 0 ) {
       i=-i;
   }
   x+=i;
}