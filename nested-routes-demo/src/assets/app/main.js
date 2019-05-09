var app = angular.module('phonebook', ['ng', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/assets/templates/home.html'
        })
        .when('/contact-list', {
            templateUrl: '/assets/templates/contact-list.html',
            controller: 'ContactListController'
        })
        .when('/contact-details/:id', {
            templateUrl: '/assets/templates/contact-details.html',
            controller: 'ContactDetailsController'
        })
        .otherwise({
            template: '<h1>OOPS - 404</h1>'
        });
}]);
