const canvas = document.getElementById("particlesCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 6 + 2;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw() {
    // Criando um gradiente radial
    let gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)"); // Cor central branca
    gradient.addColorStop(0.5, "rgba(0, 150, 255, 0.8)"); // Azul médio
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)"); // Transição suave para o fundo

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });

  requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

document.getElementById('in').addEventListener('click', function() {
    const container = document.getElementById('inicio');
    container.scrollIntoView({
        behavior: 'smooth', 
        block: 'center'
    });
});
document.getElementById('pr').addEventListener('click', function() {
    const container = document.getElementById('projetos');
    container.scrollIntoView({
        behavior: 'smooth', 
        block: 'center'
    });
});
document.getElementById('so').addEventListener('click', function() {
    const container = document.getElementById('sobre');
    container.scrollIntoView({
        behavior: 'smooth', 
        block: 'center'
    });
});
document.getElementById('co').addEventListener('click', function() {
    const container = document.getElementById('contato');
    container.scrollIntoView({
        behavior: 'smooth', 
        block: 'center'
    });
});
window.sr = ScrollReveal({ reset: true });

sr.reveal(".projetos-box-item", {
  duration: 2000,
  origin: "bottom",
  distance: "50px",
  delay: 200,
});
sr.reveal(".cabecalho", {
  duration: 2000,
  origin: "top",
  distance: "50px",
  delay: 200,
});
sr.reveal(".foto", {
  duration: 2000,
  origin: "top",
  distance: "50px",
  delay: 200,
});
sr.reveal(".sobre-box", {
  duration: 2000,
  origin: "bottom",
  distance: "50px",
  delay: 200,
});
sr.reveal(".formulario-contato", {
  duration: 2000,
  origin: "bottom",
  distance: "50px",
  delay: 200,
});

document.getElementById('in').addEventListener('click', function() {
    const container = document.getElementById('inicio');
    container.scrollIntoView({
        behavior: 'smooth', 
        block: 'center'
    });
});
document.getElementById('pr').addEventListener('click', function() {
    const container = document.getElementById('projetos');
    container.scrollIntoView({
        behavior: 'smooth', 
        block: 'center'
    });
});
document.getElementById('so').addEventListener('click', function() {
    const container = document.getElementById('sobre');
    container.scrollIntoView({
        behavior: 'smooth', 
        block: 'center'
    });
});
document.getElementById('co').addEventListener('click', function() {
    const container = document.getElementById('contato');
    container.scrollIntoView({
        behavior: 'smooth', 
        block: 'center'
    });
});