angular.module('cryogen')
.directive('stats', function() {
  return {
      restrict: 'E',
      templateUrl: 'partials/stats.html'
  };
});