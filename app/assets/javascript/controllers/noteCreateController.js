angular.module('NoteWrangler').controller('NoteCreateController', function(Note, $scope, $location) {
    $scope.note = new Note();
    $scope.isSubmitting = false;
    $scope.saveNote = function(note) {
        $scope.isSubmitting = true;
        note.$save()
        // redirect on success
        .then(function() {
            $location.path('/notes')})
        .catch(function(errors) {
            //validations could sit here
        })
        // regardless of success/failure, make button available to click again
        .finally(function() {
            $scope.isSubmitting = false;
        });
    }
});