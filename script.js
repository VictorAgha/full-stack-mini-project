document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
  
    fetch('http://localhost/full-stack-mini-project/login.php/', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          localStorage.setItem('userEmail', data.email);
          window.location.href = 'dashboard.html';
        } else {
          alert(data.message);
        }
      })
      .catch(error => console.error('Error:', error));
  });
  
  document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
  
    fetch('http://localhost/full-stack-mini-project/register.php/', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
      })
      .catch(error => console.error('Error:', error));
  });