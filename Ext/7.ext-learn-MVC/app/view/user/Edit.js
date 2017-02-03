Ext.define('UM.view.user.Edit', {
    extend: 'Ext.window.Window',
    xtype: 'useredit',
    title: 'Edit User',
    autoShow:true,
    initComponent: function () {

        this.items = [{
            xtype: 'form',
            margin: 10,
            defaults: {
              padding:5  
            },
            items: [{
                    xtype: 'textfield',
                    name: 'Name',
                    fieldLabel: 'Name'
                },
                {
                    xtype: 'textfield',
                    name: 'Email',
                    fieldLabel: 'Email'
                }
            ]
        }];

        this.buttons = [{
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
            }
        ]

        this.callParent(arguments);
    }
});