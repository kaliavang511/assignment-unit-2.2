// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE

// let number = 1;

// number++;

// if (number >= 2) {
//   console.log('yes');
// }



// 1. WRITE YOUR DESCRIPTION HERE
// We created a variable called name and set it to Dane as a string.
// Then we created a conditon that asks if name (Dane) equals Mary and if they have the same data type
// if so then print out Hi mary 
//otherwise print out how do you do?
//Because Dan is not equal to Mary, you should see 'How do you do?'

//CODE

// let name = 'Dane';

// if (name === 'Mary') {
//   console.log('Hi, Mary!');
// } else {
//   console.log('How do you do?');
// }
 



// 2. WRITE YOUR DESCRIPTION HERE
//we created a variable called secret
// Then we made another variable called code and we set the value to 123 as an integer. 
// after that, we made a condition that if code equals 123 and have the same datatype (===)
//then two things will happen 
//  1. the value of secret is now 'super'
//  2. code will times itself two times (123 * 2 = 246 )
//Next we made another condition that if code (246) is bigger than 250 then the value of secret will now be changed to 'duper'
//But because code (246) is not bigger than 250. The value of secret is still 'super'
//Lastly we're  going to ask the system to print out the value of secret into the console on the browser. Which will you'll see 'super'.

//CODE

// let secret;
// let code = 123;
 
// if(code === 123) {
//   secret = 'super';
//   code = code * 2;
// }

// if (code > 250) {
//   secret = 'duper'
// }

// console.log(secret)



// 3. WRITE YOUR DESCRIPTION HERE
// we created a variable called isStudent and we set the value to true 
// we created a second variable called age and we set the value to 34
// we created a third variable called zip and the value is 55407
//Then we created a condition if isStudent(true) is equal to true AND zip is more than 80000
//then print out 'you’re a student on the west coast
//otherwise if isStudent is equal to false OR age is less than 30
//then print out 'What are your hobbies?'
//if either of those two condition fits then ask if isStudent is equal to true 
//if so, print out 'Welcome to Prime?'
//if none of those conditions matches, print out ‘How about the weather?'
//because condition 3 matches, you should see 'welcome to Prime'

//CODE

// let isStudent = true;
// let age = 34;
// let zip = 55407;

// if (isStudent === true && zip > 80000 ) {
//   console.log(`You're a student on the West Coast!`);
// } else if (isStudent === false || age < 30) {
//   console.log('What are your hobbies?');
// } else if (isStudent === true) {
//   console.log('Welcome to Prime!');
// } else {
//   console.log('How about the weather?')
// }






// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE

// let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
// number--; 

// if (number >= 2) {
//   console.log('yes');
// }



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

// let colorOne = 'red';
// let colorTwo = 'blue';

//FIX ColorOne is s/b to set to blue and colorTwo is s/b to set to red
//Should be let colorOne = 'blue'; and let colorTwo = 'red';

// let mix = true;

// if (mix === true) {
//   colorOne = 'purple';

//FIX there should be a line of code that sets colorTwo to equal to 'purple' too.
//Should be added colorTwo = 'purple';

// }



//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

// let temp = 40;
// const time = 4;

// if (temp > 39 || time >= 4) {

// FIX change || to &&. The instruction says "and" but "or" symbol was used.
//Should be if (temp > 39 && time >= 4) {

//   console.log('throw away the food!');
// }



//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

// let age = 21;
// const minAge = 21;

// if(minAge <= age) {
//   console.log('no entry');

//FIX cosole.log should say 'enter'
//Should be console.log('enter');

// } else {
//   console.log('enter');

//FIX console.log should say 'no entry'
//Should be console.log('no entry');
// }

