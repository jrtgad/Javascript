function getData() {
	var coche1 = new Coche("BMW", "330", "1112-DDD", "negro"),
		coche2 = new Coche("Citroen", "Xantia", "2111-DFD", "gris"),
		coche3 = new Coche("Peugeot", "306", "4111-GDD", "rojo"),
		coche4 = new Coche("Seat", "Marbella", "1611-DDH", "negro"),
		coche5 = new Coche("Ford", "Focus", "1911-DRD", "azul"),

		coches = [coche1, coche2, coche3, coche4, coche5],

		concesionario1 = new Concesionario("Pepe", "Falsa"),
		concesionario1.addStock(coches),

		html = "<tabla>";
	html += "<tr><td>";
	
}
window.onload = getData();