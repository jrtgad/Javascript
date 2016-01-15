
function $(id) {
    return document.getElementById(id);
}

function doAdd() {
    var firstoperand = $('firstoperand'),
        secondoperand = $('secondoperand');

    $('result').innerHTML = add(firstoperand.value, secondoperand.value);
};

function app() {
    $('add').onclick = doAdd;
}

window.onload = app;
