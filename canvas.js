var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

piTwo = Math.PI * 2;
var v = 70;

function Circle(x, y, dx, dy, radius, fill) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.fill = fill;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, piTwo, false);
    c.fillStyle = this.fill;
    c.fill();
  }

  this.update = function() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) { this.dx = -this.dx; }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) { this.dy = -this.dy; }

    this.draw();
  }
}

var circleArray = [];

for (var i = 0; i < arrayOfColors.length; i++) {
  var radius = Math.random() * 0.9;
  // console.log(arrayOfColors[i]);
  var x = Math.random() * innerWidth;
  var y = Math.random() * innerHeight;
  var dx = (Math.random() - 0.5) * v;
  var dy = (Math.random() - 0.5) * v;
  circleArray.push(new Circle(x, y , dx, dy, radius, arrayOfColors[i]));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    setInterval(circleArray[i].update(), 10);
  }
}

animate();