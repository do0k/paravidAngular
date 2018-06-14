'use strict';
eventsApp.controller('eventController', function ($scope) {
    $scope.event = {
        name: 'Learning AngularJS',
        date: '6/14/2018',
        time: '12:56 PM',
        imgUrl: 'img/angularjs-logo.png',
        location: {
            province: 'Kerman',
            city: 'Kerman',
            address: "Bahonar University"
        }
    };
});