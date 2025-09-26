document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('dobError').textContent = '';

    // Get values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;

    // Validate name
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }

    // Validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        isValid = false;
    }

    // Validate password
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
        isValid = false;
    }

    // Validate dob
    if (dob === '') {
        document.getElementById('dobError').textContent = 'Date of birth is required';
        isValid = false;
    }

    if (isValid) {
        const contactInfo = {
            name: name,
            email: email,
            password: password, // Note: In real apps, handle passwords securely
            dob: dob
        };
        console.log('Contact Info:', contactInfo);
        // You can send contactInfo to a server via AJAX/fetch API here
        alert('Form submitted successfully!');
    }
});