var shopMod = angular.module('shop', []);

//----------------------------------------
// Model  ( loaded from server-side )
var items = [{
    name: 'Laptop',
    price: 198000,
    description: 'New Mac pro',
    canBuy: true,
    notAvailable: false,
    make: Date.now(),
    discount: 50000,
    images: [
        {thumb:'images/Laptop.png',full:''}
    ],
    reviews: [
        { stars: 5, author: 'nag@gmail.com', comment: 'This is good' },
        { stars: 2, author: 'ria@gmail.com', comment: 'costly' }
    ]
}, {
    name: 'Mobile',
    price: 19000,
    description: 'New iphone',
    canBuy: true,
    notAvailable: false,
    make: Date.now(),
    images: [
        {thumb:'images/Mobile.png',full:''}
    ],
     reviews: [
        { stars: 5, author: 'nag@gmail.com', comment: 'This is good' },
        { stars: 2, author: 'ria@gmail.com', comment: 'costly' }
    ]
}]
//----------------------------------------

// Controller - class
shopMod.controller('ShopController', function () {
    // load items from server...
    //this.product = item;
    this.products = items;
});
shopMod.controller('TabsController', function ($scope) {
    $scope.tab = 1; // ng-init="tab=1"
    $scope.changeTab = function (index) {
        $scope.tab = index;
    }
    $scope.isTabSelected = function (index) {
        return $scope.tab === index;
    }
});
shopMod.controller('ReviewFormController', function ($scope) { 
    $scope.review = {author:''};
    $scope.submitReview = function (product) {
        product.reviews.push($scope.review);
        $scope.review = {author:''};
    }
});

shopMod.filter('priceDiscount', function () { 
    return function (original,discount) {
        if (discount) {
            return original - discount;   
        } else {
            return original - 1;
        }    
    }
});


// plain .js :
// document.querySelector('h4').innerHTML = item.name;
// document.querySelector('h5').innerHTML = item.price;
// document.querySelector('p').innerHTML=item.description;