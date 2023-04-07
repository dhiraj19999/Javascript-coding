/*

- Can you describe the main difference between a `.forEach` 
loop and a `.map()` and why you would pick one versus the other?

The main difference between `forEach()` method and `map()` method is the `forEach()` method doesn't return a 
new array (it returns undefined) where as the `map()` returns a new array with the modified elements.

If we need the returned/new array with the modified data, we would pick `map()`, because it returns a new 
array with the modified data. If we just want to traverse on the given array and don't need the returned 
array with the modified values, we will use `forEach()`.

*/

let arr = ["Alice", "Bob", "Elon"]

arr.forEach((ele) => console.log("Welcome " + ele))


/*

otput==> 

Welcome Alice
Welcome Bob
Welcome Elon

*/

let numbers = [100,200,250,450]

let final = numbers.map((num) => num + 30)

console.log(numbers)
//Output - [ 100, 200, 250, 450 ]

console.log(final)
//Output - [ 130, 230, 280, 480 ]