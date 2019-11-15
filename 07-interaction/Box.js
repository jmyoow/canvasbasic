class Box {
  constructor(index, x, y, speed) {
    this.index = index;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = 100;
    this.height = 100;
    this.draw();
  }

  draw() {
    context.fillStyle = 'rgba(0,0,0,0.5)';
    context.fillRect(this.x, this.y, 100, 100);
    context.fillStyle = '#fff';
    context.fillText(this.index, this.x+30, this.y+30);
  }
}