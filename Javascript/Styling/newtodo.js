// var li1 = document.querySelector("#li1");
// var li2 = document.querySelector("#li2");
// var li3 = document.querySelector("#li3");


// li1.addEventListener("mouseover", adder)

// li2.addEventListener("mouseover", adder)

// li3.addEventListener("mouseover", adder)


// li1.addEventListener("mouseout", remover)

// li2.addEventListener("mouseout", remover)

// li3.addEventListener("mouseout", remover)

// Everything above this was a stupid way to do it. 

var lis = document.getElementsByTagName("li");

for(var i=0;i<lis.length;i++){
	lis[i].addEventListener("mouseover", adder);
}

for(var i=0;i<lis.length;i++){
	lis[i].addEventListener("mouseout", remover);
}

for(var i=0;i<lis.length;i++){
	lis[i].addEventListener("click", strike);
}

function strike(){
	this.classList.toggle("strikethrough");
	console.log("strike");
}

function remover(){
	this.classList.remove("over");
}

function adder(){
	this.classList.add("over");
}
