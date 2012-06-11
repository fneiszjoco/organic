Ext.define('designer.ModelDownloader', { 
 	 Download: function() {
 	 	 Ext.syncRequire('designer.model.CRBaseObject');
 	 	 Ext.syncRequire('designer.model.PersistentMaster');
 	 	 Ext.syncRequire('designer.model.PPtree');
 	 }
 });
 