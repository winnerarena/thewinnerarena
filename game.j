const MAINTENANCE = false;

const lobby = document.getElementById("lobby");
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const maintenance = document.getElementById("maintenance");

canvas.width = innerWidth;
canvas.height = innerHeight;

let playerColor = "red";
let mode = "classic";
let enemies = [];
let time = 0;

if (MAINTENANCE) {
  maintenance.style.display = "block";
} else {
  maintenance.style.display = "none";
}

function setColor(c) {
  playerColor = c;
}

function startGame(m) {
  mode = m;
  lobby.style.display = "none";
  canvas.style.display = "block";
  enemies = [];
  time = 0;
  loop();
}

const player = { x: 200, y: 200, r: 15 };

function loop() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = playerColor;
  ctx.beginPath();
  ctx.arc(player.x,player.y,player.r,0,Math.PI*2);
  ctx.fill();

  if (mode === "chaos" && Math.random() < 0.05) {
    enemies.push({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height,
      r: 10 + Math.random()*10
    });
  }

  enemies.forEach(e=>{
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(e.x,e.y,e.r,0,Math.PI*2);
    ctx.fill();
  });

  time++;
  requestAnimationFrame(loop);
}

document.addEventListener("mousemove",e=>{
  player.x = e.clientX;
  player.y = e.clientY;
});

/* COMMENTAIRES */
const commentBtn = document.getElementById("commentBtn");
const comments = document.getElementById("comments");

commentBtn.onclick = () => {
  comments.style.display = comments.style.display==="block"?"none":"block";
};

function saveComment(){
  localStorage.setItem("comment",document.getElementById("commentText").value);
  alert("Merci pour ton retour ❤️");
}
