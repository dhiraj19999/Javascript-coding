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




How do you know if a user is offline or not? What API does the browser provide for that?

We can detect if the user is online or offline by using the online property on the navigator 
object which will return true if the user is connected to the internet, otherwise it returns false .


o check if you are online, query window.navigator.onLine, as in the following example:

if (navigator.onLine) {
  console.log("online");
} else {
  console.log("offline");
}







How do you use Geo Location API?

The Geolocation API allows the user to provide their location to web applications if they so desire.
 For privacy reasons, the user is asked for permission to report location information.

The Geolocation API is accessed via a call to navigator.geolocation; this will cause the user's browser
 to ask them for permission to access their location data. If they accept, then the browser will use the 
 best available functionality on the device to access this information (for example, GPS).

 <button id="find-me">Show my location</button><br />
<p id="status"></p>
<a id="map-link" target="_blank"></a>


function geoFindMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.querySelector("#find-me").addEventListener("click", geoFindMe);











What do the following mean in html 
<section>
<article>
<footer>
<nav>
<aside>


<section>:The <section> tag defines a section in a document.
Section tag defines the section of documents such as chapters, headers, footers or any other sections. 
The section tag divides the content into section and subsections. The section tag is used when requirements
 of two headers or footers or any other section of documents needed. Section tag grouped the generic block 
 of related contents. The main advantage of the section tag is, it is a semantic element, which describes 
 its meaning to both browser and developer.

 <article>: An article should make sense on its own and it should be possible to distribute it independently
  from the rest of the site.

Potential sources for the <article> element:

Forum post
Blog post
News story



<footer>:The <footer> tag defines a footer for a document or section.

A <footer> element typically contains:

authorship information
copyright information
contact information
sitemap
back to top links
related documents
You can have several <footer> elements in one document.




<nav>:The <nav> tag defines a set of navigation links.

Notice that NOT all links of a document should be inside a <nav> element. The <nav> element is intended only 
for major blocks of navigation links.


<aside>:The <aside> tag defines some content aside from the content it is placed in.

The aside content should be indirectly related to the surrounding content.

Tip: The <aside> content is often placed as a sidebar in a document.



































































he carries river ganga on his head
fire on his forehead
posion in his throat
the nature carries the entire world in its womb 
and you mess with it















*/