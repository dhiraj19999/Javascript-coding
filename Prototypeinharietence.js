/*

Everything in Js is an object
What is inheritance ?

It is process where you get access to the properties and methods of another. 


What is a prototype ?

 prototype is just an object.
It allows properties and methods to be shared across all object.
What is an prototype chain ?

A prototype also keeps a reference to its own prototype object. And, prototype’s prototype is also linked 
to its own prototype and so on. This is how it forms prototype chain.

JavaScript uses this link between an object and its prototype to implement inheritance which is known as
 prototypal inheritance.

 How to build a prototype inheritance?

 We have Object.create() method to implement prototypal inheritance.
Object.create() takes an object as an argument and returns a new object with its _proto_ set to the
 object that was passed as argument into Object.create.
 Here in the example teacher creates a object using person by Object.create()
This teacher has properties of person.
In the example you can see Object.getPrototypeof(teacher)===person which  lets us know if teacher has 
person prototype or not.






*/






// let cat = {
//   type: 'cat',
//   legs: 16,
//   tail: true,
// };



// let tiger = Object.create(cat);

// tiger.speed = 70;

// let lion = Object.create(cat);

// lion.speed = 60;

// console.log('tiger:', tiger);

// console.log('lion:', lion);

// //fact - object.create() stores the parent properties in [[prototype]] OBJECT

// let w20_student = {
//   batch: 'web 20',
//   track: 'JAVA',
//   Instructor: 'Aishwarya',
//   Unit: 4,
// };

//886*3

//3

//form on a webpage

// let students = []

// function createStudents() {

//   let s1 = Object.create(w20_student);
//   s1.name = form.name.value
//   students.push(s1)

// }

// s1.name = 'Swanand';

// let s2 = Object.create(w20_student);
// s2.name = 'abhi';

// let s3 = Object.create(w20_student);
// s3.name = 'venu';

// let s3 = Object.create(w20_student);
// s3.name = 'sakshi';

// console.log('s3:', s3);

//CF returns what? objects

// function nikeProduct(n, p) {
//   this.name = n;
//   this.price = p;
//   this.sale = function () {
//     console.log('20 % off');
//   };
// }

// nikeProduct.prototype.brand = 'adidas';

// let n1 = new nikeProduct('jordans', 9999);
// let n2 = new nikeProduct('jordans', 9999);
// let n3 = new nikeProduct('jordans', 9999);
// let n4 = new nikeProduct('jordans', 9999);

// console.log('n1:', n1.sale());

// let arr = [1, 2, 3];

// // arr.push(4);

// let str = 'raju'; //YOU

// let str2 = new String('raju'); //JAVASCRIPT
// console.log('str2:', str2);

// // str.charAt(0)

// //arr is an object
// //str is an object

// //.filter, .pop, .toUppercase, .map

// //Object

// console.log(console);

//create custom array methods

// let arr = [1, 2, 3];

//this is how JS does it
let arr2 = new Array(1, 2, 3);

let hobbies = ['footnball', 'coding'];
//we are going to hack js

//what is Array - CF

Array.prototype.नमस्ते = function () {
  console.log('Hello from WEB 20');
};

// hobbies.नमस्ते()

Array.prototype.भेजो = function (value) {
  //where
  // this.push(value)

  //index & value

  let index = this.length;
  this[index] = value;
};

//forEach - for loop

arr2.भेजो(5);
arr2.भेजो(7);

console.log('arr2:', arr2);

//console.log('arr2:', arr2);