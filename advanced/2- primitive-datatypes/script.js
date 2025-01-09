var intro = "the type of this sentence is string";
console.log(intro);

var age = typeof 5;
console.log("the type of " + 5 + " is " + age);

//  ============================================= TYPE CONVERSION

// 1. STRING TO NUMBER

var strToNum = typeof +"200";
console.log(strToNum); /* OUTPUT: number */

var strToNum2 = typeof +"Ahmed";
console.log(strToNum2); /*OUTPUT: number(not a valid number(NaN))  */

var strToNum3 = parseInt("100sshsdsad");
console.log(strToNum3); /* OUTPUT: 100  */

var strToNum4 = parseInt("10assa3562360sshsdsad");
console.log(strToNum4); /* OUTPUT: 10  */

var strToNum5 = parseInt("asaassasas10assa3562360sshsdsad");
console.log(strToNum5); /* OUTPUT: NaN  */

var strToNum6 = typeof NaN;
console.log(strToNum6); /* OUTPUT: number  */

// 2. BOOLEAN To NUMBER

var bool1 = +true;
console.log(bool1); /* OUTPUT: 1 */

var bool2 = +false;
console.log(bool2); /* OUTPUT: 0 */

// 3 - UNDEFINED

console.log(typeof undefined); /* OUTPUT: undefined */

console.log(+undefined); /* OUTPUT: NaN */

var undefindToNum = parseInt(undefined);
console.log(undefindToNum); /* OUTPUT: NaN */

// --> UNDEFINED TO STRING

var undefinedToStr = undefined + "";
console.log(
  "undefined to string is basically  ",
  typeof undefinedToStr
); /* OUTPUT: string */

// 4- NULL

console.log(
  typeof null
); /* OUTPUT: Object (In JavaScript, null is considered an object. This is actually a bug from the early days of JavaScript's development. The developers made a mistake, but it was never fixed because many websites and applications were already using JavaScript. Fixing it could have broken a lot of websites. So, this "bug" is still there today.) */

console.log(+null); /* OUTPUT: 0  */
