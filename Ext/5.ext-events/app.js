Ext.application({
    name: 'App',
    launch: function () {

        // 2 ways

        /*
           
        way-1: on component instance
        -------------------------------
            element.on()
        
        
        way-2:  on component configuration
        -----------------------------------
            {
                listeners:{
                    event1:...
                    event2:...
                }
            }

        */


        //-------------------------------------------------
        // basic Event Handling
        //--------------------------------------------------

        // var el = Ext.get('my-btn');
        // el.on('click', function (e, target, option) {
        //     console.dir(this);
        //     console.log(this.id + '-clicked');
        // }, this);


        //-------------------------------------------------
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


        //-------------------------------------------------
        //  binding listerns on config
        //--------------------------------------------------        


        // Ext.create('Ext.panel.Panel', {
        //     title: 'Ext JS',
        //     // html: 'An Example Panel!',
        //     width: 300,
        //     height: 200,
        //     renderTo: Ext.getBody(),
        //     items: [{
        //         xtype: 'button',
        //         text: 'click',
        //         margin: 20,
        //         listeners: {
        //             click: function () {
        //                 //console.log(this);
        //                 console.log('button clicked');
        //             },
        //             mouseover: function (e) {
        //                 //console.log('mouse over..');
        //                 this.hide();
        //             },
        //             hide: function () {
        //                 Ext.defer(function () {
        //                     this.show();
        //                 }, 1000, this);
        //             },
        //             //scope: this
        //         },
        //     }],
        //     listeners: {
        //         afterrender: function () {
        //             console.log('The Panel is Redered...');
        //         }
        //     }
        // });



        //-------------------------------------------------
        //  unbinding listerns
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
        //     },
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
        //  Event - buffer
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
        //  Event Delegation : //to listen similar event on every-child elemnts on conatiner with single-listener
        //--------------------------------------------------

        var box = Ext.get('my-box');

        box.on('click', function (e, target, options) {
            console.log(target);
        }, this, {
            delegate: '.odd'
        });

        //-------------------------------------------------------



    }
});