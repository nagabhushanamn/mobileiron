Ext.define('UM.view.user.List', {
    extend: 'Ext.grid.Panel',
    // alias:'widget.userlist',
    xtype: 'userlist',
    title: 'All Users',
    store: 'Users',
    initComponent: function () {
        // this.store = {
        //     fields: ['Name', 'Email', 'TelNumber', 'Role','Photo'],
        //     data: [{
        //             "Name": "John",
        //             "Email": "john@gmail.com",
        //             "TelNumber": "0330 122 2800",
        //             "Role": "Administrator",
        //             "Photo": "user.png"
        //         },
        //         {
        //             "Name": "Sarah",
        //             "Email": "sarah@hotmail.com",
        //             "TelNumber": "0330 122 2800",
        //             "Role": "Customer",
        //             "Photo": "user.png"
        //         }
        //     ]
        // };
        this.columns = [{
                header: 'Name',
                dataIndex: 'Name',
                flex: 1
            },
            {
                header: 'Email',
                dataIndex: 'Email',
                flex: 1
            },
            {
                header: 'TelNumber',
                dataIndex: 'TelNumber',
                flex: 1
            },
            {
                header: 'Role',
                dataIndex: 'Role',
                flex: 1
            }
        ]
        this.callParent(arguments);
    }
});