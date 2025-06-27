
// Variables globales para mantener el estado del juego
var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
var i = 0; // Contador de intentos (usaremos esta variable)
var maxIntentos = 3;
var boton = document.querySelector("button");

function verificarNumero() {
    // Fase 1: Entrada
    var num = parseInt(document.getElementById("num").value);
    var salidaHTML = "";

    // Validar entrada
    if (isNaN(num) || num < 1 || num > 10) {
        document.getElementById("resultado").innerHTML = "Por favor ingresa un número válido entre 1 y 10";
        return;
    }

    // Incrementar contador de intentos
    i++;

    // Fase 2: Proceso - Verificar adivinanza con while
    var adivinado = false;
    while (!adivinado && i <= maxIntentos) {
        if (num === numeroAleatorio) {
            salidaHTML = "¡Correcto! Has adivinado el número.";
            boton.disabled = true;
            adivinado = true;
        } else if (i >= maxIntentos) {
            salidaHTML = "Juego terminado. El número era: " + numeroAleatorio + ".";
            boton.disabled = true;
            break;
        } else {
            salidaHTML = "Intento incorrecto. Te quedan " + (maxIntentos - i) + " intentos. ";
            break;
        }
    }

    // Fase 3: Salida
    document.getElementById("resultado").innerHTML = salidaHTML;
    
    // Limpiar campo para siguiente intento
    document.getElementById("num").value = "";
}
