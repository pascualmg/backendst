
(function wsServer(port){
	var WebSocketServer = require('ws').Server;
	var wsServer = new WebSocketServer({port: port});
	wsServer.on('connection', incomingConnectionHandler)
	
	/**
	* @type  {WebSocket} ws 
	**/
	function incomingConnectionHandler(ws){
		ws.on('message' , function(message){
			ws.send("te respondo con lo mismo que me llege :" + message);
		});
		//ws.on('close', ...
		ws.send("conectado al server");
	}
})(6969)
