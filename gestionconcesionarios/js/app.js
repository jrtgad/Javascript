/*jslint
    browser: true */
/*global
    taxes */

(function (module) {
    "use strict";

    function $(id) {
        return document.getElementById(id);
    }

    function perfomCalculation() {
        var form = this.parentElement,
            price = form.price.value || form.price.placeholder,
            tax = form.tax.value;
        $("result").innerHTML = taxes.calculateTax(tax, price);
    }

    module.onload = function () {
        $("btncal").onclick = perfomCalculation;
    };
}(this));
