// hello
// console.log("Hello World");

// get the result element by id
// document.getElementById('h1').innerHTML = "Gidday mate";
// document.getElementById('result').innerHTML = "<h2>Hello</h2>" + "<p>Another bit of text</p>" +
// "<h3>An h3</h3>";

// document.getElementById('result').innerHTML += "<p>Here's another thing</p>"

// variables
// var pi = 3.14;
// var streetNumber = 11;
// var pet = "Cat";
// var piTimesThree = pi * 3;
// console.log(piTimesThree);
//
// var petGreeting = "Hello " + pet;
// console.log(petGreeting);
//
// document.getElementById('result').innerHTML = "<h1>" + pi + "</h1>";
// document.getElementById('location').innerHTML = "Your street number is " + (streetNumber + 2);
// // console.log(pet);
//
// var celcius = 90;
// var farenheight = (celcius * 1.8) + 32;
// console.log(farenheight);

// --Activity--
// - Use var and innerHTML to show your name, age and favorite food in an "about-me" div
// - The div should contain an h2 saying "About me"
// - Show the data in an unordered list (ul)

// var name = "tim";
// var age = 25;
// var food ="pho";
//
// document.getElementById('about-me').innerHTML = "<h2>About me</h2>";
// document.getElementById('about-me').innerHTML += "<ul>" +
// "<li>Name: " + name + "</li>" +
// "<li>Age: " + age + "</li>" +
// "<li>Favorite Food: " + food + "</li>" +
// "</ul>"
//
// var vaccinePass = true;
// var hungry = true;
// console.log("Am I hungry now? " + hungry);

// var yourName = prompt("What is your name?");
// var hairColour = prompt("What is your hair colour?");
// document.getElementById('result').innerHTML = "Hello " + yourName + "<p>Your hair colour is: " + hairColour + "</p>";

// Activity:
// The app will ask for two numbers.
// It will then multiply the numbers together.
// The result will show in the console log, in the format
// "x * y ="

// var x = prompt("Number 1?");
// var y = prompt("Number 2?");
// var result = x * y;
// console.log(x + " times " + y + " is " + result);

// Activity:
// Ask the user for the temperature in celcius
// Show the temperature on the screen in farenheight
// In the format "12 degrees c = 45 deg farenheight".
//
// If you've finished, create a style.css and give your
// temperature classes to style it
//
// var string = "<h1 class='big'>Big Text</h1>";

// var c = prompt("What's the temperature");
// var f = (c * 1.8) + 32;
// var className = prompt("What class do you want to give this element?");

// document.getElementById('result').innerHTML = "<div class=" + className + ">" + c + " degrees celcius is equal to " +
// f + " degrees f </div>";

// Get a prompt asking for a colour either blue, red or green
// Put this class on the result element to change it's color based on
// the user's input

function greeting() {
  console.log("Hey man");
};

greeting();

var x = 4;
var y = 6;
// calling the function
divide();

function divide() {
  var result = x / y;
  console.log(result);
};


Prompt the user for a name and an age.
Show the user's name and age on the screen.
Use a function to show the data.
Tip: show it through the console log first.
