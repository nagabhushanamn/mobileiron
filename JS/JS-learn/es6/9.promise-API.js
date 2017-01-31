//



// 

var hotel = {
    getFood: function () {
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                //resolve('BIRYANI>>>>');
                reject('Sorry..');
            }, 5000);
        });
        return promise;
    }

};

var trainer = {
    doTeach: function () {
        console.log('teaching....');
        console.log('hungry...request food..');
        var promise = hotel.getFood();
        //console.log('got proimse...deferreing actions to future with callbacks');
        var newPromise=promise.then(function (food) {
            console.log('yummy ' + food);
            //setTimeout(function () {
                return "Half-Biryani";
             //},5000);
        }, function (error) {
            console.log('oops ' + error);
            return "Even i didnt get";
        });
        console.log('teaching....further .. end');

        newPromise.then(function (halfFood) { 
            console.log('having '+halfFood);
        },function (reason) { 
            console.log(reason);
        });

    }
};

trainer.doTeach();




//----------------------------------------------


// document.querySelector('.btn-primary')
//     .addEventListener('click', function () {

//         var promise = hotel.getFood();

//         promise.then(function (food) {
//             console.log('yummy ' + food);
//         }, function (error) {
//             console.log('oops ' + error);
//         });

//     });