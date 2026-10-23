// ---------- Variables ----------
const userName = "Sara";      // const: cannot be reassigned
let age = 22;                 // let: can be reassigned
age = 23;

console.log(userName, age);

// ---------- Data types ----------
const isIntern = true;                      // boolean
const skills = ["HTML", "CSS", "JS"];       // array
const profile = { name: userName, age };    // object
const nothing = null;
let notSet;                                 // undefined

console.log(typeof userName, typeof age, typeof isIntern);
console.log(skills, profile, nothing, notSet);

// ---------- Template strings ----------
console.log(`Hello, ${userName}! You are ${age} years old.`);

// ---------- Functions ----------
// 1) Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// 2) Function expression
const add = function (a, b) {
  return a + b;
};

// 3) Arrow function (very common in React)
const multiply = (a, b) => a * b;

// 4) Default parameter
const welcome = (name = "friend") => `Welcome, ${name}!`;

console.log(greet("Ali"));
console.log(add(2, 3));
console.log(multiply(4, 5));
console.log(welcome());
console.log(welcome("Nimal"));

// ---------- Conditions ----------
const checkAge = (years) => {
  if (years >= 18) {
    return "Adult";
  }
  return "Minor";
};

console.log(checkAge(age));

// ---------- Mini challenge ----------
const getGrade = (score) => {
  if (score >= 75) return "A";
  if (score >= 50) return "B";
  return "C";
};

console.log(getGrade(80), getGrade(60), getGrade(30));