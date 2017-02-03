
// Ext-store

Ext.define('App.model.User', {
    extend: 'Ext.data.Model',
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


Ext.define('App.store.Users', {
    extend: 'Ext.data.Store',
    model: 'App.model.User'
});

var usersStore = Ext.create('App.store.Users');

usersStore.add([{
    Name: 'Nag',
    Email: 'nag@gmail.com',
    TelNumber: '0330 122 2800',
    Role: 'Trainer'
}, {
    Name: 'Ria',
    Email: 'ria@gmail.com',
    TelNumber: '0330 122 2800',
    Role: 'Administrator'
}, {
    Name: 'Brian',
    Email: 'brian@aol.com',
    TelNumber: '0330 122 2800',
    Role: 'Supplier'
}, {
    Name: 'Karen',
    Email: 'karen@gmail.com',
    TelNumber: '0330 122 2800',
    Role: 'Administrator'
}]);


// ------------------------------------------------------------------------

// Store stats
// console.log(usersStore.getCount());

// ------------------------------------------------------------------------

// Retrieving a record
// var userRecord = usersStore.getAt(0);

// ------------------------------------------------------------------------


// Finding specific records
// var userRecord = usersStore.findRecord('Name', 'nag');

// ------------------------------------------------------------------------

// Complex Search
// var userRecord = usersStore.findBy(function (record) {
//     return record.get('Name') === 'Nag' && record.get('TelNumber') === '0330 122 2800';
// });

// ------------------------------------------------------------------------

// Filtering a store

// console.log(usersStore.getCount()); // 4
// usersStore.addFilter({
//     property: 'Name',
//     value: 'Nag'
// });
// console.log(usersStore.getCount()); // 1

// or

// console.log(usersStore.getCount()); // 4
// usersStore.filterBy(function (record) {
//     return record.get('Name') === 'Nag' && record.get('Email') === 'nag@gmail.com';
// });
// console.log(usersStore.getCount()); // 1
// usersStore.clearFilter();
// console.log(usersStore.getCount()); // 4

// ------------------------------------------------------------------------

// Sorting a store

// console.log(usersStore.getAt(0).get('Name')); // Nag
// usersStore.sort('Name', 'ASC');
// console.log(usersStore.getAt(0).get('Name')); // Brian
// console.log(usersStore.getAt(3).get('Name')); // Ria
// usersStore.sort('Name', 'DESC');
// console.log(usersStore.getAt(0).get('Name')); // Ria
// console.log(usersStore.getAt(3).get('Name')); // Brian


// usersStore.sort({
//     sorterFn: function (a, b) {
//         var aName = a.get('Name').split('').reverse().join(''),
//             bName = b.get('Name').split('').reverse().join('');
//         return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
//     },
//     direction: 'ASC'
// });


// at store Level

// Ext.define('App.store.Users', {
//     extend: 'Ext.data.Store',
//     model: 'App.model.User',
//     sorters: [{
//         property: 'Name',
//         direction: 'DESC'
//     }]
// });

// ------------------------------------------------------------------------
// Grouping

// usersStore.group('Role', 'ASC');

// var groups = usersStore.getGroups();
// console.log(groups.getCount()); // 3 groups: Administrator,Trainer,Supplier

// console.log(groups.getAt(0).getGroupKey()); // Administrator
// console.log(groups.getAt(1).getGroupKey()); // Supplier
// console.log(groups.getAt(2).getGroupKey()); // Trainer
// console.log(groups.getAt(0).getCount()); // 2
// console.log(groups.getAt(0).getAt(0).get('Name')); // Ria
// console.log(groups.getAt(0).getAt(1).get('Name')); // Karen


// usersStore.clearGrouping();
// usersStore.group({
//     groupFn: function (rec) {
//         var email = rec.get('Email'),
//             emailSplit = email.split('@'),
//             domain = emailSplit[1];
//         return domain;
//     },
//     direction: 'DESC'
// });

// groups = usersStore.getGroups();
// console.log(groups.getCount()); // 3 groups: hotmail.com,//gmail.com, aol.com
// console.log(groups.getAt(0).getGroupKey()); // gmail.com
// console.log(groups.getAt(1).getGroupKey()); // aol.com
// console.log(groups.getAt(0).getCount()); // 3
// console.log(groups.getAt(0).getAt(0).get('Name')); // Ria


// ------------------------------------------------------------------------
// Chained stores


// store/users/Admins.js
Ext.define('App.store.users.Admins', {
    extend: 'Ext.data.ChainedStore',
    config: {
        source: usersStore,
        filters: [{
            property: 'Role',
            value: 'Administrator'
        }]
    }
});
// store/users/Customers.js
Ext.define('App.store.users.Customers', {
    extend: 'Ext.data.ChainedStore',
    config: {
        source: usersStore,
        filters: [{
            property: 'Role',
            value: 'Customer'
        }]
    }
});
// store/users/Suppliers.js
Ext.define('App.store.users.Suppliers', {
    extend: 'Ext.data.ChainedStore',
    config: {
        source: usersStore,
        filters: [{
            property: 'Role',
            value: 'Supplier'
        }]
    }
});

// var adminStore = Ext.create('App.store.users.Admins');
// var customerStore = Ext.create('App.store.users.Customers');
// var supplierStore = Ext.create('App.store.users.Suppliers');

// console.log(usersStore.getCount()); // 4
// console.log(adminStore.getCount()); // 2
// console.log(customerStore.getCount()); // 1
// console.log(supplierStore.getCount()); // 1

// ------------------------------------------------------------------------

// TreeStores and TreeModels

Ext.define('App.model.NavigationItem', {
    extend: 'Ext.data.TreeModel',
    fields: [{
        name: 'Label',
        type: 'string'
    }, {
        name: 'Route',
        type: 'string'
    }]
});

Ext.define('App.store.Navigation', {
    extend: 'Ext.data.TreeStore',
    model: 'App.model.NavigationItem'
});


var navigationStore = Ext.create('App.store.Navigation');
navigationStore.setRoot({
    Label: 'Root',
    children: [{
        Label: 'Home',
        Route: '/home'
    }, {
        Label: 'Users',
        Route: '',
        children: [{
            Label: 'Manage Users',
            Route: '/manage-users',
            leaf: true
        }, {
            Label: 'Add User',
            Route: '/add-user',
            leaf: true
        }]
    }]
});

// append a node at the same level as 'Home' and 'Users'
navigationStore.getRoot().appendChild({
    Label: 'Orders',
    Route: '/orders'
});
// find the 'Users' node and append a node to it
navigationStore.getRoot()
    .findChild('Label', 'Users', true)
    .appendChild({
        Label: 'Import Users',
        Route: '/import-users'
    });

// ------------------------------------------------------------------------
