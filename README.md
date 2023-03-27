# Digital-Clock
This is HTML, CSS and JavaScript code for creating a digital clock designed using a series of bars to form numbers for hours, minutes, and seconds.

The clock is centered on the page using flexbox and has a dark background with a light border. The bars are created using absolute positioning and clip-path to form the numbers. The color of the bars is changed using CSS variables.

The colon between the numbers is created using two blocks that are rotated.

The JavaScript code defines an array of objects called "lights" that contains the IDs of the different light bars that make up the numbers on the clock display.

The "lightOn" function is then defined to turn on the appropriate light bars for a given number (passed in as "currNum") on a given slot (specified by the CSS selector in "numSlot").

The setInterval function is used to update the clock display every second. It gets the current time using the Date() constructor and extracts the hours, minutes, and seconds.

It then calls the "lightOn" function for each digit of the time, passing in the appropriate light bar IDs to turn on. The CSS class "light-on" is added to the appropriate bars to turn them on, and any previously lit bars are turned off by removing the class.
