













// ** <=  Default Parameter  ** =>  //

function sum(){
    return 100;
}


function add(a,b=10,c=sum()){


return a+b+c

}

console.log(add(10))












// Arrow function//

//Arrow function is one of the features introduced in the ES6 version of JavaScript. 
//It allows you to create functions in a cleaner way compared to regular functions



let arr=[1,2,3,4,5]

let newdata=arr.map((item)=>{
    item*2;
})

console.log(newdata)// gives new arr like[2,4,6,8,10]

// no need of return in arrow function in loop.





































//  REST OPRETOR /*=>  ///  


/*  
The rest operator is used to put the rest of some specific user-supplied values into 
a JavaScript array
The rest parameter (...) allows a function to treat an indefinite 
number of arguments as an array
*/





function fruits(...a){

console.log(a)// it returns all in arry form like ['apple','banana','kiwi','orange']
}


function fruits(a,...z){

    console.log(z) // it returns ['banana','kiwi','orange'] becuse a is in apple.
    // z is rest opretaor . we can't use varible after rest oprator like ...z,a 

}




fruits('apple','banana','kiwi','orange')









// DESTRUCTURING//
/*     

The destructuring assignment syntax is a JavaScript expression that makes it possible to
 unpack values from arrays, or properties from objects, into distinct variables.

*/



let fruit=['mango','apple','orange']

let  [fruit1,fruit2]=fruit;
let [fruit3,,fruit4]=fruit // it gives mango and orange due to double coma
let [fruit5,,fruit6,fruit7='unknown']// if value not exist then it gives unknown else gives
// value

let [fruit9,...fruit10]
console.logg(fruit10)// gives['apple','orange']
console.log(fruit1,fruit2)// it prints mango and apple

// destructring of aary based on index but destructring of object based on key


let data={
    name:'dhiraj',
    email:'dhirajgarad50@gmail.com',
    mobile:7879999
}

//let {email}=data;  gives 'dhirajgarad50@gmail.com'
//let {name,...email}=data// it gives { email:'dhirajgarad50@gmail.com',mobile:7879999}











//  SPREAD OPRETOR // 











