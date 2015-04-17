'use strict';

/**
* @ngdoc directive
* @name alughaMain.directive:featuredContent
* @description
* # featuredContent
*/
angular.module('alughaMain')
.directive('featuredContent', function ()
{
    return {
        templateUrl: 'scripts/directives/features/featured-content/featured-content-d.html',
        
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