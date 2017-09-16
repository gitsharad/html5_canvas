var canvas = document.querySelector('canvas');
//console.log("canvas",canvas);
//canvas.width=window.innerWidth;
//canvas.height=window.innerHeight;
var innerwidth=canvas.width=window.innerWidth;
var innerheight=canvas.height=window.innerHeight;
var c =canvas.getContext('2d');
animate();
//console.log("innerheight innerwidth",innerwidth,innerheight,Math.random() * innerwidth);
var dx=5;
var dy=5;
var x=200;
var y=200;
var radius=30;
function animate(){
   requestAnimationFrame(animate);
   c.clearRect(0,0,window.innerWidth,window.innerHeight);
   c.beginPath();
   c.arc(x,y,30,0,Math.PI*2,false);
   c.strokeStyle="red";
   c.stroke();
   if (x+radius>innerWidth || x-radius < 0 ) {
       dx=-dx;
   }
   if (y+radius>innerHeight || y-radius < 0 ) {
       dy=-dy;
   }
   x+=dx;
   y+=dy;
}