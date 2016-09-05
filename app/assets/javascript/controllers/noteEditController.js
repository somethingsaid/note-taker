angular.module('NoteWrangler').controller('NoteEditController', function(Note, $scope, $routeParams, $location) {
    $scope.note = Note.get({id: $routeParams.id})

    $scope.saveNote = function(note) {
    	// Prevent click on submit button when saving
    	$scope.isSubmitting = true;
    	note.$update().finally(function() {
    		// Reset submit button to available after success
    		$scope.isSubmitting = false;
    		// Update window location to note/:id for routing to note page after submission
    		$location.path('/notes/' + note.id);
    	});
    }
});