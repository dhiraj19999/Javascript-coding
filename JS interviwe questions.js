// DIFFERNCE BET UNDEFINED AND NULL?

//undefined is a variable that refers to something that doesn't exist, and the
// variable isn't defined to be anything. null is a variable that is defined but 
//is missing a value.

//The undefined value is a primitive value used when a variable has not been 
//assigned a value. The null value is a primitive value that represents the null,
// empty, or non-existent reference



//WHAT DOES && OPRETOR DO//

//The logical AND operator ( && ) returns true if both operands are true and 
//returns false otherwise




//WHAT DOES || OPRETOR DO//

//The logical OR operator ( || ) returns the boolean value true if either or 
//both operands is true and returns false otherwise


//Is using unary operator is fastest way to convert string to number?

/// The unary plus ( + ) operator is the fastest (and preferred) method of 
//converting something into a number. It can convert: string representations of 
//integers (decimal or hexadecimal) and floats.
//because it does not perform any other operations on the number.




//What is the DOM and why is it used?


//The DOM (Document Object Model) is an interface that represents how your 
//HTML and XML documents are read by the browser. It allows a 
//language (JavaScript) to manipulate, structure, and style your website.
//The DOM defines a standard for accessing documents: "The W3C Document 
//Object Model (DOM) is a platform and language-neutral interface that 
//allows programs and scripts to dynamically access and update the content, 
//structure, and style of a document."



//WHAT IS EVENT BUBBLING

//Event bubbling is a method of event propagation in the HTML DOM API 
//when an event is in an element inside another element, and both elements have
// registered a handle to that event. It is a process that starts with the 
//element that triggered the event and then bubbles up to the containing elements
// in the hierarchy.
//Event-bubbling causes all events in the child nodes to be 
//automatically passed to its parent nodes


// example : <div> <button>  <div/>

// div.addeventlistner('click',myfunction)
// function myfunction(){
   //console.log('div');
//}
//button.addeventlistner('click',()=>{
   // console.log('button');

    //},true)
// If we click on button then it first print button and after that print div
// in bubbling it goes target to parent //








//what is event capturing in javascript//

//Event capturing is one of two ways to do event propagation in the HTML DOM. 
//In event capturing, an event propagates from the outermost element to the 
//target element. It is the opposite of event bubbling,
//Event capturing is the event starts from top element
// to the target element. It is the opposite of Event bubbling, 
//which starts from target element to the top element.

//example : <div> <button>  <div/>

// div.addeventlistner('click',()=>{
   // console.log('div');
    
   
//},true)

//button.addeventlistner('click',()=>{
//console.log('button')

//},true)

//If we click on button then it first print div and after that print button
// in capturin it parent to target //







//WHAT IS EVENT PROPAGATION//
//Event propagation is a way to describe the “stack” of events that are fired in 
//a web browser. In our table example above, clicking on the a tag is the 
//first event that we will fire, but there are other events too.









//STOP PROPAGATION//

//topPropagation() The stopPropagation() method of the Event interface
// prevents further propagation of the current event in the capturing and 
//bubbling phases.
//The stopPropagation() method prevents propagation of the same event from being 
//called. Propagation means bubbling up to parent elements or capturing down 
//to child elements.



//example : <div> <button>  <div/>

// div.addeventlistner('click',()=>{
   
      //  console.log('div');

//})

//button.addeventlistner('click',(event)=>{
 // event.stopPropagation

//  console.log('button');

//})

//If we click on button then it just print button and div not get printed because
// here we use stopPropagation it only do his work and stops propagation.





//IMMEDIADATE PROPAGATION//
//The stopImmediatePropagation() method of the Event interface prevents other 
//listeners of the same event from being called. If several listeners are 
//attached to the same element for the same event type, they are called in the 
//order in which they were added.


//example : <div> <button>  <div/>

// div.addeventlistner('click',()=>{
   
      //  console.log('div');

//})

//button.addeventlistner('click',(event)=>{
 // 

//  console.log('button');

//})
//button.addeventlistner('click',(event)=>{
 // event.stopImmediatePropagation();

//  console.log('button1');

//})
// here we have to event listner which print button and button1
// but suppose if we have more than 2 event listner and if we want afetr second
// event listner propagation get stops and aprt from first two listner , other 
// event listner work will get stop then we have to use stopimdiate
// when we want from that particular event other event get stop then we have to
// use stopimdiate to that particular event.




//PREVENTDEFAULT//

//The preventDefault() method cancels the event if it is cancelable,
// meaning that the default action that belongs to the event will not occur.
// For example, this can be useful when: Clicking on a "Submit" button, 
//prevent it from submitting a form. Clicking on a link, prevent the link 
//from following the URL.
//preventDefault() method stops the default action of an 
//element from happening. For example: Prevent a submit button 
//from submitting a form. Prevent a link from following the URL.



//DIFFERENCE BETWEEN PREVENTDEFAULT AND STOPPROPGATION

//preventDefault() prevents the default browser behavior for a given element. 
//stopPropagation() stops an event from bubbling or propagating up the DOM tree.




//how to know if the event.preventdefault() method was used in an element//


//Inspect the event's element in Chrome.
//Click on the Event Listeners tab in the side panel.
//You'll see all the listeners. 
//If you click on them they'll open in the Sources tab 
//and you should see a preventDefault() call.