function myEvent(event) {
  let groupOfKeys = document.getElementById('keyHolder');
  let indivisualKey = groupOfKeys.children;
  for (let i = 0; i < indivisualKey.length; i++) {
    if (indivisualKey[i].getAttribute('id') == event.keyCode) {
      let id = indivisualKey[i].getAttribute('id') + '1';
      let audio = document.getElementById(id);
      audio.currentTime = 0;
      audio.play();
      indivisualKey[i].classList.add('keyAnimations');
      function removeTransition(event) {
        if (event.propertyName == 'width') {
          indivisualKey[i].classList.remove('keyAnimations');
        }
      }
      indivisualKey[i].addEventListener('transitionend', removeTransition);
    }
  }
}

window.addEventListener('keydown', myEvent);
