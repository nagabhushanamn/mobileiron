Ext.define('BizDash.view.product.ProductForm', {
	extend: 'Ext.form.Panel',

	requires: [
		'BizDash.view.product.ProductFormController',
		'BizDash.view.product.ProductFormModel'
	],
	title: 'Product Form',
	xtype: 'product-ProductForm',
	frame: true,
	controller: 'ProductForm',
	viewModel: {
		type: 'ProductForm'
	},

	bind: {
		title: '{rec.Name}'
	},

	//ui: 'product',

	defaults: {
		margin: 5,
		paddding: 5
	},
	items: [{
			xtype: 'textfield',
			fieldLabel: 'Name',
			bind: '{rec.Name}'
		},
		{
			xtype: 'textarea',
			fieldLabel: 'Description',
			height: 100,
			bind: '{rec.Description}'
		},
		{
			xtype: 'numberfield',
			fieldLabel: 'Quantity',
			bind: '{rec.Quantity}'
		},
		{
			xtype: 'numberfield',
			fieldLabel: 'Price',
			decimalPrecision: 2,
			bind: '{rec.Price}'
		}
	],
	bbar: [{
			xtype: 'button',
			text: 'Save',
			ui: 'action',
			listeners: {
				click: 'onSave'
			}
		},
		{
			xtype: 'button',
			text: 'Cancel',
			ui: 'cancel',
			listeners: {
				click: 'onCancel'
			}
		}
	]
});