Ext.define('designer.model.BlogPost2', { 
 	 extend: 'designer.model.MySchema',
 	 alias: 'BlogPost2'
 	 
 	 ,fields: [
 	 	 { name: 'author_id', type: 'string' }
 	 	 ,{ name: 'title', type: 'string' }
 	 	 ,{ name: 'body', type: 'string' }
 	 	 ,{ name: 'date', type: 'date', defaultValue: 'Fri Apr 27 2012 00:00:00 GMT+0200 (CEST)' }
 	 ]
 	 ,associations: [
 	 	 { type: 'hasMany', name: 'comments', associationKey: 'comments', model: 'designer.model.Comment' , primaryKey: '_id' }
 	 ]
 	 ,validations: [
 	 	 { field: 'author_id', type: 'presence' }
 	 	 ,{ field: 'title', type: 'presence' }
 	 	 ,{ field: 'body', type: 'presence' }
 	 	 ,{ field: 'date', type: 'presence' }
 	 	 ,{ field: 'comments', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 