function $(id) {
    return document.getElementById(id);
}

function cube(number) {
    return number * number * number;
}

function eventos() {
    $("di").addEventListener("click", cube, false);
}

window.load = eventos;