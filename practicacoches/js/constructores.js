function Concesionario(nombre, direccion, stock) {
	this.nombre = nombre;
	this.direccion = direccion;
	if (stock instanceof Array) {
		this.stock = stock;
	} else {
		this.stock = [];
	}
}
Concesionario.prototype.addStock = function(arr) {
	this.stock = this.stock.concat(arr);
};

function Coche(marca, modelo, matricula, color) {
	this.marca = marca;
	this.modelo = modelo;
	this.matricula = matricula;
	this.color = color;
}