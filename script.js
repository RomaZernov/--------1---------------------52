

window.onload = function () {
  var audio = new Audio("Peder B. Helland - Always.mp3");
  audio.loop = true;
  audio.play();
};


window.onload = function() {
    var context = new AudioContext();
    // Setup all nodes
    // ...
  }

  // One-liner to resume playback when user interacted with the page.
  document.querySelector('button').addEventListener('click', function() {
    context.resume().then(() => {
      console.log('Playback resumed successfully');
    });
  });

