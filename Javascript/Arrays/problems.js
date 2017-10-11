//He does these all differently than I did. Refer to video 131 if you'd like those answers



//1. Function to print an array in reverse

var shit = [1,2,3,4,5,6,7];

	//SOLVED WITH FOR LOOP 

var y = shit.length-1
for(i=0; i<shit.length; i++){
	console.log(shit[y]);
	y--;
};

split();

	// SOLVED USING FOREACH()

var x = shit.length-1;
shit.forEach(function(crap){
	console.log(shit[x]);
	x--;
	});

// 2. Function to show if everything in array is the same

var poop = [1,1,1,1,1,1,1,1,1,1];

var first = poop[0];
var q = 0;

function isUniform(arr){
	for(i=0;i<arr.length;i++){
		if(arr[i] === first){
			q++;
		} else {
			console.log("false");
			}
		} if(q>=i){
			console.log("true");
			}
		}

isUniform(poop);

split();

// 3. Function that makes a sum of everything in an array

	//using forEach
var arr2 = [1,2,3];
var z = 0;

function sum(listing){
	arr2.forEach(function(x){
		z+=x;
	})
	console.log(z);
}

sum(arr2);

	//Using for loop
function sum(items){
	var x = 0
	for(i=0;i<items.length;i++){
		x+=items[i];
	}
	console.log(x);
}

sum(arr2);


split();

//Function to return highest numer in an array

arr6 = [1,2,3,4];
arr7 = [100,-50,50];
arr8 = [10,3,10,4];

var max = 0;

// function maxcalc(vari){
// 	for(i=0; i<vari.length; i++){
// 	if(vari[i]>max){
// 		max=vari[i];
// 	}
// }
// console.log(max);
// }

// maxcalc(arr8);

function maxcalcu(arry){
	arry.forEach(function(f){
		if(arry[f]>max){
			max = arry[f];
		}
		console.log(max);
	})
	console.log(max);
}

maxcalcu(arr6);




function split(){
	console.log("********")
}






