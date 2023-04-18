var nombre = prompt("Por favor, pon tu nombre aquí:");

nombre = nombre.toLowerCase().replace(/\s+/g, '');

var nombreAlReves = '';

for (var i = nombre.length - 1; i >= 0; i--) {
    nombreAlReves += nombre[i];
}

alert("¡Adiós " + nombreAlReves + "!");
