Ext.define('designer.model.recept', { 
 	 extend: 'designer.model.dokument',
 	 alias: 'recept'
 	 
 	 ,fields: [
 	 	 { name: 'egész', type: 'int' }
 	 	 ,{ name: 'szoveg', type: 'int' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,fieldInfos: [
 	 	 { name: 'egész' }
 	 	 ,{ name: 'szoveg' }
 	 ]
 });
 