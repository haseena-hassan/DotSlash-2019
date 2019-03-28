var i = 0;
var txt = 'April 27 , 2019 / Venue : Computer Science Department , CET'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// ..............ctrl + k + c
//     let start = Date.now(); // remember start time

// let timer = setInterval(function() {
//   // how much time passed from the start?
//   let timePassed = Date.now() - start;

//   if (timePassed >= 2000) {
//     clearInterval(timer); // finish the animation after 2 s
//     return;
//   }

//   // draw the animation at the moment timePassed
//   draw(timePassed);

// }, 20);

// // as timePassed goes from 0 to 2000
// // left gets values from 0px to 400px
// function draw(timePassed) {
//   train.style.left = timePassed / 5 + 'px';
// }


function  moveRight() {
    var start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      pacman.style.left = timePassed / 3 + 'px';

      if (timePassed > 2000) 
        clearInterval(timer);

    }, 20);
}
 



/*loading screen code starts*/
var canvasLoader = function(){
				
  var self = this;
  window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();
  
  self.init = function(){	
    self.canvas = document.getElementById('canvas');				
    self.ctx = self.canvas.getContext('2d');
    self.ctx.lineWidth = .5;
    self.ctx.strokeStyle = 'rgba(0,0,0,.75)';
    self.count = 75;
    self.rotation = 270*(Math.PI/180);		
    self.speed = 6;
    self.canvasLoop();
  };	
  
  self.updateLoader = function(){
    self.rotation += self.speed/100;									
  };
  
  self.renderLoader = function(){							
    self.ctx.save();
    self.ctx.globalCompositeOperation = 'source-over';
    self.ctx.translate(125, 125);
    self.ctx.rotate(self.rotation);	
    var i = self.count;
    while(i--){								
      self.ctx.beginPath();
      self.ctx.arc(0, 0, i+(Math.random()*35), Math.random(), Math.PI/3+(Math.random()/12), false);								
      self.ctx.stroke();
    }	
    self.ctx.restore();											
  };					
  
  self.canvasLoop = function(){
    requestAnimFrame(self.canvasLoop, self.canvas);			
    self.ctx.globalCompositeOperation = 'destination-out';
    self.ctx.fillStyle = 'rgba(0,0,0,.03)';
    self.ctx.fillRect(0,0,250,250);
    self.updateLoader();
    self.renderLoader();
  };
  
};

var loader = new canvasLoader();
loader.init();

/*loading screen code ends*/