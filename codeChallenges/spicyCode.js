var Number = 6;
if (Number % 3 === 0 && Number % 5 === 0) {
    console.log("FizzBuzz");
} else if(Number % 3 === 0) {
    console.log("Fizz");
} else if(Number % 5 === 0) {
    console.log("Buzz");
} else console.log(Number)