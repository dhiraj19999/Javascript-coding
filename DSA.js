/*

STACK DATA STRUCTURE:

Stack is a linear data structure in which addition or removal of element follows a particular order i.e. 
LIFO(Last in First Out) AND FILO(First in Last Out). 


use case:

Back and forward buttons in a web browser
It we want to go back to a page we have previously visited, we can use the back button. This removes the
Current page from the top of the back stack, and stores it on the forward stack. If we want to move
forward again, we can use the forward button, which retrieves the page from the top of the forward stack
and pushes the current page onto the back stack. In this way, we can move back and forth through the
pages we have visited without having to manually enter the URL of each page.


The UNDO/REDO functionality in text editors and image editing sottware can be implemented using a
stack by using two separate stacks: one for undo and one for redo. Every time we pertorm an action on
the document or image, a new record containing intormation about the action is created and added to
the top of the undo stack.



In web development, it's important to ensure that the opening and closing tags of an HlML document
match correctly. This can be done using a stack data structure. The basic idea is to use a stack to keep
track of the opening tags as they are encountered in the HTML document, and then match them with the
corresponding closing tags as they are encountered. Here's a general overview of how this process
Works
1. Initialize an empty stack.
2. Iterate through each character in the HTML document.
3. When an opening tag is encountered (e.g. ), push the tag name onto the stack.
4. When a closing tag is encountered (e.g.), pop the top element from the stack and compare it to the
closing tag. If they match, continue iterating through the document. If they don't match, then the
HTML document contains an error.
5. After iterating through the entire document, the stack should be empty. If it's not, then the HTML
document contains an Copyfish






Time Complexity
Worst Case Scenario would be O(n) in case of a array implementation of stack where the array is completely 
filled, then the array size needs to be changed and all the elements must be copied from one array to another
 , this would result in time being O(n). In case of a LinkedList approach, time remains constant O(1).



Best Case Scenario is O(1) as only one elements needs to be pushed onto the stack.
Average Case Scenario would be O(1).
Space Complexity
Space complexity of Push Operation is O(1).

 The Average , Worst and Best Time Complexities of Peek operation are O(1), as peeking only returns the top 
 of the stack.
Space Complexity
Space Complexity of Peek Operation is O(1) as no additional space is required for it.





Worst Case Scenario is O(1) , as Deletion operation only removes the top element.
Best Case Scenario is O(1).
Average Case Scenario would be O(1) as only the top element is needed to be removed.
Space Complexity
Space Complexity of Pop Operation is O(1) as no additional space is required for it.








What is a Two-Dimensional Array? A two-dimensional array, also known as a 2D array, is a collection of 
data elements arranged in a grid-like structure with rows and columns. Each element in the array is 
referred to as a cell and can be accessed by its row and column indices/indexes.



Space complexity = Auxiliary space + Input space.

If you build a two-dimensional array of size n*n, this will need O(n2) space.
Consider n = (i×j) , then the time complexity for traversing a 2-d array is O(n)


Examples of applications involving two-dimensional arrays include: a seating plan for a room 
(organized by rows and columns) a monthly budget (organized by category and month) a grade book
 where rows might correspond to individual students and columns to student scores.











*/



