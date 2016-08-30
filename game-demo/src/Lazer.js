export default class Lazer {
  constructor(args) {
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 100,
      y: 100
    }
  }
  destroy() {
    this.delete = true;
  }
  render(state) {

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.x < 0 || this.position.y <0 || this.position.x > state.screen.width || this.position.y > state.screen.height) {
      this.destroy();
    }

    const ctx = state.ctx;
    ctx.save();
    ctx.translate(this.position.x, this.position.y);
    ctx.fillStyle = '#FFF';
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.arc(0, 0, 2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

  }
}
