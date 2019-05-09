var app = angular.module('phonebook');
app.controller('ContactDetailsController', ContactDetailsController);

ContactDetailsController.$inject = ['$scope', '$http', '$routeParams'];

var baseUrl = 'http://localhost:3000/contacts/';

function ContactDetailsController($scope, $http, $routeParams) {
    var id = $routeParams['id'];
    $http.get(baseUrl+id)
    .then(function(resp) {
        $scope.contact = resp.data;
    });
}