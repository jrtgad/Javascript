function getData() {
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
}

function $(selector) {
    return window.document.getElementById(selector);
}

window.onload = getData;