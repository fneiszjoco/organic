Ext.define('designer.model.Mytree', { 
 	 extend: 'designer.model.persistent',
 	 alias: 'Mytree'
 	 
 	 ,fields: [
 	 	 { name: 'leaf', type: 'string' }
 	 	 ,{ name: 'dept', type: 'int' }
 	 	 ,{ name: 'parent', type: 'string' }
 	 	 ,{ name: 'index', type: 'int' }
 	 	 ,{ name: 'name1', type: 'string' }
 	 	 ,{ name: 'name2', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'leaf', type: 'presence' }
 	 	 ,{ field: 'dept', type: 'presence' }
 	 	 ,{ field: 'parent', type: 'presence' }
 	 	 ,{ field: 'index', type: 'presence' }
 	 	 ,{ field: 'name1', type: 'presence' }
 	 	 ,{ field: 'name2', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 