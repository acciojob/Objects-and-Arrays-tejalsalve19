const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

const team = players;
const team1=[...players];
// Copying the object
const cap1 = person;

// Logging the results

console.log(team1);
console.log(cap1);

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
