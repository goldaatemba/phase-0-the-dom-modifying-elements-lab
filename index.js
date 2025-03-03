// Write your code here!
// Remove the existing main element
const main = document.getElementById("main");
main.remove();
console.log("Main element removed");

// Create a new h1 element
const newHeader = document.createElement("h1");
console.log("New h1 element created");

// Set its id to "victory"
newHeader.id = "victory";
console.log("ID 'victory' assigned to h1");

// Set its text content
newHeader.textContent = "Golda Atemba is the champion";
console.log("Text content set: 'Golda Atemba is the champion'");

// Append the new h1 element to the body
document.body.appendChild(newHeader);
console.log("New h1 element appended to body");
