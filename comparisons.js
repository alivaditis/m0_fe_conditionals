// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true

console.log(numberTeachers < numberStudents);

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
// this should log: false

console.log(numberTeachers === stringTeachers);

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true

console.log(numberTeachers !== numberStudents);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true

console.log(numberStudents >= 20);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false

console.log(numberStudents >= 21);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true

console.log(numberStudents <= 20);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true

console.log(numberStudents <= 21);

// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// The code is evaluating the conditional statement and printing either true or false.  In this case it prints true because 4 is less than 9.

var books = 3;
console.log(4 < books);
// The code is declaring a variable, books, and setting it to a numerical value to 3.  It is evaluating the coniditional statement to be true or false.
// Because 4 is not less than the numerical value of books, 3, the statement evaluates to and prints false to the console.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// The code is declaring two variables, friends and siblings.
// Friends is defined as having a numerical value of 6.  Siblings is defined as having a numerical value of 2.
// The code is evaluating the conditional statement to see if the numerical value of friends is greater than that of siblings.
// Friends has a numerical value of 6 and is greater than that of siblings, 2, so the statement evaluates to and prints true.

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.

// The code is declaring two variables, attendees and meals.
// Attendees is defined as having a numerical value of 9 and meals is defined as having a numerical value of 8.
// The code is evaluating the conditional statement to see if the numerical value of attendees is not equal to that of meals.
// The numerical value of attendees is 9 which is different than that of meals, 8, so the statement evaluates to and prints true.

// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats

console.log(lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park

console.log(lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park

console.log(lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy

console.log(lovesToPlay && age <= 2);

// True.  It is evaluating to conditionals, which both have to be true in order to evaluate to true.
// lovesToPlay is defined as true.  I checked to see if being a puppy was true by evaluating age to be less than or equal to 2.
// Both conditions are true, so the code evaluates to and prints true.