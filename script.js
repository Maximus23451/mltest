const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
const overlay = document.getElementById('overlay');
const audio = document.getElementById('bgMusic');
const toggleBtn = document.getElementById('musicToggle');
const volumeBtn = document.getElementById('volumeToggle');
const trackSelect = document.getElementById('trackSelect');

// 🍔 Show/Hide mobile nav
function closeMenu() {
  navLinks.classList.remove('show');
  overlay.classList.remove('show');
}
burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  overlay.classList.toggle('show');
});
overlay.addEventListener('click', closeMenu);
document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// 🖱️ Click outside nav closes menu
overlay.addEventListener('click', closeMenu);

// 🔗 Close menu on nav click (optional)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Typing Effect
const typingText = document.getElementById("typing-text");
const phrases = ["Maxツ.", "Music Lover.", "vmhd.my.id", "macroharddoors.site"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  const visibleText = currentPhrase.substring(0, charIndex);
  typingText.textContent = visibleText;

  if (!isDeleting && charIndex < currentPhrase.length) {
    charIndex++;
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
  } else if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1200);
    return;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }

  const delay = isDeleting ? 50 : 100;
  setTimeout(typeEffect, delay);
}

typeEffect();

// Scroll Animation
const animatedElements = document.querySelectorAll('.animate');
function handleScrollAnimation() {
  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
}
window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

// 🎵 Music Control
toggleBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    toggleBtn.textContent = '⏸';
  } else {
    audio.pause();
    toggleBtn.textContent = '▶️';
  }
});
volumeBtn.addEventListener('click', () => {
  audio.muted = !audio.muted;
  volumeBtn.textContent = audio.muted ? '🔇' : '🔊';
});

// 🎼 Track Switching
trackSelect.addEventListener('change', () => {
  const newTrack = trackSelect.value;
  audio.src = newTrack;
  audio.play();
});


