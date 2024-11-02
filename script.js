window.addEventListener("orientationchange", function () {
    if (window.orientation === 90 || window.orientation === -90) {
      // Landscape mode
      document.querySelector(".rotate-message").style.display = "none";
    } else {
      // Portrait mode
      document.querySelector(".rotate-message").style.display = "flex";
    }
  });
  

  function enableFullscreen() {
    const gameContainer = document.querySelector('.game-container');
    if (gameContainer.requestFullscreen) {
      gameContainer.requestFullscreen();
    }
  }
  

  window.addEventListener("load", enableFullscreen);