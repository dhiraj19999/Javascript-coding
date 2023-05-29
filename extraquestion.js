/*


create your own array object with prototype chain ?

*/

function myArry (){
this.length=0;

}
myArry.prototype.push=function(elem){

    this[this.length]=elem
    this.length++

}

let arr=new myArry()
arr.push("hello")



myArry.prototype.pop=function(){

    this.length--
    var popitem=this[this.length]
    delete this[this.length]
    return popitem
}
arr.pop











/*


what is event propagation


Propagation refers to how events travel through the Document Object Model (DOM) tree. 

You can think of propagation as electricity running through a wire, until it reaches its destination.

What is Event Bubbling? Event Bubbling is a concept in the DOM (Document Object Model). It happens when an 
element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its
 parent and ancestor elements in the DOM tree until it gets to the root element.


<div>  
<button> like</button>
</div>

var div=document . querySelector (" div" );
var button=document. querySelector ("button ") ;
div. addEvent Listener (" click", ()=>{
console. log("div")
})
button . addEventListener (" click", () =>{
console. log("button")
})

in bubling it first print button and then div like children to parent 


Event Capturing is opposite to event bubbling, where in event capturing, an event moves from the outermost 
element to the target. Otherwise, in case of event bubbling, the event movement begins from the target to the 
outermost element in the file.

div. addEvent Listener (" click", ()=>{
console. log("div")
},true)
button . addEventListener (" click", () =>{
console. log("button")
},true)


in capturing it first print div and then button like parent to children



The event propagation mode determines in which order the elements receive the event. With bubbling, 
the event is first captured and handled by the innermost element and then propagated to outer elements.
 With capturing, the event is first captured by the outermost element and propagated to the inner elements.






div. addEvent Listener (" click", ()=>{
console. log("div")
})
button . addEventListener (" click", (event ) =>{
event.Stoppropagation()
    console. log("button")
})

here it do not print div it only print button becuse it stop propgation





div. addEvent Listener (" click", ()=>{
console. log("div")
})
button . addEventListener (" click", (event ) =>{
event.Stoppropagation()
    console. log("button")
})

button . addEventListener (" click", (event ) =>{
event.stopImmediatePropagation()
    console. log("button1")
})

here we use two event listeners on one button it stops as soon as two listners get called it don't go
forward to div





The preventDefault() method cancels the event if it is cancelable, meaning that the default action that 
belongs to the event will not occur.  



 */