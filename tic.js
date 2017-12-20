function startGame() {
	document.turn = "x";
setMessage(document.turn + " get to start.");
}
function setMessage(msg) {
	document.getElementById("message")
}
function nextMove(square) {
	square.innerText = document.turn;
}
function switchTurn() {
	if (document.turn == "x") {
		document.turn = "o";
	} else {
		document.turn = "x";
	}
}