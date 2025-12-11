// DOM loaded
document.addEventListener('DOMContentLoaded', function () {
  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Typing animation
  const el = document.getElementById('typing');
  const texts = ['Full-stack developer', 'AI & Product builder', 'Hackathon winner'];
  let idx = 0;

  function typeText(text, cb) {
    let i = 0;
    el.textContent = '';
    const id = setInterval(() => {
      if (i < text.length) {
        el.textContent += text[i++];
      } else {
        clearInterval(id);
        setTimeout(cb, 700);
      }
    }, 80);
  }

  function loop() {
    typeText(texts[idx % texts.length], () => {
      idx++;
      loop();
    });
  }

  if (el) loop();
});
