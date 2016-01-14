var globals = (function (ns) {
    ns.NAME_PATTERN = new RegExp("^[a-z]+$", "i");
    ns.MAIL_PATTERN = new RegExp("^[a-z]+$", "i");
    return ns;
}({}));

$("document").ready(function () {
    "use strict";

    $(".userName").on("keyup", function () {
        alert(globals.NAME_PATTERN.test($(".userName").val()));
    })
});