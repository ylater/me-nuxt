<template>
  <canvas ref="canvasRef"></canvas>
</template>

<script lang="ts" setup>
const canvasRef = ref()
class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  constructor({ width, height }: { width: number, height: number }) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.size = Math.random() * 10 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update(ctx: CanvasRenderingContext2D, width: number, height: number) {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.size > 0.2) this.size -= 0.1;
    if (this.x < 0 || this.x > width) this.speedX *= -1;
    if (this.y < 0 || this.y > height) this.speedY *= -1;
  }
}
function initParticles() {
  const canvas = canvasRef.value
  const ctx = canvas.getContext('2d')
  const width = canvas.width = window.innerWidth
  const height = canvas.height = window.innerHeight
  const particles = Array.from({ length: 100 }, () => new Particle({ width, height }));
  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.update(ctx, width, height);
      p.draw(ctx);
    });
    requestAnimationFrame(animate);
  }
  animate();
}

onMounted(() => {
  initParticles()
})
</script>
<style lang="less" scoped></style>