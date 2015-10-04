var prompt, alert, num, suma = 0, cont = 0;

do {
    num = 1 * prompt("Introduzca números, se sumarán los positivos: ");

    if (num > 0) {
        suma += num;
        cont += 1;
    }
} while (num !== 0);
alert("Se han introducido " + cont + " números positivos que suman " + suma);