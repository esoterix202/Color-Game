var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var playAgainButton = document.getElementById("playAgain");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	setUpModeButtons();
  	setUpSquares();
	reset();
}

function setUpModeButtons() {
	for (var i = 0 ; i < modeButtons.length; i++) {
		//modeButtons event listeners
		modeButtons[i].addEventListener("click", function(){
			//delete selected class first from buttons
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			//than add to the coresponding button
			this.classList.add("selected");
			if (this.textContent === "Easy") {
				numSquares = 3;
			} else {
				numSquares = 6;
			}
			// this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
  	}
}

function setUpSquares() {
	for(var i = 0; i < squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to picked color
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!!!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				//change text of the reset button
				playAgainButton.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!!!";
			}
		});
	}
}

function reset(){
	//clean text displaying
	messageDisplay.textContent = "";
	//get back to new colors
	resetButton.textContent = "New Colors";
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	//change h1 bcg color to match body color
	h1.style.backgroundColor = ("#BD2031");
}

resetButton.addEventListener("click", function(){
	reset();
});

function changeColors (color) {
	// loop through all squares
	for(var i = 0; i < squares.length; i++){
		// change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors (num) {
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor () {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

