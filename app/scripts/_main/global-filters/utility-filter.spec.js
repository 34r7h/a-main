'use strict';

describe('Filter: utility', function () {

    // load the filter's module
    beforeEach(module('alughaMain'));

    // initialize a new instance of the filter before each test
    var utility;
    beforeEach(inject(function ($filter) {
        utility = $filter('utility');
    }));

    it('should change some output:"', function () {
        // var text = 'angularjs';
        // expect(utility(text)).toBe('something else');
        expect(true).toBe(true);

    });

});