'use strict';

/**
* @ngdoc directive
* @name alughaMain.directive:subscribe
* @description
* # subscribe
*/
angular.module('alughaMain')
.directive('subscribe', function ()
{
    return {
        templateUrl: 'scripts/directives/general/subscribe/subscribe-d.html',
        
        restrict: 'EA',
        scope: {

        },
        link: function (scope, el, attrs)
        {

        },
        controller: function ($scope)
        {

        }
    };
});