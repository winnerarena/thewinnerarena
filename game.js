const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  r: 15,
  speed: 4,
  dx: 0,
  dy: 0
};

const bullets = [];
const enemies = [];

function spawnEnemy() {
  const edge = Math.floor(Math.random() * 4);
  let x, y;
  if (edge === 0) { x = 0; y = Math.random() * canvas.height; }
  if (edge === 1) { x = canvas.width; y = Math.random() * canvas.height; }
  if (edge === 2) { x = Math.random() * canvas.width; y = 0; }
  if (edge === 3) { x = Math.random() * canvas.width; y = canvas.height; }

  enemies.push({ x, y, r: 15, speed: 1.5 });
}

setInterval(spawnEnemy, 1000);

const keys = {};
window.addEventListener("keydown", e => keys[e.key.toLowerCase()] = true);
window.addEventListener("keyup", e => keys[e.key.toLowerCase()] = false);

window.addEventListener("click", e => {
  const angle = Math.atan2(e.clientY - player.y, e.clientX - player.x);
  bullets.push({
    x: player.x,
    y: player.y,
    vx: Math.cos(angle) * 8,
    vy: Math.sin(angle) * 8
  });
});

function update() {
  player.dx = 0;
  player.dy = 0;

  if (keys["z"] || keys["w"]) player.dy = -player.speed;
  if (keys["s"]) player.dy = player.speed;
  if (keys["q"] || keys["a"]) player.dx = -player.speed;
  if (keys["d"]) player.dx = player.speed;

  player.x += player.dx;
  player.y += player.dy;

  bullets.forEach(b => {
    b.x += b.vx;
    b.y += b.vy;
  });

  enemies.forEach(e => {
    const angle = Math.atan2(player.y - e.y, player.x - e.x);
    e.x += Math.cos(angle) * e.speed;
    e.y += Math.sin(angle) * e.speed;
  });

  draw();
  requestAnimationFrame(update);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // player
  ctx.fillStyle = "cyan";
  ctx.beginPath();
  ctx.arc(player.x, player.y, player.r, 0, Math.PI * 2);
  ctx.fill();

  // bullets
  ctx.fillStyle = "yellow";
  bullets.forEach(b => {
    ctx.beginPath();
    ctx.arc(b.x, b.y, 4, 0, Math.PI * 2);
    ctx.fill();
  });

  // enemies
  ctx.fillStyle = "red";
  enemies.forEach(e => {
    ctx.beginPath();
    ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
    ctx.fill();
  });
}

update();
