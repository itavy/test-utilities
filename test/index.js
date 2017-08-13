'use strict';

const testLib = require('../lib');

const assert = require('assert');

describe('Test Utils Exports', () => {
  it('Expect', (done) => {
    assert.ok(testLib.getExpect instanceof Function, 'getExpect is not a function');
    assert.ok(testLib.getExpect() instanceof Function, 'getExpect() is not a function');

    done();
  });

  it('Chai', (done) => {
    assert.ok(testLib.getChai instanceof Function, 'getChai is not a function');
    assert.ok(testLib.getChai() instanceof Object, 'getChai() is not an object');
    assert.ifError(testLib.getChai() instanceof Function);

    done();
  });

  it('Sinon', (done) => {
    assert.ok(testLib.getSinon instanceof Function, 'getSinon is not a function');
    assert.ok(testLib.getSinon() instanceof Object, 'getSinon is not a function');
    assert.ifError(testLib.getSinon() instanceof Function);

    done();
  });

  it('Tap', (done) => {
    assert.ok(testLib.getTap instanceof Function, 'getTap is not a function');
    assert.ok(testLib.getTap() instanceof Object, 'getTap is not a function');
    assert.ifError(testLib.getTap() instanceof Function);

    done();
  });
});
