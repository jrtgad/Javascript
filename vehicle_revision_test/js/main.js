function getData() {
	var vehicleStatus = showVehicleRevisionStatus(window.location.search);
	$("greetings").innerHTML = vehicleStatus[0];
	$("revMsg").innerHTML = vehicleStatus[1];
	$("osBrowser").innerHTML = vehicleStatus[2];
}

function $(selector) {
	return window.document.getElementById(selector);
}

window.onload = getData;