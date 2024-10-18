document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;
    const phoneNumber = document.getElementById('phone-number').value;

    const userData = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = userData.find(user => user.username === newUsername);
    if (existingUser) {
        document.getElementById('register-result').innerText = 'Username already exists.';
        return;
    }

    userData.push({ username: newUsername, password: newPassword, email, gender, phoneNumber });
    localStorage.setItem('users', JSON.stringify(userData));
    
    document.getElementById('register-result').innerText = 'Registration successful! You can now log in.';
});


