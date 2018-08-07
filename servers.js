var http = require("http");

var PORT = 7000;
var PORT1 = 7500;

function handleRequest(request, response) {
  response.end("ILY!! Path Hit: " + request.url);
}
function handleRequest2(request, response) {
    response.end("IFHY!! Path Hit: " + request.url);
  }
  

var server = http.createServer(handleRequest);
var server1 = http.createServer(handleRequest2);
server.listen(PORT, function() {

  console.log("Server listening on: http://localhost:%s", PORT);

});  
 server1.listen(PORT1, function() {
     console.log("Server listening on: http://localhost:" + PORT1);
 });


