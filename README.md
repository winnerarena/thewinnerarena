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
