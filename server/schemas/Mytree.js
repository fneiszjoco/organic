var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.Mytree = new mongoose.Schema({ 
		_id: { type: String }
		,created: { type: String }
		,modifyd: { type: String }
		,deleted: { type: String }
		,version: { type: String }
		,leaf: { type: String }
		,dept: { type: Number }
		,parent: { type: String }
		,index: { type: Number }
		,name1: { type: String }
		,name2: { type: String }
});

exports.Mytree.plugin(commonPlugin);
