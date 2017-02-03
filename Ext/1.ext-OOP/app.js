Ext.Loader.setConfig({
    enabled: true,
    paths: {
        MyApp: 'src'
    }
});


// Ext.onReady(function () {

//     //--------------------------------------------    
//     // synchronous class-Loader
//     //--------------------------------------------

//     // var p1 = Ext.create('App.emp.Employee', {
//     //     name: 'EMP'
//     // });
//     // p1.sayName();

//     //--------------------------------------------
//     // asynchronous class-Loader
//     //--------------------------------------------

//     // Ext.require('App.emp.Employee', function () {
//     //     var p1 = Ext.create('App.emp.Employee', {
//     //         name: 'EMP'
//     //     });
//     //     p1.sayName();

//     // });


// });

//-----------------------------------------------------------


// Ext.onReady(function () {

//--------------------------------------------
// asynchronous class-Loader
//--------------------------------------------

// Ext.require('MobileIron.emp.Employee', function () {
//     var p1 = Ext.create('MobileIron.emp.Employee', {
//         name: 'EMP'
//     });
//     p1.sayName();

// });


// });


//------------------------------------------------------------



Ext.application({
    name: 'MobileIron',
    requires: [
        'MobileIron.emp.Employee',
        'MyApp.pack1.Demo'
    ],
    appFolder: 'app',
    launch: function () {

        console.log('App launched...');

        var p1 = Ext.create('MobileIron.emp.Employee', {
            name: 'EMP'
        });
        p1.sayName();

        var demo = Ext.create('MyApp.pack1.Demo', {});


    }
});

//------------------------------------------------------------