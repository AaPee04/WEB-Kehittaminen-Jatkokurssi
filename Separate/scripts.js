document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Display success message
        document.getElementById('successMessage').style.display = 'block';
        // Reset the form
        this.reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
