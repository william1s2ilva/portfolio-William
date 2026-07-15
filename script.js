const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    alert("Mensagem enviada com sucesso!");

    formulario.reset();
});