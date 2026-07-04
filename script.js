// Pop-up formulaire
document.querySelector('.contact-card').addEventListener('submit', function (e) {
    e.preventDefault(); // on empêche le rechargement de la page

    const form = e.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Message envoyé avec succès ! Merci, je reviens vers vous rapidement.');
            form.reset(); // on vide le formulaire après succès
        } else {
            alert('Une erreur est survenue, votre message n\'a pas pu être envoyé. Merci de réessayer.');
        }
    })
    .catch(error => {
        alert('Une erreur est survenue, votre message n\'a pas pu être envoyé. Merci de réessayer.');
    });
});