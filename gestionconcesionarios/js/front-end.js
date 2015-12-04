"use strict";

function $(id) {
    return document.getElementById(id);
}

function getData() {
    /*var select = document.addChild($("page"),
        DealersNet().map(function (x) {
            return x.Dealer;
        }));*/
    var element = document.createElement("select");
    element.id = "selectDealer";

    globals.ZONE.forEach(function (x) {
        var option = document.createElement("option");
        option.value = x;
        option.innerHTML = x;
        element.appendChild(option);
    });

    $("page").appendChild(element);

    $("selectDealer").addEventListener("change", createTable);
}

function createTable() {

}

window.onload = getData;