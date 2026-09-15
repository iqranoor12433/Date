// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");

const finalSection = document.getElementById("final-section");

// Click Envelope
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    document.querySelector(".letter-window").classList.add("open");
  }, 50);
});

// Move NO button
function moveNoButton() {
  const buttonRect = noBtn.getBoundingClientRect();

  const maxX = Math.min(120, (window.innerWidth - buttonRect.width) / 2);
  const maxY = Math.min(80, (window.innerHeight - buttonRect.height) / 2);

  const moveX = (Math.random() * 2 - 1) * maxX;
  const moveY = (Math.random() * 2 - 1) * maxY;

  noBtn.style.transition = "transform 0.25s ease";
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

// Desktop hover
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobile touch
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

// Also works with pointer interaction
noBtn.addEventListener("pointerdown", (e) => {
  if (e.pointerType === "touch") {
    e.preventDefault();
    moveNoButton();
  }
});

// YES is clicked
yesBtn.addEventListener("click", () => {
  title.textContent = "Yippeeee! 💕";
  catImg.src = "cat_dance.gif";

  buttons.style.display = "none";
  finalSection.style.display = "block";
});

// Open Love Letter Button
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("open-letter-btn")) {
    letter.style.display = "none";
    document.getElementById("love-letter-page").style.display = "flex";
  }
});
