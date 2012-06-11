Ext.define('designer.model.persistent', { 
 	 extend: 'designer.model.MySchema',
 	 alias: 'persistent'
 	 
 	 ,fields: [
 	 	 { name: 'created', type: 'string' }
 	 	 ,{ name: 'modifyd', type: 'string' }
 	 	 ,{ name: 'deleted', type: 'string' }
 	 	 ,{ name: 'version', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'created', type: 'presence' }
 	 	 ,{ field: 'modifyd', type: 'presence' }
 	 	 ,{ field: 'deleted', type: 'presence' }
 	 	 ,{ field: 'version', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 