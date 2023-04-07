

/*



The hasOwnProperty() method returns a boolean indicating whether the object has the specified property
 as its own property (as opposed to inheriting it).


*/
const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// Expected output: true

console.log(object1.hasOwnProperty('toString'));
// Expected output: false

console.log(object1.hasOwnProperty('hasOwnProperty'));
// Expected output: false

/*


The Object.defineProperty() method defines a new property directly on an object and returns the object. To 
change the flags, we can use Object.defineProperty.
*/

const object1 = {};  
Object.defineProperty(object1, 'property1', {  
  value: 42,  
  value: 52,  
  value: 542,  
  });  
object1.property1 = 177;  
// throws an error in strict mode  
console.log(object1.property1);  // 542