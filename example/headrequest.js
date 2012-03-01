var http = require('http');
var options = {
  host: '10.1.80.3',
  port: 3000,
  path: '/upload?name=iiiii',
  headers:{"content-length":"15", "content-type":"application/x-www-form-urlencoded; charset=UTF-8"},
method: 'HEAD',
 //method: 'PUT',
// method: 'DELETE',
//	method:'GET',
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
req.write('ttt=yyy&zzz=uuu');
req.end();