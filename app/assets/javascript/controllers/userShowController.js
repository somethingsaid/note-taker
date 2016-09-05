angular.module('NoteWrangler').controller('UserShowController', function(User, $scope, $routeParams, $location) {
    $scope.user = User.get({id: $routeParams.id});
    console.log($scope.user);
});