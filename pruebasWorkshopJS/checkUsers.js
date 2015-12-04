function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
    return submittedUsers.every(function(enviados) {
    	return goodUsers.some(function(buenos) {
    		return buenos.id === enviados.id;
    	})
    })
  };
}

module.exports = checkUsersValid;