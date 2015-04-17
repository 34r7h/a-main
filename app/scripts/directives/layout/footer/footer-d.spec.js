'use strict';

describe('Directive: footer', function ()
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
        element = $compile('<footer></footer>');
        expect(true).toBe(true);
    }));
});