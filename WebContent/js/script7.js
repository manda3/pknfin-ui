(function(){
        var app = angular.module("githubviewer",[]);
    
        var MyController = function($scope, $http){

            var onComplete = function(response){
                $scope.user =   response.data;
                $http.get($scope.user.repos_url).then(onRepos,onError);
            };

            var onError = function(response){
                $scope.error = "Cannot fetch the data";      
            };
            
            var onRepos = function(response){
              $scope.repos = response.data;  
            };
            
            $http.get("https://api.github.com/users/avinashbabudonthu").then(onComplete, onError);
        };
    app.controller("MyController",["$scope","$http",MyController]);
}());