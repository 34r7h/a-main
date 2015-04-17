'use strict';

/**
* @ngdoc directive
* @name alughaMain.directive:tweets
* @description
* # tweets
*/
angular.module('alughaMain')
.directive('tweets', function ()
{
    return {
        templateUrl: 'scripts/directives/general/tweets/tweets-d.html',
        
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