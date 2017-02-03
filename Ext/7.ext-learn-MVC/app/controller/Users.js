//..

Ext.define('UM.controller.Users', {
    extend: 'Ext.app.Controller',
    models: [
        'User'
    ],
    views: [
        'user.List',
        'user.Edit'
    ],
    init: function () {
        console.log('Users-controller created');

        // to bind/control view with listeners
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            },
            'userlist': {
                itemdblclick: this.editUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            }
        });

    },
    onPanelRendered: function () {
        console.log('The panel was rendered..');
    },
    editUser: function (grid, record) {
        //console.log('double clicked on ' + record.get('Name'));
        var win = Ext.widget('useredit');
        win.down('form').loadRecord(record);
        //win.show();
    },
    updateUser: function (button) {
        var win = button.up('window');
        var form = win.down('form');
        var record = form.getRecord();
        var values = form.getValues();
        record.set(values);
        win.close();
        Ext.getStore('Users').sync();
    }
});