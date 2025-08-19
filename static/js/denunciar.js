document.getElementById("denunciaForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const curso = e.target.curso.value;
    const fecha = e.target.fecha.value;
    const detalle = e.target.detalle.value;

    const li = document.createElement("li");
    li.textContent = `${fecha} - ${curso}`;
    document.getElementById("listaReportes").appendChild(li);
    document.getElementById("chatBox").style.display = "block";

    const mensajes = document.getElementById("mensajes");
    mensajes.innerHTML = `<p><strong>Profesor:</strong> Hemos recibido tu denuncia. Gracias por confiar.</p>`;

    e.target.reset();
});

document.getElementById("enviarMensaje").addEventListener("click", function () {
    const input = document.getElementById("mensajeInput");
    const texto = input.value.trim();
    if (texto) {
        const mensajes = document.getElementById("mensajes");
        mensajes.innerHTML += `<p><strong>Tú:</strong> ${texto}</p>`;
        input.value = "";

        setTimeout(() => {
            mensajes.innerHTML += `<p><strong>Profesor:</strong> Gracias por tu mensaje, lo revisaremos.</p>`;
            mensajes.scrollTop = mensajes.scrollHeight;
        }, 1000);
    }
});