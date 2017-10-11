var movies=[
{
	title: "Movie1",
	watched: true,
	rating: 5
},
{
	title: "Movie2",
	watched: false,
	rating: 4.5
},
{
	title: "Movie3",
	watched: true,
	rating: 4
},
{
	title: "Movie4",
	watched: false,
	rating: 1.5
}
];

movies.forEach(function(movies){
	console.log(buildString(movies));
});

function buildString(movies){
	if(movies.watched === true){
		var y = "You have watched ";
	} else{
		var y = "You have not seen ";
	}
	return(y + '"' + movies.title + '" ' + movies.rating);
}


var button = document.querySelector("button");

var h3 = document.querySelector("h3");


function clicked(){
	h3.textContent = "Someone Clicked Me!";
	alert("h3 was clicked!");	
}

button.addEventListener("click", clicked);


var lis = document.querySelectorAll("li");

function changeBackground(){
	this.style.background="black";
}

for(var i = 0;i<lis.length;i++){
	lis[i].addEventListener("click", changeBackground);
}




















