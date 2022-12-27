
//  VAR  ///


/*  

The scope of a var variable is functional scope.
It can be updated and re-declared into the scope.
It can be declared without initialization.
It can be accessed without initialization as its default value is “undefined
hoisting done, with initializing as ‘default’ value

*/


var  nam;

console.log(nam)// it gives undefined//




var x='hello' /// global scope 


{
    var x="billlo"
    console.log(x) // prints billo
}

console.log(x) // prints billo due to global scope





let x='hi' // 


{
    let x="hello"
    console.log(x) // prints hello  block scope
}  

console.log(x) // prints hi


var z='30'
var z='40'

console.log(z) // we can redeclre varible in var

let c='30'
let c='49'
//  we can't redeclarethrow error identifier c already declare

const m; // thorw error missing intiliser in const declration

// const neither redeclare and nor reintilize value









for(var i=0;i<10;i++){
    setTimeout(()=>{
        console.log(i)// it prints 10 o bhi 10 times becuse of global i set to 10
    })
}

// in the case of let it prints from 0 to 9 because of block scope
