<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>The Winner Arena</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<div id="maintenance">
  <h1>🛠️ Maintenance</h1>
  <p>Le jeu est temporairement indisponible.<br>Reviens bientôt 💙</p>
</div>

<div id="lobby">
  <h1>🏆 THE WINNER ARENA</h1>

  <div class="colors">
    <p>Choisis ta couleur</p>
    <button style="background:red" onclick="setColor('red')"></button>
    <button style="background:blue" onclick="setColor('blue')"></button>
    <button style="background:pink" onclick="setColor('pink')"></button>
    <button style="background:green" onclick="setColor('green')"></button>
    <button style="background:orange" onclick="setColor('orange')"></button>
    <button style="background:yellow" onclick="setColor('yellow')"></button>
    <button style="background:purple" onclick="setColor('purple')"></button>
  </div>

  <button onclick="startGame('classic')">Mode Classique</button>
  <button onclick="startGame('chaos')">🔥 Chaos Arena</button>
</div>

<canvas id="game"></canvas>

<button id="commentBtn">💬</button>

<div id="comments">
  <textarea id="commentText" placeholder="Laisse un commentaire ou dis-moi s'il y a un bug"></textarea>
  <button onclick="saveComment()">Envoyer</button>
</div>

<script src="game.js"></script>
</body>
</html>
body {
  margin: 0;
  font-family: Arial;
  background: linear-gradient(135deg,#1e3c72,#2a5298);
  color: white;
  overflow: hidden;
}

#maintenance {
  position: fixed;
  inset: 0;
  background: #000;
  display: none;
  text-align: center;
  padding-top: 30vh;
}

#lobby {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle,#ffdd00,#ff6600);
}

.colors button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  margin: 4px;
  cursor: pointer;
}

canvas {
  display: none;
}

#commentBtn {
  position: fixed;
  bottom: 10px;
  left: 10px;
  font-size: 22px;
}

#comments {
  position: fixed;
  bottom: 60px;
  left: 10px;
  display: none;
  background: #111;
  padding: 10px;
  width: 220px;
}

textarea {
  width: 100%;
  height: 80px;
}
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
