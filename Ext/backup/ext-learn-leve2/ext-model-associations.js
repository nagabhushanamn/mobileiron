/**
 * App.model.field.Money
 */
Ext.define('App.model.field.Money', {
    extend: 'Ext.data.field.Number',
    requires: [
        'Ext.data.validator.Range'
    ],
    alias: 'data.field.money',
    validators: [{
        type: 'range',
        min: 0
    }],
    getType: function () {
        return 'money';
    }
});


// sencha generate model Location Name:string,Row:int,Shelf:int
Ext.define('App.model.Location', {
    extend: 'Ext.data.Model',
    manyToMany: [
        'App.model.Product'
    ],
    fields: [{
            name: 'Name',
            type: 'string'
        },
        {
            name: 'Row',
            type: 'int'
        },
        {
            name: 'Shelf',
            type: 'int'
        }

    ]
});

// sencha generate model Product Name:string,Description:string,Quantity:int,Price:float
Ext.define('App.model.Product', {
    extend: 'Ext.data.Model',
    requires: [
        'App.model.Location',
        'App.model.field.Money',
        'Ext.data.validator.Presence',
        'Ext.data.validator.Length'
    ],
    proxy: {
        type: 'ajax',
        url: 'data/product.json',
        reader: {
            type: 'json'
        }
    },
    manyToMany: [
        'App.model.Location'
    ],
    fields: [{
            name: 'Name',
            type: 'string'
        },
        {
            name: 'Description',
            type: 'string'
        },
        {
            name: 'Quantity',
            type: 'int'
        },
        {
            name: 'Price',
            type: 'money'
        },
        {
            name: 'StockValueConvert',
            type: 'money',
            convert: function (val, rec) {
                return (rec.get('Quantity') * rec.get('Price')).toFixed(2);
            },
            depends: ['Price', 'Quantity']
        },
        {
            name: 'StockValueCalculate',
            type: 'money',
            calculate: function (data) {
                return data.Quantity * data.Price;
            }
        },
        {
            name: 'HistoricSales',
            type: 'auto',
            defaultValue: [4, 9, 12, 66, 9]
        }
    ],
    validators: {
        Name: [{
                type: 'presence'
            },
            {
                type: 'length',
                min: 3
            }
        ],
        Quantity: 'presence'
    }
});




// sencha generate model Sale productId:int,Date:date,Quantity:int,TotalCost:float
Ext.define('App.model.Sale', {
    //extend: 'BizDash.model.Base',
    extend: 'Ext.data.Model',
    requires: [
        'App.model.Product'
    ],
    proxy: {
        type: 'ajax',
        url: 'data/sale.json',
        reader: {
            type: 'json'
        }
    },
    fields: [{
            name: 'productId',
            type: 'int',
            reference: 'App.model.Product'
        },
        {
            name: 'userId',
            type: 'int',
            reference: 'App.model.User'
        },
        {
            name: 'Date',
            type: 'date'
        },
        {
            name: 'Quantity',
            type: 'int'
        },
        {
            name: 'TotalCost',
            type: 'float'
        }
    ]
});

// sencha generate model User Name:string,Email:string,TelNumber:string,Role:string
Ext.define('App.model.User', {
    //extend: 'BizDash.model.Base',
    extend: 'Ext.data.Model',

    proxy: {
        type: 'ajax',
        url: 'data/user.json',
        reader: {
            type: 'json'
        }
    },

    hasMany: [{
        model: 'App.model.Sale',
        name: 'sales'
    }],

    fields: [{
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


// App.model.User.load(1, {
//     success: function (userRecord) {
//         userRecord.sales().load(function () {
//             console.log('User: ', userRecord.get('Name')); // Joe Bloggs
//             console.log('Sales: ', userRecord.sales().getCount()); // 2
//         });
//     }
// });

// var saleRecord = Ext.create('App.model.Sale', {
//     id: 1,
//     userId: 1,
//     productId: 1,
//     Date: new Date(),
//     Quantity: 1,
//     TotalCost: 9.99
// });
// saleRecord.getUser(function (userRecord) {
//     console.log(userRecord.get('Name')) // Joe Bloggs
// });


App.model.Product.load(1, {
    success: function (productRecord) {
        productRecord.locations().load(function () {
            console.log(productRecord.locations().getCount()); // 2
        });
    }
});