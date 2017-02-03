
Ext.define("BizDash.view.location.Map",{
    extend: "Ext.tab.Panel",
 
    requires: [
        "BizDash.view.location.MapController",
        "BizDash.view.location.MapModel"
    ],
    
    controller: "location-map",
    viewModel: {
        type: "location-map"
    },

    html: "Hello, World!!"
});
