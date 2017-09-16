var canvas = document.querySelector('canvas');
var innerwidth=canvas.width=window.innerWidth;
var innerheight=canvas.height=window.innerHeight;
var c =canvas.getContext('2d');

/*Constructor Function for Circle*/
function Circle(x,y,dx,dy,radius,color){
  this.x=x;
  this.y=y;
  this.dx=dx;
  this.dy=dy;
  this.radius=radius;
  this.color=color;
  this.draw=function(){
     c.beginPath();
     c.arc(this.x,this.y,30,0,Math.PI*2,false);
     c.strokeStyle=this.color;
     c.stroke();  
  }
  this.update=function(){
    if (this.x+this.radius>innerWidth || this.x-this.radius < 0 ) {
       this.dx=-this.dx;
     }
   if (this.y+this.radius>innerHeight || this.y-this.radius < 0 ) {
       this.dy=-this.dy;
   }
   this.x+=this.dx;
   this.y+=this.dy;
   this.draw();
  }
  
}

//var mycircle=new Circle(x,y,dx,dy,radius);
var mycircle_arr=[];
for (var i = 0,j=0; i < 1000; i++) {
      var radius=30;
      var col_arr=['red','green','blue','yellow'];
      var dx=Math.random() -0.5;
      var dy=Math.random() -0.5;
      var x=Math.random() * (innerwidth - radius*2) + radius;
      var y=Math.random() * (innerHeight- radius*2) + radius; 
      

      mycircle_arr[i]= new Circle(x,y,dx,dy,radius,col_arr[j]);
      j++;
     if (j===col_arr.length) {
      j=0;
     }
}
animate();  
function animate(){
  
    requestAnimationFrame(animate);
    c.clearRect(0,0,window.innerWidth,window.innerHeight);
    for (var i = 0; i < mycircle_arr.length; i++) {
      mycircle_arr[i].update();
    }
    //mycircle.update();
}