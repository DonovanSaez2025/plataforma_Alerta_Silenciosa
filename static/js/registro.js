document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const repassword = document.getElementById('repassword').value.trim();


        if (!email.endsWith('@liceovvh.cl') && !email.endsWith('@comeduc.cl')) {
            alert('Correo no válido. Solo se permiten correos institucionales.');
            return;
        };

        if (password !== repassword) {
            alert('Las contraseñas no coinciden.');
            return;
        };

        window.location.href = "/pages/inicio.html";
        return;
    });
});

