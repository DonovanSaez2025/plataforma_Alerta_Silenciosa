document.addEventListener('DOMContentLoaded', function () {

    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');

    togglePassword.addEventListener('click', function () {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });

    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!email.endsWith('@liceovvh.cl') && !email.endsWith('@comeduc.cl')) {
            alert('Correo no valido. Solo se permiten correos institucionales.');
            return;
        }
        window.location.href = 'inicio.html';

        loginForm.reset();
    });
});