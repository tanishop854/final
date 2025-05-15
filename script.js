
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
let clickCount = 0;

noBtn.addEventListener('mouseover', () => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;
  const randX = Math.floor(Math.random() * maxX);
  const randY = Math.floor(Math.random() * maxY);
  noBtn.style.position = 'absolute';
  noBtn.style.left = randX + 'px';
  noBtn.style.top = randY + 'px';
});

yesBtn.addEventListener('click', () => {
  window.location.href = "countdown.html";
});
