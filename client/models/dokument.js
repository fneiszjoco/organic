Ext.define('designer.model.dokument', { 
 	 extend: 'designer.model.persistent',
 	 alias: 'dokument'
 	 
 	 ,fields: [
 	 	 { name: '_id', type: 'string' }
 	 	 ,{ name: 'cim', type: 'auto' }
 	 	 ,{ name: 'datum', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,fieldInfos: [
 	 	 { name: '_id' }
 	 	 ,{ name: 'cim' }
 	 	 ,{ name: 'datum' }
 	 ]
 });
 