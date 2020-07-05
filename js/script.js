var app = angular.module('loaderImage', []);
app.controller('loaderImageController', function ($scope, $http) {

    $scope.data = [];
    $http({
        method: "GET",
        url: url
    }).then(function mySuccess(response) {
        $scope.data = response.data;
    }, function myError(response) {});

    $scope.delete = function (index) {
        $scope.data.splice(index, 1);
    };

});