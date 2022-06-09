/////////// Variables Section ////////////////
var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var snare = new Audio("sounds/snare.mp3");
var crash = new Audio("sounds/crash.mp3");
var kick = new Audio("sounds/kick-bass.mp3");

// Handdle Clicks & Press Functions /////////////////////////////

function handleInteraction(key) {

  switch (key) {
    case "w":
      tom1.play();
      break;
    case "a":
      tom2.play();
      break;
    case "s":
      tom3.play();
      break;
    case "d":
      tom4.play();
      break;
    case "j":
      crash.play();
      break;
    case "k":
      snare.play();
      break;
    case "l":
      kick.play();
      break;

    default: console.log(buttonInner);
  };
};

  ////////////// Handles Animmations ///////////////////////////////
  function makeAnimations(keyPressed){
    var key = document.querySelector("." + keyPressed);
    key.classList.add("pressed");
    function shadowRemove(){
      key.classList.remove("pressed")
    };
    setTimeout(shadowRemove,100);
  };


  //////////////////////////////////////////////////////////////////

  // Main  Section
  var buttons = document.querySelectorAll(".drum");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (){
      var buttonPressed = this.innerHTML;
      handleInteraction(buttonPressed);
      makeAnimations(buttonPressed);
    });
  }
  document.addEventListener("keydown", function(event){
    handleInteraction(event.key);
    makeAnimations(event.key);
  });
