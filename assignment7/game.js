function startGame() {
	alert("Game Started!");
	addBox();
	timeStart();
}

function timeStart() {
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5;
	var second = min * 60;
	var x = document.getElementById('clock');

	timer = setInterval(timeCount, TIMER_TICK);

	function timeCount() {
		var allBoxes = document.querySelectorAll("#game-layer div");
		console.log(allBoxes.length);
		second = second - 1;
		x.innerHTML = second;

		if (allBoxes.length == 0 && second > 0) {
			alert("Game Over - You Win!");
			clearInterval(timer);
		} else if (allBoxes.length > 0 && second == 0) {
			alert("Game Over - Time's Up!");
			clearInterval(timer);
			clearScreen();
		}
	}
}

function addBox() {
	var numBoxes = document.getElementById("numbox").value;
	var gameLayer = document.getElementById("game-layer");
	var colorDrop = document.getElementById("color").value;
	for (var i = 0; i < numBoxes; i++) {
		var tempBox = document.createElement("div");
		tempBox.className = "square";
		tempBox.style.left = Math.random() * (500 - 25) + "px";
		tempBox.style.top = Math.random() * (500 - 25) + "px";
		tempBox.style.backgroundColor = colorDrop;
		gameLayer.appendChild(tempBox);
		bindBox(tempBox);
	}
}

function bindBox(box) {
	box.onclick = function () {
		var gameLayer = document.getElementById("game-layer");
		gameLayer.removeChild(box);
	}
}

function clearScreen() {
	var gameLayer = document.getElementById("game-layer");
	var allBoxes = document.querySelectorAll("#game-layer div");
	for (var i = 0; i < allBoxes.length; i++) {
		gameLayer.removeChild(allBoxes[i]);
	}
}

window.onload = function () {
	var startButton = document.getElementById("start");
	startButton.onclick = startGame;
}