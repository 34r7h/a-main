/**
 * @ngdoc overview
 * @name alughaMain
 * @description
 * # alughaMain
 *
 * Main module of the application.
 */
angular.module('alughaMain', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router'
  ]);

/**
 * @ngdoc overview
 * @name alughaMain.routes
 * @description
 * # alughaMain.routes
 *
 * Routes module. All app states are defined here.
 */

angular.module('alughaMain')
    .config(["$stateProvider", function ($stateProvider)
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

    }]);

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
/**
 * @ngdoc filter
 * @name alughaMain.filter:utility
 * @function
 * @description
 * # utility
 * Filter in the alughaMain.
 */
angular.module('alughaMain')
    .filter('utility', function ()
    {
        'use strict';

        return function (input)
        {
            return input;
        };
    });
/**
 * @ngdoc service
 * @name alughaMain.Api
 * @description
 * # Api
 * Service in the alughaMain.
 */
angular.module('alughaMain')
    .service('Api', function ()
    {
        'use strict';

        // AngularJS will instantiate a singleton by calling "new" on this function
    });
/**
 * @ngdoc service
 * @name alughaMain.Data
 * @description
 * # Data
 * Service in the alughaMain.
 */
angular.module('alughaMain')
    .service('Data', function ()
    {
        'use strict';

        // AngularJS will instantiate a singleton by calling "new" on this function
    });
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
        controller: ["$scope", function ($scope)
        {

        }]
    };
});
'use strict';

/**
* @ngdoc directive
* @name alughaMain.directive:subscribe
* @description
* # subscribe
*/
angular.module('alughaMain')
.directive('subscribe', function ()
{
    return {
        templateUrl: 'scripts/directives/general/subscribe/subscribe-d.html',
        
        restrict: 'EA',
        scope: {

        },
        link: function (scope, el, attrs)
        {

        },
        controller: ["$scope", function ($scope)
        {

        }]
    };
});
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
        controller: ["$scope", function ($scope)
        {

        }]
    };
});
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
        controller: ["$scope", function ($scope)
        {

        }]
    };
});
'use strict';

/**
* @ngdoc directive
* @name alughaMain.directive:benefits
* @description
* # benefits
*/
angular.module('alughaMain')
.directive('benefits', function ()
{
    return {
        templateUrl: 'scripts/directives/features/benefits/benefits-d.html',
        
        restrict: 'EA',
        scope: {

        },
        link: function (scope, el, attrs)
        {

        },
        controller: ["$scope", function ($scope)
        {

        }]
    };
});
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
        controller: ["$scope", function ($scope)
        {

        }]
    };
});
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
        controller: ["$scope", function ($scope)
        {

        }]
    };
});
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
        controller: ["$scope", function ($scope)
        {

        }]
    };
});
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
        controller: ["$scope", function ($scope)
        {

        }]
    };
});
'use strict';

/**
* @ngdoc directive
* @name alughaMain.directive:press
* @description
* # press
*/
angular.module('alughaMain')
.directive('press', function ()
{
    return {
        templateUrl: 'scripts/directives/templates/press/press-d.html',
        
        restrict: 'EA',
        scope: {

        },
        link: function (scope, el, attrs)
        {

        },
        controller: ["$scope", function ($scope)
        {

        }]
    };
});
'use strict';

/**
* @ngdoc directive
* @name alughaMain.directive:meet
* @description
* # meet
*/
angular.module('alughaMain')
.directive('meet', function ()
{
    return {
        templateUrl: 'scripts/directives/templates/meet/meet-d.html',
        
        restrict: 'EA',
        scope: {

        },
        link: function (scope, el, attrs)
        {

        },
        controller: ["$scope", function ($scope)
        {

        }]
    };
});
'use strict';

/**
* @ngdoc directive
* @name alughaMain.directive:pricing
* @description
* # pricing
*/
angular.module('alughaMain')
.directive('pricing', function ()
{
    return {
        templateUrl: 'scripts/directives/templates/pricing/pricing-d.html',
        
        restrict: 'EA',
        scope: {

        },
        link: function (scope, el, attrs)
        {

        },
        controller: ["$scope", function ($scope)
        {

        }]
    };
});
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
        controller: ["$scope", function ($scope)
        {

        }]
    };
});
'use strict';

/**
* @ngdoc directive
* @name alughaMain.directive:terms
* @description
* # terms
*/
angular.module('alughaMain')
.directive('terms', function ()
{
    return {
        templateUrl: 'scripts/directives/templates/terms/terms-d.html',
        
        restrict: 'EA',
        scope: {

        },
        link: function (scope, el, attrs)
        {

        },
        controller: ["$scope", function ($scope)
        {

        }]
    };
});