function myEvent(event) {
  console.log(event.keyCode);
  let getAudioElements = document.getElementById('getAudio');
  for (let i = 0; i < getAudioElements.children.length; i++) {
    if (getAudioElements.children[i].getAttribute('id') == event.keyCode) {
      console.log('Matched');
      let id = getAudioElements.children[i].getAttribute('id') + '1';
      console.log(document.getElementById(id));
      document.getElementById(id).play();
    }
  }
}
window.addEventListener('keydown', myEvent);
