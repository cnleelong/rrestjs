var http = require('http'),
	rrest = require('../'),
	io = require('socket.io'),
    server = http.createServer(rrest(function (req, res){
		res.send(html);		
	})).listen(rrest.config.listenPort),
	socketio = io.listen(server);

socketio.sockets.on('connection', function (socket) {
  /*for(var i in socket){
	console.log(i+'\n')
  }*/
  socket.emit('news', 'send from service');
  socket.on('my other event', function (data) {
    console.log(data);
	//socket.disconnect();//关闭web sockets
  });
});

var html = '<script src="/socket.io/socket.io.js"></script>'+
           '<script>'+
		   'var socket = io.connect("http://10.1.80.3:3000/");'+
           'socket.on("news", function (data) {'+
           'console.log(data);'+
           'socket.emit("my other event", "connect success");'+
		   '});'+
		   'function send(){socket.emit("my other event", "send one message");}'+
           '</script>'+
		   '<button id="bt" onclick=send()>发送websockets信息</button>';