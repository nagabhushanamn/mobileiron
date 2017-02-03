/**
 * This class is the view model .
 */
Ext.define('App.view.calc.CalcModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.calc',
	constructor: function () {
		console.log('CalcViewModel instance created...');
		this.callParent(arguments);
	},
	data: {
		display: 0.0
	}
});