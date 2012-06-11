var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.Comment = new mongoose.Schema({ 
		_id: { type: String }
		,title: { type: String }
		,body: { type: String }
		,date: { type: Date, default: 'Fri Apr 27 2012 00:00:00 GMT+0200 (CEST)' }
});

exports.Comment.plugin(commonPlugin);
