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
                    pageTitle : 'Bagua Kung Fu Durban - Home'
                }
            })
            .state('history', {
                url: '/history',
                templateUrl: 'partials/history/history.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - History'
                }
            })
            .state('theory', {
                url: '/theory',
                templateUrl: 'partials/theory/theory.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - Theory'
                }
            })
            .state('theLion', {
                url: '/theLion',
                templateUrl: 'partials/animalSystems/lion/lion.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - The Lion System'
                }
            })
            .state('theSnake', {
                url: '/theSnake',
                templateUrl: 'partials/animalSystems/snake/snake.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - The Snake System'
                }
            })
            .state('theBear', {
                url: '/theBear',
                templateUrl: 'partials/animalSystems/bear/bear.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - The Bear System'
                }
            })
            .state('theDragon', {
                url: '/theDragon',
                templateUrl: 'partials/animalSystems/dragon/dragon.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - The Dragon System'
                }
            })
            .state('thePhoenix', {
                url: '/thePhoenix',
                templateUrl: 'partials/animalSystems/phoenix/phoenix.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - The Phoenix System'
                }
            })
            .state('theRooster', {
                url: '/theRooster',
                templateUrl: 'partials/animalSystems/rooster/rooster.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - The Rooster System'
                }
            })
            .state('theMonkey', {
                url: '/theMonkey',
                templateUrl: 'partials/animalSystems/monkey/monkey.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - The Monkey System'
                }
            })
            .state('theUnicorn', {
                url: '/theUnicorn',
                templateUrl: 'partials/animalSystems/unicorn/unicorn.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - The Unicorn System'
                }
            })
            .state('classes', {
                url: '/classes',
                templateUrl: 'partials/classes/classes.html',
                controller: 'classesCtrl',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - Classes'
                }
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'partials/contact/contact.html',
                controller: 'contactCtrl',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - Contact'
                }
            })    
            .state('curriculum', {
                url: '/curriculum',
                templateUrl: 'partials/curriculum/curriculum.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - Curriculum'
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

        $scope.showLionBody = function() {
            $scope.showLionBodyBoolean = false;
            if (location.hash == '#/contact') {
                $scope.showLionBodyBoolean = true;
            }
            return $scope.showLionBodyBoolean;
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

    baguaApp.directive('title', ['$rootScope', '$timeout',
    
    function($rootScope, $timeout) {
        return {
            
                link: function() {

                var listener = function(event, toState) {
                    
                    $timeout(function() {
                        $rootScope.title = (toState.data && toState.data.pageTitle) ? toState.data.pageTitle : 'Bagua Kung Fu Durban';
                    });
                };

                $rootScope.$on('$stateChangeSuccess', listener);
            }
        };
    }]);

}());
