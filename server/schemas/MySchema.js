var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.MySchema = new mongoose.Schema({ 
		_id: { type: String }
});

exports.MySchema.plugin(commonPlugin);
