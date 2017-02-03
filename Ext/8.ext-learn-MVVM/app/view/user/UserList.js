Ext.define('UM.view.user.UserList', {
    extend: 'Ext.grid.Panel',
    xtype: 'userslist',
    title: 'All Users',
    bind: {
        store:'{users}'
    },
    initComponent: function () {
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