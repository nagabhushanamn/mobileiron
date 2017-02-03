//-------------------------------------------------------------------------
// Ajax
//-------------------------------------------------------------------------

// Ext.Ajax.request({
//   url: 'data/users.json',
//   success: function (response, options) {
//     var user = Ext.decode(response.responseText);
//     console.log(user);
//   },
//   failure: function (response, options) {
//     console.log('The request failed! Response Code: ' + response.status);
//   }
// });

//-------------------------------------------------------------------------
// Proxy
//-------------------------------------------------------------------------

// Model
Ext.define('App.model.User', {
  extend: 'Ext.data.Model',
  idProperty: 'id',
  fields: [{
      name: 'id',
      type: 'string'
    },
    {
      name: 'Name',
      type: 'string'
    },
    {
      name: 'Email',
      type: 'string'
    },
    {
      name: 'TelNumber',
      type: 'string'
    },
    {
      name: 'Role',
      type: 'string'
    },
    {
      name: 'Photo',
      type: 'string'
    }
  ]
});

//-------------------------------------------------------------------------

// Store + ajax-proxy

// Ext.define('App.store.Users', {
//   extend: 'Ext.data.Store',
//   model: 'App.model.User',
//   // autoLoad:true,
//   proxy: {
//     type: 'ajax', // ajax , 
//     url: 'data/users.json',
//     reader: {
//       type: 'json',
//       rootProperty: 'rows'
//     }
//   }
// });

// var usersStore = Ext.create('App.store.Users');

// usersStore.load(function (records, operation, success) {
//   console.log(usersStore.getCount()); // 4
//   console.log(records); // [ ...record instances... ]
// });

//-------------------------------------------------------------------------

// Store + LocalStorage-Proxy

// Ext.define('App.store.Users', {
//   extend: 'Ext.data.Store',
//   model: 'App.model.User',
//   autoLoad:true,
//   proxy: {
//     type: 'localstorage',
//     id: 'users'
//   }
// });

// var usersStore = Ext.create('App.store.Users');

// usersStore.add([{
//   Name: 'John',
//   Email: 'john@gmail.com',
//   TelNumber: ' 0330 122 2800',
//   Role: 'Administrator'
// }]);

// usersStore.sync();

//-------------------------------------------------------------------------

// Store with REST Proxy

Ext.define('App.store.Users', {
  extend: 'Ext.data.Store',
  model: 'App.model.User',
  proxy: {
    type: 'rest',
    url: 'http://localhost:3000/api/persons',
    appendId:false,
    reader: {
      type: 'json',
      // rootProperty: 'rows'
    },
    writer: {
      // exclude:'id'
    }
  }
});

var usersStore = Ext.create('App.store.Users');

usersStore.load();

// usersStore.add({
//   Name: 'Abc',
//   Email: 'ria@gmail.com',
//   TelNumber: ' 8330 122 2800',
//   Role: 'Trainer'
// });

// usersStore.sync();

//-------------------------------------------------------------------------