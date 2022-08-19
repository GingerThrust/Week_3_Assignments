//(1) Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3,9,23,64,2,8,28,93];
ages.push(23);
console.log(ages);

//(1a) Programatically subtract the value of the first elmenet in the array from the value in the lst element of the array. Print the result. 
let difference = ages [ages.length-1] - ages [0];
console.log(difference);
//(1b) Add a new age to your array and repeat the step above to ensure it is dynamic. 
console.log(difference);
//(1c) Use a loop to iterate through the array and calculate the average age. Print the result. 
var sum = 0;
for (var i = 0; i < ages.length; i++) {
    sum += ages[i];
}
console.log(sum/ages.length);

//(2) Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);
//(2a) Use a loop to iterate throught the array and calculate the average number of letters per name. Print the result.
let lengths = names.map(function (element) {
    return element.length
});
let nameSum = 0;
for (var i = 0; i < lengths.length; i++) {
    nameSum += lengths[i];
};
let nameAvg = (nameSum/names.length)
console.log(nameAvg);
//(2b) Use a loop to iterate throught the array again and concantenate all the names together, separated by spaces, and print the result to the console. 
let nameString = names.join(' '); {
    console.log(nameString);
} //I don't know of a loop that would do this easier than just using the names.join function that I found on MDN. 
//(5) Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = names.map(function(element) {
    return element.length
})
console.log(nameLengths); //Again, not sure if this counts as a loop, but I found this to be the best way to map this out. 
//(6) Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result.
let sumNew = nameLengths.reduce(function(accumulator, currentValue) {
    return (accumulator + currentValue);
}) //Here I felt that using the reduce function was more concise than trying to write a loop for the array. 
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
function largerThan100 (arr) {
    let sum = arr.reduce(function(accumulator, currentValue) {
        return (accumulator + currentValue);
    })
    if (sum > 100) {
        return true;
    } else {
        return false;
    }
}
let arr100sum = [1, 2, 2, 12, 23];
console.log(largerThan100(arr100sum));

//(10) Write a function that takes an array of numbers and returns the average of all the elements in the array.
function arrAvg (arr) {
    let sum = arr.reduce(function(accumulator, currentValue) {
        return (accumulator + currentValue);
    });
    return sum / arr.length;
}   
let copyArr1 = [12, 24, 36];
console.log(arrAvg(copyArr1));
//(11) Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function arrCompare (arr1, arr2) {
    let sum1 = arr1.reduce(function(accumulator, currentValue) {
        return (accumulator + currentValue);
    });
    let sum2 = arr2.reduce(function(accumulator, currentValue) {
        return (accumulator + currentValue);
});
    if (sum1 <= sum2) {
        return false;
    } else {
        return true
    }
}
let testArr1 = [2, 654, 23];
let testArr2 = [1000, 23, 245];
console.log(arrCompare(testArr1, testArr2));
//(12) Write a function called willBuyDrink that takes a boolean isHotOutside and a number moneyInPocket and returns true if it is hot outside and if moneyinPocket is greater than 10.50.
function willBuyDrink (isHotOutside, moneyInPocket) {
    if ((isHotOutside === true) && (moneyInPocket > 10.50)) {
        return true;
    } else {
        return false;
    }
};
console.log(willBuyDrink(true, 11.23));
//(13) Create a function of your own that solves a problem. In comments, write what the function does and why you created it. 
function readyForVacation(ticketsBought, hotelBooked, vacationBudget) {
    if ((ticketsBought === true) && (hotelBooked === true) && (vacationBudget >= 1200)) {
        return ("You are ready for vacation!!");
    } else {
        return false;
    }
} 
console.log(readyForVacation(true, true, 2000));
//For the above function, I wanted to create an internal to-do list to prepare for a vacation. In this function, I have three basic parameters: 
//a boolean for if I have bought the plane tickets yet, a boolean for if I have booked my hotel, and a comparison for if I have met my vacation 
//budget savings yet. If I have done all three of these things, the function will return that I'm ready. Otherwise, it will tell me that I 
//still have work to do in order to get ready. I could modify this out more with more ELSE IF statements if I want the return to tell me what
//I still need to do in order to get ready. 