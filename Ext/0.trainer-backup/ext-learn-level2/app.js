Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'AM',
    appFolder: 'app',
    controllers: [
        'Users'
    ],
    requires: [
        'App.view.calc.Calc'
    ],
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'auto',
            scrollable:true,
            items: [{
                xtype: 'app-calc',
            }]
        });
    }
});