/*






How do you add CSS to an HTML webpage?

Inline - by using the style attribute inside HTML elements.
Internal - by using a <style> element in the <head> section.
External - by using a <link> element to link to an external CSS file.

What are the features of HTML5?

Video and Audio Features.
Header and Footer.
Input tag kinds have been expanded.
Input is an old attribute that has been resurrected in 
HTML with new values such as email, month, number, range,
 search, tel, color, week, URL, time, date, DateTime-local, and so on.


 What are the different types of storage in HTML5? 
 In HTML5 there are two types of web storage API.

localStorage
SessionStorage
localStorage: It is used to store data on the client-side. I
t has no expiration time, so the data in the LocalStorage exists always till the user manually deletes it.

Syntax:

For storing data in web storage: The key and value both should be string or number;
LocalStorage.setItem("key", "value"); 
For getting data from web storage: We will pass the key and it will return value.
LocalStorage.getItem("key"); 


Session Storage: It is used to store data on the client-side. Data in the 
SessionStorage exist till the current tab is open, if we close the current 
tab then our data will also erase automatically from the SessionStorage.

Syntax:

For storing data in web storage:
SessionStorage.setItem("key", "value");
For getting data from web storage:
SessionStorage.getItem("key");




What are forms in HTML?

The <form> element is a container for different types of input elements, such as:
 text fields, checkboxes, radio buttons, submit buttons, etc.
 we can use The <input type="submit"> defines a button for submitting the form data to a form-handler.


 
 What are event listeners?
An event listener in JavaScript is a way that you can wait for user interaction like a click or keypress 
and then run some code whenever that action happens




what is onload event?

The onload event occurs when an object has been loaded. onload is most often used within the <body>
 element to execute a script once a web page has completely loaded all content (including images, script 
    files, CSS files, etc.).





What is scroll event?
The scroll event fires when the document view has been scrolled. To detect when scrolling has completed, 
see the Document: scrollend event .
    <div onscroll="myFunction()">




    How do you use Video and Audio tags?
    <audio> tag is used to embed sound content in a document, such as music or other audio streams.
    <audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
he <audio> tag contains one or more <source> tags with different audio sources.
 The browser will choose the first source it supports.

The text between the <audio> and </audio> tags will only be displayed in browsers that do not support 
the <audio> element.

There are three supported audio formats in HTML: MP3, WAV, and OGG.


he <video> tag is used to embed video content in a document, such as a movie clip or other video streams.

The <video> tag contains one or more <source> tags with different video sources. The browser will choose 
the first source it supports.

The text between the <video> and </video> tags will only be displayed in browsers that do not support the 
<video> element.

There are three supported video formats in HTML: MP4, WebM, and OGG.




<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>


*/