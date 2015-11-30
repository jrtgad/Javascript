/*global
    exports */

var MODULENAME = "taxes",
    haveExports = typeof exports,
    container;

// Browser or Node.js?
// http://caolan.org/posts/writing_for_node_and_the_browser/
if (haveExports === "undefined") {
    container = this[MODULENAME] = {};
} else {
    container = exports;
}

// Module exports
(function (module) {
    "use strict";

    module.calculateTax = function (tax, price) {
        return price * (tax / 100);
    };
}(container));

