var l1, l2, l3, prompt, alert;

do {
    l1 = +prompt("Escriba la medida del lado 1: ");    
} while(isNaN(l1));

do {
    l2 = +prompt("Escriba la medida del lado 2: ");    
} while(isNaN(l2));

do {
    l3 = +prompt("Escriba la medida del lado 3: ");    
} while(isNaN(l3));


if (l1 === l2 && l1 === l3) {
    alert("El triángulo es equilátero");
} else {
    if ((l1 === l2 && l1 !== l3) ||
        (l2 === l3 && l2 !== l1) ||
        (l3 === l1 && l3 !== l2)) {
        alert("El triángulo es isósceles");
    } else {
        alert("El triángulo es escaleno");
    }
}