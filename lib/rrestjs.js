_restConfig = require('./configRequire');//����config�ļ�
restlog = require('./RestLogger');//������־��¼
require('./checkConfig')(_restConfig);//���config�ļ�
if(_restConfig.autoCreateFolders) var autoCreateFolders = require('./createFolders');//�Զ�����Ŀ¼
var RestReq = require('./RestReq')(),//��װreq
	RestRes = require('./RestRes')(),//��װres
	RestBridge = module.exports = require('./RestBridge');//������ĺ���
module.exports.AsyncProxy = require('./modules/AsyncProxy');//����첽����
module.exports.mongo = require('./MongdbConnect');//���mongodb api
module.exports.mpool = require('./MongdbConnect').mpool;
module.exports.config = _restConfig;
module.exports.mod = require('./AutoRequire');
module.exports.id = RestBridge.id;
module.exports.listen = RestBridge.listen;
