var shopMod = angular.module('shop', ['jcs-autoValidate']);


//---------------------------------------------------------

// Service

shopMod.factory('itemService', function ($q, $http) {
    var service = {
        loadAll: function () {
            var url = "http://localhost:3000/api/products";
            var defer = $q.defer();
            var promise = $http.get(url);
            promise.then(function (resp) {
                console.dir(resp.data);
                defer.resolve(resp.data);
            }, function (reason) {
                defer.reject(reason);
            });
            return defer.promise;
        }
    };
    return service;
});

//---------------------------------------------------------

// Controller - class
shopMod.controller('ShopController', function ($scope, itemService) {
    var promise = itemService.loadAll();
    promise.then(function (items) {
        $scope.products = items;
    }, function (reason) {
        $scope.message = reason;
    });
});


shopMod.controller('ReviewFormController', function ($scope) {
    $scope.review = {
        author: ''
    };
    $scope.submitReview = function (product) {

        // send review to server-side
        // H.W
        product.reviews = product.reviews || [];
        product.reviews.push($scope.review);

        $scope.review = {
            author: ''
        };
        $scope.reviewForm.$setPristine(true);
    }
});

// filters
shopMod.filter('priceDiscount', function () {
    return function (original, discount) {
        if (discount) {
            return original - discount;
        } else {
            return original - 1;
        }
    }
});



shopMod.directive('productTitle', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/product-title.html',
        link: function (scope, element, attrs) {
            element.on('mouseover', function () {
                element.css('background-color', '#def');
            });
            element.on('mouseout', function () {
                element.css('background-color', '#fff');
            });
        }
    };
});

shopMod.directive('productTabs', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/product-tabs.html',
        controller: function ($scope) {
            $scope.tab = 1; // ng-init="tab=1"
            $scope.changeTab = function (index) {
                $scope.tab = index;
            }
            $scope.isTabSelected = function (index) {
                return $scope.tab === index;
            }
        }
    };
});

shopMod.directive('productReviewForm', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/product-review-form.html'
    };
});