//Lets require/import the HTTP module
var http = require('http-server');
var dispatcher = require("httpdispatcher");
var fs = require("fs");

//Lets define a port we want to listen to
const PORT=8080; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});

dispatcher.setStatic('resources');

//A sample GET request    
dispatcher.onGet("/", function(req, res) {
	fs.readFile("../index.html", function(err, data){

	    res.writeHead(200, {'Content-Type': 'text/html', "Content-Length": data.length});
	    res.writeFile(data);
	    res.end();		
	});
    console.log(res);
});    

//A sample POST request
dispatcher.onPost("/post1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Got Post Data');
});