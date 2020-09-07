/* Write a program which will check three variables (are they declared and assigned a value)
and if they are it will log their sum, and if only one of those is not assigned a value it will 
log "Sorry, you are missing at least one value"
*/

/* Write a program which is very similar to the first just instead of the if-else structure use
if-elseif-else structure
*/
let a;

console.log("a e: " + a);

//true && true --> true;
//true && false --> false;
//true && false --> false;

// in JavaScript undefind --> false

if (a && (b || c)) {
  console.log(a + b);
} else if (a && b && c) {
  console.log(a + b + c);
} else {
  ("sorry");
}

/* Write similar program to the first one, but instead using the if-else statement use switch statement
 */

let d = 10;

switch (d) {
  case 10:
    console.log("Brojot e 10");
    break;
  case 20:
    console.log("Brojot e 20");
    break;
  default:
    console.log("Brojot ne nitu 10 nitu 20.");
}
