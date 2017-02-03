/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */


Ext.define('BizDash.view.main.Main', {
    extend: 'Ext.container.Container',
    title: 'BizDash',
    xtype: 'main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    defaults: {
        margin: 5,
        flex: 1,
    },
    items: [{
        xtype: 'panel',
        title: 'Products',
        items: [{
            xtype: 'product-productGrid',
        }]
    }, {
        xtype: 'user-UsersView',
        flex: 1,
    }],
    getButton: function () {
        return this.query('button[text="Button"]')[0];
    }
});