var prompt, alert, num, secret;

function genToHundred() {
    return Math.floor((Math.random() * 100) + 1);
}

secret = genToHundred();

num = 1 * prompt("Escriba el número correcto (1-100): ");

do {
    if (isNaN(num)) {
        num = 1 * prompt("El valor introducido no es un número... Vuelva a probar (con números)");
    } else {
        if (num > 100  || num < 1) {
        num = 1 * prompt("Vigile los límites (1-100): ");
        } else {
            if (num < secret) {
                num = 1 * prompt("El número buscado es mayor, vuelva a probar: ");
            } else {
                num = 1 * prompt("El número buscado es menor, vuelva a probar: ");
            }
        }
    }
} while (num !== secret);

alert("Ha acertado! : " + num );