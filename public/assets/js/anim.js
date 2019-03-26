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
 