function getData() {
    var graf = cuentaCaracteres();
    $("histograma").innerHTML = cuentaCaracteres($("stringUser"));
}

function $(selector) {
    return window.document.getElementById(selector);
}

function hala() {
	$("boton").onclick = getData;
}

window.onload = hala;