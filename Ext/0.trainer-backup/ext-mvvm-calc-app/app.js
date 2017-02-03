// 

Ext.application({
  name: 'UM',

  stores: [],
  controllers: [],
  requires: [
    'App.view.calc.Calc'
  ],
  launch: function () {
    console.log('App launched');

    Ext.create('Ext.container.Viewport', {
      layout: {
        type: 'hbox',
        align: 'stretch'
      },
      items: [{
        xtype: 'app-calc'
      }, {
        xtype: 'app-calc'
      }]

    });

  }
});