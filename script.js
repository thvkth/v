function handleEmail() {
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        alert('Thank you for submitting your email: ' + email);
        document.getElementById('email').value = ''; // Clear input
    } else {
        alert('Please enter a valid email address (e.g., example@domain.com).');
    }
}
