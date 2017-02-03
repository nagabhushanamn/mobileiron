Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    //fields: ['name', 'email'],
    model: 'AM.model.User',
    // data: [
    //     {name: 'Ed',    email: 'ed@sencha.com'},
    //     {name: 'Tommy', email: 'tommy@sencha.com'}
    // ],
    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'data/my-users.json',
        reader: {
            type: 'json',
            rootProperty: 'users',
            successProperty: 'success'
        }
    }
});