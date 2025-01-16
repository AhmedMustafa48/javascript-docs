//  ======================================= BLOCK SCOPE

function scope() {
  const inScope = "I m calling from inside the function";
  console.log(
    inScope
  ); /* if i call function then inScope logged in console because it is in scope */
}
const inScope = "calling from outside";
console.log(inScope); /* OUTPUT: function inScope is not defined */

// ======================================== CANNOT REDECLARE

const username = "Ahmed";
console.log(username);

// const username = "REDECLARE AHMED";
// console.log(username);                   OUTPUT: Identifier 'username' has already been declared

// ======================================== REASSIGNMENT (No)
const age = 23;
console.log(age); /* OUTPUT :23  */

age = 24;
console.log(age); /*  OUTPUT: Assignment to constant variable */

// ======================================== HOISTED (TDZ)

// console.log(z);
// const z = "hello you"; /* OUTPUT: cannot access 'z' before initiallization */
