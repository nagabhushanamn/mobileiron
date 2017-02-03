Ext.define('UM.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    requires: [
        'UM.model.User'
    ],
    data: {
        curretUser: null
    },
    stores: {
        users: {
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
            ]

        }
    }
});