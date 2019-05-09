var app = angular.module('phonebook');

app.controller('ContactListController', ContactListController);

ContactListController.$inject = ['$scope', '$http'];

var baseUrl = 'http://localhost:3000/contacts/';

function ContactListController($scope, $http) {
    $http.get(baseUrl)
    .then(function(resp) {
        $scope.contacts = resp.data;
    });
}