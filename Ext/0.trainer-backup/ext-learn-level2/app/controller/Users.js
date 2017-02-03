Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',
    stores: ['Users'],
    models: ['User'],
    views: [
        'user.List',
        'user.Edit'
    ],
    init: function () {

        // console.log('Initialized Users! This happens before the Application launch function is called');

        // this.control({
        //     'viewport > panel': {
        //         render: this.onPanelRendered
        //     }
        // });

        this.control({
            'userlist': {
                itemdblclick: this.editUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            }
        });

    },
    onPanelRendered: function () {
        console.log('The panel was rendered');
    },
    editUser: function (grid, record) {
        //console.log('Double clicked on ' + record.get('name'));
        var view = Ext.widget('useredit');
        view.down('form').loadRecord(record);
    },
    updateUser: function (button) {
        console.log('clicked the Save button');
        var win = button.up('window'),
            form = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();
        // synchronize the store after editing the record
        this.getUsersStore().sync();

    }
});