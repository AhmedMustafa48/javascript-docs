if (true) {
  var x = 10;
}
console.log(x); // Output: 10 (not block-scoped)

// =========================== REASSIGNMENT

var name = "Alice";
name = "Bob"; // Reassignment
console.log(name); // Output: "Bob"

// =========================== REDECLARATION

var age = 25;
var age = 30; // Redeclaration is allowed
console.log(age); // Output: 30
