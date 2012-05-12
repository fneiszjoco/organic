Ext.define('designer.model.persistent', { 
 	 extend: 'designer.model.CRBaseObject',
 	 alias: 'persistent'
 	 
 	 ,fields: [
 	 	 { name: 'created', type: 'date', defaultValue: 'Fri Apr 27 2012 21:45:43 GMT+0200 (CEST)' }
 	 	 ,{ name: 'modified', type: 'date', defaultValue: 'Fri Apr 27 2012 21:45:43 GMT+0200 (CEST)' }
 	 	 ,{ name: 'version', type: 'int' }
 	 	 ,{ name: 'deleted', type: 'boolean' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,fieldInfos: [
 	 	 { name: 'created' }
 	 	 ,{ name: 'modified' }
 	 	 ,{ name: 'version' }
 	 	 ,{ name: 'deleted' }
 	 ]
 });
 