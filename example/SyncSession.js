var http = require('http'),
	rrest = require('../'),
	server = http.createServer(rrest(function (req, res){
			var session = req.session;
			if(session.count>10){
				req.delsession();
				res.send('process '+rrest.id+' (process.pid : '+process.pid+' ) is working: session count 11 has deleted!');
				return
			}
			if(!session.count){
				session.count = 0;
			}					
			res.send('process '+rrest.id+' (process.pid : '+process.pid+' ) is working: session.count'+(++session.count));
	})).listen(rrest.config.listenPort);		

