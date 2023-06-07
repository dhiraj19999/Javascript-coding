/*





The Object.freeze() method is used to freeze an object. Freezing an object does not allow 
new properties to be added to the object and prevents removing or altering the existing 
properties. Object.freeze() preserves the enumerability, configurability, writability, 
and prototype of the object. It returns the passed object and does not create a frozen copy.




// creating an object constructor and assigning values to it
	const obj1 = { property1: 'initial_data'};
	
	// creating a second object which will freeze
	// the properties of the first object
	const obj2 = Object.freeze(obj1);
	
	// Updating the properties of the frozen object
	obj2.property1 = 'new_data';
	obj2.property3 = 'new_data';
	// Displaying the properties of the frozen object
	console.log(obj2.property1);  initial_data
console.log(obj2.property3);  throw undefined












*/