function duckCount(obj) {
    return obj.prototype.map(function (x) {
        return x.hasOwnProperty(quack);
    });

}

module.exports = duckCount