/*
*RestPostLimit.js ���ж�post��http����ͷ�Ϸ���ģ��
*
*��post���� content-length �����ڻ򳬴�ʱ����
*
*��post���� content-type �����ڱ���
*
*exports fn(req, res, cb)
*/
var limit = _restConfig.postLimit,
	msg =  require('./msg/msg'),
	postLimit = module.exports = function (req, res, callback){//�жϺ���
		var received = 0,
			len = req.headers['content-length'] ? parseInt(req.headers['content-length'], 10) : null,
			type = req.headers['content-type'] || null;
		if(!len) return callback(msg.resmsg.postError1, req, res);//������ content-length
		else if(len > limit) return callback(msg.resmsg.postError2, req, res);// content-length ����
		else if(!type) return callback(msg.resmsg.postError3, req, res);// content-type ������
		else return callback(null, req, res);
	};