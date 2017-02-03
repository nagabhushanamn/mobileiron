Ext.application({
    name: 'App',
    launch: function () {



        // ----------------------------------------
        // Container : Panel
        // ---------------------------------------- 

        // var myPanel = Ext.create("Ext.panel.Panel", {
        //     //renderTo: Ext.getBody(),
        //     title: 'My first panel...',
        //     //width: 300,
        //     //height: 220,
        //     html: '<b>Here</b> goes some <i>content</i>..!'
        // });

        // ----------------------------------------
        // Container : ViewPort
        // ----------------------------------------  


        // Ext.create('Ext.container.Viewport', {
        //     padding: '5px',
        //     layout: 'auto',
        //     style: {
        //         'background-color': '#fc9',
        //         'color': '#000'
        //     },
        //     //html: 'This is application area',
        //     items: [
        //         myPanel
        //     ]
        // });


        // ----------------------------------------
        // Container : Window
        // ----------------------------------------  


        // var win = Ext.create("Ext.window.Window", {
        //     title: 'My first window',
        //     width: 300,
        //     height: 200,
        //     maximizable: true,
        //     html: 'this is my first window'
        // });
        // win.show();


        // ----------------------------------------
        // Layouts : Fit
        // ----------------------------------------  


        // Ext.create('Ext.panel.Panel', {
        //     title: 'Fit Layout',
        //     width: 500,
        //     height: 200,
        //     layout: 'fit',
        //     items: {
        //         //xtype: 'panel',
        //         title: 'Inner Panel-1',
        //         html: 'Panel content',
        //         bodyPadding: 10,
        //         border: true
        //     },
        //     renderTo: Ext.getBody()
        // });


        // ----------------------------------------
        // Layouts : Vbox
        // ----------------------------------------     

        // Ext.create('Ext.container.Viewport', {
        //     layout: {
        //         type: 'vbox',
        //         align: 'stretch',
        //         padding: 10
        //     },
        //     items: [{
        //         xtype: 'panel',
        //         title: 'Panel One',
        //         height: 100,
        //         // flex: 0
        //     }, {
        //         xtype: 'panel',
        //         title: 'Panel Two',
        //         flex: 1
        //     }, {
        //         xtype: 'panel',
        //         title: 'Panel Three',
        //         frame: true,
        //         flex: 3
        //     }]
        // });


        // flex=((Container Height – Fixed Height of Child Components) / Sum of Flexes) * Flex Value


        // ----------------------------------------
        // Layouts : Hbox
        // ---------------------------------------- 


        // Ext.create('Ext.container.Viewport', {
        //     layout: {
        //         type: 'hbox',
        //         align: 'stretchmax',
        //         padding: 10
        //     },
        //     items: [{
        //         xtype: 'panel',
        //         title: 'Panel One',
        //         height: 200,
        //         width: 100
        //     }, {
        //         xtype: 'panel',
        //         title: 'Panel Two',
        //         flex: 1
        //     }, {
        //         xtype: 'panel',
        //         title: 'Panel Three',
        //         width: 100
        //     }]
        // });


        // ----------------------------------------
        // Layouts : Column
        // ---------------------------------------- 



        // Ext.create('Ext.panel.Panel', {
        //     title: 'Column Layout',
        //     //width: 500,
        //     //height: 200,
        //     layout: 'column',
        //     frame: true,
        //     defaults: {
        //         height: 165,
        //         frame: true
        //     },
        //     items: [{
        //         title: 'Panel Three',
        //         columnWidth: .2,
        //         html: 'Panel Three Content'
        //     }, {
        //         title: 'Panel One',
        //         columnWidth: .2,
        //         html: 'Panel One Content'
        //     }, {
        //         title: 'Panel Two',
        //         columnWidth: .6,
        //         margin: '0 5 0 5',
        //         html: 'Panel Two Content'
        //     }],
        //     renderTo: Ext.getBody()
        // });

        // ----------------------------------------
        // Layouts : Accordian
        // ---------------------------------------- 


        // Ext.create('Ext.panel.Panel', {
        //     title: 'Accordion Layout',
        //     width: 350,
        //     height: 400,
        //     layout: 'accordion',
        //     renderTo: Ext.getBody(),
        //     items: [{
        //         title: 'Ext JS 4',
        //         html: 'Ext JS 4 ...' // full content omitted
        //     }, {
        //         title: 'Sencha Touch',
        //         html: 'Sencha Touch ...'
        //     }, {
        //         title: 'Ext Designer',
        //         html: 'Ext Designer ...'
        //     }, {
        //         title: 'Sencha Animator',
        //         html: 'With Sencha Animator...'
        //     }]
        // });


        // ----------------------------------------
        // Layouts : Card
        // ---------------------------------------- 


        // var card1 = new Ext.panel.Panel({
        //     bodyStyle: 'padding: 20px',
        //     title: 'Personal Info',
        //     items: [{
        //         xtype: 'textfield',
        //         fieldLabel: 'First Name'
        //     }, {
        //         xtype: 'textfield',
        //         fieldLabel: 'Last Name'
        //     }, {
        //         xtype: 'textfield',
        //         fieldLabel: 'Email Address',
        //         vtype: 'email'
        //     }]
        // });


        // var card2 = new Ext.panel.Panel({
        //     bodyStyle: 'padding: 20px',
        //     title: 'Account Info',
        //     items: [{
        //         xtype: 'textfield',
        //         fieldLabel: 'Username'
        //     }, {
        //         xtype: 'textfield',
        //         fieldLabel: 'Password',
        //         inputType: 'password'
        //     }]
        // });

        // var card3 = new Ext.panel.Panel({
        //     bodyStyle: 'padding: 20px',
        //     title: 'Account Creation Successful!',
        //     html: 'Success!'
        // });

        // var panel = Ext.create('Ext.panel.Panel', {
        //     title: 'Account Creation Wizard - Card Layout',
        //     width: 350,
        //     height: 300,
        //     layout: 'card',
        //     renderTo: Ext.getBody(),
        //     items: [card1, card2, card3],
        //     bbar: [{
        //             xtype: 'button',
        //             text: 'Previous',
        //             handler: function (btn) {
        //                 var layout = panel.getLayout();
        //                 if (layout.getPrev()) {
        //                     layout.prev();
        //                 }
        //             }
        //         },
        //         '->',
        //         {
        //             xtype: 'button',
        //             text: 'Next',
        //             handler: function (btn) {
        //                 var layout = panel.getLayout();
        //                 if (layout.getNext()) {
        //                     layout.next();
        //                 }
        //             }
        //         }
        //     ]
        // });



        // ----------------------------------------
        // Layouts : Anchor
        // ---------------------------------------- 


        // var win = Ext.create('Ext.window.Window', {
        //     x: 0,
        //     y: 0,
        //     width: 400,
        //     height: 400,
        //     title: 'Anchor Layout Panel - Percentages',
        //     layout: 'anchor',
        //     items: [{
        //         xtype: 'panel',
        //         title: 'Percentages',
        //         html: 'Panel Content',
        //         anchor: '50% 35%'
        //     }]
        // });
        // win.show();




        // ----------------------------------------
        // Layouts : Border/Desktop
        // ---------------------------------------- 



        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [{
                region: 'north',
                margins: 5,
                height: 100,
            }, {
                title: 'West',
                region: 'west',
                margins: '0 5 0 5',
                flex: .3,
                collapsible: true,
                split: true,
                titleCollapse: true
            }, {
                title: 'Center',
                region: 'center'
            }, {
                title: 'East',
                region: 'east',
                margins: '0 5 0 5',
                width: 200,
                collapsible: true,
                collapsed: true
            }, {
                title: 'South',
                region: 'south',
                margins: '0 5 5 5',
                flex: .3,
                split: true
            }]
        });



    }
});