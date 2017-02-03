Ext.application({
    name: 'App',
    launch: function () {

        //--------------------------------------------------
        // basic-event
        //--------------------------------------------------

        // var el = Ext.get('my-btn');
        // el.on('click', function (e, target, options) {
        //     console.log('The Element was clicked!');
        //     console.log(this.id);
        // });

        //--------------------------------------------------
        // multiple events
        //--------------------------------------------------

        // var el = Ext.get('my-btn');

        // el.on({
        //     click: function (e, target, options) {
        //         console.log('The Element was clicked!');
        //         console.log(this.id);
        //     },
        //     contextmenu: function (e, target, options) {
        //         console.log('The Element was right-clicked!');
        //         console.log(this.id);
        //     },
        // });


        //--------------------------------------------------
        //  handlers in config-obj
        //--------------------------------------------------

        // Ext.create('Ext.panel.Panel', {
        //     title: 'Ext JS',
        //     //html: 'An Example Panel!',
        //     renderTo: Ext.getBody(),
        //     width: 300,
        //     height: 200,
        //     items: [{
        //         xtype: 'button',
        //         margin: 20,
        //         text: 'Click Me',
        //         listeners: {
        //             click: function () {
        //                 //Ext.Msg.alert('Success!', 'I was clicked!');
        //                 console.log(this);
        //             },
        //             mouseover: function () {
        //                 this.hide();
        //             },
        //             hide: function () {
        //                 // Waits 1 second (1000ms), then shows the button again
        //                 Ext.defer(function () {
        //                     this.show();
        //                 }, 1000, this);
        //             },
        //         }
        //     }],
        //     listeners: {
        //         afterrender: function () {
        //             // console.log('The Panel is rendered!');
        //             // console.log(this);
        //         },
        //     }
        // });


        //--------------------------------------------------
        //  comp.on()
        //--------------------------------------------------        


        // var button = Ext.create('Ext.Button', {
        //     renderTo: Ext.getBody(),
        //     text: 'My Button'
        // });

        // button.on('click', function () {
        //     Ext.Msg.alert('Success!', 'Event listener attached by .on');
        // });


        // button.on({
        //     mouseover: function () {
        //         this.hide();
        //     },
        //     hide: function () {
        //         Ext.defer(function () {
        //             this.show();
        //         }, 1000, this);
        //     }
        // });



        //--------------------------------------------------
        //  remove event Listener
        //--------------------------------------------------              

        // var doSomething = function () {
        //     Ext.Msg.alert('listener called');
        // };

        // var button = Ext.create('Ext.Button', {
        //     renderTo: Ext.getBody(),
        //     text: 'My Button',
        //     listeners: {
        //         click: doSomething,
        //     }
        // });

        // Ext.defer(function () {
        //     button.un('click', doSomething);
        // }, 3000);


        //--------------------------------------------------
        //  scope
        //--------------------------------------------------           

        // var panel = Ext.create('Ext.Panel', {
        //     html: 'Panel HTML'
        // });

        // var button = Ext.create('Ext.Button', {
        //     renderTo: Ext.getBody(),
        //     text: 'Click Me'
        // });

        // button.on({
        //     click: function () {
        //         Ext.Msg.alert('Success!', this.getXType());
        //     },
        //     scope: panel
        // });


        // or

        // var panel = Ext.create('Ext.Panel', {
        //     html: 'Panel HTML'
        // });

        // var button = Ext.create('Ext.Button', {
        //     renderTo: Ext.getBody(),
        //     text: 'Click Me'
        // });

        // button.on({
        //     click: {
        //         scope: panel,
        //         fn: function () {
        //             Ext.Msg.alert('Success!', this.getXType());
        //         }
        //     }
        // });



        //--------------------------------------------------
        //  Event Once
        //--------------------------------------------------        

        // var button = Ext.create('Ext.Button', {
        //     renderTo: Ext.getBody(),
        //     text: 'Click Me',
        //     listeners: {
        //         click: {
        //             single: true,
        //             fn: function () {
        //                 Ext.Msg.alert('Success!', 'I will say this only once');
        //             }
        //         }
        //     }
        // });


        //--------------------------------------------------
        //  Event - Buffer
        //--------------------------------------------------    


        // var button = Ext.create('Ext.Button', {
        //     renderTo: Ext.getBody(),
        //     text: 'Click Me',
        //     listeners: {
        //         click: {
        //             buffer: 2000,
        //             fn: function () {
        //                 Ext.Msg.alert('Success!', 'I say this only once every 2 seconds');
        //             }
        //         }
        //     }
        // });

        //--------------------------------------------------
        //  Event - Custom Event
        //--------------------------------------------------    

        // var button = Ext.create('Ext.Button', {
        //     renderTo: Ext.getBody(),
        //     text: "Just wait 2 seconds",
        //     listeners: {
        //         myEvent: function (button, points) {
        //             Ext.Msg.alert('Success!', 'myEvent fired! You score ' + points + ' points');
        //         }
        //     }
        // });

        // Ext.defer(function () {
        //     var number = Math.ceil(Math.random() * 100);
        //     button.fireEvent('myEvent', button, number);
        // }, 2000);


        //--------------------------------------------------
        //  Event - Listening for DOM Events
        //--------------------------------------------------   


        // var container = Ext.create('Ext.Container', {
        //     renderTo: Ext.getBody(),
        //     html: 'Click Me!',
        //     listeners: {
        //         click: function () {
        //             Ext.Msg.alert('Success!', 'I have been clicked!')
        //         }
        //     }
        // });

        // container.getEl().on('click', function () {
        //     this.fireEvent('click', container);
        // }, container);




        //--------------------------------------------------
        //  Event Delegation
        //--------------------------------------------------

        // var toolbarEl = Ext.get('tool-bar');

        // toolbarEl.on('click', function (e, target, options) {
        //     console.log('event on');
        //     if (e.getTarget('a.add')) {
        //         console.log('Add..');
        //     } else if (e.getTarget('a.edit')) {
        //         console.log('Edit..');
        //     } else if (e.getTarget('a.delete')) {
        //         console.log('Delete..');
        //     }
        // }, this, {
        //     delegate: 'a',
        // });

        //-------------------------------------------------------


    }
});