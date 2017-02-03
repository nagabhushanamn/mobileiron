Ext.define('UM.model.User', {
    extend: 'Ext.data.Model',
    idProperty:"TelNumber",
    fields: ['Name', 'Email', 'TelNumber', 'Role', 'Photo']
});