'use strict';

const testLib = require('../lib');

const assert = require('assert');

describe('Test Utils Exports', () => {
  it('Chai', (done) => {
    assert.ok(testLib.getChai instanceof Function, 'getChai is not a function');
    assert.ok(testLib.getChai() instanceof Object, 'getChai() is not an object');
    assert.ifError(testLib.getChai() instanceof Function);

    done();
  });

  it('Sinon', (done) => {
    assert.ok(testLib.getSinon instanceof Function, 'getSinon is not a function');
    assert.ok(testLib.getSinon() instanceof Object, 'getSinon() is not an object');
    assert.ifError(testLib.getSinon() instanceof Function);

    done();
  });

  it('Sinon sandbox', (done) => {
    assert.ok(testLib.getSinonSandbox instanceof Function, 'getSinonSandbox is not a function');
    assert.ok(testLib.getSinonSandbox() instanceof Object, 'getSinonSandbox() is not an object');
    assert.ifError(testLib.getSinon() instanceof Function);

    done();
  });
});
