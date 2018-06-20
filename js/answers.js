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



// const kristynsCloset = [
// 						  "left shoe",
// 						  "cowboy boots",
// 						  "right sock",
// 						  "GA hoodie",
// 						  "green pants",
// 						  "yellow knit hat",
// 						  "marshmallow peeps"
// 						];

// const thomsCloset = [
// 					  [// These are Thom's shirts
// 					    "grey button-up",
// 					    "dark grey button-up",
// 					    "light blue button-up",
// 					    "blue button-up",
// 					  ],
// 					  [// These are Thom's pants
// 					    "grey jeans",
// 					    "jeans",
// 					    "PJs"
// 					  ],
// 					  [// Thom's accessories
// 					    "wool mittens",
// 					    "wool scarf",
// 					    "raybans"
// 					  ]
// 					];
	
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

//Functions


//printGreeting

// Write a function called `printGreeting` with a parameter `name` that returns a greeting with the argument **interpolated** into the greeting.

// console.log(printGreeting("Slimer"));
// > => Hello there, Slimer!

// function printGreeting(name){
// 	console.log(`Hello there,${name}!`);
// }
// printGreeting("Slimer");


// reverseWordOrder 

// Write a function `reverseWordOrder` that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.
// console.log(reverseWordOrder("Ishmael me Call"));
// > => "Call me Ishmael"

//Ryan went over part of this in class with us.  I understand the logic, but I'm still missing pieces.  I shall return. Moving on...
	// function reverseWordOrder(string){
	// 	words = []; //empty array to hold words
	// 	let message = "Welcome Home Lisa";
	// 	for (i = 0; i < message.length; i++){ //loop through each index in the message and add one to the counter, if letter at the index is not equal to an empty string (space) the letters at the index equal the current word.
	// 		if (message[i] != " "){
	// 			currentWord = "";
	// 			currentWord += message[i];
	// 				}else{
	// 				//else push the current letter at that index (the space to the empty array words)
	// 			words.push(currentWord);
	// 		}			
	// 	}				
	// };
	// console.log(reverseWordOrder("Call me Ishmael"));

// console.log(reverseWordOrder("I use Lâncome on my comb"));
// > => "comb my on Lâncome use I"

//***same as above, moving on--will revisit when caught up

// ### calculate

// Write a function called `calculate`.
	
// This function should take three arguments, two numbers and a string.

// Name the parameters `num1`, `num2`, and `operation`.
	
// If the function receives the string "add" for the operation parameter, it will return the sum of num1 and num2.
	
// If the function receives the string "sub" for the operation parameter, it will return num1 minus num2.

// Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).


// 	function calculate(num, num, str){
// 		function operation(add){
// 			num1 + num2};
// 		function operation(sub){
// 			num1 - num2};
// 		function operation(mult){
// 			 num1 * num2};
// 		function operation(div){
// 			num1 / num2};
// 		function operation(exp){
// 			 Math.pow(num1,num2);
// 	}
// calculate.operation.add(5,5)

//**This does not work, I would like to review it with Ryan.

// # 1 
// Write a function `printCool` that accepts one parameter, `name` as an argument. The function should print the name and a message saying that that person is cool.

	// function printCool(name){
	// 	console.log(`${name} is cool`);
	// }
	// printCool("Erica");

// # 2
// Write a function `calculateCube` that takes a single number and prints the volume of a cube made from that number.
// console.log(calculateCube(5));
// > => 125
	// function calculateCube(num){
	// 	console.log(num * 3);
	// }
	// calculateCube(5);	

// # 3
// Write a function `isAVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
// console.log(isAVowel("a"));
// > => true

// 	function isAVowel(str){
//   		if (str.length == 1){
// 	    let vowels = new Array('a','e','i','o','u');
// 	    let isAVowel = false;

// 	    for(counter in vowels){
// 	      if(vowels[counter] == str){
// 	        isAVowel = true;
// 	      }
// 	    }
// 	    return isAVowel;
// 	  }
// 	}

// isAVowel("a");
//credit stack overflow: I understand the logic but was trying to run it with || and &&

	
// # 4

// Write a function `getTwoLengths` that accepts two parameters (strings). The function should return an _array_ of numbers where each number is the length of the corresponding string.
// console.log(getTwoLengths("Hank", "Hippopopalous"));
// > => [4, 13]

// function getTwoLengths(str1, str2){
// 	//write a function, that accepts 2 strings
// 	arrayOfNumbers = [];
// 	x = str1.length; 
// 	y = str2.length;
			
// 	arrayOfNumbers.push(x,y);
// 	console.log(arrayOfNumbers);
// }
// getTwoLengths('red', 'blue');

// # 5 

// Write a function `getMultipleLengths` that accepts a single parameter as an argument: an **array** of **strings**. The function should return an array of **numbers** where each number is the length of the corresponding string.
// function getMultipleLengths([str1, str2, str3, str4, str5]){
// 	arrayOfNumbers = [];
// 		x = str1.length; ß
// 		y = str2.length;
// 		z = str3.length;

// 		arrayOfNumbers.push(x,y,z);
// 	console.log(arrayOfNumbers);
// }
// 	getMultipleLengths(["hello", "what", "is", "up", "dude"]);

			
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// > => [5, 4, 2, 2, 4]


// # 6

// Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

// console.log(maxOfThree(6, 9, 1));
// > => 9
//maxOfThree(6, 9, 1);


// function maxOfThree(num1, num2, num3){
// 	if ((num1 > num2) && (num1 > num3))
// 		console.log(num1);
// 		else if ((num2 > num1) && (num2 > num3))
// 			console.log(num2);
// 		else if ((num3 > num1) && (num3 > num2))
// 			console.log(num3);
// 	}
// 	console.log(maxOfThree(6, 9, 1));
	




// # 7

// Write a function `printLongestWord` that accepts a single argument, an **array** of **strings**. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// > => "Peanutbutter"

		// function printLongestWord([str1, str2, str3]){
		// 	if ((str1 > str2) && (str1 > str3))
		// 		console.log(str1);
		// 	else if ((str2 > str1) && (str2 > str3))
		// 		console.log(str2);
		// 	else if ((str3 > str1) && (str3 > str2))
		// 		console.log(str3);

		// }
		// console.log(printLongestWord(["BoJack", "Princess", "Diane"]));


// # 8

// Write a Javascript function called `transmogrify`. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

// For example, the transmogrified result of 5, 3, and 2 is `(5 times 3) to the
// power of 2` is 225.

// ```javascript
// console.log(transmogrify(5, 3, 2));
// ```

// > => 225


// function transmogrify(num1, num2, num3){
// 	console.log(Math.pow((num1 * num2), num3));

// }
// console.log(transmogrify(5, 3, 2));

// ### Objects

// ## Syntax

// List and describe each individual piece of syntax that we use to construct an object. Don't leave anything out! The list is finite.

	//curly braces - like a code block
	//commas - between elements

// ## Me

// 1. Create an empty object called `me`.
// // 2. Assign it properties for **name**, **age**, and **email** with corresponding values.
// 		const me = {
// 			name: "Erica",
// 			age: 38,
// 			email: "ercfit@gmail.com",
// 			placeOfResidence: "Springfield, IL"
// 		};

// 		console.log(me);



// // 3. Using dot notation, access the **name** property in your object.

// 	console.log(me.name);

// // 4. Without writing directly into the object, update the value of **age** to be 1000 years old.

// 	console.log(me.age = 1000);

// // 5. Using dot notation, verify that **age** has been updated.
// 	console.log(me.age);

// // 6. Add a key to this object called: "place of residence" and give it a value of your hometown. Note that the key has spaces, therefore you cannot use dot notation.
// //6. Access the value of "place of residence"

	//console.log(me.placeOfResidence);

// ## Slimer

//
// const monster = {
//    name: "Slimer",
//    color: "greenish",
//    type: "plasm or ghost or something",
//    age: 6
// }
// // ```

// // * Given the **slimer** object:
// //     - What would you write to access the `name` and console.log it?
// 			console.log(monster.name);
// //     - What would you write to change the `type` to 'creature' (without changing it inside the object)
// 			console.log(monster.type = "creature");

// //     - What would you write to add a key to the object called `age`, and set the age to 6?
// 			console.log(monster.age = 6);
// //     - console.log the object to make sure `type` is creature, and `age` is 6
// 				console.log(monster.type);
// 				console.log(monster.age);


// ## Ogres

// Let's say you want to make an adventure game where you are an adventurer and you are going to fight **ogres**.

// Using **objects**, create **models** and have them interact.

// * how would you model your `adventurer`? Your adventurer will want a **name** and **hitpoints**. What else would your adventurer need?
// 		const adventurer = {
// 							name: "Thom",
// 							hitpoints: 3,
// 							weapon: "sword"
// 		};
// // * how would you model an `ogre`? Your ogre will want **hitpoints**.
// 		const ogre = {
// 			name: "Misunderstood",
// 			hitpoints: 5,
// 			weapon: "wit"
// 		};

// // // * Write a very small program that will simulate a battle between your adventurer and an ogre. 
// 		function attack(attacker, victim){
// 				console.log(`${JSON.stringify(attacker)} is attacking ${JSON.stringify(victim)}.`);
// 				victim.hitpoints--;
				
// 	}	//***the JSON.stringify is giving me the entire object--not just the object name?!?!?
// attack(ogre.name, adventurer.name);


// 	* When your adventurer's hitpoints reach 0 the game is over.

// 	* When your ogre's hitpoints reach 0 the game is over.

// * If you want to provide input to the game, you can run it in the Chrome console (but that isn't strictly necessary for now).
