/*
Classes are syntactical sugar over the existing object oriented model in JavaScript. This means that it 
does 
not introduced any new features but improves upon old features.

They are similar to function constructors  but give you much more functionality
 with less code.


 The constructor is a special function for initializing objects created with class. 
 They work similar to function constructors.

They also support simple instance methods/functions with short declaration syntax.



*/


class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
  
  let bo = new Rectangle(12, 13);




  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  
    area(){  // method
      return this.height * this.width;
    }
  
  }
  
  let box = new Rectangle(12, 13);
  box.area();




  class Person {
    constructor(name, energy) {
      this.name = name
      this.energy = energy
    }
    eat(amount) {
      console.log(`${this.name} is eating.`)
      this.energy += amount
    }
    sleep(time) {
      console.log(`${this.name} is sleeping.`)
      this.energy += time
    }
    code(time) {
      console.log(`${this.name} is playing.`)
      this.energy -= time
    }
  }
  
  const sai = new Person('Sai', 15)
  const jay = new Person('Jay', 12)





  /*



Inheritance
Classes also support inheritance which means they can take properties and functions from other classes.

For example, let's say we have two classes Car and Sedan
*/

class Car{
    constructor(horsePower){
      this.horsePower = horsePower;
      this.fuel = 100;
    }
  
    consumeFuel(amount){
      this.fuel -= amount;
    }
  }
  let myCar = new Car(102);




  class Sedan{
    constructor(name){
      this.name = name;
    }
    printName(){
      console.log(this.name);
    }
  }
  var mySedan = new Sedan('Civic');









  /*


Right now they are independent. Lets say we want Sedan to inherit or get the properties and functions 
of the Car object.

We can use the extends keyword to make Sedan a child of the Car class. This will allow Sedan to get 
properties and methods/functions of the parent class Car.



  */







class Car{
    constructor(horsePower, name){
      this.horsePower = horsePower;
      this.fuel = 100;
      this.name = name;
    }
  
    consumeFuel(amount){
      this.fuel -= amount;
    }
  }
  
  class Sedan extends Car{
    printName(){
      console.log(this.name)
    }
  }
  
  let mySedan = new Sedan(150, 'Civic');
  mySedan.consumeFuel(10);
  console.log(mySedan.fuel);
  mySedan.printName();





  /*




super
Now what if we need to access the parent class's properties or functions in the child class?

Also what if we want to declare a constructor for our child class?

The super keyword is used to access and call functions on an object's parent.

Lets update our above example with the super keyword.



  */



class Car{
    constructor(horsePower, name){
      this.horsePower = horsePower;
      this.fuel = 100;
      this.name = name;
    }
  
    consumeFuel(amount){
      this.fuel -= amount;
    }
  }
  
  class Sedan extends Car{
    constructor(horsePower, name, numSeats){
      super(horsePower, name);
      this.numSeats = numSeats;
    }
    printName(){
      console.log(this.name);
    }
  
    updateHorsePower(input){
      super.horsePower = input;
    }
  }
  
  let mySedan = new Sedan(150, 'Civic', 4);
  
  mySedan.updateHorsePower(300);
  
  





  /*
It is important to note that when used in a constructor, the super keyword appears alone and must be 
used before the this keyword is used.

Lets look at the first example we tried




  */



class Person {
    constructor(name, energy) {
      this.name = name
      this.energy = energy
    }
    eat(amount) {
      console.log(`${this.name} is eating.`)
      this.energy += amount
    }
    sleep(time) {
      console.log(`${this.name} is sleeping.`)
      this.energy += time
    }
}
  
class Coder extends Person{
    constructor(name,energy){
        super(name,energy)
    }
    code(time){
        console.log(`${this.name} is coding`)
        this.energy -= time
    }
}


  const sa = new Coder('Sai', 15)
  const ja = new Person('Jay', 12)
  
  sai.code(10)
  jay.sleep(10)
