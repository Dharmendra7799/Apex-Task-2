document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let about = document.getElementById('about').value.trim();

    if (username === '' || email === '' || about === '') {
        alert('Please fill out all fields');
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    alert('Form submitted successfully!');
});