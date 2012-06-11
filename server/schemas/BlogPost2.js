var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');
var Comment = require('../schemas/Comment.js').Comment;

exports.BlogPost2 = new mongoose.Schema({ 
		_id: { type: String }
		,author_id: { type: String, ref: 'User' }
		,title: { type: String }
		,body: { type: String }
		,date: { type: Date, default: 'Fri Apr 27 2012 00:00:00 GMT+0200 (CEST)' }
		,comments: [Comment]
});

exports.BlogPost2.plugin(commonPlugin);
