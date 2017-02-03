/**
 * BizDash.store.Navigation
 */
Ext.define('BizDash.store.Navigation', {

	extend: 'Ext.data.TreeStore',

	model: 'BizDash.model.NavigationItem',
	autoLoad: true,
	proxy: {
		type: 'ajax',
		url: 'data/navigation.json',
		reader: 'json'
	},
	lazyFill: true,

	autoLoad: true

});