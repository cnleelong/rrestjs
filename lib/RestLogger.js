if(_restConfig.isLog){ //如果开启日志
	var	log4js = require('log4js');//日志模块加载进来
	log4js.configure({
	 "appenders": [
		{ 
		  "category": _restConfig.server, 
		  "type": "logLevelFilter",
		  "level": _restConfig.logLevel,
		  "appender": {
			"type": "file",
			"filename": _restConfig.baseDir+_restConfig.logPath, 
			"maxLogSize":_restConfig.logMaxSize,
			"backups":_restConfig.logFileNum,
		  }
		},
	 ],
	})//日志的配置
	var restlog = module.exports = log4js.getLogger(_restConfig.server);
}