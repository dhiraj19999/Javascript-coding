/*

What is the constructor function?

In simple words constructor function is used to create custom objects.

It is similar to creating any other function in JavaScript: it can have parameters, has a name, 
and is declared with the function keyword.

We can set properties to our custom object by defining them on this, which will point to the new 
object that is created

just remember constructor function is just a function. We know that in a function we need to return something, 
but here we are not returning anything. 

In order to create a object( car object) is like calling a normal function, but in constructor function
 we use the new keyword before the function name.

 “this” points to global object in a function invocation
this”  points to object that owns the method in the method invocation
“this” points to newly created object in a constructor invocation
Generally  “this” point  to the owner object.
But we can use call, apply, bind to point this to different owner object.









*/



// Constructor function

 function nikeProductCF(n, p) {
  this.name = n;
  this.price = p;
 }

//new = return
// this = object

 let prod2 = new nikeProductCF('JORDANS', 9999);
 console.log('prod2:', prod2);

// let arr = [];

// function nikeProduct(e) {
//   e.preventDefault();
//   let form = document.getElementById('product_form');

//   let name = form.name.value;

//   let price = form.price.value;

//   let prod = new nikeProductCF(name, price);

//   arr.push(prod);
//   console.log('arr:', arr);
// }

//{}
//name:'pablo',
//this
//new

//.

//hfbvdfhbvsdfbv.dbvshdbfvhsfdbvs()

//call, apply, bind - function

//sale1, sale2, sale3, sale4

//20% discount

const kitchen = {
    name: 'kitchen',
    purpose: 'cooking',
  
    cookFood(order, x, y) {
      console.log('x,y:', x, y);
      console.log(`Serving ${order} in ${this.name} `);
    },
  };
  
  const bedroom = {
    name: 'bedroom',
    purpose: 'rest',
  };
  
  const lr = {
    name: 'lr',
    purpose: 'hangout',
  };
  
  //kitchen.cookFood('maggie');
  
  // kitchen.cookFood.call(bedroom, 'maggie', 1, 2);
  
  //kitchen.cookFood.apply(lr, ['maggie', 1, 2]);
  
  let x = kitchen.cookFood.bind(lr, 'maggie', 1, 2);
  
  // flipkart.bigbillion.call(sale1)
  // flipkart.bigbillion.call(sale2)
  
  //use as per requirement later in code
  if (x > 10) {
    x();
  }
  
  //i am lazy, i want to use cookFood METHOD in bedroom
  
  //this - bedroom, living_room or any other object
  
  // let m1 = 'hello';
  // let m2 = 'world';
  
  // let msg = 'pablo says' + ' ' + m1 + ' ' + m2;
  
  // let msg_pro_level = `pablo says ${m1} ${m2} `;
  // console.log('msg:', msg);
  
  // console.log('msg_pro_level:', msg_pro_level);