Ext.onReady(function () {


    //-------------------------------------------------------
    // Components
    //-------------------------------------------------------

    // var panel = Ext.create("Ext.panel.Panel", {
    //     title: "My First panel",
    //     width: 400,
    //     height: 250,
    //     renderTo: Ext.getBody()
    // });


    /*
        
        The initialization phase
        
          1. Apply Configuration
          2. Common Events => such as enable, disable, or show. These are common events for every component.
          3. assign an Unique ID to the instance.
          4. Instantiate plugins
          5. initComponent
          6. Registration in Cmp.Manager
          7. Events and Statefull ( mixins )
          8. Plugins Initialize
        
          9. Render Phase starts ( if renderTo property configured)
        

        The rendering phase
        
          1. the beforeRender event is fired, 
          2. Is a Floating component
          3. Container property is required
          4. OnRender method executed ( with el property )
          5. Visibility mode (display, visibility, or offset)
          6. Mouse over/out ( ovrClass )
          7. the render event is fired
          8. Initialize contents ( contentEl , html , tpl)
          9. Afterrender method executed
         10. Afterrender event  fired
         11. Listeners are Initialized
         12. Hide component (if needed)
         13. Disable component (if needed)
        

       The destruction phase
        
         1. beforedestroy event  fired
         2. beforedestroy method executed
         3. Removed parent reference
         4. OnDestroy method executed
         5. Destroy plugins
         6. Removes DOM nodes
         7. Destroy event  red
         8. Removed from Component Manager
    */


    // Ext.define('Myapp.sample.CustomComponent', {
    //     extend: 'Ext.Component',
    //     initComponent: function () {
    //         var me = this;
    //         me.width = 200;
    //         me.height = 100;
    //         me.html = {
    //             tag: 'div',
    //             html: 'X',
    //             style: { // this can be replaced by a CSS rule
    //                 'float': 'right',
    //                 'padding': '10px',
    //                 'background-color': '#e00',
    //                 'color': '#fff',
    //                 'font-weight': 'bold',
    //                 'cursor': 'pointer'
    //             }
    //         };
    //         me.myOwnProperty = [1, 2, 3, 4];
    //         me.callParent();
    //         console.log('Step 1. initComponent');
    //     },
    //     beforeRender: function () {
    //         console.log('Step 2. beforeRender');
    //         this.callParent(arguments);
    //     },
    //     onRender: function () {
    //         console.log('Step 3. onRender');
    //         this.callParent(arguments);
    //         this.el.setStyle('background-color', '#ccc');
    //     },
    //     afterRender: function () {
    //         console.log('Step 4. afterRender');
    //         this.el.down('div').on('click', this.myCallback, this);
    //         this.callParent(arguments);
    //     },
    //     beforeDestroy: function () {
    //         console.log('5. beforeDestroy');
    //         this.callParent(arguments);
    //     },
    //     onDestroy: function () {
    //         console.log('6. onDestroy');
    //         delete this.myOwnProperty;
    //         this.el.down('div').un('click', this.myCallback);
    //         this.callParent(arguments);
    //     },
    //     myCallback: function () {
    //         var me = this;
    //         Ext.Msg.confirm('Confirmation', 'Are you sure you want to close this panel?', function (btn) {
    //             if (btn === 'yes') {
    //                 me.destroy();
    //             }
    //         });
    //     }
    // });

    // Ext.create('Myapp.sample.CustomComponent', {
    //     renderTo: Ext.getBody()
    // });


    //-------------------------------------------------------
    // Containers
    //-------------------------------------------------------


    // Ext.define("MyApp.sample.MyContainer", {
    //     extend: "Ext.container.Container", //Step 1
    //     border: true,
    //     padding: 10,
    //     initComponent: function () {
    //         var me = this;
    //         Ext.each(me.items, function (item) { //Step 2
    //             item.style = {
    //                 backgroundColor: "#f4f4f4",
    //                 border: "1px solid #333"
    //             };
    //             item.padding = 10;
    //             item.height = 100;
    //             item.margin = 10;
    //         });
    //         me.callParent();
    //     },
    //     onRender: function () {
    //         var me = this;
    //         me.callParent(arguments);
    //         if (me.border) { //Step 3
    //             me.el.setStyle("border", "1px solid #333");
    //         }
    //     }
    // });

    // Ext.create("MyApp.sample.MyContainer", {
    //     renderTo: Ext.getBody(),
    //     items: [{
    //         xtype: "component",
    //         html: "Child Component one"
    //     }, {
    //         xtype: "component",
    //         html: "Child Component two"
    //     }]
    // });

    // or    

    // Ext.create("MyApp.sample.MyContainer", {
    //     renderTo: Ext.getBody(),
    //     defaults: {
    //         xtype: "component",
    //         width: 500
    //     },
    //     items: [{
    //         html: "Child Component one"
    //     }, {
    //         html: "Child Component two"
    //     }]
    // });


    //-------------------------------------------------------------------------------
    // Some Built-In Containers
    //-------------------------------------------------------------------------------


    // Ext.create('Ext.container.Viewport', {
    //     padding: '5px',
    //     layout: 'auto',
    //     style: {
    //         'background-color': '#fc9',
    //         'color': '#000'
    //     },
    //     html: 'This is application area'
    // });

    // var MyPanel = Ext.create("Ext.panel.Panel", {
    //     //renderTo: Ext.getBody(),
    //     title: 'My first panel...',
    //     width: 300,
    //     height: 220,
    //     html: '<b>Here</b> goes some <i>content</i>..!'
    // });

    // var win = Ext.create("Ext.window.Window", {
    //     title: 'My first window',
    //     width: 300,
    //     height: 200,
    //     maximizable: true,
    //     html: 'this is my first window'
    // });
    // win.show();


    //-------------------------------------------------------------------------------
    //  Containers - Layouts
    //-------------------------------------------------------------------------------

    //1. Fit-Layout    

    // Ext.create('Ext.panel.Panel', {
    //     title: 'Fit Layout',
    //     width: 500,
    //     height: 200,
    //     layout: 'fit',
    //     items: {
    //         title: 'Inner Panel',
    //         html: 'Panel content',
    //         bodyPadding: 10,
    //         border: true
    //     },
    //     renderTo: Ext.getBody()
    // });

    //-------------------------------------------------------------------------------

    //2. Creating  exible vertical layouts with VBoxes

    // Ext.create('Ext.container.Viewport', {
    //     layout: {
    //         type: 'vbox',
    //         align: 'stretch',
    //         animate: true, //{ duration: 2000, easing: 'easeIn' },
    //         padding: 10
    //     },
    //     items: [{
    //         xtype: 'panel',
    //         title: 'Panel One',
    //         height: 100
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

    /*

   flex=((Container Height – Fixed Height of Child Components) / Sum of Flexes) * Flex Value

   (assume parent is 1000px high). For example, ((1000 – 100) / (1 + 3)) * 1 (or 3). 

    */

    // -------------------------------------------------------------------------------

    //3. Creating  exible horizontal layouts with HBoxes


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

    // -------------------------------------------------------------------------------

    // 4.Displaying content in columns


    // Ext.create('Ext.Panel', {
    //     title: 'Column Layout',
    //     width: 500,
    //     height: 200,
    //     layout: 'column',
    //     frame: true,
    //     defaults: {
    //         height: 165,
    //         frame: true
    //     },
    //     items: [{
    //         title: 'Panel One',
    //         columnWidth: .2,
    //         html: 'Panel One Content'
    //     }, {
    //         title: 'Panel Two',
    //         columnWidth: .8,
    //         margin: '0 5 0 5',
    //         html: 'Panel Two Content'
    //     }, {
    //         title: 'Panel Three',
    //         width: 100,
    //         html: 'Panel Three Content'
    //     }],
    //     renderTo: Ext.getBody()
    // });

    // -------------------------------------------------------------------------------

    // 5.  Collapsible layouts with accordions

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

    // -------------------------------------------------------------------------------

    // 6. Displaying stacked components with CardLayouts


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
    //     bbar: ['->', {
    //         xtype: 'button',
    //         text: 'Previous',
    //         handler: function (btn) {
    //             var layout = panel.getLayout();
    //             if (layout.getPrev()) {
    //                 layout.prev();
    //             }
    //         }
    //     }, {
    //         xtype: 'button',
    //         text: 'Next',
    //         handler: function (btn) {
    //             var layout = panel.getLayout();
    //             if (layout.getNext()) {
    //                 layout.next();
    //             }
    //         }
    //     }]
    // });

    // -------------------------------------------------------------------------------

    // 7. Anchor components to their parent's dimensions


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
    //         anchor: '100% 35%'
    //     }]
    // });
    // win.show();

    // -------------------------------------------------------------------------------

    // 8. Creating fullscreen applications with the BorderLayout

    // Ext.create('Ext.container.Viewport', {
    //     layout: 'border',
    //     items: [{
    //         region: 'north',
    //         margins: 5,
    //         height: 100,
    //     }, {
    //         title: 'West',
    //         region: 'west',
    //         margins: '0 5 0 5',
    //         flex: .3,
    //         collapsible: true,
    //         split: true,
    //         titleCollapse: true
    //     }, {
    //         title: 'Center',
    //         region: 'center'
    //     }, {
    //         title: 'East',
    //         region: 'east',
    //         margins: '0 5 0 5',
    //         width: 200,
    //         collapsible: true,
    //         collapsed: true
    //     }, {
    //         title: 'South',
    //         region: 'south',
    //         margins: '0 5 5 5',
    //         flex: .3,
    //         split: true
    //     }]
    // });

});