'use strict';

/**
* @ngdoc directive
* @name alughaMain.directive:jobs
* @description
* # jobs
*/
angular.module('alughaMain')
.directive('jobs', function ()
{
    return {
        templateUrl: 'scripts/directives/templates/jobs/jobs-d.html',
        
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