var prompt, alert, edadP, edadH, anios = 0;

edadP = 1 * prompt("Escriba la edad del padre: ");
edadH = 1 * prompt("Escriba la edad del hijo: ");

if (edadH * 2 <= edadP) {
    if (edadH * 2 === edadP) {
        alert("Ha sido justo este año!");
    } else {
        while (edadH * 2 < edadP) {
        edadP += 1;
        edadH += 1;
        anios += 1;
        }
        if (edadH * 2 !== edadP) {
            alert("Jamás tendra el padre el doble de edad que el hijo");
        } else {
            alert("Tienen que pasar " + anios + " hasta que el padre doble al hijo");
        }
    }
} else {
    while (edadH * 2 > edadP) {
    edadP -= 1;
    edadH -= 1;
    anios += 1;
    }
    if (edadH * 2 !== edadP) {
        alert("Jamás tendra el padre el doble de edad que el hijo");
    } else {
            alert(anios + " han pasado desde que el padre dobló al hijo");
      }
}