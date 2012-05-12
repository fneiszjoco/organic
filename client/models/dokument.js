Ext.define('designer.model.dokument', { 
 	 extend: 'designer.model.persistent',
 	 alias: 'dokument'
 	 
 	 ,fields: [
 	 	 { name: '_id', type: 'date', defaultValue: 'Fri Apr 27 2012 21:45:43 GMT+0200 (CEST)' }
 	 	 ,{ name: 'cim', type: 'auto' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,fieldInfos: [
 	 	 { name: '_id' }
 	 	 ,{ name: 'cim' }
 	 ]
 });
 