myApp.factory('User', function($resource){
	return $resource('/api/v1/users/:userId');
});

myApp.controller('UsersCtrl', function($scope, User) {
	console.log('User');
	$scope.users = User.query();
})
