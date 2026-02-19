let number = 7;

let result = (number >= 0) ? "Positive" : "Negative";
console.log("Number is: " + result);

if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

console.log("Numbers from 1 to " + number + ":");

for (let i = 1; i <= number; i++) {
    console.log(i);
}
