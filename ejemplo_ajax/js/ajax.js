var SAMPLETYPE = 'json'; 
var FILESDIR = 'files'; 

function remotefile(resource, type) {
	return FILESDIR + "/" + resource + '.' + type; 
}

function getresource(url, callback) {
	var request = new XMLHttpRequest();
	request.open('GET', url);
	request.onreadystatechange = function() {
		if (request.readyState === 4 && request.status === 200) {
			// Se puede obtener el tipo de contenido con:
			// var type = request.getResponseHeader('Content-Type');
			var fn = window["show" + SAMPLETYPE];
			fn.call(fn, request);

			//callback.call(callback, request);
		}
		return undefined;
	};
	// Envío de petición sin cuerpo
	request.send(null);
}

function showtxt(request) {
  var text = request.responseText;
  alert(text);
}

function showxml(request) {
	var xml = request.responseXML;
	var elements = xml.firstChild.children;
	var element;
	var txt = '';
	for (var i = 0 ; i < elements.length ; i++) {
		element = elements[i];
		txt += element.nodeName + ': ' + element.textContent + '\n'; 
	}
	alert(txt);
}

function showjson(request) {
	var json = JSON.parse(request.responseText);
	var txt = '';
	for (var i in json) {
		txt += i + ': ' + json[i] + '\n';
	}
	alert(txt);
}

function process(request) {
	var fn = window["show" + SAMPLETYPE];
	fn.call(fn, request);
}

window.addEventListener("load", function () {
	var resource = remotefile('sample', SAMPLETYPE);
	var dorequest = getresource.bind(this, resource, process);
	document.getElementsByTagName("button")[0].onclick = dorequest;
	document.getElementById("type").innerHTML = SAMPLETYPE;
});