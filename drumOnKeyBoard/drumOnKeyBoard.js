function playDrumSound(event) {
  let indivisualKey = document.getElementById(event.keyCode);
  let audio = document.getElementById(event.keyCode + '1');
  if (audio == null) return;
  audio.currentTime = 0;
  audio.play();
  indivisualKey.classList.add('keyTransition');
  function removeKeyTransition(event) {
    if (event.propertyName == 'width') {
      indivisualKey.classList.remove('keyTransition');
    }
  }
  indivisualKey.addEventListener('transitionend', removeKeyTransition);
}
window.addEventListener('keydown', playDrumSound);
