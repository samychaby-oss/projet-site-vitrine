const canvas = document.getElementById("petalsCanvas");
const ctx = canvas.getContext("2d");

// Ajuste la taille du canvas
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Classe d'un pétale
class Petal {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * -canvas.height;
    this.size = 10 + Math.random() * 15;
    this.speed = 1 + Math.random() * 1.5;
    this.wind = (Math.random() - 0.5) * 0.4;
    this.angle = Math.random() * Math.PI * 2;
  }

  update() {
    this.y += this.speed;
    this.x += this.wind;
    this.angle += 0.02;

    if (this.y > canvas.height) this.reset();
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);

    const grad = ctx.createLinearGradient(0, 0, this.size, this.size);
    grad.addColorStop(0, "rgba(255,183,197,0.9)");
    grad.addColorStop(1, "rgba(255,197,208,0.9)");

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.ellipse(0, 0, this.size, this.size * 0.6, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}

// Création des pétales
let petals = [];
for (let i = 0; i < 40; i++) petals.push(new Petal());

// Animation
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  petals.forEach((p) => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}
animate();
