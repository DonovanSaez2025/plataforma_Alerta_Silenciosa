document.querySelectorAll(".toggleBtn").forEach((boton) => {
  boton.addEventListener("click", function() {
    const contenido = this.nextElementSibling;

    if (contenido.style.display === "block") {
      contenido.style.display = "none";
      this.textContent = "Leer más";
    } else {
      contenido.style.display = "block";
      this.textContent = "Ocultar";
    }
  });
});

