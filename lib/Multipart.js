//settings 参数：
//settings={
//filedir:'/tmp/',//存放文件的临时地址，建议等上传完成以后再移动至保存文件夹
//onProgress:function(bytesReceived, bytesExpected){},
//onEnd:function(formidableobj){},
//onError:function(error, formidableobj){}
//}

var formidable = require('formidable'),
	outerror = require('./Outerror'),
	RestUtils = require('./RestUtils'),
	onListen = { //默认配置
		onProgress:function(bytesReceived, bytesExpected){},
		onEnd:function(formidableobj){},
		onError:function(error, formidableobj){}
	},
	Multipart = module.exports = function(req, filedir, settings){
		if(!(this instanceof arguments.callee)) return new arguments.callee(req, filedir, settings);
		formidable.IncomingForm.call(this, null);
		this.restFile = {};
		this.restParam = {};
		this.uploadDir = filedir || _restConfig.uploadFolder;//上传文件地址
		if('function' == typeof settings) var callback = {onEnd:settings}; //如果最后一个参数传递了函数，则认为是end回调
		this._intial(req, this._serial(callback||{})); //初始化设置
	};
Multipart.prototype = {
	__proto__:formidable.IncomingForm.prototype,
	_serial:function(callback){ //读取默认配置
		var cb={}
		for(var j in onListen){
			cb[j] = callback[j] || onListen[j];
		}
		return cb;
	},
	_intial:function(req, callback){
		var that = this;
		this.on('progress', function(bytesReceived, bytesExpected){ //传输中，用来做上传进度用
			callback.onProgress(bytesReceived, bytesExpected);
		})
		.on('file', function(field, file) { //文件传输完毕，保存文件信息
			that.restFile[field] = file
		})
		.on('field', function(name, value){ //参数传输完毕
				if(that.restParam[name]) that.restParam[name] += ','+value; //如果是checkbox
				else that.restParam[name] = value;
			})
		.on('end', function(){//上传成功
			req._restPostData = that.restParam; 
			callback.onEnd({
				param : that.restParam,
				file : that.restFile
			});
		})
		.on('error',function(err){//出错记录错误日志
			RestUtils.errorRes(req._restRes, 'Upload file error!');
			outerror('upload file error :' + JSON.stringify(err));
			callback.onError(err,{
				param : that.restParam,
				file : that.restFile
			});	
		});
		that.parse(req);
	}
}