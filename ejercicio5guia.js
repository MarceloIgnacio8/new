document.addEventListener("DOMContentLoaded", function () {
    const calcularButton = document.getElementById("calcularButton");
    const resultadoElement = document.getElementById("resultado");

    calcularButton.addEventListener("click", function () {
        const estatura = parseFloat(document.getElementById("estaturaInput").value);
        const peso = parseFloat(document.getElementById("pesoInput").value);

        if (isNaN(estatura) || isNaN(peso)) {
            resultadoElement.innerHTML = "Ingresa valores válidos.";
        } else {
            const imc = peso / (estatura * estatura);

            let estado;
            if (imc < 18.5) {
                estado = "Bajo Peso";
            } else if (imc >= 18.5 && imc <= 24.9) {
                estado = "Peso Normal";
            } else {
                estado = "Sobrepeso";
            }

            resultadoElement.innerHTML = `Tu IMC es ${imc.toFixed(2)} y estás en la categoría de "${estado}".`;
        }
    });
});

