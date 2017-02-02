// Ext.data



// Modeling Data Structures for Your UI

/*
    e.g
  
    A Location can contain one or more Products
    A Product can be found in one or more Locations
    A Product can have multiple Sales
    A Sale can involve one or more Products
    A User can have multiple Sales
    A User can have multiple Messages

*/


//----------------------------------------------------------
// Basic Model
//---------------------------------------------------------- 

/*
    field :
    ---------
    field ==> {name,type,mapping}
    field type ==> string, int, float, date, boolean, and auto.

*/

// Ext.define('App.model.Product', {
//     extend: 'Ext.data.Model',
//     fields: [{
//             name: 'Name',
//             type: 'string'
//         }, {
//             name: 'Description',
//             type: 'string',
//         },
//         {
//             name: 'Quantity',
//             type: 'int',
//             mapping: 'qty'
//         }, {
//             name: 'Price',
//             type: 'float'
//         }
//     ],
// });


//----------------------------------------------------------
// Model - Validation
//---------------------------------------------------------- 

/*
     validators:
    -----------
    presence, length, format, inclusion, exclusion, range, and email.  ( Ext.data.validator.* )

*/


// Ext.define('App.model.Product', {
//     extend: 'Ext.data.Model',
//     fields: [{
//             name: 'Name',
//             type: 'string'
//         }, {
//             name: 'Description',
//             type: 'string',
//         },
//         {
//             name: 'Quantity',
//             type: 'int',
//             mapping: 'qty'
//         }, {
//             name: 'Price',
//             type: 'float'
//         }
//     ],
//     validators: {
//         Name: [{
//                 type: 'presence'
//             },
//             {
//                 type: 'length',
//                 min: 3
//             }
//         ],
//         Quantity: 'presence',
//         Price: {
//             type: 'range',
//             min: 0
//         }
//     }
// });


// var product = Ext.create('App.model.Product', {
//     Name: 'Laptop',
//     Quantity: 10,
//     Price: -10
// });


//----------------------------------------------------------
// Model - Custom Types
//---------------------------------------------------------- 

// Ext.define('App.model.field.Money', {
//     extend: 'Ext.data.field.Number',
//     alias: 'data.field.money',
//     validators: [{
//         type: 'range',
//         min: 100
//     }],
//     getType: function () {
//         return 'money';
//     }
// });

// Ext.define('App.model.Product', {
//     extend: 'Ext.data.Model',
//     fields: [{
//             name: 'Name',
//             type: 'string'
//         }, {
//             name: 'Description',
//             type: 'string',
//         },
//         {
//             name: 'Quantity',
//             type: 'int',
//             mapping: 'qty'
//         }, {
//             name: 'Price',
//             type: 'money'
//         }
//     ],
// });

// var product = Ext.create('App.model.Product', {
//     Name: 'Laptop',
//     Quantity: 10,
//     Price: 10
// });


//----------------------------------------------------------
// Model - Data Convertors
//---------------------------------------------------------- 


// Ext.define('App.model.Product', {
//     extend: 'Ext.data.Model',
//     fields: [{
//             name: 'Name',
//             type: 'string'
//         }, {
//             name: 'Description',
//             type: 'string',
//         },
//         {
//             name: 'Quantity',
//             type: 'int',
//             mapping: 'qty'
//         }, {
//             name: 'Price',
//             type: 'money'
//         },
//         // {
//         //     name: 'StockValue',
//         //     type: 'money',
//         //     convert: function (val, rec) {
//         //         return rec.get('Quantity') * rec.get('Price');
//         //     },
//         //     depends: ['Price', 'Quantity']
//         // }
//         {
//             name: 'StockValue',
//             type: 'money',
//             calculate: function (data) {
//                 return data.Quantity * data.Price;
//             }
//         }
//     ],
// });

// var product = Ext.create('App.model.Product', {
//     Name: 'Laptop',
//     Quantity: 10,
//     Price: 10
// });


