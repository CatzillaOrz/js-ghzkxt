// snippet #1

var i;

function loop() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
}

loop();
console.log(i); // undefined
