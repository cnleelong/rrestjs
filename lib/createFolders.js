/*
*createFolders.js �������Զ�����һЩĿ¼��
*
*������config�ļ��� autoCreateFolders ���������Ƿ���
*/


var fs = require('fs'),
	path = require('path'),
	outerror = require('./Outerror'),
	msg =  require('./msg/msg'),
	baseDir = _restConfig.baseDir,
	folders = [//��Ҫ������Ŀ¼
		 _restConfig.staticFolder,
		_restConfig.staticParseCacheFolder,
		 _restConfig.uploadFolder,
		_restConfig.logPath,
		_restConfig.tempFolder,
		_restConfig.tempCacheFolder,
		_restConfig.ModulesFloder
	],
folders = folders.forEach(function(value){//ѭ������Ŀ¼��������Ŀ¼
	var v =  value.slice(1).split('/'),
		ary = [];
	v.forEach(function(vname, i, v){
			var pathfolder = baseDir;
			for(var j = 0; j<=i; j++){
				pathfolder += '/'+v[j];
			}
			try{
				if(!path.existsSync(pathfolder)){//���·�������ڣ��򴴽���
					fs.mkdirSync(pathfolder);
				}			
			}
			catch(err){
				outerror(msg.parse(msg.errmsg.createFolderError+pathfolder, err);
			}
		});
	});

