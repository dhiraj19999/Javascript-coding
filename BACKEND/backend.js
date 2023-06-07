/*


What is non-blocking vs blocking?
blocking and non-blocking calls in Node.js

Blocking is when the execution of additional JavaScript in the Node.js process must wait until a 
non-JavaScript operation completes. This happens because the event loop is unable to continue running 
JavaScript while a blocking operation is occurring.


Using the File System module as an example, this is a synchronous file read:

const fs = require("fs");
const data = fs.readFileSync("/file.md"); // blocks here until file is read
And here is an equivalent asynchronous example:

const fs = require("fs");
fs.readFile("/file.md", (err, data) => {
  if (err) throw err;
});
Blocking methods execute synchronously and non-blocking methods execute asynchronously.
Asynchronous improves performance by doing the task faster, and if the response does not come immediately, 
other jobs will be performed till we receive it. Non-blocking gives an immediate response if the response 
is available. Otherwise, it throws an error.











what is the difference between readFile and readFileSync?

both readFile() and readFileSync() reads the file at once and then delivers the content. 
The difference is that , readFile is non-blocking async. readFileSync is blocking sync
readFileSync() is synchronous and blocks execution until finished. These return their results as 
return values. readFile() are asynchronous and return immediately while they function in the background.
 You pass a callback function which gets called when they finish
 











*/