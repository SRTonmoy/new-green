// Dark Mode Toggle for Dashboard
const darkModeToggle = document.getElementById('darkModeToggle');

if (darkModeToggle) {
  // Load saved preference
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = '🌞 Light Mode';
  }

  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      darkModeToggle.textContent = '🌞 Light Mode';
      localStorage.setItem('darkMode', 'enabled');
    } else {
      darkModeToggle.textContent = '🌙 Dark Mode';
      localStorage.setItem('darkMode', 'disabled');
    }
  });
}

// Optional: Show/Hide password toggle for login page
const passwordInput = document.querySelector('input[type="password"]');
if (passwordInput) {
  // Create toggle button
  const toggleBtn = document.createElement('button');
  toggleBtn.type = 'button';
  toggleBtn.textContent = 'Show';
  toggleBtn.style.marginLeft = '10px';
  toggleBtn.style.cursor = 'pointer';
  toggleBtn.style.background = 'none';
  toggleBtn.style.border = 'none';
  toggleBtn.style.color = '#00d1b2';
  toggleBtn.style.fontWeight = 'bold';
  toggleBtn.style.fontSize = '0.9rem';

  passwordInput.parentNode.insertBefore(toggleBtn, passwordInput.nextSibling);

  toggleBtn.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleBtn.textContent = 'Hide';
    } else {
      passwordInput.type = 'password';
      toggleBtn.textContent = 'Show';
    }
  });
}
