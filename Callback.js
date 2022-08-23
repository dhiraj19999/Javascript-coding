

//  WHAT IS CALLBACK FUNCTION // 

//  A callback is a function that is executed after another function has finished executing. 
//As we have studied earlier that functions are objects. Functions can take functions as 
//arguments and can be returned by other functions. Functions that take another function as an 
//argument are called higher-order functions. So, the callback function can also be defined as 
//any function that is passed as an argument is called a callback function. //


//  Why do we need Callbacks?//


//As we know, instead of waiting for a response, JavaScript will keep executing while listening
// for other events. Here is an example:

function fun1(){
    console.log("code with harry");
 }
function fun2(){
   console.log("javascript");
 }
//fun1();
//fun2();

//The function fun1 is executed first, and the function fun2 is executed second. 
//JavaScript runs code from top to bottom. However, there are some cases that code must run 
//after something else happens and also not using a top-down approach.

//Callbacks are used to make sure that a function is not going to execute before a task is 
//completed but will execute right after the task has completed. It helps us develop 
//asynchronous JavaScript code and keeps us safe from future errors.

//In JavaScript, the way to create a callback function is to pass it as a parameter to another 
///function, and then to call it back right after something has happened or some task is
// completed.


// Example of call back function//  

function addition(x, y , callback){
setTimeout(() => {
document.write(`The sum of ${x} and ${y} is ${x+y}.`); 
callback(); 
 }, 5000); } 
 // display() function is called just after the ending of addition() function
function display(){ 
document.write('Numbers added!'); 
 } 
 // Calling addition() function
addition(5,5,display);



//Here are the two functions – addition(x, y, callback) and display().
// Here addition() is called after 5 seconds with the display() function, 
//i.e. passed in as the third argument to the addition function along with two numbers x and y.
// As a result, the addition() is invoked with 1, 2 and the display() which is the callback. 
//The addition() prints the addition of the two numbers(x+y), and as soon as that is done, 
//the callback function is executed. 




// NOW SUPPOSE RESPONCE COMING FROM SERVER// 

let students=[

{name:"Dhiraj", subject:"Javascript"},
{name:"Shreya", subject:"Machine-Learning"}

]

function enrollstudents(student,callback){

setTimeout(function(){   // SETtimeout is also callback function because it is in anothr function

    students.push(student);

console.log("student enrolled");

callback();

//callback();
},3000)



}

function getstudent(){

    setTimeout(function(){   // SETtimeout is also callback function because it is in anothr function

   let str=""
   students.forEach(function(student){
    str+= student.name;
   
   })
  //console.log("student fetched")
  // return str;
},1000)

}

 let x={name:"Suraj", subject:"JAVA"};
 enrollstudents(x,getstudent);


//  here first student get fetched and after that student get enrolled
//  so that we use callback function;












