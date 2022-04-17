
//get the number of drum buttons and subtract by one to get their array values
var numBtn = document.querySelectorAll(".drum").length - 1;

// For loop which loops through all buttons with the "drum" class
// Specifically, all drum buttons assigned letters ["w", "a", "s", "d", "j", "k", "l"]
for (var i = 0; i <= numBtn; i++) {
  // Listens for clicks on the .drum buttons. Technically one at a time, but because of the for loop it applies to all .drum buttons
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // Grabs the actual text visible on the webpage, in this case the button displayed on each drum
    var btnInnerHTML = this.innerHTML;
    // Calls the function to generate sound and passes on the letter or "key"
    makeSound(btnInnerHTML);
    buttonAnimation(btnInnerHTML);
  });
}

// Listens for keypresses/keydowns
// Passes "e" or "event", in this case they key pressed
// e.key captures the "key" property of the keypress event, which is simply the letter/direct value of the key
// e.g. e.key == "e", "enter", "t", "5", "J"
// Capturing it with console.log() displays all listed properties, including the "key" property
document.addEventListener("keydown", function(e) {
  var key = e.key
  makeSound(key)
  buttonAnimation(key);
});


// Functions

// Function that automates generating sound from drumbs
// Passes the value of a "key", one of the letters assigned to any of the drums
function makeSound(key) {
  // Switch that checks for if the passed key/letter is any of the listed ones which correspond with the .drum buttons
  switch (key) {

    case "w":
    var snareSound = new Audio("sounds/snare.mp3");
    snareSound.play();

      break;

    case "a":
    var tom1Sound = new Audio("sounds/tom-1.mp3");
    tom1Sound.play();

      break;

    case "s":
    var tom2Sound = new Audio("sounds/tom-2.mp3");
    tom2Sound.play();

      break;

    case "d":
    var kickSound = new Audio("sounds/kick-bass.mp3");
    kickSound.play();

      break;

    case "j":
    var crashSound = new Audio("sounds/crash.mp3");
    crashSound.play();

      break;

    case "k":
    var tom3Sound = new Audio("sounds/tom-3.mp3");
    tom3Sound.play();

      break;

    case "l":
    var tom4Sound = new Audio("sounds/tom-4.mp3");
    tom4Sound.play();

      break;

    default: console.log("The key " + key + " is not a drum button.");

  }
}


// Creates animation for buttons when pressed either with "click" or "keydown" events
function buttonAnimation(currentKey) {
  // querySelector selects the key being pressed/clicked by passing the currentKey argumen
  var activeButton = document.querySelector("." + currentKey);
  // Adds the class "pressed" which is in CSS stylesheet
  activeButton.classList.add("pressed");
  // setTimeout allows a set function to run (first arg) after a set amount of milliseconds (second arg)
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);


}
