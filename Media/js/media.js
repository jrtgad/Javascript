var prompt, alert, num, media, suma = 0, i = 0;

do {
    num = +prompt("Escriba valor del número " + (i + 1) + "º");
    if (num >= 0) {
        suma += num;
        i += 1;
    }
} while (num >= 0);

media = suma / i;

alert("La media es: " + media);