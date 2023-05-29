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
localStorage: It is used to store data on the client-side. 
it has no expiration time, so the data in the LocalStorage exists always till the user manually deletes it.

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

The onload event occurs when an object has been loaded. onload is most often used within 
the <body>
 element to execute a script once a web page has completely loaded all content (including images, 
  script 
    files, CSS files, etc.).





What is scroll event?
The scroll event fires when the document view has been scrolled. T
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

The <video> tag contains one or more <source> tags with different video sources. The browser will 
choose 
the first source it supports.

The text between the <video> and </video> tags will only be displayed in browsers that do not support 
the 
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









  <=========   DAY2   ========>
















What do the following mean in html 
<section>
<article>
<footer>
<nav>
<aside>


<section>:The <section> tag defines a section in a document.
Section tag defines the section of documents such as chapters, headers, footers or any other sections. 
The section tag divides the content into section and subsections. The section tag is used when
 requirements
 of two headers or footers or any other section of documents needed. Section tag grouped the generic
  block 
 of related contents. The main advantage of the section tag is, it is a semantic element, which describes 
 its meaning to both browser and developer.

 <article>: An article should make sense on its own and it should be possible to distribute it 
 independently
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

Notice that NOT all links of a document should be inside a <nav> element. The <nav> element is intended 
only 
for major blocks of navigation links.


<aside>:The <aside> tag defines some content aside from the content it is placed in.

The aside content should be indirectly related to the surrounding content.

Tip: The <aside> content is often placed as a sidebar in a document.




link for extra questions :  https://docs.google.com/document/d/1hhdCyPcDfOJ1r9FLNX0QtEuS0K-1PWTlwr6QmMrdzZk/edit






What does a DOCTYPE do?
DOCTYPE is an abbreviation for Document Type. A DOCTYPE is always associated to a DTD - for Document Type
Definition.

A DTD defines how documents of a certain type should be structured (i.e. a button can contain a span but
   not a div), whereas a DOCTYPE declares what DTD a document supposedly respects (i.e. this document 
    respects the HTML DTD).

For webpages, the DOCTYPE declaration is required. It is used to tell user agents what version of the HTML 
specifications your document respects. Once a user agent has recognized a correct DOCTYPE, it will trigger
 the no-quirks mode matching this DOCTYPE for reading the document. If a user agent doesn't recognize a
  correct DOCTYPE, it will trigger the quirks mode.

The DOCTYPE declaration for the HTML5 standards is <!DOCTYPE html>.

References
https://html.spec.whatwg.org/multipage/syntax.html#the-doctype
https://html.spec.whatwg.org/multipage/xhtml.html
https://quirks.spec.whatwg.org/


How do you serve a page with content in multiple languages?
I will assume that it is asking about the most common case, which is how to serve a page with content
 available in multiple languages, but the content within the page should be displayed only in one consistent 
 language.

When an HTTP request is made to a server, the requesting user agent usually sends information about language
 preferences, such as in the Accept-Language header. The server can then use this information to return a 
 version of the document in the appropriate language if such an alternative is available. The returned HTML
  document should also declare the lang attribute in the <html> tag, such as <html lang="en">...</html>.

Of course this is useless for letting a search engine know that the same content is available in different
 languages, and so you must also make use of the hreflang attribute in the <head>. Eg. <link rel="alternate"
  hreflang="de" href="http://de.example.com/page.html" />

In the back end, the HTML markup will contain i18n placeholders and content for the specific language stored
 in YML or JSON formats. The server then dynamically generates the HTML page with content in that particular
  language, usually with the help of a back end framework.

References
https://www.w3.org/International/getting-started/language
https://support.google.com/webmasters/answer/189077


What kind of things must you be wary of when designing or developing for multilingual sites?
Use lang attribute in your HTML.
Directing users to their native language - Allow a user to change his country/language easily without hassle.
Text in raster-based images (e.g. png, gif, jpg, etc.), is not a scalable approach - Placing text in an image
 is still a popular way to get good-looking, non-system fonts to display on any computer. However, to 
 translate image text, each string of text will need to have a separate image created for each language.
  Anything more than a handful of replacements like this can quickly get out of control.
Restrictive words/sentence length - Some content can be longer when written in another language. Be wary 
of layout or overflow issues in the design. It's best to avoid designing where the amount of text would 
make or break a design. Character counts come into play with things like headlines, labels, and buttons.
 They are less of an issue with free-flowing text such as body text or comments.
Be mindful of how colors are perceived - Colors are perceived differently across languages and cultures.
 The design should use color appropriately.
Formatting dates and currencies - Calendar dates are sometimes presented in different ways.
 Eg. "May 31, 2012" in the U.S. vs. "31 May 2012" in parts of Europe.
Do not concatenate translated strings - Do not do anything like "The date today is " + date. It will break 
in languages with different word order. Use a template string with parameters substitution for each language
 instead. For example, look at the following two sentences in English and Chinese respectively: I will travel
  on {% date %} and {% date %} 我会出发. Note that the position of the variable is different due to grammar 
  rules of the language.
Language reading direction - In English, we read from left-to-right, top-to-bottom, in traditional Japanese,
 text is read up-to-down, right-to-left.
Useful-to-have - include the locale in the path (e.g en_US, zh_CN, etc).
References
https://www.quora.com/What-kind-of-things-one-should-be-wary-of-when-designing-or-developing-for
-multilingual-sites


What are data- attributes good for?
Before JavaScript frameworks became popular, front end developers used data- attributes to store extra data 
within the DOM itself, without other hacks such as non-standard attributes, extra properties on the DOM. 
It is intended to store custom data private to the page or application, for which there are no more 
appropriate attributes or elements.

These days, using data- attributes is generally not encouraged. One reason is that users can modify the
 data attribute easily by using inspect element in the browser. The data model is better stored within 
 JavaScript itself and stay updated with the DOM via data binding possibly through a library or a framework.

However, one perfectly valid use of data attributes, is to add a hook for end to end testing frameworks 
such as Selenium and Capybara without having to create a meaningless classes or ID attributes. The element
 needs a way to be found by a particular Selenium spec and something like data-selector='the-thing' 
 is a valid way to do so without convoluting the semantic markup otherwise.

References
http://html5doctor.com/html5-custom-data-attributes/
https://www.w3.org/TR/html5/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes



Consider HTML5 as an open web platform. What are the building blocks of HTML5?
Semantics - Allowing you to describe more precisely what your content is.
Connectivity - Allowing you to communicate with the server in new and innovative ways.
Offline and storage - Allowing webpages to store data on the client-side locally and operate offline more 
efficiently.
Multimedia - Making video and audio first-class citizens in the Open Web.
2D/3D graphics and effects - Allowing a much more diverse range of presentation options.
Performance and integration - Providing greater speed optimization and better usage of computer hardware.
Device access - Allowing for the usage of various input and output devices.
Styling - Letting authors write more sophisticated themes.
References
https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5








========>  DAY3  <=========









Describe the difference between a cookie, sessionStorage and localStorage.
All the above-mentioned technologies are key-value storage mechanisms on the client side. They are only 
able to store values as strings.

cookie	localStorage	sessionStorage
Initiator	Client or server. Server can use Set-Cookie header	Client	Client
Expiry	Manually set	Forever	On tab close
Persistent across browser sessions	Depends on whether expiration is set	Yes	No
Sent to server with every HTTP request	Cookies are automatically being sent via Cookie header	No	No
Capacity (per domain)	4kb	5MB	5MB
Accessibility	Any window	Any window	Same tab
Note: If the user decides to clear browsing data via whatever mechanism provided by the browser, this will
 clear out any cookie, localStorage, or sessionStorage stored. It's important to keep this in mind when 
 designing for local persistance, especially when comparing to alternatives such as server side storing 
 in a database or similar (which of course will persist despite user actions).

References
https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
http://tutorial.techaltum.com/local-and-session-storage.html
Describe the difference between <script>, <script async> and <script defer>.
<script> - HTML parsing is blocked, the script is fetched and executed immediately, HTML parsing resumes 
after the script is executed.
<script async> - The script will be fetched in parallel to HTML parsing and executed as soon as it is 
available (potentially before HTML parsing completes). Use async when the script is independent of any 
other scripts on the page, for example, analytics.
<script defer> - The script will be fetched in parallel to HTML parsing and executed when the page has
 finished parsing. If there are multiple of them, each deferred script is executed in the order they were
  encountered in the document. If a script relies on a fully-parsed DOM, the defer attribute will be useful
   in ensuring that the HTML is fully parsed before executing. A deferred script must not contain 
   document.write.
Note: The async and defer attributes are ignored for scripts that have no src attribute.

References
http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html
https://stackoverflow.com/questions/10808109/script-tag-async-defer
https://bitsofco.de/async-vs-defer/


Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before 
</body>? Do you know any exceptions?
Placing <link>s in the <head>

Putting <link>s in the <head> is part of proper specification in building an optimized website. When a page
 first loads, HTML and CSS are being parsed simultaneously; HTML creates the DOM (Document Object Model) 
 and CSS creates the CSSOM (CSS Object Model). Both are needed to create the visuals in a website, allowing
  for a quick "first meaningful paint" timing. This progressive rendering is a category optimization 
  sites are measured in their performance scores. Putting stylesheets near the bottom of the document is
   what prohibits progressive rendering in many browsers. Some browsers block rendering to avoid having 
   to repaint elements of the page if their styles change. The user is then stuck viewing a blank white 
   page. Other times there can be flashes of unstyled content (FOUC), which show a webpage with no styling 
   applied.

Placing <script>s just before </body>

<script> tags block HTML parsing while they are being downloaded and executed which can slow down your 
page. Placing the scripts at the bottom will allow the HTML to be parsed and displayed to the user first.

An exception for positioning of <script>s at the bottom is when your script contains document.write(), but 
these days it's not a good practice to use document.write(). Also, placing <script>s at the bottom means 
that the browser cannot start downloading the scripts until the entire document is parsed. This ensures 
your code that needs to manipulate DOM elements will not throw an error and halt the entire script. If 
you need to put <script>s in the <head>, use the defer attribute, which will achieve the same effect of
 running the script only after the HTML is parsed but the browser can download the script earlier.

Keep in mind that putting scripts just before the closing </body> tag will create the illusion that the 
page loads faster on an empty cache (since the scripts won't block downloading the rest of the document).
 However, if you have some code you want to run during page load, it will only start executing after the
  entire page has loaded. If you put those scripts in the <head> tag, they would start executing before - 
  so on a primed cache the page would actually appear to load faster.

<head> and <body> tags are now optional

As per the HTML5 specification, certain HTML tags like <head> and <body> are optional. Google's style guide
 even recommends removing them to save bytes. However, this practice is still not widely adopted and the 
 performance gain is likely to be minimal and for most sites it's not likely going to matter.

References
https://developer.yahoo.com/performance/rules.html#css_top
https://www.techrepublic.com/blog/web-designer/how-to-prevent-flash-of-unstyled-content-on-your-websites/
https://developers.google.com/web/fundamentals/performance/critical-rendering-path/


What is progressive rendering?
Progressive rendering is the name given to techniques used to improve the performance of a webpage
 (in particular, improve perceived load time) to render content for display as quickly as possible.

It used to be much more prevalent in the days before broadband internet but it is still used in modern 
development as mobile data connections are becoming increasingly popular (and unreliable)!

Examples of such techniques:

Lazy loading of images - Images on the page are not loaded all at once. JavaScript will be used to load an
 image when the user scrolls into the part of the page that displays the image.
Prioritizing visible content (or above-the-fold rendering) - Include only the minimum CSS/content/scripts
 necessary for the amount of page that would be rendered in the users browser first to display as quickly
  as possible, you can then use deferred scripts or listen for the DOMContentLoaded/load event to load in
   other resources and content.
Async HTML fragments - Flushing parts of the HTML to the browser as the page is constructed on the back 
end. More details on the technique can be found here.
References
https://stackoverflow.com/questions/33651166/what-is-progressive-rendering
http://www.ebaytechblog.com/2014/12/08/async-fragments-rediscovering-progressive-html-rendering-with-marko/
Why you would use a srcset attribute in an image tag? Explain the process the browser uses when evaluating
 the content of this attribute.
You would use the srcset attribute when you want to serve different images to users depending on their
 device display width - serve higher quality images to devices with retina display enhances the user 
 experience while serving lower resolution images to low-end devices increase performance and decrease 
 data wastage (because serving a larger image will not have any visible difference). For example:
  <img srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 2000w" src="..." alt=""> tells the browser 
  to display the small, medium or large .jpg graphic depending on the client's resolution. The first 
  value is the image name and the second is the width of the image in pixels. For a device width of 
  320px, the following calculations are made:

500 / 320 = 1.5625
1000 / 320 = 3.125
2000 / 320 = 6.25
If the client's resolution is 1x, 1.5625 is the closest, and 500w corresponding to small.jpg will be 
selected by the browser.

If the resolution is retina (2x), the browser will use the closest resolution above the minimum. 
Meaning it will not choose the 500w (1.5625) because it is greater than 1 and the image might look bad. 
The browser would then choose the image with a resulting ratio closer to 2 which is 1000w (3.125).

srcsets solve the problem whereby you want to serve smaller image files to narrow screen devices, as
 they don't need huge images like desktop displays do — and also optionally that you want to serve 
 different resolution images to high density/low-density screens.

References
https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/
Have you used different HTML templating languages before?
Yes, Pug (formerly Jade), ERB, Slim, Handlebars, Jinja, Liquid, and EJS just to name a few. In my opinion,
 they are more or less the same and provide similar functionality of escaping content and helpful filters
  for manipulating the data to be displayed. Most templating engines will also allow you to inject your 
  own filters in the event you need custom processing before display.









How do you use Geo Location API?

The Geolocation API allows the user to provide their location to web applications if they so desire.
 For privacy reasons, the user is asked for permission to report location information.

The Geolocation API is accessed via a call to navigator.geolocation; this will cause the user's browser
 to ask them for permission to access their location data. If they accept, then the browser will use 
 the 
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
























































he carries river ganga on his head
fire on his forehead
posion in his throat
the nature carries the entire world in its womb 
and you mess with it















*/