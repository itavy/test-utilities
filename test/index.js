'use strict';

const assert = require('assert');
const {
  expect,
  getChai,
  getSinon,
  getSinonSandbox,
  randomId,
  randomNumber,
} = require('../');

describe('Test Utils Exports', () => {
  it('getChai', (done) => {
    assert.ok(getChai instanceof Function, 'getChai is not a function');
    assert.ok(getChai() instanceof Object, 'getChai() is not an object');

    done();
  });

  it('Sinon', (done) => {
    assert.ok(getSinon instanceof Function, 'getSinon is not a function');
    assert.ok(getSinon() instanceof Object, 'getSinon() is not an object');

    done();
  });

  it('Sinon sandbox', (done) => {
    assert.ok(getSinonSandbox instanceof Function, 'getSinonSandbox is not a function');
    assert.ok(getSinonSandbox() instanceof Object, 'getSinonSandbox() is not an object');

    done();
  });

  it('Random string - default length', (done) => {
    const rndString = randomId();
    expect(rndString.length === 20).to.be.equal(true);
    expect(rndString).to.be.a('string');
    done();
  });

  it('Random string - provided length', (done) => {
    const rndString = randomId(13);
    expect(rndString.length === 13).to.be.equal(true);
    expect(rndString).to.be.a('string');
    done();
  });

  it('Random number - default min', (done) => {
    const n = randomNumber(1);
    expect(n).to.be.a('number');
    expect(n).to.be.equal(0);
    done();
  });

  it('Random number - provided min', (done) => {
    const n = randomNumber(10, 9);
    expect(n).to.be.a('number');
    expect(n).to.be.equal(9);
    done();
  });

  it('Random number - range', (done) => {
    const n = randomNumber(1000);
    expect(n).to.be.a('number');
    expect(n).to.be.gte(0);
    expect(n).to.be.lt(1000);
    done();
  });
});
