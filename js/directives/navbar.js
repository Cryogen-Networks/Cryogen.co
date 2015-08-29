angular.module('cryogen')
.directive('navBar', function() {
  return {
      restrict: 'E',
      templateUrl: 'partials/navbar.html'
  };
});