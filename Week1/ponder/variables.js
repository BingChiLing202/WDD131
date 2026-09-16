
// Declare a variable
let age = 22;

// Like print in Python
console.log(age);

age = 22;

// A constant variable
const name = "Zijie";

// this shouldn't work
//name = "Dr Java";

const policyDisclaimer = "Just because you give us money, doesn't mean we have to give it back to you";

        // read only
const username = 'billybob';

// Scope = where you can reference a variable by name

if(age == 22) {
    // a new scope
    console.log(username);
    const favoriteColor = 'blue';
    let name = 'Dr Java';
    console.log(name);

    
}

console.log(name);

let favoriteColor = 'blue';
console.log(favoriteColor);

// grab our h1 from the DOM and color it blue with CSS
document.querySelector('h1').style.color = 'blue';