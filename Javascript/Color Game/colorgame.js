var colors=[];
var winningColor;
var gameOver = false;
var squares = document.querySelectorAll(".square");
var span = document.querySelector("#rgb");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var playAgainButton = document.querySelector("#playAgain");
var modeButtons = document.querySelectorAll(".modeButtons");

//functions to set up the game
function init(num){
	for (var i=0; i<num; i++){
		//assign the initial square colors:
		squares[i].style.backgroundColor = colors[i];

		//Add click listeners to each square:
		squares[i].addEventListener("click", function(){
			//Grab color of clicked square:
			var clickedColor = this.style.backgroundColor
			//Compare clicked color to correct color:
			if(gameOver === false){
				if (clickedColor===winningColor){
					message.textContent = "Correct!";
					gameOver = true;
					changeAllColorsToWinningColor(clickedColor);
					playAgainButton.textContent = "Play Again?";
				} else {
					message.textContent = "Try Again";
					this.style.backgroundColor = "black";
				}
			}
		});
	}

}

//Create the array of colors, first we make a color:
function colorMaker(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
//Then create a function to create the array:
function arrayMaker(num){
	var arr = [];
	for(i=0; i<num; i++){
		arr.push(colorMaker());
	}
	return arr;
}

//run init functions to create game
colors = arrayMaker(6);
init(6);

//Actions that change game between easy and hard:
for(var i=0; i<modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if (this.textContent === "Easy"){
			colors.splice(3,7);
			newGame(3);
			squareDisplay("none");
		} else {
			newGame(6);
			squareDisplay("block");
		}
	});
}

// //Actions that change game between easy and hard:
// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");

// })
// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");

// })

//Removed this section because it's much better to do this with css
	//This will set the hover states of the buttons
		// hoverActions(easyBtn);
		// hoverActions(hardBtn);
		// hoverActions(playAgainButton);

		// function hoverActions (hoveredButton){
		// 	hoveredButton.addEventListener("mouseover", function(){
		// 		hoveredButton.classList.add("hoverState");
		// 	})
		// 	hoveredButton.addEventListener("mouseout", function(){
		// 		hoveredButton.classList.remove("hoverState");
		// 	})

		// }

//function to adjust the display of the bottom row of squares(easy v hard):
function squareDisplay(style){
	for (var i=3; i<squares.length; i++){
		squares[i].style.display = style;
	}
}

// Function to change all squares and h1 background to clicked color:
function changeAllColorsToWinningColor(color){
	for(i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
	h1.style.backgroundColor = color;
}



//Function to change the array location of winningColor:
function selectWinner(){
	winningColor = (colors[(Math.floor(Math.random() * colors.length))]);
}
selectWinner();

//Display the rgb numbers on the top of the page:
span.textContent = winningColor;

//Make the "Play Again" button reset the array
playAgainButton.addEventListener("click", function(){
	if (modeButtons[0].classList.contains("selected")){
		newGame(3);
	} else {
		newGame(6);
	}
});

function newGame(x){
	gameOver = false;
	var squareNum = x;
	h1.style.backgroundColor = "steelblue";
	colors = arrayMaker(squareNum);
	init(squareNum);
	playAgainButton.textContent = "New Colors";
	message.textContent = "";
	selectWinner();
	span.textContent = winningColor;
}






