// Variables globales para mantener el estado del juego
var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
var intentos = 0; // Cambié el nombre de 'i' a 'intentos' para más claridad
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
    intentos++;

    // Fase 2: Proceso - Verificar adivinanza
    if (num === numeroAleatorio) {
        salidaHTML = "¡Correcto! Has adivinado el número.";
        boton.disabled = true;
    } else if (intentos >= maxIntentos) {
        salidaHTML = "Juego terminado. El número era: " + numeroAleatorio + ".";
        boton.disabled = true;
    } else {
        var intentosRestantes = maxIntentos - intentos;
        // Mensaje personalizado según los intentos restantes
        salidaHTML = "Intento incorrecto. Te " + 
                     (intentosRestantes === 1 ? "queda 1 intento" : "quedan " + intentosRestantes + " intentos") + 
                     ".";
    }

    // Fase 3: Salida
    document.getElementById("resultado").innerHTML = salidaHTML;
    
    // Limpiar campo para siguiente intento
    document.getElementById("num").value = "";
}
