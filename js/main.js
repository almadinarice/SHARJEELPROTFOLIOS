const words = ["awesome websites.", "mobile apps.", "AI projects."];
let wordIndex = 0;
let charIndex = 0;
let typingText = document.querySelector(".typing-text");

function type() {
  if (charIndex < words[wordIndex].length) {
    typingText.innerHTML += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.innerHTML = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", type);
