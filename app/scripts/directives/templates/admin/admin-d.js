'use strict';

/**
* @ngdoc directive
* @name alughaMain.directive:admin
* @description
* # admin
*/
angular.module('alughaMain')
.directive('admin', function ()
{
    return {
        templateUrl: 'scripts/directives/templates/admin/admin-d.html',
        
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