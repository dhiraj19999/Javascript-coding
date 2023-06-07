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

Space complexity for each operation in a stack is O(1), as no extra space is required for any operation.






What is a Two-Dimensional Array? A two-dimensional array, also known as a 2D array, is a collection of 
data elements arranged in a grid-like structure with rows and columns. Each element in the array is 
referred to as a cell and can be accessed by its row and column indices/indexes.



Space complexity = Auxiliary space + Input space.

If you build a two-dimensional array of size n*n, this will need O(n2) space.
Consider n = (i×j) , then the time complexity for traversing a 2-d array is O(n)


Examples of applications involving two-dimensional arrays include: a seating plan for a room 
(organized by rows and columns) a monthly budget (organized by category and month) a grade book
 where rows might correspond to individual students and columns to student scores.




 What is Queue Data Structure?

 A Queue is defined as a linear data structure that is open at both ends and the operations are performed in
  First In First Out (FIFO) order.
  Queue: the name of the array storing queue elements.
Front: the index where the first element is stored in the array representing the queue.
Rear: the index where the last element is stored in an array representing the queue.
Real Life example of a queue data structure
Let's consider a line of people waiting to buy a ticket at a cinema hall. A new person will join the line 
from the end and the person standing at the front will be the first to get the ticket and leave the line.

Types of Queues in Data Structure
There are four different types of queues in data structures:

Simple Queue
It is the most basic queue in which the insertion of an item is done at the front of the queue and deletion takes
 place at the end of the queue.

Ordered collection of comparable data kinds.
Queue structure is FIFO (First in, First Out).
When a new element is added, all elements added before the new element must be deleted in order to remove the new
 element.

 time complexity for queues is O(n)
Circular Queue
A circular queue is a special case of a simple queue in which the last member is linked to the first. As a result, 
a circle-like structure is formed.

The last node is connected to the first node.
Also known as a Ring Buffer as the nodes are connected end to end.
Insertion takes place at the front of the queue and deletion at the end of the queue.
Application of circular queue: Insertion of days in a week.


Priority Queue
In a priority queue, the nodes will have some predefined priority in the priority queue. The node with the least 
priority will be the first to be removed from the queue. Insertion takes place in the order of arrival of the nodes.

Some of the applications of priority queue:

Dijkstra’s shortest path algorithm
Prim’s algorithm
Data compression techniques like Huffman code
Below diagram shows how an application use priority queue for the items consumed by the user

Deque (Double Ended Queue)
In a double-ended queue, insertion and deletion can take place at both the front and rear ends of the queue.

Palindrome checking: Deques can be used to check if a word or phrase is a palindrome. By inserting each character
 of the word or phrase into a deque, it is possible to check if the word or phrase is a palindrome by comparing the 
 first and last characters, the second and second-to-last characters, and so on.
 Task scheduler: Deques can be used to implement a task scheduler that keeps track of tasks to be executed. 
 Tasks can be added to the back of the deque, and the scheduler can remove tasks from the front of the deque and 
 execute them.

Operation  =>	 Description 

enqueue()	=> Process of adding or storing an element to the end of the queue
dequeue()	=>  Process of removing or accessing an element from the front of the queue 
peek()	   =>  Used to get the element at the front of the queue without removing it
initialize()  =>	Creates an empty queue
isfull()	=> Checks if the queue is full
isempty()	=> Check if the queue is empty


enqueue time and space complexity:
Time Complexity: O(1), In enqueue function a single element is inserted at the last position. This takes a single 
memory allocation operation which is done in constant time.
Auxiliary Space: O(1). As no extra space is being used.


dequeue time and space complexity:
Time Complexity: O(1). In array implementation, only an arithmetic operation is performed i.e., the front pointer is 
incremented by 1. This is a constant time function.
Auxiliary Space: O(1). No extra space is utilized for deleting an element from the queue.






peek:
Time Complexity: O(1). In this operation, only a memory address is accessed. This is a constant time operation.
Auxiliary Space: O(1). No extra space is utilized to access the first value.




initialize()
Time Complexity: O(N). Inserting each element is a constant time operation. So for inserting N elements N unit of time is required.
Auxiliary Space: O(N). N elements are inserted.








isfull()
Time Complexity: O(1). It only performs an arithmetic operation to check if the queue is full or not.
Auxiliary Space: O(1). It requires no extra space.

isEmpty()
Time Complexity: O(1) It only checks the position stored in the first and last pointer
Auxiliary Space: O(1) NO extra space is required to check the values of the first and the last pointer.









 circular queues
It can be implemented using an array or a circular linked list. The time complexity for each queue operation 
takes O(1).
 Space complexity is O(n) where n is number of elements.

 deque 
 data structure requires constant time, i.e., time complexity = O(1). This means you can use deque to your 
 advantage to implement both the queue and stack.



 So the space complexity is O(n) where n is the number of elements in the priority queue.


 applications of queuq:
 Task Scheduling: Queues can be used to schedule tasks based on priority or the order in which they were received.

 Traffic Management: Queues can be used to manage traffic flow in transportation systems, such as airport control systems or road networks.

Operating systems: Operating systems often use queues to manage processes and resources. For example, a process scheduler might use a queue to manage the order in which processes are executed.
Web servers: Web servers use queues to manage incoming requests from clients. Requests are added to the queue as they are received, and they are processed by the server in the order they were received.



Applications Of A Circular Queue
Memory management: circular queue is used in memory management.
Process Scheduling: A CPU uses a queue to schedule processes.
Traffic Systems: Queues are also used in traffic system






Linked list 


Like arrays, a Linked List is a linear data structure. Unlike arrays, linked list elements are not stored at a 
contiguous location; the elements are linked using pointers. They include a series of connected nodes. Here, each
 node stores the data and the address of the next node.

 For insertion in the linked list, the time complexity is O(1) if done on the head, O(N) if done at any other 
 location, as we need to reach that location by traversing the linked list.



 Time Complexity: It is defined as the number of times a particular instruction set is executed rather than the total time taken. It is because the total time taken also depends on some external factors like the compiler used, the processor’s speed, etc.

Space Complexity: It is the total memory space required by the program for its execution.




Basis of comparison	Singly linked list	Doubly linked list
Definition	A single linked list is a list of nodes in which node has two parts, the first part is the data part, 
and the next part is the pointer pointing to the next node in the sequence of nodes.	
A doubly linked list is also a collection of nodes in which node has three fields, the 
first field is the pointer containing the address of the previous node, the second is the data field, and the 
third is the pointer containing the address of the next node.
Access	The singly linked list can be traversed only in the forward direction.	The doubly linked list can be 
accessed in both directions.
List pointer	It requires only one list pointer variable, i.e., the head pointer pointing to the first node.
	It requires two list pointer variables, head and last. The head pointer points to the first node, and the last
     pointer points to the last node of the list.
Memory space	It utilizes less memory space.	It utilizes more memory space.
Efficiency	It is less efficient as compared to a doubly-linked list.	It is more efficient.
Implementation	It can be implemented on the stack.	It can be implemented on stack, heap and binary tree.
Complexity	In a singly linked list, the time complexity for inserting and deleting an element from the list is O(n).
	In a doubly-linked list, the time complexity for inserting and deleting an element is O(1).














 Best case time complexity of different data structures for different operations 


 Data structure	Access	Search	Insertion	Deletion
Array	        O(1)	O(1)	O(1)	O(1)
Stack	        O(1)	O(1)	O(1)	O(1)
Queue	        O(1)	O(1)	O(1)	O(1)
Singly Linked list	O(1)	O(1)	O(1)	O(1)
Doubly Linked List	O(1)	O(1)	O(1)	O(1)
Hash Table	O(1)	O(1)	O(1)	O(1)
Binary Search Tree	O(log n)	O(log n)	O(log n)	O(log n)
AVL Tree	O(log n)	O(log n)	O(log n)	O(log n)
B Tree	O(log n)	O(log n)	O(log n)	O(log n)
Red Black Tree	O(log n)	O(log n)	O(log n)	O(log n)


Worst Case time complexity of different data structures for different operations
Data structure	Access	Search	Insertion	Deletion
Array	        O(1)	O(N)	O(N)	O(N)
Stack        	O(N)	O(N)	O(1)	O(1)
Queue	        O(N)	O(N)	O(1)	O(1)
Singly Linked list	O(N)	O(N)	O(N)	O(N)
Doubly Linked List	O(N)	O(N)	O(1)	O(1)
Hash Table	O(N)	O(N)	O(N)	O(N)
Binary Search Tree	O(N)	O(N)	O(N)	O(N)
AVL Tree	O(log N)	O(log N)	O(log N)	O(log N)
Binary Tree	O(N)	O(N)	O(N)	O(N)
Red Black Tree	O(log N)	O(log N)	O(log N)	O(log N)


The average time complexity of different data structures for different operations
Data structure	Access	Search	Insertion	Deletion
Array	         O(1)	O(N)	O(N)	O(N)
Stack	        O(N)	O(N)	O(1)	O(1)
Queue	        O(N)	O(N)	O(1)	O(1)
Singly Linked list O(N)	O(N)	O(1)	O(1)
Doubly Linked List	O(N)	O(N)	O(1)	O(1)
Hash Table	O(1)	O(1)	O(1)	O(1)
Binary Search Tree	O(log N)	O(log N)	O(log N)	O(log N)
AVL Tree	O(log N)	O(log N)	O(log N)	O(log N)
B Tree	O(log N)	O(log N)	O(log N)	O(log N)
Red Black Tree	O(log N)	O(log N)	O(log N)	O(log N)







Time Complexity of linked list storing ‘N’ elements
For insertion in the linked list, the time complexity is O(1) if done on the head, O(N) if done at any other location, as we need to reach that location by traversing the linked list.

For deletion, the time complexity is O(1), if done on the head, O(N), if done at any other location, as we need to 
reach that location by traversing the linked list.

For searching and accessing any elements, the involved time complexity is O(N).

Space Complexity of Linked List
Space complexity for each operation in a linked list is O(1), as no extra space is required for any operation.








Applications of Linked Lists in the Real World :

In music players, we can create our song playlist and can play a song either from starting or ending of the list. And these music players are implemented using a linked list.
We watch the photos on our laptops or PCs, and we can simply see the next or previous images easily. This feature is implemented using a linked list.
You must be reading this article on your web browser, and in web browsers, we open multiple URLs, and we can easily switch between those URLs using the previous and next buttons because they are connected using a linked list.
Applications of Circular Linked Lists :

The circular linked list can be used to implement queues.
In web browsers, the back button is implemented using a circular linked list.
In an operating system, a circular linked list can be used in scheduling algorithms like the Round Robin algorithm.
The undo functionality that is present in applications like photo editors etc., is implemented using circular linked lists.
Circular linked lists can also be used to implement advanced data structures like MRU (Most Recently Used) lists and Fibonacci heap.
Applications of Singly Linked List :

The singly linked list is used to implement stack and queue.
The undo or redo options, the back buttons, etc., that we discussed above are implemented using a singly linked list.
During the implementation of a hash function, there arises a problem of collision, to deal with this problem, a singly linked list is used.
Application of Doubly Linked Lists :

The doubly linked list is used to implement data structures like a stack, queue, binary tree, and hash table.
It is also used in algorithms of LRU (Least Recently used) and MRU(Most Recently Used) cache.
The undo and redo buttons can be implemented using a doubly-linked list.
The doubly linked list can also be used in the allocation and deallocation of memory.




Circular Linked List is a variation of Linked list in which the first element points to the last element and the 
last element points to the first element. Both Singly Linked List and Doubly Linked List can be made into a circular
 linked list.

Circular Linked List Complexity. The insertion operations that do not require traversal have the time complexity 
of O(1) . And, an insertion that requires traversal has a time complexity of O(n) .

Circular Linked List Complexity	Time Complexity	Space Complexity
Insertion Operation	O(1) or O(n)	O(1)
Deletion Operation	O(1)	O(1)





 */



