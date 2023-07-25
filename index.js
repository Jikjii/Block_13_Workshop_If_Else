// IS TRUTHY
const stringOne = "";


if (stringOne) {
    console.log(true);
} else if (stringOne === null) {
    console.log('undefined is falsy');
} else if (stringOne === 0) {
    console.log('The number 0 is falsy')
} else {
    console.log("The empty string is falsy")
}

// NUMBER LINE

const num1 = -1000;
const num2 = 0;
const sum = num1 + num2;

if (sum > 100) {
    console.log(sum + ' is greater than 100')
} else if (sum > 0) {
    console.log(sum + ' is larger than 0')
} else if (sum === 0) {
    console.log(sum + ' is equal to 0')
} else {
    console.log(sum + ' is a negative number');
}

// GREATER THAN 5

const num3 = 5;
const num4 = 5;

if (num3 >= 5 && num4 >= 5) {
    console.log(true);
} else {
    console.log(false);
}


// PAIR AND COMPARE

const param1A = "cake";
const param1B = "cake";
const param2A = "pie";
const param2B = "pie";

if (param1A === param1B || param2A == param2B) {
    console.log(true)
} else {
    console.log(false)
}

