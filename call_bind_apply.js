
/*the this keyword refers to an object. Which object depends on how this is being invoked (used or called).
 The this keyword refers to different objects depending on how it is used: In an object method, this refers
  to the object.





*/




let userDetail={

    name:"dhiraj",
    age:23,
    designation:"software develper",
    printDetails:function (){

        console.log(this) // here this points towards userDetail
    }
}

userDetail.printDetails()
let userDetail2={

    name:"dhiraj",
    age:23,
    designation:"software develper",
    
}
/*

The call() method in JavaScript is a type of method that is used to write a function that can be used on
 different objects.

The first value passed to the call() method is the object whose property we wan to use inside the function of 
another object, while all the other parameters passed can either be global or other than the object.


*/

userDetail.printDetails.call(userDetail2) // call method calls the printdetail for userdetail2 object




let userDetail4={

    name:"dhiraj",
    age:23,
    designation:"software develper"
   
}

function printDetails (city,country){  //  now here function is not depend on userdetail
 
    console.log(this+city+country ) // here this points towards userDetail
}

printDetails.call(userDetail4,"pune","india")
printDetails.apply(userDetail4,["pune","india"])
let newuser=printDetails.bind(userDetail4,"pune","india")
newuser();


/*

The apply() method calls the specified function with a given this value, and arguments provided as an array 
(or an array-like object).

The apply method is used for allowing a function/object belonging to an object x to be called and 
assigned to an object y.

The difference is: The call() method takes arguments separately.
 The apply() method takes arguments as an array. The apply() method is 
 very handy if you want to use an array instead of an argument list.


Bind is a function that helps you create another function that you can execute later with the new
 context of this that is provided

The call() and apply() are very similar methods. They both execute the  function on the object
 immediately. The bind() method does not execute the function right away. Instead, it creates and returns
  a  function that can be executed later.
*/