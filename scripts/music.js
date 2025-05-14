
document.addEventListener("DOMContentLoaded", function () {
  const music = document.getElementById("bg-music");
  const toggle = document.getElementById("toggle-music");
  if (toggle) {
    toggle.addEventListener("click", function () {
      if (music.paused) {
        music.play();
        toggle.textContent = "Pause Music";
      } else {
        music.pause();
        toggle.textContent = "Play Music";
      }
    });
  }
});
