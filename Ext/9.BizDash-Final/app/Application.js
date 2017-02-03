/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */

// Ext.Loader.setConfig({
//     paths: {
//         Ext: '../ext/src',
//         BizDash: 'app'
//     }
// });

Ext.define('BizDash.Application', {
    extend: 'Ext.app.Application',

    name: 'BizDash',

    requires: [
        'BizDash.config.Config',
        'BizDash.model.Product',
        'BizDash.model.Sale',
        'BizDash.model.User',
        'BizDash.model.WebSiteVisitor',
        'BizDash.view.main.Main',
        'BizDash.view.main.MainController',
        'BizDash.view.main.MainModel'
    ],

    views: [
        'navigation.NavigationTree',
        'product.ProductGrid',
        'product.ProductForm',
        'user.UsersView',
        'chart.BarChart',
        'chart.SiteVisits'
    ],
    stores: [
        'Users',
        'Products',
        'Navigation',
        'users.Admins',
        'users.Customers',
        'users.Suppliers',
        'WebSiteVisitors'
    ],

    controllers: [],

    launch: function () {
        // TODO - Launch the application
        //Ext.create('BizDash.view.main.Main', {
           // renderTo: Ext.getBody()
        //});
    }
});