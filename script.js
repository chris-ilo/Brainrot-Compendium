function stopAllAudio() {
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
      audio.pause(); // Pause the audio
      audio.currentTime = 0; // Reset to the beginning
    });
  }

  function adjustVolume() {
    const slider = document.getElementById('volume-slider');
    const audios = document.querySelectorAll('audio');
    const volume = slider.value;
    audios.forEach((audio) => {
      audio.volume = volume;
    });
  }