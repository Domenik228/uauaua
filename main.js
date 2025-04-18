const lightBtn = document.getElementById('lightBtn');
const darkBtn = document.getElementById('darkBtn');
const body = document.body;

function applyLightMode() {
  body.classList.remove('dark-mode');
  body.classList.add('light-mode');

  lightBtn.classList.remove('dark');
  lightBtn.classList.add('light');

  darkBtn.classList.remove('dark');
  darkBtn.classList.add('light');
}

function applyDarkMode() {
  body.classList.remove('light-mode');
  body.classList.add('dark-mode');

  lightBtn.classList.remove('light');
  lightBtn.classList.add('dark');

  darkBtn.classList.remove('light');
  darkBtn.classList.add('dark');
}

lightBtn.addEventListener('click', applyLightMode);
darkBtn.addEventListener('click', applyDarkMode);