'use strict';

/**
* @ngdoc directive
* @name alughaMain.directive:login
* @description
* # login
*/
angular.module('alughaMain')
.directive('login', function ()
{
    return {
        templateUrl: 'scripts/directives/general/login/login-d.html',
        
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