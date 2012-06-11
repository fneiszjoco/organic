var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.persistent = new mongoose.Schema({ 
		_id: { type: String }
		,created: { type: String }
		,modifyd: { type: String }
		,deleted: { type: String }
		,version: { type: String }
});

exports.persistent.plugin(commonPlugin);
