var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PMtree = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,depth: { type: Number }
		,parentId: { type: String }
		,index: { type: Number }
		,name1: { type: String }
		,name2: { type: String }
		,leaf: { type: Boolean }
});

exports.PMtree.plugin(commonPlugin);
