/**
 * http://usejsdoc.org/
 */

Ext.define('App.view.calc.Calc', {
	extend: 'Ext.panel.Panel',
	xtype: 'app-calc',

	// constructor: function () {
	// 	console.log('CalcView instance created...');
	// },

	requires: [
		'App.view.calc.CalcController',
		'App.view.calc.CalcModel'
	],
	resizable: false,
	layout: {
		type: 'table',
		columns: 4
	},
	controller: 'calc',
	viewModel: {
		type: 'calc'
	},

	/*
	 * Defaults properties to be used for the child items. Any child can
	 * override it
	 */

	defaultType: 'button',
	defaults: {
		width: 50,
		height: 50,
		cls: 'btn',
		handler: 'onClickNumber'
	},

	header: {
		title: 'Calculator'
	},

	items: [{
			xtype: 'textfield',
			colspan: 4,
			width: 200,
			cls: 'display',
			bind: {
				value: '{display}'
			},
			padding: 0

		},
		{
			text: 'C',
			colspan: 2,
			width: 100,
			cls: 'btn-green',
			handler: 'onClickClear'
		},
		{
			text: '+/-',
			cls: 'btn-green',
			handler: 'onClickChangeSign'
		},
		{
			text: '&divide;',
			cls: 'btn-orange',
			handler: 'onClickOp'
		},
		{
			text: '7'
		},
		{
			text: '8'
		},
		{
			text: '9'
		},
		{
			text: '&times;',
			cls: 'btn-orange',
			handler: 'onClickOp'
		},
		{
			text: '4'
		},
		{
			text: '5'
		},
		{
			text: '6'
		},
		{
			text: '-',
			cls: 'btn-orange',
			handler: 'onClickOp'
		},
		{
			text: '1'
		},
		{
			text: '2'
		},
		{
			text: '3'
		},
		{
			text: '+',
			cls: 'btn-orange',
			handler: 'onClickOp'
		},
		{
			text: '0',
			width: 100,
			colspan: 2
		},
		{
			text: '.',
			handler: 'onClickDot'
		},
		{
			text: '=',
			cls: 'btn-orange',
			handler: 'onClickOp'
		}
	]

});