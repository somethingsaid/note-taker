angular.module('NoteWrangler').controller('NoteIndexController', function(Note, $scope) {
    $scope.notes = Note.query(); // getting all of our notes
});