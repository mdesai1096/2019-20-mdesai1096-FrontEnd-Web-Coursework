# Performance Car Site

## Resources
[HTML Course](https://www.codecademy.com/learn/learn-html)

[JavaScript course](https://www.codecademy.com/learn/introduction-to-javascript)

[Flexbox Tutorial](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)

[css refernce guide 2](https://css-tricks.com/almanac/)

[Flexbox ignore H1 tag](https://codepen.io/Paulie-D/pen/ameYKv)

[Images taken from](https://www.autocar.co.uk/)
## Slideshow
[Slideshow Code](https://www.w3schools.com/howto/howto_js_slideshow.asp)
I used the above W3schools tutorial for my slideshow but did amend it for ES6 JavaScript and for multiple simultaneous slideshow's.
## Navbar
[Nav Bar Tutorial](https://www.w3schools.com/howto/howto_js_topnav.asp)

## API - Fuel Price

I have used an API that find the prices of fuel at local petrol stations
As it is an API that is free to use on a trial, there are some limitations. Only postcode will the letter 'a' in it will return a result
[API Data Source](https://ukvehicledata.co.uk/Our-VRM-Data-apis)

Some postcodes to try:

* LE2 7AJ
* LE11 3QA
* TR26 3AG
* BA80TN
* W1H 6AY

### Issues
The code bellow show my first attempts at trying to trying to bring over the api data. I had issues as the data was nested as shown in the screenshot below. It was not displaying it as I wanted with a lot of duplicated data. Eventually I adapted the wikipedia solution given in the lecture.

First attempt was not getting all the data:

![Screenshot of Code 1st attempt](evidence/apiineffective.JPG)
![Screenshot of Results 1st attempt](evidence/apidisplayissues.JPG)

Second attempt was duplicating the name of the fuel station:

![Screenshot of Code 2nd attempt](evidence/apiineffective2.JPG)
![Screenshot of Results 2nd attempt](evidence/apidisplayissues2.JPG)

Nested API JSON Data:

![Screenshot of nested data from api](evidence/nesteddata.JPG)

## User Feedback
Various users had used to me website.
The general feedback was:
* Navigation was clear
* Easy to read information. Not overly cluttered,
* Instead of having a menu button would be better to have an hamburger icon
* Could use videos and engine noises of cars
* Have the main logo as the return to home button
