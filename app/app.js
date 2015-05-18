(function() {

    'use strict';

    var baguaApp = angular.module('baguaApp', ['ui.router', 'mm.foundation']);

    baguaApp.constant('VERSION', '0.1');

    baguaApp.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
               

        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'partials/home/home.html',
                controller: 'homeCtrl',
                data: {
                    requireLogin: false
                }
            })
            .state('history', {
                url: '/history',
                templateUrl: 'partials/history/history.html',
                data: {
                    requireLogin: false
                }
            })
            .state('theory', {
                url: '/theory',
                templateUrl: 'partials/theory/theory.html',
                data: {
                    requireLogin: false
                }
            })
            .state('animalSystems', {
                url: '/animalSystems',
                templateUrl: 'partials/animalSystems/animalSystems.html',
                data: {
                    requireLogin: false
                }
            })
            .state('classes', {
                url: '/classes',
                templateUrl: 'partials/classes/classes.html',
                controller: 'classesCtrl',
                data: {
                    requireLogin: false
                }
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'partials/contact/contact.html',
                controller: 'contactCtrl',
                data: {
                    requireLogin: false
                }
            })    
            .state('curriculum', {
                url: '/curriculum',
                templateUrl: 'partials/curriculum/curriculum.html',
                data: {
                    requireLogin: false
                }
            })         
    });

    baguaApp.service('ClassesDataService', function() {
        
        this.classes = [{
            name: 'Ashtanga',
            description: 'Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non',
            day: 'Monday, Tuesday',
            time: '18:00 pm',
            duration: 1,
            dropInPrice: 50,
            monthlyPrice: 200,
            location: {
                address: '58 Gordon Road',
                suburb: 'Morningside',
                city: 'Durban',
                province: 'Kwa-zulu Natal'
            }
        }, {
            name: 'Vinyasa',
            description: 'Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non',
            day: 'Wednesday, Thursday',
            time: '18:00 pm',
            duration: 1,
            dropInPrice: 50,
            monthlyPrice: 200,
            location: {
                address: '58 Gordon Road',
                suburb: 'Morningside',
                city: 'Durban',
                province: 'Kwa-zulu Natal'
            }
        }, {
            name: 'Hatha',
            description: 'Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non',
            day: 'Friday',
            time: '18:00 pm',
            duration: 1,
            dropInPrice: 50,
            monthlyPrice: 200,
            location: {
                address: '58 Gordon Road',
                suburb: 'Morningside',
                city: 'Durban',
                province: 'Kwa-zulu Natal'
            }
        }];

    });

    baguaApp.service('ClassesService', function(ClassesDataService) {
        
        this.getAllClasses = function() {
            return ClassesDataService.classes;
        };

    });

    baguaApp.controller('appCtrl', function($rootScope, $scope, $location, $window) {
        
        $scope.showContactUs = function() {
            $scope.showContactUsBoolean = false;
            if (location.hash == '#/contact') {
                $scope.showContactUsBoolean = true;
            }
            return $scope.showContactUsBoolean;
        };

    });

    baguaApp.controller('homeCtrl', function($scope) {
        
        $scope.showContactUs = function() {

            $scope.myBoolean = false;

            if (location.path() == 'contact') {
                $scope.myBoolean = true;
            }
            return $scope.myBoolean;
        };         
    });

    baguaApp.controller('contactCtrl', function($scope) {
        
        $scope.contactDetails = {};

        $scope.update = function(user) {
            $scope.contactDetails = angular.copy(user);
        };

        $scope.reset = function(form) {
            if (form) {
                form.$setPristine();
                form.$setUntouched();
            }
            $scope.user = angular.copy($scope.contactDetails);
        };

        $scope.reset();

    });

    baguaApp.controller('classesCtrl', ['$scope', 'ClassesService', function($scope, ClassesService) {
       
        $scope.classes = ClassesService.getAllClasses();
        $scope.orderByField = 'name';
        $scope.reverseSort = false;

    }]);

    baguaApp.filter('durations', function() {
        
        return function(duration) {
            switch (duration) {
                case 1:
                    return '1 hour';
                case 2:
                    return '2 hours';
                case 3:
                    return 'Half day';
                case 4:
                    return 'Full day';
            }
        }

    });

    baguaApp.directive('contactbar', function() {

        var directive = {};
        directive.restrict = 'E';
        directive.templateUrl = '/partials/contact/contactBar.html';
        return directive;

    });

}());
