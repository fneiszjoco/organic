Ext.define('designer.model.PersistentMaster', { 
 	 extend: 'designer.model.CRBaseObject',
 	 alias: 'PersistentMaster'
 	 
 	 ,fields: [
 	 	 { name: 'created', type: 'date' }
 	 	 ,{ name: 'modified', type: 'date' }
 	 	 ,{ name: 'version', type: 'int' }
 	 	 ,{ name: 'deleted', type: 'boolean' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 