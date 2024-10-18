document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if user exists in local storage
    const userData = JSON.parse(localStorage.getItem('users')) || [];
    const user = userData.find(user => user.username === username && user.password === password);
    
    if (user) {
        window.location.href = 'index.html'; // Redirect to prediction page
    } else {
        document.getElementById('login-result').innerText = 'Invalid username or password.';
    }
});


