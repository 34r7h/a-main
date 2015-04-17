/**
 * @ngdoc filter
 * @name alughaMain.filter:language
 * @function
 * @description
 * # language
 * Filter in the alughaMain.
 */
angular.module('alughaMain')
    .filter('language', function ()
    {
        'use strict';

        return function (input)
        {
            return input;
        };
    });