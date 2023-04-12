


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
SVG stands for Scalable Vector Graphics. SVG is used to define vector-based graphics for the Web.
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





*/