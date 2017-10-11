var button1 = document.querySelector("#p1");
var button2 = document.getElementById("p2");
var button3 = document.querySelector("#p3");
var p1Score = 0;
var p1TextScore = document.querySelector(".first");
var p2Score = 0;
var p2TextScore = document.querySelector(".second");
var reset = document.getElementById("reset");
var gameOver = false;
var winningScore = 0;
var playTo = document.querySelector("input");
var winNum = document.getElementById("winNum");

button1.addEventListener("click", function(){
	if(!gameOver){	
		p1Score++;
		p1TextScore.textContent=p1Score;
		if(p1Score === winningScore){
			p1TextScore.classList.add("green");
			console.log("GAME OVER");
			gameOver = true;
		}
	}
});

button2.addEventListener("click", function(){
	if(!gameOver){	
		p2Score++;
		p2TextScore.textContent=p2Score;
		if(p2Score === winningScore){
			p2TextScore.classList.add("green");
			console.log("GAME OVER");
			gameOver = true;
		}
	}
});

reset.addEventListener("click", function(){
	resetter();
});

playTo.addEventListener("change", function(){
	winNum.textContent = playTo.value;
	winningScore = Number(playTo.value);
	resetter();
});

function resetter(){
	p1Score = 0;
	p2Score = 0;
	p1TextScore.textContent = p1Score;
	p2TextScore.textContent = p2Score;
	p1TextScore.classList.remove("green");
	p2TextScore.classList.remove("green");
	gameOver = false;
}

