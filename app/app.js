(function() {

    'use strict';

    var baguaApp = angular.module('baguaApp', ['ui.router', 'mm.foundation']);

    baguaApp.constant('VERSION', '0.1');

    baguaApp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/BaguaKungFuHome');
        $stateProvider
            .state('BaguaKungFuHome', {
                url: '/BaguaKungFuHome',
                templateUrl: 'partials/home/home.html',
                controller: 'homeCtrl',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - Home',
                    description: 'Bagua Zhang Kung Fu in Durban South Africa'
                }
            })
            .state('BaguaKungFuHistory', {
                url: '/BaguaKungFuHistory',
                templateUrl: 'partials/history/history.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - History',
                    description: 'This page provides history on the martial art of Bagua Zhang Kung Fu.'
                }
            })
            .state('BaguaKungFuTheory', {
                url: '/BaguaKungFuTheory',
                templateUrl: 'partials/theory/theory.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - Theory',
                    description: 'This page describes the theories contained within the martial art of Bagua Zhang Kung Fu.',
                }
            })
            .state('LionKungFu', {
                url: '/LionKungFu',
                templateUrl: 'partials/animalSystems/lion/lion.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - The Lion System',
                    description: 'This page describes the Lion system of the martial art of Bagua Zhang Kung Fu.'
                }
            })
            .state('SnakeKungFu', {
                url: '/SnakeKungFu',
                templateUrl: 'partials/animalSystems/snake/snake.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - The Snake System',
                    description: 'This page describes the Snake system of the martial art of Bagua Zhang Kung Fu.'
                }
            })
            .state('BearKungFu', {
                url: '/BearKungFu',
                templateUrl: 'partials/animalSystems/bear/bear.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - The Bear System',
                    description: 'This page describes the Bear system of the martial art of Bagua Zhang Kung Fu.'
                }
            })
            .state('DragonKungFu', {
                url: '/DragonKungFu',
                templateUrl: 'partials/animalSystems/dragon/dragon.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - The Dragon System',
                    description: 'This page describes the Dragon system of the martial art of Bagua Zhang Kung Fu.'
                }
            })
            .state('PhoenixKungFu', {
                url: '/PhoenixKungFu',
                templateUrl: 'partials/animalSystems/phoenix/phoenix.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - The Phoenix System',
                    description: 'This page describes the Phoenix system of the martial art of Bagua Zhang Kung Fu.'
                }
            })
            .state('RoosterKungFu', {
                url: '/RoosterKungFu',
                templateUrl: 'partials/animalSystems/rooster/rooster.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - The Rooster System',
                    description: 'This page describes the Rooster system of the martial art of Bagua Zhang Kung Fu.'
                }
            })
            .state('MonkeyKungFu', {
                url: '/MonkeyKungFu',
                templateUrl: 'partials/animalSystems/monkey/monkey.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - The Monkey System',
                    description: 'This page describes the Monkey system of the martial art of Bagua Zhang Kung Fu.'
                }
            })
            .state('UnicornKungFu', {
                url: '/UnicornKungFu',
                templateUrl: 'partials/animalSystems/unicorn/unicorn.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - The Unicorn System',
                    description: 'This page describes the Unicorn system of the martial art of Bagua Zhang Kung Fu.'
                }
            })
            .state('BaguaKungFuClasses', {
                url: '/BaguaKungFuClasses',
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
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - Contact',
                    description: 'This page provides contact information on Durban Bagua Zhang Kung Fu.'
                }
            })
            .state('Method', {
                url: '/Method',
                templateUrl: 'partials/method/method.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - Method',
                    description: 'This page provides nformation on the training methods of Durban Bagua Zhang Kung Fu.'
                }
            });

        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
    });

    baguaApp.service('ClassesDataService', function() {

      this.classes = [{
          name: 'Xing Yi Chuan & Muay Boran',
          description: 'In this class we focus upon the basics of Xing Yi Chuan & Muay Boran.',
          day: 'Wednesday',
          time: '17:00pm - 19:00pm',
          location:
          {
            address: '58 Gordon Road',
              suburb: 'Morningside',
              city: 'Durban',
              province: 'Kwa-zulu Natal'
          }
      },
      {
          name: 'Bagua Zhang',
          description: 'In this class we focus upon the basics of Bagua Zhang which include standing, striking, turning and changing. In addition, the weapon systems of Bagua Zhang will be studied.',
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

    baguaApp.service('QuotesDataService', function() {

        this.quotes = [{
            text: 'Everything flows, nothing stands still',
            author: 'Heraclitus of Ephesus'
        },
        {
            text: 'Practice, practice...all is coming',
            author: 'Sri K. Pattabhi Jois'
        },
        {
            text: 'It is difficult to understand the universe if you only study one planet',
            author: 'Miyamoto Musashi'
        },
        {
            text: 'Stop acting so small. You are the universe in ecstatic motion.',
            author: 'Rumi'
        },
        {
            text: 'It is better to live one day seeing the rise and fall of things than to live a hundred years without seeing anything.',
            author: 'Gautama Buddha'
        },
        {
            text: 'Everyone has been made for some particular work, and the desire for that work has been put in every heart.',
            author: 'Rumi'
        },
        {
            text: 'Everything that is made beautiful and fair and lovely is made for the eye of one who sees.',
            author: 'Rumi'
        },
        {
            text: 'Beauty surrounds us, but usually we need to be walking in a garden to know it.',
            author: 'Rumi'
        },
        {
            text: 'Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.',
            author: 'Sun Tzu'
        },
        {
            text: 'Be extremely subtle, even to the point of formlessness. Be extremely mysterious, even to the point of soundlessness. Thereby you can be the director of the opponents fate.',
            author: 'Sun Tzu'
        },
        {
            text: 'Pretend inferiority and encourage his arrogance.',
            author: 'Sun Tzu'
        },
        {
            text: 'Know thy self, know thy enemy. A thousand battles, a thousand victories.',
            author: 'Sun Tzu'
        },
        {
            text: 'He who knows when he can fight and when he cannot, will be victorious.',
            author: 'Sun Tzu'
        },
        {
            text: 'If you know the enemy and know yourself you need not fear the results of a hundred battles.',
            author: 'Sun Tzu'
        },
        {
            text: 'Life is a series of natural and spontaneous changes. Dont resist them - that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.',
            author: 'Lao Tzu'
        },
        {
            text: 'Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.',
            author: 'Lao Tzu'
        },
        {
            text: 'If you do not change direction, you may end up where you are heading.',
            author: 'Lao Tzu'
        },
        {
            text: 'To the mind that is still, the whole universe surrenders.',
            author: 'Lao Tzu'
        },
        {
            text: 'Silence is a source of great strength.',
            author: 'Lao Tzu'
        },
        {
            text: 'If you want to become full, let yourself be empty.',
            author: 'Tao Te Ching'
        },
        {
            text: 'If you want to be given everything, give everything up.',
            author: 'Tao Te Ching'
        },
        {
            text: 'When there is no desire, all things are at peace',
            author: 'Tao Te Ching'
        },
        {
            text: 'All things entail rising and falling timing. You must be able to discern this.',
            author: 'Miyamoto Musashi'
        },
        {
            text: 'Do nothing which is of no use.',
            author: 'Miyamoto Musashi'
        },
        {
            text: 'Perceive that which cannot be seen with the eye.',
            author: 'Miyamoto Musashi'
        }
        ];

    });

    baguaApp.service('QuotesService', function(QuotesDataService) {

        this.getRandomQuote = function() {
            var quotesLength = QuotesDataService.quotes.length;
            var randomItem = Math.floor((Math.random() * quotesLength));
            return QuotesDataService.quotes[randomItem];
        };

    });

    baguaApp.controller('appCtrl', ['$scope', function($scope) {

        $scope.showContactUs = function() {
            $scope.showContactUsBoolean = true;

            if (location.hash != '#/contact') {
                $scope.showContactUsBoolean = false;
            }
            return $scope.showContactUsBoolean;
        };

    }]);

    baguaApp.controller('homeCtrl', function($scope) {

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
        };

    });

    baguaApp.directive('title', ['$rootScope', '$timeout', 'QuotesService',

        function($rootScope, $timeout, QuotesService) {
            return {

                    link: function() {

                    var listener = function(event, toState) {

                        $timeout(function() {
                            $rootScope.title = (toState.data && toState.data.pageTitle) ? toState.data.pageTitle : 'Bagua Kung Fu Durban';
                            $rootScope.description = (toState.data && toState.data.description) ? toState.data.description : 'Bagua Kung Fu in Durban, South Africa';
                            $rootScope.quotes = QuotesService.getRandomQuote();
                        });
                    };

                    $rootScope.$on('$stateChangeSuccess', listener);
                }
            };
        }

    ]);

}());
