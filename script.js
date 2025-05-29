function handleEmail() {
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const messageDiv = document.createElement('div');
    messageDiv.style.marginTop = '10px';
    if (emailRegex.test(email)) {
        messageDiv.textContent = `Thank you for submitting your email: ${email}`;
        messageDiv.style.color = 'green';
        document.getElementById('email').value = '';
    } else {
        messageDiv.textContent = 'Please enter a valid email address (e.g., example@domain.com).';
        messageDiv.style.color = 'red';
    }
    const form = document.querySelector('.email-form');
    form.appendChild(messageDiv);
    setTimeout(() => messageDiv.remove(), 3000);
}
function more() {
    const moreContent = document.getElementById('more-brands');
    const button = document.querySelector('#favourites button');
    moreContent.classList.toggle('visible');
    button.textContent = moreContent.classList.contains('visible') ? 'Show Less' : 'More Brands';
}
