var canvas = document.querySelector('canvas');
var innerwidth=canvas.width=window.innerWidth;
var innerheight=canvas.height=window.innerHeight;
var c =canvas.getContext('2d');

/*Constructor Function for Circle*/
function Planet(x,y,radius,color){
  this.x=x;
  this.y=y;
  this.radius=radius;
  this.color=color;
  this.draw=function(){
     c.beginPath();
     c.arc(this.x,this.y, this.radius,0,Math.PI*2,false);
     c.strokeStyle=this.color;
     c.stroke();
     c.fillStyle=this.color;
     c.fill();
      

     
  }
  
}

var myplanet=[];
var y=300;
var radius=[80,15,25,30,40,30,25,15,25];
var distance=[200,330,400,480,580,670,750,800,850];
var col_arr=['red','green','blue','yellow','red','green','blue','yellow','red'];
for (var i = 0 ; i < 10; i++) {
      myplanet[i]= new Planet(distance[i],y,radius[i],col_arr[i]); 
      myplanet[i].draw(); 

}

/*THis loop for display stars*/
var mycircle_arr=[];
for (var i = 0,j=0; i <500; i++) {
      var radius=1;
      var col_arr=['white','white','white','white',"white","white"];
      var dx=Math.random() -0.5;
      var dy=Math.random() -0.5;
      var x=Math.random() * (innerwidth - radius*2) + radius;
      var y=Math.random() * (innerHeight- radius*2) + radius; 
      //console.log("radius",radius);
      mycircle_arr[i]= new Planet(x,y,radius,col_arr[j]);
      mycircle_arr[i].draw();
      j++;
     if (j===col_arr.length) {
      j=0;
     }
}
