var id = null;

function myMove() {
  var elem = document.getElementById("abutton");
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);

  function frame() {
    if (pos >= 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

// Function to show a window alert
function showAlert() {
  alert("Get ready to play chess!");
}

// Call the myMove function when the page finishes loading.
window.onload = function () {
  myMove();

  // Add click event listener to the "Play Now" button
  var playButton = document.getElementById("abutton");
  playButton.addEventListener("click", showAlert);
};
