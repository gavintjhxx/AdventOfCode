const fs = require("fs");
const { parse } = require("path");
const document = fs.readFileSync("./2023/day_one.txt", "utf-8");
const puzzle = document.split("\n");
// Filtered puzzle is each string in the puzzle array with the alphabets removed
const filteredPuzzle = puzzle.map((string) => string.replace(/[a-z]/gi, ""));

let sum = 0;
let puzzleValues = [];

filteredPuzzle.forEach((text) => {
    values = text.split("");
    const [first, last] = [values[0], values[values.length - 1]];
    const num = parseInt(first + last);
    puzzleValues.push(num);
    sum += num;
});

console.log(sum);