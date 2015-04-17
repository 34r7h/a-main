'use strict';

/**
* @ngdoc directive
* @name alughaMain.directive:footer
* @description
* # footer
*/
angular.module('alughaMain')
.directive('footer', function ()
{
    return {
        templateUrl: 'scripts/directives/layout/footer/footer-d.html',
        
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