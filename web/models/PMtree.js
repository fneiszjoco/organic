Ext.define('web.model.PMtree', { 
 	 extend: 'web.model.PersistentMaster',
 	 alias: 'PMtree'
 	 
 	 ,fields: [
 	 	 { name: 'depth', type: 'int' }
 	 	 ,{ name: 'parentId', type: 'string' }
 	 	 ,{ name: 'index', type: 'int' }
 	 	 ,{ name: 'name1', type: 'string' }
 	 	 ,{ name: 'name2', type: 'string' }
 	 	 ,{ name: 'leaf', type: 'boolean' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'depth', type: 'presence' }
 	 	 ,{ field: 'parentId', type: 'presence' }
 	 	 ,{ field: 'index', type: 'presence' }
 	 	 ,{ field: 'name1', type: 'presence' }
 	 	 ,{ field: 'name2', type: 'presence' }
 	 	 ,{ field: 'leaf', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 Ext.data.NodeInterface.decorate(Ext.create('web.model.PMtree'));
 