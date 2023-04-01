/*



How Js keeps track of what to run when?
Call Stack
When you call a function in JavaScript all the instructions within that function get loaded into a Stack.

Javascript then executes the instructions in each function by popping them from the stack.

Callback queue
It’s a one more data structure that Js to add next code to execute.

Such code are called tasks, since they need more time to execute.

Tasks are added to the queue whenever Js finds a function which will take some time to execute like setTimeout.

Event loop
Event loop runs a loop to keep on checking if anything is remaining in callback queue.

If function calls are still there, they are sent to call stack where they will be executed.

console.log(1); //stack

console.log(2); //stack

setTimeout(function () {
  console.log(3);
}, 3000); //queue

console.log(4); //stack

//js looks for more code
//stack is empty, no more code!
//it will go to queue, will start lookign for code to execute
//it will add to stack















*/