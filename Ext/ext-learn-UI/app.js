Ext.application({
    name: 'App',
    launch: function () {
        console.log('App launched..');


        //-------------------------------------------------------
        // Components
        //-------------------------------------------------------

        // var message = "Welcome";

        // var panel = Ext.create("Ext.panel.Panel", {
        //     title: "My First panel",
        //     width: 400,
        //     height: 250,
        //     //html:'<h1> Welcome to Ext-world</h1>', // way-1
        //     //contentEl:'myContent', // way-2
        //     // tpl:['<div><h3>{message}</h3></div>'],
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



        Ext.define('App.sample.MyComponent', {
            extend: 'Ext.Component',
            alias: 'widget.mycomp',
            initComponent: function () {
                this.callParent(arguments);
                var me = this;
                me.width = 200;
                me.height = 100;
                me.html = {
                    tag: 'div',
                    html: 'close',
                    style: { // this can be replaced by a CSS rule
                        'float': 'right',
                        'padding': '10px',
                        'background-color': '#e00',
                        'color': '#fff',
                        'font-weight': 'bold',
                        'cursor': 'pointer'
                    }
                }
                console.log('Step-1 : initComponent');
            },
            //----------------------------------------------------

            beforeRender: function () {
                console.log('Step 2. beforeRender');
                this.callParent(arguments);
            },

            onRender: function () {
                // DOM manipulation
                console.log('Step 3. onRender');
                this.callParent(arguments);
                this.el.setStyle('background-color', '#ccc');
            },

            afterRender: function () {
                console.log('Step 4. afterRender');
                this.el.down('div').on('click', this.myCallback, this);
                this.callParent(arguments);
            },

            //-----------------------------------------------------

            beforeDestroy: function () {
                console.log('5. beforeDestroy');
                this.callParent(arguments);
            },
            onDestroy: function () {
                console.log('6. onDestroy');
                //delete this.myOwnProperty;
                this.el.down('div').un('click', this.myCallback);
                this.callParent(arguments);
            },

            //-----------------------------------------------------

            myCallback: function () {
                var me = this;
                Ext.Msg.confirm('Confirmation', 'Are you sure you want to close this panel?', function (btn) {
                    if (btn === 'yes') {
                        me.destroy();
                    }
                });
            }


        });



        //-------------------------------------------------------
        // Containers
        //-------------------------------------------------------


        Ext.define("App.sample.MyContainer", {
            extend: "Ext.container.Container", //Step 1
            border: true,
            padding: 10,
            initComponent: function () {
                var me = this;
                Ext.each(me.items, function (item) { //Step 2
                    item.style = {
                        backgroundColor: "#f4f4f4",
                        border: "1px solid #333"
                    };
                    item.padding = 10;
                    item.height = 100;
                    item.margin = 10;
                });
                me.callParent();
            },
            onRender: function () {
                var me = this;
                me.callParent(arguments);
                if (me.border) { //Step 3
                    me.el.setStyle("border", "1px solid #333");
                }
            }

        });


        // Eager component instantiation:
        //---------------------------------

        // var myComp1 = Ext.create('App.sample.MyComponent', {
        //     //renderTo: Ext.getBody()
        // });
        // var myComp2 = Ext.create('App.sample.MyComponent', {
        //     //renderTo: Ext.getBody()
        // });

        // var myContainer = Ext.create('App.sample.MyContainer', {
        //     renderTo: Ext.getBody(),

        //     items: [
        //         myComp1,myComp2
        //     ]
        // });


        // Lazy comp instatiation in container

        var myContainer = Ext.create('App.sample.MyContainer', {
            renderTo: Ext.getBody(),
            defaults: {
                width: 500,

            },
            items: [{
                    xtype: 'component',
                },
                {
                    xtype: 'component',
                    width: 100,
                }
            ]
        });



    }
});