//  ======================================= BLOCK SCOPE

function scope() {
  let inScope = "I m calling from inside the function";
  console.log(
    inScope
  ); /* if i call function then inScope logged in console because it is in scope */
}
let inScope = "calling from outside";
console.log(inScope); /* OUTPUT: function inScope is not defined */

// ======================================== CANNOT REDECLARE

let username = "Ahmed";
console.log(username);

// let username = "REDECLARE AHMED";
// console.log(username);                   OUTPUT: Identifier 'username' has already been declared

// ======================================== REASSIGNMENT
let age = 23;
console.log(age); /* OUTPUT :23  */

age = 24;
console.log(age); /*  OUTPUT: 24 */

// ======================================== HOISTED (TDZ)

console.log(z);
let z = "hello you"; /* OUTPUT: cannot access 'z' before initiallization */
