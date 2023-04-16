


/*





CSS variables are custom properties in which you can store a value and use it anywhere in the HTML code

<body>
    <div class="container">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
</body>

.box{
            --box-color: violet;
            width:200px;
            height: 200px;
            background-color: var(--box-color);
            border: 2px solid var(--box-color);
            box-shadow: 3px 3px var(--box-color);
            margin: 2px 9px;
        }
        :root{
            --primary-color: blue;
            --danger-color: red;
            --maxw: 333px;
        }

        Any custom properties written in the root variable can be accessed anywhere in the code.





        postion:


        position: absolute;
An element with the absolute position will move according to the position of its parent element.
In the absence of any parent element, the HTML element will be placed relative to the page.

position: static;
It is the default position of HTML elements.
position: relative;
It is used when we need to position an HTML element relative to its normal position.
We can set the top, right, bottom, and left properties that will cause the element to adjust away from 
the normal position.


position: fixed;
An element with position:fixed; will remain stuck to a specific position even after the page is scrolled.
This position property is used when we want to keep an HTML element at a fixed spot no matter where 
on the page the user is.


position: sticky;
It is a hybrid of relative and fixed position.
An HTML element with position:sticky; will just sit there until a given position offset is met.




BOX model :
In CSS, the term "box model" is used when talking about design and layout.

The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins,
 borders, padding, and the actual content. The image below illustrates the box model:


Content - The content of the box, where text and images appear
Padding - Clears an area around the content. The padding is transparent
Border - A border that goes around the padding and content
Margin - Clears an area outside the border. The margin is transparent





What is flex-box?
CSS Flexible Box Layout, commonly known as Flexbox, is a CSS 3 web layout model
Flexbox is a one-dimensional layout system that we can use to create a row or a column axis layout.
 It makes our life easier to design and build responsive web pages




what is svg?

SVG is a vector graphic format that can be scaled to any size without losing quality
Every element and every attribute in SVG files can be animated

Advantages of using SVG over other image formats (like JPEG and GIF) are:

SVG images can be created and edited with any text editor

SVG images are scalable
SVG images can be printed with high quality at any resolution
SVG images are zoomable
SVG graphics do NOT lose any quality if they are zoomed or resized
SVG is an open standard
SVG files are pure XML



what are animation and keyframe IN CSS
A keyframe, also written as “key frame,” is something that defines the starting and/or ending point of any 
smooth transition.
Keyframes indicate the start and end of the animation, as well as any intermediate steps between the start 
and end
An animation lets an element gradually change from one style to another.





HTML Options
1
​
2
<!DOCTYPE html>
3
<html lang="en">
4
<head>
5
  <meta charset="UTF-8">
6
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
7
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
8
  <title>Document</title>
9
</head>
10
<body>
11
  <div class="box">
12
   
13
  </div>
14
</body>
15
</html>


body{
padding: 50px;
}
.box{
background-color: red;
width: 200px;
height: 200px;
position: relative;
display: inline-block;
animation-name: myframes;
animation-duration: 2s;
animation-iteration-count: infinite;
animation-timing-function: ease-in-out;
}
@keyframes myframes{
  from{
height: 200px;
  }
  to{
height: 500px;
  }
  
  }



What is the difference between min-width and max-width in media queries?

The min-width and max-width are media features
The min-width specifies the minimum screen width of a specific device, meanwhile, 
The max-width media feature states the maximum screen width of a specific device.





What is media query?
Media queries is a feature of CSS 3
which allow you to create different layouts depending on the size of the viewport,
its useful to make website responsive.


what is grid?

The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, 
making it easier to design web pages without having to use floats and positioning.
Grid was designed for two-dimensional layout - rows, and columns



difference bet grid and flex?

CSS Grid Layout, is a two-dimensional grid-based layout system with rows and columns, 
The CSS Flexbox offers a one-dimensional layout
Flexbox can work on either row or columns at a time, but Grids can work on both
You can build complex as well responsive design with grid. This is why it is called ‘layout first’.
While Flexbox excels in laying out items along a single axis,
 Grid is better for layouts with both horizontal and vertical axes
 the content inside the box does not stretch automatically according to the content in grid.

 in the flex item, the box stretches as far as the content goes. 
 You should consider using grid layout when: 

You have a complex design to work with and want maintainable web pages
You want to add gaps over the block elements
You should consider using flexbox when:

You have a small design to work with a few rows and columns
You need to align the element
You don’t know how your content will look on the page, and you want everything to fit in.






What is specificity?

Think of specificity as a score/rank that determines which style declaration is ultimately applied to 
an element.
If there are two or more CSS rules that point to the same element, the selector with the highest 
specificity value will "win", and its style declaration will be applied to that HTML element.



inline style =1000  S
id style = 100      I
class = 10          C

tag=1               T

universal==0        U




What does justify-content, justifyItems, justifySelf mean?
What do AlignItems, AlignContent, and AlignSelf mean?

align means vertically and justify means horizontally
justify-items - Aligns the content inside a grid item along the row axis. justify-content - This property 
aligns the grid along the row axis. justify-self - Aligns the content inside a grid item along the row axis.

justify self override justify-items on individual items.
The align-items property defines the default behavior for how items are laid out along the cross axis










How do you build an infinite scrolling page?
https://www.educative.io/answers/how-to-implement-infinite-scrolling-in-javascript












/*



/*


How to add comments on css?
To comment in CSS, simply place your plain text inside (`\* */` marks. This tells the browser that 
they are notes and should not be rendered on the front end.



Why do we use pseudo-class?
CSS pseudo-classes are used to add special effects to some selectors.

selector:pseudo-class {
  property: value;
}
example:

div:hover {
  background-color: blue;
}






How is specificity applied?

If there are two or more CSS rules that point to the same element, the selector with the highest specificity 
value will "win", and its style declaration will be applied to that HTML element.
Think of specificity as a score/rank that determines which style declaration are ultimately applied to an 
element.

The amount of specificity a selector has is measured using four different values (or components), 
which can
 be thought of as thousands, hundreds, tens and ones — four single digits in four columns:

1000 - Inline/Style Tag
Hundreds - One for each ID Selector
Tens - One for each class selector, attribute selector, pseudo-class contained inside the overall selector.
Ones - One for each element selector, pseudo-element contained inside the overall selector.
Note: Universal selector (*), combinators (+, >, ~, ' ') and negation pseudo-class (:not) have no effect on 
specificity.

| Selector                                | Thousands | Hundreds | Tens | Ones | Total |
| --------------------------------------- | --------- | -------- | ---- | ---- | ----- |
| h1                                      | 0         | 0        | 0    | 1    | 0001  |
| h1 + p                                  | 0         | 0        | 0    | 2    | 0002  |
| h1 + p::first-letter                    | 0         | 0        | 0    | 3    | 0003  |
| li > a[href*="en-US"] > .inline-warning | 0         | 0        | 2    | 2    | 0022  |
| .class1                                 | 0         | 0        | 1    | 0    | 0010  |
| ul.class1                               | 0         | 0        | 1    | 1    | 0011  |
| #id1                                    | 0         | 1        | 0    | 0    | 0100  |
| style                                   | 1         | 0        | 0    | 0    | 1000  |








What method allows an element to be moved from its current position?
The translate() method moves an element from its current position (according to the parameters given for 
  the X-axis and the Y-axis).

Take a look at this example for better understanding.

https://codepen.io/abdul-from-masai/pen/zYpRJaE









What properties does flex model have?
Properties for the parent (flex-container):
display
This defines a flex container; inline or block depending on the given value. It enables a flex context for 
all its direct children.

.container {
  display: flex; /* or inline-flex */
}
flex-direction
The flex-direction property defines in which direction the container wants to stack the flex items. 
Flexbox is a single-direction layout concept. Think of flex items as primarily laying out either in 
horizontal rows or vertical columns.

.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
row (default): left to right
row-reverse: right to left
column: same as row but top to bottom
column-reverse: same as row-reverse but bottom to top
flex-direction

flex-wrap
By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap
 as
 needed with this property.

.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
nowrap (default): all flex items will be on one line
wrap: flex items will wrap onto multiple lines, from top to bottom.
wrap-reverse: flex items will wrap onto multiple lines from bottom to top.
flex-wrap

flex-flow
This is a shorthand for the flex-direction and flex-wrap properties, which together define the flex 
container’s main and cross axes. The default value is row nowrap.

.container {
  flex-flow: column wrap;
}
justify-content
The justify-content property is used to align the flex items along the main axis;

.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly 
  | start | end | left | right;
}
flex-start (default): items are packed toward the start of the flex-direction.
flex-end: items are packed toward the end of the flex-direction.
start: items are packed toward the start of the writing-mode direction.
end: items are packed toward the end of the writing-mode direction.
left: items are packed toward left edge of the container, unless that doesn’t make sense with the 
flex-direction, then it behaves like start.
right: items are packed toward right edge of the container, unless that doesn’t make sense with the 
flex-direction, then it behaves like end.
center: items are centered along the line
space-between: items are evenly distributed in the line; first item is on the start line, last item on the 
end line
space-around: items are evenly distributed in the line with equal space around them. Note that visually the
 spaces aren’t equal, since all the items have equal space on both sides. The first item will have one unit 
 of space against the container edge, but two units of space between the next item because that next item has
  its own spacing that applies.
space-evenly: items are distributed so that the spacing between any two items (and the space to the edges) is
 equal.
PS : The safest values are flex-start, flex-end, and center. (as some of the properties never got support
   from browser)

justify-content

align-items
The align-items property is used to align the flex items along the cross axis.

.container {
  align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline 
  | start | end | self-start | self-end;
}
stretch (default): The stretch value stretches the flex items to fill the container (this is default):
flex-start / start / self-start: items are placed at the start of the cross axis.
flex-end / end / self-end: items are placed at the end of the cross axis.
center: The center value aligns the flex items in the middle of the container
baseline: items are aligned such as their baselines align
align-items

align-content
This aligns a flex container’s lines within when there is extra space in the cross-axis, similar to how
 justify-content aligns individual items within the main-axis.

Note : This property only takes effect on multi-line flexible containers, where flex-wrap is set to either 
wrap or wrap-reverse).

.container {
  align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch ;
}
flex-start :items packed to the start of the container
flex-end : items packed to the end of the container.
center : items centered in the container
space-between : items evenly distributed; the first line is at the start of the container while the last 
one is at the end
space-around : items evenly distributed with equal space around each line
space-evenly : items are evenly distributed with equal space around them
stretch : lines stretch to take up the remaining space
align-items

gap, row gap, column gap
The gap property explicitly controls the space between flex items. It applies that spacing only between 
items not on the outer edges.

.container {
  display: flex;
  ...
  gap: 10px;
  gap: 10px 20px; /* row-gap column gap */
  row-gap: 10px;
  column-gap: 20px;
}
align-items

Properties for the children (flex-items);
order
The order property can change the order of the flex items:

<div class="flex-container">
  <div style="order: 3">1</div>
  <div style="order: 2">2</div>
  <div style="order: 4">3</div>
  <div style="order: 1">4</div>
</div>
will give

order

flex-grow
The flex-grow property specifies how much a flex item will grow relative to the rest of the flex items.

<div class="flex-container">
  <div style="flex-grow: 1">1</div>
  <div style="flex-grow: 1">2</div>
  <div style="flex-grow: 8">3</div> // Make the third flex item grow eight times faster than the other 
  flex items:
</div>
flex-grow

flex-shrink
The flex-shrink property specifies how much a flex item will shrink relative to the rest of the flex items.

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div style="flex-shrink: 0">3</div> //Do not let the third flex item shrink as much as the other flex
   items:
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
</div>
will give

flex-shrink

flex-basis
The flex-basis property specifies the initial length of a flex item before the remaining space is
 distributed.

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div style="flex-basis: 200px">3</div> // Set the initial length of the third flex item to 200 pixels:
  <div>4</div>
</div>
will give

flex-basis

flex
The flex property is a shorthand property for the flex-grow, flex-shrink, and flex-basis properties.

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div style="flex: 0 0 200px">3</div> // Make the third flex item not growable (0), not shrinkable (0), and
   with an initial length of 200 pixels:
  <div>4</div>
</div>
align-self
The align-self property specifies the alignment for the selected item inside the flexible container.

The align-self property overrides the default alignment set by the container's align-items property.

<html>
<head>
<style>
.flex-container {
  display: flex;
  height: 200px;
  background-color: #f1f1f1;
}

.flex-container > div {
  background-color: DodgerBlue;
  color: white;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
</style>
</head>
<body>

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div style="align-self: center">3</div>
  <div>4</div>
</div>

</body>
</html>
will give the following

align-self




What is the difference between flex and grids?

Grid is made for two-dimensional layout while Flexbox is for one. This means Flexbox can work on either row 
or columns at a time, but Grids can work on both.

Major Uniqueness between Flexbox and Grids is that the former works on content while the latter is based on
 the layout.

CSS Grids helps you create the outer layout of the webpage. You can build complex as well responsive design 
with this. This is why it is called ‘layout first’. Flexbox mostly helps align content & move blocks.

Give an example where we have to use grids and where you have to use flexbox?
CSS Grids helps you create the outer layout of the webpage. You can build complex as well responsive design
 with this. This is why it is called ‘layout first’. While flexbox mostly helps align content & move blocks.

CSS grids are for 2D layouts. It works with both rows and columns.Flexbox works better in one dimension only
 (either rows OR columns).

You should consider flexbox when :

You have a small design to implement
You need to align elements
You need a content-first design
You should consider CSS grid when :

You have a complex design to implement
You need to have a gap between block elements
You need to overlap elements
You need a layout-first design
In simple terms
"CSS grid is for layout, Flexbox is for alignment"

Give an example where you cannot use flexbox, and you can only use grids?
Grid is usually used to make a more complex layout. You can build complex as well responsive design with 
this. It works with both rows and columns.Flexbox works better in one dimension only (either rows OR columns)
.

Now take a look at this example;

https://codepen.io/abdul-from-masai/pen/KKZQYgw

If you have some complex layout as this wherein you want to layout in different ways basis the screen size; 
You'd rather use CSS grid over flex;

for a simple one dimensional layout flexbox can be useful to help align content




What are combinators? give examples of how you can use them
Combinators lets you combine two or more selectors so you can be more specific in your selection method. 
There are different types of combinators.
.
,
+
~
>
space
Type & Class (.)
elemtype.class { style properties }
<div>This is the first div</div>
<div class="class1">This is the second div</div>
<div class="class2">This is the third div</div>
<p>This is the first paragraph</p>
<p class="class1">This is the second paragraph</p>
<p class="class2">This is the third paragraph</p>
/* All <div> elements */
div {
  color: red;
}

/_ All elements with class="class1" _/
.class1 {
color: green;
}

/_ All <p> elements with class="class2" _/
p.class2 {
color: violet;
}
Ref : https://codepen.io/nrupuld/pen/zVweGK

Multiple Selectors, Same Properties (,)
The comma in a CSS selector separates multiple selectors within the same styles.

selector1, selector2 { style properties }
div, p {
  padding: 10px;
  font-size: 20px;
  margin: 0;
}
Ref : https://codepen.io/nrupuld/pen/xopQEZ

Adjacent Sibling Selector (+)
The adjacent sibling combinator (+) separates two selectors and matches the second element only if it
 immediately follows the first element, and both are children of the same parent element.

former_element + target_element { style properties }
Ref : https://codepen.io/nrupuld/pen/XLVyzm

General Sibling Selector (~)
The general sibling combinator (~) separates two selectors and matches the second element only if it follows
 the first element (though not necessarily immediately), and both are children of the same parent

former_element ~ target_element { style properties }
Ref : https://codepen.io/nrupuld/pen/pXpQLM

Child Combinator (>)
The child combinator (>) is placed between two CSS selectors. It matches only those elements matched by the 
second selector that are the children of elements matched by the first.

selector1 > selector2 { style properties }
Ref : https://codepen.io/nrupuld/pen/rEpQRL

Descendant Combinator ( )
The descendant combinator typically represented by a single space ( ) character combines two selectors such
 that elements matched by the second selector are selected if they have an ancestor element matching the 
 first selector.

selector1 selector2 { style properties }
Ref : https://codepen.io/nrupuld/pen/Oezaed



What does object-fit do?

The CSS object-fit property is used to specify how an <img> or <video> should be resized to fit its container.

This property tells the content to fill the container in a variety of ways; such as "preserve that aspect 
ratio" or "stretch up and take up as much space as possible".

You can read more about it here.

https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
https://www.w3schools.com/css/css3_object-fit.asp



What does rotate do?

The transform property applies a 2D or 3D transformation to an element. This property allows you to rotate,
 scale, move, skew, etc., elements.

rotate(angle) // Defines a 2D rotation, the angle is specified in the parameter
You can give it a try here : Defines a 2D rotation, the angle is specified in the parameter

For More Info Ref : https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate



What rule can be used to define animations


The @keyframes rule specifies the animation code.

The animation is created by gradually changing from one set of CSS styles to another.

During the animation, you can change the set of CSS styles many times.

Specify when the style change will happen in percent, or with the keywords "from" and "to", which is the 
same as 0% and 100%. 0% is the beginning of the animation, 100% is when the animation is complete.

Syntax :

@keyframes animationname {keyframes-selector {css-styles;}}
Take a look at following example.

For More info :
https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations



When working with attribute selectors, how can you select elements which contain a particular attribute value?


a[href*="en-US"] // selects an `a` tag which a particular href attribute value that has been asked


What does @media do?

The @media rule is used in media queries to apply different styles for different media types/devices.

Media queries can be used to check many things, such as:

width and height of the viewport
width and height of the device
orientation (is the tablet/phone in landscape or portrait mode?)
resolution
Using media queries are a popular technique for delivering a tailored style sheet (responsive web design) to
 desktops, laptops, tablets, and mobile phones.

You can also use media queries to specify that certain styles are only for printed documents or for screen 
readers (mediatype: print, screen, or speech).

In addition to media types, there are also media features. Media features provide more specific details to
 media queries, by allowing to test for a specific feature of the user agent or display device. For example,
  you can apply styles to only those screens that are greater, or smaller, than a certain width.

syntax :

body {
  background-color: lightblue;
}

@media screen and (min-width: 400px) {
  body {
    background-color: lightgreen;
  }
}

@media screen and (min-width: 800px) {
  body {
    background-color: lavender;
  }
}


What can be used to override properties of an element


To override the CSS properties of a class using another class, we can use the !important directive. In CSS,
 !important means “this is important”, and the property:value pair that has this directive is always applied 
 even if the other element has higher specificity.
Syntax :

element1 {
    property-x: value_y  !important; /* This will be applied. */
}
element2 {
    property-x: value_z; /* This will not be applied. */
}
html :
 <p class="my_fav_font my_para">Cascading Style Sheets,fondly referred to as CSS, is a..</p>

css :
.my_fav_font {
  font-family: 'Indie Flower', cursive !important;
  /* This will be applied. */
}

.my_para {
  font-family: 'Mansalva', cursive;
  /* This will not be applied. */
  text-align: justify;
  background-color: powderblue;
  font-size: 130%;
}


How can you select every alternate elements in a list of elements using css?
Syntax :

HTML

<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>10</li>
</ul>
CSS

ul{
  list-style-type: none;
  color: white;
}
li:nth-of-type(odd){ // or you can also use li:nth-child(odd)
  background-color:blue;
}
li:nth-of-type(even){
  background-color:red;
}



What is the ranking of selectors with respect to specificity

Ranking from Low To High

universal_selector, combinators selector, negation pseudo-class (:not) selector ( these selectors have no 
  effects on specificity )
element selector, pseudo element selector
class selector, attribute selector, pseudo-class contained inside the overall selector
id selector
inline styling


How can we apply same styles to multiple selectors?

To group CSS selectors in a style sheet, use commas to separate multiple grouped selectors in the style. In
 this example, the style affects the p and div elements:
div, p { color: #f00; }


What are the differences between relative and absolute in CSS?
Relative	Absolute
An element with position: relative; is positioned relative to its normal position.	An element with position:
 absolute; is positioned relative to the nearest positioned ancestor. However; if an absolute positioned 
 element has no positioned ancestors, it uses the document body, and moves along with page scrolling.
Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be 
adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the 
element.	Absolute positioned elements are removed from the normal flow, and can overlap elements.
example : https://www.w3schools.com/css/tryit.asp?filename=trycss_position_relative	example:
 https://www.w3schools.com/css/tryit.asp?filename=trycss_position_absolute








 What is CSS selector specificity and how does it work?
 
 The browser determines what styles to show on an element depending on the specificity of CSS rules. We 
 assume that the browser has already determined the rules that match a particular element. Among the 
 matching rules, the specificity, four comma-separate values, a, b, c, d are calculated for each rule 
 based on the following:
 
 a is whether inline styles are being used. If the property declaration is an inline style on the element, 
 a is 1, else 0.
 b is the number of ID selectors.
 c is the number of classes, attributes and pseudo-classes selectors.
 d is the number of tags and pseudo-elements selectors.
 The resulting specificity is not a score, but a matrix of values that can be compared column by column. 
 When comparing selectors to determine which has the highest specificity, look from left to right, and 
 compare the highest value in each column. So a value in column b will override values in columns c and d, 
 no matter what they might be. As such, specificity of 0,1,0,0 would be greater than one of 0,0,10,10.
 
 In the cases of equal specificity: the latest rule is the one that counts. If you have written the same
  rule into your stylesheet (regardless of internal or external) twice, then the lower rule in your style
   sheet is closer to the element to be styled, it is deemed to be more specific and therefore will be
    applied.
 
 I would write CSS rules with low specificity so that they can be easily overridden if necessary. When
  writing CSS UI component library code, it is important that they have low specificities so that users of 
  the library can override them without using too complicated CSS rules just for the sake of increasing 
  specificity or resorting to !important.
 
 References
 https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/
 https://www.sitepoint.com/web-foundations/specificity/
 What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
 Resetting - Resetting is meant to strip all default browser styling on elements. For e.g. margins, 
 paddings, font-sizes of all elements are reset to be the same. You will have to redeclare styling for 
 common typographic elements.
 Normalizing - Normalizing preserves useful default styles rather than "unstyling" everything. It also 
 corrects bugs for common browser dependencies.
 I would choose resetting when I have a very customized or unconventional site design such that I need 
 to do a lot of my own styling and do not need any default styling to be preserved.
 
 References
 https://stackoverflow.com/questions/6887336/what-is-the-difference-between-normalize-css-and-reset-css
 
 
 
 
 
 
 Describe floats and how they work.
 Float is a CSS positioning property. Floated elements remain a part of the flow of the page, and will 
 affect the positioning of other elements (e.g. text will flow around floated elements), unlike position: 
 absolute elements, which are removed from the flow of the page.
 
 The CSS clear property can be used to be positioned below left/right/both floated elements.
 
 If a parent element contains nothing but floated elements, its height will be collapsed to nothing. It 
 can be fixed by clearing the float after the floated elements in the container but before the close of 
 the container.
 
 The .clearfix hack uses a clever CSS pseudo selector (::after) to clear floats. Rather than setting the
  overflow on the parent, you apply an additional class clearfix to it. Then apply this CSS:
 
 .clearfix::after {
   content: ' ';
   visibility: hidden;
   display: block;
   height: 0;
   clear: both;
 }
 
 Alternatively, give overflow: auto or overflow: hidden property to the parent element which will
  establish a new block formatting context inside the children and it will expand to contain its children.
 
 References
 https://css-tricks.com/all-about-floats/
 
 
 
 
 
 
 Describe z-index and how stacking context is formed.
 The z-index property in CSS controls the vertical stacking order of elements that overlap. z-index only 
 affects elements that have a position value which is not static.
 
 Without any z-index value, elements stack in the order that they appear in the DOM (the lowest one down at 
  the same hierarchy level appears on top). Elements with non-static positioning (and their children) will
   always appear on top of elements with default static positioning, regardless of HTML hierarchy.
 
 A stacking context is an element that contains a set of layers. Within a local stacking context, the 
 z-index values of its children are set relative to that element rather than to the document root. Layers 
 outside of that context — i.e. sibling elements of a local stacking context — can't sit between layers 
 within it. If an element B sits on top of element A, a child element of element A, element C, can never 
 be higher than element B even if element C has a higher z-index than element B.
 
 Each stacking context is self-contained - after the element's contents are stacked, the whole element is 
 considered in the stacking order of the parent stacking context. A handful of CSS properties trigger a 
 new 
 stacking context, such as opacity less than 1, filter that is not none, and transform that is notnone.
 
 Note: What exactly qualifies an element to create a stacking context is listed in this long set of rules.
 
 References
 https://css-tricks.com/almanac/properties/z/z-index/
 https://philipwalton.com/articles/what-no-one-told-you-about-z-index/
 https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context
 
 
 
 
 
 
 
 
 
 
 
 
 Describe Block Formatting Context (BFC) and how it works.
 A Block Formatting Context (BFC) is part of the visual CSS rendering of a web page in which block boxes are
  laid out. Floats, absolutely positioned elements, inline-blocks, table-cells, table-captions, and elements
   with overflow other than visible (except when that value has been propagated to the viewport) establish 
   new block formatting contexts.
 
 Knowing how to establish a block formatting context is important, because without doing so, the containing
  box will not contain floated children. This is similar to collapsing margins, but more insidious as you 
  will find entire boxes collapsing in odd ways.
 
 A BFC is an HTML box that satisfies at least one of the following conditions:
 
 The value of float is not none.
 The value of position is neither static nor relative.
 The value of display is table-cell, table-caption, inline-block, flex, or inline-flex, grid, or 
 inline-grid.
 The value of overflow is not visible.
 In a BFC, each box's left outer edge touches the left edge of the containing block 
 (for right-to-left formatting, right edges touch).
 
 Vertical margins between adjacent block-level boxes in a BFC collapse. Read more on collapsing margins.
 
 References
 https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context
 https://www.sitepoint.com/understanding-block-formatting-contexts-in-css/
 What are the various clearing techniques and which is appropriate for what context?
 Empty div method - <div style="clear:both;"></div>.
 Clearfix method - Refer to the .clearfix class above.
 overflow: auto or overflow: hidden method - Parent will establish a new block formatting context and
  expand to contains its floated children.
 In large projects, I would write a utility .clearfix class and use them in places where I need it. 
 overflow: hidden might clip children if the children is taller than the parent and is not very ideal.
 
 Explain CSS sprites, and how you would implement them on a page or site.
 CSS sprites combine multiple images into one single larger image. It is a commonly-used technique for
  icons (Gmail uses it). How to implement it:
 
 Use a sprite generator that packs multiple images into one and generate the appropriate CSS for it.
 Each image would have a corresponding CSS class with background-image, background-position and
  background-size properties defined.
 To use that image, add the corresponding class to your element.
 Advantages:
 
 Reduce the number of HTTP requests for multiple images (only one single request is 
  required per spritesheet). But with HTTP2, loading multiple images is no longer much of an issue.
 Advance downloading of assets that won't be downloaded until needed, such as images that only appear 
 upon :hover pseudo-states. Blinking wouldn't be seen.
 References
 https://css-tricks.com/css-sprites/
 How would you approach fixing browser-specific styling issues?
 After identifying the issue and the offending browser, use a separate style sheet that only loads when
  that specific browser is being used. This technique requires server-side rendering though.
 Use libraries like Bootstrap that already handles these styling issues for you.
 Use autoprefixer to automatically add vendor prefixes to your code.
 Use Reset CSS or Normalize.css.
 If you're using Postcss (or a similar transpiling library), there may be plugins which allow you to opt
  in for using modern CSS syntax (and even W3C proposals) that will transform those sections of your code
   into corresponding safe code that will work in the targets you've used.
 How do you serve your pages for feature-constrained browsers? What techniques/processes do you use?
 Graceful degradation - The practice of building an application for modern browsers while ensuring it 
 remains functional in older browsers.
 Progressive enhancement - The practice of building an application for a base level of user experience,
  but adding functional enhancements when a browser supports it.
 Use caniuse.com to check for feature support.
 Autoprefixer for automatic vendor prefix insertion.
 Feature detection using Modernizr.
 Use CSS Feature queries @support
 What are the different ways to visually hide content (and make it available only for screen readers)?
 These techniques are related to accessibility (a11y).
 
 width: 0; height: 0. Make the element not take up any space on the screen at all, resulting in not showing
  it.
 position: absolute; left: -99999px. Position it outside of the screen.
 text-indent: -9999px. This only works on text within the block elements. This is a widely used and famous 
 trick, but it comes with some downsides like causing performance issues, so you might want to consider 
 using text-indent: 100% instead.
 Meta tags. For example by using Schema.org, RDF, and JSON-LD.
 WAI-ARIA. A W3C technical specification that specifies how to increase the accessibility of web pages.
 Even if WAI-ARIA is the ideal solution, I would go with the absolute positioning approach, as it has the
  least caveats, works for most elements and it's an easy technique.
 
 References
 https://www.w3.org/TR/wai-aria-1.1/
 https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA
 http://a11yproject.com/
 https://www.zeldman.com/2012/03/01/replacing-the-9999px-hack-new-image-replacement/
 Have you ever used a grid system, and if so, what do you prefer?
 Before Flex became popular (around 2014), the float-based grid system was the most reliable because it
  still has the most browser support among the alternative existing systems (flex, grid). Bootstrap was 
  using the float approach until Bootstrap 4 which switched to the flex-based approach. As of writing 
  (2020), flex is the recommended approach for building grid systems and has decent browser support.
 
 For the adventurous, they can look into CSS Grid Layout, which uses the shiny new grid property; it is
  even better than flex for building grid layouts and will be the de facto way to do so in the future.
 
 Have you used or implemented media queries or mobile-specific layouts/CSS?
 Yes. An example would be transforming a stacked pill navigation into a fixed-bottom tab navigation beyond
  a certain breakpoint.
 
 Are you familiar with styling SVG?
 Yes, there are several ways to color shapes (including specifying attributes on the object) using inline
  CSS, an embedded CSS section, or an external CSS file. Most SVG you'll find around the web use inline 
  CSS, but there are advantages and disadvantages associated with each type.
 
 Basic coloring can be done by setting two attributes on the node: fill and stroke. fill sets the color 
 inside the object and stroke sets the color of the line drawn around the object. You can use the same 
 CSS color naming schemes that you use in HTML, whether that's color names (that is red), RGB values 
 (that is rgb(255,0,0)), Hex values, RGBA values, etc.
 
 <rect
   x="10"
   y="10"
   width="100"
   height="100"
   stroke="blue"
   fill="purple"
   fill-opacity="0.5"
   stroke-opacity="0.8" />
 
 The above fill="purple" is an example of a presentational attribute. Interestingly, and unlike inline styles like style="fill: purple" which also happens to be an attribute, presentational attributes can be overriden by CSS styles defined in a stylesheet. So, if you did something like svg { fill: blue; } it would override the purple fill we've defined.
 
 References
 https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Fills_and_Strokes
 
 
 
 Can you give an example of an @media property other than screen?
 Yes, there are four types of @media properties (including screen):
 
 all - for all media type devices
 print - for printers
 speech - for screenreaders that "reads" the page out loud
 screen - for computer screens, tablets, smart-phones etc.
 Here is an example of print media type's usage:
 
 @media print {
   body {
     color: black;
   }
 }
 
 References
 https://developer.mozilla.org/en-US/docs/Web/CSS/@media#Syntax
 
 
 
 What are some of the "gotchas" for writing efficient CSS?
 Firstly, understand that browsers match selectors from rightmost (key selector) to left. 
 Browsers filter out elements in the DOM according to the key selector and traverse up its
  parent elements to determine matches. The shorter the length of the selector chain, the faster the 
  
  browser can determine if that element matches the selector. Hence avoid key selectors that are tag and
   universal selectors. They match a large number of elements and browsers will have to do more work in
    determining if the parents do match.
 
 BEM (Block Element Modifier) methodology recommends that everything has a single class, and, where you
  need hierarchy, that gets baked into the name of the class as well, this naturally makes the selector 
  efficient and easy to override.
 
 Be aware of which CSS properties trigger reflow, repaint, and compositing. Avoid writing styles that 
 change the layout (trigger reflow) where possible.
 
 References
 https://developers.google.com/web/fundamentals/performance/rendering/
 https://csstriggers.com/
 
 
 
 
 What are the advantages/disadvantages of using CSS preprocessors?
 Advantages:
 
 CSS is made more maintainable.
 Easy to write nested selectors.
 Variables for consistent theming. Can share theme files across different projects.
 Mixins to generate repeated CSS.
 Sass features like loops, lists, and maps can make configuration easier and less verbose.
 Splitting your code into multiple files. CSS files can be split up too but doing so will require 
 an HTTP request to download each CSS file.
 Disadvantages:
 
 Requires tools for preprocessing. Re-compilation time can be slow.
 Not writing currently and potentially usable CSS. For example, by using something like postcss-loader
  with webpack, you can write potentially future-compatible CSS, allowing you to use things like CSS 
  variables instead of Sass variables. Thus, you're learning new skills that could pay off if/when they
   become standardized.
 
 
 
 
   Describe what you like and dislike about the CSS preprocessors you have used.
 Likes:
 
 Mostly the advantages mentioned above.
 Less is written in JavaScript, which plays well with Node.
 Dislikes:
 
 I use Sass via node-sass, which is a binding for LibSass written in C++. I have to frequently 
 recompile it when switching between node versions.
 In Less, variable names are prefixed with @, which can be confused with native CSS keywords like
  @media, @import and @font-face rule.
 How would you implement a web design comp that uses non-standard fonts?
 Use @font-face and define font-family for different font-weights.
 
 Explain how a browser determines what elements match a CSS selector.
 This part is related to the above about writing efficient CSS. Browsers match selectors from rightmost 
 (key selector) to left. Browsers filter out elements in the DOM according to the key selector and
  traverse up its parent elements to determine matches. The shorter the length of the selector chain, 
  the faster the browser can determine if that element matches the selector.
 
 For example with this selector p span, browsers firstly find all the <span> elements and traverse up
  its parent all the way up to the root to find the <p> element. For a particular <span>, as soon as
   it finds a <p>, it knows that the <span> matches and can stop its matching.
 
 References
 https://stackoverflow.com/questions/5797014/why-do-browsers-match-css-selectors-from-right-to-left
 
 
 
 
 Describe pseudo-elements and discuss what they are used for.
 A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected
  element(s). They can be used for decoration (:first-line, :first-letter) or adding elements to the markup
   (combined with content: ...) without having to modify the markup (:before, :after).
 
 :first-line and :first-letter can be used to decorate text.
 Used in the .clearfix hack as shown above to add a zero-space element with clear: both.
 Triangular arrows in tooltips use :before and :after. Encourages separation of concerns because the 
 triangle is considered part of styling and not really the DOM.
 References
 https://css-tricks.com/almanac/selectors/a/after-and-before/
 
 
 
 
 Explain your understanding of the box model and how you would tell the browser in CSS to render your layout
  in different box models.
 The CSS box model describes the rectangular boxes that are generated for elements in the document tree and 
 laid out according to the visual formatting model. Each box has a content area (e.g. text, an image, etc.)
  and optional surrounding padding, border, and margin areas.
 
 The CSS box model is responsible for calculating:
 
 How much space a block element takes up.
 Whether or not borders and/or margins overlap, or collapse.
 A box's dimensions.
 The box model has the following rules:
 
 The dimensions of a block element are calculated by width, height, padding, borders, and margins.
 If no height is specified, a block element will be as high as the content it contains, plus padding 
 (unless there are floats, for which see below).
 If no width is specified, a non-floated block element will expand to fit the width of its parent minus 
 padding.
 The height of an element is calculated by the content's height.
 The width of an element is calculated by the content's width.
 By default, paddings and borders are not part of the width and height of an element.
 References
 https://www.smashingmagazine.com/2010/06/the-principles-of-cross-browser-css-coding/#understand-the-css-box-model




 What does * { box-sizing: border-box; } do? What are its advantages?
 By default, elements have box-sizing: content-box applied, and only the content size is being accounted 
 for.
 box-sizing: border-box changes how the width and height of elements are being calculated, border and 
 padding are also being included in the calculation.
 The height of an element is now calculated by the content's height + vertical padding + vertical border 
 width.
 The width of an element is now calculated by the content's width + horizontal padding + horizontal border
  width.
 Taking into account paddings and borders as part of our box model resonates better with how designers 
 actually imagine content in grids.
 References
 https://www.paulirish.com/2012/box-sizing-border-box-ftw/
 
 
 
 
 What is the CSS display property and can you give a few examples of its use?
 none, block, inline, inline-block, flex, grid, table, table-row, table-cell, list-item.
 display	Description
 none	Does not display an element (the element no longer affects the layout of the document). All child 
 element are also no longer displayed. The document is rendered as if the element did not exist in the 
 document tree
 block	The element consumes the whole line in the block direction (which is usually horizontal)
 inline	Elements can be laid out beside each other
 inline-block	Similar to inline, but allows some block properties like setting width and height
 table	Behaves like the <table> element
 table-row	Behaves like the <tr> element
 table-cell	Behaves like the <td> element
 list-item	Behaves like a <li> element which allows it to define list-style-type and 
 list-style-position
 What's the difference between inline and inline-block?
 I shall throw in a comparison with block for good measure.
 
 block	inline-block	inline
 Size	Fills up the width of its parent container.	Depends on content.	Depends on content.
 Positioning	Start on a new line and tolerates no HTML elements next to it (except when you add float)	
 Flows along with other content and allows other elements beside it.	Flows along with other content and 
 allows other elements beside it.
 Can specify width and height	Yes	Yes	No. Will ignore if being set.
 Can be aligned with vertical-align	No	Yes	Yes
 Margins and paddings	All sides respected.	All sides respected.	Only horizontal sides respected.
  Vertical sides, if specified, do not affect layout. Vertical space it takes up depends on line-height, 
  even though the border and padding appear visually around the content.
 Float	-	-	Becomes like a block element where you can set vertical margins and paddings.
 What's the difference between a relative, fixed, absolute and statically positioned element?
 A positioned element is an element whose computed position property is either relative, absolute, fixed
  or sticky.
 
 static - The default position; the element will flow into the page as it normally would. The top, right,
  bottom, left and z-index properties do not apply.
 relative - The element's position is adjusted relative to itself, without changing layout 
 (and thus leaving
   a gap for the element where it would have been had it not been positioned).
 absolute - The element is removed from the flow of the page and positioned at a specified position relative
  to its closest positioned ancestor if any, or otherwise relative to the initial containing block. 
  Absolutely positioned boxes can have margins, and they do not collapse with any other margins. These 
  elements do not affect the position of other elements.
 fixed - The element is removed from the flow of the page and positioned at a specified position 
 relative to the viewport and doesn't move when scrolled.
 sticky - Sticky positioning is a hybrid of relative and fixed positioning. The element is treated as 
 relative positioned until it crosses a specified threshold, at which point it is treated as fixed
  positioned.
 References
 https://developer.mozilla.org/en/docs/Web/CSS/position
 What existing CSS frameworks have you used locally, or in production? How would you change/improve them?
 Bootstrap - Slow release cycle. Bootstrap 4 has been in alpha for almost 2 years. Add a spinner button 
 component, as it is widely used.
 Semantic UI - Source code structure makes theme customization extremely hard to understand. Its
  unconventional theming system is a pain to customize. Hardcoded config path within the vendor library. 
  Not well-designed for overriding variables unlike in Bootstrap.
 Bulma - A lot of non-semantic and superfluous classes and markup required. Not backward compatible.
  Upgrading versions breaks the app in subtle manners.
 Have you played around with the new CSS Flexbox or Grid specs?
 Yes. Flexbox is mainly meant for 1-dimensional layouts while Grid is meant for 2-dimensional layouts.
 
 Flexbox solves many common problems in CSS, such as vertical centering of elements within a container, 
 sticky footer, etc. Bootstrap and Bulma are based on Flexbox, and it is probably the recommended way to 
 create layouts these days. Have tried Flexbox before but ran into some browser incompatibility issues 
 (Safari) in using flex-grow, and I had to rewrite my code using inline-blocks and math to calculate the 
 widths in percentages, it wasn't a nice experience.
 
 Grid is by far the most intuitive approach for creating grid-based layouts (it better be!) but browser 
 support is not wide at the moment.
 
 References
 https://philipwalton.github.io/solved-by-flexbox/
 Can you explain the difference between coding a website to be responsive versus using a mobile-first 
 strategy?
 Note that these two 2 approaches are not exclusive.
 
 Making a website responsive means that some elements will respond by adapting its size or other 
 functionality according to the device's screen size, typically the viewport width, through CSS media 
 queries, for example, making the font size smaller on smaller devices.
 
 @media (min-width: 601px) {
   .my-class {
     font-size: 24px;
   }
 }
 
 @media (max-width: 600px) {
   .my-class {
     font-size: 12px;
   }
 }
 
 A mobile-first strategy is also responsive, however it agrees we should default and define all the styles 
 for mobile devices, and only add specific responsive rules to other devices later. Following the previous
  example:
 
 .my-class {
   font-size: 12px;
 }
 
 @media (min-width: 600px) {
   .my-class {
     font-size: 24px;
   }
 }
 
 A mobile-first strategy has 2 main advantages:
 
 It's more performant on mobile devices, since all the rules applied for them don't have to be validated 
 against any media queries.
 It forces to write cleaner code in respect to responsive CSS rules.
 How is responsive design different from adaptive design?
 Both responsive and adaptive design attempt to optimize the user experience across different devices, 
 adjusting for different viewport sizes, resolutions, usage contexts, control mechanisms, and so on.
 
 Responsive design works on the principle of flexibility - a single fluid website that can look good on 
 any device. Responsive websites use media queries, flexible grids, and responsive images to create a user
  experience that flexes and changes based on a multitude of factors. Like a single ball growing or 
  shrinking to fit through several different hoops.
 
 Adaptive design is more like the modern definition of progressive enhancement. Instead of one flexible 
 design, adaptive design detects the device and other features and then provides the appropriate feature
  and layout based on a predefined set of viewport sizes and other characteristics. The site detects the
   type of device used and delivers the pre-set layout for that device. Instead of a single ball going 
   through several different-sized hoops, you'd have several different balls to use depending on the hoop 
   size.
 
 Both have these methods have some issues that need to be weighed:
 
 Responsive design can be quite challenging, as you're essentially using a single albeit responsive layout 
 to fit all situations. How to set the media query breakpoints is one such challenge. Do you use standardized breakpoint values? Or, do you use breakpoints that make sense to your particular layout? What if that layout changes?
 Adaptive design generally requires user agent sniffing, or DPI detection, etc., all of which can prove 
 unreliable.
 References
 https://developer.mozilla.org/en-US/docs/Archive/Apps/Design/UI_layout_basics/Responsive_design_versus_adaptive_design
 http://mediumwell.com/responsive-adaptive-mobile/
 https://css-tricks.com/the-difference-between-responsive-and-adaptive-design/
 
 
 
 Have you ever worked with retina graphics? If so, when and what techniques did you use?
 Retina is just a marketing term to refer to high resolution screens with a pixel ratio bigger than 1. 
 The key thing to know is that using a pixel ratio means these displays are emulating a lower resolution 
 screen in order to show elements with the same size. Nowadays we consider all mobile devices retina defacto
  displays.
 
 Browsers by default render DOM elements according to the device resolution, except for images.
 
 In order to have crisp, good-looking graphics that make the best of retina displays we need to use high 
 resolution images whenever possible. However using always the highest resolution images will have an 
 impact on performance as more bytes will need to be sent over the wire.
 
 To overcome this problem, we can use responsive images, as specified in HTML5. It requires making available
  different resolution files of the same image to the browser and let it decide which image is best, using
   the html attribute srcset and optionally sizes, for instance:
 
 <div responsive-background-image>
   <img
     src="/images/test-1600.jpg"
     sizes="
       (min-width: 768px) 50vw,
       (min-width: 1024px) 66vw,
       100vw"
     srcset="
       /images/test-400.jpg   400w,
       /images/test-800.jpg   800w,
       /images/test-1200.jpg 1200w
     " />
 </div>
 
 It is important to note that browsers which don't support HTML5's srcset (i.e. IE11) will ignore it 
 and use
  src instead. If we really need to support IE11 and we want to provide this feature for performance 
  reasons, we can use a JavaScript polyfill, e.g. Picturefill (link in the references).
 
 For icons, I would also opt to use SVGs and icon fonts where possible, as they render very crisply 
 regardless of resolution.
 
 References
 https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/
 http://scottjehl.github.io/picturefill/
 https://aclaes.com/responsive-background-images-with-srcset-and-sizes/
 Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why?
 translate() is a value of CSS transform. Changing transform or opacity does not trigger browser reflow or 
 repaint but does trigger compositions; whereas changing the absolute positioning triggers reflow. transform
  causes the browser to create a GPU layer for the element but changing absolute positioning properties uses
   the CPU. Hence translate() is more efficient and will result in shorter paint times for smoother 
   animations.
 
 When using translate(), the element still occupies its original space (sort of like position: relative), 
 unlike in changing the absolute positioning.
 
























*/