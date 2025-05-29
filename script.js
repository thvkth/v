function handleEmail() {
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const messageDiv = document.getElementById('email-message');
    messageDiv.textContent = '';
    if (emailRegex.test(email)) {
        messageDiv.textContent = `Thank you for submitting your email: ${email}`;
        messageDiv.style.color = 'green';
        document.getElementById('email').value = '';
    } else {
        messageDiv.textContent = 'Please enter a valid email address (e.g., example@domain.com).';
        messageDiv.style.color = 'red';
    }
    setTimeout(() => messageDiv.textContent = '', 3000);
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const button = document.querySelector('.toggle-sidebar');
    if (sidebar && button) {
        sidebar.classList.toggle('hidden');
        button.setAttribute('aria-expanded', !sidebar.classList.contains('hidden'));
    } else {
        alert('Error: Sidebar element not found.');
    }
}

function more() {
    const moreContent = document.getElementById('more-brands');
    const button = document.getElementById('more-brands-btn');
    if (moreContent && button) {
        moreContent.classList.toggle('visible');
        const isExpanded = moreContent.classList.contains('visible');
        button.setAttribute('aria-expanded', isExpanded);
        button.textContent = isExpanded ? 'Show Less' : 'More Brands';
    } else {
        alert('Error: More brands content not found.');
    }
}
