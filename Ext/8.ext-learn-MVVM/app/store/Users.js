Ext.define('UM.store.Users', {
    extend: 'Ext.data.Store',
    //fields: ['Name', 'Email', 'TelNumber', 'Role', 'Photo'],
    model: 'UM.model.User',
    data: [{
            "Name": "John",
            "Email": "john@gmail.com",
            "TelNumber": "0330 122 2800",
            "Role": "Administrator",
            "Photo": "user.png"
        },
        {
            "Name": "Sarah",
            "Email": "sarah@hotmail.com",
            "TelNumber": "0330 122 2800",
            "Role": "Customer",
            "Photo": "user.png"
        }
    ],
    // autoLoad: true,
    // proxy: {
    //     type: 'rest',
    //     url: 'http://localhost:3000/api/persons',
    //     appendId: false,
    //     reader: {
    //         type: 'json',
    //         // rootProperty: 'rows'
    //     },
    //     writer: {
    //     }
    // },
    // autoLoad: true,
    // proxy: {
    //     type: 'localstorage',
    //     id: 'Users'
    // }
});