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

function  moveRight() {
    var start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      pacman.style.left = timePassed / 3 + 'px';

      if (timePassed > 2000) 
        clearInterval(timer);

    }, 20);
}


