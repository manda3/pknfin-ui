var MyController = function($scope, $http){
    var onResponseComplete = function(response){
        $scope.user = response.data;
    }
    var onError = function(reason){
        $scope.error = "Cannot fetch the data";
    }
    $http.get("https://api.github.com/users/avinashbabudonthu").then(onResponseComplete, onError);
}