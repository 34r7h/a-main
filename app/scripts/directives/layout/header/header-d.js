'use strict';

/**
* @ngdoc directive
* @name alughaMain.directive:header
* @description
* # header
*/
angular.module('alughaMain')
.directive('header', function ()
{
    return {
        templateUrl: 'scripts/directives/layout/header/header-d.html',
        
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