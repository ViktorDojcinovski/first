/* Write an object that consists from these key-value pairs:
k: name v: your name
k: age v: your age
k: address v: your address (as Object) --> k: street v: your street name k: number v: your street number k: city v: your city
*/
let myInfo = { name: "Viktor", age: 37, addres: { street: "taa i taa" } };

/* Write few arrays that consists of these elements:
1. list of numbers from 1 to 10
2. list of names
3. mixed content
*/
let numbers = [1, 2, 3, ...10];

/* Assign the created object and array to new variables. 
Then try to change some values inside this newly created complex data structures with this sintax:

    For the object:
    NewObject.property = some value; (NewObject is the newly created object after the assignment expression)

    For the array:
    NewArray[index] = some value; (NewArray is the newly created array after the assignment expression)

*/

let newObject = new Object();
let newArray = new Array();

newObject = myInfo;
newArray = names;

newObject.name = "Dojchin";
newArray[0] = "Dojchin";

/* Expected results */
//console.log(OriginalObject) --> ?
//console.log(names) --> ?
//console.log(NewObject) --> ?
//console.log(NewArray) --> ?

// Reassign reference type example

/*
let obj = { first: 'reference' };
let obj2 = obj;

obj = { second: 'ref2' }

console.log(obj2) --> ?
*/
