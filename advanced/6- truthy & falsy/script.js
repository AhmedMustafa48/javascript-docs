var isTrue=Boolean(10) 
console.log(isTrue) /* true */

var isTrue = Boolean(' ');
console.log(isTrue);  /* true */

var isTrue = Boolean(-10);
console.log(isTrue);  /* true */

var isTrue = Boolean(NaN);
console.log(isTrue);  /* false */

var isTrue = Boolean(undefined);
console.log(isTrue);  /* false */

var isTrue = Boolean(null);
console.log(isTrue);  /* false */

var isTrue = Boolean(0);
console.log(isTrue);  /* false */

var isTrue = Boolean('');
console.log(isTrue);  /* false */

 

