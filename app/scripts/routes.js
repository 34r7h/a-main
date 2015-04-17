/**
 * @ngdoc overview
 * @name alughaMain.routes
 * @description
 * # alughaMain.routes
 *
 * Routes module. All app states are defined here.
 */

angular.module('alughaMain')
    .config(function ($stateProvider)
    {
        'use strict';

        $stateProvider
            .state('alugha', {
                url: '',
                // if you choose the template option
                template: '<header></header><ui-view></ui-view><footer></footer>'
            })
            .state('alugha.terms', {
                url: '/terms',
                // if you choose the template option
                template: '<terms></terms>'
            })
            .state('alugha.pricing', {
                url: '/pricing',
                // if you choose the template option
                template: '<pricing></pricing>'
            })
            .state('alugha.press', {
                url: '/press',
                // if you choose the template option
                template: '<press></press>'
            })
            .state('alugha.jobs', {
                url: '/jobs',
                // if you choose the template option
                template: '<jobs></jobs>'
            })
            .state('alugha.meet', {
                url: '/meet-us',
                // if you choose the template option
                template: '<meet></meet>'
            })
            .state('alugha.admin', {
                url: '/admin',
                // if you choose the template option
                template: '<admin></admin>'
            })
            .state('alugha.tour', {
                url: '/tour',
                // if you choose the template option
                template: '<tour></tour>'
            })
            /* STATES-NEEDLE - DO NOT REMOVE THIS */;

    });
