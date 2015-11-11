function getData() {
    var graf = cuentaCaracteres();
    $("histograma").innerHTML = cuentaCaracteres($("stringUser").value);
}

function $(selector) {
    return window.document.getElementById(selector);
}

$("boton").onclick="getData()";