module.exports.appconfig = require('./config/multi.conf.js');
var http = require('http'),
	rrest = require('../'),
	server = http.createServer(rrest(function (req, res){
			res.send('process '+rrest.id+' is listen at '+rrest.config.listenPort[rrest.id]+' : hello world everyone!');
	}));
	rrest.listen(server);//�����������port���������ȥ��config�ļ���Ķ˿ں�
