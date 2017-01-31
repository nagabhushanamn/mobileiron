(function () {


    app.b.doWork();
    app.c.doWork();

    var o = {
        doWork: function () {
            console.log('im A');
        }
    };

    app.a = o;

})();