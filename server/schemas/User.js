var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.User = new mongoose.Schema({ 
		_id: { type: String }
		,name: { type: String }
});

exports.User.plugin(commonPlugin);
