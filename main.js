import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';

// Initialize any interactive elements
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('form');
  
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Redirect to security page
      window.location.href = 'security.html';
    });
  }
  
  // Add click event to the login button as well
  const loginButton = document.querySelector('.btn-login');
  if (loginButton && !loginForm) {
    loginButton.addEventListener('click', () => {
      window.location.href = 'security.html';
    });
  }
});
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';

// Initialize any interactive elements
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('form');
  
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Redirect to security page
      window.location.href = 'security.html';
    });
  }
  
  // Add click event to the login button as well
  const loginButton = document.querySelector('.btn-login');
  if (loginButton && !loginForm) {
    loginButton.addEventListener('click', () => {
      window.location.href = 'security.html';
    });
  }
});