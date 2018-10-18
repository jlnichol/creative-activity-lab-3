  angular.module('Pics', [])
    .controller('MainCtrl', [
    '$scope',
    function($scope){
      $scope.test = 'Hello world!';
    }
    ]);