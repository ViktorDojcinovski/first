/* Variable declaration statement */
let hello;
let result;
let number = 20;
hello = "Hello World 2020";

15 + 15; // 30

"Hello " + "World"; // "Hello World"

let bolleanVariable = true;
let bolleanVariableF = false;

result = 0;
console.log("Rezultatot e: " + result);

/* Function declaration statement */
function zbirOdDvaBroja(a, b) {
  result = a + b;
}

zbir(number, 5);
console.log("Rezultatot e: " + result);

/*
 varible o will have similar structure to this one:

 {
     a: 1,
     b: 2,
     hello: "Hello World" ...
 }
*/
let o = new Object();

/*
 varibale a will have similar structure to this one:

 ["1", 5, true, "Hello World"]
*/
let a = new Array();
/* Find the h1 tag inside index.html */
let h1_hello = document.querySelector("");

h1_hello.textContent = hello;
