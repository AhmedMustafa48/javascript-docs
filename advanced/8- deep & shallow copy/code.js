// this is the problem

const fruits  =["Mango" , "Apple" , "Orange"]

const myFruits = fruits;


myFruits.push("Banana");
console.log(myFruits);
console.log(fruits); 

// Both arrays changed it happened because array is mutable same with objects.


// Final Takeaway
// Shallow copy = Copy top-level properties, but nested objects share references.
// Deep copy = Copy everything, including nested properties, so changes don’t affect the original.