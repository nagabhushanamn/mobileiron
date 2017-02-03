Ext.define('UM.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'main-app',
    requires: [
        'UM.view.main.MainController',
        'UM.view.main.MainModel',
        'UM.view.user.UserList',
        'UM.view.user.UserForm',
    ],
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    defaults: {
        flex: 1,
        margin: 5
    },
    items: [{
            xtype: 'userslist'
        },
        {
            xtype: 'userform'
        }
    ]


});