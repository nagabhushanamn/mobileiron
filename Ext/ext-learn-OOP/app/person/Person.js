Ext.define('MobileIron.person.Person', {
    alias:'folk',
    name: 'Nil',
    age: 0,
    constructor: function (config) {
        Ext.apply(this, config);
        console.log('Person created...');
    },
    sayName: function () {
        console.log('im ' + this.name);
    },
    sayAge: function () {
        console.log('im ' + this.age);
    }
});