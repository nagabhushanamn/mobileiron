/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('BizDash.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],

    alias: 'controller.main',

    init: function () {

        var button = this.getView().query('button[text="Button"]')[0];

        //----------------------------------------------------
        //button.on('mouseover', 'onMouseOver');
        // button.on({
        //     mouseover: 'onMouseOver'
        //});
        //----------------------------------------------------

        // button.on({
        //     mouseover: 'onMouseOver',
        //     mouseout: 'onMouseOut',
        //     scope: this
        // });
        //----------------------------------------------------

        // button.on({
        //     mouseover: 'onMouseOver',
        //     mouseout: 'onMouseOut',
        //     click: {
        //         fn: 'onClickButton',
        //         single: true
        //     },
        //     confirmed: 'onConfirmed',
        //     scope: this
        // });
        //----------------------------------------------------

        // var el = this.getView().getEl();
        // el.on('tap', function () {
        //     console.log('The Viewport was tapped/clicked.');
        // });

        //----------------------------------------------------

        var map = new Ext.util.KeyMap({
            target: this.getView().getEl(),
            key: Ext.event.Event.ENTER,
            fn: this.onEnterPress,
            scope: this
        });

    },
    onConfirmed: function (choice) {
        console.log('The CONFIRMED event was fired');
    },
    onMouseOver: function () {
        console.log('Button Mouseover Event Fired');
    },
    onMouseOut: function () {
        console.log('Button Mouseout Event Fired');
    },
    onClickButton: function () {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },
    onEnterPress: function () {
        console.log('ENTER key was pressed');
    },
    onConfirm: function (choice) {
        if (choice === 'yes') {
            var button = this.getView().query('button[text="Button"]')[0];
            button.fireEvent('confirmed', choice)
        }
    }
});