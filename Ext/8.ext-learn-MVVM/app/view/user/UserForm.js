Ext.define('UM.view.user.UserForm', {
    extend: 'Ext.form.Panel',
    xtype: 'userform',
    title: 'Edit User',
    bodyPadding: 10,
    initComponent: function () {

        this.items = [{
                xtype: 'textfield',
                name: 'Name',
                fieldLabel: 'Name'
            },
            {
                xtype: 'textfield',
                name: 'Email',
                fieldLabel: 'Email'
            }
        ];

        this.buttons = {
            padding: '4 9 5 9',
            items: [{
                    text: 'Save',
                },
                {
                    text: 'Cancel',
                }
            ]
        };

        this.callParent(arguments);
    }
});