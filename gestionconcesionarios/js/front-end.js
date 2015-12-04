"use strict";

function $(selector) {
	return Document.getElementById(selector);
}

"use strict";
function writeData() {
	
}


function getData() {

	//modelo, matrícula, fecha de última revisión, precio de compra y precio estimado de venta
	var selectDealer = $(dealer_select);
		selectDealer.addEventListener("change", writeData, false);

		buyForm = $(buy_form);
		buyForm.addEventListener("click", addCar(){
			new Coche($(nombre.value))
		});

		//html = tabla(concesionario1);
		$(salida).innerHTML = html;
}
window.onload = getData();
