var list = [];

var answerNew = prompt("What would you like to do?");

while(answerNew!=="quit") { 
	if(answerNew == "new") {
		newTodo();
	} else if(answerNew == "list"){
		listTodo();
	} else if(answerNew === "delete"){
		deleteTodo();
	}
	var answerNew = prompt("What would you like to do?");
}

function newTodo(){
	var item = (prompt("What would you like to add to list?"));
	list.push(item);
	alert(item + " added to list!");
	}

function listTodo(){
	console.log("******");
	list.forEach(function(thing, i,){  //I used i here, but any placeholder works
	console.log((i+1) + ": " + thing);
	});
	console.log("******");
}

function deleteTodo(){
	var index = prompt("What is the number of the item you want to delete?");
	alert((list[index-1]) + " has been deleted!");
	list.splice((index-1),1);
}


//	THIS IS FIZZBUZZ USING FOR EACH

// var shitlist = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,30,60];

// shitlist.forEach(function(shit){
// 	if(shit%3===0){
// 		if(shit%5===0){
// 			console.log(shit + " FizzBuzz");
// 		}
// 		else{
// 			console.log(shit + " Fizz");
// 		}
// 	}
// 	else if (shit%5===0){
// 		console.log(shit + " Buzz");
// 	}
// });
	