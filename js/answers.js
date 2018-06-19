//Conceptual Questions
//1. we use an assignment operator "=";
//2. no const or let in front of variable
//3. use "let"

//Strings
//1. firstVariable
	//let firstVariable = "Hello World";
	//let firstVariable = 5;
	//let firstVariable = secondVariable;
	//let secondVariable = "Goodnight World";
	//firstVariable = "Goodnight World";

//2. 
// 	yourName = "Erica";
// 	const myName = (name) => {
// 		console.log("Hello! My name is " + name);
// 	}

// 	myName(yourName);

// //Booleans
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = "Kevin";

// 	console.log(a < b);
// 	console.log(c > d);
// 	console.log('Name' == 'Name');
// 	console.log(a < b < d);
// 	console.log(a != a < d);
// 	console.log(e == "Kevin");
// 	console.log(48 == "48"); 

//The Farm
//1. 
	// animal = "dog";
	// const animalId = (input) => {
	// 	if (animal = "cow"){
	// 		console.log("mooooooo");
	// 	}

	// animalId(animal);
	// }

//2.
// 	animal = "dog";
// 		const animalId = (input) => {
// 			if (animal = "cow"){
// 				console.log("mooooooo");
// 			}else{
// 				console.log(input + " is not a cow.");
// 			}	
// 	animalId(animal);	
// }//this doesn't work :(

//DRIVER'S ED
//1. age = 28;
//2.
	// const age = 28;
	// if (age >= 16){
	// 	console.log("Here are the keys.");
	// }

//3.
	// const age = 14;
	// if (age <= 16){
	// 	console.log("Sorry you're too young.");
	// }

//JUST LOOP IT
//1.
	// for (let i = 0; i < 11; i++){
	// 	console.log(i);
	// }

//2. 
// 	for (let i = 10; i < 4001; i++){
// 	console.log(i);
// }	

//3.
	// for (let i = 10; i < 4001; i += 2){
	// 	console.log(i);
	// }

//LET'S GET EVEN
//1. 
	// for (i = 1; i < 101; i++){
	// 	if (i % 2 === 0){
	// 		console.log(i);
	// 	}

//2. 
	// for (i = 1; i < 101; i++){
	// 	if (i % 2 === 0){
	// 		console.log(i + " is an even number");
	// 	}
	// }

//GIVE ME FIVE
//1.
	// for(i = 0; i < 101; i++){
	// 	if (i % 5 === 0){
	// 		console.log("I found a " + i + ".  High five!");
	// 	}
	//}

//2.
	// for(i = 0; i < 101; i++){
	// 	if ((i % 3 === 0) && (i % 5 === 0))
	// 		console.log( i + " is divisible by both 3 & 5! Eight is great!")
	// 	if (i % 3 === 0){
	// 		console.log("I found a " + i + ".  Three is a crowd!");
	// 	}else{
	// 		if (i % 5 === 0){
	//  		console.log("I found a " + i + ".  High five!");
	//  	}
	// 	}
	// }	//I added a message if it's divisible by 3 and 5. 

//SAVINGS ACCOUNT
//1. 
	// bank_account = 0;
	// for (let i = 0; i < 11; i++){
	// 	bank_account += i;
	// }

	// console.log(bank_account);

//2. 
	// bank_account = 0;
	// for (let i = 0; i < 11; i++){
	// 	bank_account += i * 2;
		
	// }
	// console.log(bank_account);


//Multiples of 3 and 5
// function returnSumOfMultiples(limit){
// sum = 0;
// for(let i = 0; i < limit; i++){
// 	if ((i % 3 === 0) || (i % 5 === 0)){
// 		sum += i;
// 		}
// 	}return sum;
// }
// console.log(returnSumOfMultiples(1000));

//Easy Does It
//1. Create an array that contains three quotes and store it in a variable called `quotes`.

	// const quotes = ["Never say never", "If at first you don't succeed", "try, try again"];

//Random
//Given the following array 
	// const randomThings = [1, 10, "Hello", true]

//1. how do you access the 1st element in the array?
	//randomThings[0];

//2. Change the value of `"Hello"` to `"World"`.
	// randomThings[2] = "World"

//3. Check the value of the array to make sure it updated the array.
	// console.log(randomThings);

// We've Got Class
//Given the following array 
//const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]

//1. What would you write to access the 3rd element of the array?
//ourClass[2];

//2. Change the value of "Github" to "Octocat"
//ourClass[2] = "Octocat";

//3. Add a new element, "Cloud City" to the array.
//ourClass.push("Cloud City");
//console.log(ourClass);

//Mix It Up
//4. Given the following array `
//const myArray = [5 ,10 ,500, 20];

//1. using the `push` method, add the string `"Egon"` to the end of the array.
//myArray.push("Egon");

//2. using a method, remove the string from the end of the array.
//myArray.pop();

//3. using the `unshift` method, add the string `"Bob Marley"` to the beginning of the array
//myArray.unshift("Bob Marley");

//4. using a different method, remove the string from the beginning of the array
//myArray.shift();

//5. use the reverse method on this array
//myArray.reverse();

//console.log(myArray);

//Biggie Smalls
//Write an `if..else` statement:

//1. 
//if the number is entered is less than **100**
// 	function isLittle(num){ 
// 	if (num < 100){
// 		console.log(`little number`);
// 	}
// }
// (isLittle(13));	 

//2. If the number entered is 100 or more, alert `big number`.

// 	function isLittle(num){ 
// 	if (num < 100){
// 		console.log(`little number`);
// 	}else{
// 		console.log(`big number`);
// 	}
// }
// (isLittle(200));

// Monkey in the Middle
// Write an `if...else if...else` statement:
//	console.log `little number` if the number 		entered is less than **5**.
//  If the number entered is more than 10, log `	big number`.

// Otherwise, console.log "monkey". 

// 1. 
	// function isLittle(num){
	// 	if (num < 5){
	// 		console.log ("little number");
	// 	}else if (num > 10){
	// 			console.log("big number");
	// 		}else{
	// 			console.log("monkey");
	// 		}
	// 	}
	// isLittle();
 

//What's in Your Closet?



const kristynsCloset = [
						  "left shoe",
						  "cowboy boots",
						  "right sock",
						  "GA hoodie",
						  "green pants",
						  "yellow knit hat",
						  "marshmallow peeps"
						];

const thomsCloset = [
					  [// These are Thom's shirts
					    "grey button-up",
					    "dark grey button-up",
					    "light blue button-up",
					    "blue button-up",
					  ],
					  [// These are Thom's pants
					    "grey jeans",
					    "jeans",
					    "PJs"
					  ],
					  [// Thom's accessories
					    "wool mittens",
					    "wool scarf",
					    "raybans"
					  ]
					];
	
// 1. What's Kristyn wearing today? Using bracket notation to access items in `kristynsCloset`, log the sentence "Kristyn is rocking that " + *the third item in Kristyn's closet* + " today!" to the console.
	//console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);

// 2. Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named `kristynShoe`.
	//const kristynShoe = kristynsCloset.shift();

// 3. Kristyn just bought some sweet shades! Add `"raybans"` to her closet **after `"yellow knit hat"`.**
	//kristynsCloset.splice(5, 0, "raybans");
	//console.log(kristynsCloset);

// 4. Kristyn spilled coffee on her hat... modify this item to read `"stained knit hat"` instead of yellow.
	// kristynsCloset[4] = "stained knit hat";
	// console.log(kristynsCloset);

// 5. Put together an outfit for Thom! Using **bracket notation**, access the first element in Thom's `shirts` array.
	//console.log(thomsCloset[0,0][0]);
// 6. In the same way, access one item from Thom's pants array.
	//console.log(thomsCloset[0,1][0]);
// 7. Access one item from Thom's accessories array.
	//console.log(thomsCloset[0,2][0]);
// 8. Log a sentence about what Thom's wearing. Example: `"Thom is looking fierce in a grey button-up, jeans and wool scarf!"`
	//console.log(`Thom is looking fierce in a ${thomsCloset[0,0][0]}, ${thomsCloset[0,1][0]}, and ${thomsCloset[0,2][0]}!`);
// 9. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to `Footie Pajamas`.
	//(thomsCloset[0,1][2] = "Footie Pajamas");
































//
