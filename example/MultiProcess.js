var http = require('http'),
	rrest = require('../'),
	port = [3000, 3001, 3002, 3003],
	server = http.createServer(rrest(function (req, res){
			res.send('process '+rrest.id+' is listen at '+port[rrest.id]+' : hello world everyone!');
	}));
	rrest.listen(server, port);//�����������port���������ȥ��config�ļ���Ķ˿ں�
