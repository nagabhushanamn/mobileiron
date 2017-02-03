// 

Ext.application({
  name: 'UM',

  stores: [
    'Users'
  ],
  controllers: [
    'Users' // app/controller/Users.js
  ],

  launch: function () {
    console.log('App launched');

    // Ext.getStore('Users')
    //   .add([{
    //       "Name": "John",
    //       "Email": "john@gmail.com",
    //       "TelNumber": "0330 122 2800",
    //       "Role": "Administrator",
    //       "Photo": "user.png"
    //     },
    //     {
    //       "Name": "Sarah",
    //       "Email": "sarah@hotmail.com",
    //       "TelNumber": "0330 122 2800",
    //       "Role": "Customer",
    //       "Photo": "user.png"
    //     }
    //   ]);
    // Ext.getStore('Users').sync();



    Ext.create('Ext.container.Viewport', {
      layout: 'fit',
      items: [{
        xtype: 'userlist'
      }]

    });

  }
});