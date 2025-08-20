document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('email').value.trim();

        if (!email.endsWith('@liceovvh.cl') && !email.endsWith('@comeduc.cl')) {
            alert('Correo no válido. Solo se permiten correos institucionales.');
            return;
        };

        window.location.href = "/pages/inicio.html";
    });
});

