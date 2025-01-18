document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Estää lomakkeen uudelleenlatauksen
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Näytä kiitosviesti
        document.getElementById('successMessage').style.display = 'block';
        // Tyhjennä lomake
        this.reset();
    } else {
        alert('Täytä kaikki kentät ennen lähettämistä.');
    }
});
