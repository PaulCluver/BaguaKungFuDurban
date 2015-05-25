(function() {

    'use strict';

    var baguaApp = angular.module('baguaApp', ['ui.router', 'mm.foundation', 'ngAnimate', 'ngTouch']);

    baguaApp.constant('VERSION', '0.1');

    baguaApp.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
        
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'partials/home/home.html',
                controller: 'homeCtrl',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - Home',
                    description: 'Bagua Zhang Kung ZhangFu Durban South Africa'
                }
            })
            .state('history', {
                url: '/history',
                templateUrl: 'partials/history/history.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - History',
                    description: 'This page provides history on the martial art of Bagua Zhang Kung Fu.'
                }
            })
            .state('theory', {
                url: '/theory',
                templateUrl: 'partials/theory/theory.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - Theory',
                    description: 'This page describes the theories contained within the martial art of Bagua Zhang Kung Fu.',
                }
            })
            .state('theLion', {
                url: '/theLion',
                templateUrl: 'partials/animalSystems/lion/lion.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - The Lion System',
                    description: 'This page describes the Lion system of the martial art of Bagua Zhang Kung Fu.'
                }
            })
            .state('theSnake', {
                url: '/theSnake',
                templateUrl: 'partials/animalSystems/snake/snake.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - The Snake System',
                    description: 'This page describes the Snake system of the martial art of Bagua Zhang Kung Fu.'
                }
            })
            .state('theBear', {
                url: '/theBear',
                templateUrl: 'partials/animalSystems/bear/bear.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - The Bear System',
                    description: 'This page describes the Bear system of the martial art of Bagua Zhang Kung Fu.'
                }
            })
            .state('theDragon', {
                url: '/theDragon',
                templateUrl: 'partials/animalSystems/dragon/dragon.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - The Dragon System',
                    description: 'This page describes the Dragon system of the martial art of Bagua Zhang Kung Fu.'
                }
            })
            .state('thePhoenix', {
                url: '/thePhoenix',
                templateUrl: 'partials/animalSystems/phoenix/phoenix.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - The Phoenix System',
                    description: 'This page describes the Phoenix system of the martial art of Bagua Zhang Kung Fu.'
                }
            })
            .state('theRooster', {
                url: '/theRooster',
                templateUrl: 'partials/animalSystems/rooster/rooster.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - The Rooster System',
                    description: 'This page describes the Rooster system of the martial art of Bagua Zhang Kung Fu.'
                }
            })
            .state('theMonkey', {
                url: '/theMonkey',
                templateUrl: 'partials/animalSystems/monkey/monkey.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - The Monkey System',
                    description: 'This page describes the Monkey system of the martial art of Bagua Zhang Kung Fu.'
                }
            })
            .state('theUnicorn', {
                url: '/theUnicorn',
                templateUrl: 'partials/animalSystems/unicorn/unicorn.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - The Unicorn System',
                    description: 'This page describes the Unicorn system of the martial art of Bagua Zhang Kung Fu.'
                }
            })
            .state('classes', {
                url: '/classes',
                templateUrl: 'partials/classes/classes.html',
                controller: 'classesCtrl',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - Classes',
                    description: 'This page provides class information on Durban Bagua Zhang Kung Fu.'
                }
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'partials/contact/contact.html',
                controller: 'contactCtrl',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - Contact',
                    description: 'This page provides contact information on Durban Bagua Zhang Kung Fu.'
                }
            })    
            .state('curriculum', {
                url: '/curriculum',
                templateUrl: 'partials/curriculum/curriculum.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - Curriculum',
                    description: 'This page provides curriculum information on the martial art of Bagua Zhang Kung Fu.'
                }
            })         
    });

    baguaApp.service('ClassesDataService', function() {
        
        this.classes = [{
            name: 'Bagua Basics',
            description: 'In this class we focus upon the basics of Bagua Zhang which include standing, striking, turning and changing',
            day: 'Tuesday',
            time: '18:15pm - 19:45pm',
            location: 
            {
                address: 'Positive Health, 5 Claribel Rd',
                suburb: 'Morningside',
                city: 'Durban',
                province: 'Kwa-zulu Natal'
            }
        }, 
        {
            name: 'Bagua Weapons',
            description: 'In this class we focus upon the weapon systems of Bagua Zhang which include sword, sabre, spear, staff and knives',
            day: 'Thursday',
            time: '17:00pm - 19:00pm',
            location: 
            {
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

        $scope.slides = [
            {image: 'assets/img/lion.jpg', description: 'Lion'},
            {image: 'assets/img/snake.jpg', description: 'Snake'},
            {image: 'assets/img/bear.jpg', description: 'Bear'},
            {image: 'assets/img/dragon.jpg', description: 'Dragon'},
            {image: 'assets/img/phoenix.jpg', description: 'Phoenix'},
            {image: 'assets/img/rooster.jpg', description: 'Rooster'},
            {image: 'assets/img/monkey.jpg', description: 'Monkey'},
            {image: 'assets/img/unicorn.jpg', description: 'Unicorn'}
        ];

        $scope.direction = 'left';
        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.direction = 'left';
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.direction = 'right';
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
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
                            $rootScope.description = (toState.data && toState.data.description) ? toState.data.description : 'Bagua Kung Fu in Durban, South Africa';
                        });
                    };

                    $rootScope.$on('$stateChangeSuccess', listener);
                }
            };
        }

    ]);

    baguaApp.animation('.slide-animation', function() {
        return {
            beforeAddClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    var finishPoint = element.parent().width();
                    if(scope.direction !== 'right') {
                        finishPoint = -finishPoint;
                    }
                    TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');

                    var startPoint = element.parent().width();
                    if(scope.direction === 'right') {
                        startPoint = -startPoint;
                    }

                    TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
                }
                else {
                    done();
                }
            }
        };
    });

}());
