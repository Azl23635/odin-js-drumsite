const drums = document.querySelectorAll('.drum');

//Translates sound description to audible sound
async function drumHandler(e) {
  let drumPressed = '';
  if (arguments.length > 1) {
    drumPressed = arguments[0];
  } else {
    drumPressed = arguments[0].target.id;
  }
  let pressedDiv = document.getElementsByClassName(drumPressed); //---Handles animation for key press
  pressedDiv[0].classList.toggle('keypress'); //---

  let audio = new Audio(`sounds/${drumPressed}.wav`);
  audio.play();

  await new Promise((r) => setTimeout(r, 50)); //---
  pressedDiv[0].classList.toggle('keypress'); //----
}

//Translates keypress to relevant sound description
function keydownHandler(e) {
  if (e.repeat) {
    return 0;
  }
  let keyToDrum = '';
  switch (e.key) {
    case 'a':
      keyToDrum = 'clap';
      break;
    case 's':
      keyToDrum = 'hihat';
      break;
    case 'd':
      keyToDrum = 'kick';
      break;
    case 'f':
      keyToDrum = 'openhat';
      break;
    case 'g':
      keyToDrum = 'boom';
      break;
    case 'h':
      keyToDrum = 'ride';
      break;
    case 'j':
      keyToDrum = 'snare';
      break;
    case 'k':
      keyToDrum = 'tom';
      break;
    case 'l':
      keyToDrum = 'tink';
      break;
    default:
      return 0;
  }
  drumHandler(keyToDrum, 'keyPressFlag');
}

//Keypress event listener
addEventListener('keydown', (e) => {
  keydownHandler(e);
});

//Mouse click event listener
drums.forEach((drum) => {
  drum.addEventListener('click', (e) => {
    drumHandler(e);
  });
});
