'use strict';

function crearInputs() {
    let cantidadNumeros = parseInt(document.getElementById("cantidadNumeros").value);
    let inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = "";

    for (let i = 0; i < cantidadNumeros; i++) {
        let input = document.createElement("input");
        input.type = "number";
        input.placeholder = "Ingrese el número #" + (i + 1);
        inputContainer.appendChild(input);
    }

    document.getElementById("resultados");
}

function calcularNumeros() {
    let inputs = document.querySelectorAll("#inputContainer input");
    let numeros = [];

    inputs.forEach(function(input) {
        let numero = parseInt(input.value);
        numeros.push(numero);
    });

    let numeroMayor = Math.max(...numeros);
    let numeroMenor = Math.min(...numeros);

    document.getElementById("numerosIngresados").textContent = numeros.join(", ");
    document.getElementById("numeroMayor").textContent = numeroMayor;
    document.getElementById("numeroMenor").textContent = numeroMenor;

    document.getElementById("resultados");
}