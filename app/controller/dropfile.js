var home = {},
	title = _rrest.config.webtitle;
home.index = function(req, res){
	res.sendfile(__dirname+'/../static/skin/dropExample/droptest.html');
	return;
}
home.multi = function(req, res){
	res.sendfile(__dirname+'/../static/skin/dropExample/multiUpload.html');
	return;
}
home.upload = function(req, res){
	var size = Math.ceil((req.headers['content-length']-0)/1024)+'kb';
	res.sendjson({res: 'success', size:size});
	return;
}

module.exports = home; 