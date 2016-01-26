(function(){
    var app = angular.module("githubview",[]);
    
    var MyController = function($scope, $http){
    var onResponse = function(response){
        $scope.user = response.data;      
    };
    var onError = function(error){
        $scope.error = "Cannot fetch the data";
    }
    $http.get("https://api.github.com/users/avinashbabudonthu").then(onResponse, onError);
    };
    
    app.controller("MyController",["$scope", "$http", MyController]);
}());
