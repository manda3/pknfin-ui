(function(){
  var app = angular.module("github",[]);

  var MyController = function($scope, $http){
      
      var onComplete = function(response){
          $scope.user = response.data;
          $scope.error = "";
          $http.get($scope.user.repos_url).then(onRepos,onError);
      };
      
      var onRepos = function(response){
        $scope.repos = response.data;    
      };
      
      var onError = function(error){
        $scope.error = "Cannot fetch the data";  
      };
      
      $scope.search = function(username){
        $http.get("https://api.github.com/users/" + username).then(onComplete,onError);    
      };
  };
    app.controller("MyController",["$scope","$http",MyController]);
}());