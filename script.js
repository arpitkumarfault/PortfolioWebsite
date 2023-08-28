function displayChange() {
  var secondContainer = document.querySelector(".second-container");
  if (secondContainer.style.height === "0px") {
    secondContainer.style.display = "flex"; // Show the container before sliding down
    secondContainer.style.height = "100vh"; // Slide down to 50vh
  } else {
    secondContainer.style.height = "0"; // Slide up to 0 height
    // Wait for the transition to complete before hiding the container
    setTimeout(function () {
      secondContainer.style.display = "none";
    }, 500); // Transition duration (in milliseconds)
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const text = document.querySelector(".sec-text");
  const phrases = ["Mobile Developer", "Web developer", "Graphic Designer"];
  let phraseIndex = 0;
  let letterIndex = 0;
  const typingSpeed = 100; // Adjust typing speed (lower value for faster typing)
  const deletionSpeed = 50; // Adjust deletion speed (lower value for faster deletion)
  const timeBeforeDelete = 1500;
  const timeBeforeNextPhrase = 500;

  const typeNextLetter = () => {
    const currentPhrase = phrases[phraseIndex];
    text.textContent += currentPhrase[letterIndex];
    letterIndex++;
    if (letterIndex < currentPhrase.length) {
      setTimeout(typeNextLetter, typingSpeed);
    } else {
      setTimeout(deleteText, timeBeforeDelete);
    }
  };

  const deleteText = () => {
    const currentPhrase = phrases[phraseIndex];
    text.textContent = currentPhrase.substring(0, letterIndex);
    letterIndex--;
    if (letterIndex >= 0) {
      setTimeout(deleteText, deletionSpeed);
    } else {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      letterIndex = 0; // Reset letterIndex to 0 before typing the next phrase
      setTimeout(typeNextLetter, timeBeforeNextPhrase);
    }
  };

  const startTyping = () => {
    typeNextLetter();
  };

  startTyping();
});
const downArrowImage = document.getElementById('downArrowImage');

downArrowImage.addEventListener('click', () => {
  // Add 'fadeInOut' class to the image element when it is clicked
  downArrowImage.classList.add('fadeInOut');

  // Remove 'fadeInOut' class after the animation duration (optional)
  setTimeout(() => {
    downArrowImage.classList.remove('fadeInOut');
  }, 1000);
});

let percent = document.getElementById('percentage');
  let progress = document.getElementById('progress');
  let provalue = progress.value;
  
  // Calculate the percentage
  let percentage = (provalue / progress.max) * 100;

  // Update the text content of the percentage div
  percent.innerText = percentage.toFixed(2) + "%";
