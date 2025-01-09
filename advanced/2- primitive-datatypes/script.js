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
