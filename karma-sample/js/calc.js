(function(module) {
    module.ERROR_MSG = "Error";

    module.add = function (firstoperand, secondoperand) {
        var result = +firstoperand + +secondoperand;
        return isNaN(result) && module.ERROR_MSG || result;
    }
})(this);
