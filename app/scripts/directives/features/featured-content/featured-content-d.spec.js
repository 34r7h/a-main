'use strict';

describe('Directive: featuredContent', function ()
{

    // load the directive's module
    beforeEach(module('alughaMain'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope)
    {
        scope = $rootScope.$new();
    }));

    it('should do something', inject(function ($compile)
    {
        element = $compile('<featured-content></featured-content>');
        expect(true).toBe(true);
    }));
});