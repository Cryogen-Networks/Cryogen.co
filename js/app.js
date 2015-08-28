angular.module('cryogen', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'views/home.html'
	})
	.when('/about', {
		templateUrl: 'views/about.html'
	})
	.otherwise({	
		templateUrl: 'views/404.html'
	});
}]);