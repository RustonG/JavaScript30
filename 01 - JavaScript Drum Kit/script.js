function findKeyCode(event) {
  return event.key.toUpperCase().charCodeAt();
}

function selectKeyDiv(keyCode) {
  return document.querySelector(`div[data-key='${keyCode}']`);
}

function playSound(event) {
  const keyCode = findKeyCode(event);
  const keyDiv = selectKeyDiv(keyCode);
  const audio = document.querySelector(`audio[data-key='${keyCode}']`);
  if (!audio) return;

  // This lets same audio start playing even if the last one hasn't finished yet
  audio.currentTime = 0;
  audio.play();
  keyDiv.classList.add('playing');
};

function removePlaying(event) {
  const keyCode = findKeyCode(event);
  const keyDiv = selectKeyDiv(keyCode);
  if (!keyDiv) return;
  keyDiv.classList.remove('playing');
};

window.addEventListener('keydown', playSound);
window.addEventListener('keyup', removePlaying);