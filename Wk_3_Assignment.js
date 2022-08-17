//(1) Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3,9,23,64,2,8,28,93];
console.log(ages);
//(1a) Programatically subtract the value of the first elmenet in the array from the value in the lst element of the array. Print the result. 
let difference = (ages.length-1) - ages [0];
console.log(difference);
//(1b) Add a new age to your array and repeat the step above to ensure it is dynamic. 
ages.push (49);
console.log (difference);
//(1c) Use a loop to iterate through the array and calculate the average age. Print the result. 
let sum = ages.reduce(function (accumulator, currentValue){
    return (accumulator + currentValue);
});
console.log(sum/ages.length);

//(2) Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);
//(2a) Use a loop to iterate throught the array and calculate the average number of letters per name. Print the result.
let lengths = names.map(function (element) {
    return element.length
})
let nameSum = lengths.reduce(function (accumulator, currentValue){
    return (accumulator + currentValue);
});
console.log(nameSum/names.length);
//(2b) Use a loop to iterate throught the array again and concantenate all the names together, separated by spaces, and print the result to the console. 
let nameString = names.join(' '); {
    console.log(nameString);
}
//(5) Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = names.map(function(element) {
    return element.length
})
console.log(nameLengths);
//(6) Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result.
let sumNew = nameLengths.reduce(function(accumulator, currentValue) {
    return (accumulator + currentValue);
})
console.log (sumNew);
//(7) Write a function that takes two parameters, word and n, as arguments and returns the word concantenated to itself n number of times.
function repeatWord (word, n) {
   return word.repeat(n);
};
console.log(repeatWord('Hi',5));
//(8) Write a function that takes two parameters, firstName and lastName, and returns a full name separated by a space. 
function fullName (firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(fullName("Marcus", "Brown"));
//(9) Write a function that takes an array of numbers and returns true if the sum of all the humbers in the array is greater than 100.

//(10) Write a function that takes an array of numbers and returns the average of all the elements in the array.
//(11) Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
//(12) Write a function called willBuyDrink that takes a boolean isHotOutside and a number moneyInPocket and returns true if it is hot outside and if moneyinPocket is greater than 10.50.
//(13) Create a function of your own that solves a problem. In comments, write what the function does and why you created it. 