document.addEventListener('DOMContentLoaded', function () {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      document.getElementById('welcomeMessage').textContent = `Welcome, ${userEmail}!`;
    } else {
      window.location.href = 'index.html'; 
    }
  });