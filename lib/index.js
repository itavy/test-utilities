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

module.exports = {
  expect: getChai().expect,
  getChai,
  getSinon,
  getSinonSandbox,
};
