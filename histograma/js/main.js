function getData() {
<<<<<<< HEAD
    var graf = cuentaCaracteres(prompt("Introduzca una cadena de texto:")),
        html = "<table>";
    for (var element = 0; element < graf.length; element++) {
        if (element % 2 === 0) {
            html += "<tr><td>\"" + graf[element] + "\"";
        } else {
            html += "<td>" + graf[element] + "</td></tr>";
        }
    }
    html += "</table>";
    $("histograma").innerHTML = html;
=======
    var graf = cuentaCaracteres();
    $("histograma").innerHTML = cuentaCaracteres($("stringUser"));
>>>>>>> ec5bb75e71fd41b9ee8d60a41d631c9006158d0d
}

function $(selector) {
    return window.document.getElementById(selector);
}

<<<<<<< HEAD
window.onload = getData;
=======
function hala() {
	$("boton").onclick = getData;
}

window.onload = hala;
>>>>>>> ec5bb75e71fd41b9ee8d60a41d631c9006158d0d
