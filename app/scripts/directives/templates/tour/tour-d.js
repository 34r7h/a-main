'use strict';

/**
* @ngdoc directive
* @name alughaMain.directive:tour
* @description
* # tour
*/
angular.module('alughaMain')
.directive('tour', function ()
{
    return {
        templateUrl: 'scripts/directives/templates/tour/tour-d.html',
        
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