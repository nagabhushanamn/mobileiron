
var counter=(function() {
   
    var count = 0; // private

    // public
    function doCount() {
        count++;
    }
    function getCount() {
        return count;
    }

    return {
        doCount: doCount,
        getCount: getCount
    };

})();

// var counter = init();