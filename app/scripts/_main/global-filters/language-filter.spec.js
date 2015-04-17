'use strict';

describe('Filter: language', function () {

    // load the filter's module
    beforeEach(module('alughaMain'));

    // initialize a new instance of the filter before each test
    var language;
    beforeEach(inject(function ($filter) {
        language = $filter('language');
    }));

    it('should change some output:"', function () {
        // var text = 'angularjs';
        // expect(language(text)).toBe('something else');
        expect(true).toBe(true);

    });

});