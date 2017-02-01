Ext.define('MobileIron.emp.Employee', {
    extend:'MobileIron.person.Person',
    constructor: function (config) {
        Ext.apply(this, config);
        console.log('Person created...');
    }
});