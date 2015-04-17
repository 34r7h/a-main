'use strict';

describe('Directive: terms', function ()
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
        element = $compile('<terms></terms>');
        expect(true).toBe(true);
    }));
});