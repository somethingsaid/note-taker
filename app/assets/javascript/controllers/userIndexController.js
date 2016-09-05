angular.module('NoteWrangler').controller('UserIndexController', function(User, $scope) {
    $scope.users = User.query(); // getting all of our notes
});