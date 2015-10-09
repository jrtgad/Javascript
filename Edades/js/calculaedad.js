var prompt, msg, edadP, edadH, anios = 0, msg;

edadP = 1 * prompt("Escriba la edad del padre: ");
edadH = 1 * prompt("Escriba la edad del hijo: ");

if (edadH * 2 <= edadP) {
    if (edadH * 2 === edadP) {
        msg = "Ha sido justo este año!";
    } else {
        while (edadH * 2 < edadP) {
        edadP += 1;
        edadH += 1;
        anios += 1;
        }
        if (edadH * 2 !== edadP) {
            msg = "Jamás tendra el padre el doble de edad que el hijo";
        } else {
            msg = "Tienen que pasar " + anios + " hasta que el padre doble al hijo";
        }
    }
} else {
    while (edadH * 2 > edadP) {
    edadP -= 1;
    edadH -= 1;
    anios += 1;
    }
    if (edadH * 2 !== edadP) {
        msg = "Jamás tendra el padre el doble de edad que el hijo";
    } else {
            msg = anios + " han pasado desde que el padre dobló al hijo";
      }
}

alert(msg);