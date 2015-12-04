function getShortMessages(arr) {
    return arr.map(function (x) {
        return x.message;
    }).filter(function (y) {
        return y.length < 50;
    });
}

module.exports = getShortMessages;