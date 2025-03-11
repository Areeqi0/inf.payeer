import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // Handle verification code input
  const inputs = document.querySelectorAll('.verification-input');
  
  inputs.forEach((input, index) => {
    // Auto-focus next input when a digit is entered
    input.addEventListener('input', (e) => {
      if (e.target.value.length === 1) {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      }
    });
    
    // Handle backspace to go to previous input
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && e.target.value.length === 0) {
        if (index > 0) {
          inputs[index - 1].focus();
        }
      }
    });
  });
  
  // Handle back button
  const backButton = document.getElementById('backButton');
  if (backButton) {
    backButton.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }
  
  // Handle close button
  const closeButton = document.getElementById('closeButton');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      // In a real app, this might close the modal or redirect
      window.location.href = 'index.html';
    });
  }
  
  // Handle form submission
  const submitButton = document.querySelector('.btn-login');
  if (submitButton) {
    submitButton.addEventListener('click', () => {
      // Collect verification code
      const code = Array.from(inputs).map(input => input.value).join('');
      console.log('Verification code submitted:', code);
      
      // In a real app, you would validate and submit the code here
    });
  }
});
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // Handle verification code input
  const inputs = document.querySelectorAll('.verification-input');
  
  inputs.forEach((input, index) => {
    // Auto-focus next input when a digit is entered
    input.addEventListener('input', (e) => {
      if (e.target.value.length === 1) {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      }
    });
    
    // Handle backspace to go to previous input
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && e.target.value.length === 0) {
        if (index > 0) {
          inputs[index - 1].focus();
        }
      }
    });
  });
  
  // Handle back button
  const backButton = document.getElementById('backButton');
  if (backButton) {
    backButton.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }
  
  // Handle close button
  const closeButton = document.getElementById('closeButton');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      // In a real app, this might close the modal or redirect
      window.location.href = 'index.html';
    });
  }
  
  // Handle form submission
  const submitButton = document.querySelector('.btn-login');
  if (submitButton) {
    submitButton.addEventListener('click', () => {
      // Collect verification code
      const code = Array.from(inputs).map(input => input.value).join('');
      console.log('Verification code submitted:', code);
      
      // In a real app, you would validate and submit the code here
    });
  }
});