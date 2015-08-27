angular.module('cryogen', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'views/home.html'
	})
	.otherwise({	
		templateUrl: 'views/404.html'
	});
}]);