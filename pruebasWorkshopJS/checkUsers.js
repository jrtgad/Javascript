function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        submittedUsers.map(function (x) {
            return x.id;
        }).every(function (y) {
            return y === goodUsers.some(function (z) {
                return z.id;
            });
        });
    };
}

module.exports = checkUsersValid;