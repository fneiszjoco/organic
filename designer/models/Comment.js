Ext.define('designer.model.Comment', { 
 	 extend: 'designer.model.MySchema',
 	 alias: 'Comment'
 	 
 	 ,fields: [
 	 	 { name: 'title', type: 'string' }
 	 	 ,{ name: 'body', type: 'string' }
 	 	 ,{ name: 'date', type: 'date', defaultValue: 'Fri Apr 27 2012 00:00:00 GMT+0200 (CEST)' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'title', type: 'presence' }
 	 	 ,{ field: 'body', type: 'presence' }
 	 	 ,{ field: 'date', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 