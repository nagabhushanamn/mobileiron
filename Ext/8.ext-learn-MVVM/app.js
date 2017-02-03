// 

Ext.application({
  name: 'UM',

  stores: [
    //'Users'
  ],
  controllers: [],

  requires: [
    'UM.view.main.Main'
  ],

  launch: function () {
    Ext.widget('main-app', {renderTo:Ext.getBody()});
  }
});