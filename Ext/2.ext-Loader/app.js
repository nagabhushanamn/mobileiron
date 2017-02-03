Ext.Loader.setConfig({
    enabled: true,
    paths: {
        // App: 'app',
        App2: 'app2'
    }
});
// way-1
// Ext.onReady(function () {
//     Ext.require(['App.pack1.A'], function () {
//         Ext.create('App.pack1.A', {});
//     });
// });
// way-2
Ext.application({
    name: 'App',
    appFolder: 'app',
    requires: [
        'App.pack1.A',
        'App2.pack2.B'
    ],
    launch: function () {
        // Ext.create('App.pack1.A', {});
        // Ext.create('App2.pack2.B', {});
    }
});