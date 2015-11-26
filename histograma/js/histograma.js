function cuentaCaracteres(queryString) {
	var i,
		resultado,
		caracteresArray = {},
		queryString = queryString.toUpperCase().replace(" ", "_");

	for (i = 0; i < queryString.length; i += 1) {
		if (caracteresArray.indexOf(queryString[i]) !== -1) {
			caracteresArray[caracteresArray.indexOf(queryString[i]) + 1] += 1;
		} else {
			caracteresArray.push(queryString[i], 0);
		}
		
	}
	resultado = creaHistograma(caracteresArray);

	return resultado;
}