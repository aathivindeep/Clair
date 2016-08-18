var myWaterWiserHomeApp = angular.module('WaterWiserHome',[]);
	myWaterWiserHomeApp.controller('MyWaterCtrl',function($scope,$window) {
			$scope.user="admin";  //should fetch these values from database
			$scope.pwd="admin";
		$scope.submit = function() {
			alert("user:"+$scope.user+"\npwd:"+$scope.pwd+"\nuser1:"+$scope.user1+"\npwd1:"+$scope.pwd1)
			if(($scope.user == $scope.user1) && ($scope.pwd == $scope.pwd1))
			{
				alert("right")
				$window.location.href = 'waterwiser.html';
			}
			else
			{
				alert("wrong")
				$window.location.href = 'error.html';
			}
  };
});