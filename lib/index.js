'use strict';

/**
 * Chai assert library
 * @external chai
 * @see {@link http://chaijs.com/}
 */

/**
 * Chai promise assert library
 * @external chai-as-promised
 * @see {@link https://github.com/domenic/chai-as-promised}
 */

/**
 * Standalone and test framework agnostic JavaScript test spies, stubs and mocks
 * @external sinon
 * @see {@link https://github.com/sinonjs/sinon}
 */

/**
 * Tap testing library
 * @external tap
 * @see {@link http://www.node-tap.org/}
 */

const chaiLibrary = require('chai');
const chaiAsPromisedLib = require('chai-as-promised');
const sinonLibrary = require('sinon');
const { randomBytes } = require('crypto');

/**
 * Sinon stubs/mocks/spies etc.
 * @returns {external:sinon} sinon object for mocking/stubing/spying
 */
const getSinon = () => sinonLibrary;

/**
 * Sinon sandbox
 * @returns {external:sinon.sandbox} sinon sandbox object for mocking/stubing/spying
 */
const getSinonSandbox = () => sinonLibrary.sandbox.create();
/**
 * Chai with promise support library
 * @returns {external:chai-as-promised} chai with support library
 */
const getChai = () => {
  chaiLibrary.use(chaiAsPromisedLib);
  chaiLibrary.should();
  return chaiLibrary;
};

/**
 * Generate a random string of required length
 * @param {Number} length desired length
 * @returns {String} random string of requested length
 */
const randomId = (length = 20) => randomBytes(length).toString('hex').slice(length);

/**
 * Generate a random integer number higher or equal with min and lower than max
 * @param {Number} max upper limit
 * @param {Number} [min=0] lower limit
 * @returns {Number} random integer number
 */
const randomNumber = (max, min = 0) => {
  const lmin = Math.ceil(min);
  const lmax = Math.floor(max);
  return Math.floor(Math.random() * (lmax - lmin)) + lmin;
};

module.exports = {
  expect: getChai().expect,
  getChai,
  getSinon,
  getSinonSandbox,
  randomId,
  randomNumber,
};
