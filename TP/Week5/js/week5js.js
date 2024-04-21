// Define an object to store the Howl instances for each meme
var memeSounds = {
  meme1: new Howl({
      src: ['sound/cat1.mp3'],
      autoplay: false,
      loop: false,
      volume: 0.5
  }),
  meme2: new Howl({
      src: ['sound/cat2.mp3'],
      autoplay: false,
      loop: false,
      volume: 0.5
  }),
  meme3: new Howl({
      src: ['sound/cat3.mp3'],
      autoplay: false,
      loop: false,
      volume: 0.5
  }),
  meme4: new Howl({
      src: ['sound/cat4.mp3'],
      autoplay: false,
      loop: false,
      volume: 0.5
  }),
  meme5: new Howl({
      src: ['sound/cat5.mp3'],
      autoplay: false,
      loop: false,
      volume: 0.5
  }),
  meme6: new Howl({
      src: ['sound/cat6.mp3'],
      autoplay: false,
      loop: false,
      volume: 0.5
  }),
};

var currentSound = null; // Variable to keep track of the currently playing sound

function playMemeSound(memeId) {
    // Stop the currently playing sound if there is one
    if (currentSound) {
        currentSound.stop();
    }

    // Access the new sound
    var sound = memeSounds[memeId];
    if (sound) {
        sound.play();
        currentSound = sound; // Update the current sound to the new sound
    } else {
        console.log('Sound not found for:', memeId);
    }
}



// Function to stop all sounds (optional)
function stopAllSounds() {
  for (var key in memeSounds) {
      memeSounds[key].stop();
  }
}
